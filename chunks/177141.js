"use strict";
n.d(t, { f7: () => e1, Re: () => e0, Ay: () => tl, pe: () => eQ, rV: () => eJ });
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
    f = n(941314),
    h = n(380786),
    p = n(587895),
    E = n(145643),
    m = n(826673),
    g = n(367727),
    A = n(587054),
    I = n(487329),
    T = n(161518),
    S = n(736056),
    N = n(952818),
    y = n(587626),
    C = n(652896),
    v = n(585510),
    O = n(610136),
    R = n(229527),
    b = n(93474),
    D = n(164956),
    L = n(857071),
    w = n(869968),
    M = n(243217),
    P = n(287809),
    x = n(428262);
let U = !1;
class k extends a.Ay.Store {
    initialize() {
        this.waitFor(P.default);
    }
    static displayName = "SubscriptionRemindersStore";
    shouldShowReactivateNotice() {
        let e = P.default.getCurrentUser();
        return !(0, x.TW)(e) && U;
    }
}
let G = new k(c.h, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (null != t) {
            let e = M.A.createFromServer(t);
            if (null == (0, x.EL)(e) || e.metadata?.ended_at == null) return;
            let n = r()(e.metadata.ended_at);
            r()().isBetween(n.clone().add(4, "days"), n.clone().add(11, "days")) && (U = !0);
        }
    },
});
var F = n(380619),
    V = n(233317),
    B = n(39423),
    H = n(264779),
    j = n(374200),
    Y = n(852218),
    W = n(160394),
    K = n(859703),
    z = n(988903),
    $ = n(655116),
    q = n(105530),
    Z = n(935671),
    X = n(742023),
    Q = n(617617),
    J = n(499156),
    ee = n(976910),
    et = n(616356),
    en = n(495544),
    ei = n(546183),
    er = n(347481),
    es = n(734057),
    ea = n(30370);
n(321073);
var eo = n(735438),
    el = n.n(eo),
    eu = n(339048),
    ec = n(830382),
    ed = n(627363),
    e_ = n(469778),
    ef = n(67480),
    eh = n(652215);
let ep = "DetectedOffPlatformPremiumPerksStore",
    eE = {},
    em = {},
    eg = [];
function eA() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of el().values(em)) {
        if (eg.includes(t)) continue;
        let i = p.A.getApplication(n);
        if (null == i) {
            p.A.isFetchingApplication(n) || p.A.didFetchingApplicationFail(n) || ed.Ay.fetchApplication(n);
            continue;
        }
        let r = ef.A.get(t);
        if (null == r) {
            ef.A.isFetching(t) || ef.A.didFetchingSkuFail(t) || ec.EX(i.id, t);
            continue;
        }
        e_.A.applicationIdsFetching.has(i.id) ||
        e_.A.isEntitledToSku(P.default.getCurrentUser(), t, i.id, i.id) ||
        !r.available
            ? null != eE[t] && (delete eE[t], (e = !0))
            : ((eE[t] = { skuId: t, applicationId: n }), (e = !0));
    }
    return e;
}
class eI extends a.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        this.waitFor(p.A, e_.A, N.Ay, ef.A, P.default), (eg = u.w.get(ep) ?? eg);
    }
    getDetectedOffPlatformPremiumPerks() {
        return el().values(eE);
    }
}
let eT = new eI(c.h, {
    LOGOUT: function () {
        (eE = {}), (em = {});
    },
    SKU_FETCH_SUCCESS: eA,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eA,
    ENTITLEMENT_CREATE: eA,
    APPLICATION_FETCH_SUCCESS: eA,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete eE[t], eg.includes(t))) return !1;
        eg.push(t), u.w.set(ep, eg);
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of N.Ay.getRunningGames())
            if (null != t && n !== eh.d3x.DISCORD)
                for (let { skuId: n, applicationId: i } of eh.m_i)
                    i !== t ||
                        eg.includes(n) ||
                        (null == em[n] &&
                            (e_.A.applicationIdsFetched.has(i) ||
                                e_.A.applicationIdsFetching.has(i) ||
                                null != e_.A.getForSku(n) ||
                                eu.LM(i),
                            (em[n] = { skuId: n, applicationId: i }),
                            (e = !0)));
        return e && eA(), e;
    },
});
var eS = n(696451),
    eN = n(317525),
    ey = n(71393),
    eC = n(235058),
    ev = n(803224),
    eO = n(576705),
    eR = n(362790),
    eb = n(763827),
    eD = n(309010),
    eL = n(967198),
    ew = n(437959),
    eM = n(351906),
    eP = n(274184),
    ex = n(870570),
    eU = n(977997),
    ek = n(295405),
    eG = n(166403),
    eF = n(354670),
    eV = n(147964),
    eB = n(488926),
    eH = n(723702),
    ej = n(19575),
    eY = n(755439),
    eW = n(422033),
    eK = n(966846);
n(436317);
var ez = n(788868),
    e$ = n(88001),
    eq = n(190107),
    eZ = n(818348),
    eX = n(731854);
let eQ = {
        [eh.kqX.DOWNLOAD_NAG]: l.M.NAGBAR_NOTICE_DOWNLOAD,
        [eh.kqX.CONNECT_SPOTIFY]: l.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eh.kqX.CONNECT_PLAYSTATION]: l.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eh.kqX.PASSKEY_BACKUP]: l.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [eh.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: l.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eh.kqX.PREMIUM_REACTIVATE]: l.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eh.kqX.BOUNCED_EMAIL_DETECTED]: l.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eh.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: l.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eh.kqX.CHECKOUT_RECOVERY_NAGBAR]: l.M.CHECKOUT_RECOVERY_NAGBAR,
        [eh.kqX.QUEST_APP_UPSELL]: l.M.NAGBAR_QUEST_APP_UPSELL,
        [eh.kqX.RIOT_MIGRATION]: l.M.RIOT_CONNECTION_DEPRECATION_DISABLE,
        [eh.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: l.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
    },
    eJ = { [eh.kqX.GIFTING_PROMOTION_REMINDER]: l.M.GIFTING_PROMOTION_REMINDER },
    e0 = {
        [eh.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: l.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eh.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: l.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eh.kqX.RIOT_MIGRATION]: l.M.RIOT_CONNECTION_DEPRECATION,
        [eh.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: l.M.RIOT_CONNECTION_DEPRECATION_ADMIN,
    },
    e1 = { [eh.kqX.OUTBOUND_PROMOTION]: l.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    e2 = {
        [eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
        [eh.kqX.PREMIUM_UNCANCEL]: "hideUncancelReminder",
        [eh.kqX.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
        [eh.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
        [eh.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
        [eh.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
        [eh.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
        [eh.kqX.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
        [eh.kqX.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
        [eh.kqX.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
        [eh.kqX.WIN_COMPAT_MODE_MESSAGE]: "hideWinCompatModeNotice",
        [eh.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [eh.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [eh.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [eh.kqX.MACOS_19_DEPRECATED_MESSAGE]: "hideMacOS19DeprecationMessageNotice",
        [eh.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
        [eh.kqX.E2EE_UPDATE_REQUIRED]: "hideE2EEUpdateRequiredNotice",
    },
    e3 = new Set([
        eh.kqX.NO_INPUT_DETECTED,
        eh.kqX.NO_INPUT_DEVICES_DETECTED,
        eh.kqX.STREAMER_MODE,
        eh.kqX.VIDEO_UNSUPPORTED_BROWSER,
        eh.kqX.SPOTIFY_AUTO_PAUSED,
        eh.kqX.DISPATCH_ERROR,
        eh.kqX.DISPATCH_ERROR,
        eh.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eh.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    ]),
    e6 = {},
    e4 = {},
    e5 = Object.freeze({ id: null, message: null, buttonText: null, callback: void 0, metadata: null }),
    e7 = null;
function e8(e) {
    return e2[e] + "-untilAtLeast";
}
function e9(e, t, n) {
    if (null == e) return;
    let i = e2[e];
    (null == i || t || u.w.set(i, !0), e3.has(e) && (e6[e] = !0), null != n && null != i)
        ? u.w.set(e8(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
        : u.w.remove(e8(e));
}
let te = null;
function tt() {
    if (null != te) return te;
    try {
        let e = document.createElement("canvas").getContext("2d"),
            t = "\uE700\uE701\uE702\uE703\uE704\uE705\uE706\uE707";
        e.font = "16px monospace";
        let n = e.measureText(t).width;
        (e.font = '16px "Segoe MDL2 Assets", monospace'), (te = e.measureText(t).width !== n);
    } catch (e) {
        te = !1;
    }
    return te;
}
function tn(e) {
    if (null == e) return !1;
    let t = e0[e];
    if (null != t) {
        let n = (0, A.D)(e);
        return (0, g.FZ)(t, n).isDismissed;
    }
    let n = eQ[e];
    if (null != n) return (0, m.k8)(n);
    let i = e2[e];
    if (null != i) {
        let t,
            n = null != (t = u.w.get(e8(e))) ? r()(t) : null;
        if (null != n) return n?.isAfter(r()());
    }
    let s = e6[e];
    return !!s || (null != i && "" !== i ? u.w.get(i) : !!e3.has(e) && s);
}
let ti = [
    eh.kqX.QUARANTINED,
    eh.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eh.kqX.VIEWING_ROLES,
    eh.kqX.INVITED_TO_SPEAK,
    eh.kqX.LURKING_GUILD,
    eh.kqX.VOICE_DISABLED,
    eh.kqX.NO_INPUT_DEVICES_DETECTED,
    eh.kqX.NO_INPUT_DETECTED,
    eh.kqX.PTT_NO_KEYBIND_WARNING,
    eh.kqX.HARDWARE_MUTE,
    eh.kqX.DISPATCH_ERROR,
    eh.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eh.kqX.SPOTIFY_AUTO_PAUSED,
    eh.kqX.WIN32_DEPRECATED_MESSAGE,
    eh.kqX.WIN7_8_DEPRECATED_MESSAGE,
    eh.kqX.WIN_COMPAT_MODE_MESSAGE,
    eh.kqX.MACOS_19_DEPRECATED_MESSAGE,
    eh.kqX.E2EE_UPDATE_REQUIRED,
    eh.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    eh.kqX.VOICE_CONNECTED_LAST_SESSION,
    eh.kqX.SYSTEM_SERVICE_WARNING,
    eh.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
    eh.kqX.GUILD_RAID_NOTIFICATION,
    eh.kqX.GIFTING_PROMOTION_REMINDER,
    eh.kqX.RIOT_MIGRATION,
    eh.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
    eh.kqX.QUESTS_PROGRESS_INTERRUPTION,
    eh.kqX.UNCLAIMED_ACCOUNT,
    eh.kqX.PENDING_MEMBER,
    eh.kqX.CHECKOUT_RECOVERY_NAGBAR,
    eh.kqX.PREMIUM_MARKETING_NAGBAR,
    eh.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
    eh.kqX.OUTBOUND_PROMOTION,
    eh.kqX.CORRUPT_INSTALLATION,
    eh.kqX.VIDEO_UNSUPPORTED_BROWSER,
    eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
    eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
    eh.kqX.STREAMER_MODE,
    eh.kqX.SCHEDULED_MAINTENANCE,
    eh.kqX.BOUNCED_EMAIL_DETECTED,
    eh.kqX.UNVERIFIED_ACCOUNT,
    eh.kqX.PREMIUM_TIER_2_TRIAL_ENDING,
    eh.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
    eh.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
    eh.kqX.PREMIUM_UNCANCEL,
    eh.kqX.PREMIUM_MISSING_PAYMENT,
    eh.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
    eh.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
    eh.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
    eh.kqX.PREMIUM_REACTIVATE,
    eh.kqX.PASSKEY_BACKUP,
    eh.kqX.APPLICATION_TEST_MODE,
    eh.kqX.QUEST_APP_UPSELL,
    eh.kqX.DOWNLOAD_NAG,
    eh.kqX.CONNECT_SPOTIFY,
    eh.kqX.CONNECT_PLAYSTATION,
    eh.kqX.SURVEY,
    eh.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
    eh.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
];
eh.kqX.QUARANTINED,
    eh.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eh.kqX.VIEWING_ROLES,
    eh.kqX.INVITED_TO_SPEAK,
    eh.kqX.LURKING_GUILD,
    eh.kqX.VOICE_DISABLED,
    eh.kqX.NO_INPUT_DETECTED,
    eh.kqX.HARDWARE_MUTE,
    eh.kqX.DISPATCH_ERROR,
    eh.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eh.kqX.SPOTIFY_AUTO_PAUSED,
    eh.kqX.VOICE_CONNECTED_LAST_SESSION,
    eh.kqX.PENDING_MEMBER,
    eh.kqX.STREAMER_MODE,
    eh.kqX.SCHEDULED_MAINTENANCE;
let tr = {
    [eh.kqX.GIFTING_PROMOTION_REMINDER]: { predicate: () => (0, F.MD)() },
    [eh.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, v.dj)().show && !tn(eh.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({ dismissUntil: r()().add(3, "hours").toDate() }),
    },
    [eh.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let i = eS.Ay.getMember(n, t.id);
            return null != i && !i.isPending && (0, R.TR)(i);
        },
    },
    [eh.kqX.QUARANTINED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t.hasFlag(eh.nhx.QUARANTINED);
        },
    },
    [eh.kqX.VIEWING_ROLES]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return D.A.isViewingRoles(t);
        },
    },
    [eh.kqX.INVITED_TO_SPEAK]: {
        predicate: (e) => {
            let { voiceState: t } = e;
            return (0, q.eY)(t) === q.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        },
    },
    [eh.kqX.LURKING_GUILD]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && L.A.isLurking(t);
        },
    },
    [eh.kqX.VOICE_DISABLED]: { predicate: () => null != eb.A.getRemoteDisconnectVoiceChannelId() },
    [eh.kqX.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != eb.A.getLastSessionVoiceChannelId() },
    [eh.kqX.NO_INPUT_DETECTED]: { predicate: () => T.A.hasActiveErrorOfType(I.iy.NO_AUDIO_INPUT_DETECTED) },
    [eh.kqX.NO_INPUT_DEVICES_DETECTED]: { predicate: () => T.A.hasActiveErrorOfType(I.iy.NO_INPUT_DEVICES) },
    [eh.kqX.HARDWARE_MUTE]: {
        predicate: () =>
            eb.A.isConnected() &&
            eC.Ay.isHardwareMute() &&
            eC.Ay.isHardwareMuteNoticeEnabled() &&
            !X.Ay.disableHardwareMuteSilenceAlert,
        metadata: () => {
            let e = eC.Ay.getInputDeviceId(),
                t = er.A.getVendor(e),
                n = er.A.getModel(e);
            if (null != t && null != n) return { vendor: t, model: n };
        },
    },
    [eh.kqX.PTT_NO_KEYBIND_WARNING]: {
        predicate: () =>
            !!eb.A.isConnected() &&
            eC.Ay.getMode() === eh.TBI.PUSH_TO_TALK &&
            !(eC.Ay.getSettings().modeOptions.shortcut.length > 0) &&
            !!J.A.getConfig({ location: "NoticeStore" }).showPTTNoKeybindWarning,
    },
    [eh.kqX.DISPATCH_ERROR]: {
        predicate: () => null != eY.A.getLastError(),
        metadata: () => ({ error: eY.A.getLastError() }),
    },
    [eh.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != eW.A.getLastProgress(),
        metadata: () => eW.A.getLastProgress(),
    },
    [eh.kqX.SPOTIFY_AUTO_PAUSED]: { predicate: () => $.A.wasAutoPaused() },
    [eh.kqX.UNCLAIMED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return null != t && !t.isClaimed();
        },
    },
    [eh.kqX.PENDING_MEMBER]: {
        predicate: (e) => {
            let { selectedGuildId: t, currentUser: n } = e;
            return (
                (null != t &&
                    null != n &&
                    !ey.A.getGuild(t)?.features.has(eh.GuildFeatures.GUILD_ONBOARDING) &&
                    eS.Ay.getMember(t, n.id)?.isPending) ??
                !1
            );
        },
    },
    [eh.kqX.OUTBOUND_PROMOTION]: { predicate: () => (0, H.So)() },
    [eh.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => eH.isPlatformEmbedded && (!o.A.supported() || eK.A.isCorruptInstallation()),
    },
    [eh.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t && eU.A.hasVideo(t) && !eC.Ay.supports(eX.O5.VIDEO) && !tn(eh.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
        },
    },
    [eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return x.Ay.canRedeemPremiumPerks(t) && eT.getDetectedOffPlatformPremiumPerks().length > 0;
        },
        metadata: () => eT.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () =>
            !tn(eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && eT.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => eT.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eh.kqX.STREAMER_MODE]: { predicate: () => eM.A.enabled },
    [eh.kqX.DOWNLOAD_NAG]: { predicate: () => !eH.isPlatformEmbedded && !tn(eh.kqX.DOWNLOAD_NAG) },
    [eh.kqX.QUEST_APP_UPSELL]: {
        predicate: () =>
            (0, eH.isOculusWeb)() && !tn(eh.kqX.QUEST_APP_UPSELL) && W.A.getConfig({ location: "NoticeStore" }).enabled,
    },
    [eh.kqX.SCHEDULED_MAINTENANCE]: {
        predicate: () => null != ew.A.getScheduledMaintenance(),
        metadata: () => {
            let e = ew.A.getScheduledMaintenance();
            if (null != e) return { id: e.id, start: new Date(e.scheduled_for), end: new Date(e.scheduled_until) };
        },
    },
    [eh.kqX.SURVEY]: { predicate: () => null != eP.Ay.getCurrentSurvey(), metadata: () => eP.Ay.getCurrentSurvey() },
    [eh.kqX.UNVERIFIED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.email != null && !t.verified;
        },
    },
    [eh.kqX.BOUNCED_EMAIL_DETECTED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.hasBouncedEmail;
        },
    },
    [eh.kqX.CONNECT_SPOTIFY]: {
        predicate: () =>
            !$.A.hasConnectedAccount() &&
            N.Ay.isObservedAppRunning(_.A.get(eh.fg2.SPOTIFY).name) &&
            !tn(eh.kqX.CONNECT_SPOTIFY),
    },
    [eh.kqX.WIN32_DEPRECATED_MESSAGE]: {
        predicate: () => d.A?.os.arch === "ia32" && d.A?.process.platform === "win32",
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eh.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (d.A?.process.platform === "win32")
                try {
                    if (parseInt(d.A?.os.release.split(".")[0]) >= 10) return !1;
                    return !tt();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eh.kqX.WIN_COMPAT_MODE_MESSAGE]: {
        predicate: () => {
            if (d.A?.process.platform === "win32")
                try {
                    if (parseInt(d.A?.os.release.split(".")[0]) >= 10) return !1;
                    return tt();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eh.kqX.MACOS_19_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (d.A?.process.platform === "darwin")
                try {
                    return 20 > parseInt(d.A?.os.release.split(".")[0]);
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eh.kqX.CONNECT_PLAYSTATION]: {
        predicate: () =>
            ea.A.isSuggestedAccountType(eh.fg2.PLAYSTATION) &&
            null == ea.A.getAccount(null, eh.fg2.PLAYSTATION) &&
            !tn(eh.kqX.CONNECT_PLAYSTATION),
    },
    [eh.kqX.PASSKEY_BACKUP]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.mfaEnabled && ee.A.hasFetchedCredentials() && !ee.A.hasCredentials && !tn(eh.kqX.PASSKEY_BACKUP);
        },
    },
    [eh.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () =>
            eF.A.getAlmostExpiringTrialOffersForReminder([ez.pe.TIER_2]).length > 0 &&
            !tn(eh.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
    },
    [eh.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () =>
            eF.A.getAlmostExpiringTrialOffersForReminder([ez.pe.TIER_0]).length > 0 &&
            !tn(eh.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
    },
    [eh.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () =>
            eF.A.getAlmostExpiringDiscountOffersForReminder([ez.pe.TIER_2]).length > 0 &&
            !tn(eh.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
    },
    [eh.kqX.PREMIUM_UNCANCEL]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                s =
                    t?.canceledAt != null &&
                    t?.status === eh.Dmq.CANCELED &&
                    1 >= r()().diff(r()(t.canceledAt), "days"),
                a = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                o =
                    null != t &&
                    t.status === eh.Dmq.CANCELED &&
                    !a &&
                    i <= 7 &&
                    i >= 0 &&
                    (0, x.YE)(n, ez.PremiumTypes.TIER_2) &&
                    !s &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tn(eh.kqX.PREMIUM_UNCANCEL) && o;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                i = null != t ? (0, x.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? x.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eh.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                s = null != t ? r()(t.currentPeriodEnd).diff(r()(t.currentPeriodStart).startOf("day"), "days") : 0,
                a = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                o = e_.A.applicationIdsFetched.has(ez.tv),
                l = e_.A.getForApplication(ez.tv),
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
                    t.status !== eh.Dmq.PAST_DUE &&
                    !a &&
                    o &&
                    !d &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tn(eh.kqX.PREMIUM_MISSING_PAYMENT) && _;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                i = null != t ? (0, x.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? x.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eh.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && null != t.paymentSourceId ? ek.A.getPaymentSource(t.paymentSourceId) : null,
                s = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                a =
                    null != t &&
                    t.status === eh.Dmq.PAST_DUE &&
                    !s &&
                    null != i &&
                    i.invalid &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tn(eh.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eh.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                s =
                    null != t &&
                    t.status === eh.Dmq.PAST_DUE &&
                    !i &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tn(eh.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && s;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eh.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != eV.A.testModeApplicationId,
        metadata: () => {
            if (null == eV.A.testModeApplicationId) return {};
            let e = eV.A.testModeApplicationId,
                t = p.A.getApplication(e);
            return { applicationName: null != t ? t.name : e, applicationId: e };
        },
    },
    [eh.kqX.PREMIUM_REACTIVATE]: { predicate: () => !tn(eh.kqX.PREMIUM_REACTIVATE) && G.shouldShowReactivateNotice() },
    [eh.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                s = null != t && null != t.paymentSourceId ? ek.A.getPaymentSource(t.paymentSourceId) : null,
                a = null != s && eZ.AD.has(s.type),
                o =
                    null != t &&
                    t.status === eh.Dmq.PAST_DUE &&
                    !i &&
                    a &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tn(eh.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && o;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return null == t
                ? { daysPastDue: 0, dismissUntil: r()().toDate() }
                : {
                      daysPastDue: t.status === eh.Dmq.PAST_DUE ? r()().diff(t.currentPeriodStart, "days") : 0,
                      dismissUntil: (0, x.ji)(t).expiresDate.toDate(),
                  };
        },
    },
    [eh.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e,
                n = null != t ? ey.A.getGuild(t) : null;
            return (
                (null != t &&
                    null != b.A.getMentionRaidDetected(t) &&
                    n?.features.has(eh.GuildFeatures.COMMUNITY) &&
                    !tn(eh.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
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
    [eh.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = et.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, C._z)(e),
                n = K.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= eq.tZ;
        },
        metadata: () => {
            let e = et.A.getCurrentUserActiveStream();
            return { streamKey: null != e ? (0, C._z)(e) : null };
        },
    },
    [eh.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = ek.A.paymentSources ?? {};
            return w.A.getIsTargeted() && !(0, x.TW)(t) && 0 !== Object.keys(n).length;
        },
    },
    [eh.kqX.PREMIUM_MARKETING_NAGBAR]: {
        predicate: () => {
            let e = j.A.getMarketingComponentByType(s.C.NAGBAR);
            if (null == e) return !1;
            if (null == e.promotionId) return !0;
            let t = j.A.getPromotionByTypeAndId(Y.pt.MARKETING_MOMENT, e.promotionId);
            return (
                !(null != t && t.endDate < new Date()) &&
                !(0, m.u$)(l.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, e.promotionId).isDismissed
            );
        },
    },
    [eh.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eG.A.getPremiumGroupSubscription();
            if (null == n) return !1;
            let i = V.A.hasFetchedMembers(),
                r = V.A.getNumAvailableInvites();
            return (0, B.ux)(t, n) && i && r >= e$.Vu;
        },
        metadata: () => ({ premiumSubscription: eG.A.getPremiumGroupSubscription() }),
    },
    [eh.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !tn(eh.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && z.Cm(),
        metadata: () => ({ dismissUntil: r()().add(180, "days").toDate(), sampleRate: 0.1 }),
    },
    [eh.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: { predicate: () => z.h6(), metadata: () => ({ sampleRate: 0.1 }) },
    [eh.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
                tn(eh.kqX.SYSTEM_SERVICE_WARNING) ||
                !(0, Z.yA)(N.Ay) ||
                null == t ||
                eC.Ay.getMode() !== eh.TBI.PUSH_TO_TALK
            )
                return !1;
            let n = N.Ay.getVisibleGame();
            return null != n && !!n.elevated;
        },
    },
    [eh.kqX.E2EE_UPDATE_REQUIRED]: {
        predicate: () => {
            if (tn(eh.kqX.E2EE_UPDATE_REQUIRED) || !eb.A.isConnected()) return !1;
            let e = eC.Ay.getMediaEngine();
            return 1 !== (e.getSupportedSecureFramesProtocolVersion?.() ?? 0);
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eh.kqX.WINDOWS_MEDIA_PACK_REQUIRED]: {
        predicate: () =>
            !(
                !eH.isPlatformEmbedded ||
                d.A?.process.platform !== "win32" ||
                tn(eh.kqX.WINDOWS_MEDIA_PACK_REQUIRED) ||
                ej.Ay.getEnableHardwareAcceleration()
            ) && !1 === eC.Ay.isH264MfDecodeAvailable(),
    },
    [eh.kqX.RIOT_MIGRATION]: {
        predicate: () => {
            if (!(0, f.getIsRiotSocialSDKMigrationEnabled)({ location: "NoticeStore" })) return !1;
            let e = null != ea.A.getAccount(null, eh.fg2.RIOT_GAMES),
                t = null != ea.A.getAccount(null, eh.fg2.LEAGUE_OF_LEGENDS);
            if (tn(eh.kqX.RIOT_MIGRATION) || (0, m.k8)(l.M.RIOT_CONNECTION_DEPRECATION_DISABLE) || (!e && !t))
                return !1;
            let n = _.A.get(eh.fg2.LEAGUE_OF_LEGENDS),
                i = _.A.get(eh.fg2.RIOT_GAMES);
            return null != n.replacedBy && null != i.replacedBy;
        },
    },
    [eh.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (
                !(0, f.getIsRiotSocialSDKMigrationEnabled)({ location: "NoticeStore" }) ||
                tn(eh.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN) ||
                (0, m.k8)(l.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE)
            )
                return !1;
            let i = null != n ? ey.A.getGuild(n) : null,
                r = (0, eB.$3)({ permission: eh.xBc.ADMINISTRATOR, user: t, context: i }),
                s = null != i ? eN.A.getSortedRoles(i.id).filter((e) => null === e.tags.guild_connections) : null;
            return null != i && !!r && null != s && !!(0, h.D)(s);
        },
    },
};
function ts() {
    if (!y.A.isConnected()) return !1;
    e7 = null;
    let e = P.default.getCurrentUser();
    if (null == e) return !1;
    let t = eG.A.getPremiumSubscription(),
        n = eL.A.getGuildId(),
        i = eD.A.getVoiceChannelId(),
        r = null != i ? eU.A.getVoiceStateForChannel(i) : null;
    for (let s of ti)
        if (
            null != tr[s] &&
            tr[s].predicate({
                selectedGuildId: n,
                voiceChannelId: i,
                voiceState: r,
                currentUser: e,
                premiumSubscription: t,
            })
        ) {
            let i = tr[s].metadata?.({ currentUser: e, premiumSubscription: t, selectedGuildId: n });
            e7 = { ...e5, type: s, metadata: i };
            break;
        }
    if (null != e7) {
        e7.metadata?.sampleRate != null &&
            null == e4[e7.type] &&
            (e4[e7.type] = Math.random() <= e7.metadata.sampleRate);
        let e = !1 === e4[e7.type];
        (tn(e7.type) || e) && (e7 = null);
    }
}
function ta() {
    return eM.A.enabled || delete e6[eh.kqX.STREAMER_MODE], ts();
}
class to extends a.Ay.Store {
    static displayName = "NoticeStore";
    initialize() {
        this.syncWith(
            [T.A, eP.Ay, eR.A, eT, eL.A, j.A, eF.A, ei.default, ea.A, Q.A, O.A, K.A, et.A, N.Ay, ee.A, T.A, E.A],
            ts,
        ),
            this.waitFor(
                T.A,
                p.A,
                et.A,
                en.default,
                ei.default,
                er.A,
                es.A,
                w.A,
                ea.A,
                eT,
                eY.A,
                eW.A,
                eK.A,
                e_.A,
                S.A,
                y.A,
                b.A,
                O.A,
                eS.Ay,
                E.A,
                eN.A,
                ey.A,
                D.A,
                L.A,
                eC.Ay,
                ev.A,
                ek.A,
                eO.A,
                V.A,
                eR.A,
                j.A,
                K.A,
                eb.A,
                N.Ay,
                eD.A,
                eL.A,
                $.A,
                ew.A,
                eM.A,
                G,
                eG.A,
                eP.Ay,
                eV.A,
                X.Ay,
                eF.A,
                ex.A,
                Q.A,
                P.default,
                eU.A,
                ee.A,
            );
    }
    hasNotice() {
        return null != e7 && null != e7.type;
    }
    getNotice() {
        return null == ex.A.getAction() ? e7 : null;
    }
    isNoticeDismissed(e) {
        return tn(e);
    }
}
let tl = new to(c.h, {
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
        return e.user.id === en.default.getId() && ts();
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
            (e7?.type === eh.kqX.INVITED_TO_SPEAK ||
                t.some((e) => {
                    let { userId: t } = e;
                    return t !== en.default.getId();
                })) &&
            ts()
        );
    },
    STREAMER_MODE_UPDATE: ta,
    RUNNING_STREAMER_TOOLS_CHANGE: ta,
    DISPATCH_APPLICATION_ERROR: function () {
        return delete e6[eh.kqX.DISPATCH_ERROR], ts();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return delete e6[eh.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], ts();
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return ts();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return ts();
    },
    NOTICE_SHOW: function (e) {
        e7 = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != e7 && (null == e.id || e.id === e7.id) && (e9(e7.type, e.isTemporary, e.untilAtLeast), ts());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return e9(t), ts();
    },
    LOGOUT: function () {
        (e6 = {}), (e4 = {}), (e7 = null);
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: ts,
    AUTO_MODERATION_MENTION_RAID_DETECTION: ts,
    REPORT_AV_ERROR: ts,
    ACTIVE_AV_ERRORS_CHANGED: ts,
    MEDIA_ENGINE_MF_AVAILABILITY_CHECKED: ts,
    AUDIO_SET_MODE: ts,
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: ts,
});
