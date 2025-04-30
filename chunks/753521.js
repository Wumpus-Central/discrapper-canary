n.d(t, { default: () => g }), n(388685);
var i = n(200651),
    s = n(192379),
    r = n(481060),
    a = n(626135),
    l = n(115345),
    c = n(57927),
    o = n(273236),
    d = n(931839),
    m = n(905987),
    x = n(789662),
    h = n(981631),
    u = n(388032),
    j = n(699343);
function g(e) {
    let { onClose: t, transitionState: n, dismissable: c, guildPain: g, myUsage: b } = e,
        [v, f] = s.useState(d.O.Intro),
        { submitted: N, submitting: p, saveSettings: C } = (0, l.vo)(t),
        { guildPlans: y, overrideGuild: T, getDebug: w } = (0, l.F6)(g, b),
        O = s.useRef(null);
    return (
        s.useEffect(() => {
            a.default.track(h.rMx.OPEN_MODAL, { type: 'notification_migration_modal' });
        }, []),
        (0, i.jsxs)(r.Y0X, {
            className: j.__invalid_modal,
            transitionState: n,
            'aria-label': u.intl.string(u.t.HcoRu7),
            size: r.CgR.DYNAMIC,
            children: [
                (0, i.jsx)(d.Z, {
                    selectedTab: v,
                    onClick: f,
                    submitted: N
                }),
                v === d.O.Intro
                    ? (0, i.jsx)(o.Z, { ref: O })
                    : v === d.O.Customize
                      ? (0, i.jsx)(_, {
                            guildPlans: y,
                            overrideGuild: T,
                            getDebug: w
                        })
                      : (0, i.jsx)(m.Z, {
                            count: Object.values(y).filter((e) => {
                                var t;
                                return (null != (t = e.overrideMode) ? t : e.mode) === x.AR.UseGreyDot;
                            }).length
                        }),
                (0, i.jsxs)(r.mzw, {
                    className: j.buttons,
                    children: [
                        (0, i.jsxs)('div', {
                            className: j.__invalid_left,
                            children: [
                                c || (v !== d.O.Tips && v !== d.O.Customize)
                                    ? null
                                    : (0, i.jsx)(r.eee, {
                                          className: j.dismiss,
                                          href: 'https://dis.gd/better-muting',
                                          children: (0, i.jsx)(r.Text, {
                                              variant: 'text-sm/semibold',
                                              color: 'interactive-normal',
                                              children: u.intl.string(u.t.hvVgAQ)
                                          })
                                      }),
                                c && v === d.O.Intro
                                    ? (0, i.jsx)(r.P3F, {
                                          className: j.dismiss,
                                          onClick: t,
                                          children: (0, i.jsx)(r.Text, {
                                              variant: 'text-sm/semibold',
                                              color: 'interactive-normal',
                                              children: u.intl.string(u.t.WAI6xs)
                                          })
                                      })
                                    : null,
                                c && v === d.O.Customize
                                    ? (0, i.jsx)(r.P3F, {
                                          className: j.dismiss,
                                          onClick: t,
                                          children: (0, i.jsx)(r.Text, {
                                              variant: 'text-sm/semibold',
                                              color: 'interactive-normal',
                                              children: u.intl.string(u.t['ETE/oK'])
                                          })
                                      })
                                    : null
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: j.right,
                            children: [
                                v === d.O.Customize
                                    ? (0, i.jsx)(r.Text, {
                                          className: j.warning,
                                          variant: 'text-xs/medium',
                                          color: 'text-muted',
                                          children: u.intl.string(u.t.nlpqxM)
                                      })
                                    : null,
                                v !== d.O.Customize || N
                                    ? null
                                    : (0, i.jsxs)(r.zxk, {
                                          onClick: () => f(d.O.Intro),
                                          color: r.zxk.Colors.TRANSPARENT,
                                          children: [
                                              (0, i.jsx)(r.whL, {
                                                  size: 'xs',
                                                  color: 'currentColor'
                                              }),
                                              ' ',
                                              u.intl.string(u.t['13/7kZ'])
                                          ]
                                      }),
                                v === d.O.Intro
                                    ? (0, i.jsxs)(r.zxk, {
                                          onClick: () => {
                                              var e;
                                              (null == (e = O.current) ? void 0 : e.maybeChangeToAfterTab()) && f(d.O.Customize);
                                          },
                                          children: [
                                              u.intl.string(u.t.uw9zIy),
                                              ' ',
                                              (0, i.jsx)(r.ZSh, {
                                                  size: 'xs',
                                                  color: 'currentColor'
                                              })
                                          ]
                                      })
                                    : v === d.O.Customize
                                      ? (0, i.jsxs)(r.zxk, {
                                            onClick: () => {
                                                f(d.O.Tips), C(y);
                                            },
                                            children: [
                                                u.intl.string(u.t['1Qm829']),
                                                ' ',
                                                (0, i.jsx)(r.dz2, {
                                                    size: 'xs',
                                                    color: 'currentColor'
                                                })
                                            ]
                                        })
                                      : (0, i.jsx)(r.zxk, {
                                            submitting: p,
                                            onClick: t,
                                            children: u.intl.string(u.t.cpT0Cg)
                                        })
                            ]
                        })
                    ]
                })
            ]
        })
    );
}
function _(e) {
    let { guildPlans: t, overrideGuild: n } = e;
    return (0, i.jsxs)(r.Ttm, {
        className: j.content,
        children: [
            (0, i.jsxs)('div', {
                className: j.header,
                children: [
                    (0, i.jsx)(r.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        children: u.intl.string(u.t['zBC2+f'])
                    }),
                    (0, i.jsx)(r.Text, {
                        className: j.__invalid_subtitle,
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: u.intl.string(u.t['zE9e//'])
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
