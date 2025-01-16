n.d(t, {
    $$: function () {
        return C;
    },
    P_: function () {
        return N;
    },
    ap: function () {
        return I;
    },
    ku: function () {
        return v;
    }
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
    x = n(15832);
function p(e) {
    let t,
        { title: n, description: r, icon: l, hasStarted: a, status: o, onEdit: c, extra: d } = e;
    switch (o) {
        case 'good':
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.CheckmarkLargeIcon, {
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
                    (0, i.jsx)(s.CircleWarningIcon, {
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
                    (0, i.jsx)(s.CircleWarningIcon, {
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
                            (0, i.jsx)(s.Heading, {
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
                        ? (0, i.jsx)(s.Button, {
                              className: x.cta,
                              size: s.Button.Sizes.SMALL,
                              color: s.Button.Colors.PRIMARY,
                              look: s.Button.Looks.OUTLINED,
                              onClick: c,
                              children: g.intl.string(g.t.bt75u7)
                          })
                        : (0, i.jsxs)(s.Button, {
                              className: x.cta,
                              innerClassName: x.ctaInner,
                              size: s.Button.Sizes.SMALL,
                              color: s.Button.Colors.PRIMARY,
                              onClick: c,
                              children: [
                                  g.intl.string(g.t['0GWElZ']),
                                  (0, i.jsx)(s.ArrowSmallRightIcon, {
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
    let t = (0, l.e7)([a.Z], () => a.Z.getDefaultChannelIds(e)),
        n = r.useMemo(() => new Set(t), [t]),
        [i, s] = (0, o.VF)(e, n);
    return s.length >= h.md && i.length >= h.X;
}
function C(e) {
    let t = f(e),
        n = (0, m.O4)(e);
    return t || n;
}
function v(e) {
    var t, n, c, d;
    let { guildId: u, onEdit: C, disableGoodStatus: v } = e,
        I = (0, l.Wu)([a.Z], () => a.Z.getDefaultChannelIds(u)),
        N = (0, l.e7)([a.Z], () => (0, o.kl)(u, a.Z.getDefaultChannelIds(u), a.Z.getOnboardingPrompts(u)).length),
        _ = r.useMemo(() => new Set(I), [I]),
        [, T] = (0, o.VF)(u, _),
        j = T.length,
        b = f(u),
        E = (0, m.O4)(u),
        S = (0, l.e7)([a.Z], () => a.Z.isAdvancedMode(u));
    let R =
        ((t = b),
        (n = S),
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
        title: S ? g.intl.string(g.t.YZookZ) : g.intl.string(g.t['4GSygo']),
        description: R,
        icon: (0, i.jsx)(s.TextIcon, {
            size: 'md',
            color: 'currentColor',
            className: x.channelIcon
        }),
        hasStarted: j > 0 || S,
        status: b || E ? (v ? 'none' : 'good') : 'required',
        onEdit: C
    });
}
function I(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: r } = e,
        c = (0, l.Wu)([a.Z], () => a.Z.getDefaultChannelIds(t)),
        d = (0, l.Wu)([a.Z], () => a.Z.getOnboardingPrompts(t)),
        u = d.length,
        [m, h] = (0, o.dF)(t, d, c),
        f = m.length,
        C = m.length + h.length,
        v = (f / C) * 100,
        I = (0, l.e7)([a.Z], () => a.Z.isAdvancedMode(t)),
        N = u > 0,
        _ = 'none';
    return (
        N && (v >= 85 && !r ? (_ = 'good') : v < 85 && (_ = 'warning')),
        (0, i.jsx)(p, {
            title: I ? g.intl.string(g.t.AGjtFh) : g.intl.string(g.t.dqCzoa),
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
            icon: (0, i.jsx)(s.FriendsIcon, {
                size: 'md',
                color: 'currentColor',
                className: x.channelIcon
            }),
            hasStarted: N,
            status: _,
            onEdit: n
        })
    );
}
function N(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: o } = e,
        m = (0, l.e7)([u.Z], () => u.Z.getSettings()),
        h = (0, l.e7)([a.Z], () => a.Z.getEnabled(t)),
        f = (0, c.uo)(m),
        C = m.enabled,
        v = r.useCallback(() => {
            (0, d.To)(t, !C);
        }, [t, C]),
        I = !(0, c.av)(m),
        N = 'none';
    I && (f && !o ? (N = 'good') : !f && (N = 'required'));
    let _ = g.intl.string(g.t.GMOwOD);
    f ? !I && (_ = g.intl.string(g.t.wHOoyM)) : (_ = g.intl.string(g.t.wXFbgY));
    let T = null;
    return (
        I &&
            h &&
            (T = (0, i.jsx)(s.Switch, {
                className: x.inlineSwitch,
                checked: C,
                onChange: v,
                disabled: !f
            })),
        (0, i.jsx)(p, {
            title: g.intl.string(g.t.mRHqsr),
            description: _,
            icon: (0, i.jsx)(s.SignPostIcon, {
                size: 'md',
                color: 'currentColor',
                className: x.channelIcon
            }),
            hasStarted: I,
            status: N,
            onEdit: n,
            extra: T
        })
    );
}
