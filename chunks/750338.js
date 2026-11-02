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
    m = n(834730),
    b = n(534514),
    p = n(825484),
    f = n(315629),
    h = n(241524),
    g = n(303136),
    R = n(607470),
    N = n(174459),
    x = n(676279),
    E = n(406860),
    _ = n(610557),
    A = n(652215),
    v = n(693591),
    O = n(505051);
let P = (e) => {
    let {
            name: t,
            title: n,
            caption: i,
            description: P,
            descriptionCta: I,
            previewImage: C,
            videoUrl: U,
            shouldLoadVideo: T,
            index: M,
            customVideoStyle: S,
            isReducedMotion: j,
            onClick: y,
            badgeText: L,
            badgeVariant: B = "gradient",
            size: w,
            backgroundVideoUrl: k,
            previewImageStyle: Y = _.Tb.CONTAINED,
            actions: D,
            mediaRef: V,
            boxArtContainerClassName: G,
            containerClassName: H,
        } = e,
        X = (0, x.TM)(),
        W = s.useRef(null),
        z = s.useRef(0),
        { sectionRef: F, handleVisibilityChange: K } = (0, E.A)({ boxType: t }),
        q = (0, h.A)("(min-width: 1140px)"),
        $ = Y === _.Tb.OVERLAY && (w !== _.A0.LARGE || !q),
        J = w === _.A0.LARGE && q && Y === _.Tb.OVERLAY,
        Z = null != k && q && w === _.A0.LARGE,
        Q = s.useMemo(
            () =>
                (0, l.debounce)(() => {
                    N.default.track(A.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
                }, 800),
            [t],
        ),
        ee = (0, a.jsx)("div", {
            className: r()(O.captionWrapper, O[`${w}`]),
            children:
                "string" == typeof i
                    ? (0, a.jsx)(m.E, { variant: "text-sm/normal", color: "text-muted", children: i })
                    : i,
        });
    function et() {
        (null == W.current || j || ((W.current.currentTime = z.current), W.current.play()), j || V?.current?.play());
    }
    function en() {
        (null == W.current || j || ((z.current = W.current.currentTime), W.current.pause()), j || V?.current?.pause());
    }
    let ea = w === _.A0.LARGE ? "heading-xxl/semibold" : "heading-xl/semibold";
    function es() {
        let e = null != I && null != y,
            t = null != D && D.length > 0;
        if (!e && !t) return null;
        let n = e ? [{ variant: "secondary", onClick: y, text: I }] : D;
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
            className: r()(O.textBox, O[`${w}`], J && O.overlayTextBox),
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
                                    children: (0, a.jsx)(c.E, { type: { text: L }, variant: B }),
                                }),
                        null != i && w === _.A0.LARGE && ee,
                        (0, a.jsx)(b.D, { variant: ea, color: "text-strong", className: O.header, children: n }),
                    ],
                }),
                (0, a.jsx)(m.E, {
                    variant: "text-md/medium",
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
            className: r()(O.boxArtContainer, O[`${w}`], G),
            children: [
                null == U && (0, u.O)(C) && "string" != typeof C
                    ? C
                    : (0, a.jsx)(
                          R.A,
                          {
                              playsInline: !0,
                              preload: T ? "auto" : "none",
                              muted: !0,
                              poster: C,
                              loop: !0,
                              className: r()(J ? O.overlayImage : O.boxVideo, { [S]: null != S }),
                              ref: W,
                              children: (0, a.jsx)("source", { src: U, type: X ? v.a.MP4 : v.a.WEBM }),
                          },
                          U,
                      ),
                null != i &&
                    w !== _.A0.LARGE &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", { className: O.captionGradient, "aria-hidden": !0 }), ee],
                    }),
            ],
        });
    }
    let el = M % 2 != 0;
    return (0, a.jsx)(d.L, {
        innerRef: F,
        onChange: K,
        threshold: 0.5,
        children: (0, a.jsxs)(f.h, {
            ref: F,
            id: t,
            className: r()(
                O.backgroundColor,
                O.boxContainer,
                O[`${w}`],
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
                        children: (0, a.jsx)(g.A, {
                            preload: T ? "auto" : "none",
                            className: O.backgroundVideo,
                            src: k,
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
};
