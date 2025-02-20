n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    l = n(392711),
    o = n.n(l),
    a = n(481060),
    s = n(367907),
    c = n(626135),
    u = n(986332),
    d = n(428695),
    p = n(981631),
    h = n(388032),
    f = n(907229);
function g(e) {
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
let m = o().debounce(s.ZP.trackWithMetadata, 500),
    b = (e) => {
        let { guild: t, title: n, message: l, image: o, type: u, imageMarginX: d, imageMarginTop: g, trackingSource: b, undismissable: _, onDismissed: E, onClick: O, cta: N, ctaColor: v } = e;
        i.useEffect(() => {
            m(p.rMx.CHANNEL_NOTICE_VIEWED, {
                notice_type: u,
                guild_id: t.id
            });
        }, [t.id, u]);
        let y = null;
        'function' == typeof N
            ? (y = N())
            : null != N &&
              (y = (0, r.jsx)(a.zxk, {
                  className: f.btn,
                  size: a.zxk.Sizes.SMALL,
                  onClick: () => {
                      null != u &&
                          c.default.track(p.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: b,
                              guild_id: t.id,
                              notice_type: u
                          }),
                          null == O || O();
                  },
                  fullWidth: !0,
                  color: v,
                  children: N
              }));
        let I = null != d ? ''.concat(d, 'px') : '16px';
        return (0, r.jsxs)('div', {
            className: f.channelNotice,
            children: [
                !0 === _
                    ? null
                    : (0, r.jsx)(a.P3F, {
                          onClick: () => {
                              s.ZP.trackWithMetadata(p.rMx.CHANNEL_NOTICE_CLOSED, { notice_type: u }), null == E || E();
                          },
                          className: f.close,
                          'aria-label': h.NW.string(h.t.WAI6xs),
                          children: (0, r.jsx)(a.Dio, {
                              size: 'md',
                              color: 'currentColor',
                              className: f.closeIcon
                          })
                      }),
                (0, r.jsx)('div', {
                    className: f.imageContainer,
                    style: {
                        marginTop: ''.concat(g, 'px'),
                        marginLeft: I,
                        marginRight: I
                    },
                    children: (0, r.jsx)('img', {
                        className: f.image,
                        src: o,
                        alt: ''
                    })
                }),
                (0, r.jsxs)('div', {
                    className: f.message,
                    children: [
                        null != n
                            ? (0, r.jsx)(a.X6q, {
                                  variant: 'heading-md/semibold',
                                  className: f.title,
                                  children: n
                              })
                            : null,
                        (0, r.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            children: l
                        }),
                        y
                    ]
                })
            ]
        });
    },
    _ = function (e) {
        let { showRedesignedChannelNotice: t } = (0, u.o)(!0);
        return t ? (0, r.jsx)(d.Z, g({}, e)) : (0, r.jsx)(b, g({}, e));
    };
