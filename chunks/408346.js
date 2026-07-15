"use strict";
n.d(t, { w: () => nt, A: () => ni });
var i = n(627968),
    r = n(64700),
    a = n(989349),
    s = n.n(a),
    l = n(936504),
    o = n(299855),
    d = n.n(o),
    c = n(17928),
    u = n(462887),
    _ = n(834730),
    E = n(939249),
    A = n(417098),
    h = n(349288),
    I = n(403581),
    f = n(192308),
    p = n(289873),
    T = n(157559),
    m = n(827343),
    g = n(830215),
    S = n(228366);
function N(e) {
    S.h.dispatch({ type: "DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS", skuId: e });
}
var C = n(912851);
let R = {
    clearRemoteDisconnectVoiceChannelId() {
        S.h.dispatch({ type: "CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID" });
    },
    clearLastSessionVoiceChannelId() {
        S.h.dispatch({ type: "CLEAR_LAST_SESSION_VOICE_CHANNEL_ID" });
    },
};
var O = n(730852),
    L = n(785796),
    D = n(55619),
    y = n(246605),
    v = n(271866),
    b = n(736653),
    M = n(77729),
    P = n(573648),
    U = n(793574),
    w = n(688810),
    G = n(587895),
    x = n(315982),
    k = n(235986),
    F = n(626584),
    V = n(554146),
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
    ea = n(355097),
    es = n(375708),
    el = n(448759);
function eo(e) {
    let { dismissibleContent: t, noticeType: r } = e;
    return (0, i.jsx)(et.Ay, {
        contentTypes: [t],
        groupName: en.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: a } = e;
            switch (t) {
                case V.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(A.$T, {
                        color: A.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(A.PM, { onClick: () => a(en.i.UNKNOWN), noticeType: r }),
                            es.intl.string(es.t["+xn1o5"]),
                            (0, i.jsx)("i", { className: el.c9 }),
                            (0, i.jsx)("i", { className: el.Vz }),
                            (0, i.jsx)("i", { className: el.p0 }),
                            (0, i.jsx)(A.Z_, {
                                noticeType: r,
                                onClick: () => {
                                    (0, f.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("17951"),
                                            n.e("44602"),
                                            n.e("25280"),
                                        ]).then(n.bind(n, 987482));
                                        return (t) => (0, i.jsx)(e, { source: "Top Bar Nag", ...t });
                                    });
                                },
                                children: es.intl.string(es.t["1WjMbC"]),
                            }),
                        ],
                    });
                case V.M.NAGBAR_QUEST_APP_UPSELL:
                    return (0, i.jsxs)(A.$T, {
                        color: A.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(A.PM, { onClick: () => a(en.i.UNKNOWN), noticeType: r }),
                            (0, i.jsx)("i", { className: el.TN }),
                            es.intl.string(es.t.lgwX26),
                            (0, i.jsx)(A.Z_, {
                                noticeType: r,
                                onClick: () => {
                                    (0, Y.A)(ei.AMi.META_QUEST), a(en.i.TAKE_ACTION);
                                },
                                children: es.intl.string(es.t["1WjMbC"]),
                            }),
                        ],
                    });
                case V.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(A.$T, {
                        color: A.Hv.SPOTIFY,
                        children: [
                            (0, i.jsx)(A.PM, { onClick: () => a(en.i.UNKNOWN), noticeType: r }),
                            (0, i.jsx)(J.A, { className: el.tV }),
                            es.intl.string(es.t["5NUVHH"]),
                            (0, i.jsx)(A.Z_, {
                                onClick: () => (0, K.A)({ platformType: ei.fg2.SPOTIFY, location: "Notice Bar" }),
                                noticeType: r,
                                children: es.intl.string(es.t.S0W8Z5),
                            }),
                        ],
                    });
                case V.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(A.$T, {
                        color: A.Hv.PLAYSTATION,
                        children: [
                            (0, i.jsx)(A.PM, { noticeType: r, onClick: () => a(en.i.UNKNOWN) }),
                            (0, i.jsx)("img", {
                                alt: "",
                                className: el.tV,
                                src: P.A.get(ei.fg2.PLAYSTATION).icon.whiteSVG,
                            }),
                            es.intl.string(es.t.WHWgoY),
                            (0, i.jsx)(A.zr, {
                                onClick: () => (0, K.A)({ platformType: ei.fg2.PLAYSTATION, location: "Notice Bar" }),
                                children: es.intl.string(es.t.S0W8Z5),
                            }),
                        ],
                    });
                case V.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(A.$T, {
                        color: A.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(A.PM, { onClick: () => a(en.i.USER_DISMISS), noticeType: r }),
                            es.intl.string(es.t["3qKN/h"]),
                            (0, i.jsx)(A.Z_, {
                                onClick: async () => {
                                    a(en.i.TAKE_ACTION);
                                    try {
                                        let { startRegisterWebAuthnCredential: e } = await Promise.resolve().then(
                                                n.bind(n, 917136),
                                            ),
                                            { ticket: t, challenge: r } = await e();
                                        (0, f.openModalLazy)(async () => {
                                            let { RegisterWebAuthnCredentialModal: e } = await Promise.all([
                                                n.e("6022"),
                                                n.e("82721"),
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
                                        (0, B.P0)((0, H.o)(es.intl.string(es.t.xSCvBf), j.Ck.FAILURE));
                                    }
                                },
                                noticeType: r,
                                children: es.intl.string(es.t["ff/XXy"]),
                            }),
                        ],
                    });
                case V.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(A.$T, {
                        color: A.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)("span", { className: el.lK }),
                            (0, i.jsx)("span", { className: el.$t, children: es.intl.string(es.t["+urf75"]) }),
                            (0, i.jsx)(A.Z_, {
                                className: el.CO,
                                noticeType: r,
                                onClick: () => {
                                    ee.default.track(ei.HAw.PREMIUM_PROMOTION_OPENED, {
                                        location_section: ei.JJy.NOTIFICATION_BAR,
                                        location_object: ei.ZSU.BUTTON_CTA,
                                    }),
                                        (0, Q.openUserSettings)(Z.X.NITRO_PANEL);
                                },
                                children: es.intl.string(es.t["8JC5e/"]),
                            }),
                            (0, i.jsx)(A.PM, {
                                onClick: () => {
                                    a(en.i.UNKNOWN), (0, W.lA)(ei.nhx.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: r,
                            }),
                        ],
                    });
                case V.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(z.A, {
                        dismissCurrentNotice: () => a(en.i.UNKNOWN),
                        subscriptionTier: er.pe.TIER_2,
                    });
                case V.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(z.A, {
                        dismissCurrentNotice: () => a(en.i.UNKNOWN),
                        subscriptionTier: er.pe.TIER_0,
                    });
                case V.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(A.$T, {
                        color: A.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(A.PM, { noticeType: r, onClick: () => a(en.i.UNKNOWN) }),
                            es.intl.string(es.t["0KFB2B"]),
                            (0, i.jsx)(A.Z_, {
                                noticeType: r,
                                onClick: () => {
                                    a(en.i.UNKNOWN), (0, Q.openUserSettings)(Z.X.NITRO_PANEL);
                                },
                                children: es.intl.string(es.t.pyYSiO),
                            }),
                        ],
                    });
                case V.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(A.$T, {
                        color: A.Hv.DANGER,
                        children: [
                            (0, i.jsx)(A.PM, { onClick: () => a(en.i.UNKNOWN), noticeType: r }),
                            es.intl.string(es.t["7490vQ"]),
                            (0, i.jsx)(A.Z_, {
                                noticeType: r,
                                onClick: () => {
                                    (0, q.pX)((0, X.settingsPathToRoute)(ea.od.ACCOUNT));
                                },
                                children: es.intl.string(es.t.Vm8akB),
                            }),
                        ],
                    });
                case V.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(A.$T, {
                        color: A.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(A.PM, { onClick: () => a(en.i.UNKNOWN), noticeType: r }),
                            es.intl.string(es.t["O9GI+k"]),
                            (0, i.jsx)(A.Z_, {
                                onClick: () => {
                                    (0, $.A)({
                                        subscriptionTier: er.pe.TIER_2,
                                        analyticsLocations: [U.A.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: ei.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => a(en.i.UNKNOWN),
                                    });
                                },
                                noticeType: r,
                                children: es.intl.string(es.t.Zi69D4),
                            }),
                        ],
                    });
            }
        },
    });
}
var ed = n(877624),
    ec = n(412260),
    eu = n(131607),
    e_ = n(823901);
function eE(e) {
    let t,
        n,
        { dismissibleContent: r } = e,
        { snowflakeId: a, couldShow: s } =
            ((t = (0, c.bG)([ec.A], () => ec.A.getGiftPromotion()?.id)),
            (n = (0, c.bG)([ec.A], () => null != ec.A.getMarketingComponentByType(ed.C.GIFT_REMINDER_NAGBAR))),
            r === V.M.GIFTING_PROMOTION_REMINDER
                ? { snowflakeId: t, couldShow: n && null != t }
                : { snowflakeId: void 0, couldShow: !1 }),
        [l, o] = (0, eu.Cc)(s ? r : null, a ?? "", en.m.NOTICE_BAR, !0);
    return null == l
        ? null
        : l === V.M.GIFTING_PROMOTION_REMINDER
          ? (0, i.jsx)(e_.y, { markAsDismissed: (e) => o(e) })
          : void 0;
}
var eA = n(264779),
    eh = n(962644),
    eI = n(287809),
    ef = n(428262),
    ep = n(946319);
function eT(e) {
    let { dismissibleContent: t } = e,
        n = (0, eA.Cp)(),
        a = (0, c.bG)([eI.default], () => !ef.Ay.isPremium(eI.default.getCurrentUser())),
        s = r.useCallback(() => {
            ee.default.track(ei.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED),
                (0, Q.openUserSettings)(Z.X.GIFT_PANEL),
                eh.Ay.dismissOutboundPromotionNotice();
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
                  if (t === V.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR)
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  noticeType: ei.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      eh.Ay.dismissOutboundPromotionNotice(), null !== n && n(en.i.USER_DISMISS);
                                  },
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: ep.P }),
                              a ? es.intl.string(es.t["5JMiOo"]) : es.intl.string(es.t["Pzh+G2"]),
                              (0, i.jsx)(A.Z_, {
                                  noticeType: ei.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      s(), null !== n && n(en.i.TAKE_ACTION);
                                  },
                                  children: es.intl.string(es.t.jVcuVY),
                              }),
                          ],
                      });
              },
          });
}
var em = n(532205),
    eg = n(487329),
    eS = n(102609),
    eN = n(736056),
    eC = n(194261),
    eR = n(548118),
    eO = n(134413),
    eL = n(221950),
    eD = n(71393),
    ey = n(309010),
    ev = n(967198),
    eb = n(585510),
    eM = n(834409),
    eP = n(903093),
    eU = n(746080),
    ew = n(500928);
function eG(e) {
    let { onDismiss: t } = e,
        a = (0, c.bG)([ev.A], () => ev.A.getGuildId()),
        s = (0, c.bG)([ey.A], () => (null != a ? ey.A.getChannelId(a) : null), [a]),
        l = a ?? null,
        o = (0, c.bG)([eD.A], () => (null != l ? eD.A.getGuild(l) : null), [l]),
        { shouldShowIncidentActions: d, incidentData: u, isUnderLockdown: _ } = (0, eb.Li)(l),
        E = (0, eO.fw)(o?.id ?? ei.dJq),
        h = r.useCallback(() => null != o && (0, eL.aZ)(o.id), [o]);
    if (null == o || null == u || !d) return null;
    let I = (e) => {
            e && E && s !== eU.VV.MEMBER_SAFETY && h()
                ? ee.default.track(ei.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                      notice_type: ei.kqX.GUILD_RAID_NOTIFICATION,
                      guild_id: o.id,
                  })
                : (0, f.openModalLazy)(async () => {
                      let e = { source: eM.Eo.NAGBAR, alertType: (0, eP.$5)(u) },
                          { default: t } = await Promise.all([
                              n.e("87960"),
                              n.e("36518"),
                              n.e("40258"),
                              n.e("73669"),
                              n.e("46313"),
                              n.e("43233"),
                          ]).then(n.bind(n, 671576));
                      return (n) => (0, i.jsx)(t, { ...n, guildId: o.id, analyticsData: e });
                  });
        },
        p = (0, i.jsx)(eR.Ay, { className: ew.$f, guild: o, size: eR.Ay.Sizes.MINI }),
        T = (0, eP.ql)(u, o.name);
    if (null != (u.dmsDisabledUntil ?? u.invitesDisabledUntil) && _)
        return (0, i.jsxs)(A.$T, {
            className: ew.lm,
            color: A.Hv.NEUTRAL,
            children: [
                (0, i.jsx)(A.PM, { onClick: t, noticeType: ei.kqX.GUILD_RAID_NOTIFICATION }),
                p,
                T,
                (0, i.jsx)(A.zr, {
                    className: ew.hP,
                    onClick: () => I(!1),
                    children: (0, i.jsxs)("div", {
                        className: ew.rx,
                        children: [
                            (0, i.jsx)(eC.X, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)("span", { children: es.intl.string(es.t["c+7oa7"]) }),
                        ],
                    }),
                }),
            ],
        });
    let m = (0, eP.P$)(u)
            ? es.intl.formatToPlainString(es.t.tZTx2E, { guildName: o.name })
            : (0, eP.Qm)(u)
              ? es.intl.formatToPlainString(es.t["1bSmxr"], { guildName: o.name })
              : es.intl.formatToPlainString(es.t.W87xDE, { guildName: o.name }),
        g = E && s === eU.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(A.$T, {
        className: ew.lm,
        color: A.Hv.WARNING,
        children: [
            (0, i.jsx)(A.PM, { onClick: t, noticeType: ei.kqX.GUILD_RAID_NOTIFICATION }),
            p,
            m,
            !g &&
                (0, i.jsx)(A.zr, {
                    className: ew.hP,
                    onClick: () => I(!0),
                    children: (0, i.jsx)("div", {
                        className: ew.rx,
                        children: (0, i.jsx)("span", { children: es.intl.string(es.t.zDJDhr) }),
                    }),
                }),
        ],
    });
}
var ex = n(995786),
    ek = n(206835),
    eF = n(280450),
    eV = n(696451),
    eB = n(229527),
    eH = n(81400),
    ej = n(340837);
function eW(e) {
    let { guildId: t, analyticsLocations: n } = e,
        [r, a] = (0, eH.j8)({ guildId: t, analyticsLocations: n }),
        s = a ? es.intl.string(es.t["6ndMcq"]) : es.intl.string(es.t["0eiu6J"]),
        l = a ? es.intl.string(es.t.S09nw4) : es.intl.string(es.t.tEttXd);
    return (0, i.jsxs)(A.$T, { color: A.Hv.DANGER, children: [s, (0, i.jsx)(A.zr, { onClick: r, children: l })] });
}
function eY() {
    let e = (0, ek.A)({ scrollPosition: ea._F.GUILD_TAG });
    return (0, i.jsxs)(A.$T, {
        color: A.Hv.DANGER,
        children: [
            es.intl.string(es.t.Zqlecb),
            (0, i.jsx)(A.zr, { onClick: e, children: es.intl.string(es.t.SJehVW) }),
        ],
    });
}
function eK(e) {
    let { analyticsLocations: t, ...n } = e,
        { analyticsLocations: r } = (0, w.Ay)(t, U.A.AUTOMOD_NAGBAR_NOTICE),
        a = (0, c.bG)([eF.default, eV.Ay], () => {
            if (null == n.guildId) return new Set();
            let e = eF.default.getId();
            return (0, eB.wj)(eV.Ay.getMember(n.guildId, e));
        }, [n.guildId]);
    return a.has(ej.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || a.has(ej.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, i.jsx)(eW, { ...n, analyticsLocations: r })
        : a.has(ej.D.AUTOMOD_QUARANTINED_SERVER_TAG)
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
    let e = (0, c.bG)([ev.A], () => ev.A.getGuildId(), []),
        t = (0, c.bG)([eD.A], () => eD.A.getGuild(e), [e]),
        r = (0, c.bG)([e6.A], () => (null != e ? e6.A.getRequest(e) : null), [e]),
        a = (0, eX.zy)(),
        s = (0, e0.B)(a.pathname, ei.BVt.CHANNEL(t?.id, eU.VV.GUILD_ONBOARDING))?.isExact === !0;
    if (null == t || !(0, e3.Qd)(t) || s) return null;
    let l = r?.applicationStatus ?? e2.B5.STARTED,
        o = null,
        d = null,
        u = null,
        E = [e4.lm, e5.lm];
    switch (l) {
        case e2.B5.SUBMITTED:
            (o = es.intl.string(es.t["5iLvSx"])),
                (d = es.intl.string(es.t.mqtdmQ)),
                (u = () => {
                    (0, eQ.A)({
                        title: es.intl.string(es.t.aIz1oV),
                        subtitle: es.intl.string(es.t["13tjTU"]),
                        variant: "primary",
                        confirmText: es.intl.string(es.t["cY+Oob"]),
                        onConfirm: () => e1.A.removeGuildJoinRequest(t.id),
                    });
                });
            break;
        case e2.B5.REJECTED:
            (o = es.intl.string(es.t.lk30cY)),
                (d = es.intl.string(es.t["8RrsHr"])),
                (u = () => {
                    (0, f.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("25099"), n.e("14382")]).then(n.bind(n, 463325));
                        return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                    });
                }),
                E.push(e4.z3);
            break;
        default:
            (o = es.intl.string(es.t.G5YKXP)),
                (d = es.intl.string(es.t["r8/DT+"])),
                (u = () => {
                    (0, e$.Ze)(t.id);
                });
    }
    return (0, i.jsxs)("div", {
        className: eZ()(...E),
        children: [
            (0, i.jsx)(_.E, { className: e4.wx, variant: "text-sm/normal", children: o }),
            (0, i.jsx)(eJ.$, { variant: "overlay-primary", size: "sm", onClick: u, text: d }),
        ],
    });
};
var e8 = n(477155),
    e9 = n(22877);
function te(e) {
    let { buttonText: t, onGoBack: n, onDismiss: r, showCloseButton: a } = e;
    return (0, i.jsxs)(A.$T, {
        className: e9.eR,
        children: [
            a && (0, i.jsx)(A.PM, { onClick: r, className: e9.b, noticeType: ei.kqX.BACK_TO_PREVIOUS_SCREEN }),
            (0, i.jsx)(eJ.$, { text: t, variant: "overlay-secondary", size: "sm", icon: e8.r, onClick: n }),
        ],
    });
}
var tt = n(468689),
    tn = n(699609),
    ti = n(862482),
    tr = n(66834),
    ta = n(385648),
    ts = n(484154);
let tl = function () {
    let e = (0, c.bG)([ev.A], () => ev.A.getGuildId(), []),
        t = (0, c.bG)([eD.A], () => eD.A.getGuild(e), [e]),
        [n, a] = r.useState(!1);
    if (null == t) return null;
    let s = async () => {
        a(!0);
        try {
            ta.cf(t.id), await tr.A.joinGuild(t.id, { source: ei.Q4z.NOTICE_BAR });
        } catch {
            a(!1);
        }
    };
    return (0, i.jsxs)("div", {
        className: eZ()(ts.lm, e5.lm),
        children: [
            (0, i.jsxs)(ti.$n, {
                look: ti.$n.Looks.OUTLINED,
                color: ti.$n.Colors.WHITE,
                size: ti.$n.Sizes.NONE,
                className: eZ()(ts.x6, ts.aX),
                innerClassName: ts.gb,
                onClick: function () {
                    (0, q.JK)().goBack();
                },
                children: [
                    (0, i.jsx)(e8.r, { size: "xs", color: "currentColor", className: ts.UE }),
                    es.intl.string(es.t["13/7kX"]),
                ],
            }),
            (0, i.jsx)(_.E, { className: ts.wx, variant: "text-sm/normal", children: es.intl.string(es.t["N/y2WE"]) }),
            (0, i.jsx)(ti.$n, {
                className: ts.x6,
                look: ti.$n.Looks.OUTLINED,
                color: ti.$n.Colors.WHITE,
                size: ti.$n.Sizes.NONE,
                submitting: n,
                onClick: s,
                children: es.intl.format(es.t.uHN7ny, { guild: t.name }),
            }),
        ],
    });
};
var to = n(801644),
    td = n(74848),
    tc = n(899847),
    tu = n(191627),
    t_ = n(602339),
    tE = n(111344);
let tA = {
    "--custom-notice-background": "var(--background-feedback-warning)",
    "--custom-notice-text": "var(--text-strong)",
};
function th(e) {
    let { daysRemaining: t } = e;
    (0, es.useSyncMessages)(t_.messagesLoader);
    let n = r.useCallback(() => {
        ee.default.track(ei.HAw.PARENTAL_CONSENT_WARNING_BANNER_TAPPED, { days_remaining: t }),
            tc.Ay.selectTab(tu.u9.REQUESTS),
            (0, Q.openUserSettings)(Z.X.FAMILY_CENTER_PANEL);
    }, [t]);
    return (0, i.jsx)(A.$T, {
        color: A.Hv.CUSTOM,
        style: tA,
        children: (0, i.jsxs)("div", {
            className: tE.Q,
            children: [
                (0, i.jsx)(_.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    tag: "span",
                    children:
                        null != t && t > 0
                            ? es.intl.format(t_.default.F0hdak, { count: t })
                            : es.intl.string(t_.default.LTzc00),
                }),
                (0, i.jsx)(eJ.$, {
                    variant: "secondary",
                    size: "sm",
                    text: es.intl.string(t_.default.xYJKEy),
                    onClick: n,
                }),
            ],
        }),
    });
}
var tI = n(234419),
    tf = n(661531),
    tp = n(367727),
    tT = n(635995),
    tm = n(88001),
    tg = n(466919),
    tS = n(375043);
function tN(e) {
    let { premiumSubscription: t } = e,
        a = t?.id,
        s = r.useCallback(() => {
            null != a && (0, tp.qr)(V.M.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR, a, { dismissAction: en.i.USER_DISMISS });
        }, [a]),
        l = r.useCallback(() => {
            s(),
                ee.default.track(ei.HAw.APP_NOTICE_CLOSED, {
                    notice_type: ei.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
                });
        }, [s]),
        o = r.useCallback(() => {
            null != t &&
                (ee.default.track(ei.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: ei.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
                }),
                s(),
                (0, f.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("3515"),
                        n.e("44616"),
                        n.e("74630"),
                        n.e("48948"),
                        n.e("85579"),
                    ]).then(n.bind(n, 785606));
                    return (n) => (0, i.jsx)(e, { ...n, subscription: t });
                }));
        }, [t, s]);
    return (0, i.jsxs)(tT.T0, {
        onClick: l,
        className: tS.A,
        children: [
            (0, i.jsx)(I.t, { color: tf.A.colors.ICON_STRONG }),
            (0, i.jsx)(tT.In, {
                children: es.intl.format(tg.default.fFt9bd, { premiumGroupProductName: (0, tm.DP)() }),
            }),
            (0, i.jsx)(eJ.$, {
                onClick: o,
                text: es.intl.string(tg.default["5fZHp3"]),
                size: "sm",
                variant: "overlay-primary",
            }),
        ],
    });
}
var tC = n(754804),
    tR = n(378974),
    tO = n(340124),
    tL = n(14594);
function tD() {
    let [e, t] = (0, eu.Wl)(V.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: tL.aH });
    return e !== V.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK
        ? null
        : (0, i.jsxs)(A.$T, {
              color: A.Hv.BRAND,
              children: [
                  (0, i.jsx)(A.PM, { onClick: () => t(en.i.DISMISS), noticeType: ei.kqX.IGNORE_USER_FEEDBACK_NAGBAR }),
                  es.intl.string(es.t.XkeW9N),
                  (0, i.jsx)(A.Z_, {
                      onClick: () => {
                          (0, f.openModalLazy)(async () => {
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
                      children: es.intl.string(es.t.vcdNKv),
                  }),
              ],
          });
}
var ty = n(825484),
    tv = n(379257),
    tb = n(847599),
    tM = n(734057),
    tP = n(849736),
    tU = n(354583),
    tw = n(366098),
    tG = n(418208),
    tx = n(992262);
function tk(e) {
    if (!e && (0, tG.Cf)())
        return void tv.A.showAgeVerificationGetStartedModal({ entryPoint: tb.q1.STAGE_CHANNEL_RAISE_HAND });
    let t = ey.A.getVoiceChannelId();
    if (null == t) return;
    let n = tM.A.getChannel(t);
    null != n && (0, tP.e7)(n, e);
}
function tF(e) {
    let { channelId: t } = e,
        n = (0, tw.D3)(t) ?? 0,
        r = (0, tw.Xk)(t) ?? 0;
    return n > 0 && r > 0
        ? (0, i.jsx)("div", {
              className: tx.Z5,
              children: (0, i.jsx)("div", { className: eZ()(tx.qQ, tx.lN), children: es.intl.string(es.t.xlJRfv) }),
          })
        : n > 0
          ? (0, i.jsx)("div", {
                className: tx.Z5,
                children: (0, i.jsx)("div", { className: eZ()(tx.qQ, tx.lN), children: es.intl.string(es.t.WYad9Z) }),
            })
          : r > 0
            ? (0, i.jsx)("div", {
                  className: tx.Z5,
                  children: (0, i.jsx)("div", { className: eZ()(tx.qQ, tx.lN), children: es.intl.string(es.t.eHq2OF) }),
              })
            : null;
}
function tV() {
    let e = (0, tU.A)();
    return null == e
        ? null
        : (0, i.jsxs)(A.$T, {
              className: tx.kL,
              color: A.Hv.DEFAULT,
              children: [
                  es.intl.string(es.t.Ul1RJQ),
                  (0, i.jsx)(tF, { channelId: e.id }),
                  (0, i.jsxs)(ty.e, {
                      size: "sm",
                      className: tx.GC,
                      children: [
                          (0, i.jsx)(eJ.$, {
                              variant: "overlay-primary",
                              text: es.intl.string(es.t.MpO0px),
                              onClick: () => tk(!1),
                          }),
                          (0, i.jsx)(eJ.$, {
                              variant: "secondary",
                              onClick: () => tk(!0),
                              text: es.intl.string(es.t["1YDv7a"]),
                          }),
                      ],
                  }),
              ],
          });
}
var tB = n(952818),
    tH = n(935671);
function tj() {
    (0, tH.sL)("nagbar");
}
function tW() {
    return null == (0, c.bG)([tB.Ay], () => tB.Ay.getVisibleGame())
        ? null
        : (0, i.jsxs)(A.$T, {
              color: A.Hv.DANGER,
              children: [
                  (0, i.jsx)(A.PM, { noticeType: ei.kqX.SYSTEM_SERVICE_WARNING, onClick: () => nt() }),
                  es.intl.string(es.t["5rPt+j"]),
                  (0, i.jsx)(A.Z_, {
                      onClick: tj,
                      noticeType: ei.kqX.SYSTEM_SERVICE_WARNING,
                      children: es.intl.string(es.t["1iI46O"]),
                  }),
              ],
          });
}
function tY() {
    return (0, i.jsxs)(A.$T, {
        color: A.Hv.DANGER,
        children: [
            es.intl.string(es.t.lQiCJ6),
            (0, i.jsx)(A.Z_, {
                noticeType: ei.kqX.PTT_NO_KEYBIND_WARNING,
                onClick: function () {
                    (0, Q.openUserSettings)(Z.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING);
                },
                children: es.intl.string(es.t["UgQN+9"]),
            }),
        ],
    });
}
var tK = n(189213),
    t$ = n(150934);
function tz(e) {
    let [t, n] = r.useState(!1);
    return (0, i.jsx)(tK.Modal, {
        size: "md",
        title: es.intl.string(es.t["zQ1+Jw"]),
        subtitle: es.intl.string(es.t.K1gWXn),
        actions: [
            {
                text: es.intl.string(es.t.BddRzS),
                onClick: () => {
                    t && m.A.setSilenceWarning(!1), e.onClose();
                },
                variant: "primary",
            },
        ],
        actionBarInput: (0, i.jsx)(t$.S, {
            checked: t,
            onChange: (e) => n(e),
            label: es.intl.string(es.t.XAiAgD),
            labelType: "secondary",
        }),
        ...e,
    });
}
var tq = n(186295),
    tZ = n(763827),
    tX = n(67480),
    tQ = n(147964),
    tJ = n(177141),
    t0 = n(975571),
    t1 = n(723702),
    t2 = n(325278),
    t3 = n(831502),
    t6 = n(731854);
let t4 = new F.A("Notice");
function t5(e) {
    let { error: t, allowClick: n = !1 } = e,
        r = (0, eg.B1)(t)?.errorCode,
        a = es.intl.formatToPlainString(es.t.ejOT95, { errorCode: r }),
        s = (0, i.jsx)(_.E, {
            variant: "text-sm/bold",
            color: "currentColor",
            tag: "span",
            className: el.fU,
            selectable: !0,
            children: a,
        });
    return n
        ? (0, i.jsx)(E.D, {
              tag: "span",
              className: el.wz,
              onClick: () => open(t0.A.getArticleURL(ei.MVz.AV_ERROR_CODES)),
              children: s,
          })
        : s;
}
function t7(e) {
    let { noticeType: t } = e;
    return (0, i.jsxs)(A.$T, {
        color: A.Hv.DANGER,
        children: [
            (0, i.jsx)(A.PM, {
                noticeType: t,
                onClick: () => {
                    nt();
                },
            }),
            es.intl.string(es.t.o3zuYz),
            (0, i.jsx)(t5, { error: eg.iy.NO_INPUT_DEVICES }),
            (0, i.jsx)(A.eC, {
                href: t0.A.getArticleURL(ei.MVz.NO_INPUT_DETECTED),
                noticeType: t,
                children: es.intl.string(es.t.RYKKox),
            }),
        ],
    });
}
function t8(e) {
    let { noticeType: t } = e;
    return (0, i.jsxs)(A.$T, {
        color: A.Hv.DANGER,
        children: [
            (0, i.jsx)(A.PM, {
                noticeType: t,
                onClick: () => {
                    nt();
                },
            }),
            es.intl.string(es.t.Up0ApK),
            (0, i.jsx)(t5, { error: eg.iy.VIDEO_BACKGROUND_UNAVAILABLE }),
            (0, i.jsx)(A.zr, {
                onClick: () => (0, Q.openUserSettings)(Z.X.CAMERA_CATEGORY),
                children: es.intl.string(es.t.kRwxfi),
            }),
        ],
    });
}
function t9(e) {
    return (0, t1.isWindows)() && d().satisfies(M.A?.os.release, t2.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function ne(e) {
    let t,
        n,
        { noticeType: r } = e,
        a = (0, td.x5)(t6.oh.AUDIO_INPUT),
        s = a?.guid ?? "",
        { inputDeviceOSMuted: l, inputDeviceOSVolume: o } = (0, c.cf)([tq.Ay], () => ({
            inputDeviceOSMuted: tq.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: tq.Ay.getInputDeviceOSVolume(),
        })),
        d = !1;
    return (
        !0 === l
            ? ((t = es.intl.string(es.t.ppW3ri)),
              (n = (0, i.jsx)(A.eC, { href: t9(s), noticeType: r, children: es.intl.string(es.t.QghSIq) })))
            : 0 === o
              ? ((t = es.intl.string(es.t.j4gGA4)),
                (n = (0, i.jsx)(A.eC, { href: t9(s), noticeType: r, children: es.intl.string(es.t.QghSIq) })))
              : tq.Ay.supports(t6.O5.LOOPBACK)
                ? ((t = es.intl.string(es.t.dNAJ18)),
                  (d = !0),
                  (n = (0, i.jsx)(A.zr, {
                      onClick: () => {
                          (0, Q.openUserSettings)(Z.X.VOICE_AND_VIDEO_PANEL);
                      },
                      children: es.intl.string(es.t.I6YlB4),
                  })))
                : ((t = es.intl.string(es.t.nCO9bI)),
                  (n = (0, i.jsx)(A.eC, {
                      href: t0.A.getArticleURL(ei.MVz.NO_INPUT_DETECTED),
                      noticeType: r,
                      children: es.intl.string(es.t.RYKKox),
                  }))),
        (0, i.jsxs)(A.$T, {
            color: A.Hv.DANGER,
            children: [
                (0, i.jsx)(A.PM, {
                    noticeType: r,
                    onClick: () => {
                        nt(), (0, f.openModal)((e) => (0, i.jsx)(tz, { ...e }));
                    },
                }),
                t,
                (0, i.jsx)(t5, { allowClick: d, error: eg.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function nt(e) {
    C.A.dismiss(null != e ? { untilAtLeast: s()(e) } : void 0);
}
let nn = r.memo(function () {
    let e = (0, c.bG)([eI.default], () => eI.default.getCurrentUser()),
        t = (0, c.bG)([ev.A], () => ev.A.getGuildId()),
        a = (0, c.bG)([tJ.Ay], () => tJ.Ay.getNotice()),
        { analyticsLocations: s } = (0, w.Ay)(),
        o = (0, b.Ay)(),
        d = (0, ez.H)(t),
        _ = (0, tI.V)();
    if (
        (r.useEffect(() => {
            if (a?.type != null) {
                let e;
                if (
                    null == _ &&
                    (a.type === ei.kqX.PREMIUM_TIER_2_TRIAL_ENDING || a.type === ei.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
                )
                    return;
                let n = {};
                null != t && (n.guild_id = t),
                    _?.trial_id != null && (n.trial_id = _.trial_id),
                    (e = { notice_type: a.type, ...n }),
                    ee.default.track(ei.HAw.APP_NOTICE_VIEWED, e);
            }
        }, [a?.type, t, _]),
        r.useEffect(() => {
            if (null != a && a.type === ei.kqX.SURVEY && null != a.metadata) {
                let { metadata: e } = a,
                    t = eN.A.getUserExperimentDescriptor(e.id);
                null != t && (0, eS.LQ)(e.id, t),
                    (async () => {
                        a.metadata?.id != null && (await (0, y.oX)(a.metadata?.id));
                    })();
            }
        }, [a]),
        null == a)
    )
        return null;
    let E = null != a.type ? tJ.Re[a.type] : null,
        S = null != a.type ? tJ.rV[a.type] : null,
        C = null != a.type ? tJ.f7[a.type] : null,
        U = tJ.pe[a.type];
    if (null != E) return (0, i.jsx)(em.$, { dismissibleContent: E, noticeType: a.type });
    if (null != S) return (0, i.jsx)(eE, { dismissibleContent: S });
    if (null != C) return (0, i.jsx)(eT, { dismissibleContent: C });
    if (null != U) return (0, i.jsx)(eo, { dismissibleContent: U, noticeType: a.type });
    let F = a.metadata?.premiumType;
    switch (a.type) {
        case ei.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, i.jsx)(tY, {});
        case ei.kqX.LURKING_GUILD:
            return (0, i.jsx)(tl, {});
        case ei.kqX.PENDING_MEMBER:
            return (0, i.jsx)(e7, {});
        case ei.kqX.INVITED_TO_SPEAK:
            return (0, i.jsx)(tV, {});
        case ei.kqX.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: V } = a.metadata;
            return (0, i.jsx)(eG, { onDismiss: () => nt(V) });
        case ei.kqX.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: B } = a.metadata;
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.WARNING,
                children: [
                    (0, i.jsx)(A.PM, { onClick: () => nt(B), noticeType: a.type }),
                    es.intl.format(es.t["08KQ1P"], { helpCenterLink: t0.A.getArticleURL(ei.MVz.WIN32_DEPRECATE) }),
                ],
            });
        case ei.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: H } = a.metadata;
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.WARNING,
                children: [
                    (0, i.jsx)(A.PM, { onClick: () => nt(H), noticeType: a.type }),
                    es.intl.format(es.t["8Je+dX"], { helpCenterLink: t0.A.getArticleURL(ei.MVz.WIN7_8_DEPRECATE) }),
                ],
            });
        case ei.kqX.WIN_COMPAT_MODE_MESSAGE:
            let { dismissUntil: j } = a.metadata;
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.WARNING,
                children: [
                    (0, i.jsx)(A.PM, { onClick: () => nt(j), noticeType: a.type }),
                    es.intl.string(es.t["9DJgOg"]),
                ],
            });
        case ei.kqX.MACOS_DEPRECATED_MESSAGE:
            let { dismissUntil: W } = a.metadata,
                Y = 20 === parseInt(M.A?.os.release.split(".")[0]);
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.WARNING,
                children: [
                    (0, i.jsx)(A.PM, { onClick: () => nt(W), noticeType: a.type }),
                    es.intl.format(es.t.q8VPLo, {
                        helpCenterLink: t0.A.getArticleURL(Y ? ei.MVz.MACOS_20_DEPRECATE : ei.MVz.MACOS_19_DEPRECATE),
                    }),
                ],
            });
        case ei.kqX.E2EE_UPDATE_REQUIRED:
            let { dismissUntil: K } = a.metadata;
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.WARNING,
                children: [
                    (0, i.jsx)(A.PM, { onClick: () => nt(K), noticeType: a.type }),
                    es.intl.format(t1.isPlatformEmbedded ? es.t.J232TI : es.t.vceuiL, {
                        helpCenterLink: t0.A.getArticleURL(ei.MVz.END_TO_END_ENCRYPTION),
                    }),
                ],
            });
        case ei.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.WARNING,
                children: [
                    (0, i.jsx)(A.PM, { onClick: () => nt(), noticeType: a.type }),
                    es.intl.string(es.t.iW0fcQ),
                    (0, i.jsx)(A.eC, {
                        href: t0.A.getArticleURL(ei.MVz.WINDOWS_MEDIA_PACK),
                        target: "_blank",
                        noticeType: a.type,
                        children: es.intl.string(es.t.LQG5j6),
                    }),
                ],
            });
        case ei.kqX.GENERIC:
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.DEFAULT,
                children: [
                    (0, i.jsx)(A.PM, { onClick: () => nt(), noticeType: a.type }),
                    a.message,
                    null != a.buttonText
                        ? (0, i.jsx)(A.Z_, { onClick: a.callback, noticeType: a.type, children: a.buttonText })
                        : null,
                ],
            });
        case ei.kqX.LAUNCH_GAME_FAILURE:
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.DANGER,
                children: [
                    (0, i.jsx)(A.PM, { onClick: () => nt(), noticeType: a.type }),
                    a.message,
                    null != a.buttonText
                        ? (0, i.jsx)(A.Z_, { onClick: a.callback, noticeType: a.type, children: a.buttonText })
                        : null,
                ],
            });
        case ei.kqX.VOICE_DISABLED:
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.WARNING,
                children: [
                    (0, i.jsx)(A.PM, {
                        onClick: () => {
                            R.clearRemoteDisconnectVoiceChannelId(), nt();
                        },
                        noticeType: a.type,
                    }),
                    es.intl.string(es.t.bOQ3jV),
                    (0, i.jsx)(A.Z_, {
                        onClick: () => {
                            let e = tZ.A.getRemoteDisconnectVoiceChannelId();
                            null != e && null != tM.A.getChannel(e) && O.default.selectVoiceChannel(e);
                        },
                        noticeType: a.type,
                        children: es.intl.string(es.t.vD60Pv),
                    }),
                ],
            });
        case ei.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.DEFAULT,
                children: [
                    (0, i.jsx)(A.PM, {
                        onClick: () => {
                            R.clearLastSessionVoiceChannelId(), nt();
                        },
                        noticeType: a.type,
                    }),
                    es.intl.string(es.t.jY2lUA),
                    (0, i.jsx)(A.Z_, {
                        onClick: () => {
                            let e = tZ.A.getLastSessionVoiceChannelId();
                            null != e && null != tM.A.getChannel(e) && O.default.selectVoiceChannel(e);
                        },
                        noticeType: a.type,
                        children: es.intl.string(es.t.vD60Pv),
                    }),
                ],
            });
        case ei.kqX.SPOTIFY_AUTO_PAUSED:
            let z = P.A.get(ei.fg2.SPOTIFY);
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.DANGER,
                children: [
                    (0, i.jsx)(A.PM, { onClick: () => nt(), noticeType: a.type }),
                    (0, i.jsx)("img", {
                        alt: "",
                        className: el.tV,
                        src: (0, u.q)(o) ? z.icon.darkSVG : z.icon.whiteSVG,
                    }),
                    es.intl.string(es.t.D8Cp76),
                    (0, i.jsx)(A.Z_, {
                        onClick: () => (0, Q.openUserSettings)(Z.X.VOICE_AND_VIDEO_PANEL),
                        noticeType: a.type,
                        children: es.intl.string(es.t.NiTd0e),
                    }),
                    (0, i.jsx)(h.Anchor, {
                        className: el.uD,
                        href: t0.A.getArticleURL(ei.MVz.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: es.intl.string(es.t.CiqAIU),
                    }),
                ],
            });
        case ei.kqX.UNCLAIMED_ACCOUNT:
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.DEFAULT,
                children: [
                    es.intl.string(es.t["f+Zaol"]),
                    (0, i.jsx)(A.Z_, {
                        noticeType: a.type,
                        onClick: () => (d && null != t ? (0, e$.Ze)(t) : x.R()),
                        children: es.intl.string(es.t.fiNVin),
                    }),
                ],
            });
        case ei.kqX.UNVERIFIED_ACCOUNT:
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.DEFAULT,
                children: [
                    es.intl.string(es.t["3sWbf3"]),
                    (0, i.jsx)(A.Z_, {
                        noticeType: a.type,
                        onClick: () => {
                            g.A.verifyResend(),
                                T.A.show({
                                    title: es.intl.string(es.t.LykQYk),
                                    body: es.intl.format(es.t.azKEPy, { email: e?.email }),
                                    cancelText: es.intl.string(es.t.Vm8akB),
                                    onCancel: x.R,
                                });
                        },
                        children: es.intl.string(es.t.WnX4J2),
                    }),
                ],
            });
        case ei.kqX.SCHEDULED_MAINTENANCE:
            if (null == a.metadata) return null;
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.DEFAULT,
                children: [
                    (0, i.jsx)(A.PM, { onClick: () => L.A.ackScheduledMaintenance(), noticeType: a.type }),
                    es.intl.format(es.t["yb96S+"], a.metadata),
                    (0, i.jsx)(A.eC, {
                        href: `${ei.qF7.STATUS}/incidents/${a.metadata.id}`,
                        noticeType: a.type,
                        children: es.intl.string(es.t.hvVgAZ),
                    }),
                ],
            });
        case ei.kqX.NO_INPUT_DETECTED:
            return (0, i.jsx)(ne, { noticeType: a.type });
        case ei.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, i.jsx)(t7, { noticeType: a.type });
        case ei.kqX.VIDEO_BACKGROUND_UNAVAILABLE:
            return (0, i.jsx)(t8, { noticeType: a.type });
        case ei.kqX.HARDWARE_MUTE:
            if (null != a.metadata) {
                let { vendor: e, model: t } = a.metadata;
                return (0, i.jsxs)(A.$T, {
                    color: A.Hv.DANGER,
                    children: [
                        es.intl.format(es.t.qoDex7, { vendorName: e.name, modelName: t.name }),
                        (0, i.jsx)(A.PM, {
                            noticeType: a.type,
                            onClick: () => {
                                m.A.setEnableHardwareMuteNotice(!1), nt();
                            },
                        }),
                        (0, i.jsx)(A.eC, {
                            href: t.url,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            noticeType: a.type,
                            children: es.intl.string(es.t["Yl/Riu"]),
                        }),
                    ],
                });
            }
            if (to.A.getConfig({ location: "Notice.AudioIssueNoticeHardwareMute" }).enableHardwareSilenceWarning)
                return (0, i.jsxs)(A.$T, {
                    color: A.Hv.INFO,
                    children: [
                        es.intl.format(es.t.QMw8Fd, {}),
                        (0, i.jsx)(A.PM, {
                            noticeType: a.type,
                            onClick: () => {
                                m.A.setEnableHardwareMuteNotice(!1), nt();
                            },
                        }),
                    ],
                });
            return null;
        case ei.kqX.STREAMER_MODE:
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.STREAMER_MODE,
                children: [
                    (0, i.jsx)(A.PM, { onClick: () => nt(), noticeType: ei.kqX.STREAMER_MODE }),
                    es.intl.string(es.t.iEgBXp),
                    (0, i.jsx)(A.Z_, {
                        onClick: () => D.A.setEnabled(!1),
                        noticeType: ei.kqX.STREAMER_MODE,
                        children: es.intl.string(es.t.R9GHya),
                    }),
                ],
            });
        case ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == a.metadata) return null;
            let { skuId: q, applicationId: X } = a.metadata,
                J = tX.A.get(q),
                et = G.A.getApplication(X);
            if (null == J || null == et) return null;
            let en = { page: ei.liQ.IN_APP };
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(A.PM, { onClick: () => N(J.id), noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK }),
                    (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: el.PC }),
                    es.intl.format(es.t["g3MU/+"], { applicationName: et.name, skuName: J.name }),
                    (0, i.jsx)(A.Z_, {
                        noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: async () => {
                            try {
                                let { openIAPPurchaseModal: e } = await Promise.all([
                                    n.e("86832"),
                                    n.e("76342"),
                                    n.e("60988"),
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
                                    n.e("59096"),
                                    n.e("55953"),
                                    n.e("56386"),
                                    n.e("38759"),
                                    n.e("51943"),
                                    n.e("90072"),
                                    n.e("88016"),
                                    n.e("84133"),
                                    n.e("13627"),
                                    n.e("57940"),
                                    n.e("58171"),
                                    n.e("44511"),
                                    n.e("39375"),
                                    n.e("47944"),
                                    n.e("84473"),
                                    n.e("70990"),
                                    n.e("15130"),
                                    n.e("57578"),
                                    n.e("57016"),
                                    n.e("65673"),
                                    n.e("50541"),
                                    n.e("42205"),
                                    n.e("55675"),
                                    n.e("27962"),
                                    n.e("10471"),
                                    n.e("64827"),
                                    n.e("63232"),
                                    n.e("68261"),
                                    n.e("7167"),
                                    n.e("12721"),
                                    n.e("84569"),
                                    n.e("36850"),
                                    n.e("60235"),
                                    n.e("21335"),
                                    n.e("61060"),
                                    n.e("77333"),
                                    n.e("47834"),
                                    n.e("11735"),
                                    n.e("85927"),
                                    n.e("834"),
                                    n.e("2368"),
                                    n.e("6338"),
                                    n.e("18573"),
                                    n.e("78157"),
                                    n.e("85404"),
                                    n.e("44057"),
                                    n.e("1453"),
                                    n.e("88774"),
                                    n.e("21235"),
                                    n.e("62175"),
                                    n.e("31988"),
                                    n.e("44571"),
                                    n.e("34303"),
                                    n.e("40291"),
                                    n.e("33115"),
                                    n.e("97270"),
                                    n.e("45959"),
                                    n.e("73122"),
                                    n.e("8304"),
                                    n.e("93159"),
                                    n.e("71202"),
                                    n.e("55936"),
                                    n.e("8739"),
                                    n.e("42834"),
                                    n.e("88131"),
                                    n.e("43430"),
                                    n.e("94723"),
                                    n.e("62931"),
                                    n.e("58529"),
                                    n.e("58038"),
                                    n.e("62531"),
                                    n.e("99081"),
                                    n.e("6174"),
                                    n.e("46070"),
                                    n.e("23532"),
                                    n.e("52557"),
                                    n.e("55654"),
                                    n.e("29963"),
                                    n.e("83161"),
                                    n.e("38513"),
                                    n.e("63645"),
                                    n.e("63123"),
                                    n.e("24038"),
                                    n.e("50097"),
                                    n.e("88469"),
                                    n.e("27355"),
                                    n.e("62075"),
                                ]).then(n.bind(n, 4630));
                                await e({
                                    applicationId: et.id,
                                    skuId: J.id,
                                    openPremiumPaymentModal: () => {
                                        (0, $.A)({
                                            initialPlanId: null,
                                            subscriptionTier: er.pe.TIER_2,
                                            analyticsLocations: s,
                                            analyticsObject: en,
                                        });
                                    },
                                    analyticsLocations: s,
                                    analyticsLocationObject: en,
                                    context: __OVERLAY__ ? ei.BRT.OVERLAY : ei.BRT.APP,
                                }),
                                    N(J.id);
                            } catch (e) {
                                null != e && t4.error("Failed to open off-platform premium perk modal", e);
                            }
                        },
                        children: es.intl.string(es.t.KEwPYx),
                    }),
                ],
            });
        case ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == a.metadata) return null;
            let { skuId: e, applicationId: t } = a.metadata,
                n = tX.A.get(e),
                r = G.A.getApplication(t);
            if (null == n || null == r) return null;
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(A.PM, {
                        onClick: () => nt(),
                        noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: el.PC }),
                    es.intl.format(es.t.LquIKC, { applicationName: r.name, skuName: n.name }),
                    (0, i.jsx)(A.zr, {
                        children: (0, i.jsx)(l.N_, {
                            onClick: () => nt(),
                            to: {
                                pathname: ei.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: { scrollRestoration: !1 },
                            },
                            children: es.intl.string(es.t.hvVgAZ),
                        }),
                    }),
                ],
            });
        }
        case ei.kqX.SURVEY: {
            let e = a.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: r, url: s, embedded: l, id: o } = e;
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.CUSTOM,
                children: [
                    (0, i.jsx)(A.PM, {
                        noticeType: ei.kqX.SURVEY,
                        onClick: () => {
                            (0, y.pX)(t, !0);
                        },
                    }),
                    n,
                    (0, i.jsx)(A.Z_, {
                        noticeType: ei.kqX.SURVEY,
                        onClick: () => {
                            l ? (0, tR.K)(o) : window.open(s, "_blank"), (0, y.pX)(t, !1);
                        },
                        children: r,
                    }),
                ],
            });
        }
        case ei.kqX.CORRUPT_INSTALLATION:
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.DANGER,
                children: [
                    es.intl.string(es.t["ugxmk/"]),
                    (0, i.jsx)(A.eC, {
                        href: t0.A.getArticleURL(ei.MVz.CORRUPT_INSTALLATION),
                        target: "_blank",
                        noticeType: a.type,
                        children: es.intl.string(es.t["6ik4Xk"]),
                    }),
                ],
            });
        case ei.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.WARNING,
                children: [
                    (0, i.jsx)(A.PM, { onClick: () => nt(), noticeType: ei.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                    es.intl.string(es.t.wVjKGi),
                    (0, i.jsx)(A.Z_, {
                        noticeType: ei.kqX.VIDEO_UNSUPPORTED_BROWSER,
                        onClick: () => {
                            (0, f.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("17951"), n.e("44602"), n.e("25280")]).then(
                                    n.bind(n, 987482),
                                );
                                return (t) => (0, i.jsx)(e, { source: "Video unsupported browser", ...t });
                            });
                        },
                        children: es.intl.string(es.t["1WjMbC"]),
                    }),
                ],
            });
        case ei.kqX.DISPATCH_ERROR:
            if (null == a.metadata) return null;
            let { error: ea } = a.metadata;
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.DANGER,
                children: [
                    (0, i.jsx)(A.PM, { onClick: () => nt(), noticeType: ei.kqX.DISPATCH_ERROR }),
                    ea?.displayMessage,
                    (0, i.jsx)(A.Z_, {
                        noticeType: ei.kqX.DISPATCH_ERROR,
                        onClick: () =>
                            (0, f.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("91139"), n.e("88014")]).then(
                                    n.bind(n, 627261),
                                );
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                        children: es.intl.string(es.t.hvVgAZ),
                    }),
                ],
            });
        case ei.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == a.metadata) return null;
            let { progress: ed, total: ec, name: eu } = a.metadata;
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.DEFAULT,
                children: [
                    (0, i.jsx)(A.PM, { onClick: () => nt(), noticeType: ei.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS }),
                    (0, i.jsxs)(k.A, {
                        justify: k.A.Justify.CENTER,
                        children: [
                            null != eu
                                ? es.intl.formatToPlainString(es.t["pHj+z4"], {
                                      name: `${eu}`,
                                      progress: ed,
                                      total: ec,
                                  })
                                : es.intl.formatToPlainString(es.t["lHZn+A"], { progress: ed, total: ec }),
                            (0, i.jsx)(p.y, { type: p.y.Type.PULSING_ELLIPSIS, className: el.gO }),
                        ],
                    }),
                ],
            });
        case ei.kqX.APPLICATION_TEST_MODE:
            if (null == a.metadata) return null;
            if (null != tQ.A.testModeEmbeddedApplicationId)
                return (0, i.jsx)(A.$T, {
                    color: A.Hv.WARNING,
                    children: (0, i.jsxs)(k.A, {
                        justify: k.A.Justify.CENTER,
                        align: k.A.Align.CENTER,
                        children: [
                            (0, i.jsx)("div", {
                                children: es.intl.format(es.t["1qxVe4"], {
                                    applicationName: a.metadata.applicationName,
                                }),
                            }),
                            (0, i.jsx)(A.PM, { onClick: v.cL, noticeType: ei.kqX.APPLICATION_TEST_MODE }),
                        ],
                    }),
                });
            return (0, i.jsx)(A.$T, {
                color: A.Hv.WARNING,
                children: (0, i.jsxs)(k.A, {
                    justify: k.A.Justify.CENTER,
                    align: k.A.Align.CENTER,
                    children: [
                        (0, i.jsx)("div", {
                            children: es.intl.format(es.t.Fv5HrE, { applicationName: a.metadata.applicationName }),
                        }),
                        (0, i.jsx)(A.PM, { onClick: v.cL, noticeType: ei.kqX.APPLICATION_TEST_MODE }),
                    ],
                }),
            });
        case ei.kqX.VIEWING_ROLES:
            return (0, i.jsx)(tn.A, {});
        case ei.kqX.PREMIUM_UNCANCEL:
            return (0, i.jsxs)(A.$T, {
                color:
                    F === er.PremiumTypes.TIER_1
                        ? A.Hv.PREMIUM_TIER_1
                        : F === er.PremiumTypes.TIER_0
                          ? A.Hv.PREMIUM_TIER_0
                          : A.Hv.PREMIUM_TIER_2,
                children: [
                    (0, i.jsx)(A.PM, {
                        noticeType: ei.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            nt(a.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: el.PC }),
                    F === er.PremiumTypes.TIER_1
                        ? es.intl.formatToPlainString(es.t.fXv4wm, { daysLeft: a.metadata.daysLeft })
                        : F === er.PremiumTypes.TIER_0
                          ? es.intl.formatToPlainString(es.t.ZOHZMr, { daysLeft: a.metadata.daysLeft })
                          : es.intl.formatToPlainString(es.t.outyHh, { daysLeft: a.metadata.daysLeft }),
                    (0, i.jsx)(A.Z_, {
                        noticeType: ei.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            nt(a.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, f.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("86832"),
                                        n.e("76342"),
                                        n.e("60988"),
                                        n.e("69273"),
                                        n.e("72210"),
                                        n.e("3155"),
                                        n.e("39375"),
                                        n.e("58171"),
                                        n.e("47944"),
                                        n.e("82104"),
                                        n.e("84473"),
                                        n.e("17202"),
                                        n.e("25677"),
                                        n.e("65327"),
                                        n.e("90072"),
                                        n.e("88016"),
                                        n.e("10471"),
                                        n.e("68261"),
                                        n.e("12721"),
                                        n.e("36850"),
                                        n.e("21335"),
                                        n.e("77333"),
                                        n.e("47834"),
                                        n.e("11735"),
                                        n.e("85927"),
                                        n.e("2368"),
                                        n.e("85404"),
                                        n.e("21235"),
                                        n.e("62175"),
                                        n.e("8739"),
                                        n.e("23532"),
                                        n.e("52557"),
                                        n.e("55654"),
                                        n.e("83161"),
                                        n.e("14794"),
                                    ]).then(n.bind(n, 174705));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            daysLeft: a.metadata.daysLeft,
                                            premiumType: F,
                                            analyticsSource: "Nag Bar",
                                            premiumSubscription: a.metadata.premiumSubscription,
                                        });
                                });
                        },
                        children:
                            F === er.PremiumTypes.TIER_1
                                ? es.intl.string(es.t.BkbUPM)
                                : F === er.PremiumTypes.TIER_0
                                  ? es.intl.string(es.t.Px978X)
                                  : es.intl.string(es.t.LW5tCE),
                    }),
                ],
            });
        case ei.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: e_, dismissUntil: eA } = a.metadata;
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.WARNING,
                children: [
                    (0, i.jsx)(A.PM, {
                        noticeType: a.type,
                        onClick: () => {
                            nt(eA);
                        },
                    }),
                    es.intl.format(es.t.zxU0Kp, { daysPastDue: e_ }),
                    (0, i.jsx)(A.Z_, {
                        noticeType: ei.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            nt(eA), (0, Q.openUserSettings)(Z.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: es.intl.string(es.t.q8rxeS),
                    }),
                ],
            });
        case ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.DANGER,
                children: [
                    (0, i.jsx)(A.PM, {
                        noticeType: ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            nt(a.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    es.intl.string(es.t.LlZaoX),
                    (0, i.jsx)(A.Z_, {
                        noticeType: ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            nt(a.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, Q.openUserSettings)(Z.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: es.intl.string(es.t["Zpd+Yq"]),
                    }),
                ],
            });
        case ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.WARNING,
                children: [
                    (0, i.jsx)(A.PM, {
                        noticeType: ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            nt(a.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    es.intl.string(es.t["30YfCr"]),
                    (0, i.jsx)(A.Z_, {
                        noticeType: ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            nt(a.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, Q.openUserSettings)(Z.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: es.intl.string(es.t.U5pKWA),
                    }),
                ],
            });
        case ei.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.WARNING,
                children: [
                    (0, i.jsx)(A.PM, {
                        noticeType: ei.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            nt(a.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    F === er.PremiumTypes.TIER_1
                        ? es.intl.formatToPlainString(es.t.b6QUvf, { daysLeft: a.metadata.daysLeft })
                        : F === er.PremiumTypes.TIER_0
                          ? es.intl.formatToPlainString(es.t["tURZ/M"], { daysLeft: a.metadata.daysLeft })
                          : es.intl.formatToPlainString(es.t.AyC74I, { daysLeft: a.metadata.daysLeft }),
                    (0, i.jsx)(A.Z_, {
                        noticeType: ei.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            nt(a.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, Q.openUserSettings)(Z.X.SUBSCRIPTIONS_PANEL);
                        },
                        children:
                            F === er.PremiumTypes.TIER_1
                                ? es.intl.string(es.t.lboF5O)
                                : F === er.PremiumTypes.TIER_0
                                  ? es.intl.string(es.t["4UPwOq"])
                                  : es.intl.string(es.t["P/VvGb"]),
                    }),
                ],
            });
        case ei.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, i.jsx)(te, {
                buttonText: a.buttonText ?? es.intl.string(es.t["/g10LC"]),
                onGoBack: a.callback,
                onDismiss: () => nt(),
                showCloseButton: !0,
            });
        case ei.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, i.jsx)(eK, { guildId: t, analyticsLocations: s });
        case ei.kqX.PARENTAL_CONSENT_WARNING:
            return (0, i.jsx)(th, { daysRemaining: a.metadata?.daysRemaining ?? null });
        case ei.kqX.QUARANTINED:
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.DANGER,
                children: [
                    es.intl.string(es.t.DVFJYf),
                    (0, i.jsx)(A.eC, {
                        href: t3.q,
                        target: "_blank",
                        noticeType: a.type,
                        children: es.intl.string(es.t.kvHdFN),
                    }),
                    (0, i.jsx)(h.Anchor, {
                        href: t0.A.getArticleURL(ei.MVz.QUARANTINE),
                        target: "_blank",
                        className: el.yw,
                        children: es.intl.string(es.t.hvVgAZ),
                    }),
                ],
            });
        case ei.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: eh, decisionId: ef } = a.metadata;
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.WARNING,
                children: [
                    (0, i.jsx)(A.PM, {
                        noticeType: ei.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != t && (0, ex.wu)(t), nt(eh);
                        },
                    }),
                    es.intl.string(es.t.B8ruyY),
                    (0, i.jsx)(A.zr, {
                        onClick: () => {
                            null != t &&
                                (0, ex.W5)(t, ef, () => {
                                    nt(eh), (0, ex.wu)(t);
                                });
                        },
                        children: es.intl.string(es.t.oX14El),
                    }),
                    null != t
                        ? (0, i.jsx)(A.zr, {
                              onClick: () => tt.A.open(t, ei.BEX.GUILD_AUTOMOD, void 0, ei.nd0.AUTOMOD_MENTION_SPAM),
                              children: es.intl.string(es.t["1R7QIx"]),
                          })
                        : null,
                ],
            });
        case ei.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.DANGER,
                children: [
                    (0, i.jsx)(A.PM, {
                        noticeType: ei.kqX.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            a.metadata?.streamKey != null && (0, tO.lk)(a.metadata.streamKey);
                        },
                    }),
                    es.intl.string(es.t.rOx44m),
                ],
            });
        case ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, i.jsxs)(A.$T, {
                color: A.Hv.BRAND,
                children: [
                    (0, i.jsx)(A.PM, {
                        onClick: () => {
                            nt(a.metadata?.dismissUntil);
                        },
                        noticeType: ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    es.intl.string(es.t["0klLS7"]),
                    (0, i.jsx)(A.Z_, {
                        onClick: () => {
                            (0, f.openModalLazy)(async () => {
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
                                nt(a.metadata?.dismissUntil);
                        },
                        noticeType: ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: es.intl.string(es.t.e4y2VM),
                    }),
                ],
            });
        case ei.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, i.jsx)(tD, {});
        case ei.kqX.PREMIUM_MARKETING_NAGBAR:
            return (0, i.jsx)(tC.A, {});
        case ei.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR:
            return (0, i.jsx)(tN, { premiumSubscription: a.metadata.premiumSubscription });
        case ei.kqX.SYSTEM_SERVICE_WARNING:
            return (0, i.jsx)(tW, {});
        default:
            return null;
    }
});
function ni() {
    let { analyticsLocations: e } = (0, w.Ay)(U.A.NOTICE);
    return (0, i.jsx)(w.f5, { value: e, children: (0, i.jsx)(nn, {}) });
}
