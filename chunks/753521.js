s.d(t, { default: () => g }), s(47120);
var i = s(200651),
    n = s(192379),
    a = s(481060),
    r = s(626135),
    l = s(115345),
    c = s(57927),
    d = s(273236),
    o = s(931839),
    m = s(905987),
    x = s(789662),
    h = s(981631),
    u = s(388032),
    j = s(415562);
function g(e) {
    let { onClose: t, transitionState: s, dismissable: c, guildPain: g, myUsage: v } = e,
        [b, f] = n.useState(o.O.Intro),
        { submitted: N, submitting: p, saveSettings: C } = (0, l.vo)(t),
        { guildPlans: T, overrideGuild: w, getDebug: y } = (0, l.F6)(g, v),
        I = n.useRef(null);
    return (
        n.useEffect(() => {
            r.default.track(h.rMx.OPEN_MODAL, { type: 'notification_migration_modal' });
        }, []),
        (0, i.jsxs)(a.Y0X, {
            className: j.__invalid_modal,
            transitionState: s,
            'aria-label': u.intl.string(u.t.HcoRu7),
            size: a.CgR.DYNAMIC,
            children: [
                (0, i.jsx)(o.Z, {
                    selectedTab: b,
                    onClick: f,
                    submitted: N
                }),
                b === o.O.Intro
                    ? (0, i.jsx)(d.Z, { ref: I })
                    : b === o.O.Customize
                      ? (0, i.jsx)(_, {
                            guildPlans: T,
                            overrideGuild: w,
                            getDebug: y
                        })
                      : (0, i.jsx)(m.Z, {
                            count: Object.values(T).filter((e) => {
                                var t;
                                return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === x.AR.UseGreyDot;
                            }).length
                        }),
                (0, i.jsxs)(a.mzw, {
                    className: j.buttons,
                    children: [
                        (0, i.jsxs)('div', {
                            className: j.__invalid_left,
                            children: [
                                c || (b !== o.O.Tips && b !== o.O.Customize)
                                    ? null
                                    : (0, i.jsx)(a.eee, {
                                          className: j.dismiss,
                                          href: 'https://dis.gd/better-muting',
                                          children: (0, i.jsx)(a.Text, {
                                              variant: 'text-sm/semibold',
                                              color: 'interactive-normal',
                                              children: u.intl.string(u.t.hvVgAQ)
                                          })
                                      }),
                                c && b === o.O.Intro
                                    ? (0, i.jsx)(a.P3F, {
                                          className: j.dismiss,
                                          onClick: t,
                                          children: (0, i.jsx)(a.Text, {
                                              variant: 'text-sm/semibold',
                                              color: 'interactive-normal',
                                              children: u.intl.string(u.t.WAI6xs)
                                          })
                                      })
                                    : null,
                                c && b === o.O.Customize
                                    ? (0, i.jsx)(a.P3F, {
                                          className: j.dismiss,
                                          onClick: t,
                                          children: (0, i.jsx)(a.Text, {
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
                                b === o.O.Customize
                                    ? (0, i.jsx)(a.Text, {
                                          className: j.warning,
                                          variant: 'text-xs/medium',
                                          color: 'text-muted',
                                          children: u.intl.string(u.t.nlpqxM)
                                      })
                                    : null,
                                b !== o.O.Customize || N
                                    ? null
                                    : (0, i.jsxs)(a.zxk, {
                                          onClick: () => f(o.O.Intro),
                                          color: a.zxk.Colors.TRANSPARENT,
                                          children: [
                                              (0, i.jsx)(a.whL, {
                                                  size: 'xs',
                                                  color: 'currentColor'
                                              }),
                                              ' ',
                                              u.intl.string(u.t['13/7kZ'])
                                          ]
                                      }),
                                b === o.O.Intro
                                    ? (0, i.jsxs)(a.zxk, {
                                          onClick: () => {
                                              var e;
                                              (null === (e = I.current) || void 0 === e ? void 0 : e.maybeChangeToAfterTab()) && f(o.O.Customize);
                                          },
                                          children: [
                                              u.intl.string(u.t.uw9zIy),
                                              ' ',
                                              (0, i.jsx)(a.ZSh, {
                                                  size: 'xs',
                                                  color: 'currentColor'
                                              })
                                          ]
                                      })
                                    : b === o.O.Customize
                                      ? (0, i.jsxs)(a.zxk, {
                                            onClick: () => {
                                                f(o.O.Tips), C(T);
                                            },
                                            children: [
                                                u.intl.string(u.t['1Qm829']),
                                                ' ',
                                                (0, i.jsx)(a.dz2, {
                                                    size: 'xs',
                                                    color: 'currentColor'
                                                })
                                            ]
                                        })
                                      : (0, i.jsx)(a.zxk, {
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
    let { guildPlans: t, overrideGuild: s } = e;
    return (0, i.jsxs)(a.Ttm, {
        className: j.content,
        children: [
            (0, i.jsxs)('div', {
                className: j.header,
                children: [
                    (0, i.jsx)(a.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        children: u.intl.string(u.t['zBC2+f'])
                    }),
                    (0, i.jsx)(a.Text, {
                        className: j.__invalid_subtitle,
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: u.intl.string(u.t['zE9e//'])
                    })
                ]
            }),
            (0, i.jsx)(c.Z, {
                guildPlans: t,
                overrideGuild: s
            })
        ]
    });
}
