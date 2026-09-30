n.d(t, { w: () => nR, A: () => nO });
var i = n(477900),
    l = n(582128),
    r = n(536637),
    s = n.n(r);
if (221552 == n.j) var a = n(561028);
var o = n(299855),
    c = n.n(o),
    E = n(17928);
if (221552 == n.j) var u = n(462887);
if (221552 == n.j) var d = n(834730);
if (221552 == n.j) var _ = n(939249);
if (221552 == n.j) var A = n(417098);
if (221552 == n.j) var T = n(28863);
if (221552 == n.j) var I = n(403581);
if (221552 == n.j) var N = n(192308);
if (221552 == n.j) var R = n(289873);
var C = n(157559),
    O = n(827343),
    m = n(830215),
    S = n(228366);
function f(e) {
    S.h.dispatch({ type: "DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS", skuId: e });
}
var p = n(912851);
let g =
    221552 == n.j
        ? {
              clearRemoteDisconnectVoiceChannelId() {
                  S.h.dispatch({ type: "CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID" });
              },
              clearLastSessionVoiceChannelId() {
                  S.h.dispatch({ type: "CLEAR_LAST_SESSION_VOICE_CHANNEL_ID" });
              },
          }
        : null;
var D = n(730852),
    P = n(785796),
    h = n(55619),
    M = n(246605),
    U = n(271866),
    y = n(736653),
    L = n(77729),
    x = n(573648),
    k = n(793574),
    v = n(688810);
if (221552 == n.j) var j = n(866665);
if (221552 == n.j) var G = n(346411);
var b = n(587895),
    q = n(875444),
    B = n(793943),
    X = n(885386),
    w = n(147964),
    F = n(375708);
function H(e) {
    let { className: t } = e,
        { activePanel: n } = (0, B.fy)(),
        l = n === B.HP.APPLICATION_TEST_MODE_DEBUG;
    return (0, E.bG)([w.A, b.A], () => {
        let e = w.A.testModeApplicationId;
        if (!X.Q_.getSetting() || null == e) return !1;
        let t = b.A.getApplication(e);
        return null != t && (0, q.A)(t);
    })
        ? (0, i.jsx)(j.m, {
              position: "bottom",
              text: F.intl.string(F.t["9Isknj"]),
              ariaHidden: !0,
              children: (0, i.jsx)(_.D, {
                  tag: "div",
                  role: "button",
                  className: t,
                  "aria-label": F.intl.string(F.t["9Isknj"]),
                  onClick: () => {
                      l ? (0, B.Jp)() : (0, B.nf)(B.HP.APPLICATION_TEST_MODE_DEBUG);
                  },
                  children: (0, i.jsx)(G.WrenchIcon, { size: "xs", color: "currentColor" }),
              }),
          })
        : null;
}
var V = n(315982),
    Y = n(235986),
    K = n(626584),
    W = n(554146);
if (221552 == n.j) var Q = n(376357);
if (221552 == n.j) var Z = n(857250);
if (221552 == n.j) var z = n(97483);
var $ = n(803306),
    J = n(975807),
    ee = n(968309),
    et = n(75678),
    en = n(492462),
    ei = n(741231),
    el = n(287809),
    er = n(174459),
    es = n(920050),
    ea = n(635995),
    eo = n(789861),
    ec = n(220038),
    eE = n(202541),
    eu = n(92737),
    ed = n(652215),
    e_ = n(49999),
    eA = n(14429);
function eT(e) {
    let { markAsDismissed: t } = e,
        n = (0, E.bG)([el.default], () => el.default.getCurrentUser()),
        r = (0, ec.d6)(n),
        { analyticsLocations: s } = (0, v.Ay)(k.A.CALL_OF_DUTY_3PP_NAGBAR),
        a = l.useCallback(() => {
            (0, ei.A)(ed.BVt.NITRO_HOME, { search: (0, en.stringify)({ perk: es.CALL_OF_DUTY_3PP_CARD_ID }) });
        }, []),
        o = l.useCallback(() => {
            (er.default.track(ed.HAw.APP_NOTICE_CLOSED, { notice_type: ed.kqX.COD_3PP_NAGBAR }), t(e_.i.USER_DISMISS));
        }, [t]),
        c = l.useCallback(() => {
            (er.default.track(ed.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: ed.kqX.COD_3PP_NAGBAR }),
            t(e_.i.TAKE_ACTION),
            r === ec.F5.NITRO)
                ? a()
                : (0, et.A)({ subscriptionTier: eE.pe.TIER_2, analyticsLocations: s, onSubscriptionConfirmation: a });
        }, [s, t, a, r]);
    if (null == r) return null;
    let u = r === ec.F5.NITRO,
        d = F.intl.formatToPlainString(u ? eA.default["hworR+"] : eA.default["RuZS+B"], { validDates: (0, eo.a1)() }),
        _ = F.intl.string(u ? eA.default.niUDET : eA.default.mHRW3e);
    return (0, i.jsxs)(ea.T0, {
        onClick: o,
        children: [(0, i.jsx)(ea.In, { children: d }), (0, i.jsx)(ea.fY, { text: _, onClick: c })],
    });
}
var eI = n(745299),
    eN = n(975571),
    eR = n(713271),
    eC = n(256150),
    eO = n(50949),
    em = n(264865);
function eS(e) {
    let { markAsDismissed: t } = e,
        n = (0, E.bG)([el.default], () => el.default.getCurrentUser()),
        r = (0, eC.He)(n),
        { analyticsLocations: s } = (0, v.Ay)(k.A.YOUTUBE_3PP_NAGBAR),
        a = l.useCallback(() => {
            (er.default.track(ed.HAw.APP_NOTICE_CLOSED, { notice_type: ed.kqX.YOUTUBE_3P_NAGBAR }),
                t(e_.i.USER_DISMISS));
        }, [t]),
        o = l.useCallback(() => {
            (er.default.track(ed.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: ed.kqX.YOUTUBE_3P_NAGBAR }),
            t(e_.i.TAKE_ACTION),
            r === eC.rb.NITRO)
                ? (0, ei.A)(ed.BVt.NITRO_HOME, { search: (0, en.stringify)({ perk: es.YOUTUBE_3PP_CARD_ID }) })
                : ((0, ei.A)(ed.BVt.NITRO_HOME, { search: (0, en.stringify)({ [eu.x]: eR.N.YOUTUBE }) }), (0, eO.z)(s));
        }, [s, t, r]);
    if (null == r) return null;
    let c = r === eC.rb.NITRO;
    return (0, i.jsxs)(ea.T0, {
        onClick: a,
        children: [
            (0, i.jsx)(ea.In, {
                children: F.intl.format(em.default.Hgo1xT, {
                    helpCenterUrl: eN.A.getArticleURL(ed.MVz.YOUTUBE_PROMOTION),
                }),
            }),
            (0, i.jsx)(ea.fY, { text: F.intl.string(c ? F.t.pVBlCH : F.t["vKA/P1"]), onClick: o }),
        ],
    });
}
var ef = n(976860),
    ep = n(780964),
    eg = n(718446),
    eD = n(766075),
    eP = n(879945),
    eh = n(379848),
    eM = n(355097),
    eU = n(971656);
function ey(e) {
    let { dismissibleContent: t, noticeType: l } = e;
    return (0, i.jsx)(eh.Ay, {
        contentTypes: [t],
        groupName: e_.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: r } = e;
            switch (t) {
                case W.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(A.$T, {
                        color: A.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(A.PM, { onClick: () => r(e_.i.UNKNOWN), noticeType: l }),
                            F.intl.string(F.t["+xn1o5"]),
                            (0, i.jsx)("i", { className: eU.c9 }),
                            (0, i.jsx)("i", { className: eU.Vz }),
                            (0, i.jsx)("i", { className: eU.p0 }),
                            (0, i.jsx)(A.Z_, {
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
                                children: F.intl.string(F.t["1WjMbC"]),
                            }),
                        ],
                    });
                case W.M.NAGBAR_QUEST_APP_UPSELL:
                    return (0, i.jsxs)(A.$T, {
                        color: A.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(A.PM, { onClick: () => r(e_.i.UNKNOWN), noticeType: l }),
                            (0, i.jsx)("i", { className: eU.TN }),
                            F.intl.string(F.t.lgwX26),
                            (0, i.jsx)(A.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    ((0, J.A)(ed.AMi.META_QUEST), r(e_.i.TAKE_ACTION));
                                },
                                children: F.intl.string(F.t["1WjMbC"]),
                            }),
                        ],
                    });
                case W.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(A.$T, {
                        color: A.Hv.SPOTIFY,
                        children: [
                            (0, i.jsx)(A.PM, { onClick: () => r(e_.i.UNKNOWN), noticeType: l }),
                            (0, i.jsx)(eP.A, { className: eU.tV }),
                            F.intl.string(F.t["5NUVHH"]),
                            (0, i.jsx)(A.Z_, {
                                onClick: () => (0, ee.A)({ platformType: ed.fg2.SPOTIFY, location: "Notice Bar" }),
                                noticeType: l,
                                children: F.intl.string(F.t.S0W8Z5),
                            }),
                        ],
                    });
                case W.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(A.$T, {
                        color: A.Hv.PLAYSTATION,
                        children: [
                            (0, i.jsx)(A.PM, { noticeType: l, onClick: () => r(e_.i.UNKNOWN) }),
                            (0, i.jsx)("img", {
                                alt: "",
                                className: eU.tV,
                                src: x.A.get(ed.fg2.PLAYSTATION).icon.whiteSVG,
                            }),
                            F.intl.string(F.t.WHWgoY),
                            (0, i.jsx)(A.zr, {
                                onClick: () => (0, ee.A)({ platformType: ed.fg2.PLAYSTATION, location: "Notice Bar" }),
                                children: F.intl.string(F.t.S0W8Z5),
                            }),
                        ],
                    });
                case W.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, i.jsxs)(A.$T, {
                        color: A.Hv.DEFAULT,
                        children: [
                            (0, i.jsx)(A.PM, { onClick: () => r(e_.i.USER_DISMISS), noticeType: l }),
                            F.intl.string(F.t["3qKN/h"]),
                            (0, i.jsx)(A.Z_, {
                                onClick: async () => {
                                    r(e_.i.TAKE_ACTION);
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
                                        (0, Q.P)((0, Z.o)(F.intl.string(F.t.xSCvBf), z.Ck.FAILURE));
                                    }
                                },
                                noticeType: l,
                                children: F.intl.string(F.t["ff/XXy"]),
                            }),
                        ],
                    });
                case W.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(A.$T, {
                        color: A.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)("span", { className: eU.lK }),
                            (0, i.jsx)("span", { className: eU.$t, children: F.intl.string(F.t["+urf75"]) }),
                            (0, i.jsx)(A.Z_, {
                                className: eU.CO,
                                noticeType: l,
                                onClick: () => {
                                    (er.default.track(ed.HAw.PREMIUM_PROMOTION_OPENED, {
                                        location_section: ed.JJy.NOTIFICATION_BAR,
                                        location_object: ed.ZSU.BUTTON_CTA,
                                    }),
                                        (0, eD.openUserSettings)(ep.X.NITRO_PANEL));
                                },
                                children: F.intl.string(F.t["8JC5e/"]),
                            }),
                            (0, i.jsx)(A.PM, {
                                onClick: () => {
                                    (r(e_.i.UNKNOWN), (0, $.lA)(ed.nhx.PREMIUM_PROMO_DISMISSED, !0));
                                },
                                noticeType: l,
                            }),
                        ],
                    });
                case W.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(eI.A, {
                        dismissCurrentNotice: () => r(e_.i.USER_DISMISS),
                        subscriptionTier: eE.pe.TIER_2,
                    });
                case W.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(eI.A, {
                        dismissCurrentNotice: () => r(e_.i.USER_DISMISS),
                        subscriptionTier: eE.pe.TIER_0,
                    });
                case W.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(A.$T, {
                        color: A.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(A.PM, { noticeType: l, onClick: () => r(e_.i.USER_DISMISS) }),
                            F.intl.string(F.t["0KFB2B"]),
                            (0, i.jsx)(A.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    (r(e_.i.TAKE_ACTION), (0, eD.openUserSettings)(ep.X.NITRO_PANEL));
                                },
                                children: F.intl.string(F.t.pyYSiO),
                            }),
                        ],
                    });
                case W.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(A.$T, {
                        color: A.Hv.DANGER,
                        children: [
                            (0, i.jsx)(A.PM, { onClick: () => r(e_.i.UNKNOWN), noticeType: l }),
                            F.intl.string(F.t["7490vQ"]),
                            (0, i.jsx)(A.Z_, {
                                noticeType: l,
                                onClick: () => {
                                    (0, ef.pX)((0, eg.settingsPathToRoute)(eM.od.ACCOUNT));
                                },
                                children: F.intl.string(F.t.Vm8akB),
                            }),
                        ],
                    });
                case W.M.COD_3PP_NAGBAR_NOTICE:
                    return (0, i.jsx)(eT, { markAsDismissed: r });
                case W.M.YOUTUBE_3P_NAGBAR_NOTICE:
                    return (0, i.jsx)(eS, { markAsDismissed: r });
                case W.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(A.$T, {
                        color: A.Hv.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(A.PM, { onClick: () => r(e_.i.USER_DISMISS), noticeType: l }),
                            F.intl.string(F.t["O9GI+k"]),
                            (0, i.jsx)(A.Z_, {
                                onClick: () => {
                                    (r(e_.i.TAKE_ACTION),
                                        (0, et.A)({
                                            subscriptionTier: eE.pe.TIER_2,
                                            analyticsLocations: [k.A.CHECKOUT_RECOVERY_NAGBAR],
                                            analyticsLocation: ed.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                                        }));
                                },
                                noticeType: l,
                                children: F.intl.string(F.t.Zi69D4),
                            }),
                        ],
                    });
            }
        },
    });
}
var eL = n(877624),
    ex = n(412260),
    ek = n(131607),
    ev = n(823901);
function ej(e) {
    let t,
        n,
        { dismissibleContent: l } = e,
        { snowflakeId: r, couldShow: s } =
            ((t = (0, E.bG)([ex.A], () => ex.A.getGiftPromotion()?.id)),
            (n = (0, E.bG)([ex.A], () => null != ex.A.getMarketingComponentByType(eL.C.GIFT_REMINDER_NAGBAR))),
            l === W.M.GIFTING_PROMOTION_REMINDER
                ? { snowflakeId: t, couldShow: n && null != t }
                : { snowflakeId: void 0, couldShow: !1 }),
        [a, o] = (0, ek.Cc)(s ? l : null, r ?? "", e_.m.NOTICE_BAR, !0);
    return null == a
        ? null
        : a === W.M.GIFTING_PROMOTION_REMINDER
          ? (0, i.jsx)(ev.y, { markAsDismissed: (e) => o(e) })
          : void 0;
}
var eG = n(264779),
    eb = n(962644),
    eq = n(158045),
    eB = n(723970);
function eX(e) {
    let { dismissibleContent: t } = e,
        n = (0, eG.Cp)(),
        r = (0, E.bG)([el.default], () => !eq.Ay.isPremium(el.default.getCurrentUser())),
        s = l.useCallback(() => {
            (er.default.track(ed.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED),
                (0, eD.openUserSettings)(ep.X.GIFT_PANEL),
                eb.Ay.dismissOutboundPromotionNotice());
        }, []);
    return null == n
        ? null
        : (0, i.jsx)(eh.YS, {
              contentType: t,
              newSnowflakeId: n,
              timeRecurringConfig: { cooldownDurationMs: 0 },
              groupName: e_.m.NOTICE_BAR,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: n } = e;
                  if (t === W.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR)
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  noticeType: ed.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      (eb.Ay.dismissOutboundPromotionNotice(), null !== n && n(e_.i.USER_DISMISS));
                                  },
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: eB.P }),
                              r ? F.intl.string(F.t["5JMiOo"]) : F.intl.string(F.t["Pzh+G2"]),
                              (0, i.jsx)(A.Z_, {
                                  noticeType: ed.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      (s(), null !== n && n(e_.i.TAKE_ACTION));
                                  },
                                  children: F.intl.string(F.t.jVcuVY),
                              }),
                          ],
                      });
              },
          });
}
var ew = n(532205),
    eF = n(487329),
    eH = n(102609),
    eV = n(736056);
if (221552 == n.j) var eY = n(194261);
var eK = n(548118),
    eW = n(134413),
    eQ = n(221950),
    eZ = n(71393),
    ez = n(309010),
    e$ = n(967198),
    eJ = n(585510),
    e0 = n(834409),
    e1 = n(903093),
    e2 = n(746080),
    e5 = n(856093);
function e3(e) {
    let { onDismiss: t } = e,
        r = (0, E.bG)([e$.A], () => e$.A.getGuildId()),
        s = (0, E.bG)([ez.Ay], () => (null != r ? ez.Ay.getChannelId(r) : null), [r]),
        a = r ?? null,
        o = (0, E.bG)([eZ.A], () => (null != a ? eZ.A.getGuild(a) : null), [a]),
        { shouldShowIncidentActions: c, incidentData: u, isUnderLockdown: d } = (0, eJ.Li)(a),
        _ = (0, eW.fw)(o?.id ?? ed.dJq),
        T = l.useCallback(() => null != o && (0, eQ.aZ)(o.id), [o]);
    if (null == o || null == u || !c) return null;
    function I(e) {
        if (null != o) {
            if (e && _ && s !== e2.VV.MEMBER_SAFETY && T())
                return void er.default.track(ed.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: ed.kqX.GUILD_RAID_NOTIFICATION,
                    guild_id: o.id,
                });
            (0, N.openModalLazy)(async () => {
                let e = { source: e0.Eo.NAGBAR, alertType: (0, e1.$5)(u) },
                    { default: t } = await Promise.all([
                        n.e("684290"),
                        n.e("660608"),
                        n.e("940258"),
                        n.e("273669"),
                        n.e("346313"),
                        n.e("343233"),
                    ]).then(n.bind(n, 671576));
                return (n) => (0, i.jsx)(t, { ...n, guildId: o.id, analyticsData: e });
            });
        }
    }
    let R = (0, i.jsx)(eK.Ay, { className: e5.$f, guild: o, size: eK.Ay.Sizes.MINI }),
        C = (0, e1.ql)(u, o.name);
    if (null != (u.dmsDisabledUntil ?? u.invitesDisabledUntil) && d)
        return (0, i.jsxs)(A.$T, {
            className: e5.lm,
            color: A.Hv.NEUTRAL,
            children: [
                (0, i.jsx)(A.PM, { onClick: t, noticeType: ed.kqX.GUILD_RAID_NOTIFICATION }),
                R,
                C,
                (0, i.jsx)(A.zr, {
                    className: e5.hP,
                    onClick: () => I(!1),
                    children: (0, i.jsxs)("div", {
                        className: e5.rx,
                        children: [
                            (0, i.jsx)(eY.LockIcon, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)("span", { children: F.intl.string(F.t["c+7oa7"]) }),
                        ],
                    }),
                }),
            ],
        });
    let O = (0, e1.P$)(u)
            ? F.intl.formatToPlainString(F.t.tZTx2E, { guildName: o.name })
            : (0, e1.Qm)(u)
              ? F.intl.formatToPlainString(F.t["1bSmxr"], { guildName: o.name })
              : F.intl.formatToPlainString(F.t.W87xDE, { guildName: o.name }),
        m = _ && s === e2.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(A.$T, {
        className: e5.lm,
        color: A.Hv.WARNING,
        children: [
            (0, i.jsx)(A.PM, { onClick: t, noticeType: ed.kqX.GUILD_RAID_NOTIFICATION }),
            R,
            O,
            !m &&
                (0, i.jsx)(A.zr, {
                    className: e5.hP,
                    onClick: () => I(!0),
                    children: (0, i.jsx)("div", {
                        className: e5.rx,
                        children: (0, i.jsx)("span", { children: F.intl.string(F.t.zDJDhr) }),
                    }),
                }),
        ],
    });
}
var e7 = n(995786),
    e8 = n(206835),
    e9 = n(280450),
    e6 = n(696451),
    e4 = n(229527),
    te = n(81400),
    tt = n(340837);
function tn(e) {
    let { guildId: t, analyticsLocations: n } = e,
        [l, r] = (0, te.j8)({ guildId: t, analyticsLocations: n }),
        s = r ? F.intl.string(F.t["6ndMcq"]) : F.intl.string(F.t["0eiu6J"]),
        a = r ? F.intl.string(F.t.S09nw4) : F.intl.string(F.t.tEttXd);
    return (0, i.jsxs)(A.$T, { color: A.Hv.DANGER, children: [s, (0, i.jsx)(A.zr, { onClick: l, children: a })] });
}
function ti() {
    let e = (0, e8.A)({ scrollPosition: eM._F.GUILD_TAG });
    return (0, i.jsxs)(A.$T, {
        color: A.Hv.DANGER,
        children: [F.intl.string(F.t.Zqlecb), (0, i.jsx)(A.zr, { onClick: e, children: F.intl.string(F.t.SJehVW) })],
    });
}
function tl(e) {
    let { analyticsLocations: t, ...n } = e,
        { analyticsLocations: l } = (0, v.Ay)(t, k.A.AUTOMOD_NAGBAR_NOTICE),
        r = (0, E.bG)(
            [e9.default, e6.Ay],
            () => {
                if (null == n.guildId) return new Set();
                let e = e9.default.getId();
                return (0, e4.wj)(e6.Ay.getMember(n.guildId, e));
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
    to = n.n(ta);
if (221552 == n.j) var tc = n(806163);
if (221552 == n.j) var tE = n(314116);
if (221552 == n.j) var tu = n(821609);
var td = n(334465),
    t_ = n(624458),
    tA = n(513461),
    tT = n(709977),
    tI = n(212455),
    tN = n(967641),
    tR = n(934966);
let tC =
    221552 == n.j
        ? function () {
              let e = (0, E.bG)([e$.A], () => e$.A.getGuildId(), []),
                  t = (0, E.bG)([eZ.A], () => eZ.A.getGuild(e), [e]),
                  l = (0, E.bG)([tI.A], () => (null != e ? tI.A.getRequest(e) : null), [e]),
                  r = (0, tc.zy)(),
                  s = (0, td.B)(r.pathname, ed.BVt.CHANNEL(t?.id, e2.VV.GUILD_ONBOARDING))?.isExact === !0;
              if (null == t || !(0, tT.Qd)(t) || s) return null;
              let a = l?.applicationStatus ?? tA.B5.STARTED,
                  o = null,
                  c = null,
                  u = null,
                  _ = [tN.lm, tR.lm];
              switch (a) {
                  case tA.B5.SUBMITTED:
                      ((o = F.intl.string(F.t["5iLvSx"])),
                          (c = F.intl.string(F.t.mqtdmQ)),
                          (u = function () {
                              null != t &&
                                  (0, tE.A)({
                                      title: F.intl.string(F.t.aIz1oV),
                                      subtitle: F.intl.string(F.t["13tjTU"]),
                                      variant: "primary",
                                      confirmText: F.intl.string(F.t["cY+Oob"]),
                                      onConfirm: () => t_.A.removeGuildJoinRequest(t.id),
                                  });
                          }));
                      break;
                  case tA.B5.REJECTED:
                      ((o = F.intl.string(F.t.lk30cY)),
                          (c = F.intl.string(F.t["8RrsHr"])),
                          (u = function () {
                              null != t &&
                                  (0, N.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([n.e("298903"), n.e("914382")]).then(
                                          n.bind(n, 463325),
                                      );
                                      return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                                  });
                          }),
                          _.push(tN.z3));
                      break;
                  default:
                      ((o = F.intl.string(F.t.G5YKXP)),
                          (c = F.intl.string(F.t["r8/DT+"])),
                          (u = function () {
                              null != t && (0, tr.Ze)(t.id);
                          }));
              }
              return (0, i.jsxs)("div", {
                  className: to()(..._),
                  children: [
                      (0, i.jsx)(d.E, { className: tN.wx, variant: "text-sm/normal", children: o }),
                      (0, i.jsx)(tu.$, { variant: "overlay-primary", size: "sm", onClick: u, text: c }),
                  ],
              });
          }
        : null;
if (221552 == n.j) var tO = n(477155);
var tm = n(645460);
function tS(e) {
    let { buttonText: t, onGoBack: n, onDismiss: l, showCloseButton: r } = e;
    return (0, i.jsxs)(A.$T, {
        className: tm.eR,
        children: [
            r && (0, i.jsx)(A.PM, { onClick: l, className: tm.b, noticeType: ed.kqX.BACK_TO_PREVIOUS_SCREEN }),
            (0, i.jsx)(tu.$, { text: t, variant: "overlay-secondary", size: "sm", icon: tO.r, onClick: n }),
        ],
    });
}
var tf = n(468689),
    tp = n(699609);
if (221552 == n.j) var tg = n(862482);
var tD = n(66834),
    tP = n(449054),
    th = n(451543);
let tM =
    221552 == n.j
        ? function () {
              let e = (0, E.bG)([e$.A], () => e$.A.getGuildId(), []),
                  t = (0, E.bG)([eZ.A], () => eZ.A.getGuild(e), [e]),
                  [n, r] = l.useState(!1);
              if (null == t) return null;
              async function s() {
                  if (null != t) {
                      r(!0);
                      try {
                          (tP.cf(t.id), await tD.A.joinGuild(t.id, { source: ed.Q4z.NOTICE_BAR }));
                      } catch {
                          r(!1);
                      }
                  }
              }
              return (0, i.jsxs)("div", {
                  className: to()(th.lm, tR.lm),
                  children: [
                      (0, i.jsxs)(tg.$n, {
                          look: tg.$n.Looks.OUTLINED,
                          color: tg.$n.Colors.WHITE,
                          size: tg.$n.Sizes.NONE,
                          className: to()(th.x6, th.aX),
                          innerClassName: th.gb,
                          onClick: function () {
                              (0, ef.JK)().goBack();
                          },
                          children: [
                              (0, i.jsx)(tO.r, { size: "xs", color: "currentColor", className: th.UE }),
                              F.intl.string(F.t["13/7kX"]),
                          ],
                      }),
                      (0, i.jsx)(d.E, {
                          className: th.wx,
                          variant: "text-sm/normal",
                          children: F.intl.string(F.t["N/y2WE"]),
                      }),
                      (0, i.jsx)(tg.$n, {
                          className: th.x6,
                          look: tg.$n.Looks.OUTLINED,
                          color: tg.$n.Colors.WHITE,
                          size: tg.$n.Sizes.NONE,
                          submitting: n,
                          onClick: s,
                          children: F.intl.format(F.t.uHN7ny, { guild: t.name }),
                      }),
                  ],
              });
          }
        : null;
var tU = n(74848),
    ty = n(899847),
    tL = n(191627),
    tx = n(273665),
    tk = n(597111);
let tv =
    221552 == n.j
        ? {
              "--custom-notice-background": "var(--background-feedback-warning)",
              "--custom-notice-text": "var(--text-strong)",
          }
        : null;
function tj(e) {
    let { daysRemaining: t } = e;
    (0, F.useSyncMessages)(tx.messagesLoader);
    let n = l.useCallback(() => {
        (er.default.track(ed.HAw.PARENTAL_CONSENT_WARNING_BANNER_TAPPED, { days_remaining: t }),
            ty.Ay.selectTab(tL.u9.REQUESTS),
            (0, eD.openUserSettings)(ep.X.FAMILY_CENTER_PANEL));
    }, [t]);
    return (0, i.jsx)(A.$T, {
        color: A.Hv.CUSTOM,
        style: tv,
        children: (0, i.jsxs)("div", {
            className: tk.Q,
            children: [
                (0, i.jsx)(d.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    tag: "span",
                    children:
                        null != t && t > 0
                            ? F.intl.format(tx.default.F0hdak, { count: t })
                            : F.intl.string(tx.default.LTzc00),
                }),
                (0, i.jsx)(tu.$, {
                    variant: "secondary",
                    size: "sm",
                    text: F.intl.string(tx.default.xYJKEy),
                    onClick: n,
                }),
            ],
        }),
    });
}
var tG = n(732280),
    tb = n(754804),
    tq = n(166403),
    tB = n(543767),
    tX = n(228662);
function tw(e) {
    let { noticeType: t, analyticsLocation: n, onFallback: l, children: r } = e,
        s = (0, E.bG)([tq.A], () => tq.A.getPremiumTypeSubscription()),
        { analyticsLocations: a } = (0, v.Ay)(n),
        o = null != s && s.status === ed.Dmq.PAST_DUE,
        [c, u] = (0, tB.C8)({ subscriptionId: null != s ? s.id : "", preventFetch: !o }),
        d = o && null == c && null == u;
    return (
        (0, tX.A)("nagbar", null != s ? s.id : "", u),
        (0, i.jsx)(A.Z_, {
            noticeType: t,
            disabled: d,
            onClick: () => {
                null != s && null != c
                    ? (0, et.A)({ initialPlanId: s.planIdFromItems, openInvoiceId: c.id, analyticsLocations: a })
                    : l();
            },
            children: r,
        })
    );
}
var tF = n(378974),
    tH = n(396813),
    tV = n(14594);
function tY() {
    let [e, t] = (0, ek.Wl)(W.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: tV.aH });
    return e !== W.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK
        ? null
        : (0, i.jsxs)(A.$T, {
              color: A.Hv.BRAND,
              children: [
                  (0, i.jsx)(A.PM, { onClick: () => t(e_.i.DISMISS), noticeType: ed.kqX.IGNORE_USER_FEEDBACK_NAGBAR }),
                  F.intl.string(F.t.XkeW9N),
                  (0, i.jsx)(A.Z_, {
                      onClick: () => {
                          ((0, N.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e("312513"),
                                  n.e("803461"),
                                  n.e("155925"),
                                  n.e("218413"),
                                  n.e("137381"),
                                  n.e("326484"),
                                  n.e("574192"),
                              ]).then(n.bind(n, 976627));
                              return (t) => (0, i.jsx)(e, { ...t });
                          }),
                              t(e_.i.TAKE_ACTION));
                      },
                      noticeType: ed.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
                      children: F.intl.string(F.t.vcdNKv),
                  }),
              ],
          });
}
if (221552 == n.j) var tK = n(825484);
var tW = n(379257),
    tQ = n(306537),
    tZ = n(734057),
    tz = n(849736),
    t$ = n(354583),
    tJ = n(366098),
    t0 = n(418208),
    t1 = n(931841);
function t2(e) {
    if (!e && (0, t0.Cf)())
        return void tW.A.showAgeVerificationGetStartedModal({ entryPoint: tQ.q1.STAGE_CHANNEL_RAISE_HAND });
    let t = ez.Ay.getVoiceChannelId();
    if (null == t) return;
    let n = tZ.A.getChannel(t);
    null != n && (0, tz.e7)(n, e);
}
function t5(e) {
    let { channelId: t } = e,
        n = (0, tJ.D3)(t) ?? 0,
        l = (0, tJ.Xk)(t) ?? 0;
    return n > 0 && l > 0
        ? (0, i.jsx)("div", {
              className: t1.Z5,
              children: (0, i.jsx)("div", { className: to()(t1.qQ, t1.lN), children: F.intl.string(F.t.xlJRfv) }),
          })
        : n > 0
          ? (0, i.jsx)("div", {
                className: t1.Z5,
                children: (0, i.jsx)("div", { className: to()(t1.qQ, t1.lN), children: F.intl.string(F.t.WYad9Z) }),
            })
          : l > 0
            ? (0, i.jsx)("div", {
                  className: t1.Z5,
                  children: (0, i.jsx)("div", { className: to()(t1.qQ, t1.lN), children: F.intl.string(F.t.eHq2OF) }),
              })
            : null;
}
function t3() {
    let e = (0, t$.A)();
    return null == e
        ? null
        : (0, i.jsxs)(A.$T, {
              className: t1.kL,
              color: A.Hv.DEFAULT,
              children: [
                  F.intl.string(F.t.Ul1RJQ),
                  (0, i.jsx)(t5, { channelId: e.id }),
                  (0, i.jsxs)(tK.e, {
                      size: "sm",
                      className: t1.GC,
                      children: [
                          (0, i.jsx)(tu.$, {
                              variant: "overlay-primary",
                              text: F.intl.string(F.t.MpO0px),
                              onClick: () => t2(!1),
                          }),
                          (0, i.jsx)(tu.$, {
                              variant: "secondary",
                              onClick: () => t2(!0),
                              text: F.intl.string(F.t["1YDv7a"]),
                          }),
                      ],
                  }),
              ],
          });
}
var t7 = n(952818),
    t8 = n(935671);
function t9() {
    (0, t8.sL)("nagbar");
}
function t6() {
    return null == (0, E.bG)([t7.Ay], () => t7.Ay.getVisibleGame())
        ? null
        : (0, i.jsxs)(A.$T, {
              color: A.Hv.DANGER,
              children: [
                  (0, i.jsx)(A.PM, { noticeType: ed.kqX.SYSTEM_SERVICE_WARNING, onClick: () => nR() }),
                  F.intl.string(F.t["5rPt+j"]),
                  (0, i.jsx)(A.Z_, {
                      onClick: t9,
                      noticeType: ed.kqX.SYSTEM_SERVICE_WARNING,
                      children: F.intl.string(F.t["1iI46O"]),
                  }),
              ],
          });
}
function t4() {
    return (0, i.jsxs)(A.$T, {
        color: A.Hv.DANGER,
        children: [
            F.intl.string(F.t.lQiCJ6),
            (0, i.jsx)(A.Z_, {
                noticeType: ed.kqX.PTT_NO_KEYBIND_WARNING,
                onClick: function () {
                    (0, eD.openUserSettings)(ep.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING);
                },
                children: F.intl.string(F.t["UgQN+9"]),
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
        title: F.intl.string(F.t["zQ1+Jw"]),
        subtitle: F.intl.string(F.t.K1gWXn),
        actions: [
            {
                text: F.intl.string(F.t.BddRzS),
                onClick: () => {
                    (t && O.A.setSilenceWarning(!1), e.onClose());
                },
                variant: "primary",
            },
        ],
        actionBarInput: (0, i.jsx)(nt.S, {
            checked: t,
            onChange: (e) => n(e),
            label: F.intl.string(F.t.XAiAgD),
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
    no = n(325278),
    nc = n(831502),
    nE = n(731854);
let nu = new K.A("Notice");
function nd(e) {
    let { error: t, allowClick: n = !1 } = e,
        l = (0, eF.B1)(t)?.errorCode,
        r = F.intl.formatToPlainString(F.t.ejOT95, { errorCode: l }),
        s = (0, i.jsx)(d.E, {
            variant: "text-sm/bold",
            color: "currentColor",
            tag: "span",
            className: eU.fU,
            selectable: !0,
            children: r,
        });
    return n
        ? (0, i.jsx)(_.D, {
              tag: "span",
              className: eU.wz,
              onClick: () => open(eN.A.getArticleURL(ed.MVz.AV_ERROR_CODES)),
              children: s,
          })
        : s;
}
function n_(e) {
    let { noticeType: t } = e;
    return (0, i.jsxs)(A.$T, {
        color: A.Hv.DANGER,
        children: [
            (0, i.jsx)(A.PM, {
                noticeType: t,
                onClick: () => {
                    nR();
                },
            }),
            F.intl.string(F.t.o3zuYz),
            (0, i.jsx)(nd, { error: eF.iy.NO_INPUT_DEVICES }),
            (0, i.jsx)(A.eC, {
                href: eN.A.getArticleURL(ed.MVz.NO_INPUT_DETECTED),
                noticeType: t,
                children: F.intl.string(F.t.RYKKox),
            }),
        ],
    });
}
function nA(e) {
    let { noticeType: t } = e;
    return (0, i.jsxs)(A.$T, {
        color: A.Hv.DANGER,
        children: [
            (0, i.jsx)(A.PM, {
                noticeType: t,
                onClick: () => {
                    nR();
                },
            }),
            F.intl.string(F.t.Up0ApK),
            (0, i.jsx)(nd, { error: eF.iy.VIDEO_BACKGROUND_UNAVAILABLE }),
            (0, i.jsx)(A.zr, {
                onClick: () => (0, eD.openUserSettings)(ep.X.CAMERA_CATEGORY),
                children: F.intl.string(F.t.kRwxfi),
            }),
        ],
    });
}
function nT(e) {
    return (0, na.isWindows)() && c().satisfies(L.A?.os.release, no.PH)
        ? `ms-settings:sound-properties?endpointId=${e}`
        : "ms-settings:sound";
}
function nI(e) {
    let t,
        n,
        { noticeType: l } = e,
        r = (0, tU.x5)(nE.oh.AUDIO_INPUT),
        s = r?.guid ?? "",
        { inputDeviceOSMuted: a, inputDeviceOSVolume: o } = (0, E.cf)([ni.Ay], () => ({
            inputDeviceOSMuted: ni.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: ni.Ay.getInputDeviceOSVolume(),
        })),
        c = !1;
    return (
        !0 === a
            ? ((t = F.intl.string(F.t.ppW3ri)),
              (n = (0, i.jsx)(A.eC, { href: nT(s), noticeType: l, children: F.intl.string(F.t.QghSIq) })))
            : 0 === o
              ? ((t = F.intl.string(F.t.j4gGA4)),
                (n = (0, i.jsx)(A.eC, { href: nT(s), noticeType: l, children: F.intl.string(F.t.QghSIq) })))
              : ni.Ay.supports(nE.O5.LOOPBACK)
                ? ((t = F.intl.string(F.t.dNAJ18)),
                  (c = !0),
                  (n = (0, i.jsx)(A.zr, {
                      onClick: () => {
                          (0, eD.openUserSettings)(ep.X.VOICE_AND_VIDEO_PANEL);
                      },
                      children: F.intl.string(F.t.I6YlB4),
                  })))
                : ((t = F.intl.string(F.t.nCO9bI)),
                  (n = (0, i.jsx)(A.eC, {
                      href: eN.A.getArticleURL(ed.MVz.NO_INPUT_DETECTED),
                      noticeType: l,
                      children: F.intl.string(F.t.RYKKox),
                  }))),
        (0, i.jsxs)(A.$T, {
            color: A.Hv.DANGER,
            children: [
                (0, i.jsx)(A.PM, {
                    noticeType: l,
                    onClick: () => {
                        (nR(), (0, N.openModal)((e) => (0, i.jsx)(nn, { ...e })));
                    },
                }),
                t,
                (0, i.jsx)(nd, { allowClick: c, error: eF.iy.NO_AUDIO_INPUT_DETECTED }),
                n,
            ],
        })
    );
}
function nN() {
    return (0, i.jsxs)("div", {
        className: eU.t8,
        children: [
            (0, i.jsx)(H, { className: eU.KS }),
            (0, i.jsx)(A.PM, { className: eU.KS, onClick: U.cL, noticeType: ed.kqX.APPLICATION_TEST_MODE }),
        ],
    });
}
function nR(e) {
    p.A.dismiss(null != e ? { untilAtLeast: s()(e) } : void 0);
}
let nC =
    221552 == n.j
        ? l.memo(function () {
              let e = (0, E.bG)([el.default], () => el.default.getCurrentUser()),
                  t = (0, E.bG)([e$.A], () => e$.A.getGuildId()),
                  r = (0, E.bG)([ns.Ay], () => ns.Ay.getNotice()),
                  { analyticsLocations: s } = (0, v.Ay)(),
                  o = (0, y.Ay)(),
                  c = (0, ts.H)(t),
                  d = (0, tG.V)();
              if (
                  (l.useEffect(() => {
                      if (r?.type != null) {
                          let e;
                          if (
                              null == d &&
                              (r.type === ed.kqX.PREMIUM_TIER_2_TRIAL_ENDING ||
                                  r.type === ed.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
                          )
                              return;
                          let n = {};
                          (null != t && (n.guild_id = t),
                              d?.trialId != null && (n.trial_id = d.trialId),
                              (e = { notice_type: r.type, ...n }),
                              er.default.track(ed.HAw.APP_NOTICE_VIEWED, e));
                      }
                  }, [r?.type, t, d]),
                  l.useEffect(() => {
                      if (null != r && r.type === ed.kqX.SURVEY && null != r.metadata) {
                          let { metadata: e } = r,
                              t = eV.A.getUserExperimentDescriptor(e.id);
                          (null != t && (0, eH.LQ)(e.id, t),
                              (async function () {
                                  null != r && r.metadata?.id != null && (await (0, M.oX)(r.metadata?.id));
                              })());
                      }
                  }, [r]),
                  null == r)
              )
                  return null;
              let _ = null != r.type ? ns.Re[r.type] : null,
                  S = null != r.type ? ns.rV[r.type] : null,
                  p = null != r.type ? ns.f7[r.type] : null,
                  U = ns.pe[r.type];
              if (null != _) return (0, i.jsx)(ew.$, { dismissibleContent: _, noticeType: r.type });
              if (null != S) return (0, i.jsx)(ej, { dismissibleContent: S });
              if (null != p) return (0, i.jsx)(eX, { dismissibleContent: p });
              if (null != U) return (0, i.jsx)(ey, { dismissibleContent: U, noticeType: r.type });
              let j = r.metadata?.premiumType;
              switch (r.type) {
                  case ed.kqX.PTT_NO_KEYBIND_WARNING:
                      return (0, i.jsx)(t4, {});
                  case ed.kqX.LURKING_GUILD:
                      return (0, i.jsx)(tM, {});
                  case ed.kqX.PENDING_MEMBER:
                      return (0, i.jsx)(tC, {});
                  case ed.kqX.INVITED_TO_SPEAK:
                      return (0, i.jsx)(t3, {});
                  case ed.kqX.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: G } = r.metadata;
                      return (0, i.jsx)(e3, { onDismiss: () => nR(G) });
                  case ed.kqX.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: q } = r.metadata;
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => nR(q), noticeType: r.type }),
                              F.intl.format(F.t["08KQ1P"], {
                                  helpCenterLink: eN.A.getArticleURL(ed.MVz.WIN32_DEPRECATE),
                              }),
                          ],
                      });
                  case ed.kqX.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: B } = r.metadata;
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => nR(B), noticeType: r.type }),
                              F.intl.format(F.t["8Je+dX"], {
                                  helpCenterLink: eN.A.getArticleURL(ed.MVz.WIN7_8_DEPRECATE),
                              }),
                          ],
                      });
                  case ed.kqX.WIN_COMPAT_MODE_MESSAGE:
                      let { dismissUntil: X } = r.metadata;
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => nR(X), noticeType: r.type }),
                              F.intl.string(F.t["9DJgOg"]),
                          ],
                      });
                  case ed.kqX.MACOS_DEPRECATED_MESSAGE:
                      let { dismissUntil: H } = r.metadata,
                          K = parseInt(L.A?.os.release.split(".")[0]),
                          W = ed.MVz.MACOS_19_DEPRECATE;
                      return (
                          21 === K ? (W = ed.MVz.MACOS_21_DEPRECATE) : 20 === K && (W = ed.MVz.MACOS_20_DEPRECATE),
                          (0, i.jsxs)(A.$T, {
                              color: A.Hv.WARNING,
                              children: [
                                  (0, i.jsx)(A.PM, { onClick: () => nR(H), noticeType: r.type }),
                                  F.intl.format(F.t.q8VPLo, { helpCenterLink: eN.A.getArticleURL(W) }),
                              ],
                          })
                      );
                  case ed.kqX.E2EE_UPDATE_REQUIRED:
                      let { dismissUntil: Q } = r.metadata;
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => nR(Q), noticeType: r.type }),
                              F.intl.format(na.isPlatformEmbedded ? F.t.J232TI : F.t.vceuiL, {
                                  helpCenterLink: eN.A.getArticleURL(ed.MVz.END_TO_END_ENCRYPTION),
                              }),
                          ],
                      });
                  case ed.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => nR(), noticeType: r.type }),
                              F.intl.string(F.t.iW0fcQ),
                              (0, i.jsx)(A.eC, {
                                  href: eN.A.getArticleURL(ed.MVz.WINDOWS_MEDIA_PACK),
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: F.intl.string(F.t.LQG5j6),
                              }),
                          ],
                      });
                  case ed.kqX.GENERIC:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => nR(), noticeType: r.type }),
                              r.message,
                              null != r.buttonText
                                  ? (0, i.jsx)(A.Z_, {
                                        onClick: r.callback,
                                        noticeType: r.type,
                                        children: r.buttonText,
                                    })
                                  : null,
                          ],
                      });
                  case ed.kqX.LAUNCH_GAME_FAILURE:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DANGER,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => nR(), noticeType: r.type }),
                              r.message,
                              null != r.buttonText
                                  ? (0, i.jsx)(A.Z_, {
                                        onClick: r.callback,
                                        noticeType: r.type,
                                        children: r.buttonText,
                                    })
                                  : null,
                          ],
                      });
                  case ed.kqX.VOICE_DISABLED:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  onClick: () => {
                                      (g.clearRemoteDisconnectVoiceChannelId(), nR());
                                  },
                                  noticeType: r.type,
                              }),
                              F.intl.string(F.t.bOQ3jV),
                              (0, i.jsx)(A.Z_, {
                                  onClick: () => {
                                      let e = nl.A.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != tZ.A.getChannel(e) && D.default.selectVoiceChannel(e);
                                  },
                                  noticeType: r.type,
                                  children: F.intl.string(F.t.vD60Pv),
                              }),
                          ],
                      });
                  case ed.kqX.VOICE_CONNECTED_LAST_SESSION:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  onClick: () => {
                                      (g.clearLastSessionVoiceChannelId(), nR());
                                  },
                                  noticeType: r.type,
                              }),
                              F.intl.string(F.t.jY2lUA),
                              (0, i.jsx)(A.Z_, {
                                  onClick: () => {
                                      let e = nl.A.getLastSessionVoiceChannelId();
                                      null != e && null != tZ.A.getChannel(e) && D.default.selectVoiceChannel(e);
                                  },
                                  noticeType: r.type,
                                  children: F.intl.string(F.t.vD60Pv),
                              }),
                          ],
                      });
                  case ed.kqX.SPOTIFY_AUTO_PAUSED:
                      let Z = x.A.get(ed.fg2.SPOTIFY);
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DANGER,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => nR(), noticeType: r.type }),
                              (0, i.jsx)("img", {
                                  alt: "",
                                  className: eU.tV,
                                  src: (0, u.q)(o) ? Z.icon.darkSVG : Z.icon.whiteSVG,
                              }),
                              F.intl.string(F.t.D8Cp76),
                              (0, i.jsx)(A.Z_, {
                                  onClick: () => (0, eD.openUserSettings)(ep.X.VOICE_AND_VIDEO_PANEL),
                                  noticeType: r.type,
                                  children: F.intl.string(F.t.NiTd0e),
                              }),
                              (0, i.jsx)(T.Anchor, {
                                  className: eU.uD,
                                  href: eN.A.getArticleURL(ed.MVz.SPOTIFY_AUTO_PAUSED),
                                  target: "_blank",
                                  children: F.intl.string(F.t.CiqAIU),
                              }),
                          ],
                      });
                  case ed.kqX.UNCLAIMED_ACCOUNT:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DEFAULT,
                          children: [
                              F.intl.string(F.t["f+Zaol"]),
                              (0, i.jsx)(A.Z_, {
                                  noticeType: r.type,
                                  onClick: () => (c && null != t ? (0, tr.Ze)(t) : V.R()),
                                  children: F.intl.string(F.t.fiNVin),
                              }),
                          ],
                      });
                  case ed.kqX.UNVERIFIED_ACCOUNT:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DEFAULT,
                          children: [
                              F.intl.string(F.t["3sWbf3"]),
                              (0, i.jsx)(A.Z_, {
                                  noticeType: r.type,
                                  onClick: () => {
                                      (m.A.verifyResend(),
                                          C.A.show({
                                              title: F.intl.string(F.t.LykQYk),
                                              body: F.intl.format(F.t.azKEPy, { email: e?.email }),
                                              cancelText: F.intl.string(F.t.Vm8akB),
                                              onCancel: V.R,
                                          }));
                                  },
                                  children: F.intl.string(F.t.WnX4J2),
                              }),
                          ],
                      });
                  case ed.kqX.SCHEDULED_MAINTENANCE:
                      if (null == r.metadata) return null;
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => P.A.ackScheduledMaintenance(), noticeType: r.type }),
                              F.intl.format(F.t["yb96S+"], r.metadata),
                              (0, i.jsx)(A.eC, {
                                  href: `${ed.qF7.STATUS}/incidents/${r.metadata.id}`,
                                  noticeType: r.type,
                                  children: F.intl.string(F.t.hvVgAZ),
                              }),
                          ],
                      });
                  case ed.kqX.NO_INPUT_DETECTED:
                      return (0, i.jsx)(nI, { noticeType: r.type });
                  case ed.kqX.NO_INPUT_DEVICES_DETECTED:
                      return (0, i.jsx)(n_, { noticeType: r.type });
                  case ed.kqX.VIDEO_BACKGROUND_UNAVAILABLE:
                      return (0, i.jsx)(nA, { noticeType: r.type });
                  case ed.kqX.HARDWARE_MUTE:
                      if (null != r.metadata) {
                          let { vendor: e, model: t } = r.metadata;
                          return (0, i.jsxs)(A.$T, {
                              color: A.Hv.DANGER,
                              children: [
                                  F.intl.format(F.t.qoDex7, { vendorName: e.name, modelName: t.name }),
                                  (0, i.jsx)(A.PM, {
                                      noticeType: r.type,
                                      onClick: () => {
                                          (O.A.setEnableHardwareMuteNotice(!1), nR());
                                      },
                                  }),
                                  (0, i.jsx)(A.eC, {
                                      href: t.url,
                                      target: "_blank",
                                      rel: "noreferrer noopener",
                                      noticeType: r.type,
                                      children: F.intl.string(F.t["Yl/Riu"]),
                                  }),
                              ],
                          });
                      }
                      return null;
                  case ed.kqX.STREAMER_MODE:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.STREAMER_MODE,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => nR(), noticeType: ed.kqX.STREAMER_MODE }),
                              F.intl.string(F.t.iEgBXp),
                              (0, i.jsx)(A.Z_, {
                                  onClick: () => h.A.setEnabled(!1),
                                  noticeType: ed.kqX.STREAMER_MODE,
                                  children: F.intl.string(F.t.R9GHya),
                              }),
                          ],
                      });
                  case ed.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == r.metadata) return null;
                      let { skuId: z, applicationId: $ } = r.metadata,
                          J = nr.A.get(z),
                          ee = b.A.getApplication($);
                      if (null == J || null == ee) return null;
                      let en = { page: ed.liQ.IN_APP };
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  onClick: () => f(J.id),
                                  noticeType: ed.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: eU.PC }),
                              F.intl.format(F.t["g3MU/+"], { applicationName: ee.name, skuName: J.name }),
                              (0, i.jsx)(A.Z_, {
                                  noticeType: ed.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: async () => {
                                      try {
                                          let { openIAPPurchaseModal: e } = await Promise.all([
                                              n.e("679157"),
                                              n.e("1955"),
                                              n.e("341161"),
                                              n.e("401696"),
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
                                              n.e("307395"),
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
                                              n.e("307158"),
                                              n.e("410470"),
                                              n.e("295570"),
                                              n.e("765208"),
                                              n.e("711562"),
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
                                              n.e("548938"),
                                              n.e("258407"),
                                              n.e("894292"),
                                              n.e("153302"),
                                              n.e("836576"),
                                              n.e("661779"),
                                              n.e("923981"),
                                              n.e("750370"),
                                              n.e("479368"),
                                              n.e("466592"),
                                              n.e("73946"),
                                              n.e("282050"),
                                              n.e("436101"),
                                              n.e("976888"),
                                              n.e("387970"),
                                              n.e("847445"),
                                              n.e("919659"),
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
                                              n.e("264572"),
                                              n.e("11735"),
                                              n.e("262156"),
                                              n.e("960235"),
                                              n.e("402368"),
                                              n.e("190779"),
                                              n.e("716460"),
                                              n.e("221856"),
                                              n.e("678157"),
                                              n.e("147662"),
                                              n.e("646271"),
                                              n.e("325675"),
                                              n.e("996481"),
                                              n.e("331988"),
                                              n.e("544571"),
                                              n.e("40291"),
                                              n.e("733115"),
                                              n.e("397270"),
                                              n.e("373122"),
                                              n.e("724285"),
                                              n.e("41298"),
                                              n.e("293159"),
                                              n.e("186212"),
                                              n.e("755936"),
                                              n.e("10065"),
                                              n.e("890375"),
                                              n.e("88131"),
                                              n.e("833703"),
                                              n.e("55252"),
                                              n.e("692990"),
                                              n.e("362931"),
                                              n.e("745959"),
                                              n.e("858529"),
                                              n.e("481987"),
                                              n.e("595653"),
                                              n.e("958038"),
                                              n.e("171202"),
                                              n.e("719466"),
                                              n.e("907533"),
                                              n.e("576909"),
                                              n.e("406174"),
                                              n.e("715555"),
                                              n.e("27355"),
                                              n.e("146070"),
                                              n.e("523276"),
                                              n.e("812042"),
                                              n.e("102328"),
                                              n.e("729963"),
                                              n.e("830938"),
                                              n.e("821924"),
                                              n.e("538513"),
                                              n.e("975041"),
                                              n.e("73536"),
                                              n.e("147864"),
                                              n.e("50097"),
                                              n.e("115064"),
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
                                                      subscriptionTier: eE.pe.TIER_2,
                                                      analyticsLocations: s,
                                                      analyticsObject: en,
                                                  });
                                              },
                                              analyticsLocations: s,
                                              analyticsLocationObject: en,
                                              context: __OVERLAY__ ? ed.BRT.OVERLAY : ed.BRT.APP,
                                          }),
                                              f(J.id));
                                      } catch (e) {
                                          null != e && nu.error("Failed to open off-platform premium perk modal", e);
                                      }
                                  },
                                  children: F.intl.string(F.t.KEwPYx),
                              }),
                          ],
                      });
                  case ed.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == r.metadata) return null;
                      let { skuId: e, applicationId: t } = r.metadata,
                          n = nr.A.get(e),
                          l = b.A.getApplication(t);
                      if (null == n || null == l) return null;
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  onClick: () => nR(),
                                  noticeType: ed.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: eU.PC }),
                              F.intl.format(F.t.LquIKC, { applicationName: l.name, skuName: n.name }),
                              (0, i.jsx)(A.zr, {
                                  children: (0, i.jsx)(a.N_, {
                                      onClick: () => nR(),
                                      to: {
                                          pathname: ed.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 },
                                      },
                                      children: F.intl.string(F.t.hvVgAZ),
                                  }),
                              }),
                          ],
                      });
                  }
                  case ed.kqX.SURVEY: {
                      let e = r.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: l, url: s, embedded: a, id: o } = e;
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.CUSTOM,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  noticeType: ed.kqX.SURVEY,
                                  onClick: () => {
                                      (0, M.pX)(t, !0);
                                  },
                              }),
                              n,
                              (0, i.jsx)(A.Z_, {
                                  noticeType: ed.kqX.SURVEY,
                                  onClick: () => {
                                      (a ? (0, tF.K)(o) : window.open(s, "_blank"), (0, M.pX)(t, !1));
                                  },
                                  children: l,
                              }),
                          ],
                      });
                  }
                  case ed.kqX.CORRUPT_INSTALLATION:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DANGER,
                          children: [
                              F.intl.string(F.t["ugxmk/"]),
                              (0, i.jsx)(A.eC, {
                                  href: eN.A.getArticleURL(ed.MVz.CORRUPT_INSTALLATION),
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: F.intl.string(F.t["6ik4Xk"]),
                              }),
                          ],
                      });
                  case ed.kqX.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => nR(), noticeType: ed.kqX.VIDEO_UNSUPPORTED_BROWSER }),
                              F.intl.string(F.t.wVjKGi),
                              (0, i.jsx)(A.Z_, {
                                  noticeType: ed.kqX.VIDEO_UNSUPPORTED_BROWSER,
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
                                  children: F.intl.string(F.t["1WjMbC"]),
                              }),
                          ],
                      });
                  case ed.kqX.DISPATCH_ERROR:
                      if (null == r.metadata) return null;
                      let { error: ei } = r.metadata;
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DANGER,
                          children: [
                              (0, i.jsx)(A.PM, { onClick: () => nR(), noticeType: ed.kqX.DISPATCH_ERROR }),
                              ei?.displayMessage,
                              (0, i.jsx)(A.Z_, {
                                  noticeType: ed.kqX.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, N.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([n.e("640380"), n.e("588014")]).then(
                                              n.bind(n, 627261),
                                          );
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                  children: F.intl.string(F.t.hvVgAZ),
                              }),
                          ],
                      });
                  case ed.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == r.metadata) return null;
                      let { progress: es, total: ea, name: eo } = r.metadata;
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DEFAULT,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  onClick: () => nR(),
                                  noticeType: ed.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                              }),
                              (0, i.jsxs)(Y.A, {
                                  justify: Y.A.Justify.CENTER,
                                  children: [
                                      null != eo
                                          ? F.intl.formatToPlainString(F.t["pHj+z4"], {
                                                name: `${eo}`,
                                                progress: es,
                                                total: ea,
                                            })
                                          : F.intl.formatToPlainString(F.t["lHZn+A"], { progress: es, total: ea }),
                                      (0, i.jsx)(R.y, { type: R.y.Type.PULSING_ELLIPSIS, className: eU.gO }),
                                  ],
                              }),
                          ],
                      });
                  case ed.kqX.APPLICATION_TEST_MODE:
                      if (null == r.metadata) return null;
                      if (null != w.A.testModeEmbeddedApplicationId)
                          return (0, i.jsx)(A.$T, {
                              color: A.Hv.WARNING,
                              className: eU.i9,
                              children: (0, i.jsxs)(Y.A, {
                                  justify: Y.A.Justify.CENTER,
                                  align: Y.A.Align.CENTER,
                                  children: [
                                      (0, i.jsx)("div", {
                                          children: F.intl.format(F.t["1qxVe4"], {
                                              applicationName: r.metadata.applicationName,
                                          }),
                                      }),
                                      (0, i.jsx)(nN, {}),
                                  ],
                              }),
                          });
                      return (0, i.jsx)(A.$T, {
                          color: A.Hv.WARNING,
                          className: eU.i9,
                          children: (0, i.jsxs)(Y.A, {
                              justify: Y.A.Justify.CENTER,
                              align: Y.A.Align.CENTER,
                              children: [
                                  (0, i.jsx)("div", {
                                      children: F.intl.format(F.t.Fv5HrE, {
                                          applicationName: r.metadata.applicationName,
                                      }),
                                  }),
                                  (0, i.jsx)(nN, {}),
                              ],
                          }),
                      });
                  case ed.kqX.VIEWING_ROLES:
                      return (0, i.jsx)(tp.A, {});
                  case ed.kqX.PREMIUM_UNCANCEL:
                      return (0, i.jsxs)(A.$T, {
                          color:
                              j === eE.PremiumTypes.TIER_1
                                  ? A.Hv.PREMIUM_TIER_1
                                  : j === eE.PremiumTypes.TIER_0
                                    ? A.Hv.PREMIUM_TIER_0
                                    : A.Hv.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  noticeType: ed.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      nR(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              (0, i.jsx)(I.t, { size: "md", color: "currentColor", className: eU.PC }),
                              j === eE.PremiumTypes.TIER_1
                                  ? F.intl.formatToPlainString(F.t.fXv4wm, { daysLeft: r.metadata.daysLeft })
                                  : j === eE.PremiumTypes.TIER_0
                                    ? F.intl.formatToPlainString(F.t.ZOHZMr, { daysLeft: r.metadata.daysLeft })
                                    : F.intl.formatToPlainString(F.t.outyHh, { daysLeft: r.metadata.daysLeft }),
                              (0, i.jsx)(A.Z_, {
                                  noticeType: ed.kqX.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      (nR(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, N.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("586662"),
                                                  n.e("1955"),
                                                  n.e("341161"),
                                                  n.e("401696"),
                                                  n.e("661630"),
                                                  n.e("202985"),
                                                  n.e("603619"),
                                                  n.e("966366"),
                                                  n.e("258407"),
                                                  n.e("894292"),
                                                  n.e("153302"),
                                                  n.e("758053"),
                                                  n.e("836576"),
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
                                                  n.e("410470"),
                                                  n.e("479368"),
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
                                                  n.e("264572"),
                                                  n.e("11735"),
                                                  n.e("402368"),
                                                  n.e("190779"),
                                                  n.e("221856"),
                                                  n.e("325675"),
                                                  n.e("996481"),
                                                  n.e("41298"),
                                                  n.e("10065"),
                                                  n.e("523276"),
                                                  n.e("812042"),
                                                  n.e("102328"),
                                                  n.e("830938"),
                                                  n.e("821924"),
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
                                      j === eE.PremiumTypes.TIER_1
                                          ? F.intl.string(F.t.BkbUPM)
                                          : j === eE.PremiumTypes.TIER_0
                                            ? F.intl.string(F.t.Px978X)
                                            : F.intl.string(F.t.LW5tCE),
                              }),
                          ],
                      });
                  case ed.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: ec, dismissUntil: eu } = r.metadata;
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  noticeType: r.type,
                                  onClick: () => {
                                      nR(eu);
                                  },
                              }),
                              F.intl.format(F.t.zxU0Kp, { daysPastDue: ec }),
                              (0, i.jsx)(tw, {
                                  noticeType: ed.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  analyticsLocation: k.A.PAST_DUE_ONE_TIME_PAYMENT_NOTICE,
                                  onFallback: () => {
                                      (nR(eu), (0, eD.openUserSettings)(ep.X.SUBSCRIPTIONS_PANEL));
                                  },
                                  children: F.intl.string(F.t.q8rxeS),
                              }),
                          ],
                      });
                  case ed.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DANGER,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  noticeType: ed.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      nR(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              F.intl.string(F.t.LlZaoX),
                              (0, i.jsx)(tw, {
                                  noticeType: ed.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  analyticsLocation: k.A.PAST_DUE_INVALID_PAYMENT_NOTICE,
                                  onFallback: () => {
                                      (nR(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, eD.openUserSettings)(ep.X.SUBSCRIPTIONS_PANEL));
                                  },
                                  children: F.intl.string(F.t["Zpd+Yq"]),
                              }),
                          ],
                      });
                  case ed.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  noticeType: ed.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      nR(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              F.intl.string(F.t["30YfCr"]),
                              (0, i.jsx)(tw, {
                                  noticeType: ed.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  analyticsLocation: k.A.PAST_DUE_MISSING_PAYMENT_NOTICE,
                                  onFallback: () => {
                                      (nR(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, eD.openUserSettings)(ep.X.SUBSCRIPTIONS_PANEL));
                                  },
                                  children: F.intl.string(F.t.U5pKWA),
                              }),
                          ],
                      });
                  case ed.kqX.PREMIUM_MISSING_PAYMENT:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  noticeType: ed.kqX.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      nR(r.metadata?.premiumSubscription?.currentPeriodEnd);
                                  },
                              }),
                              j === eE.PremiumTypes.TIER_1
                                  ? F.intl.formatToPlainString(F.t.b6QUvf, { daysLeft: r.metadata.daysLeft })
                                  : j === eE.PremiumTypes.TIER_0
                                    ? F.intl.formatToPlainString(F.t["tURZ/M"], { daysLeft: r.metadata.daysLeft })
                                    : F.intl.formatToPlainString(F.t.AyC74I, { daysLeft: r.metadata.daysLeft }),
                              (0, i.jsx)(A.Z_, {
                                  noticeType: ed.kqX.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      (nR(r.metadata?.premiumSubscription?.currentPeriodEnd),
                                          (0, eD.openUserSettings)(ep.X.SUBSCRIPTIONS_PANEL));
                                  },
                                  children:
                                      j === eE.PremiumTypes.TIER_1
                                          ? F.intl.string(F.t.lboF5O)
                                          : j === eE.PremiumTypes.TIER_0
                                            ? F.intl.string(F.t["4UPwOq"])
                                            : F.intl.string(F.t["P/VvGb"]),
                              }),
                          ],
                      });
                  case ed.kqX.BACK_TO_PREVIOUS_SCREEN:
                      return (0, i.jsx)(tS, {
                          buttonText: r.buttonText ?? F.intl.string(F.t["/g10LC"]),
                          onGoBack: r.callback,
                          onDismiss: () => nR(),
                          showCloseButton: !0,
                      });
                  case ed.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
                      return (0, i.jsx)(tl, { guildId: t, analyticsLocations: s });
                  case ed.kqX.PARENTAL_CONSENT_WARNING:
                      return (0, i.jsx)(tj, { daysRemaining: r.metadata?.daysRemaining ?? null });
                  case ed.kqX.QUARANTINED:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DANGER,
                          children: [
                              F.intl.string(F.t.DVFJYf),
                              (0, i.jsx)(A.eC, {
                                  href: nc.q,
                                  target: "_blank",
                                  noticeType: r.type,
                                  children: F.intl.string(F.t.kvHdFN),
                              }),
                              (0, i.jsx)(T.Anchor, {
                                  href: eN.A.getArticleURL(ed.MVz.QUARANTINE),
                                  target: "_blank",
                                  className: eU.yw,
                                  children: F.intl.string(F.t.hvVgAZ),
                              }),
                          ],
                      });
                  case ed.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: e_, decisionId: eA } = r.metadata;
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.WARNING,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  noticeType: ed.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      (null != t && (0, e7.wu)(t), nR(e_));
                                  },
                              }),
                              F.intl.string(F.t.B8ruyY),
                              (0, i.jsx)(A.zr, {
                                  onClick: () => {
                                      null != t &&
                                          (0, e7.W5)(t, eA, () => {
                                              (nR(e_), (0, e7.wu)(t));
                                          });
                                  },
                                  children: F.intl.string(F.t.oX14El),
                              }),
                              null != t
                                  ? (0, i.jsx)(A.zr, {
                                        onClick: () =>
                                            tf.default.open(
                                                t,
                                                ed.BEX.GUILD_AUTOMOD,
                                                void 0,
                                                ed.nd0.AUTOMOD_MENTION_SPAM,
                                            ),
                                        children: F.intl.string(F.t["1R7QIx"]),
                                    })
                                  : null,
                          ],
                      });
                  case ed.kqX.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.DANGER,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  noticeType: ed.kqX.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      r.metadata?.streamKey != null && (0, tH.lk)(r.metadata.streamKey);
                                  },
                              }),
                              F.intl.string(F.t.rOx44m),
                          ],
                      });
                  case ed.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsxs)(A.$T, {
                          color: A.Hv.BRAND,
                          children: [
                              (0, i.jsx)(A.PM, {
                                  onClick: () => {
                                      nR(r.metadata?.dismissUntil);
                                  },
                                  noticeType: ed.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                              }),
                              F.intl.string(F.t["0klLS7"]),
                              (0, i.jsx)(A.Z_, {
                                  onClick: () => {
                                      ((0, N.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("312513"),
                                              n.e("803461"),
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
                                  noticeType: ed.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: F.intl.string(F.t.e4y2VM),
                              }),
                          ],
                      });
                  case ed.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsx)(tY, {});
                  case ed.kqX.PREMIUM_MARKETING_NAGBAR:
                      return (0, i.jsx)(tb.A, {});
                  case ed.kqX.SYSTEM_SERVICE_WARNING:
                      return (0, i.jsx)(t6, {});
                  default:
                      return null;
              }
          })
        : null;
function nO() {
    let { analyticsLocations: e } = (0, v.Ay)(k.A.NOTICE);
    return (0, i.jsx)(v.f5, { value: e, children: (0, i.jsx)(nC, {}) });
}
