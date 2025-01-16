n.d(t, {
    A: function () {
        return Z;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(704215),
    a = n(481060),
    o = n(232567),
    s = n(230711),
    c = n(726542),
    d = n(100527),
    u = n(231757),
    m = n(674525),
    h = n(963249),
    f = n(346585),
    p = n(303172),
    _ = n(463230),
    g = n(246965),
    E = n(703656),
    C = n(706454),
    I = n(933429),
    x = n(395361),
    N = n(626135),
    v = n(243778),
    T = n(921944),
    S = n(981631),
    A = n(801461),
    b = n(474936),
    j = n(388032),
    R = n(230278);
let Z = (e) => {
    let { dismissibleContent: t, noticeType: Z } = e,
        P = (0, r.e7)([I.ZP], () => I.ZP.getNotice()),
        L = (0, r.e7)([C.default], () => C.default.locale);
    return (0, i.jsx)(v.ZP, {
        contentTypes: [t],
        groupName: T.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: r } = e;
            switch (t) {
                case l.z.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(a.Notice, {
                        color: a.NoticeColors.DEFAULT,
                        children: [
                            (0, i.jsx)(a.NoticeCloseButton, {
                                onClick: () => r(T.L.UNKNOWN),
                                noticeType: Z
                            }),
                            j.intl.string(j.t['+xn1o6']),
                            (0, i.jsx)('i', { className: R.iconApple }),
                            (0, i.jsx)('i', { className: R.iconAndroid }),
                            (0, i.jsx)('i', { className: R.iconWindows }),
                            (0, i.jsx)(a.PrimaryCTANoticeButton, {
                                noticeType: Z,
                                onClick: () => {
                                    (0, a.openModalLazy)(async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                                        return (t) =>
                                            (0, i.jsx)(e, {
                                                source: 'Top Bar Nag',
                                                ...t
                                            });
                                    });
                                },
                                children: j.intl.string(j.t['1WjMbG'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(a.Notice, {
                        color: a.NoticeColors.SPOTIFY,
                        children: [
                            (0, i.jsx)(a.NoticeCloseButton, {
                                onClick: () => r(T.L.UNKNOWN),
                                noticeType: Z
                            }),
                            (0, i.jsx)(x.Z, { className: R.platformIcon }),
                            j.intl.string(j.t['5NUVHB']),
                            (0, i.jsx)(a.PrimaryCTANoticeButton, {
                                onClick: () =>
                                    (0, u.Z)({
                                        platformType: S.ABu.SPOTIFY,
                                        location: 'Notice Bar'
                                    }),
                                noticeType: Z,
                                children: j.intl.string(j.t.S0W8Z2)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(a.Notice, {
                        color: a.NoticeColors.PLAYSTATION,
                        children: [
                            (0, i.jsx)(a.NoticeCloseButton, { onClick: () => r(T.L.UNKNOWN) }),
                            (0, i.jsx)('img', {
                                alt: '',
                                className: R.platformIcon,
                                src: c.Z.get(S.ABu.PLAYSTATION).icon.whiteSVG
                            }),
                            j.intl.string(j.t.WHWgoa),
                            (0, i.jsx)(a.NoticeButton, {
                                onClick: () =>
                                    (0, u.Z)({
                                        platformType: S.ABu.PLAYSTATION,
                                        location: 'Notice Bar'
                                    }),
                                children: j.intl.string(j.t.S0W8Z2)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
                    return (0, i.jsxs)(a.Notice, {
                        color: a.NoticeColors.DEFAULT,
                        children: [
                            (0, i.jsx)(a.NoticeCloseButton, {
                                onClick: () => r(T.L.UNKNOWN),
                                noticeType: Z
                            }),
                            j.intl.string(j.t.B2hnhY),
                            (0, i.jsx)(a.PrimaryCTANoticeButton, {
                                onClick: () => s.Z.open(S.oAB.ACCOUNT),
                                noticeType: Z,
                                children: j.intl.string(j.t['50KYxs'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(a.Notice, {
                        color: a.NoticeColors.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)('span', { className: R.premiumLogo }),
                            (0, i.jsx)('span', {
                                className: R.premiumText,
                                children: j.intl.string(j.t['+urf7+'])
                            }),
                            (0, i.jsx)(a.PrimaryCTANoticeButton, {
                                className: R.premiumAction,
                                noticeType: Z,
                                onClick: () => {
                                    N.default.track(S.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: S.jXE.NOTIFICATION_BAR,
                                        location_object: S.qAy.BUTTON_CTA
                                    }),
                                        s.Z.open(S.oAB.PREMIUM);
                                },
                                children: j.intl.string(j.t['8JC5e3'])
                            }),
                            (0, i.jsx)(a.NoticeCloseButton, {
                                onClick: () => {
                                    r(T.L.UNKNOWN), (0, o.mB)(S.xW$.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: Z
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(g.Z, {
                        dismissCurrentNotice: () => r(T.L.UNKNOWN),
                        subscriptionTier: b.Si.TIER_2
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(g.Z, {
                        dismissCurrentNotice: () => r(T.L.UNKNOWN),
                        subscriptionTier: b.Si.TIER_0
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(a.Notice, {
                        color: a.NoticeColors.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(a.NoticeCloseButton, {
                                noticeType: Z,
                                onClick: () => r(T.L.UNKNOWN)
                            }),
                            j.intl.string(j.t['0KFB2N']),
                            (0, i.jsx)(a.PrimaryCTANoticeButton, {
                                noticeType: Z,
                                onClick: () => {
                                    r(T.L.UNKNOWN), s.Z.open(S.oAB.PREMIUM);
                                },
                                children: j.intl.string(j.t.pyYSiI)
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_LOCALIZED_PRICING:
                    return (0, i.jsx)(_.Z, {
                        notice: P,
                        noticeType: Z,
                        dismissCurrentNotice: () => r(T.L.UNKNOWN)
                    });
                case l.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(a.Notice, {
                        color: a.NoticeColors.DANGER,
                        children: [
                            (0, i.jsx)(a.NoticeCloseButton, {
                                onClick: () => r(T.L.UNKNOWN),
                                noticeType: Z
                            }),
                            j.intl.string(j.t['7490vb']),
                            (0, i.jsx)(a.PrimaryCTANoticeButton, {
                                noticeType: Z,
                                onClick: () => {
                                    (0, E.uL)(S.Z5c.SETTINGS('account'));
                                },
                                children: j.intl.string(j.t.Vm8akJ)
                            })
                        ]
                    });
                case l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let C = m.Z.getEligibleGuildsForNagActivate();
                    return (0, i.jsxs)(a.Notice, {
                        color: a.NoticeColors.DEFAULT,
                        children: [
                            (0, i.jsx)(a.NoticeCloseButton, {
                                onClick: () => r(T.L.UNKNOWN),
                                noticeType: Z
                            }),
                            j.intl.string(j.t.pJ4hJC),
                            (0, i.jsx)(a.PrimaryCTANoticeButton, {
                                noticeType: Z,
                                onClick: () => {
                                    r(T.L.PRIMARY), (0, E.uL)(1 === C.length ? S.Z5c.GUILD_SETTINGS(C[0], 'role-subscriptions') : S.Z5c.PICK_GUILD_SETTINGS('role-subscriptions', void 0, 'server-subscriptions-finish-setting-up'));
                                },
                                children: j.intl.string(j.t['74s74O'])
                            })
                        ]
                    });
                case l.z.NAGBAR_NOTICE_POMELO:
                    return (0, i.jsxs)(a.Notice, {
                        color: a.NoticeColors.WARNING,
                        children: [
                            (0, i.jsx)(a.NoticeCloseButton, {
                                onClick: () => r(T.L.UNKNOWN),
                                noticeType: Z
                            }),
                            j.intl.format(j.t.pdYZys, {}),
                            (0, i.jsx)(a.PrimaryCTANoticeButton, {
                                onClick: () => (0, p.Z)(A.Kq.NOTICE),
                                noticeType: Z,
                                children: j.intl.string(j.t.LhlgY2)
                            })
                        ]
                    });
                case l.z.UU_MIGRATION_NOTICE:
                    return (0, i.jsxs)(a.Notice, {
                        color: a.NoticeColors.WARNING,
                        children: [
                            (0, i.jsx)(a.NoticeCloseButton, {
                                onClick: () => r(T.L.UNKNOWN),
                                noticeType: Z
                            }),
                            j.intl.format(j.t.zT1hgo, { date: (0, f.IE)(L) }),
                            (0, i.jsx)(a.PrimaryCTANoticeButton, {
                                onClick: () => (0, p.Z)(A.Kq.NOTICE),
                                noticeType: Z,
                                children: j.intl.string(j.t.LhlgY2)
                            })
                        ]
                    });
                case l.z.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(a.Notice, {
                        color: a.NoticeColors.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(a.NoticeCloseButton, {
                                onClick: () => r(T.L.UNKNOWN),
                                noticeType: Z
                            }),
                            j.intl.string(j.t['O9GI+v']),
                            (0, i.jsx)(a.PrimaryCTANoticeButton, {
                                onClick: () => {
                                    (0, h.Z)({
                                        subscriptionTier: b.Si.TIER_2,
                                        analyticsLocations: [d.Z.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: S.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => r(T.L.UNKNOWN)
                                    });
                                },
                                noticeType: Z,
                                children: j.intl.string(j.t.Zi69Dw)
                            })
                        ]
                    });
            }
        }
    });
};
