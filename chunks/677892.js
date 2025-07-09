(n.d(t, {
    $$: () => j,
    P_: () => O,
    ap: () => v,
    ku: () => _
}),
    n(953529),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(755721),
    a = n(481060),
    o = n(45966),
    c = n(637853),
    d = n(734893),
    u = n(8426),
    m = n(969632),
    g = n(974513),
    p = n(290511),
    f = n(388032),
    h = n(271254);
function x(e) {
    let t,
        { title: n, description: i, icon: l, hasStarted: o, status: c, onEdit: d, extra: u } = e;
    switch (c) {
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
                        children: f.intl.string(f.t.rPnzRU)
                    })
                ]
            });
            break;
        case 'warning':
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.P4T, {
                        size: 'xs',
                        color: 'currentColor',
                        className: h.warning
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-xs/semibold',
                        color: 'status-warning',
                        className: h.statusText,
                        children: f.intl.string(f.t['yTa+dn'])
                    })
                ]
            });
            break;
        case 'required':
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.P4T, {
                        size: 'xs',
                        color: 'currentColor',
                        className: h.danger
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-xs/semibold',
                        color: 'status-danger',
                        className: h.statusText,
                        children: f.intl.string(f.t.EkokLy)
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
                                color: o && 'required' === c ? 'status-danger' : 'text-default',
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
                    u,
                    o
                        ? (0, r.jsx)(s.zx, {
                              className: h.cta,
                              size: s.zx.Sizes.SMALL,
                              color: s.zx.Colors.PRIMARY,
                              look: s.zx.Looks.OUTLINED,
                              onClick: d,
                              children: f.intl.string(f.t.bt75u7)
                          })
                        : (0, r.jsxs)(s.zx, {
                              className: h.cta,
                              innerClassName: h.ctaInner,
                              size: s.zx.Sizes.SMALL,
                              color: s.zx.Colors.PRIMARY,
                              onClick: d,
                              children: [
                                  f.intl.string(f.t['0GWElZ']),
                                  (0, r.jsx)(a.ZSh, {
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
function b(e) {
    let t = (0, l.e7)([o.Z], () => o.Z.getDefaultChannelIds(e)),
        n = i.useMemo(() => new Set(t), [t]),
        [r, s] = (0, c.VF)(e, n);
    return s.length >= p.md && r.length >= p.X;
}
function j(e) {
    let t = b(e),
        n = (0, g.O4)(e);
    return t || n;
}
function _(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: s } = e,
        d = (0, l.Wu)([o.Z], () => o.Z.getDefaultChannelIds(t)),
        u = (0, l.e7)([o.Z], () => (0, c.kl)(t, o.Z.getDefaultChannelIds(t), o.Z.getOnboardingPrompts(t)).length),
        m = i.useMemo(() => new Set(d), [d]),
        [, j] = (0, c.VF)(t, m),
        _ = j.length,
        v = b(t),
        O = (0, g.O4)(t),
        C = (0, l.e7)([o.Z], () => o.Z.isAdvancedMode(t)),
        y = C
            ? f.intl.formatToPlainString(f.t.nHwnLC, {
                  numDefaultChannels: _,
                  numFromQuestions: u - _
              })
            : v
              ? f.intl.formatToPlainString(f.t.HxEwSk, { numDefaultChannels: _ })
              : f.intl.formatToPlainString(f.t.ey3uVV, {
                    numDefaultChannels: p.md,
                    numChattableChannels: p.X
                });
    return (0, r.jsx)(x, {
        title: C ? f.intl.string(f.t.YZookZ) : f.intl.string(f.t['4GSygo']),
        description: y,
        icon: (0, r.jsx)(a.VL1, {
            size: 'md',
            color: 'currentColor',
            className: h.channelIcon
        }),
        hasStarted: _ > 0 || C,
        status: v || O ? (s ? 'none' : 'good') : 'required',
        onEdit: n
    });
}
function v(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: i } = e,
        s = (0, l.Wu)([o.Z], () => o.Z.getDefaultChannelIds(t)),
        d = (0, l.Wu)([o.Z], () => o.Z.getOnboardingPrompts(t)),
        u = d.length,
        [m, g] = (0, c.dF)(t, d, s),
        p = m.length,
        b = m.length + g.length,
        j = (p / b) * 100,
        _ = (0, l.e7)([o.Z], () => o.Z.isAdvancedMode(t)),
        v = u > 0,
        O = 'none';
    return (
        v && (j >= 85 && !i ? (O = 'good') : j < 85 && (O = 'warning')),
        (0, r.jsx)(x, {
            title: _ ? f.intl.string(f.t.AGjtFh) : f.intl.string(f.t.dqCzoa),
            description: f.intl.format(f.t.iuNisr, {
                numChannels: p,
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
            hasStarted: v,
            status: O,
            onEdit: n
        })
    );
}
function O(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: s } = e,
        c = (0, l.e7)([m.Z], () => m.Z.getSettings()),
        g = (0, l.e7)([o.Z], () => o.Z.getEnabled(t)),
        p = (0, d.uo)(c),
        b = c.enabled,
        j = i.useCallback(() => {
            (0, u.To)(t, !b);
        }, [t, b]),
        _ = !(0, d.av)(c),
        v = 'none';
    _ && (p && !s ? (v = 'good') : p || (v = 'required'));
    let O = f.intl.string(f.t.GMOwOD);
    p ? _ || (O = f.intl.string(f.t.wHOoyM)) : (O = f.intl.string(f.t.wXFbgY));
    let C = null;
    return (
        _ &&
            g &&
            (C = (0, r.jsx)(a.rsf, {
                className: h.inlineSwitch,
                checked: b,
                onChange: j,
                disabled: !p
            })),
        (0, r.jsx)(x, {
            title: f.intl.string(f.t.mRHqsr),
            description: O,
            icon: (0, r.jsx)(a.Vy8, {
                size: 'md',
                color: 'currentColor',
                className: h.channelIcon
            }),
            hasStarted: _,
            status: v,
            onEdit: n,
            extra: C
        })
    );
}
