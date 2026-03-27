n.d(t, { l: () => T });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(4208),
    o = n(311907),
    c = n(435371),
    d = n(397927),
    u = n(827343),
    h = n(475743),
    m = n(400492),
    A = n(430452),
    g = n(504292),
    p = n(774030),
    f = n(494783),
    _ = n(985018),
    E = n(345849);
let x = (e) => 1 - Math.pow(1 - e, 4),
    C = { mass: 1, friction: 64, tension: 1e3, clamp: !0 },
    S = { mass: 1, friction: 64, tension: 1e3 },
    I = { mass: 1, friction: 35, tension: 1e3 };
function T(e) {
    let {} = e,
        { activeVoice: t } = (0, f.f)(),
        n = (0, h.A)(t),
        s = (0, p.e)(t),
        { toggleLoopback: T, isLoopbackEnabled: N } = (function () {
            let { activeVoice: e } = (0, f.f)(),
                t = (0, o.bG)([A.Ay], () => A.Ay.getVoiceFilterPlaybackEnabled()),
                n = l.useCallback(() => {
                    (0, m.Ak)(t ? "voice_filter_loopback_off" : "voice_filter_loopback_on"), (0, g.K)(!t);
                }, [t]);
            return (
                l.useEffect(
                    () => (
                        u.A.setLoopback("voice_filter_preview", null != e && t),
                        () => {
                            u.A.setLoopback("voice_filter_preview", !1);
                        }
                    ),
                    [t, e],
                ),
                { isLoopbackEnabled: t, toggleLoopback: n }
            );
        })(),
        v = N ? d.GOW : d.uik,
        b = l.useCallback(() => (0, g.O)(null), []),
        y = (0, d.rdh)(d.LU0.colors.BACKGROUND_BASE_LOWER).hex(),
        j = (0, d.rdh)(d.LU0.colors.WHITE).hex(),
        R = l.useRef(0),
        M = t !== n ? R.current + 1 : R.current;
    l.useEffect(() => {
        R.current = M;
    }, [M]);
    let D = null != t,
        O = !D,
        L = D && null != n,
        P = null == t && null != n,
        w = (0, d.zhh)(
            {
                opacity: +!!D,
                height: 72 * !!D,
                pointerEvents: D ? "auto" : "none",
                backgroundColor: s?.baseColor ?? y,
                config: (e) => ("backgroundColor" === e ? { easing: x, duration: 200 } : C),
                delay: 100 * !!L,
            },
            "respect-motion-settings",
        ),
        k = (0, d.pnh)(
            s?.id,
            {
                key: M,
                from: { opacity: 0, background: s?.splashGradient },
                enter: { opacity: 1, delay: L ? 100 : 50 },
                leave: { opacity: 0, delay: L ? 100 : 150 },
                config: { easing: x, duration: L ? 250 : 200 },
            },
            "respect-motion-settings",
        ),
        [U] = (0, d.mX6)(
            2,
            (e) => ({
                from: L ? { translateY: 0, opacity: 1 } : { translateY: 16, opacity: 0 },
                to: null == t ? { translateY: 16, opacity: 0 } : L ? null : { translateY: 0, opacity: 1 },
                config: (e) => ("opacity" === e ? { easing: x, duration: 200 } : S),
                delay: P ? 50 - 50 * e : 200 + 50 * e,
            }),
            "respect-motion-settings",
            [t],
        ),
        G = (0, d.pnh)(
            s?.iconURL,
            {
                key: M,
                from: { opacity: 0, scale: 80 / 88, translateX: L ? -16 : 0 },
                enter: { opacity: 1, scale: 1, translateX: 0, delay: 50 },
                leave: { opacity: 0, scale: D ? 80 / 88 : 1, translateX: 24 * !!D, delay: 150 * !L },
                config: (e) => ("opacity" === e ? { easing: x, duration: 200 } : D ? C : I),
            },
            "respect-motion-settings",
        ),
        F = (0, d.pnh)(
            s?.name,
            {
                key: M,
                from: { opacity: 0, scale: L ? 0.9 : 1, translateY: 16 * !L },
                enter: {
                    opacity: 1,
                    scale: 1,
                    translateX: 0,
                    translateY: 0,
                    delay: 150,
                    config: (e) => ("opacity" === e ? { easing: x, duration: 200 } : L ? C : S),
                },
                leave: {
                    opacity: 0,
                    translateX: 24 * (null != t),
                    translateY: 16 * (null == t),
                    delay: P ? 100 : 50,
                    config: (e) => ("opacity" === e ? { easing: x, duration: 200 } : L ? C : S),
                },
            },
            "respect-motion-settings",
        ),
        H = _.intl.string(N ? _.t.esVyo6 : _.t.UQqFCF);
    return (0, i.jsxs)(r.animated.div, {
        className: E.TC,
        "aria-hidden": O,
        style: w,
        children: [
            (0, i.jsx)("div", { className: a()([E.ab, E.k]) }),
            k((e) => (0, i.jsx)(r.animated.div, { className: E.ab, style: e })),
            (0, i.jsx)("div", {
                className: E.P0,
                children: G((e, t) => (0, i.jsx)(r.animated.img, { className: E.w4, style: e, alt: "", src: t }, t)),
            }),
            (0, i.jsx)("div", {
                className: E.Wi,
                children: F((e, t) =>
                    (0, i.jsxs)(r.animated.div, {
                        className: E.h_,
                        style: e,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "always-white",
                                className: E.cf,
                                children: _.intl.string(_.t.WW5DAC),
                            }),
                            (0, i.jsx)(d.Text, {
                                variant: "text-md/medium",
                                color: "always-white",
                                children: null != t ? _.intl.string(t) : "",
                            }),
                        ],
                    }),
                ),
            }),
            (0, i.jsxs)("div", {
                className: E._o,
                children: [
                    (0, i.jsx)(c.m_, {
                        __unsupportedReactNodeAsText: (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(d.Heading, {
                                    variant: "heading-sm/normal",
                                    color: "text-strong",
                                    className: E.Rg,
                                    children: H,
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: _.intl.string(N ? _.t.Sg6cfm : _.t.ZKhtw0),
                                }),
                            ],
                        }),
                        shouldShow: D,
                        ariaHidden: !0,
                        children: (0, i.jsx)(r.animated.div, {
                            className: E._o,
                            style: U[0],
                            children: (0, i.jsx)(d.DUT, {
                                className: a()(E.x6, { [E.v3]: N }),
                                "aria-label": H,
                                "aria-hidden": O,
                                focusProps: { enabled: D },
                                tabIndex: D ? 0 : -1,
                                onClick: () => T(),
                                children: (0, i.jsx)(v, { size: "custom", width: 20, height: 20, color: j }),
                            }),
                        }),
                    }),
                    (0, i.jsx)(c.m_, {
                        shouldShow: D,
                        text: _.intl.string(_.t.UvMx7F),
                        children: (0, i.jsx)(r.animated.div, {
                            className: E._o,
                            style: U[1],
                            children: (0, i.jsx)(d.DUT, {
                                className: E.x6,
                                "aria-hidden": O,
                                focusProps: { enabled: D },
                                tabIndex: D ? 0 : -1,
                                onClick: b,
                                children: (0, i.jsx)(d.aXh, { size: "custom", width: 20, height: 20, color: j }),
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
