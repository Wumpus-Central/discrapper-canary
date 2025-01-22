r.d(n, {
    EM: function () {
        return g;
    },
    PR: function () {
        return _;
    },
    Tt: function () {
        return y;
    },
    ZD: function () {
        return S;
    },
    yY: function () {
        return b;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(232713),
    s = r(65400),
    l = r(731965);
let u = { base: r(358085).isPlatformEmbedded ? void 0 : 'Discord' },
    c = 0,
    d = {
        count: 3,
        onlyWhenBlurred: !1,
        interval: 1000
    },
    f = (0, s.F)(() => ({
        titles: [u],
        notificationCount: void 0,
        flashQueue: []
    }));
function p(e) {
    let n, r, i;
    for (let a of e.titles) {
        if (null != n && null != r) break;
        (n = null != n ? n : a.base), (r = null != r ? r : a.location), (i = null != i ? i : a.subsection);
    }
    return [n, i, r];
}
function h(e) {
    let { notificationCount: n } = e;
    return null == n || 0 === n ? '' : n < 0 ? '\u2022 ' : '('.concat(n, ') ');
}
function _(e) {
    (0, l.j)(() => f.setState({ notificationCount: e }));
}
function m(e) {
    return (
        (0, l.j)(() =>
            f.setState((n) => ({
                titles: [e, ...n.titles]
            }))
        ),
        () => {
            (0, l.j)(() => f.setState((n) => ({ titles: n.titles.filter((n) => n !== e) })));
        }
    );
}
function g(e) {
    let n = {
        ...d,
        ...e,
        id: c++
    };
    return (
        (n.count = Math.max(n.count, n.messages.length)),
        f.setState((e) => ({
            flashQueue: [...e.flashQueue, n]
        })),
        () => E(n.id)
    );
}
function E(e) {
    f.setState((n) => ({ flashQueue: n.flashQueue.filter((n) => n.id !== e) }));
}
function v() {
    f.setState({ flashQueue: [] });
}
function y(e) {
    a.useEffect(() => m(e), [...Object.values(e)]);
}
function b(e) {
    return y(e), null;
}
function I() {
    let [e, n] = f((e) => {
            let { flashQueue: n } = e,
                r = p(e)
                    .filter((e) => null != e)
                    .join(' | '),
                i = h(e);
            return [''.concat(i).concat(r), n[0]];
        }, o.X),
        [r, i] = a.useState(!1),
        s = a.useRef(0),
        l = null == n ? void 0 : n.messages[s.current % n.messages.length];
    return (
        a.useEffect(() => {
            if (null == n) {
                (s.current = 0), i(!1);
                return;
            }
            if (document.hasFocus() && n.onlyWhenBlurred) {
                E(n.id), i(!1);
                return;
            }
            let e = setInterval(() => {
                if (s.current >= n.count) {
                    E(n.id), i(!1);
                    return;
                }
                i((e) => !e || ((s.current += 1), !1));
            }, n.interval);
            return () => clearInterval(e);
        }, [n]),
        r ? l : e
    );
}
function T() {
    a.useEffect(() => {
        function e() {
            v();
        }
        return document.addEventListener('focusin', e, { capture: !0 }), () => document.removeEventListener('focusin', e, { capture: !0 });
    }, []);
}
function S() {
    let { skipsSettingDefaultPageTitle: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    T();
    let n = I();
    a.useEffect(() => {
        let r = n === u.base;
        if (!e || !r) document.title = n;
    }, [e, n]);
}
