n.d(t, { A: () => C });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(735438),
    o = n(230109),
    c = n(732955),
    d = n(397927),
    u = n(241524),
    _ = n(607470),
    m = n(954571),
    A = n(676279),
    g = n(23003),
    h = n(652215),
    x = n(693591),
    p = n(678783);
let E = (e) => {
        let { descriptionCta: t, onClick: n, debouncedOnClickAnalytics: s } = e;
        return (0, i.jsx)("div", {
            className: p.bentoBoxButton,
            children: (0, i.jsx)(c.$nd, {
                variant: "secondary",
                onClick: () => {
                    s(), n();
                },
                text: t,
            }),
        });
    },
    C = (e) => {
        let {
                name: t,
                title: n,
                description: a,
                descriptionCta: C,
                previewImage: T,
                videoUrl: S,
                shouldLoadVideo: I,
                index: f,
                customVideoStyle: N,
                isReducedMotion: b,
                onClick: j,
                badgeText: v,
                badgeVariant: O = "gradient",
                size: R,
                backgroundVideoUrl: y,
                previewImageStyle: P = g.Tb.CONTAINED,
            } = e,
            L = (0, A.TM)(),
            D = s.useRef(null),
            M = s.useRef(0),
            G = s.useRef(null),
            U = s.useRef(!1),
            k = (0, u.A)("(min-width: 1140px)"),
            V = P === g.Tb.OVERLAY && (R !== g.A0.LARGE || !k),
            H = R === g.A0.LARGE && k && P === g.Tb.OVERLAY,
            w = null != y && k && R === g.A0.LARGE,
            B = s.useMemo(
                () =>
                    (0, r.debounce)(() => {
                        m.default.track(h.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, r.snakeCase)(t) });
                    }, 800),
                [t],
            ),
            Y = () => {
                null == D.current || b || ((D.current.currentTime = M.current), D.current.play());
            },
            F = () => {
                null == D.current || b || ((M.current = D.current.currentTime), D.current.pause());
            },
            z = R === g.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold",
            W = () =>
                (0, i.jsxs)("div", {
                    className: l()(p.textBox, p[`${R}`], H && p.overlayTextBox),
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                null == v
                                    ? null
                                    : "gradient" === O
                                      ? (0, i.jsx)("div", {
                                            className: p.badgeContainer,
                                            children: (0, i.jsx)("div", {
                                                className: p.badge,
                                                children: (0, i.jsx)(d.Heading, {
                                                    variant: "eyebrow",
                                                    color: "always-white",
                                                    children: v,
                                                }),
                                            }),
                                        })
                                      : (0, i.jsx)("div", {
                                            className: p.badgeContainer,
                                            children: (0, i.jsx)(c.Exy, { type: { text: v }, variant: O }),
                                        }),
                                (0, i.jsx)(d.Heading, {
                                    variant: z,
                                    color: "text-strong",
                                    className: p.header,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, i.jsx)(d.Text, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            className: p.description,
                            children: a,
                        }),
                        null != C &&
                            null != j &&
                            (0, i.jsx)(E, { descriptionCta: C, onClick: j, debouncedOnClickAnalytics: B }),
                    ],
                }),
            K = () =>
                (0, i.jsx)("div", {
                    className: l()(p.boxArtContainer, p[`${R}`]),
                    children: (0, i.jsx)(
                        _.A,
                        {
                            playsInline: !0,
                            preload: I ? "auto" : "none",
                            muted: !0,
                            poster: T,
                            loop: !0,
                            className: l()(H ? p.overlayImage : p.boxVideo, { [N]: null != N }),
                            ref: D,
                            children: (0, i.jsx)("source", { src: S, type: L ? x.a.MP4 : x.a.WEBM }),
                        },
                        S,
                    ),
                }),
            Z = f % 2 != 0;
        return (0, i.jsx)(o.L, {
            innerRef: G,
            onChange: (e) => {
                e &&
                    !U.current &&
                    ((U.current = !0),
                    m.default.track(h.HAw.PREMIUM_MARKETING_BENTO_BOX_IMPRESSION, { box_type: (0, r.snakeCase)(t) }));
            },
            threshold: 0.5,
            children: (0, i.jsxs)(d.hLv, {
                ref: G,
                id: t,
                className: l()(
                    p.backgroundColor,
                    p.boxContainer,
                    p[`${R}`],
                    p.gradientBackground,
                    V && p.overlayImageMode,
                    H && p.overlayMode,
                ),
                onMouseEnter: Y,
                onFocus: Y,
                onBlur: F,
                onMouseLeave: F,
                color: "purple",
                children: [
                    w &&
                        (0, i.jsx)("div", {
                            className: p.backgroundVideoContainer,
                            children: (0, i.jsx)(_.A, {
                                muted: !0,
                                autoPlay: !b,
                                playsInline: !0,
                                loop: !0,
                                preload: I ? "auto" : "none",
                                className: p.backgroundVideo,
                                src: y,
                            }),
                        }),
                    (0, i.jsx)(
                        () =>
                            Z
                                ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(W, {}), (0, i.jsx)(K, {})] })
                                : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(K, {}), (0, i.jsx)(W, {})] }),
                        {},
                    ),
                ],
            }),
        });
    };
