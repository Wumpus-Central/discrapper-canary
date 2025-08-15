n.d(t, { A: () => y });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(704215),
    a = n(481060),
    o = n(232567),
    c = n(230711),
    s = n(726542),
    u = n(100527),
    d = n(231757),
    _ = n(674525),
    E = n(963249),
    I = n(303172),
    T = n(246965),
    O = n(703656),
    p = n(914010),
    N = n(594174),
    f = n(395361),
    S = n(626135),
    m = n(243778),
    R = n(921944),
    A = n(981631),
    g = n(801461),
    P = n(474936),
    C = n(388032),
    D = n(50953);
let y = (e) => {
    let { dismissibleContent: t, noticeType: y } = e,
        h = (0, i.e7)([N.default], () => N.default.getCurrentUser()),
        b = (0, i.e7)([p.Z], () => p.Z.getGuildId());
    return (0, r.jsx)(m.ZP, {
        contentTypes: [t],
        groupName: R.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: i } = e;
            switch (t) {
                case l.z.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(R.L.UNKNOWN),
                                noticeType: y,
                            }),
                            C.intl.string(C.t["+xn1o6"]),
                            (0, r.jsx)("i", { className: D.iconApple }),
                            (0, r.jsx)("i", { className: D.iconAndroid }),
                            (0, r.jsx)("i", { className: D.iconWindows }),
                            (0, r.jsx)(a.NoS, {
                                noticeType: y,
                                onClick: () => {
                                    (0, a.ZDy)(async () => {
                                        let { default: e } = await Promise.all([n.e("32996"), n.e("74023")]).then(
                                            n.bind(n, 431583),
                                        );
                                        return (t) =>
                                            (0, r.jsx)(
                                                e,
                                                (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            r = Object.keys(n);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (r = r.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e)
                                                                        .enumerable;
                                                                }),
                                                            )),
                                                            r.forEach(function (t) {
                                                                var r;
                                                                (r = n[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: r,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0,
                                                                          })
                                                                        : (e[t] = r);
                                                            });
                                                    }
                                                    return e;
                                                })({ source: "Top Bar Nag" }, t),
                                            );
                                    });
                                },
                                children: C.intl.string(C.t["1WjMbG"]),
                            }),
                        ],
                    });
                case l.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.SPOTIFY,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(R.L.UNKNOWN),
                                noticeType: y,
                            }),
                            (0, r.jsx)(f.Z, { className: D.platformIcon }),
                            C.intl.string(C.t["5NUVHB"]),
                            (0, r.jsx)(a.NoS, {
                                onClick: () =>
                                    (0, d.Z)({
                                        platformType: A.ABu.SPOTIFY,
                                        location: "Notice Bar",
                                    }),
                                noticeType: y,
                                children: C.intl.string(C.t.S0W8Z2),
                            }),
                        ],
                    });
                case l.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.PLAYSTATION,
                        children: [
                            (0, r.jsx)(a.RyX, { onClick: () => i(R.L.UNKNOWN) }),
                            (0, r.jsx)("img", {
                                alt: "",
                                className: D.platformIcon,
                                src: s.Z.get(A.ABu.PLAYSTATION).icon.whiteSVG,
                            }),
                            C.intl.string(C.t.WHWgoa),
                            (0, r.jsx)(a.EyT, {
                                onClick: () =>
                                    (0, d.Z)({
                                        platformType: A.ABu.PLAYSTATION,
                                        location: "Notice Bar",
                                    }),
                                children: C.intl.string(C.t.S0W8Z2),
                            }),
                        ],
                    });
                case l.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(R.L.UNKNOWN),
                                noticeType: y,
                            }),
                            C.intl.string(C.t.B2hnhY),
                            (0, r.jsx)(a.NoS, {
                                onClick: () => c.Z.open(A.oAB.ACCOUNT),
                                noticeType: y,
                                children: C.intl.string(C.t["50KYxs"]),
                            }),
                        ],
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)("span", { className: D.premiumLogo }),
                            (0, r.jsx)("span", {
                                className: D.premiumText,
                                children: C.intl.string(C.t["+urf7+"]),
                            }),
                            (0, r.jsx)(a.NoS, {
                                className: D.premiumAction,
                                noticeType: y,
                                onClick: () => {
                                    S.default.track(A.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: A.jXE.NOTIFICATION_BAR,
                                        location_object: A.qAy.BUTTON_CTA,
                                    }),
                                        c.Z.open(A.oAB.PREMIUM);
                                },
                                children: C.intl.string(C.t["8JC5e3"]),
                            }),
                            (0, r.jsx)(a.RyX, {
                                onClick: () => {
                                    i(R.L.UNKNOWN), (0, o.mB)(A.xW$.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: y,
                            }),
                        ],
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, r.jsx)(T.Z, {
                        dismissCurrentNotice: () => i(R.L.UNKNOWN),
                        subscriptionTier: P.Si.TIER_2,
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, r.jsx)(T.Z, {
                        dismissCurrentNotice: () => i(R.L.UNKNOWN),
                        subscriptionTier: P.Si.TIER_0,
                    });
                case l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                noticeType: y,
                                onClick: () => i(R.L.UNKNOWN),
                            }),
                            C.intl.string(C.t["0KFB2N"]),
                            (0, r.jsx)(a.NoS, {
                                noticeType: y,
                                onClick: () => {
                                    i(R.L.UNKNOWN), c.Z.open(A.oAB.PREMIUM);
                                },
                                children: C.intl.string(C.t.pyYSiI),
                            }),
                        ],
                    });
                case l.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.DANGER,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(R.L.UNKNOWN),
                                noticeType: y,
                            }),
                            C.intl.string(C.t["7490vb"]),
                            (0, r.jsx)(a.NoS, {
                                noticeType: y,
                                onClick: () => {
                                    (0, O.uL)(A.Z5c.SETTINGS("account"));
                                },
                                children: C.intl.string(C.t.Vm8akJ),
                            }),
                        ],
                    });
                case l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let p = _.Z.getEligibleGuildsForNagActivate();
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(R.L.UNKNOWN),
                                noticeType: y,
                            }),
                            C.intl.string(C.t.pJ4hJC),
                            (0, r.jsx)(a.NoS, {
                                noticeType: y,
                                onClick: () => {
                                    i(R.L.PRIMARY),
                                        (0, O.uL)(
                                            1 === p.length
                                                ? A.Z5c.GUILD_SETTINGS(p[0], "role-subscriptions")
                                                : A.Z5c.PICK_GUILD_SETTINGS(
                                                      "role-subscriptions",
                                                      void 0,
                                                      "server-subscriptions-finish-setting-up",
                                                  ),
                                        );
                                },
                                children: C.intl.string(C.t["74s74O"]),
                            }),
                        ],
                    });
                case l.z.NAGBAR_NOTICE_POMELO:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.WARNING,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(R.L.UNKNOWN),
                                noticeType: y,
                            }),
                            C.intl.format(C.t.pdYZys, {}),
                            (0, r.jsx)(a.NoS, {
                                onClick: () => (0, I.Z)(g.Kq.NOTICE),
                                noticeType: y,
                                children: C.intl.string(C.t.LhlgY2),
                            }),
                        ],
                    });
                case l.z.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(R.L.UNKNOWN),
                                noticeType: y,
                            }),
                            C.intl.string(C.t["O9GI+v"]),
                            (0, r.jsx)(a.NoS, {
                                onClick: () => {
                                    (0, E.Z)({
                                        subscriptionTier: P.Si.TIER_2,
                                        analyticsLocations: [u.Z.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: A.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => i(R.L.UNKNOWN),
                                    });
                                },
                                noticeType: y,
                                children: C.intl.string(C.t.Zi69Dw),
                            }),
                        ],
                    });
                case l.z.REPORT_TO_MOD_SURVEY_NOTICE:
                    return (0, r.jsxs)(a.qXd, {
                        color: a.DM8.BRAND,
                        children: [
                            (0, r.jsx)(a.RyX, {
                                onClick: () => i(R.L.USER_DISMISS),
                                noticeType: A.kVF.REPORT_TO_MOD_SURVEY,
                            }),
                            C.intl.string(C.t["Aa+l7e"]),
                            (0, r.jsx)(a.NoS, {
                                onClick: () => {
                                    window.open(
                                        "https://discord.sjc1.qualtrics.com/jfe/form/SV_5uP0NWTpoXsYSUu?user_id="
                                            .concat(null == h ? void 0 : h.id, "&guild_id=")
                                            .concat(b),
                                        "_blank",
                                    ),
                                        i(R.L.TAKE_ACTION);
                                },
                                noticeType: A.kVF.REPORT_TO_MOD_SURVEY,
                                children: C.intl.string(C.t["iT+wQ0"]),
                            }),
                        ],
                    });
            }
        },
    });
};
