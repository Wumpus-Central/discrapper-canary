n.d(t, { f7: () => e5, Re: () => e2, Ay: () => tc, pe: () => e0, rV: () => e1 });
var i = n(989349),
    l = n.n(i),
    r = n(877624),
    s = n(17928),
    a = n(206959),
    E = n(554146),
    o = n(506774),
    c = n(228366),
    _ = n(77729),
    u = n(573648),
    A = n(521790),
    T = n(587895),
    d = n(145643),
    I = n(826673),
    N = n(367727),
    R = n(532205),
    O = n(487329),
    S = n(161518),
    C = n(736056),
    D = n(952818),
    m = n(493560),
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
let b = !1;
class X extends s.Ay.Store {
    initialize() {
        this.waitFor(j.default);
    }
    static displayName = "SubscriptionRemindersStore";
    shouldShowReactivateNotice() {
        let e = j.default.getCurrentUser();
        return !(0, q.TW)(e) && b;
    }
}
let B = new X(c.h, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (null != t) {
            let e = v.A.createFromServer(t);
            if (null == (0, q.EL)(e) || e.metadata?.ended_at == null) return;
            let n = l()(e.metadata.ended_at);
            l()().isBetween(n.clone().add(4, "days"), n.clone().add(11, "days")) && (b = !0);
        }
    },
});
var w = n(220038),
    F = n(580194),
    H = n(233317),
    V = n(862990),
    Y = n(264779),
    K = n(412260),
    W = n(852218),
    Z = n(859703),
    z = n(988903),
    $ = n(655116),
    Q = n(105530),
    J = n(935671),
    ee = n(742023),
    et = n(617617),
    en = n(912630),
    ei = n(499156),
    el = n(976910),
    er = n(616356),
    es = n(280450),
    ea = n(347481),
    eE = n(734057),
    eo = n(30370);
n(321073);
var ec = n(435558),
    e_ = n.n(ec),
    eu = n(339048),
    eA = n(830382),
    eT = n(627363),
    ed = n(469778),
    eI = n(67480),
    eN = n(652215);
let eR = "DetectedOffPlatformPremiumPerksStore",
    eO = {},
    eS = {},
    eC = [];
function eD() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of e_().values(eS)) {
        if (eC.includes(t)) continue;
        let i = T.A.getApplication(n);
        if (null == i) {
            T.A.isFetchingApplication(n) || T.A.didFetchingApplicationFail(n) || eT.Ay.fetchApplication(n);
            continue;
        }
        let l = eI.A.get(t);
        if (null == l) {
            eI.A.isFetching(t) || eI.A.didFetchingSkuFail(t) || eA.EX(i.id, t);
            continue;
        }
        ed.A.applicationIdsFetching.has(i.id) ||
        ed.A.isEntitledToSku(j.default.getCurrentUser(), t, i.id, i.id) ||
        !l.available
            ? null != eO[t] && (delete eO[t], (e = !0))
            : ((eO[t] = { skuId: t, applicationId: n }), (e = !0));
    }
    return e;
}
class em extends s.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        this.waitFor(T.A, ed.A, D.Ay, eI.A, j.default), (eC = o.w.get(eR) ?? eC);
    }
    getDetectedOffPlatformPremiumPerks() {
        return e_().values(eO);
    }
}
let eP = new em(c.h, {
    LOGOUT: function () {
        (eO = {}), (eS = {});
    },
    SKU_FETCH_SUCCESS: eD,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eD,
    ENTITLEMENT_CREATE: eD,
    APPLICATION_FETCH_SUCCESS: eD,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete eO[t], eC.includes(t))) return !1;
        eC.push(t), o.w.set(eR, eC);
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of D.Ay.getRunningGames())
            if (null != t && n !== eN.d3x.DISCORD)
                for (let { skuId: n, applicationId: i } of eN.m_i)
                    i !== t ||
                        eC.includes(n) ||
                        (null == eS[n] &&
                            (ed.A.applicationIdsFetched.has(i) ||
                                ed.A.applicationIdsFetching.has(i) ||
                                null != ed.A.getForSku(n) ||
                                eu.LM(i),
                            (eS[n] = { skuId: n, applicationId: i }),
                            (e = !0)));
        return e && eD(), e;
    },
});
var ep = n(696451),
    ef = n(317525),
    eM = n(71393),
    eg = n(453028),
    eh = n(803224),
    eU = n(576705),
    eL = n(362790),
    ey = n(763827),
    ek = n(309010),
    ex = n(967198),
    eG = n(437959),
    ev = n(351906),
    ej = n(274184),
    eq = n(870570),
    eb = n(977997),
    eX = n(295405),
    eB = n(166403),
    ew = n(354670),
    eF = n(147964),
    eH = n(723702),
    eV = n(19575),
    eY = n(755439),
    eK = n(422033),
    eW = n(966846);
n(436317);
var eZ = n(202541),
    ez = n(88001),
    e$ = n(190107),
    eQ = n(818348),
    eJ = n(731854);
let e0 = {
        [eN.kqX.DOWNLOAD_NAG]: E.M.NAGBAR_NOTICE_DOWNLOAD,
        [eN.kqX.CONNECT_SPOTIFY]: E.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eN.kqX.CONNECT_PLAYSTATION]: E.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eN.kqX.PASSKEY_BACKUP]: E.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [eN.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: E.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eN.kqX.PREMIUM_REACTIVATE]: E.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eN.kqX.BOUNCED_EMAIL_DETECTED]: E.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eN.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: E.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eN.kqX.CHECKOUT_RECOVERY_NAGBAR]: E.M.CHECKOUT_RECOVERY_NAGBAR,
        [eN.kqX.QUEST_APP_UPSELL]: E.M.NAGBAR_QUEST_APP_UPSELL,
        [eN.kqX.RIOT_MIGRATION]: E.M.RIOT_CONNECTION_DEPRECATION_DISABLE,
        [eN.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: E.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
        [eN.kqX.BATTLENET_MIGRATION]: E.M.BATTLENET_CONNECTION_DEPRECATION_DISABLE,
        [eN.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: E.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES_DISABLE,
        [eN.kqX.COD_3PP_NAGBAR]: E.M.COD_3PP_NAGBAR_NOTICE,
    },
    e1 = { [eN.kqX.GIFTING_PROMOTION_REMINDER]: E.M.GIFTING_PROMOTION_REMINDER },
    e2 = {
        [eN.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: E.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eN.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: E.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eN.kqX.RIOT_MIGRATION]: E.M.RIOT_CONNECTION_DEPRECATION,
        [eN.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: E.M.RIOT_CONNECTION_DEPRECATION_ADMIN,
        [eN.kqX.BATTLENET_MIGRATION]: E.M.BATTLENET_CONNECTION_DEPRECATION,
        [eN.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: E.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES,
    },
    e5 = { [eN.kqX.OUTBOUND_PROMOTION]: E.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    e3 = {
        [eN.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
        [eN.kqX.PREMIUM_UNCANCEL]: "hideUncancelReminder",
        [eN.kqX.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
        [eN.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
        [eN.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
        [eN.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
        [eN.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
        [eN.kqX.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
        [eN.kqX.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
        [eN.kqX.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
        [eN.kqX.WIN_COMPAT_MODE_MESSAGE]: "hideWinCompatModeNotice",
        [eN.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [eN.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [eN.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [eN.kqX.MACOS_DEPRECATED_MESSAGE]: "hideMacOSDeprecationMessageNotice",
        [eN.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
        [eN.kqX.E2EE_UPDATE_REQUIRED]: "hideE2EEUpdateRequiredNotice",
    },
    e7 = new Set([
        eN.kqX.NO_INPUT_DETECTED,
        eN.kqX.NO_INPUT_DEVICES_DETECTED,
        eN.kqX.STREAMER_MODE,
        eN.kqX.VIDEO_UNSUPPORTED_BROWSER,
        eN.kqX.SPOTIFY_AUTO_PAUSED,
        eN.kqX.DISPATCH_ERROR,
        eN.kqX.DISPATCH_ERROR,
        eN.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eN.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    ]),
    e9 = {},
    e8 = {},
    e4 = Object.freeze({ id: null, message: null, buttonText: null, callback: void 0, metadata: null }),
    e6 = null;
function te(e) {
    return e3[e] + "-untilAtLeast";
}
function tt(e, t, n) {
    if (null == e) return;
    let i = e3[e];
    (null == i || t || o.w.set(i, !0), e7.has(e) && (e9[e] = !0), null != n && null != i)
        ? o.w.set(te(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
        : o.w.remove(te(e));
}
let tn = null;
function ti() {
    if (null != tn) return tn;
    try {
        let e = document.createElement("canvas").getContext("2d"),
            t = "\uE700\uE701\uE702\uE703\uE704\uE705\uE706\uE707";
        e.font = "16px monospace";
        let n = e.measureText(t).width;
        (e.font = '16px "Segoe MDL2 Assets", monospace'), (tn = e.measureText(t).width !== n);
    } catch (e) {
        tn = !1;
    }
    return tn;
}
function tl(e) {
    if (null == e) return !1;
    let t = e2[e];
    if (null != t) {
        let n = (0, R.D)(e);
        return (0, N.FZ)(t, n).isDismissed;
    }
    let n = e0[e];
    if (null != n) return (0, I.k8)(n);
    let i = e3[e];
    if (null != i) {
        let t,
            n = null != (t = o.w.get(te(e))) ? l()(t) : null;
        if (null != n) return n?.isAfter(l()());
    }
    let r = e9[e];
    return !!r || (null != i && "" !== i ? o.w.get(i) : !!e7.has(e) && r);
}
let tr = [
    eN.kqX.QUARANTINED,
    eN.kqX.PARENTAL_CONSENT_WARNING,
    eN.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eN.kqX.VIEWING_ROLES,
    eN.kqX.INVITED_TO_SPEAK,
    eN.kqX.LURKING_GUILD,
    eN.kqX.VOICE_DISABLED,
    eN.kqX.NO_INPUT_DEVICES_DETECTED,
    eN.kqX.NO_INPUT_DETECTED,
    eN.kqX.VIDEO_BACKGROUND_UNAVAILABLE,
    eN.kqX.PTT_NO_KEYBIND_WARNING,
    eN.kqX.HARDWARE_MUTE,
    eN.kqX.DISPATCH_ERROR,
    eN.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eN.kqX.SPOTIFY_AUTO_PAUSED,
    eN.kqX.WIN32_DEPRECATED_MESSAGE,
    eN.kqX.WIN7_8_DEPRECATED_MESSAGE,
    eN.kqX.WIN_COMPAT_MODE_MESSAGE,
    eN.kqX.MACOS_DEPRECATED_MESSAGE,
    eN.kqX.E2EE_UPDATE_REQUIRED,
    eN.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    eN.kqX.VOICE_CONNECTED_LAST_SESSION,
    eN.kqX.SYSTEM_SERVICE_WARNING,
    eN.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
    eN.kqX.GUILD_RAID_NOTIFICATION,
    eN.kqX.COD_3PP_NAGBAR,
    eN.kqX.BATTLENET_MIGRATION,
    eN.kqX.BATTLENET_LINKED_ROLE_DEPRECATION,
    eN.kqX.GIFTING_PROMOTION_REMINDER,
    eN.kqX.RIOT_MIGRATION,
    eN.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
    eN.kqX.QUESTS_PROGRESS_INTERRUPTION,
    eN.kqX.UNCLAIMED_ACCOUNT,
    eN.kqX.PENDING_MEMBER,
    eN.kqX.CHECKOUT_RECOVERY_NAGBAR,
    eN.kqX.PREMIUM_MARKETING_NAGBAR,
    eN.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
    eN.kqX.OUTBOUND_PROMOTION,
    eN.kqX.CORRUPT_INSTALLATION,
    eN.kqX.VIDEO_UNSUPPORTED_BROWSER,
    eN.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
    eN.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
    eN.kqX.STREAMER_MODE,
    eN.kqX.SCHEDULED_MAINTENANCE,
    eN.kqX.BOUNCED_EMAIL_DETECTED,
    eN.kqX.UNVERIFIED_ACCOUNT,
    eN.kqX.PREMIUM_TIER_2_TRIAL_ENDING,
    eN.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
    eN.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
    eN.kqX.PREMIUM_UNCANCEL,
    eN.kqX.PREMIUM_MISSING_PAYMENT,
    eN.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
    eN.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
    eN.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
    eN.kqX.PREMIUM_REACTIVATE,
    eN.kqX.PASSKEY_BACKUP,
    eN.kqX.APPLICATION_TEST_MODE,
    eN.kqX.QUEST_APP_UPSELL,
    eN.kqX.DOWNLOAD_NAG,
    eN.kqX.CONNECT_SPOTIFY,
    eN.kqX.CONNECT_PLAYSTATION,
    eN.kqX.SURVEY,
    eN.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
    eN.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
];
eN.kqX.QUARANTINED,
    eN.kqX.PARENTAL_CONSENT_WARNING,
    eN.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eN.kqX.VIEWING_ROLES,
    eN.kqX.INVITED_TO_SPEAK,
    eN.kqX.LURKING_GUILD,
    eN.kqX.VOICE_DISABLED,
    eN.kqX.NO_INPUT_DETECTED,
    eN.kqX.VIDEO_BACKGROUND_UNAVAILABLE,
    eN.kqX.HARDWARE_MUTE,
    eN.kqX.DISPATCH_ERROR,
    eN.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eN.kqX.SPOTIFY_AUTO_PAUSED,
    eN.kqX.VOICE_CONNECTED_LAST_SESSION,
    eN.kqX.PENDING_MEMBER,
    eN.kqX.STREAMER_MODE,
    eN.kqX.SCHEDULED_MAINTENANCE;
let ts = {
    [eN.kqX.GIFTING_PROMOTION_REMINDER]: { predicate: () => (0, F.MD)() },
    [eN.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, p.dj)().show && !tl(eN.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({ dismissUntil: l()().add(3, "hours").toDate() }),
    },
    [eN.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let i = ep.Ay.getMember(n, t.id);
            return null != i && !i.isPending && (0, M.TR)(i);
        },
    },
    [eN.kqX.QUARANTINED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t.hasFlag(eN.nhx.QUARANTINED);
        },
    },
    [eN.kqX.PARENTAL_CONSENT_WARNING]: {
        predicate: () => {
            let e = k.A.getWarning();
            return e?.surfaces?.includes(x.x.BANNER) === !0 && null != e.daysRemaining && e.daysRemaining >= 0;
        },
        metadata: () => ({ daysRemaining: k.A.getWarning()?.daysRemaining ?? null }),
    },
    [eN.kqX.VIEWING_ROLES]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return h.A.isViewingRoles(t);
        },
    },
    [eN.kqX.INVITED_TO_SPEAK]: {
        predicate: (e) => {
            let { voiceState: t } = e;
            return (0, Q.eY)(t) === Q.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        },
    },
    [eN.kqX.LURKING_GUILD]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && U.A.isLurking(t);
        },
    },
    [eN.kqX.VOICE_DISABLED]: { predicate: () => null != ey.A.getRemoteDisconnectVoiceChannelId() },
    [eN.kqX.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != ey.A.getLastSessionVoiceChannelId() },
    [eN.kqX.NO_INPUT_DETECTED]: { predicate: () => S.A.hasActiveErrorOfType(O.iy.NO_AUDIO_INPUT_DETECTED) },
    [eN.kqX.NO_INPUT_DEVICES_DETECTED]: { predicate: () => S.A.hasActiveErrorOfType(O.iy.NO_INPUT_DEVICES) },
    [eN.kqX.VIDEO_BACKGROUND_UNAVAILABLE]: { predicate: () => ey.A.isConnected() && en.A.videoBackgroundUnavailable },
    [eN.kqX.HARDWARE_MUTE]: {
        predicate: () =>
            ey.A.isConnected() &&
            eg.Ay.isHardwareMute() &&
            eg.Ay.isHardwareMuteNoticeEnabled() &&
            !ee.Ay.disableHardwareMuteSilenceAlert,
        metadata: () => {
            let e = eg.Ay.getInputDeviceId(),
                t = ea.A.getVendor(e),
                n = ea.A.getModel(e);
            if (null != t && null != n) return { vendor: t, model: n };
        },
    },
    [eN.kqX.PTT_NO_KEYBIND_WARNING]: {
        predicate: () =>
            !!ey.A.isConnected() &&
            eg.Ay.getMode() === eN.TBI.PUSH_TO_TALK &&
            !(eg.Ay.getSettings().modeOptions.shortcut.length > 0) &&
            !!ei.A.getConfig({ location: "NoticeStore" }).showPTTNoKeybindWarning,
    },
    [eN.kqX.DISPATCH_ERROR]: {
        predicate: () => null != eY.A.getLastError(),
        metadata: () => ({ error: eY.A.getLastError() }),
    },
    [eN.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != eK.A.getLastProgress(),
        metadata: () => eK.A.getLastProgress(),
    },
    [eN.kqX.SPOTIFY_AUTO_PAUSED]: { predicate: () => $.A.wasAutoPaused() },
    [eN.kqX.UNCLAIMED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return null != t && !t.isClaimed();
        },
    },
    [eN.kqX.PENDING_MEMBER]: {
        predicate: (e) => {
            let { selectedGuildId: t, currentUser: n } = e;
            return (
                (null != t &&
                    null != n &&
                    !eM.A.getGuild(t)?.features.has(eN.GuildFeatures.GUILD_ONBOARDING) &&
                    ep.Ay.getMember(t, n.id)?.isPending) ??
                !1
            );
        },
    },
    [eN.kqX.OUTBOUND_PROMOTION]: { predicate: () => (0, Y.So)() },
    [eN.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => eH.isPlatformEmbedded && (!a.A.supported() || eW.A.isCorruptInstallation()),
    },
    [eN.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t &&
                eb.A.hasVideo(t) &&
                !eg.Ay.supports(eJ.O5.VIDEO) &&
                L.k.getConfig({ location: "NoticeStore.VIDEO_UNSUPPORTED_BROWSER" }).videoEnabled &&
                !tl(eN.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
        },
    },
    [eN.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return q.Ay.canRedeemPremiumPerks(t) && eP.getDetectedOffPlatformPremiumPerks().length > 0;
        },
        metadata: () => eP.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eN.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () =>
            !tl(eN.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && eP.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => eP.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eN.kqX.STREAMER_MODE]: { predicate: () => ev.A.enabled },
    [eN.kqX.DOWNLOAD_NAG]: { predicate: () => !eH.isPlatformEmbedded && !tl(eN.kqX.DOWNLOAD_NAG) },
    [eN.kqX.QUEST_APP_UPSELL]: { predicate: () => (0, eH.isOculusWeb)() && !tl(eN.kqX.QUEST_APP_UPSELL) },
    [eN.kqX.SCHEDULED_MAINTENANCE]: {
        predicate: () => null != eG.A.getScheduledMaintenance(),
        metadata: () => {
            let e = eG.A.getScheduledMaintenance();
            if (null != e) return { id: e.id, start: new Date(e.scheduled_for), end: new Date(e.scheduled_until) };
        },
    },
    [eN.kqX.SURVEY]: { predicate: () => null != ej.Ay.getCurrentSurvey(), metadata: () => ej.Ay.getCurrentSurvey() },
    [eN.kqX.UNVERIFIED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.email != null && !t.verified;
        },
    },
    [eN.kqX.BOUNCED_EMAIL_DETECTED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.hasBouncedEmail;
        },
    },
    [eN.kqX.CONNECT_SPOTIFY]: {
        predicate: () =>
            !$.A.hasConnectedAccount() &&
            D.Ay.isObservedAppRunning(u.A.get(eN.fg2.SPOTIFY).name) &&
            !tl(eN.kqX.CONNECT_SPOTIFY),
    },
    [eN.kqX.WIN32_DEPRECATED_MESSAGE]: {
        predicate: () => _.A?.os.arch === "ia32" && _.A?.process.platform === "win32",
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eN.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (_.A?.process.platform === "win32")
                try {
                    if (parseInt(_.A?.os.release.split(".")[0]) >= 10) return !1;
                    return !ti();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eN.kqX.WIN_COMPAT_MODE_MESSAGE]: {
        predicate: () => {
            if (_.A?.process.platform === "win32")
                try {
                    if (parseInt(_.A?.os.release.split(".")[0]) >= 10) return !1;
                    return ti();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eN.kqX.MACOS_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (_.A?.process.platform === "darwin")
                try {
                    return 21 > parseInt(_.A?.os.release.split(".")[0]);
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eN.kqX.CONNECT_PLAYSTATION]: {
        predicate: () =>
            eo.A.isSuggestedAccountType(eN.fg2.PLAYSTATION) &&
            null == eo.A.getAccount(null, eN.fg2.PLAYSTATION) &&
            !tl(eN.kqX.CONNECT_PLAYSTATION),
    },
    [eN.kqX.PASSKEY_BACKUP]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.mfaEnabled && el.A.hasFetchedCredentials() && !el.A.hasCredentials && !tl(eN.kqX.PASSKEY_BACKUP);
        },
    },
    [eN.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () =>
            ew.A.getAlmostExpiringTrialOffersForReminder([eZ.pe.TIER_2]).length > 0 &&
            !tl(eN.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
    },
    [eN.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () =>
            ew.A.getAlmostExpiringTrialOffersForReminder([eZ.pe.TIER_0]).length > 0 &&
            !tl(eN.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
    },
    [eN.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () =>
            ew.A.getAlmostExpiringDiscountOffersForReminder([eZ.pe.TIER_2]).length > 0 &&
            !tl(eN.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
    },
    [eN.kqX.PREMIUM_UNCANCEL]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                r =
                    t?.canceledAt != null &&
                    t?.status === eN.Dmq.CANCELED &&
                    1 >= l()().diff(l()(t.canceledAt), "days"),
                s = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                a =
                    null != t &&
                    t.status === eN.Dmq.CANCELED &&
                    !s &&
                    i <= 7 &&
                    i >= 0 &&
                    (0, q.YE)(n, eZ.PremiumTypes.TIER_2) &&
                    !r &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tl(eN.kqX.PREMIUM_UNCANCEL) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                i = null != t ? (0, q.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? q.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eN.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                r = null != t ? l()(t.currentPeriodEnd).diff(l()(t.currentPeriodStart).startOf("day"), "days") : 0,
                s = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                a = ed.A.applicationIdsFetched.has(eZ.tv),
                E = ed.A.getForApplication(eZ.tv),
                o = null != t ? (0, q.EL)(t) : null,
                c = null != o ? q.Ay.getSkuIdForPlan(o.planId) : null,
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
                    t.status !== eN.Dmq.PAST_DUE &&
                    !s &&
                    a &&
                    !_ &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tl(eN.kqX.PREMIUM_MISSING_PAYMENT) && u;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                i = null != t ? (0, q.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? q.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eN.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && null != t.paymentSourceId ? eX.A.getPaymentSource(t.paymentSourceId) : null,
                r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                s =
                    null != t &&
                    t.status === eN.Dmq.PAST_DUE &&
                    !r &&
                    null != i &&
                    i.invalid &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tl(eN.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eN.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                r =
                    null != t &&
                    t.status === eN.Dmq.PAST_DUE &&
                    !i &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tl(eN.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && r;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eN.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != eF.A.testModeApplicationId,
        metadata: () => {
            if (null == eF.A.testModeApplicationId) return {};
            let e = eF.A.testModeApplicationId,
                t = T.A.getApplication(e);
            return { applicationName: null != t ? t.name : e, applicationId: e };
        },
    },
    [eN.kqX.PREMIUM_REACTIVATE]: { predicate: () => !tl(eN.kqX.PREMIUM_REACTIVATE) && B.shouldShowReactivateNotice() },
    [eN.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                r = null != t && null != t.paymentSourceId ? eX.A.getPaymentSource(t.paymentSourceId) : null,
                s = null != r && eQ.AD.has(r.type),
                a =
                    null != t &&
                    t.status === eN.Dmq.PAST_DUE &&
                    !i &&
                    s &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tl(eN.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return null == t
                ? { daysPastDue: 0, dismissUntil: l()().toDate() }
                : {
                      daysPastDue: t.status === eN.Dmq.PAST_DUE ? l()().diff(t.currentPeriodStart, "days") : 0,
                      dismissUntil: (0, q.ji)(t).expiresDate.toDate(),
                  };
        },
    },
    [eN.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e,
                n = null != t ? eM.A.getGuild(t) : null;
            return (
                (null != t &&
                    null != g.A.getMentionRaidDetected(t) &&
                    n?.features.has(eN.GuildFeatures.COMMUNITY) &&
                    !tl(eN.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
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
    [eN.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = er.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, P._z)(e),
                n = Z.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= e$.tZ;
        },
        metadata: () => {
            let e = er.A.getCurrentUserActiveStream();
            return { streamKey: null != e ? (0, P._z)(e) : null };
        },
    },
    [eN.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eX.A.paymentSources ?? {};
            return G.A.getIsTargeted() && !(0, q.TW)(t) && 0 !== Object.keys(n).length;
        },
    },
    [eN.kqX.PREMIUM_MARKETING_NAGBAR]: {
        predicate: () => {
            let e = K.A.getMarketingComponentByType(r.C.NAGBAR);
            if (null == e) return !1;
            if (null == e.promotionId) return !0;
            let t = K.A.getPromotionByTypeAndId(W.pt.MARKETING_MOMENT, e.promotionId);
            return (
                !(null != t && t.endDate < new Date()) &&
                !(0, I.u$)(E.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, e.promotionId).isDismissed
            );
        },
    },
    [eN.kqX.COD_3PP_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return !tl(eN.kqX.COD_3PP_NAGBAR) && (0, w.OI)(t, "NoticeStore.COD_3PP_NAGBAR");
        },
    },
    [eN.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eB.A.getPremiumGroupSubscription();
            if (null == n) return !1;
            let i = H.A.hasFetchedMembers(),
                l = H.A.getNumAvailableInvites();
            return (0, V.ux)(t, n) && i && l >= ez.Vu;
        },
        metadata: () => ({ premiumSubscription: eB.A.getPremiumGroupSubscription() }),
    },
    [eN.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !tl(eN.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && z.Cm(),
        metadata: () => ({ dismissUntil: l()().add(180, "days").toDate(), sampleRate: 0.1 }),
    },
    [eN.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: { predicate: () => z.h6(), metadata: () => ({ sampleRate: 0.1 }) },
    [eN.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
                tl(eN.kqX.SYSTEM_SERVICE_WARNING) ||
                !(0, J.yA)(D.Ay) ||
                null == t ||
                eg.Ay.getMode() !== eN.TBI.PUSH_TO_TALK
            )
                return !1;
            let n = D.Ay.getVisibleGame();
            return null != n && !!n.elevated;
        },
    },
    [eN.kqX.E2EE_UPDATE_REQUIRED]: {
        predicate: () => {
            if (tl(eN.kqX.E2EE_UPDATE_REQUIRED) || !ey.A.isConnected()) return !1;
            let e = eg.Ay.getMediaEngine();
            return 1 !== (e.getSupportedSecureFramesProtocolVersion?.() ?? 0);
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eN.kqX.WINDOWS_MEDIA_PACK_REQUIRED]: {
        predicate: () =>
            !(
                !eH.isPlatformEmbedded ||
                _.A?.process.platform !== "win32" ||
                tl(eN.kqX.WINDOWS_MEDIA_PACK_REQUIRED) ||
                eV.Ay.getEnableHardwareAcceleration()
            ) && !1 === eg.Ay.isH264MfDecodeAvailable(),
    },
    [eN.kqX.RIOT_MIGRATION]: {
        predicate: () => {
            let e = null != eo.A.getAccount(null, eN.fg2.RIOT_GAMES),
                t = null != eo.A.getAccount(null, eN.fg2.LEAGUE_OF_LEGENDS);
            if (tl(eN.kqX.RIOT_MIGRATION) || (0, I.k8)(E.M.RIOT_CONNECTION_DEPRECATION_DISABLE) || (!e && !t))
                return !1;
            let n = u.A.get(eN.fg2.LEAGUE_OF_LEGENDS),
                i = u.A.get(eN.fg2.RIOT_GAMES);
            return null != n.migrationData && null != i.migrationData;
        },
    },
    [eN.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            return (0, A.Jz)({
                currentUser: t,
                selectedGuildId: n,
                platformTypes: [eN.fg2.RIOT_GAMES, eN.fg2.LEAGUE_OF_LEGENDS],
                dismissibleContent: E.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
                noticeType: eN.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
            });
        },
    },
    [eN.kqX.BATTLENET_MIGRATION]: {
        predicate: () => {
            let e = u.A.get(eN.fg2.BATTLENET);
            return !(
                !e.migrationData?.getMigrationExperimentEnabled("NoticeStore") ||
                null == eo.A.getAccount(null, eN.fg2.BATTLENET) ||
                tl(eN.kqX.BATTLENET_MIGRATION) ||
                (0, I.k8)(E.M.BATTLENET_CONNECTION_DEPRECATION_DISABLE)
            );
        },
    },
    [eN.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            return (0, A.Jz)({
                currentUser: t,
                selectedGuildId: n,
                platformTypes: [eN.fg2.BATTLENET],
                dismissibleContent: E.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES_DISABLE,
                noticeType: eN.kqX.BATTLENET_LINKED_ROLE_DEPRECATION,
            });
        },
    },
};
function ta() {
    if (!m.A.isConnected()) return !1;
    e6 = null;
    let e = j.default.getCurrentUser();
    if (null == e) return !1;
    let t = eB.A.getPremiumSubscription(),
        n = ex.A.getGuildId(),
        i = ek.Ay.getVoiceChannelId(),
        l = null != i ? eb.A.getVoiceStateForChannel(i) : null;
    for (let r of tr)
        if (
            null != ts[r] &&
            ts[r].predicate({
                selectedGuildId: n,
                voiceChannelId: i,
                voiceState: l,
                currentUser: e,
                premiumSubscription: t,
            })
        ) {
            let i = ts[r].metadata?.({ currentUser: e, premiumSubscription: t, selectedGuildId: n });
            e6 = { ...e4, type: r, metadata: i };
            break;
        }
    if (null != e6) {
        e6.metadata?.sampleRate != null &&
            null == e8[e6.type] &&
            (e8[e6.type] = Math.random() <= e6.metadata.sampleRate);
        let e = !1 === e8[e6.type];
        (tl(e6.type) || e) && (e6 = null);
    }
}
function tE() {
    return ev.A.enabled || delete e9[eN.kqX.STREAMER_MODE], ta();
}
class to extends s.Ay.Store {
    static displayName = "NoticeStore";
    initialize() {
        this.syncWith(
            [S.A, ej.Ay, eL.A, eP, ex.A, K.A, ew.A, y.default, eo.A, et.A, f.A, Z.A, er.A, D.Ay, el.A, S.A, d.A, k.A],
            ta,
        ),
            this.waitFor(
                S.A,
                T.A,
                er.A,
                es.default,
                y.default,
                ea.A,
                eE.A,
                G.A,
                eo.A,
                eP,
                eY.A,
                eK.A,
                eW.A,
                ed.A,
                C.A,
                m.A,
                g.A,
                f.A,
                ep.Ay,
                d.A,
                ef.A,
                eM.A,
                h.A,
                U.A,
                eg.Ay,
                eh.A,
                k.A,
                eX.A,
                eU.A,
                H.A,
                eL.A,
                K.A,
                Z.A,
                ey.A,
                D.Ay,
                ek.Ay,
                ex.A,
                $.A,
                eG.A,
                ev.A,
                B,
                eB.A,
                ej.Ay,
                eF.A,
                ee.Ay,
                ew.A,
                eq.A,
                et.A,
                j.default,
                en.A,
                eb.A,
                el.A,
            );
    }
    hasNotice() {
        return null != e6 && null != e6.type;
    }
    getNotice() {
        return null == eq.A.getAction() ? e6 : null;
    }
    isNoticeDismissed(e) {
        return tl(e);
    }
}
let tc = new to(c.h, {
    CURRENT_USER_UPDATE: ta,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: ta,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: ta,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: ta,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: ta,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: ta,
    GUILD_CREATE: ta,
    GUILD_DELETE: ta,
    AUDIO_INPUT_DETECTED: ta,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: ta,
    CERTIFIED_DEVICES_SET: ta,
    AUDIO_SET_INPUT_DEVICE: ta,
    AUDIO_SET_OUTPUT_DEVICE: ta,
    MEDIA_ENGINE_DEVICES: ta,
    RTC_CONNECTION_STATE: ta,
    RPC_APP_AUTHENTICATED: ta,
    RPC_APP_DISCONNECTED: ta,
    USER_CONNECTIONS_UPDATE: ta,
    WINDOW_FOCUS: ta,
    INSTANT_INVITE_CREATE: ta,
    INSTANT_INVITE_REVOKE_SUCCESS: ta,
    SPOTIFY_PLAYER_PAUSE: ta,
    RUNNING_GAMES_CHANGE: ta,
    EXPERIMENTS_FETCH_SUCCESS: ta,
    APEX_EXPERIMENTS_FETCH_SUCCESS: ta,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: ta,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: ta,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: ta,
    DEVELOPER_TEST_MODE_RESET: ta,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: ta,
    DISPATCH_APPLICATION_INSTALL: ta,
    IMPERSONATE_STOP: ta,
    IMPERSONATE_UPDATE: ta,
    GUILD_MEMBER_ADD: function (e) {
        return e.user.id === es.default.getId() && ta();
    },
    GUILD_MEMBER_UPDATE: ta,
    SURVEY_FETCHED: ta,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: ta,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: ta,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: ta,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: ta,
    UNSYNCED_USER_SETTINGS_UPDATE: ta,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return (
            (e6?.type === eN.kqX.INVITED_TO_SPEAK ||
                t.some((e) => {
                    let { userId: t } = e;
                    return t !== es.default.getId();
                })) &&
            ta()
        );
    },
    STREAMER_MODE_UPDATE: tE,
    RUNNING_STREAMER_TOOLS_CHANGE: tE,
    DISPATCH_APPLICATION_ERROR: function () {
        return delete e9[eN.kqX.DISPATCH_ERROR], ta();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return delete e9[eN.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], ta();
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return ta();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return ta();
    },
    NOTICE_SHOW: function (e) {
        e6 = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != e6 && (null == e.id || e.id === e6.id) && (tt(e6.type, e.isTemporary, e.untilAtLeast), ta());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return tt(t), ta();
    },
    LOGOUT: function () {
        (e9 = {}), (e8 = {}), (e6 = null);
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: ta,
    AUTO_MODERATION_MENTION_RAID_DETECTION: ta,
    REPORT_AV_ERROR: ta,
    ACTIVE_AV_ERRORS_CHANGED: ta,
    MEDIA_ENGINE_MF_AVAILABILITY_CHECKED: ta,
    AUDIO_SET_MODE: ta,
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: ta,
});
