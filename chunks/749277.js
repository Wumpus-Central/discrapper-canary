n.d(t, { A: () => b });
var i = n(255367);
n(73800);
var r = n(442837),
    l = n(704215),
    o = n(481060),
    s = n(232567),
    a = n(230711),
    c = n(726542),
    d = n(100527),
    u = n(231757),
    h = n(674525),
    _ = n(963249),
    E = n(303172),
    p = n(246965),
    I = n(703656),
    g = n(914010),
    f = n(594174),
    C = n(395361),
    O = n(626135),
    S = n(243778),
    T = n(921944),
    m = n(981631),
    N = n(801461),
    R = n(474936),
    A = n(388032),
    y = n(131715);
let b = (e) => {
    let { dismissibleContent: t, noticeType: b } = e,
        P = (0, r.e7)([f.default], () => f.default.getCurrentUser()),
        D = (0, r.e7)([g.Z], () => g.Z.getGuildId());
    return (0, i.jsx)(S.ZP, {
        contentTypes: [t],
        groupName: T.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: r } = e;
            switch (t) {
                case l.z.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, i.jsx)(o.RyX, {
                                onClick: () => r(T.L.UNKNOWN),
                                noticeType: b
                            }),
                            A.intl.string(A.t['+xn1o6']),
                            (0, i.jsx)('i', { className: y.iconApple }),
                            (0, i.jsx)('i', { className: y.iconAndroid }),
                            (0, i.jsx)('i', { className: y.iconWindows }),
                            (0, i.jsx)(o.NoS, {
                                noticeType: b,
                                onClick: () => {
                                    (0, o.ZDy)(async () => {
                                        let { default: e } = await n.e('74023').then(n.bind(n, 431583));
                                        return (t) =>
                                            (0, i.jsx)(
                                                e,
                                                (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            i = Object.keys(n);
                                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                                            (i = i.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                })
                                                            )),
                                                            i.forEach(function (t) {
                                                                var i;
                                                                ((i = n[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: i,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0
                                                                          })
                                                                        : (e[t] = i));
                                                            }));
                                                    }
                                                    return e;
                                                })({ source: 'Top Bar Nag' }, t)
                                            );
                                    });
                                },
                                children: A.intl.string(A.t['1WjMbG'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.SPOTIFY,
                        children: [
                            (0, i.jsx)(o.RyX, {
                                onClick: () => r(T.L.UNKNOWN),
                                noticeType: b
                            }),
                            (0, i.jsx)(C.Z, { className: y.platformIcon }),
                            A.intl.string(A.t['5NUVHB']),
                            (0, i.jsx)(o.NoS, {
                                onClick: () =>
                                    (0, u.Z)({
                                        platformType: m.ABu.SPOTIFY,
                                        location: 'Notice Bar'
                                    }),
                                noticeType: b,
                                children: A.intl.string(A.t.S0W8Z2)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.PLAYSTATION,
                        children: [
                            (0, i.jsx)(o.RyX, { onClick: () => r(T.L.UNKNOWN) }),
                            (0, i.jsx)('img', {
                                alt: '',
                                className: y.platformIcon,
                                src: c.Z.get(m.ABu.PLAYSTATION).icon.whiteSVG
                            }),
                            A.intl.string(A.t.WHWgoa),
                            (0, i.jsx)(o.EyT, {
                                onClick: () =>
                                    (0, u.Z)({
                                        platformType: m.ABu.PLAYSTATION,
                                        location: 'Notice Bar'
                                    }),
                                children: A.intl.string(A.t.S0W8Z2)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, i.jsx)(o.RyX, {
                                onClick: () => r(T.L.UNKNOWN),
                                noticeType: b
                            }),
                            A.intl.string(A.t.B2hnhY),
                            (0, i.jsx)(o.NoS, {
                                onClick: () => a.Z.open(m.oAB.ACCOUNT),
                                noticeType: b,
                                children: A.intl.string(A.t['50KYxs'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)('span', { className: y.premiumLogo }),
                            (0, i.jsx)('span', {
                                className: y.premiumText,
                                children: A.intl.string(A.t['+urf7+'])
                            }),
                            (0, i.jsx)(o.NoS, {
                                className: y.premiumAction,
                                noticeType: b,
                                onClick: () => {
                                    (O.default.track(m.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: m.jXE.NOTIFICATION_BAR,
                                        location_object: m.qAy.BUTTON_CTA
                                    }),
                                        a.Z.open(m.oAB.PREMIUM));
                                },
                                children: A.intl.string(A.t['8JC5e3'])
                            }),
                            (0, i.jsx)(o.RyX, {
                                onClick: () => {
                                    (r(T.L.UNKNOWN), (0, s.mB)(m.xW$.PREMIUM_PROMO_DISMISSED, !0));
                                },
                                noticeType: b
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(p.Z, {
                        dismissCurrentNotice: () => r(T.L.UNKNOWN),
                        subscriptionTier: R.Si.TIER_2
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(p.Z, {
                        dismissCurrentNotice: () => r(T.L.UNKNOWN),
                        subscriptionTier: R.Si.TIER_0
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(o.RyX, {
                                noticeType: b,
                                onClick: () => r(T.L.UNKNOWN)
                            }),
                            A.intl.string(A.t['0KFB2N']),
                            (0, i.jsx)(o.NoS, {
                                noticeType: b,
                                onClick: () => {
                                    (r(T.L.UNKNOWN), a.Z.open(m.oAB.PREMIUM));
                                },
                                children: A.intl.string(A.t.pyYSiI)
                            })
                        ]
                    });
                case l.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.DANGER,
                        children: [
                            (0, i.jsx)(o.RyX, {
                                onClick: () => r(T.L.UNKNOWN),
                                noticeType: b
                            }),
                            A.intl.string(A.t['7490vb']),
                            (0, i.jsx)(o.NoS, {
                                noticeType: b,
                                onClick: () => {
                                    (0, I.uL)(m.Z5c.SETTINGS('account'));
                                },
                                children: A.intl.string(A.t.Vm8akJ)
                            })
                        ]
                    });
                case l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let g = h.Z.getEligibleGuildsForNagActivate();
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, i.jsx)(o.RyX, {
                                onClick: () => r(T.L.UNKNOWN),
                                noticeType: b
                            }),
                            A.intl.string(A.t.pJ4hJC),
                            (0, i.jsx)(o.NoS, {
                                noticeType: b,
                                onClick: () => {
                                    (r(T.L.PRIMARY), (0, I.uL)(1 === g.length ? m.Z5c.GUILD_SETTINGS(g[0], 'role-subscriptions') : m.Z5c.PICK_GUILD_SETTINGS('role-subscriptions', void 0, 'server-subscriptions-finish-setting-up')));
                                },
                                children: A.intl.string(A.t['74s74O'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_POMELO:
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.WARNING,
                        children: [
                            (0, i.jsx)(o.RyX, {
                                onClick: () => r(T.L.UNKNOWN),
                                noticeType: b
                            }),
                            A.intl.format(A.t.pdYZys, {}),
                            (0, i.jsx)(o.NoS, {
                                onClick: () => (0, E.Z)(N.Kq.NOTICE),
                                noticeType: b,
                                children: A.intl.string(A.t.LhlgY2)
                            })
                        ]
                    });
                case l.z.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(o.RyX, {
                                onClick: () => r(T.L.UNKNOWN),
                                noticeType: b
                            }),
                            A.intl.string(A.t['O9GI+v']),
                            (0, i.jsx)(o.NoS, {
                                onClick: () => {
                                    (0, _.Z)({
                                        subscriptionTier: R.Si.TIER_2,
                                        analyticsLocations: [d.Z.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: m.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => r(T.L.UNKNOWN)
                                    });
                                },
                                noticeType: b,
                                children: A.intl.string(A.t.Zi69Dw)
                            })
                        ]
                    });
                case l.z.REPORT_TO_MOD_SURVEY_NOTICE:
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.BRAND,
                        children: [
                            (0, i.jsx)(o.RyX, {
                                onClick: () => r(T.L.USER_DISMISS),
                                noticeType: m.kVF.REPORT_TO_MOD_SURVEY
                            }),
                            A.intl.string(A.t['Aa+l7e']),
                            (0, i.jsx)(o.NoS, {
                                onClick: () => {
                                    (window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_5uP0NWTpoXsYSUu?user_id='.concat(null == P ? void 0 : P.id, '&guild_id=').concat(D), '_blank'), r(T.L.TAKE_ACTION));
                                },
                                noticeType: m.kVF.REPORT_TO_MOD_SURVEY,
                                children: A.intl.string(A.t['iT+wQ0'])
                            })
                        ]
                    });
            }
        }
    });
};
