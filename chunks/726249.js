n.d(t, {
    HI: () => v,
    HU: () => A,
    cu: () => T,
    iA: () => b,
    sF: () => g,
}),
    n(896048);
var r = n(64700),
    i = n(942381),
    a = n(265690),
    s = n(121894);

function o(e, t, n) {
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
                o(e, t, n[t]);
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
let d = {
        base: n(723702).isPlatformEmbedded ? void 0 : "Discord",
    },
    f = 0,
    p = {
        count: 3,
        onlyWhenBlurred: !1,
        interval: 1e3,
    },
    _ = (0, a.h)(() => ({
        titles: [d],
        notificationCount: void 0,
        flashQueue: [],
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
    return null == t || 0 === t ? "" : t < 0 ? "• " : "(".concat(t, ") ");
}

function g(e) {
    (0, s.r)(() =>
        _.setState({
            notificationCount: e,
        }),
    );
}

function E(e) {
    return (
        (0, s.r)(() =>
            _.setState((t) => ({
                titles: [e, ...t.titles],
            })),
        ),
        () => {
            (0, s.r)(() =>
                _.setState((t) => ({
                    titles: t.titles.filter((t) => t !== e),
                })),
            );
        }
    );
}

function b(e) {
    let t = u(l({}, p, e), {
        id: f++,
    });
    return (
        (t.count = Math.max(t.count, t.messages.length)),
        _.setState((e) => ({
            flashQueue: [...e.flashQueue, t],
        })),
        () => y(t.id)
    );
}

function y(e) {
    _.setState((t) => ({
        flashQueue: t.flashQueue.filter((t) => t.id !== e),
    }));
}

function O() {
    _.setState({
        flashQueue: [],
    });
}

function A(e) {
    r.useEffect(() => E(e), [...Object.values(e)]);
}

function v(e) {
    return A(e), null;
}

function S() {
    let [e, t] = _((e) => {
            let { flashQueue: t } = e,
                n = h(e)
                    .filter((e) => null != e)
                    .join(" | "),
                r = m(e);
            return ["".concat(r).concat(n), t[0]];
        }, i.x),
        [n, a] = r.useState(!1),
        s = r.useRef(0),
        o = null == t ? void 0 : t.messages[s.current % t.messages.length];
    return (
        r.useEffect(() => {
            if (null == t) {
                (s.current = 0), a(!1);
                return;
            }
            if (document.hasFocus() && t.onlyWhenBlurred) {
                y(t.id), a(!1);
                return;
            }
            let e = setInterval(() => {
                if (s.current >= t.count) {
                    y(t.id), a(!1);
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
    r.useEffect(() => {
        function e() {
            O();
        }
        return (
            document.addEventListener("focusin", e, {
                capture: !0,
            }),
            () =>
                document.removeEventListener("focusin", e, {
                    capture: !0,
                })
        );
    }, []);
}

function T() {
    let { skipsSettingDefaultPageTitle: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    I();
    let t = S();
    r.useEffect(() => {
        let n = t === d.base;
        (e && n) || (document.title = t);
    }, [e, t]);
}
