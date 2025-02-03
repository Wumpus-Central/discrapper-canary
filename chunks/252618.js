n.d(t, {
    EM: () => h,
    PR: () => _,
    Tt: () => E,
    ZD: () => b,
    yY: () => v
}),
    n(47120);
var i = n(192379),
    r = n(232713),
    a = n(65400),
    s = n(731965);
let o = { base: n(358085).isPlatformEmbedded ? void 0 : 'Discord' },
    l = 0,
    u = {
        count: 3,
        onlyWhenBlurred: !1,
        interval: 1000
    },
    c = (0, a.F)(() => ({
        titles: [o],
        notificationCount: void 0,
        flashQueue: []
    }));
function d(e) {
    let t, n, i;
    for (let r of e.titles) {
        if (null != t && null != n) break;
        (t = null != t ? t : r.base), (n = null != n ? n : r.location), (i = null != i ? i : r.subsection);
    }
    return [t, i, n];
}
function f(e) {
    let { notificationCount: t } = e;
    return null == t || 0 === t ? '' : t < 0 ? '\u2022 ' : '('.concat(t, ') ');
}
function _(e) {
    (0, s.j)(() => c.setState({ notificationCount: e }));
}
function p(e) {
    return (
        (0, s.j)(() =>
            c.setState((t) => ({
                titles: [e, ...t.titles]
            }))
        ),
        () => {
            (0, s.j)(() => c.setState((t) => ({ titles: t.titles.filter((t) => t !== e) })));
        }
    );
}
function h(e) {
    let t = {
        ...u,
        ...e,
        id: l++
    };
    return (
        (t.count = Math.max(t.count, t.messages.length)),
        c.setState((e) => ({
            flashQueue: [...e.flashQueue, t]
        })),
        () => m(t.id)
    );
}
function m(e) {
    c.setState((t) => ({ flashQueue: t.flashQueue.filter((t) => t.id !== e) }));
}
function g() {
    c.setState({ flashQueue: [] });
}
function E(e) {
    i.useEffect(() => p(e), [...Object.values(e)]);
}
function v(e) {
    return E(e), null;
}
function y() {
    let [e, t] = c((e) => {
            let { flashQueue: t } = e,
                n = d(e)
                    .filter((e) => null != e)
                    .join(' | '),
                i = f(e);
            return [''.concat(i).concat(n), t[0]];
        }, r.X),
        [n, a] = i.useState(!1),
        s = i.useRef(0),
        o = null == t ? void 0 : t.messages[s.current % t.messages.length];
    return (
        i.useEffect(() => {
            if (null == t) {
                (s.current = 0), a(!1);
                return;
            }
            if (document.hasFocus() && t.onlyWhenBlurred) {
                m(t.id), a(!1);
                return;
            }
            let e = setInterval(() => {
                if (s.current >= t.count) {
                    m(t.id), a(!1);
                    return;
                }
                a((e) => !e || ((s.current += 1), !1));
            }, t.interval);
            return () => clearInterval(e);
        }, [t]),
        n ? o : e
    );
}
function I() {
    i.useEffect(() => {
        function e() {
            g();
        }
        return document.addEventListener('focusin', e, { capture: !0 }), () => document.removeEventListener('focusin', e, { capture: !0 });
    }, []);
}
function b() {
    let { skipsSettingDefaultPageTitle: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    I();
    let t = y();
    i.useEffect(() => {
        let n = t === o.base;
        (!e || !n) && (document.title = t);
    }, [e, t]);
}
