n.d(t, { M: () => T });
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
    p = n(562618),
    _ = n(803866),
    m = n(231338),
    h = n(271860),
    g = n(388032),
    E = n(310883);
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
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function T(e) {
    var t,
        n,
        b,
        {
            title: O,
            body: I,
            assetUrl: T,
            previewUrl: C = T,
            disableMediaViewer: A = !1,
            action: N,
            caretConfig: P = { align: "center" },
            badge: R,
            textLink: w,
            onWatchVideo: D,
            onRequestClose: x,
            popoverRef: L,
            position: j,
        } = e,
        M = S(e, [
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
    let { reducedMotion: k } = i.useContext(o.Sfi),
        U = (0, a.C)(),
        G = null != (b = null == (t = (n = (0, o.ZFG)()).isWindowFocused) ? void 0 : t.call(n)) ? b : U,
        Z = i.useRef(null),
        F = (0, o.j1L)(C),
        B = i.useCallback(
            () => ({
                type: "VIDEO",
                url: T,
                proxyUrl: T,
                alt: O,
                width: 1280,
                height: 720,
                className: E.media,
            }),
            [T, O],
        );
    i.useEffect(() => {
        var e, t;
        null != Z.current &&
            (!k.enabled && G ? null == (e = Z.current) || e.play().catch(m.dG) : null == (t = Z.current) || t.pause());
    }, [G, k.enabled]);
    let V = i.useCallback(() => {
            null !== Z.current && Z.current.pause(), null == x || x();
        }, [x]),
        H = i.useCallback(() => {
            null !== Z.current && Z.current.pause(), null == x || x();
        }, [x]),
        Y = i.useCallback(() => {
            null !== Z.current && Z.current.pause();
            let e = B();
            (0, c.K)({
                items: [e],
                startingIndex: 0,
                location: "VideoPopover",
                shouldHideMediaOptions: !0,
            }),
                null == x || x(),
                null == D || D();
        }, [B, D, x]),
        W = F
            ? (0, r.jsx)(o.zsu, {
                  type: "image",
                  src: C,
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(l.Z, {
                          ref: Z,
                          src: C,
                          width: 232,
                          height: 131,
                          autoPlay: !k.enabled && G,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          controls: !1,
                          preload: "metadata",
                      }),
                      !A &&
                          (0, r.jsx)("div", {
                              className: E.playButton,
                              children: (0, r.jsx)(s.JM1, {
                                  playing: !1,
                                  size: "sm",
                                  "aria-label": g.intl.string(h.default.YpT3kk),
                                  onClick: Y,
                              }),
                          }),
                  ],
              }),
        K = y(
            {
                targetElementRef: M.targetElementRef,
                shouldShow: M.shouldShow,
                scrollBehavior: M.scrollBehavior,
                position: j,
                onRequestClose: V,
                hasVideo: !0,
                caretConfig: P,
            },
            "edge" === M.alignmentStrategy
                ? {
                      alignmentStrategy: "edge",
                      align: M.align,
                  }
                : { alignmentStrategy: "trigger-center" },
        );
    return (0, r.jsx)(
        u.m,
        v(y({}, K), {
            children: (0, r.jsxs)("div", {
                ref: L,
                children: [
                    (0, r.jsx)(_.N, { onClick: H }),
                    (0, r.jsx)(f.$, {}),
                    (0, r.jsx)("div", {
                        className: E.assetContainer,
                        children: W,
                    }),
                    (0, r.jsx)(p.Y, {
                        title: O,
                        body: I,
                        badge: R,
                        textLink: w,
                    }),
                    null != N ? (0, r.jsx)(d.k, { actions: [N] }) : null,
                ],
            }),
        }),
    );
}
