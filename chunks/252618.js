n.d(t, {
    EM: () => b,
    PR: () => g,
    Tt: () => O,
    ZD: () => N,
    yY: () => I
}),
    n(47120);
var r = n(192379),
    i = n(788347),
    o = n(372793),
    a = n(731965);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = { base: n(358085).isPlatformEmbedded ? void 0 : 'Discord' },
    f = 0,
    _ = {
        count: 3,
        onlyWhenBlurred: !1,
        interval: 1000
    },
    p = (0, o.F)(() => ({
        titles: [d],
        notificationCount: void 0,
        flashQueue: []
    }));
function h(e) {
    let t, n, r;
    for (let i of e.titles) {
        if (null != t && null != n) break;
        (t = null != t ? t : i.base), (n = null != n ? n : i.location), (r = null != r ? r : i.subsection);
    }
    return [t, r, n];
}
function m(e) {
    let { notificationCount: t } = e;
    return null == t || 0 === t ? '' : t < 0 ? '\u2022 ' : '('.concat(t, ') ');
}
function g(e) {
    (0, a.j)(() => p.setState({ notificationCount: e }));
}
function E(e) {
    return (
        (0, a.j)(() =>
            p.setState((t) => ({
                titles: [e, ...t.titles]
            }))
        ),
        () => {
            (0, a.j)(() => p.setState((t) => ({ titles: t.titles.filter((t) => t !== e) })));
        }
    );
}
function b(e) {
    let t = u(l({}, _, e), { id: f++ });
    return (
        (t.count = Math.max(t.count, t.messages.length)),
        p.setState((e) => ({
            flashQueue: [...e.flashQueue, t]
        })),
        () => y(t.id)
    );
}
function y(e) {
    p.setState((t) => ({ flashQueue: t.flashQueue.filter((t) => t.id !== e) }));
}
function v() {
    p.setState({ flashQueue: [] });
}
function O(e) {
    r.useEffect(() => E(e), [...Object.values(e)]);
}
function I(e) {
    return O(e), null;
}
function S() {
    let [e, t] = p((e) => {
            let { flashQueue: t } = e,
                n = h(e)
                    .filter((e) => null != e)
                    .join(' | '),
                r = m(e);
            return [''.concat(r).concat(n), t[0]];
        }, i.X),
        [n, o] = r.useState(!1),
        a = r.useRef(0),
        s = null == t ? void 0 : t.messages[a.current % t.messages.length];
    return (
        r.useEffect(() => {
            if (null == t) {
                (a.current = 0), o(!1);
                return;
            }
            if (document.hasFocus() && t.onlyWhenBlurred) {
                y(t.id), o(!1);
                return;
            }
            let e = setInterval(() => {
                if (a.current >= t.count) {
                    y(t.id), o(!1);
                    return;
                }
                o((e) => !e || ((a.current += 1), !1));
            }, t.interval);
            return () => clearInterval(e);
        }, [t]),
        n ? s : e
    );
}
function T() {
    r.useEffect(() => {
        function e() {
            v();
        }
        return document.addEventListener('focusin', e, { capture: !0 }), () => document.removeEventListener('focusin', e, { capture: !0 });
    }, []);
}
function N() {
    let { skipsSettingDefaultPageTitle: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    T();
    let t = S();
    r.useEffect(() => {
        let n = t === d.base;
        (e && n) || (document.title = t);
    }, [e, t]);
}
