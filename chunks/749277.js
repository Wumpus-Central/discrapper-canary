n.d(t, { A: () => D });
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
    _ = n(674525),
    h = n(963249),
    E = n(303172),
    I = n(463230),
    p = n(246965),
    C = n(703656),
    O = n(914010),
    T = n(594174),
    g = n(933429),
    S = n(395361),
    f = n(626135),
    N = n(243778),
    R = n(921944),
    m = n(981631),
    A = n(801461),
    y = n(474936),
    P = n(388032),
    b = n(131715);
let D = (e) => {
    let { dismissibleContent: t, noticeType: D } = e,
        v = (0, r.e7)([g.ZP], () => g.ZP.getNotice()),
        U = (0, r.e7)([T.default], () => T.default.getCurrentUser()),
        M = (0, r.e7)([O.Z], () => O.Z.getGuildId());
    return (0, i.jsx)(N.ZP, {
        contentTypes: [t],
        groupName: R.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: r } = e;
            switch (t) {
                case l.z.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, i.jsx)(o.RyX, {
                                onClick: () => r(R.L.UNKNOWN),
                                noticeType: D
                            }),
                            P.intl.string(P.t['+xn1o6']),
                            (0, i.jsx)('i', { className: b.iconApple }),
                            (0, i.jsx)('i', { className: b.iconAndroid }),
                            (0, i.jsx)('i', { className: b.iconWindows }),
                            (0, i.jsx)(o.NoS, {
                                noticeType: D,
                                onClick: () => {
                                    (0, o.ZDy)(async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
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
                                children: P.intl.string(P.t['1WjMbG'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.SPOTIFY,
                        children: [
                            (0, i.jsx)(o.RyX, {
                                onClick: () => r(R.L.UNKNOWN),
                                noticeType: D
                            }),
                            (0, i.jsx)(S.Z, { className: b.platformIcon }),
                            P.intl.string(P.t['5NUVHB']),
                            (0, i.jsx)(o.NoS, {
                                onClick: () =>
                                    (0, u.Z)({
                                        platformType: m.ABu.SPOTIFY,
                                        location: 'Notice Bar'
                                    }),
                                noticeType: D,
                                children: P.intl.string(P.t.S0W8Z2)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.PLAYSTATION,
                        children: [
                            (0, i.jsx)(o.RyX, { onClick: () => r(R.L.UNKNOWN) }),
                            (0, i.jsx)('img', {
                                alt: '',
                                className: b.platformIcon,
                                src: c.Z.get(m.ABu.PLAYSTATION).icon.whiteSVG
                            }),
                            P.intl.string(P.t.WHWgoa),
                            (0, i.jsx)(o.EyT, {
                                onClick: () =>
                                    (0, u.Z)({
                                        platformType: m.ABu.PLAYSTATION,
                                        location: 'Notice Bar'
                                    }),
                                children: P.intl.string(P.t.S0W8Z2)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, i.jsx)(o.RyX, {
                                onClick: () => r(R.L.UNKNOWN),
                                noticeType: D
                            }),
                            P.intl.string(P.t.B2hnhY),
                            (0, i.jsx)(o.NoS, {
                                onClick: () => a.Z.open(m.oAB.ACCOUNT),
                                noticeType: D,
                                children: P.intl.string(P.t['50KYxs'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)('span', { className: b.premiumLogo }),
                            (0, i.jsx)('span', {
                                className: b.premiumText,
                                children: P.intl.string(P.t['+urf7+'])
                            }),
                            (0, i.jsx)(o.NoS, {
                                className: b.premiumAction,
                                noticeType: D,
                                onClick: () => {
                                    (f.default.track(m.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: m.jXE.NOTIFICATION_BAR,
                                        location_object: m.qAy.BUTTON_CTA
                                    }),
                                        a.Z.open(m.oAB.PREMIUM));
                                },
                                children: P.intl.string(P.t['8JC5e3'])
                            }),
                            (0, i.jsx)(o.RyX, {
                                onClick: () => {
                                    (r(R.L.UNKNOWN), (0, s.mB)(m.xW$.PREMIUM_PROMO_DISMISSED, !0));
                                },
                                noticeType: D
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(p.Z, {
                        dismissCurrentNotice: () => r(R.L.UNKNOWN),
                        subscriptionTier: y.Si.TIER_2
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(p.Z, {
                        dismissCurrentNotice: () => r(R.L.UNKNOWN),
                        subscriptionTier: y.Si.TIER_0
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(o.RyX, {
                                noticeType: D,
                                onClick: () => r(R.L.UNKNOWN)
                            }),
                            P.intl.string(P.t['0KFB2N']),
                            (0, i.jsx)(o.NoS, {
                                noticeType: D,
                                onClick: () => {
                                    (r(R.L.UNKNOWN), a.Z.open(m.oAB.PREMIUM));
                                },
                                children: P.intl.string(P.t.pyYSiI)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_LOCALIZED_PRICING:
                    return (0, i.jsx)(I.Z, {
                        notice: v,
                        noticeType: D,
                        dismissCurrentNotice: () => r(R.L.UNKNOWN)
                    });
                case l.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.DANGER,
                        children: [
                            (0, i.jsx)(o.RyX, {
                                onClick: () => r(R.L.UNKNOWN),
                                noticeType: D
                            }),
                            P.intl.string(P.t['7490vb']),
                            (0, i.jsx)(o.NoS, {
                                noticeType: D,
                                onClick: () => {
                                    (0, C.uL)(m.Z5c.SETTINGS('account'));
                                },
                                children: P.intl.string(P.t.Vm8akJ)
                            })
                        ]
                    });
                case l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let O = _.Z.getEligibleGuildsForNagActivate();
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, i.jsx)(o.RyX, {
                                onClick: () => r(R.L.UNKNOWN),
                                noticeType: D
                            }),
                            P.intl.string(P.t.pJ4hJC),
                            (0, i.jsx)(o.NoS, {
                                noticeType: D,
                                onClick: () => {
                                    (r(R.L.PRIMARY), (0, C.uL)(1 === O.length ? m.Z5c.GUILD_SETTINGS(O[0], 'role-subscriptions') : m.Z5c.PICK_GUILD_SETTINGS('role-subscriptions', void 0, 'server-subscriptions-finish-setting-up')));
                                },
                                children: P.intl.string(P.t['74s74O'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_POMELO:
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.WARNING,
                        children: [
                            (0, i.jsx)(o.RyX, {
                                onClick: () => r(R.L.UNKNOWN),
                                noticeType: D
                            }),
                            P.intl.format(P.t.pdYZys, {}),
                            (0, i.jsx)(o.NoS, {
                                onClick: () => (0, E.Z)(A.Kq.NOTICE),
                                noticeType: D,
                                children: P.intl.string(P.t.LhlgY2)
                            })
                        ]
                    });
                case l.z.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(o.RyX, {
                                onClick: () => r(R.L.UNKNOWN),
                                noticeType: D
                            }),
                            P.intl.string(P.t['O9GI+v']),
                            (0, i.jsx)(o.NoS, {
                                onClick: () => {
                                    (0, h.Z)({
                                        subscriptionTier: y.Si.TIER_2,
                                        analyticsLocations: [d.Z.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: m.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => r(R.L.UNKNOWN)
                                    });
                                },
                                noticeType: D,
                                children: P.intl.string(P.t.Zi69Dw)
                            })
                        ]
                    });
                case l.z.REPORT_TO_MOD_SURVEY_NOTICE:
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.BRAND,
                        children: [
                            (0, i.jsx)(o.RyX, {
                                onClick: () => r(R.L.USER_DISMISS),
                                noticeType: m.kVF.REPORT_TO_MOD_SURVEY
                            }),
                            P.intl.string(P.t['Aa+l7e']),
                            (0, i.jsx)(o.NoS, {
                                onClick: () => {
                                    (window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_5uP0NWTpoXsYSUu?user_id='.concat(null == U ? void 0 : U.id, '&guild_id=').concat(M), '_blank'), r(R.L.TAKE_ACTION));
                                },
                                noticeType: m.kVF.REPORT_TO_MOD_SURVEY,
                                children: P.intl.string(P.t['iT+wQ0'])
                            })
                        ]
                    });
            }
        }
    });
};
