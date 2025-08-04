n.d(t, { M: () => O });
var r = n(255367),
    i = n(73800),
    a = n(780842),
    o = n(70097),
    s = n(312097),
    l = n(920155),
    c = n(744399),
    u = n(454028),
    d = n(966902),
    f = n(237872),
    _ = n(562618),
    p = n(445689);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            }));
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function O(e) {
    var {
            title: t,
            body: n,
            assetUrl: h,
            action: g,
            caretConfig: y = {
                position: 'bottom',
                align: 'center'
            },
            badge: O,
            textLink: v,
            onWatchVideo: I,
            onRequestClose: T,
            popoverRef: S
        } = e,
        A = b(e, ['title', 'body', 'assetUrl', 'action', 'caretConfig', 'badge', 'textLink', 'onWatchVideo', 'onRequestClose', 'popoverRef']);
    let N = i.useRef(null),
        C = h.endsWith('.gif') || h.endsWith('.webp') || h.endsWith('.png'),
        R = i.useCallback(
            () => ({
                type: 'VIDEO',
                url: h,
                proxyUrl: h,
                alt: t,
                width: 1280,
                height: 720,
                className: p.media
            }),
            [h, t]
        ),
        P = i.useCallback(() => {
            (null !== N.current && N.current.pause(), null == T || T());
        }, [T]),
        w = i.useCallback(() => {
            (null !== N.current && N.current.pause(), null == T || T());
        }, [T]),
        D = i.useCallback(() => {
            null !== N.current && N.current.pause();
            let e = R();
            ((0, s.K)({
                items: [e],
                startingIndex: 0,
                location: 'VideoPopover',
                shouldHideMediaOptions: !0
            }),
                null == T || T(),
                null == I || I());
        }, [R, I, T]),
        L = C
            ? (0, r.jsx)('img', {
                  src: h,
                  alt: '',
                  draggable: !1,
                  className: p.inlineAsset
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(o.Z, {
                          ref: N,
                          src: h,
                          width: 240,
                          height: 135,
                          autoPlay: !0,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                          className: p.inlineAsset,
                          controls: !1,
                          preload: 'metadata'
                      }),
                      (0, r.jsx)('div', {
                          className: p.playButton,
                          children: (0, r.jsx)(a.J, {
                              playing: !1,
                              size: 'sm',
                              'aria-label': 'Play video: '.concat(t),
                              onClick: D
                          })
                      })
                  ]
              });
    return (0, r.jsx)(
        l.m,
        E(m({}, A), {
            onRequestClose: P,
            hasVideo: !0,
            children: (0, r.jsxs)('div', {
                ref: S,
                children: [
                    (0, r.jsx)(f.u, {
                        onClick: w,
                        colorMix: !0
                    }),
                    (0, r.jsx)(u.V, {
                        asset: (0, r.jsx)('div', {
                            className: p.assetContainer,
                            children: L
                        }),
                        size: 'video'
                    }),
                    (0, r.jsx)(_.Y, {
                        title: t,
                        body: n,
                        badge: O,
                        textLink: v,
                        hasBottomMargin: null != g
                    }),
                    null != g ? (0, r.jsx)(c.k, { actions: [g] }) : null,
                    (0, r.jsx)(d.$, { caretConfig: y })
                ]
            })
        })
    );
}
