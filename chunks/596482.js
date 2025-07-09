n.d(t, { Z: () => x });
var r = n(255367),
    l = n(73800),
    o = n(722770),
    i = n(755721),
    a = n(481060),
    s = n(100527),
    c = n(666657),
    u = n(533244),
    d = n(664452),
    C = n(226192),
    m = n(223606),
    b = n(388032),
    p = n(708210);
function f(e) {
    var t;
    if (null == (null != (t = e.dmsDisabledUntil) ? t : e.invitesDisabledUntil)) return '';
    let n = null != e.dmsDisabledUntil,
        r = null != e.invitesDisabledUntil;
    switch (!0) {
        case n && r:
            return b.intl.string(b.t.CEygFx);
        case n:
            return b.intl.string(b.t.Wmbjc3);
        case r:
            return b.intl.string(b.t.Q1QrAg);
        default:
            return '';
    }
}
function h(e) {
    var t;
    let { onHandleEnableLockdown: n, onHandleReportFalseAlarm: l, incidentData: s } = e,
        c = null != (t = s.raidDetectedAt) ? t : s.dmSpamDetectedAt;
    return (0, r.jsxs)('div', {
        className: p.subheaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: p.subHeaderTextContainer,
                children: [
                    (0, r.jsx)(a.b7C, {
                        size: 'md',
                        className: p.shieldIcon,
                        color: o.Z.RED_345
                    }),
                    (0, r.jsxs)('div', {
                        className: p.subHeaderText,
                        children: [
                            (0, r.jsx)(a.X6q, {
                                className: p.heading,
                                variant: 'heading-lg/semibold',
                                color: 'text-danger',
                                children: (0, u.kk)(s) ? b.intl.string(b.t.raRxxc) : b.intl.string(b.t['4nbAtb'])
                            }),
                            (0, r.jsx)(a.Text, {
                                className: p.tagLine,
                                variant: 'text-sm/medium',
                                children: b.intl.format(b.t['4QIIZm'], { dateTime: new Date(null != c ? c : '').toLocaleString(b.intl.currentLocale, u.pQ) })
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: p.buttonContainer,
                children: [
                    (0, r.jsx)(i.zx, {
                        className: p.reportButton,
                        color: i.zx.Colors.TRANSPARENT,
                        onClick: l,
                        children: (0, r.jsx)(a.Text, {
                            variant: 'text-sm/semibold',
                            children: b.intl.string(b.t.ISiXbW)
                        })
                    }),
                    (0, r.jsx)(a.gtL, {
                        className: p.__invalid_lockdownButton,
                        color: i.zx.Colors.RED,
                        onClick: n,
                        children: (0, r.jsxs)('div', {
                            className: p.lockdownButtonInnerRaidDetected,
                            children: [
                                (0, r.jsx)(a.mBM, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: p.lockIcon
                                }),
                                (0, r.jsx)(a.Text, {
                                    className: p.lockdownButtonText,
                                    variant: 'text-sm/semibold',
                                    children: b.intl.string(b.t.UgXhdn)
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
    let { onHandleEnableLockdown: t, incidentData: n, guildName: l } = e;
    return (0, r.jsxs)('div', {
        className: p.subheaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: p.subHeaderTextContainer,
                children: [
                    (0, r.jsx)(a.b7C, {
                        size: 'md',
                        className: p.shieldIcon,
                        color: o.Z.BRAND_360
                    }),
                    (0, r.jsxs)('div', {
                        className: p.subHeaderText,
                        children: [
                            (0, r.jsx)(a.X6q, {
                                className: p.heading,
                                variant: 'heading-lg/semibold',
                                color: 'text-brand',
                                children: f(n)
                            }),
                            (0, r.jsx)(a.Text, {
                                className: p.tagLine,
                                variant: 'text-sm/medium',
                                children: (0, u.OY)(n, l)
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(i.zx, {
                className: p.lockdownNoticeButton,
                color: i.zx.Colors.BRAND,
                onClick: t,
                children: (0, r.jsxs)('div', {
                    className: p.lockdownButtonInner,
                    children: [
                        (0, r.jsx)(a.mBM, {
                            size: 'xs',
                            color: 'currentColor',
                            className: p.lockIcon
                        }),
                        (0, r.jsx)(a.Text, {
                            className: p.lockdownButtonText,
                            variant: 'text-sm/semibold',
                            children: b.intl.string(b.t.e1bMNT)
                        })
                    ]
                })
            })
        ]
    });
}
function g(e) {
    let { onHandleEnableLockdown: t, onHandleReportFalseAlarm: n, incidentData: l, guildName: s } = e;
    return (0, r.jsxs)('div', {
        className: p.subheaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: p.subHeaderTextContainer,
                children: [
                    (0, r.jsx)(a.b7C, {
                        size: 'md',
                        className: p.shieldIcon,
                        color: o.Z.BRAND_360
                    }),
                    (0, r.jsxs)('div', {
                        className: p.subHeaderText,
                        children: [
                            (0, r.jsx)(a.X6q, {
                                className: p.heading,
                                variant: 'heading-lg/semibold',
                                color: 'text-brand',
                                children: f(l)
                            }),
                            (0, r.jsx)(a.Text, {
                                className: p.tagLine,
                                variant: 'text-sm/medium',
                                children: (0, u.OY)(l, s)
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: p.buttonContainer,
                children: [
                    (0, r.jsx)(i.zx, {
                        className: p.reportButton,
                        color: i.zx.Colors.TRANSPARENT,
                        onClick: n,
                        children: (0, r.jsx)(a.Text, {
                            variant: 'text-sm/semibold',
                            children: b.intl.string(b.t.ISiXbW)
                        })
                    }),
                    (0, r.jsx)(i.zx, {
                        className: p.__invalid_lockdownButton,
                        color: i.zx.Colors.BRAND,
                        onClick: t,
                        children: (0, r.jsxs)('div', {
                            className: p.lockdownButtonInnerRaidDetected,
                            children: [
                                (0, r.jsx)(a.mBM, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: p.lockIcon
                                }),
                                (0, r.jsx)(a.Text, {
                                    className: p.lockdownButtonText,
                                    variant: 'text-sm/semibold',
                                    children: b.intl.string(b.t.e1bMNT)
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function x(e) {
    let { guild: t, incidentData: n, isUnderLockdown: o, isRaidDetected: i } = e,
        b = l.useCallback(() => {
            (0, a.ZDy)(async () => {
                let e = {
                    source: c.Zu.MEMBER_SAFETY_PAGE,
                    location: s.Z.MEMBER_SAFETY_PAGE,
                    alertType: (0, u.T1)(n)
                };
                return (n) => {
                    var l, o;
                    return (0, r.jsx)(
                        d.default,
                        ((l = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        ((r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r));
                                    }));
                            }
                            return e;
                        })({}, n)),
                        (o = o =
                            {
                                guildId: t.id,
                                analyticsData: e
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(o)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                              }),
                        l)
                    );
                };
            });
        }, [t.id, n]),
        p = l.useCallback(() => {
            let e = m.Z.getLastIncidentAlertMessage(t.id);
            (0, C.kW)(e, t.id);
        }, [t.id]),
        f = (() => {
            switch (!0) {
                case i && o:
                    return 3;
                case i:
                    return 1;
                case o:
                    return 2;
                default:
                    return 0;
            }
        })();
    if (null == t || null == n) return null;
    switch (f) {
        case 1:
            return (0, r.jsx)(h, {
                onHandleEnableLockdown: b,
                onHandleReportFalseAlarm: p,
                incidentData: n
            });
        case 2:
            return (0, r.jsx)(j, {
                onHandleEnableLockdown: b,
                incidentData: n,
                guildName: t.name
            });
        case 3:
            return (0, r.jsx)(g, {
                onHandleEnableLockdown: b,
                onHandleReportFalseAlarm: p,
                incidentData: n,
                guildName: t.name
            });
        default:
            return null;
    }
}
