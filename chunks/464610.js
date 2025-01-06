n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(536091);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(727072),
    s = n(85960),
    o = n(676317),
    c = n(823379),
    d = n(84613),
    u = n(740903),
    m = n(598622),
    h = n(388032),
    g = n(20115);
function x() {
    let e = '\u2022 ';
    return (0, i.jsxs)('div', {
        className: g.changelog,
        children: [
            (0, i.jsx)('img', {
                className: g.changelogImage,
                src: n(531945),
                alt: 'changelog'
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        className: g.updatesHeader,
                        children: h.intl.string(h.t['4mGq0t'])
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        className: g.updatesDescription,
                        children: h.intl.string(h.t['783jaG'])
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        className: g.updatesDescription,
                        children: h.intl.string(h.t.Ilf4Zm)
                    }),
                    (0, i.jsxs)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [e, h.intl.string(h.t.yHVqKy)]
                    }),
                    (0, i.jsxs)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [e, h.intl.string(h.t.bxESra)]
                    }),
                    (0, i.jsxs)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [e, h.intl.string(h.t.YPJ8Fx)]
                    }),
                    (0, i.jsxs)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [e, h.intl.string(h.t['8C2EfX'])]
                    })
                ]
            })
        ]
    });
}
function p(e) {
    let { title: t, subtitle: n, icon: r, page: a } = e;
    return (0, i.jsxs)('div', {
        className: g.safetyStepRow,
        children: [
            (0, i.jsxs)('div', {
                className: g.safetyStepContent,
                children: [
                    (0, i.jsx)(l.Avatar, {
                        src: r,
                        size: l.AvatarSizes.SIZE_40,
                        'aria-label': t
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(l.Heading, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: t
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                children: n
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(l.Button, {
                className: g.__invalid_editButton,
                size: l.Button.Sizes.SMALL,
                color: l.Button.Colors.PRIMARY,
                look: l.Button.Looks.OUTLINED,
                onClick: () => (0, d.K)(a),
                children: h.intl.string(h.t.bt75u7)
            })
        ]
    });
}
function f(e) {
    let { guild: t, hideChangelog: d } = e;
    (0, a.RD)(t.id);
    let f = (0, s.Z6)(t.id),
        { rulesByTriggerType: C } = (0, a.pH)(t.id),
        { numEnabledRules: v, numRules: _ } = r.useMemo(() => {
            let e = 0,
                t = 0;
            return null == C
                ? {
                      numEnabledRules: e,
                      numRules: t
                  }
                : (Object.values(f)
                      .flat()
                      .forEach((n) => {
                          var i;
                          let r = null === (i = C[n]) || void 0 === i ? void 0 : i.filter(c.lm);
                          if (null == r || 0 === r.length) {
                              t++;
                              return;
                          }
                          r.forEach((n) => {
                              n.enabled && e++, t++;
                          });
                      }),
                  {
                      numEnabledRules: e,
                      numRules: t
                  });
        }, [f, C]),
        I = (0, m.Q)(t),
        N = I[u.u.CAPTCHA_AND_RAID_PROTECTION],
        T = I[u.u.DM_AND_SPAM_PROTECTION],
        j = I[u.u.PERMISSIONS],
        b = (0, o.pr)(t.id);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(l.Heading, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: g.header,
                children: h.intl.string(h.t['0A+VSE'])
            }),
            !d && (0, i.jsx)(x, {}),
            (0, i.jsxs)('div', {
                className: g.safetyChecklist,
                children: [
                    (0, i.jsx)(p, {
                        icon: n(14215),
                        title: h.intl.string(h.t['53eF5u']),
                        subtitle: h.intl.formatToPlainString(h.t.TG7NYG, {
                            enabled: N.filter((e) => e.enabled).length,
                            total: N.length
                        }),
                        page: u.u.CAPTCHA_AND_RAID_PROTECTION
                    }),
                    (0, i.jsx)('div', { className: g.divider }),
                    (0, i.jsx)(p, {
                        icon: n(128724),
                        title: h.intl.string(h.t.O0SfFx),
                        subtitle: h.intl.formatToPlainString(h.t.TG7NYG, {
                            enabled: T.filter((e) => e.enabled).length,
                            total: T.length
                        }),
                        page: u.u.DM_AND_SPAM_PROTECTION
                    }),
                    (0, i.jsx)('div', { className: g.divider }),
                    b &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p, {
                                    icon: n(145136),
                                    title: h.intl.string(h.t.uRelg4),
                                    subtitle: h.intl.formatToPlainString(h.t.TG7NYG, {
                                        enabled: v,
                                        total: _
                                    }),
                                    page: u.u.AUTOMOD
                                }),
                                (0, i.jsx)('div', { className: g.divider })
                            ]
                        }),
                    (0, i.jsx)(p, {
                        icon: n(913414),
                        title: h.intl.string(h.t.xrmhRU),
                        subtitle: h.intl.formatToPlainString(h.t.TG7NYG, {
                            enabled: j.filter((e) => e.enabled).length,
                            total: j.length
                        }),
                        page: u.u.PERMISSIONS
                    })
                ]
            })
        ]
    });
}
