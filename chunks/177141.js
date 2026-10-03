n.d(t, { f7: () => eJ, Re: () => eZ, Ay: () => ts, pe: () => e$, rV: () => eQ });
var i = n(536637),
    l = n.n(i),
    r = n(877624),
    s = n(17928),
    a = n(206959),
    E = n(554146),
    o = n(506774),
    c = n(73153),
    _ = n(77729),
    u = n(573648),
    A = n(521790),
    T = n(587895),
    I = n(145643),
    d = n(826673),
    N = n(501419),
    R = n(532205),
    O = n(487329),
    S = n(161518),
    C = n(736056),
    D = n(952818),
    P = n(595528),
    M = n(652896),
    m = n(585510),
    p = n(610136),
    f = n(229527),
    U = n(93474),
    g = n(164956),
    h = n(857071),
    k = n(625075),
    y = n(733110),
    L = n(577517),
    x = n(748209),
    G = n(869968),
    j = n(243217),
    q = n(287809),
    v = n(158045);
let X = !1;
class B extends s.Ay.Store {
    initialize() {
        this.waitFor(q.default);
    }
    static displayName = "SubscriptionRemindersStore";
    shouldShowReactivateNotice() {
        let e = q.default.getCurrentUser();
        return !(0, v.TW)(e) && X;
    }
}
let b = new B(c.h, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (null != t) {
            let e = j.A.createFromServer(t);
            if (null == (0, v.EL)(e) || e.metadata?.ended_at == null) return;
            let n = l()(e.metadata.ended_at);
            l()().isBetween(n.clone().add(4, "days"), n.clone().add(11, "days")) && (X = !0);
        }
    },
});
var F = n(220038),
    V = n(810498),
    H = n(264779),
    w = n(412260),
    Y = n(852218),
    K = n(256150),
    W = n(859703),
    z = n(541315),
    $ = n(655116),
    Q = n(105530),
    Z = n(935671),
    J = n(617617),
    ee = n(912630),
    et = n(976910),
    en = n(616356),
    ei = n(280450),
    el = n(347481),
    er = n(734057),
    es = n(30370);
n(321073);
var ea = n(435558),
    eE = n.n(ea),
    eo = n(339048),
    ec = n(830382),
    e_ = n(627363),
    eu = n(469778),
    eA = n(67480),
    eT = n(652215);
let eI = "DetectedOffPlatformPremiumPerksStore",
    ed = {},
    eN = {},
    eR = [];
function eO() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of eE().values(eN)) {
        if (eR.includes(t)) continue;
        let i = T.A.getApplication(n);
        if (null == i) {
            T.A.isFetchingApplication(n) || T.A.didFetchingApplicationFail(n) || e_.Ay.fetchApplication(n);
            continue;
        }
        let l = eA.A.get(t);
        if (null == l) {
            eA.A.isFetching(t) || eA.A.didFetchingSkuFail(t) || ec.EX(i.id, t);
            continue;
        }
        eu.A.applicationIdsFetching.has(i.id) ||
        eu.A.isEntitledToSku(q.default.getCurrentUser(), t, i.id, i.id) ||
        !l.available
            ? null != ed[t] && (delete ed[t], (e = !0))
            : ((ed[t] = { skuId: t, applicationId: n }), (e = !0));
    }
    return e;
}
class eS extends s.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        (this.waitFor(T.A, eu.A, D.Ay, eA.A, q.default), (eR = o.w.get(eI) ?? eR));
    }
    getDetectedOffPlatformPremiumPerks() {
        return eE().values(ed);
    }
}
let eC = new eS(c.h, {
    LOGOUT: function () {
        ((ed = {}), (eN = {}));
    },
    SKU_FETCH_SUCCESS: eO,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eO,
    ENTITLEMENT_CREATE: eO,
    APPLICATION_FETCH_SUCCESS: eO,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete ed[t], eR.includes(t))) return !1;
        (eR.push(t), o.w.set(eI, eR));
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of D.Ay.getRunningGames())
            if (null != t && n !== eT.d3x.DISCORD)
                for (let { skuId: n, applicationId: i } of eT.m_i)
                    i !== t ||
                        eR.includes(n) ||
                        (null == eN[n] &&
                            (eu.A.applicationIdsFetched.has(i) ||
                                eu.A.applicationIdsFetching.has(i) ||
                                null != eu.A.getForSku(n) ||
                                eo.LM(i),
                            (eN[n] = { skuId: n, applicationId: i }),
                            (e = !0)));
        return (e && eO(), e);
    },
});
var eD = n(696451),
    eP = n(317525),
    eM = n(71393),
    em = n(25578),
    ep = n(803224),
    ef = n(576705),
    eU = n(362790),
    eg = n(763827),
    eh = n(309010),
    ek = n(967198),
    ey = n(437959),
    eL = n(351906),
    ex = n(274184),
    eG = n(870570),
    ej = n(977997),
    eq = n(295405),
    ev = n(166403),
    eX = n(354670),
    eB = n(147964),
    eb = n(723702),
    eF = n(19575),
    eV = n(755439),
    eH = n(422033),
    ew = n(966846);
n(436317);
var eY = n(202541),
    eK = n(190107),
    eW = n(818348),
    ez = n(731854);
let e$ = {
        [eT.kqX.DOWNLOAD_NAG]: E.M.NAGBAR_NOTICE_DOWNLOAD,
        [eT.kqX.CONNECT_SPOTIFY]: E.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eT.kqX.PASSKEY_BACKUP]: E.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [eT.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: E.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eT.kqX.PREMIUM_REACTIVATE]: E.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eT.kqX.BOUNCED_EMAIL_DETECTED]: E.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eT.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: E.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eT.kqX.CHECKOUT_RECOVERY_NAGBAR]: E.M.CHECKOUT_RECOVERY_NAGBAR,
        [eT.kqX.QUEST_APP_UPSELL]: E.M.NAGBAR_QUEST_APP_UPSELL,
        [eT.kqX.RIOT_MIGRATION]: E.M.RIOT_CONNECTION_DEPRECATION_DISABLE,
        [eT.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: E.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
        [eT.kqX.BATTLENET_MIGRATION]: E.M.BATTLENET_CONNECTION_DEPRECATION_DISABLE,
        [eT.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: E.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES_DISABLE,
        [eT.kqX.COD_3PP_NAGBAR]: E.M.COD_3PP_NAGBAR_NOTICE,
        [eT.kqX.YOUTUBE_3P_NAGBAR]: E.M.YOUTUBE_3P_NAGBAR_NOTICE,
    },
    eQ = { [eT.kqX.GIFTING_PROMOTION_REMINDER]: E.M.GIFTING_PROMOTION_REMINDER },
    eZ = {
        [eT.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: E.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eT.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: E.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eT.kqX.RIOT_MIGRATION]: E.M.RIOT_CONNECTION_DEPRECATION,
        [eT.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: E.M.RIOT_CONNECTION_DEPRECATION_ADMIN,
        [eT.kqX.BATTLENET_MIGRATION]: E.M.BATTLENET_CONNECTION_DEPRECATION,
        [eT.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: E.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES,
    },
    eJ = { [eT.kqX.OUTBOUND_PROMOTION]: E.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    e0 = {
        [eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
        [eT.kqX.PREMIUM_UNCANCEL]: "hideUncancelReminder",
        [eT.kqX.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
        [eT.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
        [eT.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
        [eT.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
        [eT.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
        [eT.kqX.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
        [eT.kqX.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
        [eT.kqX.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
        [eT.kqX.WIN_COMPAT_MODE_MESSAGE]: "hideWinCompatModeNotice",
        [eT.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [eT.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [eT.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [eT.kqX.MACOS_DEPRECATED_MESSAGE]: "hideMacOSDeprecationMessageNotice",
        [eT.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
        [eT.kqX.E2EE_UPDATE_REQUIRED]: "hideE2EEUpdateRequiredNotice",
    },
    e1 = new Set([
        eT.kqX.NO_INPUT_DETECTED,
        eT.kqX.NO_INPUT_DEVICES_DETECTED,
        eT.kqX.STREAMER_MODE,
        eT.kqX.VIDEO_UNSUPPORTED_BROWSER,
        eT.kqX.SPOTIFY_AUTO_PAUSED,
        eT.kqX.DISPATCH_ERROR,
        eT.kqX.DISPATCH_ERROR,
        eT.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eT.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    ]),
    e2 = {},
    e5 = {},
    e3 = Object.freeze({ id: null, message: null, buttonText: null, callback: void 0, metadata: null }),
    e7 = null;
function e8(e) {
    return e0[e] + "-untilAtLeast";
}
function e6(e, t, n) {
    if (null == e) return;
    let i = e0[e];
    (null == i || t || o.w.set(i, !0), e1.has(e) && (e2[e] = !0), null != n && null != i)
        ? o.w.set(e8(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
        : o.w.remove(e8(e));
}
let e9 = null;
function e4() {
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
function te(e) {
    if (null == e) return !1;
    let t = eZ[e];
    if (null != t) {
        let n = (0, R.D)(e);
        return (0, N.FZ)(t, n).isDismissed;
    }
    let n = e$[e];
    if (null != n) return (0, d.k8)(n);
    let i = e0[e];
    if (null != i) {
        let t,
            n = null != (t = o.w.get(e8(e))) ? l()(t) : null;
        if (null != n) return n?.isAfter(l()());
    }
    let r = e2[e];
    return !!r || (null != i && "" !== i ? o.w.get(i) : !!e1.has(e) && r);
}
let tt = [
    eT.kqX.QUARANTINED,
    eT.kqX.PARENTAL_CONSENT_WARNING,
    eT.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eT.kqX.VIEWING_ROLES,
    eT.kqX.INVITED_TO_SPEAK,
    eT.kqX.LURKING_GUILD,
    eT.kqX.VOICE_DISABLED,
    eT.kqX.NO_INPUT_DEVICES_DETECTED,
    eT.kqX.NO_INPUT_DETECTED,
    eT.kqX.VIDEO_BACKGROUND_UNAVAILABLE,
    eT.kqX.PTT_NO_KEYBIND_WARNING,
    eT.kqX.HARDWARE_MUTE,
    eT.kqX.DISPATCH_ERROR,
    eT.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eT.kqX.SPOTIFY_AUTO_PAUSED,
    eT.kqX.WIN32_DEPRECATED_MESSAGE,
    eT.kqX.WIN7_8_DEPRECATED_MESSAGE,
    eT.kqX.WIN_COMPAT_MODE_MESSAGE,
    eT.kqX.MACOS_DEPRECATED_MESSAGE,
    eT.kqX.E2EE_UPDATE_REQUIRED,
    eT.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    eT.kqX.VOICE_CONNECTED_LAST_SESSION,
    eT.kqX.SYSTEM_SERVICE_WARNING,
    eT.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
    eT.kqX.GUILD_RAID_NOTIFICATION,
    eT.kqX.COD_3PP_NAGBAR,
    eT.kqX.YOUTUBE_3P_NAGBAR,
    eT.kqX.BATTLENET_MIGRATION,
    eT.kqX.BATTLENET_LINKED_ROLE_DEPRECATION,
    eT.kqX.GIFTING_PROMOTION_REMINDER,
    eT.kqX.RIOT_MIGRATION,
    eT.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
    eT.kqX.QUESTS_PROGRESS_INTERRUPTION,
    eT.kqX.UNCLAIMED_ACCOUNT,
    eT.kqX.PENDING_MEMBER,
    eT.kqX.CHECKOUT_RECOVERY_NAGBAR,
    eT.kqX.PREMIUM_MARKETING_NAGBAR,
    eT.kqX.OUTBOUND_PROMOTION,
    eT.kqX.CORRUPT_INSTALLATION,
    eT.kqX.VIDEO_UNSUPPORTED_BROWSER,
    eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
    eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
    eT.kqX.STREAMER_MODE,
    eT.kqX.SCHEDULED_MAINTENANCE,
    eT.kqX.BOUNCED_EMAIL_DETECTED,
    eT.kqX.UNVERIFIED_ACCOUNT,
    eT.kqX.PREMIUM_TIER_2_TRIAL_ENDING,
    eT.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
    eT.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
    eT.kqX.PREMIUM_UNCANCEL,
    eT.kqX.PREMIUM_MISSING_PAYMENT,
    eT.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
    eT.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
    eT.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
    eT.kqX.PREMIUM_REACTIVATE,
    eT.kqX.PASSKEY_BACKUP,
    eT.kqX.APPLICATION_TEST_MODE,
    eT.kqX.QUEST_APP_UPSELL,
    eT.kqX.DOWNLOAD_NAG,
    eT.kqX.CONNECT_SPOTIFY,
    eT.kqX.SURVEY,
    eT.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
    eT.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
];
(eT.kqX.QUARANTINED,
    eT.kqX.PARENTAL_CONSENT_WARNING,
    eT.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eT.kqX.VIEWING_ROLES,
    eT.kqX.INVITED_TO_SPEAK,
    eT.kqX.LURKING_GUILD,
    eT.kqX.VOICE_DISABLED,
    eT.kqX.NO_INPUT_DETECTED,
    eT.kqX.VIDEO_BACKGROUND_UNAVAILABLE,
    eT.kqX.HARDWARE_MUTE,
    eT.kqX.DISPATCH_ERROR,
    eT.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eT.kqX.SPOTIFY_AUTO_PAUSED,
    eT.kqX.VOICE_CONNECTED_LAST_SESSION,
    eT.kqX.PENDING_MEMBER,
    eT.kqX.STREAMER_MODE,
    eT.kqX.SCHEDULED_MAINTENANCE);
let tn = {
    [eT.kqX.GIFTING_PROMOTION_REMINDER]: { predicate: () => (0, V.MD)() },
    [eT.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, m.dj)().show && !te(eT.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({ dismissUntil: l()().add(3, "hours").toDate() }),
    },
    [eT.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let i = eD.Ay.getMember(n, t.id);
            return null != i && !i.isPending && (0, f.TR)(i);
        },
    },
    [eT.kqX.QUARANTINED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t.hasFlag(eT.nhx.QUARANTINED);
        },
    },
    [eT.kqX.PARENTAL_CONSENT_WARNING]: {
        predicate: () => {
            let e = L.A.getWarning();
            return e?.surfaces?.includes(x.x.BANNER) === !0 && null != e.daysRemaining && e.daysRemaining >= 0;
        },
        metadata: () => ({ daysRemaining: L.A.getWarning()?.daysRemaining ?? null }),
    },
    [eT.kqX.VIEWING_ROLES]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return g.A.isViewingRoles(t);
        },
    },
    [eT.kqX.INVITED_TO_SPEAK]: {
        predicate: (e) => {
            let { voiceState: t } = e;
            return (0, Q.eY)(t) === Q.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        },
    },
    [eT.kqX.LURKING_GUILD]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && h.A.isLurking(t);
        },
    },
    [eT.kqX.VOICE_DISABLED]: { predicate: () => null != eg.A.getRemoteDisconnectVoiceChannelId() },
    [eT.kqX.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != eg.A.getLastSessionVoiceChannelId() },
    [eT.kqX.NO_INPUT_DETECTED]: { predicate: () => S.A.hasActiveErrorOfType(O.iy.NO_AUDIO_INPUT_DETECTED) },
    [eT.kqX.NO_INPUT_DEVICES_DETECTED]: { predicate: () => S.A.hasActiveErrorOfType(O.iy.NO_INPUT_DEVICES) },
    [eT.kqX.VIDEO_BACKGROUND_UNAVAILABLE]: { predicate: () => eg.A.isConnected() && ee.A.videoBackgroundUnavailable },
    [eT.kqX.HARDWARE_MUTE]: {
        predicate: () => eg.A.isConnected() && em.Ay.isHardwareMute() && em.Ay.isHardwareMuteNoticeEnabled(),
        metadata: () => {
            let e = em.Ay.getInputDeviceId(),
                t = el.A.getVendor(e),
                n = el.A.getModel(e);
            if (null != t && null != n) return { vendor: t, model: n };
        },
    },
    [eT.kqX.PTT_NO_KEYBIND_WARNING]: {
        predicate: () =>
            !!eg.A.isConnected() &&
            em.Ay.getMode() === eT.TBI.PUSH_TO_TALK &&
            !(em.Ay.getSettings().modeOptions.shortcut.length > 0),
    },
    [eT.kqX.DISPATCH_ERROR]: {
        predicate: () => null != eV.A.getLastError(),
        metadata: () => ({ error: eV.A.getLastError() }),
    },
    [eT.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != eH.A.getLastProgress(),
        metadata: () => eH.A.getLastProgress(),
    },
    [eT.kqX.SPOTIFY_AUTO_PAUSED]: { predicate: () => $.A.wasAutoPaused() },
    [eT.kqX.UNCLAIMED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return null != t && !t.isClaimed();
        },
    },
    [eT.kqX.PENDING_MEMBER]: {
        predicate: (e) => {
            let { selectedGuildId: t, currentUser: n } = e;
            return (
                (null != t &&
                    null != n &&
                    !eM.A.getGuild(t)?.features.has(eT.GuildFeatures.GUILD_ONBOARDING) &&
                    eD.Ay.getMember(t, n.id)?.isPending) ??
                !1
            );
        },
    },
    [eT.kqX.OUTBOUND_PROMOTION]: { predicate: () => (0, H.So)() },
    [eT.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => eb.isPlatformEmbedded && (!a.A.supported() || ew.A.isCorruptInstallation()),
    },
    [eT.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t &&
                ej.A.hasVideo(t) &&
                !em.Ay.supports(ez.O5.VIDEO) &&
                k.k.getConfig({ location: "NoticeStore.VIDEO_UNSUPPORTED_BROWSER" }).videoEnabled &&
                !te(eT.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
        },
    },
    [eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return v.Ay.canRedeemPremiumPerks(t) && eC.getDetectedOffPlatformPremiumPerks().length > 0;
        },
        metadata: () => eC.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () =>
            !te(eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && eC.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => eC.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eT.kqX.STREAMER_MODE]: { predicate: () => eL.A.enabled },
    [eT.kqX.DOWNLOAD_NAG]: { predicate: () => !eb.isPlatformEmbedded && !te(eT.kqX.DOWNLOAD_NAG) },
    [eT.kqX.QUEST_APP_UPSELL]: { predicate: () => (0, eb.isOculusWeb)() && !te(eT.kqX.QUEST_APP_UPSELL) },
    [eT.kqX.SCHEDULED_MAINTENANCE]: {
        predicate: () => null != ey.A.getScheduledMaintenance(),
        metadata: () => {
            let e = ey.A.getScheduledMaintenance();
            if (null != e) return { id: e.id, start: new Date(e.scheduled_for), end: new Date(e.scheduled_until) };
        },
    },
    [eT.kqX.SURVEY]: { predicate: () => null != ex.Ay.getCurrentSurvey(), metadata: () => ex.Ay.getCurrentSurvey() },
    [eT.kqX.UNVERIFIED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.email != null && !t.verified;
        },
    },
    [eT.kqX.BOUNCED_EMAIL_DETECTED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.hasBouncedEmail;
        },
    },
    [eT.kqX.CONNECT_SPOTIFY]: {
        predicate: () =>
            !$.A.hasConnectedAccount() &&
            D.Ay.isObservedAppRunning(u.A.get(eT.fg2.SPOTIFY).name) &&
            !te(eT.kqX.CONNECT_SPOTIFY),
    },
    [eT.kqX.WIN32_DEPRECATED_MESSAGE]: {
        predicate: () => _.A?.os.arch === "ia32" && _.A?.process.platform === "win32",
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eT.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (_.A?.process.platform === "win32")
                try {
                    if (parseInt(_.A?.os.release.split(".")[0]) >= 10) return !1;
                    return !e4();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eT.kqX.WIN_COMPAT_MODE_MESSAGE]: {
        predicate: () => {
            if (_.A?.process.platform === "win32")
                try {
                    if (parseInt(_.A?.os.release.split(".")[0]) >= 10) return !1;
                    return e4();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eT.kqX.MACOS_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (_.A?.process.platform === "darwin")
                try {
                    return 22 > parseInt(_.A?.os.release.split(".")[0]);
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eT.kqX.PASSKEY_BACKUP]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.mfaEnabled && et.A.hasFetchedCredentials() && !et.A.hasCredentials && !te(eT.kqX.PASSKEY_BACKUP);
        },
    },
    [eT.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () =>
            eX.A.getAlmostExpiringTrialOffersForReminder([eY.pe.TIER_2]).length > 0 &&
            !te(eT.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
    },
    [eT.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () =>
            eX.A.getAlmostExpiringTrialOffersForReminder([eY.pe.TIER_0]).length > 0 &&
            !te(eT.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
    },
    [eT.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () =>
            eX.A.getAlmostExpiringDiscountOffersForReminder([eY.pe.TIER_2]).length > 0 &&
            !te(eT.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
    },
    [eT.kqX.PREMIUM_UNCANCEL]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                r =
                    t?.canceledAt != null &&
                    t?.status === eT.Dmq.CANCELED &&
                    1 >= l()().diff(l()(t.canceledAt), "days"),
                s = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                a =
                    null != t &&
                    t.status === eT.Dmq.CANCELED &&
                    !s &&
                    i <= 7 &&
                    i >= 0 &&
                    (0, v.YE)(n, eY.PremiumTypes.TIER_2) &&
                    !r &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !te(eT.kqX.PREMIUM_UNCANCEL) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                i = null != t ? (0, v.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? v.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eT.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                r = null != t ? l()(t.currentPeriodEnd).diff(l()(t.currentPeriodStart).startOf("day"), "days") : 0,
                s = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                a = eu.A.applicationIdsFetched.has(eY.tv),
                E = eu.A.getForApplication(eY.tv),
                o = null != t ? (0, v.EL)(t) : null,
                c = null != o ? v.Ay.getSkuIdForPlan(o.planId) : null,
                _ =
                    null != E &&
                    null != o &&
                    Array.from(E).filter((e) => {
                        let { skuId: t, consumed: n } = e;
                        return !n && t === c;
                    }).length > 0,
                u =
                    null != t &&
                    i <= (r > 14 ? 7 : 2) &&
                    i >= 0 &&
                    t.status !== eT.Dmq.PAST_DUE &&
                    !s &&
                    a &&
                    !_ &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !te(eT.kqX.PREMIUM_MISSING_PAYMENT) && u;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                i = null != t ? (0, v.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? v.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eT.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && null != t.paymentSourceId ? eq.A.getPaymentSource(t.paymentSourceId) : null,
                r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                s =
                    null != t &&
                    t.status === eT.Dmq.PAST_DUE &&
                    !r &&
                    null != i &&
                    i.invalid &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !te(eT.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eT.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                r =
                    null != t &&
                    t.status === eT.Dmq.PAST_DUE &&
                    !i &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !te(eT.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && r;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eT.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != eB.A.testModeApplicationId,
        metadata: () => {
            if (null == eB.A.testModeApplicationId) return {};
            let e = eB.A.testModeApplicationId,
                t = T.A.getApplication(e);
            return { applicationName: null != t ? t.name : e, applicationId: e };
        },
    },
    [eT.kqX.PREMIUM_REACTIVATE]: { predicate: () => !te(eT.kqX.PREMIUM_REACTIVATE) && b.shouldShowReactivateNotice() },
    [eT.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                r = null != t && null != t.paymentSourceId ? eq.A.getPaymentSource(t.paymentSourceId) : null,
                s = null != r && eW.AD.has(r.type),
                a =
                    null != t &&
                    t.status === eT.Dmq.PAST_DUE &&
                    !i &&
                    s &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !te(eT.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return null == t
                ? { daysPastDue: 0, dismissUntil: l()().toDate() }
                : {
                      daysPastDue: t.status === eT.Dmq.PAST_DUE ? l()().diff(t.currentPeriodStart, "days") : 0,
                      dismissUntil: (0, v.ji)(t).expiresDate.toDate(),
                  };
        },
    },
    [eT.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e,
                n = null != t ? eM.A.getGuild(t) : null;
            return (
                (null != t &&
                    null != U.A.getMentionRaidDetected(t) &&
                    n?.features.has(eT.GuildFeatures.COMMUNITY) &&
                    !te(eT.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
                !1
            );
        },
        metadata: (e) => {
            let { selectedGuildId: t } = e,
                n = { dismissUntil: l()().add(2, "hours").toDate() };
            if (null != t) {
                let e = U.A.getMentionRaidDetected(t);
                null != e && (n.decisionId = e.decisionId);
            }
            return n;
        },
    },
    [eT.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = en.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, M._z)(e),
                n = W.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= eK.tZ;
        },
        metadata: () => {
            let e = en.A.getCurrentUserActiveStream();
            return { streamKey: null != e ? (0, M._z)(e) : null };
        },
    },
    [eT.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eq.A.paymentSources ?? {};
            return G.A.getIsTargeted() && !(0, v.TW)(t) && 0 !== Object.keys(n).length;
        },
    },
    [eT.kqX.PREMIUM_MARKETING_NAGBAR]: {
        predicate: () => {
            let e = w.A.getMarketingComponentByType(r.C.NAGBAR);
            if (null == e) return !1;
            if (null == e.promotionId) return !0;
            let t = w.A.getPromotionByTypeAndId(Y.pt.MARKETING_MOMENT, e.promotionId);
            return (
                !(null != t && t.endDate < new Date()) &&
                !(0, d.u$)(E.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, e.promotionId).isDismissed
            );
        },
    },
    [eT.kqX.COD_3PP_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return !te(eT.kqX.COD_3PP_NAGBAR) && (0, F.OI)(t, "NoticeStore.COD_3PP_NAGBAR");
        },
    },
    [eT.kqX.YOUTUBE_3P_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return !te(eT.kqX.YOUTUBE_3P_NAGBAR) && (0, K.MC)(t, "NoticeStore.YOUTUBE_3P_NAGBAR");
        },
    },
    [eT.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !te(eT.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && z.Cm(),
        metadata: () => ({ dismissUntil: l()().add(180, "days").toDate(), sampleRate: 0.1 }),
    },
    [eT.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: { predicate: () => z.h6(), metadata: () => ({ sampleRate: 0.1 }) },
    [eT.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
                te(eT.kqX.SYSTEM_SERVICE_WARNING) ||
                !(0, Z.yA)(D.Ay) ||
                null == t ||
                em.Ay.getMode() !== eT.TBI.PUSH_TO_TALK
            )
                return !1;
            let n = D.Ay.getVisibleGame();
            return null != n && !!n.elevated;
        },
    },
    [eT.kqX.E2EE_UPDATE_REQUIRED]: {
        predicate: () => {
            if (te(eT.kqX.E2EE_UPDATE_REQUIRED) || !eg.A.isConnected()) return !1;
            let e = em.Ay.getMediaEngine();
            return 1 !== (e.getSupportedSecureFramesProtocolVersion?.() ?? 0);
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eT.kqX.WINDOWS_MEDIA_PACK_REQUIRED]: {
        predicate: () =>
            !(
                !eb.isPlatformEmbedded ||
                _.A?.process.platform !== "win32" ||
                te(eT.kqX.WINDOWS_MEDIA_PACK_REQUIRED) ||
                eF.Ay.getEnableHardwareAcceleration()
            ) && !1 === em.Ay.isH264MfDecodeAvailable(),
    },
    [eT.kqX.RIOT_MIGRATION]: {
        predicate: () => {
            let e = null != es.A.getAccount(null, eT.fg2.RIOT_GAMES),
                t = null != es.A.getAccount(null, eT.fg2.LEAGUE_OF_LEGENDS);
            if (te(eT.kqX.RIOT_MIGRATION) || (0, d.k8)(E.M.RIOT_CONNECTION_DEPRECATION_DISABLE) || (!e && !t))
                return !1;
            let n = u.A.get(eT.fg2.LEAGUE_OF_LEGENDS),
                i = u.A.get(eT.fg2.RIOT_GAMES);
            return null != n.migrationData && null != i.migrationData;
        },
    },
    [eT.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            return (0, A.Jz)({
                currentUser: t,
                selectedGuildId: n,
                platformTypes: [eT.fg2.RIOT_GAMES, eT.fg2.LEAGUE_OF_LEGENDS],
                dismissibleContent: E.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
                noticeType: eT.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
            });
        },
    },
    [eT.kqX.BATTLENET_MIGRATION]: {
        predicate: () => {
            let e = u.A.get(eT.fg2.BATTLENET);
            return !(
                !e.migrationData?.getMigrationExperimentEnabled("NoticeStore") ||
                null == es.A.getAccount(null, eT.fg2.BATTLENET) ||
                te(eT.kqX.BATTLENET_MIGRATION) ||
                (0, d.k8)(E.M.BATTLENET_CONNECTION_DEPRECATION_DISABLE)
            );
        },
    },
    [eT.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            return (0, A.Jz)({
                currentUser: t,
                selectedGuildId: n,
                platformTypes: [eT.fg2.BATTLENET],
                dismissibleContent: E.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES_DISABLE,
                noticeType: eT.kqX.BATTLENET_LINKED_ROLE_DEPRECATION,
            });
        },
    },
};
function ti() {
    if (!P.A.isConnected()) return !1;
    e7 = null;
    let e = q.default.getCurrentUser();
    if (null == e) return !1;
    let t = ev.A.getPremiumSubscription(),
        n = ek.A.getGuildId(),
        i = eh.Ay.getVoiceChannelId(),
        l = null != i ? ej.A.getVoiceStateForChannel(i) : null;
    for (let r of tt)
        if (
            null != tn[r] &&
            tn[r].predicate({
                selectedGuildId: n,
                voiceChannelId: i,
                voiceState: l,
                currentUser: e,
                premiumSubscription: t,
            })
        ) {
            let i = tn[r].metadata?.({ currentUser: e, premiumSubscription: t, selectedGuildId: n });
            e7 = { ...e3, type: r, metadata: i };
            break;
        }
    if (null != e7) {
        e7.metadata?.sampleRate != null &&
            null == e5[e7.type] &&
            (e5[e7.type] = Math.random() <= e7.metadata.sampleRate);
        let e = !1 === e5[e7.type];
        (te(e7.type) || e) && (e7 = null);
    }
}
function tl() {
    return (eL.A.enabled || delete e2[eT.kqX.STREAMER_MODE], ti());
}
class tr extends s.Ay.Store {
    static displayName = "NoticeStore";
    initialize() {
        (this.syncWith(
            [S.A, ex.Ay, eU.A, eC, ek.A, w.A, eX.A, y.default, es.A, J.A, p.A, W.A, en.A, D.Ay, et.A, S.A, I.A, L.A],
            ti,
        ),
            this.waitFor(
                S.A,
                T.A,
                en.A,
                ei.default,
                y.default,
                el.A,
                er.A,
                G.A,
                es.A,
                eC,
                eV.A,
                eH.A,
                ew.A,
                eu.A,
                C.A,
                P.A,
                U.A,
                p.A,
                eD.Ay,
                I.A,
                eP.A,
                eM.A,
                g.A,
                h.A,
                em.Ay,
                ep.A,
                L.A,
                eq.A,
                ef.A,
                eU.A,
                w.A,
                W.A,
                eg.A,
                D.Ay,
                eh.Ay,
                ek.A,
                $.A,
                ey.A,
                eL.A,
                b,
                ev.A,
                ex.Ay,
                eB.A,
                eX.A,
                eG.A,
                J.A,
                q.default,
                ee.A,
                ej.A,
                et.A,
            ));
    }
    hasNotice() {
        return null != e7 && null != e7.type;
    }
    getNotice() {
        return null == eG.A.getAction() ? e7 : null;
    }
    isNoticeDismissed(e) {
        return te(e);
    }
}
let ts = new tr(c.h, {
    CURRENT_USER_UPDATE: ti,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: ti,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: ti,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: ti,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: ti,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: ti,
    GUILD_CREATE: ti,
    GUILD_DELETE: ti,
    AUDIO_INPUT_DETECTED: ti,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: ti,
    CERTIFIED_DEVICES_SET: ti,
    AUDIO_SET_INPUT_DEVICE: ti,
    AUDIO_SET_OUTPUT_DEVICE: ti,
    MEDIA_ENGINE_DEVICES: ti,
    RTC_CONNECTION_STATE: ti,
    RPC_APP_AUTHENTICATED: ti,
    RPC_APP_DISCONNECTED: ti,
    USER_CONNECTIONS_UPDATE: ti,
    WINDOW_FOCUS: ti,
    INSTANT_INVITE_CREATE: ti,
    INSTANT_INVITE_REVOKE_SUCCESS: ti,
    SPOTIFY_PLAYER_PAUSE: ti,
    RUNNING_GAMES_CHANGE: ti,
    EXPERIMENTS_FETCH_SUCCESS: ti,
    APEX_EXPERIMENTS_FETCH_SUCCESS: ti,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: ti,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: ti,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: ti,
    DEVELOPER_TEST_MODE_RESET: ti,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: ti,
    DISPATCH_APPLICATION_INSTALL: ti,
    IMPERSONATE_STOP: ti,
    IMPERSONATE_UPDATE: ti,
    GUILD_MEMBER_ADD: function (e) {
        return e.user.id === ei.default.getId() && ti();
    },
    GUILD_MEMBER_UPDATE: ti,
    SURVEY_FETCHED: ti,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: ti,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: ti,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: ti,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: ti,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return (
            (e7?.type === eT.kqX.INVITED_TO_SPEAK ||
                t.some((e) => {
                    let { userId: t } = e;
                    return t !== ei.default.getId();
                })) &&
            ti()
        );
    },
    STREAMER_MODE_UPDATE: tl,
    RUNNING_STREAMER_TOOLS_CHANGE: tl,
    DISPATCH_APPLICATION_ERROR: function () {
        return (delete e2[eT.kqX.DISPATCH_ERROR], ti());
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return (delete e2[eT.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], ti());
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return ti();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return ti();
    },
    NOTICE_SHOW: function (e) {
        e7 = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != e7 && (null == e.id || e.id === e7.id) && (e6(e7.type, e.isTemporary, e.untilAtLeast), ti());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return (e6(t), ti());
    },
    LOGOUT: function () {
        ((e2 = {}), (e5 = {}), (e7 = null));
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: ti,
    AUTO_MODERATION_MENTION_RAID_DETECTION: ti,
    REPORT_AV_ERROR: ti,
    ACTIVE_AV_ERRORS_CHANGED: ti,
    MEDIA_ENGINE_MF_AVAILABILITY_CHECKED: ti,
    AUDIO_SET_MODE: ti,
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: ti,
});
