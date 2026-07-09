"use strict";
n.d(t, { H: () => C });
var i = n(627968),
    r = n(64700),
    a = n(941861),
    s = n(844222),
    l = n(460890),
    o = n(978495),
    d = n(353795),
    c = n(80687),
    u = n(607470),
    _ = n(256905),
    E = n(312640),
    A = n(208756),
    h = n(798618),
    I = n(627330),
    f = n(113325),
    p = n(815021),
    T = n(375708),
    m = n(110499);
function g(e) {
    let { onClick: t, "aria-label": n = T.intl.string(T.t.cpT0Cq) } = e,
        { firstFocusableItemProps: a } = r.useContext(f.MV);
    return (0, i.jsx)("div", {
        className: m.b,
        children: (0, i.jsx)(p.J, { size: "xs", "aria-label": n, onClick: t, variant: "overlay-secondary", ...a }),
    });
}
var S = n(818348),
    N = n(458206);
function C(e) {
    let {
            title: t,
            body: n,
            assetUrl: f,
            previewUrl: p = f,
            disableMediaViewer: C = !1,
            action: R,
            caretConfig: O = { align: "center" },
            badge: L,
            textLink: D,
            onWatchVideo: y,
            onRequestClose: v,
            popoverRef: b,
            position: M,
            ...P
        } = e,
        { reducedMotion: U } = r.useContext(s.C),
        w = (0, a.R)(),
        G = (0, l.G9)().isWindowFocused?.() ?? w,
        x = r.useRef(null),
        k = (0, o.RJ)(p),
        F = (0, o.gA)(p),
        V = r.useCallback(
            () => ({ type: "VIDEO", url: f, proxyUrl: f, alt: t, width: 1280, height: 720, className: m.$_ }),
            [f, t],
        );
    r.useEffect(() => {
        null != x.current && (!U.enabled && G ? x.current?.play().catch(S.tE) : x.current?.pause());
    }, [G, U.enabled]);
    let B = r.useCallback(() => {
            null !== x.current && x.current.pause(), v?.();
        }, [v]),
        H = r.useCallback(() => {
            null !== x.current && x.current.pause(), v?.();
        }, [v]),
        j = r.useCallback(() => {
            null !== x.current && x.current.pause();
            let e = V();
            (0, _.R)({ items: [e], startingIndex: 0, location: "VideoPopover", shouldHideMediaOptions: !0 }),
                v?.(),
                y?.();
        }, [V, y, v]),
        W = (0, i.jsxs)(i.Fragment, {
            children: [
                k || F
                    ? (0, i.jsx)(d.v, { type: "image", src: p })
                    : (0, i.jsx)(u.A, {
                          ref: x,
                          src: p,
                          width: 232,
                          height: 131,
                          autoPlay: !U.enabled && G,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          controls: !1,
                          preload: "metadata",
                      }),
                !C &&
                    (0, i.jsx)("div", {
                        className: m.Rr,
                        children: (0, i.jsx)(c.D, {
                            playing: !1,
                            size: "sm",
                            "aria-label": T.intl.string(N.default.YpT3kk),
                            onClick: j,
                        }),
                    }),
            ],
        }),
        Y = {
            targetElementRef: P.targetElementRef,
            shouldShow: P.shouldShow,
            scrollBehavior: P.scrollBehavior,
            position: M,
            onRequestClose: B,
            hasVideo: !0,
            caretConfig: O,
            ...("edge" === P.alignmentStrategy
                ? { alignmentStrategy: "edge", align: P.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, i.jsx)(E.x, {
        ...Y,
        children: (0, i.jsxs)("div", {
            ref: b,
            children: [
                (0, i.jsx)(g, { onClick: H }),
                (0, i.jsx)(h.F, {}),
                (0, i.jsx)("div", { className: m.s, children: W }),
                (0, i.jsx)(I.D, { title: t, body: n, badge: L, textLink: D }),
                null != R ? (0, i.jsx)(A.Z, { actions: [R] }) : null,
            ],
        }),
    });
}
