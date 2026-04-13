"use strict";
n.d(t, { H: () => A });
var r = n(627968),
    i = n(64700),
    s = n(941861),
    a = n(158954),
    o = n(732955),
    l = n(607470),
    u = n(256905),
    c = n(964892),
    d = n(208756),
    _ = n(135564),
    f = n(627330),
    p = n(478542),
    h = n(818348),
    m = n(6101),
    E = n(985018),
    g = n(279859);
function A(e) {
    let {
            title: t,
            body: n,
            assetUrl: A,
            previewUrl: I = A,
            disableMediaViewer: T = !1,
            action: S,
            caretConfig: y = { align: "center" },
            badge: v,
            textLink: N,
            onWatchVideo: C,
            onRequestClose: R,
            popoverRef: O,
            position: b,
            ...D
        } = e,
        { reducedMotion: L } = i.useContext(a.CZY),
        w = (0, s.R)(),
        M = (0, a.G98)().isWindowFocused?.() ?? w,
        x = i.useRef(null),
        P = (0, a.RJq)(I),
        k = i.useCallback(
            () => ({ type: "VIDEO", url: A, proxyUrl: A, alt: t, width: 1280, height: 720, className: g.$_ }),
            [A, t],
        );
    i.useEffect(() => {
        null != x.current && (!L.enabled && M ? x.current?.play().catch(h.tE) : x.current?.pause());
    }, [M, L.enabled]);
    let U = i.useCallback(() => {
            null !== x.current && x.current.pause(), R?.();
        }, [R]),
        G = i.useCallback(() => {
            null !== x.current && x.current.pause(), R?.();
        }, [R]),
        F = i.useCallback(() => {
            null !== x.current && x.current.pause();
            let e = k();
            (0, u.R)({ items: [e], startingIndex: 0, location: "VideoPopover", shouldHideMediaOptions: !0 }),
                R?.(),
                C?.();
        }, [k, C, R]),
        V = P
            ? (0, r.jsx)(a.vYh, { type: "image", src: I })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(l.A, {
                          ref: x,
                          src: I,
                          width: 232,
                          height: 131,
                          autoPlay: !L.enabled && M,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          controls: !1,
                          preload: "metadata",
                      }),
                      !T &&
                          (0, r.jsx)("div", {
                              className: g.Rr,
                              children: (0, r.jsx)(o.DMX, {
                                  playing: !1,
                                  size: "sm",
                                  "aria-label": E.intl.string(m.default.YpT3kk),
                                  onClick: F,
                              }),
                          }),
                  ],
              }),
        B = {
            targetElementRef: D.targetElementRef,
            shouldShow: D.shouldShow,
            scrollBehavior: D.scrollBehavior,
            position: b,
            onRequestClose: U,
            hasVideo: !0,
            caretConfig: y,
            ...("edge" === D.alignmentStrategy
                ? { alignmentStrategy: "edge", align: D.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, r.jsx)(c.x, {
        ...B,
        children: (0, r.jsxs)("div", {
            ref: O,
            children: [
                (0, r.jsx)(p.p, { onClick: G }),
                (0, r.jsx)(_.F, {}),
                (0, r.jsx)("div", { className: g.s, children: V }),
                (0, r.jsx)(f.D, { title: t, body: n, badge: v, textLink: N }),
                null != S ? (0, r.jsx)(d.Z, { actions: [S] }) : null,
            ],
        }),
    });
}
