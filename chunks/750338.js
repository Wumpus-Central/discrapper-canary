n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(735438),
    o = n(732955),
    c = n(397927),
    d = n(241524),
    u = n(607470),
    _ = n(954571),
    m = n(676279),
    A = n(23003),
    g = n(652215),
    h = n(693591),
    x = n(150605);
let p = (e) => {
        let { descriptionCta: t, onClick: n, debouncedOnClickAnalytics: s } = e;
        return (0, i.jsx)("div", {
            className: x.bentoBoxButton,
            children: (0, i.jsx)(o.$nd, {
                variant: "secondary",
                onClick: () => {
                    s(), n();
                },
                text: t,
            }),
        });
    },
    E = (e) => {
        let {
                name: t,
                title: n,
                description: a,
                descriptionCta: E,
                previewImage: C,
                videoUrl: T,
                shouldLoadVideo: S,
                index: I,
                customVideoStyle: f,
                isReducedMotion: N,
                onClick: b,
                badgeText: j,
                badgeVariant: v = "gradient",
                size: O,
                backgroundVideoUrl: R,
                previewImageStyle: y = A.Tb.CONTAINED,
            } = e,
            P = (0, m.TM)(),
            L = s.useRef(null),
            D = s.useRef(0),
            M = (0, d.A)("(min-width: 1140px)"),
            G = y === A.Tb.OVERLAY && (O !== A.A0.LARGE || !M),
            U = O === A.A0.LARGE && M && y === A.Tb.OVERLAY,
            k = null != R && M && O === A.A0.LARGE,
            V = s.useMemo(
                () =>
                    (0, r.debounce)(() => {
                        _.default.track(g.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, r.snakeCase)(t) });
                    }, 800),
                [t],
            ),
            H = () => {
                null == L.current || N || ((L.current.currentTime = D.current), L.current.play());
            },
            w = () => {
                null == L.current || N || ((D.current = L.current.currentTime), L.current.pause());
            },
            B = O === A.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold",
            Y = () =>
                (0, i.jsxs)("div", {
                    className: l()(x.textBox, x[`${O}`], U && x.overlayTextBox),
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                null == j
                                    ? null
                                    : "gradient" === v
                                      ? (0, i.jsx)("div", {
                                            className: x.badgeContainer,
                                            children: (0, i.jsx)("div", {
                                                className: x.badge,
                                                children: (0, i.jsx)(c.Heading, {
                                                    variant: "eyebrow",
                                                    color: "always-white",
                                                    children: j,
                                                }),
                                            }),
                                        })
                                      : (0, i.jsx)("div", {
                                            className: x.badgeContainer,
                                            children: (0, i.jsx)(o.Exy, { type: { text: j }, variant: v }),
                                        }),
                                (0, i.jsx)(c.Heading, {
                                    variant: B,
                                    color: "text-strong",
                                    className: x.header,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            className: x.description,
                            children: a,
                        }),
                        null != E &&
                            null != b &&
                            (0, i.jsx)(p, { descriptionCta: E, onClick: b, debouncedOnClickAnalytics: V }),
                    ],
                }),
            F = () =>
                (0, i.jsx)("div", {
                    className: l()(x.boxArtContainer, x[`${O}`]),
                    children: (0, i.jsx)(
                        u.A,
                        {
                            playsInline: !0,
                            preload: S ? "auto" : "none",
                            muted: !0,
                            poster: C,
                            loop: !0,
                            className: l()(U ? x.overlayImage : x.boxVideo, { [f]: null != f }),
                            ref: L,
                            children: (0, i.jsx)("source", { src: T, type: P ? h.a.MP4 : h.a.WEBM }),
                        },
                        T,
                    ),
                }),
            z = I % 2 != 0;
        return (0, i.jsxs)(c.hLv, {
            id: t,
            className: l()(
                x.backgroundColor,
                x.boxContainer,
                x[`${O}`],
                x.gradientBackground,
                G && x.overlayImageMode,
                U && x.overlayMode,
            ),
            onMouseEnter: H,
            onFocus: H,
            onBlur: w,
            onMouseLeave: w,
            color: "purple",
            children: [
                k &&
                    (0, i.jsx)("div", {
                        className: x.backgroundVideoContainer,
                        children: (0, i.jsx)(u.A, {
                            muted: !0,
                            autoPlay: !N,
                            playsInline: !0,
                            loop: !0,
                            preload: S ? "auto" : "none",
                            className: x.backgroundVideo,
                            src: R,
                        }),
                    }),
                (0, i.jsx)(
                    () =>
                        z
                            ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(Y, {}), (0, i.jsx)(F, {})] })
                            : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(F, {}), (0, i.jsx)(Y, {})] }),
                    {},
                ),
            ],
        });
    };
