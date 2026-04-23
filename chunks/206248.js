"use strict";
n.d(t, { H: () => S });
var r = n(627968),
    i = n(64700),
    s = n(941861),
    a = n(844222),
    o = n(460890),
    l = n(978495),
    u = n(608250),
    c = n(80687),
    d = n(607470),
    _ = n(256905),
    f = n(964892),
    p = n(208756),
    h = n(135564),
    E = n(627330),
    m = n(478542),
    g = n(818348),
    A = n(571247),
    I = n(985018),
    T = n(96867);
function S(e) {
    let {
            title: t,
            body: n,
            assetUrl: S,
            previewUrl: y = S,
            disableMediaViewer: N = !1,
            action: v,
            caretConfig: C = { align: "center" },
            badge: O,
            textLink: R,
            onWatchVideo: b,
            onRequestClose: D,
            popoverRef: L,
            position: w,
            ...M
        } = e,
        { reducedMotion: P } = i.useContext(a.C),
        x = (0, s.R)(),
        k = (0, o.G9)().isWindowFocused?.() ?? x,
        U = i.useRef(null),
        G = (0, l.RJ)(y),
        F = i.useCallback(
            () => ({ type: "VIDEO", url: S, proxyUrl: S, alt: t, width: 1280, height: 720, className: T.$_ }),
            [S, t],
        );
    i.useEffect(() => {
        null != U.current && (!P.enabled && k ? U.current?.play().catch(g.tE) : U.current?.pause());
    }, [k, P.enabled]);
    let V = i.useCallback(() => {
            null !== U.current && U.current.pause(), D?.();
        }, [D]),
        B = i.useCallback(() => {
            null !== U.current && U.current.pause(), D?.();
        }, [D]),
        H = i.useCallback(() => {
            null !== U.current && U.current.pause();
            let e = F();
            (0, _.R)({ items: [e], startingIndex: 0, location: "VideoPopover", shouldHideMediaOptions: !0 }),
                D?.(),
                b?.();
        }, [F, b, D]),
        j = G
            ? (0, r.jsx)(u.v, { type: "image", src: y })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(d.A, {
                          ref: U,
                          src: y,
                          width: 232,
                          height: 131,
                          autoPlay: !P.enabled && k,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          controls: !1,
                          preload: "metadata",
                      }),
                      !N &&
                          (0, r.jsx)("div", {
                              className: T.Rr,
                              children: (0, r.jsx)(c.D, {
                                  playing: !1,
                                  size: "sm",
                                  "aria-label": I.intl.string(A.default.YpT3kk),
                                  onClick: H,
                              }),
                          }),
                  ],
              }),
        Y = {
            targetElementRef: M.targetElementRef,
            shouldShow: M.shouldShow,
            scrollBehavior: M.scrollBehavior,
            position: w,
            onRequestClose: V,
            hasVideo: !0,
            caretConfig: C,
            ...("edge" === M.alignmentStrategy
                ? { alignmentStrategy: "edge", align: M.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, r.jsx)(f.x, {
        ...Y,
        children: (0, r.jsxs)("div", {
            ref: L,
            children: [
                (0, r.jsx)(m.p, { onClick: B }),
                (0, r.jsx)(h.F, {}),
                (0, r.jsx)("div", { className: T.s, children: j }),
                (0, r.jsx)(E.D, { title: t, body: n, badge: O, textLink: R }),
                null != v ? (0, r.jsx)(p.Z, { actions: [v] }) : null,
            ],
        }),
    });
}
