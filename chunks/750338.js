n.d(t, { A: () => P });
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
    x = n(303136),
    R = n(607470),
    N = n(174459),
    E = n(676279),
    A = n(406860),
    _ = n(610557),
    v = n(652215),
    O = n(693591),
    I = n(505051);
let P = (e) => {
    let {
            name: t,
            title: n,
            caption: i,
            description: P,
            descriptionCta: C,
            previewImage: M,
            videoUrl: T,
            shouldLoadVideo: U,
            index: j,
            customVideoStyle: S,
            isReducedMotion: y,
            onClick: L,
            badgeText: B,
            badgeVariant: w = "gradient",
            size: k,
            backgroundVideoUrl: Y,
            previewImageStyle: V = _.Tb.CONTAINED,
            actions: D,
            mediaRef: G,
            boxArtContainerClassName: H,
            containerClassName: X,
        } = e,
        W = (0, m.N)(),
        z = (0, E.TM)(),
        F = s.useRef(null),
        K = s.useRef(0),
        { sectionRef: q, handleVisibilityChange: $ } = (0, A.A)({ boxType: t }),
        J = (0, g.A)("(min-width: 1140px)"),
        Z = V === _.Tb.OVERLAY && (k !== _.A0.LARGE || !J),
        Q = k === _.A0.LARGE && J && V === _.Tb.OVERLAY,
        ee = null != Y && J && k === _.A0.LARGE,
        et = s.useMemo(
            () =>
                (0, l.debounce)(() => {
                    N.default.track(v.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
                }, 800),
            [t],
        ),
        en = (0, a.jsx)("div", {
            className: r()(I.captionWrapper, I[`${k}`]),
            children:
                "string" == typeof i
                    ? (0, a.jsx)(b.E, { variant: "text-sm/normal", color: "text-muted", children: i })
                    : i,
        });
    function ea() {
        (null == F.current || y || ((F.current.currentTime = K.current), F.current.play()), y || G?.current?.play());
    }
    function es() {
        (null == F.current || y || ((K.current = F.current.currentTime), F.current.pause()), y || G?.current?.pause());
    }
    let ei = k === _.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold";
    function er() {
        let e = null != C && null != L,
            t = null != D && D.length > 0;
        if (!e && !t) return null;
        let n = e ? [{ variant: "secondary", onClick: L, text: C }] : D;
        return (0, a.jsx)("div", {
            className: I.bentoBoxButton,
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
            className: r()(I.textBox, I[`${k}`], Q && I.overlayTextBox),
            children: [
                (0, a.jsxs)("div", {
                    children: [
                        null == B
                            ? null
                            : "gradient" === w
                              ? (0, a.jsx)("div", {
                                    className: I.badgeContainer,
                                    children: (0, a.jsx)("div", {
                                        className: I.badge,
                                        children: (0, a.jsx)(p.D, {
                                            variant: W,
                                            color: "text-overlay-light",
                                            children: B,
                                        }),
                                    }),
                                })
                              : (0, a.jsx)("div", {
                                    className: I.badgeContainer,
                                    children: (0, a.jsx)(c.E, { type: { text: B }, variant: w }),
                                }),
                        null != i && k === _.A0.LARGE && en,
                        (0, a.jsx)(p.D, { variant: ei, color: "text-strong", className: I.header, children: n }),
                    ],
                }),
                (0, a.jsx)(b.E, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    className: I.description,
                    children: P,
                }),
                (0, a.jsx)(er, {}),
            ],
        });
    }
    function ed() {
        return (0, a.jsxs)("div", {
            className: r()(I.boxArtContainer, I[`${k}`], H),
            children: [
                null == T && (0, u.O)(M) && "string" != typeof M
                    ? M
                    : (0, a.jsx)(
                          R.A,
                          {
                              playsInline: !0,
                              preload: U ? "auto" : "none",
                              muted: !0,
                              poster: M,
                              loop: !0,
                              className: r()(Q ? I.overlayImage : I.boxVideo, { [S]: null != S }),
                              ref: F,
                              children: (0, a.jsx)("source", { src: T, type: z ? O.a.MP4 : O.a.WEBM }),
                          },
                          T,
                      ),
                null != i &&
                    k !== _.A0.LARGE &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", { className: I.captionGradient, "aria-hidden": !0 }), en],
                    }),
            ],
        });
    }
    let ec = j % 2 != 0;
    return (0, a.jsx)(d.L, {
        innerRef: q,
        onChange: $,
        threshold: 0.5,
        children: (0, a.jsxs)(h.h, {
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
            onMouseEnter: ea,
            onFocus: ea,
            onBlur: es,
            onMouseLeave: es,
            color: "purple",
            children: [
                ee &&
                    (0, a.jsx)("div", {
                        className: I.backgroundVideoContainer,
                        children: (0, a.jsx)(x.A, {
                            preload: U ? "auto" : "none",
                            className: I.backgroundVideo,
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
