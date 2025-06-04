n.d(t, { A: () => M });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(704215),
    o = n(481060),
    a = n(232567),
    c = n(230711),
    s = n(726542),
    u = n(100527),
    d = n(231757),
    _ = n(674525),
    E = n(963249),
    I = n(346585),
    O = n(303172),
    T = n(463230),
    p = n(246965),
    N = n(703656),
    S = n(706454),
    f = n(914010),
    A = n(594174),
    R = n(933429),
    m = n(395361),
    C = n(626135),
    g = n(243778),
    P = n(921944),
    y = n(981631),
    D = n(801461),
    b = n(474936),
    h = n(388032),
    U = n(131715);
let M = (e) => {
    let { dismissibleContent: t, noticeType: M } = e,
        v = (0, i.e7)([R.ZP], () => R.ZP.getNotice()),
        k = (0, i.e7)([S.default], () => S.default.locale),
        L = (0, i.e7)([A.default], () => A.default.getCurrentUser()),
        Z = (0, i.e7)([f.Z], () => f.Z.getGuildId());
    return (0, r.jsx)(g.ZP, {
        contentTypes: [t],
        groupName: P.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: i } = e;
            switch (t) {
                case l.z.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(P.L.UNKNOWN),
                                noticeType: M
                            }),
                            h.intl.string(h.t['+xn1o6']),
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
                                children: h.intl.string(h.t['1WjMbG'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.SPOTIFY,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(P.L.UNKNOWN),
                                noticeType: M
                            }),
                            (0, r.jsx)(m.Z, { className: U.platformIcon }),
                            h.intl.string(h.t['5NUVHB']),
                            (0, r.jsx)(o.NoS, {
                                onClick: () =>
                                    (0, d.Z)({
                                        platformType: y.ABu.SPOTIFY,
                                        location: 'Notice Bar'
                                    }),
                                noticeType: M,
                                children: h.intl.string(h.t.S0W8Z2)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.PLAYSTATION,
                        children: [
                            (0, r.jsx)(o.RyX, { onClick: () => i(P.L.UNKNOWN) }),
                            (0, r.jsx)('img', {
                                alt: '',
                                className: U.platformIcon,
                                src: s.Z.get(y.ABu.PLAYSTATION).icon.whiteSVG
                            }),
                            h.intl.string(h.t.WHWgoa),
                            (0, r.jsx)(o.EyT, {
                                onClick: () =>
                                    (0, d.Z)({
                                        platformType: y.ABu.PLAYSTATION,
                                        location: 'Notice Bar'
                                    }),
                                children: h.intl.string(h.t.S0W8Z2)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(P.L.UNKNOWN),
                                noticeType: M
                            }),
                            h.intl.string(h.t.B2hnhY),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => c.Z.open(y.oAB.ACCOUNT),
                                noticeType: M,
                                children: h.intl.string(h.t['50KYxs'])
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
                                children: h.intl.string(h.t['+urf7+'])
                            }),
                            (0, r.jsx)(o.NoS, {
                                className: U.premiumAction,
                                noticeType: M,
                                onClick: () => {
                                    C.default.track(y.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: y.jXE.NOTIFICATION_BAR,
                                        location_object: y.qAy.BUTTON_CTA
                                    }),
                                        c.Z.open(y.oAB.PREMIUM);
                                },
                                children: h.intl.string(h.t['8JC5e3'])
                            }),
                            (0, r.jsx)(o.RyX, {
                                onClick: () => {
                                    i(P.L.UNKNOWN), (0, a.mB)(y.xW$.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: M
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, r.jsx)(p.Z, {
                        dismissCurrentNotice: () => i(P.L.UNKNOWN),
                        subscriptionTier: b.Si.TIER_2
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, r.jsx)(p.Z, {
                        dismissCurrentNotice: () => i(P.L.UNKNOWN),
                        subscriptionTier: b.Si.TIER_0
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                noticeType: M,
                                onClick: () => i(P.L.UNKNOWN)
                            }),
                            h.intl.string(h.t['0KFB2N']),
                            (0, r.jsx)(o.NoS, {
                                noticeType: M,
                                onClick: () => {
                                    i(P.L.UNKNOWN), c.Z.open(y.oAB.PREMIUM);
                                },
                                children: h.intl.string(h.t.pyYSiI)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_LOCALIZED_PRICING:
                    return (0, r.jsx)(T.Z, {
                        notice: v,
                        noticeType: M,
                        dismissCurrentNotice: () => i(P.L.UNKNOWN)
                    });
                case l.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.DANGER,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(P.L.UNKNOWN),
                                noticeType: M
                            }),
                            h.intl.string(h.t['7490vb']),
                            (0, r.jsx)(o.NoS, {
                                noticeType: M,
                                onClick: () => {
                                    (0, N.uL)(y.Z5c.SETTINGS('account'));
                                },
                                children: h.intl.string(h.t.Vm8akJ)
                            })
                        ]
                    });
                case l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let S = _.Z.getEligibleGuildsForNagActivate();
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(P.L.UNKNOWN),
                                noticeType: M
                            }),
                            h.intl.string(h.t.pJ4hJC),
                            (0, r.jsx)(o.NoS, {
                                noticeType: M,
                                onClick: () => {
                                    i(P.L.PRIMARY), (0, N.uL)(1 === S.length ? y.Z5c.GUILD_SETTINGS(S[0], 'role-subscriptions') : y.Z5c.PICK_GUILD_SETTINGS('role-subscriptions', void 0, 'server-subscriptions-finish-setting-up'));
                                },
                                children: h.intl.string(h.t['74s74O'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_POMELO:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.WARNING,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(P.L.UNKNOWN),
                                noticeType: M
                            }),
                            h.intl.format(h.t.pdYZys, {}),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => (0, O.Z)(D.Kq.NOTICE),
                                noticeType: M,
                                children: h.intl.string(h.t.LhlgY2)
                            })
                        ]
                    });
                case l.z.UU_MIGRATION_NOTICE:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.WARNING,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(P.L.UNKNOWN),
                                noticeType: M
                            }),
                            h.intl.format(h.t.zT1hgo, { date: (0, I.IE)(k) }),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => (0, O.Z)(D.Kq.NOTICE),
                                noticeType: M,
                                children: h.intl.string(h.t.LhlgY2)
                            })
                        ]
                    });
                case l.z.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(P.L.UNKNOWN),
                                noticeType: M
                            }),
                            h.intl.string(h.t['O9GI+v']),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => {
                                    (0, E.Z)({
                                        subscriptionTier: b.Si.TIER_2,
                                        analyticsLocations: [u.Z.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: y.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => i(P.L.UNKNOWN)
                                    });
                                },
                                noticeType: M,
                                children: h.intl.string(h.t.Zi69Dw)
                            })
                        ]
                    });
                case l.z.REPORT_TO_MOD_SURVEY_NOTICE:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.BRAND,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(P.L.USER_DISMISS),
                                noticeType: y.kVF.REPORT_TO_MOD_SURVEY
                            }),
                            h.intl.string(h.t['Aa+l7e']),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => {
                                    window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_5uP0NWTpoXsYSUu?user_id='.concat(null == L ? void 0 : L.id, '&guild_id=').concat(Z), '_blank'), i(P.L.TAKE_ACTION);
                                },
                                noticeType: y.kVF.REPORT_TO_MOD_SURVEY,
                                children: h.intl.string(h.t['iT+wQ0'])
                            })
                        ]
                    });
            }
        }
    });
};
