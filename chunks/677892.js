n.d(t, {
    $$: () => b,
    P_: () => _,
    ap: () => N,
    ku: () => j
}),
    n(953529),
    n(388685);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(45966),
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
        { title: n, description: i, icon: s, hasStarted: a, status: o, onEdit: c, extra: d } = e;
    switch (o) {
        case 'good':
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.dz2, {
                        size: 'xs',
                        color: 'currentColor',
                        className: h.checkmark
                    }),
                    (0, r.jsx)(l.Text, {
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
                    (0, r.jsx)(l.P4T, {
                        size: 'xs',
                        color: 'currentColor',
                        className: h.warning
                    }),
                    (0, r.jsx)(l.Text, {
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
                    (0, r.jsx)(l.P4T, {
                        size: 'xs',
                        color: 'currentColor',
                        className: h.danger
                    }),
                    (0, r.jsx)(l.Text, {
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
                            (0, r.jsx)(l.X6q, {
                                variant: 'heading-md/semibold',
                                children: n
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-xs/normal',
                                color: a && 'required' === o ? 'status-danger' : 'text-normal',
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
                    a
                        ? (0, r.jsx)(l.zxk, {
                              className: h.cta,
                              size: l.zxk.Sizes.SMALL,
                              color: l.zxk.Colors.PRIMARY,
                              look: l.zxk.Looks.OUTLINED,
                              onClick: c,
                              children: p.NW.string(p.t.bt75u7)
                          })
                        : (0, r.jsxs)(l.zxk, {
                              className: h.cta,
                              innerClassName: h.ctaInner,
                              size: l.zxk.Sizes.SMALL,
                              color: l.zxk.Colors.PRIMARY,
                              onClick: c,
                              children: [
                                  p.NW.string(p.t['0GWElZ']),
                                  (0, r.jsx)(l.ZSh, {
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
    let t = (0, s.e7)([a.Z], () => a.Z.getDefaultChannelIds(e)),
        n = i.useMemo(() => new Set(t), [t]),
        [r, l] = (0, o.VF)(e, n);
    return l.length >= g.md && r.length >= g.X;
}
function b(e) {
    let t = x(e),
        n = (0, m.O4)(e);
    return t || n;
}
function j(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: c } = e,
        d = (0, s.Wu)([a.Z], () => a.Z.getDefaultChannelIds(t)),
        u = (0, s.e7)([a.Z], () => (0, o.kl)(t, a.Z.getDefaultChannelIds(t), a.Z.getOnboardingPrompts(t)).length),
        b = i.useMemo(() => new Set(d), [d]),
        [, j] = (0, o.VF)(t, b),
        N = j.length,
        _ = x(t),
        v = (0, m.O4)(t),
        O = (0, s.e7)([a.Z], () => a.Z.isAdvancedMode(t)),
        C = O
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
        title: O ? p.NW.string(p.t.YZookZ) : p.NW.string(p.t['4GSygo']),
        description: C,
        icon: (0, r.jsx)(l.VL1, {
            size: 'md',
            color: 'currentColor',
            className: h.channelIcon
        }),
        hasStarted: N > 0 || O,
        status: _ || v ? (c ? 'none' : 'good') : 'required',
        onEdit: n
    });
}
function N(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: i } = e,
        c = (0, s.Wu)([a.Z], () => a.Z.getDefaultChannelIds(t)),
        d = (0, s.Wu)([a.Z], () => a.Z.getOnboardingPrompts(t)),
        u = d.length,
        [m, g] = (0, o.dF)(t, d, c),
        x = m.length,
        b = m.length + g.length,
        j = (x / b) * 100,
        N = (0, s.e7)([a.Z], () => a.Z.isAdvancedMode(t)),
        _ = u > 0,
        v = 'none';
    return (
        _ && (j >= 85 && !i ? (v = 'good') : j < 85 && (v = 'warning')),
        (0, r.jsx)(f, {
            title: N ? p.NW.string(p.t.AGjtFh) : p.NW.string(p.t.dqCzoa),
            description: p.NW.format(p.t.iuNisr, {
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
            icon: (0, r.jsx)(l.iFz, {
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
        g = (0, s.e7)([a.Z], () => a.Z.getEnabled(t)),
        x = (0, c.uo)(m),
        b = m.enabled,
        j = i.useCallback(() => {
            (0, d.To)(t, !b);
        }, [t, b]),
        N = !(0, c.av)(m),
        _ = 'none';
    N && (x && !o ? (_ = 'good') : x || (_ = 'required'));
    let v = p.NW.string(p.t.GMOwOD);
    x ? N || (v = p.NW.string(p.t.wHOoyM)) : (v = p.NW.string(p.t.wXFbgY));
    let O = null;
    return (
        N &&
            g &&
            (O = (0, r.jsx)(l.rsf, {
                className: h.inlineSwitch,
                checked: b,
                onChange: j,
                disabled: !x
            })),
        (0, r.jsx)(f, {
            title: p.NW.string(p.t.mRHqsr),
            description: v,
            icon: (0, r.jsx)(l.Vy8, {
                size: 'md',
                color: 'currentColor',
                className: h.channelIcon
            }),
            hasStarted: N,
            status: _,
            onEdit: n,
            extra: O
        })
    );
}
