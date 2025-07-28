(n.d(t, {
    $$: () => b,
    P_: () => _,
    ap: () => v,
    ku: () => j
}),
    n(953529),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    s = n(45966),
    o = n(637853),
    c = n(734893),
    d = n(8426),
    u = n(969632),
    m = n(974513),
    g = n(290511),
    p = n(388032),
    h = n(271254);
function f(e) {
    let t,
        { title: n, description: i, icon: l, hasStarted: s, status: o, onEdit: c, extra: d } = e;
    switch (o) {
        case 'good':
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.dz2, {
                        size: 'xs',
                        color: 'currentColor',
                        className: h.checkmark
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-xs/semibold',
                        color: 'status-positive',
                        className: h.statusText,
                        children: p.intl.string(p.t.rPnzRU)
                    })
                ]
            });
            break;
        case 'warning':
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.Mgn, {
                        size: 'xs',
                        color: 'currentColor',
                        className: h.warning
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-xs/semibold',
                        color: 'status-warning',
                        className: h.statusText,
                        children: p.intl.string(p.t['yTa+dn'])
                    })
                ]
            });
            break;
        case 'required':
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.Mgn, {
                        size: 'xs',
                        color: 'currentColor',
                        className: h.danger
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-xs/semibold',
                        color: 'status-danger',
                        className: h.statusText,
                        children: p.intl.string(p.t.EkokLy)
                    })
                ]
            });
    }
    return (0, r.jsxs)('div', {
        className: h.onboardingStepContainer,
        children: [
            (0, r.jsxs)('div', {
                className: h.leftContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: h.iconContainer,
                        children: l
                    }),
                    (0, r.jsxs)('div', {
                        className: h.onboardingStepText,
                        children: [
                            (0, r.jsx)(a.X6q, {
                                variant: 'heading-md/semibold',
                                children: n
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-xs/normal',
                                color: s && 'required' === o ? 'status-danger' : 'text-default',
                                children: i
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: h.rightContainer,
                children: [
                    t,
                    d,
                    (0, r.jsx)('div', {
                        className: h.cta,
                        children: s
                            ? (0, r.jsx)(a.zxk, {
                                  size: 'sm',
                                  variant: 'secondary',
                                  onClick: c,
                                  text: p.intl.string(p.t.bt75u7)
                              })
                            : (0, r.jsx)(a.zxk, {
                                  icon: a.ZSh,
                                  iconPosition: 'end',
                                  size: 'sm',
                                  variant: 'secondary',
                                  onClick: c,
                                  text: p.intl.string(p.t['0GWElZ'])
                              })
                    })
                ]
            })
        ]
    });
}
function x(e) {
    let t = (0, l.e7)([s.Z], () => s.Z.getDefaultChannelIds(e)),
        n = i.useMemo(() => new Set(t), [t]),
        [r, a] = (0, o.VF)(e, n);
    return a.length >= g.md && r.length >= g.X;
}
function b(e) {
    let t = x(e),
        n = (0, m.O4)(e);
    return t || n;
}
function j(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: c } = e,
        d = (0, l.Wu)([s.Z], () => s.Z.getDefaultChannelIds(t)),
        u = (0, l.e7)([s.Z], () => (0, o.kl)(t, s.Z.getDefaultChannelIds(t), s.Z.getOnboardingPrompts(t)).length),
        b = i.useMemo(() => new Set(d), [d]),
        [, j] = (0, o.VF)(t, b),
        v = j.length,
        _ = x(t),
        O = (0, m.O4)(t),
        y = (0, l.e7)([s.Z], () => s.Z.isAdvancedMode(t)),
        C = y
            ? p.intl.formatToPlainString(p.t.nHwnLC, {
                  numDefaultChannels: v,
                  numFromQuestions: u - v
              })
            : _
              ? p.intl.formatToPlainString(p.t.HxEwSk, { numDefaultChannels: v })
              : p.intl.formatToPlainString(p.t.ey3uVV, {
                    numDefaultChannels: g.md,
                    numChattableChannels: g.X
                });
    return (0, r.jsx)(f, {
        title: y ? p.intl.string(p.t.YZookZ) : p.intl.string(p.t['4GSygo']),
        description: C,
        icon: (0, r.jsx)(a.VL1, {
            size: 'md',
            color: 'currentColor',
            className: h.channelIcon
        }),
        hasStarted: v > 0 || y,
        status: _ || O ? (c ? 'none' : 'good') : 'required',
        onEdit: n
    });
}
function v(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: i } = e,
        c = (0, l.Wu)([s.Z], () => s.Z.getDefaultChannelIds(t)),
        d = (0, l.Wu)([s.Z], () => s.Z.getOnboardingPrompts(t)),
        u = d.length,
        [m, g] = (0, o.dF)(t, d, c),
        x = m.length,
        b = m.length + g.length,
        j = (x / b) * 100,
        v = (0, l.e7)([s.Z], () => s.Z.isAdvancedMode(t)),
        _ = u > 0,
        O = 'none';
    return (
        _ && (j >= 85 && !i ? (O = 'good') : j < 85 && (O = 'warning')),
        (0, r.jsx)(f, {
            title: v ? p.intl.string(p.t.AGjtFh) : p.intl.string(p.t.dqCzoa),
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
            icon: (0, r.jsx)(a.iFz, {
                size: 'md',
                color: 'currentColor',
                className: h.channelIcon
            }),
            hasStarted: _,
            status: O,
            onEdit: n
        })
    );
}
function _(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: o } = e,
        m = (0, l.e7)([u.Z], () => u.Z.getSettings()),
        g = (0, l.e7)([s.Z], () => s.Z.getEnabled(t)),
        x = (0, c.uo)(m),
        b = m.enabled,
        j = i.useCallback(() => {
            (0, d.To)(t, !b);
        }, [t, b]),
        v = !(0, c.av)(m),
        _ = 'none';
    v && (x && !o ? (_ = 'good') : x || (_ = 'required'));
    let O = p.intl.string(p.t.GMOwOD);
    x ? v || (O = p.intl.string(p.t.wHOoyM)) : (O = p.intl.string(p.t.wXFbgY));
    let y = null;
    return (
        v &&
            g &&
            (y = (0, r.jsx)(a.rsf, {
                className: h.inlineSwitch,
                checked: b,
                onChange: j,
                disabled: !x
            })),
        (0, r.jsx)(f, {
            title: p.intl.string(p.t.mRHqsr),
            description: O,
            icon: (0, r.jsx)(a.Vy8, {
                size: 'md',
                color: 'currentColor',
                className: h.channelIcon
            }),
            hasStarted: v,
            status: _,
            onEdit: n,
            extra: y
        })
    );
}
