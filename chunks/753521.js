s.d(t, { default: () => g }), s(47120);
var n = s(200651),
    i = s(192379),
    r = s(481060),
    a = s(626135),
    l = s(115345),
    c = s(57927),
    d = s(273236),
    o = s(931839),
    m = s(905987),
    x = s(789662),
    h = s(981631),
    u = s(388032),
    j = s(699343);
function g(e) {
    let { onClose: t, transitionState: s, dismissable: c, guildPain: g, myUsage: _ } = e,
        [b, v] = i.useState(o.O.Intro),
        { submitted: f, submitting: p, saveSettings: C } = (0, l.vo)(t),
        { guildPlans: W, overrideGuild: T, getDebug: y } = (0, l.F6)(g, _),
        w = i.useRef(null);
    return (
        i.useEffect(() => {
            a.default.track(h.rMx.OPEN_MODAL, { type: 'notification_migration_modal' });
        }, []),
        (0, n.jsxs)(r.Y0X, {
            className: j.__invalid_modal,
            transitionState: s,
            'aria-label': u.NW.string(u.t.HcoRu7),
            size: r.CgR.DYNAMIC,
            children: [
                (0, n.jsx)(o.Z, {
                    selectedTab: b,
                    onClick: v,
                    submitted: f
                }),
                b === o.O.Intro
                    ? (0, n.jsx)(d.Z, { ref: w })
                    : b === o.O.Customize
                      ? (0, n.jsx)(N, {
                            guildPlans: W,
                            overrideGuild: T,
                            getDebug: y
                        })
                      : (0, n.jsx)(m.Z, {
                            count: Object.values(W).filter((e) => {
                                var t;
                                return (null != (t = e.overrideMode) ? t : e.mode) === x.AR.UseGreyDot;
                            }).length
                        }),
                (0, n.jsxs)(r.mzw, {
                    className: j.buttons,
                    children: [
                        (0, n.jsxs)('div', {
                            className: j.__invalid_left,
                            children: [
                                c || (b !== o.O.Tips && b !== o.O.Customize)
                                    ? null
                                    : (0, n.jsx)(r.eee, {
                                          className: j.dismiss,
                                          href: 'https://dis.gd/better-muting',
                                          children: (0, n.jsx)(r.Text, {
                                              variant: 'text-sm/semibold',
                                              color: 'interactive-normal',
                                              children: u.NW.string(u.t.hvVgAQ)
                                          })
                                      }),
                                c && b === o.O.Intro
                                    ? (0, n.jsx)(r.P3F, {
                                          className: j.dismiss,
                                          onClick: t,
                                          children: (0, n.jsx)(r.Text, {
                                              variant: 'text-sm/semibold',
                                              color: 'interactive-normal',
                                              children: u.NW.string(u.t.WAI6xs)
                                          })
                                      })
                                    : null,
                                c && b === o.O.Customize
                                    ? (0, n.jsx)(r.P3F, {
                                          className: j.dismiss,
                                          onClick: t,
                                          children: (0, n.jsx)(r.Text, {
                                              variant: 'text-sm/semibold',
                                              color: 'interactive-normal',
                                              children: u.NW.string(u.t['ETE/oK'])
                                          })
                                      })
                                    : null
                            ]
                        }),
                        (0, n.jsxs)('div', {
                            className: j.right,
                            children: [
                                b === o.O.Customize
                                    ? (0, n.jsx)(r.Text, {
                                          className: j.warning,
                                          variant: 'text-xs/medium',
                                          color: 'text-muted',
                                          children: u.NW.string(u.t.nlpqxM)
                                      })
                                    : null,
                                b !== o.O.Customize || f
                                    ? null
                                    : (0, n.jsxs)(r.zxk, {
                                          onClick: () => v(o.O.Intro),
                                          color: r.zxk.Colors.TRANSPARENT,
                                          children: [
                                              (0, n.jsx)(r.whL, {
                                                  size: 'xs',
                                                  color: 'currentColor'
                                              }),
                                              ' ',
                                              u.NW.string(u.t['13/7kZ'])
                                          ]
                                      }),
                                b === o.O.Intro
                                    ? (0, n.jsxs)(r.zxk, {
                                          onClick: () => {
                                              var e;
                                              (null == (e = w.current) ? void 0 : e.maybeChangeToAfterTab()) && v(o.O.Customize);
                                          },
                                          children: [
                                              u.NW.string(u.t.uw9zIy),
                                              ' ',
                                              (0, n.jsx)(r.ZSh, {
                                                  size: 'xs',
                                                  color: 'currentColor'
                                              })
                                          ]
                                      })
                                    : b === o.O.Customize
                                      ? (0, n.jsxs)(r.zxk, {
                                            onClick: () => {
                                                v(o.O.Tips), C(W);
                                            },
                                            children: [
                                                u.NW.string(u.t['1Qm829']),
                                                ' ',
                                                (0, n.jsx)(r.dz2, {
                                                    size: 'xs',
                                                    color: 'currentColor'
                                                })
                                            ]
                                        })
                                      : (0, n.jsx)(r.zxk, {
                                            submitting: p,
                                            onClick: t,
                                            children: u.NW.string(u.t.cpT0Cg)
                                        })
                            ]
                        })
                    ]
                })
            ]
        })
    );
}
function N(e) {
    let { guildPlans: t, overrideGuild: s } = e;
    return (0, n.jsxs)(r.Ttm, {
        className: j.content,
        children: [
            (0, n.jsxs)('div', {
                className: j.header,
                children: [
                    (0, n.jsx)(r.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        children: u.NW.string(u.t['zBC2+f'])
                    }),
                    (0, n.jsx)(r.Text, {
                        className: j.__invalid_subtitle,
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: u.NW.string(u.t['zE9e//'])
                    })
                ]
            }),
            (0, n.jsx)(c.Z, {
                guildPlans: t,
                overrideGuild: s
            })
        ]
    });
}
