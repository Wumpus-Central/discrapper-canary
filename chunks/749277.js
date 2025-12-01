n.d(t, { A: () => x });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(704215),
    o = n(481060),
    s = n(232567),
    l = n(726542),
    c = n(100527),
    u = n(231757),
    d = n(674525),
    f = n(963249),
    p = n(303172),
    _ = n(246965),
    m = n(703656),
    h = n(313789),
    g = n(518596),
    E = n(914010),
    b = n(594174),
    y = n(395361),
    O = n(626135),
    v = n(243778),
    S = n(921944),
    I = n(981631),
    T = n(801461),
    A = n(474936),
    C = n(388032),
    N = n(655227);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                P(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = (e) => {
    let { dismissibleContent: t, noticeType: P } = e,
        w = (0, i.e7)([b.default], () => b.default.getCurrentUser()),
        x = (0, i.e7)([E.Z], () => E.Z.getGuildId());
    return (0, r.jsx)(v.ZP, {
        contentTypes: [t],
        groupName: S.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: i } = e;
            switch (t) {
                case a.z.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(S.L.UNKNOWN),
                                noticeType: P,
                            }),
                            C.intl.string(C.t["+xn1o5"]),
                            (0, r.jsx)("i", { className: N.iconApple }),
                            (0, r.jsx)("i", { className: N.iconAndroid }),
                            (0, r.jsx)("i", { className: N.iconWindows }),
                            (0, r.jsx)(o.NoS, {
                                noticeType: P,
                                onClick: () => {
                                    (0, o.ZDy)(async () => {
                                        let { default: e } = await Promise.all([n.e("32996"), n.e("74023")]).then(
                                            n.bind(n, 431583),
                                        );
                                        return (t) => (0, r.jsx)(e, R({ source: "Top Bar Nag" }, t));
                                    });
                                },
                                children: C.intl.string(C.t["1WjMbC"]),
                            }),
                        ],
                    });
                case a.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.SPOTIFY,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(S.L.UNKNOWN),
                                noticeType: P,
                            }),
                            (0, r.jsx)(y.Z, { className: N.platformIcon }),
                            C.intl.string(C.t["5NUVHH"]),
                            (0, r.jsx)(o.NoS, {
                                onClick: () =>
                                    (0, u.Z)({
                                        platformType: I.ABu.SPOTIFY,
                                        location: "Notice Bar",
                                    }),
                                noticeType: P,
                                children: C.intl.string(C.t.S0W8Z5),
                            }),
                        ],
                    });
                case a.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.PLAYSTATION,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                noticeType: P,
                                onClick: () => i(S.L.UNKNOWN),
                            }),
                            (0, r.jsx)("img", {
                                alt: "",
                                className: N.platformIcon,
                                src: l.Z.get(I.ABu.PLAYSTATION).icon.whiteSVG,
                            }),
                            C.intl.string(C.t.WHWgoY),
                            (0, r.jsx)(o.EyT, {
                                onClick: () =>
                                    (0, u.Z)({
                                        platformType: I.ABu.PLAYSTATION,
                                        location: "Notice Bar",
                                    }),
                                children: C.intl.string(C.t.S0W8Z5),
                            }),
                        ],
                    });
                case a.z.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(S.L.USER_DISMISS),
                                noticeType: P,
                            }),
                            C.intl.string(C.t["3qKN/h"]),
                            (0, r.jsx)(o.NoS, {
                                onClick: async () => {
                                    i(S.L.TAKE_ACTION);
                                    try {
                                        let { startRegisterWebAuthnCredential: e } = await Promise.resolve().then(
                                                n.bind(n, 365007),
                                            ),
                                            { ticket: t, challenge: i } = await e();
                                        (0, o.ZDy)(async () => {
                                            let { RegisterWebAuthnCredentialModal: e } = await Promise.resolve().then(
                                                n.bind(n, 778764),
                                            );
                                            return (n) =>
                                                (0, r.jsx)(
                                                    e,
                                                    D(R({}, n), {
                                                        ticket: t,
                                                        challenge: i,
                                                        showAccountSettingsButton: !0,
                                                    }),
                                                );
                                        });
                                    } catch (e) {
                                        (0, o.showToast)(
                                            (0, o.createToast)(C.intl.string(C.t.xSCvBf), o.ToastType.FAILURE),
                                        );
                                    }
                                },
                                noticeType: P,
                                children: C.intl.string(C.t["ff/XXy"]),
                            }),
                        ],
                    });
                case a.z.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)("span", { className: N.premiumLogo }),
                            (0, r.jsx)("span", {
                                className: N.premiumText,
                                children: C.intl.string(C.t["+urf75"]),
                            }),
                            (0, r.jsx)(o.NoS, {
                                className: N.premiumAction,
                                noticeType: P,
                                onClick: () => {
                                    O.default.track(I.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: I.jXE.NOTIFICATION_BAR,
                                        location_object: I.qAy.BUTTON_CTA,
                                    }),
                                        (0, g.openUserSettings)(h.n.NITRO_PANEL, { section: I.oAB.PREMIUM });
                                },
                                children: C.intl.string(C.t["8JC5e/"]),
                            }),
                            (0, r.jsx)(o.RyX, {
                                onClick: () => {
                                    i(S.L.UNKNOWN), (0, s.mB)(I.xW$.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: P,
                            }),
                        ],
                    });
                case a.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, r.jsx)(_.Z, {
                        dismissCurrentNotice: () => i(S.L.UNKNOWN),
                        subscriptionTier: A.Si.TIER_2,
                    });
                case a.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, r.jsx)(_.Z, {
                        dismissCurrentNotice: () => i(S.L.UNKNOWN),
                        subscriptionTier: A.Si.TIER_0,
                    });
                case a.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                noticeType: P,
                                onClick: () => i(S.L.UNKNOWN),
                            }),
                            C.intl.string(C.t["0KFB2B"]),
                            (0, r.jsx)(o.NoS, {
                                noticeType: P,
                                onClick: () => {
                                    i(S.L.UNKNOWN),
                                        (0, g.openUserSettings)(h.n.NITRO_PANEL, { section: I.oAB.PREMIUM });
                                },
                                children: C.intl.string(C.t.pyYSiO),
                            }),
                        ],
                    });
                case a.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.DANGER,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(S.L.UNKNOWN),
                                noticeType: P,
                            }),
                            C.intl.string(C.t["7490vQ"]),
                            (0, r.jsx)(o.NoS, {
                                noticeType: P,
                                onClick: () => {
                                    (0, m.uL)(I.Z5c.SETTINGS("account"));
                                },
                                children: C.intl.string(C.t.Vm8akB),
                            }),
                        ],
                    });
                case a.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let E = d.Z.getEligibleGuildsForNagActivate();
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(S.L.UNKNOWN),
                                noticeType: P,
                            }),
                            C.intl.string(C.t.pJ4hJE),
                            (0, r.jsx)(o.NoS, {
                                noticeType: P,
                                onClick: () => {
                                    i(S.L.PRIMARY),
                                        (0, m.uL)(
                                            1 === E.length
                                                ? I.Z5c.GUILD_SETTINGS(E[0], "role-subscriptions")
                                                : I.Z5c.PICK_GUILD_SETTINGS(
                                                      "role-subscriptions",
                                                      void 0,
                                                      "server-subscriptions-finish-setting-up",
                                                  ),
                                        );
                                },
                                children: C.intl.string(C.t["74s74F"]),
                            }),
                        ],
                    });
                case a.z.NAGBAR_NOTICE_POMELO:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.WARNING,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(S.L.UNKNOWN),
                                noticeType: P,
                            }),
                            C.intl.format(C.t.pdYZyg, {}),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => (0, p.Z)(T.Kq.NOTICE),
                                noticeType: P,
                                children: C.intl.string(C.t.LhlgY9),
                            }),
                        ],
                    });
                case a.z.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(S.L.UNKNOWN),
                                noticeType: P,
                            }),
                            C.intl.string(C.t["O9GI+k"]),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => {
                                    (0, f.Z)({
                                        subscriptionTier: A.Si.TIER_2,
                                        analyticsLocations: [c.Z.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: I.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => i(S.L.UNKNOWN),
                                    });
                                },
                                noticeType: P,
                                children: C.intl.string(C.t.Zi69D4),
                            }),
                        ],
                    });
                case a.z.REPORT_TO_MOD_EXIT_SURVEY_NOTICE:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.BRAND,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(S.L.USER_DISMISS),
                                noticeType: I.kVF.REPORT_TO_MOD_EXIT_SURVEY,
                            }),
                            C.intl.string(C.t.sw22sn),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => {
                                    window.open(
                                        "https://discord.sjc1.qualtrics.com/jfe/form/SV_9zz09xNJ3Qvyb78?user_id="
                                            .concat(null == w ? void 0 : w.id, "&guild_id=")
                                            .concat(x),
                                        "_blank",
                                    ),
                                        i(S.L.TAKE_ACTION);
                                },
                                noticeType: I.kVF.REPORT_TO_MOD_EXIT_SURVEY,
                                children: C.intl.string(C.t.rulMOX),
                            }),
                        ],
                    });
            }
        },
    });
};
