n.d(t, { A: () => h });
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
    O = n(303172),
    I = n(463230),
    T = n(246965),
    p = n(703656),
    S = n(914010),
    N = n(594174),
    A = n(933429),
    f = n(395361),
    m = n(626135),
    R = n(243778),
    g = n(921944),
    P = n(981631),
    C = n(801461),
    y = n(474936),
    b = n(388032),
    D = n(131715);
let h = (e) => {
    let { dismissibleContent: t, noticeType: h } = e,
        U = (0, i.e7)([A.ZP], () => A.ZP.getNotice()),
        M = (0, i.e7)([N.default], () => N.default.getCurrentUser()),
        v = (0, i.e7)([S.Z], () => S.Z.getGuildId());
    return (0, r.jsx)(R.ZP, {
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
                                noticeType: h
                            }),
                            b.intl.string(b.t['+xn1o6']),
                            (0, r.jsx)('i', { className: D.iconApple }),
                            (0, r.jsx)('i', { className: D.iconAndroid }),
                            (0, r.jsx)('i', { className: D.iconWindows }),
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
                                noticeType: h
                            }),
                            (0, r.jsx)(f.Z, { className: D.platformIcon }),
                            b.intl.string(b.t['5NUVHB']),
                            (0, r.jsx)(o.NoS, {
                                onClick: () =>
                                    (0, d.Z)({
                                        platformType: P.ABu.SPOTIFY,
                                        location: 'Notice Bar'
                                    }),
                                noticeType: h,
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
                                className: D.platformIcon,
                                src: s.Z.get(P.ABu.PLAYSTATION).icon.whiteSVG
                            }),
                            b.intl.string(b.t.WHWgoa),
                            (0, r.jsx)(o.EyT, {
                                onClick: () =>
                                    (0, d.Z)({
                                        platformType: P.ABu.PLAYSTATION,
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
                                noticeType: h
                            }),
                            b.intl.string(b.t.B2hnhY),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => c.Z.open(P.oAB.ACCOUNT),
                                noticeType: h,
                                children: b.intl.string(b.t['50KYxs'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)('span', { className: D.premiumLogo }),
                            (0, r.jsx)('span', {
                                className: D.premiumText,
                                children: b.intl.string(b.t['+urf7+'])
                            }),
                            (0, r.jsx)(o.NoS, {
                                className: D.premiumAction,
                                noticeType: h,
                                onClick: () => {
                                    (m.default.track(P.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: P.jXE.NOTIFICATION_BAR,
                                        location_object: P.qAy.BUTTON_CTA
                                    }),
                                        c.Z.open(P.oAB.PREMIUM));
                                },
                                children: b.intl.string(b.t['8JC5e3'])
                            }),
                            (0, r.jsx)(o.RyX, {
                                onClick: () => {
                                    (i(g.L.UNKNOWN), (0, a.mB)(P.xW$.PREMIUM_PROMO_DISMISSED, !0));
                                },
                                noticeType: h
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, r.jsx)(T.Z, {
                        dismissCurrentNotice: () => i(g.L.UNKNOWN),
                        subscriptionTier: y.Si.TIER_2
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, r.jsx)(T.Z, {
                        dismissCurrentNotice: () => i(g.L.UNKNOWN),
                        subscriptionTier: y.Si.TIER_0
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                noticeType: h,
                                onClick: () => i(g.L.UNKNOWN)
                            }),
                            b.intl.string(b.t['0KFB2N']),
                            (0, r.jsx)(o.NoS, {
                                noticeType: h,
                                onClick: () => {
                                    (i(g.L.UNKNOWN), c.Z.open(P.oAB.PREMIUM));
                                },
                                children: b.intl.string(b.t.pyYSiI)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_LOCALIZED_PRICING:
                    return (0, r.jsx)(I.Z, {
                        notice: U,
                        noticeType: h,
                        dismissCurrentNotice: () => i(g.L.UNKNOWN)
                    });
                case l.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.DANGER,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(g.L.UNKNOWN),
                                noticeType: h
                            }),
                            b.intl.string(b.t['7490vb']),
                            (0, r.jsx)(o.NoS, {
                                noticeType: h,
                                onClick: () => {
                                    (0, p.uL)(P.Z5c.SETTINGS('account'));
                                },
                                children: b.intl.string(b.t.Vm8akJ)
                            })
                        ]
                    });
                case l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let S = _.Z.getEligibleGuildsForNagActivate();
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(g.L.UNKNOWN),
                                noticeType: h
                            }),
                            b.intl.string(b.t.pJ4hJC),
                            (0, r.jsx)(o.NoS, {
                                noticeType: h,
                                onClick: () => {
                                    (i(g.L.PRIMARY), (0, p.uL)(1 === S.length ? P.Z5c.GUILD_SETTINGS(S[0], 'role-subscriptions') : P.Z5c.PICK_GUILD_SETTINGS('role-subscriptions', void 0, 'server-subscriptions-finish-setting-up')));
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
                                noticeType: h
                            }),
                            b.intl.format(b.t.pdYZys, {}),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => (0, O.Z)(C.Kq.NOTICE),
                                noticeType: h,
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
                                noticeType: h
                            }),
                            b.intl.string(b.t['O9GI+v']),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => {
                                    (0, E.Z)({
                                        subscriptionTier: y.Si.TIER_2,
                                        analyticsLocations: [u.Z.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: P.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => i(g.L.UNKNOWN)
                                    });
                                },
                                noticeType: h,
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
                                noticeType: P.kVF.REPORT_TO_MOD_SURVEY
                            }),
                            b.intl.string(b.t['Aa+l7e']),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => {
                                    (window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_5uP0NWTpoXsYSUu?user_id='.concat(null == M ? void 0 : M.id, '&guild_id=').concat(v), '_blank'), i(g.L.TAKE_ACTION));
                                },
                                noticeType: P.kVF.REPORT_TO_MOD_SURVEY,
                                children: b.intl.string(b.t['iT+wQ0'])
                            })
                        ]
                    });
            }
        }
    });
};
