n.d(t, { f7: () => e2, Re: () => e1, Ay: () => to, pe: () => eJ, rV: () => e0 });
var i = n(989349),
    l = n.n(i),
    r = n(877624),
    s = n(17928),
    a = n(206959),
    E = n(554146),
    o = n(506774),
    c = n(228366),
    u = n(77729),
    _ = n(573648),
    A = n(472636),
    T = n(521790),
    d = n(587895),
    I = n(145643),
    N = n(826673),
    R = n(367727),
    S = n(532205),
    O = n(487329),
    C = n(161518),
    D = n(736056),
    m = n(952818),
    p = n(617710),
    P = n(652896),
    M = n(585510),
    f = n(610136),
    g = n(229527),
    h = n(93474),
    U = n(164956),
    y = n(857071),
    L = n(733110),
    k = n(577517),
    x = n(748209),
    G = n(869968),
    v = n(243217),
    j = n(287809),
    q = n(428262);
let X = !1;
class b extends s.Ay.Store {
    initialize() {
        this.waitFor(j.default);
    }
    static displayName = "SubscriptionRemindersStore";
    shouldShowReactivateNotice() {
        let e = j.default.getCurrentUser();
        return !(0, q.TW)(e) && X;
    }
}
let B = new b(c.h, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (null != t) {
            let e = v.A.createFromServer(t);
            if (null == (0, q.EL)(e) || e.metadata?.ended_at == null) return;
            let n = l()(e.metadata.ended_at);
            l()().isBetween(n.clone().add(4, "days"), n.clone().add(11, "days")) && (X = !0);
        }
    },
});
var w = n(380619),
    F = n(233317),
    H = n(862990),
    V = n(264779),
    K = n(412260),
    Y = n(852218),
    W = n(859703),
    Z = n(988903),
    z = n(655116),
    $ = n(105530),
    Q = n(935671),
    J = n(742023),
    ee = n(617617),
    et = n(912630),
    en = n(499156),
    ei = n(976910),
    el = n(616356),
    er = n(280450),
    es = n(347481),
    ea = n(734057),
    eE = n(30370);
n(321073);
var eo = n(435558),
    ec = n.n(eo),
    eu = n(339048),
    e_ = n(830382),
    eA = n(627363),
    eT = n(469778),
    ed = n(67480),
    eI = n(652215);
let eN = "DetectedOffPlatformPremiumPerksStore",
    eR = {},
    eS = {},
    eO = [];
function eC() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of ec().values(eS)) {
        if (eO.includes(t)) continue;
        let i = d.A.getApplication(n);
        if (null == i) {
            d.A.isFetchingApplication(n) || d.A.didFetchingApplicationFail(n) || eA.Ay.fetchApplication(n);
            continue;
        }
        let l = ed.A.get(t);
        if (null == l) {
            ed.A.isFetching(t) || ed.A.didFetchingSkuFail(t) || e_.EX(i.id, t);
            continue;
        }
        eT.A.applicationIdsFetching.has(i.id) ||
        eT.A.isEntitledToSku(j.default.getCurrentUser(), t, i.id, i.id) ||
        !l.available
            ? null != eR[t] && (delete eR[t], (e = !0))
            : ((eR[t] = { skuId: t, applicationId: n }), (e = !0));
    }
    return e;
}
class eD extends s.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        this.waitFor(d.A, eT.A, m.Ay, ed.A, j.default), (eO = o.w.get(eN) ?? eO);
    }
    getDetectedOffPlatformPremiumPerks() {
        return ec().values(eR);
    }
}
let em = new eD(c.h, {
    LOGOUT: function () {
        (eR = {}), (eS = {});
    },
    SKU_FETCH_SUCCESS: eC,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eC,
    ENTITLEMENT_CREATE: eC,
    APPLICATION_FETCH_SUCCESS: eC,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete eR[t], eO.includes(t))) return !1;
        eO.push(t), o.w.set(eN, eO);
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of m.Ay.getRunningGames())
            if (null != t && n !== eI.d3x.DISCORD)
                for (let { skuId: n, applicationId: i } of eI.m_i)
                    i !== t ||
                        eO.includes(n) ||
                        (null == eS[n] &&
                            (eT.A.applicationIdsFetched.has(i) ||
                                eT.A.applicationIdsFetching.has(i) ||
                                null != eT.A.getForSku(n) ||
                                eu.LM(i),
                            (eS[n] = { skuId: n, applicationId: i }),
                            (e = !0)));
        return e && eC(), e;
    },
});
var ep = n(696451),
    eP = n(317525),
    eM = n(71393),
    ef = n(293246),
    eg = n(803224),
    eh = n(576705),
    eU = n(362790),
    ey = n(763827),
    eL = n(309010),
    ek = n(967198),
    ex = n(437959),
    eG = n(351906),
    ev = n(274184),
    ej = n(870570),
    eq = n(977997),
    eX = n(295405),
    eb = n(166403),
    eB = n(354670),
    ew = n(147964),
    eF = n(723702),
    eH = n(19575),
    eV = n(755439),
    eK = n(422033),
    eY = n(966846);
n(436317);
var eW = n(202541),
    eZ = n(88001),
    ez = n(190107),
    e$ = n(818348),
    eQ = n(731854);
let eJ = {
        [eI.kqX.DOWNLOAD_NAG]: E.M.NAGBAR_NOTICE_DOWNLOAD,
        [eI.kqX.CONNECT_SPOTIFY]: E.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eI.kqX.CONNECT_PLAYSTATION]: E.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eI.kqX.PASSKEY_BACKUP]: E.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [eI.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: E.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eI.kqX.PREMIUM_REACTIVATE]: E.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eI.kqX.BOUNCED_EMAIL_DETECTED]: E.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eI.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: E.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eI.kqX.CHECKOUT_RECOVERY_NAGBAR]: E.M.CHECKOUT_RECOVERY_NAGBAR,
        [eI.kqX.QUEST_APP_UPSELL]: E.M.NAGBAR_QUEST_APP_UPSELL,
        [eI.kqX.RIOT_MIGRATION]: E.M.RIOT_CONNECTION_DEPRECATION_DISABLE,
        [eI.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: E.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
        [eI.kqX.BATTLENET_MIGRATION]: E.M.BATTLENET_CONNECTION_DEPRECATION_DISABLE,
        [eI.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: E.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES_DISABLE,
    },
    e0 = { [eI.kqX.GIFTING_PROMOTION_REMINDER]: E.M.GIFTING_PROMOTION_REMINDER },
    e1 = {
        [eI.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: E.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eI.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: E.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eI.kqX.RIOT_MIGRATION]: E.M.RIOT_CONNECTION_DEPRECATION,
        [eI.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: E.M.RIOT_CONNECTION_DEPRECATION_ADMIN,
        [eI.kqX.BATTLENET_MIGRATION]: E.M.BATTLENET_CONNECTION_DEPRECATION,
        [eI.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: E.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES,
    },
    e2 = { [eI.kqX.OUTBOUND_PROMOTION]: E.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    e5 = {
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
    e3 = new Set([
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
    e7 = {},
    e9 = {},
    e6 = Object.freeze({ id: null, message: null, buttonText: null, callback: void 0, metadata: null }),
    e8 = null;
function e4(e) {
    return e5[e] + "-untilAtLeast";
}
function te(e, t, n) {
    if (null == e) return;
    let i = e5[e];
    (null == i || t || o.w.set(i, !0), e3.has(e) && (e7[e] = !0), null != n && null != i)
        ? o.w.set(e4(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
        : o.w.remove(e4(e));
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
        let n = (0, S.D)(e);
        return (0, R.FZ)(t, n).isDismissed;
    }
    let n = eJ[e];
    if (null != n) return (0, N.k8)(n);
    let i = e5[e];
    if (null != i) {
        let t,
            n = null != (t = o.w.get(e4(e))) ? l()(t) : null;
        if (null != n) return n?.isAfter(l()());
    }
    let r = e7[e];
    return !!r || (null != i && "" !== i ? o.w.get(i) : !!e3.has(e) && r);
}
let tl = [
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
let tr = {
    [eI.kqX.GIFTING_PROMOTION_REMINDER]: { predicate: () => (0, w.MD)() },
    [eI.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, M.dj)().show && !ti(eI.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({ dismissUntil: l()().add(3, "hours").toDate() }),
    },
    [eI.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let i = ep.Ay.getMember(n, t.id);
            return null != i && !i.isPending && (0, g.TR)(i);
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
            let e = k.A.getWarning();
            return e?.surfaces?.includes(x.x.BANNER) === !0 && null != e.daysRemaining && e.daysRemaining >= 0;
        },
        metadata: () => ({ daysRemaining: k.A.getWarning()?.daysRemaining ?? null }),
    },
    [eI.kqX.VIEWING_ROLES]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return U.A.isViewingRoles(t);
        },
    },
    [eI.kqX.INVITED_TO_SPEAK]: {
        predicate: (e) => {
            let { voiceState: t } = e;
            return (0, $.eY)(t) === $.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        },
    },
    [eI.kqX.LURKING_GUILD]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && y.A.isLurking(t);
        },
    },
    [eI.kqX.VOICE_DISABLED]: { predicate: () => null != ey.A.getRemoteDisconnectVoiceChannelId() },
    [eI.kqX.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != ey.A.getLastSessionVoiceChannelId() },
    [eI.kqX.NO_INPUT_DETECTED]: { predicate: () => C.A.hasActiveErrorOfType(O.iy.NO_AUDIO_INPUT_DETECTED) },
    [eI.kqX.NO_INPUT_DEVICES_DETECTED]: { predicate: () => C.A.hasActiveErrorOfType(O.iy.NO_INPUT_DEVICES) },
    [eI.kqX.VIDEO_BACKGROUND_UNAVAILABLE]: { predicate: () => ey.A.isConnected() && et.A.videoBackgroundUnavailable },
    [eI.kqX.HARDWARE_MUTE]: {
        predicate: () =>
            ey.A.isConnected() &&
            ef.Ay.isHardwareMute() &&
            ef.Ay.isHardwareMuteNoticeEnabled() &&
            !J.Ay.disableHardwareMuteSilenceAlert,
        metadata: () => {
            let e = ef.Ay.getInputDeviceId(),
                t = es.A.getVendor(e),
                n = es.A.getModel(e);
            if (null != t && null != n) return { vendor: t, model: n };
        },
    },
    [eI.kqX.PTT_NO_KEYBIND_WARNING]: {
        predicate: () =>
            !!ey.A.isConnected() &&
            ef.Ay.getMode() === eI.TBI.PUSH_TO_TALK &&
            !(ef.Ay.getSettings().modeOptions.shortcut.length > 0) &&
            !!en.A.getConfig({ location: "NoticeStore" }).showPTTNoKeybindWarning,
    },
    [eI.kqX.DISPATCH_ERROR]: {
        predicate: () => null != eV.A.getLastError(),
        metadata: () => ({ error: eV.A.getLastError() }),
    },
    [eI.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != eK.A.getLastProgress(),
        metadata: () => eK.A.getLastProgress(),
    },
    [eI.kqX.SPOTIFY_AUTO_PAUSED]: { predicate: () => z.A.wasAutoPaused() },
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
                    !eM.A.getGuild(t)?.features.has(eI.GuildFeatures.GUILD_ONBOARDING) &&
                    ep.Ay.getMember(t, n.id)?.isPending) ??
                !1
            );
        },
    },
    [eI.kqX.OUTBOUND_PROMOTION]: { predicate: () => (0, V.So)() },
    [eI.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => eF.isPlatformEmbedded && (!a.A.supported() || eY.A.isCorruptInstallation()),
    },
    [eI.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t && eq.A.hasVideo(t) && !ef.Ay.supports(eQ.O5.VIDEO) && !ti(eI.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
        },
    },
    [eI.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return q.Ay.canRedeemPremiumPerks(t) && em.getDetectedOffPlatformPremiumPerks().length > 0;
        },
        metadata: () => em.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eI.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () =>
            !ti(eI.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && em.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => em.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eI.kqX.STREAMER_MODE]: { predicate: () => eG.A.enabled },
    [eI.kqX.DOWNLOAD_NAG]: { predicate: () => !eF.isPlatformEmbedded && !ti(eI.kqX.DOWNLOAD_NAG) },
    [eI.kqX.QUEST_APP_UPSELL]: { predicate: () => (0, eF.isOculusWeb)() && !ti(eI.kqX.QUEST_APP_UPSELL) },
    [eI.kqX.SCHEDULED_MAINTENANCE]: {
        predicate: () => null != ex.A.getScheduledMaintenance(),
        metadata: () => {
            let e = ex.A.getScheduledMaintenance();
            if (null != e) return { id: e.id, start: new Date(e.scheduled_for), end: new Date(e.scheduled_until) };
        },
    },
    [eI.kqX.SURVEY]: { predicate: () => null != ev.Ay.getCurrentSurvey(), metadata: () => ev.Ay.getCurrentSurvey() },
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
            !z.A.hasConnectedAccount() &&
            m.Ay.isObservedAppRunning(_.A.get(eI.fg2.SPOTIFY).name) &&
            !ti(eI.kqX.CONNECT_SPOTIFY),
    },
    [eI.kqX.WIN32_DEPRECATED_MESSAGE]: {
        predicate: () => u.A?.os.arch === "ia32" && u.A?.process.platform === "win32",
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
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
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
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
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eI.kqX.MACOS_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (u.A?.process.platform === "darwin")
                try {
                    return 21 > parseInt(u.A?.os.release.split(".")[0]);
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eI.kqX.CONNECT_PLAYSTATION]: {
        predicate: () =>
            eE.A.isSuggestedAccountType(eI.fg2.PLAYSTATION) &&
            null == eE.A.getAccount(null, eI.fg2.PLAYSTATION) &&
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
            eB.A.getAlmostExpiringTrialOffersForReminder([eW.pe.TIER_2]).length > 0 &&
            !ti(eI.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
    },
    [eI.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () =>
            eB.A.getAlmostExpiringTrialOffersForReminder([eW.pe.TIER_0]).length > 0 &&
            !ti(eI.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
    },
    [eI.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () =>
            eB.A.getAlmostExpiringDiscountOffersForReminder([eW.pe.TIER_2]).length > 0 &&
            !ti(eI.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
    },
    [eI.kqX.PREMIUM_UNCANCEL]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                r =
                    t?.canceledAt != null &&
                    t?.status === eI.Dmq.CANCELED &&
                    1 >= l()().diff(l()(t.canceledAt), "days"),
                s = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                a =
                    null != t &&
                    t.status === eI.Dmq.CANCELED &&
                    !s &&
                    i <= 7 &&
                    i >= 0 &&
                    (0, q.YE)(n, eW.PremiumTypes.TIER_2) &&
                    !r &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ti(eI.kqX.PREMIUM_UNCANCEL) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                i = null != t ? (0, q.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? q.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eI.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                r = null != t ? l()(t.currentPeriodEnd).diff(l()(t.currentPeriodStart).startOf("day"), "days") : 0,
                s = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                a = eT.A.applicationIdsFetched.has(eW.tv),
                E = eT.A.getForApplication(eW.tv),
                o = null != t ? (0, q.EL)(t) : null,
                c = null != o ? q.Ay.getSkuIdForPlan(o.planId) : null,
                u =
                    null != E &&
                    null != o &&
                    Array.from(E).filter((e) => {
                        let { skuId: t, consumed: n } = e;
                        return !n && t === c;
                    }).length > 0,
                _ =
                    null != t &&
                    i <= (r > 14 ? 7 : 2) &&
                    i >= 0 &&
                    t.status !== eI.Dmq.PAST_DUE &&
                    !s &&
                    a &&
                    !u &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ti(eI.kqX.PREMIUM_MISSING_PAYMENT) && _;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                i = null != t ? (0, q.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? q.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eI.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && null != t.paymentSourceId ? eX.A.getPaymentSource(t.paymentSourceId) : null,
                r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                s =
                    null != t &&
                    t.status === eI.Dmq.PAST_DUE &&
                    !r &&
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
                i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                r =
                    null != t &&
                    t.status === eI.Dmq.PAST_DUE &&
                    !i &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ti(eI.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && r;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eI.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != ew.A.testModeApplicationId,
        metadata: () => {
            if (null == ew.A.testModeApplicationId) return {};
            let e = ew.A.testModeApplicationId,
                t = d.A.getApplication(e);
            return { applicationName: null != t ? t.name : e, applicationId: e };
        },
    },
    [eI.kqX.PREMIUM_REACTIVATE]: { predicate: () => !ti(eI.kqX.PREMIUM_REACTIVATE) && B.shouldShowReactivateNotice() },
    [eI.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                r = null != t && null != t.paymentSourceId ? eX.A.getPaymentSource(t.paymentSourceId) : null,
                s = null != r && e$.AD.has(r.type),
                a =
                    null != t &&
                    t.status === eI.Dmq.PAST_DUE &&
                    !i &&
                    s &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !ti(eI.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return null == t
                ? { daysPastDue: 0, dismissUntil: l()().toDate() }
                : {
                      daysPastDue: t.status === eI.Dmq.PAST_DUE ? l()().diff(t.currentPeriodStart, "days") : 0,
                      dismissUntil: (0, q.ji)(t).expiresDate.toDate(),
                  };
        },
    },
    [eI.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e,
                n = null != t ? eM.A.getGuild(t) : null;
            return (
                (null != t &&
                    null != h.A.getMentionRaidDetected(t) &&
                    n?.features.has(eI.GuildFeatures.COMMUNITY) &&
                    !ti(eI.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
                !1
            );
        },
        metadata: (e) => {
            let { selectedGuildId: t } = e,
                n = { dismissUntil: l()().add(2, "hours").toDate() };
            if (null != t) {
                let e = h.A.getMentionRaidDetected(t);
                null != e && (n.decisionId = e.decisionId);
            }
            return n;
        },
    },
    [eI.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = el.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, P._z)(e),
                n = W.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= ez.tZ;
        },
        metadata: () => {
            let e = el.A.getCurrentUserActiveStream();
            return { streamKey: null != e ? (0, P._z)(e) : null };
        },
    },
    [eI.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eX.A.paymentSources ?? {};
            return G.A.getIsTargeted() && !(0, q.TW)(t) && 0 !== Object.keys(n).length;
        },
    },
    [eI.kqX.PREMIUM_MARKETING_NAGBAR]: {
        predicate: () => {
            let e = K.A.getMarketingComponentByType(r.C.NAGBAR);
            if (null == e) return !1;
            if (null == e.promotionId) return !0;
            let t = K.A.getPromotionByTypeAndId(Y.pt.MARKETING_MOMENT, e.promotionId);
            return (
                !(null != t && t.endDate < new Date()) &&
                !(0, N.u$)(E.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, e.promotionId).isDismissed
            );
        },
    },
    [eI.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eb.A.getPremiumGroupSubscription();
            if (null == n) return !1;
            let i = F.A.hasFetchedMembers(),
                l = F.A.getNumAvailableInvites();
            return (0, H.ux)(t, n) && i && l >= eZ.Vu;
        },
        metadata: () => ({ premiumSubscription: eb.A.getPremiumGroupSubscription() }),
    },
    [eI.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !ti(eI.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && Z.Cm(),
        metadata: () => ({ dismissUntil: l()().add(180, "days").toDate(), sampleRate: 0.1 }),
    },
    [eI.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: { predicate: () => Z.h6(), metadata: () => ({ sampleRate: 0.1 }) },
    [eI.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
                ti(eI.kqX.SYSTEM_SERVICE_WARNING) ||
                !(0, Q.yA)(m.Ay) ||
                null == t ||
                ef.Ay.getMode() !== eI.TBI.PUSH_TO_TALK
            )
                return !1;
            let n = m.Ay.getVisibleGame();
            return null != n && !!n.elevated;
        },
    },
    [eI.kqX.E2EE_UPDATE_REQUIRED]: {
        predicate: () => {
            if (ti(eI.kqX.E2EE_UPDATE_REQUIRED) || !ey.A.isConnected()) return !1;
            let e = ef.Ay.getMediaEngine();
            return 1 !== (e.getSupportedSecureFramesProtocolVersion?.() ?? 0);
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eI.kqX.WINDOWS_MEDIA_PACK_REQUIRED]: {
        predicate: () =>
            !(
                !eF.isPlatformEmbedded ||
                u.A?.process.platform !== "win32" ||
                ti(eI.kqX.WINDOWS_MEDIA_PACK_REQUIRED) ||
                eH.Ay.getEnableHardwareAcceleration()
            ) && !1 === ef.Ay.isH264MfDecodeAvailable(),
    },
    [eI.kqX.RIOT_MIGRATION]: {
        predicate: () => {
            if (!(0, A.getIsRiotSocialSDKMigrationEnabled)({ location: "NoticeStore" })) return !1;
            let e = null != eE.A.getAccount(null, eI.fg2.RIOT_GAMES),
                t = null != eE.A.getAccount(null, eI.fg2.LEAGUE_OF_LEGENDS);
            if (ti(eI.kqX.RIOT_MIGRATION) || (0, N.k8)(E.M.RIOT_CONNECTION_DEPRECATION_DISABLE) || (!e && !t))
                return !1;
            let n = _.A.get(eI.fg2.LEAGUE_OF_LEGENDS),
                i = _.A.get(eI.fg2.RIOT_GAMES);
            return null != n.migrationData && null != i.migrationData;
        },
    },
    [eI.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            return (0, T.Jz)({
                currentUser: t,
                selectedGuildId: n,
                platformTypes: [eI.fg2.RIOT_GAMES, eI.fg2.LEAGUE_OF_LEGENDS],
                dismissibleContent: E.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
                noticeType: eI.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
            });
        },
    },
    [eI.kqX.BATTLENET_MIGRATION]: {
        predicate: () => {
            let e = _.A.get(eI.fg2.BATTLENET);
            return !(
                !e.migrationData?.getMigrationExperimentEnabled("NoticeStore") ||
                null == eE.A.getAccount(null, eI.fg2.BATTLENET) ||
                ti(eI.kqX.BATTLENET_MIGRATION) ||
                (0, N.k8)(E.M.BATTLENET_CONNECTION_DEPRECATION_DISABLE)
            );
        },
    },
    [eI.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            return (0, T.Jz)({
                currentUser: t,
                selectedGuildId: n,
                platformTypes: [eI.fg2.BATTLENET],
                dismissibleContent: E.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES_DISABLE,
                noticeType: eI.kqX.BATTLENET_LINKED_ROLE_DEPRECATION,
            });
        },
    },
};
function ts() {
    if (!p.A.isConnected()) return !1;
    e8 = null;
    let e = j.default.getCurrentUser();
    if (null == e) return !1;
    let t = eb.A.getPremiumSubscription(),
        n = ek.A.getGuildId(),
        i = eL.Ay.getVoiceChannelId(),
        l = null != i ? eq.A.getVoiceStateForChannel(i) : null;
    for (let r of tl)
        if (
            null != tr[r] &&
            tr[r].predicate({
                selectedGuildId: n,
                voiceChannelId: i,
                voiceState: l,
                currentUser: e,
                premiumSubscription: t,
            })
        ) {
            let i = tr[r].metadata?.({ currentUser: e, premiumSubscription: t, selectedGuildId: n });
            e8 = { ...e6, type: r, metadata: i };
            break;
        }
    if (null != e8) {
        e8.metadata?.sampleRate != null &&
            null == e9[e8.type] &&
            (e9[e8.type] = Math.random() <= e8.metadata.sampleRate);
        let e = !1 === e9[e8.type];
        (ti(e8.type) || e) && (e8 = null);
    }
}
function ta() {
    return eG.A.enabled || delete e7[eI.kqX.STREAMER_MODE], ts();
}
class tE extends s.Ay.Store {
    static displayName = "NoticeStore";
    initialize() {
        this.syncWith(
            [C.A, ev.Ay, eU.A, em, ek.A, K.A, eB.A, L.default, eE.A, ee.A, f.A, W.A, el.A, m.Ay, ei.A, C.A, I.A, k.A],
            ts,
        ),
            this.waitFor(
                C.A,
                d.A,
                el.A,
                er.default,
                L.default,
                es.A,
                ea.A,
                G.A,
                eE.A,
                em,
                eV.A,
                eK.A,
                eY.A,
                eT.A,
                D.A,
                p.A,
                h.A,
                f.A,
                ep.Ay,
                I.A,
                eP.A,
                eM.A,
                U.A,
                y.A,
                ef.Ay,
                eg.A,
                k.A,
                eX.A,
                eh.A,
                F.A,
                eU.A,
                K.A,
                W.A,
                ey.A,
                m.Ay,
                eL.Ay,
                ek.A,
                z.A,
                ex.A,
                eG.A,
                B,
                eb.A,
                ev.Ay,
                ew.A,
                J.Ay,
                eB.A,
                ej.A,
                ee.A,
                j.default,
                et.A,
                eq.A,
                ei.A,
            );
    }
    hasNotice() {
        return null != e8 && null != e8.type;
    }
    getNotice() {
        return null == ej.A.getAction() ? e8 : null;
    }
    isNoticeDismissed(e) {
        return ti(e);
    }
}
let to = new tE(c.h, {
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
        return e.user.id === er.default.getId() && ts();
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
                    return t !== er.default.getId();
                })) &&
            ts()
        );
    },
    STREAMER_MODE_UPDATE: ta,
    RUNNING_STREAMER_TOOLS_CHANGE: ta,
    DISPATCH_APPLICATION_ERROR: function () {
        return delete e7[eI.kqX.DISPATCH_ERROR], ts();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return delete e7[eI.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], ts();
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
        (e7 = {}), (e9 = {}), (e8 = null);
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: ts,
    AUTO_MODERATION_MENTION_RAID_DETECTION: ts,
    REPORT_AV_ERROR: ts,
    ACTIVE_AV_ERRORS_CHANGED: ts,
    MEDIA_ENGINE_MF_AVAILABILITY_CHECKED: ts,
    AUDIO_SET_MODE: ts,
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: ts,
});
