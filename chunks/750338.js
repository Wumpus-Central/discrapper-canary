a.d(t, { A: () => A });
var s = a(627968),
    r = a(64700),
    n = a(503698),
    i = a.n(n),
    o = a(735438),
    c = a(230109),
    d = a(508770),
    l = a(821609),
    p = a(745396),
    b = a(534514),
    m = a(825484),
    u = a(834730),
    f = a(315629),
    g = a(241524),
    h = a(303136),
    R = a(607470),
    v = a(954571),
    E = a(676279),
    U = a(121),
    x = a(652215),
    M = a(693591),
    P = a(856556);
let A = (e) => {
    let {
            name: t,
            title: a,
            description: n,
            descriptionCta: A,
            previewImage: S,
            videoUrl: O,
            shouldLoadVideo: I,
            index: T,
            customVideoStyle: _,
            isReducedMotion: y,
            onClick: C,
            badgeText: w,
            badgeVariant: N = "gradient",
            size: L,
            backgroundVideoUrl: j,
            previewImageStyle: B = U.Tb.CONTAINED,
            actions: k,
            mediaRef: V,
            boxArtContainerClassName: Y,
        } = e,
        G = (0, E.TM)(),
        D = r.useRef(null),
        H = r.useRef(0),
        W = r.useRef(null),
        F = r.useRef(!1),
        X = (0, g.A)("(min-width: 1140px)"),
        z = B === U.Tb.OVERLAY && (L !== U.A0.LARGE || !X),
        K = L === U.A0.LARGE && X && B === U.Tb.OVERLAY,
        Q = null != j && X && L === U.A0.LARGE,
        Z = r.useMemo(
            () =>
                (0, o.debounce)(() => {
                    v.default.track(x.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, o.snakeCase)(t) });
                }, 800),
            [t],
        ),
        J = () => {
            null == D.current || y || ((D.current.currentTime = H.current), D.current.play()), y || V?.current?.play();
        },
        $ = () => {
            null == D.current || y || ((H.current = D.current.currentTime), D.current.pause()),
                y || V?.current?.pause();
        },
        q = L === U.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold",
        ee = () => {
            let e = null != A && null != C,
                t = null != k && k.length > 0;
            if (!e && !t) return null;
            let a = e ? [{ variant: "secondary", onClick: C, text: A }] : k;
            return (0, s.jsx)("div", {
                className: P.bentoBoxButton,
                children: (0, s.jsx)(m.e, {
                    children: a?.map((e, t) => {
                        let { onClick: a, ...r } = e;
                        return (0, s.jsx)(
                            l.$,
                            {
                                ...r,
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
            (0, s.jsxs)("div", {
                className: i()(P.textBox, P[`${L}`], K && P.overlayTextBox),
                children: [
                    (0, s.jsxs)("div", {
                        children: [
                            null == w
                                ? null
                                : "gradient" === N
                                  ? (0, s.jsx)("div", {
                                        className: P.badgeContainer,
                                        children: (0, s.jsx)("div", {
                                            className: P.badge,
                                            children: (0, s.jsx)(b.D, {
                                                variant: "eyebrow",
                                                color: "always-white",
                                                children: w,
                                            }),
                                        }),
                                    })
                                  : (0, s.jsx)("div", {
                                        className: P.badgeContainer,
                                        children: (0, s.jsx)(d.E, { type: { text: w }, variant: N }),
                                    }),
                            (0, s.jsx)(b.D, { variant: q, color: "text-strong", className: P.header, children: a }),
                        ],
                    }),
                    (0, s.jsx)(u.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: P.description,
                        children: n,
                    }),
                    (0, s.jsx)(ee, {}),
                ],
            }),
        ea = () =>
            (0, s.jsx)("div", {
                className: i()(P.boxArtContainer, P[`${L}`], Y),
                children:
                    null == O && (0, p.O)(S) && "string" != typeof S
                        ? S
                        : (0, s.jsx)(
                              R.A,
                              {
                                  playsInline: !0,
                                  preload: I ? "auto" : "none",
                                  muted: !0,
                                  poster: S,
                                  loop: !0,
                                  className: i()(K ? P.overlayImage : P.boxVideo, { [_]: null != _ }),
                                  ref: D,
                                  children: (0, s.jsx)("source", { src: O, type: G ? M.a.MP4 : M.a.WEBM }),
                              },
                              O,
                          ),
            }),
        es = T % 2 != 0;
    return (0, s.jsx)(c.L, {
        innerRef: W,
        onChange: (e) => {
            e &&
                !F.current &&
                ((F.current = !0),
                v.default.track(x.HAw.PREMIUM_MARKETING_BENTO_BOX_IMPRESSION, { box_type: (0, o.snakeCase)(t) }));
        },
        threshold: 0.5,
        children: (0, s.jsxs)(f.h, {
            ref: W,
            id: t,
            className: i()(
                P.backgroundColor,
                P.boxContainer,
                P[`${L}`],
                P.gradientBackground,
                z && P.overlayImageMode,
                K && P.overlayMode,
            ),
            onMouseEnter: J,
            onFocus: J,
            onBlur: $,
            onMouseLeave: $,
            color: "purple",
            children: [
                Q &&
                    (0, s.jsx)("div", {
                        className: P.backgroundVideoContainer,
                        children: (0, s.jsx)(h.A, {
                            preload: I ? "auto" : "none",
                            className: P.backgroundVideo,
                            src: j,
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
