r.d(t, { A: () => A });
var n = r(627968),
    a = r(64700),
    i = r(503698),
    s = r.n(i),
    l = r(735438),
    d = r(230109),
    o = r(732955),
    c = r(745396),
    u = r(397927),
    m = r(241524),
    _ = r(303136),
    p = r(607470),
    f = r(954571),
    b = r(676279),
    h = r(23003),
    g = r(652215),
    x = r(693591),
    C = r(992284);
let A = (e) => {
    let {
            name: t,
            title: r,
            description: i,
            descriptionCta: A,
            previewImage: R,
            videoUrl: v,
            shouldLoadVideo: E,
            index: j,
            customVideoStyle: N,
            isReducedMotion: y,
            onClick: I,
            badgeText: P,
            badgeVariant: S = "gradient",
            size: T,
            backgroundVideoUrl: w,
            previewImageStyle: O = h.Tb.CONTAINED,
            actions: M,
            mediaRef: D,
        } = e,
        U = (0, b.TM)(),
        L = a.useRef(null),
        B = a.useRef(0),
        k = a.useRef(null),
        G = a.useRef(!1),
        V = (0, m.A)("(min-width: 1140px)"),
        F = O === h.Tb.OVERLAY && (T !== h.A0.LARGE || !V),
        H = T === h.A0.LARGE && V && O === h.Tb.OVERLAY,
        Y = null != w && V && T === h.A0.LARGE,
        W = a.useMemo(
            () =>
                (0, l.debounce)(() => {
                    f.default.track(g.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
                }, 800),
            [t],
        ),
        K = () => {
            null == L.current || y || ((L.current.currentTime = B.current), L.current.play()), y || D?.current?.play();
        },
        z = () => {
            null == L.current || y || ((B.current = L.current.currentTime), L.current.pause()),
                y || D?.current?.pause();
        },
        Z = T === h.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold",
        X = () => {
            let e = null != A && null != I,
                t = null != M && M.length > 0;
            if (!e && !t) return null;
            let r = e ? [{ variant: "secondary", onClick: I, text: A }] : M;
            return (0, n.jsx)("div", {
                className: C.bentoBoxButton,
                children: (0, n.jsx)(u.ButtonGroup, {
                    children: r?.map((e, t) => {
                        let { onClick: r, ...a } = e;
                        return (0, n.jsx)(
                            o.$nd,
                            {
                                ...a,
                                onClick: (e) => {
                                    W(), r?.(e);
                                },
                            },
                            t,
                        );
                    }),
                }),
            });
        },
        $ = () =>
            (0, n.jsxs)("div", {
                className: s()(C.textBox, C[`${T}`], H && C.overlayTextBox),
                children: [
                    (0, n.jsxs)("div", {
                        children: [
                            null == P
                                ? null
                                : "gradient" === S
                                  ? (0, n.jsx)("div", {
                                        className: C.badgeContainer,
                                        children: (0, n.jsx)("div", {
                                            className: C.badge,
                                            children: (0, n.jsx)(u.Heading, {
                                                variant: "eyebrow",
                                                color: "always-white",
                                                children: P,
                                            }),
                                        }),
                                    })
                                  : (0, n.jsx)("div", {
                                        className: C.badgeContainer,
                                        children: (0, n.jsx)(o.Exy, { type: { text: P }, variant: S }),
                                    }),
                            (0, n.jsx)(u.Heading, {
                                variant: Z,
                                color: "text-strong",
                                className: C.header,
                                children: r,
                            }),
                        ],
                    }),
                    (0, n.jsx)(u.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: C.description,
                        children: i,
                    }),
                    (0, n.jsx)(X, {}),
                ],
            }),
        q = () =>
            (0, n.jsx)("div", {
                className: s()(C.boxArtContainer, C[`${T}`]),
                children:
                    null == v && (0, c.O)(R) && "string" != typeof R
                        ? R
                        : (0, n.jsx)(
                              p.A,
                              {
                                  playsInline: !0,
                                  preload: E ? "auto" : "none",
                                  muted: !0,
                                  poster: R,
                                  loop: !0,
                                  className: s()(H ? C.overlayImage : C.boxVideo, { [N]: null != N }),
                                  ref: L,
                                  children: (0, n.jsx)("source", { src: v, type: U ? x.a.MP4 : x.a.WEBM }),
                              },
                              v,
                          ),
            }),
        J = j % 2 != 0;
    return (0, n.jsx)(d.L, {
        innerRef: k,
        onChange: (e) => {
            e &&
                !G.current &&
                ((G.current = !0),
                f.default.track(g.HAw.PREMIUM_MARKETING_BENTO_BOX_IMPRESSION, { box_type: (0, l.snakeCase)(t) }));
        },
        threshold: 0.5,
        children: (0, n.jsxs)(u.hLv, {
            ref: k,
            id: t,
            className: s()(
                C.backgroundColor,
                C.boxContainer,
                C[`${T}`],
                C.gradientBackground,
                F && C.overlayImageMode,
                H && C.overlayMode,
            ),
            onMouseEnter: K,
            onFocus: K,
            onBlur: z,
            onMouseLeave: z,
            color: "purple",
            children: [
                Y &&
                    (0, n.jsx)("div", {
                        className: C.backgroundVideoContainer,
                        children: (0, n.jsx)(_.A, {
                            preload: E ? "auto" : "none",
                            className: C.backgroundVideo,
                            src: w,
                        }),
                    }),
                (0, n.jsx)(
                    () =>
                        J
                            ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)($, {}), (0, n.jsx)(q, {})] })
                            : (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(q, {}), (0, n.jsx)($, {})] }),
                    {},
                ),
            ],
        }),
    });
};
