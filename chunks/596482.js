n.d(t, { Z: () => g });
var r = n(200651),
    l = n(192379),
    o = n(722770),
    a = n(481060),
    i = n(100527),
    s = n(666657),
    c = n(533244),
    u = n(664452),
    d = n(226192),
    C = n(223606),
    m = n(388032),
    b = n(708210);
function p(e) {
    var t;
    if (null == (null != (t = e.dmsDisabledUntil) ? t : e.invitesDisabledUntil)) return '';
    let n = null != e.dmsDisabledUntil,
        r = null != e.invitesDisabledUntil;
    switch (!0) {
        case n && r:
            return m.NW.string(m.t.CEygFx);
        case n:
            return m.NW.string(m.t.Wmbjc3);
        case r:
            return m.NW.string(m.t.Q1QrAg);
        default:
            return '';
    }
}
function f(e) {
    var t;
    let { onHandleEnableLockdown: n, onHandleReportFalseAlarm: l, incidentData: i } = e,
        s = null != (t = i.raidDetectedAt) ? t : i.dmSpamDetectedAt;
    return (0, r.jsxs)('div', {
        className: b.subheaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: b.subHeaderTextContainer,
                children: [
                    (0, r.jsx)(a.b7C, {
                        size: 'md',
                        className: b.shieldIcon,
                        color: o.Z.RED_345
                    }),
                    (0, r.jsxs)('div', {
                        className: b.subHeaderText,
                        children: [
                            (0, r.jsx)(a.X6q, {
                                className: b.heading,
                                variant: 'heading-lg/semibold',
                                color: 'text-danger',
                                children: (0, c.kk)(i) ? m.NW.string(m.t.raRxxc) : m.NW.string(m.t['4nbAtb'])
                            }),
                            (0, r.jsx)(a.Text, {
                                className: b.tagLine,
                                variant: 'text-sm/medium',
                                children: m.NW.format(m.t['4QIIZm'], { dateTime: new Date(null != s ? s : '').toLocaleString(m.NW.currentLocale, c.pQ) })
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: b.buttonContainer,
                children: [
                    (0, r.jsx)(a.zxk, {
                        className: b.reportButton,
                        color: a.zxk.Colors.TRANSPARENT,
                        onClick: l,
                        children: (0, r.jsx)(a.Text, {
                            variant: 'text-sm/semibold',
                            children: m.NW.string(m.t.ISiXbW)
                        })
                    }),
                    (0, r.jsx)(a.gtL, {
                        className: b.__invalid_lockdownButton,
                        color: a.zxk.Colors.RED,
                        onClick: n,
                        children: (0, r.jsxs)('div', {
                            className: b.lockdownButtonInnerRaidDetected,
                            children: [
                                (0, r.jsx)(a.mBM, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: b.lockIcon
                                }),
                                (0, r.jsx)(a.Text, {
                                    className: b.lockdownButtonText,
                                    variant: 'text-sm/semibold',
                                    children: m.NW.string(m.t.UgXhdn)
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function h(e) {
    let { onHandleEnableLockdown: t, incidentData: n, guildName: l } = e;
    return (0, r.jsxs)('div', {
        className: b.subheaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: b.subHeaderTextContainer,
                children: [
                    (0, r.jsx)(a.b7C, {
                        size: 'md',
                        className: b.shieldIcon,
                        color: o.Z.BRAND_360
                    }),
                    (0, r.jsxs)('div', {
                        className: b.subHeaderText,
                        children: [
                            (0, r.jsx)(a.X6q, {
                                className: b.heading,
                                variant: 'heading-lg/semibold',
                                color: 'text-brand',
                                children: p(n)
                            }),
                            (0, r.jsx)(a.Text, {
                                className: b.tagLine,
                                variant: 'text-sm/medium',
                                children: (0, c.OY)(n, l)
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(a.zxk, {
                className: b.lockdownNoticeButton,
                color: a.zxk.Colors.BRAND,
                onClick: t,
                children: (0, r.jsxs)('div', {
                    className: b.lockdownButtonInner,
                    children: [
                        (0, r.jsx)(a.mBM, {
                            size: 'xs',
                            color: 'currentColor',
                            className: b.lockIcon
                        }),
                        (0, r.jsx)(a.Text, {
                            className: b.lockdownButtonText,
                            variant: 'text-sm/semibold',
                            children: m.NW.string(m.t.e1bMNT)
                        })
                    ]
                })
            })
        ]
    });
}
function j(e) {
    let { onHandleEnableLockdown: t, onHandleReportFalseAlarm: n, incidentData: l, guildName: i } = e;
    return (0, r.jsxs)('div', {
        className: b.subheaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: b.subHeaderTextContainer,
                children: [
                    (0, r.jsx)(a.b7C, {
                        size: 'md',
                        className: b.shieldIcon,
                        color: o.Z.BRAND_360
                    }),
                    (0, r.jsxs)('div', {
                        className: b.subHeaderText,
                        children: [
                            (0, r.jsx)(a.X6q, {
                                className: b.heading,
                                variant: 'heading-lg/semibold',
                                color: 'text-brand',
                                children: p(l)
                            }),
                            (0, r.jsx)(a.Text, {
                                className: b.tagLine,
                                variant: 'text-sm/medium',
                                children: (0, c.OY)(l, i)
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: b.buttonContainer,
                children: [
                    (0, r.jsx)(a.zxk, {
                        className: b.reportButton,
                        color: a.zxk.Colors.TRANSPARENT,
                        onClick: n,
                        children: (0, r.jsx)(a.Text, {
                            variant: 'text-sm/semibold',
                            children: m.NW.string(m.t.ISiXbW)
                        })
                    }),
                    (0, r.jsx)(a.zxk, {
                        className: b.__invalid_lockdownButton,
                        color: a.zxk.Colors.BRAND,
                        onClick: t,
                        children: (0, r.jsxs)('div', {
                            className: b.lockdownButtonInnerRaidDetected,
                            children: [
                                (0, r.jsx)(a.mBM, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: b.lockIcon
                                }),
                                (0, r.jsx)(a.Text, {
                                    className: b.lockdownButtonText,
                                    variant: 'text-sm/semibold',
                                    children: m.NW.string(m.t.e1bMNT)
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function g(e) {
    let { guild: t, incidentData: n, isUnderLockdown: o, isRaidDetected: m } = e,
        b = l.useCallback(() => {
            (0, a.ZDy)(async () => {
                let e = {
                    source: s.Zu.MEMBER_SAFETY_PAGE,
                    location: i.Z.MEMBER_SAFETY_PAGE,
                    alertType: (0, c.T1)(n)
                };
                return (n) => {
                    var l, o;
                    return (0, r.jsx)(
                        u.default,
                        ((l = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
                                    });
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
            let e = C.Z.getLastIncidentAlertMessage(t.id);
            (0, d.kW)(e, t.id);
        }, [t.id]),
        g = (() => {
            switch (!0) {
                case m && o:
                    return 3;
                case m:
                    return 1;
                case o:
                    return 2;
                default:
                    return 0;
            }
        })();
    if (null == t || null == n) return null;
    switch (g) {
        case 1:
            return (0, r.jsx)(f, {
                onHandleEnableLockdown: b,
                onHandleReportFalseAlarm: p,
                incidentData: n
            });
        case 2:
            return (0, r.jsx)(h, {
                onHandleEnableLockdown: b,
                incidentData: n,
                guildName: t.name
            });
        case 3:
            return (0, r.jsx)(j, {
                onHandleEnableLockdown: b,
                onHandleReportFalseAlarm: p,
                incidentData: n,
                guildName: t.name
            });
        default:
            return null;
    }
}
