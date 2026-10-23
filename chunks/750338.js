n.d(t, { A: () => I });
var a = n(477900),
    s = n(582128),
    i = n(503698),
    r = n.n(i),
    l = n(435558),
    d = n(269115),
    c = n(62010),
    o = n(821609),
    u = n(745396),
    m = n(85463),
    b = n(834730),
    p = n(297264),
    f = n(825484),
    h = n(315629),
    g = n(241524),
    N = n(303136),
    R = n(607470),
    x = n(174459),
    E = n(676279),
    _ = n(406860),
    A = n(610557),
    v = n(652215),
    O = n(693591),
    P = n(505051);
let I = (e) => {
    let {
            name: t,
            title: n,
            caption: i,
            description: I,
            descriptionCta: C,
            previewImage: U,
            videoUrl: T,
            shouldLoadVideo: M,
            index: S,
            customVideoStyle: j,
            isReducedMotion: L,
            onClick: y,
            badgeText: B,
            badgeVariant: w = "gradient",
            size: k,
            backgroundVideoUrl: Y,
            previewImageStyle: D = A.Tb.CONTAINED,
            actions: V,
            mediaRef: G,
            boxArtContainerClassName: H,
            containerClassName: X,
        } = e,
        W = (0, m.N)(),
        z = (0, E.TM)(),
        F = s.useRef(null),
        K = s.useRef(0),
        { sectionRef: q, handleVisibilityChange: $ } = (0, _.A)({ boxType: t }),
        J = (0, g.A)("(min-width: 1140px)"),
        Z = D === A.Tb.OVERLAY && (k !== A.A0.LARGE || !J),
        Q = k === A.A0.LARGE && J && D === A.Tb.OVERLAY,
        ee = null != Y && J && k === A.A0.LARGE,
        et = s.useMemo(
            () =>
                (0, l.debounce)(() => {
                    x.default.track(v.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
                }, 800),
            [t],
        ),
        en = (0, a.jsx)("div", {
            className: r()(P.captionWrapper, P[`${k}`]),
            children:
                "string" == typeof i
                    ? (0, a.jsx)(b.E, { variant: "text-sm/normal", color: "text-muted", children: i })
                    : i,
        });
    function ea() {
        (null == F.current || L || ((F.current.currentTime = K.current), F.current.play()), L || G?.current?.play());
    }
    function es() {
        (null == F.current || L || ((K.current = F.current.currentTime), F.current.pause()), L || G?.current?.pause());
    }
    let ei = k === A.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold";
    function er() {
        let e = null != C && null != y,
            t = null != V && V.length > 0;
        if (!e && !t) return null;
        let n = e ? [{ variant: "secondary", onClick: y, text: C }] : V;
        return (0, a.jsx)("div", {
            className: P.bentoBoxButton,
            children: (0, a.jsx)(f.e, {
                children: n?.map((e, t) => {
                    let { onClick: n, ...s } = e;
                    return (0, a.jsx)(
                        o.$,
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
            className: r()(P.textBox, P[`${k}`], Q && P.overlayTextBox),
            children: [
                (0, a.jsxs)("div", {
                    children: [
                        null == B
                            ? null
                            : "gradient" === w
                              ? (0, a.jsx)("div", {
                                    className: P.badgeContainer,
                                    children: (0, a.jsx)("div", {
                                        className: P.badge,
                                        children: (0, a.jsx)(p.D, {
                                            variant: W,
                                            color: "text-overlay-light",
                                            children: B,
                                        }),
                                    }),
                                })
                              : (0, a.jsx)("div", {
                                    className: P.badgeContainer,
                                    children: (0, a.jsx)(c.E, { type: { text: B }, variant: w }),
                                }),
                        null != i && k === A.A0.LARGE && en,
                        (0, a.jsx)(p.D, { variant: ei, color: "text-strong", className: P.header, children: n }),
                    ],
                }),
                (0, a.jsx)(b.E, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    className: P.description,
                    children: I,
                }),
                (0, a.jsx)(er, {}),
            ],
        });
    }
    function ed() {
        return (0, a.jsxs)("div", {
            className: r()(P.boxArtContainer, P[`${k}`], H),
            children: [
                null == T && (0, u.O)(U) && "string" != typeof U
                    ? U
                    : (0, a.jsx)(
                          R.A,
                          {
                              playsInline: !0,
                              preload: M ? "auto" : "none",
                              muted: !0,
                              poster: U,
                              loop: !0,
                              className: r()(Q ? P.overlayImage : P.boxVideo, { [j]: null != j }),
                              ref: F,
                              children: (0, a.jsx)("source", { src: T, type: z ? O.a.MP4 : O.a.WEBM }),
                          },
                          T,
                      ),
                null != i &&
                    k !== A.A0.LARGE &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", { className: P.captionGradient, "aria-hidden": !0 }), en],
                    }),
            ],
        });
    }
    let ec = S % 2 != 0;
    return (0, a.jsx)(d.L, {
        innerRef: q,
        onChange: $,
        threshold: 0.5,
        children: (0, a.jsxs)(h.h, {
            ref: q,
            id: t,
            className: r()(
                P.backgroundColor,
                P.boxContainer,
                P[`${k}`],
                P.gradientBackground,
                X,
                Z && P.overlayImageMode,
                Q && P.overlayMode,
            ),
            onMouseEnter: ea,
            onFocus: ea,
            onBlur: es,
            onMouseLeave: es,
            color: "purple",
            children: [
                ee &&
                    (0, a.jsx)("div", {
                        className: P.backgroundVideoContainer,
                        children: (0, a.jsx)(N.A, {
                            preload: M ? "auto" : "none",
                            className: P.backgroundVideo,
                            src: Y,
                        }),
                    }),
                (0, a.jsx)(function () {
                    return ec
                        ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(el, {}), (0, a.jsx)(ed, {})] })
                        : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(ed, {}), (0, a.jsx)(el, {})] });
                }, {}),
            ],
        }),
    });
};
