"use strict";
n.d(t, { H: () => C });
var i = n(627968),
    r = n(64700),
    s = n(941861),
    a = n(844222),
    o = n(460890),
    l = n(978495),
    d = n(353795),
    _ = n(80687),
    u = n(607470),
    c = n(256905),
    E = n(312640),
    h = n(208756),
    m = n(798618),
    f = n(627330),
    g = n(113325),
    p = n(815021),
    A = n(985018),
    I = n(96867);
function T(e) {
    let { onClick: t, "aria-label": n = A.intl.string(A.t.cpT0Cq) } = e,
        { firstFocusableItemProps: s } = r.useContext(g.M);
    return (0, i.jsx)("div", {
        className: I.b,
        children: (0, i.jsx)(p.J, { size: "xs", "aria-label": n, onClick: t, variant: "overlay-secondary", ...s }),
    });
}
var S = n(818348),
    N = n(571247);
function C(e) {
    let {
            title: t,
            body: n,
            assetUrl: g,
            previewUrl: p = g,
            disableMediaViewer: C = !1,
            action: R,
            caretConfig: O = { align: "center" },
            badge: y,
            textLink: v,
            onWatchVideo: D,
            onRequestClose: L,
            popoverRef: b,
            position: w,
            ...P
        } = e,
        { reducedMotion: k } = r.useContext(a.C),
        M = (0, s.R)(),
        U = (0, o.G9)().isWindowFocused?.() ?? M,
        x = r.useRef(null),
        G = (0, l.RJ)(p),
        V = r.useCallback(
            () => ({ type: "VIDEO", url: g, proxyUrl: g, alt: t, width: 1280, height: 720, className: I.$_ }),
            [g, t],
        );
    r.useEffect(() => {
        null != x.current && (!k.enabled && U ? x.current?.play().catch(S.tE) : x.current?.pause());
    }, [U, k.enabled]);
    let F = r.useCallback(() => {
            null !== x.current && x.current.pause(), L?.();
        }, [L]),
        B = r.useCallback(() => {
            null !== x.current && x.current.pause(), L?.();
        }, [L]),
        H = r.useCallback(() => {
            null !== x.current && x.current.pause();
            let e = V();
            (0, c.R)({ items: [e], startingIndex: 0, location: "VideoPopover", shouldHideMediaOptions: !0 }),
                L?.(),
                D?.();
        }, [V, D, L]),
        j = G
            ? (0, i.jsx)(d.v, { type: "image", src: p })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(u.A, {
                          ref: x,
                          src: p,
                          width: 232,
                          height: 131,
                          autoPlay: !k.enabled && U,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          controls: !1,
                          preload: "metadata",
                      }),
                      !C &&
                          (0, i.jsx)("div", {
                              className: I.Rr,
                              children: (0, i.jsx)(_.D, {
                                  playing: !1,
                                  size: "sm",
                                  "aria-label": A.intl.string(N.default.YpT3kk),
                                  onClick: H,
                              }),
                          }),
                  ],
              }),
        W = {
            targetElementRef: P.targetElementRef,
            shouldShow: P.shouldShow,
            scrollBehavior: P.scrollBehavior,
            position: w,
            onRequestClose: F,
            hasVideo: !0,
            caretConfig: O,
            ...("edge" === P.alignmentStrategy
                ? { alignmentStrategy: "edge", align: P.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, i.jsx)(E.x, {
        ...W,
        children: (0, i.jsxs)("div", {
            ref: b,
            children: [
                (0, i.jsx)(T, { onClick: B }),
                (0, i.jsx)(m.F, {}),
                (0, i.jsx)("div", { className: I.s, children: j }),
                (0, i.jsx)(f.D, { title: t, body: n, badge: y, textLink: v }),
                null != R ? (0, i.jsx)(h.Z, { actions: [R] }) : null,
            ],
        }),
    });
}
