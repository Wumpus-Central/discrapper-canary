n.d(t, { Z: () => g });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(392711),
    o = n(481060),
    c = n(367907),
    d = n(626135),
    u = n(981631),
    h = n(388032),
    m = n(809715);
let p = (0, s.debounce)(c.ZP.trackWithMetadata, 500),
    g = function (e) {
        let { guild: t, title: n, message: r, image: s, type: g, imageStyles: _, imageMarginX: f, imageMarginTop: E, trackingSource: I, undismissable: C, onDismissed: N, onClick: v, cta: T, ctaColor: S, centerText: A, className: b } = e;
        l.useEffect(() => {
            p(u.rMx.CHANNEL_NOTICE_VIEWED, {
                notice_type: g,
                guild_id: t.id
            });
        }, [t.id, g]);
        let Z = null;
        'function' == typeof T
            ? (Z = T())
            : null != T &&
              (Z = (0, i.jsx)(o.zxk, {
                  className: m.button,
                  size: o.zxk.Sizes.SMALL,
                  onClick: () => {
                      null != g &&
                          d.default.track(u.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: I,
                              guild_id: t.id,
                              notice_type: g
                          }),
                          null == v || v();
                  },
                  fullWidth: !0,
                  color: S,
                  children: T
              }));
        let x = null;
        'function' == typeof n
            ? (x = n())
            : null != n &&
              (x = (0, i.jsx)(o.Text, {
                  variant: 'text-md/medium',
                  color: 'header-primary',
                  className: a()(m.title, { [m.noImageTitle]: null == s }, { [m.center]: A }),
                  children: n
              }));
        let L = null;
        'function' == typeof r
            ? (L = r())
            : null != r &&
              (L = (0, i.jsx)(o.Text, {
                  className: a()({ [m.center]: A }),
                  variant: 'text-sm/normal',
                  color: 'text-muted',
                  children: r
              }));
        let y = null != f ? ''.concat(f, 'px') : '16px';
        return (0, i.jsxs)('div', {
            className: a()(m.container, b),
            children: [
                !0 === C
                    ? null
                    : (0, i.jsx)(o.P3F, {
                          onClick: () => {
                              c.ZP.trackWithMetadata(u.rMx.CHANNEL_NOTICE_CLOSED, { notice_type: g }), null == N || N();
                          },
                          className: m.close,
                          'aria-label': h.intl.string(h.t.WAI6xs),
                          children: (0, i.jsx)(o.Dio, {
                              size: 'md',
                              color: 'currentColor',
                              className: m.closeIcon
                          })
                      }),
                null != s &&
                    (0, i.jsx)('div', {
                        className: m.imageContainer,
                        style: {
                            marginTop: ''.concat(E, 'px'),
                            marginLeft: y,
                            marginRight: y
                        },
                        children: (0, i.jsx)('img', {
                            className: m.image,
                            style: _,
                            src: s,
                            alt: ''
                        })
                    }),
                (0, i.jsxs)('div', {
                    className: m.message,
                    children: [x, L, Z]
                })
            ]
        });
    };
