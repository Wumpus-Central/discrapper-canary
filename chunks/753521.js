(n.d(t, { default: () => g }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(481060),
    a = n(626135),
    l = n(115345),
    c = n(57927),
    o = n(273236),
    d = n(931839),
    m = n(905987),
    u = n(789662),
    x = n(981631),
    h = n(388032),
    j = n(699343);
function g(e) {
    let { onClose: t, transitionState: n, dismissable: c, guildPain: g, myUsage: f } = e,
        [v, _] = r.useState(d.O.Intro),
        { submitted: p, submitting: N, saveSettings: y } = (0, l.vo)(t),
        { guildPlans: O, overrideGuild: C, getDebug: w } = (0, l.F6)(g, f),
        T = r.useRef(null);
    return (
        r.useEffect(() => {
            a.default.track(x.rMx.OPEN_MODAL, { type: 'notification_migration_modal' });
        }, []),
        (0, i.jsxs)(s.Y0X, {
            className: j.__invalid_modal,
            transitionState: n,
            'aria-label': h.intl.string(h.t.HcoRu7),
            size: s.CgR.DYNAMIC,
            parentComponent: 'NotificationMigrationModal',
            children: [
                (0, i.jsx)(d.Z, {
                    selectedTab: v,
                    onClick: _,
                    submitted: p
                }),
                v === d.O.Intro
                    ? (0, i.jsx)(o.Z, { ref: T })
                    : v === d.O.Customize
                      ? (0, i.jsx)(b, {
                            guildPlans: O,
                            overrideGuild: C,
                            getDebug: w
                        })
                      : (0, i.jsx)(m.Z, {
                            count: Object.values(O).filter((e) => {
                                var t;
                                return (null != (t = e.overrideMode) ? t : e.mode) === u.AR.UseGreyDot;
                            }).length
                        }),
                (0, i.jsxs)(s.mzw, {
                    className: j.buttons,
                    children: [
                        (0, i.jsxs)('div', {
                            className: j.__invalid_left,
                            children: [
                                c || (v !== d.O.Tips && v !== d.O.Customize)
                                    ? null
                                    : (0, i.jsx)(s.eee, {
                                          className: j.dismiss,
                                          href: 'https://dis.gd/better-muting',
                                          children: (0, i.jsx)(s.Text, {
                                              variant: 'text-sm/semibold',
                                              color: 'interactive-normal',
                                              children: h.intl.string(h.t.hvVgAQ)
                                          })
                                      }),
                                c && v === d.O.Intro
                                    ? (0, i.jsx)(s.P3F, {
                                          className: j.dismiss,
                                          onClick: t,
                                          children: (0, i.jsx)(s.Text, {
                                              variant: 'text-sm/semibold',
                                              color: 'interactive-normal',
                                              children: h.intl.string(h.t.WAI6xs)
                                          })
                                      })
                                    : null,
                                c && v === d.O.Customize
                                    ? (0, i.jsx)(s.P3F, {
                                          className: j.dismiss,
                                          onClick: t,
                                          children: (0, i.jsx)(s.Text, {
                                              variant: 'text-sm/semibold',
                                              color: 'interactive-normal',
                                              children: h.intl.string(h.t['ETE/oK'])
                                          })
                                      })
                                    : null
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: j.right,
                            children: [
                                v === d.O.Customize
                                    ? (0, i.jsx)(s.Text, {
                                          className: j.warning,
                                          variant: 'text-xs/medium',
                                          color: 'text-muted',
                                          children: h.intl.string(h.t.nlpqxM)
                                      })
                                    : null,
                                v !== d.O.Customize || p
                                    ? null
                                    : (0, i.jsxs)(s.zxk, {
                                          onClick: () => _(d.O.Intro),
                                          color: s.zxk.Colors.TRANSPARENT,
                                          children: [
                                              (0, i.jsx)(s.whL, {
                                                  size: 'xs',
                                                  color: 'currentColor'
                                              }),
                                              ' ',
                                              h.intl.string(h.t['13/7kZ'])
                                          ]
                                      }),
                                v === d.O.Intro
                                    ? (0, i.jsxs)(s.zxk, {
                                          onClick: () => {
                                              var e;
                                              (null == (e = T.current) ? void 0 : e.maybeChangeToAfterTab()) && _(d.O.Customize);
                                          },
                                          children: [
                                              h.intl.string(h.t.uw9zIy),
                                              ' ',
                                              (0, i.jsx)(s.ZSh, {
                                                  size: 'xs',
                                                  color: 'currentColor'
                                              })
                                          ]
                                      })
                                    : v === d.O.Customize
                                      ? (0, i.jsxs)(s.zxk, {
                                            onClick: () => {
                                                (_(d.O.Tips), y(O));
                                            },
                                            children: [
                                                h.intl.string(h.t['1Qm829']),
                                                ' ',
                                                (0, i.jsx)(s.dz2, {
                                                    size: 'xs',
                                                    color: 'currentColor'
                                                })
                                            ]
                                        })
                                      : (0, i.jsx)(s.zxk, {
                                            submitting: N,
                                            onClick: t,
                                            children: h.intl.string(h.t.cpT0Cg)
                                        })
                            ]
                        })
                    ]
                })
            ]
        })
    );
}
function b(e) {
    let { guildPlans: t, overrideGuild: n } = e;
    return (0, i.jsxs)(s.Ttm, {
        className: j.content,
        children: [
            (0, i.jsxs)('div', {
                className: j.header,
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        children: h.intl.string(h.t['zBC2+f'])
                    }),
                    (0, i.jsx)(s.Text, {
                        className: j.__invalid_subtitle,
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: h.intl.string(h.t['zE9e//'])
                    })
                ]
            }),
            (0, i.jsx)(c.Z, {
                guildPlans: t,
                overrideGuild: n
            })
        ]
    });
}
