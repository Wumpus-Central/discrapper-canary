n.d(t, { M: () => I });
var r = n(951288),
    i = n(647438),
    a = n(793030),
    o = n(159691),
    s = n(70097),
    l = n(312097),
    c = n(920155),
    u = n(744399),
    d = n(966902),
    f = n(562618),
    _ = n(803866),
    p = n(490340),
    h = n(388032),
    m = n(37751);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function I(e) {
    var {
            title: t,
            body: n,
            assetUrl: g,
            previewUrl: b = g,
            action: v,
            caretConfig: I = {
                position: "bottom",
                align: "center",
            },
            badge: T,
            textLink: S,
            onWatchVideo: A,
            onRequestClose: C,
            popoverRef: N,
        } = e,
        R = O(e, [
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
    let P = i.useRef(null),
        w = (0, a.j1L)(b),
        D = i.useCallback(
            () => ({
                type: "VIDEO",
                url: g,
                proxyUrl: g,
                alt: t,
                width: 1280,
                height: 720,
                className: m.media,
            }),
            [g, t],
        ),
        L = i.useCallback(() => {
            null !== P.current && P.current.pause(), null == C || C();
        }, [C]),
        x = i.useCallback(() => {
            null !== P.current && P.current.pause(), null == C || C();
        }, [C]),
        M = i.useCallback(() => {
            null !== P.current && P.current.pause();
            let e = D();
            (0, l.K)({
                items: [e],
                startingIndex: 0,
                location: "VideoPopover",
                shouldHideMediaOptions: !0,
            }),
                null == C || C(),
                null == A || A();
        }, [D, A, C]),
        j = w
            ? (0, r.jsx)(a.zsu, {
                  type: "image",
                  src: b,
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(s.Z, {
                          ref: P,
                          src: b,
                          width: 232,
                          height: 131,
                          autoPlay: !0,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          controls: !1,
                          preload: "metadata",
                      }),
                      (0, r.jsx)("div", {
                          className: m.playButton,
                          children: (0, r.jsx)(o.JM1, {
                              playing: !1,
                              size: "sm",
                              "aria-label": h.intl.string(p.default.YpT3kp),
                              onClick: M,
                          }),
                      }),
                  ],
              });
    return (0, r.jsx)(
        c.m,
        y(E({}, R), {
            onRequestClose: L,
            hasVideo: !0,
            children: (0, r.jsxs)("div", {
                ref: N,
                children: [
                    (0, r.jsx)(_.N, { onClick: x }),
                    (0, r.jsx)(d.$, { caretConfig: I }),
                    (0, r.jsx)("div", {
                        className: m.assetContainer,
                        children: j,
                    }),
                    (0, r.jsx)(f.Y, {
                        title: t,
                        body: n,
                        badge: T,
                        textLink: S,
                    }),
                    null != v ? (0, r.jsx)(u.k, { actions: [v] }) : null,
                ],
            }),
        }),
    );
}
