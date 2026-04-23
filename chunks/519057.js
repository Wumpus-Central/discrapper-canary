"use strict";
n.d(t, { Ay: () => e5, Re: () => ew, f7: () => eB, pe: () => eb, rV: () => eG });
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
    E = n(941314),
    A = n(380786),
    m = n(587895),
    I = n(145643),
    T = n(826673),
    N = n(367727),
    g = n(626262),
    p = n(487329),
    C = n(161518),
    f = n(49463),
    R = n(15285),
    h = n(142120),
    S = n(652896),
    O = n(585510),
    x = n(610136),
    M = n(229527),
    D = n(93474),
    P = n(164956),
    U = n(857071),
    y = n(869968),
    L = n(923349),
    v = n(810498),
    j = n(233317),
    k = n(612669),
    b = n(264779),
    G = n(412260),
    w = n(852218),
    B = n(160394),
    H = n(859703),
    F = n(34550),
    X = n(655116),
    q = n(105530),
    V = n(942405),
    K = n(964404),
    W = n(617617),
    Y = n(499156),
    z = n(976910),
    J = n(616356),
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
    eE = n(437959),
    eA = n(351906),
    em = n(274184),
    eI = n(870570),
    eT = n(287809),
    eN = n(977997),
    eg = n(295405),
    ep = n(166403),
    eC = n(816733),
    ef = n(469778),
    eR = n(147964),
    eh = n(488926),
    eS = n(723702),
    eO = n(927578),
    ex = n(837921),
    eM = n(755439),
    eD = n(422033),
    eP = n(966846),
    eU = n(652215);
n(436317);
var ey = n(788868),
    eL = n(88001),
    ev = n(654487),
    ej = n(818348),
    ek = n(731854);
let eb = {
        [eU.kqX.DOWNLOAD_NAG]: o.M.NAGBAR_NOTICE_DOWNLOAD,
        [eU.kqX.CONNECT_SPOTIFY]: o.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eU.kqX.CONNECT_PLAYSTATION]: o.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eU.kqX.PASSKEY_BACKUP]: o.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [eU.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eU.kqX.PREMIUM_REACTIVATE]: o.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eU.kqX.BOUNCED_EMAIL_DETECTED]: o.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eU.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eU.kqX.CHECKOUT_RECOVERY_NAGBAR]: o.M.CHECKOUT_RECOVERY_NAGBAR,
        [eU.kqX.QUEST_APP_UPSELL]: o.M.NAGBAR_QUEST_APP_UPSELL,
        [eU.kqX.RIOT_MIGRATION]: o.M.RIOT_CONNECTION_DEPRECATION_DISABLE,
        [eU.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
    },
    eG = { [eU.kqX.GIFTING_PROMOTION_REMINDER]: o.M.GIFTING_PROMOTION_REMINDER },
    ew = {
        [eU.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eU.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: o.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eU.kqX.RIOT_MIGRATION]: o.M.RIOT_CONNECTION_DEPRECATION,
        [eU.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: o.M.RIOT_CONNECTION_DEPRECATION_ADMIN,
    },
    eB = { [eU.kqX.OUTBOUND_PROMOTION]: o.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    eH = {
        [eU.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
        [eU.kqX.PREMIUM_UNCANCEL]: "hideUncancelReminder",
        [eU.kqX.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
        [eU.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
        [eU.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
        [eU.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
        [eU.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
        [eU.kqX.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
        [eU.kqX.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
        [eU.kqX.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
        [eU.kqX.WIN_COMPAT_MODE_MESSAGE]: "hideWinCompatModeNotice",
        [eU.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [eU.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [eU.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [eU.kqX.MACOS_19_DEPRECATED_MESSAGE]: "hideMacOS19DeprecationMessageNotice",
        [eU.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
        [eU.kqX.E2EE_UPDATE_REQUIRED]: "hideE2EEUpdateRequiredNotice",
    },
    eF = new Set([
        eU.kqX.NO_INPUT_DETECTED,
        eU.kqX.NO_INPUT_DEVICES_DETECTED,
        eU.kqX.STREAMER_MODE,
        eU.kqX.VIDEO_UNSUPPORTED_BROWSER,
        eU.kqX.SPOTIFY_AUTO_PAUSED,
        eU.kqX.DISPATCH_ERROR,
        eU.kqX.DISPATCH_ERROR,
        eU.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eU.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    ]),
    eX = {},
    eq = {},
    eV = null,
    eK = Object.freeze({ id: null, message: null, buttonText: null, callback: void 0, metadata: null }),
    eW = null;
function eY(e) {
    return eH[e] + "-untilAtLeast";
}
function ez(e, t, n) {
    if (null == e) return;
    let i = eH[e];
    (null == i || t || c.w.set(i, !0), eF.has(e) && (eX[e] = !0), null != n && null != i)
        ? c.w.set(eY(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
        : c.w.remove(eY(e));
}
let eJ = null;
function eQ() {
    if (null != eJ) return eJ;
    try {
        let e = document.createElement("canvas").getContext("2d"),
            t = "";
        e.font = "16px monospace";
        let n = e.measureText(t).width;
        (e.font = '16px "Segoe MDL2 Assets", monospace'), (eJ = e.measureText(t).width !== n);
    } catch (e) {
        eJ = !1;
    }
    return eJ;
}
function eZ(e) {
    if (null == e) return !1;
    let t = ew[e];
    if (null != t) {
        let n = (0, g.D)(e);
        return (0, N.FZ)(t, n).isDismissed;
    }
    let n = eb[e];
    if (null != n) return (0, T.k8)(n);
    let i = eH[e];
    if (null != i) {
        let t,
            n = null != (t = c.w.get(eY(e))) ? r()(t) : null;
        if (null != n) return n?.isAfter(r()());
    }
    let l = eX[e];
    return !!l || (null != i && "" !== i ? c.w.get(i) : !!eF.has(e) && l);
}
let e$ = [
    eU.kqX.QUARANTINED,
    eU.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eU.kqX.RESTRICTED_HOURS_WARNING,
    eU.kqX.VIEWING_ROLES,
    eU.kqX.INVITED_TO_SPEAK,
    eU.kqX.LURKING_GUILD,
    eU.kqX.VOICE_DISABLED,
    eU.kqX.NO_INPUT_DEVICES_DETECTED,
    eU.kqX.NO_INPUT_DETECTED,
    eU.kqX.PTT_NO_KEYBIND_WARNING,
    eU.kqX.HARDWARE_MUTE,
    eU.kqX.DISPATCH_ERROR,
    eU.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eU.kqX.SPOTIFY_AUTO_PAUSED,
    eU.kqX.WIN32_DEPRECATED_MESSAGE,
    eU.kqX.WIN7_8_DEPRECATED_MESSAGE,
    eU.kqX.WIN_COMPAT_MODE_MESSAGE,
    eU.kqX.MACOS_19_DEPRECATED_MESSAGE,
    eU.kqX.E2EE_UPDATE_REQUIRED,
    eU.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    eU.kqX.VOICE_CONNECTED_LAST_SESSION,
    eU.kqX.SYSTEM_SERVICE_WARNING,
    eU.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
    eU.kqX.GUILD_RAID_NOTIFICATION,
    eU.kqX.GIFTING_PROMOTION_REMINDER,
    eU.kqX.RIOT_MIGRATION,
    eU.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
    eU.kqX.QUESTS_PROGRESS_INTERRUPTION,
    eU.kqX.UNCLAIMED_ACCOUNT,
    eU.kqX.PENDING_MEMBER,
    eU.kqX.CHECKOUT_RECOVERY_NAGBAR,
    eU.kqX.PREMIUM_MARKETING_NAGBAR,
    eU.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
    eU.kqX.OUTBOUND_PROMOTION,
    eU.kqX.CORRUPT_INSTALLATION,
    eU.kqX.VIDEO_UNSUPPORTED_BROWSER,
    eU.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
    eU.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
    eU.kqX.STREAMER_MODE,
    eU.kqX.SCHEDULED_MAINTENANCE,
    eU.kqX.BOUNCED_EMAIL_DETECTED,
    eU.kqX.UNVERIFIED_ACCOUNT,
    eU.kqX.PREMIUM_TIER_2_TRIAL_ENDING,
    eU.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
    eU.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
    eU.kqX.PREMIUM_UNCANCEL,
    eU.kqX.PREMIUM_MISSING_PAYMENT,
    eU.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
    eU.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
    eU.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
    eU.kqX.PREMIUM_REACTIVATE,
    eU.kqX.PASSKEY_BACKUP,
    eU.kqX.APPLICATION_TEST_MODE,
    eU.kqX.QUEST_APP_UPSELL,
    eU.kqX.DOWNLOAD_NAG,
    eU.kqX.CONNECT_SPOTIFY,
    eU.kqX.CONNECT_PLAYSTATION,
    eU.kqX.SURVEY,
    eU.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
    eU.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
];
eU.kqX.QUARANTINED,
    eU.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eU.kqX.VIEWING_ROLES,
    eU.kqX.INVITED_TO_SPEAK,
    eU.kqX.LURKING_GUILD,
    eU.kqX.VOICE_DISABLED,
    eU.kqX.NO_INPUT_DETECTED,
    eU.kqX.HARDWARE_MUTE,
    eU.kqX.DISPATCH_ERROR,
    eU.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eU.kqX.SPOTIFY_AUTO_PAUSED,
    eU.kqX.VOICE_CONNECTED_LAST_SESSION,
    eU.kqX.PENDING_MEMBER,
    eU.kqX.STREAMER_MODE,
    eU.kqX.SCHEDULED_MAINTENANCE;
let e0 = {
    [eU.kqX.GIFTING_PROMOTION_REMINDER]: { predicate: () => (0, v.MD)() },
    [eU.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, O.dj)().show && !eZ(eU.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({ dismissUntil: r()().add(3, "hours").toDate() }),
    },
    [eU.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let i = ei.Ay.getMember(n, t.id);
            return null != i && !i.isPending && (0, M.TR)(i);
        },
    },
    [eU.kqX.QUARANTINED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t.hasFlag(eU.nhx.QUARANTINED);
        },
    },
    [eU.kqX.RESTRICTED_HOURS_WARNING]: {
        predicate: () => null != eV,
        metadata: () => (null != eV ? { title: eV.title, subtitle: eV.subtitle } : null),
    },
    [eU.kqX.VIEWING_ROLES]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return P.A.isViewingRoles(t);
        },
    },
    [eU.kqX.INVITED_TO_SPEAK]: {
        predicate: (e) => {
            let { voiceState: t } = e;
            return (0, q.eY)(t) === q.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        },
    },
    [eU.kqX.LURKING_GUILD]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && U.A.isLurking(t);
        },
    },
    [eU.kqX.VOICE_DISABLED]: { predicate: () => null != eu.A.getRemoteDisconnectVoiceChannelId() },
    [eU.kqX.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != eu.A.getLastSessionVoiceChannelId() },
    [eU.kqX.NO_INPUT_DETECTED]: { predicate: () => C.A.hasActiveErrorOfType(p.iy.NO_AUDIO_INPUT_DETECTED) },
    [eU.kqX.NO_INPUT_DEVICES_DETECTED]: { predicate: () => C.A.hasActiveErrorOfType(p.iy.NO_INPUT_DEVICES) },
    [eU.kqX.HARDWARE_MUTE]: {
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
    [eU.kqX.PTT_NO_KEYBIND_WARNING]: {
        predicate: () =>
            !!eu.A.isConnected() &&
            es.Ay.getMode() === eU.TBI.PUSH_TO_TALK &&
            !(es.Ay.getSettings().modeOptions.shortcut.length > 0) &&
            !!Y.A.getConfig({ location: "NoticeStore" }).showPTTNoKeybindWarning,
    },
    [eU.kqX.DISPATCH_ERROR]: {
        predicate: () => null != eM.A.getLastError(),
        metadata: () => ({ error: eM.A.getLastError() }),
    },
    [eU.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != eD.A.getLastProgress(),
        metadata: () => eD.A.getLastProgress(),
    },
    [eU.kqX.SPOTIFY_AUTO_PAUSED]: { predicate: () => X.A.wasAutoPaused() },
    [eU.kqX.UNCLAIMED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return null != t && !t.isClaimed();
        },
    },
    [eU.kqX.PENDING_MEMBER]: {
        predicate: (e) => {
            let { selectedGuildId: t, currentUser: n } = e;
            return (
                (null != t &&
                    null != n &&
                    !el.A.getGuild(t)?.features.has(eU.GuildFeatures.GUILD_ONBOARDING) &&
                    ei.Ay.getMember(t, n.id)?.isPending) ??
                !1
            );
        },
    },
    [eU.kqX.OUTBOUND_PROMOTION]: { predicate: () => (0, b.So)() },
    [eU.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => eS.isPlatformEmbedded && (!a.A.supported() || eP.A.isCorruptInstallation()),
    },
    [eU.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t && eN.A.hasVideo(t) && !es.Ay.supports(ek.O5.VIDEO) && !eZ(eU.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
        },
    },
    [eU.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return eO.Ay.canRedeemPremiumPerks(t) && en.A.getDetectedOffPlatformPremiumPerks().length > 0;
        },
        metadata: () => en.A.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eU.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () =>
            !eZ(eU.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) &&
            en.A.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => en.A.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eU.kqX.STREAMER_MODE]: { predicate: () => eA.A.enabled },
    [eU.kqX.DOWNLOAD_NAG]: { predicate: () => !eS.isPlatformEmbedded && !eZ(eU.kqX.DOWNLOAD_NAG) },
    [eU.kqX.QUEST_APP_UPSELL]: {
        predicate: () =>
            (0, eS.isOculusWeb)() && !eZ(eU.kqX.QUEST_APP_UPSELL) && B.A.getConfig({ location: "NoticeStore" }).enabled,
    },
    [eU.kqX.SCHEDULED_MAINTENANCE]: {
        predicate: () => null != eE.A.getScheduledMaintenance(),
        metadata: () => {
            let e = eE.A.getScheduledMaintenance();
            if (null != e) return { id: e.id, start: new Date(e.scheduled_for), end: new Date(e.scheduled_until) };
        },
    },
    [eU.kqX.SURVEY]: { predicate: () => null != em.Ay.getCurrentSurvey(), metadata: () => em.Ay.getCurrentSurvey() },
    [eU.kqX.UNVERIFIED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.email != null && !t.verified;
        },
    },
    [eU.kqX.BOUNCED_EMAIL_DETECTED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.hasBouncedEmail;
        },
    },
    [eU.kqX.CONNECT_SPOTIFY]: {
        predicate: () =>
            !X.A.hasConnectedAccount() &&
            R.Ay.isObservedAppRunning(_.A.get(eU.fg2.SPOTIFY).name) &&
            !eZ(eU.kqX.CONNECT_SPOTIFY),
    },
    [eU.kqX.WIN32_DEPRECATED_MESSAGE]: {
        predicate: () => d.A?.os.arch === "ia32" && d.A?.process.platform === "win32",
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eU.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
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
    [eU.kqX.WIN_COMPAT_MODE_MESSAGE]: {
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
    [eU.kqX.MACOS_19_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (d.A?.process.platform === "darwin")
                try {
                    return 20 > parseInt(d.A?.os.release.split(".")[0]);
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eU.kqX.CONNECT_PLAYSTATION]: {
        predicate: () =>
            et.A.isSuggestedAccountType(eU.fg2.PLAYSTATION) &&
            null == et.A.getAccount(null, eU.fg2.PLAYSTATION) &&
            !eZ(eU.kqX.CONNECT_PLAYSTATION),
    },
    [eU.kqX.PASSKEY_BACKUP]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.mfaEnabled && z.A.hasFetchedCredentials() && !z.A.hasCredentials && !eZ(eU.kqX.PASSKEY_BACKUP);
        },
    },
    [eU.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () =>
            eC.A.getAlmostExpiringTrialOffersForReminder([ey.pe.TIER_2]).length > 0 &&
            !eZ(eU.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
    },
    [eU.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () =>
            eC.A.getAlmostExpiringTrialOffersForReminder([ey.pe.TIER_0]).length > 0 &&
            !eZ(eU.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
    },
    [eU.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () =>
            eC.A.getAlmostExpiringDiscountOffersForReminder([ey.pe.TIER_2]).length > 0 &&
            !eZ(eU.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
    },
    [eU.kqX.PREMIUM_UNCANCEL]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                l =
                    t?.canceledAt != null &&
                    t?.status === eU.Dmq.CANCELED &&
                    1 >= r()().diff(r()(t.canceledAt), "days"),
                s = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                a =
                    null != t &&
                    t.status === eU.Dmq.CANCELED &&
                    !s &&
                    i <= 7 &&
                    i >= 0 &&
                    (0, eO.YE)(n, ey.PremiumTypes.TIER_2) &&
                    !l &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eZ(eU.kqX.PREMIUM_UNCANCEL) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                i = null != t ? (0, eO.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? eO.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eU.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                l = null != t ? r()(t.currentPeriodEnd).diff(r()(t.currentPeriodStart).startOf("day"), "days") : 0,
                s = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                a = ef.A.applicationIdsFetched.has(ey.tv),
                o = ef.A.getForApplication(ey.tv),
                c = null != t ? (0, eO.EL)(t) : null,
                u = null != c ? eO.Ay.getSkuIdForPlan(c.planId) : null,
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
                    t.status !== eU.Dmq.PAST_DUE &&
                    !s &&
                    a &&
                    !d &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eZ(eU.kqX.PREMIUM_MISSING_PAYMENT) && _;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                i = null != t ? (0, eO.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? eO.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eU.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && null != t.paymentSourceId ? eg.A.getPaymentSource(t.paymentSourceId) : null,
                l = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                s =
                    null != t &&
                    t.status === eU.Dmq.PAST_DUE &&
                    !l &&
                    null != i &&
                    i.invalid &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eZ(eU.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eU.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                l =
                    null != t &&
                    t.status === eU.Dmq.PAST_DUE &&
                    !i &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eZ(eU.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && l;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eU.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != eR.A.testModeApplicationId,
        metadata: () => {
            if (null == eR.A.testModeApplicationId) return {};
            let e = eR.A.testModeApplicationId,
                t = m.A.getApplication(e);
            return { applicationName: null != t ? t.name : e, applicationId: e };
        },
    },
    [eU.kqX.PREMIUM_REACTIVATE]: {
        predicate: () => !eZ(eU.kqX.PREMIUM_REACTIVATE) && L.A.shouldShowReactivateNotice(),
    },
    [eU.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                l = null != t && null != t.paymentSourceId ? eg.A.getPaymentSource(t.paymentSourceId) : null,
                s = null != l && ej.AD.has(l.type),
                a =
                    null != t &&
                    t.status === eU.Dmq.PAST_DUE &&
                    !i &&
                    s &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eZ(eU.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return null == t
                ? { daysPastDue: 0, dismissUntil: r()().toDate() }
                : {
                      daysPastDue: t.status === eU.Dmq.PAST_DUE ? r()().diff(t.currentPeriodStart, "days") : 0,
                      dismissUntil: (0, eO.ji)(t).expiresDate.toDate(),
                  };
        },
    },
    [eU.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e,
                n = null != t ? el.A.getGuild(t) : null;
            return (
                (null != t &&
                    null != D.A.getMentionRaidDetected(t) &&
                    n?.features.has(eU.GuildFeatures.COMMUNITY) &&
                    !eZ(eU.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
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
    [eU.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = J.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, S._z)(e),
                n = H.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= ev.tZ;
        },
        metadata: () => {
            let e = J.A.getCurrentUserActiveStream();
            return { streamKey: null != e ? (0, S._z)(e) : null };
        },
    },
    [eU.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eg.A.paymentSources ?? {};
            return y.A.getIsTargeted() && !(0, eO.TW)(t) && 0 !== Object.keys(n).length;
        },
    },
    [eU.kqX.PREMIUM_MARKETING_NAGBAR]: {
        predicate: () => {
            let e = G.A.getMarketingComponentByType(l.C.NAGBAR);
            if (null == e) return !1;
            if (null == e.promotionId) return !0;
            let t = G.A.getPromotionByTypeAndId(w.pt.MARKETING_MOMENT, e.promotionId);
            return (
                !(null != t && t.endDate < new Date()) &&
                !(0, T.u$)(o.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, e.promotionId).isDismissed
            );
        },
    },
    [eU.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = ep.A.getPremiumGroupSubscription();
            if (null == n) return !1;
            let i = j.A.hasFetchedMembers(),
                r = j.A.getNumAvailableInvites();
            return (0, k.ux)(t, n) && i && r >= eL.Vu;
        },
        metadata: () => ({ premiumSubscription: ep.A.getPremiumGroupSubscription() }),
    },
    [eU.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !eZ(eU.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && F.Cm(),
        metadata: () => ({ dismissUntil: r()().add(180, "days").toDate(), sampleRate: 0.1 }),
    },
    [eU.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: { predicate: () => F.h6(), metadata: () => ({ sampleRate: 0.1 }) },
    [eU.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
                eZ(eU.kqX.SYSTEM_SERVICE_WARNING) ||
                !(0, V.yA)(R.Ay) ||
                null == t ||
                es.Ay.getMode() !== eU.TBI.PUSH_TO_TALK
            )
                return !1;
            let n = R.Ay.getVisibleGame();
            return null != n && !!n.elevated;
        },
    },
    [eU.kqX.E2EE_UPDATE_REQUIRED]: {
        predicate: () => {
            if (eZ(eU.kqX.E2EE_UPDATE_REQUIRED) || !eu.A.isConnected()) return !1;
            let e = es.Ay.getMediaEngine();
            return 1 !== (e.getSupportedSecureFramesProtocolVersion?.() ?? 0);
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eU.kqX.WINDOWS_MEDIA_PACK_REQUIRED]: {
        predicate: () =>
            !(
                !eS.isPlatformEmbedded ||
                d.A?.process.platform !== "win32" ||
                eZ(eU.kqX.WINDOWS_MEDIA_PACK_REQUIRED) ||
                ex.Ay.getEnableHardwareAcceleration()
            ) && !1 === es.Ay.isH264MfDecodeAvailable(),
    },
    [eU.kqX.RIOT_MIGRATION]: {
        predicate: () => {
            if (!E.A.getConfig({ location: "NoticeStore" }).enabled) return !1;
            let e = null != et.A.getAccount(null, eU.fg2.RIOT_GAMES),
                t = null != et.A.getAccount(null, eU.fg2.LEAGUE_OF_LEGENDS);
            if (eZ(eU.kqX.RIOT_MIGRATION) || (0, T.k8)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE) || (!e && !t))
                return !1;
            let n = _.A.get(eU.fg2.LEAGUE_OF_LEGENDS),
                i = _.A.get(eU.fg2.RIOT_GAMES);
            return null != n.replacedBy && null != i.replacedBy;
        },
    },
    [eU.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (
                !E.A.getConfig({ location: "NoticeStore" }).enabled ||
                eZ(eU.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN) ||
                (0, T.k8)(o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE)
            )
                return !1;
            let i = null != n ? el.A.getGuild(n) : null,
                r = (0, eh.$3)({ permission: eU.xBc.ADMINISTRATOR, user: t, context: i }),
                l = null != i ? er.A.getSortedRoles(i.id).filter((e) => null === e.tags.guild_connections) : null;
            return null != i && !!r && null != l && !!(0, A.D)(l);
        },
    },
};
function e1() {
    if (!h.A.isConnected()) return !1;
    eW = null;
    let e = eT.default.getCurrentUser();
    if (null == e) return !1;
    let t = ep.A.getPremiumSubscription(),
        n = e_.A.getGuildId(),
        i = ed.A.getVoiceChannelId(),
        r = null != i ? eN.A.getVoiceStateForChannel(i) : null;
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
            eW = { ...eK, type: l, metadata: i };
            break;
        }
    if (null != eW) {
        eW.metadata?.sampleRate != null &&
            null == eq[eW.type] &&
            (eq[eW.type] = Math.random() <= eW.metadata.sampleRate);
        let e = !1 === eq[eW.type];
        (eZ(eW.type) || e) && (eW = null);
    }
}
function e2() {
    return eA.A.enabled || delete eX[eU.kqX.STREAMER_MODE], e1();
}
class e7 extends s.Ay.Store {
    static displayName = "NoticeStore";
    initialize() {
        this.syncWith(
            [C.A, em.Ay, ec.A, en.A, e_.A, G.A, eC.A, Z.default, et.A, W.A, x.A, H.A, J.A, R.Ay, z.A, C.A, I.A],
            e1,
        ),
            this.waitFor(
                C.A,
                m.A,
                J.A,
                Q.default,
                Z.default,
                $.A,
                ee.A,
                y.A,
                et.A,
                en.A,
                eM.A,
                eD.A,
                eP.A,
                ef.A,
                f.A,
                h.A,
                D.A,
                x.A,
                ei.Ay,
                I.A,
                er.A,
                el.A,
                P.A,
                U.A,
                es.Ay,
                ea.A,
                eg.A,
                eo.A,
                j.A,
                ec.A,
                G.A,
                H.A,
                eu.A,
                R.Ay,
                ed.A,
                e_.A,
                X.A,
                eE.A,
                eA.A,
                L.A,
                ep.A,
                em.Ay,
                eR.A,
                K.Ay,
                eC.A,
                eI.A,
                W.A,
                eT.default,
                eN.A,
                z.A,
            );
    }
    hasNotice() {
        return null != eW && null != eW.type;
    }
    getNotice() {
        return null == eI.A.getAction() ? eW : null;
    }
    isNoticeDismissed(e) {
        return eZ(e);
    }
}
let e5 = new e7(u.h, {
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
            (eW?.type === eU.kqX.INVITED_TO_SPEAK ||
                t.some((e) => {
                    let { userId: t } = e;
                    return t !== Q.default.getId();
                })) &&
            e1()
        );
    },
    STREAMER_MODE_UPDATE: e2,
    RUNNING_STREAMER_TOOLS_CHANGE: e2,
    DISPATCH_APPLICATION_ERROR: function () {
        return delete eX[eU.kqX.DISPATCH_ERROR], e1();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return delete eX[eU.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], e1();
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return e1();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return e1();
    },
    RESTRICTED_HOURS_WARNING: function (e) {
        let { title: t, subtitle: n } = e;
        (eV = { title: t, subtitle: n }), e1();
    },
    NOTICE_SHOW: function (e) {
        eW = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != eW && (null == e.id || e.id === eW.id) && (ez(eW.type, e.isTemporary, e.untilAtLeast), e1());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return ez(t), e1();
    },
    LOGOUT: function () {
        (eX = {}), (eq = {}), (eV = null), (eW = null);
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: e1,
    AUTO_MODERATION_MENTION_RAID_DETECTION: e1,
    REPORT_AV_ERROR: e1,
    ACTIVE_AV_ERRORS_CHANGED: e1,
    MEDIA_ENGINE_MF_AVAILABILITY_CHECKED: e1,
    AUDIO_SET_MODE: e1,
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: e1,
});
