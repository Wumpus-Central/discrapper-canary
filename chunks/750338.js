a.d(t, { A: () => v });
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
    x = a(639031),
    O = a(652215),
    I = a(693591),
    P = a(505051);
let v = (e) => {
    let {
            name: t,
            title: a,
            caption: i,
            description: v,
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
            previewImageStyle: Y = x.Tb.CONTAINED,
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
        Z = Y === x.Tb.OVERLAY && (D !== x.A0.LARGE || !q),
        Q = D === x.A0.LARGE && q && Y === x.Tb.OVERLAY,
        ee = null != k && q && D === x.A0.LARGE,
        et = s.useMemo(
            () =>
                (0, l.debounce)(() => {
                    N.default.track(O.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
                }, 800),
            [t],
        ),
        ea = (0, n.jsx)("div", {
            className: r()(P.captionWrapper, P[`${D}`]),
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
    let ei = D === x.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold";
    function er() {
        let e = null != T && null != j,
            t = null != G && G.length > 0;
        if (!e && !t) return null;
        let a = e ? [{ variant: "secondary", onClick: j, text: T }] : G;
        return (0, n.jsx)("div", {
            className: P.bentoBoxButton,
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
            className: r()(P.textBox, P[`${D}`], Q && P.overlayTextBox),
            children: [
                (0, n.jsxs)("div", {
                    children: [
                        null == B
                            ? null
                            : "gradient" === w
                              ? (0, n.jsx)("div", {
                                    className: P.badgeContainer,
                                    children: (0, n.jsx)("div", {
                                        className: P.badge,
                                        children: (0, n.jsx)(b.D, {
                                            variant: W,
                                            color: "text-overlay-light",
                                            children: B,
                                        }),
                                    }),
                                })
                              : (0, n.jsx)("div", {
                                    className: P.badgeContainer,
                                    children: (0, n.jsx)(c.E, { type: { text: B }, variant: w }),
                                }),
                        null != i && D === x.A0.LARGE && ea,
                        (0, n.jsx)(b.D, { variant: ei, color: "text-strong", className: P.header, children: a }),
                    ],
                }),
                (0, n.jsx)(p.E, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    className: P.description,
                    children: v,
                }),
                (0, n.jsx)(er, {}),
            ],
        });
    }
    function eo() {
        return (0, n.jsxs)("div", {
            className: r()(P.boxArtContainer, P[`${D}`], H),
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
                              className: r()(Q ? P.overlayImage : P.boxVideo, { [L]: null != L }),
                              ref: z,
                              children: (0, n.jsx)("source", { src: U, type: X ? I.a.MP4 : I.a.WEBM }),
                          },
                          U,
                      ),
                null != i &&
                    D !== x.A0.LARGE &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", { className: P.captionGradient, "aria-hidden": !0 }), ea],
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
                P.backgroundColor,
                P.boxContainer,
                P[`${D}`],
                P.gradientBackground,
                F,
                Z && P.overlayImageMode,
                Q && P.overlayMode,
            ),
            onMouseEnter: en,
            onFocus: en,
            onBlur: es,
            onMouseLeave: es,
            color: "purple",
            children: [
                ee &&
                    (0, n.jsx)("div", {
                        className: P.backgroundVideoContainer,
                        children: (0, n.jsx)(R.A, {
                            preload: S ? "auto" : "none",
                            className: P.backgroundVideo,
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
