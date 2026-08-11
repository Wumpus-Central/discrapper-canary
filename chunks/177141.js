"use strict";
n.d(t, { f7: () => e2, Re: () => e1, Ay: () => td, pe: () => eJ, rV: () => e0 });
var i = n(989349),
    r = n.n(i),
    a = n(877624),
    s = n(17928),
    l = n(206959),
    o = n(554146),
    d = n(506774),
    c = n(228366),
    u = n(77729),
    _ = n(573648),
    E = n(472636),
    A = n(521790),
    h = n(587895),
    I = n(145643),
    f = n(826673),
    p = n(367727),
    T = n(532205),
    m = n(487329),
    g = n(161518),
    S = n(736056),
    N = n(952818),
    C = n(617710),
    O = n(652896),
    R = n(585510),
    L = n(610136),
    D = n(229527),
    y = n(93474),
    v = n(164956),
    b = n(857071),
    M = n(733110),
    P = n(577517),
    U = n(748209),
    w = n(869968),
    G = n(243217),
    x = n(287809),
    k = n(158045);
let F = !1;
class V extends s.Ay.Store {
    initialize() {
        this.waitFor(x.default);
    }
    static displayName = "SubscriptionRemindersStore";
    shouldShowReactivateNotice() {
        let e = x.default.getCurrentUser();
        return !(0, k.TW)(e) && F;
    }
}
let B = new V(c.h, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (null != t) {
            let e = G.A.createFromServer(t);
            if (null == (0, k.EL)(e) || e.metadata?.ended_at == null) return;
            let n = r()(e.metadata.ended_at);
            r()().isBetween(n.clone().add(4, "days"), n.clone().add(11, "days")) && (F = !0);
        }
    },
});
var H = n(380619),
    j = n(233317),
    W = n(862990),
    Y = n(264779),
    K = n(528464),
    $ = n(852218),
    z = n(859703),
    q = n(988903),
    Z = n(655116),
    X = n(105530),
    Q = n(935671),
    J = n(742023),
    ee = n(617617),
    et = n(912630),
    en = n(499156),
    ei = n(976910),
    er = n(616356),
    ea = n(280450),
    es = n(347481),
    el = n(734057),
    eo = n(30370);
n(321073);
var ed = n(435558),
    ec = n.n(ed),
    eu = n(339048),
    e_ = n(830382),
    eE = n(627363),
    eA = n(469778),
    eh = n(67480),
    eI = n(652215);
let ef = "DetectedOffPlatformPremiumPerksStore",
    ep = {},
    eT = {},
    em = [];
function eg() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of ec().values(eT)) {
        if (em.includes(t)) continue;
        let i = h.A.getApplication(n);
        if (null == i) {
            h.A.isFetchingApplication(n) || h.A.didFetchingApplicationFail(n) || eE.Ay.fetchApplication(n);
            continue;
        }
        let r = eh.A.get(t);
        if (null == r) {
            eh.A.isFetching(t) || eh.A.didFetchingSkuFail(t) || e_.EX(i.id, t);
            continue;
        }
        eA.A.applicationIdsFetching.has(i.id) ||
        eA.A.isEntitledToSku(x.default.getCurrentUser(), t, i.id, i.id) ||
        !r.available
            ? null != ep[t] && (delete ep[t], (e = !0))
            : ((ep[t] = { skuId: t, applicationId: n }), (e = !0));
    }
    return e;
}
class eS extends s.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        this.waitFor(h.A, eA.A, N.Ay, eh.A, x.default), (em = d.w.get(ef) ?? em);
    }
    getDetectedOffPlatformPremiumPerks() {
        return ec().values(ep);
    }
}
let eN = new eS(c.h, {
    LOGOUT: function () {
        (ep = {}), (eT = {});
    },
    SKU_FETCH_SUCCESS: eg,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eg,
    ENTITLEMENT_CREATE: eg,
    APPLICATION_FETCH_SUCCESS: eg,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete ep[t], em.includes(t))) return !1;
        em.push(t), d.w.set(ef, em);
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of N.Ay.getRunningGames())
            if (null != t && n !== eI.d3x.DISCORD)
                for (let { skuId: n, applicationId: i } of eI.m_i)
                    i !== t ||
                        em.includes(n) ||
                        (null == eT[n] &&
                            (eA.A.applicationIdsFetched.has(i) ||
                                eA.A.applicationIdsFetching.has(i) ||
                                null != eA.A.getForSku(n) ||
                                eu.LM(i),
                            (eT[n] = { skuId: n, applicationId: i }),
                            (e = !0)));
        return e && eg(), e;
    },
});
var eC = n(696451),
    eO = n(317525),
    eR = n(71393),
    eL = n(749983),
    eD = n(803224),
    ey = n(576705),
    ev = n(362790),
    eb = n(763827),
    eM = n(309010),
    eP = n(967198),
    eU = n(437959),
    ew = n(351906),
    eG = n(274184),
    ex = n(870570),
    ek = n(977997),
    eF = n(295405),
    eV = n(166403),
    eB = n(354670),
    eH = n(147964),
    ej = n(723702),
    eW = n(19575),
    eY = n(755439),
    eK = n(422033),
    e$ = n(966846);
n(436317);
var ez = n(202541),
    eq = n(88001),
    eZ = n(190107),
    eX = n(818348),
    eQ = n(731854);
let eJ = {
        [eI.kqX.DOWNLOAD_NAG]: o.M.NAGBAR_NOTICE_DOWNLOAD,
        [eI.kqX.CONNECT_SPOTIFY]: o.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eI.kqX.CONNECT_PLAYSTATION]: o.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eI.kqX.PASSKEY_BACKUP]: o.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [eI.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eI.kqX.PREMIUM_REACTIVATE]: o.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eI.kqX.BOUNCED_EMAIL_DETECTED]: o.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eI.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eI.kqX.CHECKOUT_RECOVERY_NAGBAR]: o.M.CHECKOUT_RECOVERY_NAGBAR,
        [eI.kqX.QUEST_APP_UPSELL]: o.M.NAGBAR_QUEST_APP_UPSELL,
        [eI.kqX.RIOT_MIGRATION]: o.M.RIOT_CONNECTION_DEPRECATION_DISABLE,
        [eI.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
        [eI.kqX.BATTLENET_MIGRATION]: o.M.BATTLENET_CONNECTION_DEPRECATION_DISABLE,
        [eI.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: o.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES_DISABLE,
    },
    e0 = { [eI.kqX.GIFTING_PROMOTION_REMINDER]: o.M.GIFTING_PROMOTION_REMINDER },
    e1 = {
        [eI.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eI.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: o.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eI.kqX.RIOT_MIGRATION]: o.M.RIOT_CONNECTION_DEPRECATION,
        [eI.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: o.M.RIOT_CONNECTION_DEPRECATION_ADMIN,
        [eI.kqX.BATTLENET_MIGRATION]: o.M.BATTLENET_CONNECTION_DEPRECATION,
        [eI.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: o.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES,
    },
    e2 = { [eI.kqX.OUTBOUND_PROMOTION]: o.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    e3 = {
        [eI.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
        [eI.kqX.PREMIUM_UNCANCEL]: "hideUncancelReminder",
        [eI.kqX.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
        [eI.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
        [eI.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
        [eI.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
        [eI.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
        [eI.kqX.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
        [eI.kqX.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
        [eI.kqX.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
        [eI.kqX.WIN_COMPAT_MODE_MESSAGE]: "hideWinCompatModeNotice",
        [eI.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [eI.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [eI.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [eI.kqX.MACOS_DEPRECATED_MESSAGE]: "hideMacOSDeprecationMessageNotice",
        [eI.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
        [eI.kqX.E2EE_UPDATE_REQUIRED]: "hideE2EEUpdateRequiredNotice",
    },
    e4 = new Set([
        eI.kqX.NO_INPUT_DETECTED,
        eI.kqX.NO_INPUT_DEVICES_DETECTED,
        eI.kqX.STREAMER_MODE,
        eI.kqX.VIDEO_UNSUPPORTED_BROWSER,
        eI.kqX.SPOTIFY_AUTO_PAUSED,
        eI.kqX.DISPATCH_ERROR,
        eI.kqX.DISPATCH_ERROR,
        eI.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eI.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    ]),
    e5 = {},
    e6 = {},
    e7 = Object.freeze({ id: null, message: null, buttonText: null, callback: void 0, metadata: null }),
    e8 = null;
function e9(e) {
    return e3[e] + "-untilAtLeast";
}
function te(e, t, n) {
    if (null == e) return;
    let i = e3[e];
    (null == i || t || d.w.set(i, !0), e4.has(e) && (e5[e] = !0), null != n && null != i)
        ? d.w.set(e9(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
        : d.w.remove(e9(e));
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
        let n = (0, T.D)(e);
        return (0, p.FZ)(t, n).isDismissed;
    }
    let n = eJ[e];
    if (null != n) return (0, f.k8)(n);
    let i = e3[e];
    if (null != i) {
        let t,
            n = null != (t = d.w.get(e9(e))) ? r()(t) : null;
        if (null != n) return n?.isAfter(r()());
    }
    let a = e5[e];
    return !!a || (null != i && "" !== i ? d.w.get(i) : !!e4.has(e) && a);
}
let tr = [
    eI.kqX.QUARANTINED,
    eI.kqX.PARENTAL_CONSENT_WARNING,
    eI.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eI.kqX.VIEWING_ROLES,
    eI.kqX.INVITED_TO_SPEAK,
    eI.kqX.LURKING_GUILD,
    eI.kqX.VOICE_DISABLED,
    eI.kqX.NO_INPUT_DEVICES_DETECTED,
    eI.kqX.NO_INPUT_DETECTED,
    eI.kqX.VIDEO_BACKGROUND_UNAVAILABLE,
    eI.kqX.PTT_NO_KEYBIND_WARNING,
    eI.kqX.HARDWARE_MUTE,
    eI.kqX.DISPATCH_ERROR,
    eI.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eI.kqX.SPOTIFY_AUTO_PAUSED,
    eI.kqX.WIN32_DEPRECATED_MESSAGE,
    eI.kqX.WIN7_8_DEPRECATED_MESSAGE,
    eI.kqX.WIN_COMPAT_MODE_MESSAGE,
    eI.kqX.MACOS_DEPRECATED_MESSAGE,
    eI.kqX.E2EE_UPDATE_REQUIRED,
    eI.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    eI.kqX.VOICE_CONNECTED_LAST_SESSION,
    eI.kqX.SYSTEM_SERVICE_WARNING,
    eI.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
    eI.kqX.GUILD_RAID_NOTIFICATION,
    eI.kqX.BATTLENET_MIGRATION,
    eI.kqX.BATTLENET_LINKED_ROLE_DEPRECATION,
    eI.kqX.GIFTING_PROMOTION_REMINDER,
    eI.kqX.RIOT_MIGRATION,
    eI.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
    eI.kqX.QUESTS_PROGRESS_INTERRUPTION,
    eI.kqX.UNCLAIMED_ACCOUNT,
    eI.kqX.PENDING_MEMBER,
    eI.kqX.CHECKOUT_RECOVERY_NAGBAR,
    eI.kqX.PREMIUM_MARKETING_NAGBAR,
    eI.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
    eI.kqX.OUTBOUND_PROMOTION,
    eI.kqX.CORRUPT_INSTALLATION,
    eI.kqX.VIDEO_UNSUPPORTED_BROWSER,
    eI.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
    eI.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
    eI.kqX.STREAMER_MODE,
    eI.kqX.SCHEDULED_MAINTENANCE,
    eI.kqX.BOUNCED_EMAIL_DETECTED,
    eI.kqX.UNVERIFIED_ACCOUNT,
    eI.kqX.PREMIUM_TIER_2_TRIAL_ENDING,
    eI.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
    eI.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
    eI.kqX.PREMIUM_UNCANCEL,
    eI.kqX.PREMIUM_MISSING_PAYMENT,
    eI.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
    eI.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
    eI.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
    eI.kqX.PREMIUM_REACTIVATE,
    eI.kqX.PASSKEY_BACKUP,
    eI.kqX.APPLICATION_TEST_MODE,
    eI.kqX.QUEST_APP_UPSELL,
    eI.kqX.DOWNLOAD_NAG,
    eI.kqX.CONNECT_SPOTIFY,
    eI.kqX.CONNECT_PLAYSTATION,
    eI.kqX.SURVEY,
    eI.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
    eI.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
];
eI.kqX.QUARANTINED,
    eI.kqX.PARENTAL_CONSENT_WARNING,
    eI.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eI.kqX.VIEWING_ROLES,
    eI.kqX.INVITED_TO_SPEAK,
    eI.kqX.LURKING_GUILD,
    eI.kqX.VOICE_DISABLED,
    eI.kqX.NO_INPUT_DETECTED,
    eI.kqX.VIDEO_BACKGROUND_UNAVAILABLE,
    eI.kqX.HARDWARE_MUTE,
    eI.kqX.DISPATCH_ERROR,
    eI.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eI.kqX.SPOTIFY_AUTO_PAUSED,
    eI.kqX.VOICE_CONNECTED_LAST_SESSION,
    eI.kqX.PENDING_MEMBER,
    eI.kqX.STREAMER_MODE,
    eI.kqX.SCHEDULED_MAINTENANCE;
let ta = {
    [eI.kqX.GIFTING_PROMOTION_REMINDER]: { predicate: () => (0, H.MD)() },
    [eI.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, R.dj)().show && !ti(eI.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({ dismissUntil: r()().add(3, "hours").toDate() }),
    },
    [eI.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let i = eC.Ay.getMember(n, t.id);
            return null != i && !i.isPending && (0, D.TR)(i);
        },
    },
    [eI.kqX.QUARANTINED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t.hasFlag(eI.nhx.QUARANTINED);
        },
    },
    [eI.kqX.PARENTAL_CONSENT_WARNING]: {
        predicate: () => {
            let e = P.A.getWarning();
            return e?.surfaces?.includes(U.x.BANNER) === !0 && null != e.daysRemaining && e.daysRemaining >= 0;
        },
        metadata: () => ({ daysRemaining: P.A.getWarning()?.daysRemaining ?? null }),
    },
    [eI.kqX.VIEWING_ROLES]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return v.A.isViewingRoles(t);
        },
    },
    [eI.kqX.INVITED_TO_SPEAK]: {
        predicate: (e) => {
            let { voiceState: t } = e;
            return (0, X.eY)(t) === X.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        },
    },
    [eI.kqX.LURKING_GUILD]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && b.A.isLurking(t);
        },
    },
    [eI.kqX.VOICE_DISABLED]: { predicate: () => null != eb.A.getRemoteDisconnectVoiceChannelId() },
    [eI.kqX.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != eb.A.getLastSessionVoiceChannelId() },
    [eI.kqX.NO_INPUT_DETECTED]: { predicate: () => g.A.hasActiveErrorOfType(m.iy.NO_AUDIO_INPUT_DETECTED) },
    [eI.kqX.NO_INPUT_DEVICES_DETECTED]: { predicate: () => g.A.hasActiveErrorOfType(m.iy.NO_INPUT_DEVICES) },
    [eI.kqX.VIDEO_BACKGROUND_UNAVAILABLE]: { predicate: () => eb.A.isConnected() && et.A.videoBackgroundUnavailable },
    [eI.kqX.HARDWARE_MUTE]: {
        predicate: () =>
            eb.A.isConnected() &&
            eL.Ay.isHardwareMute() &&
            eL.Ay.isHardwareMuteNoticeEnabled() &&
            !J.Ay.disableHardwareMuteSilenceAlert,
        metadata: () => {
            let e = eL.Ay.getInputDeviceId(),
                t = es.A.getVendor(e),
                n = es.A.getModel(e);
            if (null != t && null != n) return { vendor: t, model: n };
        },
    },
    [eI.kqX.PTT_NO_KEYBIND_WARNING]: {
        predicate: () =>
            !!eb.A.isConnected() &&
            eL.Ay.getMode() === eI.TBI.PUSH_TO_TALK &&
            !(eL.Ay.getSettings().modeOptions.shortcut.length > 0) &&
            !!en.A.getConfig({ location: "NoticeStore" }).showPTTNoKeybindWarning,
    },
    [eI.kqX.DISPATCH_ERROR]: {
        predicate: () => null != eY.A.getLastError(),
        metadata: () => ({ error: eY.A.getLastError() }),
    },
    [eI.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != eK.A.getLastProgress(),
        metadata: () => eK.A.getLastProgress(),
    },
    [eI.kqX.SPOTIFY_AUTO_PAUSED]: { predicate: () => Z.A.wasAutoPaused() },
    [eI.kqX.UNCLAIMED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return null != t && !t.isClaimed();
        },
    },
    [eI.kqX.PENDING_MEMBER]: {
        predicate: (e) => {
            let { selectedGuildId: t, currentUser: n } = e;
            return (
                (null != t &&
                    null != n &&
                    !eR.A.getGuild(t)?.features.has(eI.GuildFeatures.GUILD_ONBOARDING) &&
                    eC.Ay.getMember(t, n.id)?.isPending) ??
                !1
            );
        },
    },
    [eI.kqX.OUTBOUND_PROMOTION]: { predicate: () => (0, Y.So)() },
    [eI.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => ej.isPlatformEmbedded && (!l.A.supported() || e$.A.isCorruptInstallation()),
    },
    [eI.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t && ek.A.hasVideo(t) && !eL.Ay.supports(eQ.O5.VIDEO) && !ti(eI.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
        },
    },
    [eI.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return k.Ay.canRedeemPremiumPerks(t) && eN.getDetectedOffPlatformPremiumPerks().length > 0;
        },
        metadata: () => eN.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eI.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () =>
            !ti(eI.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && eN.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => eN.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eI.kqX.STREAMER_MODE]: { predicate: () => ew.A.enabled },
    [eI.kqX.DOWNLOAD_NAG]: { predicate: () => !ej.isPlatformEmbedded && !ti(eI.kqX.DOWNLOAD_NAG) },
    [eI.kqX.QUEST_APP_UPSELL]: { predicate: () => (0, ej.isOculusWeb)() && !ti(eI.kqX.QUEST_APP_UPSELL) },
    [eI.kqX.SCHEDULED_MAINTENANCE]: {
        predicate: () => null != eU.A.getScheduledMaintenance(),
        metadata: () => {
            let e = eU.A.getScheduledMaintenance();
            if (null != e) return { id: e.id, start: new Date(e.scheduled_for), end: new Date(e.scheduled_until) };
        },
    },
    [eI.kqX.SURVEY]: { predicate: () => null != eG.Ay.getCurrentSurvey(), metadata: () => eG.Ay.getCurrentSurvey() },
    [eI.kqX.UNVERIFIED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.email != null && !t.verified;
        },
    },
    [eI.kqX.BOUNCED_EMAIL_DETECTED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.hasBouncedEmail;
        },
    },
    [eI.kqX.CONNECT_SPOTIFY]: {
        predicate: () =>
            !Z.A.hasConnectedAccount() &&
            N.Ay.isObservedAppRunning(_.A.get(eI.fg2.SPOTIFY).name) &&
            !ti(eI.kqX.CONNECT_SPOTIFY),
    },
    [eI.kqX.WIN32_DEPRECATED_MESSAGE]: {
        predicate: () => u.A?.os.arch === "ia32" && u.A?.process.platform === "win32",
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eI.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (u.A?.process.platform === "win32")
                try {
                    if (parseInt(u.A?.os.release.split(".")[0]) >= 10) return !1;
                    return !tn();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eI.kqX.WIN_COMPAT_MODE_MESSAGE]: {
        predicate: () => {
            if (u.A?.process.platform === "win32")
                try {
                    if (parseInt(u.A?.os.release.split(".")[0]) >= 10) return !1;
                    return tn();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eI.kqX.MACOS_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (u.A?.process.platform === "darwin")
                try {
                    return 21 > parseInt(u.A?.os.release.split(".")[0]);
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eI.kqX.CONNECT_PLAYSTATION]: {
        predicate: () =>
            eo.A.isSuggestedAccountType(eI.fg2.PLAYSTATION) &&
            null == eo.A.getAccount(null, eI.fg2.PLAYSTATION) &&
            !ti(eI.kqX.CONNECT_PLAYSTATION),
    },
    [eI.kqX.PASSKEY_BACKUP]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.mfaEnabled && ei.A.hasFetchedCredentials() && !ei.A.hasCredentials && !ti(eI.kqX.PASSKEY_BACKUP);
        },
    },
    [eI.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () =>
            eB.A.getAlmostExpiringTrialOffersForReminder([ez.pe.TIER_2]).length > 0 &&
            !ti(eI.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
    },
    [eI.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () =>
            eB.A.getAlmostExpiringTrialOffersForReminder([ez.pe.TIER_0]).length > 0 &&
            !ti(eI.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
    },
    [eI.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () =>
            eB.A.getAlmostExpiringDiscountOffersForReminder([ez.pe.TIER_2]).length > 0 &&
            !ti(eI.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
    },
    [eI.kqX.PREMIUM_UNCANCEL]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                a =
                    t?.canceledAt != null &&
                    t?.status === eI.Dmq.CANCELED &&
                    1 >= r()().diff(r()(t.canceledAt), "days"),
                s = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                l =
                    null != t &&
                    t.status === eI.Dmq.CANCELED &&
                    !s &&
                    i <= 7 &&
                    i >= 0 &&
                    (0, k.YE)(n, ez.PremiumTypes.TIER_2) &&
                    !a &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ti(eI.kqX.PREMIUM_UNCANCEL) && l;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                i = null != t ? (0, k.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? k.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eI.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                a = null != t ? r()(t.currentPeriodEnd).diff(r()(t.currentPeriodStart).startOf("day"), "days") : 0,
                s = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                l = eA.A.applicationIdsFetched.has(ez.tv),
                o = eA.A.getForApplication(ez.tv),
                d = null != t ? (0, k.EL)(t) : null,
                c = null != d ? k.Ay.getSkuIdForPlan(d.planId) : null,
                u =
                    null != o &&
                    null != d &&
                    Array.from(o).filter((e) => {
                        let { skuId: t, consumed: n } = e;
                        return !n && t === c;
                    }).length > 0,
                _ =
                    null != t &&
                    i <= (a > 14 ? 7 : 2) &&
                    i >= 0 &&
                    t.status !== eI.Dmq.PAST_DUE &&
                    !s &&
                    l &&
                    !u &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ti(eI.kqX.PREMIUM_MISSING_PAYMENT) && _;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                i = null != t ? (0, k.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? k.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eI.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && null != t.paymentSourceId ? eF.A.getPaymentSource(t.paymentSourceId) : null,
                a = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                s =
                    null != t &&
                    t.status === eI.Dmq.PAST_DUE &&
                    !a &&
                    null != i &&
                    i.invalid &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ti(eI.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eI.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                a =
                    null != t &&
                    t.status === eI.Dmq.PAST_DUE &&
                    !i &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ti(eI.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eI.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != eH.A.testModeApplicationId,
        metadata: () => {
            if (null == eH.A.testModeApplicationId) return {};
            let e = eH.A.testModeApplicationId,
                t = h.A.getApplication(e);
            return { applicationName: null != t ? t.name : e, applicationId: e };
        },
    },
    [eI.kqX.PREMIUM_REACTIVATE]: { predicate: () => !ti(eI.kqX.PREMIUM_REACTIVATE) && B.shouldShowReactivateNotice() },
    [eI.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                a = null != t && null != t.paymentSourceId ? eF.A.getPaymentSource(t.paymentSourceId) : null,
                s = null != a && eX.AD.has(a.type),
                l =
                    null != t &&
                    t.status === eI.Dmq.PAST_DUE &&
                    !i &&
                    s &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ti(eI.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && l;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return null == t
                ? { daysPastDue: 0, dismissUntil: r()().toDate() }
                : {
                      daysPastDue: t.status === eI.Dmq.PAST_DUE ? r()().diff(t.currentPeriodStart, "days") : 0,
                      dismissUntil: (0, k.ji)(t).expiresDate.toDate(),
                  };
        },
    },
    [eI.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e,
                n = null != t ? eR.A.getGuild(t) : null;
            return (
                (null != t &&
                    null != y.A.getMentionRaidDetected(t) &&
                    n?.features.has(eI.GuildFeatures.COMMUNITY) &&
                    !ti(eI.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
                !1
            );
        },
        metadata: (e) => {
            let { selectedGuildId: t } = e,
                n = { dismissUntil: r()().add(2, "hours").toDate() };
            if (null != t) {
                let e = y.A.getMentionRaidDetected(t);
                null != e && (n.decisionId = e.decisionId);
            }
            return n;
        },
    },
    [eI.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = er.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, O._z)(e),
                n = z.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= eZ.tZ;
        },
        metadata: () => {
            let e = er.A.getCurrentUserActiveStream();
            return { streamKey: null != e ? (0, O._z)(e) : null };
        },
    },
    [eI.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eF.A.paymentSources ?? {};
            return w.A.getIsTargeted() && !(0, k.TW)(t) && 0 !== Object.keys(n).length;
        },
    },
    [eI.kqX.PREMIUM_MARKETING_NAGBAR]: {
        predicate: () => {
            let e = K.A.getMarketingComponentByType(a.C.NAGBAR);
            if (null == e) return !1;
            if (null == e.promotionId) return !0;
            let t = K.A.getPromotionByTypeAndId($.pt.MARKETING_MOMENT, e.promotionId);
            return (
                !(null != t && t.endDate < new Date()) &&
                !(0, f.u$)(o.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, e.promotionId).isDismissed
            );
        },
    },
    [eI.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eV.A.getPremiumGroupSubscription();
            if (null == n) return !1;
            let i = j.A.hasFetchedMembers(),
                r = j.A.getNumAvailableInvites();
            return (0, W.ux)(t, n) && i && r >= eq.Vu;
        },
        metadata: () => ({ premiumSubscription: eV.A.getPremiumGroupSubscription() }),
    },
    [eI.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !ti(eI.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && q.Cm(),
        metadata: () => ({ dismissUntil: r()().add(180, "days").toDate(), sampleRate: 0.1 }),
    },
    [eI.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: { predicate: () => q.h6(), metadata: () => ({ sampleRate: 0.1 }) },
    [eI.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
                ti(eI.kqX.SYSTEM_SERVICE_WARNING) ||
                !(0, Q.yA)(N.Ay) ||
                null == t ||
                eL.Ay.getMode() !== eI.TBI.PUSH_TO_TALK
            )
                return !1;
            let n = N.Ay.getVisibleGame();
            return null != n && !!n.elevated;
        },
    },
    [eI.kqX.E2EE_UPDATE_REQUIRED]: {
        predicate: () => {
            if (ti(eI.kqX.E2EE_UPDATE_REQUIRED) || !eb.A.isConnected()) return !1;
            let e = eL.Ay.getMediaEngine();
            return 1 !== (e.getSupportedSecureFramesProtocolVersion?.() ?? 0);
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eI.kqX.WINDOWS_MEDIA_PACK_REQUIRED]: {
        predicate: () =>
            !(
                !ej.isPlatformEmbedded ||
                u.A?.process.platform !== "win32" ||
                ti(eI.kqX.WINDOWS_MEDIA_PACK_REQUIRED) ||
                eW.Ay.getEnableHardwareAcceleration()
            ) && !1 === eL.Ay.isH264MfDecodeAvailable(),
    },
    [eI.kqX.RIOT_MIGRATION]: {
        predicate: () => {
            if (!(0, E.NX)({ location: "NoticeStore" })) return !1;
            let e = null != eo.A.getAccount(null, eI.fg2.RIOT_GAMES),
                t = null != eo.A.getAccount(null, eI.fg2.LEAGUE_OF_LEGENDS);
            if (ti(eI.kqX.RIOT_MIGRATION) || (0, f.k8)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE) || (!e && !t))
                return !1;
            let n = _.A.get(eI.fg2.LEAGUE_OF_LEGENDS),
                i = _.A.get(eI.fg2.RIOT_GAMES);
            return null != n.migrationData && null != i.migrationData;
        },
    },
    [eI.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            return (0, A.Jz)({
                currentUser: t,
                selectedGuildId: n,
                platformTypes: [eI.fg2.RIOT_GAMES, eI.fg2.LEAGUE_OF_LEGENDS],
                dismissibleContent: o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
                noticeType: eI.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
            });
        },
    },
    [eI.kqX.BATTLENET_MIGRATION]: {
        predicate: () => {
            let e = _.A.get(eI.fg2.BATTLENET);
            return !(
                !e.migrationData?.getMigrationExperimentEnabled("NoticeStore") ||
                null == eo.A.getAccount(null, eI.fg2.BATTLENET) ||
                ti(eI.kqX.BATTLENET_MIGRATION) ||
                (0, f.k8)(o.M.BATTLENET_CONNECTION_DEPRECATION_DISABLE)
            );
        },
    },
    [eI.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            return (0, A.Jz)({
                currentUser: t,
                selectedGuildId: n,
                platformTypes: [eI.fg2.BATTLENET],
                dismissibleContent: o.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES_DISABLE,
                noticeType: eI.kqX.BATTLENET_LINKED_ROLE_DEPRECATION,
            });
        },
    },
};
function ts() {
    if (!C.A.isConnected()) return !1;
    e8 = null;
    let e = x.default.getCurrentUser();
    if (null == e) return !1;
    let t = eV.A.getPremiumSubscription(),
        n = eP.A.getGuildId(),
        i = eM.Ay.getVoiceChannelId(),
        r = null != i ? ek.A.getVoiceStateForChannel(i) : null;
    for (let a of tr)
        if (
            null != ta[a] &&
            ta[a].predicate({
                selectedGuildId: n,
                voiceChannelId: i,
                voiceState: r,
                currentUser: e,
                premiumSubscription: t,
            })
        ) {
            let i = ta[a].metadata?.({ currentUser: e, premiumSubscription: t, selectedGuildId: n });
            e8 = { ...e7, type: a, metadata: i };
            break;
        }
    if (null != e8) {
        e8.metadata?.sampleRate != null &&
            null == e6[e8.type] &&
            (e6[e8.type] = Math.random() <= e8.metadata.sampleRate);
        let e = !1 === e6[e8.type];
        (ti(e8.type) || e) && (e8 = null);
    }
}
function tl() {
    return ew.A.enabled || delete e5[eI.kqX.STREAMER_MODE], ts();
}
class to extends s.Ay.Store {
    static displayName = "NoticeStore";
    initialize() {
        this.syncWith(
            [g.A, eG.Ay, ev.A, eN, eP.A, K.A, eB.A, M.default, eo.A, ee.A, L.A, z.A, er.A, N.Ay, ei.A, g.A, I.A, P.A],
            ts,
        ),
            this.waitFor(
                g.A,
                h.A,
                er.A,
                ea.default,
                M.default,
                es.A,
                el.A,
                w.A,
                eo.A,
                eN,
                eY.A,
                eK.A,
                e$.A,
                eA.A,
                S.A,
                C.A,
                y.A,
                L.A,
                eC.Ay,
                I.A,
                eO.A,
                eR.A,
                v.A,
                b.A,
                eL.Ay,
                eD.A,
                P.A,
                eF.A,
                ey.A,
                j.A,
                ev.A,
                K.A,
                z.A,
                eb.A,
                N.Ay,
                eM.Ay,
                eP.A,
                Z.A,
                eU.A,
                ew.A,
                B,
                eV.A,
                eG.Ay,
                eH.A,
                J.Ay,
                eB.A,
                ex.A,
                ee.A,
                x.default,
                et.A,
                ek.A,
                ei.A,
            );
    }
    hasNotice() {
        return null != e8 && null != e8.type;
    }
    getNotice() {
        return null == ex.A.getAction() ? e8 : null;
    }
    isNoticeDismissed(e) {
        return ti(e);
    }
}
let td = new to(c.h, {
    CURRENT_USER_UPDATE: ts,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: ts,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: ts,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: ts,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: ts,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: ts,
    GUILD_CREATE: ts,
    GUILD_DELETE: ts,
    AUDIO_INPUT_DETECTED: ts,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: ts,
    CERTIFIED_DEVICES_SET: ts,
    AUDIO_SET_INPUT_DEVICE: ts,
    AUDIO_SET_OUTPUT_DEVICE: ts,
    MEDIA_ENGINE_DEVICES: ts,
    RTC_CONNECTION_STATE: ts,
    RPC_APP_AUTHENTICATED: ts,
    RPC_APP_DISCONNECTED: ts,
    USER_CONNECTIONS_UPDATE: ts,
    WINDOW_FOCUS: ts,
    INSTANT_INVITE_CREATE: ts,
    INSTANT_INVITE_REVOKE_SUCCESS: ts,
    SPOTIFY_PLAYER_PAUSE: ts,
    RUNNING_GAMES_CHANGE: ts,
    EXPERIMENTS_FETCH_SUCCESS: ts,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: ts,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: ts,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: ts,
    DEVELOPER_TEST_MODE_RESET: ts,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: ts,
    DISPATCH_APPLICATION_INSTALL: ts,
    IMPERSONATE_STOP: ts,
    IMPERSONATE_UPDATE: ts,
    GUILD_MEMBER_ADD: function (e) {
        return e.user.id === ea.default.getId() && ts();
    },
    GUILD_MEMBER_UPDATE: ts,
    SURVEY_FETCHED: ts,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: ts,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: ts,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: ts,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: ts,
    UNSYNCED_USER_SETTINGS_UPDATE: ts,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return (
            (e8?.type === eI.kqX.INVITED_TO_SPEAK ||
                t.some((e) => {
                    let { userId: t } = e;
                    return t !== ea.default.getId();
                })) &&
            ts()
        );
    },
    STREAMER_MODE_UPDATE: tl,
    RUNNING_STREAMER_TOOLS_CHANGE: tl,
    DISPATCH_APPLICATION_ERROR: function () {
        return delete e5[eI.kqX.DISPATCH_ERROR], ts();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return delete e5[eI.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], ts();
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return ts();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return ts();
    },
    NOTICE_SHOW: function (e) {
        e8 = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != e8 && (null == e.id || e.id === e8.id) && (te(e8.type, e.isTemporary, e.untilAtLeast), ts());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return te(t), ts();
    },
    LOGOUT: function () {
        (e5 = {}), (e6 = {}), (e8 = null);
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: ts,
    AUTO_MODERATION_MENTION_RAID_DETECTION: ts,
    REPORT_AV_ERROR: ts,
    ACTIVE_AV_ERRORS_CHANGED: ts,
    MEDIA_ENGINE_MF_AVAILABILITY_CHECKED: ts,
    AUDIO_SET_MODE: ts,
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: ts,
});
