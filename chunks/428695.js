n.d(t, { Z: () => g });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n(481060),
    c = n(367907),
    u = n(626135),
    d = n(981631),
    p = n(388032),
    h = n(29504);
let f = (0, o.debounce)(c.ZP.trackWithMetadata, 500),
    g = function (e) {
        let { guild: t, title: n, message: l, image: o, type: g, imageStyles: m, imageMarginX: b, imageMarginTop: _, trackingSource: E, undismissable: O, onDismissed: y, onClick: I, cta: v, ctaColor: C, centerText: S, className: N } = e;
        i.useEffect(() => {
            f(d.rMx.CHANNEL_NOTICE_VIEWED, {
                notice_type: g,
                guild_id: t.id
            });
        }, [t.id, g]);
        let T = null;
        'function' == typeof v
            ? (T = v())
            : null != v &&
              (T = (0, r.jsx)(s.zxk, {
                  className: h.button,
                  size: s.zxk.Sizes.SMALL,
                  onClick: () => {
                      null != g &&
                          u.default.track(d.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: E,
                              guild_id: t.id,
                              notice_type: g
                          }),
                          null == I || I();
                  },
                  fullWidth: !0,
                  color: C,
                  children: v
              }));
        let P = null;
        'function' == typeof n
            ? (P = n())
            : null != n &&
              (P = (0, r.jsx)(s.Text, {
                  variant: 'text-md/medium',
                  color: 'header-primary',
                  className: a()(h.title, { [h.noImageTitle]: null == o }, { [h.center]: S }),
                  children: n
              }));
        let j = null;
        'function' == typeof l
            ? (j = l())
            : null != l &&
              (j = (0, r.jsx)(s.Text, {
                  className: a()({ [h.center]: S }),
                  variant: 'text-sm/normal',
                  color: 'text-muted',
                  children: l
              }));
        let A = null != b ? ''.concat(b, 'px') : '16px';
        return (0, r.jsxs)('div', {
            className: a()(h.container, N),
            children: [
                !0 === O
                    ? null
                    : (0, r.jsx)(s.P3F, {
                          onClick: () => {
                              c.ZP.trackWithMetadata(d.rMx.CHANNEL_NOTICE_CLOSED, { notice_type: g }), null == y || y();
                          },
                          className: h.close,
                          'aria-label': p.intl.string(p.t.WAI6xs),
                          children: (0, r.jsx)(s.Dio, {
                              size: 'md',
                              color: 'currentColor',
                              className: h.closeIcon
                          })
                      }),
                null != o &&
                    (0, r.jsx)('div', {
                        className: h.imageContainer,
                        style: {
                            marginTop: ''.concat(_, 'px'),
                            marginLeft: A,
                            marginRight: A
                        },
                        children: (0, r.jsx)('img', {
                            className: h.image,
                            style: m,
                            src: o,
                            alt: ''
                        })
                    }),
                (0, r.jsxs)('div', {
                    className: h.message,
                    children: [P, j, T]
                })
            ]
        });
    };
