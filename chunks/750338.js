a.d(t, { A: () => P });
var n = a(477900),
    s = a(582128),
    i = a(503698),
    r = a.n(i),
    l = a(435558),
    d = a(269115),
    c = a(62010),
    o = a(821609),
    u = a(745396),
    m = a(85463),
    b = a(834730),
    p = a(297264),
    f = a(825484),
    h = a(315629),
    g = a(241524),
    x = a(303136),
    R = a(607470),
    N = a(174459),
    E = a(676279),
    A = a(406860),
    _ = a(610557),
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
            previewImage: M,
            videoUrl: U,
            shouldLoadVideo: T,
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
        ea = (0, n.jsx)("div", {
            className: r()(I.captionWrapper, I[`${k}`]),
            children:
                "string" == typeof i
                    ? (0, n.jsx)(b.E, { variant: "text-sm/normal", color: "text-muted", children: i })
                    : i,
        });
    function en() {
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
        let a = e ? [{ variant: "secondary", onClick: L, text: C }] : D;
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
                            : "gradient" === w
                              ? (0, n.jsx)("div", {
                                    className: I.badgeContainer,
                                    children: (0, n.jsx)("div", {
                                        className: I.badge,
                                        children: (0, n.jsx)(p.D, {
                                            variant: W,
                                            color: "text-overlay-light",
                                            children: B,
                                        }),
                                    }),
                                })
                              : (0, n.jsx)("div", {
                                    className: I.badgeContainer,
                                    children: (0, n.jsx)(c.E, { type: { text: B }, variant: w }),
                                }),
                        null != i && k === _.A0.LARGE && ea,
                        (0, n.jsx)(p.D, { variant: ei, color: "text-strong", className: I.header, children: a }),
                    ],
                }),
                (0, n.jsx)(b.E, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    className: I.description,
                    children: P,
                }),
                (0, n.jsx)(er, {}),
            ],
        });
    }
    function ed() {
        return (0, n.jsxs)("div", {
            className: r()(I.boxArtContainer, I[`${k}`], H),
            children: [
                null == U && (0, u.O)(M) && "string" != typeof M
                    ? M
                    : (0, n.jsx)(
                          R.A,
                          {
                              playsInline: !0,
                              preload: T ? "auto" : "none",
                              muted: !0,
                              poster: M,
                              loop: !0,
                              className: r()(Q ? I.overlayImage : I.boxVideo, { [S]: null != S }),
                              ref: F,
                              children: (0, n.jsx)("source", { src: U, type: z ? O.a.MP4 : O.a.WEBM }),
                          },
                          U,
                      ),
                null != i &&
                    k !== _.A0.LARGE &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", { className: I.captionGradient, "aria-hidden": !0 }), ea],
                    }),
            ],
        });
    }
    let ec = j % 2 != 0;
    return (0, n.jsx)(d.L, {
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
                        children: (0, n.jsx)(x.A, {
                            preload: T ? "auto" : "none",
                            className: I.backgroundVideo,
                            src: Y,
                        }),
                    }),
                (0, n.jsx)(function () {
                    return ec
                        ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(el, {}), (0, n.jsx)(ed, {})] })
                        : (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(ed, {}), (0, n.jsx)(el, {})] });
                }, {}),
            ],
        }),
    });
};
