"use strict";
n.d(t, { r: () => P });
var i = n(627968);
n(64700);
var r = n(554146);
if (21552 == n.j) var l = n(417098);
if (21552 == n.j) var s = n(192308);
if (21552 == n.j) var a = n(691540);
if (21552 == n.j) var o = n(857250);
if (21552 == n.j) var c = n(97483);
var u = n(803306),
    d = n(573648),
    _ = n(975807),
    E = n(793574),
    A = n(882997),
    m = n(532794),
    I = n(745299),
    T = n(976860),
    N = n(780964),
    g = n(718446),
    p = n(858897),
    C = n(879945),
    f = n(954571),
    h = n(379848),
    R = n(49999),
    S = n(652215),
    O = n(788868),
    x = n(355097),
    M = n(985018),
    D = n(448759);
let P = (e) => {
    let { dismissibleContent: t, noticeType: P } = e;
    return (0, i.jsx)(h.Ay, {
        contentTypes: [t],
        groupName: R.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: h } = e;
            switch (t) {
                case r.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(l.$T, {
                        color: l.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(l.PM, { onClick: () => h(R.i.UNKNOWN), noticeType: P }),
                            M.intl.string(M.t["+xn1o5"]),
                            (0, i.jsx)("i", { className: D.c9 }),
                            (0, i.jsx)("i", { className: D.Vz }),
                            (0, i.jsx)("i", { className: D.p0 }),
                            (0, i.jsx)(l.Z_, {
                                noticeType: P,
                                onClick: () => {
                                    (0, s.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                            n.bind(n, 987482),
                                        );
                                        return (t) => (0, i.jsx)(e, { source: "Top Bar Nag", ...t });
                                    });
                                },
                                children: M.intl.string(M.t["1WjMbC"]),
                            }),
                        ],
                    });
                case r.M.NAGBAR_QUEST_APP_UPSELL:
                    return (0, i.jsxs)(l.$T, {
                        color: l.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(l.PM, { onClick: () => h(R.i.UNKNOWN), noticeType: P }),
                            (0, i.jsx)("i", { className: D.TN }),
                            M.intl.string(M.t.lgwX26),
                            (0, i.jsx)(l.Z_, {
                                noticeType: P,
                                onClick: () => {
                                    (0, _.A)(S.AMi.META_QUEST), h(R.i.TAKE_ACTION);
                                },
                                children: M.intl.string(M.t["1WjMbC"]),
                            }),
                        ],
                    });
                case r.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(l.$T, {
                        color: l.Hv.SPOTIFY,
                        children: [
                            (0, i.jsx)(l.PM, { onClick: () => h(R.i.UNKNOWN), noticeType: P }),
                            (0, i.jsx)(C.A, { className: D.tV }),
                            M.intl.string(M.t["5NUVHH"]),
                            (0, i.jsx)(l.Z_, {
                                onClick: () => (0, A.A)({ platformType: S.fg2.SPOTIFY, location: "Notice Bar" }),
                                noticeType: P,
                                children: M.intl.string(M.t.S0W8Z5),
                            }),
                        ],
                    });
                case r.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(l.$T, {
                        color: l.Hv.PLAYSTATION,
                        children: [
                            (0, i.jsx)(l.PM, { noticeType: P, onClick: () => h(R.i.UNKNOWN) }),
                            (0, i.jsx)("img", {
                                alt: "",
                                className: D.tV,
                                src: d.A.get(S.fg2.PLAYSTATION).icon.whiteSVG,
                            }),
                            M.intl.string(M.t.WHWgoY),
                            (0, i.jsx)(l.zr, {
                                onClick: () => (0, A.A)({ platformType: S.fg2.PLAYSTATION, location: "Notice Bar" }),
                                children: M.intl.string(M.t.S0W8Z5),
                            }),
                        ],
                    });
                case r.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(l.$T, {
                        color: l.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(l.PM, { onClick: () => h(R.i.USER_DISMISS), noticeType: P }),
                            M.intl.string(M.t["3qKN/h"]),
                            (0, i.jsx)(l.Z_, {
                                onClick: async () => {
                                    h(R.i.TAKE_ACTION);
                                    try {
                                        let { startRegisterWebAuthnCredential: e } = await Promise.resolve().then(
                                                n.bind(n, 917136),
                                            ),
                                            { ticket: t, challenge: r } = await e();
                                        (0, s.openModalLazy)(async () => {
                                            let { RegisterWebAuthnCredentialModal: e } = await Promise.all([
                                                n.e("44667"),
                                                n.e("45917"),
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
                                        (0, a.P0)((0, o.o)(M.intl.string(M.t.xSCvBf), c.Ck.FAILURE));
                                    }
                                },
                                noticeType: P,
                                children: M.intl.string(M.t["ff/XXy"]),
                            }),
                        ],
                    });
                case r.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(l.$T, {
                        color: l.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)("span", { className: D.lK }),
                            (0, i.jsx)("span", { className: D.$t, children: M.intl.string(M.t["+urf75"]) }),
                            (0, i.jsx)(l.Z_, {
                                className: D.CO,
                                noticeType: P,
                                onClick: () => {
                                    f.default.track(S.HAw.PREMIUM_PROMOTION_OPENED, {
                                        location_section: S.JJy.NOTIFICATION_BAR,
                                        location_object: S.ZSU.BUTTON_CTA,
                                    }),
                                        (0, p.openUserSettings)(N.X.NITRO_PANEL);
                                },
                                children: M.intl.string(M.t["8JC5e/"]),
                            }),
                            (0, i.jsx)(l.PM, {
                                onClick: () => {
                                    h(R.i.UNKNOWN), (0, u.lA)(S.nhx.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: P,
                            }),
                        ],
                    });
                case r.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(I.A, {
                        dismissCurrentNotice: () => h(R.i.UNKNOWN),
                        subscriptionTier: O.pe.TIER_2,
                    });
                case r.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(I.A, {
                        dismissCurrentNotice: () => h(R.i.UNKNOWN),
                        subscriptionTier: O.pe.TIER_0,
                    });
                case r.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(l.$T, {
                        color: l.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(l.PM, { noticeType: P, onClick: () => h(R.i.UNKNOWN) }),
                            M.intl.string(M.t["0KFB2B"]),
                            (0, i.jsx)(l.Z_, {
                                noticeType: P,
                                onClick: () => {
                                    h(R.i.UNKNOWN), (0, p.openUserSettings)(N.X.NITRO_PANEL);
                                },
                                children: M.intl.string(M.t.pyYSiO),
                            }),
                        ],
                    });
                case r.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(l.$T, {
                        color: l.Hv.DANGER,
                        children: [
                            (0, i.jsx)(l.PM, { onClick: () => h(R.i.UNKNOWN), noticeType: P }),
                            M.intl.string(M.t["7490vQ"]),
                            (0, i.jsx)(l.Z_, {
                                noticeType: P,
                                onClick: () => {
                                    (0, T.pX)((0, g.settingsPathToRoute)(x.od.ACCOUNT));
                                },
                                children: M.intl.string(M.t.Vm8akB),
                            }),
                        ],
                    });
                case r.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(l.$T, {
                        color: l.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(l.PM, { onClick: () => h(R.i.UNKNOWN), noticeType: P }),
                            M.intl.string(M.t["O9GI+k"]),
                            (0, i.jsx)(l.Z_, {
                                onClick: () => {
                                    (0, m.A)({
                                        subscriptionTier: O.pe.TIER_2,
                                        analyticsLocations: [E.A.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: S.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => h(R.i.UNKNOWN),
                                    });
                                },
                                noticeType: P,
                                children: M.intl.string(M.t.Zi69D4),
                            }),
                        ],
                    });
            }
        },
    });
};
