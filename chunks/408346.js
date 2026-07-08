"use strict";
n.d(t, { w: () => t9, A: () => nt });
var i = n(627968),
    r = n(64700),
    s = n(989349),
    a = n.n(s),
    o = n(936504),
    l = n(299855),
    u = n.n(l),
    c = n(17928),
    d = n(462887),
    _ = n(834730),
    h = n(939249),
    f = n(417098),
    E = n(349288),
    p = n(403581),
    m = n(192308),
    g = n(289873),
    A = n(157559),
    I = n(827343),
    T = n(830215),
    S = n(228366);
function N(e) {
    S.h.dispatch({ type: "DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS", skuId: e });
}
var C = n(912851);
let y = {
    clearRemoteDisconnectVoiceChannelId() {
        S.h.dispatch({ type: "CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID" });
    },
    clearLastSessionVoiceChannelId() {
        S.h.dispatch({ type: "CLEAR_LAST_SESSION_VOICE_CHANNEL_ID" });
    },
};
var O = n(730852),
    R = n(785796),
    v = n(55619),
    b = n(246605),
    L = n(271866),
    D = n(736653),
    w = n(77729),
    P = n(573648),
    M = n(793574),
    x = n(688810),
    U = n(587895),
    k = n(315982),
    G = n(235986),
    V = n(626584),
    F = n(554146),
    B = n(691540),
    H = n(857250),
    j = n(97483),
    W = n(803306),
    Y = n(975807),
    K = n(968309),
    $ = n(532794),
    z = n(745299),
    q = n(976860),
    Z = n(780964),
    X = n(718446),
    Q = n(766075),
    J = n(879945),
    ee = n(174459),
    et = n(379848),
    en = n(49999),
    ei = n(652215),
    er = n(202541),
    es = n(355097),
    ea = n(375708),
    eo = n(448759);
function el(e) {
    let { dismissibleContent: t, noticeType: r } = e;
    return (0, i.jsx)(et.Ay, {
        contentTypes: [t],
        groupName: en.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: s } = e;
            switch (t) {
                case F.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(f.$T, {
                        color: f.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(f.PM, { onClick: () => s(en.i.UNKNOWN), noticeType: r }),
                            ea.intl.string(ea.t["+xn1o5"]),
                            (0, i.jsx)("i", { className: eo.c9 }),
                            (0, i.jsx)("i", { className: eo.Vz }),
                            (0, i.jsx)("i", { className: eo.p0 }),
                            (0, i.jsx)(f.Z_, {
                                noticeType: r,
                                onClick: () => {
                                    (0, m.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("17951"),
                                            n.e("44602"),
                                            n.e("25280"),
                                        ]).then(n.bind(n, 987482));
                                        return (t) => (0, i.jsx)(e, { source: "Top Bar Nag", ...t });
                                    });
                                },
                                children: ea.intl.string(ea.t["1WjMbC"]),
                            }),
                        ],
                    });
                case F.M.NAGBAR_QUEST_APP_UPSELL:
                    return (0, i.jsxs)(f.$T, {
                        color: f.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(f.PM, { onClick: () => s(en.i.UNKNOWN), noticeType: r }),
                            (0, i.jsx)("i", { className: eo.TN }),
                            ea.intl.string(ea.t.lgwX26),
                            (0, i.jsx)(f.Z_, {
                                noticeType: r,
                                onClick: () => {
                                    (0, Y.A)(ei.AMi.META_QUEST), s(en.i.TAKE_ACTION);
                                },
                                children: ea.intl.string(ea.t["1WjMbC"]),
                            }),
                        ],
                    });
                case F.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(f.$T, {
                        color: f.Hv.SPOTIFY,
                        children: [
                            (0, i.jsx)(f.PM, { onClick: () => s(en.i.UNKNOWN), noticeType: r }),
                            (0, i.jsx)(J.A, { className: eo.tV }),
                            ea.intl.string(ea.t["5NUVHH"]),
                            (0, i.jsx)(f.Z_, {
                                onClick: () => (0, K.A)({ platformType: ei.fg2.SPOTIFY, location: "Notice Bar" }),
                                noticeType: r,
                                children: ea.intl.string(ea.t.S0W8Z5),
                            }),
                        ],
                    });
                case F.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(f.$T, {
                        color: f.Hv.PLAYSTATION,
                        children: [
                            (0, i.jsx)(f.PM, { noticeType: r, onClick: () => s(en.i.UNKNOWN) }),
                            (0, i.jsx)("img", {
                                alt: "",
                                className: eo.tV,
                                src: P.A.get(ei.fg2.PLAYSTATION).icon.whiteSVG,
                            }),
                            ea.intl.string(ea.t.WHWgoY),
                            (0, i.jsx)(f.zr, {
                                onClick: () => (0, K.A)({ platformType: ei.fg2.PLAYSTATION, location: "Notice Bar" }),
                                children: ea.intl.string(ea.t.S0W8Z5),
                            }),
                        ],
                    });
                case F.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(f.$T, {
                        color: f.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(f.PM, { onClick: () => s(en.i.USER_DISMISS), noticeType: r }),
                            ea.intl.string(ea.t["3qKN/h"]),
                            (0, i.jsx)(f.Z_, {
                                onClick: async () => {
                                    s(en.i.TAKE_ACTION);
                                    try {
                                        let { startRegisterWebAuthnCredential: e } = await Promise.resolve().then(
                                                n.bind(n, 917136),
                                            ),
                                            { ticket: t, challenge: r } = await e();
                                        (0, m.openModalLazy)(async () => {
                                            let { RegisterWebAuthnCredentialModal: e } = await Promise.all([
                                                n.e("6022"),
                                                n.e("4736"),
                                                n.e("19631"),
                                                n.e("40114"),
                                            ]).then(n.bind(n, 328009));
                                            return (n) =>
                                                (0, i.jsx)(e, {
                                                    ...n,
                                                    ticket: t,
                                                    challenge: r,
                                                    showAccountSettingsButton: !0,
                                                });
                                        });
                                    } catch (e) {
                                        (0, B.P0)((0, H.o)(ea.intl.string(ea.t.xSCvBf), j.Ck.FAILURE));
                                    }
                                },
                                noticeType: r,
                                children: ea.intl.string(ea.t["ff/XXy"]),
                            }),
                        ],
                    });
                case F.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(f.$T, {
                        color: f.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)("span", { className: eo.lK }),
                            (0, i.jsx)("span", { className: eo.$t, children: ea.intl.string(ea.t["+urf75"]) }),
                            (0, i.jsx)(f.Z_, {
                                className: eo.CO,
                                noticeType: r,
                                onClick: () => {
                                    ee.default.track(ei.HAw.PREMIUM_PROMOTION_OPENED, {
                                        location_section: ei.JJy.NOTIFICATION_BAR,
                                        location_object: ei.ZSU.BUTTON_CTA,
                                    }),
                                        (0, Q.openUserSettings)(Z.X.NITRO_PANEL);
                                },
                                children: ea.intl.string(ea.t["8JC5e/"]),
                            }),
                            (0, i.jsx)(f.PM, {
                                onClick: () => {
                                    s(en.i.UNKNOWN), (0, W.lA)(ei.nhx.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: r,
                            }),
                        ],
                    });
                case F.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(z.A, {
                        dismissCurrentNotice: () => s(en.i.UNKNOWN),
                        subscriptionTier: er.pe.TIER_2,
                    });
                case F.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(z.A, {
                        dismissCurrentNotice: () => s(en.i.UNKNOWN),
                        subscriptionTier: er.pe.TIER_0,
                    });
                case F.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(f.$T, {
                        color: f.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(f.PM, { noticeType: r, onClick: () => s(en.i.UNKNOWN) }),
                            ea.intl.string(ea.t["0KFB2B"]),
                            (0, i.jsx)(f.Z_, {
                                noticeType: r,
                                onClick: () => {
                                    s(en.i.UNKNOWN), (0, Q.openUserSettings)(Z.X.NITRO_PANEL);
                                },
                                children: ea.intl.string(ea.t.pyYSiO),
                            }),
                        ],
                    });
                case F.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(f.$T, {
                        color: f.Hv.DANGER,
                        children: [
                            (0, i.jsx)(f.PM, { onClick: () => s(en.i.UNKNOWN), noticeType: r }),
                            ea.intl.string(ea.t["7490vQ"]),
                            (0, i.jsx)(f.Z_, {
                                noticeType: r,
                                onClick: () => {
                                    (0, q.pX)((0, X.settingsPathToRoute)(es.od.ACCOUNT));
                                },
                                children: ea.intl.string(ea.t.Vm8akB),
                            }),
                        ],
                    });
                case F.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(f.$T, {
                        color: f.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(f.PM, { onClick: () => s(en.i.UNKNOWN), noticeType: r }),
                            ea.intl.string(ea.t["O9GI+k"]),
                            (0, i.jsx)(f.Z_, {
                                onClick: () => {
                                    (0, $.A)({
                                        subscriptionTier: er.pe.TIER_2,
                                        analyticsLocations: [M.A.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: ei.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => s(en.i.UNKNOWN),
                                    });
                                },
                                noticeType: r,
                                children: ea.intl.string(ea.t.Zi69D4),
                            }),
                        ],
                    });
            }
        },
    });
}
var eu = n(877624),
    ec = n(374200),
    ed = n(131607),
    e_ = n(823901);
function eh(e) {
    let t,
        n,
        { dismissibleContent: r } = e,
        { snowflakeId: s, couldShow: a } =
            ((t = (0, c.bG)([ec.A], () => ec.A.getGiftPromotion()?.id)),
            (n = (0, c.bG)([ec.A], () => null != ec.A.getMarketingComponentByType(eu.C.GIFT_REMINDER_NAGBAR))),
            r === F.M.GIFTING_PROMOTION_REMINDER
                ? { snowflakeId: t, couldShow: n && null != t }
                : { snowflakeId: void 0, couldShow: !1 }),
        [o, l] = (0, ed.Cc)(a ? r : null, s ?? "", en.m.NOTICE_BAR, !0);
    return null == o
        ? null
        : o === F.M.GIFTING_PROMOTION_REMINDER
          ? (0, i.jsx)(e_.y, { markAsDismissed: (e) => l(e) })
          : void 0;
}
var ef = n(264779),
    eE = n(962644),
    ep = n(287809),
    em = n(428262),
    eg = n(946319);
function eA(e) {
    let { dismissibleContent: t } = e,
        n = (0, ef.Cp)(),
        s = (0, c.bG)([ep.default], () => !em.Ay.isPremium(ep.default.getCurrentUser())),
        a = r.useCallback(() => {
            ee.default.track(ei.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED),
                (0, Q.openUserSettings)(Z.X.GIFT_PANEL),
                eE.Ay.dismissOutboundPromotionNotice();
        }, []);
    return null == n
        ? null
        : (0, i.jsx)(et.YS, {
              contentType: t,
              newSnowflakeId: n,
              timeRecurringConfig: { cooldownDurationMs: 0 },
              groupName: en.m.NOTICE_BAR,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: n } = e;
                  if (t === F.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR)
                      return (0, i.jsxs)(f.$T, {
                          color: f.Hv.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(f.PM, {
                                  noticeType: ei.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      eE.Ay.dismissOutboundPromotionNotice(), null !== n && n(en.i.USER_DISMISS);
                                  },
                              }),
                              (0, i.jsx)(p.t, { size: "md", color: "currentColor", className: eg.P }),
                              s ? ea.intl.string(ea.t["5JMiOo"]) : ea.intl.string(ea.t["Pzh+G2"]),
                              (0, i.jsx)(f.Z_, {
                                  noticeType: ei.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      a(), null !== n && n(en.i.TAKE_ACTION);
                                  },
                                  children: ea.intl.string(ea.t.jVcuVY),
                              }),
                          ],
                      });
              },
          });
}
var eI = n(587054),
    eT = n(487329),
    eS = n(102609),
    eN = n(736056),
    eC = n(194261),
    ey = n(548118),
    eO = n(134413),
    eR = n(221950),
    ev = n(71393),
    eb = n(309010),
    eL = n(967198),
    eD = n(585510),
    ew = n(834409),
    eP = n(903093),
    eM = n(746080),
    ex = n(500928);
function eU(e) {
    let { onDismiss: t } = e,
        s = (0, c.bG)([eL.A], () => eL.A.getGuildId()),
        a = (0, c.bG)([eb.A], () => (null != s ? eb.A.getChannelId(s) : null), [s]),
        o = s ?? null,
        l = (0, c.bG)([ev.A], () => (null != o ? ev.A.getGuild(o) : null), [o]),
        { shouldShowIncidentActions: u, incidentData: d, isUnderLockdown: _ } = (0, eD.Li)(o),
        h = (0, eO.fw)(l?.id ?? ei.dJq),
        E = r.useCallback(() => null != l && (0, eR.aZ)(l.id), [l]);
    if (null == l || null == d || !u) return null;
    let p = (e) => {
            e && h && a !== eM.VV.MEMBER_SAFETY && E()
                ? ee.default.track(ei.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                      notice_type: ei.kqX.GUILD_RAID_NOTIFICATION,
                      guild_id: l.id,
                  })
                : (0, m.openModalLazy)(async () => {
                      let e = { source: ew.Eo.NAGBAR, alertType: (0, eP.$5)(d) },
                          { default: t } = await Promise.all([
                              n.e("87960"),
                              n.e("36518"),
                              n.e("40258"),
                              n.e("73669"),
                              n.e("46313"),
                              n.e("43233"),
                          ]).then(n.bind(n, 671576));
                      return (n) => (0, i.jsx)(t, { ...n, guildId: l.id, analyticsData: e });
                  });
        },
        g = (0, i.jsx)(ey.Ay, { className: ex.$f, guild: l, size: ey.Ay.Sizes.MINI }),
        A = (0, eP.ql)(d, l.name);
    if (null != (d.dmsDisabledUntil ?? d.invitesDisabledUntil) && _)
        return (0, i.jsxs)(f.$T, {
            className: ex.lm,
            color: f.Hv.NEUTRAL,
            children: [
                (0, i.jsx)(f.PM, { onClick: t, noticeType: ei.kqX.GUILD_RAID_NOTIFICATION }),
                g,
                A,
                (0, i.jsx)(f.zr, {
                    className: ex.hP,
                    onClick: () => p(!1),
                    children: (0, i.jsxs)("div", {
                        className: ex.rx,
                        children: [
                            (0, i.jsx)(eC.X, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)("span", { children: ea.intl.string(ea.t["c+7oa7"]) }),
                        ],
                    }),
                }),
            ],
        });
    let I = (0, eP.P$)(d)
            ? ea.intl.formatToPlainString(ea.t.tZTx2E, { guildName: l.name })
            : (0, eP.Qm)(d)
              ? ea.intl.formatToPlainString(ea.t["1bSmxr"], { guildName: l.name })
              : ea.intl.formatToPlainString(ea.t.W87xDE, { guildName: l.name }),
        T = h && a === eM.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(f.$T, {
        className: ex.lm,
        color: f.Hv.WARNING,
        children: [
            (0, i.jsx)(f.PM, { onClick: t, noticeType: ei.kqX.GUILD_RAID_NOTIFICATION }),
            g,
            I,
            !T &&
                (0, i.jsx)(f.zr, {
                    className: ex.hP,
                    onClick: () => p(!0),
                    children: (0, i.jsx)("div", {
                        className: ex.rx,
                        children: (0, i.jsx)("span", { children: ea.intl.string(ea.t.zDJDhr) }),
                    }),
                }),
        ],
    });
}
var ek = n(995786),
    eG = n(206835),
    eV = n(280450),
    eF = n(696451),
    eB = n(229527),
    eH = n(81400),
    ej = n(340837);
function eW(e) {
    let { guildId: t, analyticsLocations: n } = e,
        [r, s] = (0, eH.j8)({ guildId: t, analyticsLocations: n }),
        a = s ? ea.intl.string(ea.t["6ndMcq"]) : ea.intl.string(ea.t["0eiu6J"]),
        o = s ? ea.intl.string(ea.t.S09nw4) : ea.intl.string(ea.t.tEttXd);
    return (0, i.jsxs)(f.$T, { color: f.Hv.DANGER, children: [a, (0, i.jsx)(f.zr, { onClick: r, children: o })] });
}
function eY() {
    let e = (0, eG.A)({ scrollPosition: es._F.GUILD_TAG });
    return (0, i.jsxs)(f.$T, {
        color: f.Hv.DANGER,
        children: [
            ea.intl.string(ea.t.Zqlecb),
            (0, i.jsx)(f.zr, { onClick: e, children: ea.intl.string(ea.t.SJehVW) }),
        ],
    });
}
function eK(e) {
    let { analyticsLocations: t, ...n } = e,
        { analyticsLocations: r } = (0, x.Ay)(t, M.A.AUTOMOD_NAGBAR_NOTICE),
        s = (0, c.bG)([eV.default, eF.Ay], () => {
            if (null == n.guildId) return new Set();
            let e = eV.default.getId();
            return (0, eB.wj)(eF.Ay.getMember(n.guildId, e));
        }, [n.guildId]);
    return s.has(ej.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || s.has(ej.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, i.jsx)(eW, { ...n, analyticsLocations: r })
        : s.has(ej.D.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, i.jsx)(eY, {})
          : (0, i.jsx)(eW, { ...n, analyticsLocations: r });
}
var e$ = n(202384),
    ez = n(51758);
n(321073);
var eq = n(503698),
    eZ = n.n(eq),
    eX = n(873263),
    eQ = n(314116),
    eJ = n(821609),
    e0 = n(334465),
    e1 = n(624458),
    e2 = n(513461),
    e3 = n(709977),
    e6 = n(212455),
    e4 = n(182430),
    e5 = n(580537);
let e7 = function () {
    let e = (0, c.bG)([eL.A], () => eL.A.getGuildId(), []),
        t = (0, c.bG)([ev.A], () => ev.A.getGuild(e), [e]),
        r = (0, c.bG)([e6.A], () => (null != e ? e6.A.getRequest(e) : null), [e]),
        s = (0, eX.zy)(),
        a = (0, e0.B)(s.pathname, ei.BVt.CHANNEL(t?.id, eM.VV.GUILD_ONBOARDING))?.isExact === !0;
    if (null == t || !(0, e3.Qd)(t) || a) return null;
    let o = r?.applicationStatus ?? e2.B5.STARTED,
        l = null,
        u = null,
        d = null,
        h = [e4.lm, e5.lm];
    switch (o) {
        case e2.B5.SUBMITTED:
            (l = ea.intl.string(ea.t["5iLvSx"])),
                (u = ea.intl.string(ea.t.mqtdmQ)),
                (d = () => {
                    (0, eQ.A)({
                        title: ea.intl.string(ea.t.aIz1oV),
                        subtitle: ea.intl.string(ea.t["13tjTU"]),
                        variant: "primary",
                        confirmText: ea.intl.string(ea.t["cY+Oob"]),
                        onConfirm: () => e1.A.removeGuildJoinRequest(t.id),
                    });
                });
            break;
        case e2.B5.REJECTED:
            (l = ea.intl.string(ea.t.lk30cY)),
                (u = ea.intl.string(ea.t["8RrsHr"])),
                (d = () => {
                    (0, m.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("25099"), n.e("14382")]).then(n.bind(n, 463325));
                        return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                    });
                }),
                h.push(e4.z3);
            break;
        default:
            (l = ea.intl.string(ea.t.G5YKXP)),
                (u = ea.intl.string(ea.t["r8/DT+"])),
                (d = () => {
                    (0, e$.Ze)(t.id);
                });
    }
    return (0, i.jsxs)("div", {
        className: eZ()(...h),
        children: [
            (0, i.jsx)(_.E, { className: e4.wx, variant: "text-sm/normal", children: l }),
            (0, i.jsx)(eJ.$, { variant: "overlay-primary", size: "sm", onClick: d, text: u }),
        ],
    });
};
var e8 = n(477155),
    e9 = n(22877);
function te(e) {
    let { buttonText: t, onGoBack: n, onDismiss: r, showCloseButton: s } = e;
    return (0, i.jsxs)(f.$T, {
        className: e9.eR,
        children: [
            s && (0, i.jsx)(f.PM, { onClick: r, className: e9.b, noticeType: ei.kqX.BACK_TO_PREVIOUS_SCREEN }),
            (0, i.jsx)(eJ.$, { text: t, variant: "overlay-secondary", size: "sm", icon: e8.r, onClick: n }),
        ],
    });
}
var tt = n(468689),
    tn = n(699609),
    ti = n(862482),
    tr = n(66834),
    ts = n(385648),
    ta = n(484154);
let to = function () {
    let e = (0, c.bG)([eL.A], () => eL.A.getGuildId(), []),
        t = (0, c.bG)([ev.A], () => ev.A.getGuild(e), [e]),
        [n, s] = r.useState(!1);
    if (null == t) return null;
    let a = async () => {
        s(!0);
        try {
            ts.cf(t.id), await tr.A.joinGuild(t.id, { source: ei.Q4z.NOTICE_BAR });
        } catch {
            s(!1);
        }
    };
    return (0, i.jsxs)("div", {
        className: eZ()(ta.lm, e5.lm),
        children: [
            (0, i.jsxs)(ti.$n, {
                look: ti.$n.Looks.OUTLINED,
                color: ti.$n.Colors.WHITE,
                size: ti.$n.Sizes.NONE,
                className: eZ()(ta.x6, ta.aX),
                innerClassName: ta.gb,
                onClick: function () {
                    (0, q.JK)().goBack();
                },
                children: [
                    (0, i.jsx)(e8.r, { size: "xs", color: "currentColor", className: ta.UE }),
                    ea.intl.string(ea.t["13/7kX"]),
                ],
            }),
            (0, i.jsx)(_.E, { className: ta.wx, variant: "text-sm/normal", children: ea.intl.string(ea.t["N/y2WE"]) }),
            (0, i.jsx)(ti.$n, {
                className: ta.x6,
                look: ti.$n.Looks.OUTLINED,
                color: ti.$n.Colors.WHITE,
                size: ti.$n.Sizes.NONE,
                submitting: n,
                onClick: a,
                children: ea.intl.format(ea.t.uHN7ny, { guild: t.name }),
            }),
        ],
    });
};
var tl = n(801644),
    tu = n(74848),
    tc = n(602339),
    td = n(111344);
let t_ = {
    "--custom-notice-background": "var(--background-feedback-warning)",
    "--custom-notice-text": "var(--text-strong)",
};
function th(e) {
    let { daysRemaining: t } = e;
    (0, ea.useSyncMessages)(tc.messagesLoader);
    let n = r.useCallback(() => {
        ee.default.track(ei.HAw.PARENTAL_CONSENT_WARNING_BANNER_TAPPED, { days_remaining: t }),
            (0, Q.openUserSettings)(Z.X.FAMILY_CENTER_PANEL);
    }, [t]);
    return (0, i.jsx)(f.$T, {
        color: f.Hv.CUSTOM,
        style: t_,
        children: (0, i.jsxs)("div", {
            className: td.Q,
            children: [
                (0, i.jsx)(_.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    tag: "span",
                    children:
                        null != t && t > 0
                            ? ea.intl.format(tc.default.F0hdak, { count: t })
                            : ea.intl.string(tc.default.LTzc00),
                }),
                (0, i.jsx)(eJ.$, {
                    variant: "secondary",
                    size: "sm",
                    text: ea.intl.string(tc.default.xYJKEy),
                    onClick: n,
                }),
            ],
        }),
    });
}
var tf = n(234419),
    tE = n(661531),
    tp = n(367727),
    tm = n(635995),
    tg = n(88001),
    tA = n(466919),
    tI = n(375043);
function tT(e) {
    let { premiumSubscription: t } = e,
        s = t?.id,
        a = r.useCallback(() => {
            null != s && (0, tp.qr)(F.M.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR, s, { dismissAction: en.i.USER_DISMISS });
        }, [s]),
        o = r.useCallback(() => {
            a(),
                ee.default.track(ei.HAw.APP_NOTICE_CLOSED, {
                    notice_type: ei.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
                });
        }, [a]),
        l = r.useCallback(() => {
            null != t &&
                (ee.default.track(ei.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: ei.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
                }),
                a(),
                (0, m.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("3515"),
                        n.e("44616"),
                        n.e("74630"),
                        n.e("48948"),
                        n.e("85579"),
                    ]).then(n.bind(n, 785606));
                    return (n) => (0, i.jsx)(e, { ...n, subscription: t });
                }));
        }, [t, a]);
    return (0, i.jsxs)(tm.T0, {
        onClick: o,
        className: tI.A,
        children: [
            (0, i.jsx)(p.t, { color: tE.A.colors.ICON_STRONG }),
            (0, i.jsx)(tm.In, {
                children: ea.intl.format(tA.default.fFt9bd, { premiumGroupProductName: (0, tg.DP)() }),
            }),
            (0, i.jsx)(eJ.$, {
                onClick: l,
                text: ea.intl.string(tA.default["5fZHp3"]),
                size: "sm",
                variant: "overlay-primary",
            }),
        ],
    });
}
var tS = n(754804),
    tN = n(378974),
    tC = n(340124),
    ty = n(14594);
function tO() {
    let [e, t] = (0, ed.Wl)(F.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: ty.aH });
    return e !== F.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK
        ? null
        : (0, i.jsxs)(f.$T, {
              color: f.Hv.BRAND,
              children: [
                  (0, i.jsx)(f.PM, { onClick: () => t(en.i.DISMISS), noticeType: ei.kqX.IGNORE_USER_FEEDBACK_NAGBAR }),
                  ea.intl.string(ea.t.XkeW9N),
                  (0, i.jsx)(f.Z_, {
                      onClick: () => {
                          (0, m.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e("33111"),
                                  n.e("22255"),
                                  n.e("55925"),
                                  n.e("18413"),
                                  n.e("37381"),
                                  n.e("26484"),
                                  n.e("74192"),
                              ]).then(n.bind(n, 976627));
                              return (t) => (0, i.jsx)(e, { ...t });
                          }),
                              t(en.i.TAKE_ACTION);
                      },
                      noticeType: ei.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
                      children: ea.intl.string(ea.t.vcdNKv),
                  }),
              ],
          });
}
var tR = n(825484),
    tv = n(379257),
    tb = n(847599),
    tL = n(734057),
    tD = n(849736),
    tw = n(354583),
    tP = n(366098),
    tM = n(418208),
    tx = n(992262);
function tU(e) {
    if (!e && (0, tM.Cf)())
        return void tv.A.showAgeVerificationGetStartedModal({ entryPoint: tb.q1.STAGE_CHANNEL_RAISE_HAND });
    let t = eb.A.getVoiceChannelId();
    if (null == t) return;
    let n = tL.A.getChannel(t);
    null != n && (0, tD.e7)(n, e);
}
function tk(e) {
    let { channelId: t } = e,
        n = (0, tP.D3)(t) ?? 0,
        r = (0, tP.Xk)(t) ?? 0;
    return n > 0 && r > 0
        ? (0, i.jsx)("div", {
              className: tx.Z5,
              children: (0, i.jsx)("div", { className: eZ()(tx.qQ, tx.lN), children: ea.intl.string(ea.t.xlJRfv) }),
          })
        : n > 0
          ? (0, i.jsx)("div", {
                className: tx.Z5,
                children: (0, i.jsx)("div", { className: eZ()(tx.qQ, tx.lN), children: ea.intl.string(ea.t.WYad9Z) }),
            })
          : r > 0
            ? (0, i.jsx)("div", {
                  className: tx.Z5,
                  children: (0, i.jsx)("div", { className: eZ()(tx.qQ, tx.lN), children: ea.intl.string(ea.t.eHq2OF) }),
              })
            : null;
}
function tG() {
    let e = (0, tw.A)();
    return null == e
        ? null
        : (0, i.jsxs)(f.$T, {
              className: tx.kL,
              color: f.Hv.DEFAULT,
              children: [
                  ea.intl.string(ea.t.Ul1RJQ),
                  (0, i.jsx)(tk, { channelId: e.id }),
                  (0, i.jsxs)(tR.e, {
                      size: "sm",
                      className: tx.GC,
                      children: [
                          (0, i.jsx)(eJ.$, {
                              variant: "overlay-primary",
                              text: ea.intl.string(ea.t.MpO0px),
                              onClick: () => tU(!1),
                          }),
                          (0, i.jsx)(eJ.$, {
                              variant: "secondary",
                              onClick: () => tU(!0),
                              text: ea.intl.string(ea.t["1YDv7a"]),
                          }),
                      ],
                  }),
              ],
          });
}
var tV = n(952818),
    tF = n(935671);
function tB() {
    (0, tF.sL)("nagbar");
}
function tH() {
    return null == (0, c.bG)([tV.Ay], () => tV.Ay.getVisibleGame())
        ? null
        : (0, i.jsxs)(f.$T, {
              color: f.Hv.DANGER,
              children: [
                  (0, i.jsx)(f.PM, { noticeType: ei.kqX.SYSTEM_SERVICE_WARNING, onClick: () => t9() }),
                  ea.intl.string(ea.t["5rPt+j"]),
                  (0, i.jsx)(f.Z_, {
                      onClick: tB,
                      noticeType: ei.kqX.SYSTEM_SERVICE_WARNING,
                      children: ea.intl.string(ea.t["1iI46O"]),
                  }),
              ],
          });
}
function tj() {
    return (0, i.jsxs)(f.$T, {
        color: f.Hv.DANGER,
        children: [
            ea.intl.string(ea.t.lQiCJ6),
            (0, i.jsx)(f.Z_, {
                noticeType: ei.kqX.PTT_NO_KEYBIND_WARNING,
                onClick: function () {
                    (0, Q.openUserSettings)(Z.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING);
                },
                children: ea.intl.string(ea.t["UgQN+9"]),
            }),
        ],
    });
}
var tW = n(189213),
    tY = n(150934);
function tK(e) {
    let [t, n] = r.useState(!1);
    return (0, i.jsx)(tW.Modal, {
        size: "md",
        title: ea.intl.string(ea.t["zQ1+Jw"]),
        subtitle: ea.intl.string(ea.t.K1gWXn),
        actions: [
            {
                text: ea.intl.string(ea.t.BddRzS),
                onClick: () => {
                    t && I.A.setSilenceWarning(!1), e.onClose();
                },
                variant: "primary",
            },
        ],
        actionBarInput: (0, i.jsx)(tY.S, {
            checked: t,
            onChange: (e) => n(e),
            label: ea.intl.string(ea.t.XAiAgD),
            labelType: "secondary",
        }),
        ...e,
    });
}
var t$ = n(451409),
    tz = n(763827),
    tq = n(67480),
    tZ = n(147964),
    tX = n(177141),
    tQ = n(975571),
    tJ = n(723702),
    t0 = n(325278),
    t1 = n(831502),
    t2 = n(731854);
let t3 = new V.A("Notice");
function t6(e) {
    let { error: t, allowClick: n = !1 } = e,
        r = (0, eT.B1)(t)?.errorCode,
        s = ea.intl.formatToPlainString(ea.t.ejOT95, { errorCode: r }),
        a = (0, i.jsx)(_.E, {
            variant: "text-sm/bold",
            color: "currentColor",
            tag: "span",
            className: eo.fU,
            selectable: !0,
            children: s,
        });
    return n
        ? (0, i.jsx)(h.D, {
              tag: "span",
              className: eo.wz,
              onClick: () => open(tQ.A.getArticleURL(ei.MVz.AV_ERROR_CODES)),
              children: a,
          })
        : a;
}
function t4(e) {
    let { noticeType: t } = e;
    return (0, i.jsxs)(f.$T, {
        color: f.Hv.DANGER,
        children: [
            (0, i.jsx)(f.PM, {
                noticeType: t,
                onClick: () => {
                    t9();
                },
            }),
            ea.intl.string(ea.t.o3zuYz),
            (0, i.jsx)(t6, { error: eT.iy.NO_INPUT_DEVICES }),
            (0, i.jsx)(f.eC, {
                href: tQ.A.getArticleURL(ei.MVz.NO_INPUT_DETECTED),
                noticeType: t,
                children: ea.intl.string(ea.t.RYKKox),
            }),
        ],
    });
}
function t5(e) {
    let { noticeType: t } = e;
    return (0, i.jsxs)(f.$T, {
        color: f.Hv.DANGER,
        children: [
            (0, i.jsx)(f.PM, {
                noticeType: t,
                onClick: () => {
                    t9();
                },
            }),
            ea.intl.string(ea.t.Up0ApK),
            (0, i.jsx)(t6, { error: eT.iy.VIDEO_BACKGROUND_UNAVAILABLE }),
            (0, i.jsx)(f.zr, {
                onClick: () => (0, Q.openUserSettings)(Z.X.CAMERA_CATEGORY),
                children: ea.intl.string(ea.t.kRwxfi),
            }),
        ],
    });
}
function t7(e) {
    return (0, tJ.isWindows)() && u().satisfies(w.A?.os.release, t0.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function t8(e) {
    let t,
        n,
        { noticeType: r } = e,
        s = (0, tu.x5)(t2.oh.AUDIO_INPUT),
        a = s?.guid ?? "",
        { inputDeviceOSMuted: o, inputDeviceOSVolume: l } = (0, c.cf)([t$.Ay], () => ({
            inputDeviceOSMuted: t$.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: t$.Ay.getInputDeviceOSVolume(),
        })),
        u = !1;
    return (
        !0 === o
            ? ((t = ea.intl.string(ea.t.ppW3ri)),
              (n = (0, i.jsx)(f.eC, { href: t7(a), noticeType: r, children: ea.intl.string(ea.t.QghSIq) })))
            : 0 === l
              ? ((t = ea.intl.string(ea.t.j4gGA4)),
                (n = (0, i.jsx)(f.eC, { href: t7(a), noticeType: r, children: ea.intl.string(ea.t.QghSIq) })))
              : t$.Ay.supports(t2.O5.LOOPBACK)
                ? ((t = ea.intl.string(ea.t.dNAJ18)),
                  (u = !0),
                  (n = (0, i.jsx)(f.zr, {
                      onClick: () => {
                          (0, Q.openUserSettings)(Z.X.VOICE_AND_VIDEO_PANEL);
                      },
                      children: ea.intl.string(ea.t.I6YlB4),
                  })))
                : ((t = ea.intl.string(ea.t.nCO9bI)),
                  (n = (0, i.jsx)(f.eC, {
                      href: tQ.A.getArticleURL(ei.MVz.NO_INPUT_DETECTED),
                      noticeType: r,
                      children: ea.intl.string(ea.t.RYKKox),
                  }))),
        (0, i.jsxs)(f.$T, {
            color: f.Hv.DANGER,
            children: [
                (0, i.jsx)(f.PM, {
                    noticeType: r,
                    onClick: () => {
                        t9(), (0, m.openModal)((e) => (0, i.jsx)(tK, { ...e }));
                    },
                }),
                t,
                (0, i.jsx)(t6, { allowClick: u, error: eT.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function t9(e) {
    C.A.dismiss(null != e ? { untilAtLeast: a()(e) } : void 0);
}
let ne = r.memo(function () {
    let e = (0, c.bG)([ep.default], () => ep.default.getCurrentUser()),
        t = (0, c.bG)([eL.A], () => eL.A.getGuildId()),
        s = (0, c.bG)([tX.Ay], () => tX.Ay.getNotice()),
        { analyticsLocations: a } = (0, x.Ay)(),
        l = (0, D.Ay)(),
        u = (0, ez.H)(t),
        _ = (0, tf.V)();
    if (
        (r.useEffect(() => {
            if (s?.type != null) {
                let e;
                if (
                    null == _ &&
                    (s.type === ei.kqX.PREMIUM_TIER_2_TRIAL_ENDING || s.type === ei.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
                )
                    return;
                let n = {};
                null != t && (n.guild_id = t),
                    _?.trial_id != null && (n.trial_id = _.trial_id),
                    (e = { notice_type: s.type, ...n }),
                    ee.default.track(ei.HAw.APP_NOTICE_VIEWED, e);
            }
        }, [s?.type, t, _]),
        r.useEffect(() => {
            if (null != s && s.type === ei.kqX.SURVEY && null != s.metadata) {
                let { metadata: e } = s,
                    t = eN.A.getUserExperimentDescriptor(e.id);
                null != t && (0, eS.LQ)(e.id, t),
                    (async () => {
                        s.metadata?.id != null && (await (0, b.oX)(s.metadata?.id));
                    })();
            }
        }, [s]),
        null == s)
    )
        return null;
    let h = null != s.type ? tX.Re[s.type] : null,
        S = null != s.type ? tX.rV[s.type] : null,
        C = null != s.type ? tX.f7[s.type] : null,
        M = tX.pe[s.type];
    if (null != h) return (0, i.jsx)(eI.$, { dismissibleContent: h, noticeType: s.type });
    if (null != S) return (0, i.jsx)(eh, { dismissibleContent: S });
    if (null != C) return (0, i.jsx)(eA, { dismissibleContent: C });
    if (null != M) return (0, i.jsx)(el, { dismissibleContent: M, noticeType: s.type });
    let V = s.metadata?.premiumType;
    switch (s.type) {
        case ei.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, i.jsx)(tj, {});
        case ei.kqX.LURKING_GUILD:
            return (0, i.jsx)(to, {});
        case ei.kqX.PENDING_MEMBER:
            return (0, i.jsx)(e7, {});
        case ei.kqX.INVITED_TO_SPEAK:
            return (0, i.jsx)(tG, {});
        case ei.kqX.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: F } = s.metadata;
            return (0, i.jsx)(eU, { onDismiss: () => t9(F) });
        case ei.kqX.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: B } = s.metadata;
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.WARNING,
                children: [
                    (0, i.jsx)(f.PM, { onClick: () => t9(B), noticeType: s.type }),
                    ea.intl.format(ea.t["08KQ1P"], { helpCenterLink: tQ.A.getArticleURL(ei.MVz.WIN32_DEPRECATE) }),
                ],
            });
        case ei.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: H } = s.metadata;
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.WARNING,
                children: [
                    (0, i.jsx)(f.PM, { onClick: () => t9(H), noticeType: s.type }),
                    ea.intl.format(ea.t["8Je+dX"], { helpCenterLink: tQ.A.getArticleURL(ei.MVz.WIN7_8_DEPRECATE) }),
                ],
            });
        case ei.kqX.WIN_COMPAT_MODE_MESSAGE:
            let { dismissUntil: j } = s.metadata;
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.WARNING,
                children: [
                    (0, i.jsx)(f.PM, { onClick: () => t9(j), noticeType: s.type }),
                    ea.intl.string(ea.t["9DJgOg"]),
                ],
            });
        case ei.kqX.MACOS_DEPRECATED_MESSAGE:
            let { dismissUntil: W } = s.metadata,
                Y = 20 === parseInt(w.A?.os.release.split(".")[0]);
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.WARNING,
                children: [
                    (0, i.jsx)(f.PM, { onClick: () => t9(W), noticeType: s.type }),
                    ea.intl.format(ea.t.q8VPLo, {
                        helpCenterLink: tQ.A.getArticleURL(Y ? ei.MVz.MACOS_20_DEPRECATE : ei.MVz.MACOS_19_DEPRECATE),
                    }),
                ],
            });
        case ei.kqX.E2EE_UPDATE_REQUIRED:
            let { dismissUntil: K } = s.metadata;
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.WARNING,
                children: [
                    (0, i.jsx)(f.PM, { onClick: () => t9(K), noticeType: s.type }),
                    ea.intl.format(tJ.isPlatformEmbedded ? ea.t.J232TI : ea.t.vceuiL, {
                        helpCenterLink: tQ.A.getArticleURL(ei.MVz.END_TO_END_ENCRYPTION),
                    }),
                ],
            });
        case ei.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.WARNING,
                children: [
                    (0, i.jsx)(f.PM, { onClick: () => t9(), noticeType: s.type }),
                    ea.intl.string(ea.t.iW0fcQ),
                    (0, i.jsx)(f.eC, {
                        href: tQ.A.getArticleURL(ei.MVz.WINDOWS_MEDIA_PACK),
                        target: "_blank",
                        noticeType: s.type,
                        children: ea.intl.string(ea.t.LQG5j6),
                    }),
                ],
            });
        case ei.kqX.GENERIC:
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.DEFAULT,
                children: [
                    (0, i.jsx)(f.PM, { onClick: () => t9(), noticeType: s.type }),
                    s.message,
                    null != s.buttonText
                        ? (0, i.jsx)(f.Z_, { onClick: s.callback, noticeType: s.type, children: s.buttonText })
                        : null,
                ],
            });
        case ei.kqX.LAUNCH_GAME_FAILURE:
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.DANGER,
                children: [
                    (0, i.jsx)(f.PM, { onClick: () => t9(), noticeType: s.type }),
                    s.message,
                    null != s.buttonText
                        ? (0, i.jsx)(f.Z_, { onClick: s.callback, noticeType: s.type, children: s.buttonText })
                        : null,
                ],
            });
        case ei.kqX.VOICE_DISABLED:
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.WARNING,
                children: [
                    (0, i.jsx)(f.PM, {
                        onClick: () => {
                            y.clearRemoteDisconnectVoiceChannelId(), t9();
                        },
                        noticeType: s.type,
                    }),
                    ea.intl.string(ea.t.bOQ3jV),
                    (0, i.jsx)(f.Z_, {
                        onClick: () => {
                            let e = tz.A.getRemoteDisconnectVoiceChannelId();
                            null != e && null != tL.A.getChannel(e) && O.default.selectVoiceChannel(e);
                        },
                        noticeType: s.type,
                        children: ea.intl.string(ea.t.vD60Pv),
                    }),
                ],
            });
        case ei.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.DEFAULT,
                children: [
                    (0, i.jsx)(f.PM, {
                        onClick: () => {
                            y.clearLastSessionVoiceChannelId(), t9();
                        },
                        noticeType: s.type,
                    }),
                    ea.intl.string(ea.t.jY2lUA),
                    (0, i.jsx)(f.Z_, {
                        onClick: () => {
                            let e = tz.A.getLastSessionVoiceChannelId();
                            null != e && null != tL.A.getChannel(e) && O.default.selectVoiceChannel(e);
                        },
                        noticeType: s.type,
                        children: ea.intl.string(ea.t.vD60Pv),
                    }),
                ],
            });
        case ei.kqX.SPOTIFY_AUTO_PAUSED:
            let z = P.A.get(ei.fg2.SPOTIFY);
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.DANGER,
                children: [
                    (0, i.jsx)(f.PM, { onClick: () => t9(), noticeType: s.type }),
                    (0, i.jsx)("img", {
                        alt: "",
                        className: eo.tV,
                        src: (0, d.q)(l) ? z.icon.darkSVG : z.icon.whiteSVG,
                    }),
                    ea.intl.string(ea.t.D8Cp76),
                    (0, i.jsx)(f.Z_, {
                        onClick: () => (0, Q.openUserSettings)(Z.X.VOICE_AND_VIDEO_PANEL),
                        noticeType: s.type,
                        children: ea.intl.string(ea.t.NiTd0e),
                    }),
                    (0, i.jsx)(E.Anchor, {
                        className: eo.uD,
                        href: tQ.A.getArticleURL(ei.MVz.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: ea.intl.string(ea.t.CiqAIU),
                    }),
                ],
            });
        case ei.kqX.UNCLAIMED_ACCOUNT:
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.DEFAULT,
                children: [
                    ea.intl.string(ea.t["f+Zaol"]),
                    (0, i.jsx)(f.Z_, {
                        noticeType: s.type,
                        onClick: () => (u && null != t ? (0, e$.Ze)(t) : k.R()),
                        children: ea.intl.string(ea.t.fiNVin),
                    }),
                ],
            });
        case ei.kqX.UNVERIFIED_ACCOUNT:
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.DEFAULT,
                children: [
                    ea.intl.string(ea.t["3sWbf3"]),
                    (0, i.jsx)(f.Z_, {
                        noticeType: s.type,
                        onClick: () => {
                            T.A.verifyResend(),
                                A.A.show({
                                    title: ea.intl.string(ea.t.LykQYk),
                                    body: ea.intl.format(ea.t.azKEPy, { email: e?.email }),
                                    cancelText: ea.intl.string(ea.t.Vm8akB),
                                    onCancel: k.R,
                                });
                        },
                        children: ea.intl.string(ea.t.WnX4J2),
                    }),
                ],
            });
        case ei.kqX.SCHEDULED_MAINTENANCE:
            if (null == s.metadata) return null;
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.DEFAULT,
                children: [
                    (0, i.jsx)(f.PM, { onClick: () => R.A.ackScheduledMaintenance(), noticeType: s.type }),
                    ea.intl.format(ea.t["yb96S+"], s.metadata),
                    (0, i.jsx)(f.eC, {
                        href: `${ei.qF7.STATUS}/incidents/${s.metadata.id}`,
                        noticeType: s.type,
                        children: ea.intl.string(ea.t.hvVgAZ),
                    }),
                ],
            });
        case ei.kqX.NO_INPUT_DETECTED:
            return (0, i.jsx)(t8, { noticeType: s.type });
        case ei.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, i.jsx)(t4, { noticeType: s.type });
        case ei.kqX.VIDEO_BACKGROUND_UNAVAILABLE:
            return (0, i.jsx)(t5, { noticeType: s.type });
        case ei.kqX.HARDWARE_MUTE:
            if (null != s.metadata) {
                let { vendor: e, model: t } = s.metadata;
                return (0, i.jsxs)(f.$T, {
                    color: f.Hv.DANGER,
                    children: [
                        ea.intl.format(ea.t.qoDex7, { vendorName: e.name, modelName: t.name }),
                        (0, i.jsx)(f.PM, {
                            noticeType: s.type,
                            onClick: () => {
                                I.A.setEnableHardwareMuteNotice(!1), t9();
                            },
                        }),
                        (0, i.jsx)(f.eC, {
                            href: t.url,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            noticeType: s.type,
                            children: ea.intl.string(ea.t["Yl/Riu"]),
                        }),
                    ],
                });
            }
            if (tl.A.getConfig({ location: "Notice.AudioIssueNoticeHardwareMute" }).enableHardwareSilenceWarning)
                return (0, i.jsxs)(f.$T, {
                    color: f.Hv.INFO,
                    children: [
                        ea.intl.format(ea.t.QMw8Fd, {}),
                        (0, i.jsx)(f.PM, {
                            noticeType: s.type,
                            onClick: () => {
                                I.A.setEnableHardwareMuteNotice(!1), t9();
                            },
                        }),
                    ],
                });
            return null;
        case ei.kqX.STREAMER_MODE:
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.STREAMER_MODE,
                children: [
                    (0, i.jsx)(f.PM, { onClick: () => t9(), noticeType: ei.kqX.STREAMER_MODE }),
                    ea.intl.string(ea.t.iEgBXp),
                    (0, i.jsx)(f.Z_, {
                        onClick: () => v.A.setEnabled(!1),
                        noticeType: ei.kqX.STREAMER_MODE,
                        children: ea.intl.string(ea.t.R9GHya),
                    }),
                ],
            });
        case ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == s.metadata) return null;
            let { skuId: q, applicationId: X } = s.metadata,
                J = tq.A.get(q),
                et = U.A.getApplication(X);
            if (null == J || null == et) return null;
            let en = { page: ei.liQ.IN_APP };
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(f.PM, { onClick: () => N(J.id), noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK }),
                    (0, i.jsx)(p.t, { size: "md", color: "currentColor", className: eo.PC }),
                    ea.intl.format(ea.t["g3MU/+"], { applicationName: et.name, skuName: J.name }),
                    (0, i.jsx)(f.Z_, {
                        noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: async () => {
                            try {
                                let { openIAPPurchaseModal: e } = await Promise.all([
                                    n.e("86832"),
                                    n.e("95512"),
                                    n.e("69273"),
                                    n.e("72210"),
                                    n.e("3155"),
                                    n.e("82104"),
                                    n.e("41711"),
                                    n.e("49623"),
                                    n.e("35316"),
                                    n.e("38838"),
                                    n.e("45214"),
                                    n.e("99253"),
                                    n.e("17202"),
                                    n.e("90862"),
                                    n.e("97189"),
                                    n.e("16918"),
                                    n.e("33730"),
                                    n.e("24059"),
                                    n.e("42306"),
                                    n.e("11291"),
                                    n.e("96846"),
                                    n.e("19709"),
                                    n.e("4251"),
                                    n.e("47412"),
                                    n.e("65327"),
                                    n.e("41625"),
                                    n.e("96490"),
                                    n.e("85484"),
                                    n.e("51772"),
                                    n.e("6605"),
                                    n.e("11262"),
                                    n.e("54483"),
                                    n.e("62461"),
                                    n.e("25677"),
                                    n.e("73679"),
                                    n.e("73178"),
                                    n.e("333"),
                                    n.e("97638"),
                                    n.e("22995"),
                                    n.e("84896"),
                                    n.e("38759"),
                                    n.e("51943"),
                                    n.e("90072"),
                                    n.e("88016"),
                                    n.e("84133"),
                                    n.e("13627"),
                                    n.e("57940"),
                                    n.e("58171"),
                                    n.e("48404"),
                                    n.e("39375"),
                                    n.e("47944"),
                                    n.e("84473"),
                                    n.e("70990"),
                                    n.e("15130"),
                                    n.e("74051"),
                                    n.e("50541"),
                                    n.e("23924"),
                                    n.e("42205"),
                                    n.e("55675"),
                                    n.e("48226"),
                                    n.e("10471"),
                                    n.e("64827"),
                                    n.e("63232"),
                                    n.e("68261"),
                                    n.e("7167"),
                                    n.e("11301"),
                                    n.e("96643"),
                                    n.e("84569"),
                                    n.e("60235"),
                                    n.e("61737"),
                                    n.e("92789"),
                                    n.e("21335"),
                                    n.e("77333"),
                                    n.e("47834"),
                                    n.e("11735"),
                                    n.e("85927"),
                                    n.e("834"),
                                    n.e("2368"),
                                    n.e("42842"),
                                    n.e("33115"),
                                    n.e("6338"),
                                    n.e("18573"),
                                    n.e("55936"),
                                    n.e("85404"),
                                    n.e("44057"),
                                    n.e("17879"),
                                    n.e("88774"),
                                    n.e("10120"),
                                    n.e("62175"),
                                    n.e("31988"),
                                    n.e("44571"),
                                    n.e("34303"),
                                    n.e("97270"),
                                    n.e("45959"),
                                    n.e("73122"),
                                    n.e("8304"),
                                    n.e("93159"),
                                    n.e("71202"),
                                    n.e("8739"),
                                    n.e("88131"),
                                    n.e("42834"),
                                    n.e("43430"),
                                    n.e("94723"),
                                    n.e("62931"),
                                    n.e("58529"),
                                    n.e("58038"),
                                    n.e("62531"),
                                    n.e("34801"),
                                    n.e("6174"),
                                    n.e("46070"),
                                    n.e("23532"),
                                    n.e("52557"),
                                    n.e("55654"),
                                    n.e("68574"),
                                    n.e("63645"),
                                    n.e("5636"),
                                    n.e("32085"),
                                    n.e("24038"),
                                    n.e("13351"),
                                    n.e("62075"),
                                ]).then(n.bind(n, 4630));
                                await e({
                                    applicationId: et.id,
                                    skuId: J.id,
                                    openPremiumPaymentModal: () => {
                                        (0, $.A)({
                                            initialPlanId: null,
                                            subscriptionTier: er.pe.TIER_2,
                                            analyticsLocations: a,
                                            analyticsObject: en,
                                        });
                                    },
                                    analyticsLocations: a,
                                    analyticsLocationObject: en,
                                    context: __OVERLAY__ ? ei.BRT.OVERLAY : ei.BRT.APP,
                                }),
                                    N(J.id);
                            } catch (e) {
                                null != e && t3.error("Failed to open off-platform premium perk modal", e);
                            }
                        },
                        children: ea.intl.string(ea.t.KEwPYx),
                    }),
                ],
            });
        case ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == s.metadata) return null;
            let { skuId: e, applicationId: t } = s.metadata,
                n = tq.A.get(e),
                r = U.A.getApplication(t);
            if (null == n || null == r) return null;
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(f.PM, {
                        onClick: () => t9(),
                        noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, i.jsx)(p.t, { size: "md", color: "currentColor", className: eo.PC }),
                    ea.intl.format(ea.t.LquIKC, { applicationName: r.name, skuName: n.name }),
                    (0, i.jsx)(f.zr, {
                        children: (0, i.jsx)(o.N_, {
                            onClick: () => t9(),
                            to: {
                                pathname: ei.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: { scrollRestoration: !1 },
                            },
                            children: ea.intl.string(ea.t.hvVgAZ),
                        }),
                    }),
                ],
            });
        }
        case ei.kqX.SURVEY: {
            let e = s.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: r, url: a, embedded: o, id: l } = e;
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.CUSTOM,
                children: [
                    (0, i.jsx)(f.PM, {
                        noticeType: ei.kqX.SURVEY,
                        onClick: () => {
                            (0, b.pX)(t, !0);
                        },
                    }),
                    n,
                    (0, i.jsx)(f.Z_, {
                        noticeType: ei.kqX.SURVEY,
                        onClick: () => {
                            o ? (0, tN.K)(l) : window.open(a, "_blank"), (0, b.pX)(t, !1);
                        },
                        children: r,
                    }),
                ],
            });
        }
        case ei.kqX.CORRUPT_INSTALLATION:
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.DANGER,
                children: [
                    ea.intl.string(ea.t["ugxmk/"]),
                    (0, i.jsx)(f.eC, {
                        href: tQ.A.getArticleURL(ei.MVz.CORRUPT_INSTALLATION),
                        target: "_blank",
                        noticeType: s.type,
                        children: ea.intl.string(ea.t["6ik4Xk"]),
                    }),
                ],
            });
        case ei.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.WARNING,
                children: [
                    (0, i.jsx)(f.PM, { onClick: () => t9(), noticeType: ei.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                    ea.intl.string(ea.t.wVjKGi),
                    (0, i.jsx)(f.Z_, {
                        noticeType: ei.kqX.VIDEO_UNSUPPORTED_BROWSER,
                        onClick: () => {
                            (0, m.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("17951"), n.e("44602"), n.e("25280")]).then(
                                    n.bind(n, 987482),
                                );
                                return (t) => (0, i.jsx)(e, { source: "Video unsupported browser", ...t });
                            });
                        },
                        children: ea.intl.string(ea.t["1WjMbC"]),
                    }),
                ],
            });
        case ei.kqX.DISPATCH_ERROR:
            if (null == s.metadata) return null;
            let { error: es } = s.metadata;
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.DANGER,
                children: [
                    (0, i.jsx)(f.PM, { onClick: () => t9(), noticeType: ei.kqX.DISPATCH_ERROR }),
                    es?.displayMessage,
                    (0, i.jsx)(f.Z_, {
                        noticeType: ei.kqX.DISPATCH_ERROR,
                        onClick: () =>
                            (0, m.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("91139"), n.e("88014")]).then(
                                    n.bind(n, 627261),
                                );
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                        children: ea.intl.string(ea.t.hvVgAZ),
                    }),
                ],
            });
        case ei.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == s.metadata) return null;
            let { progress: eu, total: ec, name: ed } = s.metadata;
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.DEFAULT,
                children: [
                    (0, i.jsx)(f.PM, { onClick: () => t9(), noticeType: ei.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS }),
                    (0, i.jsxs)(G.A, {
                        justify: G.A.Justify.CENTER,
                        children: [
                            null != ed
                                ? ea.intl.formatToPlainString(ea.t["pHj+z4"], {
                                      name: `${ed}`,
                                      progress: eu,
                                      total: ec,
                                  })
                                : ea.intl.formatToPlainString(ea.t["lHZn+A"], { progress: eu, total: ec }),
                            (0, i.jsx)(g.y, { type: g.y.Type.PULSING_ELLIPSIS, className: eo.gO }),
                        ],
                    }),
                ],
            });
        case ei.kqX.APPLICATION_TEST_MODE:
            if (null == s.metadata) return null;
            if (null != tZ.A.testModeEmbeddedApplicationId)
                return (0, i.jsx)(f.$T, {
                    color: f.Hv.WARNING,
                    children: (0, i.jsxs)(G.A, {
                        justify: G.A.Justify.CENTER,
                        align: G.A.Align.CENTER,
                        children: [
                            (0, i.jsx)("div", {
                                children: ea.intl.format(ea.t["1qxVe4"], {
                                    applicationName: s.metadata.applicationName,
                                }),
                            }),
                            (0, i.jsx)(f.PM, { onClick: L.cL, noticeType: ei.kqX.APPLICATION_TEST_MODE }),
                        ],
                    }),
                });
            return (0, i.jsx)(f.$T, {
                color: f.Hv.WARNING,
                children: (0, i.jsxs)(G.A, {
                    justify: G.A.Justify.CENTER,
                    align: G.A.Align.CENTER,
                    children: [
                        (0, i.jsx)("div", {
                            children: ea.intl.format(ea.t.Fv5HrE, { applicationName: s.metadata.applicationName }),
                        }),
                        (0, i.jsx)(f.PM, { onClick: L.cL, noticeType: ei.kqX.APPLICATION_TEST_MODE }),
                    ],
                }),
            });
        case ei.kqX.VIEWING_ROLES:
            return (0, i.jsx)(tn.A, {});
        case ei.kqX.PREMIUM_UNCANCEL:
            return (0, i.jsxs)(f.$T, {
                color:
                    V === er.PremiumTypes.TIER_1
                        ? f.Hv.PREMIUM_TIER_1
                        : V === er.PremiumTypes.TIER_0
                          ? f.Hv.PREMIUM_TIER_0
                          : f.Hv.PREMIUM_TIER_2,
                children: [
                    (0, i.jsx)(f.PM, {
                        noticeType: ei.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            t9(s.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    (0, i.jsx)(p.t, { size: "md", color: "currentColor", className: eo.PC }),
                    V === er.PremiumTypes.TIER_1
                        ? ea.intl.formatToPlainString(ea.t.fXv4wm, { daysLeft: s.metadata.daysLeft })
                        : V === er.PremiumTypes.TIER_0
                          ? ea.intl.formatToPlainString(ea.t.ZOHZMr, { daysLeft: s.metadata.daysLeft })
                          : ea.intl.formatToPlainString(ea.t.outyHh, { daysLeft: s.metadata.daysLeft }),
                    (0, i.jsx)(f.Z_, {
                        noticeType: ei.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            t9(s.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, m.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("86832"),
                                        n.e("95512"),
                                        n.e("69273"),
                                        n.e("72210"),
                                        n.e("3155"),
                                        n.e("39375"),
                                        n.e("58171"),
                                        n.e("47944"),
                                        n.e("82104"),
                                        n.e("84473"),
                                        n.e("25677"),
                                        n.e("65327"),
                                        n.e("90072"),
                                        n.e("88016"),
                                        n.e("10471"),
                                        n.e("68261"),
                                        n.e("11301"),
                                        n.e("96643"),
                                        n.e("61737"),
                                        n.e("21335"),
                                        n.e("77333"),
                                        n.e("47834"),
                                        n.e("11735"),
                                        n.e("85927"),
                                        n.e("2368"),
                                        n.e("85404"),
                                        n.e("10120"),
                                        n.e("62175"),
                                        n.e("8739"),
                                        n.e("23532"),
                                        n.e("52557"),
                                        n.e("55654"),
                                        n.e("68574"),
                                        n.e("14794"),
                                    ]).then(n.bind(n, 174705));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            daysLeft: s.metadata.daysLeft,
                                            premiumType: V,
                                            analyticsSource: "Nag Bar",
                                            premiumSubscription: s.metadata.premiumSubscription,
                                        });
                                });
                        },
                        children:
                            V === er.PremiumTypes.TIER_1
                                ? ea.intl.string(ea.t.BkbUPM)
                                : V === er.PremiumTypes.TIER_0
                                  ? ea.intl.string(ea.t.Px978X)
                                  : ea.intl.string(ea.t.LW5tCE),
                    }),
                ],
            });
        case ei.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: e_, dismissUntil: ef } = s.metadata;
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.WARNING,
                children: [
                    (0, i.jsx)(f.PM, {
                        noticeType: s.type,
                        onClick: () => {
                            t9(ef);
                        },
                    }),
                    ea.intl.format(ea.t.zxU0Kp, { daysPastDue: e_ }),
                    (0, i.jsx)(f.Z_, {
                        noticeType: ei.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            t9(ef), (0, Q.openUserSettings)(Z.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: ea.intl.string(ea.t.q8rxeS),
                    }),
                ],
            });
        case ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.DANGER,
                children: [
                    (0, i.jsx)(f.PM, {
                        noticeType: ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            t9(s.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    ea.intl.string(ea.t.LlZaoX),
                    (0, i.jsx)(f.Z_, {
                        noticeType: ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            t9(s.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, Q.openUserSettings)(Z.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: ea.intl.string(ea.t["Zpd+Yq"]),
                    }),
                ],
            });
        case ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.WARNING,
                children: [
                    (0, i.jsx)(f.PM, {
                        noticeType: ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            t9(s.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    ea.intl.string(ea.t["30YfCr"]),
                    (0, i.jsx)(f.Z_, {
                        noticeType: ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            t9(s.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, Q.openUserSettings)(Z.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: ea.intl.string(ea.t.U5pKWA),
                    }),
                ],
            });
        case ei.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.WARNING,
                children: [
                    (0, i.jsx)(f.PM, {
                        noticeType: ei.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            t9(s.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    V === er.PremiumTypes.TIER_1
                        ? ea.intl.formatToPlainString(ea.t.b6QUvf, { daysLeft: s.metadata.daysLeft })
                        : V === er.PremiumTypes.TIER_0
                          ? ea.intl.formatToPlainString(ea.t["tURZ/M"], { daysLeft: s.metadata.daysLeft })
                          : ea.intl.formatToPlainString(ea.t.AyC74I, { daysLeft: s.metadata.daysLeft }),
                    (0, i.jsx)(f.Z_, {
                        noticeType: ei.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            t9(s.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, Q.openUserSettings)(Z.X.SUBSCRIPTIONS_PANEL);
                        },
                        children:
                            V === er.PremiumTypes.TIER_1
                                ? ea.intl.string(ea.t.lboF5O)
                                : V === er.PremiumTypes.TIER_0
                                  ? ea.intl.string(ea.t["4UPwOq"])
                                  : ea.intl.string(ea.t["P/VvGb"]),
                    }),
                ],
            });
        case ei.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, i.jsx)(te, {
                buttonText: s.buttonText ?? ea.intl.string(ea.t["/g10LC"]),
                onGoBack: s.callback,
                onDismiss: () => t9(),
                showCloseButton: !0,
            });
        case ei.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, i.jsx)(eK, { guildId: t, analyticsLocations: a });
        case ei.kqX.PARENTAL_CONSENT_WARNING:
            return (0, i.jsx)(th, { daysRemaining: s.metadata?.daysRemaining ?? null });
        case ei.kqX.QUARANTINED:
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.DANGER,
                children: [
                    ea.intl.string(ea.t.DVFJYf),
                    (0, i.jsx)(f.eC, {
                        href: t1.q,
                        target: "_blank",
                        noticeType: s.type,
                        children: ea.intl.string(ea.t.kvHdFN),
                    }),
                    (0, i.jsx)(E.Anchor, {
                        href: tQ.A.getArticleURL(ei.MVz.QUARANTINE),
                        target: "_blank",
                        className: eo.yw,
                        children: ea.intl.string(ea.t.hvVgAZ),
                    }),
                ],
            });
        case ei.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: eE, decisionId: em } = s.metadata;
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.WARNING,
                children: [
                    (0, i.jsx)(f.PM, {
                        noticeType: ei.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != t && (0, ek.wu)(t), t9(eE);
                        },
                    }),
                    ea.intl.string(ea.t.B8ruyY),
                    (0, i.jsx)(f.zr, {
                        onClick: () => {
                            null != t &&
                                (0, ek.W5)(t, em, () => {
                                    t9(eE), (0, ek.wu)(t);
                                });
                        },
                        children: ea.intl.string(ea.t.oX14El),
                    }),
                    null != t
                        ? (0, i.jsx)(f.zr, {
                              onClick: () => tt.A.open(t, ei.BEX.GUILD_AUTOMOD, void 0, ei.nd0.AUTOMOD_MENTION_SPAM),
                              children: ea.intl.string(ea.t["1R7QIx"]),
                          })
                        : null,
                ],
            });
        case ei.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.DANGER,
                children: [
                    (0, i.jsx)(f.PM, {
                        noticeType: ei.kqX.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            s.metadata?.streamKey != null && (0, tC.lk)(s.metadata.streamKey);
                        },
                    }),
                    ea.intl.string(ea.t.rOx44m),
                ],
            });
        case ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, i.jsxs)(f.$T, {
                color: f.Hv.BRAND,
                children: [
                    (0, i.jsx)(f.PM, {
                        onClick: () => {
                            t9(s.metadata?.dismissUntil);
                        },
                        noticeType: ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    ea.intl.string(ea.t["0klLS7"]),
                    (0, i.jsx)(f.Z_, {
                        onClick: () => {
                            (0, m.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([
                                    n.e("33111"),
                                    n.e("22255"),
                                    n.e("55925"),
                                    n.e("18413"),
                                    n.e("37381"),
                                    n.e("26484"),
                                    n.e("9163"),
                                ]).then(n.bind(n, 307750));
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                                t9(s.metadata?.dismissUntil);
                        },
                        noticeType: ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: ea.intl.string(ea.t.e4y2VM),
                    }),
                ],
            });
        case ei.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, i.jsx)(tO, {});
        case ei.kqX.PREMIUM_MARKETING_NAGBAR:
            return (0, i.jsx)(tS.A, {});
        case ei.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR:
            return (0, i.jsx)(tT, { premiumSubscription: s.metadata.premiumSubscription });
        case ei.kqX.SYSTEM_SERVICE_WARNING:
            return (0, i.jsx)(tH, {});
        default:
            return null;
    }
});
function nt() {
    let { analyticsLocations: e } = (0, x.Ay)(M.A.NOTICE);
    return (0, i.jsx)(x.f5, { value: e, children: (0, i.jsx)(ne, {}) });
}
