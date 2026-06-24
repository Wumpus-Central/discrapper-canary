r.d(n, { A: () => k });
var l = r(627968),
    a = r(64700),
    t = r(503698),
    s = r.n(t),
    o = r(735438),
    i = r(269115),
    c = r(508770),
    u = r(821609),
    d = r(745396),
    x = r(534514),
    h = r(825484),
    p = r(834730),
    j = r(315629),
    m = r(241524),
    b = r(303136),
    A = r(607470),
    g = r(174459),
    v = r(676279),
    C = r(406860),
    y = r(280041),
    E = r(652215),
    N = r(693591),
    f = r(856556);
let k = (e) => {
    let {
            name: n,
            title: r,
            description: t,
            descriptionCta: k,
            previewImage: R,
            videoUrl: _,
            shouldLoadVideo: M,
            index: T,
            customVideoStyle: B,
            isReducedMotion: I,
            onClick: L,
            badgeText: w,
            badgeVariant: O = "gradient",
            size: V,
            backgroundVideoUrl: G,
            previewImageStyle: D = y.Tb.CONTAINED,
            actions: P,
            mediaRef: $,
            boxArtContainerClassName: F,
        } = e,
        H = (0, v.TM)(),
        S = a.useRef(null),
        W = a.useRef(0),
        { sectionRef: K, handleVisibilityChange: U } = (0, C.A)({ boxType: n }),
        X = (0, m.A)("(min-width: 1140px)"),
        Y = D === y.Tb.OVERLAY && (V !== y.A0.LARGE || !X),
        q = V === y.A0.LARGE && X && D === y.Tb.OVERLAY,
        z = null != G && X && V === y.A0.LARGE,
        J = a.useMemo(
            () =>
                (0, o.debounce)(() => {
                    g.default.track(E.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, o.snakeCase)(n) });
                }, 800),
            [n],
        );
    function Q() {
        null == S.current || I || ((S.current.currentTime = W.current), S.current.play()), I || $?.current?.play();
    }
    function Z() {
        null == S.current || I || ((W.current = S.current.currentTime), S.current.pause()), I || $?.current?.pause();
    }
    let ee = V === y.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold",
        en = () => {
            let e = null != k && null != L,
                n = null != P && P.length > 0;
            if (!e && !n) return null;
            let r = e ? [{ variant: "secondary", onClick: L, text: k }] : P;
            return (0, l.jsx)("div", {
                className: f.bentoBoxButton,
                children: (0, l.jsx)(h.e, {
                    children: r?.map((e, n) => {
                        let { onClick: r, ...a } = e;
                        return (0, l.jsx)(
                            u.$,
                            {
                                ...a,
                                onClick: function (e) {
                                    J(), r?.(e);
                                },
                            },
                            n,
                        );
                    }),
                }),
            });
        },
        er = () =>
            (0, l.jsxs)("div", {
                className: s()(f.textBox, f[`${V}`], q && f.overlayTextBox),
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            null == w
                                ? null
                                : "gradient" === O
                                  ? (0, l.jsx)("div", {
                                        className: f.badgeContainer,
                                        children: (0, l.jsx)("div", {
                                            className: f.badge,
                                            children: (0, l.jsx)(x.D, {
                                                variant: "eyebrow",
                                                color: "always-white",
                                                children: w,
                                            }),
                                        }),
                                    })
                                  : (0, l.jsx)("div", {
                                        className: f.badgeContainer,
                                        children: (0, l.jsx)(c.E, { type: { text: w }, variant: O }),
                                    }),
                            (0, l.jsx)(x.D, { variant: ee, color: "text-strong", className: f.header, children: r }),
                        ],
                    }),
                    (0, l.jsx)(p.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: f.description,
                        children: t,
                    }),
                    (0, l.jsx)(en, {}),
                ],
            }),
        el = () =>
            (0, l.jsx)("div", {
                className: s()(f.boxArtContainer, f[`${V}`], F),
                children:
                    null == _ && (0, d.O)(R) && "string" != typeof R
                        ? R
                        : (0, l.jsx)(
                              A.A,
                              {
                                  playsInline: !0,
                                  preload: M ? "auto" : "none",
                                  muted: !0,
                                  poster: R,
                                  loop: !0,
                                  className: s()(q ? f.overlayImage : f.boxVideo, { [B]: null != B }),
                                  ref: S,
                                  children: (0, l.jsx)("source", { src: _, type: H ? N.a.MP4 : N.a.WEBM }),
                              },
                              _,
                          ),
            }),
        ea = T % 2 != 0;
    return (0, l.jsx)(i.L, {
        innerRef: K,
        onChange: U,
        threshold: 0.5,
        children: (0, l.jsxs)(j.h, {
            ref: K,
            id: n,
            className: s()(
                f.backgroundColor,
                f.boxContainer,
                f[`${V}`],
                f.gradientBackground,
                Y && f.overlayImageMode,
                q && f.overlayMode,
            ),
            onMouseEnter: Q,
            onFocus: Q,
            onBlur: Z,
            onMouseLeave: Z,
            color: "purple",
            children: [
                z &&
                    (0, l.jsx)("div", {
                        className: f.backgroundVideoContainer,
                        children: (0, l.jsx)(b.A, {
                            preload: M ? "auto" : "none",
                            className: f.backgroundVideo,
                            src: G,
                        }),
                    }),
                (0, l.jsx)(function () {
                    return ea
                        ? (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(er, {}), (0, l.jsx)(el, {})] })
                        : (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(el, {}), (0, l.jsx)(er, {})] });
                }, {}),
            ],
        }),
    });
};
