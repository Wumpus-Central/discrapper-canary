n.d(t, { M: () => h });
var i = n(255367),
    r = n(73800),
    s = n(780842),
    l = n(70097),
    a = n(312097),
    o = n(920155),
    c = n(744399),
    d = n(454028),
    u = n(966902),
    m = n(237872),
    g = n(562618),
    p = n(445689);
function h(e) {
    var t,
        n,
        {
            title: h,
            body: f,
            assetUrl: b,
            button: x,
            caretConfig: _ = {
                position: 'bottom',
                align: 'center'
            },
            badge: E,
            footerLink: j,
            gradientColor: C,
            onWatchVideo: O,
            onRequestClose: S,
            popoverRef: v
        } = e,
        T = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(e, ['title', 'body', 'assetUrl', 'button', 'caretConfig', 'badge', 'footerLink', 'gradientColor', 'onWatchVideo', 'onRequestClose', 'popoverRef']);
    let N = r.useRef(null),
        I = r.useCallback(
            () => ({
                type: 'VIDEO',
                url: b,
                proxyUrl: b,
                alt: h,
                width: 1280,
                height: 720,
                className: p.media
            }),
            [b, h]
        ),
        y = r.useCallback(() => {
            (null !== N.current && N.current.pause(), null == S || S());
        }, [S]),
        A = r.useCallback(() => {
            (null !== N.current && N.current.pause(), null == S || S());
        }, [S]),
        P = r.useCallback(() => {
            null !== N.current && N.current.pause();
            let e = I();
            ((0, a.K)({
                items: [e],
                startingIndex: 0,
                location: 'VideoPopover',
                shouldHideMediaOptions: !0
            }),
                null == S || S(),
                null == O || O());
        }, [I, O, S]),
        R = (0, i.jsxs)('div', {
            className: p.videoContainer,
            children: [
                (0, i.jsx)(l.Z, {
                    ref: N,
                    src: b,
                    width: 240,
                    height: 135,
                    autoPlay: !0,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    className: p.inlineVideo,
                    controls: !1,
                    preload: 'metadata'
                }),
                (0, i.jsx)('div', {
                    className: p.playButton,
                    children: (0, i.jsx)(s.J, {
                        playing: !1,
                        size: 'sm',
                        'aria-label': 'Play video: '.concat(h),
                        onClick: P
                    })
                })
            ]
        });
    return (0, i.jsx)(
        o.m,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        var i;
                        ((i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = i));
                    }));
            }
            return e;
        })({}, T)),
        (n = n =
            {
                onRequestClose: y,
                hasVideo: !0,
                children: (0, i.jsxs)('div', {
                    ref: v,
                    children: [
                        (0, i.jsx)(m.u, {
                            onClick: A,
                            colorMix: !0
                        }),
                        (0, i.jsx)(d.V, { asset: R }),
                        (0, i.jsx)(g.Y, {
                            title: h,
                            body: f,
                            badge: E,
                            footerLink: j
                        }),
                        (0, i.jsx)(c.k, { buttons: [x] }),
                        (0, i.jsx)(u.$, { caretConfig: _ })
                    ]
                })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
