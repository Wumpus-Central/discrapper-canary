i.d(t, { A: () => A });
var s = i(477900),
    r = i(582128),
    n = i(503698),
    a = i.n(n),
    l = i(435558),
    o = i(269115),
    d = i(508770),
    c = i(821609),
    u = i(745396),
    m = i(297264),
    p = i(825484),
    h = i(834730),
    f = i(315629),
    b = i(241524),
    g = i(303136),
    x = i(607470),
    C = i(174459),
    v = i(676279),
    j = i(406860),
    R = i(280041),
    P = i(652215),
    E = i(693591),
    _ = i(950228);
let A = (e) => {
    let {
            name: t,
            title: i,
            description: n,
            descriptionCta: A,
            previewImage: y,
            videoUrl: N,
            shouldLoadVideo: w,
            index: M,
            customVideoStyle: I,
            isReducedMotion: T,
            onClick: O,
            badgeText: U,
            badgeVariant: k = "gradient",
            size: S,
            backgroundVideoUrl: L,
            previewImageStyle: B = R.Tb.CONTAINED,
            actions: D,
            mediaRef: H,
            boxArtContainerClassName: V,
        } = e,
        Y = (0, v.TM)(),
        F = r.useRef(null),
        G = r.useRef(0),
        { sectionRef: W, handleVisibilityChange: Z } = (0, j.A)({ boxType: t }),
        K = (0, b.A)("(min-width: 1140px)"),
        z = B === R.Tb.OVERLAY && (S !== R.A0.LARGE || !K),
        X = S === R.A0.LARGE && K && B === R.Tb.OVERLAY,
        $ = null != L && K && S === R.A0.LARGE,
        q = r.useMemo(
            () =>
                (0, l.debounce)(() => {
                    C.default.track(P.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
                }, 800),
            [t],
        );
    function J() {
        null == F.current || T || ((F.current.currentTime = G.current), F.current.play()), T || H?.current?.play();
    }
    function Q() {
        null == F.current || T || ((G.current = F.current.currentTime), F.current.pause()), T || H?.current?.pause();
    }
    let ee = S === R.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold";
    function et() {
        let e = null != A && null != O,
            t = null != D && D.length > 0;
        if (!e && !t) return null;
        let i = e ? [{ variant: "secondary", onClick: O, text: A }] : D;
        return (0, s.jsx)("div", {
            className: _.bentoBoxButton,
            children: (0, s.jsx)(p.e, {
                children: i?.map((e, t) => {
                    let { onClick: i, ...r } = e;
                    return (0, s.jsx)(
                        c.$,
                        {
                            ...r,
                            onClick: function (e) {
                                q(), i?.(e);
                            },
                        },
                        t,
                    );
                }),
            }),
        });
    }
    function ei() {
        return (0, s.jsxs)("div", {
            className: a()(_.textBox, _[`${S}`], X && _.overlayTextBox),
            children: [
                (0, s.jsxs)("div", {
                    children: [
                        null == U
                            ? null
                            : "gradient" === k
                              ? (0, s.jsx)("div", {
                                    className: _.badgeContainer,
                                    children: (0, s.jsx)("div", {
                                        className: _.badge,
                                        children: (0, s.jsx)(m.D, {
                                            variant: "eyebrow",
                                            color: "text-overlay-light",
                                            children: U,
                                        }),
                                    }),
                                })
                              : (0, s.jsx)("div", {
                                    className: _.badgeContainer,
                                    children: (0, s.jsx)(d.E, { type: { text: U }, variant: k }),
                                }),
                        (0, s.jsx)(m.D, { variant: ee, color: "text-strong", className: _.header, children: i }),
                    ],
                }),
                (0, s.jsx)(h.E, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    className: _.description,
                    children: n,
                }),
                (0, s.jsx)(et, {}),
            ],
        });
    }
    function es() {
        return (0, s.jsx)("div", {
            className: a()(_.boxArtContainer, _[`${S}`], V),
            children:
                null == N && (0, u.O)(y) && "string" != typeof y
                    ? y
                    : (0, s.jsx)(
                          x.A,
                          {
                              playsInline: !0,
                              preload: w ? "auto" : "none",
                              muted: !0,
                              poster: y,
                              loop: !0,
                              className: a()(X ? _.overlayImage : _.boxVideo, { [I]: null != I }),
                              ref: F,
                              children: (0, s.jsx)("source", { src: N, type: Y ? E.a.MP4 : E.a.WEBM }),
                          },
                          N,
                      ),
        });
    }
    let er = M % 2 != 0;
    return (0, s.jsx)(o.L, {
        innerRef: W,
        onChange: Z,
        threshold: 0.5,
        children: (0, s.jsxs)(f.h, {
            ref: W,
            id: t,
            className: a()(
                _.backgroundColor,
                _.boxContainer,
                _[`${S}`],
                _.gradientBackground,
                z && _.overlayImageMode,
                X && _.overlayMode,
            ),
            onMouseEnter: J,
            onFocus: J,
            onBlur: Q,
            onMouseLeave: Q,
            color: "purple",
            children: [
                $ &&
                    (0, s.jsx)("div", {
                        className: _.backgroundVideoContainer,
                        children: (0, s.jsx)(g.A, {
                            preload: w ? "auto" : "none",
                            className: _.backgroundVideo,
                            src: L,
                        }),
                    }),
                (0, s.jsx)(function () {
                    return er
                        ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(ei, {}), (0, s.jsx)(es, {})] })
                        : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(es, {}), (0, s.jsx)(ei, {})] });
                }, {}),
            ],
        }),
    });
};
