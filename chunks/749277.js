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
    _ = n(674525),
    h = n(963249),
    E = n(303172),
    I = n(246965),
    p = n(703656),
    C = n(914010),
    g = n(594174),
    O = n(395361),
    T = n(626135),
    S = n(243778),
    f = n(921944),
    N = n(981631),
    m = n(801461),
    R = n(474936),
    A = n(388032),
    y = n(131715);
let b = (e) => {
    let { dismissibleContent: t, noticeType: b } = e,
        P = (0, r.e7)([g.default], () => g.default.getCurrentUser()),
        D = (0, r.e7)([C.Z], () => C.Z.getGuildId());
    return (0, i.jsx)(S.ZP, {
        contentTypes: [t],
        groupName: f.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: r } = e;
            switch (t) {
                case l.z.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, i.jsx)(o.RyX, {
                                onClick: () => r(f.L.UNKNOWN),
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
                                onClick: () => r(f.L.UNKNOWN),
                                noticeType: b
                            }),
                            (0, i.jsx)(O.Z, { className: y.platformIcon }),
                            A.intl.string(A.t['5NUVHB']),
                            (0, i.jsx)(o.NoS, {
                                onClick: () =>
                                    (0, u.Z)({
                                        platformType: N.ABu.SPOTIFY,
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
                            (0, i.jsx)(o.RyX, { onClick: () => r(f.L.UNKNOWN) }),
                            (0, i.jsx)('img', {
                                alt: '',
                                className: y.platformIcon,
                                src: c.Z.get(N.ABu.PLAYSTATION).icon.whiteSVG
                            }),
                            A.intl.string(A.t.WHWgoa),
                            (0, i.jsx)(o.EyT, {
                                onClick: () =>
                                    (0, u.Z)({
                                        platformType: N.ABu.PLAYSTATION,
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
                                onClick: () => r(f.L.UNKNOWN),
                                noticeType: b
                            }),
                            A.intl.string(A.t.B2hnhY),
                            (0, i.jsx)(o.NoS, {
                                onClick: () => a.Z.open(N.oAB.ACCOUNT),
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
                                    (T.default.track(N.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: N.jXE.NOTIFICATION_BAR,
                                        location_object: N.qAy.BUTTON_CTA
                                    }),
                                        a.Z.open(N.oAB.PREMIUM));
                                },
                                children: A.intl.string(A.t['8JC5e3'])
                            }),
                            (0, i.jsx)(o.RyX, {
                                onClick: () => {
                                    (r(f.L.UNKNOWN), (0, s.mB)(N.xW$.PREMIUM_PROMO_DISMISSED, !0));
                                },
                                noticeType: b
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(I.Z, {
                        dismissCurrentNotice: () => r(f.L.UNKNOWN),
                        subscriptionTier: R.Si.TIER_2
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(I.Z, {
                        dismissCurrentNotice: () => r(f.L.UNKNOWN),
                        subscriptionTier: R.Si.TIER_0
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(o.RyX, {
                                noticeType: b,
                                onClick: () => r(f.L.UNKNOWN)
                            }),
                            A.intl.string(A.t['0KFB2N']),
                            (0, i.jsx)(o.NoS, {
                                noticeType: b,
                                onClick: () => {
                                    (r(f.L.UNKNOWN), a.Z.open(N.oAB.PREMIUM));
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
                                onClick: () => r(f.L.UNKNOWN),
                                noticeType: b
                            }),
                            A.intl.string(A.t['7490vb']),
                            (0, i.jsx)(o.NoS, {
                                noticeType: b,
                                onClick: () => {
                                    (0, p.uL)(N.Z5c.SETTINGS('account'));
                                },
                                children: A.intl.string(A.t.Vm8akJ)
                            })
                        ]
                    });
                case l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let C = _.Z.getEligibleGuildsForNagActivate();
                    return (0, i.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, i.jsx)(o.RyX, {
                                onClick: () => r(f.L.UNKNOWN),
                                noticeType: b
                            }),
                            A.intl.string(A.t.pJ4hJC),
                            (0, i.jsx)(o.NoS, {
                                noticeType: b,
                                onClick: () => {
                                    (r(f.L.PRIMARY), (0, p.uL)(1 === C.length ? N.Z5c.GUILD_SETTINGS(C[0], 'role-subscriptions') : N.Z5c.PICK_GUILD_SETTINGS('role-subscriptions', void 0, 'server-subscriptions-finish-setting-up')));
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
                                onClick: () => r(f.L.UNKNOWN),
                                noticeType: b
                            }),
                            A.intl.format(A.t.pdYZys, {}),
                            (0, i.jsx)(o.NoS, {
                                onClick: () => (0, E.Z)(m.Kq.NOTICE),
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
                                onClick: () => r(f.L.UNKNOWN),
                                noticeType: b
                            }),
                            A.intl.string(A.t['O9GI+v']),
                            (0, i.jsx)(o.NoS, {
                                onClick: () => {
                                    (0, h.Z)({
                                        subscriptionTier: R.Si.TIER_2,
                                        analyticsLocations: [d.Z.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: N.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => r(f.L.UNKNOWN)
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
                                onClick: () => r(f.L.USER_DISMISS),
                                noticeType: N.kVF.REPORT_TO_MOD_SURVEY
                            }),
                            A.intl.string(A.t['Aa+l7e']),
                            (0, i.jsx)(o.NoS, {
                                onClick: () => {
                                    (window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_5uP0NWTpoXsYSUu?user_id='.concat(null == P ? void 0 : P.id, '&guild_id=').concat(D), '_blank'), r(f.L.TAKE_ACTION));
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
