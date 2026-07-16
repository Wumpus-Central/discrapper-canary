n.d(t, { w: () => nt, A: () => ni });
var i = n(627968),
    l = n(64700),
    r = n(989349),
    s = n.n(r);
if (21552 == n.j) var a = n(936504);
var o = n(299855),
    E = n.n(o),
    c = n(17928);
if (21552 == n.j) var u = n(462887);
if (21552 == n.j) var _ = n(834730);
if (21552 == n.j) var A = n(939249);
if (21552 == n.j) var T = n(417098);
if (21552 == n.j) var d = n(349288);
if (21552 == n.j) var I = n(403581);
if (21552 == n.j) var N = n(192308);
if (21552 == n.j) var R = n(289873);
var S = n(157559),
    O = n(827343),
    C = n(830215),
    D = n(228366);
function P(e) {
    D.h.dispatch({ type: "DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS", skuId: e });
}
var M = n(912851);
let p =
    21552 == n.j
        ? {
              clearRemoteDisconnectVoiceChannelId() {
                  D.h.dispatch({ type: "CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID" });
              },
              clearLastSessionVoiceChannelId() {
                  D.h.dispatch({ type: "CLEAR_LAST_SESSION_VOICE_CHANNEL_ID" });
              },
          }
        : null;
var m = n(730852),
    f = n(785796),
    g = n(55619),
    U = n(246605),
    h = n(271866),
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
if (21552 == n.j) var V = n(97483);
var w = n(803306),
    H = n(975807),
    Y = n(968309),
    W = n(532794),
    K = n(745299),
    $ = n(976860),
    Q = n(780964),
    z = n(718446),
    Z = n(766075),
    J = n(879945),
    ee = n(174459),
    et = n(379848),
    en = n(49999),
    ei = n(652215),
    el = n(202541),
    er = n(355097),
    es = n(375708),
    ea = n(448759);
function eo(e) {
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
                                    (0, H.A)(ei.AMi.META_QUEST), r(en.i.TAKE_ACTION);
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
                                                    challenge: l,
                                                    showAccountSettingsButton: !0,
                                                });
                                        });
                                    } catch (e) {
                                        (0, B.P0)((0, F.o)(es.intl.string(es.t.xSCvBf), V.Ck.FAILURE));
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
                                    r(en.i.UNKNOWN), (0, w.lA)(ei.nhx.PREMIUM_PROMO_DISMISSED, !0);
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
}
var eE = n(877624),
    ec = n(412260),
    eu = n(131607),
    e_ = n(823901);
function eA(e) {
    let t,
        n,
        { dismissibleContent: l } = e,
        { snowflakeId: r, couldShow: s } =
            ((t = (0, c.bG)([ec.A], () => ec.A.getGiftPromotion()?.id)),
            (n = (0, c.bG)([ec.A], () => null != ec.A.getMarketingComponentByType(eE.C.GIFT_REMINDER_NAGBAR))),
            l === b.M.GIFTING_PROMOTION_REMINDER
                ? { snowflakeId: t, couldShow: n && null != t }
                : { snowflakeId: void 0, couldShow: !1 }),
        [a, o] = (0, eu.Cc)(s ? l : null, r ?? "", en.m.NOTICE_BAR, !0);
    return null == a
        ? null
        : a === b.M.GIFTING_PROMOTION_REMINDER
          ? (0, i.jsx)(e_.y, { markAsDismissed: (e) => o(e) })
          : void 0;
}
var eT = n(264779),
    ed = n(962644),
    eI = n(287809),
    eN = n(428262),
    eR = n(946319);
function eS(e) {
    let { dismissibleContent: t } = e,
        n = (0, eT.Cp)(),
        r = (0, c.bG)([eI.default], () => !eN.Ay.isPremium(eI.default.getCurrentUser())),
        s = l.useCallback(() => {
            ee.default.track(ei.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED),
                (0, Z.openUserSettings)(Q.X.GIFT_PANEL),
                ed.Ay.dismissOutboundPromotionNotice();
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
                                      ed.Ay.dismissOutboundPromotionNotice(), null !== n && n(en.i.USER_DISMISS);
                                  },
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: eR.P }),
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
}
var eO = n(532205),
    eC = n(487329),
    eD = n(102609),
    eP = n(736056);
if (21552 == n.j) var eM = n(194261);
var ep = n(548118),
    em = n(134413),
    ef = n(221950),
    eg = n(71393),
    eU = n(309010),
    eh = n(967198),
    ek = n(585510),
    ey = n(834409),
    eL = n(903093),
    ex = n(746080),
    eG = n(500928);
function ej(e) {
    let { onDismiss: t } = e,
        r = (0, c.bG)([eh.A], () => eh.A.getGuildId()),
        s = (0, c.bG)([eU.A], () => (null != r ? eU.A.getChannelId(r) : null), [r]),
        a = r ?? null,
        o = (0, c.bG)([eg.A], () => (null != a ? eg.A.getGuild(a) : null), [a]),
        { shouldShowIncidentActions: E, incidentData: u, isUnderLockdown: _ } = (0, ek.Li)(a),
        A = (0, em.fw)(o?.id ?? ei.dJq),
        d = l.useCallback(() => null != o && (0, ef.aZ)(o.id), [o]);
    if (null == o || null == u || !E) return null;
    let I = (e) => {
            e && A && s !== ex.VV.MEMBER_SAFETY && d()
                ? ee.default.track(ei.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                      notice_type: ei.kqX.GUILD_RAID_NOTIFICATION,
                      guild_id: o.id,
                  })
                : (0, N.openModalLazy)(async () => {
                      let e = { source: ey.Eo.NAGBAR, alertType: (0, eL.$5)(u) },
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
        R = (0, i.jsx)(ep.Ay, { className: eG.$f, guild: o, size: ep.Ay.Sizes.MINI }),
        S = (0, eL.ql)(u, o.name);
    if (null != (u.dmsDisabledUntil ?? u.invitesDisabledUntil) && _)
        return (0, i.jsxs)(T.$T, {
            className: eG.lm,
            color: T.Hv.NEUTRAL,
            children: [
                (0, i.jsx)(T.PM, { onClick: t, noticeType: ei.kqX.GUILD_RAID_NOTIFICATION }),
                R,
                S,
                (0, i.jsx)(T.zr, {
                    className: eG.hP,
                    onClick: () => I(!1),
                    children: (0, i.jsxs)("div", {
                        className: eG.rx,
                        children: [
                            (0, i.jsx)(eM.X, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)("span", { children: es.intl.string(es.t["c+7oa7"]) }),
                        ],
                    }),
                }),
            ],
        });
    let O = (0, eL.P$)(u)
            ? es.intl.formatToPlainString(es.t.tZTx2E, { guildName: o.name })
            : (0, eL.Qm)(u)
              ? es.intl.formatToPlainString(es.t["1bSmxr"], { guildName: o.name })
              : es.intl.formatToPlainString(es.t.W87xDE, { guildName: o.name }),
        C = A && s === ex.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(T.$T, {
        className: eG.lm,
        color: T.Hv.WARNING,
        children: [
            (0, i.jsx)(T.PM, { onClick: t, noticeType: ei.kqX.GUILD_RAID_NOTIFICATION }),
            R,
            O,
            !C &&
                (0, i.jsx)(T.zr, {
                    className: eG.hP,
                    onClick: () => I(!0),
                    children: (0, i.jsx)("div", {
                        className: eG.rx,
                        children: (0, i.jsx)("span", { children: es.intl.string(es.t.zDJDhr) }),
                    }),
                }),
        ],
    });
}
var eq = n(995786),
    ev = n(206835),
    eX = n(280450),
    eb = n(696451),
    eB = n(229527),
    eF = n(81400),
    eV = n(340837);
function ew(e) {
    let { guildId: t, analyticsLocations: n } = e,
        [l, r] = (0, eF.j8)({ guildId: t, analyticsLocations: n }),
        s = r ? es.intl.string(es.t["6ndMcq"]) : es.intl.string(es.t["0eiu6J"]),
        a = r ? es.intl.string(es.t.S09nw4) : es.intl.string(es.t.tEttXd);
    return (0, i.jsxs)(T.$T, { color: T.Hv.DANGER, children: [s, (0, i.jsx)(T.zr, { onClick: l, children: a })] });
}
function eH() {
    let e = (0, ev.A)({ scrollPosition: er._F.GUILD_TAG });
    return (0, i.jsxs)(T.$T, {
        color: T.Hv.DANGER,
        children: [
            es.intl.string(es.t.Zqlecb),
            (0, i.jsx)(T.zr, { onClick: e, children: es.intl.string(es.t.SJehVW) }),
        ],
    });
}
function eY(e) {
    let { analyticsLocations: t, ...n } = e,
        { analyticsLocations: l } = (0, G.Ay)(t, x.A.AUTOMOD_NAGBAR_NOTICE),
        r = (0, c.bG)([eX.default, eb.Ay], () => {
            if (null == n.guildId) return new Set();
            let e = eX.default.getId();
            return (0, eB.wj)(eb.Ay.getMember(n.guildId, e));
        }, [n.guildId]);
    return r.has(eV.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || r.has(eV.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, i.jsx)(ew, { ...n, analyticsLocations: l })
        : r.has(eV.D.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, i.jsx)(eH, {})
          : (0, i.jsx)(ew, { ...n, analyticsLocations: l });
}
var eW = n(202384),
    eK = n(51758);
n(321073);
var e$ = n(503698),
    eQ = n.n(e$);
if (21552 == n.j) var ez = n(873263);
if (21552 == n.j) var eZ = n(314116);
if (21552 == n.j) var eJ = n(821609);
var e0 = n(334465),
    e1 = n(624458),
    e2 = n(513461),
    e5 = n(709977),
    e3 = n(212455),
    e6 = n(182430),
    e7 = n(580537);
let e8 =
    21552 == n.j
        ? function () {
              let e = (0, c.bG)([eh.A], () => eh.A.getGuildId(), []),
                  t = (0, c.bG)([eg.A], () => eg.A.getGuild(e), [e]),
                  l = (0, c.bG)([e3.A], () => (null != e ? e3.A.getRequest(e) : null), [e]),
                  r = (0, ez.zy)(),
                  s = (0, e0.B)(r.pathname, ei.BVt.CHANNEL(t?.id, ex.VV.GUILD_ONBOARDING))?.isExact === !0;
              if (null == t || !(0, e5.Qd)(t) || s) return null;
              let a = l?.applicationStatus ?? e2.B5.STARTED,
                  o = null,
                  E = null,
                  u = null,
                  A = [e6.lm, e7.lm];
              switch (a) {
                  case e2.B5.SUBMITTED:
                      (o = es.intl.string(es.t["5iLvSx"])),
                          (E = es.intl.string(es.t.mqtdmQ)),
                          (u = () => {
                              (0, eZ.A)({
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
                          (E = es.intl.string(es.t["8RrsHr"])),
                          (u = () => {
                              (0, N.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([n.e("25099"), n.e("14382")]).then(
                                      n.bind(n, 463325),
                                  );
                                  return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                              });
                          }),
                          A.push(e6.z3);
                      break;
                  default:
                      (o = es.intl.string(es.t.G5YKXP)),
                          (E = es.intl.string(es.t["r8/DT+"])),
                          (u = () => {
                              (0, eW.Ze)(t.id);
                          });
              }
              return (0, i.jsxs)("div", {
                  className: eQ()(...A),
                  children: [
                      (0, i.jsx)(_.E, { className: e6.wx, variant: "text-sm/normal", children: o }),
                      (0, i.jsx)(eJ.$, { variant: "overlay-primary", size: "sm", onClick: u, text: E }),
                  ],
              });
          }
        : null;
if (21552 == n.j) var e4 = n(477155);
var e9 = n(22877);
function te(e) {
    let { buttonText: t, onGoBack: n, onDismiss: l, showCloseButton: r } = e;
    return (0, i.jsxs)(T.$T, {
        className: e9.eR,
        children: [
            r && (0, i.jsx)(T.PM, { onClick: l, className: e9.b, noticeType: ei.kqX.BACK_TO_PREVIOUS_SCREEN }),
            (0, i.jsx)(eJ.$, { text: t, variant: "overlay-secondary", size: "sm", icon: e4.r, onClick: n }),
        ],
    });
}
var tt = n(468689),
    tn = n(699609);
if (21552 == n.j) var ti = n(862482);
var tl = n(66834),
    tr = n(385648),
    ts = n(484154);
let ta =
    21552 == n.j
        ? function () {
              let e = (0, c.bG)([eh.A], () => eh.A.getGuildId(), []),
                  t = (0, c.bG)([eg.A], () => eg.A.getGuild(e), [e]),
                  [n, r] = l.useState(!1);
              if (null == t) return null;
              let s = async () => {
                  r(!0);
                  try {
                      tr.cf(t.id), await tl.A.joinGuild(t.id, { source: ei.Q4z.NOTICE_BAR });
                  } catch {
                      r(!1);
                  }
              };
              return (0, i.jsxs)("div", {
                  className: eQ()(ts.lm, e7.lm),
                  children: [
                      (0, i.jsxs)(ti.$n, {
                          look: ti.$n.Looks.OUTLINED,
                          color: ti.$n.Colors.WHITE,
                          size: ti.$n.Sizes.NONE,
                          className: eQ()(ts.x6, ts.aX),
                          innerClassName: ts.gb,
                          onClick: function () {
                              (0, $.JK)().goBack();
                          },
                          children: [
                              (0, i.jsx)(e4.r, { size: "xs", color: "currentColor", className: ts.UE }),
                              es.intl.string(es.t["13/7kX"]),
                          ],
                      }),
                      (0, i.jsx)(_.E, {
                          className: ts.wx,
                          variant: "text-sm/normal",
                          children: es.intl.string(es.t["N/y2WE"]),
                      }),
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
          }
        : null;
var to = n(801644),
    tE = n(74848),
    tc = n(899847),
    tu = n(191627),
    t_ = n(602339),
    tA = n(111344);
let tT =
    21552 == n.j
        ? {
              "--custom-notice-background": "var(--background-feedback-warning)",
              "--custom-notice-text": "var(--text-strong)",
          }
        : null;
function td(e) {
    let { daysRemaining: t } = e;
    (0, es.useSyncMessages)(t_.messagesLoader);
    let n = l.useCallback(() => {
        ee.default.track(ei.HAw.PARENTAL_CONSENT_WARNING_BANNER_TAPPED, { days_remaining: t }),
            tc.Ay.selectTab(tu.u9.REQUESTS),
            (0, Z.openUserSettings)(Q.X.FAMILY_CENTER_PANEL);
    }, [t]);
    return (0, i.jsx)(T.$T, {
        color: T.Hv.CUSTOM,
        style: tT,
        children: (0, i.jsxs)("div", {
            className: tA.Q,
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
var tI = n(234419);
if (21552 == n.j) var tN = n(661531);
var tR = n(367727),
    tS = n(635995),
    tO = n(88001),
    tC = n(466919),
    tD = n(375043);
function tP(e) {
    let { premiumSubscription: t } = e,
        r = t?.id,
        s = l.useCallback(() => {
            null != r && (0, tR.qr)(b.M.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR, r, { dismissAction: en.i.USER_DISMISS });
        }, [r]),
        a = l.useCallback(() => {
            s(),
                ee.default.track(ei.HAw.APP_NOTICE_CLOSED, {
                    notice_type: ei.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
                });
        }, [s]),
        o = l.useCallback(() => {
            null != t &&
                (ee.default.track(ei.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: ei.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
                }),
                s(),
                (0, N.openModalLazy)(async () => {
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
    return (0, i.jsxs)(tS.T0, {
        onClick: a,
        className: tD.A,
        children: [
            (0, i.jsx)(I.t, { color: tN.A.colors.ICON_STRONG }),
            (0, i.jsx)(tS.In, {
                children: es.intl.format(tC.default.fFt9bd, { premiumGroupProductName: (0, tO.DP)() }),
            }),
            (0, i.jsx)(eJ.$, {
                onClick: o,
                text: es.intl.string(tC.default["5fZHp3"]),
                size: "sm",
                variant: "overlay-primary",
            }),
        ],
    });
}
var tM = n(754804),
    tp = n(378974),
    tm = n(340124),
    tf = n(14594);
function tg() {
    let [e, t] = (0, eu.Wl)(b.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: tf.aH });
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
if (21552 == n.j) var tU = n(825484);
var th = n(379257),
    tk = n(847599),
    ty = n(734057),
    tL = n(849736),
    tx = n(354583),
    tG = n(366098),
    tj = n(418208),
    tq = n(992262);
function tv(e) {
    if (!e && (0, tj.Cf)())
        return void th.A.showAgeVerificationGetStartedModal({ entryPoint: tk.q1.STAGE_CHANNEL_RAISE_HAND });
    let t = eU.A.getVoiceChannelId();
    if (null == t) return;
    let n = ty.A.getChannel(t);
    null != n && (0, tL.e7)(n, e);
}
function tX(e) {
    let { channelId: t } = e,
        n = (0, tG.D3)(t) ?? 0,
        l = (0, tG.Xk)(t) ?? 0;
    return n > 0 && l > 0
        ? (0, i.jsx)("div", {
              className: tq.Z5,
              children: (0, i.jsx)("div", { className: eQ()(tq.qQ, tq.lN), children: es.intl.string(es.t.xlJRfv) }),
          })
        : n > 0
          ? (0, i.jsx)("div", {
                className: tq.Z5,
                children: (0, i.jsx)("div", { className: eQ()(tq.qQ, tq.lN), children: es.intl.string(es.t.WYad9Z) }),
            })
          : l > 0
            ? (0, i.jsx)("div", {
                  className: tq.Z5,
                  children: (0, i.jsx)("div", { className: eQ()(tq.qQ, tq.lN), children: es.intl.string(es.t.eHq2OF) }),
              })
            : null;
}
function tb() {
    let e = (0, tx.A)();
    return null == e
        ? null
        : (0, i.jsxs)(T.$T, {
              className: tq.kL,
              color: T.Hv.DEFAULT,
              children: [
                  es.intl.string(es.t.Ul1RJQ),
                  (0, i.jsx)(tX, { channelId: e.id }),
                  (0, i.jsxs)(tU.e, {
                      size: "sm",
                      className: tq.GC,
                      children: [
                          (0, i.jsx)(eJ.$, {
                              variant: "overlay-primary",
                              text: es.intl.string(es.t.MpO0px),
                              onClick: () => tv(!1),
                          }),
                          (0, i.jsx)(eJ.$, {
                              variant: "secondary",
                              onClick: () => tv(!0),
                              text: es.intl.string(es.t["1YDv7a"]),
                          }),
                      ],
                  }),
              ],
          });
}
var tB = n(952818),
    tF = n(935671);
function tV() {
    (0, tF.sL)("nagbar");
}
function tw() {
    return null == (0, c.bG)([tB.Ay], () => tB.Ay.getVisibleGame())
        ? null
        : (0, i.jsxs)(T.$T, {
              color: T.Hv.DANGER,
              children: [
                  (0, i.jsx)(T.PM, { noticeType: ei.kqX.SYSTEM_SERVICE_WARNING, onClick: () => nt() }),
                  es.intl.string(es.t["5rPt+j"]),
                  (0, i.jsx)(T.Z_, {
                      onClick: tV,
                      noticeType: ei.kqX.SYSTEM_SERVICE_WARNING,
                      children: es.intl.string(es.t["1iI46O"]),
                  }),
              ],
          });
}
function tH() {
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
if (21552 == n.j) var tY = n(189213);
if (21552 == n.j) var tW = n(150934);
function tK(e) {
    let [t, n] = l.useState(!1);
    return (0, i.jsx)(tY.Modal, {
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
        actionBarInput: (0, i.jsx)(tW.S, {
            checked: t,
            onChange: (e) => n(e),
            label: es.intl.string(es.t.XAiAgD),
            labelType: "secondary",
        }),
        ...e,
    });
}
var t$ = n(186295),
    tQ = n(763827),
    tz = n(67480),
    tZ = n(147964),
    tJ = n(177141),
    t0 = n(975571),
    t1 = n(723702),
    t2 = n(325278),
    t5 = n(831502),
    t3 = n(731854);
let t6 = new X.A("Notice");
function t7(e) {
    let { error: t, allowClick: n = !1 } = e,
        l = (0, eC.B1)(t)?.errorCode,
        r = es.intl.formatToPlainString(es.t.ejOT95, { errorCode: l }),
        s = (0, i.jsx)(_.E, {
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
              onClick: () => open(t0.A.getArticleURL(ei.MVz.AV_ERROR_CODES)),
              children: s,
          })
        : s;
}
function t8(e) {
    let { noticeType: t } = e;
    return (0, i.jsxs)(T.$T, {
        color: T.Hv.DANGER,
        children: [
            (0, i.jsx)(T.PM, {
                noticeType: t,
                onClick: () => {
                    nt();
                },
            }),
            es.intl.string(es.t.o3zuYz),
            (0, i.jsx)(t7, { error: eC.iy.NO_INPUT_DEVICES }),
            (0, i.jsx)(T.eC, {
                href: t0.A.getArticleURL(ei.MVz.NO_INPUT_DETECTED),
                noticeType: t,
                children: es.intl.string(es.t.RYKKox),
            }),
        ],
    });
}
function t4(e) {
    let { noticeType: t } = e;
    return (0, i.jsxs)(T.$T, {
        color: T.Hv.DANGER,
        children: [
            (0, i.jsx)(T.PM, {
                noticeType: t,
                onClick: () => {
                    nt();
                },
            }),
            es.intl.string(es.t.Up0ApK),
            (0, i.jsx)(t7, { error: eC.iy.VIDEO_BACKGROUND_UNAVAILABLE }),
            (0, i.jsx)(T.zr, {
                onClick: () => (0, Z.openUserSettings)(Q.X.CAMERA_CATEGORY),
                children: es.intl.string(es.t.kRwxfi),
            }),
        ],
    });
}
function t9(e) {
    return (0, t1.isWindows)() && E().satisfies(y.A?.os.release, t2.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function ne(e) {
    let t,
        n,
        { noticeType: l } = e,
        r = (0, tE.x5)(t3.oh.AUDIO_INPUT),
        s = r?.guid ?? "",
        { inputDeviceOSMuted: a, inputDeviceOSVolume: o } = (0, c.cf)([t$.Ay], () => ({
            inputDeviceOSMuted: t$.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: t$.Ay.getInputDeviceOSVolume(),
        })),
        E = !1;
    return (
        !0 === a
            ? ((t = es.intl.string(es.t.ppW3ri)),
              (n = (0, i.jsx)(T.eC, { href: t9(s), noticeType: l, children: es.intl.string(es.t.QghSIq) })))
            : 0 === o
              ? ((t = es.intl.string(es.t.j4gGA4)),
                (n = (0, i.jsx)(T.eC, { href: t9(s), noticeType: l, children: es.intl.string(es.t.QghSIq) })))
              : t$.Ay.supports(t3.O5.LOOPBACK)
                ? ((t = es.intl.string(es.t.dNAJ18)),
                  (E = !0),
                  (n = (0, i.jsx)(T.zr, {
                      onClick: () => {
                          (0, Z.openUserSettings)(Q.X.VOICE_AND_VIDEO_PANEL);
                      },
                      children: es.intl.string(es.t.I6YlB4),
                  })))
                : ((t = es.intl.string(es.t.nCO9bI)),
                  (n = (0, i.jsx)(T.eC, {
                      href: t0.A.getArticleURL(ei.MVz.NO_INPUT_DETECTED),
                      noticeType: l,
                      children: es.intl.string(es.t.RYKKox),
                  }))),
        (0, i.jsxs)(T.$T, {
            color: T.Hv.DANGER,
            children: [
                (0, i.jsx)(T.PM, {
                    noticeType: l,
                    onClick: () => {
                        nt(), (0, N.openModal)((e) => (0, i.jsx)(tK, { ...e }));
                    },
                }),
                t,
                (0, i.jsx)(t7, { allowClick: E, error: eC.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function nt(e) {
    M.A.dismiss(null != e ? { untilAtLeast: s()(e) } : void 0);
}
let nn =
    21552 == n.j
        ? l.memo(function () {
              let e = (0, c.bG)([eI.default], () => eI.default.getCurrentUser()),
                  t = (0, c.bG)([eh.A], () => eh.A.getGuildId()),
                  r = (0, c.bG)([tJ.Ay], () => tJ.Ay.getNotice()),
                  { analyticsLocations: s } = (0, G.Ay)(),
                  o = (0, k.Ay)(),
                  E = (0, eK.H)(t),
                  _ = (0, tI.V)();
              if (
                  (l.useEffect(() => {
                      if (r?.type != null) {
                          let e;
                          if (
                              null == _ &&
                              (r.type === ei.kqX.PREMIUM_TIER_2_TRIAL_ENDING ||
                                  r.type === ei.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
                          )
                              return;
                          let n = {};
                          null != t && (n.guild_id = t),
                              _?.trial_id != null && (n.trial_id = _.trial_id),
                              (e = { notice_type: r.type, ...n }),
                              ee.default.track(ei.HAw.APP_NOTICE_VIEWED, e);
                      }
                  }, [r?.type, t, _]),
                  l.useEffect(() => {
                      if (null != r && r.type === ei.kqX.SURVEY && null != r.metadata) {
                          let { metadata: e } = r,
                              t = eP.A.getUserExperimentDescriptor(e.id);
                          null != t && (0, eD.LQ)(e.id, t),
                              (async () => {
                                  r.metadata?.id != null && (await (0, U.oX)(r.metadata?.id));
                              })();
                      }
                  }, [r]),
                  null == r)
              )
                  return null;
              let A = null != r.type ? tJ.Re[r.type] : null,
                  D = null != r.type ? tJ.rV[r.type] : null,
                  M = null != r.type ? tJ.f7[r.type] : null,
                  x = tJ.pe[r.type];
              if (null != A) return (0, i.jsx)(eO.$, { dismissibleContent: A, noticeType: r.type });
              if (null != D) return (0, i.jsx)(eA, { dismissibleContent: D });
              if (null != M) return (0, i.jsx)(eS, { dismissibleContent: M });
              if (null != x) return (0, i.jsx)(eo, { dismissibleContent: x, noticeType: r.type });
              let X = r.metadata?.premiumType;
              switch (r.type) {
                  case ei.kqX.PTT_NO_KEYBIND_WARNING:
                      return (0, i.jsx)(tH, {});
                  case ei.kqX.LURKING_GUILD:
                      return (0, i.jsx)(ta, {});
                  case ei.kqX.PENDING_MEMBER:
                      return (0, i.jsx)(e8, {});
                  case ei.kqX.INVITED_TO_SPEAK:
                      return (0, i.jsx)(tb, {});
                  case ei.kqX.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: b } = r.metadata;
                      return (0, i.jsx)(ej, { onDismiss: () => nt(b) });
                  case ei.kqX.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: B } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nt(B), noticeType: r.type }),
                              es.intl.format(es.t["08KQ1P"], {
                                  helpCenterLink: t0.A.getArticleURL(ei.MVz.WIN32_DEPRECATE),
                              }),
                          ],
                      });
                  case ei.kqX.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: F } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nt(F), noticeType: r.type }),
                              es.intl.format(es.t["8Je+dX"], {
                                  helpCenterLink: t0.A.getArticleURL(ei.MVz.WIN7_8_DEPRECATE),
                              }),
                          ],
                      });
                  case ei.kqX.WIN_COMPAT_MODE_MESSAGE:
                      let { dismissUntil: V } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nt(V), noticeType: r.type }),
                              es.intl.string(es.t["9DJgOg"]),
                          ],
                      });
                  case ei.kqX.MACOS_DEPRECATED_MESSAGE:
                      let { dismissUntil: w } = r.metadata,
                          H = 20 === parseInt(y.A?.os.release.split(".")[0]);
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nt(w), noticeType: r.type }),
                              es.intl.format(es.t.q8VPLo, {
                                  helpCenterLink: t0.A.getArticleURL(
                                      H ? ei.MVz.MACOS_20_DEPRECATE : ei.MVz.MACOS_19_DEPRECATE,
                                  ),
                              }),
                          ],
                      });
                  case ei.kqX.E2EE_UPDATE_REQUIRED:
                      let { dismissUntil: Y } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nt(Y), noticeType: r.type }),
                              es.intl.format(t1.isPlatformEmbedded ? es.t.J232TI : es.t.vceuiL, {
                                  helpCenterLink: t0.A.getArticleURL(ei.MVz.END_TO_END_ENCRYPTION),
                              }),
                          ],
                      });
                  case ei.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nt(), noticeType: r.type }),
                              es.intl.string(es.t.iW0fcQ),
                              (0, i.jsx)(T.eC, {
                                  href: t0.A.getArticleURL(ei.MVz.WINDOWS_MEDIA_PACK),
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
                              (0, i.jsx)(T.PM, { onClick: () => nt(), noticeType: r.type }),
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
                              (0, i.jsx)(T.PM, { onClick: () => nt(), noticeType: r.type }),
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
                                      p.clearRemoteDisconnectVoiceChannelId(), nt();
                                  },
                                  noticeType: r.type,
                              }),
                              es.intl.string(es.t.bOQ3jV),
                              (0, i.jsx)(T.Z_, {
                                  onClick: () => {
                                      let e = tQ.A.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != ty.A.getChannel(e) && m.default.selectVoiceChannel(e);
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
                                      p.clearLastSessionVoiceChannelId(), nt();
                                  },
                                  noticeType: r.type,
                              }),
                              es.intl.string(es.t.jY2lUA),
                              (0, i.jsx)(T.Z_, {
                                  onClick: () => {
                                      let e = tQ.A.getLastSessionVoiceChannelId();
                                      null != e && null != ty.A.getChannel(e) && m.default.selectVoiceChannel(e);
                                  },
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.vD60Pv),
                              }),
                          ],
                      });
                  case ei.kqX.SPOTIFY_AUTO_PAUSED:
                      let K = L.A.get(ei.fg2.SPOTIFY);
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nt(), noticeType: r.type }),
                              (0, i.jsx)("img", {
                                  alt: "",
                                  className: ea.tV,
                                  src: (0, u.q)(o) ? K.icon.darkSVG : K.icon.whiteSVG,
                              }),
                              es.intl.string(es.t.D8Cp76),
                              (0, i.jsx)(T.Z_, {
                                  onClick: () => (0, Z.openUserSettings)(Q.X.VOICE_AND_VIDEO_PANEL),
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.NiTd0e),
                              }),
                              (0, i.jsx)(d.Anchor, {
                                  className: ea.uD,
                                  href: t0.A.getArticleURL(ei.MVz.SPOTIFY_AUTO_PAUSED),
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
                                  onClick: () => (E && null != t ? (0, eW.Ze)(t) : q.R()),
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
                              (0, i.jsx)(T.PM, { onClick: () => f.A.ackScheduledMaintenance(), noticeType: r.type }),
                              es.intl.format(es.t["yb96S+"], r.metadata),
                              (0, i.jsx)(T.eC, {
                                  href: `${ei.qF7.STATUS}/incidents/${r.metadata.id}`,
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.hvVgAZ),
                              }),
                          ],
                      });
                  case ei.kqX.NO_INPUT_DETECTED:
                      return (0, i.jsx)(ne, { noticeType: r.type });
                  case ei.kqX.NO_INPUT_DEVICES_DETECTED:
                      return (0, i.jsx)(t8, { noticeType: r.type });
                  case ei.kqX.VIDEO_BACKGROUND_UNAVAILABLE:
                      return (0, i.jsx)(t4, { noticeType: r.type });
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
                                          O.A.setEnableHardwareMuteNotice(!1), nt();
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
                                          O.A.setEnableHardwareMuteNotice(!1), nt();
                                      },
                                  }),
                              ],
                          });
                      return null;
                  case ei.kqX.STREAMER_MODE:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.STREAMER_MODE,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nt(), noticeType: ei.kqX.STREAMER_MODE }),
                              es.intl.string(es.t.iEgBXp),
                              (0, i.jsx)(T.Z_, {
                                  onClick: () => g.A.setEnabled(!1),
                                  noticeType: ei.kqX.STREAMER_MODE,
                                  children: es.intl.string(es.t.R9GHya),
                              }),
                          ],
                      });
                  case ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == r.metadata) return null;
                      let { skuId: $, applicationId: z } = r.metadata,
                          J = tz.A.get($),
                          et = j.A.getApplication(z);
                      if (null == J || null == et) return null;
                      let en = { page: ei.liQ.IN_APP };
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => P(J.id),
                                  noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: ea.PC }),
                              es.intl.format(es.t["g3MU/+"], { applicationName: et.name, skuName: J.name }),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: async () => {
                                      try {
                                          let { openIAPPurchaseModal: e } = await Promise.all([
                                              n.e("86832"),
                                              n.e("76342"),
                                              n.e("60988"),
                                              n.e("20950"),
                                              n.e("56372"),
                                              n.e("71441"),
                                              n.e("49623"),
                                              n.e("35316"),
                                              n.e("38838"),
                                              n.e("45214"),
                                              n.e("99253"),
                                              n.e("47754"),
                                              n.e("33526"),
                                              n.e("89510"),
                                              n.e("90862"),
                                              n.e("97189"),
                                              n.e("16918"),
                                              n.e("33730"),
                                              n.e("24059"),
                                              n.e("42306"),
                                              n.e("11291"),
                                              n.e("83893"),
                                              n.e("83133"),
                                              n.e("63051"),
                                              n.e("84873"),
                                              n.e("19709"),
                                              n.e("67458"),
                                              n.e("58427"),
                                              n.e("28646"),
                                              n.e("65327"),
                                              n.e("41625"),
                                              n.e("7959"),
                                              n.e("61783"),
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
                                              n.e("77083"),
                                              n.e("46461"),
                                              n.e("47944"),
                                              n.e("64509"),
                                              n.e("49868"),
                                              n.e("90072"),
                                              n.e("80822"),
                                              n.e("50336"),
                                              n.e("84133"),
                                              n.e("13627"),
                                              n.e("57940"),
                                              n.e("78179"),
                                              n.e("48157"),
                                              n.e("44511"),
                                              n.e("37271"),
                                              n.e("82781"),
                                              n.e("39932"),
                                              n.e("70990"),
                                              n.e("15130"),
                                              n.e("57578"),
                                              n.e("57016"),
                                              n.e("45826"),
                                              n.e("42205"),
                                              n.e("55675"),
                                              n.e("27962"),
                                              n.e("64827"),
                                              n.e("10471"),
                                              n.e("63232"),
                                              n.e("7167"),
                                              n.e("84569"),
                                              n.e("61060"),
                                              n.e("54484"),
                                              n.e("36850"),
                                              n.e("60235"),
                                              n.e("77333"),
                                              n.e("6338"),
                                              n.e("47834"),
                                              n.e("18573"),
                                              n.e("78157"),
                                              n.e("44057"),
                                              n.e("53782"),
                                              n.e("88774"),
                                              n.e("31988"),
                                              n.e("44571"),
                                              n.e("34303"),
                                              n.e("40291"),
                                              n.e("2368"),
                                              n.e("33115"),
                                              n.e("97270"),
                                              n.e("73122"),
                                              n.e("8304"),
                                              n.e("93159"),
                                              n.e("55936"),
                                              n.e("89088"),
                                              n.e("42834"),
                                              n.e("94723"),
                                              n.e("62931"),
                                              n.e("45959"),
                                              n.e("58529"),
                                              n.e("58038"),
                                              n.e("71202"),
                                              n.e("62531"),
                                              n.e("52846"),
                                              n.e("6174"),
                                              n.e("46070"),
                                              n.e("29963"),
                                              n.e("38513"),
                                              n.e("63645"),
                                              n.e("23532"),
                                              n.e("52557"),
                                              n.e("63123"),
                                              n.e("834"),
                                              n.e("24038"),
                                              n.e("55654"),
                                              n.e("50097"),
                                              n.e("23164"),
                                              n.e("91824"),
                                              n.e("62075"),
                                          ]).then(n.bind(n, 4630));
                                          await e({
                                              applicationId: et.id,
                                              skuId: J.id,
                                              openPremiumPaymentModal: () => {
                                                  (0, W.A)({
                                                      initialPlanId: null,
                                                      subscriptionTier: el.pe.TIER_2,
                                                      analyticsLocations: s,
                                                      analyticsObject: en,
                                                  });
                                              },
                                              analyticsLocations: s,
                                              analyticsLocationObject: en,
                                              context: __OVERLAY__ ? ei.BRT.OVERLAY : ei.BRT.APP,
                                          }),
                                              P(J.id);
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
                          l = j.A.getApplication(t);
                      if (null == n || null == l) return null;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => nt(),
                                  noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: ea.PC }),
                              es.intl.format(es.t.LquIKC, { applicationName: l.name, skuName: n.name }),
                              (0, i.jsx)(T.zr, {
                                  children: (0, i.jsx)(a.N_, {
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
                      let e = r.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: l, url: s, embedded: a, id: o } = e;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.CUSTOM,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: ei.kqX.SURVEY,
                                  onClick: () => {
                                      (0, U.pX)(t, !0);
                                  },
                              }),
                              n,
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.SURVEY,
                                  onClick: () => {
                                      a ? (0, tp.K)(o) : window.open(s, "_blank"), (0, U.pX)(t, !1);
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
                                  href: t0.A.getArticleURL(ei.MVz.CORRUPT_INSTALLATION),
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
                              (0, i.jsx)(T.PM, { onClick: () => nt(), noticeType: ei.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                              es.intl.string(es.t.wVjKGi),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.VIDEO_UNSUPPORTED_BROWSER,
                                  onClick: () => {
                                      (0, N.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("17951"),
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
                      let { error: er } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nt(), noticeType: ei.kqX.DISPATCH_ERROR }),
                              er?.displayMessage,
                              (0, i.jsx)(T.Z_, {
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
                      let { progress: eE, total: ec, name: eu } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => nt(),
                                  noticeType: ei.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                              }),
                              (0, i.jsxs)(v.A, {
                                  justify: v.A.Justify.CENTER,
                                  children: [
                                      null != eu
                                          ? es.intl.formatToPlainString(es.t["pHj+z4"], {
                                                name: `${eu}`,
                                                progress: eE,
                                                total: ec,
                                            })
                                          : es.intl.formatToPlainString(es.t["lHZn+A"], { progress: eE, total: ec }),
                                      (0, i.jsx)(R.y, { type: R.y.Type.PULSING_ELLIPSIS, className: ea.gO }),
                                  ],
                              }),
                          ],
                      });
                  case ei.kqX.APPLICATION_TEST_MODE:
                      if (null == r.metadata) return null;
                      if (null != tZ.A.testModeEmbeddedApplicationId)
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
                                      (0, i.jsx)(T.PM, { onClick: h.cL, noticeType: ei.kqX.APPLICATION_TEST_MODE }),
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
                                  (0, i.jsx)(T.PM, { onClick: h.cL, noticeType: ei.kqX.APPLICATION_TEST_MODE }),
                              ],
                          }),
                      });
                  case ei.kqX.VIEWING_ROLES:
                      return (0, i.jsx)(tn.A, {});
                  case ei.kqX.PREMIUM_UNCANCEL:
                      return (0, i.jsxs)(T.$T, {
                          color:
                              X === el.PremiumTypes.TIER_1
                                  ? T.Hv.PREMIUM_TIER_1
                                  : X === el.PremiumTypes.TIER_0
                                    ? T.Hv.PREMIUM_TIER_0
                                    : T.Hv.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: ei.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      nt(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: ea.PC }),
                              X === el.PremiumTypes.TIER_1
                                  ? es.intl.formatToPlainString(es.t.fXv4wm, { daysLeft: r.metadata.daysLeft })
                                  : X === el.PremiumTypes.TIER_0
                                    ? es.intl.formatToPlainString(es.t.ZOHZMr, { daysLeft: r.metadata.daysLeft })
                                    : es.intl.formatToPlainString(es.t.outyHh, { daysLeft: r.metadata.daysLeft }),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      nt(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, N.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("86832"),
                                                  n.e("76342"),
                                                  n.e("60988"),
                                                  n.e("20950"),
                                                  n.e("82781"),
                                                  n.e("77083"),
                                                  n.e("46461"),
                                                  n.e("47944"),
                                                  n.e("56372"),
                                                  n.e("64509"),
                                                  n.e("39932"),
                                                  n.e("71441"),
                                                  n.e("49623"),
                                                  n.e("35316"),
                                                  n.e("38838"),
                                                  n.e("45214"),
                                                  n.e("99253"),
                                                  n.e("33526"),
                                                  n.e("89510"),
                                                  n.e("90862"),
                                                  n.e("97189"),
                                                  n.e("16918"),
                                                  n.e("33730"),
                                                  n.e("24059"),
                                                  n.e("42306"),
                                                  n.e("11291"),
                                                  n.e("83893"),
                                                  n.e("83133"),
                                                  n.e("63051"),
                                                  n.e("84873"),
                                                  n.e("19709"),
                                                  n.e("67458"),
                                                  n.e("58427"),
                                                  n.e("28646"),
                                                  n.e("65327"),
                                                  n.e("41625"),
                                                  n.e("7959"),
                                                  n.e("61783"),
                                                  n.e("6605"),
                                                  n.e("11262"),
                                                  n.e("54483"),
                                                  n.e("62461"),
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
                                                  n.e("49868"),
                                                  n.e("50336"),
                                                  n.e("84133"),
                                                  n.e("13627"),
                                                  n.e("57940"),
                                                  n.e("78179"),
                                                  n.e("48157"),
                                                  n.e("44511"),
                                                  n.e("37271"),
                                                  n.e("70990"),
                                                  n.e("15130"),
                                                  n.e("57578"),
                                                  n.e("57016"),
                                                  n.e("45826"),
                                                  n.e("47754"),
                                                  n.e("25677"),
                                                  n.e("90072"),
                                                  n.e("80822"),
                                                  n.e("42205"),
                                                  n.e("55675"),
                                                  n.e("27962"),
                                                  n.e("64827"),
                                                  n.e("10471"),
                                                  n.e("63232"),
                                                  n.e("7167"),
                                                  n.e("84569"),
                                                  n.e("61060"),
                                                  n.e("54484"),
                                                  n.e("36850"),
                                                  n.e("60235"),
                                                  n.e("77333"),
                                                  n.e("6338"),
                                                  n.e("47834"),
                                                  n.e("18573"),
                                                  n.e("78157"),
                                                  n.e("44057"),
                                                  n.e("53782"),
                                                  n.e("88774"),
                                                  n.e("31988"),
                                                  n.e("44571"),
                                                  n.e("34303"),
                                                  n.e("40291"),
                                                  n.e("2368"),
                                                  n.e("33115"),
                                                  n.e("97270"),
                                                  n.e("73122"),
                                                  n.e("8304"),
                                                  n.e("93159"),
                                                  n.e("55936"),
                                                  n.e("89088"),
                                                  n.e("42834"),
                                                  n.e("94723"),
                                                  n.e("62931"),
                                                  n.e("45959"),
                                                  n.e("58529"),
                                                  n.e("58038"),
                                                  n.e("71202"),
                                                  n.e("62531"),
                                                  n.e("52846"),
                                                  n.e("6174"),
                                                  n.e("29963"),
                                                  n.e("38513"),
                                                  n.e("63645"),
                                                  n.e("23532"),
                                                  n.e("52557"),
                                                  n.e("63123"),
                                                  n.e("834"),
                                                  n.e("24038"),
                                                  n.e("55654"),
                                                  n.e("50097"),
                                                  n.e("23164"),
                                                  n.e("91824"),
                                                  n.e("14794"),
                                              ]).then(n.bind(n, 174705));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      daysLeft: r.metadata.daysLeft,
                                                      premiumType: X,
                                                      analyticsSource: "Nag Bar",
                                                      premiumSubscription: r.metadata.premiumSubscription,
                                                  });
                                          });
                                  },
                                  children:
                                      X === el.PremiumTypes.TIER_1
                                          ? es.intl.string(es.t.BkbUPM)
                                          : X === el.PremiumTypes.TIER_0
                                            ? es.intl.string(es.t.Px978X)
                                            : es.intl.string(es.t.LW5tCE),
                              }),
                          ],
                      });
                  case ei.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: e_, dismissUntil: eT } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: r.type,
                                  onClick: () => {
                                      nt(eT);
                                  },
                              }),
                              es.intl.format(es.t.zxU0Kp, { daysPastDue: e_ }),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      nt(eT), (0, Z.openUserSettings)(Q.X.SUBSCRIPTIONS_PANEL);
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
                                      nt(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              es.intl.string(es.t.LlZaoX),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      nt(r.metadata?.premiumSubscription?.currentPeriodEnd),
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
                                      nt(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              es.intl.string(es.t["30YfCr"]),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      nt(r.metadata?.premiumSubscription?.currentPeriodEnd),
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
                                      nt(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              X === el.PremiumTypes.TIER_1
                                  ? es.intl.formatToPlainString(es.t.b6QUvf, { daysLeft: r.metadata.daysLeft })
                                  : X === el.PremiumTypes.TIER_0
                                    ? es.intl.formatToPlainString(es.t["tURZ/M"], { daysLeft: r.metadata.daysLeft })
                                    : es.intl.formatToPlainString(es.t.AyC74I, { daysLeft: r.metadata.daysLeft }),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      nt(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, Z.openUserSettings)(Q.X.SUBSCRIPTIONS_PANEL);
                                  },
                                  children:
                                      X === el.PremiumTypes.TIER_1
                                          ? es.intl.string(es.t.lboF5O)
                                          : X === el.PremiumTypes.TIER_0
                                            ? es.intl.string(es.t["4UPwOq"])
                                            : es.intl.string(es.t["P/VvGb"]),
                              }),
                          ],
                      });
                  case ei.kqX.BACK_TO_PREVIOUS_SCREEN:
                      return (0, i.jsx)(te, {
                          buttonText: r.buttonText ?? es.intl.string(es.t["/g10LC"]),
                          onGoBack: r.callback,
                          onDismiss: () => nt(),
                          showCloseButton: !0,
                      });
                  case ei.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
                      return (0, i.jsx)(eY, { guildId: t, analyticsLocations: s });
                  case ei.kqX.PARENTAL_CONSENT_WARNING:
                      return (0, i.jsx)(td, { daysRemaining: r.metadata?.daysRemaining ?? null });
                  case ei.kqX.QUARANTINED:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              es.intl.string(es.t.DVFJYf),
                              (0, i.jsx)(T.eC, {
                                  href: t5.q,
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.kvHdFN),
                              }),
                              (0, i.jsx)(d.Anchor, {
                                  href: t0.A.getArticleURL(ei.MVz.QUARANTINE),
                                  target: "_blank",
                                  className: ea.yw,
                                  children: es.intl.string(es.t.hvVgAZ),
                              }),
                          ],
                      });
                  case ei.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: ed, decisionId: eN } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: ei.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != t && (0, eq.wu)(t), nt(ed);
                                  },
                              }),
                              es.intl.string(es.t.B8ruyY),
                              (0, i.jsx)(T.zr, {
                                  onClick: () => {
                                      null != t &&
                                          (0, eq.W5)(t, eN, () => {
                                              nt(ed), (0, eq.wu)(t);
                                          });
                                  },
                                  children: es.intl.string(es.t.oX14El),
                              }),
                              null != t
                                  ? (0, i.jsx)(T.zr, {
                                        onClick: () =>
                                            tt.A.open(t, ei.BEX.GUILD_AUTOMOD, void 0, ei.nd0.AUTOMOD_MENTION_SPAM),
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
                                      r.metadata?.streamKey != null && (0, tm.lk)(r.metadata.streamKey);
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
                                      nt(r.metadata?.dismissUntil);
                                  },
                                  noticeType: ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                              }),
                              es.intl.string(es.t["0klLS7"]),
                              (0, i.jsx)(T.Z_, {
                                  onClick: () => {
                                      (0, N.openModalLazy)(async () => {
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
                                          nt(r.metadata?.dismissUntil);
                                  },
                                  noticeType: ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: es.intl.string(es.t.e4y2VM),
                              }),
                          ],
                      });
                  case ei.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsx)(tg, {});
                  case ei.kqX.PREMIUM_MARKETING_NAGBAR:
                      return (0, i.jsx)(tM.A, {});
                  case ei.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR:
                      return (0, i.jsx)(tP, { premiumSubscription: r.metadata.premiumSubscription });
                  case ei.kqX.SYSTEM_SERVICE_WARNING:
                      return (0, i.jsx)(tw, {});
                  default:
                      return null;
              }
          })
        : null;
function ni() {
    let { analyticsLocations: e } = (0, G.Ay)(x.A.NOTICE);
    return (0, i.jsx)(G.f5, { value: e, children: (0, i.jsx)(nn, {}) });
}
