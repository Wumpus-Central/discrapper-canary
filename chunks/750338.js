n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(735438),
    o = n(230109),
    c = n(732955),
    d = n(397927),
    u = n(241524),
    _ = n(303136),
    m = n(607470),
    A = n(954571),
    g = n(676279),
    h = n(23003),
    x = n(652215),
    p = n(693591),
    E = n(150605);
let C = (e) => {
        let { descriptionCta: t, onClick: n, debouncedOnClickAnalytics: s } = e;
        return (0, i.jsx)("div", {
            className: E.bentoBoxButton,
            children: (0, i.jsx)(c.$nd, {
                variant: "secondary",
                onClick: () => {
                    s(), n();
                },
                text: t,
            }),
        });
    },
    T = (e) => {
        let {
                name: t,
                title: n,
                description: a,
                descriptionCta: T,
                previewImage: S,
                videoUrl: I,
                shouldLoadVideo: f,
                index: N,
                customVideoStyle: b,
                isReducedMotion: j,
                onClick: v,
                badgeText: O,
                badgeVariant: R = "gradient",
                size: y,
                backgroundVideoUrl: P,
                previewImageStyle: L = h.Tb.CONTAINED,
            } = e,
            D = (0, g.TM)(),
            M = s.useRef(null),
            G = s.useRef(0),
            U = s.useRef(null),
            k = s.useRef(!1),
            V = (0, u.A)("(min-width: 1140px)"),
            w = L === h.Tb.OVERLAY && (y !== h.A0.LARGE || !V),
            H = y === h.A0.LARGE && V && L === h.Tb.OVERLAY,
            B = null != P && V && y === h.A0.LARGE,
            Y = s.useMemo(
                () =>
                    (0, r.debounce)(() => {
                        A.default.track(x.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, r.snakeCase)(t) });
                    }, 800),
                [t],
            ),
            F = () => {
                null == M.current || j || ((M.current.currentTime = G.current), M.current.play());
            },
            z = () => {
                null == M.current || j || ((G.current = M.current.currentTime), M.current.pause());
            },
            W = y === h.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold",
            K = () =>
                (0, i.jsxs)("div", {
                    className: l()(E.textBox, E[`${y}`], H && E.overlayTextBox),
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                null == O
                                    ? null
                                    : "gradient" === R
                                      ? (0, i.jsx)("div", {
                                            className: E.badgeContainer,
                                            children: (0, i.jsx)("div", {
                                                className: E.badge,
                                                children: (0, i.jsx)(d.Heading, {
                                                    variant: "eyebrow",
                                                    color: "always-white",
                                                    children: O,
                                                }),
                                            }),
                                        })
                                      : (0, i.jsx)("div", {
                                            className: E.badgeContainer,
                                            children: (0, i.jsx)(c.Exy, { type: { text: O }, variant: R }),
                                        }),
                                (0, i.jsx)(d.Heading, {
                                    variant: W,
                                    color: "text-strong",
                                    className: E.header,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, i.jsx)(d.Text, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            className: E.description,
                            children: a,
                        }),
                        null != T &&
                            null != v &&
                            (0, i.jsx)(C, { descriptionCta: T, onClick: v, debouncedOnClickAnalytics: Y }),
                    ],
                }),
            Z = () =>
                (0, i.jsx)("div", {
                    className: l()(E.boxArtContainer, E[`${y}`]),
                    children: (0, i.jsx)(
                        m.A,
                        {
                            playsInline: !0,
                            preload: f ? "auto" : "none",
                            muted: !0,
                            poster: S,
                            loop: !0,
                            className: l()(H ? E.overlayImage : E.boxVideo, { [b]: null != b }),
                            ref: M,
                            children: (0, i.jsx)("source", { src: I, type: D ? p.a.MP4 : p.a.WEBM }),
                        },
                        I,
                    ),
                }),
            q = N % 2 != 0;
        return (0, i.jsx)(o.L, {
            innerRef: U,
            onChange: (e) => {
                e &&
                    !k.current &&
                    ((k.current = !0),
                    A.default.track(x.HAw.PREMIUM_MARKETING_BENTO_BOX_IMPRESSION, { box_type: (0, r.snakeCase)(t) }));
            },
            threshold: 0.5,
            children: (0, i.jsxs)(d.hLv, {
                ref: U,
                id: t,
                className: l()(
                    E.backgroundColor,
                    E.boxContainer,
                    E[`${y}`],
                    E.gradientBackground,
                    w && E.overlayImageMode,
                    H && E.overlayMode,
                ),
                onMouseEnter: F,
                onFocus: F,
                onBlur: z,
                onMouseLeave: z,
                color: "purple",
                children: [
                    B &&
                        (0, i.jsx)("div", {
                            className: E.backgroundVideoContainer,
                            children: (0, i.jsx)(_.A, {
                                preload: f ? "auto" : "none",
                                className: E.backgroundVideo,
                                src: P,
                            }),
                        }),
                    (0, i.jsx)(
                        () =>
                            q
                                ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(K, {}), (0, i.jsx)(Z, {})] })
                                : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(Z, {}), (0, i.jsx)(K, {})] }),
                        {},
                    ),
                ],
            }),
        });
    };
