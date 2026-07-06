"use strict";
n.d(t, { f7: () => e6, Re: () => e3, Ay: () => td, pe: () => e1, rV: () => e2 });
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
    E = n(587895),
    p = n(145643),
    m = n(826673),
    g = n(367727),
    A = n(587054),
    I = n(487329),
    T = n(161518),
    S = n(736056),
    N = n(952818),
    C = n(617710),
    y = n(652896),
    O = n(585510),
    R = n(610136),
    v = n(229527),
    b = n(93474),
    L = n(164956),
    D = n(857071),
    w = n(577517),
    P = n(748209),
    M = n(869968),
    x = n(243217),
    U = n(287809),
    k = n(428262);
let G = !1;
class V extends a.Ay.Store {
    initialize() {
        this.waitFor(U.default);
    }
    static displayName = "SubscriptionRemindersStore";
    shouldShowReactivateNotice() {
        let e = U.default.getCurrentUser();
        return !(0, k.TW)(e) && G;
    }
}
let F = new V(c.h, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (null != t) {
            let e = x.A.createFromServer(t);
            if (null == (0, k.EL)(e) || e.metadata?.ended_at == null) return;
            let n = r()(e.metadata.ended_at);
            r()().isBetween(n.clone().add(4, "days"), n.clone().add(11, "days")) && (G = !0);
        }
    },
});
var B = n(380619),
    H = n(233317),
    j = n(862990),
    W = n(264779),
    Y = n(374200),
    K = n(852218),
    $ = n(160394),
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
    es = n(280450),
    ea = n(546183),
    eo = n(347481),
    el = n(734057),
    eu = n(30370);
n(321073);
var ec = n(735438),
    ed = n.n(ec),
    e_ = n(339048),
    eh = n(830382),
    ef = n(627363),
    eE = n(469778),
    ep = n(67480),
    em = n(652215);
let eg = "DetectedOffPlatformPremiumPerksStore",
    eA = {},
    eI = {},
    eT = [];
function eS() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of ed().values(eI)) {
        if (eT.includes(t)) continue;
        let i = E.A.getApplication(n);
        if (null == i) {
            E.A.isFetchingApplication(n) || E.A.didFetchingApplicationFail(n) || ef.Ay.fetchApplication(n);
            continue;
        }
        let r = ep.A.get(t);
        if (null == r) {
            ep.A.isFetching(t) || ep.A.didFetchingSkuFail(t) || eh.EX(i.id, t);
            continue;
        }
        eE.A.applicationIdsFetching.has(i.id) ||
        eE.A.isEntitledToSku(U.default.getCurrentUser(), t, i.id, i.id) ||
        !r.available
            ? null != eA[t] && (delete eA[t], (e = !0))
            : ((eA[t] = { skuId: t, applicationId: n }), (e = !0));
    }
    return e;
}
class eN extends a.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        this.waitFor(E.A, eE.A, N.Ay, ep.A, U.default), (eT = u.w.get(eg) ?? eT);
    }
    getDetectedOffPlatformPremiumPerks() {
        return ed().values(eA);
    }
}
let eC = new eN(c.h, {
    LOGOUT: function () {
        (eA = {}), (eI = {});
    },
    SKU_FETCH_SUCCESS: eS,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eS,
    ENTITLEMENT_CREATE: eS,
    APPLICATION_FETCH_SUCCESS: eS,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete eA[t], eT.includes(t))) return !1;
        eT.push(t), u.w.set(eg, eT);
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of N.Ay.getRunningGames())
            if (null != t && n !== em.d3x.DISCORD)
                for (let { skuId: n, applicationId: i } of em.m_i)
                    i !== t ||
                        eT.includes(n) ||
                        (null == eI[n] &&
                            (eE.A.applicationIdsFetched.has(i) ||
                                eE.A.applicationIdsFetching.has(i) ||
                                null != eE.A.getForSku(n) ||
                                e_.LM(i),
                            (eI[n] = { skuId: n, applicationId: i }),
                            (e = !0)));
        return e && eS(), e;
    },
});
var ey = n(696451),
    eO = n(317525),
    eR = n(71393),
    ev = n(451409),
    eb = n(803224),
    eL = n(576705),
    eD = n(362790),
    ew = n(763827),
    eP = n(309010),
    eM = n(967198),
    ex = n(437959),
    eU = n(351906),
    ek = n(274184),
    eG = n(870570),
    eV = n(977997),
    eF = n(295405),
    eB = n(166403),
    eH = n(354670),
    ej = n(147964),
    eW = n(488926),
    eY = n(723702),
    eK = n(19575),
    e$ = n(755439),
    ez = n(422033),
    eq = n(966846);
n(436317);
var eZ = n(202541),
    eX = n(88001),
    eQ = n(190107),
    eJ = n(818348),
    e0 = n(731854);
let e1 = {
        [em.kqX.DOWNLOAD_NAG]: l.M.NAGBAR_NOTICE_DOWNLOAD,
        [em.kqX.CONNECT_SPOTIFY]: l.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [em.kqX.CONNECT_PLAYSTATION]: l.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [em.kqX.PASSKEY_BACKUP]: l.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [em.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: l.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [em.kqX.PREMIUM_REACTIVATE]: l.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [em.kqX.BOUNCED_EMAIL_DETECTED]: l.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [em.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: l.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [em.kqX.CHECKOUT_RECOVERY_NAGBAR]: l.M.CHECKOUT_RECOVERY_NAGBAR,
        [em.kqX.QUEST_APP_UPSELL]: l.M.NAGBAR_QUEST_APP_UPSELL,
        [em.kqX.RIOT_MIGRATION]: l.M.RIOT_CONNECTION_DEPRECATION_DISABLE,
        [em.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: l.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
    },
    e2 = { [em.kqX.GIFTING_PROMOTION_REMINDER]: l.M.GIFTING_PROMOTION_REMINDER },
    e3 = {
        [em.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: l.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [em.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: l.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [em.kqX.RIOT_MIGRATION]: l.M.RIOT_CONNECTION_DEPRECATION,
        [em.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: l.M.RIOT_CONNECTION_DEPRECATION_ADMIN,
    },
    e6 = { [em.kqX.OUTBOUND_PROMOTION]: l.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    e4 = {
        [em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
        [em.kqX.PREMIUM_UNCANCEL]: "hideUncancelReminder",
        [em.kqX.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
        [em.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
        [em.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
        [em.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
        [em.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
        [em.kqX.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
        [em.kqX.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
        [em.kqX.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
        [em.kqX.WIN_COMPAT_MODE_MESSAGE]: "hideWinCompatModeNotice",
        [em.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [em.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [em.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [em.kqX.MACOS_DEPRECATED_MESSAGE]: "hideMacOSDeprecationMessageNotice",
        [em.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
        [em.kqX.E2EE_UPDATE_REQUIRED]: "hideE2EEUpdateRequiredNotice",
    },
    e5 = new Set([
        em.kqX.NO_INPUT_DETECTED,
        em.kqX.NO_INPUT_DEVICES_DETECTED,
        em.kqX.STREAMER_MODE,
        em.kqX.VIDEO_UNSUPPORTED_BROWSER,
        em.kqX.SPOTIFY_AUTO_PAUSED,
        em.kqX.DISPATCH_ERROR,
        em.kqX.DISPATCH_ERROR,
        em.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        em.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    ]),
    e7 = {},
    e8 = {},
    e9 = Object.freeze({ id: null, message: null, buttonText: null, callback: void 0, metadata: null }),
    te = null;
function tt(e) {
    return e4[e] + "-untilAtLeast";
}
function tn(e, t, n) {
    if (null == e) return;
    let i = e4[e];
    (null == i || t || u.w.set(i, !0), e5.has(e) && (e7[e] = !0), null != n && null != i)
        ? u.w.set(tt(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
        : u.w.remove(tt(e));
}
let ti = null;
function tr() {
    if (null != ti) return ti;
    try {
        let e = document.createElement("canvas").getContext("2d"),
            t = "\uE700\uE701\uE702\uE703\uE704\uE705\uE706\uE707";
        e.font = "16px monospace";
        let n = e.measureText(t).width;
        (e.font = '16px "Segoe MDL2 Assets", monospace'), (ti = e.measureText(t).width !== n);
    } catch (e) {
        ti = !1;
    }
    return ti;
}
function ts(e) {
    if (null == e) return !1;
    let t = e3[e];
    if (null != t) {
        let n = (0, A.D)(e);
        return (0, g.FZ)(t, n).isDismissed;
    }
    let n = e1[e];
    if (null != n) return (0, m.k8)(n);
    let i = e4[e];
    if (null != i) {
        let t,
            n = null != (t = u.w.get(tt(e))) ? r()(t) : null;
        if (null != n) return n?.isAfter(r()());
    }
    let s = e7[e];
    return !!s || (null != i && "" !== i ? u.w.get(i) : !!e5.has(e) && s);
}
let ta = [
    em.kqX.QUARANTINED,
    em.kqX.PARENTAL_CONSENT_WARNING,
    em.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    em.kqX.VIEWING_ROLES,
    em.kqX.INVITED_TO_SPEAK,
    em.kqX.LURKING_GUILD,
    em.kqX.VOICE_DISABLED,
    em.kqX.NO_INPUT_DEVICES_DETECTED,
    em.kqX.NO_INPUT_DETECTED,
    em.kqX.VIDEO_BACKGROUND_UNAVAILABLE,
    em.kqX.PTT_NO_KEYBIND_WARNING,
    em.kqX.HARDWARE_MUTE,
    em.kqX.DISPATCH_ERROR,
    em.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    em.kqX.SPOTIFY_AUTO_PAUSED,
    em.kqX.WIN32_DEPRECATED_MESSAGE,
    em.kqX.WIN7_8_DEPRECATED_MESSAGE,
    em.kqX.WIN_COMPAT_MODE_MESSAGE,
    em.kqX.MACOS_DEPRECATED_MESSAGE,
    em.kqX.E2EE_UPDATE_REQUIRED,
    em.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    em.kqX.VOICE_CONNECTED_LAST_SESSION,
    em.kqX.SYSTEM_SERVICE_WARNING,
    em.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
    em.kqX.GUILD_RAID_NOTIFICATION,
    em.kqX.GIFTING_PROMOTION_REMINDER,
    em.kqX.RIOT_MIGRATION,
    em.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
    em.kqX.QUESTS_PROGRESS_INTERRUPTION,
    em.kqX.UNCLAIMED_ACCOUNT,
    em.kqX.PENDING_MEMBER,
    em.kqX.CHECKOUT_RECOVERY_NAGBAR,
    em.kqX.PREMIUM_MARKETING_NAGBAR,
    em.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
    em.kqX.OUTBOUND_PROMOTION,
    em.kqX.CORRUPT_INSTALLATION,
    em.kqX.VIDEO_UNSUPPORTED_BROWSER,
    em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
    em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
    em.kqX.STREAMER_MODE,
    em.kqX.SCHEDULED_MAINTENANCE,
    em.kqX.BOUNCED_EMAIL_DETECTED,
    em.kqX.UNVERIFIED_ACCOUNT,
    em.kqX.PREMIUM_TIER_2_TRIAL_ENDING,
    em.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
    em.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
    em.kqX.PREMIUM_UNCANCEL,
    em.kqX.PREMIUM_MISSING_PAYMENT,
    em.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
    em.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
    em.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
    em.kqX.PREMIUM_REACTIVATE,
    em.kqX.PASSKEY_BACKUP,
    em.kqX.APPLICATION_TEST_MODE,
    em.kqX.QUEST_APP_UPSELL,
    em.kqX.DOWNLOAD_NAG,
    em.kqX.CONNECT_SPOTIFY,
    em.kqX.CONNECT_PLAYSTATION,
    em.kqX.SURVEY,
    em.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
    em.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
];
em.kqX.QUARANTINED,
    em.kqX.PARENTAL_CONSENT_WARNING,
    em.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    em.kqX.VIEWING_ROLES,
    em.kqX.INVITED_TO_SPEAK,
    em.kqX.LURKING_GUILD,
    em.kqX.VOICE_DISABLED,
    em.kqX.NO_INPUT_DETECTED,
    em.kqX.VIDEO_BACKGROUND_UNAVAILABLE,
    em.kqX.HARDWARE_MUTE,
    em.kqX.DISPATCH_ERROR,
    em.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    em.kqX.SPOTIFY_AUTO_PAUSED,
    em.kqX.VOICE_CONNECTED_LAST_SESSION,
    em.kqX.PENDING_MEMBER,
    em.kqX.STREAMER_MODE,
    em.kqX.SCHEDULED_MAINTENANCE;
let to = {
    [em.kqX.GIFTING_PROMOTION_REMINDER]: { predicate: () => (0, B.MD)() },
    [em.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, O.dj)().show && !ts(em.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({ dismissUntil: r()().add(3, "hours").toDate() }),
    },
    [em.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let i = ey.Ay.getMember(n, t.id);
            return null != i && !i.isPending && (0, v.TR)(i);
        },
    },
    [em.kqX.QUARANTINED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t.hasFlag(em.nhx.QUARANTINED);
        },
    },
    [em.kqX.PARENTAL_CONSENT_WARNING]: {
        predicate: () => {
            let e = w.A.getWarning();
            return e?.surfaces?.includes(P.x.BANNER) === !0 && null != e.daysRemaining && e.daysRemaining >= 0;
        },
        metadata: () => ({ daysRemaining: w.A.getWarning()?.daysRemaining ?? null }),
    },
    [em.kqX.VIEWING_ROLES]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return L.A.isViewingRoles(t);
        },
    },
    [em.kqX.INVITED_TO_SPEAK]: {
        predicate: (e) => {
            let { voiceState: t } = e;
            return (0, X.eY)(t) === X.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        },
    },
    [em.kqX.LURKING_GUILD]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && D.A.isLurking(t);
        },
    },
    [em.kqX.VOICE_DISABLED]: { predicate: () => null != ew.A.getRemoteDisconnectVoiceChannelId() },
    [em.kqX.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != ew.A.getLastSessionVoiceChannelId() },
    [em.kqX.NO_INPUT_DETECTED]: { predicate: () => T.A.hasActiveErrorOfType(I.iy.NO_AUDIO_INPUT_DETECTED) },
    [em.kqX.NO_INPUT_DEVICES_DETECTED]: { predicate: () => T.A.hasActiveErrorOfType(I.iy.NO_INPUT_DEVICES) },
    [em.kqX.VIDEO_BACKGROUND_UNAVAILABLE]: { predicate: () => ew.A.isConnected() && et.A.videoBackgroundUnavailable },
    [em.kqX.HARDWARE_MUTE]: {
        predicate: () =>
            ew.A.isConnected() &&
            ev.Ay.isHardwareMute() &&
            ev.Ay.isHardwareMuteNoticeEnabled() &&
            !J.Ay.disableHardwareMuteSilenceAlert,
        metadata: () => {
            let e = ev.Ay.getInputDeviceId(),
                t = eo.A.getVendor(e),
                n = eo.A.getModel(e);
            if (null != t && null != n) return { vendor: t, model: n };
        },
    },
    [em.kqX.PTT_NO_KEYBIND_WARNING]: {
        predicate: () =>
            !!ew.A.isConnected() &&
            ev.Ay.getMode() === em.TBI.PUSH_TO_TALK &&
            !(ev.Ay.getSettings().modeOptions.shortcut.length > 0) &&
            !!en.A.getConfig({ location: "NoticeStore" }).showPTTNoKeybindWarning,
    },
    [em.kqX.DISPATCH_ERROR]: {
        predicate: () => null != e$.A.getLastError(),
        metadata: () => ({ error: e$.A.getLastError() }),
    },
    [em.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != ez.A.getLastProgress(),
        metadata: () => ez.A.getLastProgress(),
    },
    [em.kqX.SPOTIFY_AUTO_PAUSED]: { predicate: () => Z.A.wasAutoPaused() },
    [em.kqX.UNCLAIMED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return null != t && !t.isClaimed();
        },
    },
    [em.kqX.PENDING_MEMBER]: {
        predicate: (e) => {
            let { selectedGuildId: t, currentUser: n } = e;
            return (
                (null != t &&
                    null != n &&
                    !eR.A.getGuild(t)?.features.has(em.GuildFeatures.GUILD_ONBOARDING) &&
                    ey.Ay.getMember(t, n.id)?.isPending) ??
                !1
            );
        },
    },
    [em.kqX.OUTBOUND_PROMOTION]: { predicate: () => (0, W.So)() },
    [em.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => eY.isPlatformEmbedded && (!o.A.supported() || eq.A.isCorruptInstallation()),
    },
    [em.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t && eV.A.hasVideo(t) && !ev.Ay.supports(e0.O5.VIDEO) && !ts(em.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
        },
    },
    [em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return k.Ay.canRedeemPremiumPerks(t) && eC.getDetectedOffPlatformPremiumPerks().length > 0;
        },
        metadata: () => eC.getDetectedOffPlatformPremiumPerks()[0],
    },
    [em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () =>
            !ts(em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && eC.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => eC.getDetectedOffPlatformPremiumPerks()[0],
    },
    [em.kqX.STREAMER_MODE]: { predicate: () => eU.A.enabled },
    [em.kqX.DOWNLOAD_NAG]: { predicate: () => !eY.isPlatformEmbedded && !ts(em.kqX.DOWNLOAD_NAG) },
    [em.kqX.QUEST_APP_UPSELL]: {
        predicate: () =>
            (0, eY.isOculusWeb)() && !ts(em.kqX.QUEST_APP_UPSELL) && $.A.getConfig({ location: "NoticeStore" }).enabled,
    },
    [em.kqX.SCHEDULED_MAINTENANCE]: {
        predicate: () => null != ex.A.getScheduledMaintenance(),
        metadata: () => {
            let e = ex.A.getScheduledMaintenance();
            if (null != e) return { id: e.id, start: new Date(e.scheduled_for), end: new Date(e.scheduled_until) };
        },
    },
    [em.kqX.SURVEY]: { predicate: () => null != ek.Ay.getCurrentSurvey(), metadata: () => ek.Ay.getCurrentSurvey() },
    [em.kqX.UNVERIFIED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.email != null && !t.verified;
        },
    },
    [em.kqX.BOUNCED_EMAIL_DETECTED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.hasBouncedEmail;
        },
    },
    [em.kqX.CONNECT_SPOTIFY]: {
        predicate: () =>
            !Z.A.hasConnectedAccount() &&
            N.Ay.isObservedAppRunning(_.A.get(em.fg2.SPOTIFY).name) &&
            !ts(em.kqX.CONNECT_SPOTIFY),
    },
    [em.kqX.WIN32_DEPRECATED_MESSAGE]: {
        predicate: () => d.A?.os.arch === "ia32" && d.A?.process.platform === "win32",
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [em.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (d.A?.process.platform === "win32")
                try {
                    if (parseInt(d.A?.os.release.split(".")[0]) >= 10) return !1;
                    return !tr();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [em.kqX.WIN_COMPAT_MODE_MESSAGE]: {
        predicate: () => {
            if (d.A?.process.platform === "win32")
                try {
                    if (parseInt(d.A?.os.release.split(".")[0]) >= 10) return !1;
                    return tr();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [em.kqX.MACOS_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (d.A?.process.platform === "darwin")
                try {
                    return 21 > parseInt(d.A?.os.release.split(".")[0]);
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [em.kqX.CONNECT_PLAYSTATION]: {
        predicate: () =>
            eu.A.isSuggestedAccountType(em.fg2.PLAYSTATION) &&
            null == eu.A.getAccount(null, em.fg2.PLAYSTATION) &&
            !ts(em.kqX.CONNECT_PLAYSTATION),
    },
    [em.kqX.PASSKEY_BACKUP]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.mfaEnabled && ei.A.hasFetchedCredentials() && !ei.A.hasCredentials && !ts(em.kqX.PASSKEY_BACKUP);
        },
    },
    [em.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () =>
            eH.A.getAlmostExpiringTrialOffersForReminder([eZ.pe.TIER_2]).length > 0 &&
            !ts(em.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
    },
    [em.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () =>
            eH.A.getAlmostExpiringTrialOffersForReminder([eZ.pe.TIER_0]).length > 0 &&
            !ts(em.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
    },
    [em.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () =>
            eH.A.getAlmostExpiringDiscountOffersForReminder([eZ.pe.TIER_2]).length > 0 &&
            !ts(em.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
    },
    [em.kqX.PREMIUM_UNCANCEL]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                s =
                    t?.canceledAt != null &&
                    t?.status === em.Dmq.CANCELED &&
                    1 >= r()().diff(r()(t.canceledAt), "days"),
                a = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                o =
                    null != t &&
                    t.status === em.Dmq.CANCELED &&
                    !a &&
                    i <= 7 &&
                    i >= 0 &&
                    (0, k.YE)(n, eZ.PremiumTypes.TIER_2) &&
                    !s &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ts(em.kqX.PREMIUM_UNCANCEL) && o;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                i = null != t ? (0, k.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? k.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [em.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                s = null != t ? r()(t.currentPeriodEnd).diff(r()(t.currentPeriodStart).startOf("day"), "days") : 0,
                a = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                o = eE.A.applicationIdsFetched.has(eZ.tv),
                l = eE.A.getForApplication(eZ.tv),
                u = null != t ? (0, k.EL)(t) : null,
                c = null != u ? k.Ay.getSkuIdForPlan(u.planId) : null,
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
                    t.status !== em.Dmq.PAST_DUE &&
                    !a &&
                    o &&
                    !d &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ts(em.kqX.PREMIUM_MISSING_PAYMENT) && _;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                i = null != t ? (0, k.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? k.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [em.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && null != t.paymentSourceId ? eF.A.getPaymentSource(t.paymentSourceId) : null,
                s = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                a =
                    null != t &&
                    t.status === em.Dmq.PAST_DUE &&
                    !s &&
                    null != i &&
                    i.invalid &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ts(em.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [em.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                s =
                    null != t &&
                    t.status === em.Dmq.PAST_DUE &&
                    !i &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ts(em.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && s;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [em.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != ej.A.testModeApplicationId,
        metadata: () => {
            if (null == ej.A.testModeApplicationId) return {};
            let e = ej.A.testModeApplicationId,
                t = E.A.getApplication(e);
            return { applicationName: null != t ? t.name : e, applicationId: e };
        },
    },
    [em.kqX.PREMIUM_REACTIVATE]: { predicate: () => !ts(em.kqX.PREMIUM_REACTIVATE) && F.shouldShowReactivateNotice() },
    [em.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                s = null != t && null != t.paymentSourceId ? eF.A.getPaymentSource(t.paymentSourceId) : null,
                a = null != s && eJ.AD.has(s.type),
                o =
                    null != t &&
                    t.status === em.Dmq.PAST_DUE &&
                    !i &&
                    a &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ts(em.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && o;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return null == t
                ? { daysPastDue: 0, dismissUntil: r()().toDate() }
                : {
                      daysPastDue: t.status === em.Dmq.PAST_DUE ? r()().diff(t.currentPeriodStart, "days") : 0,
                      dismissUntil: (0, k.ji)(t).expiresDate.toDate(),
                  };
        },
    },
    [em.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e,
                n = null != t ? eR.A.getGuild(t) : null;
            return (
                (null != t &&
                    null != b.A.getMentionRaidDetected(t) &&
                    n?.features.has(em.GuildFeatures.COMMUNITY) &&
                    !ts(em.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
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
    [em.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = er.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, y._z)(e),
                n = z.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= eQ.tZ;
        },
        metadata: () => {
            let e = er.A.getCurrentUserActiveStream();
            return { streamKey: null != e ? (0, y._z)(e) : null };
        },
    },
    [em.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eF.A.paymentSources ?? {};
            return M.A.getIsTargeted() && !(0, k.TW)(t) && 0 !== Object.keys(n).length;
        },
    },
    [em.kqX.PREMIUM_MARKETING_NAGBAR]: {
        predicate: () => {
            let e = Y.A.getMarketingComponentByType(s.C.NAGBAR);
            if (null == e) return !1;
            if (null == e.promotionId) return !0;
            let t = Y.A.getPromotionByTypeAndId(K.pt.MARKETING_MOMENT, e.promotionId);
            return (
                !(null != t && t.endDate < new Date()) &&
                !(0, m.u$)(l.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, e.promotionId).isDismissed
            );
        },
    },
    [em.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eB.A.getPremiumGroupSubscription();
            if (null == n) return !1;
            let i = H.A.hasFetchedMembers(),
                r = H.A.getNumAvailableInvites();
            return (0, j.ux)(t, n) && i && r >= eX.Vu;
        },
        metadata: () => ({ premiumSubscription: eB.A.getPremiumGroupSubscription() }),
    },
    [em.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !ts(em.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && q.Cm(),
        metadata: () => ({ dismissUntil: r()().add(180, "days").toDate(), sampleRate: 0.1 }),
    },
    [em.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: { predicate: () => q.h6(), metadata: () => ({ sampleRate: 0.1 }) },
    [em.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
                ts(em.kqX.SYSTEM_SERVICE_WARNING) ||
                !(0, Q.yA)(N.Ay) ||
                null == t ||
                ev.Ay.getMode() !== em.TBI.PUSH_TO_TALK
            )
                return !1;
            let n = N.Ay.getVisibleGame();
            return null != n && !!n.elevated;
        },
    },
    [em.kqX.E2EE_UPDATE_REQUIRED]: {
        predicate: () => {
            if (ts(em.kqX.E2EE_UPDATE_REQUIRED) || !ew.A.isConnected()) return !1;
            let e = ev.Ay.getMediaEngine();
            return 1 !== (e.getSupportedSecureFramesProtocolVersion?.() ?? 0);
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [em.kqX.WINDOWS_MEDIA_PACK_REQUIRED]: {
        predicate: () =>
            !(
                !eY.isPlatformEmbedded ||
                d.A?.process.platform !== "win32" ||
                ts(em.kqX.WINDOWS_MEDIA_PACK_REQUIRED) ||
                eK.Ay.getEnableHardwareAcceleration()
            ) && !1 === ev.Ay.isH264MfDecodeAvailable(),
    },
    [em.kqX.RIOT_MIGRATION]: {
        predicate: () => {
            if (!(0, h.getIsRiotSocialSDKMigrationEnabled)({ location: "NoticeStore" })) return !1;
            let e = null != eu.A.getAccount(null, em.fg2.RIOT_GAMES),
                t = null != eu.A.getAccount(null, em.fg2.LEAGUE_OF_LEGENDS);
            if (ts(em.kqX.RIOT_MIGRATION) || (0, m.k8)(l.M.RIOT_CONNECTION_DEPRECATION_DISABLE) || (!e && !t))
                return !1;
            let n = _.A.get(em.fg2.LEAGUE_OF_LEGENDS),
                i = _.A.get(em.fg2.RIOT_GAMES);
            return null != n.replacedBy && null != i.replacedBy;
        },
    },
    [em.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (
                !(0, h.getIsRiotSocialSDKMigrationEnabled)({ location: "NoticeStore" }) ||
                ts(em.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN) ||
                (0, m.k8)(l.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE)
            )
                return !1;
            let i = null != n ? eR.A.getGuild(n) : null,
                r = (0, eW.$3)({ permission: em.xBc.ADMINISTRATOR, user: t, context: i }),
                s = null != i ? eO.A.getSortedRoles(i.id).filter((e) => null === e.tags.guild_connections) : null;
            return null != i && !!r && null != s && !!(0, f.D)(s);
        },
    },
};
function tl() {
    if (!C.A.isConnected()) return !1;
    te = null;
    let e = U.default.getCurrentUser();
    if (null == e) return !1;
    let t = eB.A.getPremiumSubscription(),
        n = eM.A.getGuildId(),
        i = eP.A.getVoiceChannelId(),
        r = null != i ? eV.A.getVoiceStateForChannel(i) : null;
    for (let s of ta)
        if (
            null != to[s] &&
            to[s].predicate({
                selectedGuildId: n,
                voiceChannelId: i,
                voiceState: r,
                currentUser: e,
                premiumSubscription: t,
            })
        ) {
            let i = to[s].metadata?.({ currentUser: e, premiumSubscription: t, selectedGuildId: n });
            te = { ...e9, type: s, metadata: i };
            break;
        }
    if (null != te) {
        te.metadata?.sampleRate != null &&
            null == e8[te.type] &&
            (e8[te.type] = Math.random() <= te.metadata.sampleRate);
        let e = !1 === e8[te.type];
        (ts(te.type) || e) && (te = null);
    }
}
function tu() {
    return eU.A.enabled || delete e7[em.kqX.STREAMER_MODE], tl();
}
class tc extends a.Ay.Store {
    static displayName = "NoticeStore";
    initialize() {
        this.syncWith(
            [T.A, ek.Ay, eD.A, eC, eM.A, Y.A, eH.A, ea.default, eu.A, ee.A, R.A, z.A, er.A, N.Ay, ei.A, T.A, p.A, w.A],
            tl,
        ),
            this.waitFor(
                T.A,
                E.A,
                er.A,
                es.default,
                ea.default,
                eo.A,
                el.A,
                M.A,
                eu.A,
                eC,
                e$.A,
                ez.A,
                eq.A,
                eE.A,
                S.A,
                C.A,
                b.A,
                R.A,
                ey.Ay,
                p.A,
                eO.A,
                eR.A,
                L.A,
                D.A,
                ev.Ay,
                eb.A,
                w.A,
                eF.A,
                eL.A,
                H.A,
                eD.A,
                Y.A,
                z.A,
                ew.A,
                N.Ay,
                eP.A,
                eM.A,
                Z.A,
                ex.A,
                eU.A,
                F,
                eB.A,
                ek.Ay,
                ej.A,
                J.Ay,
                eH.A,
                eG.A,
                ee.A,
                U.default,
                et.A,
                eV.A,
                ei.A,
            );
    }
    hasNotice() {
        return null != te && null != te.type;
    }
    getNotice() {
        return null == eG.A.getAction() ? te : null;
    }
    isNoticeDismissed(e) {
        return ts(e);
    }
}
let td = new tc(c.h, {
    CURRENT_USER_UPDATE: tl,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: tl,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: tl,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: tl,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: tl,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: tl,
    GUILD_CREATE: tl,
    GUILD_DELETE: tl,
    AUDIO_INPUT_DETECTED: tl,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: tl,
    CERTIFIED_DEVICES_SET: tl,
    AUDIO_SET_INPUT_DEVICE: tl,
    AUDIO_SET_OUTPUT_DEVICE: tl,
    MEDIA_ENGINE_DEVICES: tl,
    RTC_CONNECTION_STATE: tl,
    RPC_APP_AUTHENTICATED: tl,
    RPC_APP_DISCONNECTED: tl,
    USER_CONNECTIONS_UPDATE: tl,
    WINDOW_FOCUS: tl,
    INSTANT_INVITE_CREATE: tl,
    INSTANT_INVITE_REVOKE_SUCCESS: tl,
    SPOTIFY_PLAYER_PAUSE: tl,
    RUNNING_GAMES_CHANGE: tl,
    EXPERIMENTS_FETCH_SUCCESS: tl,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: tl,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: tl,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: tl,
    DEVELOPER_TEST_MODE_RESET: tl,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: tl,
    DISPATCH_APPLICATION_INSTALL: tl,
    IMPERSONATE_STOP: tl,
    IMPERSONATE_UPDATE: tl,
    GUILD_MEMBER_ADD: function (e) {
        return e.user.id === es.default.getId() && tl();
    },
    GUILD_MEMBER_UPDATE: tl,
    SURVEY_FETCHED: tl,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: tl,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: tl,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: tl,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: tl,
    UNSYNCED_USER_SETTINGS_UPDATE: tl,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return (
            (te?.type === em.kqX.INVITED_TO_SPEAK ||
                t.some((e) => {
                    let { userId: t } = e;
                    return t !== es.default.getId();
                })) &&
            tl()
        );
    },
    STREAMER_MODE_UPDATE: tu,
    RUNNING_STREAMER_TOOLS_CHANGE: tu,
    DISPATCH_APPLICATION_ERROR: function () {
        return delete e7[em.kqX.DISPATCH_ERROR], tl();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return delete e7[em.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], tl();
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return tl();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return tl();
    },
    NOTICE_SHOW: function (e) {
        te = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != te && (null == e.id || e.id === te.id) && (tn(te.type, e.isTemporary, e.untilAtLeast), tl());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return tn(t), tl();
    },
    LOGOUT: function () {
        (e7 = {}), (e8 = {}), (te = null);
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: tl,
    AUTO_MODERATION_MENTION_RAID_DETECTION: tl,
    REPORT_AV_ERROR: tl,
    ACTIVE_AV_ERRORS_CHANGED: tl,
    MEDIA_ENGINE_MF_AVAILABILITY_CHECKED: tl,
    AUDIO_SET_MODE: tl,
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: tl,
});
