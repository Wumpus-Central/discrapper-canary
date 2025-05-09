n.d(t, { A: () => M });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(704215),
    o = n(481060),
    a = n(232567),
    s = n(230711),
    c = n(726542),
    u = n(100527),
    d = n(231757),
    E = n(674525),
    _ = n(963249),
    O = n(346585),
    I = n(303172),
    T = n(463230),
    N = n(246965),
    S = n(703656),
    p = n(706454),
    R = n(914010),
    A = n(594174),
    f = n(933429),
    P = n(395361),
    C = n(626135),
    D = n(243778),
    g = n(921944),
    y = n(981631),
    m = n(801461),
    h = n(474936),
    b = n(388032),
    U = n(131715);
let M = (e) => {
    let { dismissibleContent: t, noticeType: M } = e,
        Z = (0, i.e7)([f.ZP], () => f.ZP.getNotice()),
        L = (0, i.e7)([p.default], () => p.default.locale),
        v = (0, i.e7)([A.default], () => A.default.getCurrentUser()),
        k = (0, i.e7)([R.Z], () => R.Z.getGuildId());
    return (0, r.jsx)(D.ZP, {
        contentTypes: [t],
        groupName: g.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: i } = e;
            switch (t) {
                case l.z.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(g.L.UNKNOWN),
                                noticeType: M
                            }),
                            b.intl.string(b.t['+xn1o6']),
                            (0, r.jsx)('i', { className: U.iconApple }),
                            (0, r.jsx)('i', { className: U.iconAndroid }),
                            (0, r.jsx)('i', { className: U.iconWindows }),
                            (0, r.jsx)(o.NoS, {
                                noticeType: M,
                                onClick: () => {
                                    (0, o.ZDy)(async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                                        return (t) =>
                                            (0, r.jsx)(
                                                e,
                                                (function (e) {
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
                                                })({ source: 'Top Bar Nag' }, t)
                                            );
                                    });
                                },
                                children: b.intl.string(b.t['1WjMbG'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.SPOTIFY,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(g.L.UNKNOWN),
                                noticeType: M
                            }),
                            (0, r.jsx)(P.Z, { className: U.platformIcon }),
                            b.intl.string(b.t['5NUVHB']),
                            (0, r.jsx)(o.NoS, {
                                onClick: () =>
                                    (0, d.Z)({
                                        platformType: y.ABu.SPOTIFY,
                                        location: 'Notice Bar'
                                    }),
                                noticeType: M,
                                children: b.intl.string(b.t.S0W8Z2)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.PLAYSTATION,
                        children: [
                            (0, r.jsx)(o.RyX, { onClick: () => i(g.L.UNKNOWN) }),
                            (0, r.jsx)('img', {
                                alt: '',
                                className: U.platformIcon,
                                src: c.Z.get(y.ABu.PLAYSTATION).icon.whiteSVG
                            }),
                            b.intl.string(b.t.WHWgoa),
                            (0, r.jsx)(o.EyT, {
                                onClick: () =>
                                    (0, d.Z)({
                                        platformType: y.ABu.PLAYSTATION,
                                        location: 'Notice Bar'
                                    }),
                                children: b.intl.string(b.t.S0W8Z2)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(g.L.UNKNOWN),
                                noticeType: M
                            }),
                            b.intl.string(b.t.B2hnhY),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => s.Z.open(y.oAB.ACCOUNT),
                                noticeType: M,
                                children: b.intl.string(b.t['50KYxs'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)('span', { className: U.premiumLogo }),
                            (0, r.jsx)('span', {
                                className: U.premiumText,
                                children: b.intl.string(b.t['+urf7+'])
                            }),
                            (0, r.jsx)(o.NoS, {
                                className: U.premiumAction,
                                noticeType: M,
                                onClick: () => {
                                    C.default.track(y.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: y.jXE.NOTIFICATION_BAR,
                                        location_object: y.qAy.BUTTON_CTA
                                    }),
                                        s.Z.open(y.oAB.PREMIUM);
                                },
                                children: b.intl.string(b.t['8JC5e3'])
                            }),
                            (0, r.jsx)(o.RyX, {
                                onClick: () => {
                                    i(g.L.UNKNOWN), (0, a.mB)(y.xW$.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: M
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, r.jsx)(N.Z, {
                        dismissCurrentNotice: () => i(g.L.UNKNOWN),
                        subscriptionTier: h.Si.TIER_2
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, r.jsx)(N.Z, {
                        dismissCurrentNotice: () => i(g.L.UNKNOWN),
                        subscriptionTier: h.Si.TIER_0
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                noticeType: M,
                                onClick: () => i(g.L.UNKNOWN)
                            }),
                            b.intl.string(b.t['0KFB2N']),
                            (0, r.jsx)(o.NoS, {
                                noticeType: M,
                                onClick: () => {
                                    i(g.L.UNKNOWN), s.Z.open(y.oAB.PREMIUM);
                                },
                                children: b.intl.string(b.t.pyYSiI)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_LOCALIZED_PRICING:
                    return (0, r.jsx)(T.Z, {
                        notice: Z,
                        noticeType: M,
                        dismissCurrentNotice: () => i(g.L.UNKNOWN)
                    });
                case l.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.DANGER,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(g.L.UNKNOWN),
                                noticeType: M
                            }),
                            b.intl.string(b.t['7490vb']),
                            (0, r.jsx)(o.NoS, {
                                noticeType: M,
                                onClick: () => {
                                    (0, S.uL)(y.Z5c.SETTINGS('account'));
                                },
                                children: b.intl.string(b.t.Vm8akJ)
                            })
                        ]
                    });
                case l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let p = E.Z.getEligibleGuildsForNagActivate();
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(g.L.UNKNOWN),
                                noticeType: M
                            }),
                            b.intl.string(b.t.pJ4hJC),
                            (0, r.jsx)(o.NoS, {
                                noticeType: M,
                                onClick: () => {
                                    i(g.L.PRIMARY), (0, S.uL)(1 === p.length ? y.Z5c.GUILD_SETTINGS(p[0], 'role-subscriptions') : y.Z5c.PICK_GUILD_SETTINGS('role-subscriptions', void 0, 'server-subscriptions-finish-setting-up'));
                                },
                                children: b.intl.string(b.t['74s74O'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_POMELO:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.WARNING,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(g.L.UNKNOWN),
                                noticeType: M
                            }),
                            b.intl.format(b.t.pdYZys, {}),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => (0, I.Z)(m.Kq.NOTICE),
                                noticeType: M,
                                children: b.intl.string(b.t.LhlgY2)
                            })
                        ]
                    });
                case l.z.UU_MIGRATION_NOTICE:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.WARNING,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(g.L.UNKNOWN),
                                noticeType: M
                            }),
                            b.intl.format(b.t.zT1hgo, { date: (0, O.IE)(L) }),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => (0, I.Z)(m.Kq.NOTICE),
                                noticeType: M,
                                children: b.intl.string(b.t.LhlgY2)
                            })
                        ]
                    });
                case l.z.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(g.L.UNKNOWN),
                                noticeType: M
                            }),
                            b.intl.string(b.t['O9GI+v']),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => {
                                    (0, _.Z)({
                                        subscriptionTier: h.Si.TIER_2,
                                        analyticsLocations: [u.Z.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: y.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => i(g.L.UNKNOWN)
                                    });
                                },
                                noticeType: M,
                                children: b.intl.string(b.t.Zi69Dw)
                            })
                        ]
                    });
                case l.z.REPORT_TO_MOD_SURVEY_NOTICE:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.BRAND,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(g.L.USER_DISMISS),
                                noticeType: y.kVF.REPORT_TO_MOD_SURVEY
                            }),
                            b.intl.string(b.t['Aa+l7e']),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => {
                                    window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_5uP0NWTpoXsYSUu?user_id='.concat(null == v ? void 0 : v.id, '&guild_id=').concat(k), '_blank'), i(g.L.TAKE_ACTION);
                                },
                                noticeType: y.kVF.REPORT_TO_MOD_SURVEY,
                                children: b.intl.string(b.t['iT+wQ0'])
                            })
                        ]
                    });
            }
        }
    });
};
