n.d(t, { r: () => b });
var i = n(627968);
n(64700);
var l = n(554146),
    s = n(397927),
    a = n(803306),
    r = n(573648),
    o = n(975807),
    d = n(793574),
    c = n(882997),
    u = n(532794),
    h = n(745299),
    A = n(976860),
    _ = n(780964),
    m = n(718446),
    g = n(858897),
    p = n(879945),
    f = n(954571),
    x = n(379848),
    E = n(49999),
    I = n(652215),
    C = n(788868),
    N = n(355097),
    T = n(985018),
    S = n(571655);
let b = (e) => {
    let { dismissibleContent: t, noticeType: b } = e;
    return (0, i.jsx)(x.Ay, {
        contentTypes: [t],
        groupName: E.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: x } = e;
            switch (t) {
                case l.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(s.PMB, { onClick: () => x(E.i.UNKNOWN), noticeType: b }),
                            T.intl.string(T.t["+xn1o5"]),
                            (0, i.jsx)("i", { className: S.c9 }),
                            (0, i.jsx)("i", { className: S.Vz }),
                            (0, i.jsx)("i", { className: S.p0 }),
                            (0, i.jsx)(s.Z_L, {
                                noticeType: b,
                                onClick: () => {
                                    (0, s.mMO)(async () => {
                                        let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                            n.bind(n, 987482),
                                        );
                                        return (t) => (0, i.jsx)(e, { source: "Top Bar Nag", ...t });
                                    });
                                },
                                children: T.intl.string(T.t["1WjMbC"]),
                            }),
                        ],
                    });
                case l.M.NAGBAR_QUEST_APP_UPSELL:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(s.PMB, { onClick: () => x(E.i.UNKNOWN), noticeType: b }),
                            (0, i.jsx)("i", { className: S.TN }),
                            T.intl.string(T.t.lgwX26),
                            (0, i.jsx)(s.Z_L, {
                                noticeType: b,
                                onClick: () => {
                                    (0, o.A)(I.AMi.META_QUEST), x(E.i.TAKE_ACTION);
                                },
                                children: T.intl.string(T.t["1WjMbC"]),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.SPOTIFY,
                        children: [
                            (0, i.jsx)(s.PMB, { onClick: () => x(E.i.UNKNOWN), noticeType: b }),
                            (0, i.jsx)(p.A, { className: S.tV }),
                            T.intl.string(T.t["5NUVHH"]),
                            (0, i.jsx)(s.Z_L, {
                                onClick: () => (0, c.A)({ platformType: I.fg2.SPOTIFY, location: "Notice Bar" }),
                                noticeType: b,
                                children: T.intl.string(T.t.S0W8Z5),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.PLAYSTATION,
                        children: [
                            (0, i.jsx)(s.PMB, { noticeType: b, onClick: () => x(E.i.UNKNOWN) }),
                            (0, i.jsx)("img", {
                                alt: "",
                                className: S.tV,
                                src: r.A.get(I.fg2.PLAYSTATION).icon.whiteSVG,
                            }),
                            T.intl.string(T.t.WHWgoY),
                            (0, i.jsx)(s.zr9, {
                                onClick: () => (0, c.A)({ platformType: I.fg2.PLAYSTATION, location: "Notice Bar" }),
                                children: T.intl.string(T.t.S0W8Z5),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.DEFAULT,
                        children: [
                            (0, i.jsx)(s.PMB, { onClick: () => x(E.i.USER_DISMISS), noticeType: b }),
                            T.intl.string(T.t["3qKN/h"]),
                            (0, i.jsx)(s.Z_L, {
                                onClick: async () => {
                                    x(E.i.TAKE_ACTION);
                                    try {
                                        let { startRegisterWebAuthnCredential: e } = await Promise.resolve().then(
                                                n.bind(n, 917136),
                                            ),
                                            { ticket: t, challenge: l } = await e();
                                        (0, s.mMO)(async () => {
                                            let { RegisterWebAuthnCredentialModal: e } = await Promise.all([
                                                n.e("44667"),
                                                n.e("70987"),
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
                                            (0, s.createToast)(T.intl.string(T.t.xSCvBf), s.ToastType.FAILURE),
                                        );
                                    }
                                },
                                noticeType: b,
                                children: T.intl.string(T.t["ff/XXy"]),
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)("span", { className: S.lK }),
                            (0, i.jsx)("span", { className: S.$t, children: T.intl.string(T.t["+urf75"]) }),
                            (0, i.jsx)(s.Z_L, {
                                className: S.CO,
                                noticeType: b,
                                onClick: () => {
                                    f.default.track(I.HAw.PREMIUM_PROMOTION_OPENED, {
                                        location_section: I.JJy.NOTIFICATION_BAR,
                                        location_object: I.ZSU.BUTTON_CTA,
                                    }),
                                        (0, g.openUserSettings)(_.X.NITRO_PANEL);
                                },
                                children: T.intl.string(T.t["8JC5e/"]),
                            }),
                            (0, i.jsx)(s.PMB, {
                                onClick: () => {
                                    x(E.i.UNKNOWN), (0, a.lA)(I.nhx.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: b,
                            }),
                        ],
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(h.A, {
                        dismissCurrentNotice: () => x(E.i.UNKNOWN),
                        subscriptionTier: C.pe.TIER_2,
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(h.A, {
                        dismissCurrentNotice: () => x(E.i.UNKNOWN),
                        subscriptionTier: C.pe.TIER_0,
                    });
                case l.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(s.PMB, { noticeType: b, onClick: () => x(E.i.UNKNOWN) }),
                            T.intl.string(T.t["0KFB2B"]),
                            (0, i.jsx)(s.Z_L, {
                                noticeType: b,
                                onClick: () => {
                                    x(E.i.UNKNOWN), (0, g.openUserSettings)(_.X.NITRO_PANEL);
                                },
                                children: T.intl.string(T.t.pyYSiO),
                            }),
                        ],
                    });
                case l.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.DANGER,
                        children: [
                            (0, i.jsx)(s.PMB, { onClick: () => x(E.i.UNKNOWN), noticeType: b }),
                            T.intl.string(T.t["7490vQ"]),
                            (0, i.jsx)(s.Z_L, {
                                noticeType: b,
                                onClick: () => {
                                    (0, A.pX)((0, m.settingsPathToRoute)(N.od.ACCOUNT));
                                },
                                children: T.intl.string(T.t.Vm8akB),
                            }),
                        ],
                    });
                case l.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(s.$Td, {
                        color: s.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(s.PMB, { onClick: () => x(E.i.UNKNOWN), noticeType: b }),
                            T.intl.string(T.t["O9GI+k"]),
                            (0, i.jsx)(s.Z_L, {
                                onClick: () => {
                                    (0, u.A)({
                                        subscriptionTier: C.pe.TIER_2,
                                        analyticsLocations: [d.A.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: I.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => x(E.i.UNKNOWN),
                                    });
                                },
                                noticeType: b,
                                children: T.intl.string(T.t.Zi69D4),
                            }),
                        ],
                    });
            }
        },
    });
};
