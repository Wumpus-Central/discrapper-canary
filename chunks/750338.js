a.d(t, { A: () => P });
var n = a(477900),
    s = a(582128),
    i = a(503698),
    r = a.n(i),
    l = a(435558),
    c = a(269115),
    d = a(508770),
    o = a(821609),
    u = a(745396),
    m = a(85463),
    p = a(834730),
    b = a(297264),
    f = a(825484),
    h = a(315629),
    g = a(241524),
    R = a(303136),
    E = a(607470),
    x = a(174459),
    N = a(676279),
    _ = a(406860),
    A = a(639031),
    v = a(652215),
    O = a(693591),
    I = a(505051);
let P = (e) => {
    let {
            name: t,
            title: a,
            caption: i,
            description: P,
            descriptionCta: C,
            previewImage: T,
            videoUrl: U,
            shouldLoadVideo: M,
            index: S,
            customVideoStyle: j,
            isReducedMotion: L,
            onClick: y,
            badgeText: B,
            badgeVariant: D = "gradient",
            size: k,
            backgroundVideoUrl: w,
            previewImageStyle: Y = A.Tb.CONTAINED,
            actions: V,
            mediaRef: G,
            boxArtContainerClassName: H,
            containerClassName: X,
        } = e,
        F = (0, m.N)(),
        W = (0, N.TM)(),
        z = s.useRef(null),
        K = s.useRef(0),
        { sectionRef: q, handleVisibilityChange: $ } = (0, _.A)({ boxType: t }),
        J = (0, g.A)("(min-width: 1140px)"),
        Z = Y === A.Tb.OVERLAY && (k !== A.A0.LARGE || !J),
        Q = k === A.A0.LARGE && J && Y === A.Tb.OVERLAY,
        ee = null != w && J && k === A.A0.LARGE,
        et = s.useMemo(
            () =>
                (0, l.debounce)(() => {
                    x.default.track(v.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
                }, 800),
            [t],
        ),
        ea = (0, n.jsx)("div", {
            className: r()(I.captionWrapper, I[`${k}`]),
            children:
                "string" == typeof i
                    ? (0, n.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: i })
                    : i,
        });
    function en() {
        (null == z.current || L || ((z.current.currentTime = K.current), z.current.play()), L || G?.current?.play());
    }
    function es() {
        (null == z.current || L || ((K.current = z.current.currentTime), z.current.pause()), L || G?.current?.pause());
    }
    let ei = k === A.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold";
    function er() {
        let e = null != C && null != y,
            t = null != V && V.length > 0;
        if (!e && !t) return null;
        let a = e ? [{ variant: "secondary", onClick: y, text: C }] : V;
        return (0, n.jsx)("div", {
            className: I.bentoBoxButton,
            children: (0, n.jsx)(f.e, {
                children: a?.map((e, t) => {
                    let { onClick: a, ...s } = e;
                    return (0, n.jsx)(
                        o.$,
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
            className: r()(I.textBox, I[`${k}`], Q && I.overlayTextBox),
            children: [
                (0, n.jsxs)("div", {
                    children: [
                        null == B
                            ? null
                            : "gradient" === D
                              ? (0, n.jsx)("div", {
                                    className: I.badgeContainer,
                                    children: (0, n.jsx)("div", {
                                        className: I.badge,
                                        children: (0, n.jsx)(b.D, {
                                            variant: F,
                                            color: "text-overlay-light",
                                            children: B,
                                        }),
                                    }),
                                })
                              : (0, n.jsx)("div", {
                                    className: I.badgeContainer,
                                    children: (0, n.jsx)(d.E, { type: { text: B }, variant: D }),
                                }),
                        null != i && k === A.A0.LARGE && ea,
                        (0, n.jsx)(b.D, { variant: ei, color: "text-strong", className: I.header, children: a }),
                    ],
                }),
                (0, n.jsx)(p.E, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    className: I.description,
                    children: P,
                }),
                (0, n.jsx)(er, {}),
            ],
        });
    }
    function ec() {
        return (0, n.jsxs)("div", {
            className: r()(I.boxArtContainer, I[`${k}`], H),
            children: [
                null == U && (0, u.O)(T) && "string" != typeof T
                    ? T
                    : (0, n.jsx)(
                          E.A,
                          {
                              playsInline: !0,
                              preload: M ? "auto" : "none",
                              muted: !0,
                              poster: T,
                              loop: !0,
                              className: r()(Q ? I.overlayImage : I.boxVideo, { [j]: null != j }),
                              ref: z,
                              children: (0, n.jsx)("source", { src: U, type: W ? O.a.MP4 : O.a.WEBM }),
                          },
                          U,
                      ),
                null != i &&
                    k !== A.A0.LARGE &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", { className: I.captionGradient, "aria-hidden": !0 }), ea],
                    }),
            ],
        });
    }
    let ed = S % 2 != 0;
    return (0, n.jsx)(c.L, {
        innerRef: q,
        onChange: $,
        threshold: 0.5,
        children: (0, n.jsxs)(h.h, {
            ref: q,
            id: t,
            className: r()(
                I.backgroundColor,
                I.boxContainer,
                I[`${k}`],
                I.gradientBackground,
                X,
                Z && I.overlayImageMode,
                Q && I.overlayMode,
            ),
            onMouseEnter: en,
            onFocus: en,
            onBlur: es,
            onMouseLeave: es,
            color: "purple",
            children: [
                ee &&
                    (0, n.jsx)("div", {
                        className: I.backgroundVideoContainer,
                        children: (0, n.jsx)(R.A, {
                            preload: M ? "auto" : "none",
                            className: I.backgroundVideo,
                            src: w,
                        }),
                    }),
                (0, n.jsx)(function () {
                    return ed
                        ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(el, {}), (0, n.jsx)(ec, {})] })
                        : (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(ec, {}), (0, n.jsx)(el, {})] });
                }, {}),
            ],
        }),
    });
};
