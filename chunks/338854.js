"use strict";
n.d(t, { H: () => y });
var i = n(627968),
    r = n(64700),
    s = n(941861),
    a = n(844222),
    o = n(460890),
    l = n(978495),
    u = n(353795),
    c = n(80687),
    d = n(607470),
    _ = n(256905),
    f = n(312640),
    h = n(208756),
    p = n(798618),
    E = n(627330),
    m = n(113325),
    g = n(815021),
    A = n(375708),
    I = n(96867);
function T(e) {
    let { onClick: t, "aria-label": n = A.intl.string(A.t.cpT0Cq) } = e,
        { firstFocusableItemProps: s } = r.useContext(m.M);
    return (0, i.jsx)("div", {
        className: I.b,
        children: (0, i.jsx)(g.J, { size: "xs", "aria-label": n, onClick: t, variant: "overlay-secondary", ...s }),
    });
}
var S = n(818348),
    N = n(571247);
function y(e) {
    let {
            title: t,
            body: n,
            assetUrl: m,
            previewUrl: g = m,
            disableMediaViewer: y = !1,
            action: C,
            caretConfig: v = { align: "center" },
            badge: O,
            textLink: R,
            onWatchVideo: b,
            onRequestClose: D,
            popoverRef: L,
            position: w,
            ...M
        } = e,
        { reducedMotion: P } = r.useContext(a.C),
        x = (0, s.R)(),
        U = (0, o.G9)().isWindowFocused?.() ?? x,
        k = r.useRef(null),
        G = (0, l.RJ)(g),
        F = r.useCallback(
            () => ({ type: "VIDEO", url: m, proxyUrl: m, alt: t, width: 1280, height: 720, className: I.$_ }),
            [m, t],
        );
    r.useEffect(() => {
        null != k.current && (!P.enabled && U ? k.current?.play().catch(S.tE) : k.current?.pause());
    }, [U, P.enabled]);
    let V = r.useCallback(() => {
            null !== k.current && k.current.pause(), D?.();
        }, [D]),
        B = r.useCallback(() => {
            null !== k.current && k.current.pause(), D?.();
        }, [D]),
        H = r.useCallback(() => {
            null !== k.current && k.current.pause();
            let e = F();
            (0, _.R)({ items: [e], startingIndex: 0, location: "VideoPopover", shouldHideMediaOptions: !0 }),
                D?.(),
                b?.();
        }, [F, b, D]),
        j = G
            ? (0, i.jsx)(u.v, { type: "image", src: g })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(d.A, {
                          ref: k,
                          src: g,
                          width: 232,
                          height: 131,
                          autoPlay: !P.enabled && U,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          controls: !1,
                          preload: "metadata",
                      }),
                      !y &&
                          (0, i.jsx)("div", {
                              className: I.Rr,
                              children: (0, i.jsx)(c.D, {
                                  playing: !1,
                                  size: "sm",
                                  "aria-label": A.intl.string(N.default.YpT3kk),
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
            caretConfig: v,
            ...("edge" === M.alignmentStrategy
                ? { alignmentStrategy: "edge", align: M.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, i.jsx)(f.x, {
        ...Y,
        children: (0, i.jsxs)("div", {
            ref: L,
            children: [
                (0, i.jsx)(T, { onClick: B }),
                (0, i.jsx)(p.F, {}),
                (0, i.jsx)("div", { className: I.s, children: j }),
                (0, i.jsx)(E.D, { title: t, body: n, badge: O, textLink: R }),
                null != C ? (0, i.jsx)(h.Z, { actions: [C] }) : null,
            ],
        }),
    });
}
