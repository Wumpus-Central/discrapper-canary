var a = n(477900),
    s = n(582128),
    i = n(503698),
    r = n.n(i),
    l = n(435558),
    d = n(831259),
    c = n(805251),
    o = n(821609),
    u = n(745396),
    m = n(834730),
    b = n(534514),
    p = n(825484),
    f = n(315629),
    h = n(241524),
    N = n(303136),
    E = n(607470),
    g = n(129230),
    x = n(676279),
    R = n(406860),
    A = n(382031),
    _ = n(652215),
    v = n(693591),
    P = n(505051);
n.d(
    t,
    {},
    {
        A: (e) => {
            let {
                    name: t,
                    title: n,
                    caption: i,
                    description: I,
                    descriptionCta: O,
                    previewImage: C,
                    videoUrl: T,
                    shouldLoadVideo: M,
                    index: j,
                    customVideoStyle: U,
                    isReducedMotion: y,
                    onClick: S,
                    badgeText: L,
                    badgeVariant: B = "gradient",
                    size: k,
                    backgroundVideoUrl: G,
                    previewImageStyle: Y = A.Tb.CONTAINED,
                    actions: w,
                    mediaRef: D,
                    boxArtContainerClassName: V,
                    containerClassName: H,
                } = e,
                X = (0, x.TM)(),
                W = s.useRef(null),
                F = s.useRef(0),
                { sectionRef: z, handleVisibilityChange: K } = (0, R.A)({ boxType: t }),
                q = (0, h.A)("(min-width: 1140px)"),
                $ = Y === A.Tb.OVERLAY && (k !== A.A0.LARGE || !q),
                J = k === A.A0.LARGE && q && Y === A.Tb.OVERLAY,
                Q = null != G && q && k === A.A0.LARGE,
                Z = s.useMemo(
                    () =>
                        (0, l.debounce)(() => {
                            g.default.track(_.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
                        }, 800),
                    [t],
                ),
                ee = (0, a.jsx)("div", {
                    className: r()(P.captionWrapper, P[`${k}`]),
                    children:
                        "string" == typeof i
                            ? (0, a.jsx)(m.E, { variant: "body-sm/normal", color: "text-muted", children: i })
                            : i,
                });
            function et() {
                (null == W.current || y || ((W.current.currentTime = F.current), W.current.play()),
                    y || D?.current?.play());
            }
            function en() {
                (null == W.current || y || ((F.current = W.current.currentTime), W.current.pause()),
                    y || D?.current?.pause());
            }
            let ea = k === A.A0.LARGE ? "heading-xxl/semibold" : "heading-xl/semibold";
            function es() {
                let e = null != O && null != S,
                    t = null != w && w.length > 0;
                if (!e && !t) return null;
                let n = e ? [{ variant: "secondary", onClick: S, text: O }] : w;
                return (0, a.jsx)("div", {
                    className: P.bentoBoxButton,
                    children: (0, a.jsx)(p.e, {
                        children: n?.map((e, t) => {
                            let { onClick: n, ...s } = e;
                            return (0, a.jsx)(
                                o.$,
                                {
                                    ...s,
                                    onClick: function (e) {
                                        (Z(), n?.(e));
                                    },
                                },
                                t,
                            );
                        }),
                    }),
                });
            }
            function ei() {
                return (0, a.jsxs)("div", {
                    className: r()(P.textBox, P[`${k}`], J && P.overlayTextBox),
                    children: [
                        (0, a.jsxs)("div", {
                            children: [
                                null == L
                                    ? null
                                    : "gradient" === B
                                      ? (0, a.jsx)("div", {
                                            className: P.badgeContainer,
                                            children: (0, a.jsx)("div", {
                                                className: P.badge,
                                                children: (0, a.jsx)(b.D, {
                                                    variant: "body-xs/semibold",
                                                    color: "text-overlay-light",
                                                    children: L,
                                                }),
                                            }),
                                        })
                                      : (0, a.jsx)("div", {
                                            className: P.badgeContainer,
                                            children: (0, a.jsx)(c.E, { type: { text: L }, variant: B }),
                                        }),
                                null != i && k === A.A0.LARGE && ee,
                                (0, a.jsx)(b.D, {
                                    variant: ea,
                                    color: "text-strong",
                                    className: P.header,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, a.jsx)(m.E, {
                            variant: "body-md/medium",
                            color: "text-strong",
                            className: P.description,
                            children: I,
                        }),
                        (0, a.jsx)(es, {}),
                    ],
                });
            }
            function er() {
                return (0, a.jsxs)("div", {
                    className: r()(P.boxArtContainer, P[`${k}`], V),
                    children: [
                        null == T && (0, u.O)(C) && "string" != typeof C
                            ? C
                            : (0, a.jsx)(
                                  E.A,
                                  {
                                      playsInline: !0,
                                      preload: M ? "auto" : "none",
                                      muted: !0,
                                      poster: C,
                                      loop: !0,
                                      className: r()(J ? P.overlayImage : P.boxVideo, { [U]: null != U }),
                                      ref: W,
                                      children: (0, a.jsx)("source", { src: T, type: X ? v.a.MP4 : v.a.WEBM }),
                                  },
                                  T,
                              ),
                        null != i &&
                            k !== A.A0.LARGE &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", { className: P.captionGradient, "aria-hidden": !0 }), ee],
                            }),
                    ],
                });
            }
            let el = j % 2 != 0;
            return (0, a.jsx)(d.L, {
                innerRef: z,
                onChange: K,
                threshold: 0.5,
                children: (0, a.jsxs)(f.h, {
                    ref: z,
                    id: t,
                    className: r()(
                        P.backgroundColor,
                        P.boxContainer,
                        P[`${k}`],
                        P.gradientBackground,
                        H,
                        $ && P.overlayImageMode,
                        J && P.overlayMode,
                    ),
                    onMouseEnter: et,
                    onFocus: et,
                    onBlur: en,
                    onMouseLeave: en,
                    color: "purple",
                    children: [
                        Q &&
                            (0, a.jsx)("div", {
                                className: P.backgroundVideoContainer,
                                children: (0, a.jsx)(N.A, {
                                    preload: M ? "auto" : "none",
                                    className: P.backgroundVideo,
                                    src: G,
                                }),
                            }),
                        (0, a.jsx)(function () {
                            return el
                                ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(ei, {}), (0, a.jsx)(er, {})] })
                                : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(er, {}), (0, a.jsx)(ei, {})] });
                        }, {}),
                    ],
                }),
            });
        },
    },
);
