var i = n(200651),
    r = n(192379),
    l = n(392711),
    a = n.n(l),
    s = n(481060),
    o = n(367907),
    c = n(626135),
    d = n(986332),
    u = n(428695),
    h = n(981631),
    m = n(388032),
    p = n(3030);
let g = a().debounce(o.ZP.trackWithMetadata, 500),
    f = (e) => {
        let { guild: t, title: n, message: l, image: a, type: d, imageMarginX: u, imageMarginTop: f, trackingSource: _, undismissable: E, onDismissed: I, onClick: C, cta: v, ctaColor: N } = e;
        r.useEffect(() => {
            g(h.rMx.CHANNEL_NOTICE_VIEWED, {
                notice_type: d,
                guild_id: t.id
            });
        }, [t.id, d]);
        let S = null;
        'function' == typeof v
            ? (S = v())
            : null != v &&
              (S = (0, i.jsx)(s.Button, {
                  className: p.btn,
                  size: s.Button.Sizes.SMALL,
                  onClick: () => {
                      null != d &&
                          c.default.track(h.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: _,
                              guild_id: t.id,
                              notice_type: d
                          }),
                          null == C || C();
                  },
                  fullWidth: !0,
                  color: N,
                  children: v
              }));
        let T = null != u ? ''.concat(u, 'px') : '16px';
        return (0, i.jsxs)('div', {
            className: p.channelNotice,
            children: [
                !0 === E
                    ? null
                    : (0, i.jsx)(s.Clickable, {
                          onClick: () => {
                              o.ZP.trackWithMetadata(h.rMx.CHANNEL_NOTICE_CLOSED, { notice_type: d }), null == I || I();
                          },
                          className: p.close,
                          'aria-label': m.intl.string(m.t.WAI6xs),
                          children: (0, i.jsx)(s.XSmallIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: p.closeIcon
                          })
                      }),
                (0, i.jsx)('div', {
                    className: p.imageContainer,
                    style: {
                        marginTop: ''.concat(f, 'px'),
                        marginLeft: T,
                        marginRight: T
                    },
                    children: (0, i.jsx)('img', {
                        className: p.image,
                        src: a,
                        alt: ''
                    })
                }),
                (0, i.jsxs)('div', {
                    className: p.message,
                    children: [
                        null != n
                            ? (0, i.jsx)(s.Heading, {
                                  variant: 'heading-md/semibold',
                                  className: p.title,
                                  children: n
                              })
                            : null,
                        (0, i.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: l
                        }),
                        S
                    ]
                })
            ]
        });
    };
t.Z = function (e) {
    let { showRedesignedChannelNotice: t } = (0, d.o)(!0);
    return t ? (0, i.jsx)(u.Z, { ...e }) : (0, i.jsx)(f, { ...e });
};
