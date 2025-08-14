n.d(t, { y: () => C }), n(388685), n(953529);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(717976),
    l = n(442837),
    c = n(481060),
    u = n(846027),
    d = n(110924),
    f = n(460181),
    _ = n(131951),
    p = n(743498),
    h = n(56848),
    m = n(378441),
    g = n(388032),
    E = n(395760);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = (e) => 1 - Math.pow(1 - e, 4),
    T = {
        mass: 1,
        friction: 64,
        tension: 1000,
        clamp: !0,
    },
    S = {
        mass: 1,
        friction: 64,
        tension: 1000,
    },
    A = {
        mass: 1,
        friction: 35,
        tension: 1000,
    };
function N() {
    let { activeVoice: e } = (0, m.o)(),
        t = (0, l.e7)([_.Z], () => _.Z.getVoiceFilterPlaybackEnabled()),
        n = i.useCallback(() => {
            (0, f.GN)(t ? "voice_filter_loopback_off" : "voice_filter_loopback_on"), (0, p._j)(!t);
        }, [t]);
    return (
        i.useEffect(
            () => (
                u.Z.setLoopback("voice_filter_preview", null != e && t),
                () => {
                    u.Z.setLoopback("voice_filter_preview", !1);
                }
            ),
            [t, e],
        ),
        {
            isLoopbackEnabled: t,
            toggleLoopback: n,
        }
    );
}
function C(e) {
    var t;
    let {} = e,
        { activeVoice: n } = (0, m.o)(),
        o = (0, d.Z)(n),
        l = (0, h.z)(n),
        { toggleLoopback: u, isLoopbackEnabled: f } = N(),
        _ = f ? c.Iy5 : c.X_q,
        b = i.useCallback(() => (0, p.v6)(null), []),
        O = (0, c.dQu)(c.TVs.colors.BACKGROUND_BASE_LOWER).hex(),
        C = (0, c.dQu)(c.TVs.colors.WHITE).hex(),
        R = i.useRef(0),
        P = n !== o ? R.current + 1 : R.current;
    i.useEffect(() => {
        R.current = P;
    }, [P]);
    let w = null != n,
        D = !w,
        L = w && null != o,
        x = null == n && null != o,
        M = (0, c.q_F)(
            {
                opacity: +!!w,
                height: 72 * !!w,
                pointerEvents: w ? "auto" : "none",
                backgroundColor: null != (t = null == l ? void 0 : l.baseColor) ? t : O,
                config: (e) =>
                    "backgroundColor" === e
                        ? {
                              easing: I,
                              duration: 200,
                          }
                        : T,
                delay: 100 * !!L,
            },
            "respect-motion-settings",
        ),
        j = (0, c.Yzy)(
            null == l ? void 0 : l.id,
            {
                key: P,
                from: {
                    opacity: 0,
                    background: null == l ? void 0 : l.splashGradient,
                },
                enter: {
                    opacity: 1,
                    delay: L ? 100 : 50,
                },
                leave: {
                    opacity: 0,
                    delay: L ? 100 : 150,
                },
                config: {
                    easing: I,
                    duration: L ? 250 : 200,
                },
            },
            "respect-motion-settings",
        ),
        [k] = (0, c.bYB)(
            2,
            (e) => ({
                from: L
                    ? {
                          translateY: 0,
                          opacity: 1,
                      }
                    : {
                          translateY: 16,
                          opacity: 0,
                      },
                to:
                    null == n
                        ? {
                              translateY: 16,
                              opacity: 0,
                          }
                        : L
                          ? null
                          : {
                                translateY: 0,
                                opacity: 1,
                            },
                config: (e) =>
                    "opacity" === e
                        ? {
                              easing: I,
                              duration: 200,
                          }
                        : S,
                delay: x ? 50 - 50 * e : 200 + 50 * e,
            }),
            "respect-motion-settings",
            [n],
        ),
        U = (0, c.Yzy)(
            null == l ? void 0 : l.iconURL,
            {
                key: P,
                from: {
                    opacity: 0,
                    scale: 80 / 88,
                    translateX: L ? -16 : 0,
                },
                enter: {
                    opacity: 1,
                    scale: 1,
                    translateX: 0,
                    delay: 50,
                },
                leave: {
                    opacity: 0,
                    scale: w ? 80 / 88 : 1,
                    translateX: 24 * !!w,
                    delay: 150 * !L,
                },
                config: (e) =>
                    "opacity" === e
                        ? {
                              easing: I,
                              duration: 200,
                          }
                        : w
                          ? T
                          : A,
            },
            "respect-motion-settings",
        ),
        G = (0, c.Yzy)(
            null == l ? void 0 : l.name,
            {
                key: P,
                from: {
                    opacity: 0,
                    scale: L ? 0.9 : 1,
                    translateY: 16 * !L,
                },
                enter: {
                    opacity: 1,
                    scale: 1,
                    translateX: 0,
                    translateY: 0,
                    delay: 150,
                    config: (e) =>
                        "opacity" === e
                            ? {
                                  easing: I,
                                  duration: 200,
                              }
                            : L
                              ? T
                              : S,
                },
                leave: {
                    opacity: 0,
                    translateX: 24 * (null != n),
                    translateY: 16 * (null == n),
                    delay: x ? 100 : 50,
                    config: (e) =>
                        "opacity" === e
                            ? {
                                  easing: I,
                                  duration: 200,
                              }
                            : L
                              ? T
                              : S,
                },
            },
            "respect-motion-settings",
        ),
        B = g.intl.string(f ? g.t.esVyo6 : g.t.UQqFCA);
    return (0, r.jsxs)(s.animated.div, {
        className: E.voiceFilterHero,
        "aria-hidden": D,
        style: M,
        children: [
            (0, r.jsx)("div", {
                className: a()([E.bgGradient, E.bgGradientHighlight]),
            }),
            j((e) =>
                (0, r.jsx)(s.animated.div, {
                    className: E.bgGradient,
                    style: e,
                }),
            ),
            (0, r.jsx)("div", {
                className: E.iconWrapper,
                children: U((e, t) =>
                    (0, r.jsx)(
                        s.animated.img,
                        {
                            className: E.activeVoiceIcon,
                            style: e,
                            alt: "",
                            src: t,
                        },
                        t,
                    ),
                ),
            }),
            (0, r.jsx)("div", {
                className: E.descriptionWrapper,
                children: G((e, t) =>
                    (0, r.jsxs)(s.animated.div, {
                        className: E.description,
                        style: e,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "always-white",
                                className: E.offWhiteText,
                                children: g.intl.string(g.t.WW5DAA),
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-md/medium",
                                color: "always-white",
                                children: null != t ? g.intl.string(t) : "",
                            }),
                        ],
                    }),
                ),
            }),
            (0, r.jsxs)("div", {
                className: E.buttonWrapper,
                children: [
                    (0, r.jsx)(c.ua7, {
                        "aria-label": B,
                        tooltipClassName: E.tooltip,
                        tooltipContentClassName: E.tooltipContent,
                        shouldShow: w,
                        text: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(c.X6q, {
                                    variant: "heading-sm/normal",
                                    color: "header-primary",
                                    className: E.tooltipHeader,
                                    children: B,
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-muted",
                                    children: g.intl.string(f ? g.t.Sg6cfn : g.t.ZKhtw8),
                                }),
                            ],
                        }),
                        children: (e) =>
                            (0, r.jsx)(s.animated.div, {
                                className: E.buttonWrapper,
                                style: k[0],
                                children: (0, r.jsx)(
                                    c.P3F,
                                    v(
                                        y(
                                            {
                                                className: a()(E.button, { [E.loopbackEnabled]: f }),
                                                "aria-hidden": D,
                                                focusProps: { enabled: w },
                                                tabIndex: w ? 0 : -1,
                                            },
                                            e,
                                        ),
                                        {
                                            onClick: () => u(),
                                            children: (0, r.jsx)(_, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: C,
                                            }),
                                        },
                                    ),
                                ),
                            }),
                    }),
                    (0, r.jsx)(c.ua7, {
                        shouldShow: w,
                        text: g.intl.string(g.t.UvMx7O),
                        children: (e) =>
                            (0, r.jsx)(s.animated.div, {
                                className: E.buttonWrapper,
                                style: k[1],
                                children: (0, r.jsx)(
                                    c.P3F,
                                    v(
                                        y(
                                            {
                                                className: E.button,
                                                "aria-hidden": D,
                                                focusProps: { enabled: w },
                                                tabIndex: w ? 0 : -1,
                                            },
                                            e,
                                        ),
                                        {
                                            onClick: b,
                                            children: (0, r.jsx)(c.k$p, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: C,
                                            }),
                                        },
                                    ),
                                ),
                            }),
                    }),
                ],
            }),
        ],
    });
}
