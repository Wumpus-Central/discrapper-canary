"use strict";
n.d(t, { w: () => t8, A: () => ne });
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
    f = n(939249),
    h = n(417098),
    p = n(349288),
    E = n(403581),
    m = n(192308),
    g = n(289873),
    A = n(157559),
    I = n(827343),
    T = n(830215),
    S = n(228366);
function N(e) {
    S.h.dispatch({ type: "DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS", skuId: e });
}
var y = n(912851);
let C = {
    clearRemoteDisconnectVoiceChannelId() {
        S.h.dispatch({ type: "CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID" });
    },
    clearLastSessionVoiceChannelId() {
        S.h.dispatch({ type: "CLEAR_LAST_SESSION_VOICE_CHANNEL_ID" });
    },
};
var v = n(730852),
    O = n(785796),
    R = n(55619),
    b = n(246605),
    D = n(271866),
    L = n(736653),
    w = n(77729),
    M = n(573648),
    P = n(793574),
    x = n(688810),
    U = n(587895),
    k = n(315982),
    G = n(235986),
    F = n(626584),
    V = n(554146),
    B = n(691540),
    H = n(857250),
    j = n(97483),
    Y = n(803306),
    W = n(975807),
    K = n(968309),
    z = n(532794),
    $ = n(745299),
    q = n(976860),
    Z = n(780964),
    X = n(718446),
    Q = n(766075),
    J = n(879945),
    ee = n(174459),
    et = n(379848),
    en = n(49999),
    ei = n(652215),
    er = n(788868),
    es = n(355097),
    ea = n(375708),
    eo = n(448759);
let el = (e) => {
    let { dismissibleContent: t, noticeType: r } = e;
    return (0, i.jsx)(et.Ay, {
        contentTypes: [t],
        groupName: en.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: s } = e;
            switch (t) {
                case V.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(h.$T, {
                        color: h.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(h.PM, { onClick: () => s(en.i.UNKNOWN), noticeType: r }),
                            ea.intl.string(ea.t["+xn1o5"]),
                            (0, i.jsx)("i", { className: eo.c9 }),
                            (0, i.jsx)("i", { className: eo.Vz }),
                            (0, i.jsx)("i", { className: eo.p0 }),
                            (0, i.jsx)(h.Z_, {
                                noticeType: r,
                                onClick: () => {
                                    (0, m.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("81013"),
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
                case V.M.NAGBAR_QUEST_APP_UPSELL:
                    return (0, i.jsxs)(h.$T, {
                        color: h.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(h.PM, { onClick: () => s(en.i.UNKNOWN), noticeType: r }),
                            (0, i.jsx)("i", { className: eo.TN }),
                            ea.intl.string(ea.t.lgwX26),
                            (0, i.jsx)(h.Z_, {
                                noticeType: r,
                                onClick: () => {
                                    (0, W.A)(ei.AMi.META_QUEST), s(en.i.TAKE_ACTION);
                                },
                                children: ea.intl.string(ea.t["1WjMbC"]),
                            }),
                        ],
                    });
                case V.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(h.$T, {
                        color: h.Hv.SPOTIFY,
                        children: [
                            (0, i.jsx)(h.PM, { onClick: () => s(en.i.UNKNOWN), noticeType: r }),
                            (0, i.jsx)(J.A, { className: eo.tV }),
                            ea.intl.string(ea.t["5NUVHH"]),
                            (0, i.jsx)(h.Z_, {
                                onClick: () => (0, K.A)({ platformType: ei.fg2.SPOTIFY, location: "Notice Bar" }),
                                noticeType: r,
                                children: ea.intl.string(ea.t.S0W8Z5),
                            }),
                        ],
                    });
                case V.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(h.$T, {
                        color: h.Hv.PLAYSTATION,
                        children: [
                            (0, i.jsx)(h.PM, { noticeType: r, onClick: () => s(en.i.UNKNOWN) }),
                            (0, i.jsx)("img", {
                                alt: "",
                                className: eo.tV,
                                src: M.A.get(ei.fg2.PLAYSTATION).icon.whiteSVG,
                            }),
                            ea.intl.string(ea.t.WHWgoY),
                            (0, i.jsx)(h.zr, {
                                onClick: () => (0, K.A)({ platformType: ei.fg2.PLAYSTATION, location: "Notice Bar" }),
                                children: ea.intl.string(ea.t.S0W8Z5),
                            }),
                        ],
                    });
                case V.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(h.$T, {
                        color: h.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(h.PM, { onClick: () => s(en.i.USER_DISMISS), noticeType: r }),
                            ea.intl.string(ea.t["3qKN/h"]),
                            (0, i.jsx)(h.Z_, {
                                onClick: async () => {
                                    s(en.i.TAKE_ACTION);
                                    try {
                                        let { startRegisterWebAuthnCredential: e } = await Promise.resolve().then(
                                                n.bind(n, 917136),
                                            ),
                                            { ticket: t, challenge: r } = await e();
                                        (0, m.openModalLazy)(async () => {
                                            let { RegisterWebAuthnCredentialModal: e } = await Promise.all([
                                                n.e("10441"),
                                                n.e("4736"),
                                                n.e("40114"),
                                                n.e("19631"),
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
                case V.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(h.$T, {
                        color: h.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)("span", { className: eo.lK }),
                            (0, i.jsx)("span", { className: eo.$t, children: ea.intl.string(ea.t["+urf75"]) }),
                            (0, i.jsx)(h.Z_, {
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
                            (0, i.jsx)(h.PM, {
                                onClick: () => {
                                    s(en.i.UNKNOWN), (0, Y.lA)(ei.nhx.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: r,
                            }),
                        ],
                    });
                case V.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)($.A, {
                        dismissCurrentNotice: () => s(en.i.UNKNOWN),
                        subscriptionTier: er.pe.TIER_2,
                    });
                case V.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)($.A, {
                        dismissCurrentNotice: () => s(en.i.UNKNOWN),
                        subscriptionTier: er.pe.TIER_0,
                    });
                case V.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(h.$T, {
                        color: h.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(h.PM, { noticeType: r, onClick: () => s(en.i.UNKNOWN) }),
                            ea.intl.string(ea.t["0KFB2B"]),
                            (0, i.jsx)(h.Z_, {
                                noticeType: r,
                                onClick: () => {
                                    s(en.i.UNKNOWN), (0, Q.openUserSettings)(Z.X.NITRO_PANEL);
                                },
                                children: ea.intl.string(ea.t.pyYSiO),
                            }),
                        ],
                    });
                case V.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(h.$T, {
                        color: h.Hv.DANGER,
                        children: [
                            (0, i.jsx)(h.PM, { onClick: () => s(en.i.UNKNOWN), noticeType: r }),
                            ea.intl.string(ea.t["7490vQ"]),
                            (0, i.jsx)(h.Z_, {
                                noticeType: r,
                                onClick: () => {
                                    (0, q.pX)((0, X.settingsPathToRoute)(es.od.ACCOUNT));
                                },
                                children: ea.intl.string(ea.t.Vm8akB),
                            }),
                        ],
                    });
                case V.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(h.$T, {
                        color: h.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(h.PM, { onClick: () => s(en.i.UNKNOWN), noticeType: r }),
                            ea.intl.string(ea.t["O9GI+k"]),
                            (0, i.jsx)(h.Z_, {
                                onClick: () => {
                                    (0, z.A)({
                                        subscriptionTier: er.pe.TIER_2,
                                        analyticsLocations: [P.A.CHECKOUT_RECOVERY_NAGBAR],
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
};
var eu = n(877624),
    ec = n(374200),
    ed = n(131607),
    e_ = n(597770);
let ef = (e) => {
        let { markAsDismissed: t } = e,
            { analyticsLocations: n } = (0, x.Ay)(),
            r = (0, c.bG)([ec.A], () => {
                let e = ec.A.getMarketingComponentByType(eu.C.GIFT_REMINDER_NAGBAR);
                return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.giftReminderNagbar;
            });
        return null == r
            ? null
            : (0, i.jsxs)(h.$T, {
                  color: h.Hv.PREMIUM_TIER_2,
                  children: [
                      (0, i.jsx)(h.PM, {
                          onClick: () => t(en.i.USER_DISMISS),
                          noticeType: ei.kqX.GIFTING_PROMOTION_REMINDER,
                      }),
                      (0, i.jsx)(e_.o, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "currentColor",
                          className: eo.ez,
                      }),
                      r.body,
                      (0, i.jsx)(h.Z_, {
                          onClick: () => {
                              (0, z.A)({
                                  isGift: !0,
                                  initialPlanId: null,
                                  analyticsLocations: n,
                                  analyticsLocation: ei.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                                  analyticsObject: { page: ei.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION },
                              });
                          },
                          noticeType: ei.kqX.GIFTING_PROMOTION_REMINDER,
                          children: ea.intl.string(ea.t.RzWDqY),
                      }),
                  ],
              });
    },
    eh = (e) => {
        let t,
            n,
            { dismissibleContent: r } = e,
            { snowflakeId: s, couldShow: a } =
                ((t = (0, c.bG)([ec.A], () => ec.A.getGiftPromotion()?.id)),
                (n = (0, c.bG)([ec.A], () => null != ec.A.getMarketingComponentByType(eu.C.GIFT_REMINDER_NAGBAR))),
                r === V.M.GIFTING_PROMOTION_REMINDER
                    ? { snowflakeId: t, couldShow: n && null != t }
                    : { snowflakeId: void 0, couldShow: !1 }),
            [o, l] = (0, ed.Cc)(a ? r : null, s ?? "", en.m.NOTICE_BAR, !0);
        return null == o
            ? null
            : o === V.M.GIFTING_PROMOTION_REMINDER
              ? (0, i.jsx)(ef, { markAsDismissed: (e) => l(e) })
              : void 0;
    };
var ep = n(264779),
    eE = n(962644),
    em = n(287809),
    eg = n(428262),
    eA = n(946319);
let eI = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, ep.Cp)(),
        s = (0, c.bG)([em.default], () => !eg.Ay.isPremium(em.default.getCurrentUser())),
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
                  if (t === V.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR)
                      return (0, i.jsxs)(h.$T, {
                          color: h.Hv.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(h.PM, {
                                  noticeType: ei.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      eE.Ay.dismissOutboundPromotionNotice(), null !== n && n(en.i.USER_DISMISS);
                                  },
                              }),
                              (0, i.jsx)(E.t, { size: "md", color: "currentColor", className: eA.P }),
                              s ? ea.intl.string(ea.t["5JMiOo"]) : ea.intl.string(ea.t["Pzh+G2"]),
                              (0, i.jsx)(h.Z_, {
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
};
var eT = n(587054),
    eS = n(487329),
    eN = n(102609),
    ey = n(736056),
    eC = n(194261),
    ev = n(548118),
    eO = n(134413),
    eR = n(221950),
    eb = n(71393),
    eD = n(309010),
    eL = n(967198),
    ew = n(585510),
    eM = n(834409),
    eP = n(903093),
    ex = n(746080),
    eU = n(500928);
function ek(e) {
    let { onDismiss: t } = e,
        s = (0, c.bG)([eL.A], () => eL.A.getGuildId()),
        a = (0, c.bG)([eD.A], () => (null != s ? eD.A.getChannelId(s) : null), [s]),
        o = s ?? null,
        l = (0, c.bG)([eb.A], () => (null != o ? eb.A.getGuild(o) : null), [o]),
        { shouldShowIncidentActions: u, incidentData: d, isUnderLockdown: _ } = (0, ew.Li)(o),
        f = (0, eO.fw)(l?.id ?? ei.dJq),
        p = r.useCallback(() => null != l && (0, eR.aZ)(l.id), [l]);
    if (null == l || null == d || !u) return null;
    let E = (e) => {
            e && f && a !== ex.VV.MEMBER_SAFETY && p()
                ? ee.default.track(ei.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                      notice_type: ei.kqX.GUILD_RAID_NOTIFICATION,
                      guild_id: l.id,
                  })
                : (0, m.openModalLazy)(async () => {
                      let e = { source: eM.Eo.NAGBAR, alertType: (0, eP.$5)(d) },
                          { default: t } = await Promise.all([
                              n.e("29690"),
                              n.e("40258"),
                              n.e("73669"),
                              n.e("46313"),
                              n.e("43233"),
                          ]).then(n.bind(n, 671576));
                      return (n) => (0, i.jsx)(t, { ...n, guildId: l.id, analyticsData: e });
                  });
        },
        g = (0, i.jsx)(ev.Ay, { className: eU.$f, guild: l, size: ev.Ay.Sizes.MINI }),
        A = (0, eP.ql)(d, l.name);
    if (null != (d.dmsDisabledUntil ?? d.invitesDisabledUntil) && _)
        return (0, i.jsxs)(h.$T, {
            className: eU.lm,
            color: h.Hv.NEUTRAL,
            children: [
                (0, i.jsx)(h.PM, { onClick: t, noticeType: ei.kqX.GUILD_RAID_NOTIFICATION }),
                g,
                A,
                (0, i.jsx)(h.zr, {
                    className: eU.hP,
                    onClick: () => E(!1),
                    children: (0, i.jsxs)("div", {
                        className: eU.rx,
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
        T = f && a === ex.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(h.$T, {
        className: eU.lm,
        color: h.Hv.WARNING,
        children: [
            (0, i.jsx)(h.PM, { onClick: t, noticeType: ei.kqX.GUILD_RAID_NOTIFICATION }),
            g,
            I,
            !T &&
                (0, i.jsx)(h.zr, {
                    className: eU.hP,
                    onClick: () => E(!0),
                    children: (0, i.jsx)("div", {
                        className: eU.rx,
                        children: (0, i.jsx)("span", { children: ea.intl.string(ea.t.zDJDhr) }),
                    }),
                }),
        ],
    });
}
var eG = n(995786),
    eF = n(206835),
    eV = n(495544),
    eB = n(696451),
    eH = n(229527),
    ej = n(81400),
    eY = n(340837);
function eW(e) {
    let { guildId: t, analyticsLocations: n } = e,
        [r, s] = (0, ej.j8)({ guildId: t, analyticsLocations: n }),
        a = s ? ea.intl.string(ea.t["6ndMcq"]) : ea.intl.string(ea.t["0eiu6J"]),
        o = s ? ea.intl.string(ea.t.S09nw4) : ea.intl.string(ea.t.tEttXd);
    return (0, i.jsxs)(h.$T, { color: h.Hv.DANGER, children: [a, (0, i.jsx)(h.zr, { onClick: r, children: o })] });
}
function eK() {
    let e = (0, eF.A)({ scrollPosition: es._F.GUILD_TAG });
    return (0, i.jsxs)(h.$T, {
        color: h.Hv.DANGER,
        children: [
            ea.intl.string(ea.t.Zqlecb),
            (0, i.jsx)(h.zr, { onClick: e, children: ea.intl.string(ea.t.SJehVW) }),
        ],
    });
}
function ez(e) {
    let { analyticsLocations: t, ...n } = e,
        { analyticsLocations: r } = (0, x.Ay)(t, P.A.AUTOMOD_NAGBAR_NOTICE),
        s = (0, c.bG)([eV.default, eB.Ay], () => {
            if (null == n.guildId) return new Set();
            let e = eV.default.getId();
            return (0, eH.wj)(eB.Ay.getMember(n.guildId, e));
        }, [n.guildId]);
    return s.has(eY.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || s.has(eY.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, i.jsx)(eW, { ...n, analyticsLocations: r })
        : s.has(eY.D.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, i.jsx)(eK, {})
          : (0, i.jsx)(eW, { ...n, analyticsLocations: r });
}
var e$ = n(202384),
    eq = n(51758);
n(321073);
var eZ = n(503698),
    eX = n.n(eZ),
    eQ = n(873263),
    eJ = n(314116),
    e0 = n(821609),
    e1 = n(334465),
    e2 = n(624458),
    e3 = n(513461),
    e6 = n(709977),
    e4 = n(212455),
    e5 = n(182430),
    e7 = n(580537);
let e8 = () => {
    let e = (0, c.bG)([eL.A], () => eL.A.getGuildId(), []),
        t = (0, c.bG)([eb.A], () => eb.A.getGuild(e), [e]),
        r = (0, c.bG)([e4.A], () => (null != e ? e4.A.getRequest(e) : null), [e]),
        s = (0, eQ.zy)(),
        a = (0, e1.B)(s.pathname, ei.BVt.CHANNEL(t?.id, ex.VV.GUILD_ONBOARDING))?.isExact === !0;
    if (null == t || !(0, e6.Qd)(t) || a) return null;
    let o = r?.applicationStatus ?? e3.B5.STARTED,
        l = null,
        u = null,
        d = null,
        f = [e5.lm, e7.lm];
    switch (o) {
        case e3.B5.SUBMITTED:
            (l = ea.intl.string(ea.t["5iLvSx"])),
                (u = ea.intl.string(ea.t.mqtdmQ)),
                (d = () => {
                    (0, eJ.A)({
                        title: ea.intl.string(ea.t.aIz1oV),
                        subtitle: ea.intl.string(ea.t["13tjTU"]),
                        variant: "primary",
                        confirmText: ea.intl.string(ea.t["cY+Oob"]),
                        onConfirm: () => e2.A.removeGuildJoinRequest(t.id),
                    });
                });
            break;
        case e3.B5.REJECTED:
            (l = ea.intl.string(ea.t.lk30cY)),
                (u = ea.intl.string(ea.t["8RrsHr"])),
                (d = () => {
                    (0, m.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("25099"), n.e("14382")]).then(n.bind(n, 463325));
                        return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                    });
                }),
                f.push(e5.z3);
            break;
        default:
            (l = ea.intl.string(ea.t.G5YKXP)),
                (u = ea.intl.string(ea.t["r8/DT+"])),
                (d = () => {
                    (0, e$.Ze)(t.id);
                });
    }
    return (0, i.jsxs)("div", {
        className: eX()(...f),
        children: [
            (0, i.jsx)(_.E, { className: e5.wx, variant: "text-sm/normal", children: l }),
            (0, i.jsx)(e0.$, { variant: "overlay-primary", size: "sm", onClick: d, text: u }),
        ],
    });
};
var e9 = n(477155),
    te = n(22877);
function tt(e) {
    let { buttonText: t, onGoBack: n, onDismiss: r, showCloseButton: s } = e;
    return (0, i.jsxs)(h.$T, {
        className: te.eR,
        children: [
            s && (0, i.jsx)(h.PM, { onClick: r, className: te.b, noticeType: ei.kqX.BACK_TO_PREVIOUS_SCREEN }),
            (0, i.jsx)(e0.$, { text: t, variant: "overlay-secondary", size: "sm", icon: e9.r, onClick: n }),
        ],
    });
}
var tn = n(468689),
    ti = n(699609),
    tr = n(862482),
    ts = n(66834),
    ta = n(449054),
    to = n(484154);
let tl = () => {
    let e = (0, c.bG)([eL.A], () => eL.A.getGuildId(), []),
        t = (0, c.bG)([eb.A], () => eb.A.getGuild(e), [e]),
        [n, s] = r.useState(!1);
    if (null == t) return null;
    let a = async () => {
        s(!0);
        try {
            ta.cf(t.id), await ts.A.joinGuild(t.id, { source: ei.Q4z.NOTICE_BAR });
        } catch {
            s(!1);
        }
    };
    return (0, i.jsxs)("div", {
        className: eX()(to.lm, e7.lm),
        children: [
            (0, i.jsxs)(tr.$n, {
                look: tr.$n.Looks.OUTLINED,
                color: tr.$n.Colors.WHITE,
                size: tr.$n.Sizes.NONE,
                className: eX()(to.x6, to.aX),
                innerClassName: to.gb,
                onClick: () => {
                    (0, q.JK)().goBack();
                },
                children: [
                    (0, i.jsx)(e9.r, { size: "xs", color: "currentColor", className: to.UE }),
                    ea.intl.string(ea.t["13/7kX"]),
                ],
            }),
            (0, i.jsx)(_.E, { className: to.wx, variant: "text-sm/normal", children: ea.intl.string(ea.t["N/y2WE"]) }),
            (0, i.jsx)(tr.$n, {
                className: to.x6,
                look: tr.$n.Looks.OUTLINED,
                color: tr.$n.Colors.WHITE,
                size: tr.$n.Sizes.NONE,
                submitting: n,
                onClick: a,
                children: ea.intl.format(ea.t.uHN7ny, { guild: t.name }),
            }),
        ],
    });
};
var tu = n(801644),
    tc = n(74848),
    td = n(234419),
    t_ = n(661531),
    tf = n(367727),
    th = n(635995),
    tp = n(88001),
    tE = n(466919),
    tm = n(375043);
function tg(e) {
    let { premiumSubscription: t } = e,
        s = t?.id,
        a = r.useCallback(() => {
            null != s && (0, tf.qr)(V.M.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR, s, { dismissAction: en.i.USER_DISMISS });
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
                    let { default: e } = await Promise.all([n.e("44616"), n.e("85579")]).then(n.bind(n, 785606));
                    return (n) => (0, i.jsx)(e, { ...n, subscription: t });
                }));
        }, [t, a]);
    return (0, i.jsxs)(th.T0, {
        onClick: o,
        className: tm.A,
        children: [
            (0, i.jsx)(E.t, { color: t_.A.colors.ICON_STRONG }),
            (0, i.jsx)(th.In, {
                children: ea.intl.format(tE.default.fFt9bd, { premiumGroupProductName: (0, tp.DP)() }),
            }),
            (0, i.jsx)(e0.$, {
                onClick: l,
                text: ea.intl.string(tE.default["5fZHp3"]),
                size: "sm",
                variant: "overlay-primary",
            }),
        ],
    });
}
var tA = n(549996),
    tI = n(498470),
    tT = n(637706);
function tS() {
    let e = (0, tA.c)(eu.C.NAGBAR),
        t = e?.properties.properties.oneofKind === "nagbar" ? e.properties.properties.nagbar : null,
        n = e?.promotionId,
        s = r.useCallback(
            (e) => {
                null != n &&
                    (0, tf.qr)(V.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, n, { dismissAction: e, forceTrack: !0 });
            },
            [n],
        ),
        a = r.useCallback(() => {
            ee.default.track(ei.HAw.APP_NOTICE_CLOSED, { notice_type: ei.kqX.PREMIUM_MARKETING_NAGBAR }),
                s(en.i.USER_DISMISS);
        }, [s]),
        o = r.useRef(null);
    if (
        (r.useEffect(() => {
            null == t ||
                null == n ||
                (o.current !== n &&
                    ((o.current = n), (0, tf.Wx)(V.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, { snowflakeId: n })));
        }, [t, n]),
        null == t)
    )
        return null;
    let l = (0, tI.h)({
            buttonAction: t.ctaAction,
            deeplinkSection: t.deeplinkSection,
            onClose: () => {
                s(en.i.TAKE_ACTION);
            },
        }),
        u = (0, tT.C)(t.helpArticle, "");
    return (0, i.jsxs)(th.T0, {
        onClick: a,
        children: [
            (0, i.jsxs)(th.In, {
                children: [
                    t.body,
                    null != u &&
                        (0, i.jsxs)(i.Fragment, {
                            children: ["\xa0", (0, i.jsx)(p.Anchor, { href: u.url, children: u.linkText })],
                        }),
                ],
            }),
            "" !== t.ctaLabel &&
                (0, i.jsx)(th.fY, {
                    text: t.ctaLabel,
                    onClick: () => {
                        ee.default.track(ei.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                            notice_type: ei.kqX.PREMIUM_MARKETING_NAGBAR,
                        }),
                            l();
                    },
                }),
        ],
    });
}
var tN = n(378974),
    ty = n(340124),
    tC = n(14594);
function tv() {
    let [e, t] = (0, ed.Wl)(V.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: tC.aH });
    return e !== V.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK
        ? null
        : (0, i.jsxs)(h.$T, {
              color: h.Hv.BRAND,
              children: [
                  (0, i.jsx)(h.PM, { onClick: () => t(en.i.DISMISS), noticeType: ei.kqX.IGNORE_USER_FEEDBACK_NAGBAR }),
                  ea.intl.string(ea.t.XkeW9N),
                  (0, i.jsx)(h.Z_, {
                      onClick: () => {
                          (0, m.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e("56030"),
                                  n.e("18413"),
                                  n.e("22255"),
                                  n.e("55925"),
                                  n.e("85033"),
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
var tO = n(825484),
    tR = n(139716),
    tb = n(847599),
    tD = n(734057),
    tL = n(849736),
    tw = n(354583),
    tM = n(366098),
    tP = n(418208),
    tx = n(992262);
function tU(e) {
    if (!e && (0, tP.Cf)())
        return void tR.A.showAgeVerificationGetStartedModal({ entryPoint: tb.q1.STAGE_CHANNEL_RAISE_HAND });
    let t = eD.A.getVoiceChannelId();
    if (null == t) return;
    let n = tD.A.getChannel(t);
    null != n && (0, tL.e7)(n, e);
}
function tk(e) {
    let { channelId: t } = e,
        n = (0, tM.D3)(t) ?? 0,
        r = (0, tM.Xk)(t) ?? 0;
    return n > 0 && r > 0
        ? (0, i.jsx)("div", {
              className: tx.Z5,
              children: (0, i.jsx)("div", { className: eX()(tx.qQ, tx.lN), children: ea.intl.string(ea.t.xlJRfv) }),
          })
        : n > 0
          ? (0, i.jsx)("div", {
                className: tx.Z5,
                children: (0, i.jsx)("div", { className: eX()(tx.qQ, tx.lN), children: ea.intl.string(ea.t.WYad9Z) }),
            })
          : r > 0
            ? (0, i.jsx)("div", {
                  className: tx.Z5,
                  children: (0, i.jsx)("div", { className: eX()(tx.qQ, tx.lN), children: ea.intl.string(ea.t.eHq2OF) }),
              })
            : null;
}
function tG() {
    let e = (0, tw.A)();
    return null == e
        ? null
        : (0, i.jsxs)(h.$T, {
              className: tx.kL,
              color: h.Hv.DEFAULT,
              children: [
                  ea.intl.string(ea.t.Ul1RJQ),
                  (0, i.jsx)(tk, { channelId: e.id }),
                  (0, i.jsxs)(tO.e, {
                      size: "sm",
                      className: tx.GC,
                      children: [
                          (0, i.jsx)(e0.$, {
                              variant: "overlay-primary",
                              text: ea.intl.string(ea.t.MpO0px),
                              onClick: () => tU(!1),
                          }),
                          (0, i.jsx)(e0.$, {
                              variant: "secondary",
                              onClick: () => tU(!0),
                              text: ea.intl.string(ea.t["1YDv7a"]),
                          }),
                      ],
                  }),
              ],
          });
}
var tF = n(952818),
    tV = n(935671);
function tB() {
    (0, tV.sL)("nagbar");
}
function tH() {
    return null == (0, c.bG)([tF.Ay], () => tF.Ay.getVisibleGame())
        ? null
        : (0, i.jsxs)(h.$T, {
              color: h.Hv.DANGER,
              children: [
                  (0, i.jsx)(h.PM, { noticeType: ei.kqX.SYSTEM_SERVICE_WARNING, onClick: () => t8() }),
                  ea.intl.string(ea.t["5rPt+j"]),
                  (0, i.jsx)(h.Z_, {
                      onClick: tB,
                      noticeType: ei.kqX.SYSTEM_SERVICE_WARNING,
                      children: ea.intl.string(ea.t["1iI46O"]),
                  }),
              ],
          });
}
function tj() {
    return (0, i.jsxs)(h.$T, {
        color: h.Hv.DANGER,
        children: [
            ea.intl.string(ea.t.lQiCJ6),
            (0, i.jsx)(h.Z_, {
                noticeType: ei.kqX.PTT_NO_KEYBIND_WARNING,
                onClick: function () {
                    (0, Q.openUserSettings)(Z.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING);
                },
                children: ea.intl.string(ea.t["UgQN+9"]),
            }),
        ],
    });
}
var tY = n(189213),
    tW = n(150934);
function tK(e) {
    let [t, n] = r.useState(!1);
    return (0, i.jsx)(tY.Modal, {
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
        actionBarInput: (0, i.jsx)(tW.S, {
            checked: t,
            onChange: (e) => n(e),
            label: ea.intl.string(ea.t.XAiAgD),
            labelType: "secondary",
        }),
        ...e,
    });
}
var tz = n(235058),
    t$ = n(763827),
    tq = n(67480),
    tZ = n(147964),
    tX = n(177141),
    tQ = n(975571),
    tJ = n(723702),
    t0 = n(325278),
    t1 = n(831502),
    t2 = n(731854);
let t3 = new F.A("Notice"),
    t6 = (e) => {
        let { error: t, allowClick: n = !1 } = e,
            r = (0, eS.B1)(t)?.errorCode,
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
            ? (0, i.jsx)(f.D, {
                  tag: "span",
                  className: eo.wz,
                  onClick: () => open(tQ.A.getArticleURL(ei.MVz.AV_ERROR_CODES)),
                  children: a,
              })
            : a;
    },
    t4 = (e) => {
        let { noticeType: t } = e;
        return (0, i.jsxs)(h.$T, {
            color: h.Hv.DANGER,
            children: [
                (0, i.jsx)(h.PM, {
                    noticeType: t,
                    onClick: () => {
                        t8();
                    },
                }),
                ea.intl.string(ea.t.o3zuYz),
                (0, i.jsx)(t6, { error: eS.iy.NO_INPUT_DEVICES }),
                (0, i.jsx)(h.eC, {
                    href: tQ.A.getArticleURL(ei.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: ea.intl.string(ea.t.RYKKox),
                }),
            ],
        });
    };
function t5(e) {
    return (0, tJ.isWindows)() && u().satisfies(w.A?.os.release, t0.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function t7(e) {
    let t,
        n,
        { noticeType: r } = e,
        s = (0, tc.x5)(t2.oh.AUDIO_INPUT),
        a = s?.guid ?? "",
        { inputDeviceOSMuted: o, inputDeviceOSVolume: l } = (0, c.cf)([tz.Ay], () => ({
            inputDeviceOSMuted: tz.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: tz.Ay.getInputDeviceOSVolume(),
        })),
        u = !1;
    return (
        !0 === o
            ? ((t = ea.intl.string(ea.t.ppW3ri)),
              (n = (0, i.jsx)(h.eC, { href: t5(a), noticeType: r, children: ea.intl.string(ea.t.QghSIq) })))
            : 0 === l
              ? ((t = ea.intl.string(ea.t.j4gGA4)),
                (n = (0, i.jsx)(h.eC, { href: t5(a), noticeType: r, children: ea.intl.string(ea.t.QghSIq) })))
              : tz.Ay.supports(t2.O5.LOOPBACK)
                ? ((t = ea.intl.string(ea.t.dNAJ18)),
                  (u = !0),
                  (n = (0, i.jsx)(h.zr, {
                      onClick: () => {
                          (0, Q.openUserSettings)(Z.X.VOICE_AND_VIDEO_PANEL);
                      },
                      children: ea.intl.string(ea.t.I6YlB4),
                  })))
                : ((t = ea.intl.string(ea.t.nCO9bI)),
                  (n = (0, i.jsx)(h.eC, {
                      href: tQ.A.getArticleURL(ei.MVz.NO_INPUT_DETECTED),
                      noticeType: r,
                      children: ea.intl.string(ea.t.RYKKox),
                  }))),
        (0, i.jsxs)(h.$T, {
            color: h.Hv.DANGER,
            children: [
                (0, i.jsx)(h.PM, {
                    noticeType: r,
                    onClick: () => {
                        t8(), (0, m.openModal)((e) => (0, i.jsx)(tK, { ...e }));
                    },
                }),
                t,
                (0, i.jsx)(t6, { allowClick: u, error: eS.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function t8(e) {
    y.A.dismiss(null != e ? { untilAtLeast: a()(e) } : void 0);
}
let t9 = r.memo(function () {
    let e = (0, c.bG)([em.default], () => em.default.getCurrentUser()),
        t = (0, c.bG)([eL.A], () => eL.A.getGuildId()),
        s = (0, c.bG)([tX.Ay], () => tX.Ay.getNotice()),
        { analyticsLocations: a } = (0, x.Ay)(),
        l = (0, L.Ay)(),
        u = (0, eq.H)(t),
        _ = (0, td.V)();
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
                    t = ey.A.getUserExperimentDescriptor(e.id);
                null != t && (0, eN.LQ)(e.id, t),
                    (async () => {
                        s.metadata?.id != null && (await (0, b.oX)(s.metadata?.id));
                    })();
            }
        }, [s]),
        null == s)
    )
        return null;
    let f = null != s.type ? tX.Re[s.type] : null,
        S = null != s.type ? tX.rV[s.type] : null,
        y = null != s.type ? tX.f7[s.type] : null,
        w = tX.pe[s.type];
    if (null != f) return (0, i.jsx)(eT.$, { dismissibleContent: f, noticeType: s.type });
    if (null != S) return (0, i.jsx)(eh, { dismissibleContent: S });
    if (null != y) return (0, i.jsx)(eI, { dismissibleContent: y });
    if (null != w) return (0, i.jsx)(el, { dismissibleContent: w, noticeType: s.type });
    let P = s.metadata?.premiumType;
    switch (s.type) {
        case ei.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, i.jsx)(tj, {});
        case ei.kqX.LURKING_GUILD:
            return (0, i.jsx)(tl, {});
        case ei.kqX.PENDING_MEMBER:
            return (0, i.jsx)(e8, {});
        case ei.kqX.INVITED_TO_SPEAK:
            return (0, i.jsx)(tG, {});
        case ei.kqX.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: F } = s.metadata;
            return (0, i.jsx)(ek, { onDismiss: () => t8(F) });
        case ei.kqX.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: V } = s.metadata;
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.WARNING,
                children: [
                    (0, i.jsx)(h.PM, { onClick: () => t8(V), noticeType: s.type }),
                    ea.intl.format(ea.t["08KQ1P"], { helpCenterLink: tQ.A.getArticleURL(ei.MVz.WIN32_DEPRECATE) }),
                ],
            });
        case ei.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: B } = s.metadata;
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.WARNING,
                children: [
                    (0, i.jsx)(h.PM, { onClick: () => t8(B), noticeType: s.type }),
                    ea.intl.format(ea.t["8Je+dX"], { helpCenterLink: tQ.A.getArticleURL(ei.MVz.WIN7_8_DEPRECATE) }),
                ],
            });
        case ei.kqX.WIN_COMPAT_MODE_MESSAGE:
            let { dismissUntil: H } = s.metadata;
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.WARNING,
                children: [
                    (0, i.jsx)(h.PM, { onClick: () => t8(H), noticeType: s.type }),
                    ea.intl.string(ea.t["9DJgOg"]),
                ],
            });
        case ei.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: j } = s.metadata;
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.WARNING,
                children: [
                    (0, i.jsx)(h.PM, { onClick: () => t8(j), noticeType: s.type }),
                    ea.intl.format(ea.t.q8VPLo, { helpCenterLink: tQ.A.getArticleURL(ei.MVz.MACOS_19_DEPRECATE) }),
                ],
            });
        case ei.kqX.E2EE_UPDATE_REQUIRED:
            let { dismissUntil: Y } = s.metadata;
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.WARNING,
                children: [
                    (0, i.jsx)(h.PM, { onClick: () => t8(Y), noticeType: s.type }),
                    ea.intl.format(tJ.isPlatformEmbedded ? ea.t.J232TI : ea.t.vceuiL, {
                        helpCenterLink: tQ.A.getArticleURL(ei.MVz.END_TO_END_ENCRYPTION),
                    }),
                ],
            });
        case ei.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.WARNING,
                children: [
                    (0, i.jsx)(h.PM, { onClick: () => t8(), noticeType: s.type }),
                    ea.intl.string(ea.t.iW0fcQ),
                    (0, i.jsx)(h.eC, {
                        href: tQ.A.getArticleURL(ei.MVz.WINDOWS_MEDIA_PACK),
                        target: "_blank",
                        noticeType: s.type,
                        children: ea.intl.string(ea.t.LQG5j6),
                    }),
                ],
            });
        case ei.kqX.GENERIC:
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.DEFAULT,
                children: [
                    (0, i.jsx)(h.PM, { onClick: () => t8(), noticeType: s.type }),
                    s.message,
                    null != s.buttonText
                        ? (0, i.jsx)(h.Z_, { onClick: s.callback, noticeType: s.type, children: s.buttonText })
                        : null,
                ],
            });
        case ei.kqX.LAUNCH_GAME_FAILURE:
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.DANGER,
                children: [
                    (0, i.jsx)(h.PM, { onClick: () => t8(), noticeType: s.type }),
                    s.message,
                    null != s.buttonText
                        ? (0, i.jsx)(h.Z_, { onClick: s.callback, noticeType: s.type, children: s.buttonText })
                        : null,
                ],
            });
        case ei.kqX.VOICE_DISABLED:
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.WARNING,
                children: [
                    (0, i.jsx)(h.PM, {
                        onClick: () => {
                            C.clearRemoteDisconnectVoiceChannelId(), t8();
                        },
                        noticeType: s.type,
                    }),
                    ea.intl.string(ea.t.bOQ3jV),
                    (0, i.jsx)(h.Z_, {
                        onClick: () => {
                            let e = t$.A.getRemoteDisconnectVoiceChannelId();
                            null != e && null != tD.A.getChannel(e) && v.default.selectVoiceChannel(e);
                        },
                        noticeType: s.type,
                        children: ea.intl.string(ea.t.vD60Pv),
                    }),
                ],
            });
        case ei.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.DEFAULT,
                children: [
                    (0, i.jsx)(h.PM, {
                        onClick: () => {
                            C.clearLastSessionVoiceChannelId(), t8();
                        },
                        noticeType: s.type,
                    }),
                    ea.intl.string(ea.t.jY2lUA),
                    (0, i.jsx)(h.Z_, {
                        onClick: () => {
                            let e = t$.A.getLastSessionVoiceChannelId();
                            null != e && null != tD.A.getChannel(e) && v.default.selectVoiceChannel(e);
                        },
                        noticeType: s.type,
                        children: ea.intl.string(ea.t.vD60Pv),
                    }),
                ],
            });
        case ei.kqX.SPOTIFY_AUTO_PAUSED:
            let W = M.A.get(ei.fg2.SPOTIFY);
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.DANGER,
                children: [
                    (0, i.jsx)(h.PM, { onClick: () => t8(), noticeType: s.type }),
                    (0, i.jsx)("img", {
                        alt: "",
                        className: eo.tV,
                        src: (0, d.q)(l) ? W.icon.darkSVG : W.icon.whiteSVG,
                    }),
                    ea.intl.string(ea.t.D8Cp76),
                    (0, i.jsx)(h.Z_, {
                        onClick: () => (0, Q.openUserSettings)(Z.X.VOICE_AND_VIDEO_PANEL),
                        noticeType: s.type,
                        children: ea.intl.string(ea.t.NiTd0e),
                    }),
                    (0, i.jsx)(p.Anchor, {
                        className: eo.uD,
                        href: tQ.A.getArticleURL(ei.MVz.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: ea.intl.string(ea.t.CiqAIU),
                    }),
                ],
            });
        case ei.kqX.UNCLAIMED_ACCOUNT:
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.DEFAULT,
                children: [
                    ea.intl.string(ea.t["f+Zaol"]),
                    (0, i.jsx)(h.Z_, {
                        noticeType: s.type,
                        onClick: () => (u && null != t ? (0, e$.Ze)(t) : k.R()),
                        children: ea.intl.string(ea.t.fiNVin),
                    }),
                ],
            });
        case ei.kqX.UNVERIFIED_ACCOUNT:
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.DEFAULT,
                children: [
                    ea.intl.string(ea.t["3sWbf3"]),
                    (0, i.jsx)(h.Z_, {
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
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.DEFAULT,
                children: [
                    (0, i.jsx)(h.PM, { onClick: () => O.A.ackScheduledMaintenance(), noticeType: s.type }),
                    ea.intl.format(ea.t["yb96S+"], s.metadata),
                    (0, i.jsx)(h.eC, {
                        href: `${ei.qF7.STATUS}/incidents/${s.metadata.id}`,
                        noticeType: s.type,
                        children: ea.intl.string(ea.t.hvVgAZ),
                    }),
                ],
            });
        case ei.kqX.NO_INPUT_DETECTED:
            return (0, i.jsx)(t7, { noticeType: s.type });
        case ei.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, i.jsx)(t4, { noticeType: s.type });
        case ei.kqX.HARDWARE_MUTE:
            if (null != s.metadata) {
                let { vendor: e, model: t } = s.metadata;
                return (0, i.jsxs)(h.$T, {
                    color: h.Hv.DANGER,
                    children: [
                        ea.intl.format(ea.t.qoDex7, { vendorName: e.name, modelName: t.name }),
                        (0, i.jsx)(h.PM, {
                            noticeType: s.type,
                            onClick: () => {
                                I.A.setEnableHardwareMuteNotice(!1), t8();
                            },
                        }),
                        (0, i.jsx)(h.eC, {
                            href: t.url,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            noticeType: s.type,
                            children: ea.intl.string(ea.t["Yl/Riu"]),
                        }),
                    ],
                });
            }
            if (tu.A.getConfig({ location: "Notice.AudioIssueNoticeHardwareMute" }).enableHardwareSilenceWarning)
                return (0, i.jsxs)(h.$T, {
                    color: h.Hv.INFO,
                    children: [
                        ea.intl.format(ea.t.QMw8Fd, {}),
                        (0, i.jsx)(h.PM, {
                            noticeType: s.type,
                            onClick: () => {
                                I.A.setEnableHardwareMuteNotice(!1), t8();
                            },
                        }),
                    ],
                });
            return null;
        case ei.kqX.STREAMER_MODE:
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.STREAMER_MODE,
                children: [
                    (0, i.jsx)(h.PM, { onClick: () => t8(), noticeType: ei.kqX.STREAMER_MODE }),
                    ea.intl.string(ea.t.iEgBXp),
                    (0, i.jsx)(h.Z_, {
                        onClick: () => R.A.setEnabled(!1),
                        noticeType: ei.kqX.STREAMER_MODE,
                        children: ea.intl.string(ea.t.R9GHya),
                    }),
                ],
            });
        case ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == s.metadata) return null;
            let { skuId: K, applicationId: $ } = s.metadata,
                q = tq.A.get(K),
                X = U.A.getApplication($);
            if (null == q || null == X) return null;
            let J = { page: ei.liQ.IN_APP };
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(h.PM, { onClick: () => N(q.id), noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK }),
                    (0, i.jsx)(E.t, { size: "md", color: "currentColor", className: eo.PC }),
                    ea.intl.format(ea.t["g3MU/+"], { applicationName: X.name, skuName: q.name }),
                    (0, i.jsx)(h.Z_, {
                        noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: async () => {
                            try {
                                let { openIAPPurchaseModal: e } = await Promise.all([
                                    n.e("54266"),
                                    n.e("5959"),
                                    n.e("86028"),
                                    n.e("96527"),
                                    n.e("95664"),
                                    n.e("9432"),
                                    n.e("80203"),
                                    n.e("45650"),
                                    n.e("18556"),
                                    n.e("27660"),
                                    n.e("85484"),
                                    n.e("31135"),
                                    n.e("69177"),
                                    n.e("8506"),
                                    n.e("333"),
                                    n.e("15615"),
                                    n.e("79705"),
                                    n.e("23924"),
                                    n.e("42205"),
                                    n.e("71091"),
                                    n.e("28367"),
                                    n.e("10471"),
                                    n.e("35429"),
                                    n.e("63232"),
                                    n.e("11301"),
                                    n.e("60235"),
                                    n.e("64827"),
                                    n.e("30938"),
                                    n.e("96643"),
                                    n.e("94493"),
                                    n.e("92789"),
                                    n.e("47834"),
                                    n.e("74016"),
                                    n.e("19551"),
                                    n.e("84569"),
                                    n.e("6338"),
                                    n.e("50689"),
                                    n.e("7743"),
                                    n.e("45959"),
                                    n.e("60658"),
                                    n.e("8304"),
                                    n.e("18573"),
                                    n.e("55936"),
                                    n.e("31988"),
                                    n.e("39667"),
                                    n.e("5812"),
                                    n.e("26073"),
                                    n.e("34303"),
                                    n.e("28866"),
                                    n.e("1368"),
                                    n.e("58038"),
                                    n.e("93159"),
                                    n.e("31716"),
                                    n.e("8751"),
                                    n.e("62931"),
                                    n.e("81987"),
                                    n.e("50417"),
                                    n.e("74548"),
                                    n.e("6174"),
                                    n.e("91146"),
                                    n.e("46070"),
                                    n.e("63645"),
                                    n.e("5636"),
                                    n.e("86230"),
                                    n.e("834"),
                                    n.e("26728"),
                                    n.e("4193"),
                                    n.e("62075"),
                                ]).then(n.bind(n, 4630));
                                await e({
                                    applicationId: X.id,
                                    skuId: q.id,
                                    openPremiumPaymentModal: () => {
                                        (0, z.A)({
                                            initialPlanId: null,
                                            subscriptionTier: er.pe.TIER_2,
                                            analyticsLocations: a,
                                            analyticsObject: J,
                                        });
                                    },
                                    analyticsLocations: a,
                                    analyticsLocationObject: J,
                                    context: __OVERLAY__ ? ei.BRT.OVERLAY : ei.BRT.APP,
                                }),
                                    N(q.id);
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
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(h.PM, {
                        onClick: () => t8(),
                        noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, i.jsx)(E.t, { size: "md", color: "currentColor", className: eo.PC }),
                    ea.intl.format(ea.t.LquIKC, { applicationName: r.name, skuName: n.name }),
                    (0, i.jsx)(h.zr, {
                        children: (0, i.jsx)(o.N_, {
                            onClick: () => t8(),
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
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.CUSTOM,
                children: [
                    (0, i.jsx)(h.PM, {
                        noticeType: ei.kqX.SURVEY,
                        onClick: () => {
                            (0, b.pX)(t, !0);
                        },
                    }),
                    n,
                    (0, i.jsx)(h.Z_, {
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
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.DANGER,
                children: [
                    ea.intl.string(ea.t["ugxmk/"]),
                    (0, i.jsx)(h.eC, {
                        href: tQ.A.getArticleURL(ei.MVz.CORRUPT_INSTALLATION),
                        target: "_blank",
                        noticeType: s.type,
                        children: ea.intl.string(ea.t["6ik4Xk"]),
                    }),
                ],
            });
        case ei.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.WARNING,
                children: [
                    (0, i.jsx)(h.PM, { onClick: () => t8(), noticeType: ei.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                    ea.intl.string(ea.t.wVjKGi),
                    (0, i.jsx)(h.Z_, {
                        noticeType: ei.kqX.VIDEO_UNSUPPORTED_BROWSER,
                        onClick: () => {
                            (0, m.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("81013"), n.e("44602"), n.e("25280")]).then(
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
            let { error: et } = s.metadata;
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.DANGER,
                children: [
                    (0, i.jsx)(h.PM, { onClick: () => t8(), noticeType: ei.kqX.DISPATCH_ERROR }),
                    et?.displayMessage,
                    (0, i.jsx)(h.Z_, {
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
            let { progress: en, total: es, name: eu } = s.metadata;
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.DEFAULT,
                children: [
                    (0, i.jsx)(h.PM, { onClick: () => t8(), noticeType: ei.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS }),
                    (0, i.jsxs)(G.A, {
                        justify: G.A.Justify.CENTER,
                        children: [
                            null != eu
                                ? ea.intl.formatToPlainString(ea.t["pHj+z4"], {
                                      name: `${eu}`,
                                      progress: en,
                                      total: es,
                                  })
                                : ea.intl.formatToPlainString(ea.t["lHZn+A"], { progress: en, total: es }),
                            (0, i.jsx)(g.y, { type: g.y.Type.PULSING_ELLIPSIS, className: eo.gO }),
                        ],
                    }),
                ],
            });
        case ei.kqX.APPLICATION_TEST_MODE:
            if (null == s.metadata) return null;
            if (null != tZ.A.testModeEmbeddedApplicationId)
                return (0, i.jsx)(h.$T, {
                    color: h.Hv.WARNING,
                    children: (0, i.jsxs)(G.A, {
                        justify: G.A.Justify.CENTER,
                        align: G.A.Align.CENTER,
                        children: [
                            (0, i.jsx)("div", {
                                children: ea.intl.format(ea.t["1qxVe4"], {
                                    applicationName: s.metadata.applicationName,
                                }),
                            }),
                            (0, i.jsx)(h.PM, { onClick: D.cL, noticeType: ei.kqX.APPLICATION_TEST_MODE }),
                        ],
                    }),
                });
            return (0, i.jsx)(h.$T, {
                color: h.Hv.WARNING,
                children: (0, i.jsxs)(G.A, {
                    justify: G.A.Justify.CENTER,
                    align: G.A.Align.CENTER,
                    children: [
                        (0, i.jsx)("div", {
                            children: ea.intl.format(ea.t.Fv5HrE, { applicationName: s.metadata.applicationName }),
                        }),
                        (0, i.jsx)(h.PM, { onClick: D.cL, noticeType: ei.kqX.APPLICATION_TEST_MODE }),
                    ],
                }),
            });
        case ei.kqX.VIEWING_ROLES:
            return (0, i.jsx)(ti.A, {});
        case ei.kqX.PREMIUM_UNCANCEL:
            return (0, i.jsxs)(h.$T, {
                color:
                    P === er.PremiumTypes.TIER_1
                        ? h.Hv.PREMIUM_TIER_1
                        : P === er.PremiumTypes.TIER_0
                          ? h.Hv.PREMIUM_TIER_0
                          : h.Hv.PREMIUM_TIER_2,
                children: [
                    (0, i.jsx)(h.PM, {
                        noticeType: ei.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            t8(s.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    (0, i.jsx)(E.t, { size: "md", color: "currentColor", className: eo.PC }),
                    P === er.PremiumTypes.TIER_1
                        ? ea.intl.formatToPlainString(ea.t.fXv4wm, { daysLeft: s.metadata.daysLeft })
                        : P === er.PremiumTypes.TIER_0
                          ? ea.intl.formatToPlainString(ea.t.ZOHZMr, { daysLeft: s.metadata.daysLeft })
                          : ea.intl.formatToPlainString(ea.t.outyHh, { daysLeft: s.metadata.daysLeft }),
                    (0, i.jsx)(h.Z_, {
                        noticeType: ei.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                            t8(s.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, m.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("80203"),
                                        n.e("5959"),
                                        n.e("86028"),
                                        n.e("69177"),
                                        n.e("6162"),
                                        n.e("54266"),
                                        n.e("10471"),
                                        n.e("35429"),
                                        n.e("11301"),
                                        n.e("96643"),
                                        n.e("94493"),
                                        n.e("47834"),
                                        n.e("19551"),
                                        n.e("5812"),
                                        n.e("25279"),
                                        n.e("9045"),
                                        n.e("62175"),
                                        n.e("8739"),
                                        n.e("14794"),
                                    ]).then(n.bind(n, 174705));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            daysLeft: s.metadata.daysLeft,
                                            premiumType: P,
                                            analyticsSource: "Nag Bar",
                                            premiumSubscription: s.metadata.premiumSubscription,
                                        });
                                });
                        },
                        children:
                            P === er.PremiumTypes.TIER_1
                                ? ea.intl.string(ea.t.BkbUPM)
                                : P === er.PremiumTypes.TIER_0
                                  ? ea.intl.string(ea.t.Px978X)
                                  : ea.intl.string(ea.t.LW5tCE),
                    }),
                ],
            });
        case ei.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: ec, dismissUntil: ed } = s.metadata;
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.WARNING,
                children: [
                    (0, i.jsx)(h.PM, {
                        noticeType: s.type,
                        onClick: () => {
                            t8(ed);
                        },
                    }),
                    ea.intl.format(ea.t.zxU0Kp, { daysPastDue: ec }),
                    (0, i.jsx)(h.Z_, {
                        noticeType: ei.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            t8(ed), (0, Q.openUserSettings)(Z.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: ea.intl.string(ea.t.q8rxeS),
                    }),
                ],
            });
        case ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.DANGER,
                children: [
                    (0, i.jsx)(h.PM, {
                        noticeType: ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            t8(s.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    ea.intl.string(ea.t.LlZaoX),
                    (0, i.jsx)(h.Z_, {
                        noticeType: ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            t8(s.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, Q.openUserSettings)(Z.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: ea.intl.string(ea.t["Zpd+Yq"]),
                    }),
                ],
            });
        case ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.WARNING,
                children: [
                    (0, i.jsx)(h.PM, {
                        noticeType: ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            t8(s.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    ea.intl.string(ea.t["30YfCr"]),
                    (0, i.jsx)(h.Z_, {
                        noticeType: ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            t8(s.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, Q.openUserSettings)(Z.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: ea.intl.string(ea.t.U5pKWA),
                    }),
                ],
            });
        case ei.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.WARNING,
                children: [
                    (0, i.jsx)(h.PM, {
                        noticeType: ei.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            t8(s.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                    }),
                    P === er.PremiumTypes.TIER_1
                        ? ea.intl.formatToPlainString(ea.t.b6QUvf, { daysLeft: s.metadata.daysLeft })
                        : P === er.PremiumTypes.TIER_0
                          ? ea.intl.formatToPlainString(ea.t["tURZ/M"], { daysLeft: s.metadata.daysLeft })
                          : ea.intl.formatToPlainString(ea.t.AyC74I, { daysLeft: s.metadata.daysLeft }),
                    (0, i.jsx)(h.Z_, {
                        noticeType: ei.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            t8(s.metadata?.premiumSubscription?.currentPeriodEnd),
                                (0, Q.openUserSettings)(Z.X.SUBSCRIPTIONS_PANEL);
                        },
                        children:
                            P === er.PremiumTypes.TIER_1
                                ? ea.intl.string(ea.t.lboF5O)
                                : P === er.PremiumTypes.TIER_0
                                  ? ea.intl.string(ea.t["4UPwOq"])
                                  : ea.intl.string(ea.t["P/VvGb"]),
                    }),
                ],
            });
        case ei.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, i.jsx)(tt, {
                buttonText: s.buttonText ?? ea.intl.string(ea.t["/g10LC"]),
                onGoBack: s.callback,
                onDismiss: () => t8(),
                showCloseButton: !0,
            });
        case ei.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, i.jsx)(ez, { guildId: t, analyticsLocations: a });
        case ei.kqX.QUARANTINED:
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.DANGER,
                children: [
                    ea.intl.string(ea.t.DVFJYf),
                    (0, i.jsx)(h.eC, {
                        href: t1.q,
                        target: "_blank",
                        noticeType: s.type,
                        children: ea.intl.string(ea.t.kvHdFN),
                    }),
                    (0, i.jsx)(p.Anchor, {
                        href: tQ.A.getArticleURL(ei.MVz.QUARANTINE),
                        target: "_blank",
                        className: eo.yw,
                        children: ea.intl.string(ea.t.hvVgAZ),
                    }),
                ],
            });
        case ei.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: e_, decisionId: ef } = s.metadata;
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.WARNING,
                children: [
                    (0, i.jsx)(h.PM, {
                        noticeType: ei.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != t && (0, eG.wu)(t), t8(e_);
                        },
                    }),
                    ea.intl.string(ea.t.B8ruyY),
                    (0, i.jsx)(h.zr, {
                        onClick: () => {
                            null != t &&
                                (0, eG.W5)(t, ef, () => {
                                    t8(e_), (0, eG.wu)(t);
                                });
                        },
                        children: ea.intl.string(ea.t.oX14El),
                    }),
                    null != t
                        ? (0, i.jsx)(h.zr, {
                              onClick: () => tn.A.open(t, ei.BEX.GUILD_AUTOMOD, void 0, ei.nd0.AUTOMOD_MENTION_SPAM),
                              children: ea.intl.string(ea.t["1R7QIx"]),
                          })
                        : null,
                ],
            });
        case ei.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.DANGER,
                children: [
                    (0, i.jsx)(h.PM, {
                        noticeType: ei.kqX.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            s.metadata?.streamKey != null && (0, ty.lk)(s.metadata.streamKey);
                        },
                    }),
                    ea.intl.string(ea.t.rOx44m),
                ],
            });
        case ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, i.jsxs)(h.$T, {
                color: h.Hv.BRAND,
                children: [
                    (0, i.jsx)(h.PM, {
                        onClick: () => {
                            t8(s.metadata?.dismissUntil);
                        },
                        noticeType: ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    ea.intl.string(ea.t["0klLS7"]),
                    (0, i.jsx)(h.Z_, {
                        onClick: () => {
                            (0, m.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([
                                    n.e("56030"),
                                    n.e("18413"),
                                    n.e("22255"),
                                    n.e("55925"),
                                    n.e("85033"),
                                    n.e("26484"),
                                    n.e("9163"),
                                ]).then(n.bind(n, 307750));
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                                t8(s.metadata?.dismissUntil);
                        },
                        noticeType: ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: ea.intl.string(ea.t.e4y2VM),
                    }),
                ],
            });
        case ei.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, i.jsx)(tv, {});
        case ei.kqX.PREMIUM_MARKETING_NAGBAR:
            return (0, i.jsx)(tS, {});
        case ei.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR:
            return (0, i.jsx)(tg, { premiumSubscription: s.metadata.premiumSubscription });
        case ei.kqX.SYSTEM_SERVICE_WARNING:
            return (0, i.jsx)(tH, {});
        default:
            return null;
    }
});
function ne() {
    let { analyticsLocations: e } = (0, x.Ay)(P.A.NOTICE);
    return (0, i.jsx)(x.f5, { value: e, children: (0, i.jsx)(t9, {}) });
}
