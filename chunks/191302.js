n.d(t, { Z: () => x }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(399606),
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
    C = n(32709);
function y(e) {
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
function x(e) {
    let { channel: t } = e,
        l = (0, a.e7)([f.default], () => f.default.getUser(t.hdStreamingBuyerId), [t.hdStreamingBuyerId]),
        [o, d] = (0, i.useState)(!1),
        [h, _] = (0, i.useState)(!1),
        C = (0, g.bK)(),
        [x, j] = (0, i.useState)(!1);
    (0, u.ZP)(() => {
        t.isHDStreamSplashed && j(!0);
    }),
        (0, g.Uu)(t),
        (function (e) {
            let t = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
                l = [];
            e.hdStreamingBuyerId !== (null == t ? void 0 : t.id) || e.isHDStreamSplashed || l.push(s.z.HD_STREAMING_POTION_MODAL_UPSELL);
            let [o, u] = (0, p.US)(l);
            (0, i.useEffect)(() => {
                o === s.z.HD_STREAMING_POTION_MODAL_UPSELL &&
                    (0, c.ZDy)(async () => {
                        let { default: t } = await n.e('88452').then(n.bind(n, 552394));
                        return (n) =>
                            (0, r.jsx)(
                                t,
                                y(
                                    {
                                        markAsDismissed: u,
                                        channel: e
                                    },
                                    n
                                )
                            );
                    });
            }, [o, u, e]);
        })(t);
    let O = () => {
        d(!1);
    };
    (0, g.J)(t, () => {
        if (C) {
            _(!0), O();
            return;
        }
        d(!0);
        let e = setTimeout(() => {
            _(!0);
        }, 25000);
        return () => clearTimeout(e);
    });
    let E = x ? [s.z.HD_STREAMING_POTION_BANNER] : [],
        [N, I] = (0, p.US)(E);
    return null == l
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  o &&
                      (0, r.jsx)(v, {
                          buyer: l,
                          onEnd: O
                      }),
                  (h || N === s.z.HD_STREAMING_POTION_BANNER) &&
                      (0, r.jsx)(m.Z, {
                          channel: t,
                          buyer: l,
                          streaming: !0,
                          onClose: () => {
                              _(!1), x && I(b.L.DISMISS);
                          }
                      })
              ]
          });
}
function v(e) {
    let { onEnd: t, buyer: n } = e,
        l = (0, i.useRef)(null),
        a = (0, i.useRef)(null),
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
        null != a.current && f(a.current.offsetWidth > 245);
    }, []);
    let { avatarSrc: m, eventHandlers: g } = (0, h.Z)({
        user: n,
        size: c.EFr.SIZE_32,
        animateOnHover: !0
    });
    return (0, r.jsxs)('div', {
        className: C.trigger,
        children: [
            (0, r.jsx)(d.Z, {
                ref: l,
                className: C.video,
                autoPlay: !0,
                onEnded: t,
                children: (0, r.jsx)('source', {
                    src: 'https://cdn.discordapp.com/assets/content/9f56bffb69fd37ec42b909d277c92d523a1c579075b9cb06880fc7cbc7f365f3.webm',
                    type: 'video/webm'
                })
            }),
            (0, r.jsxs)('div', {
                ref: a,
                className: o()(C.content, { [C.masked]: s }),
                children: [
                    (0, r.jsx)(
                        c.qEK,
                        y(
                            {
                                src: m,
                                'aria-label': n.username,
                                size: c.EFr.SIZE_32
                            },
                            g
                        )
                    ),
                    (0, r.jsxs)('div', {
                        className: C.text,
                        children: [
                            !p &&
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-sm/normal',
                                    children: _.NW.string(_.t['i/nliI'])
                                }),
                            (0, r.jsx)(c.Text, {
                                className: C.premium,
                                variant: 'text-sm/normal',
                                children: _.NW.string(_.t['Fh/mk5'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
