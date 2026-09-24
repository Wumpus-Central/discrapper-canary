n.d(t, { A: () => E });
var i = n(477900),
    a = n(582128),
    r = n(503698),
    s = n.n(r),
    l = n(435558),
    o = n(269115),
    d = n(508770),
    c = n(821609),
    u = n(745396),
    m = n(85463),
    p = n(297264),
    b = n(825484),
    f = n(834730),
    g = n(315629),
    h = n(241524),
    x = n(303136),
    v = n(607470),
    _ = n(174459),
    C = n(676279),
    P = n(406860),
    T = n(173038),
    R = n(652215),
    A = n(693591),
    y = n(505051);
let E = (e) => {
    let {
            name: t,
            title: n,
            description: r,
            descriptionCta: E,
            previewImage: N,
            videoUrl: j,
            shouldLoadVideo: I,
            index: O,
            customVideoStyle: L,
            isReducedMotion: U,
            onClick: S,
            badgeText: M,
            badgeVariant: w = "gradient",
            size: D,
            backgroundVideoUrl: k,
            previewImageStyle: B = T.Tb.CONTAINED,
            actions: Y,
            mediaRef: G,
            boxArtContainerClassName: V,
            containerClassName: H,
        } = e,
        z = (0, m.N)(),
        F = (0, C.TM)(),
        K = a.useRef(null),
        W = a.useRef(0),
        { sectionRef: X, handleVisibilityChange: $ } = (0, P.A)({ boxType: t }),
        q = (0, h.A)("(min-width: 1140px)"),
        J = B === T.Tb.OVERLAY && (D !== T.A0.LARGE || !q),
        Z = D === T.A0.LARGE && q && B === T.Tb.OVERLAY,
        Q = null != k && q && D === T.A0.LARGE,
        ee = a.useMemo(
            () =>
                (0, l.debounce)(() => {
                    _.default.track(R.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
                }, 800),
            [t],
        );
    function et() {
        (null == K.current || U || ((K.current.currentTime = W.current), K.current.play()), U || G?.current?.play());
    }
    function en() {
        (null == K.current || U || ((W.current = K.current.currentTime), K.current.pause()), U || G?.current?.pause());
    }
    let ei = D === T.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold";
    function ea() {
        let e = null != E && null != S,
            t = null != Y && Y.length > 0;
        if (!e && !t) return null;
        let n = e ? [{ variant: "secondary", onClick: S, text: E }] : Y;
        return (0, i.jsx)("div", {
            className: y.bentoBoxButton,
            children: (0, i.jsx)(b.e, {
                children: n?.map((e, t) => {
                    let { onClick: n, ...a } = e;
                    return (0, i.jsx)(
                        c.$,
                        {
                            ...a,
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
    function er() {
        return (0, i.jsxs)("div", {
            className: s()(y.textBox, y[`${D}`], Z && y.overlayTextBox),
            children: [
                (0, i.jsxs)("div", {
                    children: [
                        null == M
                            ? null
                            : "gradient" === w
                              ? (0, i.jsx)("div", {
                                    className: y.badgeContainer,
                                    children: (0, i.jsx)("div", {
                                        className: y.badge,
                                        children: (0, i.jsx)(p.D, {
                                            variant: z,
                                            color: "text-overlay-light",
                                            children: M,
                                        }),
                                    }),
                                })
                              : (0, i.jsx)("div", {
                                    className: y.badgeContainer,
                                    children: (0, i.jsx)(d.E, { type: { text: M }, variant: w }),
                                }),
                        (0, i.jsx)(p.D, { variant: ei, color: "text-strong", className: y.header, children: n }),
                    ],
                }),
                (0, i.jsx)(f.E, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    className: y.description,
                    children: r,
                }),
                (0, i.jsx)(ea, {}),
            ],
        });
    }
    function es() {
        return (0, i.jsx)("div", {
            className: s()(y.boxArtContainer, y[`${D}`], V),
            children:
                null == j && (0, u.O)(N) && "string" != typeof N
                    ? N
                    : (0, i.jsx)(
                          v.A,
                          {
                              playsInline: !0,
                              preload: I ? "auto" : "none",
                              muted: !0,
                              poster: N,
                              loop: !0,
                              className: s()(Z ? y.overlayImage : y.boxVideo, { [L]: null != L }),
                              ref: K,
                              children: (0, i.jsx)("source", { src: j, type: F ? A.a.MP4 : A.a.WEBM }),
                          },
                          j,
                      ),
        });
    }
    let el = O % 2 != 0;
    return (0, i.jsx)(o.L, {
        innerRef: X,
        onChange: $,
        threshold: 0.5,
        children: (0, i.jsxs)(g.h, {
            ref: X,
            id: t,
            className: s()(
                y.backgroundColor,
                y.boxContainer,
                y[`${D}`],
                y.gradientBackground,
                H,
                J && y.overlayImageMode,
                Z && y.overlayMode,
            ),
            onMouseEnter: et,
            onFocus: et,
            onBlur: en,
            onMouseLeave: en,
            color: "purple",
            children: [
                Q &&
                    (0, i.jsx)("div", {
                        className: y.backgroundVideoContainer,
                        children: (0, i.jsx)(x.A, {
                            preload: I ? "auto" : "none",
                            className: y.backgroundVideo,
                            src: k,
                        }),
                    }),
                (0, i.jsx)(function () {
                    return el
                        ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(er, {}), (0, i.jsx)(es, {})] })
                        : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(es, {}), (0, i.jsx)(er, {})] });
                }, {}),
            ],
        }),
    });
};
