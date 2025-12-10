n.d(t, {
    EM: () => b,
    PR: () => g,
    Tt: () => v,
    ZD: () => C,
    yY: () => S,
}),
    n(388685);
var r = n(473749),
    i = n(55160),
    a = n(748521),
    o = n(731965);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
let d = { base: n(358085).isPlatformEmbedded ? void 0 : "Discord" },
    f = 0,
    p = {
        count: 3,
        onlyWhenBlurred: !1,
        interval: 1000,
    },
    _ = (0, a.F)(() => ({
        titles: [d],
        notificationCount: void 0,
        flashQueue: [],
    }));
function m(e) {
    let t, n, r;
    for (let i of e.titles) {
        if (null != t && null != n) break;
        (t = null != t ? t : i.base), (n = null != n ? n : i.location), (r = null != r ? r : i.subsection);
    }
    return [t, r, n];
}
function h(e) {
    let { notificationCount: t } = e;
    return null == t || 0 === t ? "" : t < 0 ? "\u2022 " : "(".concat(t, ") ");
}
function g(e) {
    (0, o.j)(() => _.setState({ notificationCount: e }));
}
function E(e) {
    return (
        (0, o.j)(() =>
            _.setState((t) => ({
                titles: [e, ...t.titles],
            })),
        ),
        () => {
            (0, o.j)(() => _.setState((t) => ({ titles: t.titles.filter((t) => t !== e) })));
        }
    );
}
function b(e) {
    let t = u(l({}, p, e), { id: f++ });
    return (
        (t.count = Math.max(t.count, t.messages.length)),
        _.setState((e) => ({
            flashQueue: [...e.flashQueue, t],
        })),
        () => y(t.id)
    );
}
function y(e) {
    _.setState((t) => ({ flashQueue: t.flashQueue.filter((t) => t.id !== e) }));
}
function O() {
    _.setState({ flashQueue: [] });
}
function v(e) {
    r.useEffect(() => E(e), [...Object.values(e)]);
}
function S(e) {
    return v(e), null;
}
function I() {
    let [e, t] = _((e) => {
            let { flashQueue: t } = e,
                n = m(e)
                    .filter((e) => null != e)
                    .join(" | "),
                r = h(e);
            return ["".concat(r).concat(n), t[0]];
        }, i.X),
        [n, a] = r.useState(!1),
        o = r.useRef(0),
        s = null == t ? void 0 : t.messages[o.current % t.messages.length];
    return (
        r.useEffect(() => {
            if (null == t) {
                (o.current = 0), a(!1);
                return;
            }
            if (document.hasFocus() && t.onlyWhenBlurred) {
                y(t.id), a(!1);
                return;
            }
            let e = setInterval(() => {
                if (o.current >= t.count) {
                    y(t.id), a(!1);
                    return;
                }
                a((e) => !e || ((o.current += 1), !1));
            }, t.interval);
            return () => clearInterval(e);
        }, [t]),
        n ? s : e
    );
}
function T() {
    r.useEffect(() => {
        function e() {
            O();
        }
        return (
            document.addEventListener("focusin", e, { capture: !0 }),
            () => document.removeEventListener("focusin", e, { capture: !0 })
        );
    }, []);
}
function C() {
    let { skipsSettingDefaultPageTitle: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    T();
    let t = I();
    r.useEffect(() => {
        let n = t === d.base;
        (e && n) || (document.title = t);
    }, [e, t]);
}
