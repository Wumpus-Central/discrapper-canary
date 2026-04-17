"use strict";
n.d(t, { Ay: () => e0, Re: () => ek, f7: () => ej, pe: () => ey, rV: () => eb });
var i = n(989349),
    r = n.n(i),
    s = n(877624),
    l = n(311907),
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
    f = n(161518),
    C = n(49463),
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
    y = n(810498),
    b = n(264779),
    k = n(412260),
    j = n(852218),
    G = n(160394),
    F = n(859703),
    H = n(34550),
    B = n(655116),
    w = n(105530),
    V = n(942405),
    X = n(964404),
    q = n(617617),
    K = n(499156),
    Y = n(976910),
    W = n(616356),
    J = n(961350),
    z = n(546183),
    Q = n(347481),
    Z = n(734057),
    $ = n(962173),
    ee = n(584584),
    et = n(696451),
    en = n(317525),
    ei = n(71393),
    er = n(430452),
    es = n(803224),
    el = n(576705),
    ea = n(362790),
    eo = n(383501),
    ec = n(309010),
    eu = n(967198),
    ed = n(437959),
    e_ = n(351906),
    eE = n(274184),
    eA = n(870570),
    em = n(287809),
    eI = n(977997),
    eT = n(295405),
    eN = n(166403),
    eg = n(816733),
    ep = n(469778),
    ef = n(147964),
    eC = n(488926),
    eh = n(723702),
    eS = n(927578),
    eR = n(837921),
    ex = n(755439),
    eO = n(422033),
    eM = n(966846),
    eD = n(652215);
n(436317);
var eU = n(788868),
    eP = n(654487),
    eL = n(818348),
    ev = n(731854);
let ey = {
        [eD.kqX.DOWNLOAD_NAG]: o.M.NAGBAR_NOTICE_DOWNLOAD,
        [eD.kqX.CONNECT_SPOTIFY]: o.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eD.kqX.CONNECT_PLAYSTATION]: o.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eD.kqX.PASSKEY_BACKUP]: o.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [eD.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eD.kqX.PREMIUM_REACTIVATE]: o.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eD.kqX.BOUNCED_EMAIL_DETECTED]: o.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eD.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eD.kqX.CHECKOUT_RECOVERY_NAGBAR]: o.M.CHECKOUT_RECOVERY_NAGBAR,
        [eD.kqX.QUEST_APP_UPSELL]: o.M.NAGBAR_QUEST_APP_UPSELL,
        [eD.kqX.RIOT_MIGRATION]: o.M.RIOT_CONNECTION_DEPRECATION_DISABLE,
        [eD.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
    },
    eb = { [eD.kqX.GIFTING_PROMOTION_REMINDER]: o.M.GIFTING_PROMOTION_REMINDER },
    ek = {
        [eD.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eD.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: o.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eD.kqX.RIOT_MIGRATION]: o.M.RIOT_CONNECTION_DEPRECATION,
        [eD.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: o.M.RIOT_CONNECTION_DEPRECATION_ADMIN,
    },
    ej = { [eD.kqX.OUTBOUND_PROMOTION]: o.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    eG = {
        [eD.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
        [eD.kqX.PREMIUM_UNCANCEL]: "hideUncancelReminder",
        [eD.kqX.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
        [eD.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
        [eD.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
        [eD.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
        [eD.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
        [eD.kqX.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
        [eD.kqX.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
        [eD.kqX.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
        [eD.kqX.WIN_COMPAT_MODE_MESSAGE]: "hideWinCompatModeNotice",
        [eD.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [eD.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [eD.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [eD.kqX.MACOS_19_DEPRECATED_MESSAGE]: "hideMacOS19DeprecationMessageNotice",
        [eD.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
        [eD.kqX.E2EE_UPDATE_REQUIRED]: "hideE2EEUpdateRequiredNotice",
    },
    eF = new Set([
        eD.kqX.NO_INPUT_DETECTED,
        eD.kqX.NO_INPUT_DEVICES_DETECTED,
        eD.kqX.STREAMER_MODE,
        eD.kqX.VIDEO_UNSUPPORTED_BROWSER,
        eD.kqX.SPOTIFY_AUTO_PAUSED,
        eD.kqX.DISPATCH_ERROR,
        eD.kqX.DISPATCH_ERROR,
        eD.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eD.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    ]),
    eH = {},
    eB = {},
    ew = Object.freeze({ id: null, message: null, buttonText: null, callback: void 0, metadata: null }),
    eV = null;
function eX(e) {
    return eG[e] + "-untilAtLeast";
}
function eq(e, t, n) {
    if (null == e) return;
    let i = eG[e];
    (null == i || t || c.w.set(i, !0), eF.has(e) && (eH[e] = !0), null != n && null != i)
        ? c.w.set(eX(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
        : c.w.remove(eX(e));
}
let eK = null;
function eY() {
    if (null != eK) return eK;
    try {
        let e = document.createElement("canvas").getContext("2d"),
            t = "";
        e.font = "16px monospace";
        let n = e.measureText(t).width;
        (e.font = '16px "Segoe MDL2 Assets", monospace'), (eK = e.measureText(t).width !== n);
    } catch (e) {
        eK = !1;
    }
    return eK;
}
function eW(e) {
    if (null == e) return !1;
    let t = ek[e];
    if (null != t) {
        let n = (0, g.D)(e);
        return (0, N.FZ)(t, n).isDismissed;
    }
    let n = ey[e];
    if (null != n) return (0, T.k8)(n);
    let i = eG[e];
    if (null != i) {
        let t,
            n = null != (t = c.w.get(eX(e))) ? r()(t) : null;
        if (null != n) return n?.isAfter(r()());
    }
    let s = eH[e];
    return !!s || (null != i && "" !== i ? c.w.get(i) : !!eF.has(e) && s);
}
let eJ = [
    eD.kqX.QUARANTINED,
    eD.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eD.kqX.VIEWING_ROLES,
    eD.kqX.INVITED_TO_SPEAK,
    eD.kqX.LURKING_GUILD,
    eD.kqX.VOICE_DISABLED,
    eD.kqX.NO_INPUT_DEVICES_DETECTED,
    eD.kqX.NO_INPUT_DETECTED,
    eD.kqX.PTT_NO_KEYBIND_WARNING,
    eD.kqX.HARDWARE_MUTE,
    eD.kqX.DISPATCH_ERROR,
    eD.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eD.kqX.SPOTIFY_AUTO_PAUSED,
    eD.kqX.WIN32_DEPRECATED_MESSAGE,
    eD.kqX.WIN7_8_DEPRECATED_MESSAGE,
    eD.kqX.WIN_COMPAT_MODE_MESSAGE,
    eD.kqX.MACOS_19_DEPRECATED_MESSAGE,
    eD.kqX.E2EE_UPDATE_REQUIRED,
    eD.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    eD.kqX.VOICE_CONNECTED_LAST_SESSION,
    eD.kqX.SYSTEM_SERVICE_WARNING,
    eD.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
    eD.kqX.GUILD_RAID_NOTIFICATION,
    eD.kqX.GIFTING_PROMOTION_REMINDER,
    eD.kqX.RIOT_MIGRATION,
    eD.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
    eD.kqX.QUESTS_PROGRESS_INTERRUPTION,
    eD.kqX.UNCLAIMED_ACCOUNT,
    eD.kqX.PENDING_MEMBER,
    eD.kqX.CHECKOUT_RECOVERY_NAGBAR,
    eD.kqX.PREMIUM_MARKETING_NAGBAR,
    eD.kqX.OUTBOUND_PROMOTION,
    eD.kqX.CORRUPT_INSTALLATION,
    eD.kqX.VIDEO_UNSUPPORTED_BROWSER,
    eD.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
    eD.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
    eD.kqX.STREAMER_MODE,
    eD.kqX.SCHEDULED_MAINTENANCE,
    eD.kqX.BOUNCED_EMAIL_DETECTED,
    eD.kqX.UNVERIFIED_ACCOUNT,
    eD.kqX.PREMIUM_TIER_2_TRIAL_ENDING,
    eD.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
    eD.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
    eD.kqX.PREMIUM_UNCANCEL,
    eD.kqX.PREMIUM_MISSING_PAYMENT,
    eD.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
    eD.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
    eD.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
    eD.kqX.PREMIUM_REACTIVATE,
    eD.kqX.PASSKEY_BACKUP,
    eD.kqX.APPLICATION_TEST_MODE,
    eD.kqX.QUEST_APP_UPSELL,
    eD.kqX.DOWNLOAD_NAG,
    eD.kqX.CONNECT_SPOTIFY,
    eD.kqX.CONNECT_PLAYSTATION,
    eD.kqX.SURVEY,
    eD.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
    eD.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
];
eD.kqX.QUARANTINED,
    eD.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eD.kqX.VIEWING_ROLES,
    eD.kqX.INVITED_TO_SPEAK,
    eD.kqX.LURKING_GUILD,
    eD.kqX.VOICE_DISABLED,
    eD.kqX.NO_INPUT_DETECTED,
    eD.kqX.HARDWARE_MUTE,
    eD.kqX.DISPATCH_ERROR,
    eD.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eD.kqX.SPOTIFY_AUTO_PAUSED,
    eD.kqX.VOICE_CONNECTED_LAST_SESSION,
    eD.kqX.PENDING_MEMBER,
    eD.kqX.STREAMER_MODE,
    eD.kqX.SCHEDULED_MAINTENANCE;
let ez = {
    [eD.kqX.GIFTING_PROMOTION_REMINDER]: { predicate: () => (0, y.MD)() },
    [eD.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, x.dj)().show && !eW(eD.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({ dismissUntil: r()().add(3, "hours").toDate() }),
    },
    [eD.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let i = et.Ay.getMember(n, t.id);
            return null != i && !i.isPending && (0, M.TR)(i);
        },
    },
    [eD.kqX.QUARANTINED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t.hasFlag(eD.nhx.QUARANTINED);
        },
    },
    [eD.kqX.VIEWING_ROLES]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return U.A.isViewingRoles(t);
        },
    },
    [eD.kqX.INVITED_TO_SPEAK]: {
        predicate: (e) => {
            let { voiceState: t } = e;
            return (0, w.eY)(t) === w.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        },
    },
    [eD.kqX.LURKING_GUILD]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && P.A.isLurking(t);
        },
    },
    [eD.kqX.VOICE_DISABLED]: { predicate: () => null != eo.A.getRemoteDisconnectVoiceChannelId() },
    [eD.kqX.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != eo.A.getLastSessionVoiceChannelId() },
    [eD.kqX.NO_INPUT_DETECTED]: { predicate: () => f.A.hasActiveErrorOfType(p.iy.NO_AUDIO_INPUT_DETECTED) },
    [eD.kqX.NO_INPUT_DEVICES_DETECTED]: { predicate: () => f.A.hasActiveErrorOfType(p.iy.NO_INPUT_DEVICES) },
    [eD.kqX.HARDWARE_MUTE]: {
        predicate: () =>
            eo.A.isConnected() &&
            er.Ay.isHardwareMute() &&
            er.Ay.isHardwareMuteNoticeEnabled() &&
            !X.Ay.disableHardwareMuteSilenceAlert,
        metadata: () => {
            let e = er.Ay.getInputDeviceId(),
                t = Q.A.getVendor(e),
                n = Q.A.getModel(e);
            if (null != t && null != n) return { vendor: t, model: n };
        },
    },
    [eD.kqX.PTT_NO_KEYBIND_WARNING]: {
        predicate: () =>
            !!eo.A.isConnected() &&
            er.Ay.getMode() === eD.TBI.PUSH_TO_TALK &&
            !(er.Ay.getSettings().modeOptions.shortcut.length > 0) &&
            !!K.A.getConfig({ location: "NoticeStore" }).showPTTNoKeybindWarning,
    },
    [eD.kqX.DISPATCH_ERROR]: {
        predicate: () => null != ex.A.getLastError(),
        metadata: () => ({ error: ex.A.getLastError() }),
    },
    [eD.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != eO.A.getLastProgress(),
        metadata: () => eO.A.getLastProgress(),
    },
    [eD.kqX.SPOTIFY_AUTO_PAUSED]: { predicate: () => B.A.wasAutoPaused() },
    [eD.kqX.UNCLAIMED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return null != t && !t.isClaimed();
        },
    },
    [eD.kqX.PENDING_MEMBER]: {
        predicate: (e) => {
            let { selectedGuildId: t, currentUser: n } = e;
            return (
                (null != t &&
                    null != n &&
                    !ei.A.getGuild(t)?.features.has(eD.GuildFeatures.GUILD_ONBOARDING) &&
                    et.Ay.getMember(t, n.id)?.isPending) ??
                !1
            );
        },
    },
    [eD.kqX.OUTBOUND_PROMOTION]: { predicate: () => (0, b.So)() },
    [eD.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => eh.isPlatformEmbedded && (!a.A.supported() || eM.A.isCorruptInstallation()),
    },
    [eD.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t && eI.A.hasVideo(t) && !er.Ay.supports(ev.O5.VIDEO) && !eW(eD.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
        },
    },
    [eD.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return eS.Ay.canRedeemPremiumPerks(t) && ee.A.getDetectedOffPlatformPremiumPerks().length > 0;
        },
        metadata: () => ee.A.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eD.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () =>
            !eW(eD.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) &&
            ee.A.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => ee.A.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eD.kqX.STREAMER_MODE]: { predicate: () => e_.A.enabled },
    [eD.kqX.DOWNLOAD_NAG]: { predicate: () => !eh.isPlatformEmbedded && !eW(eD.kqX.DOWNLOAD_NAG) },
    [eD.kqX.QUEST_APP_UPSELL]: {
        predicate: () =>
            (0, eh.isOculusWeb)() && !eW(eD.kqX.QUEST_APP_UPSELL) && G.A.getConfig({ location: "NoticeStore" }).enabled,
    },
    [eD.kqX.SCHEDULED_MAINTENANCE]: {
        predicate: () => null != ed.A.getScheduledMaintenance(),
        metadata: () => {
            let e = ed.A.getScheduledMaintenance();
            if (null != e) return { id: e.id, start: new Date(e.scheduled_for), end: new Date(e.scheduled_until) };
        },
    },
    [eD.kqX.SURVEY]: { predicate: () => null != eE.Ay.getCurrentSurvey(), metadata: () => eE.Ay.getCurrentSurvey() },
    [eD.kqX.UNVERIFIED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.email != null && !t.verified;
        },
    },
    [eD.kqX.BOUNCED_EMAIL_DETECTED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.hasBouncedEmail;
        },
    },
    [eD.kqX.CONNECT_SPOTIFY]: {
        predicate: () =>
            !B.A.hasConnectedAccount() &&
            h.Ay.isObservedAppRunning(_.A.get(eD.fg2.SPOTIFY).name) &&
            !eW(eD.kqX.CONNECT_SPOTIFY),
    },
    [eD.kqX.WIN32_DEPRECATED_MESSAGE]: {
        predicate: () => d.A?.os.arch === "ia32" && d.A?.process.platform === "win32",
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eD.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (d.A?.process.platform === "win32")
                try {
                    if (parseInt(d.A?.os.release.split(".")[0]) >= 10) return !1;
                    return !eY();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eD.kqX.WIN_COMPAT_MODE_MESSAGE]: {
        predicate: () => {
            if (d.A?.process.platform === "win32")
                try {
                    if (parseInt(d.A?.os.release.split(".")[0]) >= 10) return !1;
                    return eY();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eD.kqX.MACOS_19_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (d.A?.process.platform === "darwin")
                try {
                    return 20 > parseInt(d.A?.os.release.split(".")[0]);
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eD.kqX.CONNECT_PLAYSTATION]: {
        predicate: () =>
            $.A.isSuggestedAccountType(eD.fg2.PLAYSTATION) &&
            null == $.A.getAccount(null, eD.fg2.PLAYSTATION) &&
            !eW(eD.kqX.CONNECT_PLAYSTATION),
    },
    [eD.kqX.PASSKEY_BACKUP]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.mfaEnabled && Y.A.hasFetchedCredentials() && !Y.A.hasCredentials && !eW(eD.kqX.PASSKEY_BACKUP);
        },
    },
    [eD.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () =>
            eg.A.getAlmostExpiringTrialOffersForReminder([eU.pe.TIER_2]).length > 0 &&
            !eW(eD.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
    },
    [eD.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () =>
            eg.A.getAlmostExpiringTrialOffersForReminder([eU.pe.TIER_0]).length > 0 &&
            !eW(eD.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
    },
    [eD.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () =>
            eg.A.getAlmostExpiringDiscountOffersForReminder([eU.pe.TIER_2]).length > 0 &&
            !eW(eD.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
    },
    [eD.kqX.PREMIUM_UNCANCEL]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                s =
                    t?.canceledAt != null &&
                    t?.status === eD.Dmq.CANCELED &&
                    1 >= r()().diff(r()(t.canceledAt), "days"),
                l = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                a =
                    null != t &&
                    t.status === eD.Dmq.CANCELED &&
                    !l &&
                    i <= 7 &&
                    i >= 0 &&
                    (0, eS.YE)(n, eU.PremiumTypes.TIER_2) &&
                    !s &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eW(eD.kqX.PREMIUM_UNCANCEL) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                i = null != t ? (0, eS.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? eS.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eD.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                s = null != t ? r()(t.currentPeriodEnd).diff(r()(t.currentPeriodStart).startOf("day"), "days") : 0,
                l = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                a = ep.A.applicationIdsFetched.has(eU.tv),
                o = ep.A.getForApplication(eU.tv),
                c = null != t ? (0, eS.EL)(t) : null,
                u = null != c ? eS.Ay.getSkuIdForPlan(c.planId) : null,
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
                    t.status !== eD.Dmq.PAST_DUE &&
                    !l &&
                    a &&
                    !d &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eW(eD.kqX.PREMIUM_MISSING_PAYMENT) && _;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                i = null != t ? (0, eS.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? eS.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eD.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && null != t.paymentSourceId ? eT.A.getPaymentSource(t.paymentSourceId) : null,
                s = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                l =
                    null != t &&
                    t.status === eD.Dmq.PAST_DUE &&
                    !s &&
                    null != i &&
                    i.invalid &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eW(eD.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && l;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eD.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                s =
                    null != t &&
                    t.status === eD.Dmq.PAST_DUE &&
                    !i &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eW(eD.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && s;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eD.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != ef.A.testModeApplicationId,
        metadata: () => {
            if (null == ef.A.testModeApplicationId) return {};
            let e = ef.A.testModeApplicationId,
                t = m.A.getApplication(e);
            return { applicationName: null != t ? t.name : e, applicationId: e };
        },
    },
    [eD.kqX.PREMIUM_REACTIVATE]: {
        predicate: () => !eW(eD.kqX.PREMIUM_REACTIVATE) && v.A.shouldShowReactivateNotice(),
    },
    [eD.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                s = null != t && null != t.paymentSourceId ? eT.A.getPaymentSource(t.paymentSourceId) : null,
                l = null != s && eL.AD.has(s.type),
                a =
                    null != t &&
                    t.status === eD.Dmq.PAST_DUE &&
                    !i &&
                    l &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eW(eD.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return null == t
                ? { daysPastDue: 0, dismissUntil: r()().toDate() }
                : {
                      daysPastDue: t.status === eD.Dmq.PAST_DUE ? r()().diff(t.currentPeriodStart, "days") : 0,
                      dismissUntil: (0, eS.ji)(t).expiresDate.toDate(),
                  };
        },
    },
    [eD.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e,
                n = null != t ? ei.A.getGuild(t) : null;
            return (
                (null != t &&
                    null != D.A.getMentionRaidDetected(t) &&
                    n?.features.has(eD.GuildFeatures.COMMUNITY) &&
                    !eW(eD.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
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
    [eD.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = W.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, R._z)(e),
                n = F.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= eP.tZ;
        },
        metadata: () => {
            let e = W.A.getCurrentUserActiveStream();
            return { streamKey: null != e ? (0, R._z)(e) : null };
        },
    },
    [eD.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eT.A.paymentSources ?? {};
            return L.A.getIsTargeted() && !(0, eS.TW)(t) && 0 !== Object.keys(n).length;
        },
    },
    [eD.kqX.PREMIUM_MARKETING_NAGBAR]: {
        predicate: () => {
            let e = k.A.getMarketingComponentByType(s.C.NAGBAR);
            if (null == e) return !1;
            if (null == e.promotionId) return !0;
            let t = k.A.getPromotionByTypeAndId(j.pt.MARKETING_MOMENT, e.promotionId);
            return (
                !(null != t && t.endDate < new Date()) &&
                !(0, T.u$)(o.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, e.promotionId).isDismissed
            );
        },
    },
    [eD.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !eW(eD.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && H.Cm(),
        metadata: () => ({ dismissUntil: r()().add(180, "days").toDate(), sampleRate: 0.1 }),
    },
    [eD.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: { predicate: () => H.h6(), metadata: () => ({ sampleRate: 0.1 }) },
    [eD.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
                eW(eD.kqX.SYSTEM_SERVICE_WARNING) ||
                !(0, V.yA)(h.Ay) ||
                null == t ||
                er.Ay.getMode() !== eD.TBI.PUSH_TO_TALK
            )
                return !1;
            let n = h.Ay.getVisibleGame();
            return null != n && !!n.elevated;
        },
    },
    [eD.kqX.E2EE_UPDATE_REQUIRED]: {
        predicate: () => {
            if (eW(eD.kqX.E2EE_UPDATE_REQUIRED) || !eo.A.isConnected()) return !1;
            let e = er.Ay.getMediaEngine();
            return 1 !== (e.getSupportedSecureFramesProtocolVersion?.() ?? 0);
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eD.kqX.WINDOWS_MEDIA_PACK_REQUIRED]: {
        predicate: () =>
            !(
                !eh.isPlatformEmbedded ||
                d.A?.process.platform !== "win32" ||
                eW(eD.kqX.WINDOWS_MEDIA_PACK_REQUIRED) ||
                eR.Ay.getEnableHardwareAcceleration()
            ) && !1 === er.Ay.isH264MfDecodeAvailable(),
    },
    [eD.kqX.RIOT_MIGRATION]: {
        predicate: () => {
            if (!E.A.getConfig({ location: "NoticeStore" }).enabled) return !1;
            let e = null != $.A.getAccount(null, eD.fg2.RIOT_GAMES),
                t = null !== $.A.getAccount(null, eD.fg2.LEAGUE_OF_LEGENDS);
            if (eW(eD.kqX.RIOT_MIGRATION) || (0, T.k8)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE) || (!e && !t))
                return !1;
            let n = _.A.get(eD.fg2.LEAGUE_OF_LEGENDS),
                i = _.A.get(eD.fg2.RIOT_GAMES);
            return null != n.replacedBy && null != i.replacedBy;
        },
    },
    [eD.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (
                !E.A.getConfig({ location: "NoticeStore" }).enabled ||
                eW(eD.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN) ||
                (0, T.k8)(o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE)
            )
                return !1;
            let i = null != n ? ei.A.getGuild(n) : null,
                r = (0, eC.$3)({ permission: eD.xBc.ADMINISTRATOR, user: t, context: i }),
                s = null != i ? en.A.getSortedRoles(i.id).filter((e) => null === e.tags.guild_connections) : null;
            return null != i && !!r && null != s && !!(0, A.D)(s);
        },
    },
};
function eQ() {
    if (!S.A.isConnected()) return !1;
    eV = null;
    let e = em.default.getCurrentUser();
    if (null == e) return !1;
    let t = eN.A.getPremiumSubscription(),
        n = eu.A.getGuildId(),
        i = ec.A.getVoiceChannelId(),
        r = null != i ? eI.A.getVoiceStateForChannel(i) : null;
    for (let s of eJ)
        if (
            null != ez[s] &&
            ez[s].predicate({
                selectedGuildId: n,
                voiceChannelId: i,
                voiceState: r,
                currentUser: e,
                premiumSubscription: t,
            })
        ) {
            let i = ez[s].metadata?.({ currentUser: e, premiumSubscription: t, selectedGuildId: n });
            eV = { ...ew, type: s, metadata: i };
            break;
        }
    if (null != eV) {
        eV.metadata?.sampleRate != null &&
            null == eB[eV.type] &&
            (eB[eV.type] = Math.random() <= eV.metadata.sampleRate);
        let e = !1 === eB[eV.type];
        (eW(eV.type) || e) && (eV = null);
    }
}
function eZ() {
    return e_.A.enabled || delete eH[eD.kqX.STREAMER_MODE], eQ();
}
class e$ extends l.Ay.Store {
    static displayName = "NoticeStore";
    initialize() {
        this.syncWith(
            [f.A, eE.Ay, ea.A, ee.A, eu.A, k.A, eg.A, z.default, $.A, q.A, O.A, F.A, W.A, h.Ay, Y.A, f.A, I.A],
            eQ,
        ),
            this.waitFor(
                f.A,
                m.A,
                W.A,
                J.default,
                z.default,
                Q.A,
                Z.A,
                L.A,
                $.A,
                ee.A,
                ex.A,
                eO.A,
                eM.A,
                ep.A,
                C.A,
                S.A,
                D.A,
                O.A,
                et.Ay,
                I.A,
                en.A,
                ei.A,
                U.A,
                P.A,
                er.Ay,
                es.A,
                eT.A,
                el.A,
                ea.A,
                k.A,
                F.A,
                eo.A,
                h.Ay,
                ec.A,
                eu.A,
                B.A,
                ed.A,
                e_.A,
                v.A,
                eN.A,
                eE.Ay,
                ef.A,
                X.Ay,
                eg.A,
                eA.A,
                q.A,
                em.default,
                eI.A,
                Y.A,
            );
    }
    hasNotice() {
        return null != eV && null != eV.type;
    }
    getNotice() {
        return null == eA.A.getAction() ? eV : null;
    }
    isNoticeDismissed(e) {
        return eW(e);
    }
}
let e0 = new e$(u.h, {
    CURRENT_USER_UPDATE: eQ,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: eQ,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: eQ,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: eQ,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: eQ,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: eQ,
    GUILD_CREATE: eQ,
    GUILD_DELETE: eQ,
    AUDIO_INPUT_DETECTED: eQ,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: eQ,
    CERTIFIED_DEVICES_SET: eQ,
    AUDIO_SET_INPUT_DEVICE: eQ,
    AUDIO_SET_OUTPUT_DEVICE: eQ,
    MEDIA_ENGINE_DEVICES: eQ,
    RTC_CONNECTION_STATE: eQ,
    RPC_APP_AUTHENTICATED: eQ,
    RPC_APP_DISCONNECTED: eQ,
    USER_CONNECTIONS_UPDATE: eQ,
    WINDOW_FOCUS: eQ,
    INSTANT_INVITE_CREATE: eQ,
    INSTANT_INVITE_REVOKE_SUCCESS: eQ,
    SPOTIFY_PLAYER_PAUSE: eQ,
    RUNNING_GAMES_CHANGE: eQ,
    EXPERIMENTS_FETCH_SUCCESS: eQ,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: eQ,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: eQ,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: eQ,
    DEVELOPER_TEST_MODE_RESET: eQ,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: eQ,
    DISPATCH_APPLICATION_INSTALL: eQ,
    IMPERSONATE_STOP: eQ,
    IMPERSONATE_UPDATE: eQ,
    GUILD_MEMBER_ADD: function (e) {
        return e.user.id === J.default.getId() && eQ();
    },
    GUILD_MEMBER_UPDATE: eQ,
    SURVEY_FETCHED: eQ,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eQ,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: eQ,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: eQ,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: eQ,
    UNSYNCED_USER_SETTINGS_UPDATE: eQ,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return (
            (eV?.type === eD.kqX.INVITED_TO_SPEAK ||
                t.some((e) => {
                    let { userId: t } = e;
                    return t !== J.default.getId();
                })) &&
            eQ()
        );
    },
    STREAMER_MODE_UPDATE: eZ,
    RUNNING_STREAMER_TOOLS_CHANGE: eZ,
    DISPATCH_APPLICATION_ERROR: function () {
        return delete eH[eD.kqX.DISPATCH_ERROR], eQ();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return delete eH[eD.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], eQ();
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return eQ();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return eQ();
    },
    NOTICE_SHOW: function (e) {
        eV = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != eV && (null == e.id || e.id === eV.id) && (eq(eV.type, e.isTemporary, e.untilAtLeast), eQ());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return eq(t), eQ();
    },
    LOGOUT: function () {
        (eH = {}), (eB = {}), (eV = null);
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: eQ,
    AUTO_MODERATION_MENTION_RAID_DETECTION: eQ,
    REPORT_AV_ERROR: eQ,
    ACTIVE_AV_ERRORS_CHANGED: eQ,
    MEDIA_ENGINE_MF_AVAILABILITY_CHECKED: eQ,
    AUDIO_SET_MODE: eQ,
});
