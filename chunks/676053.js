n.d(t, { M: () => T });
var r = n(951288),
    i = n(647438),
    a = n(780842),
    o = n(751334),
    s = n(587272),
    l = n(70097),
    c = n(312097),
    u = n(920155),
    d = n(744399),
    f = n(966902),
    _ = n(562618),
    p = n(803866),
    h = n(490340),
    m = n(388032),
    g = n(37751);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
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
    var {
            title: t,
            body: n,
            assetUrl: E,
            previewUrl: y = E,
            action: I,
            caretConfig: T = {
                position: "bottom",
                align: "center",
            },
            badge: S,
            textLink: A,
            onWatchVideo: N,
            onRequestClose: C,
            popoverRef: R,
        } = e,
        P = v(e, [
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
    let w = i.useRef(null),
        D = (0, s.j1)(y),
        L = i.useCallback(
            () => ({
                type: "VIDEO",
                url: E,
                proxyUrl: E,
                alt: t,
                width: 1280,
                height: 720,
                className: g.media,
            }),
            [E, t],
        ),
        x = i.useCallback(() => {
            null !== w.current && w.current.pause(), null == C || C();
        }, [C]),
        M = i.useCallback(() => {
            null !== w.current && w.current.pause(), null == C || C();
        }, [C]),
        k = i.useCallback(() => {
            null !== w.current && w.current.pause();
            let e = L();
            (0, c.K)({
                items: [e],
                startingIndex: 0,
                location: "VideoPopover",
                shouldHideMediaOptions: !0,
            }),
                null == C || C(),
                null == N || N();
        }, [L, N, C]),
        j = D
            ? (0, r.jsx)(o.z, {
                  type: "image",
                  src: y,
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(l.Z, {
                          ref: w,
                          src: y,
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
                          className: g.playButton,
                          children: (0, r.jsx)(a.J, {
                              playing: !1,
                              size: "sm",
                              "aria-label": m.intl.string(h.default.YpT3kp),
                              onClick: k,
                          }),
                      }),
                  ],
              });
    return (0, r.jsx)(
        u.m,
        O(b({}, P), {
            onRequestClose: x,
            hasVideo: !0,
            children: (0, r.jsxs)("div", {
                ref: R,
                children: [
                    (0, r.jsx)(p.N, { onClick: M }),
                    (0, r.jsx)(f.$, { caretConfig: T }),
                    (0, r.jsx)("div", {
                        className: g.assetContainer,
                        children: j,
                    }),
                    (0, r.jsx)(_.Y, {
                        title: t,
                        body: n,
                        badge: S,
                        textLink: A,
                        hasBottomMargin: null != I,
                    }),
                    null != I ? (0, r.jsx)(d.k, { actions: [I] }) : null,
                ],
            }),
        }),
    );
}
