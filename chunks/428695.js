n.d(t, { Z: () => f });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n(481060),
    c = n(367907),
    u = n(626135),
    d = n(981631),
    p = n(388032),
    h = n(877662);
let g = (0, a.debounce)(c.ZP.trackWithMetadata, 500),
    f = function (e) {
        let { guild: t, title: n, message: l, image: a, type: f, imageStyles: m, imageMarginX: b, imageMarginTop: _, trackingSource: E, undismissable: O, onDismissed: N, onClick: v, cta: y, ctaColor: I, centerText: C, className: S } = e;
        i.useEffect(() => {
            g(d.rMx.CHANNEL_NOTICE_VIEWED, {
                notice_type: f,
                guild_id: t.id
            });
        }, [t.id, f]);
        let T = null;
        'function' == typeof y
            ? (T = y())
            : null != y &&
              (T = (0, r.jsx)(s.zxk, {
                  className: h.button,
                  size: s.zxk.Sizes.SMALL,
                  onClick: () => {
                      null != f &&
                          u.default.track(d.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: E,
                              guild_id: t.id,
                              notice_type: f
                          }),
                          null == v || v();
                  },
                  fullWidth: !0,
                  color: I,
                  children: y
              }));
        let P = null;
        'function' == typeof n
            ? (P = n())
            : null != n &&
              (P = (0, r.jsx)(s.Text, {
                  variant: 'text-md/medium',
                  color: 'header-primary',
                  className: o()(h.title, { [h.noImageTitle]: null == a }, { [h.center]: C }),
                  children: n
              }));
        let j = null;
        'function' == typeof l
            ? (j = l())
            : null != l &&
              (j = (0, r.jsx)(s.Text, {
                  className: o()({ [h.center]: C }),
                  variant: 'text-sm/normal',
                  color: 'text-muted',
                  children: l
              }));
        let A = null != b ? ''.concat(b, 'px') : '16px';
        return (0, r.jsxs)('div', {
            className: o()(h.container, S),
            children: [
                !0 === O
                    ? null
                    : (0, r.jsx)(s.P3F, {
                          onClick: () => {
                              c.ZP.trackWithMetadata(d.rMx.CHANNEL_NOTICE_CLOSED, { notice_type: f }), null == N || N();
                          },
                          className: h.close,
                          'aria-label': p.NW.string(p.t.WAI6xs),
                          children: (0, r.jsx)(s.Dio, {
                              size: 'md',
                              color: 'currentColor',
                              className: h.closeIcon
                          })
                      }),
                null != a &&
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
                            src: a,
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
