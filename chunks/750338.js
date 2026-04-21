a.d(t, { A: () => R });
var s = a(627968),
    r = a(64700),
    n = a(503698),
    i = a.n(n),
    l = a(735438),
    o = a(230109),
    d = a(732955),
    c = a(745396),
    u = a(397927),
    p = a(241524),
    m = a(303136),
    b = a(607470),
    f = a(954571),
    g = a(676279),
    h = a(23003),
    A = a(652215),
    x = a(693591),
    v = a(856556);
let R = (e) => {
    let {
            name: t,
            title: a,
            description: n,
            descriptionCta: R,
            previewImage: y,
            videoUrl: E,
            shouldLoadVideo: M,
            index: I,
            customVideoStyle: P,
            isReducedMotion: N,
            onClick: S,
            badgeText: U,
            badgeVariant: T = "gradient",
            size: O,
            backgroundVideoUrl: _,
            previewImageStyle: j = h.Tb.CONTAINED,
            actions: w,
            mediaRef: C,
            boxArtContainerClassName: L,
        } = e,
        k = (0, g.TM)(),
        B = r.useRef(null),
        V = r.useRef(0),
        G = r.useRef(null),
        Y = r.useRef(!1),
        D = (0, p.A)("(min-width: 1140px)"),
        H = j === h.Tb.OVERLAY && (O !== h.A0.LARGE || !D),
        F = O === h.A0.LARGE && D && j === h.Tb.OVERLAY,
        W = null != _ && D && O === h.A0.LARGE,
        X = r.useMemo(
            () =>
                (0, l.debounce)(() => {
                    f.default.track(A.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
                }, 800),
            [t],
        ),
        z = () => {
            null == B.current || N || ((B.current.currentTime = V.current), B.current.play()), N || C?.current?.play();
        },
        K = () => {
            null == B.current || N || ((V.current = B.current.currentTime), B.current.pause()),
                N || C?.current?.pause();
        },
        Q = O === h.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold",
        Z = () => {
            let e = null != R && null != S,
                t = null != w && w.length > 0;
            if (!e && !t) return null;
            let a = e ? [{ variant: "secondary", onClick: S, text: R }] : w;
            return (0, s.jsx)("div", {
                className: v.bentoBoxButton,
                children: (0, s.jsx)(u.ButtonGroup, {
                    children: a?.map((e, t) => {
                        let { onClick: a, ...r } = e;
                        return (0, s.jsx)(
                            d.$nd,
                            {
                                ...r,
                                onClick: (e) => {
                                    X(), a?.(e);
                                },
                            },
                            t,
                        );
                    }),
                }),
            });
        },
        J = () =>
            (0, s.jsxs)("div", {
                className: i()(v.textBox, v[`${O}`], F && v.overlayTextBox),
                children: [
                    (0, s.jsxs)("div", {
                        children: [
                            null == U
                                ? null
                                : "gradient" === T
                                  ? (0, s.jsx)("div", {
                                        className: v.badgeContainer,
                                        children: (0, s.jsx)("div", {
                                            className: v.badge,
                                            children: (0, s.jsx)(u.Heading, {
                                                variant: "eyebrow",
                                                color: "always-white",
                                                children: U,
                                            }),
                                        }),
                                    })
                                  : (0, s.jsx)("div", {
                                        className: v.badgeContainer,
                                        children: (0, s.jsx)(d.Exy, { type: { text: U }, variant: T }),
                                    }),
                            (0, s.jsx)(u.Heading, {
                                variant: Q,
                                color: "text-strong",
                                className: v.header,
                                children: a,
                            }),
                        ],
                    }),
                    (0, s.jsx)(u.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: v.description,
                        children: n,
                    }),
                    (0, s.jsx)(Z, {}),
                ],
            }),
        $ = () =>
            (0, s.jsx)("div", {
                className: i()(v.boxArtContainer, v[`${O}`], L),
                children:
                    null == E && (0, c.O)(y) && "string" != typeof y
                        ? y
                        : (0, s.jsx)(
                              b.A,
                              {
                                  playsInline: !0,
                                  preload: M ? "auto" : "none",
                                  muted: !0,
                                  poster: y,
                                  loop: !0,
                                  className: i()(F ? v.overlayImage : v.boxVideo, { [P]: null != P }),
                                  ref: B,
                                  children: (0, s.jsx)("source", { src: E, type: k ? x.a.MP4 : x.a.WEBM }),
                              },
                              E,
                          ),
            }),
        q = I % 2 != 0;
    return (0, s.jsx)(o.L, {
        innerRef: G,
        onChange: (e) => {
            e &&
                !Y.current &&
                ((Y.current = !0),
                f.default.track(A.HAw.PREMIUM_MARKETING_BENTO_BOX_IMPRESSION, { box_type: (0, l.snakeCase)(t) }));
        },
        threshold: 0.5,
        children: (0, s.jsxs)(u.hLv, {
            ref: G,
            id: t,
            className: i()(
                v.backgroundColor,
                v.boxContainer,
                v[`${O}`],
                v.gradientBackground,
                H && v.overlayImageMode,
                F && v.overlayMode,
            ),
            onMouseEnter: z,
            onFocus: z,
            onBlur: K,
            onMouseLeave: K,
            color: "purple",
            children: [
                W &&
                    (0, s.jsx)("div", {
                        className: v.backgroundVideoContainer,
                        children: (0, s.jsx)(m.A, {
                            preload: M ? "auto" : "none",
                            className: v.backgroundVideo,
                            src: _,
                        }),
                    }),
                (0, s.jsx)(
                    () =>
                        q
                            ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(J, {}), (0, s.jsx)($, {})] })
                            : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)($, {}), (0, s.jsx)(J, {})] }),
                    {},
                ),
            ],
        }),
    });
};
