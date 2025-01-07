n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(399606),
    o = n(704215),
    c = n(481060),
    d = n(493773),
    u = n(70097),
    h = n(243778),
    p = n(518950),
    m = n(594174),
    f = n(133634),
    g = n(324085),
    C = n(921944),
    x = n(388032),
    v = n(140343);
function _(e) {
    let { channel: t } = e,
        r = (0, s.e7)([m.default], () => m.default.getUser(t.hdStreamingBuyerId), [t.hdStreamingBuyerId]),
        [a, u] = (0, l.useState)(!1),
        [p, x] = (0, l.useState)(!1),
        v = (0, g.bK)(),
        [_, E] = (0, l.useState)(!1);
    (0, d.Z)(() => {
        t.isHDStreamSplashed && E(!0);
    }),
        (0, g.Uu)(t),
        (function (e) {
            let t = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
                r = [];
            e.hdStreamingBuyerId === (null == t ? void 0 : t.id) && !e.isHDStreamSplashed && r.push(o.z.HD_STREAMING_POTION_MODAL_UPSELL);
            let [a, d] = (0, h.US)(r);
            (0, l.useEffect)(() => {
                if (a === o.z.HD_STREAMING_POTION_MODAL_UPSELL) {
                    var t;
                    (t = d),
                        (0, c.openModalLazy)(async () => {
                            let { default: l } = await n.e('88452').then(n.bind(n, 552394));
                            return (n) =>
                                (0, i.jsx)(l, {
                                    markAsDismissed: t,
                                    channel: e,
                                    ...n
                                });
                        });
                }
            }, [a, d, e]);
        })(t);
    let b = () => {
        u(!1);
    };
    (0, g.J)(t, () => {
        if (v) {
            x(!0), b();
            return;
        }
        u(!0);
        let e = setTimeout(() => {
            x(!0);
        }, 25000);
        return () => clearTimeout(e);
    });
    let Z = _ ? [o.z.HD_STREAMING_POTION_BANNER] : [],
        [N, S] = (0, h.US)(Z);
    return null == r
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  a &&
                      (0, i.jsx)(I, {
                          buyer: r,
                          onEnd: b
                      }),
                  (p || N === o.z.HD_STREAMING_POTION_BANNER) &&
                      (0, i.jsx)(f.Z, {
                          channel: t,
                          buyer: r,
                          streaming: !0,
                          onClose: () => {
                              x(!1), _ && S(C.L.DISMISS);
                          }
                      })
              ]
          });
}
function I(e) {
    let { onEnd: t, buyer: n } = e,
        r = (0, l.useRef)(null),
        s = (0, l.useRef)(null),
        [o, d] = (0, l.useState)(!1);
    (0, l.useEffect)(() => {
        let e = r.current;
        if (null == e) return;
        let t = () => {
            e.currentTime >= 23 && !o && d(!0);
        };
        return (
            e.addEventListener('timeupdate', t),
            () => {
                e.removeEventListener('timeupdate', t);
            }
        );
    });
    let [h, m] = (0, l.useState)(!1);
    (0, l.useEffect)(() => {
        if (null != s.current) m(s.current.offsetWidth > 245);
    }, []);
    let { avatarSrc: f, eventHandlers: g } = (0, p.Z)({
        user: n,
        size: c.AvatarSizes.SIZE_32,
        animateOnHover: !0
    });
    return (0, i.jsxs)('div', {
        className: v.trigger,
        children: [
            (0, i.jsx)(u.Z, {
                ref: r,
                className: v.video,
                autoPlay: !0,
                onEnded: t,
                children: (0, i.jsx)('source', {
                    src: 'https://cdn.discordapp.com/assets/content/9f56bffb69fd37ec42b909d277c92d523a1c579075b9cb06880fc7cbc7f365f3.webm',
                    type: 'video/webm'
                })
            }),
            (0, i.jsxs)('div', {
                ref: s,
                className: a()(v.content, { [v.masked]: o }),
                children: [
                    (0, i.jsx)(c.Avatar, {
                        src: f,
                        'aria-label': n.username,
                        size: c.AvatarSizes.SIZE_32,
                        ...g
                    }),
                    (0, i.jsxs)('div', {
                        className: v.text,
                        children: [
                            !h &&
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-sm/normal',
                                    children: x.intl.string(x.t['i/nliI'])
                                }),
                            (0, i.jsx)(c.Text, {
                                className: v.premium,
                                variant: 'text-sm/normal',
                                children: x.intl.string(x.t['Fh/mk5'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
