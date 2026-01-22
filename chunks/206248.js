n.d(t, {
    H: () => I,
});
var r = n(627968),
    i = n(64700),
    a = n(941861),
    s = n(158954),
    o = n(732955),
    l = n(607470),
    c = n(256905),
    u = n(964892),
    d = n(208756),
    f = n(135564),
    p = n(627330),
    _ = n(478542),
    h = n(818348),
    m = n(763600),
    g = n(985018),
    E = n(161222);

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

function A(e, t) {
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

function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = S(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function I(e) {
    var t, n, b;
    let {
            title: O,
            body: S,
            assetUrl: I,
            previewUrl: T = I,
            disableMediaViewer: C = !1,
            action: N,
            caretConfig: R = {
                align: "center",
            },
            badge: w,
            textLink: P,
            onWatchVideo: D,
            onRequestClose: x,
            popoverRef: L,
            position: j,
        } = e,
        M = v(e, [
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
        ]),
        { reducedMotion: k } = i.useContext(s.CZY),
        U = (0, a.R)(),
        G = null != (t = null == (n = (b = (0, s.G98)()).isWindowFocused) ? void 0 : n.call(b)) ? t : U,
        V = i.useRef(null),
        F = (0, s.RJq)(T),
        B = i.useCallback(
            () => ({
                type: "VIDEO",
                url: I,
                proxyUrl: I,
                alt: O,
                width: 1280,
                height: 720,
                className: E.$_,
            }),
            [I, O],
        );
    i.useEffect(() => {
        var e, t;
        null != V.current &&
            (!k.enabled && G ? null == (e = V.current) || e.play().catch(h.tE) : null == (t = V.current) || t.pause());
    }, [G, k.enabled]);
    let H = i.useCallback(() => {
            null !== V.current && V.current.pause(), null == x || x();
        }, [x]),
        Y = i.useCallback(() => {
            null !== V.current && V.current.pause(), null == x || x();
        }, [x]),
        W = i.useCallback(() => {
            null !== V.current && V.current.pause();
            let e = B();
            (0, c.R)({
                items: [e],
                startingIndex: 0,
                location: "VideoPopover",
                shouldHideMediaOptions: !0,
            }),
                null == x || x(),
                null == D || D();
        }, [B, D, x]),
        K = F
            ? (0, r.jsx)(s.vYh, {
                  type: "image",
                  src: T,
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(l.A, {
                          ref: V,
                          src: T,
                          width: 232,
                          height: 131,
                          autoPlay: !k.enabled && G,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          controls: !1,
                          preload: "metadata",
                      }),
                      !C &&
                          (0, r.jsx)("div", {
                              className: E.Rr,
                              children: (0, r.jsx)(o.DMX, {
                                  playing: !1,
                                  size: "sm",
                                  "aria-label": g.intl.string(m.default.YpT3kk),
                                  onClick: W,
                              }),
                          }),
                  ],
              }),
        z = y(
            {
                targetElementRef: M.targetElementRef,
                shouldShow: M.shouldShow,
                scrollBehavior: M.scrollBehavior,
                position: j,
                onRequestClose: H,
                hasVideo: !0,
                caretConfig: R,
            },
            "edge" === M.alignmentStrategy
                ? {
                      alignmentStrategy: "edge",
                      align: M.align,
                  }
                : {
                      alignmentStrategy: "trigger-center",
                  },
        );
    return (0, r.jsx)(
        u.x,
        A(y({}, z), {
            children: (0, r.jsxs)("div", {
                ref: L,
                children: [
                    (0, r.jsx)(_.p, {
                        onClick: Y,
                    }),
                    (0, r.jsx)(f.F, {}),
                    (0, r.jsx)("div", {
                        className: E.s,
                        children: K,
                    }),
                    (0, r.jsx)(p.D, {
                        title: O,
                        body: S,
                        badge: w,
                        textLink: P,
                    }),
                    null != N
                        ? (0, r.jsx)(d.Z, {
                              actions: [N],
                          })
                        : null,
                ],
            }),
        }),
    );
}
