a.d(t, { A: () => S });
var s = a(627968),
    r = a(64700),
    n = a(503698),
    i = a.n(n),
    o = a(735438),
    l = a(269115),
    c = a(508770),
    d = a(821609),
    p = a(745396),
    m = a(534514),
    b = a(825484),
    u = a(834730),
    f = a(315629),
    h = a(241524),
    g = a(303136),
    R = a(607470),
    v = a(174459),
    E = a(676279),
    U = a(406860),
    x = a(121),
    A = a(652215),
    M = a(693591),
    P = a(856556);
let S = (e) => {
    let {
            name: t,
            title: a,
            description: n,
            descriptionCta: S,
            previewImage: O,
            videoUrl: _,
            shouldLoadVideo: T,
            index: y,
            customVideoStyle: I,
            isReducedMotion: C,
            onClick: w,
            badgeText: N,
            badgeVariant: L = "gradient",
            size: j,
            backgroundVideoUrl: B,
            previewImageStyle: V = x.Tb.CONTAINED,
            actions: k,
            mediaRef: Y,
            boxArtContainerClassName: G,
        } = e,
        D = (0, E.TM)(),
        H = r.useRef(null),
        W = r.useRef(0),
        { sectionRef: F, handleVisibilityChange: X } = (0, U.A)({ boxType: t }),
        z = (0, h.A)("(min-width: 1140px)"),
        K = V === x.Tb.OVERLAY && (j !== x.A0.LARGE || !z),
        Q = j === x.A0.LARGE && z && V === x.Tb.OVERLAY,
        Z = null != B && z && j === x.A0.LARGE,
        J = r.useMemo(
            () =>
                (0, o.debounce)(() => {
                    v.default.track(A.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, o.snakeCase)(t) });
                }, 800),
            [t],
        ),
        $ = () => {
            null == H.current || C || ((H.current.currentTime = W.current), H.current.play()), C || Y?.current?.play();
        },
        q = () => {
            null == H.current || C || ((W.current = H.current.currentTime), H.current.pause()),
                C || Y?.current?.pause();
        },
        ee = j === x.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold",
        et = () => {
            let e = null != S && null != w,
                t = null != k && k.length > 0;
            if (!e && !t) return null;
            let a = e ? [{ variant: "secondary", onClick: w, text: S }] : k;
            return (0, s.jsx)("div", {
                className: P.bentoBoxButton,
                children: (0, s.jsx)(b.e, {
                    children: a?.map((e, t) => {
                        let { onClick: a, ...r } = e;
                        return (0, s.jsx)(
                            d.$,
                            {
                                ...r,
                                onClick: (e) => {
                                    J(), a?.(e);
                                },
                            },
                            t,
                        );
                    }),
                }),
            });
        },
        ea = () =>
            (0, s.jsxs)("div", {
                className: i()(P.textBox, P[`${j}`], Q && P.overlayTextBox),
                children: [
                    (0, s.jsxs)("div", {
                        children: [
                            null == N
                                ? null
                                : "gradient" === L
                                  ? (0, s.jsx)("div", {
                                        className: P.badgeContainer,
                                        children: (0, s.jsx)("div", {
                                            className: P.badge,
                                            children: (0, s.jsx)(m.D, {
                                                variant: "eyebrow",
                                                color: "always-white",
                                                children: N,
                                            }),
                                        }),
                                    })
                                  : (0, s.jsx)("div", {
                                        className: P.badgeContainer,
                                        children: (0, s.jsx)(c.E, { type: { text: N }, variant: L }),
                                    }),
                            (0, s.jsx)(m.D, { variant: ee, color: "text-strong", className: P.header, children: a }),
                        ],
                    }),
                    (0, s.jsx)(u.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: P.description,
                        children: n,
                    }),
                    (0, s.jsx)(et, {}),
                ],
            }),
        es = () =>
            (0, s.jsx)("div", {
                className: i()(P.boxArtContainer, P[`${j}`], G),
                children:
                    null == _ && (0, p.O)(O) && "string" != typeof O
                        ? O
                        : (0, s.jsx)(
                              R.A,
                              {
                                  playsInline: !0,
                                  preload: T ? "auto" : "none",
                                  muted: !0,
                                  poster: O,
                                  loop: !0,
                                  className: i()(Q ? P.overlayImage : P.boxVideo, { [I]: null != I }),
                                  ref: H,
                                  children: (0, s.jsx)("source", { src: _, type: D ? M.a.MP4 : M.a.WEBM }),
                              },
                              _,
                          ),
            }),
        er = y % 2 != 0;
    return (0, s.jsx)(l.L, {
        innerRef: F,
        onChange: X,
        threshold: 0.5,
        children: (0, s.jsxs)(f.h, {
            ref: F,
            id: t,
            className: i()(
                P.backgroundColor,
                P.boxContainer,
                P[`${j}`],
                P.gradientBackground,
                K && P.overlayImageMode,
                Q && P.overlayMode,
            ),
            onMouseEnter: $,
            onFocus: $,
            onBlur: q,
            onMouseLeave: q,
            color: "purple",
            children: [
                Z &&
                    (0, s.jsx)("div", {
                        className: P.backgroundVideoContainer,
                        children: (0, s.jsx)(g.A, {
                            preload: T ? "auto" : "none",
                            className: P.backgroundVideo,
                            src: B,
                        }),
                    }),
                (0, s.jsx)(
                    () =>
                        er
                            ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(ea, {}), (0, s.jsx)(es, {})] })
                            : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(es, {}), (0, s.jsx)(ea, {})] }),
                    {},
                ),
            ],
        }),
    });
};
