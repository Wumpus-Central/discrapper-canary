"use strict";
n.d(t, { r: () => M });
var i = n(627968);
n(64700);
var r = n(554146),
    l = n(397927),
    s = n(803306),
    a = n(573648),
    o = n(975807),
    E = n(793574),
    c = n(882997),
    _ = n(662427),
    d = n(532794),
    A = n(745299),
    u = n(976860),
    T = n(780964),
    I = n(840065),
    N = n(879945),
    R = n(954571),
    S = n(379848),
    O = n(49999),
    C = n(652215),
    p = n(788868),
    P = n(985018),
    D = n(237082);
let M = (e) => {
    let { dismissibleContent: t, noticeType: M } = e;
    return (0, i.jsx)(S.Ay, {
        contentTypes: [t],
        groupName: O.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: S } = e;
            switch (t) {
                case r.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(l.$Td, {
                        color: l.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(l.PMB, { onClick: () => S(O.i.UNKNOWN), noticeType: M }),
                            P.intl.string(P.t["+xn1o5"]),
                            (0, i.jsx)("i", { className: D.c9 }),
                            (0, i.jsx)("i", { className: D.Vz }),
                            (0, i.jsx)("i", { className: D.p0 }),
                            (0, i.jsx)(l.Z_L, {
                                noticeType: M,
                                onClick: () => {
                                    (0, l.mMO)(async () => {
                                        let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                            n.bind(n, 987482),
                                        );
                                        return (t) => (0, i.jsx)(e, { source: "Top Bar Nag", ...t });
                                    });
                                },
                                children: P.intl.string(P.t["1WjMbC"]),
                            }),
                        ],
                    });
                case r.M.NAGBAR_QUEST_APP_UPSELL:
                    return (0, i.jsxs)(l.$Td, {
                        color: l.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(l.PMB, { onClick: () => S(O.i.UNKNOWN), noticeType: M }),
                            (0, i.jsx)("i", { className: D.TN }),
                            P.intl.string(P.t.lgwX26),
                            (0, i.jsx)(l.Z_L, {
                                noticeType: M,
                                onClick: () => {
                                    (0, o.A)(C.AMi.META_QUEST), S(O.i.TAKE_ACTION);
                                },
                                children: P.intl.string(P.t["1WjMbC"]),
                            }),
                        ],
                    });
                case r.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(l.$Td, {
                        color: l.Hv$.SPOTIFY,
                        children: [
                            (0, i.jsx)(l.PMB, { onClick: () => S(O.i.UNKNOWN), noticeType: M }),
                            (0, i.jsx)(N.A, { className: D.tV }),
                            P.intl.string(P.t["5NUVHH"]),
                            (0, i.jsx)(l.Z_L, {
                                onClick: () => (0, c.A)({ platformType: C.fg2.SPOTIFY, location: "Notice Bar" }),
                                noticeType: M,
                                children: P.intl.string(P.t.S0W8Z5),
                            }),
                        ],
                    });
                case r.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(l.$Td, {
                        color: l.Hv$.PLAYSTATION,
                        children: [
                            (0, i.jsx)(l.PMB, { noticeType: M, onClick: () => S(O.i.UNKNOWN) }),
                            (0, i.jsx)("img", {
                                alt: "",
                                className: D.tV,
                                src: a.A.get(C.fg2.PLAYSTATION).icon.whiteSVG,
                            }),
                            P.intl.string(P.t.WHWgoY),
                            (0, i.jsx)(l.zr9, {
                                onClick: () => (0, c.A)({ platformType: C.fg2.PLAYSTATION, location: "Notice Bar" }),
                                children: P.intl.string(P.t.S0W8Z5),
                            }),
                        ],
                    });
                case r.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(l.$Td, {
                        color: l.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(l.PMB, { onClick: () => S(O.i.USER_DISMISS), noticeType: M }),
                            P.intl.string(P.t["3qKN/h"]),
                            (0, i.jsx)(l.Z_L, {
                                onClick: async () => {
                                    S(O.i.TAKE_ACTION);
                                    try {
                                        let { startRegisterWebAuthnCredential: e } = await Promise.resolve().then(
                                                n.bind(n, 917136),
                                            ),
                                            { ticket: t, challenge: r } = await e();
                                        (0, l.mMO)(async () => {
                                            let { RegisterWebAuthnCredentialModal: e } = await Promise.all([
                                                n.e("44667"),
                                                n.e("89045"),
                                            ]).then(n.bind(n, 359990));
                                            return (n) =>
                                                (0, i.jsx)(e, {
                                                    ...n,
                                                    ticket: t,
                                                    challenge: r,
                                                    showAccountSettingsButton: !0,
                                                });
                                        });
                                    } catch (e) {
                                        (0, l.showToast)(
                                            (0, l.createToast)(P.intl.string(P.t.xSCvBf), l.ToastType.FAILURE),
                                        );
                                    }
                                },
                                noticeType: M,
                                children: P.intl.string(P.t["ff/XXy"]),
                            }),
                        ],
                    });
                case r.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(l.$Td, {
                        color: l.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)("span", { className: D.lK }),
                            (0, i.jsx)("span", { className: D.$t, children: P.intl.string(P.t["+urf75"]) }),
                            (0, i.jsx)(l.Z_L, {
                                className: D.CO,
                                noticeType: M,
                                onClick: () => {
                                    R.default.track(C.HAw.PREMIUM_PROMOTION_OPENED, {
                                        location_section: C.JJy.NOTIFICATION_BAR,
                                        location_object: C.ZSU.BUTTON_CTA,
                                    }),
                                        (0, I.openUserSettings)(T.X.NITRO_PANEL, { section: C.nc_.PREMIUM });
                                },
                                children: P.intl.string(P.t["8JC5e/"]),
                            }),
                            (0, i.jsx)(l.PMB, {
                                onClick: () => {
                                    S(O.i.UNKNOWN), (0, s.lA)(C.nhx.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: M,
                            }),
                        ],
                    });
                case r.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(A.A, {
                        dismissCurrentNotice: () => S(O.i.UNKNOWN),
                        subscriptionTier: p.pe.TIER_2,
                    });
                case r.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(A.A, {
                        dismissCurrentNotice: () => S(O.i.UNKNOWN),
                        subscriptionTier: p.pe.TIER_0,
                    });
                case r.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(l.$Td, {
                        color: l.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(l.PMB, { noticeType: M, onClick: () => S(O.i.UNKNOWN) }),
                            P.intl.string(P.t["0KFB2B"]),
                            (0, i.jsx)(l.Z_L, {
                                noticeType: M,
                                onClick: () => {
                                    S(O.i.UNKNOWN),
                                        (0, I.openUserSettings)(T.X.NITRO_PANEL, { section: C.nc_.PREMIUM });
                                },
                                children: P.intl.string(P.t.pyYSiO),
                            }),
                        ],
                    });
                case r.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(l.$Td, {
                        color: l.Hv$.DANGER,
                        children: [
                            (0, i.jsx)(l.PMB, { onClick: () => S(O.i.UNKNOWN), noticeType: M }),
                            P.intl.string(P.t["7490vQ"]),
                            (0, i.jsx)(l.Z_L, {
                                noticeType: M,
                                onClick: () => {
                                    (0, u.pX)(C.BVt.SETTINGS("account"));
                                },
                                children: P.intl.string(P.t.Vm8akB),
                            }),
                        ],
                    });
                case r.M.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let g = _.A.getEligibleGuildsForNagActivate();
                    return (0, i.jsxs)(l.$Td, {
                        color: l.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(l.PMB, { onClick: () => S(O.i.UNKNOWN), noticeType: M }),
                            P.intl.string(P.t.pJ4hJE),
                            (0, i.jsx)(l.Z_L, {
                                noticeType: M,
                                onClick: () => {
                                    S(O.i.PRIMARY),
                                        (0, u.pX)(
                                            1 === g.length
                                                ? C.BVt.GUILD_SETTINGS(g[0], "role-subscriptions")
                                                : C.BVt.PICK_GUILD_SETTINGS(
                                                      "role-subscriptions",
                                                      void 0,
                                                      "server-subscriptions-finish-setting-up",
                                                  ),
                                        );
                                },
                                children: P.intl.string(P.t["74s74F"]),
                            }),
                        ],
                    });
                case r.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(l.$Td, {
                        color: l.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(l.PMB, { onClick: () => S(O.i.UNKNOWN), noticeType: M }),
                            P.intl.string(P.t["O9GI+k"]),
                            (0, i.jsx)(l.Z_L, {
                                onClick: () => {
                                    (0, d.A)({
                                        subscriptionTier: p.pe.TIER_2,
                                        analyticsLocations: [E.A.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: C.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => S(O.i.UNKNOWN),
                                    });
                                },
                                noticeType: M,
                                children: P.intl.string(P.t.Zi69D4),
                            }),
                        ],
                    });
            }
        },
    });
};
