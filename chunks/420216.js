n.d(t, { r: () => O });
var i = n(627968);
n(64700);
var l = n(554146),
    r = n(397927),
    s = n(803306),
    a = n(573648),
    o = n(975807),
    c = n(793574),
    d = n(882997),
    u = n(662427),
    _ = n(532794),
    E = n(745299),
    T = n(976860),
    A = n(780964),
    I = n(840065),
    N = n(879945),
    p = n(954571),
    m = n(379848),
    R = n(49999),
    h = n(652215),
    S = n(788868),
    g = n(985018),
    C = n(237082);
let O = (e) => {
    let { dismissibleContent: t, noticeType: O } = e;
    return (0, i.jsx)(m.Ay, {
        contentTypes: [t],
        groupName: R.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: m } = e;
            switch (t) {
                case l.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => m(R.i.UNKNOWN), noticeType: O }),
                            g.intl.string(g.t["+xn1o5"]),
                            (0, i.jsx)("i", { className: C.c9 }),
                            (0, i.jsx)("i", { className: C.Vz }),
                            (0, i.jsx)("i", { className: C.p0 }),
                            (0, i.jsx)(r.Z_L, {
                                noticeType: O,
                                onClick: () => {
                                    (0, r.mMO)(async () => {
                                        let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                            n.bind(n, 987482),
                                        );
                                        return (t) => (0, i.jsx)(e, { source: "Top Bar Nag", ...t });
                                    });
                                },
                                children: g.intl.string(g.t["1WjMbC"]),
                            }),
                        ],
                    });
                case l.M.NAGBAR_QUEST_APP_UPSELL:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => m(R.i.UNKNOWN), noticeType: O }),
                            (0, i.jsx)("i", { className: C.TN }),
                            g.intl.string(g.t.lgwX26),
                            (0, i.jsx)(r.Z_L, {
                                noticeType: O,
                                onClick: () => {
                                    (0, o.A)(h.AMi.META_QUEST), m(R.i.TAKE_ACTION);
                                },
                                children: g.intl.string(g.t["1WjMbC"]),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.SPOTIFY,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => m(R.i.UNKNOWN), noticeType: O }),
                            (0, i.jsx)(N.A, { className: C.tV }),
                            g.intl.string(g.t["5NUVHH"]),
                            (0, i.jsx)(r.Z_L, {
                                onClick: () => (0, d.A)({ platformType: h.fg2.SPOTIFY, location: "Notice Bar" }),
                                noticeType: O,
                                children: g.intl.string(g.t.S0W8Z5),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PLAYSTATION,
                        children: [
                            (0, i.jsx)(r.PMB, { noticeType: O, onClick: () => m(R.i.UNKNOWN) }),
                            (0, i.jsx)("img", {
                                alt: "",
                                className: C.tV,
                                src: a.A.get(h.fg2.PLAYSTATION).icon.whiteSVG,
                            }),
                            g.intl.string(g.t.WHWgoY),
                            (0, i.jsx)(r.zr9, {
                                onClick: () => (0, d.A)({ platformType: h.fg2.PLAYSTATION, location: "Notice Bar" }),
                                children: g.intl.string(g.t.S0W8Z5),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => m(R.i.USER_DISMISS), noticeType: O }),
                            g.intl.string(g.t["3qKN/h"]),
                            (0, i.jsx)(r.Z_L, {
                                onClick: async () => {
                                    m(R.i.TAKE_ACTION);
                                    try {
                                        let { startRegisterWebAuthnCredential: e } = await Promise.resolve().then(
                                                n.bind(n, 917136),
                                            ),
                                            { ticket: t, challenge: l } = await e();
                                        (0, r.mMO)(async () => {
                                            let { RegisterWebAuthnCredentialModal: e } = await Promise.all([
                                                n.e("44667"),
                                                n.e("89045"),
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
                                            (0, r.createToast)(g.intl.string(g.t.xSCvBf), r.ToastType.FAILURE),
                                        );
                                    }
                                },
                                noticeType: O,
                                children: g.intl.string(g.t["ff/XXy"]),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)("span", { className: C.lK }),
                            (0, i.jsx)("span", { className: C.$t, children: g.intl.string(g.t["+urf75"]) }),
                            (0, i.jsx)(r.Z_L, {
                                className: C.CO,
                                noticeType: O,
                                onClick: () => {
                                    p.default.track(h.HAw.PREMIUM_PROMOTION_OPENED, {
                                        location_section: h.JJy.NOTIFICATION_BAR,
                                        location_object: h.ZSU.BUTTON_CTA,
                                    }),
                                        (0, I.openUserSettings)(A.X.NITRO_PANEL);
                                },
                                children: g.intl.string(g.t["8JC5e/"]),
                            }),
                            (0, i.jsx)(r.PMB, {
                                onClick: () => {
                                    m(R.i.UNKNOWN), (0, s.lA)(h.nhx.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: O,
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(E.A, {
                        dismissCurrentNotice: () => m(R.i.UNKNOWN),
                        subscriptionTier: S.pe.TIER_2,
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(E.A, {
                        dismissCurrentNotice: () => m(R.i.UNKNOWN),
                        subscriptionTier: S.pe.TIER_0,
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(r.PMB, { noticeType: O, onClick: () => m(R.i.UNKNOWN) }),
                            g.intl.string(g.t["0KFB2B"]),
                            (0, i.jsx)(r.Z_L, {
                                noticeType: O,
                                onClick: () => {
                                    m(R.i.UNKNOWN), (0, I.openUserSettings)(A.X.NITRO_PANEL);
                                },
                                children: g.intl.string(g.t.pyYSiO),
                            }),
                        ],
                    });
                case l.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DANGER,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => m(R.i.UNKNOWN), noticeType: O }),
                            g.intl.string(g.t["7490vQ"]),
                            (0, i.jsx)(r.Z_L, {
                                noticeType: O,
                                onClick: () => {
                                    (0, T.pX)(h.BVt.SETTINGS("account"));
                                },
                                children: g.intl.string(g.t.Vm8akB),
                            }),
                        ],
                    });
                case l.M.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let y = u.A.getEligibleGuildsForNagActivate();
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => m(R.i.UNKNOWN), noticeType: O }),
                            g.intl.string(g.t.pJ4hJE),
                            (0, i.jsx)(r.Z_L, {
                                noticeType: O,
                                onClick: () => {
                                    m(R.i.PRIMARY),
                                        (0, T.pX)(
                                            1 === y.length
                                                ? h.BVt.GUILD_SETTINGS(y[0], "role-subscriptions")
                                                : h.BVt.PICK_GUILD_SETTINGS(
                                                      "role-subscriptions",
                                                      void 0,
                                                      "server-subscriptions-finish-setting-up",
                                                  ),
                                        );
                                },
                                children: g.intl.string(g.t["74s74F"]),
                            }),
                        ],
                    });
                case l.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(r.$Td, {
                        color: r.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(r.PMB, { onClick: () => m(R.i.UNKNOWN), noticeType: O }),
                            g.intl.string(g.t["O9GI+k"]),
                            (0, i.jsx)(r.Z_L, {
                                onClick: () => {
                                    (0, _.A)({
                                        subscriptionTier: S.pe.TIER_2,
                                        analyticsLocations: [c.A.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: h.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => m(R.i.UNKNOWN),
                                    });
                                },
                                noticeType: O,
                                children: g.intl.string(g.t.Zi69D4),
                            }),
                        ],
                    });
            }
        },
    });
};
