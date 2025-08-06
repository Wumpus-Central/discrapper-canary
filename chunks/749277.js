n.d(t, { A: () => P });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(704215),
    a = n(481060),
    s = n(232567),
    l = n(230711),
    c = n(726542),
    u = n(100527),
    d = n(231757),
    f = n(674525),
    _ = n(963249),
    p = n(303172),
    h = n(246965),
    m = n(703656),
    g = n(914010),
    E = n(594174),
    b = n(395361),
    y = n(626135),
    O = n(243778),
    v = n(921944),
    I = n(981631),
    T = n(801461),
    S = n(474936),
    A = n(388032),
    N = n(131715);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function R(e) {
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
                C(e, t, n[t]);
            }));
    }
    return e;
}
let P = (e) => {
    let { dismissibleContent: t, noticeType: C } = e,
        P = (0, i.e7)([E.default], () => E.default.getCurrentUser()),
        w = (0, i.e7)([g.Z], () => g.Z.getGuildId());
    return (0, r.jsx)(O.ZP, {
        contentTypes: [t],
        groupName: v.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: i } = e;
            switch (t) {
                case o.z.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(v.L.UNKNOWN),
                                noticeType: C
                            }),
                            A.intl.string(A.t['+xn1o6']),
                            (0, r.jsx)('i', { className: N.iconApple }),
                            (0, r.jsx)('i', { className: N.iconAndroid }),
                            (0, r.jsx)('i', { className: N.iconWindows }),
                            (0, r.jsx)(a.NoS, {
                                noticeType: C,
                                onClick: () => {
                                    (0, a.ZDy)(async () => {
                                        let { default: e } = await n.e('74023').then(n.bind(n, 431583));
                                        return (t) => (0, r.jsx)(e, R({ source: 'Top Bar Nag' }, t));
                                    });
                                },
                                children: A.intl.string(A.t['1WjMbG'])
                            })
                        ]
                    });
                case o.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.SPOTIFY,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(v.L.UNKNOWN),
                                noticeType: C
                            }),
                            (0, r.jsx)(b.Z, { className: N.platformIcon }),
                            A.intl.string(A.t['5NUVHB']),
                            (0, r.jsx)(a.NoS, {
                                onClick: () =>
                                    (0, d.Z)({
                                        platformType: I.ABu.SPOTIFY,
                                        location: 'Notice Bar'
                                    }),
                                noticeType: C,
                                children: A.intl.string(A.t.S0W8Z2)
                            })
                        ]
                    });
                case o.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.PLAYSTATION,
                        children: [
                            (0, r.jsx)(a.RyX, { onClick: () => i(v.L.UNKNOWN) }),
                            (0, r.jsx)('img', {
                                alt: '',
                                className: N.platformIcon,
                                src: c.Z.get(I.ABu.PLAYSTATION).icon.whiteSVG
                            }),
                            A.intl.string(A.t.WHWgoa),
                            (0, r.jsx)(a.EyT, {
                                onClick: () =>
                                    (0, d.Z)({
                                        platformType: I.ABu.PLAYSTATION,
                                        location: 'Notice Bar'
                                    }),
                                children: A.intl.string(A.t.S0W8Z2)
                            })
                        ]
                    });
                case o.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(v.L.UNKNOWN),
                                noticeType: C
                            }),
                            A.intl.string(A.t.B2hnhY),
                            (0, r.jsx)(a.NoS, {
                                onClick: () => l.Z.open(I.oAB.ACCOUNT),
                                noticeType: C,
                                children: A.intl.string(A.t['50KYxs'])
                            })
                        ]
                    });
                case o.z.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)('span', { className: N.premiumLogo }),
                            (0, r.jsx)('span', {
                                className: N.premiumText,
                                children: A.intl.string(A.t['+urf7+'])
                            }),
                            (0, r.jsx)(a.NoS, {
                                className: N.premiumAction,
                                noticeType: C,
                                onClick: () => {
                                    (y.default.track(I.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: I.jXE.NOTIFICATION_BAR,
                                        location_object: I.qAy.BUTTON_CTA
                                    }),
                                        l.Z.open(I.oAB.PREMIUM));
                                },
                                children: A.intl.string(A.t['8JC5e3'])
                            }),
                            (0, r.jsx)(a.RyX, {
                                onClick: () => {
                                    (i(v.L.UNKNOWN), (0, s.mB)(I.xW$.PREMIUM_PROMO_DISMISSED, !0));
                                },
                                noticeType: C
                            })
                        ]
                    });
                case o.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, r.jsx)(h.Z, {
                        dismissCurrentNotice: () => i(v.L.UNKNOWN),
                        subscriptionTier: S.Si.TIER_2
                    });
                case o.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, r.jsx)(h.Z, {
                        dismissCurrentNotice: () => i(v.L.UNKNOWN),
                        subscriptionTier: S.Si.TIER_0
                    });
                case o.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                noticeType: C,
                                onClick: () => i(v.L.UNKNOWN)
                            }),
                            A.intl.string(A.t['0KFB2N']),
                            (0, r.jsx)(a.NoS, {
                                noticeType: C,
                                onClick: () => {
                                    (i(v.L.UNKNOWN), l.Z.open(I.oAB.PREMIUM));
                                },
                                children: A.intl.string(A.t.pyYSiI)
                            })
                        ]
                    });
                case o.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.DANGER,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(v.L.UNKNOWN),
                                noticeType: C
                            }),
                            A.intl.string(A.t['7490vb']),
                            (0, r.jsx)(a.NoS, {
                                noticeType: C,
                                onClick: () => {
                                    (0, m.uL)(I.Z5c.SETTINGS('account'));
                                },
                                children: A.intl.string(A.t.Vm8akJ)
                            })
                        ]
                    });
                case o.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let g = f.Z.getEligibleGuildsForNagActivate();
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(v.L.UNKNOWN),
                                noticeType: C
                            }),
                            A.intl.string(A.t.pJ4hJC),
                            (0, r.jsx)(a.NoS, {
                                noticeType: C,
                                onClick: () => {
                                    (i(v.L.PRIMARY), (0, m.uL)(1 === g.length ? I.Z5c.GUILD_SETTINGS(g[0], 'role-subscriptions') : I.Z5c.PICK_GUILD_SETTINGS('role-subscriptions', void 0, 'server-subscriptions-finish-setting-up')));
                                },
                                children: A.intl.string(A.t['74s74O'])
                            })
                        ]
                    });
                case o.z.NAGBAR_NOTICE_POMELO:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.WARNING,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(v.L.UNKNOWN),
                                noticeType: C
                            }),
                            A.intl.format(A.t.pdYZys, {}),
                            (0, r.jsx)(a.NoS, {
                                onClick: () => (0, p.Z)(T.Kq.NOTICE),
                                noticeType: C,
                                children: A.intl.string(A.t.LhlgY2)
                            })
                        ]
                    });
                case o.z.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(v.L.UNKNOWN),
                                noticeType: C
                            }),
                            A.intl.string(A.t['O9GI+v']),
                            (0, r.jsx)(a.NoS, {
                                onClick: () => {
                                    (0, _.Z)({
                                        subscriptionTier: S.Si.TIER_2,
                                        analyticsLocations: [u.Z.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: I.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => i(v.L.UNKNOWN)
                                    });
                                },
                                noticeType: C,
                                children: A.intl.string(A.t.Zi69Dw)
                            })
                        ]
                    });
                case o.z.REPORT_TO_MOD_SURVEY_NOTICE:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.BRAND,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(v.L.USER_DISMISS),
                                noticeType: I.kVF.REPORT_TO_MOD_SURVEY
                            }),
                            A.intl.string(A.t['Aa+l7e']),
                            (0, r.jsx)(a.NoS, {
                                onClick: () => {
                                    (window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_5uP0NWTpoXsYSUu?user_id='.concat(null == P ? void 0 : P.id, '&guild_id=').concat(w), '_blank'), i(v.L.TAKE_ACTION));
                                },
                                noticeType: I.kVF.REPORT_TO_MOD_SURVEY,
                                children: A.intl.string(A.t['iT+wQ0'])
                            })
                        ]
                    });
            }
        }
    });
};
