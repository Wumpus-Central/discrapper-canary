n.d(t, { w: () => t3, A: () => t4 });
var i = n(627968),
    l = n(64700),
    r = n(989349),
    s = n.n(r);
if (21552 == n.j) var a = n(936504);
var E = n(299855),
    o = n.n(E),
    c = n(17928);
if (21552 == n.j) var _ = n(462887);
if (21552 == n.j) var u = n(834730);
if (21552 == n.j) var A = n(939249);
if (21552 == n.j) var T = n(417098);
if (21552 == n.j) var d = n(349288);
if (21552 == n.j) var I = n(403581);
if (21552 == n.j) var N = n(192308);
if (21552 == n.j) var R = n(289873);
var S = n(157559),
    O = n(827343),
    C = n(830215),
    P = n(228366);
function D(e) {
    P.h.dispatch({ type: "DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS", skuId: e });
}
var M = n(912851);
let p =
    21552 == n.j
        ? {
              clearRemoteDisconnectVoiceChannelId() {
                  P.h.dispatch({ type: "CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID" });
              },
              clearLastSessionVoiceChannelId() {
                  P.h.dispatch({ type: "CLEAR_LAST_SESSION_VOICE_CHANNEL_ID" });
              },
          }
        : null;
var m = n(730852),
    U = n(785796),
    h = n(55619),
    f = n(246605),
    g = n(271866),
    k = n(736653),
    y = n(77729),
    L = n(573648),
    x = n(793574),
    G = n(688810),
    j = n(587895),
    q = n(315982),
    v = n(235986),
    X = n(626584),
    b = n(554146);
if (21552 == n.j) var B = n(691540);
if (21552 == n.j) var F = n(857250);
if (21552 == n.j) var w = n(97483);
var H = n(803306),
    V = n(975807),
    Y = n(773952),
    W = n(532794),
    K = n(745299),
    $ = n(976860),
    Q = n(780964),
    z = n(718446),
    Z = n(858897),
    J = n(879945),
    ee = n(174459),
    et = n(379848),
    en = n(49999),
    ei = n(652215),
    el = n(788868),
    er = n(355097),
    es = n(375708),
    ea = n(448759);
let eE = (e) => {
    let { dismissibleContent: t, noticeType: l } = e;
    return (0, i.jsx)(et.Ay, {
        contentTypes: [t],
        groupName: en.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: r } = e;
            switch (t) {
                case b.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(T.PM, { onClick: () => r(en.i.UNKNOWN), noticeType: l }),
                            es.intl.string(es.t["+xn1o5"]),
                            (0, i.jsx)("i", { className: ea.c9 }),
                            (0, i.jsx)("i", { className: ea.Vz }),
                            (0, i.jsx)("i", { className: ea.p0 }),
                            (0, i.jsx)(T.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    (0, N.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("74926"),
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
                case b.M.NAGBAR_QUEST_APP_UPSELL:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(T.PM, { onClick: () => r(en.i.UNKNOWN), noticeType: l }),
                            (0, i.jsx)("i", { className: ea.TN }),
                            es.intl.string(es.t.lgwX26),
                            (0, i.jsx)(T.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    (0, V.A)(ei.AMi.META_QUEST), r(en.i.TAKE_ACTION);
                                },
                                children: es.intl.string(es.t["1WjMbC"]),
                            }),
                        ],
                    });
                case b.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.SPOTIFY,
                        children: [
                            (0, i.jsx)(T.PM, { onClick: () => r(en.i.UNKNOWN), noticeType: l }),
                            (0, i.jsx)(J.A, { className: ea.tV }),
                            es.intl.string(es.t["5NUVHH"]),
                            (0, i.jsx)(T.Z_, {
                                onClick: () => (0, Y.A)({ platformType: ei.fg2.SPOTIFY, location: "Notice Bar" }),
                                noticeType: l,
                                children: es.intl.string(es.t.S0W8Z5),
                            }),
                        ],
                    });
                case b.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.PLAYSTATION,
                        children: [
                            (0, i.jsx)(T.PM, { noticeType: l, onClick: () => r(en.i.UNKNOWN) }),
                            (0, i.jsx)("img", {
                                alt: "",
                                className: ea.tV,
                                src: L.A.get(ei.fg2.PLAYSTATION).icon.whiteSVG,
                            }),
                            es.intl.string(es.t.WHWgoY),
                            (0, i.jsx)(T.zr, {
                                onClick: () => (0, Y.A)({ platformType: ei.fg2.PLAYSTATION, location: "Notice Bar" }),
                                children: es.intl.string(es.t.S0W8Z5),
                            }),
                        ],
                    });
                case b.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(T.PM, { onClick: () => r(en.i.USER_DISMISS), noticeType: l }),
                            es.intl.string(es.t["3qKN/h"]),
                            (0, i.jsx)(T.Z_, {
                                onClick: async () => {
                                    r(en.i.TAKE_ACTION);
                                    try {
                                        let { startRegisterWebAuthnCredential: e } = await Promise.resolve().then(
                                                n.bind(n, 917136),
                                            ),
                                            { ticket: t, challenge: l } = await e();
                                        (0, N.openModalLazy)(async () => {
                                            let { RegisterWebAuthnCredentialModal: e } = await Promise.all([
                                                n.e("90217"),
                                                n.e("4736"),
                                                n.e("40114"),
                                                n.e("8508"),
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
                                        (0, B.P0)((0, F.o)(es.intl.string(es.t.xSCvBf), w.Ck.FAILURE));
                                    }
                                },
                                noticeType: l,
                                children: es.intl.string(es.t["ff/XXy"]),
                            }),
                        ],
                    });
                case b.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)("span", { className: ea.lK }),
                            (0, i.jsx)("span", { className: ea.$t, children: es.intl.string(es.t["+urf75"]) }),
                            (0, i.jsx)(T.Z_, {
                                className: ea.CO,
                                noticeType: l,
                                onClick: () => {
                                    ee.default.track(ei.HAw.PREMIUM_PROMOTION_OPENED, {
                                        location_section: ei.JJy.NOTIFICATION_BAR,
                                        location_object: ei.ZSU.BUTTON_CTA,
                                    }),
                                        (0, Z.openUserSettings)(Q.X.NITRO_PANEL);
                                },
                                children: es.intl.string(es.t["8JC5e/"]),
                            }),
                            (0, i.jsx)(T.PM, {
                                onClick: () => {
                                    r(en.i.UNKNOWN), (0, H.lA)(ei.nhx.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: l,
                            }),
                        ],
                    });
                case b.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(K.A, {
                        dismissCurrentNotice: () => r(en.i.UNKNOWN),
                        subscriptionTier: el.pe.TIER_2,
                    });
                case b.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(K.A, {
                        dismissCurrentNotice: () => r(en.i.UNKNOWN),
                        subscriptionTier: el.pe.TIER_0,
                    });
                case b.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(T.PM, { noticeType: l, onClick: () => r(en.i.UNKNOWN) }),
                            es.intl.string(es.t["0KFB2B"]),
                            (0, i.jsx)(T.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    r(en.i.UNKNOWN), (0, Z.openUserSettings)(Q.X.NITRO_PANEL);
                                },
                                children: es.intl.string(es.t.pyYSiO),
                            }),
                        ],
                    });
                case b.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.DANGER,
                        children: [
                            (0, i.jsx)(T.PM, { onClick: () => r(en.i.UNKNOWN), noticeType: l }),
                            es.intl.string(es.t["7490vQ"]),
                            (0, i.jsx)(T.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    (0, $.pX)((0, z.settingsPathToRoute)(er.od.ACCOUNT));
                                },
                                children: es.intl.string(es.t.Vm8akB),
                            }),
                        ],
                    });
                case b.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(T.PM, { onClick: () => r(en.i.UNKNOWN), noticeType: l }),
                            es.intl.string(es.t["O9GI+k"]),
                            (0, i.jsx)(T.Z_, {
                                onClick: () => {
                                    (0, W.A)({
                                        subscriptionTier: el.pe.TIER_2,
                                        analyticsLocations: [x.A.CHECKOUT_RECOVERY_NAGBAR],
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
    ec = n(374200),
    e_ = n(131607);
if (21552 == n.j) var eu = n(597770);
let eA = (e) => {
        let { markAsDismissed: t } = e,
            { analyticsLocations: n } = (0, G.Ay)(),
            l = (0, c.bG)([ec.A], () => {
                let e = ec.A.getMarketingComponentByType(eo.C.GIFT_REMINDER_NAGBAR);
                return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.giftReminderNagbar;
            });
        return null == l
            ? null
            : (0, i.jsxs)(T.$T, {
                  color: T.Hv.PREMIUM_TIER_2,
                  children: [
                      (0, i.jsx)(T.PM, {
                          onClick: () => t(en.i.USER_DISMISS),
                          noticeType: ei.kqX.GIFTING_PROMOTION_REMINDER,
                      }),
                      (0, i.jsx)(eu.o, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "currentColor",
                          className: ea.ez,
                      }),
                      l.body,
                      (0, i.jsx)(T.Z_, {
                          onClick: () => {
                              (0, W.A)({
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
    eT = (e) => {
        let t,
            n,
            { dismissibleContent: l } = e,
            { snowflakeId: r, couldShow: s } =
                ((t = (0, c.bG)([ec.A], () => ec.A.getGiftPromotion()?.id)),
                (n = (0, c.bG)([ec.A], () => null != ec.A.getMarketingComponentByType(eo.C.GIFT_REMINDER_NAGBAR))),
                l === b.M.GIFTING_PROMOTION_REMINDER
                    ? { snowflakeId: t, couldShow: n && null != t }
                    : { snowflakeId: void 0, couldShow: !1 }),
            [a, E] = (0, e_.Cc)(s ? l : null, r ?? "", en.m.NOTICE_BAR, !0);
        return null == a
            ? null
            : a === b.M.GIFTING_PROMOTION_REMINDER
              ? (0, i.jsx)(eA, { markAsDismissed: (e) => E(e) })
              : void 0;
    };
var ed = n(264779),
    eI = n(962644),
    eN = n(287809),
    eR = n(927578),
    eS = n(946319);
let eO = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, ed.Cp)(),
        r = (0, c.bG)([eN.default], () => !eR.Ay.isPremium(eN.default.getCurrentUser())),
        s = l.useCallback(() => {
            ee.default.track(ei.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED),
                (0, Z.openUserSettings)(Q.X.GIFT_PANEL),
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
                  if (t === b.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR)
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: ei.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      eI.Ay.dismissOutboundPromotionNotice(), null !== n && n(en.i.USER_DISMISS);
                                  },
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: eS.P }),
                              r ? es.intl.string(es.t["5JMiOo"]) : es.intl.string(es.t["Pzh+G2"]),
                              (0, i.jsx)(T.Z_, {
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
var eC = n(587054),
    eP = n(487329),
    eD = n(102609),
    eM = n(736056);
if (21552 == n.j) var ep = n(194261);
var em = n(548118),
    eU = n(134413),
    eh = n(221950),
    ef = n(71393),
    eg = n(309010),
    ek = n(967198),
    ey = n(585510),
    eL = n(834409),
    ex = n(903093),
    eG = n(746080),
    ej = n(500928);
function eq(e) {
    let { onDismiss: t } = e,
        r = (0, c.bG)([ek.A], () => ek.A.getGuildId()),
        s = (0, c.bG)([eg.A], () => (null != r ? eg.A.getChannelId(r) : null), [r]),
        a = r ?? null,
        E = (0, c.bG)([ef.A], () => (null != a ? ef.A.getGuild(a) : null), [a]),
        { shouldShowIncidentActions: o, incidentData: _, isUnderLockdown: u } = (0, ey.Li)(a),
        A = (0, eU.fw)(E?.id ?? ei.dJq),
        d = l.useCallback(() => null != E && (0, eh.aZ)(E.id), [E]);
    if (null == E || null == _ || !o) return null;
    let I = (e) => {
            e && A && s !== eG.VV.MEMBER_SAFETY && d()
                ? ee.default.track(ei.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                      notice_type: ei.kqX.GUILD_RAID_NOTIFICATION,
                      guild_id: E.id,
                  })
                : (0, N.openModalLazy)(async () => {
                      let e = { source: eL.Eo.NAGBAR, alertType: (0, ex.$5)(_) },
                          { default: t } = await Promise.all([
                              n.e("5877"),
                              n.e("93918"),
                              n.e("40258"),
                              n.e("73669"),
                              n.e("46313"),
                              n.e("43233"),
                          ]).then(n.bind(n, 671576));
                      return (n) => (0, i.jsx)(t, { ...n, guildId: E.id, analyticsData: e });
                  });
        },
        R = (0, i.jsx)(em.Ay, { className: ej.$f, guild: E, size: em.Ay.Sizes.MINI }),
        S = (0, ex.ql)(_, E.name);
    if (null != (_.dmsDisabledUntil ?? _.invitesDisabledUntil) && u)
        return (0, i.jsxs)(T.$T, {
            className: ej.lm,
            color: T.Hv.NEUTRAL,
            children: [
                (0, i.jsx)(T.PM, { onClick: t, noticeType: ei.kqX.GUILD_RAID_NOTIFICATION }),
                R,
                S,
                (0, i.jsx)(T.zr, {
                    className: ej.hP,
                    onClick: () => I(!1),
                    children: (0, i.jsxs)("div", {
                        className: ej.rx,
                        children: [
                            (0, i.jsx)(ep.X, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)("span", { children: es.intl.string(es.t["c+7oa7"]) }),
                        ],
                    }),
                }),
            ],
        });
    let O = (0, ex.P$)(_)
            ? es.intl.formatToPlainString(es.t.tZTx2E, { guildName: E.name })
            : (0, ex.Qm)(_)
              ? es.intl.formatToPlainString(es.t["1bSmxr"], { guildName: E.name })
              : es.intl.formatToPlainString(es.t.W87xDE, { guildName: E.name }),
        C = A && s === eG.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(T.$T, {
        className: ej.lm,
        color: T.Hv.WARNING,
        children: [
            (0, i.jsx)(T.PM, { onClick: t, noticeType: ei.kqX.GUILD_RAID_NOTIFICATION }),
            R,
            O,
            !C &&
                (0, i.jsx)(T.zr, {
                    className: ej.hP,
                    onClick: () => I(!0),
                    children: (0, i.jsx)("div", {
                        className: ej.rx,
                        children: (0, i.jsx)("span", { children: es.intl.string(es.t.zDJDhr) }),
                    }),
                }),
        ],
    });
}
var ev = n(995786),
    eX = n(206835),
    eb = n(495544),
    eB = n(696451),
    eF = n(229527),
    ew = n(81400),
    eH = n(340837);
function eV(e) {
    let { guildId: t, analyticsLocations: n } = e,
        [l, r] = (0, ew.j8)({ guildId: t, analyticsLocations: n }),
        s = r ? es.intl.string(es.t["6ndMcq"]) : es.intl.string(es.t["0eiu6J"]),
        a = r ? es.intl.string(es.t.S09nw4) : es.intl.string(es.t.tEttXd);
    return (0, i.jsxs)(T.$T, { color: T.Hv.DANGER, children: [s, (0, i.jsx)(T.zr, { onClick: l, children: a })] });
}
function eY() {
    let e = (0, eX.A)({ scrollPosition: er._F.GUILD_TAG });
    return (0, i.jsxs)(T.$T, {
        color: T.Hv.DANGER,
        children: [
            es.intl.string(es.t.Zqlecb),
            (0, i.jsx)(T.zr, { onClick: e, children: es.intl.string(es.t.SJehVW) }),
        ],
    });
}
function eW(e) {
    let { analyticsLocations: t, ...n } = e,
        { analyticsLocations: l } = (0, G.Ay)(t, x.A.AUTOMOD_NAGBAR_NOTICE),
        r = (0, c.bG)([eb.default, eB.Ay], () => {
            if (null == n.guildId) return new Set();
            let e = eb.default.getId();
            return (0, eF.wj)(eB.Ay.getMember(n.guildId, e));
        }, [n.guildId]);
    return r.has(eH.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || r.has(eH.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, i.jsx)(eV, { ...n, analyticsLocations: l })
        : r.has(eH.D.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, i.jsx)(eY, {})
          : (0, i.jsx)(eV, { ...n, analyticsLocations: l });
}
var eK = n(202384),
    e$ = n(51758);
n(321073);
var eQ = n(503698),
    ez = n.n(eQ);
if (21552 == n.j) var eZ = n(873263);
if (21552 == n.j) var eJ = n(314116);
if (21552 == n.j) var e0 = n(821609);
var e1 = n(334465),
    e2 = n(624458),
    e5 = n(513461),
    e6 = n(709977),
    e7 = n(212455),
    e9 = n(182430),
    e3 = n(580537);
let e8 =
    21552 == n.j
        ? () => {
              let e = (0, c.bG)([ek.A], () => ek.A.getGuildId(), []),
                  t = (0, c.bG)([ef.A], () => ef.A.getGuild(e), [e]),
                  l = (0, c.bG)([e7.A], () => (null != e ? e7.A.getRequest(e) : null), [e]),
                  r = (0, eZ.zy)(),
                  s = (0, e1.B)(r.pathname, ei.BVt.CHANNEL(t?.id, eG.VV.GUILD_ONBOARDING))?.isExact === !0;
              if (null == t || !(0, e6.Qd)(t) || s) return null;
              let a = l?.applicationStatus ?? e5.B5.STARTED,
                  E = null,
                  o = null,
                  _ = null,
                  A = [e9.lm, e3.lm];
              switch (a) {
                  case e5.B5.SUBMITTED:
                      (E = es.intl.string(es.t["5iLvSx"])),
                          (o = es.intl.string(es.t.mqtdmQ)),
                          (_ = () => {
                              (0, eJ.A)({
                                  title: es.intl.string(es.t.aIz1oV),
                                  subtitle: es.intl.string(es.t["13tjTU"]),
                                  variant: "primary",
                                  confirmText: es.intl.string(es.t["cY+Oob"]),
                                  onConfirm: () => e2.A.removeGuildJoinRequest(t.id),
                              });
                          });
                      break;
                  case e5.B5.REJECTED:
                      (E = es.intl.string(es.t.lk30cY)),
                          (o = es.intl.string(es.t["8RrsHr"])),
                          (_ = () => {
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
                      (E = es.intl.string(es.t.G5YKXP)),
                          (o = es.intl.string(es.t["r8/DT+"])),
                          (_ = () => {
                              (0, eK.Ze)(t.id);
                          });
              }
              return (0, i.jsxs)("div", {
                  className: ez()(...A),
                  children: [
                      (0, i.jsx)(u.E, { className: e9.wx, variant: "text-sm/normal", children: E }),
                      (0, i.jsx)(e0.$, { variant: "overlay-primary", size: "sm", onClick: _, text: o }),
                  ],
              });
          }
        : null;
if (21552 == n.j) var e4 = n(477155);
var te = n(22877);
function tt(e) {
    let { buttonText: t, onGoBack: n, onDismiss: l, showCloseButton: r } = e;
    return (0, i.jsxs)(T.$T, {
        className: te.eR,
        children: [
            r && (0, i.jsx)(T.PM, { onClick: l, className: te.b, noticeType: ei.kqX.BACK_TO_PREVIOUS_SCREEN }),
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
let tE =
    21552 == n.j
        ? () => {
              let e = (0, c.bG)([ek.A], () => ek.A.getGuildId(), []),
                  t = (0, c.bG)([ef.A], () => ef.A.getGuild(e), [e]),
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
                  className: ez()(ta.lm, e3.lm),
                  children: [
                      (0, i.jsxs)(tl.$n, {
                          look: tl.$n.Looks.OUTLINED,
                          color: tl.$n.Colors.WHITE,
                          size: tl.$n.Sizes.NONE,
                          className: ez()(ta.x6, ta.aX),
                          innerClassName: ta.gb,
                          onClick: () => {
                              (0, $.JK)().goBack();
                          },
                          children: [
                              (0, i.jsx)(e4.r, { size: "xs", color: "currentColor", className: ta.UE }),
                              es.intl.string(es.t["13/7kX"]),
                          ],
                      }),
                      (0, i.jsx)(u.E, {
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
    tc = n(74848),
    t_ = n(234419);
if (21552 == n.j) var tu = n(661531);
var tA = n(281678),
    tT = n(635995),
    td = n(88001),
    tI = n(466919),
    tN = n(375043);
function tR(e) {
    let { premiumSubscription: t } = e,
        r = t?.id,
        s = l.useCallback(() => {
            null != r && (0, tA.qr)(b.M.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR, r, { dismissAction: en.i.USER_DISMISS });
        }, [r]),
        a = l.useCallback(() => {
            s(),
                ee.default.track(ei.HAw.APP_NOTICE_CLOSED, {
                    notice_type: ei.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
                });
        }, [s]),
        E = l.useCallback(() => {
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
    return (0, i.jsxs)(tT.T0, {
        onClick: a,
        className: tN.A,
        children: [
            (0, i.jsx)(I.t, { color: tu.A.colors.ICON_STRONG }),
            (0, i.jsx)(tT.In, {
                children: es.intl.format(tI.default.fFt9bd, { premiumGroupProductName: (0, td.DP)() }),
            }),
            (0, i.jsx)(e0.$, {
                onClick: E,
                text: es.intl.string(tI.default["5fZHp3"]),
                size: "sm",
                variant: "overlay-primary",
            }),
        ],
    });
}
var tS = n(549996),
    tO = n(498470);
function tC() {
    let e = (0, tS.c)(eo.C.NAGBAR),
        t = e?.properties.properties.oneofKind === "nagbar" ? e.properties.properties.nagbar : null,
        n = e?.promotionId,
        r = l.useCallback(() => {
            null != n &&
                (0, tA.qr)(b.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, n, { dismissAction: en.i.USER_DISMISS });
        }, [n]),
        s = l.useCallback(() => {
            ee.default.track(ei.HAw.APP_NOTICE_CLOSED, { notice_type: ei.kqX.PREMIUM_MARKETING_NAGBAR }), r();
        }, [r]);
    if (null == t) return null;
    let a = (0, tO.h)({ buttonAction: t.ctaAction, deeplinkSection: t.deeplinkSection, onClose: r });
    return (0, i.jsxs)(tT.T0, {
        onClick: s,
        children: [
            (0, i.jsx)(tT.In, { children: t.body }),
            "" !== t.ctaLabel &&
                (0, i.jsx)(tT.fY, {
                    text: t.ctaLabel,
                    onClick: () => {
                        ee.default.track(ei.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                            notice_type: ei.kqX.PREMIUM_MARKETING_NAGBAR,
                        }),
                            a();
                    },
                }),
        ],
    });
}
var tP = n(378974),
    tD = n(340124),
    tM = n(14594);
function tp() {
    let [e, t] = (0, e_.Wl)(b.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: tM.aH });
    return e !== b.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK
        ? null
        : (0, i.jsxs)(T.$T, {
              color: T.Hv.BRAND,
              children: [
                  (0, i.jsx)(T.PM, { onClick: () => t(en.i.DISMISS), noticeType: ei.kqX.IGNORE_USER_FEEDBACK_NAGBAR }),
                  es.intl.string(es.t.XkeW9N),
                  (0, i.jsx)(T.Z_, {
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
if (21552 == n.j) var tm = n(825484);
var tU = n(139716),
    th = n(847599),
    tf = n(734057),
    tg = n(849736),
    tk = n(354583),
    ty = n(366098),
    tL = n(418208),
    tx = n(992262);
function tG(e) {
    if (!e && (0, tL.Cf)())
        return void tU.A.showAgeVerificationGetStartedModal({ entryPoint: th.q1.STAGE_CHANNEL_RAISE_HAND });
    let t = eg.A.getVoiceChannelId();
    if (null == t) return;
    let n = tf.A.getChannel(t);
    null != n && (0, tg.e7)(n, e);
}
function tj(e) {
    let { channelId: t } = e,
        n = (0, ty.D3)(t) ?? 0,
        l = (0, ty.Xk)(t) ?? 0;
    return n > 0 && l > 0
        ? (0, i.jsx)("div", {
              className: tx.Z5,
              children: (0, i.jsx)("div", { className: ez()(tx.qQ, tx.lN), children: es.intl.string(es.t.xlJRfv) }),
          })
        : n > 0
          ? (0, i.jsx)("div", {
                className: tx.Z5,
                children: (0, i.jsx)("div", { className: ez()(tx.qQ, tx.lN), children: es.intl.string(es.t.WYad9Z) }),
            })
          : l > 0
            ? (0, i.jsx)("div", {
                  className: tx.Z5,
                  children: (0, i.jsx)("div", { className: ez()(tx.qQ, tx.lN), children: es.intl.string(es.t.eHq2OF) }),
              })
            : null;
}
function tq() {
    let e = (0, tk.A)();
    return null == e
        ? null
        : (0, i.jsxs)(T.$T, {
              className: tx.kL,
              color: T.Hv.DEFAULT,
              children: [
                  es.intl.string(es.t.Ul1RJQ),
                  (0, i.jsx)(tj, { channelId: e.id }),
                  (0, i.jsxs)(tm.e, {
                      size: "sm",
                      className: tx.GC,
                      children: [
                          (0, i.jsx)(e0.$, {
                              variant: "overlay-primary",
                              text: es.intl.string(es.t.MpO0px),
                              onClick: () => tG(!1),
                          }),
                          (0, i.jsx)(e0.$, {
                              variant: "secondary",
                              onClick: () => tG(!0),
                              text: es.intl.string(es.t["1YDv7a"]),
                          }),
                      ],
                  }),
              ],
          });
}
var tv = n(328153),
    tX = n(935671);
function tb() {
    (0, tX.sL)("nagbar");
}
function tB() {
    return null == (0, c.bG)([tv.Ay], () => tv.Ay.getVisibleGame())
        ? null
        : (0, i.jsxs)(T.$T, {
              color: T.Hv.DANGER,
              children: [
                  (0, i.jsx)(T.PM, { noticeType: ei.kqX.SYSTEM_SERVICE_WARNING, onClick: () => t3() }),
                  es.intl.string(es.t["5rPt+j"]),
                  (0, i.jsx)(T.Z_, {
                      onClick: tb,
                      noticeType: ei.kqX.SYSTEM_SERVICE_WARNING,
                      children: es.intl.string(es.t["1iI46O"]),
                  }),
              ],
          });
}
function tF() {
    return (0, i.jsxs)(T.$T, {
        color: T.Hv.DANGER,
        children: [
            es.intl.string(es.t.lQiCJ6),
            (0, i.jsx)(T.Z_, {
                noticeType: ei.kqX.PTT_NO_KEYBIND_WARNING,
                onClick: function () {
                    (0, Z.openUserSettings)(Q.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING);
                },
                children: es.intl.string(es.t["UgQN+9"]),
            }),
        ],
    });
}
if (21552 == n.j) var tw = n(189213);
if (21552 == n.j) var tH = n(150934);
function tV(e) {
    let [t, n] = l.useState(!1);
    return (0, i.jsx)(tw.Modal, {
        size: "md",
        title: es.intl.string(es.t["zQ1+Jw"]),
        subtitle: es.intl.string(es.t.K1gWXn),
        actions: [
            {
                text: es.intl.string(es.t.BddRzS),
                onClick: () => {
                    t && O.A.setSilenceWarning(!1), e.onClose();
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
var tY = n(51760),
    tW = n(763827),
    tK = n(67480),
    t$ = n(147964),
    tQ = n(487490),
    tz = n(975571),
    tZ = n(723702),
    tJ = n(325278),
    t0 = n(831502),
    t1 = n(731854);
let t2 = new X.A("Notice"),
    t5 = (e) => {
        let { error: t, allowClick: n = !1 } = e,
            l = (0, eP.B1)(t)?.errorCode,
            r = es.intl.formatToPlainString(es.t.ejOT95, { errorCode: l }),
            s = (0, i.jsx)(u.E, {
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
                  onClick: () => open(tz.A.getArticleURL(ei.MVz.AV_ERROR_CODES)),
                  children: s,
              })
            : s;
    },
    t6 = (e) => {
        let { noticeType: t } = e;
        return (0, i.jsxs)(T.$T, {
            color: T.Hv.DANGER,
            children: [
                (0, i.jsx)(T.PM, {
                    noticeType: t,
                    onClick: () => {
                        t3();
                    },
                }),
                es.intl.string(es.t.o3zuYz),
                (0, i.jsx)(t5, { error: eP.iy.NO_INPUT_DEVICES }),
                (0, i.jsx)(T.eC, {
                    href: tz.A.getArticleURL(ei.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: es.intl.string(es.t.RYKKox),
                }),
            ],
        });
    };
function t7(e) {
    return (0, tZ.isWindows)() && o().satisfies(y.A?.os.release, tJ.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function t9(e) {
    let t,
        n,
        { noticeType: l } = e,
        r = (0, tc.x5)(t1.oh.AUDIO_INPUT),
        s = r?.guid ?? "",
        { inputDeviceOSMuted: a, inputDeviceOSVolume: E } = (0, c.cf)([tY.Ay], () => ({
            inputDeviceOSMuted: tY.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: tY.Ay.getInputDeviceOSVolume(),
        })),
        o = !1;
    return (
        !0 === a
            ? ((t = es.intl.string(es.t.ppW3ri)),
              (n = (0, i.jsx)(T.eC, { href: t7(s), noticeType: l, children: es.intl.string(es.t.QghSIq) })))
            : 0 === E
              ? ((t = es.intl.string(es.t.j4gGA4)),
                (n = (0, i.jsx)(T.eC, { href: t7(s), noticeType: l, children: es.intl.string(es.t.QghSIq) })))
              : tY.Ay.supports(t1.O5.LOOPBACK)
                ? ((t = es.intl.string(es.t.dNAJ18)),
                  (o = !0),
                  (n = (0, i.jsx)(T.zr, {
                      onClick: () => {
                          (0, Z.openUserSettings)(Q.X.VOICE_AND_VIDEO_PANEL);
                      },
                      children: es.intl.string(es.t.I6YlB4),
                  })))
                : ((t = es.intl.string(es.t.nCO9bI)),
                  (n = (0, i.jsx)(T.eC, {
                      href: tz.A.getArticleURL(ei.MVz.NO_INPUT_DETECTED),
                      noticeType: l,
                      children: es.intl.string(es.t.RYKKox),
                  }))),
        (0, i.jsxs)(T.$T, {
            color: T.Hv.DANGER,
            children: [
                (0, i.jsx)(T.PM, {
                    noticeType: l,
                    onClick: () => {
                        t3(), (0, N.openModal)((e) => (0, i.jsx)(tV, { ...e }));
                    },
                }),
                t,
                (0, i.jsx)(t5, { allowClick: o, error: eP.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function t3(e) {
    M.A.dismiss(null != e ? { untilAtLeast: s()(e) } : void 0);
}
let t8 =
    21552 == n.j
        ? l.memo(function () {
              let e = (0, c.bG)([eN.default], () => eN.default.getCurrentUser()),
                  t = (0, c.bG)([ek.A], () => ek.A.getGuildId()),
                  r = (0, c.bG)([tQ.Ay], () => tQ.Ay.getNotice()),
                  { analyticsLocations: s } = (0, G.Ay)(),
                  E = (0, k.Ay)(),
                  o = (0, e$.H)(t),
                  u = (0, t_.V)();
              if (
                  (l.useEffect(() => {
                      if (r?.type != null) {
                          let e;
                          if (
                              null == u &&
                              (r.type === ei.kqX.PREMIUM_TIER_2_TRIAL_ENDING ||
                                  r.type === ei.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
                          )
                              return;
                          let n = {};
                          null != t && (n.guild_id = t),
                              u?.trial_id != null && (n.trial_id = u.trial_id),
                              (e = { notice_type: r.type, ...n }),
                              ee.default.track(ei.HAw.APP_NOTICE_VIEWED, e);
                      }
                  }, [r?.type, t, u]),
                  l.useEffect(() => {
                      if (null != r && r.type === ei.kqX.SURVEY && null != r.metadata) {
                          let { metadata: e } = r,
                              t = eM.A.getUserExperimentDescriptor(e.id);
                          null != t && (0, eD.LQ)(e.id, t),
                              (async () => {
                                  r.metadata?.id != null && (await (0, f.oX)(r.metadata?.id));
                              })();
                      }
                  }, [r]),
                  null == r)
              )
                  return null;
              let A = null != r.type ? tQ.Re[r.type] : null,
                  P = null != r.type ? tQ.rV[r.type] : null,
                  M = null != r.type ? tQ.f7[r.type] : null,
                  y = tQ.pe[r.type];
              if (null != A) return (0, i.jsx)(eC.$, { dismissibleContent: A, noticeType: r.type });
              if (null != P) return (0, i.jsx)(eT, { dismissibleContent: P });
              if (null != M) return (0, i.jsx)(eO, { dismissibleContent: M });
              if (null != y) return (0, i.jsx)(eE, { dismissibleContent: y, noticeType: r.type });
              let x = r.metadata?.premiumType;
              switch (r.type) {
                  case ei.kqX.PTT_NO_KEYBIND_WARNING:
                      return (0, i.jsx)(tF, {});
                  case ei.kqX.LURKING_GUILD:
                      return (0, i.jsx)(tE, {});
                  case ei.kqX.PENDING_MEMBER:
                      return (0, i.jsx)(e8, {});
                  case ei.kqX.INVITED_TO_SPEAK:
                      return (0, i.jsx)(tq, {});
                  case ei.kqX.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: X } = r.metadata;
                      return (0, i.jsx)(eq, { onDismiss: () => t3(X) });
                  case ei.kqX.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: b } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => t3(b), noticeType: r.type }),
                              es.intl.format(es.t["08KQ1P"], {
                                  helpCenterLink: tz.A.getArticleURL(ei.MVz.WIN32_DEPRECATE),
                              }),
                          ],
                      });
                  case ei.kqX.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: B } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => t3(B), noticeType: r.type }),
                              es.intl.format(es.t["8Je+dX"], {
                                  helpCenterLink: tz.A.getArticleURL(ei.MVz.WIN7_8_DEPRECATE),
                              }),
                          ],
                      });
                  case ei.kqX.WIN_COMPAT_MODE_MESSAGE:
                      let { dismissUntil: F } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => t3(F), noticeType: r.type }),
                              es.intl.string(es.t["9DJgOg"]),
                          ],
                      });
                  case ei.kqX.MACOS_19_DEPRECATED_MESSAGE:
                      let { dismissUntil: w } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => t3(w), noticeType: r.type }),
                              es.intl.format(es.t.q8VPLo, {
                                  helpCenterLink: tz.A.getArticleURL(ei.MVz.MACOS_19_DEPRECATE),
                              }),
                          ],
                      });
                  case ei.kqX.E2EE_UPDATE_REQUIRED:
                      let { dismissUntil: H } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => t3(H), noticeType: r.type }),
                              es.intl.format(tZ.isPlatformEmbedded ? es.t.J232TI : es.t.vceuiL, {
                                  helpCenterLink: tz.A.getArticleURL(ei.MVz.END_TO_END_ENCRYPTION),
                              }),
                          ],
                      });
                  case ei.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => t3(), noticeType: r.type }),
                              es.intl.string(es.t.iW0fcQ),
                              (0, i.jsx)(T.eC, {
                                  href: tz.A.getArticleURL(ei.MVz.WINDOWS_MEDIA_PACK),
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.LQG5j6),
                              }),
                          ],
                      });
                  case ei.kqX.GENERIC:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => t3(), noticeType: r.type }),
                              r.message,
                              null != r.buttonText
                                  ? (0, i.jsx)(T.Z_, {
                                        onClick: r.callback,
                                        noticeType: r.type,
                                        children: r.buttonText,
                                    })
                                  : null,
                          ],
                      });
                  case ei.kqX.LAUNCH_GAME_FAILURE:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => t3(), noticeType: r.type }),
                              r.message,
                              null != r.buttonText
                                  ? (0, i.jsx)(T.Z_, {
                                        onClick: r.callback,
                                        noticeType: r.type,
                                        children: r.buttonText,
                                    })
                                  : null,
                          ],
                      });
                  case ei.kqX.VOICE_DISABLED:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => {
                                      p.clearRemoteDisconnectVoiceChannelId(), t3();
                                  },
                                  noticeType: r.type,
                              }),
                              es.intl.string(es.t.bOQ3jV),
                              (0, i.jsx)(T.Z_, {
                                  onClick: () => {
                                      let e = tW.A.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != tf.A.getChannel(e) && m.default.selectVoiceChannel(e);
                                  },
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.vD60Pv),
                              }),
                          ],
                      });
                  case ei.kqX.VOICE_CONNECTED_LAST_SESSION:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => {
                                      p.clearLastSessionVoiceChannelId(), t3();
                                  },
                                  noticeType: r.type,
                              }),
                              es.intl.string(es.t.jY2lUA),
                              (0, i.jsx)(T.Z_, {
                                  onClick: () => {
                                      let e = tW.A.getLastSessionVoiceChannelId();
                                      null != e && null != tf.A.getChannel(e) && m.default.selectVoiceChannel(e);
                                  },
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.vD60Pv),
                              }),
                          ],
                      });
                  case ei.kqX.SPOTIFY_AUTO_PAUSED:
                      let V = L.A.get(ei.fg2.SPOTIFY);
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => t3(), noticeType: r.type }),
                              (0, i.jsx)("img", {
                                  alt: "",
                                  className: ea.tV,
                                  src: (0, _.q)(E) ? V.icon.darkSVG : V.icon.whiteSVG,
                              }),
                              es.intl.string(es.t.D8Cp76),
                              (0, i.jsx)(T.Z_, {
                                  onClick: () => (0, Z.openUserSettings)(Q.X.VOICE_AND_VIDEO_PANEL),
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.NiTd0e),
                              }),
                              (0, i.jsx)(d.Anchor, {
                                  className: ea.uD,
                                  href: tz.A.getArticleURL(ei.MVz.SPOTIFY_AUTO_PAUSED),
                                  target: "_blank",
                                  children: es.intl.string(es.t.CiqAIU),
                              }),
                          ],
                      });
                  case ei.kqX.UNCLAIMED_ACCOUNT:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DEFAULT,
                          children: [
                              es.intl.string(es.t["f+Zaol"]),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: r.type,
                                  onClick: () => (o && null != t ? (0, eK.Ze)(t) : q.R()),
                                  children: es.intl.string(es.t.fiNVin),
                              }),
                          ],
                      });
                  case ei.kqX.UNVERIFIED_ACCOUNT:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DEFAULT,
                          children: [
                              es.intl.string(es.t["3sWbf3"]),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: r.type,
                                  onClick: () => {
                                      C.A.verifyResend(),
                                          S.A.show({
                                              title: es.intl.string(es.t.LykQYk),
                                              body: es.intl.format(es.t.azKEPy, { email: e?.email }),
                                              cancelText: es.intl.string(es.t.Vm8akB),
                                              onCancel: q.R,
                                          });
                                  },
                                  children: es.intl.string(es.t.WnX4J2),
                              }),
                          ],
                      });
                  case ei.kqX.SCHEDULED_MAINTENANCE:
                      if (null == r.metadata) return null;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => U.A.ackScheduledMaintenance(), noticeType: r.type }),
                              es.intl.format(es.t["yb96S+"], r.metadata),
                              (0, i.jsx)(T.eC, {
                                  href: `${ei.qF7.STATUS}/incidents/${r.metadata.id}`,
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.hvVgAZ),
                              }),
                          ],
                      });
                  case ei.kqX.NO_INPUT_DETECTED:
                      return (0, i.jsx)(t9, { noticeType: r.type });
                  case ei.kqX.NO_INPUT_DEVICES_DETECTED:
                      return (0, i.jsx)(t6, { noticeType: r.type });
                  case ei.kqX.HARDWARE_MUTE:
                      if (null != r.metadata) {
                          let { vendor: e, model: t } = r.metadata;
                          return (0, i.jsxs)(T.$T, {
                              color: T.Hv.DANGER,
                              children: [
                                  es.intl.format(es.t.qoDex7, { vendorName: e.name, modelName: t.name }),
                                  (0, i.jsx)(T.PM, {
                                      noticeType: r.type,
                                      onClick: () => {
                                          O.A.setEnableHardwareMuteNotice(!1), t3();
                                      },
                                  }),
                                  (0, i.jsx)(T.eC, {
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
                          return (0, i.jsxs)(T.$T, {
                              color: T.Hv.INFO,
                              children: [
                                  es.intl.format(es.t.QMw8Fd, {}),
                                  (0, i.jsx)(T.PM, {
                                      noticeType: r.type,
                                      onClick: () => {
                                          O.A.setEnableHardwareMuteNotice(!1), t3();
                                      },
                                  }),
                              ],
                          });
                      return null;
                  case ei.kqX.STREAMER_MODE:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.STREAMER_MODE,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => t3(), noticeType: ei.kqX.STREAMER_MODE }),
                              es.intl.string(es.t.iEgBXp),
                              (0, i.jsx)(T.Z_, {
                                  onClick: () => h.A.setEnabled(!1),
                                  noticeType: ei.kqX.STREAMER_MODE,
                                  children: es.intl.string(es.t.R9GHya),
                              }),
                          ],
                      });
                  case ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == r.metadata) return null;
                      let { skuId: Y, applicationId: K } = r.metadata,
                          $ = tK.A.get(Y),
                          z = j.A.getApplication(K);
                      if (null == $ || null == z) return null;
                      let J = { page: ei.liQ.IN_APP };
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => D($.id),
                                  noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: ea.PC }),
                              es.intl.format(es.t["g3MU/+"], { applicationName: z.name, skuName: $.name }),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: async () => {
                                      try {
                                          let { openIAPPurchaseModal: e } = await Promise.all([
                                              n.e("6305"),
                                              n.e("69273"),
                                              n.e("19051"),
                                              n.e("77083"),
                                              n.e("63009"),
                                              n.e("16933"),
                                              n.e("7293"),
                                              n.e("31483"),
                                              n.e("45650"),
                                              n.e("76007"),
                                              n.e("93918"),
                                              n.e("93880"),
                                              n.e("29946"),
                                              n.e("83721"),
                                              n.e("22995"),
                                              n.e("79705"),
                                              n.e("23924"),
                                              n.e("71470"),
                                              n.e("28367"),
                                              n.e("10471"),
                                              n.e("35429"),
                                              n.e("63232"),
                                              n.e("11301"),
                                              n.e("60235"),
                                              n.e("64827"),
                                              n.e("96643"),
                                              n.e("94493"),
                                              n.e("92789"),
                                              n.e("47834"),
                                              n.e("30938"),
                                              n.e("19551"),
                                              n.e("84569"),
                                              n.e("74016"),
                                              n.e("50689"),
                                              n.e("7743"),
                                              n.e("45959"),
                                              n.e("60658"),
                                              n.e("18573"),
                                              n.e("55936"),
                                              n.e("31988"),
                                              n.e("39667"),
                                              n.e("5812"),
                                              n.e("26073"),
                                              n.e("34303"),
                                              n.e("28866"),
                                              n.e("1368"),
                                              n.e("8304"),
                                              n.e("58038"),
                                              n.e("93159"),
                                              n.e("37506"),
                                              n.e("94723"),
                                              n.e("62931"),
                                              n.e("81987"),
                                              n.e("50417"),
                                              n.e("91737"),
                                              n.e("6174"),
                                              n.e("91146"),
                                              n.e("46070"),
                                              n.e("63645"),
                                              n.e("5636"),
                                              n.e("36487"),
                                              n.e("834"),
                                              n.e("97659"),
                                              n.e("48786"),
                                              n.e("62075"),
                                          ]).then(n.bind(n, 4630));
                                          await e({
                                              applicationId: z.id,
                                              skuId: $.id,
                                              openPremiumPaymentModal: () => {
                                                  (0, W.A)({
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
                                              D($.id);
                                      } catch (e) {
                                          null != e && t2.error("Failed to open off-platform premium perk modal", e);
                                      }
                                  },
                                  children: es.intl.string(es.t.KEwPYx),
                              }),
                          ],
                      });
                  case ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == r.metadata) return null;
                      let { skuId: e, applicationId: t } = r.metadata,
                          n = tK.A.get(e),
                          l = j.A.getApplication(t);
                      if (null == n || null == l) return null;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => t3(),
                                  noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: ea.PC }),
                              es.intl.format(es.t.LquIKC, { applicationName: l.name, skuName: n.name }),
                              (0, i.jsx)(T.zr, {
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
                      let { key: t, prompt: n, cta: l, url: s, embedded: a, id: E } = e;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.CUSTOM,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: ei.kqX.SURVEY,
                                  onClick: () => {
                                      (0, f.pX)(t, !0);
                                  },
                              }),
                              n,
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.SURVEY,
                                  onClick: () => {
                                      a ? (0, tP.K)(E) : window.open(s, "_blank"), (0, f.pX)(t, !1);
                                  },
                                  children: l,
                              }),
                          ],
                      });
                  }
                  case ei.kqX.CORRUPT_INSTALLATION:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              es.intl.string(es.t["ugxmk/"]),
                              (0, i.jsx)(T.eC, {
                                  href: tz.A.getArticleURL(ei.MVz.CORRUPT_INSTALLATION),
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: es.intl.string(es.t["6ik4Xk"]),
                              }),
                          ],
                      });
                  case ei.kqX.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => t3(), noticeType: ei.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                              es.intl.string(es.t.wVjKGi),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.VIDEO_UNSUPPORTED_BROWSER,
                                  onClick: () => {
                                      (0, N.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("74926"),
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
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => t3(), noticeType: ei.kqX.DISPATCH_ERROR }),
                              et?.displayMessage,
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, N.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([n.e("13520"), n.e("88014")]).then(
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
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => t3(),
                                  noticeType: ei.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                              }),
                              (0, i.jsxs)(v.A, {
                                  justify: v.A.Justify.CENTER,
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
                          return (0, i.jsx)(T.$T, {
                              color: T.Hv.WARNING,
                              children: (0, i.jsxs)(v.A, {
                                  justify: v.A.Justify.CENTER,
                                  align: v.A.Align.CENTER,
                                  children: [
                                      (0, i.jsx)("div", {
                                          children: es.intl.format(es.t["1qxVe4"], {
                                              applicationName: r.metadata.applicationName,
                                          }),
                                      }),
                                      (0, i.jsx)(T.PM, { onClick: g.cL, noticeType: ei.kqX.APPLICATION_TEST_MODE }),
                                  ],
                              }),
                          });
                      return (0, i.jsx)(T.$T, {
                          color: T.Hv.WARNING,
                          children: (0, i.jsxs)(v.A, {
                              justify: v.A.Justify.CENTER,
                              align: v.A.Align.CENTER,
                              children: [
                                  (0, i.jsx)("div", {
                                      children: es.intl.format(es.t.Fv5HrE, {
                                          applicationName: r.metadata.applicationName,
                                      }),
                                  }),
                                  (0, i.jsx)(T.PM, { onClick: g.cL, noticeType: ei.kqX.APPLICATION_TEST_MODE }),
                              ],
                          }),
                      });
                  case ei.kqX.VIEWING_ROLES:
                      return (0, i.jsx)(ti.A, {});
                  case ei.kqX.PREMIUM_UNCANCEL:
                      return (0, i.jsxs)(T.$T, {
                          color:
                              x === el.PremiumTypes.TIER_1
                                  ? T.Hv.PREMIUM_TIER_1
                                  : x === el.PremiumTypes.TIER_0
                                    ? T.Hv.PREMIUM_TIER_0
                                    : T.Hv.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: ei.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      t3(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: ea.PC }),
                              x === el.PremiumTypes.TIER_1
                                  ? es.intl.formatToPlainString(es.t.fXv4wm, { daysLeft: r.metadata.daysLeft })
                                  : x === el.PremiumTypes.TIER_0
                                    ? es.intl.formatToPlainString(es.t.ZOHZMr, { daysLeft: r.metadata.daysLeft })
                                    : es.intl.formatToPlainString(es.t.outyHh, { daysLeft: r.metadata.daysLeft }),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      t3(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, N.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("4469"),
                                                  n.e("77083"),
                                                  n.e("63009"),
                                                  n.e("93880"),
                                                  n.e("31483"),
                                                  n.e("23309"),
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
                                                      premiumType: x,
                                                      analyticsSource: "Nag Bar",
                                                      premiumSubscription: r.metadata.premiumSubscription,
                                                  });
                                          });
                                  },
                                  children:
                                      x === el.PremiumTypes.TIER_1
                                          ? es.intl.string(es.t.BkbUPM)
                                          : x === el.PremiumTypes.TIER_0
                                            ? es.intl.string(es.t.Px978X)
                                            : es.intl.string(es.t.LW5tCE),
                              }),
                          ],
                      });
                  case ei.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: ec, dismissUntil: e_ } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: r.type,
                                  onClick: () => {
                                      t3(e_);
                                  },
                              }),
                              es.intl.format(es.t.zxU0Kp, { daysPastDue: ec }),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      t3(e_), (0, Z.openUserSettings)(Q.X.SUBSCRIPTIONS_PANEL);
                                  },
                                  children: es.intl.string(es.t.q8rxeS),
                              }),
                          ],
                      });
                  case ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      t3(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              es.intl.string(es.t.LlZaoX),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      t3(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, Z.openUserSettings)(Q.X.SUBSCRIPTIONS_PANEL);
                                  },
                                  children: es.intl.string(es.t["Zpd+Yq"]),
                              }),
                          ],
                      });
                  case ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      t3(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              es.intl.string(es.t["30YfCr"]),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      t3(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, Z.openUserSettings)(Q.X.SUBSCRIPTIONS_PANEL);
                                  },
                                  children: es.intl.string(es.t.U5pKWA),
                              }),
                          ],
                      });
                  case ei.kqX.PREMIUM_MISSING_PAYMENT:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: ei.kqX.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      t3(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              x === el.PremiumTypes.TIER_1
                                  ? es.intl.formatToPlainString(es.t.b6QUvf, { daysLeft: r.metadata.daysLeft })
                                  : x === el.PremiumTypes.TIER_0
                                    ? es.intl.formatToPlainString(es.t["tURZ/M"], { daysLeft: r.metadata.daysLeft })
                                    : es.intl.formatToPlainString(es.t.AyC74I, { daysLeft: r.metadata.daysLeft }),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      t3(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, Z.openUserSettings)(Q.X.SUBSCRIPTIONS_PANEL);
                                  },
                                  children:
                                      x === el.PremiumTypes.TIER_1
                                          ? es.intl.string(es.t.lboF5O)
                                          : x === el.PremiumTypes.TIER_0
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
                      return (0, i.jsx)(eW, { guildId: t, analyticsLocations: s });
                  case ei.kqX.QUARANTINED:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              es.intl.string(es.t.DVFJYf),
                              (0, i.jsx)(T.eC, {
                                  href: t0.q,
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.kvHdFN),
                              }),
                              (0, i.jsx)(d.Anchor, {
                                  href: tz.A.getArticleURL(ei.MVz.QUARANTINE),
                                  target: "_blank",
                                  className: ea.yw,
                                  children: es.intl.string(es.t.hvVgAZ),
                              }),
                          ],
                      });
                  case ei.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: eu, decisionId: eA } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: ei.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != t && (0, ev.wu)(t), t3(eu);
                                  },
                              }),
                              es.intl.string(es.t.B8ruyY),
                              (0, i.jsx)(T.zr, {
                                  onClick: () => {
                                      null != t &&
                                          (0, ev.W5)(t, eA, () => {
                                              t3(eu), (0, ev.wu)(t);
                                          });
                                  },
                                  children: es.intl.string(es.t.oX14El),
                              }),
                              null != t
                                  ? (0, i.jsx)(T.zr, {
                                        onClick: () =>
                                            tn.A.open(t, ei.BEX.GUILD_AUTOMOD, void 0, ei.nd0.AUTOMOD_MENTION_SPAM),
                                        children: es.intl.string(es.t["1R7QIx"]),
                                    })
                                  : null,
                          ],
                      });
                  case ei.kqX.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: ei.kqX.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      r.metadata?.streamKey != null && (0, tD.lk)(r.metadata.streamKey);
                                  },
                              }),
                              es.intl.string(es.t.rOx44m),
                          ],
                      });
                  case ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.BRAND,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => {
                                      t3(r.metadata?.dismissUntil);
                                  },
                                  noticeType: ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                              }),
                              es.intl.string(es.t["0klLS7"]),
                              (0, i.jsx)(T.Z_, {
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
                      return (0, i.jsx)(tp, {});
                  case ei.kqX.PREMIUM_MARKETING_NAGBAR:
                      return (0, i.jsx)(tC, {});
                  case ei.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR:
                      return (0, i.jsx)(tR, { premiumSubscription: r.metadata.premiumSubscription });
                  case ei.kqX.SYSTEM_SERVICE_WARNING:
                      return (0, i.jsx)(tB, {});
                  case ei.kqX.RESTRICTED_HOURS_WARNING:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => t3(), noticeType: r.type }),
                              r.message,
                              r.metadata?.subtitle != null ? ` \xb7 ${r.metadata.subtitle}` : null,
                          ],
                      });
                  default:
                      return null;
              }
          })
        : null;
function t4() {
    let { analyticsLocations: e } = (0, G.Ay)(x.A.NOTICE);
    return (0, i.jsx)(G.f5, { value: e, children: (0, i.jsx)(t8, {}) });
}
