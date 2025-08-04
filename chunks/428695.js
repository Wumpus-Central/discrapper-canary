n.d(t, { Z: () => m });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n(755721),
    c = n(481060),
    u = n(367907),
    d = n(626135),
    p = n(981631),
    h = n(388032),
    f = n(29504);
let g = (0, o.debounce)(u.ZP.trackWithMetadata, 500),
    m = function (e) {
        let { guild: t, title: n, message: l, image: o, type: m, imageStyles: b, imageMarginX: _, imageMarginTop: O, trackingSource: E, undismissable: y, onDismissed: v, onClick: I, cta: C, ctaColor: S, centerText: N, className: T } = e;
        i.useEffect(() => {
            g(p.rMx.CHANNEL_NOTICE_VIEWED, {
                notice_type: m,
                guild_id: t.id
            });
        }, [t.id, m]);
        let P = null;
        'function' == typeof C
            ? (P = C())
            : null != C &&
              (P = (0, r.jsx)(s.zx, {
                  className: f.button,
                  size: s.zx.Sizes.SMALL,
                  onClick: () => {
                      (null != m &&
                          d.default.track(p.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: E,
                              guild_id: t.id,
                              notice_type: m
                          }),
                          null == I || I());
                  },
                  fullWidth: !0,
                  color: S,
                  children: C
              }));
        let j = null;
        'function' == typeof n
            ? (j = n())
            : null != n &&
              (j = (0, r.jsx)(c.Text, {
                  variant: 'text-md/medium',
                  color: 'header-primary',
                  className: a()(f.title, { [f.noImageTitle]: null == o }, { [f.center]: N }),
                  children: n
              }));
        let A = null;
        'function' == typeof l
            ? (A = l())
            : null != l &&
              (A = (0, r.jsx)(c.Text, {
                  className: a()({ [f.center]: N }),
                  variant: 'text-sm/normal',
                  color: 'text-muted',
                  children: l
              }));
        let Z = null != _ ? ''.concat(_, 'px') : '16px';
        return (0, r.jsxs)('div', {
            className: a()(f.container, T),
            children: [
                !0 === y
                    ? null
                    : (0, r.jsx)(c.P3F, {
                          onClick: () => {
                              (u.ZP.trackWithMetadata(p.rMx.CHANNEL_NOTICE_CLOSED, { notice_type: m }), null == v || v());
                          },
                          className: f.close,
                          'aria-label': h.intl.string(h.t.WAI6xs),
                          children: (0, r.jsx)(c.Dio, {
                              size: 'md',
                              color: 'currentColor',
                              className: f.closeIcon
                          })
                      }),
                null != o &&
                    (0, r.jsx)('div', {
                        className: f.imageContainer,
                        style: {
                            marginTop: ''.concat(O, 'px'),
                            marginLeft: Z,
                            marginRight: Z
                        },
                        children: (0, r.jsx)('img', {
                            className: f.image,
                            style: b,
                            src: o,
                            alt: ''
                        })
                    }),
                (0, r.jsxs)('div', {
                    className: f.message,
                    children: [j, A, P]
                })
            ]
        });
    };
