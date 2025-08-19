n.d(t, { M: () => v });
var r = n(951288),
    i = n(647438),
    a = n(780842),
    o = n(70097),
    s = n(312097),
    l = n(920155),
    c = n(744399),
    u = n(454028),
    d = n(966902),
    f = n(562618),
    _ = n(803866),
    p = n(37751);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function O(e) {
    return e.endsWith(".gif") || e.endsWith(".webp") || e.endsWith(".png");
}
function v(e) {
    var {
            title: t,
            body: n,
            assetUrl: h,
            previewUrl: g = h,
            action: y,
            caretConfig: v = {
                position: "bottom",
                align: "center",
            },
            badge: I,
            textLink: T,
            onWatchVideo: S,
            onRequestClose: A,
            popoverRef: N,
        } = e,
        C = b(e, [
            "title",
            "body",
            "assetUrl",
            "previewUrl",
            "action",
            "caretConfig",
            "badge",
            "textLink",
            "onWatchVideo",
            "onRequestClose",
            "popoverRef",
        ]);
    let R = i.useRef(null),
        P = O(g),
        w = i.useCallback(
            () => ({
                type: "VIDEO",
                url: h,
                proxyUrl: h,
                alt: t,
                width: 1280,
                height: 720,
                className: p.media,
            }),
            [h, t],
        ),
        D = i.useCallback(() => {
            null !== R.current && R.current.pause(), null == A || A();
        }, [A]),
        L = i.useCallback(() => {
            null !== R.current && R.current.pause(), null == A || A();
        }, [A]),
        x = i.useCallback(() => {
            null !== R.current && R.current.pause();
            let e = w();
            (0, s.K)({
                items: [e],
                startingIndex: 0,
                location: "VideoPopover",
                shouldHideMediaOptions: !0,
            }),
                null == A || A(),
                null == S || S();
        }, [w, S, A]),
        M = P
            ? (0, r.jsx)("img", {
                  src: g,
                  alt: "",
                  draggable: !1,
                  className: p.inlineAsset,
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(o.Z, {
                          ref: R,
                          src: g,
                          width: 232,
                          height: 131,
                          autoPlay: !0,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          className: p.inlineAsset,
                          controls: !1,
                          preload: "metadata",
                      }),
                      (0, r.jsx)("div", {
                          className: p.playButton,
                          children: (0, r.jsx)(a.J, {
                              playing: !1,
                              size: "sm",
                              "aria-label": "Play video: ".concat(t),
                              onClick: x,
                          }),
                      }),
                  ],
              });
    return (0, r.jsx)(
        l.m,
        E(m({}, C), {
            onRequestClose: D,
            hasVideo: !0,
            children: (0, r.jsxs)("div", {
                ref: N,
                children: [
                    (0, r.jsx)(_.N, { onClick: L }),
                    (0, r.jsx)(d.$, { caretConfig: v }),
                    (0, r.jsx)(u.V, {
                        asset: (0, r.jsx)("div", {
                            className: p.assetContainer,
                            children: M,
                        }),
                        size: "video",
                    }),
                    (0, r.jsx)(f.Y, {
                        title: t,
                        body: n,
                        badge: I,
                        textLink: T,
                        hasBottomMargin: null != y,
                    }),
                    null != y ? (0, r.jsx)(c.k, { actions: [y] }) : null,
                ],
            }),
        }),
    );
}
