a.d(t, { H: () => A });
var n = a(627968),
    r = a(64700),
    l = a(941861),
    i = a(844222),
    s = a(460890),
    o = a(978495),
    c = a(608250),
    d = a(80687),
    u = a(607470),
    h = a(256905),
    m = a(964892),
    p = a(208756),
    g = a(135564),
    _ = a(627330),
    f = a(478542),
    v = a(818348),
    x = a(571247),
    E = a(985018),
    w = a(96867);
function A(e) {
    let {
            title: t,
            body: a,
            assetUrl: A,
            previewUrl: b = A,
            disableMediaViewer: I = !1,
            action: C,
            caretConfig: y = { align: "center" },
            badge: S,
            textLink: j,
            onWatchVideo: M,
            onRequestClose: k,
            popoverRef: N,
            position: T,
            ...O
        } = e,
        { reducedMotion: R } = r.useContext(i.C),
        D = (0, l.R)(),
        L = (0, s.G9)().isWindowFocused?.() ?? D,
        P = r.useRef(null),
        V = (0, o.RJ)(b),
        B = r.useCallback(
            () => ({ type: "VIDEO", url: A, proxyUrl: A, alt: t, width: 1280, height: 720, className: w.$_ }),
            [A, t],
        );
    r.useEffect(() => {
        null != P.current && (!R.enabled && L ? P.current?.play().catch(v.tE) : P.current?.pause());
    }, [L, R.enabled]);
    let U = r.useCallback(() => {
            null !== P.current && P.current.pause(), k?.();
        }, [k]),
        Z = r.useCallback(() => {
            null !== P.current && P.current.pause(), k?.();
        }, [k]),
        H = r.useCallback(() => {
            null !== P.current && P.current.pause();
            let e = B();
            (0, h.R)({ items: [e], startingIndex: 0, location: "VideoPopover", shouldHideMediaOptions: !0 }),
                k?.(),
                M?.();
        }, [B, M, k]),
        W = V
            ? (0, n.jsx)(c.v, { type: "image", src: b })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(u.A, {
                          ref: P,
                          src: b,
                          width: 232,
                          height: 131,
                          autoPlay: !R.enabled && L,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          controls: !1,
                          preload: "metadata",
                      }),
                      !I &&
                          (0, n.jsx)("div", {
                              className: w.Rr,
                              children: (0, n.jsx)(d.D, {
                                  playing: !1,
                                  size: "sm",
                                  "aria-label": E.intl.string(x.default.YpT3kk),
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
                (0, n.jsx)(f.p, { onClick: Z }),
                (0, n.jsx)(g.F, {}),
                (0, n.jsx)("div", { className: w.s, children: W }),
                (0, n.jsx)(_.D, { title: t, body: a, badge: S, textLink: j }),
                null != C ? (0, n.jsx)(p.Z, { actions: [C] }) : null,
            ],
        }),
    });
}
