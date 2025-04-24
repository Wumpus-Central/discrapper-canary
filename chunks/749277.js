n.d(t, { A: () => h });
var r = n(200651);
n(192379);
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
    I = n(346585),
    O = n(303172),
    T = n(463230),
    N = n(246965),
    S = n(703656),
    R = n(706454),
    A = n(933429),
    p = n(395361),
    P = n(626135),
    C = n(243778),
    D = n(921944),
    f = n(981631),
    m = n(801461),
    g = n(474936),
    y = n(388032),
    U = n(131715);
let h = (e) => {
    let { dismissibleContent: t, noticeType: h } = e,
        b = (0, i.e7)([A.ZP], () => A.ZP.getNotice()),
        M = (0, i.e7)([R.default], () => R.default.locale);
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
                                noticeType: h
                            }),
                            y.intl.string(y.t['+xn1o6']),
                            (0, r.jsx)('i', { className: U.iconApple }),
                            (0, r.jsx)('i', { className: U.iconAndroid }),
                            (0, r.jsx)('i', { className: U.iconWindows }),
                            (0, r.jsx)(o.NoS, {
                                noticeType: h,
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
                                children: y.intl.string(y.t['1WjMbG'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.SPOTIFY,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(D.L.UNKNOWN),
                                noticeType: h
                            }),
                            (0, r.jsx)(p.Z, { className: U.platformIcon }),
                            y.intl.string(y.t['5NUVHB']),
                            (0, r.jsx)(o.NoS, {
                                onClick: () =>
                                    (0, E.Z)({
                                        platformType: f.ABu.SPOTIFY,
                                        location: 'Notice Bar'
                                    }),
                                noticeType: h,
                                children: y.intl.string(y.t.S0W8Z2)
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
                                className: U.platformIcon,
                                src: c.Z.get(f.ABu.PLAYSTATION).icon.whiteSVG
                            }),
                            y.intl.string(y.t.WHWgoa),
                            (0, r.jsx)(o.EyT, {
                                onClick: () =>
                                    (0, E.Z)({
                                        platformType: f.ABu.PLAYSTATION,
                                        location: 'Notice Bar'
                                    }),
                                children: y.intl.string(y.t.S0W8Z2)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(D.L.UNKNOWN),
                                noticeType: h
                            }),
                            y.intl.string(y.t.B2hnhY),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => s.Z.open(f.oAB.ACCOUNT),
                                noticeType: h,
                                children: y.intl.string(y.t['50KYxs'])
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
                                children: y.intl.string(y.t['+urf7+'])
                            }),
                            (0, r.jsx)(o.NoS, {
                                className: U.premiumAction,
                                noticeType: h,
                                onClick: () => {
                                    P.default.track(f.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: f.jXE.NOTIFICATION_BAR,
                                        location_object: f.qAy.BUTTON_CTA
                                    }),
                                        s.Z.open(f.oAB.PREMIUM);
                                },
                                children: y.intl.string(y.t['8JC5e3'])
                            }),
                            (0, r.jsx)(o.RyX, {
                                onClick: () => {
                                    i(D.L.UNKNOWN), (0, a.mB)(f.xW$.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: h
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, r.jsx)(N.Z, {
                        dismissCurrentNotice: () => i(D.L.UNKNOWN),
                        subscriptionTier: g.Si.TIER_2
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, r.jsx)(N.Z, {
                        dismissCurrentNotice: () => i(D.L.UNKNOWN),
                        subscriptionTier: g.Si.TIER_0
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                noticeType: h,
                                onClick: () => i(D.L.UNKNOWN)
                            }),
                            y.intl.string(y.t['0KFB2N']),
                            (0, r.jsx)(o.NoS, {
                                noticeType: h,
                                onClick: () => {
                                    i(D.L.UNKNOWN), s.Z.open(f.oAB.PREMIUM);
                                },
                                children: y.intl.string(y.t.pyYSiI)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_LOCALIZED_PRICING:
                    return (0, r.jsx)(T.Z, {
                        notice: b,
                        noticeType: h,
                        dismissCurrentNotice: () => i(D.L.UNKNOWN)
                    });
                case l.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.DANGER,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(D.L.UNKNOWN),
                                noticeType: h
                            }),
                            y.intl.string(y.t['7490vb']),
                            (0, r.jsx)(o.NoS, {
                                noticeType: h,
                                onClick: () => {
                                    (0, S.uL)(f.Z5c.SETTINGS('account'));
                                },
                                children: y.intl.string(y.t.Vm8akJ)
                            })
                        ]
                    });
                case l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let R = d.Z.getEligibleGuildsForNagActivate();
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(D.L.UNKNOWN),
                                noticeType: h
                            }),
                            y.intl.string(y.t.pJ4hJC),
                            (0, r.jsx)(o.NoS, {
                                noticeType: h,
                                onClick: () => {
                                    i(D.L.PRIMARY), (0, S.uL)(1 === R.length ? f.Z5c.GUILD_SETTINGS(R[0], 'role-subscriptions') : f.Z5c.PICK_GUILD_SETTINGS('role-subscriptions', void 0, 'server-subscriptions-finish-setting-up'));
                                },
                                children: y.intl.string(y.t['74s74O'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_POMELO:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.WARNING,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(D.L.UNKNOWN),
                                noticeType: h
                            }),
                            y.intl.format(y.t.pdYZys, {}),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => (0, O.Z)(m.Kq.NOTICE),
                                noticeType: h,
                                children: y.intl.string(y.t.LhlgY2)
                            })
                        ]
                    });
                case l.z.UU_MIGRATION_NOTICE:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.WARNING,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(D.L.UNKNOWN),
                                noticeType: h
                            }),
                            y.intl.format(y.t.zT1hgo, { date: (0, I.IE)(M) }),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => (0, O.Z)(m.Kq.NOTICE),
                                noticeType: h,
                                children: y.intl.string(y.t.LhlgY2)
                            })
                        ]
                    });
                case l.z.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(D.L.UNKNOWN),
                                noticeType: h
                            }),
                            y.intl.string(y.t['O9GI+v']),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => {
                                    (0, _.Z)({
                                        subscriptionTier: g.Si.TIER_2,
                                        analyticsLocations: [u.Z.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: f.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => i(D.L.UNKNOWN)
                                    });
                                },
                                noticeType: h,
                                children: y.intl.string(y.t.Zi69Dw)
                            })
                        ]
                    });
            }
        }
    });
};
