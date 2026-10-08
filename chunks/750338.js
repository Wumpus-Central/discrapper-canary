n.d(t, { A: () => P });
var a = n(477900),
    s = n(582128),
    i = n(503698),
    r = n.n(i),
    l = n(435558),
    c = n(269115),
    o = n(508770),
    d = n(821609),
    u = n(745396),
    m = n(85463),
    b = n(834730),
    p = n(297264),
    f = n(825484),
    _ = n(315629),
    E = n(241524),
    g = n(303136),
    h = n(607470),
    R = n(174459),
    N = n(676279),
    x = n(406860),
    A = n(639031),
    v = n(652215),
    I = n(693591),
    O = n(505051);
let P = (e) => {
    let {
            name: t,
            title: n,
            caption: i,
            description: P,
            descriptionCta: T,
            previewImage: C,
            videoUrl: U,
            shouldLoadVideo: S,
            index: L,
            customVideoStyle: M,
            isReducedMotion: j,
            onClick: y,
            badgeText: B,
            badgeVariant: w = "gradient",
            size: D,
            backgroundVideoUrl: k,
            previewImageStyle: Y = A.Tb.CONTAINED,
            actions: G,
            mediaRef: V,
            boxArtContainerClassName: H,
            containerClassName: F,
        } = e,
        X = (0, m.N)(),
        W = (0, N.TM)(),
        z = s.useRef(null),
        K = s.useRef(0),
        { sectionRef: q, handleVisibilityChange: J } = (0, x.A)({ boxType: t }),
        $ = (0, E.A)("(min-width: 1140px)"),
        Z = Y === A.Tb.OVERLAY && (D !== A.A0.LARGE || !$),
        Q = D === A.A0.LARGE && $ && Y === A.Tb.OVERLAY,
        ee = null != k && $ && D === A.A0.LARGE,
        et = s.useMemo(
            () =>
                (0, l.debounce)(() => {
                    R.default.track(v.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
                }, 800),
            [t],
        ),
        en = (0, a.jsx)("div", {
            className: r()(O.captionWrapper, O[`${D}`]),
            children:
                "string" == typeof i
                    ? (0, a.jsx)(b.E, { variant: "text-sm/normal", color: "text-muted", children: i })
                    : i,
        });
    function ea() {
        (null == z.current || j || ((z.current.currentTime = K.current), z.current.play()), j || V?.current?.play());
    }
    function es() {
        (null == z.current || j || ((K.current = z.current.currentTime), z.current.pause()), j || V?.current?.pause());
    }
    let ei = D === A.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold";
    function er() {
        let e = null != T && null != y,
            t = null != G && G.length > 0;
        if (!e && !t) return null;
        let n = e ? [{ variant: "secondary", onClick: y, text: T }] : G;
        return (0, a.jsx)("div", {
            className: O.bentoBoxButton,
            children: (0, a.jsx)(f.e, {
                children: n?.map((e, t) => {
                    let { onClick: n, ...s } = e;
                    return (0, a.jsx)(
                        d.$,
                        {
                            ...s,
                            onClick: function (e) {
                                (et(), n?.(e));
                            },
                        },
                        t,
                    );
                }),
            }),
        });
    }
    function el() {
        return (0, a.jsxs)("div", {
            className: r()(O.textBox, O[`${D}`], Q && O.overlayTextBox),
            children: [
                (0, a.jsxs)("div", {
                    children: [
                        null == B
                            ? null
                            : "gradient" === w
                              ? (0, a.jsx)("div", {
                                    className: O.badgeContainer,
                                    children: (0, a.jsx)("div", {
                                        className: O.badge,
                                        children: (0, a.jsx)(p.D, {
                                            variant: X,
                                            color: "text-overlay-light",
                                            children: B,
                                        }),
                                    }),
                                })
                              : (0, a.jsx)("div", {
                                    className: O.badgeContainer,
                                    children: (0, a.jsx)(o.E, { type: { text: B }, variant: w }),
                                }),
                        null != i && D === A.A0.LARGE && en,
                        (0, a.jsx)(p.D, { variant: ei, color: "text-strong", className: O.header, children: n }),
                    ],
                }),
                (0, a.jsx)(b.E, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    className: O.description,
                    children: P,
                }),
                (0, a.jsx)(er, {}),
            ],
        });
    }
    function ec() {
        return (0, a.jsxs)("div", {
            className: r()(O.boxArtContainer, O[`${D}`], H),
            children: [
                null == U && (0, u.O)(C) && "string" != typeof C
                    ? C
                    : (0, a.jsx)(
                          h.A,
                          {
                              playsInline: !0,
                              preload: S ? "auto" : "none",
                              muted: !0,
                              poster: C,
                              loop: !0,
                              className: r()(Q ? O.overlayImage : O.boxVideo, { [M]: null != M }),
                              ref: z,
                              children: (0, a.jsx)("source", { src: U, type: W ? I.a.MP4 : I.a.WEBM }),
                          },
                          U,
                      ),
                null != i &&
                    D !== A.A0.LARGE &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", { className: O.captionGradient, "aria-hidden": !0 }), en],
                    }),
            ],
        });
    }
    let eo = L % 2 != 0;
    return (0, a.jsx)(c.L, {
        innerRef: q,
        onChange: J,
        threshold: 0.5,
        children: (0, a.jsxs)(_.h, {
            ref: q,
            id: t,
            className: r()(
                O.backgroundColor,
                O.boxContainer,
                O[`${D}`],
                O.gradientBackground,
                F,
                Z && O.overlayImageMode,
                Q && O.overlayMode,
            ),
            onMouseEnter: ea,
            onFocus: ea,
            onBlur: es,
            onMouseLeave: es,
            color: "purple",
            children: [
                ee &&
                    (0, a.jsx)("div", {
                        className: O.backgroundVideoContainer,
                        children: (0, a.jsx)(g.A, {
                            preload: S ? "auto" : "none",
                            className: O.backgroundVideo,
                            src: k,
                        }),
                    }),
                (0, a.jsx)(function () {
                    return eo
                        ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(el, {}), (0, a.jsx)(ec, {})] })
                        : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(ec, {}), (0, a.jsx)(el, {})] });
                }, {}),
            ],
        }),
    });
};
