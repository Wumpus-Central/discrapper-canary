"use strict";
n.d(t, { Ay: () => eY, Re: () => eD, f7: () => eU, pe: () => eO, rV: () => eM });
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
    m = n(487329),
    I = n(161518),
    T = n(49463),
    g = n(15285),
    N = n(142120),
    f = n(652896),
    p = n(585510),
    C = n(610136),
    h = n(229527),
    S = n(93474),
    R = n(164956),
    x = n(857071),
    O = n(869968),
    M = n(923349),
    D = n(810498),
    U = n(264779),
    P = n(412260),
    L = n(852218),
    v = n(160394),
    y = n(859703),
    j = n(34550),
    k = n(655116),
    b = n(105530),
    G = n(942405),
    H = n(964404),
    F = n(617617),
    w = n(499156),
    B = n(976910),
    V = n(616356),
    X = n(961350),
    q = n(546183),
    K = n(347481),
    Y = n(734057),
    W = n(962173),
    J = n(584584),
    z = n(696451),
    Q = n(71393),
    Z = n(430452),
    $ = n(803224),
    ee = n(576705),
    et = n(362790),
    en = n(383501),
    ei = n(309010),
    er = n(967198),
    es = n(437959),
    el = n(351906),
    ea = n(274184),
    ec = n(870570),
    eo = n(287809),
    eu = n(977997),
    ed = n(295405),
    e_ = n(166403),
    eE = n(816733),
    eA = n(469778),
    em = n(147964),
    eI = n(723702),
    eT = n(927578),
    eg = n(837921),
    eN = n(755439),
    ef = n(422033),
    ep = n(966846),
    eC = n(652215);
n(436317);
var eh = n(788868),
    eS = n(654487),
    eR = n(818348),
    ex = n(731854);
let eO = {
        [eC.kqX.DOWNLOAD_NAG]: c.M.NAGBAR_NOTICE_DOWNLOAD,
        [eC.kqX.CONNECT_SPOTIFY]: c.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eC.kqX.CONNECT_PLAYSTATION]: c.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eC.kqX.PASSKEY_BACKUP]: c.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [eC.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: c.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eC.kqX.PREMIUM_REACTIVATE]: c.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eC.kqX.BOUNCED_EMAIL_DETECTED]: c.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eC.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: c.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eC.kqX.CHECKOUT_RECOVERY_NAGBAR]: c.M.CHECKOUT_RECOVERY_NAGBAR,
        [eC.kqX.QUEST_APP_UPSELL]: c.M.NAGBAR_QUEST_APP_UPSELL,
    },
    eM = { [eC.kqX.GIFTING_PROMOTION_REMINDER]: c.M.GIFTING_PROMOTION_REMINDER },
    eD = {
        [eC.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: c.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eC.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: c.M.NAGBAR_NOTICE_OFFER_EXPIRING,
    },
    eU = { [eC.kqX.OUTBOUND_PROMOTION]: c.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    eP = {
        [eC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
        [eC.kqX.PREMIUM_UNCANCEL]: "hideUncancelReminder",
        [eC.kqX.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
        [eC.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
        [eC.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
        [eC.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
        [eC.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
        [eC.kqX.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
        [eC.kqX.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
        [eC.kqX.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
        [eC.kqX.WIN_COMPAT_MODE_MESSAGE]: "hideWinCompatModeNotice",
        [eC.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [eC.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [eC.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [eC.kqX.MACOS_19_DEPRECATED_MESSAGE]: "hideMacOS19DeprecationMessageNotice",
        [eC.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
        [eC.kqX.E2EE_UPDATE_REQUIRED]: "hideE2EEUpdateRequiredNotice",
    },
    eL = new Set([
        eC.kqX.NO_INPUT_DETECTED,
        eC.kqX.NO_INPUT_DEVICES_DETECTED,
        eC.kqX.STREAMER_MODE,
        eC.kqX.VIDEO_UNSUPPORTED_BROWSER,
        eC.kqX.SPOTIFY_AUTO_PAUSED,
        eC.kqX.DISPATCH_ERROR,
        eC.kqX.DISPATCH_ERROR,
        eC.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eC.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    ]),
    ev = {},
    ey = {},
    ej = Object.freeze({ id: null, message: null, buttonText: null, callback: void 0, metadata: null }),
    ek = null;
function eb(e) {
    return eP[e] + "-untilAtLeast";
}
function eG(e, t, n) {
    if (null == e) return;
    let i = eP[e];
    (null == i || t || o.w.set(i, !0), eL.has(e) && (ev[e] = !0), null != n && null != i)
        ? o.w.set(eb(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
        : o.w.remove(eb(e));
}
let eH = null;
function eF() {
    if (null != eH) return eH;
    try {
        let e = document.createElement("canvas").getContext("2d"),
            t = "";
        e.font = "16px monospace";
        let n = e.measureText(t).width;
        (e.font = '16px "Segoe MDL2 Assets", monospace'), (eH = e.measureText(t).width !== n);
    } catch (e) {
        eH = !1;
    }
    return eH;
}
function ew(e) {
    if (null == e || null != eD[e]) return !1;
    let t = eO[e];
    if (null != t) return (0, A.k8)(t);
    let n = eP[e];
    if (null != n) {
        let t,
            n = null != (t = o.w.get(eb(e))) ? r()(t) : null;
        if (null != n) return n?.isAfter(r()());
    }
    let i = ev[e];
    return !!i || (null != n && "" !== n ? o.w.get(n) : !!eL.has(e) && i);
}
let eB = [
    eC.kqX.QUARANTINED,
    eC.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eC.kqX.VIEWING_ROLES,
    eC.kqX.INVITED_TO_SPEAK,
    eC.kqX.LURKING_GUILD,
    eC.kqX.VOICE_DISABLED,
    eC.kqX.NO_INPUT_DEVICES_DETECTED,
    eC.kqX.NO_INPUT_DETECTED,
    eC.kqX.PTT_NO_KEYBIND_WARNING,
    eC.kqX.HARDWARE_MUTE,
    eC.kqX.DISPATCH_ERROR,
    eC.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eC.kqX.SPOTIFY_AUTO_PAUSED,
    eC.kqX.WIN32_DEPRECATED_MESSAGE,
    eC.kqX.WIN7_8_DEPRECATED_MESSAGE,
    eC.kqX.WIN_COMPAT_MODE_MESSAGE,
    eC.kqX.MACOS_19_DEPRECATED_MESSAGE,
    eC.kqX.E2EE_UPDATE_REQUIRED,
    eC.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    eC.kqX.VOICE_CONNECTED_LAST_SESSION,
    eC.kqX.SYSTEM_SERVICE_WARNING,
    eC.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
    eC.kqX.GUILD_RAID_NOTIFICATION,
    eC.kqX.GIFTING_PROMOTION_REMINDER,
    eC.kqX.QUESTS_PROGRESS_INTERRUPTION,
    eC.kqX.UNCLAIMED_ACCOUNT,
    eC.kqX.PENDING_MEMBER,
    eC.kqX.CHECKOUT_RECOVERY_NAGBAR,
    eC.kqX.PREMIUM_MARKETING_NAGBAR,
    eC.kqX.OUTBOUND_PROMOTION,
    eC.kqX.CORRUPT_INSTALLATION,
    eC.kqX.VIDEO_UNSUPPORTED_BROWSER,
    eC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
    eC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
    eC.kqX.STREAMER_MODE,
    eC.kqX.SCHEDULED_MAINTENANCE,
    eC.kqX.BOUNCED_EMAIL_DETECTED,
    eC.kqX.UNVERIFIED_ACCOUNT,
    eC.kqX.PREMIUM_TIER_2_TRIAL_ENDING,
    eC.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
    eC.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
    eC.kqX.PREMIUM_UNCANCEL,
    eC.kqX.PREMIUM_MISSING_PAYMENT,
    eC.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
    eC.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
    eC.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
    eC.kqX.PREMIUM_REACTIVATE,
    eC.kqX.PASSKEY_BACKUP,
    eC.kqX.APPLICATION_TEST_MODE,
    eC.kqX.QUEST_APP_UPSELL,
    eC.kqX.DOWNLOAD_NAG,
    eC.kqX.CONNECT_SPOTIFY,
    eC.kqX.CONNECT_PLAYSTATION,
    eC.kqX.SURVEY,
    eC.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
    eC.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
];
eC.kqX.QUARANTINED,
    eC.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eC.kqX.VIEWING_ROLES,
    eC.kqX.INVITED_TO_SPEAK,
    eC.kqX.LURKING_GUILD,
    eC.kqX.VOICE_DISABLED,
    eC.kqX.NO_INPUT_DETECTED,
    eC.kqX.HARDWARE_MUTE,
    eC.kqX.DISPATCH_ERROR,
    eC.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eC.kqX.SPOTIFY_AUTO_PAUSED,
    eC.kqX.VOICE_CONNECTED_LAST_SESSION,
    eC.kqX.PENDING_MEMBER,
    eC.kqX.STREAMER_MODE,
    eC.kqX.SCHEDULED_MAINTENANCE;
let eV = {
    [eC.kqX.GIFTING_PROMOTION_REMINDER]: { predicate: () => (0, D.MD)() },
    [eC.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, p.dj)().show && !ew(eC.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({ dismissUntil: r()().add(3, "hours").toDate() }),
    },
    [eC.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let i = z.Ay.getMember(n, t.id);
            return null != i && !i.isPending && (0, h.TR)(i);
        },
    },
    [eC.kqX.QUARANTINED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t.hasFlag(eC.nhx.QUARANTINED);
        },
    },
    [eC.kqX.VIEWING_ROLES]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return R.A.isViewingRoles(t);
        },
    },
    [eC.kqX.INVITED_TO_SPEAK]: {
        predicate: (e) => {
            let { voiceState: t } = e;
            return (0, b.eY)(t) === b.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        },
    },
    [eC.kqX.LURKING_GUILD]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && x.A.isLurking(t);
        },
    },
    [eC.kqX.VOICE_DISABLED]: { predicate: () => null != en.A.getRemoteDisconnectVoiceChannelId() },
    [eC.kqX.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != en.A.getLastSessionVoiceChannelId() },
    [eC.kqX.NO_INPUT_DETECTED]: { predicate: () => I.A.hasActiveErrorOfType(m.iy.NO_AUDIO_INPUT_DETECTED) },
    [eC.kqX.NO_INPUT_DEVICES_DETECTED]: { predicate: () => I.A.hasActiveErrorOfType(m.iy.NO_INPUT_DEVICES) },
    [eC.kqX.HARDWARE_MUTE]: {
        predicate: () =>
            en.A.isConnected() &&
            Z.Ay.isHardwareMute() &&
            Z.Ay.isHardwareMuteNoticeEnabled() &&
            !H.Ay.disableHardwareMuteSilenceAlert,
        metadata: () => {
            let e = Z.Ay.getInputDeviceId(),
                t = K.A.getVendor(e),
                n = K.A.getModel(e);
            if (null != t && null != n) return { vendor: t, model: n };
        },
    },
    [eC.kqX.PTT_NO_KEYBIND_WARNING]: {
        predicate: () =>
            !!en.A.isConnected() &&
            Z.Ay.getMode() === eC.TBI.PUSH_TO_TALK &&
            !(Z.Ay.getSettings().modeOptions.shortcut.length > 0) &&
            !!w.A.getConfig({ location: "NoticeStore" }).showPTTNoKeybindWarning,
    },
    [eC.kqX.DISPATCH_ERROR]: {
        predicate: () => null != eN.A.getLastError(),
        metadata: () => ({ error: eN.A.getLastError() }),
    },
    [eC.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != ef.A.getLastProgress(),
        metadata: () => ef.A.getLastProgress(),
    },
    [eC.kqX.SPOTIFY_AUTO_PAUSED]: { predicate: () => k.A.wasAutoPaused() },
    [eC.kqX.UNCLAIMED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return null != t && !t.isClaimed();
        },
    },
    [eC.kqX.PENDING_MEMBER]: {
        predicate: (e) => {
            let { selectedGuildId: t, currentUser: n } = e;
            return (
                (null != t &&
                    null != n &&
                    !Q.A.getGuild(t)?.features.has(eC.GuildFeatures.GUILD_ONBOARDING) &&
                    z.Ay.getMember(t, n.id)?.isPending) ??
                !1
            );
        },
    },
    [eC.kqX.OUTBOUND_PROMOTION]: { predicate: () => (0, U.So)() },
    [eC.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => eI.isPlatformEmbedded && (!a.A.supported() || ep.A.isCorruptInstallation()),
    },
    [eC.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t && eu.A.hasVideo(t) && !Z.Ay.supports(ex.O5.VIDEO) && !ew(eC.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
        },
    },
    [eC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return eT.Ay.canRedeemPremiumPerks(t) && J.A.getDetectedOffPlatformPremiumPerks().length > 0;
        },
        metadata: () => J.A.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () =>
            !ew(eC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) &&
            J.A.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => J.A.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eC.kqX.STREAMER_MODE]: { predicate: () => el.A.enabled },
    [eC.kqX.DOWNLOAD_NAG]: { predicate: () => !eI.isPlatformEmbedded && !ew(eC.kqX.DOWNLOAD_NAG) },
    [eC.kqX.QUEST_APP_UPSELL]: {
        predicate: () =>
            (0, eI.isOculusWeb)() && !ew(eC.kqX.QUEST_APP_UPSELL) && v.A.getConfig({ location: "NoticeStore" }).enabled,
    },
    [eC.kqX.SCHEDULED_MAINTENANCE]: {
        predicate: () => null != es.A.getScheduledMaintenance(),
        metadata: () => {
            let e = es.A.getScheduledMaintenance();
            if (null != e) return { id: e.id, start: new Date(e.scheduled_for), end: new Date(e.scheduled_until) };
        },
    },
    [eC.kqX.SURVEY]: { predicate: () => null != ea.Ay.getCurrentSurvey(), metadata: () => ea.Ay.getCurrentSurvey() },
    [eC.kqX.UNVERIFIED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.email != null && !t.verified;
        },
    },
    [eC.kqX.BOUNCED_EMAIL_DETECTED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.hasBouncedEmail;
        },
    },
    [eC.kqX.CONNECT_SPOTIFY]: {
        predicate: () =>
            !k.A.hasConnectedAccount() &&
            g.Ay.isObservedAppRunning(_.A.get(eC.fg2.SPOTIFY).name) &&
            !ew(eC.kqX.CONNECT_SPOTIFY),
    },
    [eC.kqX.WIN32_DEPRECATED_MESSAGE]: {
        predicate: () => d.A?.os.arch === "ia32" && d.A?.process.platform === "win32",
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eC.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (d.A?.process.platform === "win32")
                try {
                    if (parseInt(d.A?.os.release.split(".")[0]) >= 10) return !1;
                    return !eF();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eC.kqX.WIN_COMPAT_MODE_MESSAGE]: {
        predicate: () => {
            if (d.A?.process.platform === "win32")
                try {
                    if (parseInt(d.A?.os.release.split(".")[0]) >= 10) return !1;
                    return eF();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eC.kqX.MACOS_19_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (d.A?.process.platform === "darwin")
                try {
                    return 20 > parseInt(d.A?.os.release.split(".")[0]);
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eC.kqX.CONNECT_PLAYSTATION]: {
        predicate: () =>
            W.A.isSuggestedAccountType(eC.fg2.PLAYSTATION) &&
            null == W.A.getAccount(null, eC.fg2.PLAYSTATION) &&
            !ew(eC.kqX.CONNECT_PLAYSTATION),
    },
    [eC.kqX.PASSKEY_BACKUP]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.mfaEnabled && B.A.hasFetchedCredentials() && !B.A.hasCredentials && !ew(eC.kqX.PASSKEY_BACKUP);
        },
    },
    [eC.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () =>
            eE.A.getAlmostExpiringTrialOffersForReminder([eh.pe.TIER_2]).length > 0 &&
            !ew(eC.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
    },
    [eC.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () =>
            eE.A.getAlmostExpiringTrialOffersForReminder([eh.pe.TIER_0]).length > 0 &&
            !ew(eC.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
    },
    [eC.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () =>
            eE.A.getAlmostExpiringDiscountOffersForReminder([eh.pe.TIER_2]).length > 0 &&
            !ew(eC.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
    },
    [eC.kqX.PREMIUM_UNCANCEL]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                s =
                    t?.canceledAt != null &&
                    t?.status === eC.Dmq.CANCELED &&
                    1 >= r()().diff(r()(t.canceledAt), "days"),
                l = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                a =
                    null != t &&
                    t.status === eC.Dmq.CANCELED &&
                    !l &&
                    i <= 7 &&
                    i >= 0 &&
                    (0, eT.YE)(n, eh.PremiumTypes.TIER_2) &&
                    !s &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ew(eC.kqX.PREMIUM_UNCANCEL) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                i = null != t ? (0, eT.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? eT.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eC.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                s = null != t ? r()(t.currentPeriodEnd).diff(r()(t.currentPeriodStart).startOf("day"), "days") : 0,
                l = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                a = eA.A.applicationIdsFetched.has(eh.tv),
                c = eA.A.getForApplication(eh.tv),
                o = null != t ? (0, eT.EL)(t) : null,
                u = null != o ? eT.Ay.getSkuIdForPlan(o.planId) : null,
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
                    t.status !== eC.Dmq.PAST_DUE &&
                    !l &&
                    a &&
                    !d &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ew(eC.kqX.PREMIUM_MISSING_PAYMENT) && _;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0,
                i = null != t ? (0, eT.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? eT.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eC.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && null != t.paymentSourceId ? ed.A.getPaymentSource(t.paymentSourceId) : null,
                s = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                l =
                    null != t &&
                    t.status === eC.Dmq.PAST_DUE &&
                    !s &&
                    null != i &&
                    i.invalid &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ew(eC.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && l;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eC.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                s =
                    null != t &&
                    t.status === eC.Dmq.PAST_DUE &&
                    !i &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ew(eC.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && s;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eC.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != em.A.testModeApplicationId,
        metadata: () => {
            if (null == em.A.testModeApplicationId) return {};
            let e = em.A.testModeApplicationId,
                t = E.A.getApplication(e);
            return { applicationName: null != t ? t.name : e, applicationId: e };
        },
    },
    [eC.kqX.PREMIUM_REACTIVATE]: {
        predicate: () => !ew(eC.kqX.PREMIUM_REACTIVATE) && M.A.shouldShowReactivateNotice(),
    },
    [eC.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && r()(t.currentPeriodEnd).isBefore(r()()),
                s = null != t && null != t.paymentSourceId ? ed.A.getPaymentSource(t.paymentSourceId) : null,
                l = null != s && eR.AD.has(s.type),
                a =
                    null != t &&
                    t.status === eC.Dmq.PAST_DUE &&
                    !i &&
                    l &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ew(eC.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return null == t
                ? { daysPastDue: 0, dismissUntil: r()().toDate() }
                : {
                      daysPastDue: t.status === eC.Dmq.PAST_DUE ? r()().diff(t.currentPeriodStart, "days") : 0,
                      dismissUntil: (0, eT.ji)(t).expiresDate.toDate(),
                  };
        },
    },
    [eC.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e,
                n = null != t ? Q.A.getGuild(t) : null;
            return (
                (null != t &&
                    null != S.A.getMentionRaidDetected(t) &&
                    n?.features.has(eC.GuildFeatures.COMMUNITY) &&
                    !ew(eC.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
                !1
            );
        },
        metadata: (e) => {
            let { selectedGuildId: t } = e,
                n = { dismissUntil: r()().add(2, "hours").toDate() };
            if (null != t) {
                let e = S.A.getMentionRaidDetected(t);
                null != e && (n.decisionId = e.decisionId);
            }
            return n;
        },
    },
    [eC.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = V.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, f._z)(e),
                n = y.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= eS.tZ;
        },
        metadata: () => {
            let e = V.A.getCurrentUserActiveStream();
            return { streamKey: null != e ? (0, f._z)(e) : null };
        },
    },
    [eC.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = ed.A.paymentSources ?? {};
            return O.A.getIsTargeted() && !(0, eT.TW)(t) && 0 !== Object.keys(n).length;
        },
    },
    [eC.kqX.PREMIUM_MARKETING_NAGBAR]: {
        predicate: () => {
            let e = P.A.getMarketingComponentByType(s.C.NAGBAR);
            if (null == e) return !1;
            if (null == e.promotionId) return !0;
            let t = P.A.getPromotionByTypeAndId(L.pt.MARKETING_MOMENT, e.promotionId);
            return (
                !(null != t && t.endDate < new Date()) &&
                !(0, A.u$)(c.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, e.promotionId).isDismissed
            );
        },
    },
    [eC.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !ew(eC.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && j.Cm(),
        metadata: () => ({ dismissUntil: r()().add(180, "days").toDate(), sampleRate: 0.1 }),
    },
    [eC.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: { predicate: () => j.h6(), metadata: () => ({ sampleRate: 0.1 }) },
    [eC.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
                ew(eC.kqX.SYSTEM_SERVICE_WARNING) ||
                !(0, G.yA)(g.Ay) ||
                null == t ||
                Z.Ay.getMode() !== eC.TBI.PUSH_TO_TALK
            )
                return !1;
            let n = g.Ay.getVisibleGame();
            return null != n && !!n.elevated;
        },
    },
    [eC.kqX.E2EE_UPDATE_REQUIRED]: {
        predicate: () => {
            if (ew(eC.kqX.E2EE_UPDATE_REQUIRED) || !en.A.isConnected()) return !1;
            let e = Z.Ay.getMediaEngine();
            return 1 !== (e.getSupportedSecureFramesProtocolVersion?.() ?? 0);
        },
        metadata: () => ({ dismissUntil: r()().add(5, "days").toDate() }),
    },
    [eC.kqX.WINDOWS_MEDIA_PACK_REQUIRED]: {
        predicate: () =>
            !(
                !eI.isPlatformEmbedded ||
                d.A?.process.platform !== "win32" ||
                ew(eC.kqX.WINDOWS_MEDIA_PACK_REQUIRED) ||
                eg.Ay.getEnableHardwareAcceleration()
            ) && !1 === Z.Ay.isH264MfDecodeAvailable(),
    },
};
function eX() {
    if (!N.A.isConnected()) return !1;
    ek = null;
    let e = eo.default.getCurrentUser();
    if (null == e) return !1;
    let t = e_.A.getPremiumSubscription(),
        n = er.A.getGuildId(),
        i = ei.A.getVoiceChannelId(),
        r = null != i ? eu.A.getVoiceStateForChannel(i) : null;
    for (let s of eB)
        if (
            null != eV[s] &&
            eV[s].predicate({
                selectedGuildId: n,
                voiceChannelId: i,
                voiceState: r,
                currentUser: e,
                premiumSubscription: t,
            })
        ) {
            let i = eV[s].metadata?.({ currentUser: e, premiumSubscription: t, selectedGuildId: n });
            ek = { ...ej, type: s, metadata: i };
            break;
        }
    if (null != ek) {
        ek.metadata?.sampleRate != null &&
            null == ey[ek.type] &&
            (ey[ek.type] = Math.random() <= ek.metadata.sampleRate);
        let e = !1 === ey[ek.type];
        (ew(ek.type) || e) && (ek = null);
    }
}
function eq() {
    return el.A.enabled || delete ev[eC.kqX.STREAMER_MODE], eX();
}
class eK extends l.Ay.Store {
    static displayName = "NoticeStore";
    initialize() {
        this.syncWith([I.A, ea.Ay, et.A, J.A, er.A, P.A, eE.A, q.default, W.A, F.A, C.A, y.A, V.A, g.Ay, B.A, I.A], eX),
            this.waitFor(
                I.A,
                E.A,
                V.A,
                X.default,
                q.default,
                K.A,
                Y.A,
                O.A,
                W.A,
                J.A,
                eN.A,
                ef.A,
                ep.A,
                eA.A,
                T.A,
                N.A,
                S.A,
                C.A,
                z.Ay,
                Q.A,
                R.A,
                x.A,
                Z.Ay,
                $.A,
                ed.A,
                ee.A,
                et.A,
                P.A,
                y.A,
                en.A,
                g.Ay,
                ei.A,
                er.A,
                k.A,
                es.A,
                el.A,
                M.A,
                e_.A,
                ea.Ay,
                em.A,
                H.Ay,
                eE.A,
                ec.A,
                F.A,
                eo.default,
                eu.A,
                B.A,
            );
    }
    hasNotice() {
        return null != ek && null != ek.type;
    }
    getNotice() {
        return null == ec.A.getAction() ? ek : null;
    }
    isNoticeDismissed(e) {
        return ew(e);
    }
}
let eY = new eK(u.h, {
    CURRENT_USER_UPDATE: eX,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: eX,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: eX,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: eX,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: eX,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: eX,
    GUILD_CREATE: eX,
    GUILD_DELETE: eX,
    AUDIO_INPUT_DETECTED: eX,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: eX,
    CERTIFIED_DEVICES_SET: eX,
    AUDIO_SET_INPUT_DEVICE: eX,
    AUDIO_SET_OUTPUT_DEVICE: eX,
    MEDIA_ENGINE_DEVICES: eX,
    RTC_CONNECTION_STATE: eX,
    RPC_APP_AUTHENTICATED: eX,
    RPC_APP_DISCONNECTED: eX,
    USER_CONNECTIONS_UPDATE: eX,
    WINDOW_FOCUS: eX,
    INSTANT_INVITE_CREATE: eX,
    INSTANT_INVITE_REVOKE_SUCCESS: eX,
    SPOTIFY_PLAYER_PAUSE: eX,
    RUNNING_GAMES_CHANGE: eX,
    EXPERIMENTS_FETCH_SUCCESS: eX,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: eX,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: eX,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: eX,
    DEVELOPER_TEST_MODE_RESET: eX,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: eX,
    DISPATCH_APPLICATION_INSTALL: eX,
    IMPERSONATE_STOP: eX,
    IMPERSONATE_UPDATE: eX,
    GUILD_MEMBER_ADD: function (e) {
        return e.user.id === X.default.getId() && eX();
    },
    GUILD_MEMBER_UPDATE: eX,
    SURVEY_FETCHED: eX,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eX,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: eX,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: eX,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: eX,
    UNSYNCED_USER_SETTINGS_UPDATE: eX,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return (
            (ek?.type === eC.kqX.INVITED_TO_SPEAK ||
                t.some((e) => {
                    let { userId: t } = e;
                    return t !== X.default.getId();
                })) &&
            eX()
        );
    },
    STREAMER_MODE_UPDATE: eq,
    RUNNING_STREAMER_TOOLS_CHANGE: eq,
    DISPATCH_APPLICATION_ERROR: function () {
        return delete ev[eC.kqX.DISPATCH_ERROR], eX();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return delete ev[eC.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], eX();
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return eX();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return eX();
    },
    NOTICE_SHOW: function (e) {
        ek = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != ek && (null == e.id || e.id === ek.id) && (eG(ek.type, e.isTemporary, e.untilAtLeast), eX());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return eG(t), eX();
    },
    LOGOUT: function () {
        (ev = {}), (ey = {}), (ek = null);
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: eX,
    AUTO_MODERATION_MENTION_RAID_DETECTION: eX,
    REPORT_AV_ERROR: eX,
    ACTIVE_AV_ERRORS_CHANGED: eX,
    MEDIA_ENGINE_MF_AVAILABILITY_CHECKED: eX,
    AUDIO_SET_MODE: eX,
});
