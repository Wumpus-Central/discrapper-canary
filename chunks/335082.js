n.d(t, { Z: () => j });
var i = n(255367);
n(73800);
var r = n(524437),
    s = n(481060),
    a = n(921801),
    l = n(695346),
    o = n(358085),
    c = n(940276),
    d = n(981631),
    u = n(726985),
    m = n(29953),
    p = n(388032),
    g = n(154947);
function h(e) {
    let { label: t, sublabel: n, id: r, checked: a, onChange: l } = e;
    return (0, i.jsxs)('div', {
        className: g.settingSwitch,
        children: [
            (0, i.jsxs)('label', {
                className: g.settingSwitchLabel,
                htmlFor: r,
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        children: t
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: n
                    })
                ]
            }),
            (0, i.jsx)(s.rsf, {
                id: r,
                checked: a,
                onChange: l
            })
        ]
    });
}
function f() {
    let e = l.G6.useSetting(),
        t = l.no.useSetting(),
        n = (e) => {
            l.no.updateSetting(e);
        },
        a = [
            {
                value: r.GI.ACTIVITY_STATUS_ON,
                name: p.intl.string(p.t.UzGMHx)
            },
            {
                value: r.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                name: p.intl.string(m.default['/sAeRU'])
            },
            {
                value: r.GI.ACTIVITY_STATUS_OFF,
                name: p.intl.string(m.default.m3oL7e)
            }
        ];
    return (0, i.jsx)(s.hjN, {
        className: g.formSection,
        children: (0, i.jsxs)(s.y5t, {
            component: (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(s.X6q, {
                        className: g.formTitle,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        children: p.intl.string(m.default.TG0Qsb)
                    }),
                    (0, i.jsx)(s.R94, {
                        className: g.formDescription,
                        type: s.R94.Types.DESCRIPTION,
                        children: p.intl.string(m.default.OO17Li)
                    })
                ]
            }),
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(s.X6q, {
                            className: g.defaultSetting,
                            variant: 'heading-md/medium',
                            color: 'header-primary',
                            children: p.intl.string(m.default['/LHVbm'])
                        }),
                        (0, i.jsx)(s.FXm, {
                            options: a,
                            value: t,
                            onChange: (e) => n(e.value)
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: g.myServersContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: g.myServersHeaderContainer,
                            children: [
                                (0, i.jsx)(s.X6q, {
                                    className: g.myServersTitle,
                                    variant: 'heading-md/medium',
                                    color: 'header-primary',
                                    children: p.intl.string(p.t.TqdOvL)
                                }),
                                !e &&
                                    (0, i.jsx)(s.Wn, {
                                        className: g.myServersIgnoredWarning,
                                        messageType: s.QYI.WARNING,
                                        textColor: 'text-feedback-warning',
                                        children: p.intl.string(m.default['xxI0/f'])
                                    })
                            ]
                        }),
                        (0, i.jsx)(c.Z, {})
                    ]
                })
            ]
        })
    });
}
function b() {
    let e = l.cP.useSetting(),
        t = l.Ou.useSetting();
    return (0, i.jsx)(a.F, {
        setting: u.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, i.jsxs)(s.hjN, {
            className: g.formSection,
            children: [
                (0, i.jsx)('div', {
                    children: (0, i.jsx)(s.X6q, {
                        className: g.formTitle,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        children: p.intl.string(m.default['5rYBAQ'])
                    })
                }),
                (0, i.jsx)(h, {
                    label: p.intl.string(m.default.khuuzs),
                    sublabel: p.intl.string(m.default['8EWsJy']),
                    id: 'allow-friends-to-join-my-game',
                    checked: e,
                    onChange: (e) => l.cP.updateSetting(e)
                }),
                (0, i.jsx)(h, {
                    label: p.intl.string(m.default.Uz5Ipq),
                    sublabel: p.intl.string(m.default.CZI2GR),
                    id: 'allow-vc-join-without-request',
                    checked: t,
                    onChange: (e) => l.Ou.updateSetting(e)
                })
            ]
        })
    });
}
function x() {
    let e = l.G6.useSetting(),
        t = o.isPlatformEmbedded ? p.intl.string(m.default.UQ9RHB) : p.intl.string(p.t.oKqC4u);
    return (0, i.jsx)(a.F, {
        setting: u.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, i.jsxs)(s.hjN, {
            className: g.formSection,
            children: [
                (0, i.jsx)('div', {
                    children: (0, i.jsx)(s.R94, {
                        className: g.formDescription,
                        type: s.R94.Types.DESCRIPTION,
                        children: p.intl.string(m.default.t2Ysra)
                    })
                }),
                (0, i.jsx)('div', {
                    className: g.switchContainer,
                    children: (0, i.jsx)(h, {
                        label: p.intl.string(m.default.WhdCGB),
                        sublabel: t,
                        id: 'share-my-activity',
                        checked: e,
                        onChange: l.G6.updateSetting
                    })
                })
            ]
        })
    });
}
function _() {
    return (0, i.jsx)(a.F, {
        setting: u.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, i.jsx)(s.hjN, {
            children: (0, i.jsx)(s.ToO, {
                type: s.ToO.Types.PRIMARY,
                body: p.intl.format(p.t.xvCsx8, {
                    termsLink: d.EYA.TERMS,
                    privacyLink: d.EYA.PRIVACY
                })
            })
        })
    });
}
let j = function (e) {
    let { className: t } = e;
    return (0, i.jsx)(s.hjN, {
        className: t,
        children: (0, i.jsxs)(s.y5t, {
            forceLevel: 1,
            component: (0, i.jsx)(s.X6q, {
                className: g.formTitle,
                variant: 'heading-xl/semibold',
                color: 'header-primary',
                children: p.intl.string(p.t.Cq98yM)
            }),
            children: [(0, i.jsx)(x, {}), (0, i.jsx)(s.$i$, { className: g.divider }), (0, i.jsx)(f, {}), (0, i.jsx)(s.$i$, { className: g.divider }), (0, i.jsx)(b, {}), (0, i.jsx)(s.$i$, { className: g.divider }), (0, i.jsx)(_, {})]
        })
    });
};
