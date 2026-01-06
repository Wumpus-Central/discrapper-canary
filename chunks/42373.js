n.d(t, { Z: () => y }), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(159691),
    c = n(481060),
    u = n(131388),
    d = n(70097),
    f = n(626135),
    p = n(526167),
    _ = n(572995),
    m = n(981631),
    h = n(869783),
    g = n(538654);
let E = 1140,
    b = (e) => {
        let { descriptionCta: t, onClick: n, debouncedOnClickAnalytics: i } = e,
            a = () => {
                i(), n();
            };
        return (0, r.jsx)("div", {
            className: g.bentoBoxButton,
            children: (0, r.jsx)(l.zxk, {
                variant: "secondary",
                onClick: a,
                text: t,
            }),
        });
    },
    y = (e) => {
        let {
                name: t,
                title: n,
                description: a,
                descriptionCta: y,
                previewImage: O,
                videoUrl: v,
                shouldLoadVideo: S,
                index: I,
                customVideoStyle: T,
                isReducedMotion: C,
                onClick: A,
                badgeText: N,
                badgeVariant: P = "gradient",
                size: R,
                backgroundVideoUrl: w,
                previewImageStyle: D = _.P6.CONTAINED,
            } = e,
            x = (0, p.rO)(),
            L = i.useRef(null),
            j = i.useRef(0),
            M = (0, u.Z)("(min-width: ".concat(E, "px)")),
            k = D === _.P6.OVERLAY && (R !== _.y$.LARGE || !M),
            U = R === _.y$.LARGE && M && D === _.P6.OVERLAY,
            G = null != w && M && R === _.y$.LARGE,
            Z = i.useMemo(
                () =>
                    (0, s.debounce)(() => {
                        f.default.track(m.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, s.snakeCase)(t) });
                    }, 800),
                [t],
            ),
            F = () => {
                null == L.current || C || ((L.current.currentTime = j.current), L.current.play());
            },
            B = () => {
                null == L.current || C || ((j.current = L.current.currentTime), L.current.pause());
            },
            V = R === _.y$.LARGE ? "heading-xxl/bold" : "heading-xl/bold",
            H = () =>
                null == N
                    ? null
                    : "gradient" === P
                      ? (0, r.jsx)("div", {
                            className: g.badgeContainer,
                            children: (0, r.jsx)("div", {
                                className: g.badge,
                                children: (0, r.jsx)(c.Heading, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: N,
                                }),
                            }),
                        })
                      : (0, r.jsx)("div", {
                            className: g.badgeContainer,
                            children: (0, r.jsx)(l.Cts, {
                                type: { text: N },
                                variant: P,
                            }),
                        }),
            Y = () =>
                (0, r.jsxs)("div", {
                    className: o()(g.textBox, g["".concat(R)], U && g.overlayTextBox),
                    children: [
                        (0, r.jsxs)("div", {
                            children: [
                                H(),
                                (0, r.jsx)(c.Heading, {
                                    variant: V,
                                    color: "text-strong",
                                    className: g.header,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            className: g.description,
                            children: a,
                        }),
                        null != y &&
                            null != A &&
                            (0, r.jsx)(b, {
                                descriptionCta: y,
                                onClick: A,
                                debouncedOnClickAnalytics: Z,
                            }),
                    ],
                }),
            W = () =>
                (0, r.jsx)("div", {
                    className: o()(g.boxArtContainer, g["".concat(R)]),
                    children: (0, r.jsx)(
                        d.Z,
                        {
                            playsInline: !0,
                            preload: S ? "auto" : "none",
                            muted: !0,
                            poster: O,
                            loop: !0,
                            className: o()(U ? g.overlayImage : g.boxVideo, { [T]: null != T }),
                            ref: L,
                            children: (0, r.jsx)("source", {
                                src: v,
                                type: x ? h.m.MP4 : h.m.WEBM,
                            }),
                        },
                        v,
                    ),
                }),
            K = I % 2 != 0,
            z = () =>
                K
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(Y, {}), (0, r.jsx)(W, {})],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(W, {}), (0, r.jsx)(Y, {})],
                      });
        return (0, r.jsxs)(c.$1m, {
            className: o()(
                g.backgroundColor,
                g.boxContainer,
                g["".concat(R)],
                g.gradientBackground,
                k && g.overlayImageMode,
                U && g.overlayMode,
            ),
            onMouseEnter: F,
            onFocus: F,
            onBlur: B,
            onMouseLeave: B,
            color: "purple",
            children: [
                G &&
                    (0, r.jsx)("div", {
                        className: g.backgroundVideoContainer,
                        children: (0, r.jsx)(d.Z, {
                            muted: !0,
                            autoPlay: !C,
                            playsInline: !0,
                            loop: !0,
                            preload: S ? "auto" : "none",
                            className: g.backgroundVideo,
                            src: w,
                        }),
                    }),
                (0, r.jsx)(z, {}),
            ],
        });
    };
