"use strict";
n.d(t, { Ay: () => eW, Re: () => eU, f7: () => eP, k3: () => eD, pe: () => eM });
var i = n(989349),
    r = n.n(i),
    s = n(877624),
    l = n(311907),
    a = n(531417),
    c = n(554146),
    o = n(506774),
    u = n(73153),
    d = n(77729),
    _ = n(573648),
    E = n(587895),
    A = n(826673),
    m = n(367727),
    I = n(487329),
    T = n(161518),
    g = n(49463),
    N = n(15285),
    f = n(142120),
    p = n(652896),
    C = n(585510),
    h = n(610136),
    S = n(229527),
    R = n(93474),
    x = n(164956),
    O = n(857071),
    M = n(869968),
    D = n(923349),
    U = n(860300),
    P = n(264779),
    L = n(412260),
    v = n(852218),
    y = n(160394),
    j = n(859703),
    k = n(34550),
    b = n(655116),
    G = n(105530),
    H = n(942405),
    F = n(964404),
    w = n(617617),
    B = n(499156),
    V = n(976910),
    X = n(616356),
    q = n(961350),
    K = n(546183),
    Y = n(347481),
    W = n(734057),
    J = n(962173),
    z = n(584584),
    Q = n(696451),
    Z = n(71393),
    $ = n(430452),
    ee = n(803224),
    et = n(576705),
    en = n(362790),
    ei = n(383501),
    er = n(309010),
    es = n(967198),
    el = n(437959),
    ea = n(351906),
    ec = n(274184),
    eo = n(870570),
    eu = n(287809),
    ed = n(977997),
    e_ = n(295405),
    eE = n(166403),
    eA = n(816733),
    em = n(469778),
    eI = n(147964),
    eT = n(723702),
    eg = n(927578),
    eN = n(837921),
    ef = n(755439),
    ep = n(422033),
    eC = n(966846),
    eh = n(652215);
n(436317);
var eS = n(788868),
    eR = n(654487),
    ex = n(818348),
    eO = n(731854);
let eM = {
        [eh.kqX.DOWNLOAD_NAG]: c.M.NAGBAR_NOTICE_DOWNLOAD,
        [eh.kqX.CONNECT_SPOTIFY]: c.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eh.kqX.CONNECT_PLAYSTATION]: c.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eh.kqX.PASSKEY_BACKUP]: c.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [eh.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: c.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eh.kqX.PREMIUM_REACTIVATE]: c.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eh.kqX.BOUNCED_EMAIL_DETECTED]: c.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eh.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: c.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eh.kqX.CHECKOUT_RECOVERY_NAGBAR]: c.M.CHECKOUT_RECOVERY_NAGBAR,
        [eh.kqX.QUEST_APP_UPSELL]: c.M.NAGBAR_QUEST_APP_UPSELL,
    },
    eD = { [eh.kqX.GIFTING_PROMOTION_REMINDER]: c.M.GIFTING_PROMOTION_REMINDER },
    eU = {
        [eh.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: c.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eh.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: c.M.NAGBAR_NOTICE_OFFER_EXPIRING,
    },
    eP = { [eh.kqX.OUTBOUND_PROMOTION]: c.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    eL = {
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
    ev = new Set([
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
    ey = {},
    ej = {},
    ek = Object.freeze({ id: null, message: null, buttonText: null, callback: void 0, metadata: null }),
    eb = null;
function eG(e) {
    return eL[e] + "-untilAtLeast";
}
function eH(e, t, n) {
    if (null == e) return;
    let i = eL[e];
    (null == i || t || o.w.set(i, !0), ev.has(e) && (ey[e] = !0), null != n && null != i)
        ? o.w.set(eG(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
        : o.w.remove(eG(e));
}
let eF = null;
function ew() {
    if (null != eF) return eF;
    try {
        let e = document.createElement("canvas").getContext("2d"),
            t = "";
        e.font = "16px monospace";
        let n = e.measureText(t).width;
        (e.font = '16px "Segoe MDL2 Assets", monospace'), (eF = e.measureText(t).width !== n);
    } catch (e) {
        eF = !1;
    }
    return eF;
}
function eB(e) {
    if (null == e || null != eU[e]) return !1;
    let t = eD[e];
    if (null != t) return (0, m.En)(t).isDismissed;
    let n = eM[e];
    if (null != n) return (0, A.k8)(n);
    let i = eL[e];
    if (null != i) {
        let t,
            n = null != (t = o.w.get(eG(e))) ? r()(t) : null;
        if (null != n) return n?.isAfter(r()());
    }
    let s = ey[e];
    return !!s || (null != i && "" !== i ? o.w.get(i) : !!ev.has(e) && s);
}
let eV = [
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
    eh.kqX.QUESTS_PROGRESS_INTERRUPTION,
    eh.kqX.UNCLAIMED_ACCOUNT,
    eh.kqX.PENDING_MEMBER,
    eh.kqX.CHECKOUT_RECOVERY_NAGBAR,
    eh.kqX.PREMIUM_MARKETING_NAGBAR,
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
let eX = {
    [eh.kqX.GIFTING_PROMOTION_REMINDER]: {
        predicate: () => {
            let { enabled: e } = U.J.getConfig({ location: "NoticeStore" }),
                t = L.A.getMarketingComponentByType(s.C.GIFT_REMINDER_NAGBAR),
                n = L.A.getGiftPromotion()?.id;
            return (
                e &&
                null != t &&
                null != n &&
                (0, A.u$)(c.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK, n).isDismissed &&
                !eB(eh.kqX.GIFTING_PROMOTION_REMINDER)
            );
        },
    },
    [eh.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, C.dj)().show && !eB(eh.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({ dismissUntil: r()().add(3, "hours").toDate() }),
    },
    [eh.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let i = Q.Ay.getMember(n, t.id);
            return null != i && !i.isPending && (0, S.TR)(i);
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
            return x.A.isViewingRoles(t);
        },
    },
    [eh.kqX.INVITED_TO_SPEAK]: {
        predicate: (e) => {
            let { voiceState: t } = e;
            return (0, G.eY)(t) === G.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        },
    },
    [eh.kqX.LURKING_GUILD]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && O.A.isLurking(t);
        },
    },
    [eh.kqX.VOICE_DISABLED]: { predicate: () => null != ei.A.getRemoteDisconnectVoiceChannelId() },
    [eh.kqX.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != ei.A.getLastSessionVoiceChannelId() },
    [eh.kqX.NO_INPUT_DETECTED]: { predicate: () => T.A.hasActiveErrorOfType(I.iy.NO_AUDIO_INPUT_DETECTED) },
    [eh.kqX.NO_INPUT_DEVICES_DETECTED]: { predicate: () => T.A.hasActiveErrorOfType(I.iy.NO_INPUT_DEVICES) },
    [eh.kqX.HARDWARE_MUTE]: {
        predicate: () =>
            ei.A.isConnected() &&
            $.Ay.isHardwareMute() &&
            $.Ay.isHardwareMuteNoticeEnabled() &&
            !F.Ay.disableHardwareMuteSilenceAlert,
        metadata: () => {
            let e = $.Ay.getInputDeviceId(),
                t = Y.A.getVendor(e),
                n = Y.A.getModel(e);
            if (null != t && null != n) return { vendor: t, model: n };
        },
    },
    [eh.kqX.PTT_NO_KEYBIND_WARNING]: {
        predicate: () =>
            !!ei.A.isConnected() &&
            $.Ay.getMode() === eh.TBI.PUSH_TO_TALK &&
            !($.Ay.getSettings().modeOptions.shortcut.length > 0) &&
            !!B.A.getConfig({ location: "NoticeStore" }).showPTTNoKeybindWarning,
    },
    [eh.kqX.DISPATCH_ERROR]: {
        predicate: () => null != ef.A.getLastError(),
        metadata: () => ({ error: ef.A.getLastError() }),
    },
    [eh.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != ep.A.getLastProgress(),
        metadata: () => ep.A.getLastProgress(),
    },
    [eh.kqX.SPOTIFY_AUTO_PAUSED]: { predicate: () => b.A.wasAutoPaused() },
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
                    !Z.A.getGuild(t)?.features.has(eh.GuildFeatures.GUILD_ONBOARDING) &&
                    Q.Ay.getMember(t, n.id)?.isPending) ??
                !1
            );
        },
    },
    [eh.kqX.OUTBOUND_PROMOTION]: { predicate: () => (0, P.So)() },
    [eh.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => eT.isPlatformEmbedded && (!a.A.supported() || eC.A.isCorruptInstallation()),
    },
    [eh.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t && ed.A.hasVideo(t) && !$.Ay.supports(eO.O5.VIDEO) && !eB(eh.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
        },
    },
    [eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return eg.Ay.canRedeemPremiumPerks(t) && z.A.getDetectedOffPlatformPremiumPerks().length > 0;
        },
        metadata: () => z.A.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () =>
            !eB(eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) &&
            z.A.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => z.A.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eh.kqX.STREAMER_MODE]: { predicate: () => ea.A.enabled },
    [eh.kqX.DOWNLOAD_NAG]: { predicate: () => !eT.isPlatformEmbedded && !eB(eh.kqX.DOWNLOAD_NAG) },
    [eh.kqX.QUEST_APP_UPSELL]: {
        predicate: () =>
            (0, eT.isOculusWeb)() && !eB(eh.kqX.QUEST_APP_UPSELL) && y.A.getConfig({ location: "NoticeStore" }).enabled,
    },
    [eh.kqX.SCHEDULED_MAINTENANCE]: {
        predicate: () => null != el.A.getScheduledMaintenance(),
        metadata: () => {
            let e = el.A.getScheduledMaintenance();
            if (null != e) return { id: e.id, start: new Date(e.scheduled_for), end: new Date(e.scheduled_until) };
        },
    },
    [eh.kqX.SURVEY]: { predicate: () => null != ec.Ay.getCurrentSurvey(), metadata: () => ec.Ay.getCurrentSurvey() },
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
            !b.A.hasConnectedAccount() &&
            N.Ay.isObservedAppRunning(_.A.get(eh.fg2.SPOTIFY).name) &&
            !eB(eh.kqX.CONNECT_SPOTIFY),
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
                    return !ew();
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
                    return ew();
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
            J.A.isSuggestedAccountType(eh.fg2.PLAYSTATION) &&
            null == J.A.getAccount(null, eh.fg2.PLAYSTATION) &&
            !eB(eh.kqX.CONNECT_PLAYSTATION),
    },
    [eh.kqX.PASSKEY_BACKUP]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.mfaEnabled && V.A.hasFetchedCredentials() && !V.A.hasCredentials && !eB(eh.kqX.PASSKEY_BACKUP);
        },
    },
    [eh.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () =>
            eA.A.getAlmostExpiringTrialOffersForReminder([eS.pe.TIER_2]).length > 0 &&
            !eB(eh.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
    },
    [eh.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () =>
            eA.A.getAlmostExpiringTrialOffersForReminder([eS.pe.TIER_0]).length > 0 &&
            !eB(eh.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
    },
    [eh.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () =>
            eA.A.getAlmostExpiringDiscountOffersForReminder([eS.pe.TIER_2]).length > 0 &&
            !eB(eh.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
    },
    [eh.kqX.PREMIUM_UNCANCEL]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                s =
                    t?.canceledAt != null &&
                    t?.status === eh.Dmq.CANCELED &&
                    1 >= r()().diff(r()(t.canceledAt), "days"),
                l = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                a =
                    null != t &&
                    t.status === eh.Dmq.CANCELED &&
                    !l &&
                    i <= 7 &&
                    i >= 0 &&
                    (0, eg.YE)(n, eS.PremiumTypes.TIER_2) &&
                    !s &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eB(eh.kqX.PREMIUM_UNCANCEL) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                i = null != t ? (0, eg.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? eg.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eh.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                s = null != t ? r()(t.currentPeriodEnd).diff(r()(t.currentPeriodStart).startOf("day"), "days") : 0,
                l = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                a = em.A.applicationIdsFetched.has(eS.tv),
                c = em.A.getForApplication(eS.tv),
                o = null != t ? (0, eg.EL)(t) : null,
                u = null != o ? eg.Ay.getSkuIdForPlan(o.planId) : null,
                d =
                    null != c &&
                    null != o &&
                    Array.from(c).filter((e) => {
                        let { skuId: t, consumed: n } = e;
                        return !n && t === u;
                    }).length > 0,
                _ =
                    null != t &&
                    i <= (s > 14 ? 7 : 2) &&
                    i >= 0 &&
                    t.status !== eh.Dmq.PAST_DUE &&
                    !l &&
                    a &&
                    !d &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eB(eh.kqX.PREMIUM_MISSING_PAYMENT) && _;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                i = null != t ? (0, eg.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? eg.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eh.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && null != t.paymentSourceId ? e_.A.getPaymentSource(t.paymentSourceId) : null,
                s = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                l =
                    null != t &&
                    t.status === eh.Dmq.PAST_DUE &&
                    !s &&
                    null != i &&
                    i.invalid &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eB(eh.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && l;
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
            return !eB(eh.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && s;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eh.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != eI.A.testModeApplicationId,
        metadata: () => {
            if (null == eI.A.testModeApplicationId) return {};
            let e = eI.A.testModeApplicationId,
                t = E.A.getApplication(e);
            return { applicationName: null != t ? t.name : e, applicationId: e };
        },
    },
    [eh.kqX.PREMIUM_REACTIVATE]: {
        predicate: () => !eB(eh.kqX.PREMIUM_REACTIVATE) && D.A.shouldShowReactivateNotice(),
    },
    [eh.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                s = null != t && null != t.paymentSourceId ? e_.A.getPaymentSource(t.paymentSourceId) : null,
                l = null != s && ex.AD.has(s.type),
                a =
                    null != t &&
                    t.status === eh.Dmq.PAST_DUE &&
                    !i &&
                    l &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eB(eh.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return null == t
                ? { daysPastDue: 0, dismissUntil: r()().toDate() }
                : {
                      daysPastDue: t.status === eh.Dmq.PAST_DUE ? r()().diff(t.currentPeriodStart, "days") : 0,
                      dismissUntil: (0, eg.ji)(t).expiresDate.toDate(),
                  };
        },
    },
    [eh.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e,
                n = null != t ? Z.A.getGuild(t) : null;
            return (
                (null != t &&
                    null != R.A.getMentionRaidDetected(t) &&
                    n?.features.has(eh.GuildFeatures.COMMUNITY) &&
                    !eB(eh.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
                !1
            );
        },
        metadata: (e) => {
            let { selectedGuildId: t } = e,
                n = { dismissUntil: r()().add(2, "hours").toDate() };
            if (null != t) {
                let e = R.A.getMentionRaidDetected(t);
                null != e && (n.decisionId = e.decisionId);
            }
            return n;
        },
    },
    [eh.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = X.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, p._z)(e),
                n = j.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= eR.tZ;
        },
        metadata: () => {
            let e = X.A.getCurrentUserActiveStream();
            return { streamKey: null != e ? (0, p._z)(e) : null };
        },
    },
    [eh.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = e_.A.paymentSources ?? {};
            return M.A.getIsTargeted() && !(0, eg.TW)(t) && 0 !== Object.keys(n).length;
        },
    },
    [eh.kqX.PREMIUM_MARKETING_NAGBAR]: {
        predicate: () => {
            let e = L.A.getMarketingComponentByType(s.C.NAGBAR);
            if (null == e) return !1;
            if (null == e.promotionId) return !0;
            let t = L.A.getPromotionByTypeAndId(v.pt.MARKETING_MOMENT, e.promotionId);
            return (
                !(null != t && t.endDate < new Date()) &&
                !(0, A.u$)(c.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, e.promotionId).isDismissed
            );
        },
    },
    [eh.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !eB(eh.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && k.Cm(),
        metadata: () => ({ dismissUntil: r()().add(180, "days").toDate(), sampleRate: 0.1 }),
    },
    [eh.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: { predicate: () => k.h6(), metadata: () => ({ sampleRate: 0.1 }) },
    [eh.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
                eB(eh.kqX.SYSTEM_SERVICE_WARNING) ||
                !(0, H.yA)(N.Ay) ||
                null == t ||
                $.Ay.getMode() !== eh.TBI.PUSH_TO_TALK
            )
                return !1;
            let n = N.Ay.getVisibleGame();
            return null != n && !!n.elevated;
        },
    },
    [eh.kqX.E2EE_UPDATE_REQUIRED]: {
        predicate: () => {
            if (eB(eh.kqX.E2EE_UPDATE_REQUIRED) || !ei.A.isConnected()) return !1;
            let e = $.Ay.getMediaEngine();
            return 1 !== (e.getSupportedSecureFramesProtocolVersion?.() ?? 0);
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eh.kqX.WINDOWS_MEDIA_PACK_REQUIRED]: {
        predicate: () =>
            !(
                !eT.isPlatformEmbedded ||
                d.A?.process.platform !== "win32" ||
                eB(eh.kqX.WINDOWS_MEDIA_PACK_REQUIRED) ||
                eN.Ay.getEnableHardwareAcceleration()
            ) && !1 === $.Ay.isH264MfDecodeAvailable(),
    },
};
function eq() {
    if (!f.A.isConnected()) return !1;
    eb = null;
    let e = eu.default.getCurrentUser();
    if (null == e) return !1;
    let t = eE.A.getPremiumSubscription(),
        n = es.A.getGuildId(),
        i = er.A.getVoiceChannelId(),
        r = null != i ? ed.A.getVoiceStateForChannel(i) : null;
    for (let s of eV)
        if (
            null != eX[s] &&
            eX[s].predicate({
                selectedGuildId: n,
                voiceChannelId: i,
                voiceState: r,
                currentUser: e,
                premiumSubscription: t,
            })
        ) {
            let i = eX[s].metadata?.({ currentUser: e, premiumSubscription: t, selectedGuildId: n });
            eb = { ...ek, type: s, metadata: i };
            break;
        }
    if (null != eb) {
        eb.metadata?.sampleRate != null &&
            null == ej[eb.type] &&
            (ej[eb.type] = Math.random() <= eb.metadata.sampleRate);
        let e = !1 === ej[eb.type];
        (eB(eb.type) || e) && (eb = null);
    }
}
function eK() {
    return ea.A.enabled || delete ey[eh.kqX.STREAMER_MODE], eq();
}
class eY extends l.Ay.Store {
    static displayName = "NoticeStore";
    initialize() {
        this.syncWith([T.A, ec.Ay, en.A, z.A, es.A, L.A, eA.A, K.default, J.A, w.A, h.A, j.A, X.A, N.Ay, V.A, T.A], eq),
            this.waitFor(
                T.A,
                E.A,
                X.A,
                q.default,
                K.default,
                Y.A,
                W.A,
                M.A,
                J.A,
                z.A,
                ef.A,
                ep.A,
                eC.A,
                em.A,
                g.A,
                f.A,
                R.A,
                h.A,
                Q.Ay,
                Z.A,
                x.A,
                O.A,
                $.Ay,
                ee.A,
                e_.A,
                et.A,
                en.A,
                L.A,
                j.A,
                ei.A,
                N.Ay,
                er.A,
                es.A,
                b.A,
                el.A,
                ea.A,
                D.A,
                eE.A,
                ec.Ay,
                eI.A,
                F.Ay,
                eA.A,
                eo.A,
                w.A,
                eu.default,
                ed.A,
                V.A,
            );
    }
    hasNotice() {
        return null != eb && null != eb.type;
    }
    getNotice() {
        return null == eo.A.getAction() ? eb : null;
    }
    isNoticeDismissed(e) {
        return eB(e);
    }
}
let eW = new eY(u.h, {
    CURRENT_USER_UPDATE: eq,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: eq,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: eq,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: eq,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: eq,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: eq,
    GUILD_CREATE: eq,
    GUILD_DELETE: eq,
    AUDIO_INPUT_DETECTED: eq,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: eq,
    CERTIFIED_DEVICES_SET: eq,
    AUDIO_SET_INPUT_DEVICE: eq,
    AUDIO_SET_OUTPUT_DEVICE: eq,
    MEDIA_ENGINE_DEVICES: eq,
    RTC_CONNECTION_STATE: eq,
    RPC_APP_AUTHENTICATED: eq,
    RPC_APP_DISCONNECTED: eq,
    USER_CONNECTIONS_UPDATE: eq,
    WINDOW_FOCUS: eq,
    INSTANT_INVITE_CREATE: eq,
    INSTANT_INVITE_REVOKE_SUCCESS: eq,
    SPOTIFY_PLAYER_PAUSE: eq,
    RUNNING_GAMES_CHANGE: eq,
    EXPERIMENTS_FETCH_SUCCESS: eq,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: eq,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: eq,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: eq,
    DEVELOPER_TEST_MODE_RESET: eq,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: eq,
    DISPATCH_APPLICATION_INSTALL: eq,
    IMPERSONATE_STOP: eq,
    IMPERSONATE_UPDATE: eq,
    GUILD_MEMBER_ADD: function (e) {
        return e.user.id === q.default.getId() && eq();
    },
    GUILD_MEMBER_UPDATE: eq,
    SURVEY_FETCHED: eq,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eq,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: eq,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: eq,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: eq,
    UNSYNCED_USER_SETTINGS_UPDATE: eq,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return (
            (eb?.type === eh.kqX.INVITED_TO_SPEAK ||
                t.some((e) => {
                    let { userId: t } = e;
                    return t !== q.default.getId();
                })) &&
            eq()
        );
    },
    STREAMER_MODE_UPDATE: eK,
    RUNNING_STREAMER_TOOLS_CHANGE: eK,
    DISPATCH_APPLICATION_ERROR: function () {
        return delete ey[eh.kqX.DISPATCH_ERROR], eq();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return delete ey[eh.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], eq();
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return eq();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return eq();
    },
    NOTICE_SHOW: function (e) {
        eb = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != eb && (null == e.id || e.id === eb.id) && (eH(eb.type, e.isTemporary, e.untilAtLeast), eq());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return eH(t), eq();
    },
    LOGOUT: function () {
        (ey = {}), (ej = {}), (eb = null);
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: eq,
    AUTO_MODERATION_MENTION_RAID_DETECTION: eq,
    REPORT_AV_ERROR: eq,
    ACTIVE_AV_ERRORS_CHANGED: eq,
    MEDIA_ENGINE_MF_AVAILABILITY_CHECKED: eq,
    AUDIO_SET_MODE: eq,
});
