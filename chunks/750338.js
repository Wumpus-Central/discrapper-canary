a.d(t, { A: () => P });
var n = a(477900),
    s = a(582128),
    i = a(503698),
    r = a.n(i),
    l = a(435558),
    o = a(269115),
    c = a(508770),
    d = a(821609),
    u = a(745396),
    m = a(85463),
    p = a(834730),
    b = a(297264),
    f = a(825484),
    _ = a(315629),
    g = a(241524),
    R = a(303136),
    E = a(607470),
    N = a(174459),
    h = a(676279),
    A = a(406860),
    O = a(639031),
    x = a(652215),
    I = a(693591),
    v = a(505051);
let P = (e) => {
    let {
            name: t,
            title: a,
            caption: i,
            description: P,
            descriptionCta: T,
            previewImage: C,
            videoUrl: U,
            shouldLoadVideo: S,
            index: M,
            customVideoStyle: L,
            isReducedMotion: y,
            onClick: j,
            badgeText: B,
            badgeVariant: w = "gradient",
            size: D,
            backgroundVideoUrl: k,
            previewImageStyle: Y = O.Tb.CONTAINED,
            actions: G,
            mediaRef: V,
            boxArtContainerClassName: H,
            containerClassName: F,
        } = e,
        W = (0, m.N)(),
        X = (0, h.TM)(),
        z = s.useRef(null),
        K = s.useRef(0),
        { sectionRef: J, handleVisibilityChange: $ } = (0, A.A)({ boxType: t }),
        q = (0, g.A)("(min-width: 1140px)"),
        Z = Y === O.Tb.OVERLAY && (D !== O.A0.LARGE || !q),
        Q = D === O.A0.LARGE && q && Y === O.Tb.OVERLAY,
        ee = null != k && q && D === O.A0.LARGE,
        et = s.useMemo(
            () =>
                (0, l.debounce)(() => {
                    N.default.track(x.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
                }, 800),
            [t],
        ),
        ea = (0, n.jsx)("div", {
            className: r()(v.captionWrapper, v[`${D}`]),
            children:
                "string" == typeof i
                    ? (0, n.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: i })
                    : i,
        });
    function en() {
        (null == z.current || y || ((z.current.currentTime = K.current), z.current.play()), y || V?.current?.play());
    }
    function es() {
        (null == z.current || y || ((K.current = z.current.currentTime), z.current.pause()), y || V?.current?.pause());
    }
    let ei = D === O.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold";
    function er() {
        let e = null != T && null != j,
            t = null != G && G.length > 0;
        if (!e && !t) return null;
        let a = e ? [{ variant: "secondary", onClick: j, text: T }] : G;
        return (0, n.jsx)("div", {
            className: v.bentoBoxButton,
            children: (0, n.jsx)(f.e, {
                children: a?.map((e, t) => {
                    let { onClick: a, ...s } = e;
                    return (0, n.jsx)(
                        d.$,
                        {
                            ...s,
                            onClick: function (e) {
                                (et(), a?.(e));
                            },
                        },
                        t,
                    );
                }),
            }),
        });
    }
    function el() {
        return (0, n.jsxs)("div", {
            className: r()(v.textBox, v[`${D}`], Q && v.overlayTextBox),
            children: [
                (0, n.jsxs)("div", {
                    children: [
                        null == B
                            ? null
                            : "gradient" === w
                              ? (0, n.jsx)("div", {
                                    className: v.badgeContainer,
                                    children: (0, n.jsx)("div", {
                                        className: v.badge,
                                        children: (0, n.jsx)(b.D, {
                                            variant: W,
                                            color: "text-overlay-light",
                                            children: B,
                                        }),
                                    }),
                                })
                              : (0, n.jsx)("div", {
                                    className: v.badgeContainer,
                                    children: (0, n.jsx)(c.E, { type: { text: B }, variant: w }),
                                }),
                        null != i && D === O.A0.LARGE && ea,
                        (0, n.jsx)(b.D, { variant: ei, color: "text-strong", className: v.header, children: a }),
                    ],
                }),
                (0, n.jsx)(p.E, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    className: v.description,
                    children: P,
                }),
                (0, n.jsx)(er, {}),
            ],
        });
    }
    function eo() {
        return (0, n.jsxs)("div", {
            className: r()(v.boxArtContainer, v[`${D}`], H),
            children: [
                null == U && (0, u.O)(C) && "string" != typeof C
                    ? C
                    : (0, n.jsx)(
                          E.A,
                          {
                              playsInline: !0,
                              preload: S ? "auto" : "none",
                              muted: !0,
                              poster: C,
                              loop: !0,
                              className: r()(Q ? v.overlayImage : v.boxVideo, { [L]: null != L }),
                              ref: z,
                              children: (0, n.jsx)("source", { src: U, type: X ? I.a.MP4 : I.a.WEBM }),
                          },
                          U,
                      ),
                null != i &&
                    D !== O.A0.LARGE &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", { className: v.captionGradient, "aria-hidden": !0 }), ea],
                    }),
            ],
        });
    }
    let ec = M % 2 != 0;
    return (0, n.jsx)(o.L, {
        innerRef: J,
        onChange: $,
        threshold: 0.5,
        children: (0, n.jsxs)(_.h, {
            ref: J,
            id: t,
            className: r()(
                v.backgroundColor,
                v.boxContainer,
                v[`${D}`],
                v.gradientBackground,
                F,
                Z && v.overlayImageMode,
                Q && v.overlayMode,
            ),
            onMouseEnter: en,
            onFocus: en,
            onBlur: es,
            onMouseLeave: es,
            color: "purple",
            children: [
                ee &&
                    (0, n.jsx)("div", {
                        className: v.backgroundVideoContainer,
                        children: (0, n.jsx)(R.A, {
                            preload: S ? "auto" : "none",
                            className: v.backgroundVideo,
                            src: k,
                        }),
                    }),
                (0, n.jsx)(function () {
                    return ec
                        ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(el, {}), (0, n.jsx)(eo, {})] })
                        : (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eo, {}), (0, n.jsx)(el, {})] });
                }, {}),
            ],
        }),
    });
};
