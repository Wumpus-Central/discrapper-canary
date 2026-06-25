"use strict";
n.d(t, { H: () => C });
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
    h = n(312640),
    f = n(208756),
    p = n(798618),
    E = n(627330),
    m = n(113325),
    g = n(815021),
    A = n(375708),
    I = n(110499);
function T(e) {
    let { onClick: t, "aria-label": n = A.intl.string(A.t.cpT0Cq) } = e,
        { firstFocusableItemProps: s } = r.useContext(m.MV);
    return (0, i.jsx)("div", {
        className: I.b,
        children: (0, i.jsx)(g.J, { size: "xs", "aria-label": n, onClick: t, variant: "overlay-secondary", ...s }),
    });
}
var S = n(818348),
    y = n(458206);
function C(e) {
    let {
            title: t,
            body: n,
            assetUrl: m,
            previewUrl: g = m,
            disableMediaViewer: C = !1,
            action: N,
            caretConfig: v = { align: "center" },
            badge: R,
            textLink: O,
            onWatchVideo: b,
            onRequestClose: D,
            popoverRef: L,
            position: w,
            ...M
        } = e,
        { reducedMotion: P } = r.useContext(a.C),
        x = (0, s.R)(),
        k = (0, o.G9)().isWindowFocused?.() ?? x,
        U = r.useRef(null),
        G = (0, l.RJ)(g),
        F = (0, l.gA)(g),
        V = r.useCallback(
            () => ({ type: "VIDEO", url: m, proxyUrl: m, alt: t, width: 1280, height: 720, className: I.$_ }),
            [m, t],
        );
    r.useEffect(() => {
        null != U.current && (!P.enabled && k ? U.current?.play().catch(S.tE) : U.current?.pause());
    }, [k, P.enabled]);
    let B = r.useCallback(() => {
            null !== U.current && U.current.pause(), D?.();
        }, [D]),
        j = r.useCallback(() => {
            null !== U.current && U.current.pause(), D?.();
        }, [D]),
        H = r.useCallback(() => {
            null !== U.current && U.current.pause();
            let e = V();
            (0, _.R)({ items: [e], startingIndex: 0, location: "VideoPopover", shouldHideMediaOptions: !0 }),
                D?.(),
                b?.();
        }, [V, b, D]),
        Y = (0, i.jsxs)(i.Fragment, {
            children: [
                G || F
                    ? (0, i.jsx)(u.v, { type: "image", src: g })
                    : (0, i.jsx)(d.A, {
                          ref: U,
                          src: g,
                          width: 232,
                          height: 131,
                          autoPlay: !P.enabled && k,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          controls: !1,
                          preload: "metadata",
                      }),
                !C &&
                    (0, i.jsx)("div", {
                        className: I.Rr,
                        children: (0, i.jsx)(c.D, {
                            playing: !1,
                            size: "sm",
                            "aria-label": A.intl.string(y.default.YpT3kk),
                            onClick: H,
                        }),
                    }),
            ],
        }),
        W = {
            targetElementRef: M.targetElementRef,
            shouldShow: M.shouldShow,
            scrollBehavior: M.scrollBehavior,
            position: w,
            onRequestClose: B,
            hasVideo: !0,
            caretConfig: v,
            ...("edge" === M.alignmentStrategy
                ? { alignmentStrategy: "edge", align: M.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, i.jsx)(h.x, {
        ...W,
        children: (0, i.jsxs)("div", {
            ref: L,
            children: [
                (0, i.jsx)(T, { onClick: j }),
                (0, i.jsx)(p.F, {}),
                (0, i.jsx)("div", { className: I.s, children: Y }),
                (0, i.jsx)(E.D, { title: t, body: n, badge: R, textLink: O }),
                null != N ? (0, i.jsx)(f.Z, { actions: [N] }) : null,
            ],
        }),
    });
}
