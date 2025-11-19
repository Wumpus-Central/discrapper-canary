n.d(t, { A: () => L });
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
    _ = n(303172),
    p = n(246965),
    h = n(703656),
    m = n(313789),
    g = n(518596),
    E = n(914010),
    b = n(594174),
    y = n(395361),
    O = n(626135),
    v = n(243778),
    I = n(921944),
    T = n(981631),
    S = n(801461),
    A = n(474936),
    C = n(388032),
    N = n(655227);
function R(e, t, n) {
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
function P(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let L = (e) => {
    let { dismissibleContent: t, noticeType: R } = e,
        D = (0, i.e7)([b.default], () => b.default.getCurrentUser()),
        L = (0, i.e7)([E.Z], () => E.Z.getGuildId());
    return (0, r.jsx)(v.ZP, {
        contentTypes: [t],
        groupName: I.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: i } = e;
            switch (t) {
                case a.z.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.DEFAULT,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(I.L.UNKNOWN),
                                noticeType: R,
                            }),
                            C.intl.string(C.t["+xn1o5"]),
                            (0, r.jsx)("i", { className: N.iconApple }),
                            (0, r.jsx)("i", { className: N.iconAndroid }),
                            (0, r.jsx)("i", { className: N.iconWindows }),
                            (0, r.jsx)(o.NoS, {
                                noticeType: R,
                                onClick: () => {
                                    (0, o.ZDy)(async () => {
                                        let { default: e } = await Promise.all([n.e("32996"), n.e("74023")]).then(
                                            n.bind(n, 431583),
                                        );
                                        return (t) => (0, r.jsx)(e, P({ source: "Top Bar Nag" }, t));
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
                                onClick: () => i(I.L.UNKNOWN),
                                noticeType: R,
                            }),
                            (0, r.jsx)(y.Z, { className: N.platformIcon }),
                            C.intl.string(C.t["5NUVHH"]),
                            (0, r.jsx)(o.NoS, {
                                onClick: () =>
                                    (0, u.Z)({
                                        platformType: T.ABu.SPOTIFY,
                                        location: "Notice Bar",
                                    }),
                                noticeType: R,
                                children: C.intl.string(C.t.S0W8Z5),
                            }),
                        ],
                    });
                case a.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.PLAYSTATION,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                noticeType: R,
                                onClick: () => i(I.L.UNKNOWN),
                            }),
                            (0, r.jsx)("img", {
                                alt: "",
                                className: N.platformIcon,
                                src: l.Z.get(T.ABu.PLAYSTATION).icon.whiteSVG,
                            }),
                            C.intl.string(C.t.WHWgoY),
                            (0, r.jsx)(o.EyT, {
                                onClick: () =>
                                    (0, u.Z)({
                                        platformType: T.ABu.PLAYSTATION,
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
                                onClick: () => i(I.L.USER_DISMISS),
                                noticeType: R,
                            }),
                            C.intl.string(C.t["3qKN/h"]),
                            (0, r.jsx)(o.NoS, {
                                onClick: async () => {
                                    i(I.L.TAKE_ACTION);
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
                                                    w(P({}, n), {
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
                                noticeType: R,
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
                                noticeType: R,
                                onClick: () => {
                                    O.default.track(T.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: T.jXE.NOTIFICATION_BAR,
                                        location_object: T.qAy.BUTTON_CTA,
                                    }),
                                        (0, g.openUserSettings)(m.n.NITRO_PANEL, { section: T.oAB.PREMIUM });
                                },
                                children: C.intl.string(C.t["8JC5e/"]),
                            }),
                            (0, r.jsx)(o.RyX, {
                                onClick: () => {
                                    i(I.L.UNKNOWN), (0, s.mB)(T.xW$.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: R,
                            }),
                        ],
                    });
                case a.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, r.jsx)(p.Z, {
                        dismissCurrentNotice: () => i(I.L.UNKNOWN),
                        subscriptionTier: A.Si.TIER_2,
                    });
                case a.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, r.jsx)(p.Z, {
                        dismissCurrentNotice: () => i(I.L.UNKNOWN),
                        subscriptionTier: A.Si.TIER_0,
                    });
                case a.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                noticeType: R,
                                onClick: () => i(I.L.UNKNOWN),
                            }),
                            C.intl.string(C.t["0KFB2B"]),
                            (0, r.jsx)(o.NoS, {
                                noticeType: R,
                                onClick: () => {
                                    i(I.L.UNKNOWN),
                                        (0, g.openUserSettings)(m.n.NITRO_PANEL, { section: T.oAB.PREMIUM });
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
                                onClick: () => i(I.L.UNKNOWN),
                                noticeType: R,
                            }),
                            C.intl.string(C.t["7490vQ"]),
                            (0, r.jsx)(o.NoS, {
                                noticeType: R,
                                onClick: () => {
                                    (0, h.uL)(T.Z5c.SETTINGS("account"));
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
                                onClick: () => i(I.L.UNKNOWN),
                                noticeType: R,
                            }),
                            C.intl.string(C.t.pJ4hJE),
                            (0, r.jsx)(o.NoS, {
                                noticeType: R,
                                onClick: () => {
                                    i(I.L.PRIMARY),
                                        (0, h.uL)(
                                            1 === E.length
                                                ? T.Z5c.GUILD_SETTINGS(E[0], "role-subscriptions")
                                                : T.Z5c.PICK_GUILD_SETTINGS(
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
                                onClick: () => i(I.L.UNKNOWN),
                                noticeType: R,
                            }),
                            C.intl.format(C.t.pdYZyg, {}),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => (0, _.Z)(S.Kq.NOTICE),
                                noticeType: R,
                                children: C.intl.string(C.t.LhlgY9),
                            }),
                        ],
                    });
                case a.z.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(I.L.UNKNOWN),
                                noticeType: R,
                            }),
                            C.intl.string(C.t["O9GI+k"]),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => {
                                    (0, f.Z)({
                                        subscriptionTier: A.Si.TIER_2,
                                        analyticsLocations: [c.Z.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: T.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => i(I.L.UNKNOWN),
                                    });
                                },
                                noticeType: R,
                                children: C.intl.string(C.t.Zi69D4),
                            }),
                        ],
                    });
                case a.z.REPORT_TO_MOD_EXIT_SURVEY_NOTICE:
                    return (0, r.jsxs)(o.qXd, {
                        color: o.DM8.BRAND,
                        children: [
                            (0, r.jsx)(o.RyX, {
                                onClick: () => i(I.L.USER_DISMISS),
                                noticeType: T.kVF.REPORT_TO_MOD_EXIT_SURVEY,
                            }),
                            C.intl.string(C.t.sw22sn),
                            (0, r.jsx)(o.NoS, {
                                onClick: () => {
                                    window.open(
                                        "https://discord.sjc1.qualtrics.com/jfe/form/SV_9zz09xNJ3Qvyb78?user_id="
                                            .concat(null == D ? void 0 : D.id, "&guild_id=")
                                            .concat(L),
                                        "_blank",
                                    ),
                                        i(I.L.TAKE_ACTION);
                                },
                                noticeType: T.kVF.REPORT_TO_MOD_EXIT_SURVEY,
                                children: C.intl.string(C.t.rulMOX),
                            }),
                        ],
                    });
            }
        },
    });
};
