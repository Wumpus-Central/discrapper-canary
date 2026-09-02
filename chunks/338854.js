n.d(t, { H: () => k });
var a = n(477900),
    r = n(582128),
    l = n(941861),
    i = n(844222),
    s = n(460890),
    o = n(978495),
    c = n(353795),
    d = n(80687),
    u = n(607470),
    m = n(256905),
    p = n(273875),
    h = n(208756),
    _ = n(798618),
    g = n(627330),
    f = n(113325),
    E = n(815021),
    x = n(375708),
    v = n(594024);
function b(e) {
    let { onClick: t, "aria-label": n = x.intl.string(x.t.cpT0Cq) } = e,
        { firstFocusableItemProps: l } = r.useContext(f.MV);
    return (0, a.jsx)("div", {
        className: v.b,
        children: (0, a.jsx)(E.J, { size: "xs", "aria-label": n, onClick: t, variant: "overlay-secondary", ...l }),
    });
}
var I = n(818348),
    S = n(422411);
function k(e) {
    let {
            title: t,
            body: n,
            assetUrl: f,
            previewUrl: E = f,
            disableMediaViewer: k = !1,
            action: C,
            caretConfig: y = { align: "center" },
            badge: M,
            textLink: A,
            onWatchVideo: j,
            onRequestClose: w,
            popoverRef: O,
            position: N,
            ...R
        } = e,
        { reducedMotion: D } = r.useContext(i.C),
        P = (0, l.R)(),
        T = (0, s.G9)().isWindowFocused?.() ?? P,
        L = r.useRef(null),
        V = (0, o.RJ)(E),
        B = (0, o.gA)(E),
        W = r.useCallback(
            () => ({ type: "VIDEO", url: f, proxyUrl: f, alt: t, width: 1280, height: 720, className: v.$_ }),
            [f, t],
        );
    r.useEffect(() => {
        null != L.current && (!D.enabled && T ? L.current?.play().catch(I.tE) : L.current?.pause());
    }, [T, D.enabled]);
    let H = r.useCallback(() => {
            null !== L.current && L.current.pause(), w?.();
        }, [w]),
        U = r.useCallback(() => {
            null !== L.current && L.current.pause(), w?.();
        }, [w]),
        G = r.useCallback(() => {
            null !== L.current && L.current.pause();
            let e = W();
            (0, m.R)({ items: [e], startingIndex: 0, location: "VideoPopover", shouldHideMediaOptions: !0 }),
                w?.(),
                j?.();
        }, [W, j, w]),
        z = (0, a.jsxs)(a.Fragment, {
            children: [
                V || B
                    ? (0, a.jsx)(c.v, { type: "image", src: E })
                    : (0, a.jsx)(u.A, {
                          ref: L,
                          src: E,
                          width: 232,
                          height: 131,
                          autoPlay: !D.enabled && T,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          controls: !1,
                          preload: "metadata",
                      }),
                !k &&
                    (0, a.jsx)("div", {
                        className: v.Rr,
                        children: (0, a.jsx)(d.D, {
                            playing: !1,
                            size: "sm",
                            "aria-label": x.intl.string(S.default.YpT3kk),
                            onClick: G,
                        }),
                    }),
            ],
        }),
        Z = {
            targetElementRef: R.targetElementRef,
            shouldShow: R.shouldShow,
            scrollBehavior: R.scrollBehavior,
            position: N,
            onRequestClose: H,
            hasVideo: !0,
            caretConfig: y,
            ...("edge" === R.alignmentStrategy
                ? { alignmentStrategy: "edge", align: R.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, a.jsx)(p.x, {
        ...Z,
        children: (0, a.jsxs)("div", {
            ref: O,
            children: [
                (0, a.jsx)(b, { onClick: U }),
                (0, a.jsx)(_.F, {}),
                (0, a.jsx)("div", { className: v.s, children: z }),
                (0, a.jsx)(g.D, { title: t, body: n, badge: M, textLink: A }),
                null != C ? (0, a.jsx)(h.Z, { actions: [C] }) : null,
            ],
        }),
    });
}
