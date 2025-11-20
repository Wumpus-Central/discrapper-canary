n.d(t, { M: () => S });
var r = n(54381),
    i = n(473749),
    a = n(150677),
    o = n(793030),
    s = n(159691),
    l = n(70097),
    c = n(312097),
    u = n(920155),
    d = n(744399),
    f = n(966902),
    _ = n(562618),
    p = n(803866),
    h = n(231338),
    m = n(298200),
    g = n(388032),
    E = n(37751);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function S(e) {
    var t,
        n,
        b,
        {
            title: O,
            body: T,
            assetUrl: S,
            previewUrl: A = S,
            disableMediaViewer: C = !1,
            action: N,
            caretConfig: R = { align: "center" },
            badge: P,
            textLink: D,
            onWatchVideo: w,
            onRequestClose: L,
            popoverRef: x,
            position: M,
        } = e,
        k = I(e, [
            "title",
            "body",
            "assetUrl",
            "previewUrl",
            "disableMediaViewer",
            "action",
            "caretConfig",
            "badge",
            "textLink",
            "onWatchVideo",
            "onRequestClose",
            "popoverRef",
            "position",
        ]);
    let { reducedMotion: j } = i.useContext(o.Sfi),
        U = (0, a.C)(),
        G = null != (b = null == (t = (n = (0, o.ZFG)()).isWindowFocused) ? void 0 : t.call(n)) ? b : U,
        B = i.useRef(null),
        Z = (0, o.j1L)(A),
        F = i.useCallback(
            () => ({
                type: "VIDEO",
                url: S,
                proxyUrl: S,
                alt: O,
                width: 1280,
                height: 720,
                className: E.media,
            }),
            [S, O],
        );
    i.useEffect(() => {
        var e, t;
        null != B.current &&
            (!j.enabled && G ? null == (e = B.current) || e.play().catch(h.dG) : null == (t = B.current) || t.pause());
    }, [G, j.enabled]);
    let V = i.useCallback(() => {
            null !== B.current && B.current.pause(), null == L || L();
        }, [L]),
        H = i.useCallback(() => {
            null !== B.current && B.current.pause(), null == L || L();
        }, [L]),
        Y = i.useCallback(() => {
            null !== B.current && B.current.pause();
            let e = F();
            (0, c.K)({
                items: [e],
                startingIndex: 0,
                location: "VideoPopover",
                shouldHideMediaOptions: !0,
            }),
                null == L || L(),
                null == w || w();
        }, [F, w, L]),
        W = Z
            ? (0, r.jsx)(o.zsu, {
                  type: "image",
                  src: A,
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(l.Z, {
                          ref: B,
                          src: A,
                          width: 232,
                          height: 131,
                          autoPlay: !j.enabled && G,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          controls: !1,
                          preload: "metadata",
                      }),
                      !C &&
                          (0, r.jsx)("div", {
                              className: E.playButton,
                              children: (0, r.jsx)(s.JM1, {
                                  playing: !1,
                                  size: "sm",
                                  "aria-label": g.intl.string(m.default.YpT3kk),
                                  onClick: Y,
                              }),
                          }),
                  ],
              }),
        K = y(
            {
                targetElementRef: k.targetElementRef,
                shouldShow: k.shouldShow,
                scrollBehavior: k.scrollBehavior,
                position: M,
                onRequestClose: V,
                hasVideo: !0,
                caretConfig: R,
            },
            "edge" === k.alignmentStrategy
                ? {
                      alignmentStrategy: "edge",
                      align: k.align,
                  }
                : { alignmentStrategy: "trigger-center" },
        );
    return (0, r.jsx)(
        u.m,
        v(y({}, K), {
            children: (0, r.jsxs)("div", {
                ref: x,
                children: [
                    (0, r.jsx)(p.N, { onClick: H }),
                    (0, r.jsx)(f.$, {}),
                    (0, r.jsx)("div", {
                        className: E.assetContainer,
                        children: W,
                    }),
                    (0, r.jsx)(_.Y, {
                        title: O,
                        body: T,
                        badge: P,
                        textLink: D,
                    }),
                    null != N ? (0, r.jsx)(d.k, { actions: [N] }) : null,
                ],
            }),
        }),
    );
}
