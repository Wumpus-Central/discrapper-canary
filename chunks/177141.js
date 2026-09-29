n.d(t, { f7: () => eJ, Re: () => e$, Ay: () => ts, pe: () => eZ, rV: () => ez });
var i = n(536637),
    l = n.n(i),
    r = n(877624),
    s = n(17928),
    a = n(206959),
    o = n(554146),
    c = n(506774),
    E = n(228366),
    u = n(77729),
    d = n(573648),
    _ = n(521790),
    A = n(587895),
    T = n(145643),
    I = n(826673),
    N = n(367727),
    R = n(532205),
    C = n(487329),
    O = n(161518),
    m = n(736056),
    S = n(952818),
    f = n(597643),
    p = n(652896),
    g = n(585510),
    D = n(610136),
    P = n(229527),
    h = n(93474),
    M = n(164956),
    U = n(857071),
    y = n(625075),
    L = n(733110),
    x = n(577517),
    k = n(748209),
    v = n(869968),
    j = n(243217),
    G = n(287809),
    b = n(158045);
let q = !1;
class B extends s.Ay.Store {
    initialize() {
        this.waitFor(G.default);
    }
    static displayName = "SubscriptionRemindersStore";
    shouldShowReactivateNotice() {
        let e = G.default.getCurrentUser();
        return !(0, b.TW)(e) && q;
    }
}
let X = new B(E.h, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (null != t) {
            let e = j.A.createFromServer(t);
            if (null == (0, b.EL)(e) || e.metadata?.ended_at == null) return;
            let n = l()(e.metadata.ended_at);
            l()().isBetween(n.clone().add(4, "days"), n.clone().add(11, "days")) && (q = !0);
        }
    },
});
var w = n(220038),
    F = n(810498),
    H = n(264779),
    V = n(412260),
    Y = n(852218),
    K = n(256150),
    W = n(859703),
    Q = n(541315),
    Z = n(655116),
    z = n(105530),
    $ = n(935671),
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
    eo = n.n(ea),
    ec = n(339048),
    eE = n(830382),
    eu = n(627363),
    ed = n(469778),
    e_ = n(67480),
    eA = n(652215);
let eT = "DetectedOffPlatformPremiumPerksStore",
    eI = {},
    eN = {},
    eR = [];
function eC() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of eo().values(eN)) {
        if (eR.includes(t)) continue;
        let i = A.A.getApplication(n);
        if (null == i) {
            A.A.isFetchingApplication(n) || A.A.didFetchingApplicationFail(n) || eu.Ay.fetchApplication(n);
            continue;
        }
        let l = e_.A.get(t);
        if (null == l) {
            e_.A.isFetching(t) || e_.A.didFetchingSkuFail(t) || eE.EX(i.id, t);
            continue;
        }
        ed.A.applicationIdsFetching.has(i.id) ||
        ed.A.isEntitledToSku(G.default.getCurrentUser(), t, i.id, i.id) ||
        !l.available
            ? null != eI[t] && (delete eI[t], (e = !0))
            : ((eI[t] = { skuId: t, applicationId: n }), (e = !0));
    }
    return e;
}
class eO extends s.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        (this.waitFor(A.A, ed.A, S.Ay, e_.A, G.default), (eR = c.w.get(eT) ?? eR));
    }
    getDetectedOffPlatformPremiumPerks() {
        return eo().values(eI);
    }
}
let em = new eO(E.h, {
    LOGOUT: function () {
        ((eI = {}), (eN = {}));
    },
    SKU_FETCH_SUCCESS: eC,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eC,
    ENTITLEMENT_CREATE: eC,
    APPLICATION_FETCH_SUCCESS: eC,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete eI[t], eR.includes(t))) return !1;
        (eR.push(t), c.w.set(eT, eR));
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of S.Ay.getRunningGames())
            if (null != t && n !== eA.d3x.DISCORD)
                for (let { skuId: n, applicationId: i } of eA.m_i)
                    i !== t ||
                        eR.includes(n) ||
                        (null == eN[n] &&
                            (ed.A.applicationIdsFetched.has(i) ||
                                ed.A.applicationIdsFetching.has(i) ||
                                null != ed.A.getForSku(n) ||
                                ec.LM(i),
                            (eN[n] = { skuId: n, applicationId: i }),
                            (e = !0)));
        return (e && eC(), e);
    },
});
var eS = n(696451),
    ef = n(317525),
    ep = n(71393),
    eg = n(25578),
    eD = n(803224),
    eP = n(576705),
    eh = n(362790),
    eM = n(763827),
    eU = n(309010),
    ey = n(967198),
    eL = n(437959),
    ex = n(351906),
    ek = n(274184),
    ev = n(870570),
    ej = n(977997),
    eG = n(295405),
    eb = n(166403),
    eq = n(354670),
    eB = n(147964),
    eX = n(723702),
    ew = n(19575),
    eF = n(755439),
    eH = n(422033),
    eV = n(966846);
n(436317);
var eY = n(202541),
    eK = n(190107),
    eW = n(818348),
    eQ = n(731854);
let eZ = {
        [eA.kqX.DOWNLOAD_NAG]: o.M.NAGBAR_NOTICE_DOWNLOAD,
        [eA.kqX.CONNECT_SPOTIFY]: o.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eA.kqX.CONNECT_PLAYSTATION]: o.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eA.kqX.PASSKEY_BACKUP]: o.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [eA.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eA.kqX.PREMIUM_REACTIVATE]: o.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eA.kqX.BOUNCED_EMAIL_DETECTED]: o.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eA.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eA.kqX.CHECKOUT_RECOVERY_NAGBAR]: o.M.CHECKOUT_RECOVERY_NAGBAR,
        [eA.kqX.QUEST_APP_UPSELL]: o.M.NAGBAR_QUEST_APP_UPSELL,
        [eA.kqX.RIOT_MIGRATION]: o.M.RIOT_CONNECTION_DEPRECATION_DISABLE,
        [eA.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
        [eA.kqX.BATTLENET_MIGRATION]: o.M.BATTLENET_CONNECTION_DEPRECATION_DISABLE,
        [eA.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: o.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES_DISABLE,
        [eA.kqX.COD_3PP_NAGBAR]: o.M.COD_3PP_NAGBAR_NOTICE,
        [eA.kqX.YOUTUBE_3P_NAGBAR]: o.M.YOUTUBE_3P_NAGBAR_NOTICE,
    },
    ez = { [eA.kqX.GIFTING_PROMOTION_REMINDER]: o.M.GIFTING_PROMOTION_REMINDER },
    e$ = {
        [eA.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eA.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: o.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eA.kqX.RIOT_MIGRATION]: o.M.RIOT_CONNECTION_DEPRECATION,
        [eA.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: o.M.RIOT_CONNECTION_DEPRECATION_ADMIN,
        [eA.kqX.BATTLENET_MIGRATION]: o.M.BATTLENET_CONNECTION_DEPRECATION,
        [eA.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: o.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES,
    },
    eJ = { [eA.kqX.OUTBOUND_PROMOTION]: o.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    e0 = {
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
    e1 = new Set([
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
    e2 = {},
    e5 = {},
    e3 = Object.freeze({ id: null, message: null, buttonText: null, callback: void 0, metadata: null }),
    e7 = null;
function e8(e) {
    return e0[e] + "-untilAtLeast";
}
function e9(e, t, n) {
    if (null == e) return;
    let i = e0[e];
    (null == i || t || c.w.set(i, !0), e1.has(e) && (e2[e] = !0), null != n && null != i)
        ? c.w.set(e8(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
        : c.w.remove(e8(e));
}
let e6 = null;
function e4() {
    if (null != e6) return e6;
    try {
        let e = document.createElement("canvas").getContext("2d"),
            t = "\uE700\uE701\uE702\uE703\uE704\uE705\uE706\uE707";
        e.font = "16px monospace";
        let n = e.measureText(t).width;
        ((e.font = '16px "Segoe MDL2 Assets", monospace'), (e6 = e.measureText(t).width !== n));
    } catch (e) {
        e6 = !1;
    }
    return e6;
}
function te(e) {
    if (null == e) return !1;
    let t = e$[e];
    if (null != t) {
        let n = (0, R.D)(e);
        return (0, N.FZ)(t, n).isDismissed;
    }
    let n = eZ[e];
    if (null != n) return (0, I.k8)(n);
    let i = e0[e];
    if (null != i) {
        let t,
            n = null != (t = c.w.get(e8(e))) ? l()(t) : null;
        if (null != n) return n?.isAfter(l()());
    }
    let r = e2[e];
    return !!r || (null != i && "" !== i ? c.w.get(i) : !!e1.has(e) && r);
}
let tt = [
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
    eA.kqX.YOUTUBE_3P_NAGBAR,
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
let tn = {
    [eA.kqX.GIFTING_PROMOTION_REMINDER]: { predicate: () => (0, F.MD)() },
    [eA.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, g.dj)().show && !te(eA.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({ dismissUntil: l()().add(3, "hours").toDate() }),
    },
    [eA.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let i = eS.Ay.getMember(n, t.id);
            return null != i && !i.isPending && (0, P.TR)(i);
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
            let e = x.A.getWarning();
            return e?.surfaces?.includes(k.x.BANNER) === !0 && null != e.daysRemaining && e.daysRemaining >= 0;
        },
        metadata: () => ({ daysRemaining: x.A.getWarning()?.daysRemaining ?? null }),
    },
    [eA.kqX.VIEWING_ROLES]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return M.A.isViewingRoles(t);
        },
    },
    [eA.kqX.INVITED_TO_SPEAK]: {
        predicate: (e) => {
            let { voiceState: t } = e;
            return (0, z.eY)(t) === z.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        },
    },
    [eA.kqX.LURKING_GUILD]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && U.A.isLurking(t);
        },
    },
    [eA.kqX.VOICE_DISABLED]: { predicate: () => null != eM.A.getRemoteDisconnectVoiceChannelId() },
    [eA.kqX.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != eM.A.getLastSessionVoiceChannelId() },
    [eA.kqX.NO_INPUT_DETECTED]: { predicate: () => O.A.hasActiveErrorOfType(C.iy.NO_AUDIO_INPUT_DETECTED) },
    [eA.kqX.NO_INPUT_DEVICES_DETECTED]: { predicate: () => O.A.hasActiveErrorOfType(C.iy.NO_INPUT_DEVICES) },
    [eA.kqX.VIDEO_BACKGROUND_UNAVAILABLE]: { predicate: () => eM.A.isConnected() && ee.A.videoBackgroundUnavailable },
    [eA.kqX.HARDWARE_MUTE]: {
        predicate: () => eM.A.isConnected() && eg.Ay.isHardwareMute() && eg.Ay.isHardwareMuteNoticeEnabled(),
        metadata: () => {
            let e = eg.Ay.getInputDeviceId(),
                t = el.A.getVendor(e),
                n = el.A.getModel(e);
            if (null != t && null != n) return { vendor: t, model: n };
        },
    },
    [eA.kqX.PTT_NO_KEYBIND_WARNING]: {
        predicate: () =>
            !!eM.A.isConnected() &&
            eg.Ay.getMode() === eA.TBI.PUSH_TO_TALK &&
            !(eg.Ay.getSettings().modeOptions.shortcut.length > 0),
    },
    [eA.kqX.DISPATCH_ERROR]: {
        predicate: () => null != eF.A.getLastError(),
        metadata: () => ({ error: eF.A.getLastError() }),
    },
    [eA.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != eH.A.getLastProgress(),
        metadata: () => eH.A.getLastProgress(),
    },
    [eA.kqX.SPOTIFY_AUTO_PAUSED]: { predicate: () => Z.A.wasAutoPaused() },
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
                    !ep.A.getGuild(t)?.features.has(eA.GuildFeatures.GUILD_ONBOARDING) &&
                    eS.Ay.getMember(t, n.id)?.isPending) ??
                !1
            );
        },
    },
    [eA.kqX.OUTBOUND_PROMOTION]: { predicate: () => (0, H.So)() },
    [eA.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => eX.isPlatformEmbedded && (!a.A.supported() || eV.A.isCorruptInstallation()),
    },
    [eA.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t &&
                ej.A.hasVideo(t) &&
                !eg.Ay.supports(eQ.O5.VIDEO) &&
                y.k.getConfig({ location: "NoticeStore.VIDEO_UNSUPPORTED_BROWSER" }).videoEnabled &&
                !te(eA.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
        },
    },
    [eA.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return b.Ay.canRedeemPremiumPerks(t) && em.getDetectedOffPlatformPremiumPerks().length > 0;
        },
        metadata: () => em.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eA.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () =>
            !te(eA.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && em.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => em.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eA.kqX.STREAMER_MODE]: { predicate: () => ex.A.enabled },
    [eA.kqX.DOWNLOAD_NAG]: { predicate: () => !eX.isPlatformEmbedded && !te(eA.kqX.DOWNLOAD_NAG) },
    [eA.kqX.QUEST_APP_UPSELL]: { predicate: () => (0, eX.isOculusWeb)() && !te(eA.kqX.QUEST_APP_UPSELL) },
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
            !Z.A.hasConnectedAccount() &&
            S.Ay.isObservedAppRunning(d.A.get(eA.fg2.SPOTIFY).name) &&
            !te(eA.kqX.CONNECT_SPOTIFY),
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
                    return !e4();
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
                    return e4();
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
            es.A.isSuggestedAccountType(eA.fg2.PLAYSTATION) &&
            null == es.A.getAccount(null, eA.fg2.PLAYSTATION) &&
            !te(eA.kqX.CONNECT_PLAYSTATION),
    },
    [eA.kqX.PASSKEY_BACKUP]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.mfaEnabled && et.A.hasFetchedCredentials() && !et.A.hasCredentials && !te(eA.kqX.PASSKEY_BACKUP);
        },
    },
    [eA.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () =>
            eq.A.getAlmostExpiringTrialOffersForReminder([eY.pe.TIER_2]).length > 0 &&
            !te(eA.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
    },
    [eA.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () =>
            eq.A.getAlmostExpiringTrialOffersForReminder([eY.pe.TIER_0]).length > 0 &&
            !te(eA.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
    },
    [eA.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () =>
            eq.A.getAlmostExpiringDiscountOffersForReminder([eY.pe.TIER_2]).length > 0 &&
            !te(eA.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
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
                    (0, b.YE)(n, eY.PremiumTypes.TIER_2) &&
                    !r &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !te(eA.kqX.PREMIUM_UNCANCEL) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                i = null != t ? (0, b.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? b.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eA.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                r = null != t ? l()(t.currentPeriodEnd).diff(l()(t.currentPeriodStart).startOf("day"), "days") : 0,
                s = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                a = ed.A.applicationIdsFetched.has(eY.tv),
                o = ed.A.getForApplication(eY.tv),
                c = null != t ? (0, b.EL)(t) : null,
                E = null != c ? b.Ay.getSkuIdForPlan(c.planId) : null,
                u =
                    null != o &&
                    null != c &&
                    Array.from(o).filter((e) => {
                        let { skuId: t, consumed: n } = e;
                        return !n && t === E;
                    }).length > 0,
                d =
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
            return !te(eA.kqX.PREMIUM_MISSING_PAYMENT) && d;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                i = null != t ? (0, b.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? b.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eA.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && null != t.paymentSourceId ? eG.A.getPaymentSource(t.paymentSourceId) : null,
                r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                s =
                    null != t &&
                    t.status === eA.Dmq.PAST_DUE &&
                    !r &&
                    null != i &&
                    i.invalid &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !te(eA.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s;
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
            return !te(eA.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && r;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eA.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != eB.A.testModeApplicationId,
        metadata: () => {
            if (null == eB.A.testModeApplicationId) return {};
            let e = eB.A.testModeApplicationId,
                t = A.A.getApplication(e);
            return { applicationName: null != t ? t.name : e, applicationId: e };
        },
    },
    [eA.kqX.PREMIUM_REACTIVATE]: { predicate: () => !te(eA.kqX.PREMIUM_REACTIVATE) && X.shouldShowReactivateNotice() },
    [eA.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                r = null != t && null != t.paymentSourceId ? eG.A.getPaymentSource(t.paymentSourceId) : null,
                s = null != r && eW.AD.has(r.type),
                a =
                    null != t &&
                    t.status === eA.Dmq.PAST_DUE &&
                    !i &&
                    s &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !te(eA.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return null == t
                ? { daysPastDue: 0, dismissUntil: l()().toDate() }
                : {
                      daysPastDue: t.status === eA.Dmq.PAST_DUE ? l()().diff(t.currentPeriodStart, "days") : 0,
                      dismissUntil: (0, b.ji)(t).expiresDate.toDate(),
                  };
        },
    },
    [eA.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e,
                n = null != t ? ep.A.getGuild(t) : null;
            return (
                (null != t &&
                    null != h.A.getMentionRaidDetected(t) &&
                    n?.features.has(eA.GuildFeatures.COMMUNITY) &&
                    !te(eA.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
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
    [eA.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = en.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, p._z)(e),
                n = W.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= eK.tZ;
        },
        metadata: () => {
            let e = en.A.getCurrentUserActiveStream();
            return { streamKey: null != e ? (0, p._z)(e) : null };
        },
    },
    [eA.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eG.A.paymentSources ?? {};
            return v.A.getIsTargeted() && !(0, b.TW)(t) && 0 !== Object.keys(n).length;
        },
    },
    [eA.kqX.PREMIUM_MARKETING_NAGBAR]: {
        predicate: () => {
            let e = V.A.getMarketingComponentByType(r.C.NAGBAR);
            if (null == e) return !1;
            if (null == e.promotionId) return !0;
            let t = V.A.getPromotionByTypeAndId(Y.pt.MARKETING_MOMENT, e.promotionId);
            return (
                !(null != t && t.endDate < new Date()) &&
                !(0, I.u$)(o.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, e.promotionId).isDismissed
            );
        },
    },
    [eA.kqX.COD_3PP_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return !te(eA.kqX.COD_3PP_NAGBAR) && (0, w.OI)(t, "NoticeStore.COD_3PP_NAGBAR");
        },
    },
    [eA.kqX.YOUTUBE_3P_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return !te(eA.kqX.YOUTUBE_3P_NAGBAR) && (0, K.MC)(t, "NoticeStore.YOUTUBE_3P_NAGBAR");
        },
    },
    [eA.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !te(eA.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && Q.Cm(),
        metadata: () => ({ dismissUntil: l()().add(180, "days").toDate(), sampleRate: 0.1 }),
    },
    [eA.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: { predicate: () => Q.h6(), metadata: () => ({ sampleRate: 0.1 }) },
    [eA.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
                te(eA.kqX.SYSTEM_SERVICE_WARNING) ||
                !(0, $.yA)(S.Ay) ||
                null == t ||
                eg.Ay.getMode() !== eA.TBI.PUSH_TO_TALK
            )
                return !1;
            let n = S.Ay.getVisibleGame();
            return null != n && !!n.elevated;
        },
    },
    [eA.kqX.E2EE_UPDATE_REQUIRED]: {
        predicate: () => {
            if (te(eA.kqX.E2EE_UPDATE_REQUIRED) || !eM.A.isConnected()) return !1;
            let e = eg.Ay.getMediaEngine();
            return 1 !== (e.getSupportedSecureFramesProtocolVersion?.() ?? 0);
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eA.kqX.WINDOWS_MEDIA_PACK_REQUIRED]: {
        predicate: () =>
            !(
                !eX.isPlatformEmbedded ||
                u.A?.process.platform !== "win32" ||
                te(eA.kqX.WINDOWS_MEDIA_PACK_REQUIRED) ||
                ew.Ay.getEnableHardwareAcceleration()
            ) && !1 === eg.Ay.isH264MfDecodeAvailable(),
    },
    [eA.kqX.RIOT_MIGRATION]: {
        predicate: () => {
            let e = null != es.A.getAccount(null, eA.fg2.RIOT_GAMES),
                t = null != es.A.getAccount(null, eA.fg2.LEAGUE_OF_LEGENDS);
            if (te(eA.kqX.RIOT_MIGRATION) || (0, I.k8)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE) || (!e && !t))
                return !1;
            let n = d.A.get(eA.fg2.LEAGUE_OF_LEGENDS),
                i = d.A.get(eA.fg2.RIOT_GAMES);
            return null != n.migrationData && null != i.migrationData;
        },
    },
    [eA.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            return (0, _.Jz)({
                currentUser: t,
                selectedGuildId: n,
                platformTypes: [eA.fg2.RIOT_GAMES, eA.fg2.LEAGUE_OF_LEGENDS],
                dismissibleContent: o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
                noticeType: eA.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
            });
        },
    },
    [eA.kqX.BATTLENET_MIGRATION]: {
        predicate: () => {
            let e = d.A.get(eA.fg2.BATTLENET);
            return !(
                !e.migrationData?.getMigrationExperimentEnabled("NoticeStore") ||
                null == es.A.getAccount(null, eA.fg2.BATTLENET) ||
                te(eA.kqX.BATTLENET_MIGRATION) ||
                (0, I.k8)(o.M.BATTLENET_CONNECTION_DEPRECATION_DISABLE)
            );
        },
    },
    [eA.kqX.BATTLENET_LINKED_ROLE_DEPRECATION]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            return (0, _.Jz)({
                currentUser: t,
                selectedGuildId: n,
                platformTypes: [eA.fg2.BATTLENET],
                dismissibleContent: o.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES_DISABLE,
                noticeType: eA.kqX.BATTLENET_LINKED_ROLE_DEPRECATION,
            });
        },
    },
};
function ti() {
    if (!f.A.isConnected()) return !1;
    e7 = null;
    let e = G.default.getCurrentUser();
    if (null == e) return !1;
    let t = eb.A.getPremiumSubscription(),
        n = ey.A.getGuildId(),
        i = eU.Ay.getVoiceChannelId(),
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
    return (ex.A.enabled || delete e2[eA.kqX.STREAMER_MODE], ti());
}
class tr extends s.Ay.Store {
    static displayName = "NoticeStore";
    initialize() {
        (this.syncWith(
            [O.A, ek.Ay, eh.A, em, ey.A, V.A, eq.A, L.default, es.A, J.A, D.A, W.A, en.A, S.Ay, et.A, O.A, T.A, x.A],
            ti,
        ),
            this.waitFor(
                O.A,
                A.A,
                en.A,
                ei.default,
                L.default,
                el.A,
                er.A,
                v.A,
                es.A,
                em,
                eF.A,
                eH.A,
                eV.A,
                ed.A,
                m.A,
                f.A,
                h.A,
                D.A,
                eS.Ay,
                T.A,
                ef.A,
                ep.A,
                M.A,
                U.A,
                eg.Ay,
                eD.A,
                x.A,
                eG.A,
                eP.A,
                eh.A,
                V.A,
                W.A,
                eM.A,
                S.Ay,
                eU.Ay,
                ey.A,
                Z.A,
                eL.A,
                ex.A,
                X,
                eb.A,
                ek.Ay,
                eB.A,
                eq.A,
                ev.A,
                J.A,
                G.default,
                ee.A,
                ej.A,
                et.A,
            ));
    }
    hasNotice() {
        return null != e7 && null != e7.type;
    }
    getNotice() {
        return null == ev.A.getAction() ? e7 : null;
    }
    isNoticeDismissed(e) {
        return te(e);
    }
}
let ts = new tr(E.h, {
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
            (e7?.type === eA.kqX.INVITED_TO_SPEAK ||
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
        return (delete e2[eA.kqX.DISPATCH_ERROR], ti());
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return (delete e2[eA.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], ti());
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
        return null != e7 && (null == e.id || e.id === e7.id) && (e9(e7.type, e.isTemporary, e.untilAtLeast), ti());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return (e9(t), ti());
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
