n.d(t, { w: () => ns, A: () => nE });
var i = n(477900),
    l = n(582128),
    r = n(989349),
    s = n.n(r);
if (21552 == n.j) var a = n(561028);
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
    D = n(228366);
function m(e) {
    D.h.dispatch({ type: "DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS", skuId: e });
}
var p = n(912851);
let P =
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
var M = n(730852),
    f = n(785796),
    g = n(55619),
    h = n(246605),
    U = n(271866),
    y = n(736653),
    L = n(77729),
    k = n(573648),
    x = n(793574),
    G = n(688810),
    v = n(587895),
    j = n(315982),
    q = n(235986),
    X = n(626584),
    b = n(554146);
if (21552 == n.j) var B = n(691540);
if (21552 == n.j) var w = n(857250);
if (21552 == n.j) var F = n(97483);
var H = n(803306),
    V = n(975807),
    K = n(968309),
    Y = n(532794),
    W = n(745299),
    Z = n(976860),
    z = n(780964),
    $ = n(718446),
    Q = n(766075),
    J = n(879945),
    ee = n(174459),
    et = n(379848),
    en = n(49999),
    ei = n(652215),
    el = n(202541),
    er = n(355097),
    es = n(375708),
    ea = n(789167);
function eE(e) {
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
                                            n.e("39981"),
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
                                onClick: () => (0, K.A)({ platformType: ei.fg2.SPOTIFY, location: "Notice Bar" }),
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
                                src: k.A.get(ei.fg2.PLAYSTATION).icon.whiteSVG,
                            }),
                            es.intl.string(es.t.WHWgoY),
                            (0, i.jsx)(T.zr, {
                                onClick: () => (0, K.A)({ platformType: ei.fg2.PLAYSTATION, location: "Notice Bar" }),
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
                                                n.e("89230"),
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
                                        (0, B.P0)((0, w.o)(es.intl.string(es.t.xSCvBf), F.Ck.FAILURE));
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
                                        (0, Q.openUserSettings)(z.X.NITRO_PANEL);
                                },
                                children: es.intl.string(es.t["8JC5e/"]),
                            }),
                            (0, i.jsx)(T.PM, {
                                onClick: () => {
                                    r(en.i.UNKNOWN), (0, H.setFlag)(ei.nhx.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: l,
                            }),
                        ],
                    });
                case b.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(W.A, {
                        dismissCurrentNotice: () => r(en.i.UNKNOWN),
                        subscriptionTier: el.pe.TIER_2,
                    });
                case b.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(W.A, {
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
                                    r(en.i.UNKNOWN), (0, Q.openUserSettings)(z.X.NITRO_PANEL);
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
                                    (0, Z.pX)((0, $.settingsPathToRoute)(er.od.ACCOUNT));
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
                                    (0, Y.A)({
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
var eo = n(877624),
    ec = n(528464),
    e_ = n(131607),
    eu = n(823901);
function eA(e) {
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
          ? (0, i.jsx)(eu.y, { markAsDismissed: (e) => E(e) })
          : void 0;
}
var eT = n(264779),
    ed = n(962644),
    eI = n(287809),
    eN = n(158045),
    eR = n(349271);
function eS(e) {
    let { dismissibleContent: t } = e,
        n = (0, eT.Cp)(),
        r = (0, c.bG)([eI.default], () => !eN.Ay.isPremium(eI.default.getCurrentUser())),
        s = l.useCallback(() => {
            ee.default.track(ei.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED),
                (0, Q.openUserSettings)(z.X.GIFT_PANEL),
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
    em = n(736056);
if (21552 == n.j) var ep = n(194261);
var eP = n(548118),
    eM = n(134413),
    ef = n(221950),
    eg = n(71393),
    eh = n(309010),
    eU = n(967198),
    ey = n(585510),
    eL = n(834409),
    ek = n(903093),
    ex = n(746080),
    eG = n(914072);
function ev(e) {
    let { onDismiss: t } = e,
        r = (0, c.bG)([eU.A], () => eU.A.getGuildId()),
        s = (0, c.bG)([eh.Ay], () => (null != r ? eh.Ay.getChannelId(r) : null), [r]),
        a = r ?? null,
        E = (0, c.bG)([eg.A], () => (null != a ? eg.A.getGuild(a) : null), [a]),
        { shouldShowIncidentActions: o, incidentData: _, isUnderLockdown: u } = (0, ey.Li)(a),
        A = (0, eM.fw)(E?.id ?? ei.dJq),
        d = l.useCallback(() => null != E && (0, ef.aZ)(E.id), [E]);
    if (null == E || null == _ || !o) return null;
    function I(e) {
        if (null != E) {
            if (e && A && s !== ex.VV.MEMBER_SAFETY && d())
                return void ee.default.track(ei.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: ei.kqX.GUILD_RAID_NOTIFICATION,
                    guild_id: E.id,
                });
            (0, N.openModalLazy)(async () => {
                let e = { source: eL.Eo.NAGBAR, alertType: (0, ek.$5)(_) },
                    { default: t } = await Promise.all([
                        n.e("48180"),
                        n.e("102"),
                        n.e("40258"),
                        n.e("73669"),
                        n.e("46313"),
                        n.e("43233"),
                    ]).then(n.bind(n, 671576));
                return (n) => (0, i.jsx)(t, { ...n, guildId: E.id, analyticsData: e });
            });
        }
    }
    let R = (0, i.jsx)(eP.Ay, { className: eG.$f, guild: E, size: eP.Ay.Sizes.MINI }),
        S = (0, ek.ql)(_, E.name);
    if (null != (_.dmsDisabledUntil ?? _.invitesDisabledUntil) && u)
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
                            (0, i.jsx)(ep.X, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)("span", { children: es.intl.string(es.t["c+7oa7"]) }),
                        ],
                    }),
                }),
            ],
        });
    let O = (0, ek.P$)(_)
            ? es.intl.formatToPlainString(es.t.tZTx2E, { guildName: E.name })
            : (0, ek.Qm)(_)
              ? es.intl.formatToPlainString(es.t["1bSmxr"], { guildName: E.name })
              : es.intl.formatToPlainString(es.t.W87xDE, { guildName: E.name }),
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
var ej = n(995786),
    eq = n(206835),
    eX = n(280450),
    eb = n(696451),
    eB = n(229527),
    ew = n(81400),
    eF = n(340837);
function eH(e) {
    let { guildId: t, analyticsLocations: n } = e,
        [l, r] = (0, ew.j8)({ guildId: t, analyticsLocations: n }),
        s = r ? es.intl.string(es.t["6ndMcq"]) : es.intl.string(es.t["0eiu6J"]),
        a = r ? es.intl.string(es.t.S09nw4) : es.intl.string(es.t.tEttXd);
    return (0, i.jsxs)(T.$T, { color: T.Hv.DANGER, children: [s, (0, i.jsx)(T.zr, { onClick: l, children: a })] });
}
function eV() {
    let e = (0, eq.A)({ scrollPosition: er._F.GUILD_TAG });
    return (0, i.jsxs)(T.$T, {
        color: T.Hv.DANGER,
        children: [
            es.intl.string(es.t.Zqlecb),
            (0, i.jsx)(T.zr, { onClick: e, children: es.intl.string(es.t.SJehVW) }),
        ],
    });
}
function eK(e) {
    let { analyticsLocations: t, ...n } = e,
        { analyticsLocations: l } = (0, G.Ay)(t, x.A.AUTOMOD_NAGBAR_NOTICE),
        r = (0, c.bG)([eX.default, eb.Ay], () => {
            if (null == n.guildId) return new Set();
            let e = eX.default.getId();
            return (0, eB.wj)(eb.Ay.getMember(n.guildId, e));
        }, [n.guildId]);
    return r.has(eF.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || r.has(eF.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, i.jsx)(eH, { ...n, analyticsLocations: l })
        : r.has(eF.D.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, i.jsx)(eV, {})
          : (0, i.jsx)(eH, { ...n, analyticsLocations: l });
}
var eY = n(202384),
    eW = n(51758);
n(321073);
var eZ = n(503698),
    ez = n.n(eZ);
if (21552 == n.j) var e$ = n(806163);
if (21552 == n.j) var eQ = n(314116);
if (21552 == n.j) var eJ = n(821609);
var e0 = n(334465),
    e1 = n(624458),
    e2 = n(513461),
    e5 = n(709977),
    e3 = n(212455),
    e7 = n(7142),
    e9 = n(396769);
let e8 =
    21552 == n.j
        ? function () {
              let e = (0, c.bG)([eU.A], () => eU.A.getGuildId(), []),
                  t = (0, c.bG)([eg.A], () => eg.A.getGuild(e), [e]),
                  l = (0, c.bG)([e3.A], () => (null != e ? e3.A.getRequest(e) : null), [e]),
                  r = (0, e$.zy)(),
                  s = (0, e0.B)(r.pathname, ei.BVt.CHANNEL(t?.id, ex.VV.GUILD_ONBOARDING))?.isExact === !0;
              if (null == t || !(0, e5.Qd)(t) || s) return null;
              let a = l?.applicationStatus ?? e2.B5.STARTED,
                  E = null,
                  o = null,
                  _ = null,
                  A = [e7.lm, e9.lm];
              switch (a) {
                  case e2.B5.SUBMITTED:
                      (E = es.intl.string(es.t["5iLvSx"])),
                          (o = es.intl.string(es.t.mqtdmQ)),
                          (_ = function () {
                              null != t &&
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
                      (E = es.intl.string(es.t.lk30cY)),
                          (o = es.intl.string(es.t["8RrsHr"])),
                          (_ = function () {
                              null != t &&
                                  (0, N.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([n.e("3675"), n.e("14382")]).then(
                                          n.bind(n, 463325),
                                      );
                                      return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                                  });
                          }),
                          A.push(e7.z3);
                      break;
                  default:
                      (E = es.intl.string(es.t.G5YKXP)),
                          (o = es.intl.string(es.t["r8/DT+"])),
                          (_ = function () {
                              null != t && (0, eY.Ze)(t.id);
                          });
              }
              return (0, i.jsxs)("div", {
                  className: ez()(...A),
                  children: [
                      (0, i.jsx)(u.E, { className: e7.wx, variant: "text-sm/normal", children: E }),
                      (0, i.jsx)(eJ.$, { variant: "overlay-primary", size: "sm", onClick: _, text: o }),
                  ],
              });
          }
        : null;
if (21552 == n.j) var e4 = n(477155);
var e6 = n(13509);
function te(e) {
    let { buttonText: t, onGoBack: n, onDismiss: l, showCloseButton: r } = e;
    return (0, i.jsxs)(T.$T, {
        className: e6.eR,
        children: [
            r && (0, i.jsx)(T.PM, { onClick: l, className: e6.b, noticeType: ei.kqX.BACK_TO_PREVIOUS_SCREEN }),
            (0, i.jsx)(eJ.$, { text: t, variant: "overlay-secondary", size: "sm", icon: e4.r, onClick: n }),
        ],
    });
}
var tt = n(468689),
    tn = n(699609);
if (21552 == n.j) var ti = n(862482);
var tl = n(66834),
    tr = n(449054),
    ts = n(211970);
let ta =
    21552 == n.j
        ? function () {
              let e = (0, c.bG)([eU.A], () => eU.A.getGuildId(), []),
                  t = (0, c.bG)([eg.A], () => eg.A.getGuild(e), [e]),
                  [n, r] = l.useState(!1);
              if (null == t) return null;
              async function s() {
                  if (null != t) {
                      r(!0);
                      try {
                          tr.cf(t.id), await tl.A.joinGuild(t.id, { source: ei.Q4z.NOTICE_BAR });
                      } catch {
                          r(!1);
                      }
                  }
              }
              return (0, i.jsxs)("div", {
                  className: ez()(ts.lm, e9.lm),
                  children: [
                      (0, i.jsxs)(ti.$n, {
                          look: ti.$n.Looks.OUTLINED,
                          color: ti.$n.Colors.WHITE,
                          size: ti.$n.Sizes.NONE,
                          className: ez()(ts.x6, ts.aX),
                          innerClassName: ts.gb,
                          onClick: function () {
                              (0, Z.JK)().goBack();
                          },
                          children: [
                              (0, i.jsx)(e4.r, { size: "xs", color: "currentColor", className: ts.UE }),
                              es.intl.string(es.t["13/7kX"]),
                          ],
                      }),
                      (0, i.jsx)(u.E, {
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
var tE = n(801644),
    to = n(74848),
    tc = n(899847),
    t_ = n(191627),
    tu = n(602339),
    tA = n(357672);
let tT =
    21552 == n.j
        ? {
              "--custom-notice-background": "var(--background-feedback-warning)",
              "--custom-notice-text": "var(--text-strong)",
          }
        : null;
function td(e) {
    let { daysRemaining: t } = e;
    (0, es.useSyncMessages)(tu.messagesLoader);
    let n = l.useCallback(() => {
        ee.default.track(ei.HAw.PARENTAL_CONSENT_WARNING_BANNER_TAPPED, { days_remaining: t }),
            tc.Ay.selectTab(t_.u9.REQUESTS),
            (0, Q.openUserSettings)(z.X.FAMILY_CENTER_PANEL);
    }, [t]);
    return (0, i.jsx)(T.$T, {
        color: T.Hv.CUSTOM,
        style: tT,
        children: (0, i.jsxs)("div", {
            className: tA.Q,
            children: [
                (0, i.jsx)(u.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    tag: "span",
                    children:
                        null != t && t > 0
                            ? es.intl.format(tu.default.F0hdak, { count: t })
                            : es.intl.string(tu.default.LTzc00),
                }),
                (0, i.jsx)(eJ.$, {
                    variant: "secondary",
                    size: "sm",
                    text: es.intl.string(tu.default.xYJKEy),
                    onClick: n,
                }),
            ],
        }),
    });
}
var tI = n(732280);
if (21552 == n.j) var tN = n(661531);
var tR = n(367727),
    tS = n(635995),
    tO = n(88001),
    tC = n(466919),
    tD = n(157115);
function tm(e) {
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
        E = l.useCallback(() => {
            null != t &&
                (ee.default.track(ei.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: ei.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
                }),
                s(),
                (0, N.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("33587"),
                        n.e("86248"),
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
                onClick: E,
                text: es.intl.string(tC.default["5fZHp3"]),
                size: "sm",
                variant: "overlay-primary",
            }),
        ],
    });
}
var tp = n(754804),
    tP = n(658040),
    tM = n(166403),
    tf = n(543767),
    tg = n(228662);
function th(e) {
    let { noticeType: t, analyticsLocation: n, location: l, onFallback: r, children: s } = e,
        a = (0, c.bG)([tM.A], () => tM.A.getPremiumTypeSubscription()),
        { enabled: E } = (0, tP.z0)({ location: l }),
        { analyticsLocations: o } = (0, G.Ay)(n),
        _ = null != a && a.status === ei.Dmq.PAST_DUE,
        [u, A] = (0, tf.C8)({ subscriptionId: null != a ? a.id : "", preventFetch: !E || !_ }),
        d = E && _ && null == u && null == A;
    return (
        (0, tg.A)("nagbar", null != a ? a.id : "", A),
        (0, i.jsx)(T.Z_, {
            noticeType: t,
            disabled: d,
            onClick: () => {
                E && null != a && null != u
                    ? (0, Y.A)({ initialPlanId: a.planIdFromItems, openInvoiceId: u.id, analyticsLocations: o })
                    : r();
            },
            children: s,
        })
    );
}
var tU = n(378974),
    ty = n(352774),
    tL = n(14594);
function tk() {
    let [e, t] = (0, e_.Wl)(b.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: tL.aH });
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
                                  n.e("4079"),
                                  n.e("22255"),
                                  n.e("55925"),
                                  n.e("40794"),
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
if (21552 == n.j) var tx = n(825484);
var tG = n(31720),
    tv = n(847599),
    tj = n(734057),
    tq = n(849736),
    tX = n(354583),
    tb = n(366098),
    tB = n(418208),
    tw = n(263214);
function tF(e) {
    if (!e && (0, tB.Cf)())
        return void tG.A.showAgeVerificationGetStartedModal({ entryPoint: tv.q1.STAGE_CHANNEL_RAISE_HAND });
    let t = eh.Ay.getVoiceChannelId();
    if (null == t) return;
    let n = tj.A.getChannel(t);
    null != n && (0, tq.e7)(n, e);
}
function tH(e) {
    let { channelId: t } = e,
        n = (0, tb.D3)(t) ?? 0,
        l = (0, tb.Xk)(t) ?? 0;
    return n > 0 && l > 0
        ? (0, i.jsx)("div", {
              className: tw.Z5,
              children: (0, i.jsx)("div", { className: ez()(tw.qQ, tw.lN), children: es.intl.string(es.t.xlJRfv) }),
          })
        : n > 0
          ? (0, i.jsx)("div", {
                className: tw.Z5,
                children: (0, i.jsx)("div", { className: ez()(tw.qQ, tw.lN), children: es.intl.string(es.t.WYad9Z) }),
            })
          : l > 0
            ? (0, i.jsx)("div", {
                  className: tw.Z5,
                  children: (0, i.jsx)("div", { className: ez()(tw.qQ, tw.lN), children: es.intl.string(es.t.eHq2OF) }),
              })
            : null;
}
function tV() {
    let e = (0, tX.A)();
    return null == e
        ? null
        : (0, i.jsxs)(T.$T, {
              className: tw.kL,
              color: T.Hv.DEFAULT,
              children: [
                  es.intl.string(es.t.Ul1RJQ),
                  (0, i.jsx)(tH, { channelId: e.id }),
                  (0, i.jsxs)(tx.e, {
                      size: "sm",
                      className: tw.GC,
                      children: [
                          (0, i.jsx)(eJ.$, {
                              variant: "overlay-primary",
                              text: es.intl.string(es.t.MpO0px),
                              onClick: () => tF(!1),
                          }),
                          (0, i.jsx)(eJ.$, {
                              variant: "secondary",
                              onClick: () => tF(!0),
                              text: es.intl.string(es.t["1YDv7a"]),
                          }),
                      ],
                  }),
              ],
          });
}
var tK = n(952818),
    tY = n(935671);
function tW() {
    (0, tY.sL)("nagbar");
}
function tZ() {
    return null == (0, c.bG)([tK.Ay], () => tK.Ay.getVisibleGame())
        ? null
        : (0, i.jsxs)(T.$T, {
              color: T.Hv.DANGER,
              children: [
                  (0, i.jsx)(T.PM, { noticeType: ei.kqX.SYSTEM_SERVICE_WARNING, onClick: () => ns() }),
                  es.intl.string(es.t["5rPt+j"]),
                  (0, i.jsx)(T.Z_, {
                      onClick: tW,
                      noticeType: ei.kqX.SYSTEM_SERVICE_WARNING,
                      children: es.intl.string(es.t["1iI46O"]),
                  }),
              ],
          });
}
function tz() {
    return (0, i.jsxs)(T.$T, {
        color: T.Hv.DANGER,
        children: [
            es.intl.string(es.t.lQiCJ6),
            (0, i.jsx)(T.Z_, {
                noticeType: ei.kqX.PTT_NO_KEYBIND_WARNING,
                onClick: function () {
                    (0, Q.openUserSettings)(z.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING);
                },
                children: es.intl.string(es.t["UgQN+9"]),
            }),
        ],
    });
}
if (21552 == n.j) var t$ = n(189213);
if (21552 == n.j) var tQ = n(150934);
function tJ(e) {
    let [t, n] = l.useState(!1);
    return (0, i.jsx)(t$.Modal, {
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
        actionBarInput: (0, i.jsx)(tQ.S, {
            checked: t,
            onChange: (e) => n(e),
            label: es.intl.string(es.t.XAiAgD),
            labelType: "secondary",
        }),
        ...e,
    });
}
var t0 = n(626822),
    t1 = n(763827),
    t2 = n(67480),
    t5 = n(147964),
    t3 = n(177141),
    t7 = n(975571),
    t9 = n(723702),
    t8 = n(325278),
    t4 = n(831502),
    t6 = n(731854);
let ne = new X.A("Notice");
function nt(e) {
    let { error: t, allowClick: n = !1 } = e,
        l = (0, eC.B1)(t)?.errorCode,
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
              onClick: () => open(t7.A.getArticleURL(ei.MVz.AV_ERROR_CODES)),
              children: s,
          })
        : s;
}
function nn(e) {
    let { noticeType: t } = e;
    return (0, i.jsxs)(T.$T, {
        color: T.Hv.DANGER,
        children: [
            (0, i.jsx)(T.PM, {
                noticeType: t,
                onClick: () => {
                    ns();
                },
            }),
            es.intl.string(es.t.o3zuYz),
            (0, i.jsx)(nt, { error: eC.iy.NO_INPUT_DEVICES }),
            (0, i.jsx)(T.eC, {
                href: t7.A.getArticleURL(ei.MVz.NO_INPUT_DETECTED),
                noticeType: t,
                children: es.intl.string(es.t.RYKKox),
            }),
        ],
    });
}
function ni(e) {
    let { noticeType: t } = e;
    return (0, i.jsxs)(T.$T, {
        color: T.Hv.DANGER,
        children: [
            (0, i.jsx)(T.PM, {
                noticeType: t,
                onClick: () => {
                    ns();
                },
            }),
            es.intl.string(es.t.Up0ApK),
            (0, i.jsx)(nt, { error: eC.iy.VIDEO_BACKGROUND_UNAVAILABLE }),
            (0, i.jsx)(T.zr, {
                onClick: () => (0, Q.openUserSettings)(z.X.CAMERA_CATEGORY),
                children: es.intl.string(es.t.kRwxfi),
            }),
        ],
    });
}
function nl(e) {
    return (0, t9.isWindows)() && o().satisfies(L.A?.os.release, t8.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function nr(e) {
    let t,
        n,
        { noticeType: l } = e,
        r = (0, to.x5)(t6.oh.AUDIO_INPUT),
        s = r?.guid ?? "",
        { inputDeviceOSMuted: a, inputDeviceOSVolume: E } = (0, c.cf)([t0.Ay], () => ({
            inputDeviceOSMuted: t0.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: t0.Ay.getInputDeviceOSVolume(),
        })),
        o = !1;
    return (
        !0 === a
            ? ((t = es.intl.string(es.t.ppW3ri)),
              (n = (0, i.jsx)(T.eC, { href: nl(s), noticeType: l, children: es.intl.string(es.t.QghSIq) })))
            : 0 === E
              ? ((t = es.intl.string(es.t.j4gGA4)),
                (n = (0, i.jsx)(T.eC, { href: nl(s), noticeType: l, children: es.intl.string(es.t.QghSIq) })))
              : t0.Ay.supports(t6.O5.LOOPBACK)
                ? ((t = es.intl.string(es.t.dNAJ18)),
                  (o = !0),
                  (n = (0, i.jsx)(T.zr, {
                      onClick: () => {
                          (0, Q.openUserSettings)(z.X.VOICE_AND_VIDEO_PANEL);
                      },
                      children: es.intl.string(es.t.I6YlB4),
                  })))
                : ((t = es.intl.string(es.t.nCO9bI)),
                  (n = (0, i.jsx)(T.eC, {
                      href: t7.A.getArticleURL(ei.MVz.NO_INPUT_DETECTED),
                      noticeType: l,
                      children: es.intl.string(es.t.RYKKox),
                  }))),
        (0, i.jsxs)(T.$T, {
            color: T.Hv.DANGER,
            children: [
                (0, i.jsx)(T.PM, {
                    noticeType: l,
                    onClick: () => {
                        ns(), (0, N.openModal)((e) => (0, i.jsx)(tJ, { ...e }));
                    },
                }),
                t,
                (0, i.jsx)(nt, { allowClick: o, error: eC.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function ns(e) {
    p.A.dismiss(null != e ? { untilAtLeast: s()(e) } : void 0);
}
let na =
    21552 == n.j
        ? l.memo(function () {
              let e = (0, c.bG)([eI.default], () => eI.default.getCurrentUser()),
                  t = (0, c.bG)([eU.A], () => eU.A.getGuildId()),
                  r = (0, c.bG)([t3.Ay], () => t3.Ay.getNotice()),
                  { analyticsLocations: s } = (0, G.Ay)(),
                  E = (0, y.Ay)(),
                  o = (0, eW.H)(t),
                  u = (0, tI.V)();
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
                              t = em.A.getUserExperimentDescriptor(e.id);
                          null != t && (0, eD.LQ)(e.id, t),
                              (async function () {
                                  null != r && r.metadata?.id != null && (await (0, h.oX)(r.metadata?.id));
                              })();
                      }
                  }, [r]),
                  null == r)
              )
                  return null;
              let A = null != r.type ? t3.Re[r.type] : null,
                  D = null != r.type ? t3.rV[r.type] : null,
                  p = null != r.type ? t3.f7[r.type] : null,
                  X = t3.pe[r.type];
              if (null != A) return (0, i.jsx)(eO.$, { dismissibleContent: A, noticeType: r.type });
              if (null != D) return (0, i.jsx)(eA, { dismissibleContent: D });
              if (null != p) return (0, i.jsx)(eS, { dismissibleContent: p });
              if (null != X) return (0, i.jsx)(eE, { dismissibleContent: X, noticeType: r.type });
              let b = r.metadata?.premiumType;
              switch (r.type) {
                  case ei.kqX.PTT_NO_KEYBIND_WARNING:
                      return (0, i.jsx)(tz, {});
                  case ei.kqX.LURKING_GUILD:
                      return (0, i.jsx)(ta, {});
                  case ei.kqX.PENDING_MEMBER:
                      return (0, i.jsx)(e8, {});
                  case ei.kqX.INVITED_TO_SPEAK:
                      return (0, i.jsx)(tV, {});
                  case ei.kqX.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: B } = r.metadata;
                      return (0, i.jsx)(ev, { onDismiss: () => ns(B) });
                  case ei.kqX.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: w } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => ns(w), noticeType: r.type }),
                              es.intl.format(es.t["08KQ1P"], {
                                  helpCenterLink: t7.A.getArticleURL(ei.MVz.WIN32_DEPRECATE),
                              }),
                          ],
                      });
                  case ei.kqX.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: F } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => ns(F), noticeType: r.type }),
                              es.intl.format(es.t["8Je+dX"], {
                                  helpCenterLink: t7.A.getArticleURL(ei.MVz.WIN7_8_DEPRECATE),
                              }),
                          ],
                      });
                  case ei.kqX.WIN_COMPAT_MODE_MESSAGE:
                      let { dismissUntil: H } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => ns(H), noticeType: r.type }),
                              es.intl.string(es.t["9DJgOg"]),
                          ],
                      });
                  case ei.kqX.MACOS_DEPRECATED_MESSAGE:
                      let { dismissUntil: V } = r.metadata,
                          K = 20 === parseInt(L.A?.os.release.split(".")[0]);
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => ns(V), noticeType: r.type }),
                              es.intl.format(es.t.q8VPLo, {
                                  helpCenterLink: t7.A.getArticleURL(
                                      K ? ei.MVz.MACOS_20_DEPRECATE : ei.MVz.MACOS_19_DEPRECATE,
                                  ),
                              }),
                          ],
                      });
                  case ei.kqX.E2EE_UPDATE_REQUIRED:
                      let { dismissUntil: W } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => ns(W), noticeType: r.type }),
                              es.intl.format(t9.isPlatformEmbedded ? es.t.J232TI : es.t.vceuiL, {
                                  helpCenterLink: t7.A.getArticleURL(ei.MVz.END_TO_END_ENCRYPTION),
                              }),
                          ],
                      });
                  case ei.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => ns(), noticeType: r.type }),
                              es.intl.string(es.t.iW0fcQ),
                              (0, i.jsx)(T.eC, {
                                  href: t7.A.getArticleURL(ei.MVz.WINDOWS_MEDIA_PACK),
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
                              (0, i.jsx)(T.PM, { onClick: () => ns(), noticeType: r.type }),
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
                              (0, i.jsx)(T.PM, { onClick: () => ns(), noticeType: r.type }),
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
                                      P.clearRemoteDisconnectVoiceChannelId(), ns();
                                  },
                                  noticeType: r.type,
                              }),
                              es.intl.string(es.t.bOQ3jV),
                              (0, i.jsx)(T.Z_, {
                                  onClick: () => {
                                      let e = t1.A.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != tj.A.getChannel(e) && M.default.selectVoiceChannel(e);
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
                                      P.clearLastSessionVoiceChannelId(), ns();
                                  },
                                  noticeType: r.type,
                              }),
                              es.intl.string(es.t.jY2lUA),
                              (0, i.jsx)(T.Z_, {
                                  onClick: () => {
                                      let e = t1.A.getLastSessionVoiceChannelId();
                                      null != e && null != tj.A.getChannel(e) && M.default.selectVoiceChannel(e);
                                  },
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.vD60Pv),
                              }),
                          ],
                      });
                  case ei.kqX.SPOTIFY_AUTO_PAUSED:
                      let Z = k.A.get(ei.fg2.SPOTIFY);
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => ns(), noticeType: r.type }),
                              (0, i.jsx)("img", {
                                  alt: "",
                                  className: ea.tV,
                                  src: (0, _.q)(E) ? Z.icon.darkSVG : Z.icon.whiteSVG,
                              }),
                              es.intl.string(es.t.D8Cp76),
                              (0, i.jsx)(T.Z_, {
                                  onClick: () => (0, Q.openUserSettings)(z.X.VOICE_AND_VIDEO_PANEL),
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.NiTd0e),
                              }),
                              (0, i.jsx)(d.Anchor, {
                                  className: ea.uD,
                                  href: t7.A.getArticleURL(ei.MVz.SPOTIFY_AUTO_PAUSED),
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
                                  onClick: () => (o && null != t ? (0, eY.Ze)(t) : j.R()),
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
                                              onCancel: j.R,
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
                      return (0, i.jsx)(nr, { noticeType: r.type });
                  case ei.kqX.NO_INPUT_DEVICES_DETECTED:
                      return (0, i.jsx)(nn, { noticeType: r.type });
                  case ei.kqX.VIDEO_BACKGROUND_UNAVAILABLE:
                      return (0, i.jsx)(ni, { noticeType: r.type });
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
                                          O.A.setEnableHardwareMuteNotice(!1), ns();
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
                          tE.A.getConfig({ location: "Notice.AudioIssueNoticeHardwareMute" })
                              .enableHardwareSilenceWarning
                      )
                          return (0, i.jsxs)(T.$T, {
                              color: T.Hv.INFO,
                              children: [
                                  es.intl.format(es.t.QMw8Fd, {}),
                                  (0, i.jsx)(T.PM, {
                                      noticeType: r.type,
                                      onClick: () => {
                                          O.A.setEnableHardwareMuteNotice(!1), ns();
                                      },
                                  }),
                              ],
                          });
                      return null;
                  case ei.kqX.STREAMER_MODE:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.STREAMER_MODE,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => ns(), noticeType: ei.kqX.STREAMER_MODE }),
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
                      let { skuId: $, applicationId: J } = r.metadata,
                          et = t2.A.get($),
                          en = v.A.getApplication(J);
                      if (null == et || null == en) return null;
                      let er = { page: ei.liQ.IN_APP };
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => m(et.id),
                                  noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: ea.PC }),
                              es.intl.format(es.t["g3MU/+"], { applicationName: en.name, skuName: et.name }),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: async () => {
                                      try {
                                          let { openIAPPurchaseModal: e } = await Promise.all([
                                              n.e("83118"),
                                              n.e("98942"),
                                              n.e("31076"),
                                              n.e("68961"),
                                              n.e("69167"),
                                              n.e("14883"),
                                              n.e("23102"),
                                              n.e("2285"),
                                              n.e("97726"),
                                              n.e("42394"),
                                              n.e("44459"),
                                              n.e("98986"),
                                              n.e("37467"),
                                              n.e("60411"),
                                              n.e("61298"),
                                              n.e("45807"),
                                              n.e("26572"),
                                              n.e("65640"),
                                              n.e("87356"),
                                              n.e("85391"),
                                              n.e("56356"),
                                              n.e("18307"),
                                              n.e("5270"),
                                              n.e("42293"),
                                              n.e("60574"),
                                              n.e("83554"),
                                              n.e("53412"),
                                              n.e("18917"),
                                              n.e("94450"),
                                              n.e("86307"),
                                              n.e("3574"),
                                              n.e("711"),
                                              n.e("73153"),
                                              n.e("25457"),
                                              n.e("40981"),
                                              n.e("75030"),
                                              n.e("63576"),
                                              n.e("50693"),
                                              n.e("6487"),
                                              n.e("69794"),
                                              n.e("20661"),
                                              n.e("69190"),
                                              n.e("18315"),
                                              n.e("17776"),
                                              n.e("78969"),
                                              n.e("77770"),
                                              n.e("61275"),
                                              n.e("49557"),
                                              n.e("30072"),
                                              n.e("18629"),
                                              n.e("90607"),
                                              n.e("3672"),
                                              n.e("37175"),
                                              n.e("13920"),
                                              n.e("99424"),
                                              n.e("670"),
                                              n.e("99496"),
                                              n.e("44565"),
                                              n.e("88563"),
                                              n.e("24212"),
                                              n.e("20459"),
                                              n.e("54960"),
                                              n.e("55455"),
                                              n.e("778"),
                                              n.e("75683"),
                                              n.e("23864"),
                                              n.e("47519"),
                                              n.e("80197"),
                                              n.e("48132"),
                                              n.e("61686"),
                                              n.e("77873"),
                                              n.e("97312"),
                                              n.e("38469"),
                                              n.e("62332"),
                                              n.e("8607"),
                                              n.e("27962"),
                                              n.e("64827"),
                                              n.e("63232"),
                                              n.e("7167"),
                                              n.e("84569"),
                                              n.e("61060"),
                                              n.e("10471"),
                                              n.e("52457"),
                                              n.e("60235"),
                                              n.e("77333"),
                                              n.e("18573"),
                                              n.e("6338"),
                                              n.e("47834"),
                                              n.e("97595"),
                                              n.e("47662"),
                                              n.e("44057"),
                                              n.e("13736"),
                                              n.e("28504"),
                                              n.e("31988"),
                                              n.e("62156"),
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
                                              n.e("30760"),
                                              n.e("94723"),
                                              n.e("30316"),
                                              n.e("62931"),
                                              n.e("45959"),
                                              n.e("58529"),
                                              n.e("81987"),
                                              n.e("58038"),
                                              n.e("71202"),
                                              n.e("75201"),
                                              n.e("76909"),
                                              n.e("6174"),
                                              n.e("46070"),
                                              n.e("29963"),
                                              n.e("92075"),
                                              n.e("23532"),
                                              n.e("90417"),
                                              n.e("67022"),
                                              n.e("99292"),
                                              n.e("50097"),
                                              n.e("33184"),
                                              n.e("28843"),
                                              n.e("73215"),
                                              n.e("91824"),
                                              n.e("62075"),
                                          ]).then(n.bind(n, 4630));
                                          await e({
                                              applicationId: en.id,
                                              skuId: et.id,
                                              openPremiumPaymentModal: () => {
                                                  (0, Y.A)({
                                                      initialPlanId: null,
                                                      subscriptionTier: el.pe.TIER_2,
                                                      analyticsLocations: s,
                                                      analyticsObject: er,
                                                  });
                                              },
                                              analyticsLocations: s,
                                              analyticsLocationObject: er,
                                              context: __OVERLAY__ ? ei.BRT.OVERLAY : ei.BRT.APP,
                                          }),
                                              m(et.id);
                                      } catch (e) {
                                          null != e && ne.error("Failed to open off-platform premium perk modal", e);
                                      }
                                  },
                                  children: es.intl.string(es.t.KEwPYx),
                              }),
                          ],
                      });
                  case ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == r.metadata) return null;
                      let { skuId: e, applicationId: t } = r.metadata,
                          n = t2.A.get(e),
                          l = v.A.getApplication(t);
                      if (null == n || null == l) return null;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => ns(),
                                  noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: ea.PC }),
                              es.intl.format(es.t.LquIKC, { applicationName: l.name, skuName: n.name }),
                              (0, i.jsx)(T.zr, {
                                  children: (0, i.jsx)(a.N_, {
                                      onClick: () => ns(),
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
                                      (0, h.pX)(t, !0);
                                  },
                              }),
                              n,
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.SURVEY,
                                  onClick: () => {
                                      a ? (0, tU.K)(E) : window.open(s, "_blank"), (0, h.pX)(t, !1);
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
                                  href: t7.A.getArticleURL(ei.MVz.CORRUPT_INSTALLATION),
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
                              (0, i.jsx)(T.PM, { onClick: () => ns(), noticeType: ei.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                              es.intl.string(es.t.wVjKGi),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.VIDEO_UNSUPPORTED_BROWSER,
                                  onClick: () => {
                                      (0, N.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("39981"),
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
                      let { error: eo } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => ns(), noticeType: ei.kqX.DISPATCH_ERROR }),
                              eo?.displayMessage,
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, N.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([n.e("763"), n.e("88014")]).then(
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
                      let { progress: ec, total: e_, name: eu } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => ns(),
                                  noticeType: ei.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                              }),
                              (0, i.jsxs)(q.A, {
                                  justify: q.A.Justify.CENTER,
                                  children: [
                                      null != eu
                                          ? es.intl.formatToPlainString(es.t["pHj+z4"], {
                                                name: `${eu}`,
                                                progress: ec,
                                                total: e_,
                                            })
                                          : es.intl.formatToPlainString(es.t["lHZn+A"], { progress: ec, total: e_ }),
                                      (0, i.jsx)(R.y, { type: R.y.Type.PULSING_ELLIPSIS, className: ea.gO }),
                                  ],
                              }),
                          ],
                      });
                  case ei.kqX.APPLICATION_TEST_MODE:
                      if (null == r.metadata) return null;
                      if (null != t5.A.testModeEmbeddedApplicationId)
                          return (0, i.jsx)(T.$T, {
                              color: T.Hv.WARNING,
                              children: (0, i.jsxs)(q.A, {
                                  justify: q.A.Justify.CENTER,
                                  align: q.A.Align.CENTER,
                                  children: [
                                      (0, i.jsx)("div", {
                                          children: es.intl.format(es.t["1qxVe4"], {
                                              applicationName: r.metadata.applicationName,
                                          }),
                                      }),
                                      (0, i.jsx)(T.PM, { onClick: U.cL, noticeType: ei.kqX.APPLICATION_TEST_MODE }),
                                  ],
                              }),
                          });
                      return (0, i.jsx)(T.$T, {
                          color: T.Hv.WARNING,
                          children: (0, i.jsxs)(q.A, {
                              justify: q.A.Justify.CENTER,
                              align: q.A.Align.CENTER,
                              children: [
                                  (0, i.jsx)("div", {
                                      children: es.intl.format(es.t.Fv5HrE, {
                                          applicationName: r.metadata.applicationName,
                                      }),
                                  }),
                                  (0, i.jsx)(T.PM, { onClick: U.cL, noticeType: ei.kqX.APPLICATION_TEST_MODE }),
                              ],
                          }),
                      });
                  case ei.kqX.VIEWING_ROLES:
                      return (0, i.jsx)(tn.A, {});
                  case ei.kqX.PREMIUM_UNCANCEL:
                      return (0, i.jsxs)(T.$T, {
                          color:
                              b === el.PremiumTypes.TIER_1
                                  ? T.Hv.PREMIUM_TIER_1
                                  : b === el.PremiumTypes.TIER_0
                                    ? T.Hv.PREMIUM_TIER_0
                                    : T.Hv.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: ei.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      ns(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: ea.PC }),
                              b === el.PremiumTypes.TIER_1
                                  ? es.intl.formatToPlainString(es.t.fXv4wm, { daysLeft: r.metadata.daysLeft })
                                  : b === el.PremiumTypes.TIER_0
                                    ? es.intl.formatToPlainString(es.t.ZOHZMr, { daysLeft: r.metadata.daysLeft })
                                    : es.intl.formatToPlainString(es.t.outyHh, { daysLeft: r.metadata.daysLeft }),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      ns(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, N.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("45807"),
                                                  n.e("98942"),
                                                  n.e("31076"),
                                                  n.e("68961"),
                                                  n.e("14883"),
                                                  n.e("69167"),
                                                  n.e("80197"),
                                                  n.e("61275"),
                                                  n.e("49557"),
                                                  n.e("30072"),
                                                  n.e("26572"),
                                                  n.e("18629"),
                                                  n.e("48132"),
                                                  n.e("23102"),
                                                  n.e("2285"),
                                                  n.e("97726"),
                                                  n.e("42394"),
                                                  n.e("44459"),
                                                  n.e("98986"),
                                                  n.e("37467"),
                                                  n.e("60411"),
                                                  n.e("61298"),
                                                  n.e("65640"),
                                                  n.e("87356"),
                                                  n.e("85391"),
                                                  n.e("56356"),
                                                  n.e("18307"),
                                                  n.e("5270"),
                                                  n.e("42293"),
                                                  n.e("60574"),
                                                  n.e("83554"),
                                                  n.e("53412"),
                                                  n.e("18917"),
                                                  n.e("94450"),
                                                  n.e("86307"),
                                                  n.e("3574"),
                                                  n.e("711"),
                                                  n.e("73153"),
                                                  n.e("25457"),
                                                  n.e("40981"),
                                                  n.e("75030"),
                                                  n.e("63576"),
                                                  n.e("6487"),
                                                  n.e("69794"),
                                                  n.e("20661"),
                                                  n.e("69190"),
                                                  n.e("18315"),
                                                  n.e("17776"),
                                                  n.e("78969"),
                                                  n.e("77770"),
                                                  n.e("90607"),
                                                  n.e("3672"),
                                                  n.e("37175"),
                                                  n.e("13920"),
                                                  n.e("99496"),
                                                  n.e("44565"),
                                                  n.e("88563"),
                                                  n.e("24212"),
                                                  n.e("20459"),
                                                  n.e("54960"),
                                                  n.e("55455"),
                                                  n.e("778"),
                                                  n.e("75683"),
                                                  n.e("23864"),
                                                  n.e("47519"),
                                                  n.e("61686"),
                                                  n.e("77873"),
                                                  n.e("97312"),
                                                  n.e("38469"),
                                                  n.e("83118"),
                                                  n.e("50693"),
                                                  n.e("99424"),
                                                  n.e("670"),
                                                  n.e("62332"),
                                                  n.e("8607"),
                                                  n.e("27962"),
                                                  n.e("64827"),
                                                  n.e("63232"),
                                                  n.e("7167"),
                                                  n.e("84569"),
                                                  n.e("61060"),
                                                  n.e("10471"),
                                                  n.e("52457"),
                                                  n.e("60235"),
                                                  n.e("77333"),
                                                  n.e("18573"),
                                                  n.e("6338"),
                                                  n.e("47834"),
                                                  n.e("97595"),
                                                  n.e("47662"),
                                                  n.e("44057"),
                                                  n.e("13736"),
                                                  n.e("28504"),
                                                  n.e("31988"),
                                                  n.e("62156"),
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
                                                  n.e("30760"),
                                                  n.e("94723"),
                                                  n.e("30316"),
                                                  n.e("62931"),
                                                  n.e("45959"),
                                                  n.e("58529"),
                                                  n.e("81987"),
                                                  n.e("58038"),
                                                  n.e("71202"),
                                                  n.e("75201"),
                                                  n.e("76909"),
                                                  n.e("6174"),
                                                  n.e("29963"),
                                                  n.e("92075"),
                                                  n.e("23532"),
                                                  n.e("90417"),
                                                  n.e("67022"),
                                                  n.e("99292"),
                                                  n.e("50097"),
                                                  n.e("33184"),
                                                  n.e("28843"),
                                                  n.e("73215"),
                                                  n.e("91824"),
                                                  n.e("14794"),
                                              ]).then(n.bind(n, 174705));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      daysLeft: r.metadata.daysLeft,
                                                      premiumType: b,
                                                      analyticsSource: "Nag Bar",
                                                      premiumSubscription: r.metadata.premiumSubscription,
                                                  });
                                          });
                                  },
                                  children:
                                      b === el.PremiumTypes.TIER_1
                                          ? es.intl.string(es.t.BkbUPM)
                                          : b === el.PremiumTypes.TIER_0
                                            ? es.intl.string(es.t.Px978X)
                                            : es.intl.string(es.t.LW5tCE),
                              }),
                          ],
                      });
                  case ei.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: eT, dismissUntil: ed } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: r.type,
                                  onClick: () => {
                                      ns(ed);
                                  },
                              }),
                              es.intl.format(es.t.zxU0Kp, { daysPastDue: eT }),
                              (0, i.jsx)(th, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  analyticsLocation: x.A.PAST_DUE_ONE_TIME_PAYMENT_NOTICE,
                                  location: "premium_past_due_one_time_payment_notice",
                                  onFallback: () => {
                                      ns(ed), (0, Q.openUserSettings)(z.X.SUBSCRIPTIONS_PANEL);
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
                                      ns(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              es.intl.string(es.t.LlZaoX),
                              (0, i.jsx)(th, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  analyticsLocation: x.A.PAST_DUE_INVALID_PAYMENT_NOTICE,
                                  location: "premium_past_due_invalid_payment_notice",
                                  onFallback: () => {
                                      ns(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, Q.openUserSettings)(z.X.SUBSCRIPTIONS_PANEL);
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
                                      ns(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              es.intl.string(es.t["30YfCr"]),
                              (0, i.jsx)(th, {
                                  noticeType: ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  analyticsLocation: x.A.PAST_DUE_MISSING_PAYMENT_NOTICE,
                                  location: "premium_past_due_missing_payment_notice",
                                  onFallback: () => {
                                      ns(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, Q.openUserSettings)(z.X.SUBSCRIPTIONS_PANEL);
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
                                      ns(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              b === el.PremiumTypes.TIER_1
                                  ? es.intl.formatToPlainString(es.t.b6QUvf, { daysLeft: r.metadata.daysLeft })
                                  : b === el.PremiumTypes.TIER_0
                                    ? es.intl.formatToPlainString(es.t["tURZ/M"], { daysLeft: r.metadata.daysLeft })
                                    : es.intl.formatToPlainString(es.t.AyC74I, { daysLeft: r.metadata.daysLeft }),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: ei.kqX.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      ns(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, Q.openUserSettings)(z.X.SUBSCRIPTIONS_PANEL);
                                  },
                                  children:
                                      b === el.PremiumTypes.TIER_1
                                          ? es.intl.string(es.t.lboF5O)
                                          : b === el.PremiumTypes.TIER_0
                                            ? es.intl.string(es.t["4UPwOq"])
                                            : es.intl.string(es.t["P/VvGb"]),
                              }),
                          ],
                      });
                  case ei.kqX.BACK_TO_PREVIOUS_SCREEN:
                      return (0, i.jsx)(te, {
                          buttonText: r.buttonText ?? es.intl.string(es.t["/g10LC"]),
                          onGoBack: r.callback,
                          onDismiss: () => ns(),
                          showCloseButton: !0,
                      });
                  case ei.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
                      return (0, i.jsx)(eK, { guildId: t, analyticsLocations: s });
                  case ei.kqX.PARENTAL_CONSENT_WARNING:
                      return (0, i.jsx)(td, { daysRemaining: r.metadata?.daysRemaining ?? null });
                  case ei.kqX.QUARANTINED:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              es.intl.string(es.t.DVFJYf),
                              (0, i.jsx)(T.eC, {
                                  href: t4.q,
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: es.intl.string(es.t.kvHdFN),
                              }),
                              (0, i.jsx)(d.Anchor, {
                                  href: t7.A.getArticleURL(ei.MVz.QUARANTINE),
                                  target: "_blank",
                                  className: ea.yw,
                                  children: es.intl.string(es.t.hvVgAZ),
                              }),
                          ],
                      });
                  case ei.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: eN, decisionId: eR } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: ei.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != t && (0, ej.wu)(t), ns(eN);
                                  },
                              }),
                              es.intl.string(es.t.B8ruyY),
                              (0, i.jsx)(T.zr, {
                                  onClick: () => {
                                      null != t &&
                                          (0, ej.W5)(t, eR, () => {
                                              ns(eN), (0, ej.wu)(t);
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
                                      r.metadata?.streamKey != null && (0, ty.lk)(r.metadata.streamKey);
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
                                      ns(r.metadata?.dismissUntil);
                                  },
                                  noticeType: ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                              }),
                              es.intl.string(es.t["0klLS7"]),
                              (0, i.jsx)(T.Z_, {
                                  onClick: () => {
                                      (0, N.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("4079"),
                                              n.e("22255"),
                                              n.e("55925"),
                                              n.e("40794"),
                                              n.e("37381"),
                                              n.e("26484"),
                                              n.e("9163"),
                                          ]).then(n.bind(n, 307750));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                          ns(r.metadata?.dismissUntil);
                                  },
                                  noticeType: ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: es.intl.string(es.t.e4y2VM),
                              }),
                          ],
                      });
                  case ei.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsx)(tk, {});
                  case ei.kqX.PREMIUM_MARKETING_NAGBAR:
                      return (0, i.jsx)(tp.A, {});
                  case ei.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR:
                      return (0, i.jsx)(tm, { premiumSubscription: r.metadata.premiumSubscription });
                  case ei.kqX.SYSTEM_SERVICE_WARNING:
                      return (0, i.jsx)(tZ, {});
                  default:
                      return null;
              }
          })
        : null;
function nE() {
    let { analyticsLocations: e } = (0, G.Ay)(x.A.NOTICE);
    return (0, i.jsx)(G.f5, { value: e, children: (0, i.jsx)(na, {}) });
}
