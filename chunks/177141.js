"use strict";
n.d(t, { f7: () => e2, Re: () => e1, Ay: () => tu, pe: () => eJ, rV: () => e0 });
var i = n(989349),
    r = n.n(i),
    s = n(877624),
    a = n(17928),
    o = n(206959),
    l = n(554146),
    u = n(506774),
    c = n(228366),
    d = n(77729),
    _ = n(573648),
    h = n(941314),
    f = n(380786),
    p = n(587895),
    E = n(145643),
    m = n(826673),
    g = n(367727),
    A = n(385163),
    I = n(487329),
    T = n(161518),
    S = n(736056),
    y = n(952818),
    C = n(617710),
    N = n(652896),
    v = n(585510),
    R = n(610136),
    O = n(229527),
    b = n(93474),
    D = n(164956),
    L = n(857071),
    w = n(869968),
    M = n(243217),
    P = n(287809),
    x = n(428262);
let k = !1;
class U extends a.Ay.Store {
    initialize() {
        this.waitFor(P.default);
    }
    static displayName = "SubscriptionRemindersStore";
    shouldShowReactivateNotice() {
        let e = P.default.getCurrentUser();
        return !(0, x.TW)(e) && k;
    }
}
let G = new U(c.h, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (null != t) {
            let e = M.A.createFromServer(t);
            if (null == (0, x.EL)(e) || e.metadata?.ended_at == null) return;
            let n = r()(e.metadata.ended_at);
            r()().isBetween(n.clone().add(4, "days"), n.clone().add(11, "days")) && (k = !0);
        }
    },
});
var F = n(380619),
    V = n(233317),
    B = n(862990),
    j = n(264779),
    H = n(374200),
    Y = n(852218),
    W = n(160394),
    K = n(859703),
    $ = n(988903),
    z = n(655116),
    q = n(105530),
    Z = n(935671),
    X = n(742023),
    Q = n(617617),
    J = n(912630),
    ee = n(499156),
    et = n(976910),
    en = n(616356),
    ei = n(495544),
    er = n(546183),
    es = n(347481),
    ea = n(734057),
    eo = n(30370);
n(321073);
var el = n(735438),
    eu = n.n(el),
    ec = n(339048),
    ed = n(830382),
    e_ = n(627363),
    eh = n(469778),
    ef = n(67480),
    ep = n(652215);
let eE = "DetectedOffPlatformPremiumPerksStore",
    em = {},
    eg = {},
    eA = [];
function eI() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of eu().values(eg)) {
        if (eA.includes(t)) continue;
        let i = p.A.getApplication(n);
        if (null == i) {
            p.A.isFetchingApplication(n) || p.A.didFetchingApplicationFail(n) || e_.Ay.fetchApplication(n);
            continue;
        }
        let r = ef.A.get(t);
        if (null == r) {
            ef.A.isFetching(t) || ef.A.didFetchingSkuFail(t) || ed.EX(i.id, t);
            continue;
        }
        eh.A.applicationIdsFetching.has(i.id) ||
        eh.A.isEntitledToSku(P.default.getCurrentUser(), t, i.id, i.id) ||
        !r.available
            ? null != em[t] && (delete em[t], (e = !0))
            : ((em[t] = { skuId: t, applicationId: n }), (e = !0));
    }
    return e;
}
class eT extends a.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        this.waitFor(p.A, eh.A, y.Ay, ef.A, P.default), (eA = u.w.get(eE) ?? eA);
    }
    getDetectedOffPlatformPremiumPerks() {
        return eu().values(em);
    }
}
let eS = new eT(c.h, {
    LOGOUT: function () {
        (em = {}), (eg = {});
    },
    SKU_FETCH_SUCCESS: eI,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eI,
    ENTITLEMENT_CREATE: eI,
    APPLICATION_FETCH_SUCCESS: eI,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete em[t], eA.includes(t))) return !1;
        eA.push(t), u.w.set(eE, eA);
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of y.Ay.getRunningGames())
            if (null != t && n !== ep.d3x.DISCORD)
                for (let { skuId: n, applicationId: i } of ep.m_i)
                    i !== t ||
                        eA.includes(n) ||
                        (null == eg[n] &&
                            (eh.A.applicationIdsFetched.has(i) ||
                                eh.A.applicationIdsFetching.has(i) ||
                                null != eh.A.getForSku(n) ||
                                ec.LM(i),
                            (eg[n] = { skuId: n, applicationId: i }),
                            (e = !0)));
        return e && eI(), e;
    },
});
var ey = n(696451),
    eC = n(317525),
    eN = n(71393),
    ev = n(941327),
    eR = n(803224),
    eO = n(576705),
    eb = n(362790),
    eD = n(763827),
    eL = n(309010),
    ew = n(967198),
    eM = n(437959),
    eP = n(351906),
    ex = n(274184),
    ek = n(870570),
    eU = n(977997),
    eG = n(295405),
    eF = n(166403),
    eV = n(354670),
    eB = n(147964),
    ej = n(488926),
    eH = n(723702),
    eY = n(19575),
    eW = n(755439),
    eK = n(422033),
    e$ = n(966846);
n(436317);
var ez = n(788868),
    eq = n(88001),
    eZ = n(190107),
    eX = n(818348),
    eQ = n(731854);
let eJ = {
        [ep.kqX.DOWNLOAD_NAG]: l.M.NAGBAR_NOTICE_DOWNLOAD,
        [ep.kqX.CONNECT_SPOTIFY]: l.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [ep.kqX.CONNECT_PLAYSTATION]: l.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [ep.kqX.PASSKEY_BACKUP]: l.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [ep.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: l.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [ep.kqX.PREMIUM_REACTIVATE]: l.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [ep.kqX.BOUNCED_EMAIL_DETECTED]: l.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [ep.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: l.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [ep.kqX.CHECKOUT_RECOVERY_NAGBAR]: l.M.CHECKOUT_RECOVERY_NAGBAR,
        [ep.kqX.QUEST_APP_UPSELL]: l.M.NAGBAR_QUEST_APP_UPSELL,
        [ep.kqX.RIOT_MIGRATION]: l.M.RIOT_CONNECTION_DEPRECATION_DISABLE,
        [ep.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: l.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
    },
    e0 = { [ep.kqX.GIFTING_PROMOTION_REMINDER]: l.M.GIFTING_PROMOTION_REMINDER },
    e1 = {
        [ep.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: l.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [ep.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: l.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [ep.kqX.RIOT_MIGRATION]: l.M.RIOT_CONNECTION_DEPRECATION,
        [ep.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: l.M.RIOT_CONNECTION_DEPRECATION_ADMIN,
    },
    e2 = { [ep.kqX.OUTBOUND_PROMOTION]: l.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    e3 = {
        [ep.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
        [ep.kqX.PREMIUM_UNCANCEL]: "hideUncancelReminder",
        [ep.kqX.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
        [ep.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
        [ep.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
        [ep.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
        [ep.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
        [ep.kqX.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
        [ep.kqX.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
        [ep.kqX.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
        [ep.kqX.WIN_COMPAT_MODE_MESSAGE]: "hideWinCompatModeNotice",
        [ep.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [ep.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [ep.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [ep.kqX.MACOS_19_DEPRECATED_MESSAGE]: "hideMacOS19DeprecationMessageNotice",
        [ep.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
        [ep.kqX.E2EE_UPDATE_REQUIRED]: "hideE2EEUpdateRequiredNotice",
    },
    e6 = new Set([
        ep.kqX.NO_INPUT_DETECTED,
        ep.kqX.NO_INPUT_DEVICES_DETECTED,
        ep.kqX.STREAMER_MODE,
        ep.kqX.VIDEO_UNSUPPORTED_BROWSER,
        ep.kqX.SPOTIFY_AUTO_PAUSED,
        ep.kqX.DISPATCH_ERROR,
        ep.kqX.DISPATCH_ERROR,
        ep.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        ep.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    ]),
    e4 = {},
    e5 = {},
    e7 = Object.freeze({ id: null, message: null, buttonText: null, callback: void 0, metadata: null }),
    e8 = null;
function e9(e) {
    return e3[e] + "-untilAtLeast";
}
function te(e, t, n) {
    if (null == e) return;
    let i = e3[e];
    (null == i || t || u.w.set(i, !0), e6.has(e) && (e4[e] = !0), null != n && null != i)
        ? u.w.set(e9(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
        : u.w.remove(e9(e));
}
let tt = null;
function tn() {
    if (null != tt) return tt;
    try {
        let e = document.createElement("canvas").getContext("2d"),
            t = "\uE700\uE701\uE702\uE703\uE704\uE705\uE706\uE707";
        e.font = "16px monospace";
        let n = e.measureText(t).width;
        (e.font = '16px "Segoe MDL2 Assets", monospace'), (tt = e.measureText(t).width !== n);
    } catch (e) {
        tt = !1;
    }
    return tt;
}
function ti(e) {
    if (null == e) return !1;
    let t = e1[e];
    if (null != t) {
        let n = (0, A.D)(e);
        return (0, g.FZ)(t, n).isDismissed;
    }
    let n = eJ[e];
    if (null != n) return (0, m.k8)(n);
    let i = e3[e];
    if (null != i) {
        let t,
            n = null != (t = u.w.get(e9(e))) ? r()(t) : null;
        if (null != n) return n?.isAfter(r()());
    }
    let s = e4[e];
    return !!s || (null != i && "" !== i ? u.w.get(i) : !!e6.has(e) && s);
}
let tr = [
    ep.kqX.QUARANTINED,
    ep.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    ep.kqX.VIEWING_ROLES,
    ep.kqX.INVITED_TO_SPEAK,
    ep.kqX.LURKING_GUILD,
    ep.kqX.VOICE_DISABLED,
    ep.kqX.NO_INPUT_DEVICES_DETECTED,
    ep.kqX.NO_INPUT_DETECTED,
    ep.kqX.VIDEO_BACKGROUND_UNAVAILABLE,
    ep.kqX.PTT_NO_KEYBIND_WARNING,
    ep.kqX.HARDWARE_MUTE,
    ep.kqX.DISPATCH_ERROR,
    ep.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    ep.kqX.SPOTIFY_AUTO_PAUSED,
    ep.kqX.WIN32_DEPRECATED_MESSAGE,
    ep.kqX.WIN7_8_DEPRECATED_MESSAGE,
    ep.kqX.WIN_COMPAT_MODE_MESSAGE,
    ep.kqX.MACOS_19_DEPRECATED_MESSAGE,
    ep.kqX.E2EE_UPDATE_REQUIRED,
    ep.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    ep.kqX.VOICE_CONNECTED_LAST_SESSION,
    ep.kqX.SYSTEM_SERVICE_WARNING,
    ep.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
    ep.kqX.GUILD_RAID_NOTIFICATION,
    ep.kqX.GIFTING_PROMOTION_REMINDER,
    ep.kqX.RIOT_MIGRATION,
    ep.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
    ep.kqX.QUESTS_PROGRESS_INTERRUPTION,
    ep.kqX.UNCLAIMED_ACCOUNT,
    ep.kqX.PENDING_MEMBER,
    ep.kqX.CHECKOUT_RECOVERY_NAGBAR,
    ep.kqX.PREMIUM_MARKETING_NAGBAR,
    ep.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
    ep.kqX.OUTBOUND_PROMOTION,
    ep.kqX.CORRUPT_INSTALLATION,
    ep.kqX.VIDEO_UNSUPPORTED_BROWSER,
    ep.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
    ep.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
    ep.kqX.STREAMER_MODE,
    ep.kqX.SCHEDULED_MAINTENANCE,
    ep.kqX.BOUNCED_EMAIL_DETECTED,
    ep.kqX.UNVERIFIED_ACCOUNT,
    ep.kqX.PREMIUM_TIER_2_TRIAL_ENDING,
    ep.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
    ep.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
    ep.kqX.PREMIUM_UNCANCEL,
    ep.kqX.PREMIUM_MISSING_PAYMENT,
    ep.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
    ep.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
    ep.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
    ep.kqX.PREMIUM_REACTIVATE,
    ep.kqX.PASSKEY_BACKUP,
    ep.kqX.APPLICATION_TEST_MODE,
    ep.kqX.QUEST_APP_UPSELL,
    ep.kqX.DOWNLOAD_NAG,
    ep.kqX.CONNECT_SPOTIFY,
    ep.kqX.CONNECT_PLAYSTATION,
    ep.kqX.SURVEY,
    ep.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
    ep.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
];
ep.kqX.QUARANTINED,
    ep.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    ep.kqX.VIEWING_ROLES,
    ep.kqX.INVITED_TO_SPEAK,
    ep.kqX.LURKING_GUILD,
    ep.kqX.VOICE_DISABLED,
    ep.kqX.NO_INPUT_DETECTED,
    ep.kqX.VIDEO_BACKGROUND_UNAVAILABLE,
    ep.kqX.HARDWARE_MUTE,
    ep.kqX.DISPATCH_ERROR,
    ep.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    ep.kqX.SPOTIFY_AUTO_PAUSED,
    ep.kqX.VOICE_CONNECTED_LAST_SESSION,
    ep.kqX.PENDING_MEMBER,
    ep.kqX.STREAMER_MODE,
    ep.kqX.SCHEDULED_MAINTENANCE;
let ts = {
    [ep.kqX.GIFTING_PROMOTION_REMINDER]: { predicate: () => (0, F.MD)() },
    [ep.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, v.dj)().show && !ti(ep.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({ dismissUntil: r()().add(3, "hours").toDate() }),
    },
    [ep.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let i = ey.Ay.getMember(n, t.id);
            return null != i && !i.isPending && (0, O.TR)(i);
        },
    },
    [ep.kqX.QUARANTINED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t.hasFlag(ep.nhx.QUARANTINED);
        },
    },
    [ep.kqX.VIEWING_ROLES]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return D.A.isViewingRoles(t);
        },
    },
    [ep.kqX.INVITED_TO_SPEAK]: {
        predicate: (e) => {
            let { voiceState: t } = e;
            return (0, q.eY)(t) === q.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        },
    },
    [ep.kqX.LURKING_GUILD]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && L.A.isLurking(t);
        },
    },
    [ep.kqX.VOICE_DISABLED]: { predicate: () => null != eD.A.getRemoteDisconnectVoiceChannelId() },
    [ep.kqX.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != eD.A.getLastSessionVoiceChannelId() },
    [ep.kqX.NO_INPUT_DETECTED]: { predicate: () => T.A.hasActiveErrorOfType(I.iy.NO_AUDIO_INPUT_DETECTED) },
    [ep.kqX.NO_INPUT_DEVICES_DETECTED]: { predicate: () => T.A.hasActiveErrorOfType(I.iy.NO_INPUT_DEVICES) },
    [ep.kqX.VIDEO_BACKGROUND_UNAVAILABLE]: { predicate: () => eD.A.isConnected() && J.A.videoBackgroundUnavailable },
    [ep.kqX.HARDWARE_MUTE]: {
        predicate: () =>
            eD.A.isConnected() &&
            ev.Ay.isHardwareMute() &&
            ev.Ay.isHardwareMuteNoticeEnabled() &&
            !X.Ay.disableHardwareMuteSilenceAlert,
        metadata: () => {
            let e = ev.Ay.getInputDeviceId(),
                t = es.A.getVendor(e),
                n = es.A.getModel(e);
            if (null != t && null != n) return { vendor: t, model: n };
        },
    },
    [ep.kqX.PTT_NO_KEYBIND_WARNING]: {
        predicate: () =>
            !!eD.A.isConnected() &&
            ev.Ay.getMode() === ep.TBI.PUSH_TO_TALK &&
            !(ev.Ay.getSettings().modeOptions.shortcut.length > 0) &&
            !!ee.A.getConfig({ location: "NoticeStore" }).showPTTNoKeybindWarning,
    },
    [ep.kqX.DISPATCH_ERROR]: {
        predicate: () => null != eW.A.getLastError(),
        metadata: () => ({ error: eW.A.getLastError() }),
    },
    [ep.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != eK.A.getLastProgress(),
        metadata: () => eK.A.getLastProgress(),
    },
    [ep.kqX.SPOTIFY_AUTO_PAUSED]: { predicate: () => z.A.wasAutoPaused() },
    [ep.kqX.UNCLAIMED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return null != t && !t.isClaimed();
        },
    },
    [ep.kqX.PENDING_MEMBER]: {
        predicate: (e) => {
            let { selectedGuildId: t, currentUser: n } = e;
            return (
                (null != t &&
                    null != n &&
                    !eN.A.getGuild(t)?.features.has(ep.GuildFeatures.GUILD_ONBOARDING) &&
                    ey.Ay.getMember(t, n.id)?.isPending) ??
                !1
            );
        },
    },
    [ep.kqX.OUTBOUND_PROMOTION]: { predicate: () => (0, j.So)() },
    [ep.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => eH.isPlatformEmbedded && (!o.A.supported() || e$.A.isCorruptInstallation()),
    },
    [ep.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t && eU.A.hasVideo(t) && !ev.Ay.supports(eQ.O5.VIDEO) && !ti(ep.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
        },
    },
    [ep.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return x.Ay.canRedeemPremiumPerks(t) && eS.getDetectedOffPlatformPremiumPerks().length > 0;
        },
        metadata: () => eS.getDetectedOffPlatformPremiumPerks()[0],
    },
    [ep.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () =>
            !ti(ep.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && eS.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => eS.getDetectedOffPlatformPremiumPerks()[0],
    },
    [ep.kqX.STREAMER_MODE]: { predicate: () => eP.A.enabled },
    [ep.kqX.DOWNLOAD_NAG]: { predicate: () => !eH.isPlatformEmbedded && !ti(ep.kqX.DOWNLOAD_NAG) },
    [ep.kqX.QUEST_APP_UPSELL]: {
        predicate: () =>
            (0, eH.isOculusWeb)() && !ti(ep.kqX.QUEST_APP_UPSELL) && W.A.getConfig({ location: "NoticeStore" }).enabled,
    },
    [ep.kqX.SCHEDULED_MAINTENANCE]: {
        predicate: () => null != eM.A.getScheduledMaintenance(),
        metadata: () => {
            let e = eM.A.getScheduledMaintenance();
            if (null != e) return { id: e.id, start: new Date(e.scheduled_for), end: new Date(e.scheduled_until) };
        },
    },
    [ep.kqX.SURVEY]: { predicate: () => null != ex.Ay.getCurrentSurvey(), metadata: () => ex.Ay.getCurrentSurvey() },
    [ep.kqX.UNVERIFIED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.email != null && !t.verified;
        },
    },
    [ep.kqX.BOUNCED_EMAIL_DETECTED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.hasBouncedEmail;
        },
    },
    [ep.kqX.CONNECT_SPOTIFY]: {
        predicate: () =>
            !z.A.hasConnectedAccount() &&
            y.Ay.isObservedAppRunning(_.A.get(ep.fg2.SPOTIFY).name) &&
            !ti(ep.kqX.CONNECT_SPOTIFY),
    },
    [ep.kqX.WIN32_DEPRECATED_MESSAGE]: {
        predicate: () => d.A?.os.arch === "ia32" && d.A?.process.platform === "win32",
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [ep.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (d.A?.process.platform === "win32")
                try {
                    if (parseInt(d.A?.os.release.split(".")[0]) >= 10) return !1;
                    return !tn();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [ep.kqX.WIN_COMPAT_MODE_MESSAGE]: {
        predicate: () => {
            if (d.A?.process.platform === "win32")
                try {
                    if (parseInt(d.A?.os.release.split(".")[0]) >= 10) return !1;
                    return tn();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [ep.kqX.MACOS_19_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (d.A?.process.platform === "darwin")
                try {
                    return 20 > parseInt(d.A?.os.release.split(".")[0]);
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [ep.kqX.CONNECT_PLAYSTATION]: {
        predicate: () =>
            eo.A.isSuggestedAccountType(ep.fg2.PLAYSTATION) &&
            null == eo.A.getAccount(null, ep.fg2.PLAYSTATION) &&
            !ti(ep.kqX.CONNECT_PLAYSTATION),
    },
    [ep.kqX.PASSKEY_BACKUP]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.mfaEnabled && et.A.hasFetchedCredentials() && !et.A.hasCredentials && !ti(ep.kqX.PASSKEY_BACKUP);
        },
    },
    [ep.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () =>
            eV.A.getAlmostExpiringTrialOffersForReminder([ez.pe.TIER_2]).length > 0 &&
            !ti(ep.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
    },
    [ep.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () =>
            eV.A.getAlmostExpiringTrialOffersForReminder([ez.pe.TIER_0]).length > 0 &&
            !ti(ep.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
    },
    [ep.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () =>
            eV.A.getAlmostExpiringDiscountOffersForReminder([ez.pe.TIER_2]).length > 0 &&
            !ti(ep.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
    },
    [ep.kqX.PREMIUM_UNCANCEL]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                s =
                    t?.canceledAt != null &&
                    t?.status === ep.Dmq.CANCELED &&
                    1 >= r()().diff(r()(t.canceledAt), "days"),
                a = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                o =
                    null != t &&
                    t.status === ep.Dmq.CANCELED &&
                    !a &&
                    i <= 7 &&
                    i >= 0 &&
                    (0, x.YE)(n, ez.PremiumTypes.TIER_2) &&
                    !s &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ti(ep.kqX.PREMIUM_UNCANCEL) && o;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                i = null != t ? (0, x.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? x.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [ep.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                s = null != t ? r()(t.currentPeriodEnd).diff(r()(t.currentPeriodStart).startOf("day"), "days") : 0,
                a = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                o = eh.A.applicationIdsFetched.has(ez.tv),
                l = eh.A.getForApplication(ez.tv),
                u = null != t ? (0, x.EL)(t) : null,
                c = null != u ? x.Ay.getSkuIdForPlan(u.planId) : null,
                d =
                    null != l &&
                    null != u &&
                    Array.from(l).filter((e) => {
                        let { skuId: t, consumed: n } = e;
                        return !n && t === c;
                    }).length > 0,
                _ =
                    null != t &&
                    i <= (s > 14 ? 7 : 2) &&
                    i >= 0 &&
                    t.status !== ep.Dmq.PAST_DUE &&
                    !a &&
                    o &&
                    !d &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ti(ep.kqX.PREMIUM_MISSING_PAYMENT) && _;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                i = null != t ? (0, x.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? x.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [ep.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && null != t.paymentSourceId ? eG.A.getPaymentSource(t.paymentSourceId) : null,
                s = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                a =
                    null != t &&
                    t.status === ep.Dmq.PAST_DUE &&
                    !s &&
                    null != i &&
                    i.invalid &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ti(ep.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [ep.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                s =
                    null != t &&
                    t.status === ep.Dmq.PAST_DUE &&
                    !i &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ti(ep.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && s;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [ep.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != eB.A.testModeApplicationId,
        metadata: () => {
            if (null == eB.A.testModeApplicationId) return {};
            let e = eB.A.testModeApplicationId,
                t = p.A.getApplication(e);
            return { applicationName: null != t ? t.name : e, applicationId: e };
        },
    },
    [ep.kqX.PREMIUM_REACTIVATE]: { predicate: () => !ti(ep.kqX.PREMIUM_REACTIVATE) && G.shouldShowReactivateNotice() },
    [ep.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                s = null != t && null != t.paymentSourceId ? eG.A.getPaymentSource(t.paymentSourceId) : null,
                a = null != s && eX.AD.has(s.type),
                o =
                    null != t &&
                    t.status === ep.Dmq.PAST_DUE &&
                    !i &&
                    a &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ti(ep.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && o;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return null == t
                ? { daysPastDue: 0, dismissUntil: r()().toDate() }
                : {
                      daysPastDue: t.status === ep.Dmq.PAST_DUE ? r()().diff(t.currentPeriodStart, "days") : 0,
                      dismissUntil: (0, x.ji)(t).expiresDate.toDate(),
                  };
        },
    },
    [ep.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e,
                n = null != t ? eN.A.getGuild(t) : null;
            return (
                (null != t &&
                    null != b.A.getMentionRaidDetected(t) &&
                    n?.features.has(ep.GuildFeatures.COMMUNITY) &&
                    !ti(ep.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
                !1
            );
        },
        metadata: (e) => {
            let { selectedGuildId: t } = e,
                n = { dismissUntil: r()().add(2, "hours").toDate() };
            if (null != t) {
                let e = b.A.getMentionRaidDetected(t);
                null != e && (n.decisionId = e.decisionId);
            }
            return n;
        },
    },
    [ep.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = en.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, N._z)(e),
                n = K.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= eZ.tZ;
        },
        metadata: () => {
            let e = en.A.getCurrentUserActiveStream();
            return { streamKey: null != e ? (0, N._z)(e) : null };
        },
    },
    [ep.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eG.A.paymentSources ?? {};
            return w.A.getIsTargeted() && !(0, x.TW)(t) && 0 !== Object.keys(n).length;
        },
    },
    [ep.kqX.PREMIUM_MARKETING_NAGBAR]: {
        predicate: () => {
            let e = H.A.getMarketingComponentByType(s.C.NAGBAR);
            if (null == e) return !1;
            if (null == e.promotionId) return !0;
            let t = H.A.getPromotionByTypeAndId(Y.pt.MARKETING_MOMENT, e.promotionId);
            return (
                !(null != t && t.endDate < new Date()) &&
                !(0, m.u$)(l.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, e.promotionId).isDismissed
            );
        },
    },
    [ep.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eF.A.getPremiumGroupSubscription();
            if (null == n) return !1;
            let i = V.A.hasFetchedMembers(),
                r = V.A.getNumAvailableInvites();
            return (0, B.ux)(t, n) && i && r >= eq.Vu;
        },
        metadata: () => ({ premiumSubscription: eF.A.getPremiumGroupSubscription() }),
    },
    [ep.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !ti(ep.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && $.Cm(),
        metadata: () => ({ dismissUntil: r()().add(180, "days").toDate(), sampleRate: 0.1 }),
    },
    [ep.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: { predicate: () => $.h6(), metadata: () => ({ sampleRate: 0.1 }) },
    [ep.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
                ti(ep.kqX.SYSTEM_SERVICE_WARNING) ||
                !(0, Z.yA)(y.Ay) ||
                null == t ||
                ev.Ay.getMode() !== ep.TBI.PUSH_TO_TALK
            )
                return !1;
            let n = y.Ay.getVisibleGame();
            return null != n && !!n.elevated;
        },
    },
    [ep.kqX.E2EE_UPDATE_REQUIRED]: {
        predicate: () => {
            if (ti(ep.kqX.E2EE_UPDATE_REQUIRED) || !eD.A.isConnected()) return !1;
            let e = ev.Ay.getMediaEngine();
            return 1 !== (e.getSupportedSecureFramesProtocolVersion?.() ?? 0);
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [ep.kqX.WINDOWS_MEDIA_PACK_REQUIRED]: {
        predicate: () =>
            !(
                !eH.isPlatformEmbedded ||
                d.A?.process.platform !== "win32" ||
                ti(ep.kqX.WINDOWS_MEDIA_PACK_REQUIRED) ||
                eY.Ay.getEnableHardwareAcceleration()
            ) && !1 === ev.Ay.isH264MfDecodeAvailable(),
    },
    [ep.kqX.RIOT_MIGRATION]: {
        predicate: () => {
            if (!(0, h.getIsRiotSocialSDKMigrationEnabled)({ location: "NoticeStore" })) return !1;
            let e = null != eo.A.getAccount(null, ep.fg2.RIOT_GAMES),
                t = null != eo.A.getAccount(null, ep.fg2.LEAGUE_OF_LEGENDS);
            if (ti(ep.kqX.RIOT_MIGRATION) || (0, m.k8)(l.M.RIOT_CONNECTION_DEPRECATION_DISABLE) || (!e && !t))
                return !1;
            let n = _.A.get(ep.fg2.LEAGUE_OF_LEGENDS),
                i = _.A.get(ep.fg2.RIOT_GAMES);
            return null != n.replacedBy && null != i.replacedBy;
        },
    },
    [ep.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (
                !(0, h.getIsRiotSocialSDKMigrationEnabled)({ location: "NoticeStore" }) ||
                ti(ep.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN) ||
                (0, m.k8)(l.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE)
            )
                return !1;
            let i = null != n ? eN.A.getGuild(n) : null,
                r = (0, ej.$3)({ permission: ep.xBc.ADMINISTRATOR, user: t, context: i }),
                s = null != i ? eC.A.getSortedRoles(i.id).filter((e) => null === e.tags.guild_connections) : null;
            return null != i && !!r && null != s && !!(0, f.D)(s);
        },
    },
};
function ta() {
    if (!C.A.isConnected()) return !1;
    e8 = null;
    let e = P.default.getCurrentUser();
    if (null == e) return !1;
    let t = eF.A.getPremiumSubscription(),
        n = ew.A.getGuildId(),
        i = eL.A.getVoiceChannelId(),
        r = null != i ? eU.A.getVoiceStateForChannel(i) : null;
    for (let s of tr)
        if (
            null != ts[s] &&
            ts[s].predicate({
                selectedGuildId: n,
                voiceChannelId: i,
                voiceState: r,
                currentUser: e,
                premiumSubscription: t,
            })
        ) {
            let i = ts[s].metadata?.({ currentUser: e, premiumSubscription: t, selectedGuildId: n });
            e8 = { ...e7, type: s, metadata: i };
            break;
        }
    if (null != e8) {
        e8.metadata?.sampleRate != null &&
            null == e5[e8.type] &&
            (e5[e8.type] = Math.random() <= e8.metadata.sampleRate);
        let e = !1 === e5[e8.type];
        (ti(e8.type) || e) && (e8 = null);
    }
}
function to() {
    return eP.A.enabled || delete e4[ep.kqX.STREAMER_MODE], ta();
}
class tl extends a.Ay.Store {
    static displayName = "NoticeStore";
    initialize() {
        this.syncWith(
            [T.A, ex.Ay, eb.A, eS, ew.A, H.A, eV.A, er.default, eo.A, Q.A, R.A, K.A, en.A, y.Ay, et.A, T.A, E.A],
            ta,
        ),
            this.waitFor(
                T.A,
                p.A,
                en.A,
                ei.default,
                er.default,
                es.A,
                ea.A,
                w.A,
                eo.A,
                eS,
                eW.A,
                eK.A,
                e$.A,
                eh.A,
                S.A,
                C.A,
                b.A,
                R.A,
                ey.Ay,
                E.A,
                eC.A,
                eN.A,
                D.A,
                L.A,
                ev.Ay,
                eR.A,
                eG.A,
                eO.A,
                V.A,
                eb.A,
                H.A,
                K.A,
                eD.A,
                y.Ay,
                eL.A,
                ew.A,
                z.A,
                eM.A,
                eP.A,
                G,
                eF.A,
                ex.Ay,
                eB.A,
                X.Ay,
                eV.A,
                ek.A,
                Q.A,
                P.default,
                J.A,
                eU.A,
                et.A,
            );
    }
    hasNotice() {
        return null != e8 && null != e8.type;
    }
    getNotice() {
        return null == ek.A.getAction() ? e8 : null;
    }
    isNoticeDismissed(e) {
        return ti(e);
    }
}
let tu = new tl(c.h, {
    CURRENT_USER_UPDATE: ta,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: ta,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: ta,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: ta,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: ta,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: ta,
    GUILD_CREATE: ta,
    GUILD_DELETE: ta,
    AUDIO_INPUT_DETECTED: ta,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: ta,
    CERTIFIED_DEVICES_SET: ta,
    AUDIO_SET_INPUT_DEVICE: ta,
    AUDIO_SET_OUTPUT_DEVICE: ta,
    MEDIA_ENGINE_DEVICES: ta,
    RTC_CONNECTION_STATE: ta,
    RPC_APP_AUTHENTICATED: ta,
    RPC_APP_DISCONNECTED: ta,
    USER_CONNECTIONS_UPDATE: ta,
    WINDOW_FOCUS: ta,
    INSTANT_INVITE_CREATE: ta,
    INSTANT_INVITE_REVOKE_SUCCESS: ta,
    SPOTIFY_PLAYER_PAUSE: ta,
    RUNNING_GAMES_CHANGE: ta,
    EXPERIMENTS_FETCH_SUCCESS: ta,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: ta,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: ta,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: ta,
    DEVELOPER_TEST_MODE_RESET: ta,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: ta,
    DISPATCH_APPLICATION_INSTALL: ta,
    IMPERSONATE_STOP: ta,
    IMPERSONATE_UPDATE: ta,
    GUILD_MEMBER_ADD: function (e) {
        return e.user.id === ei.default.getId() && ta();
    },
    GUILD_MEMBER_UPDATE: ta,
    SURVEY_FETCHED: ta,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: ta,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: ta,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: ta,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: ta,
    UNSYNCED_USER_SETTINGS_UPDATE: ta,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return (
            (e8?.type === ep.kqX.INVITED_TO_SPEAK ||
                t.some((e) => {
                    let { userId: t } = e;
                    return t !== ei.default.getId();
                })) &&
            ta()
        );
    },
    STREAMER_MODE_UPDATE: to,
    RUNNING_STREAMER_TOOLS_CHANGE: to,
    DISPATCH_APPLICATION_ERROR: function () {
        return delete e4[ep.kqX.DISPATCH_ERROR], ta();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return delete e4[ep.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], ta();
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return ta();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return ta();
    },
    NOTICE_SHOW: function (e) {
        e8 = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != e8 && (null == e.id || e.id === e8.id) && (te(e8.type, e.isTemporary, e.untilAtLeast), ta());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return te(t), ta();
    },
    LOGOUT: function () {
        (e4 = {}), (e5 = {}), (e8 = null);
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: ta,
    AUTO_MODERATION_MENTION_RAID_DETECTION: ta,
    REPORT_AV_ERROR: ta,
    ACTIVE_AV_ERRORS_CHANGED: ta,
    MEDIA_ENGINE_MF_AVAILABILITY_CHECKED: ta,
    AUDIO_SET_MODE: ta,
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: ta,
});
