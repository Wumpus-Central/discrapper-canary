n.r(t),
    n.d(t, {
        default: function () {
            return g;
        }
    }),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(481060),
    l = n(626135),
    a = n(115345),
    c = n(57927),
    d = n(273236),
    o = n(931839),
    m = n(905987),
    x = n(789662),
    h = n(981631),
    u = n(388032),
    j = n(415562);
function g(e) {
    let { onClose: t, transitionState: n, dismissable: c, guildPain: g, myUsage: v } = e,
        [f, N] = s.useState(o.O.Intro),
        { submitted: _, submitting: p, saveSettings: C } = (0, a.vo)(t),
        { guildPlans: I, overrideGuild: T, getDebug: w } = (0, a.F6)(g, v),
        k = s.useRef(null);
    return (
        s.useEffect(() => {
            l.default.track(h.rMx.OPEN_MODAL, { type: 'notification_migration_modal' });
        }, []),
        (0, i.jsxs)(r.ModalRoot, {
            className: j.__invalid_modal,
            transitionState: n,
            'aria-label': u.intl.string(u.t.HcoRu7),
            size: r.ModalSize.DYNAMIC,
            children: [
                (0, i.jsx)(o.Z, {
                    selectedTab: f,
                    onClick: N,
                    submitted: _
                }),
                f === o.O.Intro
                    ? (0, i.jsx)(d.Z, { ref: k })
                    : f === o.O.Customize
                      ? (0, i.jsx)(b, {
                            guildPlans: I,
                            overrideGuild: T,
                            getDebug: w
                        })
                      : (0, i.jsx)(m.Z, {
                            count: Object.values(I).filter((e) => {
                                var t;
                                return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === x.AR.UseGreyDot;
                            }).length
                        }),
                (0, i.jsxs)(r.ModalFooter, {
                    className: j.buttons,
                    children: [
                        (0, i.jsxs)('div', {
                            className: j.__invalid_left,
                            children: [
                                c || (f !== o.O.Tips && f !== o.O.Customize)
                                    ? null
                                    : (0, i.jsx)(r.Anchor, {
                                          className: j.dismiss,
                                          href: 'https://dis.gd/better-muting',
                                          children: (0, i.jsx)(r.Text, {
                                              variant: 'text-sm/semibold',
                                              color: 'interactive-normal',
                                              children: u.intl.string(u.t.hvVgAQ)
                                          })
                                      }),
                                c && f === o.O.Intro
                                    ? (0, i.jsx)(r.Clickable, {
                                          className: j.dismiss,
                                          onClick: t,
                                          children: (0, i.jsx)(r.Text, {
                                              variant: 'text-sm/semibold',
                                              color: 'interactive-normal',
                                              children: u.intl.string(u.t.WAI6xs)
                                          })
                                      })
                                    : null,
                                c && f === o.O.Customize
                                    ? (0, i.jsx)(r.Clickable, {
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
                                f === o.O.Customize
                                    ? (0, i.jsx)(r.Text, {
                                          className: j.warning,
                                          variant: 'text-xs/medium',
                                          color: 'text-muted',
                                          children: u.intl.string(u.t.nlpqxM)
                                      })
                                    : null,
                                f !== o.O.Customize || _
                                    ? null
                                    : (0, i.jsxs)(r.Button, {
                                          onClick: () => N(o.O.Intro),
                                          color: r.Button.Colors.TRANSPARENT,
                                          children: [
                                              (0, i.jsx)(r.ArrowSmallLeftIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor'
                                              }),
                                              ' ',
                                              u.intl.string(u.t['13/7kZ'])
                                          ]
                                      }),
                                f === o.O.Intro
                                    ? (0, i.jsxs)(r.Button, {
                                          onClick: () => {
                                              var e;
                                              (null === (e = k.current) || void 0 === e ? void 0 : e.maybeChangeToAfterTab()) && N(o.O.Customize);
                                          },
                                          children: [
                                              u.intl.string(u.t.uw9zIy),
                                              ' ',
                                              (0, i.jsx)(r.ArrowSmallRightIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor'
                                              })
                                          ]
                                      })
                                    : f === o.O.Customize
                                      ? (0, i.jsxs)(r.Button, {
                                            onClick: () => {
                                                N(o.O.Tips), C(I);
                                            },
                                            children: [
                                                u.intl.string(u.t['1Qm829']),
                                                ' ',
                                                (0, i.jsx)(r.CheckmarkLargeIcon, {
                                                    size: 'xs',
                                                    color: 'currentColor'
                                                })
                                            ]
                                        })
                                      : (0, i.jsx)(r.Button, {
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
function b(e) {
    let { guildPlans: t, overrideGuild: n } = e;
    return (0, i.jsxs)(r.Scroller, {
        className: j.content,
        children: [
            (0, i.jsxs)('div', {
                className: j.header,
                children: [
                    (0, i.jsx)(r.Heading, {
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
