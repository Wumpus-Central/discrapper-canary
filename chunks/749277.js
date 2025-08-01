n.d(t, { A: () => C });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(704215),
    a = n(481060),
    o = n(232567),
    s = n(230711),
    c = n(726542),
    u = n(100527),
    d = n(231757),
    _ = n(674525),
    E = n(963249),
    p = n(303172),
    I = n(246965),
    O = n(703656),
    S = n(914010),
    f = n(594174),
    h = n(395361),
    T = n(626135),
    m = n(243778),
    g = n(921944),
    N = n(981631),
    R = n(801461),
    y = n(474936),
    A = n(388032),
    b = n(131715);
let C = (e) => {
    let { dismissibleContent: t, noticeType: C } = e,
        P = (0, i.e7)([f.default], () => f.default.getCurrentUser()),
        D = (0, i.e7)([S.Z], () => S.Z.getGuildId());
    return (0, r.jsx)(m.ZP, {
        contentTypes: [t],
        groupName: g.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: i } = e;
            switch (t) {
                case l.z.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(g.L.UNKNOWN),
                                noticeType: C
                            }),
                            A.intl.string(A.t['+xn1o6']),
                            (0, r.jsx)('i', { className: b.iconApple }),
                            (0, r.jsx)('i', { className: b.iconAndroid }),
                            (0, r.jsx)('i', { className: b.iconWindows }),
                            (0, r.jsx)(a.NoS, {
                                noticeType: C,
                                onClick: () => {
                                    (0, a.ZDy)(async () => {
                                        let { default: e } = await n.e('74023').then(n.bind(n, 431583));
                                        return (t) =>
                                            (0, r.jsx)(
                                                e,
                                                (function (e) {
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
                                                })({ source: 'Top Bar Nag' }, t)
                                            );
                                    });
                                },
                                children: A.intl.string(A.t['1WjMbG'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.SPOTIFY,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(g.L.UNKNOWN),
                                noticeType: C
                            }),
                            (0, r.jsx)(h.Z, { className: b.platformIcon }),
                            A.intl.string(A.t['5NUVHB']),
                            (0, r.jsx)(a.NoS, {
                                onClick: () =>
                                    (0, d.Z)({
                                        platformType: N.ABu.SPOTIFY,
                                        location: 'Notice Bar'
                                    }),
                                noticeType: C,
                                children: A.intl.string(A.t.S0W8Z2)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.PLAYSTATION,
                        children: [
                            (0, r.jsx)(a.RyX, { onClick: () => i(g.L.UNKNOWN) }),
                            (0, r.jsx)('img', {
                                alt: '',
                                className: b.platformIcon,
                                src: c.Z.get(N.ABu.PLAYSTATION).icon.whiteSVG
                            }),
                            A.intl.string(A.t.WHWgoa),
                            (0, r.jsx)(a.EyT, {
                                onClick: () =>
                                    (0, d.Z)({
                                        platformType: N.ABu.PLAYSTATION,
                                        location: 'Notice Bar'
                                    }),
                                children: A.intl.string(A.t.S0W8Z2)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(g.L.UNKNOWN),
                                noticeType: C
                            }),
                            A.intl.string(A.t.B2hnhY),
                            (0, r.jsx)(a.NoS, {
                                onClick: () => s.Z.open(N.oAB.ACCOUNT),
                                noticeType: C,
                                children: A.intl.string(A.t['50KYxs'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)('span', { className: b.premiumLogo }),
                            (0, r.jsx)('span', {
                                className: b.premiumText,
                                children: A.intl.string(A.t['+urf7+'])
                            }),
                            (0, r.jsx)(a.NoS, {
                                className: b.premiumAction,
                                noticeType: C,
                                onClick: () => {
                                    (T.default.track(N.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: N.jXE.NOTIFICATION_BAR,
                                        location_object: N.qAy.BUTTON_CTA
                                    }),
                                        s.Z.open(N.oAB.PREMIUM));
                                },
                                children: A.intl.string(A.t['8JC5e3'])
                            }),
                            (0, r.jsx)(a.RyX, {
                                onClick: () => {
                                    (i(g.L.UNKNOWN), (0, o.mB)(N.xW$.PREMIUM_PROMO_DISMISSED, !0));
                                },
                                noticeType: C
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, r.jsx)(I.Z, {
                        dismissCurrentNotice: () => i(g.L.UNKNOWN),
                        subscriptionTier: y.Si.TIER_2
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, r.jsx)(I.Z, {
                        dismissCurrentNotice: () => i(g.L.UNKNOWN),
                        subscriptionTier: y.Si.TIER_0
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                noticeType: C,
                                onClick: () => i(g.L.UNKNOWN)
                            }),
                            A.intl.string(A.t['0KFB2N']),
                            (0, r.jsx)(a.NoS, {
                                noticeType: C,
                                onClick: () => {
                                    (i(g.L.UNKNOWN), s.Z.open(N.oAB.PREMIUM));
                                },
                                children: A.intl.string(A.t.pyYSiI)
                            })
                        ]
                    });
                case l.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.DANGER,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(g.L.UNKNOWN),
                                noticeType: C
                            }),
                            A.intl.string(A.t['7490vb']),
                            (0, r.jsx)(a.NoS, {
                                noticeType: C,
                                onClick: () => {
                                    (0, O.uL)(N.Z5c.SETTINGS('account'));
                                },
                                children: A.intl.string(A.t.Vm8akJ)
                            })
                        ]
                    });
                case l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let S = _.Z.getEligibleGuildsForNagActivate();
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(g.L.UNKNOWN),
                                noticeType: C
                            }),
                            A.intl.string(A.t.pJ4hJC),
                            (0, r.jsx)(a.NoS, {
                                noticeType: C,
                                onClick: () => {
                                    (i(g.L.PRIMARY), (0, O.uL)(1 === S.length ? N.Z5c.GUILD_SETTINGS(S[0], 'role-subscriptions') : N.Z5c.PICK_GUILD_SETTINGS('role-subscriptions', void 0, 'server-subscriptions-finish-setting-up')));
                                },
                                children: A.intl.string(A.t['74s74O'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_POMELO:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.WARNING,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(g.L.UNKNOWN),
                                noticeType: C
                            }),
                            A.intl.format(A.t.pdYZys, {}),
                            (0, r.jsx)(a.NoS, {
                                onClick: () => (0, p.Z)(R.Kq.NOTICE),
                                noticeType: C,
                                children: A.intl.string(A.t.LhlgY2)
                            })
                        ]
                    });
                case l.z.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(g.L.UNKNOWN),
                                noticeType: C
                            }),
                            A.intl.string(A.t['O9GI+v']),
                            (0, r.jsx)(a.NoS, {
                                onClick: () => {
                                    (0, E.Z)({
                                        subscriptionTier: y.Si.TIER_2,
                                        analyticsLocations: [u.Z.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: N.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => i(g.L.UNKNOWN)
                                    });
                                },
                                noticeType: C,
                                children: A.intl.string(A.t.Zi69Dw)
                            })
                        ]
                    });
                case l.z.REPORT_TO_MOD_SURVEY_NOTICE:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.BRAND,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(g.L.USER_DISMISS),
                                noticeType: N.kVF.REPORT_TO_MOD_SURVEY
                            }),
                            A.intl.string(A.t['Aa+l7e']),
                            (0, r.jsx)(a.NoS, {
                                onClick: () => {
                                    (window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_5uP0NWTpoXsYSUu?user_id='.concat(null == P ? void 0 : P.id, '&guild_id=').concat(D), '_blank'), i(g.L.TAKE_ACTION));
                                },
                                noticeType: N.kVF.REPORT_TO_MOD_SURVEY,
                                children: A.intl.string(A.t['iT+wQ0'])
                            })
                        ]
                    });
            }
        }
    });
};
