"use strict";
n.d(t, { Ay: () => e9, Re: () => eH, f7: () => eF, pe: () => ej, rV: () => eG });
var i = n(989349),
    r = n.n(i),
    l = n(877624),
    s = n(311907),
    a = n(531417),
    o = n(554146),
    c = n(506774),
    u = n(73153),
    d = n(77729),
    _ = n(573648),
    A = n(941314),
    E = n(380786),
    m = n(587895),
    I = n(145643),
    T = n(826673),
    g = n(367727),
    N = n(626262),
    f = n(487329),
    C = n(161518),
    p = n(49463),
    h = n(15285),
    S = n(142120),
    R = n(652896),
    x = n(585510),
    O = n(610136),
    M = n(229527),
    D = n(93474),
    U = n(164956),
    P = n(857071),
    L = n(869968),
    v = n(923349),
    b = n(810498),
    y = n(233317),
    k = n(612669),
    j = n(264779),
    G = n(412260),
    H = n(852218),
    F = n(160394),
    w = n(859703),
    B = n(34550),
    X = n(655116),
    V = n(105530),
    q = n(942405),
    K = n(964404),
    Y = n(617617),
    W = n(499156),
    J = n(976910),
    z = n(616356),
    Q = n(961350),
    Z = n(546183),
    $ = n(347481),
    ee = n(734057),
    et = n(962173),
    en = n(584584),
    ei = n(696451),
    er = n(317525),
    el = n(71393),
    es = n(430452),
    ea = n(803224),
    eo = n(576705),
    ec = n(362790),
    eu = n(383501),
    ed = n(309010),
    e_ = n(967198),
    eA = n(437959),
    eE = n(351906),
    em = n(274184),
    eI = n(870570),
    eT = n(287809),
    eg = n(977997),
    eN = n(295405),
    ef = n(166403),
    eC = n(816733),
    ep = n(469778),
    eh = n(147964),
    eS = n(488926),
    eR = n(723702),
    ex = n(927578),
    eO = n(837921),
    eM = n(755439),
    eD = n(422033),
    eU = n(966846),
    eP = n(652215);
n(436317);
var eL = n(788868),
    ev = n(88001),
    eb = n(654487),
    ey = n(818348),
    ek = n(731854);
let ej = {
        [eP.kqX.DOWNLOAD_NAG]: o.M.NAGBAR_NOTICE_DOWNLOAD,
        [eP.kqX.CONNECT_SPOTIFY]: o.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eP.kqX.CONNECT_PLAYSTATION]: o.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eP.kqX.PASSKEY_BACKUP]: o.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [eP.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eP.kqX.PREMIUM_REACTIVATE]: o.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eP.kqX.BOUNCED_EMAIL_DETECTED]: o.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eP.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eP.kqX.CHECKOUT_RECOVERY_NAGBAR]: o.M.CHECKOUT_RECOVERY_NAGBAR,
        [eP.kqX.QUEST_APP_UPSELL]: o.M.NAGBAR_QUEST_APP_UPSELL,
        [eP.kqX.RIOT_MIGRATION]: o.M.RIOT_CONNECTION_DEPRECATION_DISABLE,
        [eP.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
    },
    eG = { [eP.kqX.GIFTING_PROMOTION_REMINDER]: o.M.GIFTING_PROMOTION_REMINDER },
    eH = {
        [eP.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eP.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: o.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eP.kqX.RIOT_MIGRATION]: o.M.RIOT_CONNECTION_DEPRECATION,
        [eP.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: o.M.RIOT_CONNECTION_DEPRECATION_ADMIN,
    },
    eF = { [eP.kqX.OUTBOUND_PROMOTION]: o.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    ew = {
        [eP.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
        [eP.kqX.PREMIUM_UNCANCEL]: "hideUncancelReminder",
        [eP.kqX.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
        [eP.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
        [eP.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
        [eP.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
        [eP.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
        [eP.kqX.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
        [eP.kqX.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
        [eP.kqX.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
        [eP.kqX.WIN_COMPAT_MODE_MESSAGE]: "hideWinCompatModeNotice",
        [eP.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [eP.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [eP.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [eP.kqX.MACOS_19_DEPRECATED_MESSAGE]: "hideMacOS19DeprecationMessageNotice",
        [eP.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
        [eP.kqX.E2EE_UPDATE_REQUIRED]: "hideE2EEUpdateRequiredNotice",
    },
    eB = new Set([
        eP.kqX.NO_INPUT_DETECTED,
        eP.kqX.NO_INPUT_DEVICES_DETECTED,
        eP.kqX.STREAMER_MODE,
        eP.kqX.VIDEO_UNSUPPORTED_BROWSER,
        eP.kqX.SPOTIFY_AUTO_PAUSED,
        eP.kqX.DISPATCH_ERROR,
        eP.kqX.DISPATCH_ERROR,
        eP.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eP.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    ]),
    eX = {},
    eV = {},
    eq = null,
    eK = Object.freeze({ id: null, message: null, buttonText: null, callback: void 0, metadata: null }),
    eY = null;
function eW(e) {
    return ew[e] + "-untilAtLeast";
}
function eJ(e, t, n) {
    if (null == e) return;
    let i = ew[e];
    (null == i || t || c.w.set(i, !0), eB.has(e) && (eX[e] = !0), null != n && null != i)
        ? c.w.set(eW(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
        : c.w.remove(eW(e));
}
let ez = null;
function eQ() {
    if (null != ez) return ez;
    try {
        let e = document.createElement("canvas").getContext("2d"),
            t = "";
        e.font = "16px monospace";
        let n = e.measureText(t).width;
        (e.font = '16px "Segoe MDL2 Assets", monospace'), (ez = e.measureText(t).width !== n);
    } catch (e) {
        ez = !1;
    }
    return ez;
}
function eZ(e) {
    if (null == e) return !1;
    let t = eH[e];
    if (null != t) {
        let n = (0, N.D)(e);
        return (0, g.FZ)(t, n).isDismissed;
    }
    let n = ej[e];
    if (null != n) return (0, T.k8)(n);
    let i = ew[e];
    if (null != i) {
        let t,
            n = null != (t = c.w.get(eW(e))) ? r()(t) : null;
        if (null != n) return n?.isAfter(r()());
    }
    let l = eX[e];
    return !!l || (null != i && "" !== i ? c.w.get(i) : !!eB.has(e) && l);
}
let e$ = [
    eP.kqX.QUARANTINED,
    eP.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eP.kqX.RESTRICTED_HOURS_WARNING,
    eP.kqX.VIEWING_ROLES,
    eP.kqX.INVITED_TO_SPEAK,
    eP.kqX.LURKING_GUILD,
    eP.kqX.VOICE_DISABLED,
    eP.kqX.NO_INPUT_DEVICES_DETECTED,
    eP.kqX.NO_INPUT_DETECTED,
    eP.kqX.PTT_NO_KEYBIND_WARNING,
    eP.kqX.HARDWARE_MUTE,
    eP.kqX.DISPATCH_ERROR,
    eP.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eP.kqX.SPOTIFY_AUTO_PAUSED,
    eP.kqX.WIN32_DEPRECATED_MESSAGE,
    eP.kqX.WIN7_8_DEPRECATED_MESSAGE,
    eP.kqX.WIN_COMPAT_MODE_MESSAGE,
    eP.kqX.MACOS_19_DEPRECATED_MESSAGE,
    eP.kqX.E2EE_UPDATE_REQUIRED,
    eP.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    eP.kqX.VOICE_CONNECTED_LAST_SESSION,
    eP.kqX.SYSTEM_SERVICE_WARNING,
    eP.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
    eP.kqX.GUILD_RAID_NOTIFICATION,
    eP.kqX.GIFTING_PROMOTION_REMINDER,
    eP.kqX.RIOT_MIGRATION,
    eP.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
    eP.kqX.QUESTS_PROGRESS_INTERRUPTION,
    eP.kqX.UNCLAIMED_ACCOUNT,
    eP.kqX.PENDING_MEMBER,
    eP.kqX.CHECKOUT_RECOVERY_NAGBAR,
    eP.kqX.PREMIUM_MARKETING_NAGBAR,
    eP.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
    eP.kqX.OUTBOUND_PROMOTION,
    eP.kqX.CORRUPT_INSTALLATION,
    eP.kqX.VIDEO_UNSUPPORTED_BROWSER,
    eP.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
    eP.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
    eP.kqX.STREAMER_MODE,
    eP.kqX.SCHEDULED_MAINTENANCE,
    eP.kqX.BOUNCED_EMAIL_DETECTED,
    eP.kqX.UNVERIFIED_ACCOUNT,
    eP.kqX.PREMIUM_TIER_2_TRIAL_ENDING,
    eP.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
    eP.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
    eP.kqX.PREMIUM_UNCANCEL,
    eP.kqX.PREMIUM_MISSING_PAYMENT,
    eP.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
    eP.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
    eP.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
    eP.kqX.PREMIUM_REACTIVATE,
    eP.kqX.PASSKEY_BACKUP,
    eP.kqX.APPLICATION_TEST_MODE,
    eP.kqX.QUEST_APP_UPSELL,
    eP.kqX.DOWNLOAD_NAG,
    eP.kqX.CONNECT_SPOTIFY,
    eP.kqX.CONNECT_PLAYSTATION,
    eP.kqX.SURVEY,
    eP.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
    eP.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
];
eP.kqX.QUARANTINED,
    eP.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eP.kqX.VIEWING_ROLES,
    eP.kqX.INVITED_TO_SPEAK,
    eP.kqX.LURKING_GUILD,
    eP.kqX.VOICE_DISABLED,
    eP.kqX.NO_INPUT_DETECTED,
    eP.kqX.HARDWARE_MUTE,
    eP.kqX.DISPATCH_ERROR,
    eP.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eP.kqX.SPOTIFY_AUTO_PAUSED,
    eP.kqX.VOICE_CONNECTED_LAST_SESSION,
    eP.kqX.PENDING_MEMBER,
    eP.kqX.STREAMER_MODE,
    eP.kqX.SCHEDULED_MAINTENANCE;
let e0 = {
    [eP.kqX.GIFTING_PROMOTION_REMINDER]: { predicate: () => (0, b.MD)() },
    [eP.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, x.dj)().show && !eZ(eP.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({ dismissUntil: r()().add(3, "hours").toDate() }),
    },
    [eP.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let i = ei.Ay.getMember(n, t.id);
            return null != i && !i.isPending && (0, M.TR)(i);
        },
    },
    [eP.kqX.QUARANTINED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t.hasFlag(eP.nhx.QUARANTINED);
        },
    },
    [eP.kqX.RESTRICTED_HOURS_WARNING]: {
        predicate: () => null != eq,
        metadata: () => (null != eq ? { title: eq.title, subtitle: eq.subtitle } : null),
    },
    [eP.kqX.VIEWING_ROLES]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return U.A.isViewingRoles(t);
        },
    },
    [eP.kqX.INVITED_TO_SPEAK]: {
        predicate: (e) => {
            let { voiceState: t } = e;
            return (0, V.eY)(t) === V.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        },
    },
    [eP.kqX.LURKING_GUILD]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && P.A.isLurking(t);
        },
    },
    [eP.kqX.VOICE_DISABLED]: { predicate: () => null != eu.A.getRemoteDisconnectVoiceChannelId() },
    [eP.kqX.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != eu.A.getLastSessionVoiceChannelId() },
    [eP.kqX.NO_INPUT_DETECTED]: { predicate: () => C.A.hasActiveErrorOfType(f.iy.NO_AUDIO_INPUT_DETECTED) },
    [eP.kqX.NO_INPUT_DEVICES_DETECTED]: { predicate: () => C.A.hasActiveErrorOfType(f.iy.NO_INPUT_DEVICES) },
    [eP.kqX.HARDWARE_MUTE]: {
        predicate: () =>
            eu.A.isConnected() &&
            es.Ay.isHardwareMute() &&
            es.Ay.isHardwareMuteNoticeEnabled() &&
            !K.Ay.disableHardwareMuteSilenceAlert,
        metadata: () => {
            let e = es.Ay.getInputDeviceId(),
                t = $.A.getVendor(e),
                n = $.A.getModel(e);
            if (null != t && null != n) return { vendor: t, model: n };
        },
    },
    [eP.kqX.PTT_NO_KEYBIND_WARNING]: {
        predicate: () =>
            !!eu.A.isConnected() &&
            es.Ay.getMode() === eP.TBI.PUSH_TO_TALK &&
            !(es.Ay.getSettings().modeOptions.shortcut.length > 0) &&
            !!W.A.getConfig({ location: "NoticeStore" }).showPTTNoKeybindWarning,
    },
    [eP.kqX.DISPATCH_ERROR]: {
        predicate: () => null != eM.A.getLastError(),
        metadata: () => ({ error: eM.A.getLastError() }),
    },
    [eP.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != eD.A.getLastProgress(),
        metadata: () => eD.A.getLastProgress(),
    },
    [eP.kqX.SPOTIFY_AUTO_PAUSED]: { predicate: () => X.A.wasAutoPaused() },
    [eP.kqX.UNCLAIMED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return null != t && !t.isClaimed();
        },
    },
    [eP.kqX.PENDING_MEMBER]: {
        predicate: (e) => {
            let { selectedGuildId: t, currentUser: n } = e;
            return (
                (null != t &&
                    null != n &&
                    !el.A.getGuild(t)?.features.has(eP.GuildFeatures.GUILD_ONBOARDING) &&
                    ei.Ay.getMember(t, n.id)?.isPending) ??
                !1
            );
        },
    },
    [eP.kqX.OUTBOUND_PROMOTION]: { predicate: () => (0, j.So)() },
    [eP.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => eR.isPlatformEmbedded && (!a.A.supported() || eU.A.isCorruptInstallation()),
    },
    [eP.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t && eg.A.hasVideo(t) && !es.Ay.supports(ek.O5.VIDEO) && !eZ(eP.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
        },
    },
    [eP.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return ex.Ay.canRedeemPremiumPerks(t) && en.A.getDetectedOffPlatformPremiumPerks().length > 0;
        },
        metadata: () => en.A.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eP.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () =>
            !eZ(eP.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) &&
            en.A.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => en.A.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eP.kqX.STREAMER_MODE]: { predicate: () => eE.A.enabled },
    [eP.kqX.DOWNLOAD_NAG]: { predicate: () => !eR.isPlatformEmbedded && !eZ(eP.kqX.DOWNLOAD_NAG) },
    [eP.kqX.QUEST_APP_UPSELL]: {
        predicate: () =>
            (0, eR.isOculusWeb)() && !eZ(eP.kqX.QUEST_APP_UPSELL) && F.A.getConfig({ location: "NoticeStore" }).enabled,
    },
    [eP.kqX.SCHEDULED_MAINTENANCE]: {
        predicate: () => null != eA.A.getScheduledMaintenance(),
        metadata: () => {
            let e = eA.A.getScheduledMaintenance();
            if (null != e) return { id: e.id, start: new Date(e.scheduled_for), end: new Date(e.scheduled_until) };
        },
    },
    [eP.kqX.SURVEY]: { predicate: () => null != em.Ay.getCurrentSurvey(), metadata: () => em.Ay.getCurrentSurvey() },
    [eP.kqX.UNVERIFIED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.email != null && !t.verified;
        },
    },
    [eP.kqX.BOUNCED_EMAIL_DETECTED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.hasBouncedEmail;
        },
    },
    [eP.kqX.CONNECT_SPOTIFY]: {
        predicate: () =>
            !X.A.hasConnectedAccount() &&
            h.Ay.isObservedAppRunning(_.A.get(eP.fg2.SPOTIFY).name) &&
            !eZ(eP.kqX.CONNECT_SPOTIFY),
    },
    [eP.kqX.WIN32_DEPRECATED_MESSAGE]: {
        predicate: () => d.A?.os.arch === "ia32" && d.A?.process.platform === "win32",
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eP.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (d.A?.process.platform === "win32")
                try {
                    if (parseInt(d.A?.os.release.split(".")[0]) >= 10) return !1;
                    return !eQ();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eP.kqX.WIN_COMPAT_MODE_MESSAGE]: {
        predicate: () => {
            if (d.A?.process.platform === "win32")
                try {
                    if (parseInt(d.A?.os.release.split(".")[0]) >= 10) return !1;
                    return eQ();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eP.kqX.MACOS_19_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (d.A?.process.platform === "darwin")
                try {
                    return 20 > parseInt(d.A?.os.release.split(".")[0]);
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eP.kqX.CONNECT_PLAYSTATION]: {
        predicate: () =>
            et.A.isSuggestedAccountType(eP.fg2.PLAYSTATION) &&
            null == et.A.getAccount(null, eP.fg2.PLAYSTATION) &&
            !eZ(eP.kqX.CONNECT_PLAYSTATION),
    },
    [eP.kqX.PASSKEY_BACKUP]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.mfaEnabled && J.A.hasFetchedCredentials() && !J.A.hasCredentials && !eZ(eP.kqX.PASSKEY_BACKUP);
        },
    },
    [eP.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () =>
            eC.A.getAlmostExpiringTrialOffersForReminder([eL.pe.TIER_2]).length > 0 &&
            !eZ(eP.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
    },
    [eP.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () =>
            eC.A.getAlmostExpiringTrialOffersForReminder([eL.pe.TIER_0]).length > 0 &&
            !eZ(eP.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
    },
    [eP.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () =>
            eC.A.getAlmostExpiringDiscountOffersForReminder([eL.pe.TIER_2]).length > 0 &&
            !eZ(eP.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
    },
    [eP.kqX.PREMIUM_UNCANCEL]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                l =
                    t?.canceledAt != null &&
                    t?.status === eP.Dmq.CANCELED &&
                    1 >= r()().diff(r()(t.canceledAt), "days"),
                s = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                a =
                    null != t &&
                    t.status === eP.Dmq.CANCELED &&
                    !s &&
                    i <= 7 &&
                    i >= 0 &&
                    (0, ex.YE)(n, eL.PremiumTypes.TIER_2) &&
                    !l &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eZ(eP.kqX.PREMIUM_UNCANCEL) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                i = null != t ? (0, ex.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? ex.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eP.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                l = null != t ? r()(t.currentPeriodEnd).diff(r()(t.currentPeriodStart).startOf("day"), "days") : 0,
                s = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                a = ep.A.applicationIdsFetched.has(eL.tv),
                o = ep.A.getForApplication(eL.tv),
                c = null != t ? (0, ex.EL)(t) : null,
                u = null != c ? ex.Ay.getSkuIdForPlan(c.planId) : null,
                d =
                    null != o &&
                    null != c &&
                    Array.from(o).filter((e) => {
                        let { skuId: t, consumed: n } = e;
                        return !n && t === u;
                    }).length > 0,
                _ =
                    null != t &&
                    i <= (l > 14 ? 7 : 2) &&
                    i >= 0 &&
                    t.status !== eP.Dmq.PAST_DUE &&
                    !s &&
                    a &&
                    !d &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eZ(eP.kqX.PREMIUM_MISSING_PAYMENT) && _;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                i = null != t ? (0, ex.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? ex.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eP.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && null != t.paymentSourceId ? eN.A.getPaymentSource(t.paymentSourceId) : null,
                l = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                s =
                    null != t &&
                    t.status === eP.Dmq.PAST_DUE &&
                    !l &&
                    null != i &&
                    i.invalid &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eZ(eP.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eP.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                l =
                    null != t &&
                    t.status === eP.Dmq.PAST_DUE &&
                    !i &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eZ(eP.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && l;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eP.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != eh.A.testModeApplicationId,
        metadata: () => {
            if (null == eh.A.testModeApplicationId) return {};
            let e = eh.A.testModeApplicationId,
                t = m.A.getApplication(e);
            return { applicationName: null != t ? t.name : e, applicationId: e };
        },
    },
    [eP.kqX.PREMIUM_REACTIVATE]: {
        predicate: () => !eZ(eP.kqX.PREMIUM_REACTIVATE) && v.A.shouldShowReactivateNotice(),
    },
    [eP.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                l = null != t && null != t.paymentSourceId ? eN.A.getPaymentSource(t.paymentSourceId) : null,
                s = null != l && ey.AD.has(l.type),
                a =
                    null != t &&
                    t.status === eP.Dmq.PAST_DUE &&
                    !i &&
                    s &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eZ(eP.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return null == t
                ? { daysPastDue: 0, dismissUntil: r()().toDate() }
                : {
                      daysPastDue: t.status === eP.Dmq.PAST_DUE ? r()().diff(t.currentPeriodStart, "days") : 0,
                      dismissUntil: (0, ex.ji)(t).expiresDate.toDate(),
                  };
        },
    },
    [eP.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e,
                n = null != t ? el.A.getGuild(t) : null;
            return (
                (null != t &&
                    null != D.A.getMentionRaidDetected(t) &&
                    n?.features.has(eP.GuildFeatures.COMMUNITY) &&
                    !eZ(eP.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
                !1
            );
        },
        metadata: (e) => {
            let { selectedGuildId: t } = e,
                n = { dismissUntil: r()().add(2, "hours").toDate() };
            if (null != t) {
                let e = D.A.getMentionRaidDetected(t);
                null != e && (n.decisionId = e.decisionId);
            }
            return n;
        },
    },
    [eP.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = z.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, R._z)(e),
                n = w.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= eb.tZ;
        },
        metadata: () => {
            let e = z.A.getCurrentUserActiveStream();
            return { streamKey: null != e ? (0, R._z)(e) : null };
        },
    },
    [eP.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eN.A.paymentSources ?? {};
            return L.A.getIsTargeted() && !(0, ex.TW)(t) && 0 !== Object.keys(n).length;
        },
    },
    [eP.kqX.PREMIUM_MARKETING_NAGBAR]: {
        predicate: () => {
            let e = G.A.getMarketingComponentByType(l.C.NAGBAR);
            if (null == e) return !1;
            if (null == e.promotionId) return !0;
            let t = G.A.getPromotionByTypeAndId(H.pt.MARKETING_MOMENT, e.promotionId);
            return (
                !(null != t && t.endDate < new Date()) &&
                !(0, T.u$)(o.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, e.promotionId).isDismissed
            );
        },
    },
    [eP.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = ef.A.getPremiumGroupSubscription();
            if (null == n) return !1;
            let i = y.A.hasFetchedMembers(),
                r = y.A.getNumAvailableInvites();
            return (0, k.ux)(t, n) && i && r >= ev.Vu;
        },
        metadata: () => ({ premiumSubscription: ef.A.getPremiumGroupSubscription() }),
    },
    [eP.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !eZ(eP.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && B.Cm(),
        metadata: () => ({ dismissUntil: r()().add(180, "days").toDate(), sampleRate: 0.1 }),
    },
    [eP.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: { predicate: () => B.h6(), metadata: () => ({ sampleRate: 0.1 }) },
    [eP.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
                eZ(eP.kqX.SYSTEM_SERVICE_WARNING) ||
                !(0, q.yA)(h.Ay) ||
                null == t ||
                es.Ay.getMode() !== eP.TBI.PUSH_TO_TALK
            )
                return !1;
            let n = h.Ay.getVisibleGame();
            return null != n && !!n.elevated;
        },
    },
    [eP.kqX.E2EE_UPDATE_REQUIRED]: {
        predicate: () => {
            if (eZ(eP.kqX.E2EE_UPDATE_REQUIRED) || !eu.A.isConnected()) return !1;
            let e = es.Ay.getMediaEngine();
            return 1 !== (e.getSupportedSecureFramesProtocolVersion?.() ?? 0);
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eP.kqX.WINDOWS_MEDIA_PACK_REQUIRED]: {
        predicate: () =>
            !(
                !eR.isPlatformEmbedded ||
                d.A?.process.platform !== "win32" ||
                eZ(eP.kqX.WINDOWS_MEDIA_PACK_REQUIRED) ||
                eO.Ay.getEnableHardwareAcceleration()
            ) && !1 === es.Ay.isH264MfDecodeAvailable(),
    },
    [eP.kqX.RIOT_MIGRATION]: {
        predicate: () => {
            if (!A.A.getConfig({ location: "NoticeStore" }).enabled) return !1;
            let e = null != et.A.getAccount(null, eP.fg2.RIOT_GAMES),
                t = null != et.A.getAccount(null, eP.fg2.LEAGUE_OF_LEGENDS);
            if (eZ(eP.kqX.RIOT_MIGRATION) || (0, T.k8)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE) || (!e && !t))
                return !1;
            let n = _.A.get(eP.fg2.LEAGUE_OF_LEGENDS),
                i = _.A.get(eP.fg2.RIOT_GAMES);
            return null != n.replacedBy && null != i.replacedBy;
        },
    },
    [eP.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (
                !A.A.getConfig({ location: "NoticeStore" }).enabled ||
                eZ(eP.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN) ||
                (0, T.k8)(o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE)
            )
                return !1;
            let i = null != n ? el.A.getGuild(n) : null,
                r = (0, eS.$3)({ permission: eP.xBc.ADMINISTRATOR, user: t, context: i }),
                l = null != i ? er.A.getSortedRoles(i.id).filter((e) => null === e.tags.guild_connections) : null;
            return null != i && !!r && null != l && !!(0, E.D)(l);
        },
    },
};
function e1() {
    if (!S.A.isConnected()) return !1;
    eY = null;
    let e = eT.default.getCurrentUser();
    if (null == e) return !1;
    let t = ef.A.getPremiumSubscription(),
        n = e_.A.getGuildId(),
        i = ed.A.getVoiceChannelId(),
        r = null != i ? eg.A.getVoiceStateForChannel(i) : null;
    for (let l of e$)
        if (
            null != e0[l] &&
            e0[l].predicate({
                selectedGuildId: n,
                voiceChannelId: i,
                voiceState: r,
                currentUser: e,
                premiumSubscription: t,
            })
        ) {
            let i = e0[l].metadata?.({ currentUser: e, premiumSubscription: t, selectedGuildId: n });
            eY = { ...eK, type: l, metadata: i };
            break;
        }
    if (null != eY) {
        eY.metadata?.sampleRate != null &&
            null == eV[eY.type] &&
            (eV[eY.type] = Math.random() <= eY.metadata.sampleRate);
        let e = !1 === eV[eY.type];
        (eZ(eY.type) || e) && (eY = null);
    }
}
function e7() {
    return eE.A.enabled || delete eX[eP.kqX.STREAMER_MODE], e1();
}
class e2 extends s.Ay.Store {
    static displayName = "NoticeStore";
    initialize() {
        this.syncWith(
            [C.A, em.Ay, ec.A, en.A, e_.A, G.A, eC.A, Z.default, et.A, Y.A, O.A, w.A, z.A, h.Ay, J.A, C.A, I.A],
            e1,
        ),
            this.waitFor(
                C.A,
                m.A,
                z.A,
                Q.default,
                Z.default,
                $.A,
                ee.A,
                L.A,
                et.A,
                en.A,
                eM.A,
                eD.A,
                eU.A,
                ep.A,
                p.A,
                S.A,
                D.A,
                O.A,
                ei.Ay,
                I.A,
                er.A,
                el.A,
                U.A,
                P.A,
                es.Ay,
                ea.A,
                eN.A,
                eo.A,
                y.A,
                ec.A,
                G.A,
                w.A,
                eu.A,
                h.Ay,
                ed.A,
                e_.A,
                X.A,
                eA.A,
                eE.A,
                v.A,
                ef.A,
                em.Ay,
                eh.A,
                K.Ay,
                eC.A,
                eI.A,
                Y.A,
                eT.default,
                eg.A,
                J.A,
            );
    }
    hasNotice() {
        return null != eY && null != eY.type;
    }
    getNotice() {
        return null == eI.A.getAction() ? eY : null;
    }
    isNoticeDismissed(e) {
        return eZ(e);
    }
}
let e9 = new e2(u.h, {
    CURRENT_USER_UPDATE: e1,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: e1,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: e1,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: e1,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: e1,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: e1,
    GUILD_CREATE: e1,
    GUILD_DELETE: e1,
    AUDIO_INPUT_DETECTED: e1,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: e1,
    CERTIFIED_DEVICES_SET: e1,
    AUDIO_SET_INPUT_DEVICE: e1,
    AUDIO_SET_OUTPUT_DEVICE: e1,
    MEDIA_ENGINE_DEVICES: e1,
    RTC_CONNECTION_STATE: e1,
    RPC_APP_AUTHENTICATED: e1,
    RPC_APP_DISCONNECTED: e1,
    USER_CONNECTIONS_UPDATE: e1,
    WINDOW_FOCUS: e1,
    INSTANT_INVITE_CREATE: e1,
    INSTANT_INVITE_REVOKE_SUCCESS: e1,
    SPOTIFY_PLAYER_PAUSE: e1,
    RUNNING_GAMES_CHANGE: e1,
    EXPERIMENTS_FETCH_SUCCESS: e1,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: e1,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: e1,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: e1,
    DEVELOPER_TEST_MODE_RESET: e1,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: e1,
    DISPATCH_APPLICATION_INSTALL: e1,
    IMPERSONATE_STOP: e1,
    IMPERSONATE_UPDATE: e1,
    GUILD_MEMBER_ADD: function (e) {
        return e.user.id === Q.default.getId() && e1();
    },
    GUILD_MEMBER_UPDATE: e1,
    SURVEY_FETCHED: e1,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: e1,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: e1,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: e1,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: e1,
    UNSYNCED_USER_SETTINGS_UPDATE: e1,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return (
            (eY?.type === eP.kqX.INVITED_TO_SPEAK ||
                t.some((e) => {
                    let { userId: t } = e;
                    return t !== Q.default.getId();
                })) &&
            e1()
        );
    },
    STREAMER_MODE_UPDATE: e7,
    RUNNING_STREAMER_TOOLS_CHANGE: e7,
    DISPATCH_APPLICATION_ERROR: function () {
        return delete eX[eP.kqX.DISPATCH_ERROR], e1();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return delete eX[eP.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], e1();
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return e1();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return e1();
    },
    RESTRICTED_HOURS_WARNING: function (e) {
        let { title: t, subtitle: n } = e;
        (eq = { title: t, subtitle: n }), e1();
    },
    NOTICE_SHOW: function (e) {
        eY = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != eY && (null == e.id || e.id === eY.id) && (eJ(eY.type, e.isTemporary, e.untilAtLeast), e1());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return eJ(t), e1();
    },
    LOGOUT: function () {
        (eX = {}), (eV = {}), (eq = null), (eY = null);
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: e1,
    AUTO_MODERATION_MENTION_RAID_DETECTION: e1,
    REPORT_AV_ERROR: e1,
    ACTIVE_AV_ERRORS_CHANGED: e1,
    MEDIA_ENGINE_MF_AVAILABILITY_CHECKED: e1,
    AUDIO_SET_MODE: e1,
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: e1,
});
