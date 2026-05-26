n.d(t, { w: () => t3, A: () => ne });
var i = n(627968),
    l = n(64700),
    r = n(989349),
    s = n.n(r);
if (21552 == n.j) var a = n(936504);
var c = n(299855),
    o = n.n(c),
    d = n(17928);
if (21552 == n.j) var u = n(462887);
if (21552 == n.j) var E = n(834730);
if (21552 == n.j) var A = n(939249);
if (21552 == n.j) var _ = n(417098);
if (21552 == n.j) var T = n(349288);
if (21552 == n.j) var I = n(403581);
if (21552 == n.j) var N = n(192308);
if (21552 == n.j) var R = n(289873);
var m = n(157559),
    C = n(827343),
    p = n(830215),
    S = n(228366);
function O(e) {
    S.h.dispatch({ type: "DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS", skuId: e });
}
var g = n(912851);
let h =
    21552 == n.j
        ? {
              clearRemoteDisconnectVoiceChannelId() {
                  S.h.dispatch({ type: "CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID" });
              },
              clearLastSessionVoiceChannelId() {
                  S.h.dispatch({ type: "CLEAR_LAST_SESSION_VOICE_CHANNEL_ID" });
              },
          }
        : null;
var f = n(730852),
    P = n(785796),
    M = n(55619),
    D = n(246605),
    x = n(271866),
    U = n(736653),
    y = n(77729),
    j = n(573648),
    L = n(793574),
    k = n(688810),
    v = n(587895),
    b = n(315982),
    G = n(235986),
    X = n(626584),
    q = n(554146);
if (21552 == n.j) var F = n(691540);
if (21552 == n.j) var B = n(857250);
if (21552 == n.j) var w = n(97483);
var V = n(803306),
    H = n(975807),
    Y = n(968309),
    K = n(532794),
    W = n(745299),
    z = n(976860),
    $ = n(780964),
    Z = n(718446),
    Q = n(766075),
    J = n(879945),
    ee = n(174459),
    et = n(379848),
    en = n(49999),
    ei = n(652215),
    el = n(788868),
    er = n(355097),
    es = n(375708),
    ea = n(448759);
let ec = (e) => {
    let { dismissibleContent: t, noticeType: l } = e;
    return (0, i.jsx)(et.Ay, {
        contentTypes: [t],
        groupName: en.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: r } = e;
            switch (t) {
                case q.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(_.$T, {
                        color: _.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(_.PM, { onClick: () => r(en.i.UNKNOWN), noticeType: l }),
                            es.intl.string(es.t["+xn1o5"]),
                            (0, i.jsx)("i", { className: ea.c9 }),
                            (0, i.jsx)("i", { className: ea.Vz }),
                            (0, i.jsx)("i", { className: ea.p0 }),
                            (0, i.jsx)(_.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    (0, N.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("81013"),
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
                case q.M.NAGBAR_QUEST_APP_UPSELL:
                    return (0, i.jsxs)(_.$T, {
                        color: _.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(_.PM, { onClick: () => r(en.i.UNKNOWN), noticeType: l }),
                            (0, i.jsx)("i", { className: ea.TN }),
                            es.intl.string(es.t.lgwX26),
                            (0, i.jsx)(_.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    (0, H.A)(ei.AMi.META_QUEST), r(en.i.TAKE_ACTION);
                                },
                                children: es.intl.string(es.t["1WjMbC"]),
                            }),
                        ],
                    });
                case q.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(_.$T, {
                        color: _.Hv.SPOTIFY,
                        children: [
                            (0, i.jsx)(_.PM, { onClick: () => r(en.i.UNKNOWN), noticeType: l }),
                            (0, i.jsx)(J.A, { className: ea.tV }),
                            es.intl.string(es.t["5NUVHH"]),
                            (0, i.jsx)(_.Z_, {
                                onClick: () => (0, Y.A)({ platformType: ei.fg2.SPOTIFY, location: "Notice Bar" }),
                                noticeType: l,
                                children: es.intl.string(es.t.S0W8Z5),
                            }),
                        ],
                    });
                case q.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(_.$T, {
                        color: _.Hv.PLAYSTATION,
                        children: [
                            (0, i.jsx)(_.PM, { noticeType: l, onClick: () => r(en.i.UNKNOWN) }),
                            (0, i.jsx)("img", {
                                alt: "",
                                className: ea.tV,
                                src: j.A.get(ei.fg2.PLAYSTATION).icon.whiteSVG,
                            }),
                            es.intl.string(es.t.WHWgoY),
                            (0, i.jsx)(_.zr, {
                                onClick: () => (0, Y.A)({ platformType: ei.fg2.PLAYSTATION, location: "Notice Bar" }),
                                children: es.intl.string(es.t.S0W8Z5),
                            }),
                        ],
                    });
                case q.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(_.$T, {
                        color: _.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(_.PM, { onClick: () => r(en.i.USER_DISMISS), noticeType: l }),
                            es.intl.string(es.t["3qKN/h"]),
                            (0, i.jsx)(_.Z_, {
                                onClick: async () => {
                                    r(en.i.TAKE_ACTION);
                                    try {
                                        let { startRegisterWebAuthnCredential: e } = await Promise.resolve().then(
                                                n.bind(n, 917136),
                                            ),
                                            { ticket: t, challenge: l } = await e();
                                        (0, N.openModalLazy)(async () => {
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
                                                    challenge: l,
                                                    showAccountSettingsButton: !0,
                                                });
                                        });
                                    } catch (e) {
                                        (0, F.P0)((0, B.o)(es.intl.string(es.t.xSCvBf), w.Ck.FAILURE));
                                    }
                                },
                                noticeType: l,
                                children: es.intl.string(es.t["ff/XXy"]),
                            }),
                        ],
                    });
                case q.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(_.$T, {
                        color: _.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)("span", { className: ea.lK }),
                            (0, i.jsx)("span", { className: ea.$t, children: es.intl.string(es.t["+urf75"]) }),
                            (0, i.jsx)(_.Z_, {
                                className: ea.CO,
                                noticeType: l,
                                onClick: () => {
                                    ee.default.track(ei.HAw.PREMIUM_PROMOTION_OPENED, {
                                        location_section: ei.JJy.NOTIFICATION_BAR,
                                        location_object: ei.ZSU.BUTTON_CTA,
                                    }),
                                        (0, Q.openUserSettings)($.X.NITRO_PANEL);
                                },
                                children: es.intl.string(es.t["8JC5e/"]),
                            }),
                            (0, i.jsx)(_.PM, {
                                onClick: () => {
                                    r(en.i.UNKNOWN), (0, V.lA)(ei.nhx.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: l,
                            }),
                        ],
                    });
                case q.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(W.A, {
                        dismissCurrentNotice: () => r(en.i.UNKNOWN),
                        subscriptionTier: el.pe.TIER_2,
                    });
                case q.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(W.A, {
                        dismissCurrentNotice: () => r(en.i.UNKNOWN),
                        subscriptionTier: el.pe.TIER_0,
                    });
                case q.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(_.$T, {
                        color: _.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(_.PM, { noticeType: l, onClick: () => r(en.i.UNKNOWN) }),
                            es.intl.string(es.t["0KFB2B"]),
                            (0, i.jsx)(_.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    r(en.i.UNKNOWN), (0, Q.openUserSettings)($.X.NITRO_PANEL);
                                },
                                children: es.intl.string(es.t.pyYSiO),
                            }),
                        ],
                    });
                case q.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(_.$T, {
                        color: _.Hv.DANGER,
                        children: [
                            (0, i.jsx)(_.PM, { onClick: () => r(en.i.UNKNOWN), noticeType: l }),
                            es.intl.string(es.t["7490vQ"]),
                            (0, i.jsx)(_.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    (0, z.pX)((0, Z.settingsPathToRoute)(er.od.ACCOUNT));
                                },
                                children: es.intl.string(es.t.Vm8akB),
                            }),
                        ],
                    });
                case q.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(_.$T, {
                        color: _.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(_.PM, { onClick: () => r(en.i.UNKNOWN), noticeType: l }),
                            es.intl.string(es.t["O9GI+k"]),
                            (0, i.jsx)(_.Z_, {
                                onClick: () => {
                                    (0, K.A)({
                                        subscriptionTier: el.pe.TIER_2,
                                        analyticsLocations: [L.A.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: ei.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => r(en.i.UNKNOWN),
                                    });
                                },
                                noticeType: l,
                                children: es.intl.string(es.t.Zi69D4),
                            }),
                        ],
                    });
            }
        },
    });
};
var eo = n(877624),
    ed = n(374200),
    eu = n(131607);
if (21552 == n.j) var eE = n(597770);
let eA = (e) => {
        let { markAsDismissed: t } = e,
            { analyticsLocations: n } = (0, k.Ay)(),
            l = (0, d.bG)([ed.A], () => {
                let e = ed.A.getMarketingComponentByType(eo.C.GIFT_REMINDER_NAGBAR);
                return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.giftReminderNagbar;
            });
        return null == l
            ? null
            : (0, i.jsxs)(_.$T, {
                  color: _.Hv.PREMIUM_TIER_2,
                  children: [
                      (0, i.jsx)(_.PM, {
                          onClick: () => t(en.i.USER_DISMISS),
                          noticeType: ei.kqX.GIFTING_PROMOTION_REMINDER,
                      }),
                      (0, i.jsx)(eE.o, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "currentColor",
                          className: ea.ez,
                      }),
                      l.body,
                      (0, i.jsx)(_.Z_, {
                          onClick: () => {
                              (0, K.A)({
                                  isGift: !0,
                                  initialPlanId: null,
                                  analyticsLocations: n,
                                  analyticsLocation: ei.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                                  analyticsObject: { page: ei.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION },
                              });
                          },
                          noticeType: ei.kqX.GIFTING_PROMOTION_REMINDER,
                          children: es.intl.string(es.t.RzWDqY),
                      }),
                  ],
              });
    },
    e_ = (e) => {
        let t,
            n,
            { dismissibleContent: l } = e,
            { snowflakeId: r, couldShow: s } =
                ((t = (0, d.bG)([ed.A], () => ed.A.getGiftPromotion()?.id)),
                (n = (0, d.bG)([ed.A], () => null != ed.A.getMarketingComponentByType(eo.C.GIFT_REMINDER_NAGBAR))),
                l === q.M.GIFTING_PROMOTION_REMINDER
                    ? { snowflakeId: t, couldShow: n && null != t }
                    : { snowflakeId: void 0, couldShow: !1 }),
            [a, c] = (0, eu.Cc)(s ? l : null, r ?? "", en.m.NOTICE_BAR, !0);
        return null == a
            ? null
            : a === q.M.GIFTING_PROMOTION_REMINDER
              ? (0, i.jsx)(eA, { markAsDismissed: (e) => c(e) })
              : void 0;
    };
var eT = n(264779),
    eI = n(962644),
    eN = n(287809),
    eR = n(428262),
    em = n(946319);
let eC = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, eT.Cp)(),
        r = (0, d.bG)([eN.default], () => !eR.Ay.isPremium(eN.default.getCurrentUser())),
        s = l.useCallback(() => {
            ee.default.track(ei.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED),
                (0, Q.openUserSettings)($.X.GIFT_PANEL),
                eI.Ay.dismissOutboundPromotionNotice();
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
                  if (t === q.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR)
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(_.PM, {
                                  noticeType: ei.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      eI.Ay.dismissOutboundPromotionNotice(), null !== n && n(en.i.USER_DISMISS);
                                  },
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: em.P }),
                              r ? es.intl.string(es.t["5JMiOo"]) : es.intl.string(es.t["Pzh+G2"]),
                              (0, i.jsx)(_.Z_, {
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
};
var ep = n(587054),
    eS = n(487329),
    eO = n(102609),
    eg = n(736056);
if (21552 == n.j) var eh = n(194261);
var ef = n(548118),
    eP = n(134413),
    eM = n(221950),
    eD = n(71393),
    ex = n(309010),
    eU = n(967198),
    ey = n(585510),
    ej = n(834409),
    eL = n(903093),
    ek = n(746080),
    ev = n(500928);
function eb(e) {
    let { onDismiss: t } = e,
        r = (0, d.bG)([eU.A], () => eU.A.getGuildId()),
        s = (0, d.bG)([ex.A], () => (null != r ? ex.A.getChannelId(r) : null), [r]),
        a = r ?? null,
        c = (0, d.bG)([eD.A], () => (null != a ? eD.A.getGuild(a) : null), [a]),
        { shouldShowIncidentActions: o, incidentData: u, isUnderLockdown: E } = (0, ey.Li)(a),
        A = (0, eP.fw)(c?.id ?? ei.dJq),
        T = l.useCallback(() => null != c && (0, eM.aZ)(c.id), [c]);
    if (null == c || null == u || !o) return null;
    let I = (e) => {
            e && A && s !== ek.VV.MEMBER_SAFETY && T()
                ? ee.default.track(ei.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                      notice_type: ei.kqX.GUILD_RAID_NOTIFICATION,
                      guild_id: c.id,
                  })
                : (0, N.openModalLazy)(async () => {
                      let e = { source: ej.Eo.NAGBAR, alertType: (0, eL.$5)(u) },
                          { default: t } = await Promise.all([
                              n.e("72273"),
                              n.e("42641"),
                              n.e("40258"),
                              n.e("73669"),
                              n.e("46313"),
                              n.e("43233"),
                          ]).then(n.bind(n, 671576));
                      return (n) => (0, i.jsx)(t, { ...n, guildId: c.id, analyticsData: e });
                  });
        },
        R = (0, i.jsx)(ef.Ay, { className: ev.$f, guild: c, size: ef.Ay.Sizes.MINI }),
        m = (0, eL.ql)(u, c.name);
    if (null != (u.dmsDisabledUntil ?? u.invitesDisabledUntil) && E)
        return (0, i.jsxs)(_.$T, {
            className: ev.lm,
            color: _.Hv.NEUTRAL,
            children: [
                (0, i.jsx)(_.PM, { onClick: t, noticeType: ei.kqX.GUILD_RAID_NOTIFICATION }),
                R,
                m,
                (0, i.jsx)(_.zr, {
                    className: ev.hP,
                    onClick: () => I(!1),
                    children: (0, i.jsxs)("div", {
                        className: ev.rx,
                        children: [
                            (0, i.jsx)(eh.X, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)("span", { children: es.intl.string(es.t["c+7oa7"]) }),
                        ],
                    }),
                }),
            ],
        });
    let C = (0, eL.P$)(u)
            ? es.intl.formatToPlainString(es.t.tZTx2E, { guildName: c.name })
            : (0, eL.Qm)(u)
              ? es.intl.formatToPlainString(es.t["1bSmxr"], { guildName: c.name })
              : es.intl.formatToPlainString(es.t.W87xDE, { guildName: c.name }),
        p = A && s === ek.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(_.$T, {
        className: ev.lm,
        color: _.Hv.WARNING,
        children: [
            (0, i.jsx)(_.PM, { onClick: t, noticeType: ei.kqX.GUILD_RAID_NOTIFICATION }),
            R,
            C,
            !p &&
                (0, i.jsx)(_.zr, {
                    className: ev.hP,
                    onClick: () => I(!0),
                    children: (0, i.jsx)("div", {
                        className: ev.rx,
                        children: (0, i.jsx)("span", { children: es.intl.string(es.t.zDJDhr) }),
                    }),
                }),
        ],
    });
}
var eG = n(995786),
    eX = n(206835),
    eq = n(495544),
    eF = n(696451),
    eB = n(229527),
    ew = n(81400),
    eV = n(340837);
function eH(e) {
    let { guildId: t, analyticsLocations: n } = e,
        [l, r] = (0, ew.j8)({ guildId: t, analyticsLocations: n }),
        s = r ? es.intl.string(es.t["6ndMcq"]) : es.intl.string(es.t["0eiu6J"]),
        a = r ? es.intl.string(es.t.S09nw4) : es.intl.string(es.t.tEttXd);
    return (0, i.jsxs)(_.$T, { color: _.Hv.DANGER, children: [s, (0, i.jsx)(_.zr, { onClick: l, children: a })] });
}
function eY() {
    let e = (0, eX.A)({ scrollPosition: er._F.GUILD_TAG });
    return (0, i.jsxs)(_.$T, {
        color: _.Hv.DANGER,
        children: [
            es.intl.string(es.t.Zqlecb),
            (0, i.jsx)(_.zr, { onClick: e, children: es.intl.string(es.t.SJehVW) }),
        ],
    });
}
function eK(e) {
    let { analyticsLocations: t, ...n } = e,
        { analyticsLocations: l } = (0, k.Ay)(t, L.A.AUTOMOD_NAGBAR_NOTICE),
        r = (0, d.bG)([eq.default, eF.Ay], () => {
            if (null == n.guildId) return new Set();
            let e = eq.default.getId();
            return (0, eB.wj)(eF.Ay.getMember(n.guildId, e));
        }, [n.guildId]);
    return r.has(eV.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || r.has(eV.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, i.jsx)(eH, { ...n, analyticsLocations: l })
        : r.has(eV.D.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, i.jsx)(eY, {})
          : (0, i.jsx)(eH, { ...n, analyticsLocations: l });
}
var eW = n(202384),
    ez = n(51758);
n(321073);
var e$ = n(503698),
    eZ = n.n(e$);
if (21552 == n.j) var eQ = n(873263);
if (21552 == n.j) var eJ = n(314116);
if (21552 == n.j) var e0 = n(821609);
var e1 = n(334465),
    e2 = n(624458),
    e6 = n(513461),
    e7 = n(709977),
    e5 = n(212455),
    e9 = n(182430),
    e8 = n(580537);
let e3 =
    21552 == n.j
        ? () => {
              let e = (0, d.bG)([eU.A], () => eU.A.getGuildId(), []),
                  t = (0, d.bG)([eD.A], () => eD.A.getGuild(e), [e]),
                  l = (0, d.bG)([e5.A], () => (null != e ? e5.A.getRequest(e) : null), [e]),
                  r = (0, eQ.zy)(),
                  s = (0, e1.B)(r.pathname, ei.BVt.CHANNEL(t?.id, ek.VV.GUILD_ONBOARDING))?.isExact === !0;
              if (null == t || !(0, e7.Qd)(t) || s) return null;
              let a = l?.applicationStatus ?? e6.B5.STARTED,
                  c = null,
                  o = null,
                  u = null,
                  A = [e9.lm, e8.lm];
              switch (a) {
                  case e6.B5.SUBMITTED:
                      (c = es.intl.string(es.t["5iLvSx"])),
                          (o = es.intl.string(es.t.mqtdmQ)),
                          (u = () => {
                              (0, eJ.A)({
                                  title: es.intl.string(es.t.aIz1oV),
                                  subtitle: es.intl.string(es.t["13tjTU"]),
                                  variant: "primary",
                                  confirmText: es.intl.string(es.t["cY+Oob"]),
                                  onConfirm: () => e2.A.removeGuildJoinRequest(t.id),
                              });
                          });
                      break;
                  case e6.B5.REJECTED:
                      (c = es.intl.string(es.t.lk30cY)),
                          (o = es.intl.string(es.t["8RrsHr"])),
                          (u = () => {
                              (0, N.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([n.e("25099"), n.e("14382")]).then(
                                      n.bind(n, 463325),
                                  );
                                  return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                              });
                          }),
                          A.push(e9.z3);
                      break;
                  default:
                      (c = es.intl.string(es.t.G5YKXP)),
                          (o = es.intl.string(es.t["r8/DT+"])),
                          (u = () => {
                              (0, eW.Ze)(t.id);
                          });
              }
              return (0, i.jsxs)("div", {
                  className: eZ()(...A),
                  children: [
                      (0, i.jsx)(E.E, { className: e9.wx, variant: "text-sm/normal", children: c }),
                      (0, i.jsx)(e0.$, { variant: "overlay-primary", size: "sm", onClick: u, text: o }),
                  ],
              });
          }
        : null;
if (21552 == n.j) var e4 = n(477155);
var te = n(22877);
function tt(e) {
    let { buttonText: t, onGoBack: n, onDismiss: l, showCloseButton: r } = e;
    return (0, i.jsxs)(_.$T, {
        className: te.eR,
        children: [
            r && (0, i.jsx)(_.PM, { onClick: l, className: te.b, noticeType: ei.kqX.BACK_TO_PREVIOUS_SCREEN }),
            (0, i.jsx)(e0.$, { text: t, variant: "overlay-secondary", size: "sm", icon: e4.r, onClick: n }),
        ],
    });
}
var tn = n(468689),
    ti = n(699609);
if (21552 == n.j) var tl = n(862482);
var tr = n(66834),
    ts = n(449054),
    ta = n(484154);
let tc =
    21552 == n.j
        ? () => {
              let e = (0, d.bG)([eU.A], () => eU.A.getGuildId(), []),
                  t = (0, d.bG)([eD.A], () => eD.A.getGuild(e), [e]),
                  [n, r] = l.useState(!1);
              if (null == t) return null;
              let s = async () => {
                  r(!0);
                  try {
                      ts.cf(t.id), await tr.A.joinGuild(t.id, { source: ei.Q4z.NOTICE_BAR });
                  } catch {
                      r(!1);
                  }
              };
              return (0, i.jsxs)("div", {
                  className: eZ()(ta.lm, e8.lm),
                  children: [
                      (0, i.jsxs)(tl.$n, {
                          look: tl.$n.Looks.OUTLINED,
                          color: tl.$n.Colors.WHITE,
                          size: tl.$n.Sizes.NONE,
                          className: eZ()(ta.x6, ta.aX),
                          innerClassName: ta.gb,
                          onClick: () => {
                              (0, z.JK)().goBack();
                          },
                          children: [
                              (0, i.jsx)(e4.r, { size: "xs", color: "currentColor", className: ta.UE }),
                              es.intl.string(es.t["13/7kX"]),
                          ],
                      }),
                      (0, i.jsx)(E.E, {
                          className: ta.wx,
                          variant: "text-sm/normal",
                          children: es.intl.string(es.t["N/y2WE"]),
                      }),
                      (0, i.jsx)(tl.$n, {
                          className: ta.x6,
                          look: tl.$n.Looks.OUTLINED,
                          color: tl.$n.Colors.WHITE,
                          size: tl.$n.Sizes.NONE,
                          submitting: n,
                          onClick: s,
                          children: es.intl.format(es.t.uHN7ny, { guild: t.name }),
                      }),
                  ],
              });
          }
        : null;
var to = n(801644),
    td = n(74848),
    tu = n(234419);
if (21552 == n.j) var tE = n(661531);
var tA = n(367727),
    t_ = n(635995),
    tT = n(88001),
    tI = n(466919),
    tN = n(375043);
function tR(e) {
    let { premiumSubscription: t } = e,
        r = t?.id,
        s = l.useCallback(() => {
            null != r && (0, tA.qr)(q.M.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR, r, { dismissAction: en.i.USER_DISMISS });
        }, [r]),
        a = l.useCallback(() => {
            s(),
                ee.default.track(ei.HAw.APP_NOTICE_CLOSED, {
                    notice_type: ei.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
                });
        }, [s]),
        c = l.useCallback(() => {
            null != t &&
                (ee.default.track(ei.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: ei.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
                }),
                s(),
                (0, N.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("44616"), n.e("85579")]).then(n.bind(n, 785606));
                    return (n) => (0, i.jsx)(e, { ...n, subscription: t });
                }));
        }, [t, s]);
    return (0, i.jsxs)(t_.T0, {
        onClick: a,
        className: tN.A,
        children: [
            (0, i.jsx)(I.t, { color: tE.A.colors.ICON_STRONG }),
            (0, i.jsx)(t_.In, {
                children: es.intl.format(tI.default.fFt9bd, { premiumGroupProductName: (0, tT.DP)() }),
            }),
            (0, i.jsx)(e0.$, {
                onClick: c,
                text: es.intl.string(tI.default["5fZHp3"]),
                size: "sm",
                variant: "overlay-primary",
            }),
        ],
    });
}
var tm = n(549996),
    tC = n(498470),
    tp = n(637706);
function tS() {
    let e = (0, tm.c)(eo.C.NAGBAR),
        t = e?.properties.properties.oneofKind === "nagbar" ? e.properties.properties.nagbar : null,
        n = e?.promotionId,
        r = l.useCallback(
            (e) => {
                null != n &&
                    (0, tA.qr)(q.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, n, { dismissAction: e, forceTrack: !0 });
            },
            [n],
        ),
        s = l.useCallback(() => {
            ee.default.track(ei.HAw.APP_NOTICE_CLOSED, { notice_type: ei.kqX.PREMIUM_MARKETING_NAGBAR }),
                r(en.i.USER_DISMISS);
        }, [r]),
        a = l.useRef(null);
    if (
        (l.useEffect(() => {
            null == t ||
                null == n ||
                (a.current !== n &&
                    ((a.current = n), (0, tA.Wx)(q.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, { snowflakeId: n })));
        }, [t, n]),
        null == t)
    )
        return null;
    let c = (0, tC.h)({
            buttonAction: t.ctaAction,
            deeplinkSection: t.deeplinkSection,
            onClose: () => {
                r(en.i.TAKE_ACTION);
            },
        }),
        o = (0, tp.C)(t.helpArticle, "");
    return (0, i.jsxs)(t_.T0, {
        onClick: s,
        children: [
            (0, i.jsxs)(t_.In, {
                children: [
                    t.body,
                    null != o &&
                        (0, i.jsxs)(i.Fragment, {
                            children: ["\xa0", (0, i.jsx)(T.Anchor, { href: o.url, children: o.linkText })],
                        }),
                ],
            }),
            "" !== t.ctaLabel &&
                (0, i.jsx)(t_.fY, {
                    text: t.ctaLabel,
                    onClick: () => {
                        ee.default.track(ei.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                            notice_type: ei.kqX.PREMIUM_MARKETING_NAGBAR,
                        }),
                            c();
                    },
                }),
        ],
    });
}
var tO = n(378974),
    tg = n(340124),
    th = n(14594);
function tf() {
    let [e, t] = (0, eu.Wl)(q.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: th.aH });
    return e !== q.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK
        ? null
        : (0, i.jsxs)(_.$T, {
              color: _.Hv.BRAND,
              children: [
                  (0, i.jsx)(_.PM, { onClick: () => t(en.i.DISMISS), noticeType: ei.kqX.IGNORE_USER_FEEDBACK_NAGBAR }),
                  es.intl.string(es.t.XkeW9N),
                  (0, i.jsx)(_.Z_, {
                      onClick: () => {
                          (0, N.openModalLazy)(async () => {
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
                      children: es.intl.string(es.t.vcdNKv),
                  }),
              ],
          });
}
if (21552 == n.j) var tP = n(825484);
var tM = n(139716),
    tD = n(847599),
    tx = n(734057),
    tU = n(849736),
    ty = n(354583),
    tj = n(366098),
    tL = n(418208),
    tk = n(992262);
function tv(e) {
    if (!e && (0, tL.Cf)())
        return void tM.A.showAgeVerificationGetStartedModal({ entryPoint: tD.q1.STAGE_CHANNEL_RAISE_HAND });
    let t = ex.A.getVoiceChannelId();
    if (null == t) return;
    let n = tx.A.getChannel(t);
    null != n && (0, tU.e7)(n, e);
}
function tb(e) {
    let { channelId: t } = e,
        n = (0, tj.D3)(t) ?? 0,
        l = (0, tj.Xk)(t) ?? 0;
    return n > 0 && l > 0
        ? (0, i.jsx)("div", {
              className: tk.Z5,
              children: (0, i.jsx)("div", { className: eZ()(tk.qQ, tk.lN), children: es.intl.string(es.t.xlJRfv) }),
          })
        : n > 0
          ? (0, i.jsx)("div", {
                className: tk.Z5,
                children: (0, i.jsx)("div", { className: eZ()(tk.qQ, tk.lN), children: es.intl.string(es.t.WYad9Z) }),
            })
          : l > 0
            ? (0, i.jsx)("div", {
                  className: tk.Z5,
                  children: (0, i.jsx)("div", { className: eZ()(tk.qQ, tk.lN), children: es.intl.string(es.t.eHq2OF) }),
              })
            : null;
}
function tG() {
    let e = (0, ty.A)();
    return null == e
        ? null
        : (0, i.jsxs)(_.$T, {
              className: tk.kL,
              color: _.Hv.DEFAULT,
              children: [
                  es.intl.string(es.t.Ul1RJQ),
                  (0, i.jsx)(tb, { channelId: e.id }),
                  (0, i.jsxs)(tP.e, {
                      size: "sm",
                      className: tk.GC,
                      children: [
                          (0, i.jsx)(e0.$, {
                              variant: "overlay-primary",
                              text: es.intl.string(es.t.MpO0px),
                              onClick: () => tv(!1),
                          }),
                          (0, i.jsx)(e0.$, {
                              variant: "secondary",
                              onClick: () => tv(!0),
                              text: es.intl.string(es.t["1YDv7a"]),
                          }),
                      ],
                  }),
              ],
          });
}
var tX = n(952818),
    tq = n(935671);
function tF() {
    (0, tq.sL)("nagbar");
}
function tB() {
    return null == (0, d.bG)([tX.Ay], () => tX.Ay.getVisibleGame())
        ? null
        : (0, i.jsxs)(_.$T, {
              color: _.Hv.DANGER,
              children: [
                  (0, i.jsx)(_.PM, { noticeType: ei.kqX.SYSTEM_SERVICE_WARNING, onClick: () => t3() }),
                  es.intl.string(es.t["5rPt+j"]),
                  (0, i.jsx)(_.Z_, {
                      onClick: tF,
                      noticeType: ei.kqX.SYSTEM_SERVICE_WARNING,
                      children: es.intl.string(es.t["1iI46O"]),
                  }),
              ],
          });
}
function tw() {
    return (0, i.jsxs)(_.$T, {
        color: _.Hv.DANGER,
        children: [
            es.intl.string(es.t.lQiCJ6),
            (0, i.jsx)(_.Z_, {
                noticeType: ei.kqX.PTT_NO_KEYBIND_WARNING,
                onClick: function () {
                    (0, Q.openUserSettings)($.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING);
                },
                children: es.intl.string(es.t["UgQN+9"]),
            }),
        ],
    });
}
if (21552 == n.j) var tV = n(189213);
if (21552 == n.j) var tH = n(150934);
function tY(e) {
    let [t, n] = l.useState(!1);
    return (0, i.jsx)(tV.Modal, {
        size: "md",
        title: es.intl.string(es.t["zQ1+Jw"]),
        subtitle: es.intl.string(es.t.K1gWXn),
        actions: [
            {
                text: es.intl.string(es.t.BddRzS),
                onClick: () => {
                    t && C.A.setSilenceWarning(!1), e.onClose();
                },
                variant: "primary",
            },
        ],
        actionBarInput: (0, i.jsx)(tH.S, {
            checked: t,
            onChange: (e) => n(e),
            label: es.intl.string(es.t.XAiAgD),
            labelType: "secondary",
        }),
        ...e,
    });
}
var tK = n(761853),
    tW = n(763827),
    tz = n(67480),
    t$ = n(147964),
    tZ = n(177141),
    tQ = n(975571),
    tJ = n(723702),
    t0 = n(325278),
    t1 = n(831502),
    t2 = n(731854);
let t6 = new X.A("Notice"),
    t7 = (e) => {
        let { error: t, allowClick: n = !1 } = e,
            l = (0, eS.B1)(t)?.errorCode,
            r = es.intl.formatToPlainString(es.t.ejOT95, { errorCode: l }),
            s = (0, i.jsx)(E.E, {
                variant: "text-sm/bold",
                color: "currentColor",
                tag: "span",
                className: ea.fU,
                selectable: !0,
                children: r,
            });
        return n
            ? (0, i.jsx)(A.D, {
                  tag: "span",
                  className: ea.wz,
                  onClick: () => open(tQ.A.getArticleURL(ei.MVz.AV_ERROR_CODES)),
                  children: s,
              })
            : s;
    },
    t5 = (e) => {
        let { noticeType: t } = e;
        return (0, i.jsxs)(_.$T, {
            color: _.Hv.DANGER,
            children: [
                (0, i.jsx)(_.PM, {
                    noticeType: t,
                    onClick: () => {
                        t3();
                    },
                }),
                es.intl.string(es.t.o3zuYz),
                (0, i.jsx)(t7, { error: eS.iy.NO_INPUT_DEVICES }),
                (0, i.jsx)(_.eC, {
                    href: tQ.A.getArticleURL(ei.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: es.intl.string(es.t.RYKKox),
                }),
            ],
        });
    };
function t9(e) {
    return (0, tJ.isWindows)() && o().satisfies(y.A?.os.release, t0.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function t8(e) {
    let t,
        n,
        { noticeType: l } = e,
        r = (0, td.x5)(t2.oh.AUDIO_INPUT),
        s = r?.guid ?? "",
        { inputDeviceOSMuted: a, inputDeviceOSVolume: c } = (0, d.cf)([tK.Ay], () => ({
            inputDeviceOSMuted: tK.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: tK.Ay.getInputDeviceOSVolume(),
        })),
        o = !1;
    return (
        !0 === a
            ? ((t = es.intl.string(es.t.ppW3ri)),
              (n = (0, i.jsx)(_.eC, { href: t9(s), noticeType: l, children: es.intl.string(es.t.QghSIq) })))
            : 0 === c
              ? ((t = es.intl.string(es.t.j4gGA4)),
                (n = (0, i.jsx)(_.eC, { href: t9(s), noticeType: l, children: es.intl.string(es.t.QghSIq) })))
              : tK.Ay.supports(t2.O5.LOOPBACK)
                ? ((t = es.intl.string(es.t.dNAJ18)),
                  (o = !0),
                  (n = (0, i.jsx)(_.zr, {
                      onClick: () => {
                          (0, Q.openUserSettings)($.X.VOICE_AND_VIDEO_PANEL);
                      },
                      children: es.intl.string(es.t.I6YlB4),
                  })))
                : ((t = es.intl.string(es.t.nCO9bI)),
                  (n = (0, i.jsx)(_.eC, {
                      href: tQ.A.getArticleURL(ei.MVz.NO_INPUT_DETECTED),
                      noticeType: l,
                      children: es.intl.string(es.t.RYKKox),
                  }))),
        (0, i.jsxs)(_.$T, {
            color: _.Hv.DANGER,
            children: [
                (0, i.jsx)(_.PM, {
                    noticeType: l,
                    onClick: () => {
                        t3(), (0, N.openModal)((e) => (0, i.jsx)(tY, { ...e }));
                    },
                }),
                t,
                (0, i.jsx)(t7, { allowClick: o, error: eS.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function t3(e) {
    g.A.dismiss(null != e ? { untilAtLeast: s()(e) } : void 0);
}
let t4 =
    21552 == n.j
        ? l.memo(function () {
              let e = (0, d.bG)([eN.default], () => eN.default.getCurrentUser()),
                  t = (0, d.bG)([eU.A], () => eU.A.getGuildId()),
                  r = (0, d.bG)([tZ.Ay], () => tZ.Ay.getNotice()),
                  { analyticsLocations: s } = (0, k.Ay)(),
                  c = (0, U.Ay)(),
                  o = (0, ez.H)(t),
                  E = (0, tu.V)();
              if (
                  (l.useEffect(() => {
                      if (r?.type != null) {
                          let e;
                          if (
                              null == E &&
                              (r.type === ei.kqX.PREMIUM_TIER_2_TRIAL_ENDING ||
                                  r.type === ei.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
                          )
                              return;
                          let n = {};
                          null != t && (n.guild_id = t),
                              E?.trial_id != null && (n.trial_id = E.trial_id),
                              (e = { notice_type: r.type, ...n }),
                              ee.default.track(ei.HAw.APP_NOTICE_VIEWED, e);
                      }
                  }, [r?.type, t, E]),
                  l.useEffect(() => {
                      if (null != r && r.type === ei.kqX.SURVEY && null != r.metadata) {
                          let { metadata: e } = r,
                              t = eg.A.getUserExperimentDescriptor(e.id);
                          null != t && (0, eO.LQ)(e.id, t),
                              (async () => {
                                  r.metadata?.id != null && (await (0, D.oX)(r.metadata?.id));
                              })();
                      }
                  }, [r]),
                  null == r)
              )
                  return null;
              let A = null != r.type ? tZ.Re[r.type] : null,
                  S = null != r.type ? tZ.rV[r.type] : null,
                  g = null != r.type ? tZ.f7[r.type] : null,
                  y = tZ.pe[r.type];
              if (null != A) return (0, i.jsx)(ep.$, { dismissibleContent: A, noticeType: r.type });
              if (null != S) return (0, i.jsx)(e_, { dismissibleContent: S });
              if (null != g) return (0, i.jsx)(eC, { dismissibleContent: g });
              if (null != y) return (0, i.jsx)(ec, { dismissibleContent: y, noticeType: r.type });
              let L = r.metadata?.premiumType;
              switch (r.type) {
                  case ei.kqX.PTT_NO_KEYBIND_WARNING:
                      return (0, i.jsx)(tw, {});
                  case ei.kqX.LURKING_GUILD:
                      return (0, i.jsx)(tc, {});
                  case ei.kqX.PENDING_MEMBER:
                      return (0, i.jsx)(e3, {});
                  case ei.kqX.INVITED_TO_SPEAK:
                      return (0, i.jsx)(tG, {});
                  case ei.kqX.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: X } = r.metadata;
                      return (0, i.jsx)(eb, { onDismiss: () => t3(X) });
                  case ei.kqX.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: q } = r.metadata;
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.WARNING,
                          children: [
                              (0, i.jsx)(_.PM, { onClick: () => t3(q), noticeType: r.type }),
                              es.intl.format(es.t["08KQ1P"], {
                                  helpCenterLink: tQ.A.getArticleURL(ei.MVz.WIN32_DEPRECATE),
                              }),
                          ],
                      });
                  case ei.kqX.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: F } = r.metadata;
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.WARNING,
                          children: [
                              (0, i.jsx)(_.PM, { onClick: () => t3(F), noticeType: r.type }),
                              es.intl.format(es.t["8Je+dX"], {
                                  helpCenterLink: tQ.A.getArticleURL(ei.MVz.WIN7_8_DEPRECATE),
                              }),
                          ],
                      });
                  case ei.kqX.WIN_COMPAT_MODE_MESSAGE:
                      let { dismissUntil: B } = r.metadata;
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.WARNING,
                          children: [
                              (0, i.jsx)(_.PM, { onClick: () => t3(B), noticeType: r.type }),
                              es.intl.string(es.t["9DJgOg"]),
                          ],
                      });
                  case ei.kqX.MACOS_19_DEPRECATED_MESSAGE:
                      let { dismissUntil: w } = r.metadata;
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.WARNING,
                          children: [
                              (0, i.jsx)(_.PM, { onClick: () => t3(w), noticeType: r.type }),
                              es.intl.format(es.t.q8VPLo, {
                                  helpCenterLink: tQ.A.getArticleURL(ei.MVz.MACOS_19_DEPRECATE),
                              }),
                          ],
                      });
                  case ei.kqX.E2EE_UPDATE_REQUIRED:
                      let { dismissUntil: V } = r.metadata;
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.WARNING,
                          children: [
                              (0, i.jsx)(_.PM, { onClick: () => t3(V), noticeType: r.type }),
                              es.intl.format(tJ.isPlatformEmbedded ? es.t.J232TI : es.t.vceuiL, {
                                  helpCenterLink: tQ.A.getArticleURL(ei.MVz.END_TO_END_ENCRYPTION),
                              }),
                          ],
                      });
                  case ei.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.WARNING,
                          children: [
                              (0, i.jsx)(_.PM, { onClick: () => t3(), noticeType: r.type }),
                              es.intl.string(es.t.iW0fcQ),
                              (0, i.jsx)(_.eC, {
                                  href: tQ.A.getArticleURL(ei.MVz.WINDOWS_MEDIA_PACK),
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.LQG5j6),
                              }),
                          ],
                      });
                  case ei.kqX.GENERIC:
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(_.PM, { onClick: () => t3(), noticeType: r.type }),
                              r.message,
                              null != r.buttonText
                                  ? (0, i.jsx)(_.Z_, {
                                        onClick: r.callback,
                                        noticeType: r.type,
                                        children: r.buttonText,
                                    })
                                  : null,
                          ],
                      });
                  case ei.kqX.LAUNCH_GAME_FAILURE:
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.DANGER,
                          children: [
                              (0, i.jsx)(_.PM, { onClick: () => t3(), noticeType: r.type }),
                              r.message,
                              null != r.buttonText
                                  ? (0, i.jsx)(_.Z_, {
                                        onClick: r.callback,
                                        noticeType: r.type,
                                        children: r.buttonText,
                                    })
                                  : null,
                          ],
                      });
                  case ei.kqX.VOICE_DISABLED:
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.WARNING,
                          children: [
                              (0, i.jsx)(_.PM, {
                                  onClick: () => {
                                      h.clearRemoteDisconnectVoiceChannelId(), t3();
                                  },
                                  noticeType: r.type,
                              }),
                              es.intl.string(es.t.bOQ3jV),
                              (0, i.jsx)(_.Z_, {
                                  onClick: () => {
                                      let e = tW.A.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != tx.A.getChannel(e) && f.default.selectVoiceChannel(e);
                                  },
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.vD60Pv),
                              }),
                          ],
                      });
                  case ei.kqX.VOICE_CONNECTED_LAST_SESSION:
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(_.PM, {
                                  onClick: () => {
                                      h.clearLastSessionVoiceChannelId(), t3();
                                  },
                                  noticeType: r.type,
                              }),
                              es.intl.string(es.t.jY2lUA),
                              (0, i.jsx)(_.Z_, {
                                  onClick: () => {
                                      let e = tW.A.getLastSessionVoiceChannelId();
                                      null != e && null != tx.A.getChannel(e) && f.default.selectVoiceChannel(e);
                                  },
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.vD60Pv),
                              }),
                          ],
                      });
                  case ei.kqX.SPOTIFY_AUTO_PAUSED:
                      let H = j.A.get(ei.fg2.SPOTIFY);
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.DANGER,
                          children: [
                              (0, i.jsx)(_.PM, { onClick: () => t3(), noticeType: r.type }),
                              (0, i.jsx)("img", {
                                  alt: "",
                                  className: ea.tV,
                                  src: (0, u.q)(c) ? H.icon.darkSVG : H.icon.whiteSVG,
                              }),
                              es.intl.string(es.t.D8Cp76),
                              (0, i.jsx)(_.Z_, {
                                  onClick: () => (0, Q.openUserSettings)($.X.VOICE_AND_VIDEO_PANEL),
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.NiTd0e),
                              }),
                              (0, i.jsx)(T.Anchor, {
                                  className: ea.uD,
                                  href: tQ.A.getArticleURL(ei.MVz.SPOTIFY_AUTO_PAUSED),
                                  target: "_blank",
                                  children: es.intl.string(es.t.CiqAIU),
                              }),
                          ],
                      });
                  case ei.kqX.UNCLAIMED_ACCOUNT:
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.DEFAULT,
                          children: [
                              es.intl.string(es.t["f+Zaol"]),
                              (0, i.jsx)(_.Z_, {
                                  noticeType: r.type,
                                  onClick: () => (o && null != t ? (0, eW.Ze)(t) : b.R()),
                                  children: es.intl.string(es.t.fiNVin),
                              }),
                          ],
                      });
                  case ei.kqX.UNVERIFIED_ACCOUNT:
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.DEFAULT,
                          children: [
                              es.intl.string(es.t["3sWbf3"]),
                              (0, i.jsx)(_.Z_, {
                                  noticeType: r.type,
                                  onClick: () => {
                                      p.A.verifyResend(),
                                          m.A.show({
                                              title: es.intl.string(es.t.LykQYk),
                                              body: es.intl.format(es.t.azKEPy, { email: e?.email }),
                                              cancelText: es.intl.string(es.t.Vm8akB),
                                              onCancel: b.R,
                                          });
                                  },
                                  children: es.intl.string(es.t.WnX4J2),
                              }),
                          ],
                      });
                  case ei.kqX.SCHEDULED_MAINTENANCE:
                      if (null == r.metadata) return null;
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(_.PM, { onClick: () => P.A.ackScheduledMaintenance(), noticeType: r.type }),
                              es.intl.format(es.t["yb96S+"], r.metadata),
                              (0, i.jsx)(_.eC, {
                                  href: `${ei.qF7.STATUS}/incidents/${r.metadata.id}`,
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.hvVgAZ),
                              }),
                          ],
                      });
                  case ei.kqX.NO_INPUT_DETECTED:
                      return (0, i.jsx)(t8, { noticeType: r.type });
                  case ei.kqX.NO_INPUT_DEVICES_DETECTED:
                      return (0, i.jsx)(t5, { noticeType: r.type });
                  case ei.kqX.HARDWARE_MUTE:
                      if (null != r.metadata) {
                          let { vendor: e, model: t } = r.metadata;
                          return (0, i.jsxs)(_.$T, {
                              color: _.Hv.DANGER,
                              children: [
                                  es.intl.format(es.t.qoDex7, { vendorName: e.name, modelName: t.name }),
                                  (0, i.jsx)(_.PM, {
                                      noticeType: r.type,
                                      onClick: () => {
                                          C.A.setEnableHardwareMuteNotice(!1), t3();
                                      },
                                  }),
                                  (0, i.jsx)(_.eC, {
                                      href: t.url,
                                      target: "_blank",
                                      rel: "noreferrer noopener",
                                      noticeType: r.type,
                                      children: es.intl.string(es.t["Yl/Riu"]),
                                  }),
                              ],
                          });
                      }
                      if (
                          to.A.getConfig({ location: "Notice.AudioIssueNoticeHardwareMute" })
                              .enableHardwareSilenceWarning
                      )
                          return (0, i.jsxs)(_.$T, {
                              color: _.Hv.INFO,
                              children: [
                                  es.intl.format(es.t.QMw8Fd, {}),
                                  (0, i.jsx)(_.PM, {
                                      noticeType: r.type,
                                      onClick: () => {
                                          C.A.setEnableHardwareMuteNotice(!1), t3();
                                      },
                                  }),
                              ],
                          });
                      return null;
                  case ei.kqX.STREAMER_MODE:
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.STREAMER_MODE,
                          children: [
                              (0, i.jsx)(_.PM, { onClick: () => t3(), noticeType: ei.kqX.STREAMER_MODE }),
                              es.intl.string(es.t.iEgBXp),
                              (0, i.jsx)(_.Z_, {
                                  onClick: () => M.A.setEnabled(!1),
                                  noticeType: ei.kqX.STREAMER_MODE,
                                  children: es.intl.string(es.t.R9GHya),
                              }),
                          ],
                      });
                  case ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == r.metadata) return null;
                      let { skuId: Y, applicationId: W } = r.metadata,
                          z = tz.A.get(Y),
                          Z = v.A.getApplication(W);
                      if (null == z || null == Z) return null;
                      let J = { page: ei.liQ.IN_APP };
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(_.PM, {
                                  onClick: () => O(z.id),
                                  noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: ea.PC }),
                              es.intl.format(es.t["g3MU/+"], { applicationName: Z.name, skuName: z.name }),
                              (0, i.jsx)(_.Z_, {
                                  noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: async () => {
                                      try {
                                          let { openIAPPurchaseModal: e } = await Promise.all([
                                              n.e("29761"),
                                              n.e("26105"),
                                              n.e("46461"),
                                              n.e("26705"),
                                              n.e("9225"),
                                              n.e("35316"),
                                              n.e("30272"),
                                              n.e("92646"),
                                              n.e("45650"),
                                              n.e("61097"),
                                              n.e("34186"),
                                              n.e("40523"),
                                              n.e("57016"),
                                              n.e("28743"),
                                              n.e("66609"),
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
                                              n.e("3178"),
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
                                              n.e("45679"),
                                              n.e("6174"),
                                              n.e("91146"),
                                              n.e("46070"),
                                              n.e("63645"),
                                              n.e("5636"),
                                              n.e("87196"),
                                              n.e("834"),
                                              n.e("26728"),
                                              n.e("29354"),
                                              n.e("62075"),
                                          ]).then(n.bind(n, 4630));
                                          await e({
                                              applicationId: Z.id,
                                              skuId: z.id,
                                              openPremiumPaymentModal: () => {
                                                  (0, K.A)({
                                                      initialPlanId: null,
                                                      subscriptionTier: el.pe.TIER_2,
                                                      analyticsLocations: s,
                                                      analyticsObject: J,
                                                  });
                                              },
                                              analyticsLocations: s,
                                              analyticsLocationObject: J,
                                              context: __OVERLAY__ ? ei.BRT.OVERLAY : ei.BRT.APP,
                                          }),
                                              O(z.id);
                                      } catch (e) {
                                          null != e && t6.error("Failed to open off-platform premium perk modal", e);
                                      }
                                  },
                                  children: es.intl.string(es.t.KEwPYx),
                              }),
                          ],
                      });
                  case ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == r.metadata) return null;
                      let { skuId: e, applicationId: t } = r.metadata,
                          n = tz.A.get(e),
                          l = v.A.getApplication(t);
                      if (null == n || null == l) return null;
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(_.PM, {
                                  onClick: () => t3(),
                                  noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: ea.PC }),
                              es.intl.format(es.t.LquIKC, { applicationName: l.name, skuName: n.name }),
                              (0, i.jsx)(_.zr, {
                                  children: (0, i.jsx)(a.N_, {
                                      onClick: () => t3(),
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
                      let e = r.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: l, url: s, embedded: a, id: c } = e;
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.CUSTOM,
                          children: [
                              (0, i.jsx)(_.PM, {
                                  noticeType: ei.kqX.SURVEY,
                                  onClick: () => {
                                      (0, D.pX)(t, !0);
                                  },
                              }),
                              n,
                              (0, i.jsx)(_.Z_, {
                                  noticeType: ei.kqX.SURVEY,
                                  onClick: () => {
                                      a ? (0, tO.K)(c) : window.open(s, "_blank"), (0, D.pX)(t, !1);
                                  },
                                  children: l,
                              }),
                          ],
                      });
                  }
                  case ei.kqX.CORRUPT_INSTALLATION:
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.DANGER,
                          children: [
                              es.intl.string(es.t["ugxmk/"]),
                              (0, i.jsx)(_.eC, {
                                  href: tQ.A.getArticleURL(ei.MVz.CORRUPT_INSTALLATION),
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: es.intl.string(es.t["6ik4Xk"]),
                              }),
                          ],
                      });
                  case ei.kqX.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.WARNING,
                          children: [
                              (0, i.jsx)(_.PM, { onClick: () => t3(), noticeType: ei.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                              es.intl.string(es.t.wVjKGi),
                              (0, i.jsx)(_.Z_, {
                                  noticeType: ei.kqX.VIDEO_UNSUPPORTED_BROWSER,
                                  onClick: () => {
                                      (0, N.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("81013"),
                                              n.e("44602"),
                                              n.e("25280"),
                                          ]).then(n.bind(n, 987482));
                                          return (t) => (0, i.jsx)(e, { source: "Video unsupported browser", ...t });
                                      });
                                  },
                                  children: es.intl.string(es.t["1WjMbC"]),
                              }),
                          ],
                      });
                  case ei.kqX.DISPATCH_ERROR:
                      if (null == r.metadata) return null;
                      let { error: et } = r.metadata;
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.DANGER,
                          children: [
                              (0, i.jsx)(_.PM, { onClick: () => t3(), noticeType: ei.kqX.DISPATCH_ERROR }),
                              et?.displayMessage,
                              (0, i.jsx)(_.Z_, {
                                  noticeType: ei.kqX.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, N.openModalLazy)(async () => {
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
                      if (null == r.metadata) return null;
                      let { progress: en, total: er, name: eo } = r.metadata;
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(_.PM, {
                                  onClick: () => t3(),
                                  noticeType: ei.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                              }),
                              (0, i.jsxs)(G.A, {
                                  justify: G.A.Justify.CENTER,
                                  children: [
                                      null != eo
                                          ? es.intl.formatToPlainString(es.t["pHj+z4"], {
                                                name: `${eo}`,
                                                progress: en,
                                                total: er,
                                            })
                                          : es.intl.formatToPlainString(es.t["lHZn+A"], { progress: en, total: er }),
                                      (0, i.jsx)(R.y, { type: R.y.Type.PULSING_ELLIPSIS, className: ea.gO }),
                                  ],
                              }),
                          ],
                      });
                  case ei.kqX.APPLICATION_TEST_MODE:
                      if (null == r.metadata) return null;
                      if (null != t$.A.testModeEmbeddedApplicationId)
                          return (0, i.jsx)(_.$T, {
                              color: _.Hv.WARNING,
                              children: (0, i.jsxs)(G.A, {
                                  justify: G.A.Justify.CENTER,
                                  align: G.A.Align.CENTER,
                                  children: [
                                      (0, i.jsx)("div", {
                                          children: es.intl.format(es.t["1qxVe4"], {
                                              applicationName: r.metadata.applicationName,
                                          }),
                                      }),
                                      (0, i.jsx)(_.PM, { onClick: x.cL, noticeType: ei.kqX.APPLICATION_TEST_MODE }),
                                  ],
                              }),
                          });
                      return (0, i.jsx)(_.$T, {
                          color: _.Hv.WARNING,
                          children: (0, i.jsxs)(G.A, {
                              justify: G.A.Justify.CENTER,
                              align: G.A.Align.CENTER,
                              children: [
                                  (0, i.jsx)("div", {
                                      children: es.intl.format(es.t.Fv5HrE, {
                                          applicationName: r.metadata.applicationName,
                                      }),
                                  }),
                                  (0, i.jsx)(_.PM, { onClick: x.cL, noticeType: ei.kqX.APPLICATION_TEST_MODE }),
                              ],
                          }),
                      });
                  case ei.kqX.VIEWING_ROLES:
                      return (0, i.jsx)(ti.A, {});
                  case ei.kqX.PREMIUM_UNCANCEL:
                      return (0, i.jsxs)(_.$T, {
                          color:
                              L === el.PremiumTypes.TIER_1
                                  ? _.Hv.PREMIUM_TIER_1
                                  : L === el.PremiumTypes.TIER_0
                                    ? _.Hv.PREMIUM_TIER_0
                                    : _.Hv.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(_.PM, {
                                  noticeType: ei.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      t3(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: ea.PC }),
                              L === el.PremiumTypes.TIER_1
                                  ? es.intl.formatToPlainString(es.t.fXv4wm, { daysLeft: r.metadata.daysLeft })
                                  : L === el.PremiumTypes.TIER_0
                                    ? es.intl.formatToPlainString(es.t.ZOHZMr, { daysLeft: r.metadata.daysLeft })
                                    : es.intl.formatToPlainString(es.t.outyHh, { daysLeft: r.metadata.daysLeft }),
                              (0, i.jsx)(_.Z_, {
                                  noticeType: ei.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      t3(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, N.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("70750"),
                                                  n.e("26105"),
                                                  n.e("46461"),
                                                  n.e("26705"),
                                                  n.e("28743"),
                                                  n.e("5389"),
                                                  n.e("23309"),
                                                  n.e("92646"),
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
                                                      daysLeft: r.metadata.daysLeft,
                                                      premiumType: L,
                                                      analyticsSource: "Nag Bar",
                                                      premiumSubscription: r.metadata.premiumSubscription,
                                                  });
                                          });
                                  },
                                  children:
                                      L === el.PremiumTypes.TIER_1
                                          ? es.intl.string(es.t.BkbUPM)
                                          : L === el.PremiumTypes.TIER_0
                                            ? es.intl.string(es.t.Px978X)
                                            : es.intl.string(es.t.LW5tCE),
                              }),
                          ],
                      });
                  case ei.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: ed, dismissUntil: eu } = r.metadata;
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.WARNING,
                          children: [
                              (0, i.jsx)(_.PM, {
                                  noticeType: r.type,
                                  onClick: () => {
                                      t3(eu);
                                  },
                              }),
                              es.intl.format(es.t.zxU0Kp, { daysPastDue: ed }),
                              (0, i.jsx)(_.Z_, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      t3(eu), (0, Q.openUserSettings)($.X.SUBSCRIPTIONS_PANEL);
                                  },
                                  children: es.intl.string(es.t.q8rxeS),
                              }),
                          ],
                      });
                  case ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.DANGER,
                          children: [
                              (0, i.jsx)(_.PM, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      t3(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              es.intl.string(es.t.LlZaoX),
                              (0, i.jsx)(_.Z_, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      t3(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, Q.openUserSettings)($.X.SUBSCRIPTIONS_PANEL);
                                  },
                                  children: es.intl.string(es.t["Zpd+Yq"]),
                              }),
                          ],
                      });
                  case ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.WARNING,
                          children: [
                              (0, i.jsx)(_.PM, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      t3(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              es.intl.string(es.t["30YfCr"]),
                              (0, i.jsx)(_.Z_, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      t3(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, Q.openUserSettings)($.X.SUBSCRIPTIONS_PANEL);
                                  },
                                  children: es.intl.string(es.t.U5pKWA),
                              }),
                          ],
                      });
                  case ei.kqX.PREMIUM_MISSING_PAYMENT:
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.WARNING,
                          children: [
                              (0, i.jsx)(_.PM, {
                                  noticeType: ei.kqX.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      t3(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              L === el.PremiumTypes.TIER_1
                                  ? es.intl.formatToPlainString(es.t.b6QUvf, { daysLeft: r.metadata.daysLeft })
                                  : L === el.PremiumTypes.TIER_0
                                    ? es.intl.formatToPlainString(es.t["tURZ/M"], { daysLeft: r.metadata.daysLeft })
                                    : es.intl.formatToPlainString(es.t.AyC74I, { daysLeft: r.metadata.daysLeft }),
                              (0, i.jsx)(_.Z_, {
                                  noticeType: ei.kqX.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      t3(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, Q.openUserSettings)($.X.SUBSCRIPTIONS_PANEL);
                                  },
                                  children:
                                      L === el.PremiumTypes.TIER_1
                                          ? es.intl.string(es.t.lboF5O)
                                          : L === el.PremiumTypes.TIER_0
                                            ? es.intl.string(es.t["4UPwOq"])
                                            : es.intl.string(es.t["P/VvGb"]),
                              }),
                          ],
                      });
                  case ei.kqX.BACK_TO_PREVIOUS_SCREEN:
                      return (0, i.jsx)(tt, {
                          buttonText: r.buttonText ?? es.intl.string(es.t["/g10LC"]),
                          onGoBack: r.callback,
                          onDismiss: () => t3(),
                          showCloseButton: !0,
                      });
                  case ei.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
                      return (0, i.jsx)(eK, { guildId: t, analyticsLocations: s });
                  case ei.kqX.QUARANTINED:
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.DANGER,
                          children: [
                              es.intl.string(es.t.DVFJYf),
                              (0, i.jsx)(_.eC, {
                                  href: t1.q,
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.kvHdFN),
                              }),
                              (0, i.jsx)(T.Anchor, {
                                  href: tQ.A.getArticleURL(ei.MVz.QUARANTINE),
                                  target: "_blank",
                                  className: ea.yw,
                                  children: es.intl.string(es.t.hvVgAZ),
                              }),
                          ],
                      });
                  case ei.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: eE, decisionId: eA } = r.metadata;
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.WARNING,
                          children: [
                              (0, i.jsx)(_.PM, {
                                  noticeType: ei.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != t && (0, eG.wu)(t), t3(eE);
                                  },
                              }),
                              es.intl.string(es.t.B8ruyY),
                              (0, i.jsx)(_.zr, {
                                  onClick: () => {
                                      null != t &&
                                          (0, eG.W5)(t, eA, () => {
                                              t3(eE), (0, eG.wu)(t);
                                          });
                                  },
                                  children: es.intl.string(es.t.oX14El),
                              }),
                              null != t
                                  ? (0, i.jsx)(_.zr, {
                                        onClick: () =>
                                            tn.A.open(t, ei.BEX.GUILD_AUTOMOD, void 0, ei.nd0.AUTOMOD_MENTION_SPAM),
                                        children: es.intl.string(es.t["1R7QIx"]),
                                    })
                                  : null,
                          ],
                      });
                  case ei.kqX.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.DANGER,
                          children: [
                              (0, i.jsx)(_.PM, {
                                  noticeType: ei.kqX.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      r.metadata?.streamKey != null && (0, tg.lk)(r.metadata.streamKey);
                                  },
                              }),
                              es.intl.string(es.t.rOx44m),
                          ],
                      });
                  case ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsxs)(_.$T, {
                          color: _.Hv.BRAND,
                          children: [
                              (0, i.jsx)(_.PM, {
                                  onClick: () => {
                                      t3(r.metadata?.dismissUntil);
                                  },
                                  noticeType: ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                              }),
                              es.intl.string(es.t["0klLS7"]),
                              (0, i.jsx)(_.Z_, {
                                  onClick: () => {
                                      (0, N.openModalLazy)(async () => {
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
                                          t3(r.metadata?.dismissUntil);
                                  },
                                  noticeType: ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: es.intl.string(es.t.e4y2VM),
                              }),
                          ],
                      });
                  case ei.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsx)(tf, {});
                  case ei.kqX.PREMIUM_MARKETING_NAGBAR:
                      return (0, i.jsx)(tS, {});
                  case ei.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR:
                      return (0, i.jsx)(tR, { premiumSubscription: r.metadata.premiumSubscription });
                  case ei.kqX.SYSTEM_SERVICE_WARNING:
                      return (0, i.jsx)(tB, {});
                  default:
                      return null;
              }
          })
        : null;
function ne() {
    let { analyticsLocations: e } = (0, k.Ay)(L.A.NOTICE);
    return (0, i.jsx)(k.f5, { value: e, children: (0, i.jsx)(t4, {}) });
}
