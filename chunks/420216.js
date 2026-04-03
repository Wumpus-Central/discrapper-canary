n.d(t, { r: () => y });
var i = n(627968);
n(64700);
var l = n(554146),
    s = n(397927),
    a = n(803306),
    r = n(573648),
    o = n(975807),
    d = n(793574),
    c = n(882997),
    u = n(662427),
    h = n(532794),
    A = n(745299),
    _ = n(976860),
    m = n(780964),
    g = n(718446),
    p = n(858897),
    f = n(879945),
    x = n(954571),
    E = n(379848),
    I = n(49999),
    C = n(652215),
    N = n(788868),
    T = n(355097),
    S = n(985018),
    b = n(381703);
let y = (e) => {
    let { dismissibleContent: t, noticeType: y } = e;
    return (0, i.jsx)(E.Ay, {
        contentTypes: [t],
        groupName: I.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: E } = e;
            switch (t) {
                case l.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(s.PMB, { onClick: () => E(I.i.UNKNOWN), noticeType: y }),
                            S.intl.string(S.t["+xn1o5"]),
                            (0, i.jsx)("i", { className: b.c9 }),
                            (0, i.jsx)("i", { className: b.Vz }),
                            (0, i.jsx)("i", { className: b.p0 }),
                            (0, i.jsx)(s.Z_L, {
                                noticeType: y,
                                onClick: () => {
                                    (0, s.mMO)(async () => {
                                        let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                            n.bind(n, 987482),
                                        );
                                        return (t) => (0, i.jsx)(e, { source: "Top Bar Nag", ...t });
                                    });
                                },
                                children: S.intl.string(S.t["1WjMbC"]),
                            }),
                        ],
                    });
                case l.M.NAGBAR_QUEST_APP_UPSELL:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(s.PMB, { onClick: () => E(I.i.UNKNOWN), noticeType: y }),
                            (0, i.jsx)("i", { className: b.TN }),
                            S.intl.string(S.t.lgwX26),
                            (0, i.jsx)(s.Z_L, {
                                noticeType: y,
                                onClick: () => {
                                    (0, o.A)(C.AMi.META_QUEST), E(I.i.TAKE_ACTION);
                                },
                                children: S.intl.string(S.t["1WjMbC"]),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.SPOTIFY,
                        children: [
                            (0, i.jsx)(s.PMB, { onClick: () => E(I.i.UNKNOWN), noticeType: y }),
                            (0, i.jsx)(f.A, { className: b.tV }),
                            S.intl.string(S.t["5NUVHH"]),
                            (0, i.jsx)(s.Z_L, {
                                onClick: () => (0, c.A)({ platformType: C.fg2.SPOTIFY, location: "Notice Bar" }),
                                noticeType: y,
                                children: S.intl.string(S.t.S0W8Z5),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.PLAYSTATION,
                        children: [
                            (0, i.jsx)(s.PMB, { noticeType: y, onClick: () => E(I.i.UNKNOWN) }),
                            (0, i.jsx)("img", {
                                alt: "",
                                className: b.tV,
                                src: r.A.get(C.fg2.PLAYSTATION).icon.whiteSVG,
                            }),
                            S.intl.string(S.t.WHWgoY),
                            (0, i.jsx)(s.zr9, {
                                onClick: () => (0, c.A)({ platformType: C.fg2.PLAYSTATION, location: "Notice Bar" }),
                                children: S.intl.string(S.t.S0W8Z5),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(s.PMB, { onClick: () => E(I.i.USER_DISMISS), noticeType: y }),
                            S.intl.string(S.t["3qKN/h"]),
                            (0, i.jsx)(s.Z_L, {
                                onClick: async () => {
                                    E(I.i.TAKE_ACTION);
                                    try {
                                        let { startRegisterWebAuthnCredential: e } = await Promise.resolve().then(
                                                n.bind(n, 917136),
                                            ),
                                            { ticket: t, challenge: l } = await e();
                                        (0, s.mMO)(async () => {
                                            let { RegisterWebAuthnCredentialModal: e } = await Promise.all([
                                                n.e("44667"),
                                                n.e("35510"),
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
                                        (0, s.showToast)(
                                            (0, s.createToast)(S.intl.string(S.t.xSCvBf), s.ToastType.FAILURE),
                                        );
                                    }
                                },
                                noticeType: y,
                                children: S.intl.string(S.t["ff/XXy"]),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)("span", { className: b.lK }),
                            (0, i.jsx)("span", { className: b.$t, children: S.intl.string(S.t["+urf75"]) }),
                            (0, i.jsx)(s.Z_L, {
                                className: b.CO,
                                noticeType: y,
                                onClick: () => {
                                    x.default.track(C.HAw.PREMIUM_PROMOTION_OPENED, {
                                        location_section: C.JJy.NOTIFICATION_BAR,
                                        location_object: C.ZSU.BUTTON_CTA,
                                    }),
                                        (0, p.openUserSettings)(m.X.NITRO_PANEL);
                                },
                                children: S.intl.string(S.t["8JC5e/"]),
                            }),
                            (0, i.jsx)(s.PMB, {
                                onClick: () => {
                                    E(I.i.UNKNOWN), (0, a.lA)(C.nhx.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: y,
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(A.A, {
                        dismissCurrentNotice: () => E(I.i.UNKNOWN),
                        subscriptionTier: N.pe.TIER_2,
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(A.A, {
                        dismissCurrentNotice: () => E(I.i.UNKNOWN),
                        subscriptionTier: N.pe.TIER_0,
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(s.PMB, { noticeType: y, onClick: () => E(I.i.UNKNOWN) }),
                            S.intl.string(S.t["0KFB2B"]),
                            (0, i.jsx)(s.Z_L, {
                                noticeType: y,
                                onClick: () => {
                                    E(I.i.UNKNOWN), (0, p.openUserSettings)(m.X.NITRO_PANEL);
                                },
                                children: S.intl.string(S.t.pyYSiO),
                            }),
                        ],
                    });
                case l.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.DANGER,
                        children: [
                            (0, i.jsx)(s.PMB, { onClick: () => E(I.i.UNKNOWN), noticeType: y }),
                            S.intl.string(S.t["7490vQ"]),
                            (0, i.jsx)(s.Z_L, {
                                noticeType: y,
                                onClick: () => {
                                    (0, _.pX)((0, g.settingsPathToRoute)(T.od.ACCOUNT));
                                },
                                children: S.intl.string(S.t.Vm8akB),
                            }),
                        ],
                    });
                case l.M.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let v = u.A.getEligibleGuildsForNagActivate();
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(s.PMB, { onClick: () => E(I.i.UNKNOWN), noticeType: y }),
                            S.intl.string(S.t.pJ4hJE),
                            (0, i.jsx)(s.Z_L, {
                                noticeType: y,
                                onClick: () => {
                                    E(I.i.PRIMARY),
                                        (0, _.pX)(
                                            1 === v.length
                                                ? C.BVt.GUILD_SETTINGS(v[0], "role-subscriptions")
                                                : C.BVt.PICK_GUILD_SETTINGS(
                                                      "role-subscriptions",
                                                      void 0,
                                                      "server-subscriptions-finish-setting-up",
                                                  ),
                                        );
                                },
                                children: S.intl.string(S.t["74s74F"]),
                            }),
                        ],
                    });
                case l.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(s.PMB, { onClick: () => E(I.i.UNKNOWN), noticeType: y }),
                            S.intl.string(S.t["O9GI+k"]),
                            (0, i.jsx)(s.Z_L, {
                                onClick: () => {
                                    (0, h.A)({
                                        subscriptionTier: N.pe.TIER_2,
                                        analyticsLocations: [d.A.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: C.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => E(I.i.UNKNOWN),
                                    });
                                },
                                noticeType: y,
                                children: S.intl.string(S.t.Zi69D4),
                            }),
                        ],
                    });
            }
        },
    });
};
