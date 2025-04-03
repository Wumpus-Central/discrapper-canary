n.d(t, {
    $$: () => x,
    P_: () => _,
    ap: () => N,
    ku: () => j
}),
    n(266796),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(45966),
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
        { title: n, description: i, icon: s, hasStarted: l, status: o, onEdit: c, extra: d } = e;
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
                        children: p.NW.string(p.t.rPnzRU)
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
                        children: p.NW.string(p.t['yTa+dn'])
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
                        children: p.NW.string(p.t.EkokLy)
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
                        children: s
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
                                color: l && 'required' === o ? 'status-danger' : 'text-normal',
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
                    l
                        ? (0, r.jsx)(a.zxk, {
                              className: h.cta,
                              size: a.zxk.Sizes.SMALL,
                              color: a.zxk.Colors.PRIMARY,
                              look: a.zxk.Looks.OUTLINED,
                              onClick: c,
                              children: p.NW.string(p.t.bt75u7)
                          })
                        : (0, r.jsxs)(a.zxk, {
                              className: h.cta,
                              innerClassName: h.ctaInner,
                              size: a.zxk.Sizes.SMALL,
                              color: a.zxk.Colors.PRIMARY,
                              onClick: c,
                              children: [
                                  p.NW.string(p.t['0GWElZ']),
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
    let t = (0, s.e7)([l.Z], () => l.Z.getDefaultChannelIds(e)),
        n = i.useMemo(() => new Set(t), [t]),
        [r, a] = (0, o.VF)(e, n);
    return a.length >= g.md && r.length >= g.X;
}
function x(e) {
    let t = b(e),
        n = (0, m.O4)(e);
    return t || n;
}
function j(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: c } = e,
        d = (0, s.Wu)([l.Z], () => l.Z.getDefaultChannelIds(t)),
        u = (0, s.e7)([l.Z], () => (0, o.kl)(t, l.Z.getDefaultChannelIds(t), l.Z.getOnboardingPrompts(t)).length),
        x = i.useMemo(() => new Set(d), [d]),
        [, j] = (0, o.VF)(t, x),
        N = j.length,
        _ = b(t),
        v = (0, m.O4)(t),
        C = (0, s.e7)([l.Z], () => l.Z.isAdvancedMode(t)),
        O = C
            ? p.NW.formatToPlainString(p.t.nHwnLC, {
                  numDefaultChannels: N,
                  numFromQuestions: u - N
              })
            : _
              ? p.NW.formatToPlainString(p.t.HxEwSk, { numDefaultChannels: N })
              : p.NW.formatToPlainString(p.t.ey3uVV, {
                    numDefaultChannels: g.md,
                    numChattableChannels: g.X
                });
    return (0, r.jsx)(f, {
        title: C ? p.NW.string(p.t.YZookZ) : p.NW.string(p.t['4GSygo']),
        description: O,
        icon: (0, r.jsx)(a.VL1, {
            size: 'md',
            color: 'currentColor',
            className: h.channelIcon
        }),
        hasStarted: N > 0 || C,
        status: _ || v ? (c ? 'none' : 'good') : 'required',
        onEdit: n
    });
}
function N(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: i } = e,
        c = (0, s.Wu)([l.Z], () => l.Z.getDefaultChannelIds(t)),
        d = (0, s.Wu)([l.Z], () => l.Z.getOnboardingPrompts(t)),
        u = d.length,
        [m, g] = (0, o.dF)(t, d, c),
        b = m.length,
        x = m.length + g.length,
        j = (b / x) * 100,
        N = (0, s.e7)([l.Z], () => l.Z.isAdvancedMode(t)),
        _ = u > 0,
        v = 'none';
    return (
        _ && (j >= 85 && !i ? (v = 'good') : j < 85 && (v = 'warning')),
        (0, r.jsx)(f, {
            title: N ? p.NW.string(p.t.AGjtFh) : p.NW.string(p.t.dqCzoa),
            description: p.NW.format(p.t.iuNisr, {
                numChannels: b,
                numTotalChannels: x,
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
            status: v,
            onEdit: n
        })
    );
}
function _(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: o } = e,
        m = (0, s.e7)([u.Z], () => u.Z.getSettings()),
        g = (0, s.e7)([l.Z], () => l.Z.getEnabled(t)),
        b = (0, c.uo)(m),
        x = m.enabled,
        j = i.useCallback(() => {
            (0, d.To)(t, !x);
        }, [t, x]),
        N = !(0, c.av)(m),
        _ = 'none';
    N && (b && !o ? (_ = 'good') : b || (_ = 'required'));
    let v = p.NW.string(p.t.GMOwOD);
    b ? N || (v = p.NW.string(p.t.wHOoyM)) : (v = p.NW.string(p.t.wXFbgY));
    let C = null;
    return (
        N &&
            g &&
            (C = (0, r.jsx)(a.rsf, {
                className: h.inlineSwitch,
                checked: x,
                onChange: j,
                disabled: !b
            })),
        (0, r.jsx)(f, {
            title: p.NW.string(p.t.mRHqsr),
            description: v,
            icon: (0, r.jsx)(a.Vy8, {
                size: 'md',
                color: 'currentColor',
                className: h.channelIcon
            }),
            hasStarted: N,
            status: _,
            onEdit: n,
            extra: C
        })
    );
}
