n.d(t, { H: () => O });
var i = n(477900),
    s = n(582128),
    a = n(941861),
    l = n(844222),
    r = n(460890),
    E = n(978495),
    o = n(353795),
    c = n(80687),
    d = n(607470),
    _ = n(256905),
    S = n(273875),
    u = n(208756),
    A = n(798618),
    I = n(627330),
    h = n(113325),
    T = n(815021),
    R = n(375708),
    N = n(640875);
function m(e) {
    let { onClick: t, "aria-label": n = R.intl.string(R.t.cpT0Cq) } = e,
        { firstFocusableItemProps: a } = s.useContext(h.MV);
    return (0, i.jsx)("div", {
        className: N.b,
        children: (0, i.jsx)(T.J, { size: "xs", "aria-label": n, onClick: t, variant: "overlay-secondary", ...a }),
    });
}
var C = n(818348),
    P = n(571247);
function O(e) {
    let {
            title: t,
            body: n,
            assetUrl: h,
            previewUrl: T = h,
            disableMediaViewer: O = !1,
            action: x,
            caretConfig: f = { align: "center" },
            badge: v,
            textLink: g,
            onWatchVideo: p,
            onRequestClose: j,
            popoverRef: D,
            position: L,
            ...M
        } = e,
        { reducedMotion: U } = s.useContext(l.C),
        G = (0, a.R)(),
        V = (0, r.G9)().isWindowFocused?.() ?? G,
        F = s.useRef(null),
        w = (0, E.RJ)(T),
        y = (0, E.gA)(T),
        b = s.useCallback(
            () => ({ type: "VIDEO", url: h, proxyUrl: h, alt: t, width: 1280, height: 720, className: N.$_ }),
            [h, t],
        );
    s.useEffect(() => {
        null != F.current && (!U.enabled && V ? F.current?.play().catch(C.tE) : F.current?.pause());
    }, [V, U.enabled]);
    let W = s.useCallback(() => {
            null !== F.current && F.current.pause(), j?.();
        }, [j]),
        H = s.useCallback(() => {
            null !== F.current && F.current.pause(), j?.();
        }, [j]),
        k = s.useCallback(() => {
            null !== F.current && F.current.pause();
            let e = b();
            (0, _.R)({ items: [e], startingIndex: 0, location: "VideoPopover", shouldHideMediaOptions: !0 }),
                j?.(),
                p?.();
        }, [b, p, j]),
        B = (0, i.jsxs)(i.Fragment, {
            children: [
                w || y
                    ? (0, i.jsx)(o.v, { type: "image", src: T })
                    : (0, i.jsx)(d.A, {
                          ref: F,
                          src: T,
                          width: 232,
                          height: 131,
                          autoPlay: !U.enabled && V,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          controls: !1,
                          preload: "metadata",
                      }),
                !O &&
                    (0, i.jsx)("div", {
                        className: N.Rr,
                        children: (0, i.jsx)(c.D, {
                            playing: !1,
                            size: "sm",
                            "aria-label": R.intl.string(P.default.YpT3kk),
                            onClick: k,
                        }),
                    }),
            ],
        }),
        Y = {
            targetElementRef: M.targetElementRef,
            shouldShow: M.shouldShow,
            scrollBehavior: M.scrollBehavior,
            position: L,
            onRequestClose: W,
            hasVideo: !0,
            caretConfig: f,
            ...("edge" === M.alignmentStrategy
                ? { alignmentStrategy: "edge", align: M.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, i.jsx)(S.x, {
        ...Y,
        children: (0, i.jsxs)("div", {
            ref: D,
            children: [
                (0, i.jsx)(m, { onClick: H }),
                (0, i.jsx)(A.F, {}),
                (0, i.jsx)("div", { className: N.s, children: B }),
                (0, i.jsx)(I.D, { title: t, body: n, badge: v, textLink: g }),
                null != x ? (0, i.jsx)(u.Z, { actions: [x] }) : null,
            ],
        }),
    });
}
