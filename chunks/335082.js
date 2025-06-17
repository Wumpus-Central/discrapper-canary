n.d(t, { Z: () => E });
var i = n(255367);
n(73800);
var r = n(524437),
    s = n(481060),
    l = n(921801),
    a = n(695346),
    o = n(358085),
    c = n(940276),
    d = n(981631),
    u = n(726985),
    m = n(29953),
    g = n(388032),
    p = n(154947);
function h(e) {
    let { label: t, sublabel: n, id: r, checked: l, onChange: a } = e;
    return (0, i.jsxs)('div', {
        className: p.settingSwitch,
        children: [
            (0, i.jsxs)('label', {
                className: p.settingSwitchLabel,
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
                checked: l,
                onChange: a
            })
        ]
    });
}
function f() {
    let e = a.G6.useSetting(),
        t = a.Wz.useSetting(),
        n = (e) => {
            a.Wz.updateSetting(e);
        },
        l = [
            {
                value: r.E5.ON,
                name: g.intl.string(g.t.UzGMHx)
            },
            {
                value: r.E5.ON_FOR_LARGE_GUILDS,
                name: g.intl.string(m.default['/sAeRU'])
            },
            {
                value: r.E5.OFF,
                name: g.intl.string(m.default.m3oL7e)
            }
        ];
    return (0, i.jsx)(s.hjN, {
        className: p.formSection,
        children: (0, i.jsxs)(s.y5t, {
            component: (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(s.X6q, {
                        className: p.formTitle,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        children: g.intl.string(m.default.TG0Qsb)
                    }),
                    (0, i.jsx)(s.R94, {
                        className: p.formDescription,
                        type: s.R94.Types.DESCRIPTION,
                        children: g.intl.string(m.default.OO17Li)
                    })
                ]
            }),
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(s.X6q, {
                            className: p.defaultSetting,
                            variant: 'heading-md/medium',
                            color: 'header-primary',
                            children: g.intl.string(m.default['/LHVbm'])
                        }),
                        (0, i.jsx)(s.FXm, {
                            options: l,
                            value: t,
                            onChange: (e) => n(e.value)
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: p.myServersContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: p.myServersHeaderContainer,
                            children: [
                                (0, i.jsx)(s.X6q, {
                                    className: p.myServersTitle,
                                    variant: 'heading-md/medium',
                                    color: 'header-primary',
                                    children: g.intl.string(g.t.TqdOvL)
                                }),
                                !e &&
                                    (0, i.jsx)(s.Wn, {
                                        className: p.myServersIgnoredWarning,
                                        messageType: s.QYI.WARNING,
                                        textColor: 'text-warning',
                                        children: g.intl.string(m.default['xxI0/f'])
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
    let e = a.cP.useSetting(),
        t = a.Ou.useSetting();
    return (0, i.jsx)(l.F, {
        setting: u.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, i.jsxs)(s.hjN, {
            className: p.formSection,
            children: [
                (0, i.jsx)('div', {
                    children: (0, i.jsx)(s.X6q, {
                        className: p.formTitle,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        children: g.intl.string(m.default['5rYBAQ'])
                    })
                }),
                (0, i.jsx)(h, {
                    label: g.intl.string(m.default.khuuzs),
                    sublabel: g.intl.string(m.default['8EWsJy']),
                    id: 'allow-friends-to-join-my-game',
                    checked: e,
                    onChange: (e) => a.cP.updateSetting(e)
                }),
                (0, i.jsx)(h, {
                    label: g.intl.string(m.default.Uz5Ipq),
                    sublabel: g.intl.string(m.default.CZI2GR),
                    id: 'allow-vc-join-without-request',
                    checked: t,
                    onChange: (e) => a.Ou.updateSetting(e)
                })
            ]
        })
    });
}
function _() {
    let e = a.G6.useSetting(),
        t = o.isPlatformEmbedded ? g.intl.string(m.default.UQ9RHB) : g.intl.string(g.t.oKqC4u);
    return (0, i.jsx)(l.F, {
        setting: u.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, i.jsxs)(s.hjN, {
            className: p.formSection,
            children: [
                (0, i.jsx)('div', {
                    children: (0, i.jsx)(s.R94, {
                        className: p.formDescription,
                        type: s.R94.Types.DESCRIPTION,
                        children: g.intl.string(m.default.t2Ysra)
                    })
                }),
                (0, i.jsx)('div', {
                    className: p.switchContainer,
                    children: (0, i.jsx)(h, {
                        label: g.intl.string(m.default.WhdCGB),
                        sublabel: t,
                        id: 'share-my-activity',
                        checked: e,
                        onChange: a.G6.updateSetting
                    })
                })
            ]
        })
    });
}
function x() {
    return (0, i.jsx)(l.F, {
        setting: u.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, i.jsx)(s.hjN, {
            children: (0, i.jsx)(s.ToO, {
                type: s.ToO.Types.PRIMARY,
                body: g.intl.format(g.t.xvCsx8, {
                    termsLink: d.EYA.TERMS,
                    privacyLink: d.EYA.PRIVACY
                })
            })
        })
    });
}
let E = function (e) {
    let { className: t } = e;
    return (0, i.jsx)(s.hjN, {
        className: t,
        children: (0, i.jsxs)(s.y5t, {
            forceLevel: 1,
            component: (0, i.jsx)(s.X6q, {
                className: p.formTitle,
                variant: 'heading-xl/semibold',
                color: 'header-primary',
                children: g.intl.string(g.t.Cq98yM)
            }),
            children: [(0, i.jsx)(_, {}), (0, i.jsx)(s.$i$, { className: p.divider }), (0, i.jsx)(f, {}), (0, i.jsx)(s.$i$, { className: p.divider }), (0, i.jsx)(b, {}), (0, i.jsx)(s.$i$, { className: p.divider }), (0, i.jsx)(x, {})]
        })
    });
};
