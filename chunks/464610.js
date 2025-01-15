n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(536091);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    s = n(727072),
    a = n(85960),
    o = n(676317),
    c = n(823379),
    d = n(84613),
    u = n(740903),
    m = n(598622),
    h = n(388032),
    g = n(937904);
function x(e) {
    let { title: t, subtitle: n, icon: r, page: s } = e;
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
                onClick: () => (0, d.K)(s),
                children: h.intl.string(h.t.bt75u7)
            })
        ]
    });
}
function p(e) {
    let { guild: t } = e;
    (0, s.RD)(t.id);
    let d = (0, a.Z6)(t.id),
        { rulesByTriggerType: p } = (0, s.pH)(t.id),
        { numEnabledRules: f, numRules: C } = r.useMemo(() => {
            let e = 0,
                t = 0;
            return null == p
                ? {
                      numEnabledRules: e,
                      numRules: t
                  }
                : (Object.values(d)
                      .flat()
                      .forEach((n) => {
                          var i;
                          let r = null === (i = p[n]) || void 0 === i ? void 0 : i.filter(c.lm);
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
        }, [d, p]),
        v = (0, m.Q)(t),
        I = v[u.u.CAPTCHA_AND_RAID_PROTECTION],
        N = v[u.u.DM_AND_SPAM_PROTECTION],
        _ = v[u.u.PERMISSIONS],
        T = (0, o.pr)(t.id);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(l.Heading, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: g.header,
                children: h.intl.string(h.t['0A+VSE'])
            }),
            (0, i.jsxs)('div', {
                className: g.safetyChecklist,
                children: [
                    (0, i.jsx)(x, {
                        icon: n(14215),
                        title: h.intl.string(h.t['53eF5u']),
                        subtitle: h.intl.formatToPlainString(h.t.TG7NYG, {
                            enabled: I.filter((e) => e.enabled).length,
                            total: I.length
                        }),
                        page: u.u.CAPTCHA_AND_RAID_PROTECTION
                    }),
                    (0, i.jsx)('div', { className: g.divider }),
                    (0, i.jsx)(x, {
                        icon: n(128724),
                        title: h.intl.string(h.t.O0SfFx),
                        subtitle: h.intl.formatToPlainString(h.t.TG7NYG, {
                            enabled: N.filter((e) => e.enabled).length,
                            total: N.length
                        }),
                        page: u.u.DM_AND_SPAM_PROTECTION
                    }),
                    (0, i.jsx)('div', { className: g.divider }),
                    T &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(x, {
                                    icon: n(145136),
                                    title: h.intl.string(h.t.uRelg4),
                                    subtitle: h.intl.formatToPlainString(h.t.TG7NYG, {
                                        enabled: f,
                                        total: C
                                    }),
                                    page: u.u.AUTOMOD
                                }),
                                (0, i.jsx)('div', { className: g.divider })
                            ]
                        }),
                    (0, i.jsx)(x, {
                        icon: n(913414),
                        title: h.intl.string(h.t.xrmhRU),
                        subtitle: h.intl.formatToPlainString(h.t.TG7NYG, {
                            enabled: _.filter((e) => e.enabled).length,
                            total: _.length
                        }),
                        page: u.u.PERMISSIONS
                    })
                ]
            })
        ]
    });
}
