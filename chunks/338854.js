a.d(t, { H: () => b });
var n = a(627968),
    r = a(64700),
    l = a(941861),
    i = a(844222),
    s = a(460890),
    o = a(978495),
    c = a(353795),
    d = a(80687),
    u = a(607470),
    h = a(256905),
    m = a(312640),
    p = a(208756),
    _ = a(798618),
    g = a(627330),
    f = a(113325),
    v = a(815021),
    E = a(985018),
    x = a(96867);
function w(e) {
    let { onClick: t, "aria-label": a = E.intl.string(E.t.cpT0Cq) } = e,
        { firstFocusableItemProps: l } = r.useContext(f.M);
    return (0, n.jsx)("div", {
        className: x.b,
        children: (0, n.jsx)(v.J, { size: "xs", "aria-label": a, onClick: t, variant: "overlay-secondary", ...l }),
    });
}
var I = a(818348),
    A = a(571247);
function b(e) {
    let {
            title: t,
            body: a,
            assetUrl: f,
            previewUrl: v = f,
            disableMediaViewer: b = !1,
            action: C,
            caretConfig: y = { align: "center" },
            badge: M,
            textLink: S,
            onWatchVideo: k,
            onRequestClose: j,
            popoverRef: N,
            position: T,
            ...O
        } = e,
        { reducedMotion: R } = r.useContext(i.C),
        D = (0, l.R)(),
        L = (0, s.G9)().isWindowFocused?.() ?? D,
        P = r.useRef(null),
        B = (0, o.RJ)(v),
        V = r.useCallback(
            () => ({ type: "VIDEO", url: f, proxyUrl: f, alt: t, width: 1280, height: 720, className: x.$_ }),
            [f, t],
        );
    r.useEffect(() => {
        null != P.current && (!R.enabled && L ? P.current?.play().catch(I.tE) : P.current?.pause());
    }, [L, R.enabled]);
    let U = r.useCallback(() => {
            null !== P.current && P.current.pause(), j?.();
        }, [j]),
        Z = r.useCallback(() => {
            null !== P.current && P.current.pause(), j?.();
        }, [j]),
        H = r.useCallback(() => {
            null !== P.current && P.current.pause();
            let e = V();
            (0, h.R)({ items: [e], startingIndex: 0, location: "VideoPopover", shouldHideMediaOptions: !0 }),
                j?.(),
                k?.();
        }, [V, k, j]),
        W = B
            ? (0, n.jsx)(c.v, { type: "image", src: v })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(u.A, {
                          ref: P,
                          src: v,
                          width: 232,
                          height: 131,
                          autoPlay: !R.enabled && L,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          controls: !1,
                          preload: "metadata",
                      }),
                      !b &&
                          (0, n.jsx)("div", {
                              className: x.Rr,
                              children: (0, n.jsx)(d.D, {
                                  playing: !1,
                                  size: "sm",
                                  "aria-label": E.intl.string(A.default.YpT3kk),
                                  onClick: H,
                              }),
                          }),
                  ],
              }),
        G = {
            targetElementRef: O.targetElementRef,
            shouldShow: O.shouldShow,
            scrollBehavior: O.scrollBehavior,
            position: T,
            onRequestClose: U,
            hasVideo: !0,
            caretConfig: y,
            ...("edge" === O.alignmentStrategy
                ? { alignmentStrategy: "edge", align: O.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, n.jsx)(m.x, {
        ...G,
        children: (0, n.jsxs)("div", {
            ref: N,
            children: [
                (0, n.jsx)(w, { onClick: Z }),
                (0, n.jsx)(_.F, {}),
                (0, n.jsx)("div", { className: x.s, children: W }),
                (0, n.jsx)(g.D, { title: t, body: a, badge: M, textLink: S }),
                null != C ? (0, n.jsx)(p.Z, { actions: [C] }) : null,
            ],
        }),
    });
}
