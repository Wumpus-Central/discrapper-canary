n.d(t, { H: () => k });
var a = n(627968),
    r = n(64700),
    l = n(941861),
    i = n(844222),
    s = n(460890),
    o = n(978495),
    c = n(353795),
    d = n(80687),
    u = n(607470),
    m = n(256905),
    h = n(312640),
    p = n(208756),
    _ = n(798618),
    g = n(627330),
    f = n(113325),
    E = n(815021),
    x = n(375708),
    v = n(96867);
function b(e) {
    let { onClick: t, "aria-label": n = x.intl.string(x.t.cpT0Cq) } = e,
        { firstFocusableItemProps: l } = r.useContext(f.M);
    return (0, a.jsx)("div", {
        className: v.b,
        children: (0, a.jsx)(E.J, { size: "xs", "aria-label": n, onClick: t, variant: "overlay-secondary", ...l }),
    });
}
var S = n(818348),
    I = n(571247);
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
            textLink: j,
            onWatchVideo: A,
            onRequestClose: w,
            popoverRef: O,
            position: N,
            ...R
        } = e,
        { reducedMotion: D } = r.useContext(i.C),
        T = (0, l.R)(),
        P = (0, s.G9)().isWindowFocused?.() ?? T,
        L = r.useRef(null),
        V = (0, o.RJ)(E),
        B = r.useCallback(
            () => ({ type: "VIDEO", url: f, proxyUrl: f, alt: t, width: 1280, height: 720, className: v.$_ }),
            [f, t],
        );
    r.useEffect(() => {
        null != L.current && (!D.enabled && P ? L.current?.play().catch(S.tE) : L.current?.pause());
    }, [P, D.enabled]);
    let W = r.useCallback(() => {
            null !== L.current && L.current.pause(), w?.();
        }, [w]),
        H = r.useCallback(() => {
            null !== L.current && L.current.pause(), w?.();
        }, [w]),
        U = r.useCallback(() => {
            null !== L.current && L.current.pause();
            let e = B();
            (0, m.R)({ items: [e], startingIndex: 0, location: "VideoPopover", shouldHideMediaOptions: !0 }),
                w?.(),
                A?.();
        }, [B, A, w]),
        G = V
            ? (0, a.jsx)(c.v, { type: "image", src: E })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(u.A, {
                          ref: L,
                          src: E,
                          width: 232,
                          height: 131,
                          autoPlay: !D.enabled && P,
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
                                  "aria-label": x.intl.string(I.default.YpT3kk),
                                  onClick: U,
                              }),
                          }),
                  ],
              }),
        z = {
            targetElementRef: R.targetElementRef,
            shouldShow: R.shouldShow,
            scrollBehavior: R.scrollBehavior,
            position: N,
            onRequestClose: W,
            hasVideo: !0,
            caretConfig: y,
            ...("edge" === R.alignmentStrategy
                ? { alignmentStrategy: "edge", align: R.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, a.jsx)(h.x, {
        ...z,
        children: (0, a.jsxs)("div", {
            ref: O,
            children: [
                (0, a.jsx)(b, { onClick: H }),
                (0, a.jsx)(_.F, {}),
                (0, a.jsx)("div", { className: v.s, children: G }),
                (0, a.jsx)(g.D, { title: t, body: n, badge: M, textLink: j }),
                null != C ? (0, a.jsx)(p.Z, { actions: [C] }) : null,
            ],
        }),
    });
}
