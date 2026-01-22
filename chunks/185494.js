n.d(t, { l: () => x }), n(896048), n(228524);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(432022),
    o = n(311907),
    c = n(435371),
    u = n(397927),
    d = n(827343),
    f = n(475743),
    p = n(400492),
    b = n(430452),
    g = n(504292),
    m = n(774030),
    h = n(494783),
    A = n(985018),
    y = n(515316);
let _ = (e) => 1 - Math.pow(1 - e, 4),
    E = {
        mass: 1,
        friction: 64,
        tension: 1000,
        clamp: !0,
    },
    v = {
        mass: 1,
        friction: 64,
        tension: 1000,
    },
    O = {
        mass: 1,
        friction: 35,
        tension: 1000,
    };
function x(e) {
    var t;
    let {} = e,
        { activeVoice: n } = (0, h.f)(),
        i = (0, f.A)(n),
        x = (0, m.e)(n),
        { toggleLoopback: S, isLoopbackEnabled: N } = (function () {
            let { activeVoice: e } = (0, h.f)(),
                t = (0, o.bG)([b.A], () => b.A.getVoiceFilterPlaybackEnabled()),
                n = r.useCallback(() => {
                    (0, p.Ak)(t ? "voice_filter_loopback_off" : "voice_filter_loopback_on"), (0, g.KM)(!t);
                }, [t]);
            return (
                r.useEffect(
                    () => (
                        d.A.setLoopback("voice_filter_preview", null != e && t),
                        () => {
                            d.A.setLoopback("voice_filter_preview", !1);
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
        C = N ? u.GOW : u.uik,
        j = r.useCallback(() => (0, g.OR)(null), []),
        T = (0, u.rdh)(u.LU0.colors.BACKGROUND_BASE_LOWER).hex(),
        I = (0, u.rdh)(u.LU0.colors.WHITE).hex(),
        w = r.useRef(0),
        R = n !== i ? w.current + 1 : w.current;
    r.useEffect(() => {
        w.current = R;
    }, [R]);
    let P = null != n,
        D = !P,
        k = P && null != i,
        L = null == n && null != i,
        M = (0, u.zhh)(
            {
                opacity: +!!P,
                height: 72 * !!P,
                pointerEvents: P ? "auto" : "none",
                backgroundColor: null != (t = null == x ? void 0 : x.baseColor) ? t : T,
                config: (e) =>
                    "backgroundColor" === e
                        ? {
                              easing: _,
                              duration: 200,
                          }
                        : E,
                delay: 100 * !!k,
            },
            "respect-motion-settings",
        ),
        U = (0, u.pnh)(
            null == x ? void 0 : x.id,
            {
                key: R,
                from: {
                    opacity: 0,
                    background: null == x ? void 0 : x.splashGradient,
                },
                enter: {
                    opacity: 1,
                    delay: k ? 100 : 50,
                },
                leave: {
                    opacity: 0,
                    delay: k ? 100 : 150,
                },
                config: {
                    easing: _,
                    duration: k ? 250 : 200,
                },
            },
            "respect-motion-settings",
        ),
        [V] = (0, u.mX6)(
            2,
            (e) => ({
                from: k
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
                        : k
                          ? null
                          : {
                                translateY: 0,
                                opacity: 1,
                            },
                config: (e) =>
                    "opacity" === e
                        ? {
                              easing: _,
                              duration: 200,
                          }
                        : v,
                delay: L ? 50 - 50 * e : 200 + 50 * e,
            }),
            "respect-motion-settings",
            [n],
        ),
        F = (0, u.pnh)(
            null == x ? void 0 : x.iconURL,
            {
                key: R,
                from: {
                    opacity: 0,
                    scale: 80 / 88,
                    translateX: k ? -16 : 0,
                },
                enter: {
                    opacity: 1,
                    scale: 1,
                    translateX: 0,
                    delay: 50,
                },
                leave: {
                    opacity: 0,
                    scale: P ? 80 / 88 : 1,
                    translateX: 24 * !!P,
                    delay: 150 * !k,
                },
                config: (e) =>
                    "opacity" === e
                        ? {
                              easing: _,
                              duration: 200,
                          }
                        : P
                          ? E
                          : O,
            },
            "respect-motion-settings",
        ),
        G = (0, u.pnh)(
            null == x ? void 0 : x.name,
            {
                key: R,
                from: {
                    opacity: 0,
                    scale: k ? 0.9 : 1,
                    translateY: 16 * !k,
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
                                  easing: _,
                                  duration: 200,
                              }
                            : k
                              ? E
                              : v,
                },
                leave: {
                    opacity: 0,
                    translateX: 24 * (null != n),
                    translateY: 16 * (null == n),
                    delay: L ? 100 : 50,
                    config: (e) =>
                        "opacity" === e
                            ? {
                                  easing: _,
                                  duration: 200,
                              }
                            : k
                              ? E
                              : v,
                },
            },
            "respect-motion-settings",
        ),
        H = A.intl.string(N ? A.t.esVyo6 : A.t.UQqFCF);
    return (0, l.jsxs)(s.animated.div, {
        className: y.TC,
        "aria-hidden": D,
        style: M,
        children: [
            (0, l.jsx)("div", {
                className: a()([y.ab, y.k]),
            }),
            U((e) =>
                (0, l.jsx)(s.animated.div, {
                    className: y.ab,
                    style: e,
                }),
            ),
            (0, l.jsx)("div", {
                className: y.P0,
                children: F((e, t) =>
                    (0, l.jsx)(
                        s.animated.img,
                        {
                            className: y.w4,
                            style: e,
                            alt: "",
                            src: t,
                        },
                        t,
                    ),
                ),
            }),
            (0, l.jsx)("div", {
                className: y.Wi,
                children: G((e, t) =>
                    (0, l.jsxs)(s.animated.div, {
                        className: y.h_,
                        style: e,
                        children: [
                            (0, l.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "always-white",
                                className: y.cf,
                                children: A.intl.string(A.t.WW5DAC),
                            }),
                            (0, l.jsx)(u.Text, {
                                variant: "text-md/medium",
                                color: "always-white",
                                children: null != t ? A.intl.string(t) : "",
                            }),
                        ],
                    }),
                ),
            }),
            (0, l.jsxs)("div", {
                className: y._o,
                children: [
                    (0, l.jsx)(c.m_, {
                        __unsupportedReactNodeAsText: (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(u.Heading, {
                                    variant: "heading-sm/normal",
                                    color: "text-strong",
                                    className: y.Rg,
                                    children: H,
                                }),
                                (0, l.jsx)(u.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: A.intl.string(N ? A.t.Sg6cfm : A.t.ZKhtw0),
                                }),
                            ],
                        }),
                        shouldShow: P,
                        ariaHidden: !0,
                        children: (0, l.jsx)(s.animated.div, {
                            className: y._o,
                            style: V[0],
                            children: (0, l.jsx)(u.DUT, {
                                className: a()(y.x6, { [y.v3]: N }),
                                "aria-label": H,
                                "aria-hidden": D,
                                focusProps: { enabled: P },
                                tabIndex: P ? 0 : -1,
                                onClick: () => S(),
                                children: (0, l.jsx)(C, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: I,
                                }),
                            }),
                        }),
                    }),
                    (0, l.jsx)(c.m_, {
                        shouldShow: P,
                        text: A.intl.string(A.t.UvMx7F),
                        children: (0, l.jsx)(s.animated.div, {
                            className: y._o,
                            style: V[1],
                            children: (0, l.jsx)(u.DUT, {
                                className: y.x6,
                                "aria-hidden": D,
                                focusProps: { enabled: P },
                                tabIndex: P ? 0 : -1,
                                onClick: j,
                                children: (0, l.jsx)(u.aXh, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: I,
                                }),
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
