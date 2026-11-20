var a = n(477900),
    s = n(582128),
    i = n(503698),
    r = n.n(i),
    l = n(435558),
    c = n(831259),
    d = n(805251),
    o = n(821609),
    u = n(745396),
    m = n(834730),
    b = n(534514),
    p = n(825484),
    f = n(315629),
    h = n(241524),
    N = n(303136),
    g = n(607470),
    E = n(129230),
    x = n(676279),
    A = n(406860),
    R = n(186961),
    _ = n(652215),
    v = n(693591),
    O = n(505051);
n.d(
    t,
    {},
    {
        A: (e) => {
            let {
                    name: t,
                    title: n,
                    caption: i,
                    description: P,
                    descriptionCta: I,
                    previewImage: C,
                    videoUrl: M,
                    shouldLoadVideo: T,
                    index: j,
                    customVideoStyle: U,
                    isReducedMotion: y,
                    onClick: S,
                    badgeText: L,
                    badgeVariant: B = "gradient",
                    size: k,
                    backgroundVideoUrl: G,
                    previewImageStyle: V = R.Tb.CONTAINED,
                    actions: Y,
                    mediaRef: w,
                    boxArtContainerClassName: D,
                    containerClassName: H,
                } = e,
                X = (0, x.TM)(),
                W = s.useRef(null),
                F = s.useRef(0),
                { sectionRef: z, handleVisibilityChange: K } = (0, A.A)({ boxType: t }),
                q = (0, h.A)("(min-width: 1140px)"),
                $ = V === R.Tb.OVERLAY && (k !== R.A0.LARGE || !q),
                J = k === R.A0.LARGE && q && V === R.Tb.OVERLAY,
                Z = null != G && q && k === R.A0.LARGE,
                Q = s.useMemo(
                    () =>
                        (0, l.debounce)(() => {
                            E.default.track(_.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
                        }, 800),
                    [t],
                ),
                ee = (0, a.jsx)("div", {
                    className: r()(O.captionWrapper, O[`${k}`]),
                    children:
                        "string" == typeof i
                            ? (0, a.jsx)(m.E, { variant: "body-sm/normal", color: "text-muted", children: i })
                            : i,
                });
            function et() {
                (null == W.current || y || ((W.current.currentTime = F.current), W.current.play()),
                    y || w?.current?.play());
            }
            function en() {
                (null == W.current || y || ((F.current = W.current.currentTime), W.current.pause()),
                    y || w?.current?.pause());
            }
            let ea = k === R.A0.LARGE ? "heading-xxl/semibold" : "heading-xl/semibold";
            function es() {
                let e = null != I && null != S,
                    t = null != Y && Y.length > 0;
                if (!e && !t) return null;
                let n = e ? [{ variant: "secondary", onClick: S, text: I }] : Y;
                return (0, a.jsx)("div", {
                    className: O.bentoBoxButton,
                    children: (0, a.jsx)(p.e, {
                        children: n?.map((e, t) => {
                            let { onClick: n, ...s } = e;
                            return (0, a.jsx)(
                                o.$,
                                {
                                    ...s,
                                    onClick: function (e) {
                                        (Q(), n?.(e));
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
                    className: r()(O.textBox, O[`${k}`], J && O.overlayTextBox),
                    children: [
                        (0, a.jsxs)("div", {
                            children: [
                                null == L
                                    ? null
                                    : "gradient" === B
                                      ? (0, a.jsx)("div", {
                                            className: O.badgeContainer,
                                            children: (0, a.jsx)("div", {
                                                className: O.badge,
                                                children: (0, a.jsx)(b.D, {
                                                    variant: "body-xs/semibold",
                                                    color: "text-overlay-light",
                                                    children: L,
                                                }),
                                            }),
                                        })
                                      : (0, a.jsx)("div", {
                                            className: O.badgeContainer,
                                            children: (0, a.jsx)(d.E, { type: { text: L }, variant: B }),
                                        }),
                                null != i && k === R.A0.LARGE && ee,
                                (0, a.jsx)(b.D, {
                                    variant: ea,
                                    color: "text-strong",
                                    className: O.header,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, a.jsx)(m.E, {
                            variant: "body-md/medium",
                            color: "text-strong",
                            className: O.description,
                            children: P,
                        }),
                        (0, a.jsx)(es, {}),
                    ],
                });
            }
            function er() {
                return (0, a.jsxs)("div", {
                    className: r()(O.boxArtContainer, O[`${k}`], D),
                    children: [
                        null == M && (0, u.O)(C) && "string" != typeof C
                            ? C
                            : (0, a.jsx)(
                                  g.A,
                                  {
                                      playsInline: !0,
                                      preload: T ? "auto" : "none",
                                      muted: !0,
                                      poster: C,
                                      loop: !0,
                                      className: r()(J ? O.overlayImage : O.boxVideo, { [U]: null != U }),
                                      ref: W,
                                      children: (0, a.jsx)("source", { src: M, type: X ? v.a.MP4 : v.a.WEBM }),
                                  },
                                  M,
                              ),
                        null != i &&
                            k !== R.A0.LARGE &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", { className: O.captionGradient, "aria-hidden": !0 }), ee],
                            }),
                    ],
                });
            }
            let el = j % 2 != 0;
            return (0, a.jsx)(c.L, {
                innerRef: z,
                onChange: K,
                threshold: 0.5,
                children: (0, a.jsxs)(f.h, {
                    ref: z,
                    id: t,
                    className: r()(
                        O.backgroundColor,
                        O.boxContainer,
                        O[`${k}`],
                        O.gradientBackground,
                        H,
                        $ && O.overlayImageMode,
                        J && O.overlayMode,
                    ),
                    onMouseEnter: et,
                    onFocus: et,
                    onBlur: en,
                    onMouseLeave: en,
                    color: "purple",
                    children: [
                        Z &&
                            (0, a.jsx)("div", {
                                className: O.backgroundVideoContainer,
                                children: (0, a.jsx)(N.A, {
                                    preload: T ? "auto" : "none",
                                    className: O.backgroundVideo,
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
