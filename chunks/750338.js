a.d(t, { A: () => S });
var r = a(627968),
    s = a(64700),
    n = a(503698),
    i = a.n(n),
    o = a(735438),
    l = a(230109),
    c = a(508770),
    d = a(821609),
    p = a(745396),
    u = a(534514),
    b = a(825484),
    m = a(834730),
    f = a(315629),
    h = a(241524),
    g = a(303136),
    R = a(607470),
    v = a(954571),
    E = a(676279),
    M = a(260632),
    x = a(652215),
    A = a(693591),
    P = a(856556);
let S = (e) => {
    let {
            name: t,
            title: a,
            description: n,
            descriptionCta: S,
            previewImage: y,
            videoUrl: U,
            shouldLoadVideo: _,
            index: T,
            customVideoStyle: O,
            isReducedMotion: I,
            onClick: w,
            badgeText: C,
            badgeVariant: N = "gradient",
            size: j,
            backgroundVideoUrl: L,
            previewImageStyle: B = M.Tb.CONTAINED,
            actions: k,
            mediaRef: V,
            boxArtContainerClassName: Y,
        } = e,
        G = (0, E.TM)(),
        D = s.useRef(null),
        H = s.useRef(0),
        W = s.useRef(null),
        F = s.useRef(!1),
        X = (0, h.A)("(min-width: 1140px)"),
        z = B === M.Tb.OVERLAY && (j !== M.A0.LARGE || !X),
        Q = j === M.A0.LARGE && X && B === M.Tb.OVERLAY,
        K = null != L && X && j === M.A0.LARGE,
        Z = s.useMemo(
            () =>
                (0, o.debounce)(() => {
                    v.default.track(x.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, o.snakeCase)(t) });
                }, 800),
            [t],
        ),
        J = () => {
            null == D.current || I || ((D.current.currentTime = H.current), D.current.play()), I || V?.current?.play();
        },
        $ = () => {
            null == D.current || I || ((H.current = D.current.currentTime), D.current.pause()),
                I || V?.current?.pause();
        },
        q = j === M.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold",
        ee = () => {
            let e = null != S && null != w,
                t = null != k && k.length > 0;
            if (!e && !t) return null;
            let a = e ? [{ variant: "secondary", onClick: w, text: S }] : k;
            return (0, r.jsx)("div", {
                className: P.bentoBoxButton,
                children: (0, r.jsx)(b.e, {
                    children: a?.map((e, t) => {
                        let { onClick: a, ...s } = e;
                        return (0, r.jsx)(
                            d.$,
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
                className: i()(P.textBox, P[`${j}`], Q && P.overlayTextBox),
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            null == C
                                ? null
                                : "gradient" === N
                                  ? (0, r.jsx)("div", {
                                        className: P.badgeContainer,
                                        children: (0, r.jsx)("div", {
                                            className: P.badge,
                                            children: (0, r.jsx)(u.D, {
                                                variant: "eyebrow",
                                                color: "always-white",
                                                children: C,
                                            }),
                                        }),
                                    })
                                  : (0, r.jsx)("div", {
                                        className: P.badgeContainer,
                                        children: (0, r.jsx)(c.E, { type: { text: C }, variant: N }),
                                    }),
                            (0, r.jsx)(u.D, { variant: q, color: "text-strong", className: P.header, children: a }),
                        ],
                    }),
                    (0, r.jsx)(m.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: P.description,
                        children: n,
                    }),
                    (0, r.jsx)(ee, {}),
                ],
            }),
        ea = () =>
            (0, r.jsx)("div", {
                className: i()(P.boxArtContainer, P[`${j}`], Y),
                children:
                    null == U && (0, p.O)(y) && "string" != typeof y
                        ? y
                        : (0, r.jsx)(
                              R.A,
                              {
                                  playsInline: !0,
                                  preload: _ ? "auto" : "none",
                                  muted: !0,
                                  poster: y,
                                  loop: !0,
                                  className: i()(Q ? P.overlayImage : P.boxVideo, { [O]: null != O }),
                                  ref: D,
                                  children: (0, r.jsx)("source", { src: U, type: G ? A.a.MP4 : A.a.WEBM }),
                              },
                              U,
                          ),
            }),
        er = T % 2 != 0;
    return (0, r.jsx)(l.L, {
        innerRef: W,
        onChange: (e) => {
            e &&
                !F.current &&
                ((F.current = !0),
                v.default.track(x.HAw.PREMIUM_MARKETING_BENTO_BOX_IMPRESSION, { box_type: (0, o.snakeCase)(t) }));
        },
        threshold: 0.5,
        children: (0, r.jsxs)(f.h, {
            ref: W,
            id: t,
            className: i()(
                P.backgroundColor,
                P.boxContainer,
                P[`${j}`],
                P.gradientBackground,
                z && P.overlayImageMode,
                Q && P.overlayMode,
            ),
            onMouseEnter: J,
            onFocus: J,
            onBlur: $,
            onMouseLeave: $,
            color: "purple",
            children: [
                K &&
                    (0, r.jsx)("div", {
                        className: P.backgroundVideoContainer,
                        children: (0, r.jsx)(g.A, {
                            preload: _ ? "auto" : "none",
                            className: P.backgroundVideo,
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
