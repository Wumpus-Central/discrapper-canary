"use strict";
n.d(t, { f7: () => e6, Re: () => e3, Ay: () => tu, pe: () => e1, rV: () => e2 });
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
    R = n(652896),
    O = n(585510),
    L = n(610136),
    D = n(229527),
    y = n(93474),
    v = n(164956),
    b = n(857071),
    M = n(577517),
    P = n(748209),
    U = n(869968),
    w = n(243217),
    G = n(287809),
    x = n(428262);
let k = !1;
class F extends s.Ay.Store {
    initialize() {
        this.waitFor(G.default);
    }
    static displayName = "SubscriptionRemindersStore";
    shouldShowReactivateNotice() {
        let e = G.default.getCurrentUser();
        return !(0, x.TW)(e) && k;
    }
}
let V = new F(c.h, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (null != t) {
            let e = w.A.createFromServer(t);
            if (null == (0, x.EL)(e) || e.metadata?.ended_at == null) return;
            let n = r()(e.metadata.ended_at);
            r()().isBetween(n.clone().add(4, "days"), n.clone().add(11, "days")) && (k = !0);
        }
    },
});
var B = n(380619),
    H = n(233317),
    j = n(862990),
    W = n(264779),
    Y = n(412260),
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
    ea = n(280450),
    es = n(546183),
    el = n(347481),
    eo = n(734057),
    ed = n(30370);
n(321073);
var ec = n(735438),
    eu = n.n(ec),
    e_ = n(339048),
    eE = n(830382),
    eA = n(627363),
    eh = n(469778),
    eI = n(67480),
    ef = n(652215);
let ep = "DetectedOffPlatformPremiumPerksStore",
    eT = {},
    em = {},
    eg = [];
function eS() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of eu().values(em)) {
        if (eg.includes(t)) continue;
        let i = h.A.getApplication(n);
        if (null == i) {
            h.A.isFetchingApplication(n) || h.A.didFetchingApplicationFail(n) || eA.Ay.fetchApplication(n);
            continue;
        }
        let r = eI.A.get(t);
        if (null == r) {
            eI.A.isFetching(t) || eI.A.didFetchingSkuFail(t) || eE.EX(i.id, t);
            continue;
        }
        eh.A.applicationIdsFetching.has(i.id) ||
        eh.A.isEntitledToSku(G.default.getCurrentUser(), t, i.id, i.id) ||
        !r.available
            ? null != eT[t] && (delete eT[t], (e = !0))
            : ((eT[t] = { skuId: t, applicationId: n }), (e = !0));
    }
    return e;
}
class eN extends s.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        this.waitFor(h.A, eh.A, N.Ay, eI.A, G.default), (eg = d.w.get(ep) ?? eg);
    }
    getDetectedOffPlatformPremiumPerks() {
        return eu().values(eT);
    }
}
let eC = new eN(c.h, {
    LOGOUT: function () {
        (eT = {}), (em = {});
    },
    SKU_FETCH_SUCCESS: eS,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eS,
    ENTITLEMENT_CREATE: eS,
    APPLICATION_FETCH_SUCCESS: eS,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete eT[t], eg.includes(t))) return !1;
        eg.push(t), d.w.set(ep, eg);
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of N.Ay.getRunningGames())
            if (null != t && n !== ef.d3x.DISCORD)
                for (let { skuId: n, applicationId: i } of ef.m_i)
                    i !== t ||
                        eg.includes(n) ||
                        (null == em[n] &&
                            (eh.A.applicationIdsFetched.has(i) ||
                                eh.A.applicationIdsFetching.has(i) ||
                                null != eh.A.getForSku(n) ||
                                e_.LM(i),
                            (em[n] = { skuId: n, applicationId: i }),
                            (e = !0)));
        return e && eS(), e;
    },
});
var eR = n(696451),
    eO = n(317525),
    eL = n(71393),
    eD = n(451409),
    ey = n(803224),
    ev = n(576705),
    eb = n(362790),
    eM = n(763827),
    eP = n(309010),
    eU = n(967198),
    ew = n(437959),
    eG = n(351906),
    ex = n(274184),
    ek = n(870570),
    eF = n(977997),
    eV = n(295405),
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
        [ef.kqX.DOWNLOAD_NAG]: o.M.NAGBAR_NOTICE_DOWNLOAD,
        [ef.kqX.CONNECT_SPOTIFY]: o.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [ef.kqX.CONNECT_PLAYSTATION]: o.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [ef.kqX.PASSKEY_BACKUP]: o.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [ef.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [ef.kqX.PREMIUM_REACTIVATE]: o.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [ef.kqX.BOUNCED_EMAIL_DETECTED]: o.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [ef.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [ef.kqX.CHECKOUT_RECOVERY_NAGBAR]: o.M.CHECKOUT_RECOVERY_NAGBAR,
        [ef.kqX.QUEST_APP_UPSELL]: o.M.NAGBAR_QUEST_APP_UPSELL,
        [ef.kqX.RIOT_MIGRATION]: o.M.RIOT_CONNECTION_DEPRECATION_DISABLE,
        [ef.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
    },
    e2 = { [ef.kqX.GIFTING_PROMOTION_REMINDER]: o.M.GIFTING_PROMOTION_REMINDER },
    e3 = {
        [ef.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [ef.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: o.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [ef.kqX.RIOT_MIGRATION]: o.M.RIOT_CONNECTION_DEPRECATION,
        [ef.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: o.M.RIOT_CONNECTION_DEPRECATION_ADMIN,
    },
    e6 = { [ef.kqX.OUTBOUND_PROMOTION]: o.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    e4 = {
        [ef.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
        [ef.kqX.PREMIUM_UNCANCEL]: "hideUncancelReminder",
        [ef.kqX.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
        [ef.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
        [ef.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
        [ef.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
        [ef.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
        [ef.kqX.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
        [ef.kqX.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
        [ef.kqX.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
        [ef.kqX.WIN_COMPAT_MODE_MESSAGE]: "hideWinCompatModeNotice",
        [ef.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [ef.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [ef.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [ef.kqX.MACOS_DEPRECATED_MESSAGE]: "hideMacOSDeprecationMessageNotice",
        [ef.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
        [ef.kqX.E2EE_UPDATE_REQUIRED]: "hideE2EEUpdateRequiredNotice",
    },
    e5 = new Set([
        ef.kqX.NO_INPUT_DETECTED,
        ef.kqX.NO_INPUT_DEVICES_DETECTED,
        ef.kqX.STREAMER_MODE,
        ef.kqX.VIDEO_UNSUPPORTED_BROWSER,
        ef.kqX.SPOTIFY_AUTO_PAUSED,
        ef.kqX.DISPATCH_ERROR,
        ef.kqX.DISPATCH_ERROR,
        ef.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        ef.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
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
    (null == i || t || d.w.set(i, !0), e5.has(e) && (e7[e] = !0), null != n && null != i)
        ? d.w.set(tt(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
        : d.w.remove(tt(e));
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
function ta(e) {
    if (null == e) return !1;
    let t = e3[e];
    if (null != t) {
        let n = (0, T.D)(e);
        return (0, p.FZ)(t, n).isDismissed;
    }
    let n = e1[e];
    if (null != n) return (0, f.k8)(n);
    let i = e4[e];
    if (null != i) {
        let t,
            n = null != (t = d.w.get(tt(e))) ? r()(t) : null;
        if (null != n) return n?.isAfter(r()());
    }
    let a = e7[e];
    return !!a || (null != i && "" !== i ? d.w.get(i) : !!e5.has(e) && a);
}
let ts = [
    ef.kqX.QUARANTINED,
    ef.kqX.PARENTAL_CONSENT_WARNING,
    ef.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    ef.kqX.VIEWING_ROLES,
    ef.kqX.INVITED_TO_SPEAK,
    ef.kqX.LURKING_GUILD,
    ef.kqX.VOICE_DISABLED,
    ef.kqX.NO_INPUT_DEVICES_DETECTED,
    ef.kqX.NO_INPUT_DETECTED,
    ef.kqX.VIDEO_BACKGROUND_UNAVAILABLE,
    ef.kqX.PTT_NO_KEYBIND_WARNING,
    ef.kqX.HARDWARE_MUTE,
    ef.kqX.DISPATCH_ERROR,
    ef.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    ef.kqX.SPOTIFY_AUTO_PAUSED,
    ef.kqX.WIN32_DEPRECATED_MESSAGE,
    ef.kqX.WIN7_8_DEPRECATED_MESSAGE,
    ef.kqX.WIN_COMPAT_MODE_MESSAGE,
    ef.kqX.MACOS_DEPRECATED_MESSAGE,
    ef.kqX.E2EE_UPDATE_REQUIRED,
    ef.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    ef.kqX.VOICE_CONNECTED_LAST_SESSION,
    ef.kqX.SYSTEM_SERVICE_WARNING,
    ef.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
    ef.kqX.GUILD_RAID_NOTIFICATION,
    ef.kqX.GIFTING_PROMOTION_REMINDER,
    ef.kqX.RIOT_MIGRATION,
    ef.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
    ef.kqX.QUESTS_PROGRESS_INTERRUPTION,
    ef.kqX.UNCLAIMED_ACCOUNT,
    ef.kqX.PENDING_MEMBER,
    ef.kqX.CHECKOUT_RECOVERY_NAGBAR,
    ef.kqX.PREMIUM_MARKETING_NAGBAR,
    ef.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
    ef.kqX.OUTBOUND_PROMOTION,
    ef.kqX.CORRUPT_INSTALLATION,
    ef.kqX.VIDEO_UNSUPPORTED_BROWSER,
    ef.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
    ef.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
    ef.kqX.STREAMER_MODE,
    ef.kqX.SCHEDULED_MAINTENANCE,
    ef.kqX.BOUNCED_EMAIL_DETECTED,
    ef.kqX.UNVERIFIED_ACCOUNT,
    ef.kqX.PREMIUM_TIER_2_TRIAL_ENDING,
    ef.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
    ef.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
    ef.kqX.PREMIUM_UNCANCEL,
    ef.kqX.PREMIUM_MISSING_PAYMENT,
    ef.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
    ef.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
    ef.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
    ef.kqX.PREMIUM_REACTIVATE,
    ef.kqX.PASSKEY_BACKUP,
    ef.kqX.APPLICATION_TEST_MODE,
    ef.kqX.QUEST_APP_UPSELL,
    ef.kqX.DOWNLOAD_NAG,
    ef.kqX.CONNECT_SPOTIFY,
    ef.kqX.CONNECT_PLAYSTATION,
    ef.kqX.SURVEY,
    ef.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
    ef.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
];
ef.kqX.QUARANTINED,
    ef.kqX.PARENTAL_CONSENT_WARNING,
    ef.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    ef.kqX.VIEWING_ROLES,
    ef.kqX.INVITED_TO_SPEAK,
    ef.kqX.LURKING_GUILD,
    ef.kqX.VOICE_DISABLED,
    ef.kqX.NO_INPUT_DETECTED,
    ef.kqX.VIDEO_BACKGROUND_UNAVAILABLE,
    ef.kqX.HARDWARE_MUTE,
    ef.kqX.DISPATCH_ERROR,
    ef.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    ef.kqX.SPOTIFY_AUTO_PAUSED,
    ef.kqX.VOICE_CONNECTED_LAST_SESSION,
    ef.kqX.PENDING_MEMBER,
    ef.kqX.STREAMER_MODE,
    ef.kqX.SCHEDULED_MAINTENANCE;
let tl = {
    [ef.kqX.GIFTING_PROMOTION_REMINDER]: { predicate: () => (0, B.MD)() },
    [ef.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, O.dj)().show && !ta(ef.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({ dismissUntil: r()().add(3, "hours").toDate() }),
    },
    [ef.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let i = eR.Ay.getMember(n, t.id);
            return null != i && !i.isPending && (0, D.TR)(i);
        },
    },
    [ef.kqX.QUARANTINED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t.hasFlag(ef.nhx.QUARANTINED);
        },
    },
    [ef.kqX.PARENTAL_CONSENT_WARNING]: {
        predicate: () => {
            let e = M.A.getWarning();
            return e?.surfaces?.includes(P.x.BANNER) === !0 && null != e.daysRemaining && e.daysRemaining >= 0;
        },
        metadata: () => ({ daysRemaining: M.A.getWarning()?.daysRemaining ?? null }),
    },
    [ef.kqX.VIEWING_ROLES]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return v.A.isViewingRoles(t);
        },
    },
    [ef.kqX.INVITED_TO_SPEAK]: {
        predicate: (e) => {
            let { voiceState: t } = e;
            return (0, X.eY)(t) === X.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        },
    },
    [ef.kqX.LURKING_GUILD]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && b.A.isLurking(t);
        },
    },
    [ef.kqX.VOICE_DISABLED]: { predicate: () => null != eM.A.getRemoteDisconnectVoiceChannelId() },
    [ef.kqX.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != eM.A.getLastSessionVoiceChannelId() },
    [ef.kqX.NO_INPUT_DETECTED]: { predicate: () => g.A.hasActiveErrorOfType(m.iy.NO_AUDIO_INPUT_DETECTED) },
    [ef.kqX.NO_INPUT_DEVICES_DETECTED]: { predicate: () => g.A.hasActiveErrorOfType(m.iy.NO_INPUT_DEVICES) },
    [ef.kqX.VIDEO_BACKGROUND_UNAVAILABLE]: { predicate: () => eM.A.isConnected() && et.A.videoBackgroundUnavailable },
    [ef.kqX.HARDWARE_MUTE]: {
        predicate: () =>
            eM.A.isConnected() &&
            eD.Ay.isHardwareMute() &&
            eD.Ay.isHardwareMuteNoticeEnabled() &&
            !J.Ay.disableHardwareMuteSilenceAlert,
        metadata: () => {
            let e = eD.Ay.getInputDeviceId(),
                t = el.A.getVendor(e),
                n = el.A.getModel(e);
            if (null != t && null != n) return { vendor: t, model: n };
        },
    },
    [ef.kqX.PTT_NO_KEYBIND_WARNING]: {
        predicate: () =>
            !!eM.A.isConnected() &&
            eD.Ay.getMode() === ef.TBI.PUSH_TO_TALK &&
            !(eD.Ay.getSettings().modeOptions.shortcut.length > 0) &&
            !!en.A.getConfig({ location: "NoticeStore" }).showPTTNoKeybindWarning,
    },
    [ef.kqX.DISPATCH_ERROR]: {
        predicate: () => null != e$.A.getLastError(),
        metadata: () => ({ error: e$.A.getLastError() }),
    },
    [ef.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != ez.A.getLastProgress(),
        metadata: () => ez.A.getLastProgress(),
    },
    [ef.kqX.SPOTIFY_AUTO_PAUSED]: { predicate: () => Z.A.wasAutoPaused() },
    [ef.kqX.UNCLAIMED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return null != t && !t.isClaimed();
        },
    },
    [ef.kqX.PENDING_MEMBER]: {
        predicate: (e) => {
            let { selectedGuildId: t, currentUser: n } = e;
            return (
                (null != t &&
                    null != n &&
                    !eL.A.getGuild(t)?.features.has(ef.GuildFeatures.GUILD_ONBOARDING) &&
                    eR.Ay.getMember(t, n.id)?.isPending) ??
                !1
            );
        },
    },
    [ef.kqX.OUTBOUND_PROMOTION]: { predicate: () => (0, W.So)() },
    [ef.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => eY.isPlatformEmbedded && (!l.A.supported() || eq.A.isCorruptInstallation()),
    },
    [ef.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t && eF.A.hasVideo(t) && !eD.Ay.supports(e0.O5.VIDEO) && !ta(ef.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
        },
    },
    [ef.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return x.Ay.canRedeemPremiumPerks(t) && eC.getDetectedOffPlatformPremiumPerks().length > 0;
        },
        metadata: () => eC.getDetectedOffPlatformPremiumPerks()[0],
    },
    [ef.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () =>
            !ta(ef.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && eC.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => eC.getDetectedOffPlatformPremiumPerks()[0],
    },
    [ef.kqX.STREAMER_MODE]: { predicate: () => eG.A.enabled },
    [ef.kqX.DOWNLOAD_NAG]: { predicate: () => !eY.isPlatformEmbedded && !ta(ef.kqX.DOWNLOAD_NAG) },
    [ef.kqX.QUEST_APP_UPSELL]: {
        predicate: () =>
            (0, eY.isOculusWeb)() && !ta(ef.kqX.QUEST_APP_UPSELL) && $.A.getConfig({ location: "NoticeStore" }).enabled,
    },
    [ef.kqX.SCHEDULED_MAINTENANCE]: {
        predicate: () => null != ew.A.getScheduledMaintenance(),
        metadata: () => {
            let e = ew.A.getScheduledMaintenance();
            if (null != e) return { id: e.id, start: new Date(e.scheduled_for), end: new Date(e.scheduled_until) };
        },
    },
    [ef.kqX.SURVEY]: { predicate: () => null != ex.Ay.getCurrentSurvey(), metadata: () => ex.Ay.getCurrentSurvey() },
    [ef.kqX.UNVERIFIED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.email != null && !t.verified;
        },
    },
    [ef.kqX.BOUNCED_EMAIL_DETECTED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.hasBouncedEmail;
        },
    },
    [ef.kqX.CONNECT_SPOTIFY]: {
        predicate: () =>
            !Z.A.hasConnectedAccount() &&
            N.Ay.isObservedAppRunning(_.A.get(ef.fg2.SPOTIFY).name) &&
            !ta(ef.kqX.CONNECT_SPOTIFY),
    },
    [ef.kqX.WIN32_DEPRECATED_MESSAGE]: {
        predicate: () => u.A?.os.arch === "ia32" && u.A?.process.platform === "win32",
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [ef.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (u.A?.process.platform === "win32")
                try {
                    if (parseInt(u.A?.os.release.split(".")[0]) >= 10) return !1;
                    return !tr();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [ef.kqX.WIN_COMPAT_MODE_MESSAGE]: {
        predicate: () => {
            if (u.A?.process.platform === "win32")
                try {
                    if (parseInt(u.A?.os.release.split(".")[0]) >= 10) return !1;
                    return tr();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [ef.kqX.MACOS_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (u.A?.process.platform === "darwin")
                try {
                    return 21 > parseInt(u.A?.os.release.split(".")[0]);
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [ef.kqX.CONNECT_PLAYSTATION]: {
        predicate: () =>
            ed.A.isSuggestedAccountType(ef.fg2.PLAYSTATION) &&
            null == ed.A.getAccount(null, ef.fg2.PLAYSTATION) &&
            !ta(ef.kqX.CONNECT_PLAYSTATION),
    },
    [ef.kqX.PASSKEY_BACKUP]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.mfaEnabled && ei.A.hasFetchedCredentials() && !ei.A.hasCredentials && !ta(ef.kqX.PASSKEY_BACKUP);
        },
    },
    [ef.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () =>
            eH.A.getAlmostExpiringTrialOffersForReminder([eZ.pe.TIER_2]).length > 0 &&
            !ta(ef.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
    },
    [ef.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () =>
            eH.A.getAlmostExpiringTrialOffersForReminder([eZ.pe.TIER_0]).length > 0 &&
            !ta(ef.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
    },
    [ef.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () =>
            eH.A.getAlmostExpiringDiscountOffersForReminder([eZ.pe.TIER_2]).length > 0 &&
            !ta(ef.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
    },
    [ef.kqX.PREMIUM_UNCANCEL]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                a =
                    t?.canceledAt != null &&
                    t?.status === ef.Dmq.CANCELED &&
                    1 >= r()().diff(r()(t.canceledAt), "days"),
                s = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                l =
                    null != t &&
                    t.status === ef.Dmq.CANCELED &&
                    !s &&
                    i <= 7 &&
                    i >= 0 &&
                    (0, x.YE)(n, eZ.PremiumTypes.TIER_2) &&
                    !a &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ta(ef.kqX.PREMIUM_UNCANCEL) && l;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                i = null != t ? (0, x.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? x.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [ef.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                a = null != t ? r()(t.currentPeriodEnd).diff(r()(t.currentPeriodStart).startOf("day"), "days") : 0,
                s = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                l = eh.A.applicationIdsFetched.has(eZ.tv),
                o = eh.A.getForApplication(eZ.tv),
                d = null != t ? (0, x.EL)(t) : null,
                c = null != d ? x.Ay.getSkuIdForPlan(d.planId) : null,
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
                    t.status !== ef.Dmq.PAST_DUE &&
                    !s &&
                    l &&
                    !u &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ta(ef.kqX.PREMIUM_MISSING_PAYMENT) && _;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                i = null != t ? (0, x.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? x.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [ef.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && null != t.paymentSourceId ? eV.A.getPaymentSource(t.paymentSourceId) : null,
                a = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                s =
                    null != t &&
                    t.status === ef.Dmq.PAST_DUE &&
                    !a &&
                    null != i &&
                    i.invalid &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ta(ef.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [ef.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                a =
                    null != t &&
                    t.status === ef.Dmq.PAST_DUE &&
                    !i &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ta(ef.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [ef.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != ej.A.testModeApplicationId,
        metadata: () => {
            if (null == ej.A.testModeApplicationId) return {};
            let e = ej.A.testModeApplicationId,
                t = h.A.getApplication(e);
            return { applicationName: null != t ? t.name : e, applicationId: e };
        },
    },
    [ef.kqX.PREMIUM_REACTIVATE]: { predicate: () => !ta(ef.kqX.PREMIUM_REACTIVATE) && V.shouldShowReactivateNotice() },
    [ef.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                a = null != t && null != t.paymentSourceId ? eV.A.getPaymentSource(t.paymentSourceId) : null,
                s = null != a && eJ.AD.has(a.type),
                l =
                    null != t &&
                    t.status === ef.Dmq.PAST_DUE &&
                    !i &&
                    s &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ta(ef.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && l;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return null == t
                ? { daysPastDue: 0, dismissUntil: r()().toDate() }
                : {
                      daysPastDue: t.status === ef.Dmq.PAST_DUE ? r()().diff(t.currentPeriodStart, "days") : 0,
                      dismissUntil: (0, x.ji)(t).expiresDate.toDate(),
                  };
        },
    },
    [ef.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e,
                n = null != t ? eL.A.getGuild(t) : null;
            return (
                (null != t &&
                    null != y.A.getMentionRaidDetected(t) &&
                    n?.features.has(ef.GuildFeatures.COMMUNITY) &&
                    !ta(ef.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
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
    [ef.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = er.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, R._z)(e),
                n = z.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= eQ.tZ;
        },
        metadata: () => {
            let e = er.A.getCurrentUserActiveStream();
            return { streamKey: null != e ? (0, R._z)(e) : null };
        },
    },
    [ef.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eV.A.paymentSources ?? {};
            return U.A.getIsTargeted() && !(0, x.TW)(t) && 0 !== Object.keys(n).length;
        },
    },
    [ef.kqX.PREMIUM_MARKETING_NAGBAR]: {
        predicate: () => {
            let e = Y.A.getMarketingComponentByType(a.C.NAGBAR);
            if (null == e) return !1;
            if (null == e.promotionId) return !0;
            let t = Y.A.getPromotionByTypeAndId(K.pt.MARKETING_MOMENT, e.promotionId);
            return (
                !(null != t && t.endDate < new Date()) &&
                !(0, f.u$)(o.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, e.promotionId).isDismissed
            );
        },
    },
    [ef.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR]: {
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
    [ef.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !ta(ef.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && q.Cm(),
        metadata: () => ({ dismissUntil: r()().add(180, "days").toDate(), sampleRate: 0.1 }),
    },
    [ef.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: { predicate: () => q.h6(), metadata: () => ({ sampleRate: 0.1 }) },
    [ef.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
                ta(ef.kqX.SYSTEM_SERVICE_WARNING) ||
                !(0, Q.yA)(N.Ay) ||
                null == t ||
                eD.Ay.getMode() !== ef.TBI.PUSH_TO_TALK
            )
                return !1;
            let n = N.Ay.getVisibleGame();
            return null != n && !!n.elevated;
        },
    },
    [ef.kqX.E2EE_UPDATE_REQUIRED]: {
        predicate: () => {
            if (ta(ef.kqX.E2EE_UPDATE_REQUIRED) || !eM.A.isConnected()) return !1;
            let e = eD.Ay.getMediaEngine();
            return 1 !== (e.getSupportedSecureFramesProtocolVersion?.() ?? 0);
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [ef.kqX.WINDOWS_MEDIA_PACK_REQUIRED]: {
        predicate: () =>
            !(
                !eY.isPlatformEmbedded ||
                u.A?.process.platform !== "win32" ||
                ta(ef.kqX.WINDOWS_MEDIA_PACK_REQUIRED) ||
                eK.Ay.getEnableHardwareAcceleration()
            ) && !1 === eD.Ay.isH264MfDecodeAvailable(),
    },
    [ef.kqX.RIOT_MIGRATION]: {
        predicate: () => {
            if (!(0, E.getIsRiotSocialSDKMigrationEnabled)({ location: "NoticeStore" })) return !1;
            let e = null != ed.A.getAccount(null, ef.fg2.RIOT_GAMES),
                t = null != ed.A.getAccount(null, ef.fg2.LEAGUE_OF_LEGENDS);
            if (ta(ef.kqX.RIOT_MIGRATION) || (0, f.k8)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE) || (!e && !t))
                return !1;
            let n = _.A.get(ef.fg2.LEAGUE_OF_LEGENDS),
                i = _.A.get(ef.fg2.RIOT_GAMES);
            return null != n.migrationData && null != i.migrationData;
        },
    },
    [ef.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (
                !(0, E.getIsRiotSocialSDKMigrationEnabled)({ location: "NoticeStore" }) ||
                ta(ef.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN) ||
                (0, f.k8)(o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE)
            )
                return !1;
            let i = null != n ? eL.A.getGuild(n) : null,
                r = (0, eW.$3)({ permission: ef.xBc.ADMINISTRATOR, user: t, context: i }),
                a = null != i ? eO.A.getSortedRoles(i.id).filter((e) => null === e.tags.guild_connections) : null;
            return null != i && !!r && null != a && !!(0, A.X)(a, [ef.fg2.RIOT_GAMES, ef.fg2.LEAGUE_OF_LEGENDS]);
        },
    },
};
function to() {
    if (!C.A.isConnected()) return !1;
    te = null;
    let e = G.default.getCurrentUser();
    if (null == e) return !1;
    let t = eB.A.getPremiumSubscription(),
        n = eU.A.getGuildId(),
        i = eP.A.getVoiceChannelId(),
        r = null != i ? eF.A.getVoiceStateForChannel(i) : null;
    for (let a of ts)
        if (
            null != tl[a] &&
            tl[a].predicate({
                selectedGuildId: n,
                voiceChannelId: i,
                voiceState: r,
                currentUser: e,
                premiumSubscription: t,
            })
        ) {
            let i = tl[a].metadata?.({ currentUser: e, premiumSubscription: t, selectedGuildId: n });
            te = { ...e9, type: a, metadata: i };
            break;
        }
    if (null != te) {
        te.metadata?.sampleRate != null &&
            null == e8[te.type] &&
            (e8[te.type] = Math.random() <= te.metadata.sampleRate);
        let e = !1 === e8[te.type];
        (ta(te.type) || e) && (te = null);
    }
}
function td() {
    return eG.A.enabled || delete e7[ef.kqX.STREAMER_MODE], to();
}
class tc extends s.Ay.Store {
    static displayName = "NoticeStore";
    initialize() {
        this.syncWith(
            [g.A, ex.Ay, eb.A, eC, eU.A, Y.A, eH.A, es.default, ed.A, ee.A, L.A, z.A, er.A, N.Ay, ei.A, g.A, I.A, M.A],
            to,
        ),
            this.waitFor(
                g.A,
                h.A,
                er.A,
                ea.default,
                es.default,
                el.A,
                eo.A,
                U.A,
                ed.A,
                eC,
                e$.A,
                ez.A,
                eq.A,
                eh.A,
                S.A,
                C.A,
                y.A,
                L.A,
                eR.Ay,
                I.A,
                eO.A,
                eL.A,
                v.A,
                b.A,
                eD.Ay,
                ey.A,
                M.A,
                eV.A,
                ev.A,
                H.A,
                eb.A,
                Y.A,
                z.A,
                eM.A,
                N.Ay,
                eP.A,
                eU.A,
                Z.A,
                ew.A,
                eG.A,
                V,
                eB.A,
                ex.Ay,
                ej.A,
                J.Ay,
                eH.A,
                ek.A,
                ee.A,
                G.default,
                et.A,
                eF.A,
                ei.A,
            );
    }
    hasNotice() {
        return null != te && null != te.type;
    }
    getNotice() {
        return null == ek.A.getAction() ? te : null;
    }
    isNoticeDismissed(e) {
        return ta(e);
    }
}
let tu = new tc(c.h, {
    CURRENT_USER_UPDATE: to,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: to,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: to,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: to,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: to,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: to,
    GUILD_CREATE: to,
    GUILD_DELETE: to,
    AUDIO_INPUT_DETECTED: to,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: to,
    CERTIFIED_DEVICES_SET: to,
    AUDIO_SET_INPUT_DEVICE: to,
    AUDIO_SET_OUTPUT_DEVICE: to,
    MEDIA_ENGINE_DEVICES: to,
    RTC_CONNECTION_STATE: to,
    RPC_APP_AUTHENTICATED: to,
    RPC_APP_DISCONNECTED: to,
    USER_CONNECTIONS_UPDATE: to,
    WINDOW_FOCUS: to,
    INSTANT_INVITE_CREATE: to,
    INSTANT_INVITE_REVOKE_SUCCESS: to,
    SPOTIFY_PLAYER_PAUSE: to,
    RUNNING_GAMES_CHANGE: to,
    EXPERIMENTS_FETCH_SUCCESS: to,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: to,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: to,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: to,
    DEVELOPER_TEST_MODE_RESET: to,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: to,
    DISPATCH_APPLICATION_INSTALL: to,
    IMPERSONATE_STOP: to,
    IMPERSONATE_UPDATE: to,
    GUILD_MEMBER_ADD: function (e) {
        return e.user.id === ea.default.getId() && to();
    },
    GUILD_MEMBER_UPDATE: to,
    SURVEY_FETCHED: to,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: to,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: to,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: to,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: to,
    UNSYNCED_USER_SETTINGS_UPDATE: to,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return (
            (te?.type === ef.kqX.INVITED_TO_SPEAK ||
                t.some((e) => {
                    let { userId: t } = e;
                    return t !== ea.default.getId();
                })) &&
            to()
        );
    },
    STREAMER_MODE_UPDATE: td,
    RUNNING_STREAMER_TOOLS_CHANGE: td,
    DISPATCH_APPLICATION_ERROR: function () {
        return delete e7[ef.kqX.DISPATCH_ERROR], to();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return delete e7[ef.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], to();
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return to();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return to();
    },
    NOTICE_SHOW: function (e) {
        te = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != te && (null == e.id || e.id === te.id) && (tn(te.type, e.isTemporary, e.untilAtLeast), to());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return tn(t), to();
    },
    LOGOUT: function () {
        (e7 = {}), (e8 = {}), (te = null);
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: to,
    AUTO_MODERATION_MENTION_RAID_DETECTION: to,
    REPORT_AV_ERROR: to,
    ACTIVE_AV_ERRORS_CHANGED: to,
    MEDIA_ENGINE_MF_AVAILABILITY_CHECKED: to,
    AUDIO_SET_MODE: to,
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: to,
});
