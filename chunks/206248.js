l.d(a, { H: () => f });
var t = l(477900),
    n = l(582128),
    r = l(941861),
    s = l(844222),
    i = l(460890),
    c = l(978495),
    u = l(353795),
    o = l(80687),
    d = l(607470),
    g = l(256905),
    h = l(273875),
    p = l(208756),
    x = l(798618),
    b = l(627330),
    v = l(478542),
    y = l(818348),
    C = l(422411),
    j = l(375708),
    m = l(594024);
function f(e) {
    let {
            title: a,
            body: l,
            assetUrl: f,
            previewUrl: k = f,
            disableMediaViewer: E = !1,
            action: R,
            caretConfig: w = { align: "center" },
            badge: S,
            textLink: _,
            onWatchVideo: A,
            onRequestClose: B,
            popoverRef: L,
            position: N,
            ...P
        } = e,
        { reducedMotion: T } = n.useContext(s.C),
        I = (0, r.R)(),
        D = (0, i.G9)().isWindowFocused?.() ?? I,
        O = n.useRef(null),
        U = (0, c.RJ)(k),
        V = (0, c.gA)(k),
        F = n.useCallback(
            () => ({ type: "VIDEO", url: f, proxyUrl: f, alt: a, width: 1280, height: 720, className: m.$_ }),
            [f, a],
        );
    n.useEffect(() => {
        null != O.current && (!T.enabled && D ? O.current?.play().catch(y.tE) : O.current?.pause());
    }, [D, T.enabled]);
    let q = n.useCallback(() => {
            (null !== O.current && O.current.pause(), B?.());
        }, [B]),
        z = n.useCallback(() => {
            (null !== O.current && O.current.pause(), B?.());
        }, [B]),
        G = n.useCallback(() => {
            null !== O.current && O.current.pause();
            let e = F();
            ((0, g.R)({ items: [e], startingIndex: 0, location: "VideoPopover", shouldHideMediaOptions: !0 }),
                B?.(),
                A?.());
        }, [F, A, B]),
        H = (0, t.jsxs)(t.Fragment, {
            children: [
                U || V
                    ? (0, t.jsx)(u.v, { type: "image", src: k })
                    : (0, t.jsx)(d.A, {
                          ref: O,
                          src: k,
                          width: 232,
                          height: 131,
                          autoPlay: !T.enabled && D,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          controls: !1,
                          preload: "metadata",
                      }),
                !E &&
                    (0, t.jsx)("div", {
                        className: m.Rr,
                        children: (0, t.jsx)(o.D, {
                            playing: !1,
                            size: "sm",
                            "aria-label": j.intl.string(C.default.YpT3kk),
                            onClick: G,
                        }),
                    }),
            ],
        }),
        J = {
            targetElementRef: P.targetElementRef,
            shouldShow: P.shouldShow,
            scrollBehavior: P.scrollBehavior,
            position: N,
            onRequestClose: q,
            hasVideo: !0,
            caretConfig: w,
            ...("edge" === P.alignmentStrategy
                ? { alignmentStrategy: "edge", align: P.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, t.jsx)(h.x, {
        ...J,
        children: (0, t.jsxs)("div", {
            ref: L,
            children: [
                (0, t.jsx)(v.p, { onClick: z }),
                (0, t.jsx)(x.F, {}),
                (0, t.jsx)("div", { className: m.s, children: H }),
                (0, t.jsx)(b.D, { title: a, body: l, badge: S, textLink: _ }),
                null != R ? (0, t.jsx)(p.Z, { actions: [R] }) : null,
            ],
        }),
    });
}
