n.d(t, { r: () => D });
var i = n(627968);
n(64700);
var l = n(554146),
    r = n(397927),
    a = n(803306),
    s = n(573648),
    o = n(975807),
    c = n(793574),
    _ = n(882997),
    E = n(662427),
    d = n(532794),
    u = n(745299),
    A = n(976860),
    T = n(780964),
    I = n(840065),
    N = n(879945),
    R = n(954571),
    S = n(379848),
    C = n(49999),
    O = n(652215),
    p = n(788868),
    m = n(985018),
    P = n(237082);
let D = (e) => {
    let { dismissibleContent: t, noticeType: D } = e;
    return (0, i.jsx)(S.Ay, {
        contentTypes: [t],
        groupName: C.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: S } = e;
            switch (t) {
                case l.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => S(C.i.UNKNOWN), noticeType: D }),
                            m.intl.string(m.t["+xn1o5"]),
                            (0, i.jsx)("i", { className: P.c9 }),
                            (0, i.jsx)("i", { className: P.Vz }),
                            (0, i.jsx)("i", { className: P.p0 }),
                            (0, i.jsx)(r.Z_L, {
                                noticeType: D,
                                onClick: () => {
                                    (0, r.mMO)(async () => {
                                        let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                            n.bind(n, 987482),
                                        );
                                        return (t) => (0, i.jsx)(e, { source: "Top Bar Nag", ...t });
                                    });
                                },
                                children: m.intl.string(m.t["1WjMbC"]),
                            }),
                        ],
                    });
                case l.M.NAGBAR_QUEST_APP_UPSELL:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => S(C.i.UNKNOWN), noticeType: D }),
                            m.intl.string(m.t.lgwX26),
                            (0, i.jsx)(r.Z_L, {
                                noticeType: D,
                                onClick: () => {
                                    (0, o.A)(O.AMi.META_QUEST), S(C.i.TAKE_ACTION);
                                },
                                children: m.intl.string(m.t["1WjMbC"]),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.SPOTIFY,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => S(C.i.UNKNOWN), noticeType: D }),
                            (0, i.jsx)(N.A, { className: P.tV }),
                            m.intl.string(m.t["5NUVHH"]),
                            (0, i.jsx)(r.Z_L, {
                                onClick: () => (0, _.A)({ platformType: O.fg2.SPOTIFY, location: "Notice Bar" }),
                                noticeType: D,
                                children: m.intl.string(m.t.S0W8Z5),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PLAYSTATION,
                        children: [
                            (0, i.jsx)(r.PMB, { noticeType: D, onClick: () => S(C.i.UNKNOWN) }),
                            (0, i.jsx)("img", {
                                alt: "",
                                className: P.tV,
                                src: s.A.get(O.fg2.PLAYSTATION).icon.whiteSVG,
                            }),
                            m.intl.string(m.t.WHWgoY),
                            (0, i.jsx)(r.zr9, {
                                onClick: () => (0, _.A)({ platformType: O.fg2.PLAYSTATION, location: "Notice Bar" }),
                                children: m.intl.string(m.t.S0W8Z5),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => S(C.i.USER_DISMISS), noticeType: D }),
                            m.intl.string(m.t["3qKN/h"]),
                            (0, i.jsx)(r.Z_L, {
                                onClick: async () => {
                                    S(C.i.TAKE_ACTION);
                                    try {
                                        let { startRegisterWebAuthnCredential: e } = await Promise.resolve().then(
                                                n.bind(n, 917136),
                                            ),
                                            { ticket: t, challenge: l } = await e();
                                        (0, r.mMO)(async () => {
                                            let { RegisterWebAuthnCredentialModal: e } = await Promise.all([
                                                n.e("44667"),
                                                n.e("84673"),
                                            ]).then(n.bind(n, 359990));
                                            return (n) =>
                                                (0, i.jsx)(e, {
                                                    ...n,
                                                    ticket: t,
                                                    challenge: l,
                                                    showAccountSettingsButton: !0,
                                                });
                                        });
                                    } catch (e) {
                                        (0, r.showToast)(
                                            (0, r.createToast)(m.intl.string(m.t.xSCvBf), r.ToastType.FAILURE),
                                        );
                                    }
                                },
                                noticeType: D,
                                children: m.intl.string(m.t["ff/XXy"]),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)("span", { className: P.lK }),
                            (0, i.jsx)("span", { className: P.$t, children: m.intl.string(m.t["+urf75"]) }),
                            (0, i.jsx)(r.Z_L, {
                                className: P.CO,
                                noticeType: D,
                                onClick: () => {
                                    R.default.track(O.HAw.PREMIUM_PROMOTION_OPENED, {
                                        location_section: O.JJy.NOTIFICATION_BAR,
                                        location_object: O.ZSU.BUTTON_CTA,
                                    }),
                                        (0, I.openUserSettings)(T.X.NITRO_PANEL, { section: O.nc_.PREMIUM });
                                },
                                children: m.intl.string(m.t["8JC5e/"]),
                            }),
                            (0, i.jsx)(r.PMB, {
                                onClick: () => {
                                    S(C.i.UNKNOWN), (0, a.lA)(O.nhx.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: D,
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(u.A, {
                        dismissCurrentNotice: () => S(C.i.UNKNOWN),
                        subscriptionTier: p.pe.TIER_2,
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(u.A, {
                        dismissCurrentNotice: () => S(C.i.UNKNOWN),
                        subscriptionTier: p.pe.TIER_0,
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(r.PMB, { noticeType: D, onClick: () => S(C.i.UNKNOWN) }),
                            m.intl.string(m.t["0KFB2B"]),
                            (0, i.jsx)(r.Z_L, {
                                noticeType: D,
                                onClick: () => {
                                    S(C.i.UNKNOWN),
                                        (0, I.openUserSettings)(T.X.NITRO_PANEL, { section: O.nc_.PREMIUM });
                                },
                                children: m.intl.string(m.t.pyYSiO),
                            }),
                        ],
                    });
                case l.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DANGER,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => S(C.i.UNKNOWN), noticeType: D }),
                            m.intl.string(m.t["7490vQ"]),
                            (0, i.jsx)(r.Z_L, {
                                noticeType: D,
                                onClick: () => {
                                    (0, A.pX)(O.BVt.SETTINGS("account"));
                                },
                                children: m.intl.string(m.t.Vm8akB),
                            }),
                        ],
                    });
                case l.M.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let g = E.A.getEligibleGuildsForNagActivate();
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => S(C.i.UNKNOWN), noticeType: D }),
                            m.intl.string(m.t.pJ4hJE),
                            (0, i.jsx)(r.Z_L, {
                                noticeType: D,
                                onClick: () => {
                                    S(C.i.PRIMARY),
                                        (0, A.pX)(
                                            1 === g.length
                                                ? O.BVt.GUILD_SETTINGS(g[0], "role-subscriptions")
                                                : O.BVt.PICK_GUILD_SETTINGS(
                                                      "role-subscriptions",
                                                      void 0,
                                                      "server-subscriptions-finish-setting-up",
                                                  ),
                                        );
                                },
                                children: m.intl.string(m.t["74s74F"]),
                            }),
                        ],
                    });
                case l.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => S(C.i.UNKNOWN), noticeType: D }),
                            m.intl.string(m.t["O9GI+k"]),
                            (0, i.jsx)(r.Z_L, {
                                onClick: () => {
                                    (0, d.A)({
                                        subscriptionTier: p.pe.TIER_2,
                                        analyticsLocations: [c.A.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: O.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => S(C.i.UNKNOWN),
                                    });
                                },
                                noticeType: D,
                                children: m.intl.string(m.t.Zi69D4),
                            }),
                        ],
                    });
            }
        },
    });
};
