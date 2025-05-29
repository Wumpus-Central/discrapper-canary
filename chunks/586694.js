n.d(t, {
    E: () => b,
    q: () => m
}),
    n(415506);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(974674),
    a = n(481060),
    c = n(686546),
    u = n(182294),
    d = n(419061),
    h = n(661085);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    let { children: t, size: n, onClick: l, onMouseDown: s, onKeyDown: u, onContextMenu: p, onMouseEnter: f, onMouseLeave: g, className: m, ariaHidden: b, avatarDecoration: y, specs: _, cornerIconUrl: v, cornerIconOffsetX: C, cornerIconOffsetY: j, ariaLabel: S } = e,
        E = {
            width: (0, a.pxk)(n),
            height: (0, a.pxk)(n)
        },
        x = (0, i.useId)(),
        P = _.size * d.hs,
        I =
            null != y &&
            (0, r.jsxs)('svg', {
                width: P,
                height: P,
                viewBox: '0 0 '.concat(P, ' ').concat(P),
                className: h.avatarDecoration,
                'aria-hidden': !0,
                children: [
                    (0, r.jsxs)('mask', {
                        id: x,
                        children: [
                            (0, r.jsx)('rect', {
                                x: 0,
                                y: 0,
                                width: P,
                                height: P,
                                fill: 'white'
                            }),
                            null != v &&
                                (function (e, t) {
                                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                        {
                                            height: l,
                                            width: o,
                                            x: s,
                                            y: a
                                        } = (function (e, t, n, r) {
                                            let { height: i, width: l, x: o, y: s } = O(e, n, r),
                                                a = (t - e.size) / 2;
                                            return {
                                                width: l,
                                                height: i,
                                                x: o + a,
                                                y: s + a
                                            };
                                        })(e, t, n, i);
                                    return (0, r.jsx)('rect', {
                                        mask: 'url(#'.concat(c.QS.SQUIRCLE, ')'),
                                        height: l,
                                        width: o,
                                        x: s,
                                        y: a,
                                        rx: e.stroke,
                                        fill: 'black'
                                    });
                                })(_, P, C, j)
                        ]
                    }),
                    (0, r.jsx)('foreignObject', {
                        x: 0,
                        y: 0,
                        width: P,
                        height: P,
                        mask: 'url(#'.concat(x, ')'),
                        children: (0, r.jsx)('div', {
                            className: h.avatarStack,
                            children: (0, r.jsx)('img', {
                                className: h.avatar,
                                src: y,
                                alt: ' ',
                                'aria-hidden': !0
                            })
                        })
                    })
                ]
            });
    return null != l || null != s
        ? (0, r.jsxs)(a.P3F, {
              className: o()(h.wrapper, h.pointer, m),
              style: E,
              onClick: l,
              onContextMenu: p,
              onMouseDown: s,
              onKeyDown: u,
              onMouseEnter: null != f ? f : void 0,
              onMouseLeave: null != g ? g : void 0,
              'aria-label': null != S ? S : void 0,
              'aria-hidden': b,
              children: [t, I]
          })
        : (0, r.jsxs)('div', {
              className: o()(h.wrapper, m),
              style: E,
              onContextMenu: null != p ? p : void 0,
              onMouseEnter: null != f ? f : void 0,
              onMouseLeave: null != g ? g : void 0,
              role: 'img',
              'aria-label': null != S ? S : void 0,
              'aria-hidden': b,
              children: [t, I]
          });
}
function m(e) {
    let { src: t, size: n, 'aria-hidden': l = !1, 'aria-label': a, imageClassName: d, cornerIconUrl: m, cornerIconOffsetX: b = 0, cornerIconOffsetY: _ = 0 } = e,
        v = (0, u.UC)(n),
        C = v.size,
        j = (0, i.useId)();
    return (0, r.jsx)(
        g,
        f(p({}, e), {
            ariaLabel: a,
            ariaHidden: l,
            specs: v,
            children: (0, r.jsxs)('svg', {
                width: C + b,
                height: C + _,
                viewBox: '0 0 '.concat(C + b, ' ').concat(C + _),
                className: o()(h.mask, h.svg),
                'aria-hidden': !0,
                children: [
                    (0, r.jsxs)('mask', {
                        id: j,
                        children: [
                            (0, r.jsx)('circle', {
                                cx: v.size / 2,
                                cy: v.size / 2,
                                r: v.size / 2,
                                fill: 'white'
                            }),
                            null != m &&
                                (function (e, t, n) {
                                    let { height: i, width: l, x: o, y: s } = O(e, t, n);
                                    return (0, r.jsx)('rect', {
                                        mask: 'url(#'.concat(c.QS.SQUIRCLE, ')'),
                                        height: i,
                                        width: l,
                                        x: o,
                                        y: s,
                                        fill: 'black'
                                    });
                                })(v, b, _)
                        ]
                    }),
                    (0, r.jsx)('foreignObject', {
                        x: 0,
                        y: 0,
                        width: v.size,
                        height: v.size,
                        mask: 'url(#'.concat(j, ')'),
                        children: (0, r.jsx)(s.qe, {
                            src: t,
                            className: d,
                            isSpeaking: !1
                        })
                    }),
                    null != m &&
                        (0, r.jsx)(
                            'foreignObject',
                            f(p({}, y(v, b, _)), {
                                mask: 'url(#'.concat(c.QS.SQUIRCLE, ')'),
                                children: (0, r.jsx)('img', {
                                    src: m,
                                    height: 16,
                                    width: 16,
                                    alt: ' '
                                })
                            })
                        )
                ]
            })
        })
    );
}
function b(e) {
    let { src: t, size: n, 'aria-hidden': l = !1, 'aria-label': s, cornerIconUrl: a, cornerIconOffsetX: d = 0, cornerIconOffsetY: m = 0 } = e,
        b = (0, i.useId)(),
        _ = (0, i.useId)(),
        v = (0, u.UC)(n),
        C = v.size + d,
        j = v.size + m,
        S = O(v, d, m),
        E = y(v, d, m);
    return (0, r.jsx)(
        g,
        f(p({}, e), {
            ariaLabel: s,
            ariaHidden: l,
            specs: v,
            children: (0, r.jsxs)('svg', {
                width: C,
                height: j,
                viewBox: '0 0 '.concat(C, ' ').concat(j),
                className: o()(h.mask, h.svg),
                'aria-hidden': !0,
                children: [
                    (0, r.jsxs)('mask', {
                        id: b,
                        children: [
                            (0, r.jsx)('rect', {
                                x: 0,
                                y: 0,
                                width: v.size,
                                height: v.size,
                                fill: 'white',
                                mask: 'url(#'.concat(c.QS.SQUIRCLE, ')')
                            }),
                            (0, r.jsx)('circle', {
                                cx: S.x + S.width / 2,
                                cy: S.y + S.height / 2,
                                r: S.width / 2,
                                fill: 'black'
                            })
                        ]
                    }),
                    (0, r.jsx)('mask', {
                        id: _,
                        children: (0, r.jsx)('circle', {
                            cx: E.x + E.width / 2,
                            cy: E.y + E.height / 2,
                            r: E.width / 2,
                            fill: 'white'
                        })
                    }),
                    (0, r.jsx)('foreignObject', {
                        x: 0,
                        y: 0,
                        width: v.size,
                        height: v.size,
                        mask: 'url(#'.concat(b, ')'),
                        children: (0, r.jsx)(
                            'div',
                            {
                                className: h.avatarStack,
                                children: (0, r.jsx)('img', {
                                    src: null != t ? t : void 0,
                                    alt: ' ',
                                    className: h.avatar,
                                    'aria-hidden': !0
                                })
                            },
                            t
                        )
                    }),
                    null != a &&
                        (0, r.jsx)(
                            'foreignObject',
                            f(p({}, E), {
                                mask: 'url(#'.concat(_, ')'),
                                children: (0, r.jsx)('img', {
                                    src: a,
                                    height: 16,
                                    width: 16,
                                    alt: ' '
                                })
                            })
                        )
                ]
            })
        })
    );
}
function y(e, t, n) {
    return {
        width: 16,
        height: 16,
        x: e.size - 16 - e.offset + t,
        y: e.size - 16 - e.offset + n
    };
}
function O(e, t, n) {
    let r = y(e, t, n),
        i = r.x - 2,
        l = r.y - 2;
    return {
        width: r.height + 4,
        height: r.width + 4,
        x: i,
        y: l
    };
}
