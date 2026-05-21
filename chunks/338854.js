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
    f = r(312640),
    p = r(208756),
    m = r(798618),
    x = r(627330),
    g = r(113325),
    v = r(815021),
    j = r(375708),
    b = r(96867);
function y(e) {
    let { onClick: t, "aria-label": r = j.intl.string(j.t.cpT0Cq) } = e,
        { firstFocusableItemProps: l } = a.useContext(g.M);
    return (0, n.jsx)("div", {
        className: b.b,
        children: (0, n.jsx)(v.J, { size: "xs", "aria-label": r, onClick: t, variant: "overlay-secondary", ...l }),
    });
}
var C = r(818348),
    k = r(571247);
function w(e) {
    let {
            title: t,
            body: r,
            assetUrl: g,
            previewUrl: v = g,
            disableMediaViewer: w = !1,
            action: N,
            caretConfig: L = { align: "center" },
            badge: R,
            textLink: E,
            onWatchVideo: S,
            onRequestClose: A,
            popoverRef: M,
            position: B,
            ...$
        } = e,
        { reducedMotion: _ } = a.useContext(s.C),
        P = (0, l.R)(),
        D = (0, i.G9)().isWindowFocused?.() ?? P,
        F = a.useRef(null),
        Q = (0, o.RJ)(v),
        T = a.useCallback(
            () => ({ type: "VIDEO", url: g, proxyUrl: g, alt: t, width: 1280, height: 720, className: b.$_ }),
            [g, t],
        );
    a.useEffect(() => {
        null != F.current && (!_.enabled && D ? F.current?.play().catch(C.tE) : F.current?.pause());
    }, [D, _.enabled]);
    let q = a.useCallback(() => {
            null !== F.current && F.current.pause(), A?.();
        }, [A]),
        O = a.useCallback(() => {
            null !== F.current && F.current.pause(), A?.();
        }, [A]),
        U = a.useCallback(() => {
            null !== F.current && F.current.pause();
            let e = T();
            (0, h.R)({ items: [e], startingIndex: 0, location: "VideoPopover", shouldHideMediaOptions: !0 }),
                A?.(),
                S?.();
        }, [T, S, A]),
        Z = Q
            ? (0, n.jsx)(c.v, { type: "image", src: v })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(d.A, {
                          ref: F,
                          src: v,
                          width: 232,
                          height: 131,
                          autoPlay: !_.enabled && D,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          controls: !1,
                          preload: "metadata",
                      }),
                      !w &&
                          (0, n.jsx)("div", {
                              className: b.Rr,
                              children: (0, n.jsx)(u.D, {
                                  playing: !1,
                                  size: "sm",
                                  "aria-label": j.intl.string(k.default.YpT3kk),
                                  onClick: U,
                              }),
                          }),
                  ],
              }),
        z = {
            targetElementRef: $.targetElementRef,
            shouldShow: $.shouldShow,
            scrollBehavior: $.scrollBehavior,
            position: B,
            onRequestClose: q,
            hasVideo: !0,
            caretConfig: L,
            ...("edge" === $.alignmentStrategy
                ? { alignmentStrategy: "edge", align: $.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, n.jsx)(f.x, {
        ...z,
        children: (0, n.jsxs)("div", {
            ref: M,
            children: [
                (0, n.jsx)(y, { onClick: O }),
                (0, n.jsx)(m.F, {}),
                (0, n.jsx)("div", { className: b.s, children: Z }),
                (0, n.jsx)(x.D, { title: t, body: r, badge: R, textLink: E }),
                null != N ? (0, n.jsx)(p.Z, { actions: [N] }) : null,
            ],
        }),
    });
}
