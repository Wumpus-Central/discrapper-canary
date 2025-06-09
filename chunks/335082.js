n.d(t, { Z: () => x });
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
function h() {
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
    return (0, i.jsx)(s.y5t, {
        children: (0, i.jsxs)(s.hjN, {
            className: p.formSection,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(s.vwX, {
                            className: p.formTitle,
                            children: g.intl.string(m.default.TG0Qsb)
                        }),
                        (0, i.jsx)(s.R94, {
                            className: p.formDescription,
                            type: s.R94.Types.DESCRIPTION,
                            children: g.intl.string(m.default.OO17Li)
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(s.y5t, {
                            children: (0, i.jsx)(s.vwX, {
                                className: p.defaultSetting,
                                children: g.intl.string(m.default['/LHVbm'])
                            })
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
                                (0, i.jsx)(s.y5t, {
                                    children: (0, i.jsx)(s.vwX, {
                                        className: p.myServersTitle,
                                        children: g.intl.string(g.t.TqdOvL)
                                    })
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
function f() {
    let e = a.cP.useSetting(),
        t = a.Ou.useSetting();
    return (0, i.jsx)(s.y5t, {
        children: (0, i.jsx)(l.F, {
            setting: u.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
            children: (0, i.jsxs)(s.hjN, {
                className: p.formSection,
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(s.vwX, {
                            className: p.formTitle,
                            children: g.intl.string(m.default['5rYBAQ'])
                        })
                    }),
                    (0, i.jsx)(s.j7V, {
                        className: p.joinRequestSwitch,
                        hideBorder: !0,
                        onChange: (e) => a.cP.updateSetting(e),
                        note: g.intl.string(m.default['8EWsJy']),
                        value: e,
                        children: g.intl.string(m.default.khuuzs)
                    }),
                    (0, i.jsx)(s.j7V, {
                        className: p.joinRequestSwitch,
                        hideBorder: !0,
                        onChange: (e) => a.Ou.updateSetting(e),
                        note: g.intl.string(m.default.CZI2GR),
                        value: t,
                        children: g.intl.string(m.default.Uz5Ipq)
                    })
                ]
            })
        })
    });
}
function b() {
    let e = a.G6.useSetting(),
        t = o.isPlatformEmbedded ? g.intl.string(m.default.UQ9RHB) : g.intl.string(g.t.oKqC4u);
    return (0, i.jsx)(l.F, {
        setting: u.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, i.jsx)(s.y5t, {
            children: (0, i.jsxs)(s.hjN, {
                className: p.formSection,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(s.vwX, {
                                className: p.formTitle,
                                children: g.intl.string(g.t['6x5uWV'])
                            }),
                            (0, i.jsx)(s.R94, {
                                className: p.formDescription,
                                type: s.R94.Types.DESCRIPTION,
                                children: g.intl.string(m.default.t2Ysra)
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: p.switchContainer,
                        children: (0, i.jsx)(s.j7V, {
                            className: p.activitySharingSwitch,
                            value: e,
                            onChange: a.G6.updateSetting,
                            note: t,
                            hideBorder: !0,
                            children: g.intl.string(m.default.WhdCGB)
                        })
                    })
                ]
            })
        })
    });
}
function _() {
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
let x = function (e) {
    let { className: t } = e;
    return (0, i.jsx)(s.hjN, {
        className: t,
        children: (0, i.jsxs)(s.y5t, {
            forceLevel: 1,
            children: [(0, i.jsx)(b, {}), (0, i.jsx)(s.$i$, { className: p.divider }), (0, i.jsx)(h, {}), (0, i.jsx)(s.$i$, { className: p.divider }), (0, i.jsx)(f, {}), (0, i.jsx)(s.$i$, { className: p.divider }), (0, i.jsx)(_, {})]
        })
    });
};
