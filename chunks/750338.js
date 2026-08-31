i.d(t, { A: () => A });
var s = i(477900),
    n = i(582128),
    r = i(503698),
    a = i.n(r),
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
    P = i(505051);
let A = (e) => {
    let {
            name: t,
            title: i,
            description: r,
            descriptionCta: A,
            previewImage: y,
            videoUrl: N,
            shouldLoadVideo: I,
            index: T,
            customVideoStyle: O,
            isReducedMotion: w,
            onClick: M,
            badgeText: L,
            badgeVariant: U = "gradient",
            size: S,
            backgroundVideoUrl: k,
            previewImageStyle: B = j.Tb.CONTAINED,
            actions: D,
            mediaRef: H,
            boxArtContainerClassName: V,
            containerClassName: Y,
        } = e,
        F = (0, v.TM)(),
        G = n.useRef(null),
        W = n.useRef(0),
        { sectionRef: K, handleVisibilityChange: Z } = (0, _.A)({ boxType: t }),
        z = (0, h.A)("(min-width: 1140px)"),
        X = B === j.Tb.OVERLAY && (S !== j.A0.LARGE || !z),
        $ = S === j.A0.LARGE && z && B === j.Tb.OVERLAY,
        q = null != k && z && S === j.A0.LARGE,
        J = n.useMemo(
            () =>
                (0, l.debounce)(() => {
                    C.default.track(R.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
                }, 800),
            [t],
        );
    function Q() {
        null == G.current || w || ((G.current.currentTime = W.current), G.current.play()), w || H?.current?.play();
    }
    function ee() {
        null == G.current || w || ((W.current = G.current.currentTime), G.current.pause()), w || H?.current?.pause();
    }
    let et = S === j.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold";
    function ei() {
        let e = null != A && null != M,
            t = null != D && D.length > 0;
        if (!e && !t) return null;
        let i = e ? [{ variant: "secondary", onClick: M, text: A }] : D;
        return (0, s.jsx)("div", {
            className: P.bentoBoxButton,
            children: (0, s.jsx)(p.e, {
                children: i?.map((e, t) => {
                    let { onClick: i, ...n } = e;
                    return (0, s.jsx)(
                        c.$,
                        {
                            ...n,
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
    function es() {
        return (0, s.jsxs)("div", {
            className: a()(P.textBox, P[`${S}`], $ && P.overlayTextBox),
            children: [
                (0, s.jsxs)("div", {
                    children: [
                        null == L
                            ? null
                            : "gradient" === U
                              ? (0, s.jsx)("div", {
                                    className: P.badgeContainer,
                                    children: (0, s.jsx)("div", {
                                        className: P.badge,
                                        children: (0, s.jsx)(m.D, {
                                            variant: "eyebrow",
                                            color: "text-overlay-light",
                                            children: L,
                                        }),
                                    }),
                                })
                              : (0, s.jsx)("div", {
                                    className: P.badgeContainer,
                                    children: (0, s.jsx)(d.E, { type: { text: L }, variant: U }),
                                }),
                        (0, s.jsx)(m.D, { variant: et, color: "text-strong", className: P.header, children: i }),
                    ],
                }),
                (0, s.jsx)(f.E, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    className: P.description,
                    children: r,
                }),
                (0, s.jsx)(ei, {}),
            ],
        });
    }
    function en() {
        return (0, s.jsx)("div", {
            className: a()(P.boxArtContainer, P[`${S}`], V),
            children:
                null == N && (0, u.O)(y) && "string" != typeof y
                    ? y
                    : (0, s.jsx)(
                          x.A,
                          {
                              playsInline: !0,
                              preload: I ? "auto" : "none",
                              muted: !0,
                              poster: y,
                              loop: !0,
                              className: a()($ ? P.overlayImage : P.boxVideo, { [O]: null != O }),
                              ref: G,
                              children: (0, s.jsx)("source", { src: N, type: F ? E.a.MP4 : E.a.WEBM }),
                          },
                          N,
                      ),
        });
    }
    let er = T % 2 != 0;
    return (0, s.jsx)(o.L, {
        innerRef: K,
        onChange: Z,
        threshold: 0.5,
        children: (0, s.jsxs)(b.h, {
            ref: K,
            id: t,
            className: a()(
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
                    (0, s.jsx)("div", {
                        className: P.backgroundVideoContainer,
                        children: (0, s.jsx)(g.A, {
                            preload: I ? "auto" : "none",
                            className: P.backgroundVideo,
                            src: k,
                        }),
                    }),
                (0, s.jsx)(function () {
                    return er
                        ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(es, {}), (0, s.jsx)(en, {})] })
                        : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(en, {}), (0, s.jsx)(es, {})] });
                }, {}),
            ],
        }),
    });
};
