(n.d(t, { Z: () => C }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(399606),
    s = n(704215),
    c = n(481060),
    u = n(493773),
    d = n(70097),
    p = n(243778),
    h = n(518950),
    f = n(594174),
    m = n(865238),
    g = n(576645),
    b = n(921944),
    _ = n(388032),
    y = n(32709);
function C(e) {
    let { channel: t } = e,
        n = (0, o.e7)([f.default], () => f.default.getUser(t.hdStreamingBuyerId), [t.hdStreamingBuyerId]),
        [l, a] = (0, i.useState)(!1),
        [c, d] = (0, i.useState)(!1),
        h = (0, g.bK)(),
        [_, y] = (0, i.useState)(!1);
    ((0, u.ZP)(() => {
        t.isHDStreamSplashed && y(!0);
    }),
        (0, g.Uu)(t));
    let C = () => {
        a(!1);
    };
    (0, g.J)(t, () => {
        if (h) {
            (d(!0), C());
            return;
        }
        a(!0);
        let e = setTimeout(() => {
            d(!0);
        }, 25000);
        return () => clearTimeout(e);
    });
    let v = _ ? [s.z.HD_STREAMING_POTION_BANNER] : [],
        [j, O] = (0, p.US)(v);
    return null == n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  l &&
                      (0, r.jsx)(x, {
                          buyer: n,
                          onEnd: C
                      }),
                  (c || j === s.z.HD_STREAMING_POTION_BANNER) &&
                      (0, r.jsx)(m.Z, {
                          channel: t,
                          buyer: n,
                          streaming: !0,
                          onClose: () => {
                              (d(!1), _ && O(b.L.DISMISS));
                          }
                      })
              ]
          });
}
function x(e) {
    let { onEnd: t, buyer: n } = e,
        l = (0, i.useRef)(null),
        o = (0, i.useRef)(null),
        [s, u] = (0, i.useState)(!1);
    (0, i.useEffect)(() => {
        let e = l.current;
        if (null == e) return;
        let t = () => {
            e.currentTime >= 23 && !s && u(!0);
        };
        return (
            e.addEventListener('timeupdate', t),
            () => {
                e.removeEventListener('timeupdate', t);
            }
        );
    });
    let [p, f] = (0, i.useState)(!1);
    (0, i.useEffect)(() => {
        null != o.current && f(o.current.offsetWidth > 245);
    }, []);
    let { avatarSrc: m, eventHandlers: g } = (0, h.Z)({
        userId: n.id,
        size: c.EFr.SIZE_32,
        animateOnHover: !0
    });
    return (0, r.jsxs)('div', {
        className: y.trigger,
        children: [
            (0, r.jsx)(d.Z, {
                ref: l,
                className: y.video,
                autoPlay: !0,
                onEnded: t,
                children: (0, r.jsx)('source', {
                    src: 'https://cdn.discordapp.com/assets/content/9f56bffb69fd37ec42b909d277c92d523a1c579075b9cb06880fc7cbc7f365f3.webm',
                    type: 'video/webm'
                })
            }),
            (0, r.jsxs)('div', {
                ref: o,
                className: a()(y.content, { [y.masked]: s }),
                children: [
                    (0, r.jsx)(
                        c.qEK,
                        (function (e) {
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
                                        var r;
                                        ((r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r));
                                    }));
                            }
                            return e;
                        })(
                            {
                                src: m,
                                'aria-label': n.username,
                                size: c.EFr.SIZE_32
                            },
                            g
                        )
                    ),
                    (0, r.jsxs)('div', {
                        className: y.text,
                        children: [
                            !p &&
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-sm/normal',
                                    children: _.intl.string(_.t['i/nliI'])
                                }),
                            (0, r.jsx)(c.Text, {
                                className: y.premium,
                                variant: 'text-sm/normal',
                                children: _.intl.string(_.t['Fh/mk5'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
