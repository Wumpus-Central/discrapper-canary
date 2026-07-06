a.d(r, { A: () => R });
var n = a(627968),
    s = a(64700),
    t = a(503698),
    l = a.n(t),
    i = a(735438),
    c = a(269115),
    d = a(508770),
    o = a(821609),
    u = a(745396),
    x = a(534514),
    m = a(825484),
    h = a(834730),
    j = a(315629),
    p = a(241524),
    v = a(303136),
    g = a(607470),
    N = a(174459),
    A = a(676279),
    E = a(406860),
    y = a(280041),
    b = a(652215),
    _ = a(693591),
    C = a(856556);
let R = (e) => {
    let {
            name: r,
            title: a,
            description: t,
            descriptionCta: R,
            previewImage: f,
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
    let ee = L === y.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold",
        er = () => {
            let e = null != R && null != O,
                r = null != S && S.length > 0;
            if (!e && !r) return null;
            let a = e ? [{ variant: "secondary", onClick: O, text: R }] : S;
            return (0, n.jsx)("div", {
                className: C.bentoBoxButton,
                children: (0, n.jsx)(m.e, {
                    children: a?.map((e, r) => {
                        let { onClick: a, ...s } = e;
                        return (0, n.jsx)(
                            o.$,
                            {
                                ...s,
                                onClick: function (e) {
                                    J(), a?.(e);
                                },
                            },
                            r,
                        );
                    }),
                }),
            });
        },
        ea = () =>
            (0, n.jsxs)("div", {
                className: l()(C.textBox, C[`${L}`], X && C.overlayTextBox),
                children: [
                    (0, n.jsxs)("div", {
                        children: [
                            null == D
                                ? null
                                : "gradient" === B
                                  ? (0, n.jsx)("div", {
                                        className: C.badgeContainer,
                                        children: (0, n.jsx)("div", {
                                            className: C.badge,
                                            children: (0, n.jsx)(x.D, {
                                                variant: "eyebrow",
                                                color: "text-overlay-light",
                                                children: D,
                                            }),
                                        }),
                                    })
                                  : (0, n.jsx)("div", {
                                        className: C.badgeContainer,
                                        children: (0, n.jsx)(d.E, { type: { text: D }, variant: B }),
                                    }),
                            (0, n.jsx)(x.D, { variant: ee, color: "text-strong", className: C.header, children: a }),
                        ],
                    }),
                    (0, n.jsx)(h.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: C.description,
                        children: t,
                    }),
                    (0, n.jsx)(er, {}),
                ],
            }),
        en = () =>
            (0, n.jsx)("div", {
                className: l()(C.boxArtContainer, C[`${L}`], W),
                children:
                    null == k && (0, u.O)(f) && "string" != typeof f
                        ? f
                        : (0, n.jsx)(
                              g.A,
                              {
                                  playsInline: !0,
                                  preload: I ? "auto" : "none",
                                  muted: !0,
                                  poster: f,
                                  loop: !0,
                                  className: l()(X ? C.overlayImage : C.boxVideo, { [M]: null != M }),
                                  ref: G,
                                  children: (0, n.jsx)("source", { src: k, type: H ? _.a.MP4 : _.a.WEBM }),
                              },
                              k,
                          ),
            }),
        es = T % 2 != 0;
    return (0, n.jsx)(c.L, {
        innerRef: Y,
        onChange: $,
        threshold: 0.5,
        children: (0, n.jsxs)(j.h, {
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
                    (0, n.jsx)("div", {
                        className: C.backgroundVideoContainer,
                        children: (0, n.jsx)(v.A, {
                            preload: I ? "auto" : "none",
                            className: C.backgroundVideo,
                            src: V,
                        }),
                    }),
                (0, n.jsx)(function () {
                    return es
                        ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(ea, {}), (0, n.jsx)(en, {})] })
                        : (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(en, {}), (0, n.jsx)(ea, {})] });
                }, {}),
            ],
        }),
    });
};
