n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    l = n(392711),
    a = n.n(l),
    o = n(481060),
    s = n(367907),
    c = n(626135),
    u = n(986332),
    d = n(428695),
    p = n(981631),
    h = n(388032),
    f = n(431884);
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
let m = a().debounce(s.ZP.trackWithMetadata, 500),
    b = (e) => {
        let { guild: t, title: n, message: l, image: a, type: u, imageMarginX: d, imageMarginTop: g, trackingSource: b, undismissable: _, onDismissed: E, onClick: O, cta: N, ctaColor: y } = e;
        i.useEffect(() => {
            m(p.rMx.CHANNEL_NOTICE_VIEWED, {
                notice_type: u,
                guild_id: t.id
            });
        }, [t.id, u]);
        let I = null;
        'function' == typeof N
            ? (I = N())
            : null != N &&
              (I = (0, r.jsx)(o.zxk, {
                  className: f.btn,
                  size: o.zxk.Sizes.SMALL,
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
                  color: y,
                  children: N
              }));
        let v = null != d ? ''.concat(d, 'px') : '16px';
        return (0, r.jsxs)('div', {
            className: f.channelNotice,
            children: [
                !0 === _
                    ? null
                    : (0, r.jsx)(o.P3F, {
                          onClick: () => {
                              s.ZP.trackWithMetadata(p.rMx.CHANNEL_NOTICE_CLOSED, { notice_type: u }), null == E || E();
                          },
                          className: f.close,
                          'aria-label': h.NW.string(h.t.WAI6xs),
                          children: (0, r.jsx)(o.Dio, {
                              size: 'md',
                              color: 'currentColor',
                              className: f.closeIcon
                          })
                      }),
                (0, r.jsx)('div', {
                    className: f.imageContainer,
                    style: {
                        marginTop: ''.concat(g, 'px'),
                        marginLeft: v,
                        marginRight: v
                    },
                    children: (0, r.jsx)('img', {
                        className: f.image,
                        src: a,
                        alt: ''
                    })
                }),
                (0, r.jsxs)('div', {
                    className: f.message,
                    children: [
                        null != n
                            ? (0, r.jsx)(o.X6q, {
                                  variant: 'heading-md/semibold',
                                  className: f.title,
                                  children: n
                              })
                            : null,
                        (0, r.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            children: l
                        }),
                        I
                    ]
                })
            ]
        });
    },
    _ = function (e) {
        let { showRedesignedChannelNotice: t } = (0, u.o)(!0);
        return t ? (0, r.jsx)(d.Z, g({}, e)) : (0, r.jsx)(b, g({}, e));
    };
