n.d(r, { A: () => f });
var a = n(627968),
    s = n(64700),
    t = n(503698),
    l = n.n(t),
    i = n(435558),
    c = n(269115),
    d = n(508770),
    o = n(821609),
    u = n(745396),
    x = n(297264),
    m = n(825484),
    h = n(834730),
    j = n(315629),
    p = n(241524),
    v = n(303136),
    g = n(607470),
    N = n(174459),
    A = n(676279),
    E = n(406860),
    y = n(280041),
    b = n(652215),
    _ = n(693591),
    C = n(856556);
let f = (e) => {
    let {
            name: r,
            title: n,
            description: t,
            descriptionCta: f,
            previewImage: R,
            videoUrl: k,
            shouldLoadVideo: I,
            index: T,
            customVideoStyle: M,
            isReducedMotion: P,
            onClick: O,
            badgeText: D,
            badgeVariant: B = "gradient",
            size: L,
            backgroundVideoUrl: V,
            previewImageStyle: w = y.Tb.CONTAINED,
            actions: S,
            mediaRef: U,
            boxArtContainerClassName: W,
        } = e,
        H = (0, A.TM)(),
        G = s.useRef(null),
        K = s.useRef(0),
        { sectionRef: Y, handleVisibilityChange: $ } = (0, E.A)({ boxType: r }),
        q = (0, p.A)("(min-width: 1140px)"),
        F = w === y.Tb.OVERLAY && (L !== y.A0.LARGE || !q),
        X = L === y.A0.LARGE && q && w === y.Tb.OVERLAY,
        z = null != V && q && L === y.A0.LARGE,
        J = s.useMemo(
            () =>
                (0, i.debounce)(() => {
                    N.default.track(b.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, i.snakeCase)(r) });
                }, 800),
            [r],
        );
    function Q() {
        null == G.current || P || ((G.current.currentTime = K.current), G.current.play()), P || U?.current?.play();
    }
    function Z() {
        null == G.current || P || ((K.current = G.current.currentTime), G.current.pause()), P || U?.current?.pause();
    }
    let ee = L === y.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold";
    function er() {
        let e = null != f && null != O,
            r = null != S && S.length > 0;
        if (!e && !r) return null;
        let n = e ? [{ variant: "secondary", onClick: O, text: f }] : S;
        return (0, a.jsx)("div", {
            className: C.bentoBoxButton,
            children: (0, a.jsx)(m.e, {
                children: n?.map((e, r) => {
                    let { onClick: n, ...s } = e;
                    return (0, a.jsx)(
                        o.$,
                        {
                            ...s,
                            onClick: function (e) {
                                J(), n?.(e);
                            },
                        },
                        r,
                    );
                }),
            }),
        });
    }
    function en() {
        return (0, a.jsxs)("div", {
            className: l()(C.textBox, C[`${L}`], X && C.overlayTextBox),
            children: [
                (0, a.jsxs)("div", {
                    children: [
                        null == D
                            ? null
                            : "gradient" === B
                              ? (0, a.jsx)("div", {
                                    className: C.badgeContainer,
                                    children: (0, a.jsx)("div", {
                                        className: C.badge,
                                        children: (0, a.jsx)(x.D, {
                                            variant: "eyebrow",
                                            color: "text-overlay-light",
                                            children: D,
                                        }),
                                    }),
                                })
                              : (0, a.jsx)("div", {
                                    className: C.badgeContainer,
                                    children: (0, a.jsx)(d.E, { type: { text: D }, variant: B }),
                                }),
                        (0, a.jsx)(x.D, { variant: ee, color: "text-strong", className: C.header, children: n }),
                    ],
                }),
                (0, a.jsx)(h.E, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    className: C.description,
                    children: t,
                }),
                (0, a.jsx)(er, {}),
            ],
        });
    }
    function ea() {
        return (0, a.jsx)("div", {
            className: l()(C.boxArtContainer, C[`${L}`], W),
            children:
                null == k && (0, u.O)(R) && "string" != typeof R
                    ? R
                    : (0, a.jsx)(
                          g.A,
                          {
                              playsInline: !0,
                              preload: I ? "auto" : "none",
                              muted: !0,
                              poster: R,
                              loop: !0,
                              className: l()(X ? C.overlayImage : C.boxVideo, { [M]: null != M }),
                              ref: G,
                              children: (0, a.jsx)("source", { src: k, type: H ? _.a.MP4 : _.a.WEBM }),
                          },
                          k,
                      ),
        });
    }
    let es = T % 2 != 0;
    return (0, a.jsx)(c.L, {
        innerRef: Y,
        onChange: $,
        threshold: 0.5,
        children: (0, a.jsxs)(j.h, {
            ref: Y,
            id: r,
            className: l()(
                C.backgroundColor,
                C.boxContainer,
                C[`${L}`],
                C.gradientBackground,
                F && C.overlayImageMode,
                X && C.overlayMode,
            ),
            onMouseEnter: Q,
            onFocus: Q,
            onBlur: Z,
            onMouseLeave: Z,
            color: "purple",
            children: [
                z &&
                    (0, a.jsx)("div", {
                        className: C.backgroundVideoContainer,
                        children: (0, a.jsx)(v.A, {
                            preload: I ? "auto" : "none",
                            className: C.backgroundVideo,
                            src: V,
                        }),
                    }),
                (0, a.jsx)(function () {
                    return es
                        ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(en, {}), (0, a.jsx)(ea, {})] })
                        : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(ea, {}), (0, a.jsx)(en, {})] });
                }, {}),
            ],
        }),
    });
};
