n.d(t, { A: () => U });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(704215),
    o = n(481060),
    a = n(232567),
    s = n(230711),
    c = n(726542),
    u = n(100527),
    E = n(231757),
    d = n(674525),
    _ = n(963249),
    O = n(303172),
    I = n(463230),
    T = n(246965),
    N = n(703656),
    S = n(914010),
    p = n(594174),
    R = n(933429),
    A = n(395361),
    P = n(626135),
    C = n(243778),
    D = n(921944),
    f = n(981631),
    m = n(801461),
    y = n(474936),
    g = n(388032),
    h = n(131715);
let U = (e) => {
    let { dismissibleContent: t, noticeType: U } = e,
        b = (0, i.e7)([R.ZP], () => R.ZP.getNotice()),
        M = (0, i.e7)([p.default], () => p.default.getCurrentUser()),
        k = (0, i.e7)([S.Z], () => S.Z.getGuildId());
    return (0, r.jsx)(C.ZP, {
        contentTypes: [t],
        groupName: D.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: i } = e;
            switch (t) {
                case l.z.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(D.L.UNKNOWN),
                                noticeType: U
                            }),
                            g.intl.string(g.t['+xn1o6']),
                            (0, r.jsx)('i', { className: h.iconApple }),
                            (0, r.jsx)('i', { className: h.iconAndroid }),
                            (0, r.jsx)('i', { className: h.iconWindows }),
                            (0, r.jsx)(o.NoS, {
                                noticeType: U,
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
                                children: g.intl.string(g.t['1WjMbG'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.SPOTIFY,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(D.L.UNKNOWN),
                                noticeType: U
                            }),
                            (0, r.jsx)(A.Z, { className: h.platformIcon }),
                            g.intl.string(g.t['5NUVHB']),
                            (0, r.jsx)(o.NoS, {
                                onClick: () =>
                                    (0, E.Z)({
                                        platformType: f.ABu.SPOTIFY,
                                        location: 'Notice Bar'
                                    }),
                                noticeType: U,
                                children: g.intl.string(g.t.S0W8Z2)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.PLAYSTATION,
                        children: [
                            (0, r.jsx)(o.RyX, { onClick: () => i(D.L.UNKNOWN) }),
                            (0, r.jsx)('img', {
                                alt: '',
                                className: h.platformIcon,
                                src: c.Z.get(f.ABu.PLAYSTATION).icon.whiteSVG
                            }),
                            g.intl.string(g.t.WHWgoa),
                            (0, r.jsx)(o.EyT, {
                                onClick: () =>
                                    (0, E.Z)({
                                        platformType: f.ABu.PLAYSTATION,
                                        location: 'Notice Bar'
                                    }),
                                children: g.intl.string(g.t.S0W8Z2)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(D.L.UNKNOWN),
                                noticeType: U
                            }),
                            g.intl.string(g.t.B2hnhY),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => s.Z.open(f.oAB.ACCOUNT),
                                noticeType: U,
                                children: g.intl.string(g.t['50KYxs'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)('span', { className: h.premiumLogo }),
                            (0, r.jsx)('span', {
                                className: h.premiumText,
                                children: g.intl.string(g.t['+urf7+'])
                            }),
                            (0, r.jsx)(o.NoS, {
                                className: h.premiumAction,
                                noticeType: U,
                                onClick: () => {
                                    P.default.track(f.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: f.jXE.NOTIFICATION_BAR,
                                        location_object: f.qAy.BUTTON_CTA
                                    }),
                                        s.Z.open(f.oAB.PREMIUM);
                                },
                                children: g.intl.string(g.t['8JC5e3'])
                            }),
                            (0, r.jsx)(o.RyX, {
                                onClick: () => {
                                    i(D.L.UNKNOWN), (0, a.mB)(f.xW$.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: U
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, r.jsx)(T.Z, {
                        dismissCurrentNotice: () => i(D.L.UNKNOWN),
                        subscriptionTier: y.Si.TIER_2
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, r.jsx)(T.Z, {
                        dismissCurrentNotice: () => i(D.L.UNKNOWN),
                        subscriptionTier: y.Si.TIER_0
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                noticeType: U,
                                onClick: () => i(D.L.UNKNOWN)
                            }),
                            g.intl.string(g.t['0KFB2N']),
                            (0, r.jsx)(o.NoS, {
                                noticeType: U,
                                onClick: () => {
                                    i(D.L.UNKNOWN), s.Z.open(f.oAB.PREMIUM);
                                },
                                children: g.intl.string(g.t.pyYSiI)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_LOCALIZED_PRICING:
                    return (0, r.jsx)(I.Z, {
                        notice: b,
                        noticeType: U,
                        dismissCurrentNotice: () => i(D.L.UNKNOWN)
                    });
                case l.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.DANGER,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(D.L.UNKNOWN),
                                noticeType: U
                            }),
                            g.intl.string(g.t['7490vb']),
                            (0, r.jsx)(o.NoS, {
                                noticeType: U,
                                onClick: () => {
                                    (0, N.uL)(f.Z5c.SETTINGS('account'));
                                },
                                children: g.intl.string(g.t.Vm8akJ)
                            })
                        ]
                    });
                case l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let S = d.Z.getEligibleGuildsForNagActivate();
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(D.L.UNKNOWN),
                                noticeType: U
                            }),
                            g.intl.string(g.t.pJ4hJC),
                            (0, r.jsx)(o.NoS, {
                                noticeType: U,
                                onClick: () => {
                                    i(D.L.PRIMARY), (0, N.uL)(1 === S.length ? f.Z5c.GUILD_SETTINGS(S[0], 'role-subscriptions') : f.Z5c.PICK_GUILD_SETTINGS('role-subscriptions', void 0, 'server-subscriptions-finish-setting-up'));
                                },
                                children: g.intl.string(g.t['74s74O'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_POMELO:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.WARNING,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(D.L.UNKNOWN),
                                noticeType: U
                            }),
                            g.intl.format(g.t.pdYZys, {}),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => (0, O.Z)(m.Kq.NOTICE),
                                noticeType: U,
                                children: g.intl.string(g.t.LhlgY2)
                            })
                        ]
                    });
                case l.z.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(D.L.UNKNOWN),
                                noticeType: U
                            }),
                            g.intl.string(g.t['O9GI+v']),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => {
                                    (0, _.Z)({
                                        subscriptionTier: y.Si.TIER_2,
                                        analyticsLocations: [u.Z.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: f.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => i(D.L.UNKNOWN)
                                    });
                                },
                                noticeType: U,
                                children: g.intl.string(g.t.Zi69Dw)
                            })
                        ]
                    });
                case l.z.REPORT_TO_MOD_SURVEY_NOTICE:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.BRAND,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(D.L.USER_DISMISS),
                                noticeType: f.kVF.REPORT_TO_MOD_SURVEY
                            }),
                            g.intl.string(g.t['Aa+l7e']),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => {
                                    window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_5uP0NWTpoXsYSUu?user_id='.concat(null == M ? void 0 : M.id, '&guild_id=').concat(k), '_blank'), i(D.L.TAKE_ACTION);
                                },
                                noticeType: f.kVF.REPORT_TO_MOD_SURVEY,
                                children: g.intl.string(g.t['iT+wQ0'])
                            })
                        ]
                    });
            }
        }
    });
};
