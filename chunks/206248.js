"use strict";
n.d(t, { H: () => A });
var r = n(627968),
    i = n(64700),
    a = n(941861),
    s = n(158954),
    o = n(732955),
    l = n(607470),
    u = n(256905),
    c = n(964892),
    d = n(208756),
    _ = n(135564),
    f = n(627330),
    p = n(478542),
    h = n(818348),
    m = n(763600),
    g = n(985018),
    E = n(161222);
function A(e) {
    let {
            title: t,
            body: n,
            assetUrl: A,
            previewUrl: I = A,
            disableMediaViewer: T = !1,
            action: y,
            caretConfig: S = { align: "center" },
            badge: v,
            textLink: C,
            onWatchVideo: b,
            onRequestClose: N,
            popoverRef: R,
            position: O,
            ...D
        } = e,
        { reducedMotion: L } = i.useContext(s.CZY),
        w = (0, a.R)(),
        x = (0, s.G98)().isWindowFocused?.() ?? w,
        P = i.useRef(null),
        M = (0, s.RJq)(I),
        k = i.useCallback(
            () => ({ type: "VIDEO", url: A, proxyUrl: A, alt: t, width: 1280, height: 720, className: E.$_ }),
            [A, t],
        );
    i.useEffect(() => {
        null != P.current && (!L.enabled && x ? P.current?.play().catch(h.tE) : P.current?.pause());
    }, [x, L.enabled]);
    let U = i.useCallback(() => {
            null !== P.current && P.current.pause(), N?.();
        }, [N]),
        G = i.useCallback(() => {
            null !== P.current && P.current.pause(), N?.();
        }, [N]),
        V = i.useCallback(() => {
            null !== P.current && P.current.pause();
            let e = k();
            (0, u.R)({ items: [e], startingIndex: 0, location: "VideoPopover", shouldHideMediaOptions: !0 }),
                N?.(),
                b?.();
        }, [k, b, N]),
        F = M
            ? (0, r.jsx)(s.vYh, { type: "image", src: I })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(l.A, {
                          ref: P,
                          src: I,
                          width: 232,
                          height: 131,
                          autoPlay: !L.enabled && x,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          controls: !1,
                          preload: "metadata",
                      }),
                      !T &&
                          (0, r.jsx)("div", {
                              className: E.Rr,
                              children: (0, r.jsx)(o.DMX, {
                                  playing: !1,
                                  size: "sm",
                                  "aria-label": g.intl.string(m.default.YpT3kk),
                                  onClick: V,
                              }),
                          }),
                  ],
              }),
        B = {
            targetElementRef: D.targetElementRef,
            shouldShow: D.shouldShow,
            scrollBehavior: D.scrollBehavior,
            position: O,
            onRequestClose: U,
            hasVideo: !0,
            caretConfig: S,
            ...("edge" === D.alignmentStrategy
                ? { alignmentStrategy: "edge", align: D.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, r.jsx)(c.x, {
        ...B,
        children: (0, r.jsxs)("div", {
            ref: R,
            children: [
                (0, r.jsx)(p.p, { onClick: G }),
                (0, r.jsx)(_.F, {}),
                (0, r.jsx)("div", { className: E.s, children: F }),
                (0, r.jsx)(f.D, { title: t, body: n, badge: v, textLink: C }),
                null != y ? (0, r.jsx)(d.Z, { actions: [y] }) : null,
            ],
        }),
    });
}
