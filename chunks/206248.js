t.d(n, { H: () => M });
var a = t(477900),
    l = t(582128),
    i = t(941861),
    r = t(844222),
    d = t(460890),
    s = t(978495),
    _ = t(353795),
    c = t(80687),
    o = t(607470),
    u = t(256905),
    E = t(273875),
    m = t(208756),
    p = t(798618),
    h = t(627330),
    I = t(478542),
    S = t(818348),
    g = t(314341),
    b = t(375708),
    A = t(594024);
function M(e) {
    let {
            title: n,
            body: t,
            assetUrl: M,
            previewUrl: O = M,
            disableMediaViewer: k = !1,
            action: D,
            caretConfig: C = { align: "center" },
            badge: T,
            textLink: y,
            onWatchVideo: P,
            onRequestClose: R,
            popoverRef: f,
            position: w,
            ...N
        } = e,
        { reducedMotion: v } = l.useContext(r.C),
        x = (0, i.R)(),
        V = (0, d.G9)().isWindowFocused?.() ?? x,
        L = l.useRef(null),
        j = (0, s.RJ)(O),
        B = (0, s.gA)(O),
        H = l.useCallback(
            () => ({ type: "VIDEO", url: M, proxyUrl: M, alt: n, width: 1280, height: 720, className: A.$_ }),
            [M, n],
        );
    l.useEffect(() => {
        null != L.current && (!v.enabled && V ? L.current?.play().catch(S.tE) : L.current?.pause());
    }, [V, v.enabled]);
    let W = l.useCallback(() => {
            (null !== L.current && L.current.pause(), R?.());
        }, [R]),
        U = l.useCallback(() => {
            (null !== L.current && L.current.pause(), R?.());
        }, [R]),
        G = l.useCallback(() => {
            null !== L.current && L.current.pause();
            let e = H();
            ((0, u.R)({ items: [e], startingIndex: 0, location: "VideoPopover", shouldHideMediaOptions: !0 }),
                R?.(),
                P?.());
        }, [H, P, R]),
        z = (0, a.jsxs)(a.Fragment, {
            children: [
                j || B
                    ? (0, a.jsx)(_.v, { type: "image", src: O })
                    : (0, a.jsx)(o.A, {
                          ref: L,
                          src: O,
                          width: 232,
                          height: 131,
                          autoPlay: !v.enabled && V,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          controls: !1,
                          preload: "metadata",
                      }),
                !k &&
                    (0, a.jsx)("div", {
                        className: A.Rr,
                        children: (0, a.jsx)(c.D, {
                            playing: !1,
                            size: "sm",
                            "aria-label": b.intl.string(g.default.YpT3kk),
                            onClick: G,
                        }),
                    }),
            ],
        }),
        K = {
            targetElementRef: N.targetElementRef,
            shouldShow: N.shouldShow,
            scrollBehavior: N.scrollBehavior,
            position: w,
            onRequestClose: W,
            hasVideo: !0,
            caretConfig: C,
            ...("edge" === N.alignmentStrategy
                ? { alignmentStrategy: "edge", align: N.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, a.jsx)(E.x, {
        ...K,
        children: (0, a.jsxs)("div", {
            ref: f,
            children: [
                (0, a.jsx)(I.p, { onClick: U }),
                (0, a.jsx)(p.F, {}),
                (0, a.jsx)("div", { className: A.s, children: z }),
                (0, a.jsx)(h.D, { title: n, body: t, badge: T, textLink: y }),
                null != D ? (0, a.jsx)(m.Z, { actions: [D] }) : null,
            ],
        }),
    });
}
