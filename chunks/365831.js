n.d(t, { y: () => w }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    o = n(120356),
    l = n.n(o),
    a = n(401393),
    s = n(442837),
    c = n(481060),
    u = n(846027),
    d = n(110924),
    p = n(460181),
    m = n(131951),
    f = n(743498),
    b = n(56848),
    y = n(378441),
    g = n(388032),
    v = n(729159);
function O(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = (e) => 1 - Math.pow(1 - e, 4),
    x = {
        mass: 1,
        friction: 64,
        tension: 1000,
        clamp: !0,
    },
    P = {
        mass: 1,
        friction: 64,
        tension: 1000,
    },
    _ = {
        mass: 1,
        friction: 35,
        tension: 1000,
    };
function w(e) {
    var t;
    let {} = e,
        { activeVoice: n } = (0, y.o)(),
        o = (0, d.Z)(n),
        w = (0, b.z)(n),
        { toggleLoopback: C, isLoopbackEnabled: E } = (function () {
            let { activeVoice: e } = (0, y.o)(),
                t = (0, s.e7)([m.Z], () => m.Z.getVoiceFilterPlaybackEnabled()),
                n = i.useCallback(() => {
                    (0, p.GN)(t ? "voice_filter_loopback_off" : "voice_filter_loopback_on"), (0, f._j)(!t);
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
        })(),
        I = E ? c.Iy5 : c.X_q,
        S = i.useCallback(() => (0, f.v6)(null), []),
        T = (0, c.dQu)(c.TVs.colors.BACKGROUND_BASE_LOWER).hex(),
        N = (0, c.dQu)(c.TVs.colors.WHITE).hex(),
        D = i.useRef(0),
        Z = n !== o ? D.current + 1 : D.current;
    i.useEffect(() => {
        D.current = Z;
    }, [Z]);
    let k = null != n,
        M = !k,
        A = k && null != o,
        R = null == n && null != o,
        V = (0, c.q_F)(
            {
                opacity: +!!k,
                height: 72 * !!k,
                pointerEvents: k ? "auto" : "none",
                backgroundColor: null != (t = null == w ? void 0 : w.baseColor) ? t : T,
                config: (e) =>
                    "backgroundColor" === e
                        ? {
                              easing: h,
                              duration: 200,
                          }
                        : x,
                delay: 100 * !!A,
            },
            "respect-motion-settings",
        ),
        F = (0, c.Yzy)(
            null == w ? void 0 : w.id,
            {
                key: Z,
                from: {
                    opacity: 0,
                    background: null == w ? void 0 : w.splashGradient,
                },
                enter: {
                    opacity: 1,
                    delay: A ? 100 : 50,
                },
                leave: {
                    opacity: 0,
                    delay: A ? 100 : 150,
                },
                config: {
                    easing: h,
                    duration: A ? 250 : 200,
                },
            },
            "respect-motion-settings",
        ),
        [L] = (0, c.bYB)(
            2,
            (e) => ({
                from: A
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
                        : A
                          ? null
                          : {
                                translateY: 0,
                                opacity: 1,
                            },
                config: (e) =>
                    "opacity" === e
                        ? {
                              easing: h,
                              duration: 200,
                          }
                        : P,
                delay: R ? 50 - 50 * e : 200 + 50 * e,
            }),
            "respect-motion-settings",
            [n],
        ),
        U = (0, c.Yzy)(
            null == w ? void 0 : w.iconURL,
            {
                key: Z,
                from: {
                    opacity: 0,
                    scale: 80 / 88,
                    translateX: A ? -16 : 0,
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
                    delay: 150 * !A,
                },
                config: (e) =>
                    "opacity" === e
                        ? {
                              easing: h,
                              duration: 200,
                          }
                        : k
                          ? x
                          : _,
            },
            "respect-motion-settings",
        ),
        Y = (0, c.Yzy)(
            null == w ? void 0 : w.name,
            {
                key: Z,
                from: {
                    opacity: 0,
                    scale: A ? 0.9 : 1,
                    translateY: 16 * !A,
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
                                  easing: h,
                                  duration: 200,
                              }
                            : A
                              ? x
                              : P,
                },
                leave: {
                    opacity: 0,
                    translateX: 24 * (null != n),
                    translateY: 16 * (null == n),
                    delay: R ? 100 : 50,
                    config: (e) =>
                        "opacity" === e
                            ? {
                                  easing: h,
                                  duration: 200,
                              }
                            : A
                              ? x
                              : P,
                },
            },
            "respect-motion-settings",
        ),
        H = g.intl.string(E ? g.t.esVyo6 : g.t.UQqFCA);
    return (0, r.jsxs)(a.animated.div, {
        className: v.voiceFilterHero,
        "aria-hidden": M,
        style: V,
        children: [
            (0, r.jsx)("div", {
                className: l()([v.bgGradient, v.bgGradientHighlight]),
            }),
            F((e) =>
                (0, r.jsx)(a.animated.div, {
                    className: v.bgGradient,
                    style: e,
                }),
            ),
            (0, r.jsx)("div", {
                className: v.iconWrapper,
                children: U((e, t) =>
                    (0, r.jsx)(
                        a.animated.img,
                        {
                            className: v.activeVoiceIcon,
                            style: e,
                            alt: "",
                            src: t,
                        },
                        t,
                    ),
                ),
            }),
            (0, r.jsx)("div", {
                className: v.descriptionWrapper,
                children: Y((e, t) =>
                    (0, r.jsxs)(a.animated.div, {
                        className: v.description,
                        style: e,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "always-white",
                                className: v.offWhiteText,
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
                className: v.buttonWrapper,
                children: [
                    (0, r.jsx)(c.ua7, {
                        "aria-label": H,
                        tooltipClassName: v.tooltip,
                        tooltipContentClassName: v.tooltipContent,
                        shouldShow: k,
                        text: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(c.X6q, {
                                    variant: "heading-sm/normal",
                                    color: "header-primary",
                                    className: v.tooltipHeader,
                                    children: H,
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-muted",
                                    children: g.intl.string(E ? g.t.Sg6cfn : g.t.ZKhtw8),
                                }),
                            ],
                        }),
                        children: (e) =>
                            (0, r.jsx)(a.animated.div, {
                                className: v.buttonWrapper,
                                style: L[0],
                                children: (0, r.jsx)(
                                    c.P3F,
                                    j(
                                        O(
                                            {
                                                className: l()(v.button, { [v.loopbackEnabled]: E }),
                                                "aria-hidden": M,
                                                focusProps: { enabled: k },
                                                tabIndex: k ? 0 : -1,
                                            },
                                            e,
                                        ),
                                        {
                                            onClick: () => C(),
                                            children: (0, r.jsx)(I, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: N,
                                            }),
                                        },
                                    ),
                                ),
                            }),
                    }),
                    (0, r.jsx)(c.ua7, {
                        shouldShow: k,
                        text: g.intl.string(g.t.UvMx7O),
                        children: (e) =>
                            (0, r.jsx)(a.animated.div, {
                                className: v.buttonWrapper,
                                style: L[1],
                                children: (0, r.jsx)(
                                    c.P3F,
                                    j(
                                        O(
                                            {
                                                className: v.button,
                                                "aria-hidden": M,
                                                focusProps: { enabled: k },
                                                tabIndex: k ? 0 : -1,
                                            },
                                            e,
                                        ),
                                        {
                                            onClick: S,
                                            children: (0, r.jsx)(c.k$p, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: N,
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
