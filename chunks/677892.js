n.d(t, {
    $$: () => b,
    P_: () => v,
    ap: () => _,
    ku: () => j
}),
    n(953529),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(45966),
    o = n(637853),
    c = n(734893),
    u = n(8426),
    d = n(969632),
    m = n(974513),
    g = n(290511),
    p = n(388032),
    f = n(271254);
function h(e) {
    let t,
        { title: n, description: i, icon: l, hasStarted: a, status: o, onEdit: c, extra: u } = e;
    switch (o) {
        case 'good':
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(s.dz2, {
                        size: 'xs',
                        color: 'currentColor',
                        className: f.checkmark
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/semibold',
                        color: 'status-positive',
                        className: f.statusText,
                        children: p.intl.string(p.t.rPnzRU)
                    })
                ]
            });
            break;
        case 'warning':
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(s.P4T, {
                        size: 'xs',
                        color: 'currentColor',
                        className: f.warning
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/semibold',
                        color: 'status-warning',
                        className: f.statusText,
                        children: p.intl.string(p.t['yTa+dn'])
                    })
                ]
            });
            break;
        case 'required':
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(s.P4T, {
                        size: 'xs',
                        color: 'currentColor',
                        className: f.danger
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/semibold',
                        color: 'status-danger',
                        className: f.statusText,
                        children: p.intl.string(p.t.EkokLy)
                    })
                ]
            });
    }
    return (0, r.jsxs)('div', {
        className: f.onboardingStepContainer,
        children: [
            (0, r.jsxs)('div', {
                className: f.leftContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: f.iconContainer,
                        children: l
                    }),
                    (0, r.jsxs)('div', {
                        className: f.onboardingStepText,
                        children: [
                            (0, r.jsx)(s.X6q, {
                                variant: 'heading-md/semibold',
                                children: n
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                color: a && 'required' === o ? 'status-danger' : 'text-normal',
                                children: i
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: f.rightContainer,
                children: [
                    t,
                    u,
                    a
                        ? (0, r.jsx)(s.zxk, {
                              className: f.cta,
                              size: s.zxk.Sizes.SMALL,
                              color: s.zxk.Colors.PRIMARY,
                              look: s.zxk.Looks.OUTLINED,
                              onClick: c,
                              children: p.intl.string(p.t.bt75u7)
                          })
                        : (0, r.jsxs)(s.zxk, {
                              className: f.cta,
                              innerClassName: f.ctaInner,
                              size: s.zxk.Sizes.SMALL,
                              color: s.zxk.Colors.PRIMARY,
                              onClick: c,
                              children: [
                                  p.intl.string(p.t['0GWElZ']),
                                  (0, r.jsx)(s.ZSh, {
                                      size: 'xxs',
                                      color: 'currentColor'
                                  })
                              ]
                          })
                ]
            })
        ]
    });
}
function x(e) {
    let t = (0, l.e7)([a.Z], () => a.Z.getDefaultChannelIds(e)),
        n = i.useMemo(() => new Set(t), [t]),
        [r, s] = (0, o.VF)(e, n);
    return s.length >= g.md && r.length >= g.X;
}
function b(e) {
    let t = x(e),
        n = (0, m.O4)(e);
    return t || n;
}
function j(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: c } = e,
        u = (0, l.Wu)([a.Z], () => a.Z.getDefaultChannelIds(t)),
        d = (0, l.e7)([a.Z], () => (0, o.kl)(t, a.Z.getDefaultChannelIds(t), a.Z.getOnboardingPrompts(t)).length),
        b = i.useMemo(() => new Set(u), [u]),
        [, j] = (0, o.VF)(t, b),
        _ = j.length,
        v = x(t),
        O = (0, m.O4)(t),
        C = (0, l.e7)([a.Z], () => a.Z.isAdvancedMode(t)),
        y = C
            ? p.intl.formatToPlainString(p.t.nHwnLC, {
                  numDefaultChannels: _,
                  numFromQuestions: d - _
              })
            : v
              ? p.intl.formatToPlainString(p.t.HxEwSk, { numDefaultChannels: _ })
              : p.intl.formatToPlainString(p.t.ey3uVV, {
                    numDefaultChannels: g.md,
                    numChattableChannels: g.X
                });
    return (0, r.jsx)(h, {
        title: C ? p.intl.string(p.t.YZookZ) : p.intl.string(p.t['4GSygo']),
        description: y,
        icon: (0, r.jsx)(s.VL1, {
            size: 'md',
            color: 'currentColor',
            className: f.channelIcon
        }),
        hasStarted: _ > 0 || C,
        status: v || O ? (c ? 'none' : 'good') : 'required',
        onEdit: n
    });
}
function _(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: i } = e,
        c = (0, l.Wu)([a.Z], () => a.Z.getDefaultChannelIds(t)),
        u = (0, l.Wu)([a.Z], () => a.Z.getOnboardingPrompts(t)),
        d = u.length,
        [m, g] = (0, o.dF)(t, u, c),
        x = m.length,
        b = m.length + g.length,
        j = (x / b) * 100,
        _ = (0, l.e7)([a.Z], () => a.Z.isAdvancedMode(t)),
        v = d > 0,
        O = 'none';
    return (
        v && (j >= 85 && !i ? (O = 'good') : j < 85 && (O = 'warning')),
        (0, r.jsx)(h, {
            title: _ ? p.intl.string(p.t.AGjtFh) : p.intl.string(p.t.dqCzoa),
            description: p.intl.format(p.t.iuNisr, {
                numChannels: x,
                numTotalChannels: b,
                channelsHook: (e, t) =>
                    (0, r.jsx)(
                        'span',
                        {
                            style: { color: j > 85 ? 'var(--header-primary)' : 'var(--status-warning)' },
                            children: e
                        },
                        t
                    )
            }),
            icon: (0, r.jsx)(s.iFz, {
                size: 'md',
                color: 'currentColor',
                className: f.channelIcon
            }),
            hasStarted: v,
            status: O,
            onEdit: n
        })
    );
}
function v(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: o } = e,
        m = (0, l.e7)([d.Z], () => d.Z.getSettings()),
        g = (0, l.e7)([a.Z], () => a.Z.getEnabled(t)),
        x = (0, c.uo)(m),
        b = m.enabled,
        j = i.useCallback(() => {
            (0, u.To)(t, !b);
        }, [t, b]),
        _ = !(0, c.av)(m),
        v = 'none';
    _ && (x && !o ? (v = 'good') : x || (v = 'required'));
    let O = p.intl.string(p.t.GMOwOD);
    x ? _ || (O = p.intl.string(p.t.wHOoyM)) : (O = p.intl.string(p.t.wXFbgY));
    let C = null;
    return (
        _ &&
            g &&
            (C = (0, r.jsx)(s.rsf, {
                className: f.inlineSwitch,
                checked: b,
                onChange: j,
                disabled: !x
            })),
        (0, r.jsx)(h, {
            title: p.intl.string(p.t.mRHqsr),
            description: O,
            icon: (0, r.jsx)(s.Vy8, {
                size: 'md',
                color: 'currentColor',
                className: f.channelIcon
            }),
            hasStarted: _,
            status: v,
            onEdit: n,
            extra: C
        })
    );
}
