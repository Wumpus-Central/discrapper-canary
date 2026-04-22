a.d(t, { A: () => P });
var s = a(627968),
    r = a(64700),
    n = a(503698),
    i = a.n(n),
    o = a(735438),
    d = a(230109),
    l = a(508770),
    c = a(821609),
    p = a(745396),
    u = a(534514),
    m = a(825484),
    b = a(834730),
    f = a(315629),
    h = a(241524),
    A = a(303136),
    g = a(607470),
    v = a(954571),
    E = a(676279),
    R = a(23003),
    x = a(652215),
    y = a(693591),
    M = a(856556);
let P = (e) => {
    let {
            name: t,
            title: a,
            description: n,
            descriptionCta: P,
            previewImage: S,
            videoUrl: I,
            shouldLoadVideo: T,
            index: N,
            customVideoStyle: _,
            isReducedMotion: O,
            onClick: U,
            badgeText: C,
            badgeVariant: j = "gradient",
            size: w,
            backgroundVideoUrl: L,
            previewImageStyle: B = R.Tb.CONTAINED,
            actions: Y,
            mediaRef: k,
            boxArtContainerClassName: G,
        } = e,
        V = (0, E.TM)(),
        H = r.useRef(null),
        D = r.useRef(0),
        W = r.useRef(null),
        X = r.useRef(!1),
        F = (0, h.A)("(min-width: 1140px)"),
        z = B === R.Tb.OVERLAY && (w !== R.A0.LARGE || !F),
        K = w === R.A0.LARGE && F && B === R.Tb.OVERLAY,
        Q = null != L && F && w === R.A0.LARGE,
        $ = r.useMemo(
            () =>
                (0, o.debounce)(() => {
                    v.default.track(x.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, o.snakeCase)(t) });
                }, 800),
            [t],
        ),
        J = () => {
            null == H.current || O || ((H.current.currentTime = D.current), H.current.play()), O || k?.current?.play();
        },
        q = () => {
            null == H.current || O || ((D.current = H.current.currentTime), H.current.pause()),
                O || k?.current?.pause();
        },
        Z = w === R.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold",
        ee = () => {
            let e = null != P && null != U,
                t = null != Y && Y.length > 0;
            if (!e && !t) return null;
            let a = e ? [{ variant: "secondary", onClick: U, text: P }] : Y;
            return (0, s.jsx)("div", {
                className: M.bentoBoxButton,
                children: (0, s.jsx)(m.e, {
                    children: a?.map((e, t) => {
                        let { onClick: a, ...r } = e;
                        return (0, s.jsx)(
                            c.$,
                            {
                                ...r,
                                onClick: (e) => {
                                    $(), a?.(e);
                                },
                            },
                            t,
                        );
                    }),
                }),
            });
        },
        et = () =>
            (0, s.jsxs)("div", {
                className: i()(M.textBox, M[`${w}`], K && M.overlayTextBox),
                children: [
                    (0, s.jsxs)("div", {
                        children: [
                            null == C
                                ? null
                                : "gradient" === j
                                  ? (0, s.jsx)("div", {
                                        className: M.badgeContainer,
                                        children: (0, s.jsx)("div", {
                                            className: M.badge,
                                            children: (0, s.jsx)(u.D, {
                                                variant: "eyebrow",
                                                color: "always-white",
                                                children: C,
                                            }),
                                        }),
                                    })
                                  : (0, s.jsx)("div", {
                                        className: M.badgeContainer,
                                        children: (0, s.jsx)(l.E, { type: { text: C }, variant: j }),
                                    }),
                            (0, s.jsx)(u.D, { variant: Z, color: "text-strong", className: M.header, children: a }),
                        ],
                    }),
                    (0, s.jsx)(b.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: M.description,
                        children: n,
                    }),
                    (0, s.jsx)(ee, {}),
                ],
            }),
        ea = () =>
            (0, s.jsx)("div", {
                className: i()(M.boxArtContainer, M[`${w}`], G),
                children:
                    null == I && (0, p.O)(S) && "string" != typeof S
                        ? S
                        : (0, s.jsx)(
                              g.A,
                              {
                                  playsInline: !0,
                                  preload: T ? "auto" : "none",
                                  muted: !0,
                                  poster: S,
                                  loop: !0,
                                  className: i()(K ? M.overlayImage : M.boxVideo, { [_]: null != _ }),
                                  ref: H,
                                  children: (0, s.jsx)("source", { src: I, type: V ? y.a.MP4 : y.a.WEBM }),
                              },
                              I,
                          ),
            }),
        es = N % 2 != 0;
    return (0, s.jsx)(d.L, {
        innerRef: W,
        onChange: (e) => {
            e &&
                !X.current &&
                ((X.current = !0),
                v.default.track(x.HAw.PREMIUM_MARKETING_BENTO_BOX_IMPRESSION, { box_type: (0, o.snakeCase)(t) }));
        },
        threshold: 0.5,
        children: (0, s.jsxs)(f.h, {
            ref: W,
            id: t,
            className: i()(
                M.backgroundColor,
                M.boxContainer,
                M[`${w}`],
                M.gradientBackground,
                z && M.overlayImageMode,
                K && M.overlayMode,
            ),
            onMouseEnter: J,
            onFocus: J,
            onBlur: q,
            onMouseLeave: q,
            color: "purple",
            children: [
                Q &&
                    (0, s.jsx)("div", {
                        className: M.backgroundVideoContainer,
                        children: (0, s.jsx)(A.A, {
                            preload: T ? "auto" : "none",
                            className: M.backgroundVideo,
                            src: L,
                        }),
                    }),
                (0, s.jsx)(
                    () =>
                        es
                            ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(et, {}), (0, s.jsx)(ea, {})] })
                            : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(ea, {}), (0, s.jsx)(et, {})] }),
                    {},
                ),
            ],
        }),
    });
};
