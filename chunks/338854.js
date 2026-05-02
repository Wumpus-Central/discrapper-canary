r.d(t, { H: () => w });
var n = r(627968),
    a = r(64700),
    l = r(941861),
    s = r(844222),
    i = r(460890),
    o = r(978495),
    c = r(353795),
    u = r(80687),
    d = r(607470),
    h = r(256905),
    p = r(312640),
    f = r(208756),
    m = r(798618),
    g = r(627330),
    x = r(113325),
    v = r(815021),
    j = r(375708),
    C = r(96867);
function b(e) {
    let { onClick: t, "aria-label": r = j.intl.string(j.t.cpT0Cq) } = e,
        { firstFocusableItemProps: l } = a.useContext(x.M);
    return (0, n.jsx)("div", {
        className: C.b,
        children: (0, n.jsx)(v.J, { size: "xs", "aria-label": r, onClick: t, variant: "overlay-secondary", ...l }),
    });
}
var y = r(818348),
    k = r(571247);
function w(e) {
    let {
            title: t,
            body: r,
            assetUrl: x,
            previewUrl: v = x,
            disableMediaViewer: w = !1,
            action: N,
            caretConfig: E = { align: "center" },
            badge: L,
            textLink: R,
            onWatchVideo: A,
            onRequestClose: S,
            popoverRef: M,
            position: B,
            ..._
        } = e,
        { reducedMotion: T } = a.useContext(s.C),
        $ = (0, l.R)(),
        Z = (0, i.G9)().isWindowFocused?.() ?? $,
        D = a.useRef(null),
        F = (0, o.RJ)(v),
        I = a.useCallback(
            () => ({ type: "VIDEO", url: x, proxyUrl: x, alt: t, width: 1280, height: 720, className: C.$_ }),
            [x, t],
        );
    a.useEffect(() => {
        null != D.current && (!T.enabled && Z ? D.current?.play().catch(y.tE) : D.current?.pause());
    }, [Z, T.enabled]);
    let P = a.useCallback(() => {
            null !== D.current && D.current.pause(), S?.();
        }, [S]),
        O = a.useCallback(() => {
            null !== D.current && D.current.pause(), S?.();
        }, [S]),
        Q = a.useCallback(() => {
            null !== D.current && D.current.pause();
            let e = I();
            (0, h.R)({ items: [e], startingIndex: 0, location: "VideoPopover", shouldHideMediaOptions: !0 }),
                S?.(),
                A?.();
        }, [I, A, S]),
        U = F
            ? (0, n.jsx)(c.v, { type: "image", src: v })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(d.A, {
                          ref: D,
                          src: v,
                          width: 232,
                          height: 131,
                          autoPlay: !T.enabled && Z,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          controls: !1,
                          preload: "metadata",
                      }),
                      !w &&
                          (0, n.jsx)("div", {
                              className: C.Rr,
                              children: (0, n.jsx)(u.D, {
                                  playing: !1,
                                  size: "sm",
                                  "aria-label": j.intl.string(k.default.YpT3kk),
                                  onClick: Q,
                              }),
                          }),
                  ],
              }),
        q = {
            targetElementRef: _.targetElementRef,
            shouldShow: _.shouldShow,
            scrollBehavior: _.scrollBehavior,
            position: B,
            onRequestClose: P,
            hasVideo: !0,
            caretConfig: E,
            ...("edge" === _.alignmentStrategy
                ? { alignmentStrategy: "edge", align: _.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, n.jsx)(p.x, {
        ...q,
        children: (0, n.jsxs)("div", {
            ref: M,
            children: [
                (0, n.jsx)(b, { onClick: O }),
                (0, n.jsx)(m.F, {}),
                (0, n.jsx)("div", { className: C.s, children: U }),
                (0, n.jsx)(g.D, { title: t, body: r, badge: L, textLink: R }),
                null != N ? (0, n.jsx)(f.Z, { actions: [N] }) : null,
            ],
        }),
    });
}
