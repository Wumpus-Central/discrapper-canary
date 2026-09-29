n.d(t, { A: () => v });
var a = n(477900),
    s = n(582128),
    i = n(503698),
    r = n.n(i),
    l = n(435558),
    o = n(269115),
    c = n(508770),
    d = n(821609),
    u = n(745396),
    m = n(85463),
    p = n(297264),
    b = n(825484),
    f = n(834730),
    _ = n(315629),
    g = n(241524),
    E = n(303136),
    h = n(607470),
    R = n(174459),
    N = n(676279),
    A = n(406860),
    O = n(173038),
    x = n(652215),
    I = n(693591),
    U = n(505051);
let v = (e) => {
    let {
            name: t,
            title: n,
            description: i,
            descriptionCta: v,
            previewImage: T,
            videoUrl: P,
            shouldLoadVideo: C,
            index: S,
            customVideoStyle: L,
            isReducedMotion: M,
            onClick: y,
            badgeText: j,
            badgeVariant: B = "gradient",
            size: w,
            backgroundVideoUrl: D,
            previewImageStyle: Y = O.Tb.CONTAINED,
            actions: k,
            mediaRef: V,
            boxArtContainerClassName: G,
            containerClassName: H,
        } = e,
        F = (0, m.N)(),
        W = (0, N.TM)(),
        z = s.useRef(null),
        K = s.useRef(0),
        { sectionRef: X, handleVisibilityChange: J } = (0, A.A)({ boxType: t }),
        q = (0, g.A)("(min-width: 1140px)"),
        $ = Y === O.Tb.OVERLAY && (w !== O.A0.LARGE || !q),
        Z = w === O.A0.LARGE && q && Y === O.Tb.OVERLAY,
        Q = null != D && q && w === O.A0.LARGE,
        ee = s.useMemo(
            () =>
                (0, l.debounce)(() => {
                    R.default.track(x.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
                }, 800),
            [t],
        );
    function et() {
        (null == z.current || M || ((z.current.currentTime = K.current), z.current.play()), M || V?.current?.play());
    }
    function en() {
        (null == z.current || M || ((K.current = z.current.currentTime), z.current.pause()), M || V?.current?.pause());
    }
    let ea = w === O.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold";
    function es() {
        let e = null != v && null != y,
            t = null != k && k.length > 0;
        if (!e && !t) return null;
        let n = e ? [{ variant: "secondary", onClick: y, text: v }] : k;
        return (0, a.jsx)("div", {
            className: U.bentoBoxButton,
            children: (0, a.jsx)(b.e, {
                children: n?.map((e, t) => {
                    let { onClick: n, ...s } = e;
                    return (0, a.jsx)(
                        d.$,
                        {
                            ...s,
                            onClick: function (e) {
                                (ee(), n?.(e));
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
            className: r()(U.textBox, U[`${w}`], Z && U.overlayTextBox),
            children: [
                (0, a.jsxs)("div", {
                    children: [
                        null == j
                            ? null
                            : "gradient" === B
                              ? (0, a.jsx)("div", {
                                    className: U.badgeContainer,
                                    children: (0, a.jsx)("div", {
                                        className: U.badge,
                                        children: (0, a.jsx)(p.D, {
                                            variant: F,
                                            color: "text-overlay-light",
                                            children: j,
                                        }),
                                    }),
                                })
                              : (0, a.jsx)("div", {
                                    className: U.badgeContainer,
                                    children: (0, a.jsx)(c.E, { type: { text: j }, variant: B }),
                                }),
                        (0, a.jsx)(p.D, { variant: ea, color: "text-strong", className: U.header, children: n }),
                    ],
                }),
                (0, a.jsx)(f.E, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    className: U.description,
                    children: i,
                }),
                (0, a.jsx)(es, {}),
            ],
        });
    }
    function er() {
        return (0, a.jsx)("div", {
            className: r()(U.boxArtContainer, U[`${w}`], G),
            children:
                null == P && (0, u.O)(T) && "string" != typeof T
                    ? T
                    : (0, a.jsx)(
                          h.A,
                          {
                              playsInline: !0,
                              preload: C ? "auto" : "none",
                              muted: !0,
                              poster: T,
                              loop: !0,
                              className: r()(Z ? U.overlayImage : U.boxVideo, { [L]: null != L }),
                              ref: z,
                              children: (0, a.jsx)("source", { src: P, type: W ? I.a.MP4 : I.a.WEBM }),
                          },
                          P,
                      ),
        });
    }
    let el = S % 2 != 0;
    return (0, a.jsx)(o.L, {
        innerRef: X,
        onChange: J,
        threshold: 0.5,
        children: (0, a.jsxs)(_.h, {
            ref: X,
            id: t,
            className: r()(
                U.backgroundColor,
                U.boxContainer,
                U[`${w}`],
                U.gradientBackground,
                H,
                $ && U.overlayImageMode,
                Z && U.overlayMode,
            ),
            onMouseEnter: et,
            onFocus: et,
            onBlur: en,
            onMouseLeave: en,
            color: "purple",
            children: [
                Q &&
                    (0, a.jsx)("div", {
                        className: U.backgroundVideoContainer,
                        children: (0, a.jsx)(E.A, {
                            preload: C ? "auto" : "none",
                            className: U.backgroundVideo,
                            src: D,
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
