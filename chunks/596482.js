n.d(t, {
    Z: function () {
        return j;
    }
});
var l,
    o,
    i = n(200651),
    a = n(192379),
    r = n(722770),
    s = n(481060),
    c = n(100527),
    C = n(666657),
    d = n(533244),
    u = n(664452),
    m = n(226192),
    h = n(223606),
    x = n(388032),
    b = n(210054);
function f(e) {
    var t;
    if (null == (null !== (t = e.dmsDisabledUntil) && void 0 !== t ? t : e.invitesDisabledUntil)) return '';
    let n = null != e.dmsDisabledUntil,
        l = null != e.invitesDisabledUntil;
    switch (!0) {
        case n && l:
            return x.intl.string(x.t.CEygFx);
        case n:
            return x.intl.string(x.t.Wmbjc3);
        case l:
            return x.intl.string(x.t.Q1QrAg);
        default:
            return '';
    }
}
function g(e) {
    var t;
    let { onHandleEnableLockdown: n, onHandleReportFalseAlarm: l, incidentData: o } = e,
        a = null !== (t = o.raidDetectedAt) && void 0 !== t ? t : o.dmSpamDetectedAt;
    return (0, i.jsxs)('div', {
        className: b.subheaderContainer,
        children: [
            (0, i.jsxs)('div', {
                className: b.subHeaderTextContainer,
                children: [
                    (0, i.jsx)(s.ShieldIcon, {
                        size: 'md',
                        className: b.shieldIcon,
                        color: r.Z.RED_345
                    }),
                    (0, i.jsxs)('div', {
                        className: b.subHeaderText,
                        children: [
                            (0, i.jsx)(s.Heading, {
                                className: b.heading,
                                variant: 'heading-lg/semibold',
                                color: 'text-danger',
                                children: (0, d.kk)(o) ? x.intl.string(x.t.raRxxc) : x.intl.string(x.t['4nbAtb'])
                            }),
                            (0, i.jsx)(s.Text, {
                                className: b.tagLine,
                                variant: 'text-sm/medium',
                                children: x.intl.format(x.t['4QIIZm'], { dateTime: new Date(null != a ? a : '').toLocaleString(x.intl.currentLocale, d.pQ) })
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: b.buttonContainer,
                children: [
                    (0, i.jsx)(s.Button, {
                        className: b.reportButton,
                        color: s.Button.Colors.TRANSPARENT,
                        onClick: l,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-sm/semibold',
                            children: x.intl.string(x.t.ISiXbW)
                        })
                    }),
                    (0, i.jsx)(s.ShinyButton, {
                        className: b.__invalid_lockdownButton,
                        color: s.Button.Colors.RED,
                        onClick: n,
                        children: (0, i.jsxs)('div', {
                            className: b.lockdownButtonInnerRaidDetected,
                            children: [
                                (0, i.jsx)(s.LockIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: b.lockIcon
                                }),
                                (0, i.jsx)(s.Text, {
                                    className: b.lockdownButtonText,
                                    variant: 'text-sm/semibold',
                                    children: x.intl.string(x.t.UgXhdn)
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
    let { onHandleEnableLockdown: t, incidentData: n, guildName: l } = e;
    return (0, i.jsxs)('div', {
        className: b.subheaderContainer,
        children: [
            (0, i.jsxs)('div', {
                className: b.subHeaderTextContainer,
                children: [
                    (0, i.jsx)(s.ShieldIcon, {
                        size: 'md',
                        className: b.shieldIcon,
                        color: r.Z.BRAND_360
                    }),
                    (0, i.jsxs)('div', {
                        className: b.subHeaderText,
                        children: [
                            (0, i.jsx)(s.Heading, {
                                className: b.heading,
                                variant: 'heading-lg/semibold',
                                color: 'text-brand',
                                children: f(n)
                            }),
                            (0, i.jsx)(s.Text, {
                                className: b.tagLine,
                                variant: 'text-sm/medium',
                                children: (0, d.OY)(n, l)
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(s.Button, {
                className: b.lockdownNoticeButton,
                color: s.Button.Colors.BRAND,
                onClick: t,
                children: (0, i.jsxs)('div', {
                    className: b.lockdownButtonInner,
                    children: [
                        (0, i.jsx)(s.LockIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: b.lockIcon
                        }),
                        (0, i.jsx)(s.Text, {
                            className: b.lockdownButtonText,
                            variant: 'text-sm/semibold',
                            children: x.intl.string(x.t.e1bMNT)
                        })
                    ]
                })
            })
        ]
    });
}
function H(e) {
    let { onHandleEnableLockdown: t, onHandleReportFalseAlarm: n, incidentData: l, guildName: o } = e;
    return (0, i.jsxs)('div', {
        className: b.subheaderContainer,
        children: [
            (0, i.jsxs)('div', {
                className: b.subHeaderTextContainer,
                children: [
                    (0, i.jsx)(s.ShieldIcon, {
                        size: 'md',
                        className: b.shieldIcon,
                        color: r.Z.BRAND_360
                    }),
                    (0, i.jsxs)('div', {
                        className: b.subHeaderText,
                        children: [
                            (0, i.jsx)(s.Heading, {
                                className: b.heading,
                                variant: 'heading-lg/semibold',
                                color: 'text-brand',
                                children: f(l)
                            }),
                            (0, i.jsx)(s.Text, {
                                className: b.tagLine,
                                variant: 'text-sm/medium',
                                children: (0, d.OY)(l, o)
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: b.buttonContainer,
                children: [
                    (0, i.jsx)(s.Button, {
                        className: b.reportButton,
                        color: s.Button.Colors.TRANSPARENT,
                        onClick: n,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-sm/semibold',
                            children: x.intl.string(x.t.ISiXbW)
                        })
                    }),
                    (0, i.jsx)(s.Button, {
                        className: b.__invalid_lockdownButton,
                        color: s.Button.Colors.BRAND,
                        onClick: t,
                        children: (0, i.jsxs)('div', {
                            className: b.lockdownButtonInnerRaidDetected,
                            children: [
                                (0, i.jsx)(s.LockIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: b.lockIcon
                                }),
                                (0, i.jsx)(s.Text, {
                                    className: b.lockdownButtonText,
                                    variant: 'text-sm/semibold',
                                    children: x.intl.string(x.t.e1bMNT)
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function j(e) {
    let { guild: t, incidentData: n, isUnderLockdown: l, isRaidDetected: o } = e,
        r = a.useCallback(() => {
            (0, s.openModalLazy)(async () => {
                let e = {
                    source: C.Zu.MEMBER_SAFETY_PAGE,
                    location: c.Z.MEMBER_SAFETY_PAGE,
                    alertType: (0, d.T1)(n)
                };
                return (n) =>
                    (0, i.jsx)(u.default, {
                        ...n,
                        guildId: t.id,
                        analyticsData: e
                    });
            });
        }, [t.id, n]),
        x = a.useCallback(() => {
            let e = h.Z.getLastIncidentAlertMessage(t.id);
            (0, m.kW)(e, t.id);
        }, [t.id]),
        b = (() => {
            switch (!0) {
                case o && l:
                    return 3;
                case o:
                    return 1;
                case l:
                    return 2;
                default:
                    return 0;
            }
        })();
    if (null == t || null == n) return null;
    switch (b) {
        case 1:
            return (0, i.jsx)(g, {
                onHandleEnableLockdown: r,
                onHandleReportFalseAlarm: x,
                incidentData: n
            });
        case 2:
            return (0, i.jsx)(p, {
                onHandleEnableLockdown: r,
                incidentData: n,
                guildName: t.name
            });
        case 3:
            return (0, i.jsx)(H, {
                onHandleEnableLockdown: r,
                onHandleReportFalseAlarm: x,
                incidentData: n,
                guildName: t.name
            });
        default:
            return null;
    }
}
((l = o || (o = {}))[(l.DEFAULT = 0)] = 'DEFAULT'), (l[(l.RAID_DETECTED = 1)] = 'RAID_DETECTED'), (l[(l.LOCKDOWN_ENABLED = 2)] = 'LOCKDOWN_ENABLED'), (l[(l.RAID_DETECTED_LOCKDOWN_ENABLED = 3)] = 'RAID_DETECTED_LOCKDOWN_ENABLED');
