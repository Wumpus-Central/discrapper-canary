n.d(t, { A: () => k });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(704215),
    a = n(481060),
    s = n(232567),
    o = n(230711),
    c = n(726542),
    u = n(100527),
    E = n(231757),
    d = n(674525),
    _ = n(963249),
    I = n(346585),
    T = n(303172),
    N = n(463230),
    A = n(246965),
    S = n(703656),
    R = n(706454),
    C = n(933429),
    O = n(395361),
    P = n(626135),
    D = n(243778),
    m = n(921944),
    p = n(981631),
    h = n(801461),
    U = n(474936),
    M = n(388032),
    g = n(194849);
let k = (e) => {
    let { dismissibleContent: t, noticeType: k } = e,
        Z = (0, l.e7)([C.ZP], () => C.ZP.getNotice()),
        f = (0, l.e7)([R.default], () => R.default.locale);
    return (0, i.jsx)(D.ZP, {
        contentTypes: [t],
        groupName: m.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: l } = e;
            switch (t) {
                case r.z.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(a.qXd, {
                        color: a.DM8.DEFAULT,
                        children: [
                            (0, i.jsx)(a.RyX, {
                                onClick: () => l(m.L.UNKNOWN),
                                noticeType: k
                            }),
                            M.intl.string(M.t['+xn1o6']),
                            (0, i.jsx)('i', { className: g.iconApple }),
                            (0, i.jsx)('i', { className: g.iconAndroid }),
                            (0, i.jsx)('i', { className: g.iconWindows }),
                            (0, i.jsx)(a.NoS, {
                                noticeType: k,
                                onClick: () => {
                                    (0, a.ZDy)(async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                                        return (t) =>
                                            (0, i.jsx)(e, {
                                                source: 'Top Bar Nag',
                                                ...t
                                            });
                                    });
                                },
                                children: M.intl.string(M.t['1WjMbG'])
                            })
                        ]
                    });
                case r.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(a.qXd, {
                        color: a.DM8.SPOTIFY,
                        children: [
                            (0, i.jsx)(a.RyX, {
                                onClick: () => l(m.L.UNKNOWN),
                                noticeType: k
                            }),
                            (0, i.jsx)(O.Z, { className: g.platformIcon }),
                            M.intl.string(M.t['5NUVHB']),
                            (0, i.jsx)(a.NoS, {
                                onClick: () =>
                                    (0, E.Z)({
                                        platformType: p.ABu.SPOTIFY,
                                        location: 'Notice Bar'
                                    }),
                                noticeType: k,
                                children: M.intl.string(M.t.S0W8Z2)
                            })
                        ]
                    });
                case r.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(a.qXd, {
                        color: a.DM8.PLAYSTATION,
                        children: [
                            (0, i.jsx)(a.RyX, { onClick: () => l(m.L.UNKNOWN) }),
                            (0, i.jsx)('img', {
                                alt: '',
                                className: g.platformIcon,
                                src: c.Z.get(p.ABu.PLAYSTATION).icon.whiteSVG
                            }),
                            M.intl.string(M.t.WHWgoa),
                            (0, i.jsx)(a.EyT, {
                                onClick: () =>
                                    (0, E.Z)({
                                        platformType: p.ABu.PLAYSTATION,
                                        location: 'Notice Bar'
                                    }),
                                children: M.intl.string(M.t.S0W8Z2)
                            })
                        ]
                    });
                case r.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
                    return (0, i.jsxs)(a.qXd, {
                        color: a.DM8.DEFAULT,
                        children: [
                            (0, i.jsx)(a.RyX, {
                                onClick: () => l(m.L.UNKNOWN),
                                noticeType: k
                            }),
                            M.intl.string(M.t.B2hnhY),
                            (0, i.jsx)(a.NoS, {
                                onClick: () => o.Z.open(p.oAB.ACCOUNT),
                                noticeType: k,
                                children: M.intl.string(M.t['50KYxs'])
                            })
                        ]
                    });
                case r.z.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(a.qXd, {
                        color: a.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)('span', { className: g.premiumLogo }),
                            (0, i.jsx)('span', {
                                className: g.premiumText,
                                children: M.intl.string(M.t['+urf7+'])
                            }),
                            (0, i.jsx)(a.NoS, {
                                className: g.premiumAction,
                                noticeType: k,
                                onClick: () => {
                                    P.default.track(p.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: p.jXE.NOTIFICATION_BAR,
                                        location_object: p.qAy.BUTTON_CTA
                                    }),
                                        o.Z.open(p.oAB.PREMIUM);
                                },
                                children: M.intl.string(M.t['8JC5e3'])
                            }),
                            (0, i.jsx)(a.RyX, {
                                onClick: () => {
                                    l(m.L.UNKNOWN), (0, s.mB)(p.xW$.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: k
                            })
                        ]
                    });
                case r.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(A.Z, {
                        dismissCurrentNotice: () => l(m.L.UNKNOWN),
                        subscriptionTier: U.Si.TIER_2
                    });
                case r.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(A.Z, {
                        dismissCurrentNotice: () => l(m.L.UNKNOWN),
                        subscriptionTier: U.Si.TIER_0
                    });
                case r.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(a.qXd, {
                        color: a.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(a.RyX, {
                                noticeType: k,
                                onClick: () => l(m.L.UNKNOWN)
                            }),
                            M.intl.string(M.t['0KFB2N']),
                            (0, i.jsx)(a.NoS, {
                                noticeType: k,
                                onClick: () => {
                                    l(m.L.UNKNOWN), o.Z.open(p.oAB.PREMIUM);
                                },
                                children: M.intl.string(M.t.pyYSiI)
                            })
                        ]
                    });
                case r.z.NAGBAR_NOTICE_LOCALIZED_PRICING:
                    return (0, i.jsx)(N.Z, {
                        notice: Z,
                        noticeType: k,
                        dismissCurrentNotice: () => l(m.L.UNKNOWN)
                    });
                case r.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(a.qXd, {
                        color: a.DM8.DANGER,
                        children: [
                            (0, i.jsx)(a.RyX, {
                                onClick: () => l(m.L.UNKNOWN),
                                noticeType: k
                            }),
                            M.intl.string(M.t['7490vb']),
                            (0, i.jsx)(a.NoS, {
                                noticeType: k,
                                onClick: () => {
                                    (0, S.uL)(p.Z5c.SETTINGS('account'));
                                },
                                children: M.intl.string(M.t.Vm8akJ)
                            })
                        ]
                    });
                case r.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let R = d.Z.getEligibleGuildsForNagActivate();
                    return (0, i.jsxs)(a.qXd, {
                        color: a.DM8.DEFAULT,
                        children: [
                            (0, i.jsx)(a.RyX, {
                                onClick: () => l(m.L.UNKNOWN),
                                noticeType: k
                            }),
                            M.intl.string(M.t.pJ4hJC),
                            (0, i.jsx)(a.NoS, {
                                noticeType: k,
                                onClick: () => {
                                    l(m.L.PRIMARY), (0, S.uL)(1 === R.length ? p.Z5c.GUILD_SETTINGS(R[0], 'role-subscriptions') : p.Z5c.PICK_GUILD_SETTINGS('role-subscriptions', void 0, 'server-subscriptions-finish-setting-up'));
                                },
                                children: M.intl.string(M.t['74s74O'])
                            })
                        ]
                    });
                case r.z.NAGBAR_NOTICE_POMELO:
                    return (0, i.jsxs)(a.qXd, {
                        color: a.DM8.WARNING,
                        children: [
                            (0, i.jsx)(a.RyX, {
                                onClick: () => l(m.L.UNKNOWN),
                                noticeType: k
                            }),
                            M.intl.format(M.t.pdYZys, {}),
                            (0, i.jsx)(a.NoS, {
                                onClick: () => (0, T.Z)(h.Kq.NOTICE),
                                noticeType: k,
                                children: M.intl.string(M.t.LhlgY2)
                            })
                        ]
                    });
                case r.z.UU_MIGRATION_NOTICE:
                    return (0, i.jsxs)(a.qXd, {
                        color: a.DM8.WARNING,
                        children: [
                            (0, i.jsx)(a.RyX, {
                                onClick: () => l(m.L.UNKNOWN),
                                noticeType: k
                            }),
                            M.intl.format(M.t.zT1hgo, { date: (0, I.IE)(f) }),
                            (0, i.jsx)(a.NoS, {
                                onClick: () => (0, T.Z)(h.Kq.NOTICE),
                                noticeType: k,
                                children: M.intl.string(M.t.LhlgY2)
                            })
                        ]
                    });
                case r.z.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(a.qXd, {
                        color: a.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(a.RyX, {
                                onClick: () => l(m.L.UNKNOWN),
                                noticeType: k
                            }),
                            M.intl.string(M.t['O9GI+v']),
                            (0, i.jsx)(a.NoS, {
                                onClick: () => {
                                    (0, _.Z)({
                                        subscriptionTier: U.Si.TIER_2,
                                        analyticsLocations: [u.Z.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: p.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => l(m.L.UNKNOWN)
                                    });
                                },
                                noticeType: k,
                                children: M.intl.string(M.t.Zi69Dw)
                            })
                        ]
                    });
            }
        }
    });
};
