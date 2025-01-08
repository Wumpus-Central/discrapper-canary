n.d(t, {
    $$: function () {
        return C;
    },
    P_: function () {
        return N;
    },
    ap: function () {
        return _;
    },
    ku: function () {
        return v;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(45966),
    o = n(637853),
    c = n(734893),
    d = n(8426),
    u = n(969632),
    m = n(974513),
    h = n(290511),
    g = n(388032),
    x = n(15832);
function p(e) {
    let t,
        { title: n, description: r, icon: l, hasStarted: s, status: o, onEdit: c, extra: d } = e;
    switch (o) {
        case 'good':
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(a.CheckmarkLargeIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: x.checkmark
                    }),
                    (0, i.jsx)(a.Text, {
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
                    (0, i.jsx)(a.CircleWarningIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: x.warning
                    }),
                    (0, i.jsx)(a.Text, {
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
                    (0, i.jsx)(a.CircleWarningIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: x.danger
                    }),
                    (0, i.jsx)(a.Text, {
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
                            (0, i.jsx)(a.Heading, {
                                variant: 'heading-md/semibold',
                                children: n
                            }),
                            (0, i.jsx)(a.Text, {
                                variant: 'text-xs/normal',
                                color: s && 'required' === o ? 'status-danger' : 'text-normal',
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
                    s
                        ? (0, i.jsx)(a.Button, {
                              className: x.cta,
                              size: a.Button.Sizes.SMALL,
                              color: a.Button.Colors.PRIMARY,
                              look: a.Button.Looks.OUTLINED,
                              onClick: c,
                              children: g.intl.string(g.t.bt75u7)
                          })
                        : (0, i.jsxs)(a.Button, {
                              className: x.cta,
                              innerClassName: x.ctaInner,
                              size: a.Button.Sizes.SMALL,
                              color: a.Button.Colors.PRIMARY,
                              onClick: c,
                              children: [
                                  g.intl.string(g.t['0GWElZ']),
                                  (0, i.jsx)(a.ArrowSmallRightIcon, {
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
function f(e) {
    let t = (0, l.e7)([s.Z], () => s.Z.getDefaultChannelIds(e)),
        n = r.useMemo(() => new Set(t), [t]),
        [i, a] = (0, o.VF)(e, n);
    return a.length >= h.md && i.length >= h.X;
}
function C(e) {
    let t = f(e),
        n = (0, m.O4)(e);
    return t || n;
}
function v(e) {
    var t, n, c, d;
    let { guildId: u, onEdit: C, disableGoodStatus: v } = e,
        _ = (0, l.Wu)([s.Z], () => s.Z.getDefaultChannelIds(u)),
        N = (0, l.e7)([s.Z], () => (0, o.kl)(u, s.Z.getDefaultChannelIds(u), s.Z.getOnboardingPrompts(u)).length),
        I = r.useMemo(() => new Set(_), [_]),
        [, T] = (0, o.VF)(u, I),
        j = T.length,
        b = f(u),
        S = (0, m.O4)(u),
        E = (0, l.e7)([s.Z], () => s.Z.isAdvancedMode(u));
    let R =
        ((t = b),
        (n = E),
        (c = j),
        (d = N),
        n
            ? g.intl.formatToPlainString(g.t.nHwnLC, {
                  numDefaultChannels: c,
                  numFromQuestions: d - c
              })
            : t
              ? g.intl.formatToPlainString(g.t.HxEwSk, { numDefaultChannels: c })
              : g.intl.formatToPlainString(g.t.ey3uVV, {
                    numDefaultChannels: h.md,
                    numChattableChannels: h.X
                }));
    return (0, i.jsx)(p, {
        title: E ? g.intl.string(g.t.YZookZ) : g.intl.string(g.t['4GSygo']),
        description: R,
        icon: (0, i.jsx)(a.TextIcon, {
            size: 'md',
            color: 'currentColor',
            className: x.channelIcon
        }),
        hasStarted: j > 0 || E,
        status: b || S ? (v ? 'none' : 'good') : 'required',
        onEdit: C
    });
}
function _(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: r } = e,
        c = (0, l.Wu)([s.Z], () => s.Z.getDefaultChannelIds(t)),
        d = (0, l.Wu)([s.Z], () => s.Z.getOnboardingPrompts(t)),
        u = d.length,
        [m, h] = (0, o.dF)(t, d, c),
        f = m.length,
        C = m.length + h.length,
        v = (f / C) * 100,
        _ = (0, l.e7)([s.Z], () => s.Z.isAdvancedMode(t)),
        N = u > 0,
        I = 'none';
    return (
        N && (v >= 85 && !r ? (I = 'good') : v < 85 && (I = 'warning')),
        (0, i.jsx)(p, {
            title: _ ? g.intl.string(g.t.AGjtFh) : g.intl.string(g.t.dqCzoa),
            description: g.intl.format(g.t.iuNisr, {
                numChannels: f,
                numTotalChannels: C,
                channelsHook: (e, t) =>
                    (0, i.jsx)(
                        'span',
                        {
                            style: { color: v > 85 ? 'var(--header-primary)' : 'var(--status-warning)' },
                            children: e
                        },
                        t
                    )
            }),
            icon: (0, i.jsx)(a.FriendsIcon, {
                size: 'md',
                color: 'currentColor',
                className: x.channelIcon
            }),
            hasStarted: N,
            status: I,
            onEdit: n
        })
    );
}
function N(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: o } = e,
        m = (0, l.e7)([u.Z], () => u.Z.getSettings()),
        h = (0, l.e7)([s.Z], () => s.Z.getEnabled(t)),
        f = (0, c.uo)(m),
        C = m.enabled,
        v = r.useCallback(() => {
            (0, d.To)(t, !C);
        }, [t, C]),
        _ = !(0, c.av)(m),
        N = 'none';
    _ && (f && !o ? (N = 'good') : !f && (N = 'required'));
    let I = g.intl.string(g.t.GMOwOD);
    f ? !_ && (I = g.intl.string(g.t.wHOoyM)) : (I = g.intl.string(g.t.wXFbgY));
    let T = null;
    return (
        _ &&
            h &&
            (T = (0, i.jsx)(a.Switch, {
                className: x.inlineSwitch,
                checked: C,
                onChange: v,
                disabled: !f
            })),
        (0, i.jsx)(p, {
            title: g.intl.string(g.t.mRHqsr),
            description: I,
            icon: (0, i.jsx)(a.SignPostIcon, {
                size: 'md',
                color: 'currentColor',
                className: x.channelIcon
            }),
            hasStarted: _,
            status: N,
            onEdit: n,
            extra: T
        })
    );
}
