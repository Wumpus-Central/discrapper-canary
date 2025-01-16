var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n(481060),
    c = n(367907),
    d = n(626135),
    u = n(981631),
    h = n(388032),
    m = n(173549);
let p = (0, s.debounce)(c.ZP.trackWithMetadata, 500);
t.Z = function (e) {
    let { guild: t, title: n, message: l, image: s, type: g, imageStyles: f, imageMarginX: _, imageMarginTop: E, trackingSource: I, undismissable: C, onDismissed: N, onClick: v, cta: S, ctaColor: T, centerText: A, className: b } = e;
    r.useEffect(() => {
        p(u.rMx.CHANNEL_NOTICE_VIEWED, {
            notice_type: g,
            guild_id: t.id
        });
    }, [t.id, g]);
    let Z = null;
    'function' == typeof S
        ? (Z = S())
        : null != S &&
          (Z = (0, i.jsx)(o.Button, {
              className: m.button,
              size: o.Button.Sizes.SMALL,
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
              color: T,
              children: S
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
    'function' == typeof l
        ? (L = l())
        : null != l &&
          (L = (0, i.jsx)(o.Text, {
              className: a()({ [m.center]: A }),
              variant: 'text-sm/normal',
              color: 'text-muted',
              children: l
          }));
    let P = null != _ ? ''.concat(_, 'px') : '16px';
    return (0, i.jsxs)('div', {
        className: a()(m.container, b),
        children: [
            !0 === C
                ? null
                : (0, i.jsx)(o.Clickable, {
                      onClick: () => {
                          c.ZP.trackWithMetadata(u.rMx.CHANNEL_NOTICE_CLOSED, { notice_type: g }), null == N || N();
                      },
                      className: m.close,
                      'aria-label': h.intl.string(h.t.WAI6xs),
                      children: (0, i.jsx)(o.XSmallIcon, {
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
                        marginLeft: P,
                        marginRight: P
                    },
                    children: (0, i.jsx)('img', {
                        className: m.image,
                        style: f,
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
