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
    j = r(985018),
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
            caretConfig: E = { align: "center" },
            badge: L,
            textLink: A,
            onWatchVideo: R,
            onRequestClose: M,
            popoverRef: B,
            position: S,
            ..._
        } = e,
        { reducedMotion: T } = a.useContext(s.C),
        $ = (0, l.R)(),
        I = (0, i.G9)().isWindowFocused?.() ?? $,
        P = a.useRef(null),
        Z = (0, o.RJ)(v),
        D = a.useCallback(
            () => ({ type: "VIDEO", url: g, proxyUrl: g, alt: t, width: 1280, height: 720, className: b.$_ }),
            [g, t],
        );
    a.useEffect(() => {
        null != P.current && (!T.enabled && I ? P.current?.play().catch(C.tE) : P.current?.pause());
    }, [I, T.enabled]);
    let F = a.useCallback(() => {
            null !== P.current && P.current.pause(), M?.();
        }, [M]),
        O = a.useCallback(() => {
            null !== P.current && P.current.pause(), M?.();
        }, [M]),
        Q = a.useCallback(() => {
            null !== P.current && P.current.pause();
            let e = D();
            (0, h.R)({ items: [e], startingIndex: 0, location: "VideoPopover", shouldHideMediaOptions: !0 }),
                M?.(),
                R?.();
        }, [D, R, M]),
        U = Z
            ? (0, n.jsx)(c.v, { type: "image", src: v })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(d.A, {
                          ref: P,
                          src: v,
                          width: 232,
                          height: 131,
                          autoPlay: !T.enabled && I,
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
                                  onClick: Q,
                              }),
                          }),
                  ],
              }),
        z = {
            targetElementRef: _.targetElementRef,
            shouldShow: _.shouldShow,
            scrollBehavior: _.scrollBehavior,
            position: S,
            onRequestClose: F,
            hasVideo: !0,
            caretConfig: E,
            ...("edge" === _.alignmentStrategy
                ? { alignmentStrategy: "edge", align: _.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, n.jsx)(f.x, {
        ...z,
        children: (0, n.jsxs)("div", {
            ref: B,
            children: [
                (0, n.jsx)(y, { onClick: O }),
                (0, n.jsx)(m.F, {}),
                (0, n.jsx)("div", { className: b.s, children: U }),
                (0, n.jsx)(x.D, { title: t, body: r, badge: L, textLink: A }),
                null != N ? (0, n.jsx)(p.Z, { actions: [N] }) : null,
            ],
        }),
    });
}
