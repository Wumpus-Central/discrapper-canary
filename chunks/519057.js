"use strict";
n.d(t, { Ay: () => eZ, Re: () => ey, f7: () => eb, pe: () => eL, rV: () => ev });
var i = n(989349),
    r = n.n(i),
    s = n(877624),
    a = n(311907),
    l = n(531417),
    o = n(554146),
    c = n(506774),
    u = n(73153),
    d = n(77729),
    _ = n(573648),
    E = n(342169),
    A = n(380786),
    m = n(587895),
    I = n(145643),
    T = n(826673),
    N = n(487329),
    g = n(161518),
    p = n(49463),
    C = n(15285),
    f = n(142120),
    h = n(652896),
    S = n(585510),
    R = n(610136),
    x = n(229527),
    O = n(93474),
    M = n(164956),
    D = n(857071),
    U = n(869968),
    P = n(923349),
    L = n(810498),
    v = n(264779),
    y = n(412260),
    b = n(852218),
    k = n(160394),
    j = n(859703),
    G = n(34550),
    F = n(655116),
    H = n(105530),
    B = n(942405),
    w = n(964404),
    V = n(617617),
    X = n(499156),
    q = n(976910),
    K = n(616356),
    Y = n(961350),
    W = n(546183),
    J = n(347481),
    z = n(734057),
    Q = n(962173),
    Z = n(584584),
    $ = n(696451),
    ee = n(317525),
    et = n(71393),
    en = n(430452),
    ei = n(803224),
    er = n(576705),
    es = n(362790),
    ea = n(383501),
    el = n(309010),
    eo = n(967198),
    ec = n(437959),
    eu = n(351906),
    ed = n(274184),
    e_ = n(870570),
    eE = n(287809),
    eA = n(977997),
    em = n(295405),
    eI = n(166403),
    eT = n(816733),
    eN = n(469778),
    eg = n(147964),
    ep = n(488926),
    eC = n(723702),
    ef = n(927578),
    eh = n(837921),
    eS = n(755439),
    eR = n(422033),
    ex = n(966846),
    eO = n(652215);
n(436317);
var eM = n(788868),
    eD = n(654487),
    eU = n(818348),
    eP = n(731854);
let eL = {
        [eO.kqX.DOWNLOAD_NAG]: o.M.NAGBAR_NOTICE_DOWNLOAD,
        [eO.kqX.CONNECT_SPOTIFY]: o.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eO.kqX.CONNECT_PLAYSTATION]: o.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eO.kqX.PASSKEY_BACKUP]: o.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [eO.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eO.kqX.PREMIUM_REACTIVATE]: o.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eO.kqX.BOUNCED_EMAIL_DETECTED]: o.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eO.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eO.kqX.CHECKOUT_RECOVERY_NAGBAR]: o.M.CHECKOUT_RECOVERY_NAGBAR,
        [eO.kqX.QUEST_APP_UPSELL]: o.M.NAGBAR_QUEST_APP_UPSELL,
        [eO.kqX.RIOT_MIGRATION]: o.M.RIOT_CONNECTION_DEPRECATION_DISABLE,
        [eO.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
    },
    ev = { [eO.kqX.GIFTING_PROMOTION_REMINDER]: o.M.GIFTING_PROMOTION_REMINDER },
    ey = {
        [eO.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eO.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: o.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eO.kqX.RIOT_MIGRATION]: o.M.RIOT_CONNECTION_DEPRECATION,
        [eO.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: o.M.RIOT_CONNECTION_DEPRECATION_ADMIN,
    },
    eb = { [eO.kqX.OUTBOUND_PROMOTION]: o.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    ek = {
        [eO.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
        [eO.kqX.PREMIUM_UNCANCEL]: "hideUncancelReminder",
        [eO.kqX.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
        [eO.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
        [eO.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
        [eO.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
        [eO.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
        [eO.kqX.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
        [eO.kqX.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
        [eO.kqX.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
        [eO.kqX.WIN_COMPAT_MODE_MESSAGE]: "hideWinCompatModeNotice",
        [eO.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [eO.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [eO.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [eO.kqX.MACOS_19_DEPRECATED_MESSAGE]: "hideMacOS19DeprecationMessageNotice",
        [eO.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
        [eO.kqX.E2EE_UPDATE_REQUIRED]: "hideE2EEUpdateRequiredNotice",
    },
    ej = new Set([
        eO.kqX.NO_INPUT_DETECTED,
        eO.kqX.NO_INPUT_DEVICES_DETECTED,
        eO.kqX.STREAMER_MODE,
        eO.kqX.VIDEO_UNSUPPORTED_BROWSER,
        eO.kqX.SPOTIFY_AUTO_PAUSED,
        eO.kqX.DISPATCH_ERROR,
        eO.kqX.DISPATCH_ERROR,
        eO.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eO.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    ]),
    eG = {},
    eF = {},
    eH = Object.freeze({ id: null, message: null, buttonText: null, callback: void 0, metadata: null }),
    eB = null;
function ew(e) {
    return ek[e] + "-untilAtLeast";
}
function eV(e, t, n) {
    if (null == e) return;
    let i = ek[e];
    (null == i || t || c.w.set(i, !0), ej.has(e) && (eG[e] = !0), null != n && null != i)
        ? c.w.set(ew(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
        : c.w.remove(ew(e));
}
let eX = null;
function eq() {
    if (null != eX) return eX;
    try {
        let e = document.createElement("canvas").getContext("2d"),
            t = "";
        e.font = "16px monospace";
        let n = e.measureText(t).width;
        (e.font = '16px "Segoe MDL2 Assets", monospace'), (eX = e.measureText(t).width !== n);
    } catch (e) {
        eX = !1;
    }
    return eX;
}
function eK(e) {
    if (null == e || null != ey[e]) return !1;
    let t = eL[e];
    if (null != t) return (0, T.k8)(t);
    let n = ek[e];
    if (null != n) {
        let t,
            n = null != (t = c.w.get(ew(e))) ? r()(t) : null;
        if (null != n) return n?.isAfter(r()());
    }
    let i = eG[e];
    return !!i || (null != n && "" !== n ? c.w.get(n) : !!ej.has(e) && i);
}
let eY = [
    eO.kqX.QUARANTINED,
    eO.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eO.kqX.VIEWING_ROLES,
    eO.kqX.INVITED_TO_SPEAK,
    eO.kqX.LURKING_GUILD,
    eO.kqX.VOICE_DISABLED,
    eO.kqX.NO_INPUT_DEVICES_DETECTED,
    eO.kqX.NO_INPUT_DETECTED,
    eO.kqX.PTT_NO_KEYBIND_WARNING,
    eO.kqX.HARDWARE_MUTE,
    eO.kqX.DISPATCH_ERROR,
    eO.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eO.kqX.SPOTIFY_AUTO_PAUSED,
    eO.kqX.WIN32_DEPRECATED_MESSAGE,
    eO.kqX.WIN7_8_DEPRECATED_MESSAGE,
    eO.kqX.WIN_COMPAT_MODE_MESSAGE,
    eO.kqX.MACOS_19_DEPRECATED_MESSAGE,
    eO.kqX.E2EE_UPDATE_REQUIRED,
    eO.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    eO.kqX.VOICE_CONNECTED_LAST_SESSION,
    eO.kqX.SYSTEM_SERVICE_WARNING,
    eO.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
    eO.kqX.GUILD_RAID_NOTIFICATION,
    eO.kqX.GIFTING_PROMOTION_REMINDER,
    eO.kqX.RIOT_MIGRATION,
    eO.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
    eO.kqX.QUESTS_PROGRESS_INTERRUPTION,
    eO.kqX.UNCLAIMED_ACCOUNT,
    eO.kqX.PENDING_MEMBER,
    eO.kqX.CHECKOUT_RECOVERY_NAGBAR,
    eO.kqX.PREMIUM_MARKETING_NAGBAR,
    eO.kqX.OUTBOUND_PROMOTION,
    eO.kqX.CORRUPT_INSTALLATION,
    eO.kqX.VIDEO_UNSUPPORTED_BROWSER,
    eO.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
    eO.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
    eO.kqX.STREAMER_MODE,
    eO.kqX.SCHEDULED_MAINTENANCE,
    eO.kqX.BOUNCED_EMAIL_DETECTED,
    eO.kqX.UNVERIFIED_ACCOUNT,
    eO.kqX.PREMIUM_TIER_2_TRIAL_ENDING,
    eO.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
    eO.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
    eO.kqX.PREMIUM_UNCANCEL,
    eO.kqX.PREMIUM_MISSING_PAYMENT,
    eO.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
    eO.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
    eO.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
    eO.kqX.PREMIUM_REACTIVATE,
    eO.kqX.PASSKEY_BACKUP,
    eO.kqX.APPLICATION_TEST_MODE,
    eO.kqX.QUEST_APP_UPSELL,
    eO.kqX.DOWNLOAD_NAG,
    eO.kqX.CONNECT_SPOTIFY,
    eO.kqX.CONNECT_PLAYSTATION,
    eO.kqX.SURVEY,
    eO.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
    eO.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
];
eO.kqX.QUARANTINED,
    eO.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eO.kqX.VIEWING_ROLES,
    eO.kqX.INVITED_TO_SPEAK,
    eO.kqX.LURKING_GUILD,
    eO.kqX.VOICE_DISABLED,
    eO.kqX.NO_INPUT_DETECTED,
    eO.kqX.HARDWARE_MUTE,
    eO.kqX.DISPATCH_ERROR,
    eO.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eO.kqX.SPOTIFY_AUTO_PAUSED,
    eO.kqX.VOICE_CONNECTED_LAST_SESSION,
    eO.kqX.PENDING_MEMBER,
    eO.kqX.STREAMER_MODE,
    eO.kqX.SCHEDULED_MAINTENANCE;
let eW = {
    [eO.kqX.GIFTING_PROMOTION_REMINDER]: { predicate: () => (0, L.MD)() },
    [eO.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, S.dj)().show && !eK(eO.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({ dismissUntil: r()().add(3, "hours").toDate() }),
    },
    [eO.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let i = $.Ay.getMember(n, t.id);
            return null != i && !i.isPending && (0, x.TR)(i);
        },
    },
    [eO.kqX.QUARANTINED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t.hasFlag(eO.nhx.QUARANTINED);
        },
    },
    [eO.kqX.VIEWING_ROLES]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return M.A.isViewingRoles(t);
        },
    },
    [eO.kqX.INVITED_TO_SPEAK]: {
        predicate: (e) => {
            let { voiceState: t } = e;
            return (0, H.eY)(t) === H.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        },
    },
    [eO.kqX.LURKING_GUILD]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && D.A.isLurking(t);
        },
    },
    [eO.kqX.VOICE_DISABLED]: { predicate: () => null != ea.A.getRemoteDisconnectVoiceChannelId() },
    [eO.kqX.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != ea.A.getLastSessionVoiceChannelId() },
    [eO.kqX.NO_INPUT_DETECTED]: { predicate: () => g.A.hasActiveErrorOfType(N.iy.NO_AUDIO_INPUT_DETECTED) },
    [eO.kqX.NO_INPUT_DEVICES_DETECTED]: { predicate: () => g.A.hasActiveErrorOfType(N.iy.NO_INPUT_DEVICES) },
    [eO.kqX.HARDWARE_MUTE]: {
        predicate: () =>
            ea.A.isConnected() &&
            en.Ay.isHardwareMute() &&
            en.Ay.isHardwareMuteNoticeEnabled() &&
            !w.Ay.disableHardwareMuteSilenceAlert,
        metadata: () => {
            let e = en.Ay.getInputDeviceId(),
                t = J.A.getVendor(e),
                n = J.A.getModel(e);
            if (null != t && null != n) return { vendor: t, model: n };
        },
    },
    [eO.kqX.PTT_NO_KEYBIND_WARNING]: {
        predicate: () =>
            !!ea.A.isConnected() &&
            en.Ay.getMode() === eO.TBI.PUSH_TO_TALK &&
            !(en.Ay.getSettings().modeOptions.shortcut.length > 0) &&
            !!X.A.getConfig({ location: "NoticeStore" }).showPTTNoKeybindWarning,
    },
    [eO.kqX.DISPATCH_ERROR]: {
        predicate: () => null != eS.A.getLastError(),
        metadata: () => ({ error: eS.A.getLastError() }),
    },
    [eO.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != eR.A.getLastProgress(),
        metadata: () => eR.A.getLastProgress(),
    },
    [eO.kqX.SPOTIFY_AUTO_PAUSED]: { predicate: () => F.A.wasAutoPaused() },
    [eO.kqX.UNCLAIMED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return null != t && !t.isClaimed();
        },
    },
    [eO.kqX.PENDING_MEMBER]: {
        predicate: (e) => {
            let { selectedGuildId: t, currentUser: n } = e;
            return (
                (null != t &&
                    null != n &&
                    !et.A.getGuild(t)?.features.has(eO.GuildFeatures.GUILD_ONBOARDING) &&
                    $.Ay.getMember(t, n.id)?.isPending) ??
                !1
            );
        },
    },
    [eO.kqX.OUTBOUND_PROMOTION]: { predicate: () => (0, v.So)() },
    [eO.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => eC.isPlatformEmbedded && (!l.A.supported() || ex.A.isCorruptInstallation()),
    },
    [eO.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t && eA.A.hasVideo(t) && !en.Ay.supports(eP.O5.VIDEO) && !eK(eO.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
        },
    },
    [eO.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return ef.Ay.canRedeemPremiumPerks(t) && Z.A.getDetectedOffPlatformPremiumPerks().length > 0;
        },
        metadata: () => Z.A.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eO.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () =>
            !eK(eO.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) &&
            Z.A.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => Z.A.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eO.kqX.STREAMER_MODE]: { predicate: () => eu.A.enabled },
    [eO.kqX.DOWNLOAD_NAG]: { predicate: () => !eC.isPlatformEmbedded && !eK(eO.kqX.DOWNLOAD_NAG) },
    [eO.kqX.QUEST_APP_UPSELL]: {
        predicate: () =>
            (0, eC.isOculusWeb)() && !eK(eO.kqX.QUEST_APP_UPSELL) && k.A.getConfig({ location: "NoticeStore" }).enabled,
    },
    [eO.kqX.SCHEDULED_MAINTENANCE]: {
        predicate: () => null != ec.A.getScheduledMaintenance(),
        metadata: () => {
            let e = ec.A.getScheduledMaintenance();
            if (null != e) return { id: e.id, start: new Date(e.scheduled_for), end: new Date(e.scheduled_until) };
        },
    },
    [eO.kqX.SURVEY]: { predicate: () => null != ed.Ay.getCurrentSurvey(), metadata: () => ed.Ay.getCurrentSurvey() },
    [eO.kqX.UNVERIFIED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.email != null && !t.verified;
        },
    },
    [eO.kqX.BOUNCED_EMAIL_DETECTED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.hasBouncedEmail;
        },
    },
    [eO.kqX.CONNECT_SPOTIFY]: {
        predicate: () =>
            !F.A.hasConnectedAccount() &&
            C.Ay.isObservedAppRunning(_.A.get(eO.fg2.SPOTIFY).name) &&
            !eK(eO.kqX.CONNECT_SPOTIFY),
    },
    [eO.kqX.WIN32_DEPRECATED_MESSAGE]: {
        predicate: () => d.A?.os.arch === "ia32" && d.A?.process.platform === "win32",
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eO.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (d.A?.process.platform === "win32")
                try {
                    if (parseInt(d.A?.os.release.split(".")[0]) >= 10) return !1;
                    return !eq();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eO.kqX.WIN_COMPAT_MODE_MESSAGE]: {
        predicate: () => {
            if (d.A?.process.platform === "win32")
                try {
                    if (parseInt(d.A?.os.release.split(".")[0]) >= 10) return !1;
                    return eq();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eO.kqX.MACOS_19_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (d.A?.process.platform === "darwin")
                try {
                    return 20 > parseInt(d.A?.os.release.split(".")[0]);
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eO.kqX.CONNECT_PLAYSTATION]: {
        predicate: () =>
            Q.A.isSuggestedAccountType(eO.fg2.PLAYSTATION) &&
            null == Q.A.getAccount(null, eO.fg2.PLAYSTATION) &&
            !eK(eO.kqX.CONNECT_PLAYSTATION),
    },
    [eO.kqX.PASSKEY_BACKUP]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.mfaEnabled && q.A.hasFetchedCredentials() && !q.A.hasCredentials && !eK(eO.kqX.PASSKEY_BACKUP);
        },
    },
    [eO.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () =>
            eT.A.getAlmostExpiringTrialOffersForReminder([eM.pe.TIER_2]).length > 0 &&
            !eK(eO.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
    },
    [eO.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () =>
            eT.A.getAlmostExpiringTrialOffersForReminder([eM.pe.TIER_0]).length > 0 &&
            !eK(eO.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
    },
    [eO.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () =>
            eT.A.getAlmostExpiringDiscountOffersForReminder([eM.pe.TIER_2]).length > 0 &&
            !eK(eO.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
    },
    [eO.kqX.PREMIUM_UNCANCEL]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                s =
                    t?.canceledAt != null &&
                    t?.status === eO.Dmq.CANCELED &&
                    1 >= r()().diff(r()(t.canceledAt), "days"),
                a = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                l =
                    null != t &&
                    t.status === eO.Dmq.CANCELED &&
                    !a &&
                    i <= 7 &&
                    i >= 0 &&
                    (0, ef.YE)(n, eM.PremiumTypes.TIER_2) &&
                    !s &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eK(eO.kqX.PREMIUM_UNCANCEL) && l;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                i = null != t ? (0, ef.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? ef.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eO.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                s = null != t ? r()(t.currentPeriodEnd).diff(r()(t.currentPeriodStart).startOf("day"), "days") : 0,
                a = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                l = eN.A.applicationIdsFetched.has(eM.tv),
                o = eN.A.getForApplication(eM.tv),
                c = null != t ? (0, ef.EL)(t) : null,
                u = null != c ? ef.Ay.getSkuIdForPlan(c.planId) : null,
                d =
                    null != o &&
                    null != c &&
                    Array.from(o).filter((e) => {
                        let { skuId: t, consumed: n } = e;
                        return !n && t === u;
                    }).length > 0,
                _ =
                    null != t &&
                    i <= (s > 14 ? 7 : 2) &&
                    i >= 0 &&
                    t.status !== eO.Dmq.PAST_DUE &&
                    !a &&
                    l &&
                    !d &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eK(eO.kqX.PREMIUM_MISSING_PAYMENT) && _;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                i = null != t ? (0, ef.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? ef.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eO.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && null != t.paymentSourceId ? em.A.getPaymentSource(t.paymentSourceId) : null,
                s = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                a =
                    null != t &&
                    t.status === eO.Dmq.PAST_DUE &&
                    !s &&
                    null != i &&
                    i.invalid &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eK(eO.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eO.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                s =
                    null != t &&
                    t.status === eO.Dmq.PAST_DUE &&
                    !i &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eK(eO.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && s;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eO.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != eg.A.testModeApplicationId,
        metadata: () => {
            if (null == eg.A.testModeApplicationId) return {};
            let e = eg.A.testModeApplicationId,
                t = m.A.getApplication(e);
            return { applicationName: null != t ? t.name : e, applicationId: e };
        },
    },
    [eO.kqX.PREMIUM_REACTIVATE]: {
        predicate: () => !eK(eO.kqX.PREMIUM_REACTIVATE) && P.A.shouldShowReactivateNotice(),
    },
    [eO.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                s = null != t && null != t.paymentSourceId ? em.A.getPaymentSource(t.paymentSourceId) : null,
                a = null != s && eU.AD.has(s.type),
                l =
                    null != t &&
                    t.status === eO.Dmq.PAST_DUE &&
                    !i &&
                    a &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eK(eO.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && l;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return null == t
                ? { daysPastDue: 0, dismissUntil: r()().toDate() }
                : {
                      daysPastDue: t.status === eO.Dmq.PAST_DUE ? r()().diff(t.currentPeriodStart, "days") : 0,
                      dismissUntil: (0, ef.ji)(t).expiresDate.toDate(),
                  };
        },
    },
    [eO.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e,
                n = null != t ? et.A.getGuild(t) : null;
            return (
                (null != t &&
                    null != O.A.getMentionRaidDetected(t) &&
                    n?.features.has(eO.GuildFeatures.COMMUNITY) &&
                    !eK(eO.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
                !1
            );
        },
        metadata: (e) => {
            let { selectedGuildId: t } = e,
                n = { dismissUntil: r()().add(2, "hours").toDate() };
            if (null != t) {
                let e = O.A.getMentionRaidDetected(t);
                null != e && (n.decisionId = e.decisionId);
            }
            return n;
        },
    },
    [eO.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = K.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, h._z)(e),
                n = j.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= eD.tZ;
        },
        metadata: () => {
            let e = K.A.getCurrentUserActiveStream();
            return { streamKey: null != e ? (0, h._z)(e) : null };
        },
    },
    [eO.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = em.A.paymentSources ?? {};
            return U.A.getIsTargeted() && !(0, ef.TW)(t) && 0 !== Object.keys(n).length;
        },
    },
    [eO.kqX.PREMIUM_MARKETING_NAGBAR]: {
        predicate: () => {
            let e = y.A.getMarketingComponentByType(s.C.NAGBAR);
            if (null == e) return !1;
            if (null == e.promotionId) return !0;
            let t = y.A.getPromotionByTypeAndId(b.pt.MARKETING_MOMENT, e.promotionId);
            return (
                !(null != t && t.endDate < new Date()) &&
                !(0, T.u$)(o.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, e.promotionId).isDismissed
            );
        },
    },
    [eO.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !eK(eO.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && G.Cm(),
        metadata: () => ({ dismissUntil: r()().add(180, "days").toDate(), sampleRate: 0.1 }),
    },
    [eO.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: { predicate: () => G.h6(), metadata: () => ({ sampleRate: 0.1 }) },
    [eO.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
                eK(eO.kqX.SYSTEM_SERVICE_WARNING) ||
                !(0, B.yA)(C.Ay) ||
                null == t ||
                en.Ay.getMode() !== eO.TBI.PUSH_TO_TALK
            )
                return !1;
            let n = C.Ay.getVisibleGame();
            return null != n && !!n.elevated;
        },
    },
    [eO.kqX.E2EE_UPDATE_REQUIRED]: {
        predicate: () => {
            if (eK(eO.kqX.E2EE_UPDATE_REQUIRED) || !ea.A.isConnected()) return !1;
            let e = en.Ay.getMediaEngine();
            return 1 !== (e.getSupportedSecureFramesProtocolVersion?.() ?? 0);
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eO.kqX.WINDOWS_MEDIA_PACK_REQUIRED]: {
        predicate: () =>
            !(
                !eC.isPlatformEmbedded ||
                d.A?.process.platform !== "win32" ||
                eK(eO.kqX.WINDOWS_MEDIA_PACK_REQUIRED) ||
                eh.Ay.getEnableHardwareAcceleration()
            ) && !1 === en.Ay.isH264MfDecodeAvailable(),
    },
    [eO.kqX.RIOT_MIGRATION]: {
        predicate: () => {
            if (!E.A.getConfig({ location: "NoticeStore" }).enabled) return !1;
            let e = null != Q.A.getAccount(null, eO.fg2.RIOT_GAMES),
                t = null !== Q.A.getAccount(null, eO.fg2.LEAGUE_OF_LEGENDS);
            if ((0, T.k8)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE) || (!e && !t)) return !1;
            let n = _.A.get(eO.fg2.LEAGUE_OF_LEGENDS),
                i = _.A.get(eO.fg2.RIOT_GAMES);
            return null != n.replacedBy && null != i.replacedBy;
        },
    },
    [eO.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (
                !E.A.getConfig({ location: "NoticeStore" }).enabled ||
                eK(eO.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN) ||
                (0, T.k8)(o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE)
            )
                return !1;
            let i = null != n ? et.A.getGuild(n) : null,
                r = (0, ep.$3)({ permission: eO.xBc.ADMINISTRATOR, user: t, context: i }),
                s = null != i ? ee.A.getSortedRoles(i.id).filter((e) => null === e.tags.guild_connections) : null;
            return null != i && !!r && null != s && !!(0, A.D)(s);
        },
    },
};
function eJ() {
    if (!f.A.isConnected()) return !1;
    eB = null;
    let e = eE.default.getCurrentUser();
    if (null == e) return !1;
    let t = eI.A.getPremiumSubscription(),
        n = eo.A.getGuildId(),
        i = el.A.getVoiceChannelId(),
        r = null != i ? eA.A.getVoiceStateForChannel(i) : null;
    for (let s of eY)
        if (
            null != eW[s] &&
            eW[s].predicate({
                selectedGuildId: n,
                voiceChannelId: i,
                voiceState: r,
                currentUser: e,
                premiumSubscription: t,
            })
        ) {
            let i = eW[s].metadata?.({ currentUser: e, premiumSubscription: t, selectedGuildId: n });
            eB = { ...eH, type: s, metadata: i };
            break;
        }
    if (null != eB) {
        eB.metadata?.sampleRate != null &&
            null == eF[eB.type] &&
            (eF[eB.type] = Math.random() <= eB.metadata.sampleRate);
        let e = !1 === eF[eB.type];
        (eK(eB.type) || e) && (eB = null);
    }
}
function ez() {
    return eu.A.enabled || delete eG[eO.kqX.STREAMER_MODE], eJ();
}
class eQ extends a.Ay.Store {
    static displayName = "NoticeStore";
    initialize() {
        this.syncWith(
            [g.A, ed.Ay, es.A, Z.A, eo.A, y.A, eT.A, W.default, Q.A, V.A, R.A, j.A, K.A, C.Ay, q.A, g.A, I.A],
            eJ,
        ),
            this.waitFor(
                g.A,
                m.A,
                K.A,
                Y.default,
                W.default,
                J.A,
                z.A,
                U.A,
                Q.A,
                Z.A,
                eS.A,
                eR.A,
                ex.A,
                eN.A,
                p.A,
                f.A,
                O.A,
                R.A,
                $.Ay,
                I.A,
                ee.A,
                et.A,
                M.A,
                D.A,
                en.Ay,
                ei.A,
                em.A,
                er.A,
                es.A,
                y.A,
                j.A,
                ea.A,
                C.Ay,
                el.A,
                eo.A,
                F.A,
                ec.A,
                eu.A,
                P.A,
                eI.A,
                ed.Ay,
                eg.A,
                w.Ay,
                eT.A,
                e_.A,
                V.A,
                eE.default,
                eA.A,
                q.A,
            );
    }
    hasNotice() {
        return null != eB && null != eB.type;
    }
    getNotice() {
        return null == e_.A.getAction() ? eB : null;
    }
    isNoticeDismissed(e) {
        return eK(e);
    }
}
let eZ = new eQ(u.h, {
    CURRENT_USER_UPDATE: eJ,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: eJ,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: eJ,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: eJ,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: eJ,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: eJ,
    GUILD_CREATE: eJ,
    GUILD_DELETE: eJ,
    AUDIO_INPUT_DETECTED: eJ,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: eJ,
    CERTIFIED_DEVICES_SET: eJ,
    AUDIO_SET_INPUT_DEVICE: eJ,
    AUDIO_SET_OUTPUT_DEVICE: eJ,
    MEDIA_ENGINE_DEVICES: eJ,
    RTC_CONNECTION_STATE: eJ,
    RPC_APP_AUTHENTICATED: eJ,
    RPC_APP_DISCONNECTED: eJ,
    USER_CONNECTIONS_UPDATE: eJ,
    WINDOW_FOCUS: eJ,
    INSTANT_INVITE_CREATE: eJ,
    INSTANT_INVITE_REVOKE_SUCCESS: eJ,
    SPOTIFY_PLAYER_PAUSE: eJ,
    RUNNING_GAMES_CHANGE: eJ,
    EXPERIMENTS_FETCH_SUCCESS: eJ,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: eJ,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: eJ,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: eJ,
    DEVELOPER_TEST_MODE_RESET: eJ,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: eJ,
    DISPATCH_APPLICATION_INSTALL: eJ,
    IMPERSONATE_STOP: eJ,
    IMPERSONATE_UPDATE: eJ,
    GUILD_MEMBER_ADD: function (e) {
        return e.user.id === Y.default.getId() && eJ();
    },
    GUILD_MEMBER_UPDATE: eJ,
    SURVEY_FETCHED: eJ,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eJ,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: eJ,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: eJ,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: eJ,
    UNSYNCED_USER_SETTINGS_UPDATE: eJ,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return (
            (eB?.type === eO.kqX.INVITED_TO_SPEAK ||
                t.some((e) => {
                    let { userId: t } = e;
                    return t !== Y.default.getId();
                })) &&
            eJ()
        );
    },
    STREAMER_MODE_UPDATE: ez,
    RUNNING_STREAMER_TOOLS_CHANGE: ez,
    DISPATCH_APPLICATION_ERROR: function () {
        return delete eG[eO.kqX.DISPATCH_ERROR], eJ();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return delete eG[eO.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], eJ();
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return eJ();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return eJ();
    },
    NOTICE_SHOW: function (e) {
        eB = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != eB && (null == e.id || e.id === eB.id) && (eV(eB.type, e.isTemporary, e.untilAtLeast), eJ());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return eV(t), eJ();
    },
    LOGOUT: function () {
        (eG = {}), (eF = {}), (eB = null);
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: eJ,
    AUTO_MODERATION_MENTION_RAID_DETECTION: eJ,
    REPORT_AV_ERROR: eJ,
    ACTIVE_AV_ERRORS_CHANGED: eJ,
    MEDIA_ENGINE_MF_AVAILABILITY_CHECKED: eJ,
    AUDIO_SET_MODE: eJ,
});
