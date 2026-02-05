n.d(t, { r: () => U });
var i = n(627968);
n(64700);
var l = n(554146),
    r = n(397927),
    s = n(803306),
    a = n(573648),
    o = n(793574),
    E = n(882997),
    c = n(662427),
    _ = n(532794),
    d = n(819982),
    A = n(745299),
    u = n(976860),
    T = n(780964),
    I = n(840065),
    N = n(879945),
    R = n(954571),
    S = n(379848),
    O = n(49999),
    C = n(652215),
    P = n(789622),
    D = n(788868),
    p = n(985018),
    m = n(237082);
let U = (e) => {
    let { dismissibleContent: t, noticeType: U } = e;
    return (0, i.jsx)(S.Ay, {
        contentTypes: [t],
        groupName: O.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: S } = e;
            switch (t) {
                case l.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => S(O.i.UNKNOWN), noticeType: U }),
                            p.intl.string(p.t["+xn1o5"]),
                            (0, i.jsx)("i", { className: m.c9 }),
                            (0, i.jsx)("i", { className: m.Vz }),
                            (0, i.jsx)("i", { className: m.p0 }),
                            (0, i.jsx)(r.Z_L, {
                                noticeType: U,
                                onClick: () => {
                                    (0, r.mMO)(async () => {
                                        let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                            n.bind(n, 987482),
                                        );
                                        return (t) => (0, i.jsx)(e, { source: "Top Bar Nag", ...t });
                                    });
                                },
                                children: p.intl.string(p.t["1WjMbC"]),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.SPOTIFY,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => S(O.i.UNKNOWN), noticeType: U }),
                            (0, i.jsx)(N.A, { className: m.tV }),
                            p.intl.string(p.t["5NUVHH"]),
                            (0, i.jsx)(r.Z_L, {
                                onClick: () => (0, E.A)({ platformType: C.fg2.SPOTIFY, location: "Notice Bar" }),
                                noticeType: U,
                                children: p.intl.string(p.t.S0W8Z5),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PLAYSTATION,
                        children: [
                            (0, i.jsx)(r.PMB, { noticeType: U, onClick: () => S(O.i.UNKNOWN) }),
                            (0, i.jsx)("img", {
                                alt: "",
                                className: m.tV,
                                src: a.A.get(C.fg2.PLAYSTATION).icon.whiteSVG,
                            }),
                            p.intl.string(p.t.WHWgoY),
                            (0, i.jsx)(r.zr9, {
                                onClick: () => (0, E.A)({ platformType: C.fg2.PLAYSTATION, location: "Notice Bar" }),
                                children: p.intl.string(p.t.S0W8Z5),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => S(O.i.USER_DISMISS), noticeType: U }),
                            p.intl.string(p.t["3qKN/h"]),
                            (0, i.jsx)(r.Z_L, {
                                onClick: async () => {
                                    S(O.i.TAKE_ACTION);
                                    try {
                                        let { startRegisterWebAuthnCredential: e } = await Promise.resolve().then(
                                                n.bind(n, 917136),
                                            ),
                                            { ticket: t, challenge: l } = await e();
                                        (0, r.mMO)(async () => {
                                            let { RegisterWebAuthnCredentialModal: e } = await Promise.all([
                                                n.e("44667"),
                                                n.e("69694"),
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
                                            (0, r.createToast)(p.intl.string(p.t.xSCvBf), r.ToastType.FAILURE),
                                        );
                                    }
                                },
                                noticeType: U,
                                children: p.intl.string(p.t["ff/XXy"]),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)("span", { className: m.lK }),
                            (0, i.jsx)("span", { className: m.$t, children: p.intl.string(p.t["+urf75"]) }),
                            (0, i.jsx)(r.Z_L, {
                                className: m.CO,
                                noticeType: U,
                                onClick: () => {
                                    R.default.track(C.HAw.PREMIUM_PROMOTION_OPENED, {
                                        location_section: C.JJy.NOTIFICATION_BAR,
                                        location_object: C.ZSU.BUTTON_CTA,
                                    }),
                                        (0, I.openUserSettings)(T.X.NITRO_PANEL, { section: C.nc_.PREMIUM });
                                },
                                children: p.intl.string(p.t["8JC5e/"]),
                            }),
                            (0, i.jsx)(r.PMB, {
                                onClick: () => {
                                    S(O.i.UNKNOWN), (0, s.lA)(C.nhx.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: U,
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(A.A, {
                        dismissCurrentNotice: () => S(O.i.UNKNOWN),
                        subscriptionTier: D.pe.TIER_2,
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(A.A, {
                        dismissCurrentNotice: () => S(O.i.UNKNOWN),
                        subscriptionTier: D.pe.TIER_0,
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(r.PMB, { noticeType: U, onClick: () => S(O.i.UNKNOWN) }),
                            p.intl.string(p.t["0KFB2B"]),
                            (0, i.jsx)(r.Z_L, {
                                noticeType: U,
                                onClick: () => {
                                    S(O.i.UNKNOWN),
                                        (0, I.openUserSettings)(T.X.NITRO_PANEL, { section: C.nc_.PREMIUM });
                                },
                                children: p.intl.string(p.t.pyYSiO),
                            }),
                        ],
                    });
                case l.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DANGER,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => S(O.i.UNKNOWN), noticeType: U }),
                            p.intl.string(p.t["7490vQ"]),
                            (0, i.jsx)(r.Z_L, {
                                noticeType: U,
                                onClick: () => {
                                    (0, u.pX)(C.BVt.SETTINGS("account"));
                                },
                                children: p.intl.string(p.t.Vm8akB),
                            }),
                        ],
                    });
                case l.M.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let M = c.A.getEligibleGuildsForNagActivate();
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => S(O.i.UNKNOWN), noticeType: U }),
                            p.intl.string(p.t.pJ4hJE),
                            (0, i.jsx)(r.Z_L, {
                                noticeType: U,
                                onClick: () => {
                                    S(O.i.PRIMARY),
                                        (0, u.pX)(
                                            1 === M.length
                                                ? C.BVt.GUILD_SETTINGS(M[0], "role-subscriptions")
                                                : C.BVt.PICK_GUILD_SETTINGS(
                                                      "role-subscriptions",
                                                      void 0,
                                                      "server-subscriptions-finish-setting-up",
                                                  ),
                                        );
                                },
                                children: p.intl.string(p.t["74s74F"]),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_POMELO:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.WARNING,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => S(O.i.UNKNOWN), noticeType: U }),
                            p.intl.format(p.t.pdYZyg, {}),
                            (0, i.jsx)(r.Z_L, {
                                onClick: () => (0, d.A)(P.gg.NOTICE),
                                noticeType: U,
                                children: p.intl.string(p.t.LhlgY9),
                            }),
                        ],
                    });
                case l.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => S(O.i.UNKNOWN), noticeType: U }),
                            p.intl.string(p.t["O9GI+k"]),
                            (0, i.jsx)(r.Z_L, {
                                onClick: () => {
                                    (0, _.A)({
                                        subscriptionTier: D.pe.TIER_2,
                                        analyticsLocations: [o.A.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: C.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => S(O.i.UNKNOWN),
                                    });
                                },
                                noticeType: U,
                                children: p.intl.string(p.t.Zi69D4),
                            }),
                        ],
                    });
            }
        },
    });
};
