n.d(t, { r: () => p });
var i = n(627968);
n(64700);
var l = n(554146),
    r = n(397927),
    s = n(803306),
    a = n(573648),
    o = n(793574),
    E = n(882997),
    _ = n(662427),
    c = n(532794),
    d = n(745299),
    A = n(976860),
    u = n(780964),
    T = n(840065),
    I = n(879945),
    N = n(954571),
    R = n(379848),
    S = n(49999),
    O = n(652215),
    C = n(788868),
    P = n(985018),
    D = n(237082);
let p = (e) => {
    let { dismissibleContent: t, noticeType: p } = e;
    return (0, i.jsx)(R.Ay, {
        contentTypes: [t],
        groupName: S.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: R } = e;
            switch (t) {
                case l.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => R(S.i.UNKNOWN), noticeType: p }),
                            P.intl.string(P.t["+xn1o5"]),
                            (0, i.jsx)("i", { className: D.c9 }),
                            (0, i.jsx)("i", { className: D.Vz }),
                            (0, i.jsx)("i", { className: D.p0 }),
                            (0, i.jsx)(r.Z_L, {
                                noticeType: p,
                                onClick: () => {
                                    (0, r.mMO)(async () => {
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
                case l.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.SPOTIFY,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => R(S.i.UNKNOWN), noticeType: p }),
                            (0, i.jsx)(I.A, { className: D.tV }),
                            P.intl.string(P.t["5NUVHH"]),
                            (0, i.jsx)(r.Z_L, {
                                onClick: () => (0, E.A)({ platformType: O.fg2.SPOTIFY, location: "Notice Bar" }),
                                noticeType: p,
                                children: P.intl.string(P.t.S0W8Z5),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PLAYSTATION,
                        children: [
                            (0, i.jsx)(r.PMB, { noticeType: p, onClick: () => R(S.i.UNKNOWN) }),
                            (0, i.jsx)("img", {
                                alt: "",
                                className: D.tV,
                                src: a.A.get(O.fg2.PLAYSTATION).icon.whiteSVG,
                            }),
                            P.intl.string(P.t.WHWgoY),
                            (0, i.jsx)(r.zr9, {
                                onClick: () => (0, E.A)({ platformType: O.fg2.PLAYSTATION, location: "Notice Bar" }),
                                children: P.intl.string(P.t.S0W8Z5),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => R(S.i.USER_DISMISS), noticeType: p }),
                            P.intl.string(P.t["3qKN/h"]),
                            (0, i.jsx)(r.Z_L, {
                                onClick: async () => {
                                    R(S.i.TAKE_ACTION);
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
                                            (0, r.createToast)(P.intl.string(P.t.xSCvBf), r.ToastType.FAILURE),
                                        );
                                    }
                                },
                                noticeType: p,
                                children: P.intl.string(P.t["ff/XXy"]),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)("span", { className: D.lK }),
                            (0, i.jsx)("span", { className: D.$t, children: P.intl.string(P.t["+urf75"]) }),
                            (0, i.jsx)(r.Z_L, {
                                className: D.CO,
                                noticeType: p,
                                onClick: () => {
                                    N.default.track(O.HAw.PREMIUM_PROMOTION_OPENED, {
                                        location_section: O.JJy.NOTIFICATION_BAR,
                                        location_object: O.ZSU.BUTTON_CTA,
                                    }),
                                        (0, T.openUserSettings)(u.X.NITRO_PANEL, { section: O.nc_.PREMIUM });
                                },
                                children: P.intl.string(P.t["8JC5e/"]),
                            }),
                            (0, i.jsx)(r.PMB, {
                                onClick: () => {
                                    R(S.i.UNKNOWN), (0, s.lA)(O.nhx.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: p,
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(d.A, {
                        dismissCurrentNotice: () => R(S.i.UNKNOWN),
                        subscriptionTier: C.pe.TIER_2,
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(d.A, {
                        dismissCurrentNotice: () => R(S.i.UNKNOWN),
                        subscriptionTier: C.pe.TIER_0,
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(r.PMB, { noticeType: p, onClick: () => R(S.i.UNKNOWN) }),
                            P.intl.string(P.t["0KFB2B"]),
                            (0, i.jsx)(r.Z_L, {
                                noticeType: p,
                                onClick: () => {
                                    R(S.i.UNKNOWN),
                                        (0, T.openUserSettings)(u.X.NITRO_PANEL, { section: O.nc_.PREMIUM });
                                },
                                children: P.intl.string(P.t.pyYSiO),
                            }),
                        ],
                    });
                case l.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DANGER,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => R(S.i.UNKNOWN), noticeType: p }),
                            P.intl.string(P.t["7490vQ"]),
                            (0, i.jsx)(r.Z_L, {
                                noticeType: p,
                                onClick: () => {
                                    (0, A.pX)(O.BVt.SETTINGS("account"));
                                },
                                children: P.intl.string(P.t.Vm8akB),
                            }),
                        ],
                    });
                case l.M.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let m = _.A.getEligibleGuildsForNagActivate();
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => R(S.i.UNKNOWN), noticeType: p }),
                            P.intl.string(P.t.pJ4hJE),
                            (0, i.jsx)(r.Z_L, {
                                noticeType: p,
                                onClick: () => {
                                    R(S.i.PRIMARY),
                                        (0, A.pX)(
                                            1 === m.length
                                                ? O.BVt.GUILD_SETTINGS(m[0], "role-subscriptions")
                                                : O.BVt.PICK_GUILD_SETTINGS(
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
                case l.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => R(S.i.UNKNOWN), noticeType: p }),
                            P.intl.string(P.t["O9GI+k"]),
                            (0, i.jsx)(r.Z_L, {
                                onClick: () => {
                                    (0, c.A)({
                                        subscriptionTier: C.pe.TIER_2,
                                        analyticsLocations: [o.A.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: O.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => R(S.i.UNKNOWN),
                                    });
                                },
                                noticeType: p,
                                children: P.intl.string(P.t.Zi69D4),
                            }),
                        ],
                    });
            }
        },
    });
};
