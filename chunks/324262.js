n.d(t, { Z: () => f });
var i = n(200651),
    l = n(192379),
    r = n(392711),
    a = n.n(r),
    s = n(481060),
    o = n(367907),
    c = n(626135),
    d = n(986332),
    u = n(428695),
    h = n(981631),
    m = n(388032),
    p = n(3030);
let g = a().debounce(o.ZP.trackWithMetadata, 500),
    _ = (e) => {
        let { guild: t, title: n, message: r, image: a, type: d, imageMarginX: u, imageMarginTop: _, trackingSource: f, undismissable: E, onDismissed: I, onClick: C, cta: v, ctaColor: N } = e;
        l.useEffect(() => {
            g(h.rMx.CHANNEL_NOTICE_VIEWED, {
                notice_type: d,
                guild_id: t.id
            });
        }, [t.id, d]);
        let T = null;
        'function' == typeof v
            ? (T = v())
            : null != v &&
              (T = (0, i.jsx)(s.zxk, {
                  className: p.btn,
                  size: s.zxk.Sizes.SMALL,
                  onClick: () => {
                      null != d &&
                          c.default.track(h.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: f,
                              guild_id: t.id,
                              notice_type: d
                          }),
                          null == C || C();
                  },
                  fullWidth: !0,
                  color: N,
                  children: v
              }));
        let S = null != u ? ''.concat(u, 'px') : '16px';
        return (0, i.jsxs)('div', {
            className: p.channelNotice,
            children: [
                !0 === E
                    ? null
                    : (0, i.jsx)(s.P3F, {
                          onClick: () => {
                              o.ZP.trackWithMetadata(h.rMx.CHANNEL_NOTICE_CLOSED, { notice_type: d }), null == I || I();
                          },
                          className: p.close,
                          'aria-label': m.intl.string(m.t.WAI6xs),
                          children: (0, i.jsx)(s.Dio, {
                              size: 'md',
                              color: 'currentColor',
                              className: p.closeIcon
                          })
                      }),
                (0, i.jsx)('div', {
                    className: p.imageContainer,
                    style: {
                        marginTop: ''.concat(_, 'px'),
                        marginLeft: S,
                        marginRight: S
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
                            ? (0, i.jsx)(s.X6q, {
                                  variant: 'heading-md/semibold',
                                  className: p.title,
                                  children: n
                              })
                            : null,
                        (0, i.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: r
                        }),
                        T
                    ]
                })
            ]
        });
    },
    f = function (e) {
        let { showRedesignedChannelNotice: t } = (0, d.o)(!0);
        return t ? (0, i.jsx)(u.Z, { ...e }) : (0, i.jsx)(_, { ...e });
    };
