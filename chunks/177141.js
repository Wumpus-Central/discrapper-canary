n.d(t, { f7: () => e$, Re: () => ez, Ay: () => tr, pe: () => eQ, rV: () => eZ });
var i = n(536637),
    l = n.n(i),
    r = n(877624),
    s = n(17928),
    a = n(206959),
    E = n(554146),
    o = n(506774),
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
    S = n(161518),
    O = n(736056),
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
    v = n(243217),
    j = n(287809),
    q = n(158045);
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
var w = n(220038),
    F = n(810498),
    V = n(264779),
    H = n(412260),
    K = n(852218),
    Y = n(859703),
    W = n(541315),
    Q = n(655116),
    Z = n(105530),
    z = n(935671),
    $ = n(617617),
    J = n(912630),
    ee = n(976910),
    et = n(616356),
    en = n(280450),
    ei = n(347481),
    el = n(734057),
    er = n(30370);
n(321073);
var es = n(435558),
    ea = n.n(es),
    eE = n(339048),
    eo = n(830382),
    ec = n(627363),
    eu = n(469778),
    e_ = n(67480),
    eA = n(652215);
let eT = "DetectedOffPlatformPremiumPerksStore",
    ed = {},
    eI = {},
    eN = [];
function eR() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of ea().values(eI)) {
        if (eN.includes(t)) continue;
        let i = T.A.getApplication(n);
        if (null == i) {
            T.A.isFetchingApplication(n) || T.A.didFetchingApplicationFail(n) || ec.Ay.fetchApplication(n);
            continue;
        }
        let l = e_.A.get(t);
        if (null == l) {
            e_.A.isFetching(t) || e_.A.didFetchingSkuFail(t) || eo.EX(i.id, t);
            continue;
        }
        eu.A.applicationIdsFetching.has(i.id) ||
        eu.A.isEntitledToSku(j.default.getCurrentUser(), t, i.id, i.id) ||
        !l.available
            ? null != ed[t] && (delete ed[t], (e = !0))
            : ((ed[t] = { skuId: t, applicationId: n }), (e = !0));
    }
    return e;
}
class eC extends s.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        (this.waitFor(T.A, eu.A, D.Ay, e_.A, j.default), (eN = o.w.get(eT) ?? eN));
    }
    getDetectedOffPlatformPremiumPerks() {
        return ea().values(ed);
    }
}
let eS = new eC(c.h, {
    LOGOUT: function () {
        ((ed = {}), (eI = {}));
    },
    SKU_FETCH_SUCCESS: eR,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eR,
    ENTITLEMENT_CREATE: eR,
    APPLICATION_FETCH_SUCCESS: eR,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete ed[t], eN.includes(t))) return !1;
        (eN.push(t), o.w.set(eT, eN));
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of D.Ay.getRunningGames())
            if (null != t && n !== eA.d3x.DISCORD)
                for (let { skuId: n, applicationId: i } of eA.m_i)
                    i !== t ||
                        eN.includes(n) ||
                        (null == eI[n] &&
                            (eu.A.applicationIdsFetched.has(i) ||
                                eu.A.applicationIdsFetching.has(i) ||
                                null != eu.A.getForSku(n) ||
                                eE.LM(i),
                            (eI[n] = { skuId: n, applicationId: i }),
                            (e = !0)));
        return (e && eR(), e);
    },
});
var eO = n(696451),
    eD = n(317525),
    em = n(71393),
    eP = n(25578),
    ep = n(803224),
    ef = n(576705),
    eM = n(362790),
    eg = n(763827),
    eh = n(309010),
    eU = n(967198),
    eL = n(437959),
    ey = n(351906),
    ek = n(274184),
    ex = n(870570),
    eG = n(977997),
    ev = n(295405),
    ej = n(166403),
    eq = n(354670),
    eX = n(147964),
    eb = n(723702),
    eB = n(19575),
    ew = n(755439),
    eF = n(422033),
    eV = n(966846);
n(436317);
var eH = n(202541),
    eK = n(190107),
    eY = n(818348),
    eW = n(731854);
let eQ = {
        [eA.kqX.DOWNLOAD_NAG]: E.M.NAGBAR_NOTICE_DOWNLOAD,
        [eA.kqX.CONNECT_SPOTIFY]: E.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eA.kqX.CONNECT_PLAYSTATION]: E.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eA.kqX.PASSKEY_BACKUP]: E.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [eA.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: E.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eA.kqX.PREMIUM_REACTIVATE]: E.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eA.kqX.BOUNCED_EMAIL_DETECTED]: E.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eA.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: E.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eA.kqX.CHECKOUT_RECOVERY_NAGBAR]: E.M.CHECKOUT_RECOVERY_NAGBAR,
        [eA.kqX.QUEST_APP_UPSELL]: E.M.NAGBAR_QUEST_APP_UPSELL,
        [eA.kqX.RIOT_MIGRATION]: E.M.RIOT_CONNECTION_DEPRECATION_DISABLE,
        [eA.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: E.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
        [eA.kqX.BATTLENET_MIGRATION]: E.M.BATTLENET_CONNECTION_DEPRECATION_DISABLE,
        [eA.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: E.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES_DISABLE,
        [eA.kqX.COD_3PP_NAGBAR]: E.M.COD_3PP_NAGBAR_NOTICE,
    },
    eZ = { [eA.kqX.GIFTING_PROMOTION_REMINDER]: E.M.GIFTING_PROMOTION_REMINDER },
    ez = {
        [eA.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: E.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eA.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: E.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eA.kqX.RIOT_MIGRATION]: E.M.RIOT_CONNECTION_DEPRECATION,
        [eA.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: E.M.RIOT_CONNECTION_DEPRECATION_ADMIN,
        [eA.kqX.BATTLENET_MIGRATION]: E.M.BATTLENET_CONNECTION_DEPRECATION,
        [eA.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: E.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES,
    },
    e$ = { [eA.kqX.OUTBOUND_PROMOTION]: E.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    eJ = {
        [eA.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
        [eA.kqX.PREMIUM_UNCANCEL]: "hideUncancelReminder",
        [eA.kqX.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
        [eA.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
        [eA.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
        [eA.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
        [eA.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
        [eA.kqX.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
        [eA.kqX.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
        [eA.kqX.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
        [eA.kqX.WIN_COMPAT_MODE_MESSAGE]: "hideWinCompatModeNotice",
        [eA.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [eA.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [eA.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [eA.kqX.MACOS_DEPRECATED_MESSAGE]: "hideMacOSDeprecationMessageNotice",
        [eA.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
        [eA.kqX.E2EE_UPDATE_REQUIRED]: "hideE2EEUpdateRequiredNotice",
    },
    e0 = new Set([
        eA.kqX.NO_INPUT_DETECTED,
        eA.kqX.NO_INPUT_DEVICES_DETECTED,
        eA.kqX.STREAMER_MODE,
        eA.kqX.VIDEO_UNSUPPORTED_BROWSER,
        eA.kqX.SPOTIFY_AUTO_PAUSED,
        eA.kqX.DISPATCH_ERROR,
        eA.kqX.DISPATCH_ERROR,
        eA.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eA.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    ]),
    e1 = {},
    e2 = {},
    e5 = Object.freeze({ id: null, message: null, buttonText: null, callback: void 0, metadata: null }),
    e3 = null;
function e7(e) {
    return eJ[e] + "-untilAtLeast";
}
function e8(e, t, n) {
    if (null == e) return;
    let i = eJ[e];
    (null == i || t || o.w.set(i, !0), e0.has(e) && (e1[e] = !0), null != n && null != i)
        ? o.w.set(e7(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
        : o.w.remove(e7(e));
}
let e9 = null;
function e6() {
    if (null != e9) return e9;
    try {
        let e = document.createElement("canvas").getContext("2d"),
            t = "\uE700\uE701\uE702\uE703\uE704\uE705\uE706\uE707";
        e.font = "16px monospace";
        let n = e.measureText(t).width;
        ((e.font = '16px "Segoe MDL2 Assets", monospace'), (e9 = e.measureText(t).width !== n));
    } catch (e) {
        e9 = !1;
    }
    return e9;
}
function e4(e) {
    if (null == e) return !1;
    let t = ez[e];
    if (null != t) {
        let n = (0, R.D)(e);
        return (0, N.FZ)(t, n).isDismissed;
    }
    let n = eQ[e];
    if (null != n) return (0, I.k8)(n);
    let i = eJ[e];
    if (null != i) {
        let t,
            n = null != (t = o.w.get(e7(e))) ? l()(t) : null;
        if (null != n) return n?.isAfter(l()());
    }
    let r = e1[e];
    return !!r || (null != i && "" !== i ? o.w.get(i) : !!e0.has(e) && r);
}
let te = [
    eA.kqX.QUARANTINED,
    eA.kqX.PARENTAL_CONSENT_WARNING,
    eA.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eA.kqX.VIEWING_ROLES,
    eA.kqX.INVITED_TO_SPEAK,
    eA.kqX.LURKING_GUILD,
    eA.kqX.VOICE_DISABLED,
    eA.kqX.NO_INPUT_DEVICES_DETECTED,
    eA.kqX.NO_INPUT_DETECTED,
    eA.kqX.VIDEO_BACKGROUND_UNAVAILABLE,
    eA.kqX.PTT_NO_KEYBIND_WARNING,
    eA.kqX.HARDWARE_MUTE,
    eA.kqX.DISPATCH_ERROR,
    eA.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eA.kqX.SPOTIFY_AUTO_PAUSED,
    eA.kqX.WIN32_DEPRECATED_MESSAGE,
    eA.kqX.WIN7_8_DEPRECATED_MESSAGE,
    eA.kqX.WIN_COMPAT_MODE_MESSAGE,
    eA.kqX.MACOS_DEPRECATED_MESSAGE,
    eA.kqX.E2EE_UPDATE_REQUIRED,
    eA.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    eA.kqX.VOICE_CONNECTED_LAST_SESSION,
    eA.kqX.SYSTEM_SERVICE_WARNING,
    eA.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
    eA.kqX.GUILD_RAID_NOTIFICATION,
    eA.kqX.COD_3PP_NAGBAR,
    eA.kqX.BATTLENET_MIGRATION,
    eA.kqX.BATTLENET_LINKED_ROLE_DEPRECATION,
    eA.kqX.GIFTING_PROMOTION_REMINDER,
    eA.kqX.RIOT_MIGRATION,
    eA.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
    eA.kqX.QUESTS_PROGRESS_INTERRUPTION,
    eA.kqX.UNCLAIMED_ACCOUNT,
    eA.kqX.PENDING_MEMBER,
    eA.kqX.CHECKOUT_RECOVERY_NAGBAR,
    eA.kqX.PREMIUM_MARKETING_NAGBAR,
    eA.kqX.OUTBOUND_PROMOTION,
    eA.kqX.CORRUPT_INSTALLATION,
    eA.kqX.VIDEO_UNSUPPORTED_BROWSER,
    eA.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
    eA.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
    eA.kqX.STREAMER_MODE,
    eA.kqX.SCHEDULED_MAINTENANCE,
    eA.kqX.BOUNCED_EMAIL_DETECTED,
    eA.kqX.UNVERIFIED_ACCOUNT,
    eA.kqX.PREMIUM_TIER_2_TRIAL_ENDING,
    eA.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
    eA.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
    eA.kqX.PREMIUM_UNCANCEL,
    eA.kqX.PREMIUM_MISSING_PAYMENT,
    eA.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
    eA.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
    eA.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
    eA.kqX.PREMIUM_REACTIVATE,
    eA.kqX.PASSKEY_BACKUP,
    eA.kqX.APPLICATION_TEST_MODE,
    eA.kqX.QUEST_APP_UPSELL,
    eA.kqX.DOWNLOAD_NAG,
    eA.kqX.CONNECT_SPOTIFY,
    eA.kqX.CONNECT_PLAYSTATION,
    eA.kqX.SURVEY,
    eA.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
    eA.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
];
(eA.kqX.QUARANTINED,
    eA.kqX.PARENTAL_CONSENT_WARNING,
    eA.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eA.kqX.VIEWING_ROLES,
    eA.kqX.INVITED_TO_SPEAK,
    eA.kqX.LURKING_GUILD,
    eA.kqX.VOICE_DISABLED,
    eA.kqX.NO_INPUT_DETECTED,
    eA.kqX.VIDEO_BACKGROUND_UNAVAILABLE,
    eA.kqX.HARDWARE_MUTE,
    eA.kqX.DISPATCH_ERROR,
    eA.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eA.kqX.SPOTIFY_AUTO_PAUSED,
    eA.kqX.VOICE_CONNECTED_LAST_SESSION,
    eA.kqX.PENDING_MEMBER,
    eA.kqX.STREAMER_MODE,
    eA.kqX.SCHEDULED_MAINTENANCE);
let tt = {
    [eA.kqX.GIFTING_PROMOTION_REMINDER]: { predicate: () => (0, F.MD)() },
    [eA.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, p.dj)().show && !e4(eA.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({ dismissUntil: l()().add(3, "hours").toDate() }),
    },
    [eA.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let i = eO.Ay.getMember(n, t.id);
            return null != i && !i.isPending && (0, M.TR)(i);
        },
    },
    [eA.kqX.QUARANTINED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t.hasFlag(eA.nhx.QUARANTINED);
        },
    },
    [eA.kqX.PARENTAL_CONSENT_WARNING]: {
        predicate: () => {
            let e = k.A.getWarning();
            return e?.surfaces?.includes(x.x.BANNER) === !0 && null != e.daysRemaining && e.daysRemaining >= 0;
        },
        metadata: () => ({ daysRemaining: k.A.getWarning()?.daysRemaining ?? null }),
    },
    [eA.kqX.VIEWING_ROLES]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return h.A.isViewingRoles(t);
        },
    },
    [eA.kqX.INVITED_TO_SPEAK]: {
        predicate: (e) => {
            let { voiceState: t } = e;
            return (0, Z.eY)(t) === Z.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        },
    },
    [eA.kqX.LURKING_GUILD]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && U.A.isLurking(t);
        },
    },
    [eA.kqX.VOICE_DISABLED]: { predicate: () => null != eg.A.getRemoteDisconnectVoiceChannelId() },
    [eA.kqX.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != eg.A.getLastSessionVoiceChannelId() },
    [eA.kqX.NO_INPUT_DETECTED]: { predicate: () => S.A.hasActiveErrorOfType(C.iy.NO_AUDIO_INPUT_DETECTED) },
    [eA.kqX.NO_INPUT_DEVICES_DETECTED]: { predicate: () => S.A.hasActiveErrorOfType(C.iy.NO_INPUT_DEVICES) },
    [eA.kqX.VIDEO_BACKGROUND_UNAVAILABLE]: { predicate: () => eg.A.isConnected() && J.A.videoBackgroundUnavailable },
    [eA.kqX.HARDWARE_MUTE]: {
        predicate: () => eg.A.isConnected() && eP.Ay.isHardwareMute() && eP.Ay.isHardwareMuteNoticeEnabled(),
        metadata: () => {
            let e = eP.Ay.getInputDeviceId(),
                t = ei.A.getVendor(e),
                n = ei.A.getModel(e);
            if (null != t && null != n) return { vendor: t, model: n };
        },
    },
    [eA.kqX.PTT_NO_KEYBIND_WARNING]: {
        predicate: () =>
            !!eg.A.isConnected() &&
            eP.Ay.getMode() === eA.TBI.PUSH_TO_TALK &&
            !(eP.Ay.getSettings().modeOptions.shortcut.length > 0),
    },
    [eA.kqX.DISPATCH_ERROR]: {
        predicate: () => null != ew.A.getLastError(),
        metadata: () => ({ error: ew.A.getLastError() }),
    },
    [eA.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != eF.A.getLastProgress(),
        metadata: () => eF.A.getLastProgress(),
    },
    [eA.kqX.SPOTIFY_AUTO_PAUSED]: { predicate: () => Q.A.wasAutoPaused() },
    [eA.kqX.UNCLAIMED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return null != t && !t.isClaimed();
        },
    },
    [eA.kqX.PENDING_MEMBER]: {
        predicate: (e) => {
            let { selectedGuildId: t, currentUser: n } = e;
            return (
                (null != t &&
                    null != n &&
                    !em.A.getGuild(t)?.features.has(eA.GuildFeatures.GUILD_ONBOARDING) &&
                    eO.Ay.getMember(t, n.id)?.isPending) ??
                !1
            );
        },
    },
    [eA.kqX.OUTBOUND_PROMOTION]: { predicate: () => (0, V.So)() },
    [eA.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => eb.isPlatformEmbedded && (!a.A.supported() || eV.A.isCorruptInstallation()),
    },
    [eA.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t &&
                eG.A.hasVideo(t) &&
                !eP.Ay.supports(eW.O5.VIDEO) &&
                L.k.getConfig({ location: "NoticeStore.VIDEO_UNSUPPORTED_BROWSER" }).videoEnabled &&
                !e4(eA.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
        },
    },
    [eA.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return q.Ay.canRedeemPremiumPerks(t) && eS.getDetectedOffPlatformPremiumPerks().length > 0;
        },
        metadata: () => eS.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eA.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () =>
            !e4(eA.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && eS.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => eS.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eA.kqX.STREAMER_MODE]: { predicate: () => ey.A.enabled },
    [eA.kqX.DOWNLOAD_NAG]: { predicate: () => !eb.isPlatformEmbedded && !e4(eA.kqX.DOWNLOAD_NAG) },
    [eA.kqX.QUEST_APP_UPSELL]: { predicate: () => (0, eb.isOculusWeb)() && !e4(eA.kqX.QUEST_APP_UPSELL) },
    [eA.kqX.SCHEDULED_MAINTENANCE]: {
        predicate: () => null != eL.A.getScheduledMaintenance(),
        metadata: () => {
            let e = eL.A.getScheduledMaintenance();
            if (null != e) return { id: e.id, start: new Date(e.scheduled_for), end: new Date(e.scheduled_until) };
        },
    },
    [eA.kqX.SURVEY]: { predicate: () => null != ek.Ay.getCurrentSurvey(), metadata: () => ek.Ay.getCurrentSurvey() },
    [eA.kqX.UNVERIFIED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.email != null && !t.verified;
        },
    },
    [eA.kqX.BOUNCED_EMAIL_DETECTED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.hasBouncedEmail;
        },
    },
    [eA.kqX.CONNECT_SPOTIFY]: {
        predicate: () =>
            !Q.A.hasConnectedAccount() &&
            D.Ay.isObservedAppRunning(_.A.get(eA.fg2.SPOTIFY).name) &&
            !e4(eA.kqX.CONNECT_SPOTIFY),
    },
    [eA.kqX.WIN32_DEPRECATED_MESSAGE]: {
        predicate: () => u.A?.os.arch === "ia32" && u.A?.process.platform === "win32",
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eA.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (u.A?.process.platform === "win32")
                try {
                    if (parseInt(u.A?.os.release.split(".")[0]) >= 10) return !1;
                    return !e6();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eA.kqX.WIN_COMPAT_MODE_MESSAGE]: {
        predicate: () => {
            if (u.A?.process.platform === "win32")
                try {
                    if (parseInt(u.A?.os.release.split(".")[0]) >= 10) return !1;
                    return e6();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eA.kqX.MACOS_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (u.A?.process.platform === "darwin")
                try {
                    return 22 > parseInt(u.A?.os.release.split(".")[0]);
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eA.kqX.CONNECT_PLAYSTATION]: {
        predicate: () =>
            er.A.isSuggestedAccountType(eA.fg2.PLAYSTATION) &&
            null == er.A.getAccount(null, eA.fg2.PLAYSTATION) &&
            !e4(eA.kqX.CONNECT_PLAYSTATION),
    },
    [eA.kqX.PASSKEY_BACKUP]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.mfaEnabled && ee.A.hasFetchedCredentials() && !ee.A.hasCredentials && !e4(eA.kqX.PASSKEY_BACKUP);
        },
    },
    [eA.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () =>
            eq.A.getAlmostExpiringTrialOffersForReminder([eH.pe.TIER_2]).length > 0 &&
            !e4(eA.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
    },
    [eA.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () =>
            eq.A.getAlmostExpiringTrialOffersForReminder([eH.pe.TIER_0]).length > 0 &&
            !e4(eA.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
    },
    [eA.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () =>
            eq.A.getAlmostExpiringDiscountOffersForReminder([eH.pe.TIER_2]).length > 0 &&
            !e4(eA.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
    },
    [eA.kqX.PREMIUM_UNCANCEL]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                r =
                    t?.canceledAt != null &&
                    t?.status === eA.Dmq.CANCELED &&
                    1 >= l()().diff(l()(t.canceledAt), "days"),
                s = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                a =
                    null != t &&
                    t.status === eA.Dmq.CANCELED &&
                    !s &&
                    i <= 7 &&
                    i >= 0 &&
                    (0, q.YE)(n, eH.PremiumTypes.TIER_2) &&
                    !r &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !e4(eA.kqX.PREMIUM_UNCANCEL) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                i = null != t ? (0, q.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? q.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eA.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                r = null != t ? l()(t.currentPeriodEnd).diff(l()(t.currentPeriodStart).startOf("day"), "days") : 0,
                s = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                a = eu.A.applicationIdsFetched.has(eH.tv),
                E = eu.A.getForApplication(eH.tv),
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
                    t.status !== eA.Dmq.PAST_DUE &&
                    !s &&
                    a &&
                    !u &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !e4(eA.kqX.PREMIUM_MISSING_PAYMENT) && _;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                i = null != t ? (0, q.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? q.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eA.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && null != t.paymentSourceId ? ev.A.getPaymentSource(t.paymentSourceId) : null,
                r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                s =
                    null != t &&
                    t.status === eA.Dmq.PAST_DUE &&
                    !r &&
                    null != i &&
                    i.invalid &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !e4(eA.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eA.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                r =
                    null != t &&
                    t.status === eA.Dmq.PAST_DUE &&
                    !i &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !e4(eA.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && r;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eA.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != eX.A.testModeApplicationId,
        metadata: () => {
            if (null == eX.A.testModeApplicationId) return {};
            let e = eX.A.testModeApplicationId,
                t = T.A.getApplication(e);
            return { applicationName: null != t ? t.name : e, applicationId: e };
        },
    },
    [eA.kqX.PREMIUM_REACTIVATE]: { predicate: () => !e4(eA.kqX.PREMIUM_REACTIVATE) && B.shouldShowReactivateNotice() },
    [eA.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                r = null != t && null != t.paymentSourceId ? ev.A.getPaymentSource(t.paymentSourceId) : null,
                s = null != r && eY.AD.has(r.type),
                a =
                    null != t &&
                    t.status === eA.Dmq.PAST_DUE &&
                    !i &&
                    s &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !e4(eA.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return null == t
                ? { daysPastDue: 0, dismissUntil: l()().toDate() }
                : {
                      daysPastDue: t.status === eA.Dmq.PAST_DUE ? l()().diff(t.currentPeriodStart, "days") : 0,
                      dismissUntil: (0, q.ji)(t).expiresDate.toDate(),
                  };
        },
    },
    [eA.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e,
                n = null != t ? em.A.getGuild(t) : null;
            return (
                (null != t &&
                    null != g.A.getMentionRaidDetected(t) &&
                    n?.features.has(eA.GuildFeatures.COMMUNITY) &&
                    !e4(eA.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
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
    [eA.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = et.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, P._z)(e),
                n = Y.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= eK.tZ;
        },
        metadata: () => {
            let e = et.A.getCurrentUserActiveStream();
            return { streamKey: null != e ? (0, P._z)(e) : null };
        },
    },
    [eA.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = ev.A.paymentSources ?? {};
            return G.A.getIsTargeted() && !(0, q.TW)(t) && 0 !== Object.keys(n).length;
        },
    },
    [eA.kqX.PREMIUM_MARKETING_NAGBAR]: {
        predicate: () => {
            let e = H.A.getMarketingComponentByType(r.C.NAGBAR);
            if (null == e) return !1;
            if (null == e.promotionId) return !0;
            let t = H.A.getPromotionByTypeAndId(K.pt.MARKETING_MOMENT, e.promotionId);
            return (
                !(null != t && t.endDate < new Date()) &&
                !(0, I.u$)(E.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, e.promotionId).isDismissed
            );
        },
    },
    [eA.kqX.COD_3PP_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return !e4(eA.kqX.COD_3PP_NAGBAR) && (0, w.OI)(t, "NoticeStore.COD_3PP_NAGBAR");
        },
    },
    [eA.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !e4(eA.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && W.Cm(),
        metadata: () => ({ dismissUntil: l()().add(180, "days").toDate(), sampleRate: 0.1 }),
    },
    [eA.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: { predicate: () => W.h6(), metadata: () => ({ sampleRate: 0.1 }) },
    [eA.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
                e4(eA.kqX.SYSTEM_SERVICE_WARNING) ||
                !(0, z.yA)(D.Ay) ||
                null == t ||
                eP.Ay.getMode() !== eA.TBI.PUSH_TO_TALK
            )
                return !1;
            let n = D.Ay.getVisibleGame();
            return null != n && !!n.elevated;
        },
    },
    [eA.kqX.E2EE_UPDATE_REQUIRED]: {
        predicate: () => {
            if (e4(eA.kqX.E2EE_UPDATE_REQUIRED) || !eg.A.isConnected()) return !1;
            let e = eP.Ay.getMediaEngine();
            return 1 !== (e.getSupportedSecureFramesProtocolVersion?.() ?? 0);
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eA.kqX.WINDOWS_MEDIA_PACK_REQUIRED]: {
        predicate: () =>
            !(
                !eb.isPlatformEmbedded ||
                u.A?.process.platform !== "win32" ||
                e4(eA.kqX.WINDOWS_MEDIA_PACK_REQUIRED) ||
                eB.Ay.getEnableHardwareAcceleration()
            ) && !1 === eP.Ay.isH264MfDecodeAvailable(),
    },
    [eA.kqX.RIOT_MIGRATION]: {
        predicate: () => {
            let e = null != er.A.getAccount(null, eA.fg2.RIOT_GAMES),
                t = null != er.A.getAccount(null, eA.fg2.LEAGUE_OF_LEGENDS);
            if (e4(eA.kqX.RIOT_MIGRATION) || (0, I.k8)(E.M.RIOT_CONNECTION_DEPRECATION_DISABLE) || (!e && !t))
                return !1;
            let n = _.A.get(eA.fg2.LEAGUE_OF_LEGENDS),
                i = _.A.get(eA.fg2.RIOT_GAMES);
            return null != n.migrationData && null != i.migrationData;
        },
    },
    [eA.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            return (0, A.Jz)({
                currentUser: t,
                selectedGuildId: n,
                platformTypes: [eA.fg2.RIOT_GAMES, eA.fg2.LEAGUE_OF_LEGENDS],
                dismissibleContent: E.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
                noticeType: eA.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
            });
        },
    },
    [eA.kqX.BATTLENET_MIGRATION]: {
        predicate: () => {
            let e = _.A.get(eA.fg2.BATTLENET);
            return !(
                !e.migrationData?.getMigrationExperimentEnabled("NoticeStore") ||
                null == er.A.getAccount(null, eA.fg2.BATTLENET) ||
                e4(eA.kqX.BATTLENET_MIGRATION) ||
                (0, I.k8)(E.M.BATTLENET_CONNECTION_DEPRECATION_DISABLE)
            );
        },
    },
    [eA.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            return (0, A.Jz)({
                currentUser: t,
                selectedGuildId: n,
                platformTypes: [eA.fg2.BATTLENET],
                dismissibleContent: E.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES_DISABLE,
                noticeType: eA.kqX.BATTLENET_LINKED_ROLE_DEPRECATION,
            });
        },
    },
};
function tn() {
    if (!m.A.isConnected()) return !1;
    e3 = null;
    let e = j.default.getCurrentUser();
    if (null == e) return !1;
    let t = ej.A.getPremiumSubscription(),
        n = eU.A.getGuildId(),
        i = eh.Ay.getVoiceChannelId(),
        l = null != i ? eG.A.getVoiceStateForChannel(i) : null;
    for (let r of te)
        if (
            null != tt[r] &&
            tt[r].predicate({
                selectedGuildId: n,
                voiceChannelId: i,
                voiceState: l,
                currentUser: e,
                premiumSubscription: t,
            })
        ) {
            let i = tt[r].metadata?.({ currentUser: e, premiumSubscription: t, selectedGuildId: n });
            e3 = { ...e5, type: r, metadata: i };
            break;
        }
    if (null != e3) {
        e3.metadata?.sampleRate != null &&
            null == e2[e3.type] &&
            (e2[e3.type] = Math.random() <= e3.metadata.sampleRate);
        let e = !1 === e2[e3.type];
        (e4(e3.type) || e) && (e3 = null);
    }
}
function ti() {
    return (ey.A.enabled || delete e1[eA.kqX.STREAMER_MODE], tn());
}
class tl extends s.Ay.Store {
    static displayName = "NoticeStore";
    initialize() {
        (this.syncWith(
            [S.A, ek.Ay, eM.A, eS, eU.A, H.A, eq.A, y.default, er.A, $.A, f.A, Y.A, et.A, D.Ay, ee.A, S.A, d.A, k.A],
            tn,
        ),
            this.waitFor(
                S.A,
                T.A,
                et.A,
                en.default,
                y.default,
                ei.A,
                el.A,
                G.A,
                er.A,
                eS,
                ew.A,
                eF.A,
                eV.A,
                eu.A,
                O.A,
                m.A,
                g.A,
                f.A,
                eO.Ay,
                d.A,
                eD.A,
                em.A,
                h.A,
                U.A,
                eP.Ay,
                ep.A,
                k.A,
                ev.A,
                ef.A,
                eM.A,
                H.A,
                Y.A,
                eg.A,
                D.Ay,
                eh.Ay,
                eU.A,
                Q.A,
                eL.A,
                ey.A,
                B,
                ej.A,
                ek.Ay,
                eX.A,
                eq.A,
                ex.A,
                $.A,
                j.default,
                J.A,
                eG.A,
                ee.A,
            ));
    }
    hasNotice() {
        return null != e3 && null != e3.type;
    }
    getNotice() {
        return null == ex.A.getAction() ? e3 : null;
    }
    isNoticeDismissed(e) {
        return e4(e);
    }
}
let tr = new tl(c.h, {
    CURRENT_USER_UPDATE: tn,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: tn,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: tn,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: tn,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: tn,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: tn,
    GUILD_CREATE: tn,
    GUILD_DELETE: tn,
    AUDIO_INPUT_DETECTED: tn,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: tn,
    CERTIFIED_DEVICES_SET: tn,
    AUDIO_SET_INPUT_DEVICE: tn,
    AUDIO_SET_OUTPUT_DEVICE: tn,
    MEDIA_ENGINE_DEVICES: tn,
    RTC_CONNECTION_STATE: tn,
    RPC_APP_AUTHENTICATED: tn,
    RPC_APP_DISCONNECTED: tn,
    USER_CONNECTIONS_UPDATE: tn,
    WINDOW_FOCUS: tn,
    INSTANT_INVITE_CREATE: tn,
    INSTANT_INVITE_REVOKE_SUCCESS: tn,
    SPOTIFY_PLAYER_PAUSE: tn,
    RUNNING_GAMES_CHANGE: tn,
    EXPERIMENTS_FETCH_SUCCESS: tn,
    APEX_EXPERIMENTS_FETCH_SUCCESS: tn,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: tn,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: tn,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: tn,
    DEVELOPER_TEST_MODE_RESET: tn,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: tn,
    DISPATCH_APPLICATION_INSTALL: tn,
    IMPERSONATE_STOP: tn,
    IMPERSONATE_UPDATE: tn,
    GUILD_MEMBER_ADD: function (e) {
        return e.user.id === en.default.getId() && tn();
    },
    GUILD_MEMBER_UPDATE: tn,
    SURVEY_FETCHED: tn,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: tn,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: tn,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: tn,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: tn,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return (
            (e3?.type === eA.kqX.INVITED_TO_SPEAK ||
                t.some((e) => {
                    let { userId: t } = e;
                    return t !== en.default.getId();
                })) &&
            tn()
        );
    },
    STREAMER_MODE_UPDATE: ti,
    RUNNING_STREAMER_TOOLS_CHANGE: ti,
    DISPATCH_APPLICATION_ERROR: function () {
        return (delete e1[eA.kqX.DISPATCH_ERROR], tn());
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return (delete e1[eA.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], tn());
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return tn();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return tn();
    },
    NOTICE_SHOW: function (e) {
        e3 = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != e3 && (null == e.id || e.id === e3.id) && (e8(e3.type, e.isTemporary, e.untilAtLeast), tn());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return (e8(t), tn());
    },
    LOGOUT: function () {
        ((e1 = {}), (e2 = {}), (e3 = null));
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: tn,
    AUTO_MODERATION_MENTION_RAID_DETECTION: tn,
    REPORT_AV_ERROR: tn,
    ACTIVE_AV_ERRORS_CHANGED: tn,
    MEDIA_ENGINE_MF_AVAILABILITY_CHECKED: tn,
    AUDIO_SET_MODE: tn,
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: tn,
});
