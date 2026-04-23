a.d(t, { A: () => P });
var r = a(627968),
    s = a(64700),
    n = a(503698),
    i = a.n(n),
    o = a(735438),
    l = a(230109),
    d = a(508770),
    c = a(821609),
    p = a(745396),
    u = a(534514),
    b = a(825484),
    m = a(834730),
    f = a(315629),
    h = a(241524),
    A = a(303136),
    g = a(607470),
    R = a(954571),
    v = a(676279),
    E = a(23003),
    M = a(652215),
    x = a(693591),
    y = a(856556);
let P = (e) => {
    let {
            name: t,
            title: a,
            description: n,
            descriptionCta: P,
            previewImage: S,
            videoUrl: I,
            shouldLoadVideo: U,
            index: _,
            customVideoStyle: T,
            isReducedMotion: O,
            onClick: N,
            badgeText: w,
            badgeVariant: C = "gradient",
            size: j,
            backgroundVideoUrl: L,
            previewImageStyle: B = E.Tb.CONTAINED,
            actions: k,
            mediaRef: V,
            boxArtContainerClassName: Y,
        } = e,
        G = (0, v.TM)(),
        D = s.useRef(null),
        H = s.useRef(0),
        W = s.useRef(null),
        F = s.useRef(!1),
        X = (0, h.A)("(min-width: 1140px)"),
        z = B === E.Tb.OVERLAY && (j !== E.A0.LARGE || !X),
        Q = j === E.A0.LARGE && X && B === E.Tb.OVERLAY,
        K = null != L && X && j === E.A0.LARGE,
        Z = s.useMemo(
            () =>
                (0, o.debounce)(() => {
                    R.default.track(M.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, o.snakeCase)(t) });
                }, 800),
            [t],
        ),
        J = () => {
            null == D.current || O || ((D.current.currentTime = H.current), D.current.play()), O || V?.current?.play();
        },
        $ = () => {
            null == D.current || O || ((H.current = D.current.currentTime), D.current.pause()),
                O || V?.current?.pause();
        },
        q = j === E.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold",
        ee = () => {
            let e = null != P && null != N,
                t = null != k && k.length > 0;
            if (!e && !t) return null;
            let a = e ? [{ variant: "secondary", onClick: N, text: P }] : k;
            return (0, r.jsx)("div", {
                className: y.bentoBoxButton,
                children: (0, r.jsx)(b.e, {
                    children: a?.map((e, t) => {
                        let { onClick: a, ...s } = e;
                        return (0, r.jsx)(
                            c.$,
                            {
                                ...s,
                                onClick: (e) => {
                                    Z(), a?.(e);
                                },
                            },
                            t,
                        );
                    }),
                }),
            });
        },
        et = () =>
            (0, r.jsxs)("div", {
                className: i()(y.textBox, y[`${j}`], Q && y.overlayTextBox),
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            null == w
                                ? null
                                : "gradient" === C
                                  ? (0, r.jsx)("div", {
                                        className: y.badgeContainer,
                                        children: (0, r.jsx)("div", {
                                            className: y.badge,
                                            children: (0, r.jsx)(u.D, {
                                                variant: "eyebrow",
                                                color: "always-white",
                                                children: w,
                                            }),
                                        }),
                                    })
                                  : (0, r.jsx)("div", {
                                        className: y.badgeContainer,
                                        children: (0, r.jsx)(d.E, { type: { text: w }, variant: C }),
                                    }),
                            (0, r.jsx)(u.D, { variant: q, color: "text-strong", className: y.header, children: a }),
                        ],
                    }),
                    (0, r.jsx)(m.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: y.description,
                        children: n,
                    }),
                    (0, r.jsx)(ee, {}),
                ],
            }),
        ea = () =>
            (0, r.jsx)("div", {
                className: i()(y.boxArtContainer, y[`${j}`], Y),
                children:
                    null == I && (0, p.O)(S) && "string" != typeof S
                        ? S
                        : (0, r.jsx)(
                              g.A,
                              {
                                  playsInline: !0,
                                  preload: U ? "auto" : "none",
                                  muted: !0,
                                  poster: S,
                                  loop: !0,
                                  className: i()(Q ? y.overlayImage : y.boxVideo, { [T]: null != T }),
                                  ref: D,
                                  children: (0, r.jsx)("source", { src: I, type: G ? x.a.MP4 : x.a.WEBM }),
                              },
                              I,
                          ),
            }),
        er = _ % 2 != 0;
    return (0, r.jsx)(l.L, {
        innerRef: W,
        onChange: (e) => {
            e &&
                !F.current &&
                ((F.current = !0),
                R.default.track(M.HAw.PREMIUM_MARKETING_BENTO_BOX_IMPRESSION, { box_type: (0, o.snakeCase)(t) }));
        },
        threshold: 0.5,
        children: (0, r.jsxs)(f.h, {
            ref: W,
            id: t,
            className: i()(
                y.backgroundColor,
                y.boxContainer,
                y[`${j}`],
                y.gradientBackground,
                z && y.overlayImageMode,
                Q && y.overlayMode,
            ),
            onMouseEnter: J,
            onFocus: J,
            onBlur: $,
            onMouseLeave: $,
            color: "purple",
            children: [
                K &&
                    (0, r.jsx)("div", {
                        className: y.backgroundVideoContainer,
                        children: (0, r.jsx)(A.A, {
                            preload: U ? "auto" : "none",
                            className: y.backgroundVideo,
                            src: L,
                        }),
                    }),
                (0, r.jsx)(
                    () =>
                        er
                            ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(et, {}), (0, r.jsx)(ea, {})] })
                            : (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ea, {}), (0, r.jsx)(et, {})] }),
                    {},
                ),
            ],
        }),
    });
};
