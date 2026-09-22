n.d(t, { f7: () => e0, Re: () => eJ, Ay: () => ta, pe: () => ez, rV: () => e$ });
var i = n(536637),
    l = n.n(i),
    r = n(877624),
    s = n(17928),
    a = n(206959),
    o = n(554146),
    E = n(506774),
    c = n(228366),
    u = n(77729),
    _ = n(573648),
    A = n(521790),
    T = n(587895),
    d = n(145643),
    I = n(826673),
    N = n(367727),
    R = n(532205),
    C = n(487329),
    O = n(161518),
    S = n(736056),
    D = n(952818),
    m = n(597643),
    P = n(652896),
    p = n(585510),
    f = n(610136),
    M = n(229527),
    g = n(93474),
    h = n(164956),
    U = n(857071),
    L = n(625075),
    y = n(733110),
    k = n(577517),
    x = n(748209),
    G = n(869968),
    j = n(243217),
    v = n(287809),
    q = n(158045);
let X = !1;
class b extends s.Ay.Store {
    initialize() {
        this.waitFor(v.default);
    }
    static displayName = "SubscriptionRemindersStore";
    shouldShowReactivateNotice() {
        let e = v.default.getCurrentUser();
        return !(0, q.TW)(e) && X;
    }
}
let B = new b(c.h, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (null != t) {
            let e = j.A.createFromServer(t);
            if (null == (0, q.EL)(e) || e.metadata?.ended_at == null) return;
            let n = l()(e.metadata.ended_at);
            l()().isBetween(n.clone().add(4, "days"), n.clone().add(11, "days")) && (X = !0);
        }
    },
});
var w = n(220038),
    F = n(380619),
    H = n(264779),
    V = n(412260),
    K = n(852218),
    Y = n(859703),
    W = n(541315),
    Q = n(655116),
    Z = n(105530),
    z = n(935671),
    $ = n(742023),
    J = n(617617),
    ee = n(912630),
    et = n(499156),
    en = n(976910),
    ei = n(616356),
    el = n(280450),
    er = n(347481),
    es = n(734057),
    ea = n(30370);
n(321073);
var eo = n(435558),
    eE = n.n(eo),
    ec = n(339048),
    eu = n(830382),
    e_ = n(627363),
    eA = n(469778),
    eT = n(67480),
    ed = n(652215);
let eI = "DetectedOffPlatformPremiumPerksStore",
    eN = {},
    eR = {},
    eC = [];
function eO() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of eE().values(eR)) {
        if (eC.includes(t)) continue;
        let i = T.A.getApplication(n);
        if (null == i) {
            T.A.isFetchingApplication(n) || T.A.didFetchingApplicationFail(n) || e_.Ay.fetchApplication(n);
            continue;
        }
        let l = eT.A.get(t);
        if (null == l) {
            eT.A.isFetching(t) || eT.A.didFetchingSkuFail(t) || eu.EX(i.id, t);
            continue;
        }
        eA.A.applicationIdsFetching.has(i.id) ||
        eA.A.isEntitledToSku(v.default.getCurrentUser(), t, i.id, i.id) ||
        !l.available
            ? null != eN[t] && (delete eN[t], (e = !0))
            : ((eN[t] = { skuId: t, applicationId: n }), (e = !0));
    }
    return e;
}
class eS extends s.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        (this.waitFor(T.A, eA.A, D.Ay, eT.A, v.default), (eC = E.w.get(eI) ?? eC));
    }
    getDetectedOffPlatformPremiumPerks() {
        return eE().values(eN);
    }
}
let eD = new eS(c.h, {
    LOGOUT: function () {
        ((eN = {}), (eR = {}));
    },
    SKU_FETCH_SUCCESS: eO,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eO,
    ENTITLEMENT_CREATE: eO,
    APPLICATION_FETCH_SUCCESS: eO,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete eN[t], eC.includes(t))) return !1;
        (eC.push(t), E.w.set(eI, eC));
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of D.Ay.getRunningGames())
            if (null != t && n !== ed.d3x.DISCORD)
                for (let { skuId: n, applicationId: i } of ed.m_i)
                    i !== t ||
                        eC.includes(n) ||
                        (null == eR[n] &&
                            (eA.A.applicationIdsFetched.has(i) ||
                                eA.A.applicationIdsFetching.has(i) ||
                                null != eA.A.getForSku(n) ||
                                ec.LM(i),
                            (eR[n] = { skuId: n, applicationId: i }),
                            (e = !0)));
        return (e && eO(), e);
    },
});
var em = n(696451),
    eP = n(317525),
    ep = n(71393),
    ef = n(544576),
    eM = n(803224),
    eg = n(576705),
    eh = n(362790),
    eU = n(763827),
    eL = n(309010),
    ey = n(967198),
    ek = n(437959),
    ex = n(351906),
    eG = n(274184),
    ej = n(870570),
    ev = n(977997),
    eq = n(295405),
    eX = n(166403),
    eb = n(354670),
    eB = n(147964),
    ew = n(723702),
    eF = n(19575),
    eH = n(755439),
    eV = n(422033),
    eK = n(966846);
n(436317);
var eY = n(202541),
    eW = n(190107),
    eQ = n(818348),
    eZ = n(731854);
let ez = {
        [ed.kqX.DOWNLOAD_NAG]: o.M.NAGBAR_NOTICE_DOWNLOAD,
        [ed.kqX.CONNECT_SPOTIFY]: o.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [ed.kqX.CONNECT_PLAYSTATION]: o.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [ed.kqX.PASSKEY_BACKUP]: o.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [ed.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [ed.kqX.PREMIUM_REACTIVATE]: o.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [ed.kqX.BOUNCED_EMAIL_DETECTED]: o.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [ed.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [ed.kqX.CHECKOUT_RECOVERY_NAGBAR]: o.M.CHECKOUT_RECOVERY_NAGBAR,
        [ed.kqX.QUEST_APP_UPSELL]: o.M.NAGBAR_QUEST_APP_UPSELL,
        [ed.kqX.RIOT_MIGRATION]: o.M.RIOT_CONNECTION_DEPRECATION_DISABLE,
        [ed.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
        [ed.kqX.BATTLENET_MIGRATION]: o.M.BATTLENET_CONNECTION_DEPRECATION_DISABLE,
        [ed.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: o.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES_DISABLE,
        [ed.kqX.COD_3PP_NAGBAR]: o.M.COD_3PP_NAGBAR_NOTICE,
    },
    e$ = { [ed.kqX.GIFTING_PROMOTION_REMINDER]: o.M.GIFTING_PROMOTION_REMINDER },
    eJ = {
        [ed.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [ed.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: o.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [ed.kqX.RIOT_MIGRATION]: o.M.RIOT_CONNECTION_DEPRECATION,
        [ed.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: o.M.RIOT_CONNECTION_DEPRECATION_ADMIN,
        [ed.kqX.BATTLENET_MIGRATION]: o.M.BATTLENET_CONNECTION_DEPRECATION,
        [ed.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: o.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES,
    },
    e0 = { [ed.kqX.OUTBOUND_PROMOTION]: o.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    e1 = {
        [ed.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
        [ed.kqX.PREMIUM_UNCANCEL]: "hideUncancelReminder",
        [ed.kqX.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
        [ed.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
        [ed.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
        [ed.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
        [ed.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
        [ed.kqX.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
        [ed.kqX.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
        [ed.kqX.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
        [ed.kqX.WIN_COMPAT_MODE_MESSAGE]: "hideWinCompatModeNotice",
        [ed.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [ed.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [ed.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [ed.kqX.MACOS_DEPRECATED_MESSAGE]: "hideMacOSDeprecationMessageNotice",
        [ed.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
        [ed.kqX.E2EE_UPDATE_REQUIRED]: "hideE2EEUpdateRequiredNotice",
    },
    e2 = new Set([
        ed.kqX.NO_INPUT_DETECTED,
        ed.kqX.NO_INPUT_DEVICES_DETECTED,
        ed.kqX.STREAMER_MODE,
        ed.kqX.VIDEO_UNSUPPORTED_BROWSER,
        ed.kqX.SPOTIFY_AUTO_PAUSED,
        ed.kqX.DISPATCH_ERROR,
        ed.kqX.DISPATCH_ERROR,
        ed.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        ed.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    ]),
    e5 = {},
    e3 = {},
    e7 = Object.freeze({ id: null, message: null, buttonText: null, callback: void 0, metadata: null }),
    e8 = null;
function e9(e) {
    return e1[e] + "-untilAtLeast";
}
function e6(e, t, n) {
    if (null == e) return;
    let i = e1[e];
    (null == i || t || E.w.set(i, !0), e2.has(e) && (e5[e] = !0), null != n && null != i)
        ? E.w.set(e9(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
        : E.w.remove(e9(e));
}
let e4 = null;
function te() {
    if (null != e4) return e4;
    try {
        let e = document.createElement("canvas").getContext("2d"),
            t = "\uE700\uE701\uE702\uE703\uE704\uE705\uE706\uE707";
        e.font = "16px monospace";
        let n = e.measureText(t).width;
        ((e.font = '16px "Segoe MDL2 Assets", monospace'), (e4 = e.measureText(t).width !== n));
    } catch (e) {
        e4 = !1;
    }
    return e4;
}
function tt(e) {
    if (null == e) return !1;
    let t = eJ[e];
    if (null != t) {
        let n = (0, R.D)(e);
        return (0, N.FZ)(t, n).isDismissed;
    }
    let n = ez[e];
    if (null != n) return (0, I.k8)(n);
    let i = e1[e];
    if (null != i) {
        let t,
            n = null != (t = E.w.get(e9(e))) ? l()(t) : null;
        if (null != n) return n?.isAfter(l()());
    }
    let r = e5[e];
    return !!r || (null != i && "" !== i ? E.w.get(i) : !!e2.has(e) && r);
}
let tn = [
    ed.kqX.QUARANTINED,
    ed.kqX.PARENTAL_CONSENT_WARNING,
    ed.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    ed.kqX.VIEWING_ROLES,
    ed.kqX.INVITED_TO_SPEAK,
    ed.kqX.LURKING_GUILD,
    ed.kqX.VOICE_DISABLED,
    ed.kqX.NO_INPUT_DEVICES_DETECTED,
    ed.kqX.NO_INPUT_DETECTED,
    ed.kqX.VIDEO_BACKGROUND_UNAVAILABLE,
    ed.kqX.PTT_NO_KEYBIND_WARNING,
    ed.kqX.HARDWARE_MUTE,
    ed.kqX.DISPATCH_ERROR,
    ed.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    ed.kqX.SPOTIFY_AUTO_PAUSED,
    ed.kqX.WIN32_DEPRECATED_MESSAGE,
    ed.kqX.WIN7_8_DEPRECATED_MESSAGE,
    ed.kqX.WIN_COMPAT_MODE_MESSAGE,
    ed.kqX.MACOS_DEPRECATED_MESSAGE,
    ed.kqX.E2EE_UPDATE_REQUIRED,
    ed.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    ed.kqX.VOICE_CONNECTED_LAST_SESSION,
    ed.kqX.SYSTEM_SERVICE_WARNING,
    ed.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
    ed.kqX.GUILD_RAID_NOTIFICATION,
    ed.kqX.COD_3PP_NAGBAR,
    ed.kqX.BATTLENET_MIGRATION,
    ed.kqX.BATTLENET_LINKED_ROLE_DEPRECATION,
    ed.kqX.GIFTING_PROMOTION_REMINDER,
    ed.kqX.RIOT_MIGRATION,
    ed.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
    ed.kqX.QUESTS_PROGRESS_INTERRUPTION,
    ed.kqX.UNCLAIMED_ACCOUNT,
    ed.kqX.PENDING_MEMBER,
    ed.kqX.CHECKOUT_RECOVERY_NAGBAR,
    ed.kqX.PREMIUM_MARKETING_NAGBAR,
    ed.kqX.OUTBOUND_PROMOTION,
    ed.kqX.CORRUPT_INSTALLATION,
    ed.kqX.VIDEO_UNSUPPORTED_BROWSER,
    ed.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
    ed.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
    ed.kqX.STREAMER_MODE,
    ed.kqX.SCHEDULED_MAINTENANCE,
    ed.kqX.BOUNCED_EMAIL_DETECTED,
    ed.kqX.UNVERIFIED_ACCOUNT,
    ed.kqX.PREMIUM_TIER_2_TRIAL_ENDING,
    ed.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
    ed.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
    ed.kqX.PREMIUM_UNCANCEL,
    ed.kqX.PREMIUM_MISSING_PAYMENT,
    ed.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
    ed.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
    ed.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
    ed.kqX.PREMIUM_REACTIVATE,
    ed.kqX.PASSKEY_BACKUP,
    ed.kqX.APPLICATION_TEST_MODE,
    ed.kqX.QUEST_APP_UPSELL,
    ed.kqX.DOWNLOAD_NAG,
    ed.kqX.CONNECT_SPOTIFY,
    ed.kqX.CONNECT_PLAYSTATION,
    ed.kqX.SURVEY,
    ed.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
    ed.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
];
(ed.kqX.QUARANTINED,
    ed.kqX.PARENTAL_CONSENT_WARNING,
    ed.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    ed.kqX.VIEWING_ROLES,
    ed.kqX.INVITED_TO_SPEAK,
    ed.kqX.LURKING_GUILD,
    ed.kqX.VOICE_DISABLED,
    ed.kqX.NO_INPUT_DETECTED,
    ed.kqX.VIDEO_BACKGROUND_UNAVAILABLE,
    ed.kqX.HARDWARE_MUTE,
    ed.kqX.DISPATCH_ERROR,
    ed.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    ed.kqX.SPOTIFY_AUTO_PAUSED,
    ed.kqX.VOICE_CONNECTED_LAST_SESSION,
    ed.kqX.PENDING_MEMBER,
    ed.kqX.STREAMER_MODE,
    ed.kqX.SCHEDULED_MAINTENANCE);
let ti = {
    [ed.kqX.GIFTING_PROMOTION_REMINDER]: { predicate: () => (0, F.MD)() },
    [ed.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, p.dj)().show && !tt(ed.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({ dismissUntil: l()().add(3, "hours").toDate() }),
    },
    [ed.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let i = em.Ay.getMember(n, t.id);
            return null != i && !i.isPending && (0, M.TR)(i);
        },
    },
    [ed.kqX.QUARANTINED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t.hasFlag(ed.nhx.QUARANTINED);
        },
    },
    [ed.kqX.PARENTAL_CONSENT_WARNING]: {
        predicate: () => {
            let e = k.A.getWarning();
            return e?.surfaces?.includes(x.x.BANNER) === !0 && null != e.daysRemaining && e.daysRemaining >= 0;
        },
        metadata: () => ({ daysRemaining: k.A.getWarning()?.daysRemaining ?? null }),
    },
    [ed.kqX.VIEWING_ROLES]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return h.A.isViewingRoles(t);
        },
    },
    [ed.kqX.INVITED_TO_SPEAK]: {
        predicate: (e) => {
            let { voiceState: t } = e;
            return (0, Z.eY)(t) === Z.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        },
    },
    [ed.kqX.LURKING_GUILD]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && U.A.isLurking(t);
        },
    },
    [ed.kqX.VOICE_DISABLED]: { predicate: () => null != eU.A.getRemoteDisconnectVoiceChannelId() },
    [ed.kqX.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != eU.A.getLastSessionVoiceChannelId() },
    [ed.kqX.NO_INPUT_DETECTED]: { predicate: () => O.A.hasActiveErrorOfType(C.iy.NO_AUDIO_INPUT_DETECTED) },
    [ed.kqX.NO_INPUT_DEVICES_DETECTED]: { predicate: () => O.A.hasActiveErrorOfType(C.iy.NO_INPUT_DEVICES) },
    [ed.kqX.VIDEO_BACKGROUND_UNAVAILABLE]: { predicate: () => eU.A.isConnected() && ee.A.videoBackgroundUnavailable },
    [ed.kqX.HARDWARE_MUTE]: {
        predicate: () =>
            eU.A.isConnected() &&
            ef.Ay.isHardwareMute() &&
            ef.Ay.isHardwareMuteNoticeEnabled() &&
            !$.Ay.disableHardwareMuteSilenceAlert,
        metadata: () => {
            let e = ef.Ay.getInputDeviceId(),
                t = er.A.getVendor(e),
                n = er.A.getModel(e);
            if (null != t && null != n) return { vendor: t, model: n };
        },
    },
    [ed.kqX.PTT_NO_KEYBIND_WARNING]: {
        predicate: () =>
            !!eU.A.isConnected() &&
            ef.Ay.getMode() === ed.TBI.PUSH_TO_TALK &&
            !(ef.Ay.getSettings().modeOptions.shortcut.length > 0) &&
            !!et.A.getConfig({ location: "NoticeStore" }).showPTTNoKeybindWarning,
    },
    [ed.kqX.DISPATCH_ERROR]: {
        predicate: () => null != eH.A.getLastError(),
        metadata: () => ({ error: eH.A.getLastError() }),
    },
    [ed.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != eV.A.getLastProgress(),
        metadata: () => eV.A.getLastProgress(),
    },
    [ed.kqX.SPOTIFY_AUTO_PAUSED]: { predicate: () => Q.A.wasAutoPaused() },
    [ed.kqX.UNCLAIMED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return null != t && !t.isClaimed();
        },
    },
    [ed.kqX.PENDING_MEMBER]: {
        predicate: (e) => {
            let { selectedGuildId: t, currentUser: n } = e;
            return (
                (null != t &&
                    null != n &&
                    !ep.A.getGuild(t)?.features.has(ed.GuildFeatures.GUILD_ONBOARDING) &&
                    em.Ay.getMember(t, n.id)?.isPending) ??
                !1
            );
        },
    },
    [ed.kqX.OUTBOUND_PROMOTION]: { predicate: () => (0, H.So)() },
    [ed.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => ew.isPlatformEmbedded && (!a.A.supported() || eK.A.isCorruptInstallation()),
    },
    [ed.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t &&
                ev.A.hasVideo(t) &&
                !ef.Ay.supports(eZ.O5.VIDEO) &&
                L.k.getConfig({ location: "NoticeStore.VIDEO_UNSUPPORTED_BROWSER" }).videoEnabled &&
                !tt(ed.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
        },
    },
    [ed.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return q.Ay.canRedeemPremiumPerks(t) && eD.getDetectedOffPlatformPremiumPerks().length > 0;
        },
        metadata: () => eD.getDetectedOffPlatformPremiumPerks()[0],
    },
    [ed.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () =>
            !tt(ed.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && eD.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => eD.getDetectedOffPlatformPremiumPerks()[0],
    },
    [ed.kqX.STREAMER_MODE]: { predicate: () => ex.A.enabled },
    [ed.kqX.DOWNLOAD_NAG]: { predicate: () => !ew.isPlatformEmbedded && !tt(ed.kqX.DOWNLOAD_NAG) },
    [ed.kqX.QUEST_APP_UPSELL]: { predicate: () => (0, ew.isOculusWeb)() && !tt(ed.kqX.QUEST_APP_UPSELL) },
    [ed.kqX.SCHEDULED_MAINTENANCE]: {
        predicate: () => null != ek.A.getScheduledMaintenance(),
        metadata: () => {
            let e = ek.A.getScheduledMaintenance();
            if (null != e) return { id: e.id, start: new Date(e.scheduled_for), end: new Date(e.scheduled_until) };
        },
    },
    [ed.kqX.SURVEY]: { predicate: () => null != eG.Ay.getCurrentSurvey(), metadata: () => eG.Ay.getCurrentSurvey() },
    [ed.kqX.UNVERIFIED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.email != null && !t.verified;
        },
    },
    [ed.kqX.BOUNCED_EMAIL_DETECTED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.hasBouncedEmail;
        },
    },
    [ed.kqX.CONNECT_SPOTIFY]: {
        predicate: () =>
            !Q.A.hasConnectedAccount() &&
            D.Ay.isObservedAppRunning(_.A.get(ed.fg2.SPOTIFY).name) &&
            !tt(ed.kqX.CONNECT_SPOTIFY),
    },
    [ed.kqX.WIN32_DEPRECATED_MESSAGE]: {
        predicate: () => u.A?.os.arch === "ia32" && u.A?.process.platform === "win32",
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [ed.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (u.A?.process.platform === "win32")
                try {
                    if (parseInt(u.A?.os.release.split(".")[0]) >= 10) return !1;
                    return !te();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [ed.kqX.WIN_COMPAT_MODE_MESSAGE]: {
        predicate: () => {
            if (u.A?.process.platform === "win32")
                try {
                    if (parseInt(u.A?.os.release.split(".")[0]) >= 10) return !1;
                    return te();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [ed.kqX.MACOS_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (u.A?.process.platform === "darwin")
                try {
                    return 22 > parseInt(u.A?.os.release.split(".")[0]);
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [ed.kqX.CONNECT_PLAYSTATION]: {
        predicate: () =>
            ea.A.isSuggestedAccountType(ed.fg2.PLAYSTATION) &&
            null == ea.A.getAccount(null, ed.fg2.PLAYSTATION) &&
            !tt(ed.kqX.CONNECT_PLAYSTATION),
    },
    [ed.kqX.PASSKEY_BACKUP]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.mfaEnabled && en.A.hasFetchedCredentials() && !en.A.hasCredentials && !tt(ed.kqX.PASSKEY_BACKUP);
        },
    },
    [ed.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () =>
            eb.A.getAlmostExpiringTrialOffersForReminder([eY.pe.TIER_2]).length > 0 &&
            !tt(ed.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
    },
    [ed.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () =>
            eb.A.getAlmostExpiringTrialOffersForReminder([eY.pe.TIER_0]).length > 0 &&
            !tt(ed.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
    },
    [ed.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () =>
            eb.A.getAlmostExpiringDiscountOffersForReminder([eY.pe.TIER_2]).length > 0 &&
            !tt(ed.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
    },
    [ed.kqX.PREMIUM_UNCANCEL]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                r =
                    t?.canceledAt != null &&
                    t?.status === ed.Dmq.CANCELED &&
                    1 >= l()().diff(l()(t.canceledAt), "days"),
                s = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                a =
                    null != t &&
                    t.status === ed.Dmq.CANCELED &&
                    !s &&
                    i <= 7 &&
                    i >= 0 &&
                    (0, q.YE)(n, eY.PremiumTypes.TIER_2) &&
                    !r &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tt(ed.kqX.PREMIUM_UNCANCEL) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                i = null != t ? (0, q.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? q.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [ed.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                r = null != t ? l()(t.currentPeriodEnd).diff(l()(t.currentPeriodStart).startOf("day"), "days") : 0,
                s = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                a = eA.A.applicationIdsFetched.has(eY.tv),
                o = eA.A.getForApplication(eY.tv),
                E = null != t ? (0, q.EL)(t) : null,
                c = null != E ? q.Ay.getSkuIdForPlan(E.planId) : null,
                u =
                    null != o &&
                    null != E &&
                    Array.from(o).filter((e) => {
                        let { skuId: t, consumed: n } = e;
                        return !n && t === c;
                    }).length > 0,
                _ =
                    null != t &&
                    i <= (r > 14 ? 7 : 2) &&
                    i >= 0 &&
                    t.status !== ed.Dmq.PAST_DUE &&
                    !s &&
                    a &&
                    !u &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tt(ed.kqX.PREMIUM_MISSING_PAYMENT) && _;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                i = null != t ? (0, q.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? q.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [ed.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && null != t.paymentSourceId ? eq.A.getPaymentSource(t.paymentSourceId) : null,
                r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                s =
                    null != t &&
                    t.status === ed.Dmq.PAST_DUE &&
                    !r &&
                    null != i &&
                    i.invalid &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tt(ed.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [ed.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                r =
                    null != t &&
                    t.status === ed.Dmq.PAST_DUE &&
                    !i &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tt(ed.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && r;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [ed.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != eB.A.testModeApplicationId,
        metadata: () => {
            if (null == eB.A.testModeApplicationId) return {};
            let e = eB.A.testModeApplicationId,
                t = T.A.getApplication(e);
            return { applicationName: null != t ? t.name : e, applicationId: e };
        },
    },
    [ed.kqX.PREMIUM_REACTIVATE]: { predicate: () => !tt(ed.kqX.PREMIUM_REACTIVATE) && B.shouldShowReactivateNotice() },
    [ed.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                r = null != t && null != t.paymentSourceId ? eq.A.getPaymentSource(t.paymentSourceId) : null,
                s = null != r && eQ.AD.has(r.type),
                a =
                    null != t &&
                    t.status === ed.Dmq.PAST_DUE &&
                    !i &&
                    s &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tt(ed.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return null == t
                ? { daysPastDue: 0, dismissUntil: l()().toDate() }
                : {
                      daysPastDue: t.status === ed.Dmq.PAST_DUE ? l()().diff(t.currentPeriodStart, "days") : 0,
                      dismissUntil: (0, q.ji)(t).expiresDate.toDate(),
                  };
        },
    },
    [ed.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e,
                n = null != t ? ep.A.getGuild(t) : null;
            return (
                (null != t &&
                    null != g.A.getMentionRaidDetected(t) &&
                    n?.features.has(ed.GuildFeatures.COMMUNITY) &&
                    !tt(ed.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
                !1
            );
        },
        metadata: (e) => {
            let { selectedGuildId: t } = e,
                n = { dismissUntil: l()().add(2, "hours").toDate() };
            if (null != t) {
                let e = g.A.getMentionRaidDetected(t);
                null != e && (n.decisionId = e.decisionId);
            }
            return n;
        },
    },
    [ed.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = ei.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, P._z)(e),
                n = Y.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= eW.tZ;
        },
        metadata: () => {
            let e = ei.A.getCurrentUserActiveStream();
            return { streamKey: null != e ? (0, P._z)(e) : null };
        },
    },
    [ed.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eq.A.paymentSources ?? {};
            return G.A.getIsTargeted() && !(0, q.TW)(t) && 0 !== Object.keys(n).length;
        },
    },
    [ed.kqX.PREMIUM_MARKETING_NAGBAR]: {
        predicate: () => {
            let e = V.A.getMarketingComponentByType(r.C.NAGBAR);
            if (null == e) return !1;
            if (null == e.promotionId) return !0;
            let t = V.A.getPromotionByTypeAndId(K.pt.MARKETING_MOMENT, e.promotionId);
            return (
                !(null != t && t.endDate < new Date()) &&
                !(0, I.u$)(o.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, e.promotionId).isDismissed
            );
        },
    },
    [ed.kqX.COD_3PP_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return !tt(ed.kqX.COD_3PP_NAGBAR) && (0, w.OI)(t, "NoticeStore.COD_3PP_NAGBAR");
        },
    },
    [ed.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !tt(ed.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && W.Cm(),
        metadata: () => ({ dismissUntil: l()().add(180, "days").toDate(), sampleRate: 0.1 }),
    },
    [ed.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: { predicate: () => W.h6(), metadata: () => ({ sampleRate: 0.1 }) },
    [ed.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
                tt(ed.kqX.SYSTEM_SERVICE_WARNING) ||
                !(0, z.yA)(D.Ay) ||
                null == t ||
                ef.Ay.getMode() !== ed.TBI.PUSH_TO_TALK
            )
                return !1;
            let n = D.Ay.getVisibleGame();
            return null != n && !!n.elevated;
        },
    },
    [ed.kqX.E2EE_UPDATE_REQUIRED]: {
        predicate: () => {
            if (tt(ed.kqX.E2EE_UPDATE_REQUIRED) || !eU.A.isConnected()) return !1;
            let e = ef.Ay.getMediaEngine();
            return 1 !== (e.getSupportedSecureFramesProtocolVersion?.() ?? 0);
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [ed.kqX.WINDOWS_MEDIA_PACK_REQUIRED]: {
        predicate: () =>
            !(
                !ew.isPlatformEmbedded ||
                u.A?.process.platform !== "win32" ||
                tt(ed.kqX.WINDOWS_MEDIA_PACK_REQUIRED) ||
                eF.Ay.getEnableHardwareAcceleration()
            ) && !1 === ef.Ay.isH264MfDecodeAvailable(),
    },
    [ed.kqX.RIOT_MIGRATION]: {
        predicate: () => {
            let e = null != ea.A.getAccount(null, ed.fg2.RIOT_GAMES),
                t = null != ea.A.getAccount(null, ed.fg2.LEAGUE_OF_LEGENDS);
            if (tt(ed.kqX.RIOT_MIGRATION) || (0, I.k8)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE) || (!e && !t))
                return !1;
            let n = _.A.get(ed.fg2.LEAGUE_OF_LEGENDS),
                i = _.A.get(ed.fg2.RIOT_GAMES);
            return null != n.migrationData && null != i.migrationData;
        },
    },
    [ed.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            return (0, A.Jz)({
                currentUser: t,
                selectedGuildId: n,
                platformTypes: [ed.fg2.RIOT_GAMES, ed.fg2.LEAGUE_OF_LEGENDS],
                dismissibleContent: o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
                noticeType: ed.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
            });
        },
    },
    [ed.kqX.BATTLENET_MIGRATION]: {
        predicate: () => {
            let e = _.A.get(ed.fg2.BATTLENET);
            return !(
                !e.migrationData?.getMigrationExperimentEnabled("NoticeStore") ||
                null == ea.A.getAccount(null, ed.fg2.BATTLENET) ||
                tt(ed.kqX.BATTLENET_MIGRATION) ||
                (0, I.k8)(o.M.BATTLENET_CONNECTION_DEPRECATION_DISABLE)
            );
        },
    },
    [ed.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            return (0, A.Jz)({
                currentUser: t,
                selectedGuildId: n,
                platformTypes: [ed.fg2.BATTLENET],
                dismissibleContent: o.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES_DISABLE,
                noticeType: ed.kqX.BATTLENET_LINKED_ROLE_DEPRECATION,
            });
        },
    },
};
function tl() {
    if (!m.A.isConnected()) return !1;
    e8 = null;
    let e = v.default.getCurrentUser();
    if (null == e) return !1;
    let t = eX.A.getPremiumSubscription(),
        n = ey.A.getGuildId(),
        i = eL.Ay.getVoiceChannelId(),
        l = null != i ? ev.A.getVoiceStateForChannel(i) : null;
    for (let r of tn)
        if (
            null != ti[r] &&
            ti[r].predicate({
                selectedGuildId: n,
                voiceChannelId: i,
                voiceState: l,
                currentUser: e,
                premiumSubscription: t,
            })
        ) {
            let i = ti[r].metadata?.({ currentUser: e, premiumSubscription: t, selectedGuildId: n });
            e8 = { ...e7, type: r, metadata: i };
            break;
        }
    if (null != e8) {
        e8.metadata?.sampleRate != null &&
            null == e3[e8.type] &&
            (e3[e8.type] = Math.random() <= e8.metadata.sampleRate);
        let e = !1 === e3[e8.type];
        (tt(e8.type) || e) && (e8 = null);
    }
}
function tr() {
    return (ex.A.enabled || delete e5[ed.kqX.STREAMER_MODE], tl());
}
class ts extends s.Ay.Store {
    static displayName = "NoticeStore";
    initialize() {
        (this.syncWith(
            [O.A, eG.Ay, eh.A, eD, ey.A, V.A, eb.A, y.default, ea.A, J.A, f.A, Y.A, ei.A, D.Ay, en.A, O.A, d.A, k.A],
            tl,
        ),
            this.waitFor(
                O.A,
                T.A,
                ei.A,
                el.default,
                y.default,
                er.A,
                es.A,
                G.A,
                ea.A,
                eD,
                eH.A,
                eV.A,
                eK.A,
                eA.A,
                S.A,
                m.A,
                g.A,
                f.A,
                em.Ay,
                d.A,
                eP.A,
                ep.A,
                h.A,
                U.A,
                ef.Ay,
                eM.A,
                k.A,
                eq.A,
                eg.A,
                eh.A,
                V.A,
                Y.A,
                eU.A,
                D.Ay,
                eL.Ay,
                ey.A,
                Q.A,
                ek.A,
                ex.A,
                B,
                eX.A,
                eG.Ay,
                eB.A,
                $.Ay,
                eb.A,
                ej.A,
                J.A,
                v.default,
                ee.A,
                ev.A,
                en.A,
            ));
    }
    hasNotice() {
        return null != e8 && null != e8.type;
    }
    getNotice() {
        return null == ej.A.getAction() ? e8 : null;
    }
    isNoticeDismissed(e) {
        return tt(e);
    }
}
let ta = new ts(c.h, {
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
    APEX_EXPERIMENTS_FETCH_SUCCESS: tl,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: tl,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: tl,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: tl,
    DEVELOPER_TEST_MODE_RESET: tl,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: tl,
    DISPATCH_APPLICATION_INSTALL: tl,
    IMPERSONATE_STOP: tl,
    IMPERSONATE_UPDATE: tl,
    GUILD_MEMBER_ADD: function (e) {
        return e.user.id === el.default.getId() && tl();
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
            (e8?.type === ed.kqX.INVITED_TO_SPEAK ||
                t.some((e) => {
                    let { userId: t } = e;
                    return t !== el.default.getId();
                })) &&
            tl()
        );
    },
    STREAMER_MODE_UPDATE: tr,
    RUNNING_STREAMER_TOOLS_CHANGE: tr,
    DISPATCH_APPLICATION_ERROR: function () {
        return (delete e5[ed.kqX.DISPATCH_ERROR], tl());
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return (delete e5[ed.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], tl());
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return tl();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return tl();
    },
    NOTICE_SHOW: function (e) {
        e8 = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != e8 && (null == e.id || e.id === e8.id) && (e6(e8.type, e.isTemporary, e.untilAtLeast), tl());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return (e6(t), tl());
    },
    LOGOUT: function () {
        ((e5 = {}), (e3 = {}), (e8 = null));
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: tl,
    AUTO_MODERATION_MENTION_RAID_DETECTION: tl,
    REPORT_AV_ERROR: tl,
    ACTIVE_AV_ERRORS_CHANGED: tl,
    MEDIA_ENGINE_MF_AVAILABILITY_CHECKED: tl,
    AUDIO_SET_MODE: tl,
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: tl,
});
