n.d(t, { w: () => nR, A: () => nS });
var i = n(477900),
    l = n(582128),
    r = n(536637),
    s = n.n(r);
if (221552 == n.j) var a = n(561028);
var E = n(299855),
    o = n.n(E),
    c = n(17928);
if (221552 == n.j) var _ = n(462887);
if (221552 == n.j) var u = n(834730);
if (221552 == n.j) var A = n(939249);
if (221552 == n.j) var T = n(417098);
if (221552 == n.j) var I = n(28863);
if (221552 == n.j) var d = n(403581);
if (221552 == n.j) var N = n(192308);
if (221552 == n.j) var R = n(289873);
var O = n(157559),
    S = n(827343),
    C = n(830215),
    D = n(73153);
function P(e) {
    D.h.dispatch({ type: "DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS", skuId: e });
}
var p = n(912851);
let M =
    221552 == n.j
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
    U = n(55619),
    g = n(246605),
    h = n(271866),
    k = n(736653),
    y = n(77729),
    L = n(573648),
    x = n(793574),
    G = n(688810);
if (221552 == n.j) var j = n(866665);
if (221552 == n.j) var q = n(346411);
var v = n(587895),
    X = n(875444),
    B = n(793943),
    b = n(885386),
    F = n(147964),
    V = n(375708);
function H(e) {
    let { className: t } = e,
        { activePanel: n } = (0, B.fy)(),
        l = n === B.HP.APPLICATION_TEST_MODE_DEBUG;
    return (0, c.bG)([F.A, v.A], () => {
        let e = F.A.testModeApplicationId;
        if (!b.Q_.getSetting() || null == e) return !1;
        let t = v.A.getApplication(e);
        return null != t && (0, X.A)(t);
    })
        ? (0, i.jsx)(j.m, {
              position: "bottom",
              text: V.intl.string(V.t["9Isknj"]),
              ariaHidden: !0,
              children: (0, i.jsx)(A.D, {
                  tag: "div",
                  role: "button",
                  className: t,
                  "aria-label": V.intl.string(V.t["9Isknj"]),
                  onClick: () => {
                      l ? (0, B.Jp)() : (0, B.nf)(B.HP.APPLICATION_TEST_MODE_DEBUG);
                  },
                  children: (0, i.jsx)(q.WrenchIcon, { size: "xs", color: "currentColor" }),
              }),
          })
        : null;
}
var w = n(315982),
    Y = n(235986),
    K = n(626584),
    W = n(554146);
if (221552 == n.j) var z = n(376357);
if (221552 == n.j) var $ = n(857250);
if (221552 == n.j) var Q = n(97483);
var Z = n(803306),
    J = n(975807),
    ee = n(968309),
    et = n(75678),
    en = n(492462),
    ei = n(741231),
    el = n(287809),
    er = n(174459),
    es = n(920050),
    ea = n(635995),
    eE = n(789861),
    eo = n(220038),
    ec = n(202541),
    e_ = n(92737),
    eu = n(652215),
    eA = n(49999),
    eT = n(310235);
function eI(e) {
    let { markAsDismissed: t } = e,
        n = (0, c.bG)([el.default], () => el.default.getCurrentUser()),
        r = (0, eo.d6)(n),
        { analyticsLocations: s } = (0, G.Ay)(x.A.CALL_OF_DUTY_3PP_NAGBAR),
        a = l.useCallback(() => {
            (0, ei.A)(eu.BVt.NITRO_HOME, { search: (0, en.stringify)({ perk: es.CALL_OF_DUTY_3PP_CARD_ID }) });
        }, []),
        E = l.useCallback(() => {
            (er.default.track(eu.HAw.APP_NOTICE_CLOSED, { notice_type: eu.kqX.COD_3PP_NAGBAR }), t(eA.i.USER_DISMISS));
        }, [t]),
        o = l.useCallback(() => {
            (er.default.track(eu.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: eu.kqX.COD_3PP_NAGBAR }),
            t(eA.i.TAKE_ACTION),
            r === eo.F5.NITRO)
                ? a()
                : (0, et.A)({ subscriptionTier: ec.pe.TIER_2, analyticsLocations: s, onSubscriptionConfirmation: a });
        }, [s, t, a, r]);
    if (null == r) return null;
    let _ = r === eo.F5.NITRO,
        u = V.intl.formatToPlainString(_ ? eT.default["hworR+"] : eT.default["RuZS+B"], { validDates: (0, eE.a1)() }),
        A = V.intl.string(_ ? eT.default.niUDET : eT.default.mHRW3e);
    return (0, i.jsxs)(ea.T0, {
        onClick: E,
        children: [(0, i.jsx)(ea.In, { children: u }), (0, i.jsx)(ea.fY, { text: A, onClick: o })],
    });
}
var ed = n(745299),
    eN = n(975571),
    eR = n(713271),
    eO = n(256150),
    eS = n(50949),
    eC = n(762359);
function eD(e) {
    let { markAsDismissed: t } = e,
        n = (0, c.bG)([el.default], () => el.default.getCurrentUser()),
        r = (0, eO.He)(n),
        { analyticsLocations: s } = (0, G.Ay)(x.A.YOUTUBE_3PP_NAGBAR),
        a = l.useCallback(() => {
            (er.default.track(eu.HAw.APP_NOTICE_CLOSED, { notice_type: eu.kqX.YOUTUBE_3P_NAGBAR }),
                t(eA.i.USER_DISMISS));
        }, [t]),
        E = l.useCallback(() => {
            (er.default.track(eu.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: eu.kqX.YOUTUBE_3P_NAGBAR }),
            t(eA.i.TAKE_ACTION),
            r === eO.rb.NITRO)
                ? (0, ei.A)(eu.BVt.NITRO_HOME, { search: (0, en.stringify)({ perk: es.YOUTUBE_3PP_CARD_ID }) })
                : ((0, ei.A)(eu.BVt.NITRO_HOME, { search: (0, en.stringify)({ [e_.x]: eR.N.YOUTUBE }) }), (0, eS.z)(s));
        }, [s, t, r]);
    if (null == r) return null;
    let o = r === eO.rb.NITRO;
    return (0, i.jsxs)(ea.T0, {
        onClick: a,
        children: [
            (0, i.jsx)(ea.In, {
                children: V.intl.format(eC.default.Hgo1xT, {
                    helpCenterUrl: eN.A.getArticleURL(eu.MVz.YOUTUBE_PROMOTION),
                }),
            }),
            (0, i.jsx)(ea.fY, { text: V.intl.string(o ? V.t.pVBlCH : V.t["vKA/P1"]), onClick: E }),
        ],
    });
}
var eP = n(976860),
    ep = n(780964),
    eM = n(718446),
    em = n(766075),
    ef = n(879945),
    eU = n(379848),
    eg = n(355097),
    eh = n(971656);
function ek(e) {
    let { dismissibleContent: t, noticeType: l } = e;
    return (0, i.jsx)(eU.Ay, {
        contentTypes: [t],
        groupName: eA.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: r } = e;
            switch (t) {
                case W.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(T.PM, { onClick: () => r(eA.i.UNKNOWN), noticeType: l }),
                            V.intl.string(V.t["+xn1o5"]),
                            (0, i.jsx)("i", { className: eh.c9 }),
                            (0, i.jsx)("i", { className: eh.Vz }),
                            (0, i.jsx)("i", { className: eh.p0 }),
                            (0, i.jsx)(T.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    (0, N.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("915082"),
                                            n.e("944602"),
                                            n.e("825280"),
                                        ]).then(n.bind(n, 987482));
                                        return (t) => (0, i.jsx)(e, { source: "Top Bar Nag", ...t });
                                    });
                                },
                                children: V.intl.string(V.t["1WjMbC"]),
                            }),
                        ],
                    });
                case W.M.NAGBAR_QUEST_APP_UPSELL:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(T.PM, { onClick: () => r(eA.i.UNKNOWN), noticeType: l }),
                            (0, i.jsx)("i", { className: eh.TN }),
                            V.intl.string(V.t.lgwX26),
                            (0, i.jsx)(T.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    ((0, J.A)(eu.AMi.META_QUEST), r(eA.i.TAKE_ACTION));
                                },
                                children: V.intl.string(V.t["1WjMbC"]),
                            }),
                        ],
                    });
                case W.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.SPOTIFY,
                        children: [
                            (0, i.jsx)(T.PM, { onClick: () => r(eA.i.UNKNOWN), noticeType: l }),
                            (0, i.jsx)(ef.A, { className: eh.tV }),
                            V.intl.string(V.t["5NUVHH"]),
                            (0, i.jsx)(T.Z_, {
                                onClick: () => (0, ee.A)({ platformType: eu.fg2.SPOTIFY, location: "Notice Bar" }),
                                noticeType: l,
                                children: V.intl.string(V.t.S0W8Z5),
                            }),
                        ],
                    });
                case W.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(T.PM, { onClick: () => r(eA.i.USER_DISMISS), noticeType: l }),
                            V.intl.string(V.t["3qKN/h"]),
                            (0, i.jsx)(T.Z_, {
                                onClick: async () => {
                                    r(eA.i.TAKE_ACTION);
                                    try {
                                        let { startRegisterWebAuthnCredential: e } = await Promise.resolve().then(
                                                n.bind(n, 917136),
                                            ),
                                            { ticket: t, challenge: l } = await e();
                                        (0, N.openModalLazy)(async () => {
                                            let { RegisterWebAuthnCredentialModal: e } = await Promise.all([
                                                n.e("113391"),
                                                n.e("82721"),
                                                n.e("104736"),
                                                n.e("419631"),
                                                n.e("840114"),
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
                                        (0, z.P)((0, $.o)(V.intl.string(V.t.xSCvBf), Q.Ck.FAILURE));
                                    }
                                },
                                noticeType: l,
                                children: V.intl.string(V.t["ff/XXy"]),
                            }),
                        ],
                    });
                case W.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)("span", { className: eh.lK }),
                            (0, i.jsx)("span", { className: eh.$t, children: V.intl.string(V.t["+urf75"]) }),
                            (0, i.jsx)(T.Z_, {
                                className: eh.CO,
                                noticeType: l,
                                onClick: () => {
                                    (er.default.track(eu.HAw.PREMIUM_PROMOTION_OPENED, {
                                        location_section: eu.JJy.NOTIFICATION_BAR,
                                        location_object: eu.ZSU.BUTTON_CTA,
                                    }),
                                        (0, em.openUserSettings)(ep.X.NITRO_PANEL));
                                },
                                children: V.intl.string(V.t["8JC5e/"]),
                            }),
                            (0, i.jsx)(T.PM, {
                                onClick: () => {
                                    (r(eA.i.UNKNOWN), (0, Z.lA)(eu.nhx.PREMIUM_PROMO_DISMISSED, !0));
                                },
                                noticeType: l,
                            }),
                        ],
                    });
                case W.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(ed.A, {
                        dismissCurrentNotice: () => r(eA.i.USER_DISMISS),
                        subscriptionTier: ec.pe.TIER_2,
                    });
                case W.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(ed.A, {
                        dismissCurrentNotice: () => r(eA.i.USER_DISMISS),
                        subscriptionTier: ec.pe.TIER_0,
                    });
                case W.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(T.PM, { noticeType: l, onClick: () => r(eA.i.USER_DISMISS) }),
                            V.intl.string(V.t["0KFB2B"]),
                            (0, i.jsx)(T.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    (r(eA.i.TAKE_ACTION), (0, em.openUserSettings)(ep.X.NITRO_PANEL));
                                },
                                children: V.intl.string(V.t.pyYSiO),
                            }),
                        ],
                    });
                case W.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.DANGER,
                        children: [
                            (0, i.jsx)(T.PM, { onClick: () => r(eA.i.UNKNOWN), noticeType: l }),
                            V.intl.string(V.t["7490vQ"]),
                            (0, i.jsx)(T.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    (0, eP.pX)((0, eM.settingsPathToRoute)(eg.od.ACCOUNT));
                                },
                                children: V.intl.string(V.t.Vm8akB),
                            }),
                        ],
                    });
                case W.M.COD_3PP_NAGBAR_NOTICE:
                    return (0, i.jsx)(eI, { markAsDismissed: r });
                case W.M.YOUTUBE_3P_NAGBAR_NOTICE:
                    return (0, i.jsx)(eD, { markAsDismissed: r });
                case W.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(T.$T, {
                        color: T.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(T.PM, { onClick: () => r(eA.i.USER_DISMISS), noticeType: l }),
                            V.intl.string(V.t["O9GI+k"]),
                            (0, i.jsx)(T.Z_, {
                                onClick: () => {
                                    (r(eA.i.TAKE_ACTION),
                                        (0, et.A)({
                                            subscriptionTier: ec.pe.TIER_2,
                                            analyticsLocations: [x.A.CHECKOUT_RECOVERY_NAGBAR],
                                            analyticsLocation: eu.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                                        }));
                                },
                                noticeType: l,
                                children: V.intl.string(V.t.Zi69D4),
                            }),
                        ],
                    });
            }
        },
    });
}
var ey = n(877624),
    eL = n(412260),
    ex = n(131607),
    eG = n(823901);
function ej(e) {
    let t,
        n,
        { dismissibleContent: l } = e,
        { snowflakeId: r, couldShow: s } =
            ((t = (0, c.bG)([eL.A], () => eL.A.getGiftPromotion()?.id)),
            (n = (0, c.bG)([eL.A], () => null != eL.A.getMarketingComponentByType(ey.C.GIFT_REMINDER_NAGBAR))),
            l === W.M.GIFTING_PROMOTION_REMINDER
                ? { snowflakeId: t, couldShow: n && null != t }
                : { snowflakeId: void 0, couldShow: !1 }),
        [a, E] = (0, ex.Cc)(s ? l : null, r ?? "", eA.m.NOTICE_BAR, !0);
    return null == a
        ? null
        : a === W.M.GIFTING_PROMOTION_REMINDER
          ? (0, i.jsx)(eG.y, { markAsDismissed: (e) => E(e) })
          : void 0;
}
var eq = n(264779),
    ev = n(962644),
    eX = n(158045),
    eB = n(723970);
function eb(e) {
    let { dismissibleContent: t } = e,
        n = (0, eq.Cp)(),
        r = (0, c.bG)([el.default], () => !eX.Ay.isPremium(el.default.getCurrentUser())),
        s = l.useCallback(() => {
            (er.default.track(eu.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED),
                (0, em.openUserSettings)(ep.X.GIFT_PANEL),
                ev.Ay.dismissOutboundPromotionNotice());
        }, []);
    return null == n
        ? null
        : (0, i.jsx)(eU.YS, {
              contentType: t,
              newSnowflakeId: n,
              timeRecurringConfig: { cooldownDurationMs: 0 },
              groupName: eA.m.NOTICE_BAR,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: n } = e;
                  if (t === W.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR)
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: eu.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      (ev.Ay.dismissOutboundPromotionNotice(), null !== n && n(eA.i.USER_DISMISS));
                                  },
                              }),
                              (0, i.jsx)(d.t, { size: "md", color: "currentColor", className: eB.P }),
                              r ? V.intl.string(V.t["5JMiOo"]) : V.intl.string(V.t["Pzh+G2"]),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: eu.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      (s(), null !== n && n(eA.i.TAKE_ACTION));
                                  },
                                  children: V.intl.string(V.t.jVcuVY),
                              }),
                          ],
                      });
              },
          });
}
var eF = n(532205),
    eV = n(487329),
    eH = n(102609),
    ew = n(736056);
if (221552 == n.j) var eY = n(194261);
var eK = n(548118),
    eW = n(134413),
    ez = n(221950),
    e$ = n(71393),
    eQ = n(309010),
    eZ = n(967198),
    eJ = n(585510),
    e0 = n(834409),
    e1 = n(903093),
    e2 = n(746080),
    e5 = n(856093);
function e3(e) {
    let { onDismiss: t } = e,
        r = (0, c.bG)([eZ.A], () => eZ.A.getGuildId()),
        s = (0, c.bG)([eQ.Ay], () => (null != r ? eQ.Ay.getChannelId(r) : null), [r]),
        a = r ?? null,
        E = (0, c.bG)([e$.A], () => (null != a ? e$.A.getGuild(a) : null), [a]),
        { shouldShowIncidentActions: o, incidentData: _, isUnderLockdown: u } = (0, eJ.Li)(a),
        A = (0, eW.fw)(E?.id ?? eu.dJq),
        I = l.useCallback(() => null != E && (0, ez.aZ)(E.id), [E]);
    if (null == E || null == _ || !o) return null;
    function d(e) {
        if (null != E) {
            if (e && A && s !== e2.VV.MEMBER_SAFETY && I())
                return void er.default.track(eu.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: eu.kqX.GUILD_RAID_NOTIFICATION,
                    guild_id: E.id,
                });
            (0, N.openModalLazy)(async () => {
                let e = { source: e0.Eo.NAGBAR, alertType: (0, e1.$5)(_) },
                    { default: t } = await Promise.all([
                        n.e("684290"),
                        n.e("660608"),
                        n.e("940258"),
                        n.e("273669"),
                        n.e("346313"),
                        n.e("343233"),
                    ]).then(n.bind(n, 671576));
                return (n) => (0, i.jsx)(t, { ...n, guildId: E.id, analyticsData: e });
            });
        }
    }
    let R = (0, i.jsx)(eK.Ay, { className: e5.$f, guild: E, size: eK.Ay.Sizes.MINI }),
        O = (0, e1.ql)(_, E.name);
    if (null != (_.dmsDisabledUntil ?? _.invitesDisabledUntil) && u)
        return (0, i.jsxs)(T.$T, {
            className: e5.lm,
            color: T.Hv.NEUTRAL,
            children: [
                (0, i.jsx)(T.PM, { onClick: t, noticeType: eu.kqX.GUILD_RAID_NOTIFICATION }),
                R,
                O,
                (0, i.jsx)(T.zr, {
                    className: e5.hP,
                    onClick: () => d(!1),
                    children: (0, i.jsxs)("div", {
                        className: e5.rx,
                        children: [
                            (0, i.jsx)(eY.LockIcon, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)("span", { children: V.intl.string(V.t["c+7oa7"]) }),
                        ],
                    }),
                }),
            ],
        });
    let S = (0, e1.P$)(_)
            ? V.intl.formatToPlainString(V.t.tZTx2E, { guildName: E.name })
            : (0, e1.Qm)(_)
              ? V.intl.formatToPlainString(V.t["1bSmxr"], { guildName: E.name })
              : V.intl.formatToPlainString(V.t.W87xDE, { guildName: E.name }),
        C = A && s === e2.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(T.$T, {
        className: e5.lm,
        color: T.Hv.WARNING,
        children: [
            (0, i.jsx)(T.PM, { onClick: t, noticeType: eu.kqX.GUILD_RAID_NOTIFICATION }),
            R,
            S,
            !C &&
                (0, i.jsx)(T.zr, {
                    className: e5.hP,
                    onClick: () => d(!0),
                    children: (0, i.jsx)("div", {
                        className: e5.rx,
                        children: (0, i.jsx)("span", { children: V.intl.string(V.t.zDJDhr) }),
                    }),
                }),
        ],
    });
}
var e7 = n(995786),
    e9 = n(206835),
    e6 = n(280450),
    e8 = n(696451),
    e4 = n(229527),
    te = n(81400),
    tt = n(340837);
function tn(e) {
    let { guildId: t, analyticsLocations: n } = e,
        [l, r] = (0, te.j8)({ guildId: t, analyticsLocations: n }),
        s = r ? V.intl.string(V.t["6ndMcq"]) : V.intl.string(V.t["0eiu6J"]),
        a = r ? V.intl.string(V.t.S09nw4) : V.intl.string(V.t.tEttXd);
    return (0, i.jsxs)(T.$T, { color: T.Hv.DANGER, children: [s, (0, i.jsx)(T.zr, { onClick: l, children: a })] });
}
function ti() {
    let e = (0, e9.A)({ scrollPosition: eg._F.GUILD_TAG });
    return (0, i.jsxs)(T.$T, {
        color: T.Hv.DANGER,
        children: [V.intl.string(V.t.Zqlecb), (0, i.jsx)(T.zr, { onClick: e, children: V.intl.string(V.t.SJehVW) })],
    });
}
function tl(e) {
    let { analyticsLocations: t, ...n } = e,
        { analyticsLocations: l } = (0, G.Ay)(t, x.A.AUTOMOD_NAGBAR_NOTICE),
        r = (0, c.bG)(
            [e6.default, e8.Ay],
            () => {
                if (null == n.guildId) return new Set();
                let e = e6.default.getId();
                return (0, e4.wj)(e8.Ay.getMember(n.guildId, e));
            },
            [n.guildId],
        );
    return r.has(tt.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || r.has(tt.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, i.jsx)(tn, { ...n, analyticsLocations: l })
        : r.has(tt.D.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, i.jsx)(ti, {})
          : (0, i.jsx)(tn, { ...n, analyticsLocations: l });
}
var tr = n(202384),
    ts = n(51758);
n(321073);
var ta = n(503698),
    tE = n.n(ta);
if (221552 == n.j) var to = n(806163);
if (221552 == n.j) var tc = n(314116);
if (221552 == n.j) var t_ = n(821609);
var tu = n(334465),
    tA = n(624458),
    tT = n(513461),
    tI = n(709977),
    td = n(212455),
    tN = n(967641),
    tR = n(934966);
let tO =
    221552 == n.j
        ? function () {
              let e = (0, c.bG)([eZ.A], () => eZ.A.getGuildId(), []),
                  t = (0, c.bG)([e$.A], () => e$.A.getGuild(e), [e]),
                  l = (0, c.bG)([td.A], () => (null != e ? td.A.getRequest(e) : null), [e]),
                  r = (0, to.zy)(),
                  s = (0, tu.B)(r.pathname, eu.BVt.CHANNEL(t?.id, e2.VV.GUILD_ONBOARDING))?.isExact === !0;
              if (null == t || !(0, tI.Qd)(t) || s) return null;
              let a = l?.applicationStatus ?? tT.B5.STARTED,
                  E = null,
                  o = null,
                  _ = null,
                  A = [tN.lm, tR.lm];
              switch (a) {
                  case tT.B5.SUBMITTED:
                      ((E = V.intl.string(V.t["5iLvSx"])),
                          (o = V.intl.string(V.t.mqtdmQ)),
                          (_ = function () {
                              null != t &&
                                  (0, tc.A)({
                                      title: V.intl.string(V.t.aIz1oV),
                                      subtitle: V.intl.string(V.t["13tjTU"]),
                                      variant: "primary",
                                      confirmText: V.intl.string(V.t["cY+Oob"]),
                                      onConfirm: () => tA.A.removeGuildJoinRequest(t.id),
                                  });
                          }));
                      break;
                  case tT.B5.REJECTED:
                      ((E = V.intl.string(V.t.lk30cY)),
                          (o = V.intl.string(V.t["8RrsHr"])),
                          (_ = function () {
                              null != t &&
                                  (0, N.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([n.e("298903"), n.e("914382")]).then(
                                          n.bind(n, 463325),
                                      );
                                      return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                                  });
                          }),
                          A.push(tN.z3));
                      break;
                  default:
                      ((E = V.intl.string(V.t.G5YKXP)),
                          (o = V.intl.string(V.t["r8/DT+"])),
                          (_ = function () {
                              null != t && (0, tr.Ze)(t.id);
                          }));
              }
              return (0, i.jsxs)("div", {
                  className: tE()(...A),
                  children: [
                      (0, i.jsx)(u.E, { className: tN.wx, variant: "text-sm/normal", children: E }),
                      (0, i.jsx)(t_.$, { variant: "overlay-primary", size: "sm", onClick: _, text: o }),
                  ],
              });
          }
        : null;
if (221552 == n.j) var tS = n(477155);
var tC = n(645460);
function tD(e) {
    let { buttonText: t, onGoBack: n, onDismiss: l, showCloseButton: r } = e;
    return (0, i.jsxs)(T.$T, {
        className: tC.eR,
        children: [
            r && (0, i.jsx)(T.PM, { onClick: l, className: tC.b, noticeType: eu.kqX.BACK_TO_PREVIOUS_SCREEN }),
            (0, i.jsx)(t_.$, { text: t, variant: "overlay-secondary", size: "sm", icon: tS.r, onClick: n }),
        ],
    });
}
var tP = n(468689),
    tp = n(699609);
if (221552 == n.j) var tM = n(862482);
var tm = n(66834),
    tf = n(449054),
    tU = n(451543);
let tg =
    221552 == n.j
        ? function () {
              let e = (0, c.bG)([eZ.A], () => eZ.A.getGuildId(), []),
                  t = (0, c.bG)([e$.A], () => e$.A.getGuild(e), [e]),
                  [n, r] = l.useState(!1);
              if (null == t) return null;
              async function s() {
                  if (null != t) {
                      r(!0);
                      try {
                          (tf.cf(t.id), await tm.A.joinGuild(t.id, { source: eu.Q4z.NOTICE_BAR }));
                      } catch {
                          r(!1);
                      }
                  }
              }
              return (0, i.jsxs)("div", {
                  className: tE()(tU.lm, tR.lm),
                  children: [
                      (0, i.jsxs)(tM.$n, {
                          look: tM.$n.Looks.OUTLINED,
                          color: tM.$n.Colors.WHITE,
                          size: tM.$n.Sizes.NONE,
                          className: tE()(tU.x6, tU.aX),
                          innerClassName: tU.gb,
                          onClick: function () {
                              (0, eP.JK)().goBack();
                          },
                          children: [
                              (0, i.jsx)(tS.r, { size: "xs", color: "currentColor", className: tU.UE }),
                              V.intl.string(V.t["13/7kX"]),
                          ],
                      }),
                      (0, i.jsx)(u.E, {
                          className: tU.wx,
                          variant: "text-sm/normal",
                          children: V.intl.string(V.t["N/y2WE"]),
                      }),
                      (0, i.jsx)(tM.$n, {
                          className: tU.x6,
                          look: tM.$n.Looks.OUTLINED,
                          color: tM.$n.Colors.WHITE,
                          size: tM.$n.Sizes.NONE,
                          submitting: n,
                          onClick: s,
                          children: V.intl.format(V.t.uHN7ny, { guild: t.name }),
                      }),
                  ],
              });
          }
        : null;
var th = n(74848),
    tk = n(899847),
    ty = n(191627),
    tL = n(513687),
    tx = n(597111);
let tG =
    221552 == n.j
        ? {
              "--custom-notice-background": "var(--background-feedback-warning)",
              "--custom-notice-text": "var(--text-strong)",
          }
        : null;
function tj(e) {
    let { daysRemaining: t } = e;
    (0, V.useSyncMessages)(tL.messagesLoader);
    let n = l.useCallback(() => {
        (er.default.track(eu.HAw.PARENTAL_CONSENT_WARNING_BANNER_TAPPED, { days_remaining: t }),
            tk.Ay.selectTab(ty.u9.REQUESTS),
            (0, em.openUserSettings)(ep.X.FAMILY_CENTER_PANEL));
    }, [t]);
    return (0, i.jsx)(T.$T, {
        color: T.Hv.CUSTOM,
        style: tG,
        children: (0, i.jsxs)("div", {
            className: tx.Q,
            children: [
                (0, i.jsx)(u.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    tag: "span",
                    children:
                        null != t && t > 0
                            ? V.intl.format(tL.default.F0hdak, { count: t })
                            : V.intl.string(tL.default.LTzc00),
                }),
                (0, i.jsx)(t_.$, {
                    variant: "secondary",
                    size: "sm",
                    text: V.intl.string(tL.default.xYJKEy),
                    onClick: n,
                }),
            ],
        }),
    });
}
var tq = n(732280),
    tv = n(754804),
    tX = n(166403),
    tB = n(543767),
    tb = n(228662);
function tF(e) {
    let { noticeType: t, analyticsLocation: n, onFallback: l, children: r } = e,
        s = (0, c.bG)([tX.A], () => tX.A.getPremiumTypeSubscription()),
        { analyticsLocations: a } = (0, G.Ay)(n),
        E = null != s && s.status === eu.Dmq.PAST_DUE,
        [o, _] = (0, tB.C8)({ subscriptionId: null != s ? s.id : "", preventFetch: !E }),
        u = E && null == o && null == _;
    return (
        (0, tb.A)("nagbar", null != s ? s.id : "", _),
        (0, i.jsx)(T.Z_, {
            noticeType: t,
            disabled: u,
            onClick: () => {
                null != s && null != o
                    ? (0, et.A)({ initialPlanId: s.planIdFromItems, openInvoiceId: o.id, analyticsLocations: a })
                    : l();
            },
            children: r,
        })
    );
}
var tV = n(378974),
    tH = n(396813),
    tw = n(14594);
function tY() {
    let [e, t] = (0, ex.Wl)(W.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: tw.aH });
    return e !== W.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK
        ? null
        : (0, i.jsxs)(T.$T, {
              color: T.Hv.BRAND,
              children: [
                  (0, i.jsx)(T.PM, { onClick: () => t(eA.i.DISMISS), noticeType: eu.kqX.IGNORE_USER_FEEDBACK_NAGBAR }),
                  V.intl.string(V.t.XkeW9N),
                  (0, i.jsx)(T.Z_, {
                      onClick: () => {
                          ((0, N.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e("312513"),
                                  n.e("36395"),
                                  n.e("155925"),
                                  n.e("218413"),
                                  n.e("137381"),
                                  n.e("326484"),
                                  n.e("574192"),
                              ]).then(n.bind(n, 976627));
                              return (t) => (0, i.jsx)(e, { ...t });
                          }),
                              t(eA.i.TAKE_ACTION));
                      },
                      noticeType: eu.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
                      children: V.intl.string(V.t.vcdNKv),
                  }),
              ],
          });
}
if (221552 == n.j) var tK = n(825484);
var tW = n(379257),
    tz = n(306537),
    t$ = n(734057),
    tQ = n(849736),
    tZ = n(354583),
    tJ = n(366098),
    t0 = n(418208),
    t1 = n(931841);
function t2(e) {
    if (!e && (0, t0.Cf)())
        return void tW.A.showAgeVerificationGetStartedModal({ entryPoint: tz.q1.STAGE_CHANNEL_RAISE_HAND });
    let t = eQ.Ay.getVoiceChannelId();
    if (null == t) return;
    let n = t$.A.getChannel(t);
    null != n && (0, tQ.e7)(n, e);
}
function t5(e) {
    let { channelId: t } = e,
        n = (0, tJ.D3)(t) ?? 0,
        l = (0, tJ.Xk)(t) ?? 0;
    return n > 0 && l > 0
        ? (0, i.jsx)("div", {
              className: t1.Z5,
              children: (0, i.jsx)("div", { className: tE()(t1.qQ, t1.lN), children: V.intl.string(V.t.xlJRfv) }),
          })
        : n > 0
          ? (0, i.jsx)("div", {
                className: t1.Z5,
                children: (0, i.jsx)("div", { className: tE()(t1.qQ, t1.lN), children: V.intl.string(V.t.WYad9Z) }),
            })
          : l > 0
            ? (0, i.jsx)("div", {
                  className: t1.Z5,
                  children: (0, i.jsx)("div", { className: tE()(t1.qQ, t1.lN), children: V.intl.string(V.t.eHq2OF) }),
              })
            : null;
}
function t3() {
    let e = (0, tZ.A)();
    return null == e
        ? null
        : (0, i.jsxs)(T.$T, {
              className: t1.kL,
              color: T.Hv.DEFAULT,
              children: [
                  V.intl.string(V.t.Ul1RJQ),
                  (0, i.jsx)(t5, { channelId: e.id }),
                  (0, i.jsxs)(tK.e, {
                      size: "sm",
                      className: t1.GC,
                      children: [
                          (0, i.jsx)(t_.$, {
                              variant: "overlay-primary",
                              text: V.intl.string(V.t.MpO0px),
                              onClick: () => t2(!1),
                          }),
                          (0, i.jsx)(t_.$, {
                              variant: "secondary",
                              onClick: () => t2(!0),
                              text: V.intl.string(V.t["1YDv7a"]),
                          }),
                      ],
                  }),
              ],
          });
}
var t7 = n(952818),
    t9 = n(935671);
function t6() {
    (0, t9.sL)("nagbar");
}
function t8() {
    return null == (0, c.bG)([t7.Ay], () => t7.Ay.getVisibleGame())
        ? null
        : (0, i.jsxs)(T.$T, {
              color: T.Hv.DANGER,
              children: [
                  (0, i.jsx)(T.PM, { noticeType: eu.kqX.SYSTEM_SERVICE_WARNING, onClick: () => nR() }),
                  V.intl.string(V.t["5rPt+j"]),
                  (0, i.jsx)(T.Z_, {
                      onClick: t6,
                      noticeType: eu.kqX.SYSTEM_SERVICE_WARNING,
                      children: V.intl.string(V.t["1iI46O"]),
                  }),
              ],
          });
}
function t4() {
    return (0, i.jsxs)(T.$T, {
        color: T.Hv.DANGER,
        children: [
            V.intl.string(V.t.lQiCJ6),
            (0, i.jsx)(T.Z_, {
                noticeType: eu.kqX.PTT_NO_KEYBIND_WARNING,
                onClick: function () {
                    (0, em.openUserSettings)(ep.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING);
                },
                children: V.intl.string(V.t["UgQN+9"]),
            }),
        ],
    });
}
if (221552 == n.j) var ne = n(189213);
if (221552 == n.j) var nt = n(150934);
function nn(e) {
    let [t, n] = l.useState(!1);
    return (0, i.jsx)(ne.a, {
        size: "md",
        title: V.intl.string(V.t["zQ1+Jw"]),
        subtitle: V.intl.string(V.t.K1gWXn),
        actions: [
            {
                text: V.intl.string(V.t.BddRzS),
                onClick: () => {
                    (t && S.A.setSilenceWarning(!1), e.onClose());
                },
                variant: "primary",
            },
        ],
        actionBarInput: (0, i.jsx)(nt.S, {
            checked: t,
            onChange: (e) => n(e),
            label: V.intl.string(V.t.XAiAgD),
            labelType: "secondary",
        }),
        ...e,
    });
}
var ni = n(25578),
    nl = n(763827),
    nr = n(67480),
    ns = n(177141),
    na = n(723702),
    nE = n(325278),
    no = n(831502),
    nc = n(731854);
let n_ = new K.A("Notice");
function nu(e) {
    let { error: t, allowClick: n = !1 } = e,
        l = (0, eV.B1)(t)?.errorCode,
        r = V.intl.formatToPlainString(V.t.ejOT95, { errorCode: l }),
        s = (0, i.jsx)(u.E, {
            variant: "text-sm/bold",
            color: "currentColor",
            tag: "span",
            className: eh.fU,
            selectable: !0,
            children: r,
        });
    return n
        ? (0, i.jsx)(A.D, {
              tag: "span",
              className: eh.wz,
              onClick: () => open(eN.A.getArticleURL(eu.MVz.AV_ERROR_CODES)),
              children: s,
          })
        : s;
}
function nA(e) {
    let { noticeType: t } = e;
    return (0, i.jsxs)(T.$T, {
        color: T.Hv.DANGER,
        children: [
            (0, i.jsx)(T.PM, {
                noticeType: t,
                onClick: () => {
                    nR();
                },
            }),
            V.intl.string(V.t.o3zuYz),
            (0, i.jsx)(nu, { error: eV.iy.NO_INPUT_DEVICES }),
            (0, i.jsx)(T.eC, {
                href: eN.A.getArticleURL(eu.MVz.NO_INPUT_DETECTED),
                noticeType: t,
                children: V.intl.string(V.t.RYKKox),
            }),
        ],
    });
}
function nT(e) {
    let { noticeType: t } = e;
    return (0, i.jsxs)(T.$T, {
        color: T.Hv.DANGER,
        children: [
            (0, i.jsx)(T.PM, {
                noticeType: t,
                onClick: () => {
                    nR();
                },
            }),
            V.intl.string(V.t.Up0ApK),
            (0, i.jsx)(nu, { error: eV.iy.VIDEO_BACKGROUND_UNAVAILABLE }),
            (0, i.jsx)(T.zr, {
                onClick: () => (0, em.openUserSettings)(ep.X.CAMERA_CATEGORY),
                children: V.intl.string(V.t.kRwxfi),
            }),
        ],
    });
}
function nI(e) {
    return (0, na.isWindows)() && o().satisfies(y.A?.os.release, nE.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function nd(e) {
    let t,
        n,
        { noticeType: l } = e,
        r = (0, th.x5)(nc.oh.AUDIO_INPUT),
        s = r?.guid ?? "",
        { inputDeviceOSMuted: a, inputDeviceOSVolume: E } = (0, c.cf)([ni.Ay], () => ({
            inputDeviceOSMuted: ni.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: ni.Ay.getInputDeviceOSVolume(),
        })),
        o = !1;
    return (
        !0 === a
            ? ((t = V.intl.string(V.t.ppW3ri)),
              (n = (0, i.jsx)(T.eC, { href: nI(s), noticeType: l, children: V.intl.string(V.t.QghSIq) })))
            : 0 === E
              ? ((t = V.intl.string(V.t.j4gGA4)),
                (n = (0, i.jsx)(T.eC, { href: nI(s), noticeType: l, children: V.intl.string(V.t.QghSIq) })))
              : ni.Ay.supports(nc.O5.LOOPBACK)
                ? ((t = V.intl.string(V.t.dNAJ18)),
                  (o = !0),
                  (n = (0, i.jsx)(T.zr, {
                      onClick: () => {
                          (0, em.openUserSettings)(ep.X.VOICE_AND_VIDEO_PANEL);
                      },
                      children: V.intl.string(V.t.I6YlB4),
                  })))
                : ((t = V.intl.string(V.t.nCO9bI)),
                  (n = (0, i.jsx)(T.eC, {
                      href: eN.A.getArticleURL(eu.MVz.NO_INPUT_DETECTED),
                      noticeType: l,
                      children: V.intl.string(V.t.RYKKox),
                  }))),
        (0, i.jsxs)(T.$T, {
            color: T.Hv.DANGER,
            children: [
                (0, i.jsx)(T.PM, {
                    noticeType: l,
                    onClick: () => {
                        (nR(), (0, N.openModal)((e) => (0, i.jsx)(nn, { ...e })));
                    },
                }),
                t,
                (0, i.jsx)(nu, { allowClick: o, error: eV.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function nN() {
    return (0, i.jsxs)("div", {
        className: eh.t8,
        children: [
            (0, i.jsx)(H, { className: eh.KS }),
            (0, i.jsx)(T.PM, { className: eh.KS, onClick: h.cL, noticeType: eu.kqX.APPLICATION_TEST_MODE }),
        ],
    });
}
function nR(e) {
    p.A.dismiss(null != e ? { untilAtLeast: s()(e) } : void 0);
}
let nO =
    221552 == n.j
        ? l.memo(function () {
              let e = (0, c.bG)([el.default], () => el.default.getCurrentUser()),
                  t = (0, c.bG)([eZ.A], () => eZ.A.getGuildId()),
                  r = (0, c.bG)([ns.Ay], () => ns.Ay.getNotice()),
                  { analyticsLocations: s } = (0, G.Ay)(),
                  E = (0, k.Ay)(),
                  o = (0, ts.H)(t),
                  u = (0, tq.V)();
              if (
                  (l.useEffect(() => {
                      if (r?.type != null) {
                          let e;
                          if (
                              null == u &&
                              (r.type === eu.kqX.PREMIUM_TIER_2_TRIAL_ENDING ||
                                  r.type === eu.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
                          )
                              return;
                          let n = {};
                          (null != t && (n.guild_id = t),
                              u?.trialId != null && (n.trial_id = u.trialId),
                              (e = { notice_type: r.type, ...n }),
                              er.default.track(eu.HAw.APP_NOTICE_VIEWED, e));
                      }
                  }, [r?.type, t, u]),
                  l.useEffect(() => {
                      if (null != r && r.type === eu.kqX.SURVEY && null != r.metadata) {
                          let { metadata: e } = r,
                              t = ew.A.getUserExperimentDescriptor(e.id);
                          (null != t && (0, eH.LQ)(e.id, t),
                              (async function () {
                                  null != r && r.metadata?.id != null && (await (0, g.oX)(r.metadata?.id));
                              })());
                      }
                  }, [r]),
                  null == r)
              )
                  return null;
              let A = null != r.type ? ns.Re[r.type] : null,
                  D = null != r.type ? ns.rV[r.type] : null,
                  p = null != r.type ? ns.f7[r.type] : null,
                  h = ns.pe[r.type];
              if (null != A) return (0, i.jsx)(eF.$, { dismissibleContent: A, noticeType: r.type });
              if (null != D) return (0, i.jsx)(ej, { dismissibleContent: D });
              if (null != p) return (0, i.jsx)(eb, { dismissibleContent: p });
              if (null != h) return (0, i.jsx)(ek, { dismissibleContent: h, noticeType: r.type });
              let j = r.metadata?.premiumType;
              switch (r.type) {
                  case eu.kqX.PTT_NO_KEYBIND_WARNING:
                      return (0, i.jsx)(t4, {});
                  case eu.kqX.LURKING_GUILD:
                      return (0, i.jsx)(tg, {});
                  case eu.kqX.PENDING_MEMBER:
                      return (0, i.jsx)(tO, {});
                  case eu.kqX.INVITED_TO_SPEAK:
                      return (0, i.jsx)(t3, {});
                  case eu.kqX.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: q } = r.metadata;
                      return (0, i.jsx)(e3, { onDismiss: () => nR(q) });
                  case eu.kqX.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: X } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nR(X), noticeType: r.type }),
                              V.intl.format(V.t["08KQ1P"], {
                                  helpCenterLink: eN.A.getArticleURL(eu.MVz.WIN32_DEPRECATE),
                              }),
                          ],
                      });
                  case eu.kqX.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: B } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nR(B), noticeType: r.type }),
                              V.intl.format(V.t["8Je+dX"], {
                                  helpCenterLink: eN.A.getArticleURL(eu.MVz.WIN7_8_DEPRECATE),
                              }),
                          ],
                      });
                  case eu.kqX.WIN_COMPAT_MODE_MESSAGE:
                      let { dismissUntil: b } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nR(b), noticeType: r.type }),
                              V.intl.string(V.t["9DJgOg"]),
                          ],
                      });
                  case eu.kqX.MACOS_DEPRECATED_MESSAGE:
                      let { dismissUntil: H } = r.metadata,
                          K = parseInt(y.A?.os.release.split(".")[0]),
                          W = eu.MVz.MACOS_19_DEPRECATE;
                      return (
                          21 === K ? (W = eu.MVz.MACOS_21_DEPRECATE) : 20 === K && (W = eu.MVz.MACOS_20_DEPRECATE),
                          (0, i.jsxs)(T.$T, {
                              color: T.Hv.WARNING,
                              children: [
                                  (0, i.jsx)(T.PM, { onClick: () => nR(H), noticeType: r.type }),
                                  V.intl.format(V.t.q8VPLo, { helpCenterLink: eN.A.getArticleURL(W) }),
                              ],
                          })
                      );
                  case eu.kqX.E2EE_UPDATE_REQUIRED:
                      let { dismissUntil: z } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nR(z), noticeType: r.type }),
                              V.intl.format(na.isPlatformEmbedded ? V.t.J232TI : V.t.vceuiL, {
                                  helpCenterLink: eN.A.getArticleURL(eu.MVz.END_TO_END_ENCRYPTION),
                              }),
                          ],
                      });
                  case eu.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nR(), noticeType: r.type }),
                              V.intl.string(V.t.iW0fcQ),
                              (0, i.jsx)(T.eC, {
                                  href: eN.A.getArticleURL(eu.MVz.WINDOWS_MEDIA_PACK),
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: V.intl.string(V.t.LQG5j6),
                              }),
                          ],
                      });
                  case eu.kqX.GENERIC:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nR(), noticeType: r.type }),
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
                  case eu.kqX.LAUNCH_GAME_FAILURE:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nR(), noticeType: r.type }),
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
                  case eu.kqX.VOICE_DISABLED:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => {
                                      (M.clearRemoteDisconnectVoiceChannelId(), nR());
                                  },
                                  noticeType: r.type,
                              }),
                              V.intl.string(V.t.bOQ3jV),
                              (0, i.jsx)(T.Z_, {
                                  onClick: () => {
                                      let e = nl.A.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != t$.A.getChannel(e) && m.default.selectVoiceChannel(e);
                                  },
                                  noticeType: r.type,
                                  children: V.intl.string(V.t.vD60Pv),
                              }),
                          ],
                      });
                  case eu.kqX.VOICE_CONNECTED_LAST_SESSION:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => {
                                      (M.clearLastSessionVoiceChannelId(), nR());
                                  },
                                  noticeType: r.type,
                              }),
                              V.intl.string(V.t.jY2lUA),
                              (0, i.jsx)(T.Z_, {
                                  onClick: () => {
                                      let e = nl.A.getLastSessionVoiceChannelId();
                                      null != e && null != t$.A.getChannel(e) && m.default.selectVoiceChannel(e);
                                  },
                                  noticeType: r.type,
                                  children: V.intl.string(V.t.vD60Pv),
                              }),
                          ],
                      });
                  case eu.kqX.SPOTIFY_AUTO_PAUSED:
                      let $ = L.A.get(eu.fg2.SPOTIFY);
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nR(), noticeType: r.type }),
                              (0, i.jsx)("img", {
                                  alt: "",
                                  className: eh.tV,
                                  src: (0, _.q)(E) ? $.icon.darkSVG : $.icon.whiteSVG,
                              }),
                              V.intl.string(V.t.D8Cp76),
                              (0, i.jsx)(T.Z_, {
                                  onClick: () => (0, em.openUserSettings)(ep.X.VOICE_AND_VIDEO_PANEL),
                                  noticeType: r.type,
                                  children: V.intl.string(V.t.NiTd0e),
                              }),
                              (0, i.jsx)(I.Anchor, {
                                  className: eh.uD,
                                  href: eN.A.getArticleURL(eu.MVz.SPOTIFY_AUTO_PAUSED),
                                  target: "_blank",
                                  children: V.intl.string(V.t.CiqAIU),
                              }),
                          ],
                      });
                  case eu.kqX.UNCLAIMED_ACCOUNT:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DEFAULT,
                          children: [
                              V.intl.string(V.t["f+Zaol"]),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: r.type,
                                  onClick: () => (o && null != t ? (0, tr.Ze)(t) : w.R()),
                                  children: V.intl.string(V.t.fiNVin),
                              }),
                          ],
                      });
                  case eu.kqX.UNVERIFIED_ACCOUNT:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DEFAULT,
                          children: [
                              V.intl.string(V.t["3sWbf3"]),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: r.type,
                                  onClick: () => {
                                      (C.A.verifyResend(),
                                          O.A.show({
                                              title: V.intl.string(V.t.LykQYk),
                                              body: V.intl.format(V.t.azKEPy, { email: e?.email }),
                                              cancelText: V.intl.string(V.t.Vm8akB),
                                              onCancel: w.R,
                                          }));
                                  },
                                  children: V.intl.string(V.t.WnX4J2),
                              }),
                          ],
                      });
                  case eu.kqX.SCHEDULED_MAINTENANCE:
                      if (null == r.metadata) return null;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => f.A.ackScheduledMaintenance(), noticeType: r.type }),
                              V.intl.format(V.t["yb96S+"], r.metadata),
                              (0, i.jsx)(T.eC, {
                                  href: `${eu.qF7.STATUS}/incidents/${r.metadata.id}`,
                                  noticeType: r.type,
                                  children: V.intl.string(V.t.hvVgAZ),
                              }),
                          ],
                      });
                  case eu.kqX.NO_INPUT_DETECTED:
                      return (0, i.jsx)(nd, { noticeType: r.type });
                  case eu.kqX.NO_INPUT_DEVICES_DETECTED:
                      return (0, i.jsx)(nA, { noticeType: r.type });
                  case eu.kqX.VIDEO_BACKGROUND_UNAVAILABLE:
                      return (0, i.jsx)(nT, { noticeType: r.type });
                  case eu.kqX.HARDWARE_MUTE:
                      if (null != r.metadata) {
                          let { vendor: e, model: t } = r.metadata;
                          return (0, i.jsxs)(T.$T, {
                              color: T.Hv.DANGER,
                              children: [
                                  V.intl.format(V.t.qoDex7, { vendorName: e.name, modelName: t.name }),
                                  (0, i.jsx)(T.PM, {
                                      noticeType: r.type,
                                      onClick: () => {
                                          (S.A.setEnableHardwareMuteNotice(!1), nR());
                                      },
                                  }),
                                  (0, i.jsx)(T.eC, {
                                      href: t.url,
                                      target: "_blank",
                                      rel: "noreferrer noopener",
                                      noticeType: r.type,
                                      children: V.intl.string(V.t["Yl/Riu"]),
                                  }),
                              ],
                          });
                      }
                      return null;
                  case eu.kqX.STREAMER_MODE:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.STREAMER_MODE,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nR(), noticeType: eu.kqX.STREAMER_MODE }),
                              V.intl.string(V.t.iEgBXp),
                              (0, i.jsx)(T.Z_, {
                                  onClick: () => U.A.setEnabled(!1),
                                  noticeType: eu.kqX.STREAMER_MODE,
                                  children: V.intl.string(V.t.R9GHya),
                              }),
                          ],
                      });
                  case eu.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == r.metadata) return null;
                      let { skuId: Q, applicationId: Z } = r.metadata,
                          J = nr.A.get(Q),
                          ee = v.A.getApplication(Z);
                      if (null == J || null == ee) return null;
                      let en = { page: eu.liQ.IN_APP };
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => P(J.id),
                                  noticeType: eu.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                              }),
                              (0, i.jsx)(d.t, { size: "md", color: "currentColor", className: eh.PC }),
                              V.intl.format(V.t["g3MU/+"], { applicationName: ee.name, skuName: J.name }),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: eu.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: async () => {
                                      try {
                                          let { openIAPPurchaseModal: e } = await Promise.all([
                                              n.e("679157"),
                                              n.e("1955"),
                                              n.e("341161"),
                                              n.e("410526"),
                                              n.e("202985"),
                                              n.e("603619"),
                                              n.e("661630"),
                                              n.e("470126"),
                                              n.e("162775"),
                                              n.e("128804"),
                                              n.e("60882"),
                                              n.e("71151"),
                                              n.e("227853"),
                                              n.e("286615"),
                                              n.e("70866"),
                                              n.e("311541"),
                                              n.e("472847"),
                                              n.e("870088"),
                                              n.e("989649"),
                                              n.e("925420"),
                                              n.e("586662"),
                                              n.e("758053"),
                                              n.e("247471"),
                                              n.e("889002"),
                                              n.e("709976"),
                                              n.e("750955"),
                                              n.e("953343"),
                                              n.e("763945"),
                                              n.e("261204"),
                                              n.e("686731"),
                                              n.e("807432"),
                                              n.e("873532"),
                                              n.e("279774"),
                                              n.e("590088"),
                                              n.e("125298"),
                                              n.e("295570"),
                                              n.e("728824"),
                                              n.e("71169"),
                                              n.e("906470"),
                                              n.e("736663"),
                                              n.e("419121"),
                                              n.e("489020"),
                                              n.e("919789"),
                                              n.e("669130"),
                                              n.e("802890"),
                                              n.e("82937"),
                                              n.e("987221"),
                                              n.e("157064"),
                                              n.e("156957"),
                                              n.e("918786"),
                                              n.e("701335"),
                                              n.e("257935"),
                                              n.e("724086"),
                                              n.e("358937"),
                                              n.e("448738"),
                                              n.e("680431"),
                                              n.e("338332"),
                                              n.e("894292"),
                                              n.e("153302"),
                                              n.e("88683"),
                                              n.e("363874"),
                                              n.e("923981"),
                                              n.e("750370"),
                                              n.e("612162"),
                                              n.e("466592"),
                                              n.e("73946"),
                                              n.e("282050"),
                                              n.e("436101"),
                                              n.e("976888"),
                                              n.e("387970"),
                                              n.e("847445"),
                                              n.e("547510"),
                                              n.e("966366"),
                                              n.e("983513"),
                                              n.e("76928"),
                                              n.e("355502"),
                                              n.e("528311"),
                                              n.e("348567"),
                                              n.e("452075"),
                                              n.e("900277"),
                                              n.e("127962"),
                                              n.e("76428"),
                                              n.e("77473"),
                                              n.e("863232"),
                                              n.e("25279"),
                                              n.e("364827"),
                                              n.e("517888"),
                                              n.e("811133"),
                                              n.e("959880"),
                                              n.e("174016"),
                                              n.e("907167"),
                                              n.e("910471"),
                                              n.e("11301"),
                                              n.e("952372"),
                                              n.e("784569"),
                                              n.e("861060"),
                                              n.e("77333"),
                                              n.e("56366"),
                                              n.e("639161"),
                                              n.e("477175"),
                                              n.e("960235"),
                                              n.e("402368"),
                                              n.e("190779"),
                                              n.e("910486"),
                                              n.e("221856"),
                                              n.e("678157"),
                                              n.e("646271"),
                                              n.e("325675"),
                                              n.e("996481"),
                                              n.e("331988"),
                                              n.e("40291"),
                                              n.e("733115"),
                                              n.e("397270"),
                                              n.e("373122"),
                                              n.e("217951"),
                                              n.e("793716"),
                                              n.e("293159"),
                                              n.e("186212"),
                                              n.e("755936"),
                                              n.e("147662"),
                                              n.e("209338"),
                                              n.e("749894"),
                                              n.e("927875"),
                                              n.e("833703"),
                                              n.e("544571"),
                                              n.e("55252"),
                                              n.e("692990"),
                                              n.e("362931"),
                                              n.e("745959"),
                                              n.e("858529"),
                                              n.e("481987"),
                                              n.e("595653"),
                                              n.e("958038"),
                                              n.e("532039"),
                                              n.e("719466"),
                                              n.e("99799"),
                                              n.e("576909"),
                                              n.e("27355"),
                                              n.e("406174"),
                                              n.e("715555"),
                                              n.e("146070"),
                                              n.e("523276"),
                                              n.e("812042"),
                                              n.e("102328"),
                                              n.e("729963"),
                                              n.e("830938"),
                                              n.e("895785"),
                                              n.e("665455"),
                                              n.e("73536"),
                                              n.e("538513"),
                                              n.e("147864"),
                                              n.e("370112"),
                                              n.e("241176"),
                                              n.e("50097"),
                                              n.e("263791"),
                                              n.e("978436"),
                                              n.e("791824"),
                                              n.e("562075"),
                                          ]).then(n.bind(n, 4630));
                                          (await e({
                                              applicationId: ee.id,
                                              skuId: J.id,
                                              openPremiumPaymentModal: () => {
                                                  (0, et.A)({
                                                      initialPlanId: null,
                                                      subscriptionTier: ec.pe.TIER_2,
                                                      analyticsLocations: s,
                                                      analyticsObject: en,
                                                  });
                                              },
                                              analyticsLocations: s,
                                              analyticsLocationObject: en,
                                              context: __OVERLAY__ ? eu.BRT.OVERLAY : eu.BRT.APP,
                                          }),
                                              P(J.id));
                                      } catch (e) {
                                          null != e && n_.error("Failed to open off-platform premium perk modal", e);
                                      }
                                  },
                                  children: V.intl.string(V.t.KEwPYx),
                              }),
                          ],
                      });
                  case eu.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == r.metadata) return null;
                      let { skuId: e, applicationId: t } = r.metadata,
                          n = nr.A.get(e),
                          l = v.A.getApplication(t);
                      if (null == n || null == l) return null;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => nR(),
                                  noticeType: eu.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                              }),
                              (0, i.jsx)(d.t, { size: "md", color: "currentColor", className: eh.PC }),
                              V.intl.format(V.t.LquIKC, { applicationName: l.name, skuName: n.name }),
                              (0, i.jsx)(T.zr, {
                                  children: (0, i.jsx)(a.N_, {
                                      onClick: () => nR(),
                                      to: {
                                          pathname: eu.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 },
                                      },
                                      children: V.intl.string(V.t.hvVgAZ),
                                  }),
                              }),
                          ],
                      });
                  }
                  case eu.kqX.SURVEY: {
                      let e = r.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: l, url: s, embedded: a, id: E } = e;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.CUSTOM,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: eu.kqX.SURVEY,
                                  onClick: () => {
                                      (0, g.pX)(t, !0);
                                  },
                              }),
                              n,
                              (0, i.jsx)(T.Z_, {
                                  noticeType: eu.kqX.SURVEY,
                                  onClick: () => {
                                      (a ? (0, tV.K)(E) : window.open(s, "_blank"), (0, g.pX)(t, !1));
                                  },
                                  children: l,
                              }),
                          ],
                      });
                  }
                  case eu.kqX.CORRUPT_INSTALLATION:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              V.intl.string(V.t["ugxmk/"]),
                              (0, i.jsx)(T.eC, {
                                  href: eN.A.getArticleURL(eu.MVz.CORRUPT_INSTALLATION),
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: V.intl.string(V.t["6ik4Xk"]),
                              }),
                          ],
                      });
                  case eu.kqX.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nR(), noticeType: eu.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                              V.intl.string(V.t.wVjKGi),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: eu.kqX.VIDEO_UNSUPPORTED_BROWSER,
                                  onClick: () => {
                                      (0, N.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("915082"),
                                              n.e("944602"),
                                              n.e("825280"),
                                          ]).then(n.bind(n, 987482));
                                          return (t) => (0, i.jsx)(e, { source: "Video unsupported browser", ...t });
                                      });
                                  },
                                  children: V.intl.string(V.t["1WjMbC"]),
                              }),
                          ],
                      });
                  case eu.kqX.DISPATCH_ERROR:
                      if (null == r.metadata) return null;
                      let { error: ei } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              (0, i.jsx)(T.PM, { onClick: () => nR(), noticeType: eu.kqX.DISPATCH_ERROR }),
                              ei?.displayMessage,
                              (0, i.jsx)(T.Z_, {
                                  noticeType: eu.kqX.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, N.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([n.e("640380"), n.e("588014")]).then(
                                              n.bind(n, 627261),
                                          );
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                  children: V.intl.string(V.t.hvVgAZ),
                              }),
                          ],
                      });
                  case eu.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == r.metadata) return null;
                      let { progress: es, total: ea, name: eE } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => nR(),
                                  noticeType: eu.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                              }),
                              (0, i.jsxs)(Y.A, {
                                  justify: Y.A.Justify.CENTER,
                                  children: [
                                      null != eE
                                          ? V.intl.formatToPlainString(V.t["pHj+z4"], {
                                                name: `${eE}`,
                                                progress: es,
                                                total: ea,
                                            })
                                          : V.intl.formatToPlainString(V.t["lHZn+A"], { progress: es, total: ea }),
                                      (0, i.jsx)(R.y, { type: R.y.Type.PULSING_ELLIPSIS, className: eh.gO }),
                                  ],
                              }),
                          ],
                      });
                  case eu.kqX.APPLICATION_TEST_MODE:
                      if (null == r.metadata) return null;
                      if (null != F.A.testModeEmbeddedApplicationId)
                          return (0, i.jsx)(T.$T, {
                              color: T.Hv.WARNING,
                              className: eh.i9,
                              children: (0, i.jsxs)(Y.A, {
                                  justify: Y.A.Justify.CENTER,
                                  align: Y.A.Align.CENTER,
                                  children: [
                                      (0, i.jsx)("div", {
                                          children: V.intl.format(V.t["1qxVe4"], {
                                              applicationName: r.metadata.applicationName,
                                          }),
                                      }),
                                      (0, i.jsx)(nN, {}),
                                  ],
                              }),
                          });
                      return (0, i.jsx)(T.$T, {
                          color: T.Hv.WARNING,
                          className: eh.i9,
                          children: (0, i.jsxs)(Y.A, {
                              justify: Y.A.Justify.CENTER,
                              align: Y.A.Align.CENTER,
                              children: [
                                  (0, i.jsx)("div", {
                                      children: V.intl.format(V.t.Fv5HrE, {
                                          applicationName: r.metadata.applicationName,
                                      }),
                                  }),
                                  (0, i.jsx)(nN, {}),
                              ],
                          }),
                      });
                  case eu.kqX.VIEWING_ROLES:
                      return (0, i.jsx)(tp.A, {});
                  case eu.kqX.PREMIUM_UNCANCEL:
                      return (0, i.jsxs)(T.$T, {
                          color:
                              j === ec.PremiumTypes.TIER_1
                                  ? T.Hv.PREMIUM_TIER_1
                                  : j === ec.PremiumTypes.TIER_0
                                    ? T.Hv.PREMIUM_TIER_0
                                    : T.Hv.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: eu.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      nR(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              (0, i.jsx)(d.t, { size: "md", color: "currentColor", className: eh.PC }),
                              j === ec.PremiumTypes.TIER_1
                                  ? V.intl.formatToPlainString(V.t.fXv4wm, { daysLeft: r.metadata.daysLeft })
                                  : j === ec.PremiumTypes.TIER_0
                                    ? V.intl.formatToPlainString(V.t.ZOHZMr, { daysLeft: r.metadata.daysLeft })
                                    : V.intl.formatToPlainString(V.t.outyHh, { daysLeft: r.metadata.daysLeft }),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: eu.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      (nR(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, N.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("586662"),
                                                  n.e("1955"),
                                                  n.e("341161"),
                                                  n.e("410526"),
                                                  n.e("661630"),
                                                  n.e("202985"),
                                                  n.e("603619"),
                                                  n.e("966366"),
                                                  n.e("338332"),
                                                  n.e("894292"),
                                                  n.e("153302"),
                                                  n.e("758053"),
                                                  n.e("88683"),
                                                  n.e("983513"),
                                                  n.e("419121"),
                                                  n.e("162775"),
                                                  n.e("60882"),
                                                  n.e("489020"),
                                                  n.e("919789"),
                                                  n.e("669130"),
                                                  n.e("70866"),
                                                  n.e("802890"),
                                                  n.e("82937"),
                                                  n.e("679157"),
                                                  n.e("987221"),
                                                  n.e("125298"),
                                                  n.e("612162"),
                                                  n.e("76428"),
                                                  n.e("77473"),
                                                  n.e("25279"),
                                                  n.e("517888"),
                                                  n.e("811133"),
                                                  n.e("959880"),
                                                  n.e("174016"),
                                                  n.e("910471"),
                                                  n.e("11301"),
                                                  n.e("952372"),
                                                  n.e("77333"),
                                                  n.e("56366"),
                                                  n.e("639161"),
                                                  n.e("402368"),
                                                  n.e("190779"),
                                                  n.e("221856"),
                                                  n.e("325675"),
                                                  n.e("996481"),
                                                  n.e("793716"),
                                                  n.e("209338"),
                                                  n.e("523276"),
                                                  n.e("812042"),
                                                  n.e("102328"),
                                                  n.e("830938"),
                                                  n.e("895785"),
                                                  n.e("665455"),
                                                  n.e("73536"),
                                                  n.e("114794"),
                                              ]).then(n.bind(n, 174705));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      daysLeft: r.metadata.daysLeft,
                                                      premiumType: j,
                                                      analyticsSource: "Nag Bar",
                                                      premiumSubscription: r.metadata.premiumSubscription,
                                                  });
                                          }));
                                  },
                                  children:
                                      j === ec.PremiumTypes.TIER_1
                                          ? V.intl.string(V.t.BkbUPM)
                                          : j === ec.PremiumTypes.TIER_0
                                            ? V.intl.string(V.t.Px978X)
                                            : V.intl.string(V.t.LW5tCE),
                              }),
                          ],
                      });
                  case eu.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: eo, dismissUntil: e_ } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: r.type,
                                  onClick: () => {
                                      nR(e_);
                                  },
                              }),
                              V.intl.format(V.t.zxU0Kp, { daysPastDue: eo }),
                              (0, i.jsx)(tF, {
                                  noticeType: eu.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  analyticsLocation: x.A.PAST_DUE_ONE_TIME_PAYMENT_NOTICE,
                                  onFallback: () => {
                                      (nR(e_), (0, em.openUserSettings)(ep.X.SUBSCRIPTIONS_PANEL));
                                  },
                                  children: V.intl.string(V.t.q8rxeS),
                              }),
                          ],
                      });
                  case eu.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: eu.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      nR(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              V.intl.string(V.t.LlZaoX),
                              (0, i.jsx)(tF, {
                                  noticeType: eu.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  analyticsLocation: x.A.PAST_DUE_INVALID_PAYMENT_NOTICE,
                                  onFallback: () => {
                                      (nR(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, em.openUserSettings)(ep.X.SUBSCRIPTIONS_PANEL));
                                  },
                                  children: V.intl.string(V.t["Zpd+Yq"]),
                              }),
                          ],
                      });
                  case eu.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: eu.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      nR(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              V.intl.string(V.t["30YfCr"]),
                              (0, i.jsx)(tF, {
                                  noticeType: eu.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  analyticsLocation: x.A.PAST_DUE_MISSING_PAYMENT_NOTICE,
                                  onFallback: () => {
                                      (nR(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, em.openUserSettings)(ep.X.SUBSCRIPTIONS_PANEL));
                                  },
                                  children: V.intl.string(V.t.U5pKWA),
                              }),
                          ],
                      });
                  case eu.kqX.PREMIUM_MISSING_PAYMENT:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: eu.kqX.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      nR(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              j === ec.PremiumTypes.TIER_1
                                  ? V.intl.formatToPlainString(V.t.b6QUvf, { daysLeft: r.metadata.daysLeft })
                                  : j === ec.PremiumTypes.TIER_0
                                    ? V.intl.formatToPlainString(V.t["tURZ/M"], { daysLeft: r.metadata.daysLeft })
                                    : V.intl.formatToPlainString(V.t.AyC74I, { daysLeft: r.metadata.daysLeft }),
                              (0, i.jsx)(T.Z_, {
                                  noticeType: eu.kqX.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      (nR(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, em.openUserSettings)(ep.X.SUBSCRIPTIONS_PANEL));
                                  },
                                  children:
                                      j === ec.PremiumTypes.TIER_1
                                          ? V.intl.string(V.t.lboF5O)
                                          : j === ec.PremiumTypes.TIER_0
                                            ? V.intl.string(V.t["4UPwOq"])
                                            : V.intl.string(V.t["P/VvGb"]),
                              }),
                          ],
                      });
                  case eu.kqX.BACK_TO_PREVIOUS_SCREEN:
                      return (0, i.jsx)(tD, {
                          buttonText: r.buttonText ?? V.intl.string(V.t["/g10LC"]),
                          onGoBack: r.callback,
                          onDismiss: () => nR(),
                          showCloseButton: !0,
                      });
                  case eu.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
                      return (0, i.jsx)(tl, { guildId: t, analyticsLocations: s });
                  case eu.kqX.PARENTAL_CONSENT_WARNING:
                      return (0, i.jsx)(tj, { daysRemaining: r.metadata?.daysRemaining ?? null });
                  case eu.kqX.QUARANTINED:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              V.intl.string(V.t.DVFJYf),
                              (0, i.jsx)(T.eC, {
                                  href: no.q,
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: V.intl.string(V.t.kvHdFN),
                              }),
                              (0, i.jsx)(I.Anchor, {
                                  href: eN.A.getArticleURL(eu.MVz.QUARANTINE),
                                  target: "_blank",
                                  className: eh.yw,
                                  children: V.intl.string(V.t.hvVgAZ),
                              }),
                          ],
                      });
                  case eu.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: eA, decisionId: eT } = r.metadata;
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.WARNING,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: eu.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      (null != t && (0, e7.wu)(t), nR(eA));
                                  },
                              }),
                              V.intl.string(V.t.B8ruyY),
                              (0, i.jsx)(T.zr, {
                                  onClick: () => {
                                      null != t &&
                                          (0, e7.W5)(t, eT, () => {
                                              (nR(eA), (0, e7.wu)(t));
                                          });
                                  },
                                  children: V.intl.string(V.t.oX14El),
                              }),
                              null != t
                                  ? (0, i.jsx)(T.zr, {
                                        onClick: () =>
                                            tP.default.open(
                                                t,
                                                eu.BEX.GUILD_AUTOMOD,
                                                void 0,
                                                eu.nd0.AUTOMOD_MENTION_SPAM,
                                            ),
                                        children: V.intl.string(V.t["1R7QIx"]),
                                    })
                                  : null,
                          ],
                      });
                  case eu.kqX.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.DANGER,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  noticeType: eu.kqX.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      r.metadata?.streamKey != null && (0, tH.lk)(r.metadata.streamKey);
                                  },
                              }),
                              V.intl.string(V.t.rOx44m),
                          ],
                      });
                  case eu.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsxs)(T.$T, {
                          color: T.Hv.BRAND,
                          children: [
                              (0, i.jsx)(T.PM, {
                                  onClick: () => {
                                      nR(r.metadata?.dismissUntil);
                                  },
                                  noticeType: eu.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                              }),
                              V.intl.string(V.t["0klLS7"]),
                              (0, i.jsx)(T.Z_, {
                                  onClick: () => {
                                      ((0, N.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("312513"),
                                              n.e("36395"),
                                              n.e("155925"),
                                              n.e("218413"),
                                              n.e("137381"),
                                              n.e("326484"),
                                              n.e("109163"),
                                          ]).then(n.bind(n, 307750));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                          nR(r.metadata?.dismissUntil));
                                  },
                                  noticeType: eu.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: V.intl.string(V.t.e4y2VM),
                              }),
                          ],
                      });
                  case eu.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsx)(tY, {});
                  case eu.kqX.PREMIUM_MARKETING_NAGBAR:
                      return (0, i.jsx)(tv.A, {});
                  case eu.kqX.SYSTEM_SERVICE_WARNING:
                      return (0, i.jsx)(t8, {});
                  default:
                      return null;
              }
          })
        : null;
function nS() {
    let { analyticsLocations: e } = (0, G.Ay)(x.A.NOTICE);
    return (0, i.jsx)(G.f5, { value: e, children: (0, i.jsx)(nO, {}) });
}
