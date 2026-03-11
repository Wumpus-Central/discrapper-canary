a.d(t, { A: () => g });
var n = a(627968),
    r = a(64700),
    s = a(503698),
    l = a.n(s),
    i = a(735438),
    d = a(230109),
    o = a(732955),
    c = a(397927),
    u = a(241524),
    m = a(303136),
    p = a(607470),
    f = a(954571),
    b = a(676279),
    A = a(23003),
    h = a(652215),
    _ = a(693591),
    R = a(150605);
let g = (e) => {
    let {
            name: t,
            title: a,
            description: s,
            descriptionCta: g,
            previewImage: x,
            videoUrl: E,
            shouldLoadVideo: C,
            index: N,
            customVideoStyle: v,
            isReducedMotion: I,
            onClick: S,
            badgeText: T,
            badgeVariant: P = "gradient",
            size: y,
            backgroundVideoUrl: D,
            previewImageStyle: O = A.Tb.CONTAINED,
            actions: j,
        } = e,
        U = (0, b.TM)(),
        L = r.useRef(null),
        M = r.useRef(0),
        w = r.useRef(null),
        B = r.useRef(!1),
        k = (0, u.A)("(min-width: 1140px)"),
        G = O === A.Tb.OVERLAY && (y !== A.A0.LARGE || !k),
        V = y === A.A0.LARGE && k && O === A.Tb.OVERLAY,
        Y = null != D && k && y === A.A0.LARGE,
        W = r.useMemo(
            () =>
                (0, i.debounce)(() => {
                    f.default.track(h.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, i.snakeCase)(t) });
                }, 800),
            [t],
        ),
        H = () => {
            null == L.current || I || ((L.current.currentTime = M.current), L.current.play());
        },
        F = () => {
            null == L.current || I || ((M.current = L.current.currentTime), L.current.pause());
        },
        K = y === A.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold",
        X = () => {
            let e = null != g && null != S,
                t = null != j && j.length > 0;
            if (!e && !t) return null;
            let a = e ? [{ variant: "secondary", onClick: S, text: g }] : j;
            return (0, n.jsx)("div", {
                className: R.bentoBoxButton,
                children: (0, n.jsx)(c.ButtonGroup, {
                    children: a?.map((e, t) => {
                        let { onClick: a, ...r } = e;
                        return (0, n.jsx)(
                            o.$nd,
                            {
                                ...r,
                                onClick: (e) => {
                                    W(), a?.(e);
                                },
                            },
                            t,
                        );
                    }),
                }),
            });
        },
        $ = () =>
            (0, n.jsxs)("div", {
                className: l()(R.textBox, R[`${y}`], V && R.overlayTextBox),
                children: [
                    (0, n.jsxs)("div", {
                        children: [
                            null == T
                                ? null
                                : "gradient" === P
                                  ? (0, n.jsx)("div", {
                                        className: R.badgeContainer,
                                        children: (0, n.jsx)("div", {
                                            className: R.badge,
                                            children: (0, n.jsx)(c.Heading, {
                                                variant: "eyebrow",
                                                color: "always-white",
                                                children: T,
                                            }),
                                        }),
                                    })
                                  : (0, n.jsx)("div", {
                                        className: R.badgeContainer,
                                        children: (0, n.jsx)(o.Exy, { type: { text: T }, variant: P }),
                                    }),
                            (0, n.jsx)(c.Heading, {
                                variant: K,
                                color: "text-strong",
                                className: R.header,
                                children: a,
                            }),
                        ],
                    }),
                    (0, n.jsx)(c.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: R.description,
                        children: s,
                    }),
                    (0, n.jsx)(X, {}),
                ],
            }),
        z = () =>
            (0, n.jsx)("div", {
                className: l()(R.boxArtContainer, R[`${y}`]),
                children: (0, n.jsx)(
                    p.A,
                    {
                        playsInline: !0,
                        preload: C ? "auto" : "none",
                        muted: !0,
                        poster: x,
                        loop: !0,
                        className: l()(V ? R.overlayImage : R.boxVideo, { [v]: null != v }),
                        ref: L,
                        children: (0, n.jsx)("source", { src: E, type: U ? _.a.MP4 : _.a.WEBM }),
                    },
                    E,
                ),
            }),
        J = N % 2 != 0;
    return (0, n.jsx)(d.L, {
        innerRef: w,
        onChange: (e) => {
            e &&
                !B.current &&
                ((B.current = !0),
                f.default.track(h.HAw.PREMIUM_MARKETING_BENTO_BOX_IMPRESSION, { box_type: (0, i.snakeCase)(t) }));
        },
        threshold: 0.5,
        children: (0, n.jsxs)(c.hLv, {
            ref: w,
            id: t,
            className: l()(
                R.backgroundColor,
                R.boxContainer,
                R[`${y}`],
                R.gradientBackground,
                G && R.overlayImageMode,
                V && R.overlayMode,
            ),
            onMouseEnter: H,
            onFocus: H,
            onBlur: F,
            onMouseLeave: F,
            color: "purple",
            children: [
                Y &&
                    (0, n.jsx)("div", {
                        className: R.backgroundVideoContainer,
                        children: (0, n.jsx)(m.A, {
                            preload: C ? "auto" : "none",
                            className: R.backgroundVideo,
                            src: D,
                        }),
                    }),
                (0, n.jsx)(
                    () =>
                        J
                            ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)($, {}), (0, n.jsx)(z, {})] })
                            : (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(z, {}), (0, n.jsx)($, {})] }),
                    {},
                ),
            ],
        }),
    });
};
