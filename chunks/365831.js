n.d(t, { y: () => P }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    o = n(120356),
    l = n.n(o),
    a = n(81239),
    s = n(442837),
    c = n(681715),
    u = n(481060),
    d = n(846027),
    p = n(110924),
    m = n(460181),
    f = n(131951),
    b = n(743498),
    g = n(56848),
    v = n(378441),
    y = n(388032),
    O = n(62530);
let j = (e) => 1 - Math.pow(1 - e, 4),
    h = {
        mass: 1,
        friction: 64,
        tension: 1000,
        clamp: !0,
    },
    x = {
        mass: 1,
        friction: 64,
        tension: 1000,
    },
    _ = {
        mass: 1,
        friction: 35,
        tension: 1000,
    };
function P(e) {
    var t;
    let {} = e,
        { activeVoice: n } = (0, v.o)(),
        o = (0, p.Z)(n),
        P = (0, g.z)(n),
        { toggleLoopback: C, isLoopbackEnabled: E } = (function () {
            let { activeVoice: e } = (0, v.o)(),
                t = (0, s.e7)([f.Z], () => f.Z.getVoiceFilterPlaybackEnabled()),
                n = i.useCallback(() => {
                    (0, m.GN)(t ? "voice_filter_loopback_off" : "voice_filter_loopback_on"), (0, b._j)(!t);
                }, [t]);
            return (
                i.useEffect(
                    () => (
                        d.Z.setLoopback("voice_filter_preview", null != e && t),
                        () => {
                            d.Z.setLoopback("voice_filter_preview", !1);
                        }
                    ),
                    [t, e],
                ),
                {
                    isLoopbackEnabled: t,
                    toggleLoopback: n,
                }
            );
        })(),
        w = E ? u.Iy5 : u.X_q,
        I = i.useCallback(() => (0, b.v6)(null), []),
        T = (0, u.dQu)(u.TVs.colors.BACKGROUND_BASE_LOWER).hex(),
        S = (0, u.dQu)(u.TVs.colors.WHITE).hex(),
        N = i.useRef(0),
        Z = n !== o ? N.current + 1 : N.current;
    i.useEffect(() => {
        N.current = Z;
    }, [Z]);
    let k = null != n,
        D = !k,
        M = k && null != o,
        A = null == n && null != o,
        R = (0, u.q_F)(
            {
                opacity: +!!k,
                height: 72 * !!k,
                pointerEvents: k ? "auto" : "none",
                backgroundColor: null != (t = null == P ? void 0 : P.baseColor) ? t : T,
                config: (e) =>
                    "backgroundColor" === e
                        ? {
                              easing: j,
                              duration: 200,
                          }
                        : h,
                delay: 100 * !!M,
            },
            "respect-motion-settings",
        ),
        L = (0, u.Yzy)(
            null == P ? void 0 : P.id,
            {
                key: Z,
                from: {
                    opacity: 0,
                    background: null == P ? void 0 : P.splashGradient,
                },
                enter: {
                    opacity: 1,
                    delay: M ? 100 : 50,
                },
                leave: {
                    opacity: 0,
                    delay: M ? 100 : 150,
                },
                config: {
                    easing: j,
                    duration: M ? 250 : 200,
                },
            },
            "respect-motion-settings",
        ),
        [V] = (0, u.bYB)(
            2,
            (e) => ({
                from: M
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
                        : M
                          ? null
                          : {
                                translateY: 0,
                                opacity: 1,
                            },
                config: (e) =>
                    "opacity" === e
                        ? {
                              easing: j,
                              duration: 200,
                          }
                        : x,
                delay: A ? 50 - 50 * e : 200 + 50 * e,
            }),
            "respect-motion-settings",
            [n],
        ),
        F = (0, u.Yzy)(
            null == P ? void 0 : P.iconURL,
            {
                key: Z,
                from: {
                    opacity: 0,
                    scale: 80 / 88,
                    translateX: M ? -16 : 0,
                },
                enter: {
                    opacity: 1,
                    scale: 1,
                    translateX: 0,
                    delay: 50,
                },
                leave: {
                    opacity: 0,
                    scale: k ? 80 / 88 : 1,
                    translateX: 24 * !!k,
                    delay: 150 * !M,
                },
                config: (e) =>
                    "opacity" === e
                        ? {
                              easing: j,
                              duration: 200,
                          }
                        : k
                          ? h
                          : _,
            },
            "respect-motion-settings",
        ),
        U = (0, u.Yzy)(
            null == P ? void 0 : P.name,
            {
                key: Z,
                from: {
                    opacity: 0,
                    scale: M ? 0.9 : 1,
                    translateY: 16 * !M,
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
                                  easing: j,
                                  duration: 200,
                              }
                            : M
                              ? h
                              : x,
                },
                leave: {
                    opacity: 0,
                    translateX: 24 * (null != n),
                    translateY: 16 * (null == n),
                    delay: A ? 100 : 50,
                    config: (e) =>
                        "opacity" === e
                            ? {
                                  easing: j,
                                  duration: 200,
                              }
                            : M
                              ? h
                              : x,
                },
            },
            "respect-motion-settings",
        ),
        Y = y.intl.string(E ? y.t.esVyo6 : y.t.UQqFCF);
    return (0, r.jsxs)(a.animated.div, {
        className: O.voiceFilterHero,
        "aria-hidden": D,
        style: R,
        children: [
            (0, r.jsx)("div", {
                className: l()([O.bgGradient, O.bgGradientHighlight]),
            }),
            L((e) =>
                (0, r.jsx)(a.animated.div, {
                    className: O.bgGradient,
                    style: e,
                }),
            ),
            (0, r.jsx)("div", {
                className: O.iconWrapper,
                children: F((e, t) =>
                    (0, r.jsx)(
                        a.animated.img,
                        {
                            className: O.activeVoiceIcon,
                            style: e,
                            alt: "",
                            src: t,
                        },
                        t,
                    ),
                ),
            }),
            (0, r.jsx)("div", {
                className: O.descriptionWrapper,
                children: U((e, t) =>
                    (0, r.jsxs)(a.animated.div, {
                        className: O.description,
                        style: e,
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "always-white",
                                className: O.offWhiteText,
                                children: y.intl.string(y.t.WW5DAC),
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-md/medium",
                                color: "always-white",
                                children: null != t ? y.intl.string(t) : "",
                            }),
                        ],
                    }),
                ),
            }),
            (0, r.jsxs)("div", {
                className: O.buttonWrapper,
                children: [
                    (0, r.jsx)(c.u, {
                        __unsupportedReactNodeAsText: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(u.Heading, {
                                    variant: "heading-sm/normal",
                                    color: "text-strong",
                                    className: O.tooltipHeader,
                                    children: Y,
                                }),
                                (0, r.jsx)(u.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: y.intl.string(E ? y.t.Sg6cfm : y.t.ZKhtw0),
                                }),
                            ],
                        }),
                        shouldShow: k,
                        ariaHidden: !0,
                        children: (0, r.jsx)(a.animated.div, {
                            className: O.buttonWrapper,
                            style: V[0],
                            children: (0, r.jsx)(u.P3F, {
                                className: l()(O.button, { [O.loopbackEnabled]: E }),
                                "aria-label": Y,
                                "aria-hidden": D,
                                focusProps: { enabled: k },
                                tabIndex: k ? 0 : -1,
                                onClick: () => C(),
                                children: (0, r.jsx)(w, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: S,
                                }),
                            }),
                        }),
                    }),
                    (0, r.jsx)(c.u, {
                        shouldShow: k,
                        text: y.intl.string(y.t.UvMx7F),
                        children: (0, r.jsx)(a.animated.div, {
                            className: O.buttonWrapper,
                            style: V[1],
                            children: (0, r.jsx)(u.P3F, {
                                className: O.button,
                                "aria-hidden": D,
                                focusProps: { enabled: k },
                                tabIndex: k ? 0 : -1,
                                onClick: I,
                                children: (0, r.jsx)(u.k$p, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: S,
                                }),
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
