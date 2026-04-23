n.d(t, { w: () => t7, A: () => t4 });
var i = n(627968),
    l = n(64700),
    r = n(989349),
    s = n.n(r);
if (21552 == n.j) var a = n(936504);
var E = n(299855),
    o = n.n(E),
    _ = n(17928);
if (21552 == n.j) var c = n(462887);
if (21552 == n.j) var A = n(834730);
if (21552 == n.j) var I = n(939249);
if (21552 == n.j) var u = n(417098);
if (21552 == n.j) var T = n(349288);
if (21552 == n.j) var d = n(403581);
if (21552 == n.j) var N = n(192308);
if (21552 == n.j) var R = n(289873);
var O = n(157559),
    P = n(827343),
    S = n(830215),
    C = n(228366);
function D(e) {
    C.h.dispatch({ type: "DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS", skuId: e });
}
var M = n(912851);
let m =
    21552 == n.j
        ? {
              clearRemoteDisconnectVoiceChannelId() {
                  C.h.dispatch({ type: "CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID" });
              },
              clearLastSessionVoiceChannelId() {
                  C.h.dispatch({ type: "CLEAR_LAST_SESSION_VOICE_CHANNEL_ID" });
              },
          }
        : null;
var p = n(956793),
    U = n(785796),
    g = n(55619),
    k = n(246605),
    f = n(271866),
    y = n(736653),
    h = n(77729),
    x = n(573648),
    L = n(793574),
    G = n(688810),
    j = n(587895),
    X = n(315982),
    q = n(235986),
    v = n(554146);
if (21552 == n.j) var b = n(691540);
if (21552 == n.j) var B = n(857250);
if (21552 == n.j) var V = n(97483);
var F = n(803306),
    H = n(975807),
    w = n(773952),
    Y = n(532794),
    W = n(745299),
    K = n(976860),
    $ = n(780964),
    z = n(718446),
    Z = n(858897),
    Q = n(879945),
    J = n(954571),
    ee = n(379848),
    et = n(49999),
    en = n(652215),
    ei = n(788868),
    el = n(355097),
    er = n(985018),
    es = n(448759);
let ea = (e) => {
    let { dismissibleContent: t, noticeType: l } = e;
    return (0, i.jsx)(ee.Ay, {
        contentTypes: [t],
        groupName: et.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: r } = e;
            switch (t) {
                case v.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(u.$T, {
                        color: u.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(u.PM, { onClick: () => r(et.i.UNKNOWN), noticeType: l }),
                            er.intl.string(er.t["+xn1o5"]),
                            (0, i.jsx)("i", { className: es.c9 }),
                            (0, i.jsx)("i", { className: es.Vz }),
                            (0, i.jsx)("i", { className: es.p0 }),
                            (0, i.jsx)(u.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    (0, N.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                            n.bind(n, 987482),
                                        );
                                        return (t) => (0, i.jsx)(e, { source: "Top Bar Nag", ...t });
                                    });
                                },
                                children: er.intl.string(er.t["1WjMbC"]),
                            }),
                        ],
                    });
                case v.M.NAGBAR_QUEST_APP_UPSELL:
                    return (0, i.jsxs)(u.$T, {
                        color: u.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(u.PM, { onClick: () => r(et.i.UNKNOWN), noticeType: l }),
                            (0, i.jsx)("i", { className: es.TN }),
                            er.intl.string(er.t.lgwX26),
                            (0, i.jsx)(u.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    (0, H.A)(en.AMi.META_QUEST), r(et.i.TAKE_ACTION);
                                },
                                children: er.intl.string(er.t["1WjMbC"]),
                            }),
                        ],
                    });
                case v.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(u.$T, {
                        color: u.Hv.SPOTIFY,
                        children: [
                            (0, i.jsx)(u.PM, { onClick: () => r(et.i.UNKNOWN), noticeType: l }),
                            (0, i.jsx)(Q.A, { className: es.tV }),
                            er.intl.string(er.t["5NUVHH"]),
                            (0, i.jsx)(u.Z_, {
                                onClick: () => (0, w.A)({ platformType: en.fg2.SPOTIFY, location: "Notice Bar" }),
                                noticeType: l,
                                children: er.intl.string(er.t.S0W8Z5),
                            }),
                        ],
                    });
                case v.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(u.$T, {
                        color: u.Hv.PLAYSTATION,
                        children: [
                            (0, i.jsx)(u.PM, { noticeType: l, onClick: () => r(et.i.UNKNOWN) }),
                            (0, i.jsx)("img", {
                                alt: "",
                                className: es.tV,
                                src: x.A.get(en.fg2.PLAYSTATION).icon.whiteSVG,
                            }),
                            er.intl.string(er.t.WHWgoY),
                            (0, i.jsx)(u.zr, {
                                onClick: () => (0, w.A)({ platformType: en.fg2.PLAYSTATION, location: "Notice Bar" }),
                                children: er.intl.string(er.t.S0W8Z5),
                            }),
                        ],
                    });
                case v.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(u.$T, {
                        color: u.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(u.PM, { onClick: () => r(et.i.USER_DISMISS), noticeType: l }),
                            er.intl.string(er.t["3qKN/h"]),
                            (0, i.jsx)(u.Z_, {
                                onClick: async () => {
                                    r(et.i.TAKE_ACTION);
                                    try {
                                        let { startRegisterWebAuthnCredential: e } = await Promise.resolve().then(
                                                n.bind(n, 917136),
                                            ),
                                            { ticket: t, challenge: l } = await e();
                                        (0, N.openModalLazy)(async () => {
                                            let { RegisterWebAuthnCredentialModal: e } = await Promise.all([
                                                n.e("40114"),
                                                n.e("45917"),
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
                                        (0, b.P0)((0, B.o)(er.intl.string(er.t.xSCvBf), V.Ck.FAILURE));
                                    }
                                },
                                noticeType: l,
                                children: er.intl.string(er.t["ff/XXy"]),
                            }),
                        ],
                    });
                case v.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(u.$T, {
                        color: u.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)("span", { className: es.lK }),
                            (0, i.jsx)("span", { className: es.$t, children: er.intl.string(er.t["+urf75"]) }),
                            (0, i.jsx)(u.Z_, {
                                className: es.CO,
                                noticeType: l,
                                onClick: () => {
                                    J.default.track(en.HAw.PREMIUM_PROMOTION_OPENED, {
                                        location_section: en.JJy.NOTIFICATION_BAR,
                                        location_object: en.ZSU.BUTTON_CTA,
                                    }),
                                        (0, Z.openUserSettings)($.X.NITRO_PANEL);
                                },
                                children: er.intl.string(er.t["8JC5e/"]),
                            }),
                            (0, i.jsx)(u.PM, {
                                onClick: () => {
                                    r(et.i.UNKNOWN), (0, F.lA)(en.nhx.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: l,
                            }),
                        ],
                    });
                case v.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(W.A, {
                        dismissCurrentNotice: () => r(et.i.UNKNOWN),
                        subscriptionTier: ei.pe.TIER_2,
                    });
                case v.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(W.A, {
                        dismissCurrentNotice: () => r(et.i.UNKNOWN),
                        subscriptionTier: ei.pe.TIER_0,
                    });
                case v.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(u.$T, {
                        color: u.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(u.PM, { noticeType: l, onClick: () => r(et.i.UNKNOWN) }),
                            er.intl.string(er.t["0KFB2B"]),
                            (0, i.jsx)(u.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    r(et.i.UNKNOWN), (0, Z.openUserSettings)($.X.NITRO_PANEL);
                                },
                                children: er.intl.string(er.t.pyYSiO),
                            }),
                        ],
                    });
                case v.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(u.$T, {
                        color: u.Hv.DANGER,
                        children: [
                            (0, i.jsx)(u.PM, { onClick: () => r(et.i.UNKNOWN), noticeType: l }),
                            er.intl.string(er.t["7490vQ"]),
                            (0, i.jsx)(u.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    (0, K.pX)((0, z.settingsPathToRoute)(el.od.ACCOUNT));
                                },
                                children: er.intl.string(er.t.Vm8akB),
                            }),
                        ],
                    });
                case v.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(u.$T, {
                        color: u.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(u.PM, { onClick: () => r(et.i.UNKNOWN), noticeType: l }),
                            er.intl.string(er.t["O9GI+k"]),
                            (0, i.jsx)(u.Z_, {
                                onClick: () => {
                                    (0, Y.A)({
                                        subscriptionTier: ei.pe.TIER_2,
                                        analyticsLocations: [L.A.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: en.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => r(et.i.UNKNOWN),
                                    });
                                },
                                noticeType: l,
                                children: er.intl.string(er.t.Zi69D4),
                            }),
                        ],
                    });
            }
        },
    });
};
var eE = n(877624),
    eo = n(374200),
    e_ = n(932001);
if (21552 == n.j) var ec = n(597770);
let eA = (e) => {
        let { markAsDismissed: t } = e,
            { analyticsLocations: n } = (0, G.Ay)(),
            l = (0, _.bG)([eo.A], () => {
                let e = eo.A.getMarketingComponentByType(eE.C.GIFT_REMINDER_NAGBAR);
                return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.giftReminderNagbar;
            });
        return null == l
            ? null
            : (0, i.jsxs)(u.$T, {
                  color: u.Hv.PREMIUM_TIER_2,
                  children: [
                      (0, i.jsx)(u.PM, {
                          onClick: () => t(et.i.USER_DISMISS),
                          noticeType: en.kqX.GIFTING_PROMOTION_REMINDER,
                      }),
                      (0, i.jsx)(ec.o, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "currentColor",
                          className: es.ez,
                      }),
                      l.body,
                      (0, i.jsx)(u.Z_, {
                          onClick: () => {
                              (0, Y.A)({
                                  isGift: !0,
                                  initialPlanId: null,
                                  analyticsLocations: n,
                                  analyticsLocation: en.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                                  analyticsObject: { page: en.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION },
                              });
                          },
                          noticeType: en.kqX.GIFTING_PROMOTION_REMINDER,
                          children: er.intl.string(er.t.RzWDqY),
                      }),
                  ],
              });
    },
    eI = (e) => {
        let t,
            n,
            { dismissibleContent: l } = e,
            { snowflakeId: r, couldShow: s } =
                ((t = (0, _.bG)([eo.A], () => eo.A.getGiftPromotion()?.id)),
                (n = (0, _.bG)([eo.A], () => null != eo.A.getMarketingComponentByType(eE.C.GIFT_REMINDER_NAGBAR))),
                l === v.M.GIFTING_PROMOTION_REMINDER
                    ? { snowflakeId: t, couldShow: n && null != t }
                    : { snowflakeId: void 0, couldShow: !1 }),
            [a, E] = (0, e_.Cc)(s ? l : null, r ?? "", et.m.NOTICE_BAR, !0);
        return null == a
            ? null
            : a === v.M.GIFTING_PROMOTION_REMINDER
              ? (0, i.jsx)(eA, { markAsDismissed: (e) => E(e) })
              : void 0;
    };
var eu = n(264779),
    eT = n(597758),
    ed = n(287809),
    eN = n(927578),
    eR = n(946319);
let eO = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, eu.Cp)(),
        r = (0, _.bG)([ed.default], () => !eN.Ay.isPremium(ed.default.getCurrentUser())),
        s = l.useCallback(() => {
            J.default.track(en.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED),
                (0, Z.openUserSettings)($.X.GIFT_PANEL),
                eT.Ay.dismissOutboundPromotionNotice();
        }, []);
    return null == n
        ? null
        : (0, i.jsx)(ee.YS, {
              contentType: t,
              newSnowflakeId: n,
              timeRecurringConfig: { cooldownDurationMs: 0 },
              groupName: et.m.NOTICE_BAR,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: n } = e;
                  if (t === v.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR)
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(u.PM, {
                                  noticeType: en.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      eT.Ay.dismissOutboundPromotionNotice(), null !== n && n(et.i.USER_DISMISS);
                                  },
                              }),
                              (0, i.jsx)(d.t, { size: "md", color: "currentColor", className: eR.P }),
                              r ? er.intl.string(er.t["5JMiOo"]) : er.intl.string(er.t["Pzh+G2"]),
                              (0, i.jsx)(u.Z_, {
                                  noticeType: en.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      s(), null !== n && n(et.i.TAKE_ACTION);
                                  },
                                  children: er.intl.string(er.t.jVcuVY),
                              }),
                          ],
                      });
              },
          });
};
var eP = n(587054),
    eS = n(487329),
    eC = n(102609),
    eD = n(736056);
if (21552 == n.j) var eM = n(194261);
var em = n(548118),
    ep = n(134413),
    eU = n(221950),
    eg = n(71393),
    ek = n(309010),
    ef = n(967198),
    ey = n(585510),
    eh = n(834409),
    ex = n(903093),
    eL = n(746080),
    eG = n(500928);
function ej(e) {
    let { onDismiss: t } = e,
        r = (0, _.bG)([ef.A], () => ef.A.getGuildId()),
        s = (0, _.bG)([ek.A], () => (null != r ? ek.A.getChannelId(r) : null), [r]),
        a = r ?? null,
        E = (0, _.bG)([eg.A], () => (null != a ? eg.A.getGuild(a) : null), [a]),
        { shouldShowIncidentActions: o, incidentData: c, isUnderLockdown: A } = (0, ey.Li)(a),
        I = (0, ep.fw)(E?.id ?? en.dJq),
        T = l.useCallback(() => null != E && (0, eU.aZ)(E.id), [E]);
    if (null == E || null == c || !o) return null;
    let d = (e) => {
            e && I && s !== eL.VV.MEMBER_SAFETY && T()
                ? J.default.track(en.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                      notice_type: en.kqX.GUILD_RAID_NOTIFICATION,
                      guild_id: E.id,
                  })
                : (0, N.openModalLazy)(async () => {
                      let e = { source: eh.Eo.NAGBAR, alertType: (0, ex.$5)(c) },
                          { default: t } = await n.e("65614").then(n.bind(n, 671576));
                      return (n) => (0, i.jsx)(t, { ...n, guildId: E.id, analyticsData: e });
                  });
        },
        R = (0, i.jsx)(em.Ay, { className: eG.$f, guild: E, size: em.Ay.Sizes.MINI }),
        O = (0, ex.ql)(c, E.name);
    if (null != (c.dmsDisabledUntil ?? c.invitesDisabledUntil) && A)
        return (0, i.jsxs)(u.$T, {
            className: eG.lm,
            color: u.Hv.NEUTRAL,
            children: [
                (0, i.jsx)(u.PM, { onClick: t, noticeType: en.kqX.GUILD_RAID_NOTIFICATION }),
                R,
                O,
                (0, i.jsx)(u.zr, {
                    className: eG.hP,
                    onClick: () => d(!1),
                    children: (0, i.jsxs)("div", {
                        className: eG.rx,
                        children: [
                            (0, i.jsx)(eM.X, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)("span", { children: er.intl.string(er.t["c+7oa7"]) }),
                        ],
                    }),
                }),
            ],
        });
    let P = (0, ex.P$)(c)
            ? er.intl.formatToPlainString(er.t.tZTx2E, { guildName: E.name })
            : (0, ex.Qm)(c)
              ? er.intl.formatToPlainString(er.t["1bSmxr"], { guildName: E.name })
              : er.intl.formatToPlainString(er.t.W87xDE, { guildName: E.name }),
        S = I && s === eL.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(u.$T, {
        className: eG.lm,
        color: u.Hv.WARNING,
        children: [
            (0, i.jsx)(u.PM, { onClick: t, noticeType: en.kqX.GUILD_RAID_NOTIFICATION }),
            R,
            P,
            !S &&
                (0, i.jsx)(u.zr, {
                    className: eG.hP,
                    onClick: () => d(!0),
                    children: (0, i.jsx)("div", {
                        className: eG.rx,
                        children: (0, i.jsx)("span", { children: er.intl.string(er.t.zDJDhr) }),
                    }),
                }),
        ],
    });
}
var eX = n(137207),
    eq = n(206835),
    ev = n(495544),
    eb = n(696451),
    eB = n(229527),
    eV = n(81400),
    eF = n(340837);
function eH(e) {
    let { guildId: t, analyticsLocations: n } = e,
        [l, r] = (0, eV.j8)({ guildId: t, analyticsLocations: n }),
        s = r ? er.intl.string(er.t["6ndMcq"]) : er.intl.string(er.t["0eiu6J"]),
        a = r ? er.intl.string(er.t.S09nw4) : er.intl.string(er.t.tEttXd);
    return (0, i.jsxs)(u.$T, { color: u.Hv.DANGER, children: [s, (0, i.jsx)(u.zr, { onClick: l, children: a })] });
}
function ew() {
    let e = (0, eq.A)({ scrollPosition: el._F.GUILD_TAG });
    return (0, i.jsxs)(u.$T, {
        color: u.Hv.DANGER,
        children: [
            er.intl.string(er.t.Zqlecb),
            (0, i.jsx)(u.zr, { onClick: e, children: er.intl.string(er.t.SJehVW) }),
        ],
    });
}
function eY(e) {
    let { analyticsLocations: t, ...n } = e,
        { analyticsLocations: l } = (0, G.Ay)(t, L.A.AUTOMOD_NAGBAR_NOTICE),
        r = (0, _.bG)([ev.default, eb.Ay], () => {
            if (null == n.guildId) return new Set();
            let e = ev.default.getId();
            return (0, eB.wj)(eb.Ay.getMember(n.guildId, e));
        }, [n.guildId]);
    return r.has(eF.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || r.has(eF.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, i.jsx)(eH, { ...n, analyticsLocations: l })
        : r.has(eF.D.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, i.jsx)(ew, {})
          : (0, i.jsx)(eH, { ...n, analyticsLocations: l });
}
var eW = n(202384),
    eK = n(51758);
n(321073);
var e$ = n(503698),
    ez = n.n(e$);
if (21552 == n.j) var eZ = n(873263);
if (21552 == n.j) var eQ = n(314116);
if (21552 == n.j) var eJ = n(821609);
var e0 = n(334465),
    e2 = n(624458),
    e1 = n(513461),
    e5 = n(709977),
    e9 = n(212455),
    e8 = n(182430),
    e7 = n(580537);
let e6 =
    21552 == n.j
        ? () => {
              let e = (0, _.bG)([ef.A], () => ef.A.getGuildId(), []),
                  t = (0, _.bG)([eg.A], () => eg.A.getGuild(e), [e]),
                  l = (0, _.bG)([e9.A], () => (null != e ? e9.A.getRequest(e) : null), [e]),
                  r = (0, eZ.zy)(),
                  s = (0, e0.B)(r.pathname, en.BVt.CHANNEL(t?.id, eL.VV.GUILD_ONBOARDING))?.isExact === !0;
              if (null == t || !(0, e5.Qd)(t) || s) return null;
              let a = l?.applicationStatus ?? e1.B5.STARTED,
                  E = null,
                  o = null,
                  c = null,
                  I = [e8.lm, e7.lm];
              switch (a) {
                  case e1.B5.SUBMITTED:
                      (E = er.intl.string(er.t["5iLvSx"])),
                          (o = er.intl.string(er.t.mqtdmQ)),
                          (c = () => {
                              (0, eQ.A)({
                                  title: er.intl.string(er.t.aIz1oV),
                                  subtitle: er.intl.string(er.t["13tjTU"]),
                                  variant: "primary",
                                  confirmText: er.intl.string(er.t["cY+Oob"]),
                                  onConfirm: () => e2.A.removeGuildJoinRequest(t.id),
                              });
                          });
                      break;
                  case e1.B5.REJECTED:
                      (E = er.intl.string(er.t.lk30cY)),
                          (o = er.intl.string(er.t["8RrsHr"])),
                          (c = () => {
                              (0, N.openModalLazy)(async () => {
                                  let { default: e } = await n.e("14382").then(n.bind(n, 463325));
                                  return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                              });
                          }),
                          I.push(e8.z3);
                      break;
                  default:
                      (E = er.intl.string(er.t.G5YKXP)),
                          (o = er.intl.string(er.t["r8/DT+"])),
                          (c = () => {
                              (0, eW.Ze)(t.id);
                          });
              }
              return (0, i.jsxs)("div", {
                  className: ez()(...I),
                  children: [
                      (0, i.jsx)(A.E, { className: e8.wx, variant: "text-sm/normal", children: E }),
                      (0, i.jsx)(eJ.$, { variant: "overlay-primary", size: "sm", onClick: c, text: o }),
                  ],
              });
          }
        : null;
if (21552 == n.j) var e4 = n(477155);
var e3 = n(22877);
function te(e) {
    let { buttonText: t, onGoBack: n, onDismiss: l, showCloseButton: r } = e;
    return (0, i.jsxs)(u.$T, {
        className: e3.eR,
        children: [
            r && (0, i.jsx)(u.PM, { onClick: l, className: e3.b, noticeType: en.kqX.BACK_TO_PREVIOUS_SCREEN }),
            (0, i.jsx)(eJ.$, { text: t, variant: "overlay-secondary", size: "sm", icon: e4.r, onClick: n }),
        ],
    });
}
var tt = n(997509),
    tn = n(475723);
if (21552 == n.j) var ti = n(862482);
var tl = n(686956),
    tr = n(449054),
    ts = n(484154);
let ta =
    21552 == n.j
        ? () => {
              let e = (0, _.bG)([ef.A], () => ef.A.getGuildId(), []),
                  t = (0, _.bG)([eg.A], () => eg.A.getGuild(e), [e]),
                  [n, r] = l.useState(!1);
              if (null == t) return null;
              let s = async () => {
                  r(!0);
                  try {
                      tr.cf(t.id), await tl.A.joinGuild(t.id, { source: en.Q4z.NOTICE_BAR });
                  } catch {
                      r(!1);
                  }
              };
              return (0, i.jsxs)("div", {
                  className: ez()(ts.lm, e7.lm),
                  children: [
                      (0, i.jsxs)(ti.$n, {
                          look: ti.$n.Looks.OUTLINED,
                          color: ti.$n.Colors.WHITE,
                          size: ti.$n.Sizes.NONE,
                          className: ez()(ts.x6, ts.aX),
                          innerClassName: ts.gb,
                          onClick: () => {
                              (0, K.JK)().goBack();
                          },
                          children: [
                              (0, i.jsx)(e4.r, { size: "xs", color: "currentColor", className: ts.UE }),
                              er.intl.string(er.t["13/7kX"]),
                          ],
                      }),
                      (0, i.jsx)(A.E, {
                          className: ts.wx,
                          variant: "text-sm/normal",
                          children: er.intl.string(er.t["N/y2WE"]),
                      }),
                      (0, i.jsx)(ti.$n, {
                          className: ts.x6,
                          look: ti.$n.Looks.OUTLINED,
                          color: ti.$n.Colors.WHITE,
                          size: ti.$n.Sizes.NONE,
                          submitting: n,
                          onClick: s,
                          children: er.intl.format(er.t.uHN7ny, { guild: t.name }),
                      }),
                  ],
              });
          }
        : null;
var tE = n(801644),
    to = n(74848),
    t_ = n(4630),
    tc = n(234419);
if (21552 == n.j) var tA = n(661531);
var tI = n(367727),
    tu = n(635995),
    tT = n(88001),
    td = n(466919),
    tN = n(375043);
function tR(e) {
    let { premiumSubscription: t } = e,
        r = t?.id,
        s = l.useCallback(() => {
            null != r && (0, tI.qr)(v.M.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR, r, { dismissAction: et.i.USER_DISMISS });
        }, [r]),
        a = l.useCallback(() => {
            s(),
                J.default.track(en.HAw.APP_NOTICE_CLOSED, {
                    notice_type: en.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
                });
        }, [s]),
        E = l.useCallback(() => {
            null != t &&
                (J.default.track(en.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: en.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
                }),
                s(),
                (0, N.openModalLazy)(async () => {
                    let { default: e } = await n.e("7960").then(n.bind(n, 785606));
                    return (n) => (0, i.jsx)(e, { ...n, subscription: t });
                }));
        }, [t, s]);
    return (0, i.jsxs)(tu.T0, {
        onClick: a,
        className: tN.A,
        children: [
            (0, i.jsx)(d.t, { color: tA.A.colors.ICON_STRONG }),
            (0, i.jsx)(tu.In, {
                children: er.intl.format(td.default.fFt9bd, { premiumGroupProductName: (0, tT.DP)() }),
            }),
            (0, i.jsx)(eJ.$, {
                onClick: E,
                text: er.intl.string(td.default["5fZHp3"]),
                size: "sm",
                variant: "overlay-primary",
            }),
        ],
    });
}
var tO = n(549996),
    tP = n(498470);
function tS() {
    let e = (0, tO.c)(eE.C.NAGBAR),
        t = e?.properties.properties.oneofKind === "nagbar" ? e.properties.properties.nagbar : null,
        n = e?.promotionId,
        r = l.useCallback(() => {
            null != n &&
                (0, tI.qr)(v.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, n, { dismissAction: et.i.USER_DISMISS });
        }, [n]),
        s = l.useCallback(() => {
            J.default.track(en.HAw.APP_NOTICE_CLOSED, { notice_type: en.kqX.PREMIUM_MARKETING_NAGBAR }), r();
        }, [r]);
    if (null == t) return null;
    let a = (0, tP.h)({ buttonAction: t.ctaAction, deeplinkSection: t.deeplinkSection, onClose: r });
    return (0, i.jsxs)(tu.T0, {
        onClick: s,
        children: [
            (0, i.jsx)(tu.In, { children: t.body }),
            "" !== t.ctaLabel &&
                (0, i.jsx)(tu.fY, {
                    text: t.ctaLabel,
                    onClick: () => {
                        J.default.track(en.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                            notice_type: en.kqX.PREMIUM_MARKETING_NAGBAR,
                        }),
                            a();
                    },
                }),
        ],
    });
}
var tC = n(814249),
    tD = n(829219),
    tM = n(14594);
function tm() {
    let [e, t] = (0, e_.Wl)(v.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: tM.aH });
    return e !== v.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK
        ? null
        : (0, i.jsxs)(u.$T, {
              color: u.Hv.BRAND,
              children: [
                  (0, i.jsx)(u.PM, { onClick: () => t(et.i.DISMISS), noticeType: en.kqX.IGNORE_USER_FEEDBACK_NAGBAR }),
                  er.intl.string(er.t.XkeW9N),
                  (0, i.jsx)(u.Z_, {
                      onClick: () => {
                          (0, N.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("81696")]).then(
                                  n.bind(n, 976627),
                              );
                              return (t) => (0, i.jsx)(e, { ...t });
                          }),
                              t(et.i.TAKE_ACTION);
                      },
                      noticeType: en.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
                      children: er.intl.string(er.t.vcdNKv),
                  }),
              ],
          });
}
if (21552 == n.j) var tp = n(825484);
var tU = n(139716),
    tg = n(847599),
    tk = n(734057),
    tf = n(849736),
    ty = n(354583),
    th = n(366098),
    tx = n(418208),
    tL = n(992262);
function tG(e) {
    if (!e && (0, tx.Cf)())
        return void tU.A.showAgeVerificationGetStartedModal({ entryPoint: tg.q1.STAGE_CHANNEL_RAISE_HAND });
    let t = ek.A.getVoiceChannelId();
    if (null == t) return;
    let n = tk.A.getChannel(t);
    null != n && (0, tf.e7)(n, e);
}
function tj(e) {
    let { channelId: t } = e,
        n = (0, th.D3)(t) ?? 0,
        l = (0, th.Xk)(t) ?? 0;
    return n > 0 && l > 0
        ? (0, i.jsx)("div", {
              className: tL.Z5,
              children: (0, i.jsx)("div", { className: ez()(tL.qQ, tL.lN), children: er.intl.string(er.t.xlJRfv) }),
          })
        : n > 0
          ? (0, i.jsx)("div", {
                className: tL.Z5,
                children: (0, i.jsx)("div", { className: ez()(tL.qQ, tL.lN), children: er.intl.string(er.t.WYad9Z) }),
            })
          : l > 0
            ? (0, i.jsx)("div", {
                  className: tL.Z5,
                  children: (0, i.jsx)("div", { className: ez()(tL.qQ, tL.lN), children: er.intl.string(er.t.eHq2OF) }),
              })
            : null;
}
function tX() {
    let e = (0, ty.A)();
    return null == e
        ? null
        : (0, i.jsxs)(u.$T, {
              className: tL.kL,
              color: u.Hv.DEFAULT,
              children: [
                  er.intl.string(er.t.Ul1RJQ),
                  (0, i.jsx)(tj, { channelId: e.id }),
                  (0, i.jsxs)(tp.e, {
                      size: "sm",
                      className: tL.GC,
                      children: [
                          (0, i.jsx)(eJ.$, {
                              variant: "overlay-primary",
                              text: er.intl.string(er.t.MpO0px),
                              onClick: () => tG(!1),
                          }),
                          (0, i.jsx)(eJ.$, {
                              variant: "secondary",
                              onClick: () => tG(!0),
                              text: er.intl.string(er.t["1YDv7a"]),
                          }),
                      ],
                  }),
              ],
          });
}
var tq = n(328153),
    tv = n(935671);
function tb() {
    (0, tv.sL)("nagbar");
}
function tB() {
    return null == (0, _.bG)([tq.Ay], () => tq.Ay.getVisibleGame())
        ? null
        : (0, i.jsxs)(u.$T, {
              color: u.Hv.DANGER,
              children: [
                  (0, i.jsx)(u.PM, { noticeType: en.kqX.SYSTEM_SERVICE_WARNING, onClick: () => t7() }),
                  er.intl.string(er.t["5rPt+j"]),
                  (0, i.jsx)(u.Z_, {
                      onClick: tb,
                      noticeType: en.kqX.SYSTEM_SERVICE_WARNING,
                      children: er.intl.string(er.t["1iI46O"]),
                  }),
              ],
          });
}
function tV() {
    return (0, i.jsxs)(u.$T, {
        color: u.Hv.DANGER,
        children: [
            er.intl.string(er.t.lQiCJ6),
            (0, i.jsx)(u.Z_, {
                noticeType: en.kqX.PTT_NO_KEYBIND_WARNING,
                onClick: function () {
                    (0, Z.openUserSettings)($.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING);
                },
                children: er.intl.string(er.t["UgQN+9"]),
            }),
        ],
    });
}
if (21552 == n.j) var tF = n(189213);
if (21552 == n.j) var tH = n(150934);
function tw(e) {
    let [t, n] = l.useState(!1);
    return (0, i.jsx)(tF.Modal, {
        size: "md",
        title: er.intl.string(er.t["zQ1+Jw"]),
        subtitle: er.intl.string(er.t.K1gWXn),
        actions: [
            {
                text: er.intl.string(er.t.BddRzS),
                onClick: () => {
                    t && P.A.setSilenceWarning(!1), e.onClose();
                },
                variant: "primary",
            },
        ],
        actionBarInput: (0, i.jsx)(tH.S, {
            checked: t,
            onChange: (e) => n(e),
            label: er.intl.string(er.t.XAiAgD),
            labelType: "secondary",
        }),
        ...e,
    });
}
var tY = n(969341),
    tW = n(763827),
    tK = n(67480),
    t$ = n(147964),
    tz = n(519057),
    tZ = n(975571),
    tQ = n(723702),
    tJ = n(325278),
    t0 = n(831502),
    t2 = n(731854);
let t1 = (e) => {
        let { error: t, allowClick: n = !1 } = e,
            l = (0, eS.B1)(t)?.errorCode,
            r = er.intl.formatToPlainString(er.t.ejOT95, { errorCode: l }),
            s = (0, i.jsx)(A.E, {
                variant: "text-sm/bold",
                color: "currentColor",
                tag: "span",
                className: es.fU,
                selectable: !0,
                children: r,
            });
        return n
            ? (0, i.jsx)(I.D, {
                  tag: "span",
                  className: es.wz,
                  onClick: () => open(tZ.A.getArticleURL(en.MVz.AV_ERROR_CODES)),
                  children: s,
              })
            : s;
    },
    t5 = (e) => {
        let { noticeType: t } = e;
        return (0, i.jsxs)(u.$T, {
            color: u.Hv.DANGER,
            children: [
                (0, i.jsx)(u.PM, {
                    noticeType: t,
                    onClick: () => {
                        t7();
                    },
                }),
                er.intl.string(er.t.o3zuYz),
                (0, i.jsx)(t1, { error: eS.iy.NO_INPUT_DEVICES }),
                (0, i.jsx)(u.eC, {
                    href: tZ.A.getArticleURL(en.MVz.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: er.intl.string(er.t.RYKKox),
                }),
            ],
        });
    };
function t9(e) {
    return (0, tQ.isWindows)() && o().satisfies(h.A?.os.release, tJ.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function t8(e) {
    let t,
        n,
        { noticeType: l } = e,
        r = (0, to.x5)(t2.oh.AUDIO_INPUT),
        s = r?.guid ?? "",
        { inputDeviceOSMuted: a, inputDeviceOSVolume: E } = (0, _.cf)([tY.Ay], () => ({
            inputDeviceOSMuted: tY.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: tY.Ay.getInputDeviceOSVolume(),
        })),
        o = !1;
    return (
        !0 === a
            ? ((t = er.intl.string(er.t.ppW3ri)),
              (n = (0, i.jsx)(u.eC, { href: t9(s), noticeType: l, children: er.intl.string(er.t.QghSIq) })))
            : 0 === E
              ? ((t = er.intl.string(er.t.j4gGA4)),
                (n = (0, i.jsx)(u.eC, { href: t9(s), noticeType: l, children: er.intl.string(er.t.QghSIq) })))
              : tY.Ay.supports(t2.O5.LOOPBACK)
                ? ((t = er.intl.string(er.t.dNAJ18)),
                  (o = !0),
                  (n = (0, i.jsx)(u.zr, {
                      onClick: () => {
                          (0, Z.openUserSettings)($.X.VOICE_AND_VIDEO_PANEL);
                      },
                      children: er.intl.string(er.t.I6YlB4),
                  })))
                : ((t = er.intl.string(er.t.nCO9bI)),
                  (n = (0, i.jsx)(u.eC, {
                      href: tZ.A.getArticleURL(en.MVz.NO_INPUT_DETECTED),
                      noticeType: l,
                      children: er.intl.string(er.t.RYKKox),
                  }))),
        (0, i.jsxs)(u.$T, {
            color: u.Hv.DANGER,
            children: [
                (0, i.jsx)(u.PM, {
                    noticeType: l,
                    onClick: () => {
                        t7(), (0, N.openModal)((e) => (0, i.jsx)(tw, { ...e }));
                    },
                }),
                t,
                (0, i.jsx)(t1, { allowClick: o, error: eS.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function t7(e) {
    M.A.dismiss(null != e ? { untilAtLeast: s()(e) } : void 0);
}
let t6 =
    21552 == n.j
        ? l.memo(function () {
              let e = (0, _.bG)([ed.default], () => ed.default.getCurrentUser()),
                  t = (0, _.bG)([ef.A], () => ef.A.getGuildId()),
                  r = (0, _.bG)([tz.Ay], () => tz.Ay.getNotice()),
                  { analyticsLocations: s } = (0, G.Ay)(),
                  E = (0, y.Ay)(),
                  o = (0, eK.H)(t),
                  A = (0, tc.V)();
              if (
                  (l.useEffect(() => {
                      if (r?.type != null) {
                          let e;
                          if (
                              null == A &&
                              (r.type === en.kqX.PREMIUM_TIER_2_TRIAL_ENDING ||
                                  r.type === en.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
                          )
                              return;
                          let n = {};
                          null != t && (n.guild_id = t),
                              A?.trial_id != null && (n.trial_id = A.trial_id),
                              (e = { notice_type: r.type, ...n }),
                              J.default.track(en.HAw.APP_NOTICE_VIEWED, e);
                      }
                  }, [r?.type, t, A]),
                  l.useEffect(() => {
                      if (null != r && r.type === en.kqX.SURVEY && null != r.metadata) {
                          let { metadata: e } = r,
                              t = eD.A.getUserExperimentDescriptor(e.id);
                          null != t && (0, eC.LQ)(e.id, t),
                              (async () => {
                                  r.metadata?.id != null && (await (0, k.oX)(r.metadata?.id));
                              })();
                      }
                  }, [r]),
                  null == r)
              )
                  return null;
              let I = null != r.type ? tz.Re[r.type] : null,
                  C = null != r.type ? tz.rV[r.type] : null,
                  M = null != r.type ? tz.f7[r.type] : null,
                  h = tz.pe[r.type];
              if (null != I) return (0, i.jsx)(eP.$, { dismissibleContent: I, noticeType: r.type });
              if (null != C) return (0, i.jsx)(eI, { dismissibleContent: C });
              if (null != M) return (0, i.jsx)(eO, { dismissibleContent: M });
              if (null != h) return (0, i.jsx)(ea, { dismissibleContent: h, noticeType: r.type });
              let L = r.metadata?.premiumType;
              switch (r.type) {
                  case en.kqX.PTT_NO_KEYBIND_WARNING:
                      return (0, i.jsx)(tV, {});
                  case en.kqX.LURKING_GUILD:
                      return (0, i.jsx)(ta, {});
                  case en.kqX.PENDING_MEMBER:
                      return (0, i.jsx)(e6, {});
                  case en.kqX.INVITED_TO_SPEAK:
                      return (0, i.jsx)(tX, {});
                  case en.kqX.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: v } = r.metadata;
                      return (0, i.jsx)(ej, { onDismiss: () => t7(v) });
                  case en.kqX.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: b } = r.metadata;
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.WARNING,
                          children: [
                              (0, i.jsx)(u.PM, { onClick: () => t7(b), noticeType: r.type }),
                              er.intl.format(er.t["08KQ1P"], {
                                  helpCenterLink: tZ.A.getArticleURL(en.MVz.WIN32_DEPRECATE),
                              }),
                          ],
                      });
                  case en.kqX.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: B } = r.metadata;
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.WARNING,
                          children: [
                              (0, i.jsx)(u.PM, { onClick: () => t7(B), noticeType: r.type }),
                              er.intl.format(er.t["8Je+dX"], {
                                  helpCenterLink: tZ.A.getArticleURL(en.MVz.WIN7_8_DEPRECATE),
                              }),
                          ],
                      });
                  case en.kqX.WIN_COMPAT_MODE_MESSAGE:
                      let { dismissUntil: V } = r.metadata;
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.WARNING,
                          children: [
                              (0, i.jsx)(u.PM, { onClick: () => t7(V), noticeType: r.type }),
                              er.intl.string(er.t["9DJgOg"]),
                          ],
                      });
                  case en.kqX.MACOS_19_DEPRECATED_MESSAGE:
                      let { dismissUntil: F } = r.metadata;
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.WARNING,
                          children: [
                              (0, i.jsx)(u.PM, { onClick: () => t7(F), noticeType: r.type }),
                              er.intl.format(er.t.q8VPLo, {
                                  helpCenterLink: tZ.A.getArticleURL(en.MVz.MACOS_19_DEPRECATE),
                              }),
                          ],
                      });
                  case en.kqX.E2EE_UPDATE_REQUIRED:
                      let { dismissUntil: H } = r.metadata;
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.WARNING,
                          children: [
                              (0, i.jsx)(u.PM, { onClick: () => t7(H), noticeType: r.type }),
                              er.intl.format(tQ.isPlatformEmbedded ? er.t.J232TI : er.t.vceuiL, {
                                  helpCenterLink: tZ.A.getArticleURL(en.MVz.END_TO_END_ENCRYPTION),
                              }),
                          ],
                      });
                  case en.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.WARNING,
                          children: [
                              (0, i.jsx)(u.PM, { onClick: () => t7(), noticeType: r.type }),
                              er.intl.string(er.t.iW0fcQ),
                              (0, i.jsx)(u.eC, {
                                  href: tZ.A.getArticleURL(en.MVz.WINDOWS_MEDIA_PACK),
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: er.intl.string(er.t.LQG5j6),
                              }),
                          ],
                      });
                  case en.kqX.GENERIC:
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(u.PM, { onClick: () => t7(), noticeType: r.type }),
                              r.message,
                              null != r.buttonText
                                  ? (0, i.jsx)(u.Z_, {
                                        onClick: r.callback,
                                        noticeType: r.type,
                                        children: r.buttonText,
                                    })
                                  : null,
                          ],
                      });
                  case en.kqX.LAUNCH_GAME_FAILURE:
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.DANGER,
                          children: [
                              (0, i.jsx)(u.PM, { onClick: () => t7(), noticeType: r.type }),
                              r.message,
                              null != r.buttonText
                                  ? (0, i.jsx)(u.Z_, {
                                        onClick: r.callback,
                                        noticeType: r.type,
                                        children: r.buttonText,
                                    })
                                  : null,
                          ],
                      });
                  case en.kqX.VOICE_DISABLED:
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.WARNING,
                          children: [
                              (0, i.jsx)(u.PM, {
                                  onClick: () => {
                                      m.clearRemoteDisconnectVoiceChannelId(), t7();
                                  },
                                  noticeType: r.type,
                              }),
                              er.intl.string(er.t.bOQ3jV),
                              (0, i.jsx)(u.Z_, {
                                  onClick: () => {
                                      let e = tW.A.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != tk.A.getChannel(e) && p.default.selectVoiceChannel(e);
                                  },
                                  noticeType: r.type,
                                  children: er.intl.string(er.t.vD60Pv),
                              }),
                          ],
                      });
                  case en.kqX.VOICE_CONNECTED_LAST_SESSION:
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(u.PM, {
                                  onClick: () => {
                                      m.clearLastSessionVoiceChannelId(), t7();
                                  },
                                  noticeType: r.type,
                              }),
                              er.intl.string(er.t.jY2lUA),
                              (0, i.jsx)(u.Z_, {
                                  onClick: () => {
                                      let e = tW.A.getLastSessionVoiceChannelId();
                                      null != e && null != tk.A.getChannel(e) && p.default.selectVoiceChannel(e);
                                  },
                                  noticeType: r.type,
                                  children: er.intl.string(er.t.vD60Pv),
                              }),
                          ],
                      });
                  case en.kqX.SPOTIFY_AUTO_PAUSED:
                      let w = x.A.get(en.fg2.SPOTIFY);
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.DANGER,
                          children: [
                              (0, i.jsx)(u.PM, { onClick: () => t7(), noticeType: r.type }),
                              (0, i.jsx)("img", {
                                  alt: "",
                                  className: es.tV,
                                  src: (0, c.q)(E) ? w.icon.darkSVG : w.icon.whiteSVG,
                              }),
                              er.intl.string(er.t.D8Cp76),
                              (0, i.jsx)(u.Z_, {
                                  onClick: () => (0, Z.openUserSettings)($.X.VOICE_AND_VIDEO_PANEL),
                                  noticeType: r.type,
                                  children: er.intl.string(er.t.NiTd0e),
                              }),
                              (0, i.jsx)(T.Anchor, {
                                  className: es.uD,
                                  href: tZ.A.getArticleURL(en.MVz.SPOTIFY_AUTO_PAUSED),
                                  target: "_blank",
                                  children: er.intl.string(er.t.CiqAIU),
                              }),
                          ],
                      });
                  case en.kqX.UNCLAIMED_ACCOUNT:
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.DEFAULT,
                          children: [
                              er.intl.string(er.t["f+Zaol"]),
                              (0, i.jsx)(u.Z_, {
                                  noticeType: r.type,
                                  onClick: () => (o && null != t ? (0, eW.Ze)(t) : X.R()),
                                  children: er.intl.string(er.t.fiNVin),
                              }),
                          ],
                      });
                  case en.kqX.UNVERIFIED_ACCOUNT:
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.DEFAULT,
                          children: [
                              er.intl.string(er.t["3sWbf3"]),
                              (0, i.jsx)(u.Z_, {
                                  noticeType: r.type,
                                  onClick: () => {
                                      S.A.verifyResend(),
                                          O.A.show({
                                              title: er.intl.string(er.t.LykQYk),
                                              body: er.intl.format(er.t.azKEPy, { email: e?.email }),
                                              cancelText: er.intl.string(er.t.Vm8akB),
                                              onCancel: X.R,
                                          });
                                  },
                                  children: er.intl.string(er.t.WnX4J2),
                              }),
                          ],
                      });
                  case en.kqX.SCHEDULED_MAINTENANCE:
                      if (null == r.metadata) return null;
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(u.PM, { onClick: () => U.A.ackScheduledMaintenance(), noticeType: r.type }),
                              er.intl.format(er.t["yb96S+"], r.metadata),
                              (0, i.jsx)(u.eC, {
                                  href: `${en.qF7.STATUS}/incidents/${r.metadata.id}`,
                                  noticeType: r.type,
                                  children: er.intl.string(er.t.hvVgAZ),
                              }),
                          ],
                      });
                  case en.kqX.NO_INPUT_DETECTED:
                      return (0, i.jsx)(t8, { noticeType: r.type });
                  case en.kqX.NO_INPUT_DEVICES_DETECTED:
                      return (0, i.jsx)(t5, { noticeType: r.type });
                  case en.kqX.HARDWARE_MUTE:
                      if (null != r.metadata) {
                          let { vendor: e, model: t } = r.metadata;
                          return (0, i.jsxs)(u.$T, {
                              color: u.Hv.DANGER,
                              children: [
                                  er.intl.format(er.t.qoDex7, { vendorName: e.name, modelName: t.name }),
                                  (0, i.jsx)(u.PM, {
                                      noticeType: r.type,
                                      onClick: () => {
                                          P.A.setEnableHardwareMuteNotice(!1), t7();
                                      },
                                  }),
                                  (0, i.jsx)(u.eC, {
                                      href: t.url,
                                      target: "_blank",
                                      rel: "noreferrer noopener",
                                      noticeType: r.type,
                                      children: er.intl.string(er.t["Yl/Riu"]),
                                  }),
                              ],
                          });
                      }
                      if (
                          tE.A.getConfig({ location: "Notice.AudioIssueNoticeHardwareMute" })
                              .enableHardwareSilenceWarning
                      )
                          return (0, i.jsxs)(u.$T, {
                              color: u.Hv.INFO,
                              children: [
                                  er.intl.format(er.t.QMw8Fd, {}),
                                  (0, i.jsx)(u.PM, {
                                      noticeType: r.type,
                                      onClick: () => {
                                          P.A.setEnableHardwareMuteNotice(!1), t7();
                                      },
                                  }),
                              ],
                          });
                      return null;
                  case en.kqX.STREAMER_MODE:
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.STREAMER_MODE,
                          children: [
                              (0, i.jsx)(u.PM, { onClick: () => t7(), noticeType: en.kqX.STREAMER_MODE }),
                              er.intl.string(er.t.iEgBXp),
                              (0, i.jsx)(u.Z_, {
                                  onClick: () => g.A.setEnabled(!1),
                                  noticeType: en.kqX.STREAMER_MODE,
                                  children: er.intl.string(er.t.R9GHya),
                              }),
                          ],
                      });
                  case en.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == r.metadata) return null;
                      let { skuId: W, applicationId: K } = r.metadata,
                          z = tK.A.get(W),
                          Q = j.A.getApplication(K);
                      if (null == z || null == Q) return null;
                      let ee = { page: en.liQ.IN_APP };
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(u.PM, {
                                  onClick: () => D(z.id),
                                  noticeType: en.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                              }),
                              (0, i.jsx)(d.t, { size: "md", color: "currentColor", className: es.PC }),
                              er.intl.format(er.t["g3MU/+"], { applicationName: Q.name, skuName: z.name }),
                              (0, i.jsx)(u.Z_, {
                                  noticeType: en.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: () =>
                                      (0, t_.j)({
                                          applicationId: Q.id,
                                          skuId: z.id,
                                          openPremiumPaymentModal: () => {
                                              (0, Y.A)({
                                                  initialPlanId: null,
                                                  subscriptionTier: ei.pe.TIER_2,
                                                  analyticsLocations: s,
                                                  analyticsObject: ee,
                                              });
                                          },
                                          analyticsLocations: s,
                                          analyticsLocationObject: ee,
                                          context: __OVERLAY__ ? en.BRT.OVERLAY : en.BRT.APP,
                                      }).then(() => D(z.id)),
                                  children: er.intl.string(er.t.KEwPYx),
                              }),
                          ],
                      });
                  case en.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == r.metadata) return null;
                      let { skuId: e, applicationId: t } = r.metadata,
                          n = tK.A.get(e),
                          l = j.A.getApplication(t);
                      if (null == n || null == l) return null;
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(u.PM, {
                                  onClick: () => t7(),
                                  noticeType: en.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                              }),
                              (0, i.jsx)(d.t, { size: "md", color: "currentColor", className: es.PC }),
                              er.intl.format(er.t.LquIKC, { applicationName: l.name, skuName: n.name }),
                              (0, i.jsx)(u.zr, {
                                  children: (0, i.jsx)(a.N_, {
                                      onClick: () => t7(),
                                      to: {
                                          pathname: en.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 },
                                      },
                                      children: er.intl.string(er.t.hvVgAZ),
                                  }),
                              }),
                          ],
                      });
                  }
                  case en.kqX.SURVEY: {
                      let e = r.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: l, url: s, embedded: a, id: E } = e;
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.CUSTOM,
                          children: [
                              (0, i.jsx)(u.PM, {
                                  noticeType: en.kqX.SURVEY,
                                  onClick: () => {
                                      (0, k.pX)(t, !0);
                                  },
                              }),
                              n,
                              (0, i.jsx)(u.Z_, {
                                  noticeType: en.kqX.SURVEY,
                                  onClick: () => {
                                      a ? (0, tC.K)(E) : window.open(s, "_blank"), (0, k.pX)(t, !1);
                                  },
                                  children: l,
                              }),
                          ],
                      });
                  }
                  case en.kqX.CORRUPT_INSTALLATION:
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.DANGER,
                          children: [
                              er.intl.string(er.t["ugxmk/"]),
                              (0, i.jsx)(u.eC, {
                                  href: tZ.A.getArticleURL(en.MVz.CORRUPT_INSTALLATION),
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: er.intl.string(er.t["6ik4Xk"]),
                              }),
                          ],
                      });
                  case en.kqX.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.WARNING,
                          children: [
                              (0, i.jsx)(u.PM, { onClick: () => t7(), noticeType: en.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                              er.intl.string(er.t.wVjKGi),
                              (0, i.jsx)(u.Z_, {
                                  noticeType: en.kqX.VIDEO_UNSUPPORTED_BROWSER,
                                  onClick: () => {
                                      (0, N.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                              n.bind(n, 987482),
                                          );
                                          return (t) => (0, i.jsx)(e, { source: "Video unsupported browser", ...t });
                                      });
                                  },
                                  children: er.intl.string(er.t["1WjMbC"]),
                              }),
                          ],
                      });
                  case en.kqX.DISPATCH_ERROR:
                      if (null == r.metadata) return null;
                      let { error: et } = r.metadata;
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.DANGER,
                          children: [
                              (0, i.jsx)(u.PM, { onClick: () => t7(), noticeType: en.kqX.DISPATCH_ERROR }),
                              et?.displayMessage,
                              (0, i.jsx)(u.Z_, {
                                  noticeType: en.kqX.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, N.openModalLazy)(async () => {
                                          let { default: e } = await n.e("88014").then(n.bind(n, 627261));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                  children: er.intl.string(er.t.hvVgAZ),
                              }),
                          ],
                      });
                  case en.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == r.metadata) return null;
                      let { progress: el, total: eE, name: eo } = r.metadata;
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(u.PM, {
                                  onClick: () => t7(),
                                  noticeType: en.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                              }),
                              (0, i.jsxs)(q.A, {
                                  justify: q.A.Justify.CENTER,
                                  children: [
                                      null != eo
                                          ? er.intl.formatToPlainString(er.t["pHj+z4"], {
                                                name: `${eo}`,
                                                progress: el,
                                                total: eE,
                                            })
                                          : er.intl.formatToPlainString(er.t["lHZn+A"], { progress: el, total: eE }),
                                      (0, i.jsx)(R.y, { type: R.y.Type.PULSING_ELLIPSIS, className: es.gO }),
                                  ],
                              }),
                          ],
                      });
                  case en.kqX.APPLICATION_TEST_MODE:
                      if (null == r.metadata) return null;
                      if (null != t$.A.testModeEmbeddedApplicationId)
                          return (0, i.jsx)(u.$T, {
                              color: u.Hv.WARNING,
                              children: (0, i.jsxs)(q.A, {
                                  justify: q.A.Justify.CENTER,
                                  align: q.A.Align.CENTER,
                                  children: [
                                      (0, i.jsx)("div", {
                                          children: er.intl.format(er.t["1qxVe4"], {
                                              applicationName: r.metadata.applicationName,
                                          }),
                                      }),
                                      (0, i.jsx)(u.PM, { onClick: f.cL, noticeType: en.kqX.APPLICATION_TEST_MODE }),
                                  ],
                              }),
                          });
                      return (0, i.jsx)(u.$T, {
                          color: u.Hv.WARNING,
                          children: (0, i.jsxs)(q.A, {
                              justify: q.A.Justify.CENTER,
                              align: q.A.Align.CENTER,
                              children: [
                                  (0, i.jsx)("div", {
                                      children: er.intl.format(er.t.Fv5HrE, {
                                          applicationName: r.metadata.applicationName,
                                      }),
                                  }),
                                  (0, i.jsx)(u.PM, { onClick: f.cL, noticeType: en.kqX.APPLICATION_TEST_MODE }),
                              ],
                          }),
                      });
                  case en.kqX.VIEWING_ROLES:
                      return (0, i.jsx)(tn.A, {});
                  case en.kqX.PREMIUM_UNCANCEL:
                      return (0, i.jsxs)(u.$T, {
                          color:
                              L === ei.PremiumTypes.TIER_1
                                  ? u.Hv.PREMIUM_TIER_1
                                  : L === ei.PremiumTypes.TIER_0
                                    ? u.Hv.PREMIUM_TIER_0
                                    : u.Hv.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(u.PM, {
                                  noticeType: en.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      t7(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              (0, i.jsx)(d.t, { size: "md", color: "currentColor", className: es.PC }),
                              L === ei.PremiumTypes.TIER_1
                                  ? er.intl.formatToPlainString(er.t.fXv4wm, { daysLeft: r.metadata.daysLeft })
                                  : L === ei.PremiumTypes.TIER_0
                                    ? er.intl.formatToPlainString(er.t.ZOHZMr, { daysLeft: r.metadata.daysLeft })
                                    : er.intl.formatToPlainString(er.t.outyHh, { daysLeft: r.metadata.daysLeft }),
                              (0, i.jsx)(u.Z_, {
                                  noticeType: en.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      t7(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, N.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("6159"),
                                                  n.e("62175"),
                                                  n.e("8739"),
                                                  n.e("39708"),
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
                                      L === ei.PremiumTypes.TIER_1
                                          ? er.intl.string(er.t.BkbUPM)
                                          : L === ei.PremiumTypes.TIER_0
                                            ? er.intl.string(er.t.Px978X)
                                            : er.intl.string(er.t.LW5tCE),
                              }),
                          ],
                      });
                  case en.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: e_, dismissUntil: ec } = r.metadata;
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.WARNING,
                          children: [
                              (0, i.jsx)(u.PM, {
                                  noticeType: r.type,
                                  onClick: () => {
                                      t7(ec);
                                  },
                              }),
                              er.intl.format(er.t.zxU0Kp, { daysPastDue: e_ }),
                              (0, i.jsx)(u.Z_, {
                                  noticeType: en.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      t7(ec), (0, Z.openUserSettings)($.X.SUBSCRIPTIONS_PANEL);
                                  },
                                  children: er.intl.string(er.t.q8rxeS),
                              }),
                          ],
                      });
                  case en.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.DANGER,
                          children: [
                              (0, i.jsx)(u.PM, {
                                  noticeType: en.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      t7(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              er.intl.string(er.t.LlZaoX),
                              (0, i.jsx)(u.Z_, {
                                  noticeType: en.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      t7(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, Z.openUserSettings)($.X.SUBSCRIPTIONS_PANEL);
                                  },
                                  children: er.intl.string(er.t["Zpd+Yq"]),
                              }),
                          ],
                      });
                  case en.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.WARNING,
                          children: [
                              (0, i.jsx)(u.PM, {
                                  noticeType: en.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      t7(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              er.intl.string(er.t["30YfCr"]),
                              (0, i.jsx)(u.Z_, {
                                  noticeType: en.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      t7(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, Z.openUserSettings)($.X.SUBSCRIPTIONS_PANEL);
                                  },
                                  children: er.intl.string(er.t.U5pKWA),
                              }),
                          ],
                      });
                  case en.kqX.PREMIUM_MISSING_PAYMENT:
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.WARNING,
                          children: [
                              (0, i.jsx)(u.PM, {
                                  noticeType: en.kqX.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      t7(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              L === ei.PremiumTypes.TIER_1
                                  ? er.intl.formatToPlainString(er.t.b6QUvf, { daysLeft: r.metadata.daysLeft })
                                  : L === ei.PremiumTypes.TIER_0
                                    ? er.intl.formatToPlainString(er.t["tURZ/M"], { daysLeft: r.metadata.daysLeft })
                                    : er.intl.formatToPlainString(er.t.AyC74I, { daysLeft: r.metadata.daysLeft }),
                              (0, i.jsx)(u.Z_, {
                                  noticeType: en.kqX.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      t7(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, Z.openUserSettings)($.X.SUBSCRIPTIONS_PANEL);
                                  },
                                  children:
                                      L === ei.PremiumTypes.TIER_1
                                          ? er.intl.string(er.t.lboF5O)
                                          : L === ei.PremiumTypes.TIER_0
                                            ? er.intl.string(er.t["4UPwOq"])
                                            : er.intl.string(er.t["P/VvGb"]),
                              }),
                          ],
                      });
                  case en.kqX.BACK_TO_PREVIOUS_SCREEN:
                      return (0, i.jsx)(te, {
                          buttonText: r.buttonText ?? er.intl.string(er.t["/g10LC"]),
                          onGoBack: r.callback,
                          onDismiss: () => t7(),
                          showCloseButton: !0,
                      });
                  case en.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
                      return (0, i.jsx)(eY, { guildId: t, analyticsLocations: s });
                  case en.kqX.QUARANTINED:
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.DANGER,
                          children: [
                              er.intl.string(er.t.DVFJYf),
                              (0, i.jsx)(u.eC, {
                                  href: t0.q,
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: er.intl.string(er.t.kvHdFN),
                              }),
                              (0, i.jsx)(T.Anchor, {
                                  href: tZ.A.getArticleURL(en.MVz.QUARANTINE),
                                  target: "_blank",
                                  className: es.yw,
                                  children: er.intl.string(er.t.hvVgAZ),
                              }),
                          ],
                      });
                  case en.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: eA, decisionId: eu } = r.metadata;
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.WARNING,
                          children: [
                              (0, i.jsx)(u.PM, {
                                  noticeType: en.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != t && (0, eX.wu)(t), t7(eA);
                                  },
                              }),
                              er.intl.string(er.t.B8ruyY),
                              (0, i.jsx)(u.zr, {
                                  onClick: () => {
                                      null != t &&
                                          (0, eX.W5)(t, eu, () => {
                                              t7(eA), (0, eX.wu)(t);
                                          });
                                  },
                                  children: er.intl.string(er.t.oX14El),
                              }),
                              null != t
                                  ? (0, i.jsx)(u.zr, {
                                        onClick: () =>
                                            tt.A.open(t, en.BEX.GUILD_AUTOMOD, void 0, en.nd0.AUTOMOD_MENTION_SPAM),
                                        children: er.intl.string(er.t["1R7QIx"]),
                                    })
                                  : null,
                          ],
                      });
                  case en.kqX.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.DANGER,
                          children: [
                              (0, i.jsx)(u.PM, {
                                  noticeType: en.kqX.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      r.metadata?.streamKey != null && (0, tD.lk)(r.metadata.streamKey);
                                  },
                              }),
                              er.intl.string(er.t.rOx44m),
                          ],
                      });
                  case en.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.BRAND,
                          children: [
                              (0, i.jsx)(u.PM, {
                                  onClick: () => {
                                      t7(r.metadata?.dismissUntil);
                                  },
                                  noticeType: en.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                              }),
                              er.intl.string(er.t["0klLS7"]),
                              (0, i.jsx)(u.Z_, {
                                  onClick: () => {
                                      (0, N.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("16833"),
                                              n.e("26484"),
                                              n.e("36685"),
                                          ]).then(n.bind(n, 307750));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                          t7(r.metadata?.dismissUntil);
                                  },
                                  noticeType: en.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: er.intl.string(er.t.e4y2VM),
                              }),
                          ],
                      });
                  case en.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsx)(tm, {});
                  case en.kqX.PREMIUM_MARKETING_NAGBAR:
                      return (0, i.jsx)(tS, {});
                  case en.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR:
                      return (0, i.jsx)(tR, { premiumSubscription: r.metadata.premiumSubscription });
                  case en.kqX.SYSTEM_SERVICE_WARNING:
                      return (0, i.jsx)(tB, {});
                  case en.kqX.RESTRICTED_HOURS_WARNING:
                      return (0, i.jsxs)(u.$T, {
                          color: u.Hv.WARNING,
                          children: [
                              (0, i.jsx)(u.PM, { onClick: () => t7(), noticeType: r.type }),
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
    let { analyticsLocations: e } = (0, G.Ay)(L.A.NOTICE);
    return (0, i.jsx)(G.f5, { value: e, children: (0, i.jsx)(t6, {}) });
}
