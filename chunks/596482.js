l.d(t, { Z: () => b });
var n = l(200651),
    a = l(192379),
    i = l(722770),
    o = l(481060),
    s = l(100527),
    r = l(666657),
    c = l(533244),
    d = l(664452),
    C = l(226192),
    u = l(223606),
    m = l(388032),
    h = l(831217);
function x(e) {
    var t;
    if (null == (null !== (t = e.dmsDisabledUntil) && void 0 !== t ? t : e.invitesDisabledUntil)) return '';
    let l = null != e.dmsDisabledUntil,
        n = null != e.invitesDisabledUntil;
    switch (!0) {
        case l && n:
            return m.intl.string(m.t.CEygFx);
        case l:
            return m.intl.string(m.t.Wmbjc3);
        case n:
            return m.intl.string(m.t.Q1QrAg);
        default:
            return '';
    }
}
function g(e) {
    var t;
    let { onHandleEnableLockdown: l, onHandleReportFalseAlarm: a, incidentData: s } = e,
        r = null !== (t = s.raidDetectedAt) && void 0 !== t ? t : s.dmSpamDetectedAt;
    return (0, n.jsxs)('div', {
        className: h.subheaderContainer,
        children: [
            (0, n.jsxs)('div', {
                className: h.subHeaderTextContainer,
                children: [
                    (0, n.jsx)(o.b7C, {
                        size: 'md',
                        className: h.shieldIcon,
                        color: i.Z.RED_345
                    }),
                    (0, n.jsxs)('div', {
                        className: h.subHeaderText,
                        children: [
                            (0, n.jsx)(o.X6q, {
                                className: h.heading,
                                variant: 'heading-lg/semibold',
                                color: 'text-danger',
                                children: (0, c.kk)(s) ? m.intl.string(m.t.raRxxc) : m.intl.string(m.t['4nbAtb'])
                            }),
                            (0, n.jsx)(o.Text, {
                                className: h.tagLine,
                                variant: 'text-sm/medium',
                                children: m.intl.format(m.t['4QIIZm'], { dateTime: new Date(null != r ? r : '').toLocaleString(m.intl.currentLocale, c.pQ) })
                            })
                        ]
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: h.buttonContainer,
                children: [
                    (0, n.jsx)(o.zxk, {
                        className: h.reportButton,
                        color: o.zxk.Colors.TRANSPARENT,
                        onClick: a,
                        children: (0, n.jsx)(o.Text, {
                            variant: 'text-sm/semibold',
                            children: m.intl.string(m.t.ISiXbW)
                        })
                    }),
                    (0, n.jsx)(o.gtL, {
                        className: h.__invalid_lockdownButton,
                        color: o.zxk.Colors.RED,
                        onClick: l,
                        children: (0, n.jsxs)('div', {
                            className: h.lockdownButtonInnerRaidDetected,
                            children: [
                                (0, n.jsx)(o.mBM, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: h.lockIcon
                                }),
                                (0, n.jsx)(o.Text, {
                                    className: h.lockdownButtonText,
                                    variant: 'text-sm/semibold',
                                    children: m.intl.string(m.t.UgXhdn)
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function p(e) {
    let { onHandleEnableLockdown: t, incidentData: l, guildName: a } = e;
    return (0, n.jsxs)('div', {
        className: h.subheaderContainer,
        children: [
            (0, n.jsxs)('div', {
                className: h.subHeaderTextContainer,
                children: [
                    (0, n.jsx)(o.b7C, {
                        size: 'md',
                        className: h.shieldIcon,
                        color: i.Z.BRAND_360
                    }),
                    (0, n.jsxs)('div', {
                        className: h.subHeaderText,
                        children: [
                            (0, n.jsx)(o.X6q, {
                                className: h.heading,
                                variant: 'heading-lg/semibold',
                                color: 'text-brand',
                                children: x(l)
                            }),
                            (0, n.jsx)(o.Text, {
                                className: h.tagLine,
                                variant: 'text-sm/medium',
                                children: (0, c.OY)(l, a)
                            })
                        ]
                    })
                ]
            }),
            (0, n.jsx)(o.zxk, {
                className: h.lockdownNoticeButton,
                color: o.zxk.Colors.BRAND,
                onClick: t,
                children: (0, n.jsxs)('div', {
                    className: h.lockdownButtonInner,
                    children: [
                        (0, n.jsx)(o.mBM, {
                            size: 'xs',
                            color: 'currentColor',
                            className: h.lockIcon
                        }),
                        (0, n.jsx)(o.Text, {
                            className: h.lockdownButtonText,
                            variant: 'text-sm/semibold',
                            children: m.intl.string(m.t.e1bMNT)
                        })
                    ]
                })
            })
        ]
    });
}
function _(e) {
    let { onHandleEnableLockdown: t, onHandleReportFalseAlarm: l, incidentData: a, guildName: s } = e;
    return (0, n.jsxs)('div', {
        className: h.subheaderContainer,
        children: [
            (0, n.jsxs)('div', {
                className: h.subHeaderTextContainer,
                children: [
                    (0, n.jsx)(o.b7C, {
                        size: 'md',
                        className: h.shieldIcon,
                        color: i.Z.BRAND_360
                    }),
                    (0, n.jsxs)('div', {
                        className: h.subHeaderText,
                        children: [
                            (0, n.jsx)(o.X6q, {
                                className: h.heading,
                                variant: 'heading-lg/semibold',
                                color: 'text-brand',
                                children: x(a)
                            }),
                            (0, n.jsx)(o.Text, {
                                className: h.tagLine,
                                variant: 'text-sm/medium',
                                children: (0, c.OY)(a, s)
                            })
                        ]
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: h.buttonContainer,
                children: [
                    (0, n.jsx)(o.zxk, {
                        className: h.reportButton,
                        color: o.zxk.Colors.TRANSPARENT,
                        onClick: l,
                        children: (0, n.jsx)(o.Text, {
                            variant: 'text-sm/semibold',
                            children: m.intl.string(m.t.ISiXbW)
                        })
                    }),
                    (0, n.jsx)(o.zxk, {
                        className: h.__invalid_lockdownButton,
                        color: o.zxk.Colors.BRAND,
                        onClick: t,
                        children: (0, n.jsxs)('div', {
                            className: h.lockdownButtonInnerRaidDetected,
                            children: [
                                (0, n.jsx)(o.mBM, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: h.lockIcon
                                }),
                                (0, n.jsx)(o.Text, {
                                    className: h.lockdownButtonText,
                                    variant: 'text-sm/semibold',
                                    children: m.intl.string(m.t.e1bMNT)
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function b(e) {
    let { guild: t, incidentData: l, isUnderLockdown: i, isRaidDetected: m } = e,
        h = a.useCallback(() => {
            (0, o.ZDy)(async () => {
                let e = {
                    source: r.Zu.MEMBER_SAFETY_PAGE,
                    location: s.Z.MEMBER_SAFETY_PAGE,
                    alertType: (0, c.T1)(l)
                };
                return (l) =>
                    (0, n.jsx)(d.default, {
                        ...l,
                        guildId: t.id,
                        analyticsData: e
                    });
            });
        }, [t.id, l]),
        x = a.useCallback(() => {
            let e = u.Z.getLastIncidentAlertMessage(t.id);
            (0, C.kW)(e, t.id);
        }, [t.id]),
        b = (() => {
            switch (!0) {
                case m && i:
                    return 3;
                case m:
                    return 1;
                case i:
                    return 2;
                default:
                    return 0;
            }
        })();
    if (null == t || null == l) return null;
    switch (b) {
        case 1:
            return (0, n.jsx)(g, {
                onHandleEnableLockdown: h,
                onHandleReportFalseAlarm: x,
                incidentData: l
            });
        case 2:
            return (0, n.jsx)(p, {
                onHandleEnableLockdown: h,
                incidentData: l,
                guildName: t.name
            });
        case 3:
            return (0, n.jsx)(_, {
                onHandleEnableLockdown: h,
                onHandleReportFalseAlarm: x,
                incidentData: l,
                guildName: t.name
            });
        default:
            return null;
    }
}
