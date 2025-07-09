(n.d(t, { default: () => b }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(755721),
    a = n(481060),
    l = n(626135),
    c = n(115345),
    o = n(57927),
    d = n(273236),
    m = n(931839),
    u = n(905987),
    x = n(789662),
    h = n(981631),
    j = n(388032),
    g = n(699343);
function b(e) {
    let { onClose: t, transitionState: n, dismissable: o, guildPain: b, myUsage: v } = e,
        [_, p] = r.useState(m.O.Intro),
        { submitted: N, submitting: y, saveSettings: O } = (0, c.vo)(t),
        { guildPlans: C, overrideGuild: w, getDebug: T } = (0, c.F6)(b, v),
        P = r.useRef(null);
    return (
        r.useEffect(() => {
            l.default.track(h.rMx.OPEN_MODAL, { type: 'notification_migration_modal' });
        }, []),
        (0, i.jsxs)(a.Y0X, {
            className: g.__invalid_modal,
            transitionState: n,
            'aria-label': j.intl.string(j.t.HcoRu7),
            size: a.CgR.DYNAMIC,
            parentComponent: 'NotificationMigrationModal',
            children: [
                (0, i.jsx)(m.Z, {
                    selectedTab: _,
                    onClick: p,
                    submitted: N
                }),
                _ === m.O.Intro
                    ? (0, i.jsx)(d.Z, { ref: P })
                    : _ === m.O.Customize
                      ? (0, i.jsx)(f, {
                            guildPlans: C,
                            overrideGuild: w,
                            getDebug: T
                        })
                      : (0, i.jsx)(u.Z, {
                            count: Object.values(C).filter((e) => {
                                var t;
                                return (null != (t = e.overrideMode) ? t : e.mode) === x.AR.UseGreyDot;
                            }).length
                        }),
                (0, i.jsxs)(a.mzw, {
                    className: g.buttons,
                    children: [
                        (0, i.jsxs)('div', {
                            className: g.__invalid_left,
                            children: [
                                o || (_ !== m.O.Tips && _ !== m.O.Customize)
                                    ? null
                                    : (0, i.jsx)(a.eee, {
                                          className: g.dismiss,
                                          href: 'https://dis.gd/better-muting',
                                          children: (0, i.jsx)(a.Text, {
                                              variant: 'text-sm/semibold',
                                              color: 'interactive-normal',
                                              children: j.intl.string(j.t.hvVgAQ)
                                          })
                                      }),
                                o && _ === m.O.Intro
                                    ? (0, i.jsx)(a.P3F, {
                                          className: g.dismiss,
                                          onClick: t,
                                          children: (0, i.jsx)(a.Text, {
                                              variant: 'text-sm/semibold',
                                              color: 'interactive-normal',
                                              children: j.intl.string(j.t.WAI6xs)
                                          })
                                      })
                                    : null,
                                o && _ === m.O.Customize
                                    ? (0, i.jsx)(a.P3F, {
                                          className: g.dismiss,
                                          onClick: t,
                                          children: (0, i.jsx)(a.Text, {
                                              variant: 'text-sm/semibold',
                                              color: 'interactive-normal',
                                              children: j.intl.string(j.t['ETE/oK'])
                                          })
                                      })
                                    : null
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: g.right,
                            children: [
                                _ === m.O.Customize
                                    ? (0, i.jsx)(a.Text, {
                                          className: g.warning,
                                          variant: 'text-xs/medium',
                                          color: 'text-muted',
                                          children: j.intl.string(j.t.nlpqxM)
                                      })
                                    : null,
                                _ !== m.O.Customize || N
                                    ? null
                                    : (0, i.jsxs)(s.zx, {
                                          onClick: () => p(m.O.Intro),
                                          color: s.zx.Colors.TRANSPARENT,
                                          children: [
                                              (0, i.jsx)(a.whL, {
                                                  size: 'xs',
                                                  color: 'currentColor'
                                              }),
                                              ' ',
                                              j.intl.string(j.t['13/7kZ'])
                                          ]
                                      }),
                                _ === m.O.Intro
                                    ? (0, i.jsxs)(s.zx, {
                                          onClick: () => {
                                              var e;
                                              (null == (e = P.current) ? void 0 : e.maybeChangeToAfterTab()) && p(m.O.Customize);
                                          },
                                          children: [
                                              j.intl.string(j.t.uw9zIy),
                                              ' ',
                                              (0, i.jsx)(a.ZSh, {
                                                  size: 'xs',
                                                  color: 'currentColor'
                                              })
                                          ]
                                      })
                                    : _ === m.O.Customize
                                      ? (0, i.jsxs)(s.zx, {
                                            onClick: () => {
                                                (p(m.O.Tips), O(C));
                                            },
                                            children: [
                                                j.intl.string(j.t['1Qm829']),
                                                ' ',
                                                (0, i.jsx)(a.dz2, {
                                                    size: 'xs',
                                                    color: 'currentColor'
                                                })
                                            ]
                                        })
                                      : (0, i.jsx)(a.zxk, {
                                            variant: 'primary',
                                            text: j.intl.string(j.t.cpT0Cg),
                                            loading: y,
                                            onClick: t
                                        })
                            ]
                        })
                    ]
                })
            ]
        })
    );
}
function f(e) {
    let { guildPlans: t, overrideGuild: n } = e;
    return (0, i.jsxs)(a.Ttm, {
        className: g.content,
        children: [
            (0, i.jsxs)('div', {
                className: g.header,
                children: [
                    (0, i.jsx)(a.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        children: j.intl.string(j.t['zBC2+f'])
                    }),
                    (0, i.jsx)(a.Text, {
                        className: g.__invalid_subtitle,
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: j.intl.string(j.t['zE9e//'])
                    })
                ]
            }),
            (0, i.jsx)(o.Z, {
                guildPlans: t,
                overrideGuild: n
            })
        ]
    });
}
