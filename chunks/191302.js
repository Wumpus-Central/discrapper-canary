n.d(t, { Z: () => v }), n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(399606),
    o = n(704215),
    c = n(481060),
    d = n(493773),
    u = n(70097),
    h = n(243778),
    p = n(518950),
    m = n(594174),
    f = n(865238),
    g = n(576645),
    _ = n(921944),
    C = n(388032),
    x = n(104663);
function v(e) {
    let { channel: t } = e,
        a = (0, s.e7)([m.default], () => m.default.getUser(t.hdStreamingBuyerId), [t.hdStreamingBuyerId]),
        [r, u] = (0, l.useState)(!1),
        [p, C] = (0, l.useState)(!1),
        x = (0, g.bK)(),
        [v, I] = (0, l.useState)(!1);
    (0, d.ZP)(() => {
        t.isHDStreamSplashed && I(!0);
    }),
        (0, g.Uu)(t),
        (function (e) {
            let t = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
                a = [];
            e.hdStreamingBuyerId !== (null == t ? void 0 : t.id) || e.isHDStreamSplashed || a.push(o.z.HD_STREAMING_POTION_MODAL_UPSELL);
            let [r, d] = (0, h.US)(a);
            (0, l.useEffect)(() => {
                if (r === o.z.HD_STREAMING_POTION_MODAL_UPSELL)
                    (0, c.ZDy)(async () => {
                        let { default: t } = await n.e('88452').then(n.bind(n, 552394));
                        return (n) =>
                            (0, i.jsx)(t, {
                                markAsDismissed: d,
                                channel: e,
                                ...n
                            });
                    });
            }, [r, d, e]);
        })(t);
    let b = () => {
        u(!1);
    };
    (0, g.J)(t, () => {
        if (x) {
            C(!0), b();
            return;
        }
        u(!0);
        let e = setTimeout(() => {
            C(!0);
        }, 25000);
        return () => clearTimeout(e);
    });
    let Z = v ? [o.z.HD_STREAMING_POTION_BANNER] : [],
        [N, T] = (0, h.US)(Z);
    return null == a
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  r &&
                      (0, i.jsx)(E, {
                          buyer: a,
                          onEnd: b
                      }),
                  (p || N === o.z.HD_STREAMING_POTION_BANNER) &&
                      (0, i.jsx)(f.Z, {
                          channel: t,
                          buyer: a,
                          streaming: !0,
                          onClose: () => {
                              C(!1), v && T(_.L.DISMISS);
                          }
                      })
              ]
          });
}
function E(e) {
    let { onEnd: t, buyer: n } = e,
        a = (0, l.useRef)(null),
        s = (0, l.useRef)(null),
        [o, d] = (0, l.useState)(!1);
    (0, l.useEffect)(() => {
        let e = a.current;
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
        null != s.current && m(s.current.offsetWidth > 245);
    }, []);
    let { avatarSrc: f, eventHandlers: g } = (0, p.Z)({
        user: n,
        size: c.EFr.SIZE_32,
        animateOnHover: !0
    });
    return (0, i.jsxs)('div', {
        className: x.trigger,
        children: [
            (0, i.jsx)(u.Z, {
                ref: a,
                className: x.video,
                autoPlay: !0,
                onEnded: t,
                children: (0, i.jsx)('source', {
                    src: 'https://cdn.discordapp.com/assets/content/9f56bffb69fd37ec42b909d277c92d523a1c579075b9cb06880fc7cbc7f365f3.webm',
                    type: 'video/webm'
                })
            }),
            (0, i.jsxs)('div', {
                ref: s,
                className: r()(x.content, { [x.masked]: o }),
                children: [
                    (0, i.jsx)(c.qEK, {
                        src: f,
                        'aria-label': n.username,
                        size: c.EFr.SIZE_32,
                        ...g
                    }),
                    (0, i.jsxs)('div', {
                        className: x.text,
                        children: [
                            !h &&
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-sm/normal',
                                    children: C.intl.string(C.t['i/nliI'])
                                }),
                            (0, i.jsx)(c.Text, {
                                className: x.premium,
                                variant: 'text-sm/normal',
                                children: C.intl.string(C.t['Fh/mk5'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
