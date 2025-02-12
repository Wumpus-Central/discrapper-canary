n.d(t, {
    $$: () => C,
    P_: () => N,
    ap: () => v,
    ku: () => f
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(45966),
    o = n(637853),
    c = n(734893),
    d = n(8426),
    u = n(969632),
    m = n(974513),
    h = n(290511),
    g = n(388032),
    x = n(875625);
function p(e) {
    let t,
        { title: n, description: r, icon: l, hasStarted: a, status: o, onEdit: c, extra: d } = e;
    switch (o) {
        case 'good':
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.dz2, {
                        size: 'xs',
                        color: 'currentColor',
                        className: x.checkmark
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-xs/semibold',
                        color: 'status-positive',
                        className: x.statusText,
                        children: g.intl.string(g.t.rPnzRU)
                    })
                ]
            });
            break;
        case 'warning':
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.P4T, {
                        size: 'xs',
                        color: 'currentColor',
                        className: x.warning
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-xs/semibold',
                        color: 'status-warning',
                        className: x.statusText,
                        children: g.intl.string(g.t['yTa+dn'])
                    })
                ]
            });
            break;
        case 'required':
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.P4T, {
                        size: 'xs',
                        color: 'currentColor',
                        className: x.danger
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-xs/semibold',
                        color: 'status-danger',
                        className: x.statusText,
                        children: g.intl.string(g.t.EkokLy)
                    })
                ]
            });
    }
    return (0, i.jsxs)('div', {
        className: x.onboardingStepContainer,
        children: [
            (0, i.jsxs)('div', {
                className: x.leftContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: x.iconContainer,
                        children: l
                    }),
                    (0, i.jsxs)('div', {
                        className: x.onboardingStepText,
                        children: [
                            (0, i.jsx)(s.X6q, {
                                variant: 'heading-md/semibold',
                                children: n
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                color: a && 'required' === o ? 'status-danger' : 'text-normal',
                                children: r
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: x.rightContainer,
                children: [
                    t,
                    d,
                    a
                        ? (0, i.jsx)(s.zxk, {
                              className: x.cta,
                              size: s.zxk.Sizes.SMALL,
                              color: s.zxk.Colors.PRIMARY,
                              look: s.zxk.Looks.OUTLINED,
                              onClick: c,
                              children: g.intl.string(g.t.bt75u7)
                          })
                        : (0, i.jsxs)(s.zxk, {
                              className: x.cta,
                              innerClassName: x.ctaInner,
                              size: s.zxk.Sizes.SMALL,
                              color: s.zxk.Colors.PRIMARY,
                              onClick: c,
                              children: [
                                  g.intl.string(g.t['0GWElZ']),
                                  (0, i.jsx)(s.ZSh, {
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
function _(e) {
    let t = (0, l.e7)([a.Z], () => a.Z.getDefaultChannelIds(e)),
        n = r.useMemo(() => new Set(t), [t]),
        [i, s] = (0, o.VF)(e, n);
    return s.length >= h.md && i.length >= h.X;
}
function C(e) {
    let t = _(e),
        n = (0, m.O4)(e);
    return t || n;
}
function f(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: c } = e,
        d = (0, l.Wu)([a.Z], () => a.Z.getDefaultChannelIds(t)),
        u = (0, l.e7)([a.Z], () => (0, o.kl)(t, a.Z.getDefaultChannelIds(t), a.Z.getOnboardingPrompts(t)).length),
        C = r.useMemo(() => new Set(d), [d]),
        [, f] = (0, o.VF)(t, C),
        v = f.length,
        N = _(t),
        j = (0, m.O4)(t),
        I = (0, l.e7)([a.Z], () => a.Z.isAdvancedMode(t)),
        E = I
            ? g.intl.formatToPlainString(g.t.nHwnLC, {
                  numDefaultChannels: v,
                  numFromQuestions: u - v
              })
            : N
              ? g.intl.formatToPlainString(g.t.HxEwSk, { numDefaultChannels: v })
              : g.intl.formatToPlainString(g.t.ey3uVV, {
                    numDefaultChannels: h.md,
                    numChattableChannels: h.X
                });
    return (0, i.jsx)(p, {
        title: I ? g.intl.string(g.t.YZookZ) : g.intl.string(g.t['4GSygo']),
        description: E,
        icon: (0, i.jsx)(s.VL1, {
            size: 'md',
            color: 'currentColor',
            className: x.channelIcon
        }),
        hasStarted: v > 0 || I,
        status: N || j ? (c ? 'none' : 'good') : 'required',
        onEdit: n
    });
}
function v(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: r } = e,
        c = (0, l.Wu)([a.Z], () => a.Z.getDefaultChannelIds(t)),
        d = (0, l.Wu)([a.Z], () => a.Z.getOnboardingPrompts(t)),
        u = d.length,
        [m, h] = (0, o.dF)(t, d, c),
        _ = m.length,
        C = m.length + h.length,
        f = (_ / C) * 100,
        v = (0, l.e7)([a.Z], () => a.Z.isAdvancedMode(t)),
        N = u > 0,
        j = 'none';
    return (
        N && (f >= 85 && !r ? (j = 'good') : f < 85 && (j = 'warning')),
        (0, i.jsx)(p, {
            title: v ? g.intl.string(g.t.AGjtFh) : g.intl.string(g.t.dqCzoa),
            description: g.intl.format(g.t.iuNisr, {
                numChannels: _,
                numTotalChannels: C,
                channelsHook: (e, t) =>
                    (0, i.jsx)(
                        'span',
                        {
                            style: { color: f > 85 ? 'var(--header-primary)' : 'var(--status-warning)' },
                            children: e
                        },
                        t
                    )
            }),
            icon: (0, i.jsx)(s.iFz, {
                size: 'md',
                color: 'currentColor',
                className: x.channelIcon
            }),
            hasStarted: N,
            status: j,
            onEdit: n
        })
    );
}
function N(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: o } = e,
        m = (0, l.e7)([u.Z], () => u.Z.getSettings()),
        h = (0, l.e7)([a.Z], () => a.Z.getEnabled(t)),
        _ = (0, c.uo)(m),
        C = m.enabled,
        f = r.useCallback(() => {
            (0, d.To)(t, !C);
        }, [t, C]),
        v = !(0, c.av)(m),
        N = 'none';
    v && (_ && !o ? (N = 'good') : _ || (N = 'required'));
    let j = g.intl.string(g.t.GMOwOD);
    _ ? v || (j = g.intl.string(g.t.wHOoyM)) : (j = g.intl.string(g.t.wXFbgY));
    let I = null;
    return (
        v &&
            h &&
            (I = (0, i.jsx)(s.rsf, {
                className: x.inlineSwitch,
                checked: C,
                onChange: f,
                disabled: !_
            })),
        (0, i.jsx)(p, {
            title: g.intl.string(g.t.mRHqsr),
            description: j,
            icon: (0, i.jsx)(s.Vy8, {
                size: 'md',
                color: 'currentColor',
                className: x.channelIcon
            }),
            hasStarted: v,
            status: N,
            onEdit: n,
            extra: I
        })
    );
}
