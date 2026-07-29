i.d(t, { A: () => A });
var n = i(477900),
    s = i(582128),
    a = i(503698),
    r = i.n(a),
    l = i(435558),
    o = i(269115),
    d = i(508770),
    c = i(821609),
    u = i(745396),
    m = i(297264),
    p = i(825484),
    f = i(834730),
    b = i(315629),
    h = i(241524),
    g = i(303136),
    x = i(607470),
    C = i(174459),
    v = i(676279),
    _ = i(406860),
    j = i(387640),
    R = i(652215),
    E = i(693591),
    P = i(950228);
let A = (e) => {
    let {
            name: t,
            title: i,
            description: a,
            descriptionCta: A,
            previewImage: y,
            videoUrl: N,
            shouldLoadVideo: T,
            index: I,
            customVideoStyle: w,
            isReducedMotion: O,
            onClick: M,
            badgeText: U,
            badgeVariant: L = "gradient",
            size: S,
            backgroundVideoUrl: k,
            previewImageStyle: D = j.Tb.CONTAINED,
            actions: B,
            mediaRef: H,
            boxArtContainerClassName: V,
            containerClassName: Y,
        } = e,
        F = (0, v.TM)(),
        G = s.useRef(null),
        W = s.useRef(0),
        { sectionRef: Z, handleVisibilityChange: K } = (0, _.A)({ boxType: t }),
        z = (0, h.A)("(min-width: 1140px)"),
        X = D === j.Tb.OVERLAY && (S !== j.A0.LARGE || !z),
        $ = S === j.A0.LARGE && z && D === j.Tb.OVERLAY,
        q = null != k && z && S === j.A0.LARGE,
        J = s.useMemo(
            () =>
                (0, l.debounce)(() => {
                    C.default.track(R.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
                }, 800),
            [t],
        );
    function Q() {
        null == G.current || O || ((G.current.currentTime = W.current), G.current.play()), O || H?.current?.play();
    }
    function ee() {
        null == G.current || O || ((W.current = G.current.currentTime), G.current.pause()), O || H?.current?.pause();
    }
    let et = S === j.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold";
    function ei() {
        let e = null != A && null != M,
            t = null != B && B.length > 0;
        if (!e && !t) return null;
        let i = e ? [{ variant: "secondary", onClick: M, text: A }] : B;
        return (0, n.jsx)("div", {
            className: P.bentoBoxButton,
            children: (0, n.jsx)(p.e, {
                children: i?.map((e, t) => {
                    let { onClick: i, ...s } = e;
                    return (0, n.jsx)(
                        c.$,
                        {
                            ...s,
                            onClick: function (e) {
                                J(), i?.(e);
                            },
                        },
                        t,
                    );
                }),
            }),
        });
    }
    function en() {
        return (0, n.jsxs)("div", {
            className: r()(P.textBox, P[`${S}`], $ && P.overlayTextBox),
            children: [
                (0, n.jsxs)("div", {
                    children: [
                        null == U
                            ? null
                            : "gradient" === L
                              ? (0, n.jsx)("div", {
                                    className: P.badgeContainer,
                                    children: (0, n.jsx)("div", {
                                        className: P.badge,
                                        children: (0, n.jsx)(m.D, {
                                            variant: "eyebrow",
                                            color: "text-overlay-light",
                                            children: U,
                                        }),
                                    }),
                                })
                              : (0, n.jsx)("div", {
                                    className: P.badgeContainer,
                                    children: (0, n.jsx)(d.E, { type: { text: U }, variant: L }),
                                }),
                        (0, n.jsx)(m.D, { variant: et, color: "text-strong", className: P.header, children: i }),
                    ],
                }),
                (0, n.jsx)(f.E, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    className: P.description,
                    children: a,
                }),
                (0, n.jsx)(ei, {}),
            ],
        });
    }
    function es() {
        return (0, n.jsx)("div", {
            className: r()(P.boxArtContainer, P[`${S}`], V),
            children:
                null == N && (0, u.O)(y) && "string" != typeof y
                    ? y
                    : (0, n.jsx)(
                          x.A,
                          {
                              playsInline: !0,
                              preload: T ? "auto" : "none",
                              muted: !0,
                              poster: y,
                              loop: !0,
                              className: r()($ ? P.overlayImage : P.boxVideo, { [w]: null != w }),
                              ref: G,
                              children: (0, n.jsx)("source", { src: N, type: F ? E.a.MP4 : E.a.WEBM }),
                          },
                          N,
                      ),
        });
    }
    let ea = I % 2 != 0;
    return (0, n.jsx)(o.L, {
        innerRef: Z,
        onChange: K,
        threshold: 0.5,
        children: (0, n.jsxs)(b.h, {
            ref: Z,
            id: t,
            className: r()(
                P.backgroundColor,
                P.boxContainer,
                P[`${S}`],
                P.gradientBackground,
                Y,
                X && P.overlayImageMode,
                $ && P.overlayMode,
            ),
            onMouseEnter: Q,
            onFocus: Q,
            onBlur: ee,
            onMouseLeave: ee,
            color: "purple",
            children: [
                q &&
                    (0, n.jsx)("div", {
                        className: P.backgroundVideoContainer,
                        children: (0, n.jsx)(g.A, {
                            preload: T ? "auto" : "none",
                            className: P.backgroundVideo,
                            src: k,
                        }),
                    }),
                (0, n.jsx)(function () {
                    return ea
                        ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(en, {}), (0, n.jsx)(es, {})] })
                        : (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(es, {}), (0, n.jsx)(en, {})] });
                }, {}),
            ],
        }),
    });
};
