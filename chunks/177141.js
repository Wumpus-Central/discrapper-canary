n.d(t, { f7: () => e3, Re: () => e5, Ay: () => tu, pe: () => e1, rV: () => e2 });
var i = n(989349),
    l = n.n(i),
    r = n(877624),
    s = n(17928),
    a = n(206959),
    o = n(554146),
    E = n(506774),
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
    P = n(952818),
    M = n(617710),
    p = n(652896),
    m = n(585510),
    f = n(610136),
    g = n(229527),
    U = n(93474),
    h = n(164956),
    k = n(857071),
    y = n(577517),
    L = n(748209),
    x = n(869968),
    G = n(243217),
    j = n(287809),
    q = n(428262);
let v = !1;
class X extends s.Ay.Store {
    initialize() {
        this.waitFor(j.default);
    }
    static displayName = "SubscriptionRemindersStore";
    shouldShowReactivateNotice() {
        let e = j.default.getCurrentUser();
        return !(0, q.TW)(e) && v;
    }
}
let b = new X(c.h, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (null != t) {
            let e = G.A.createFromServer(t);
            if (null == (0, q.EL)(e) || e.metadata?.ended_at == null) return;
            let n = l()(e.metadata.ended_at);
            l()().isBetween(n.clone().add(4, "days"), n.clone().add(11, "days")) && (v = !0);
        }
    },
});
var B = n(380619),
    F = n(233317),
    V = n(862990),
    w = n(264779),
    H = n(412260),
    Y = n(852218),
    W = n(160394),
    K = n(859703),
    $ = n(988903),
    Q = n(655116),
    z = n(105530),
    Z = n(935671),
    J = n(742023),
    ee = n(617617),
    et = n(912630),
    en = n(499156),
    ei = n(976910),
    el = n(616356),
    er = n(280450),
    es = n(546183),
    ea = n(347481),
    eo = n(734057),
    eE = n(30370);
n(321073);
var ec = n(435558),
    eu = n.n(ec),
    e_ = n(339048),
    eA = n(830382),
    eT = n(627363),
    ed = n(469778),
    eI = n(67480),
    eN = n(652215);
let eR = "DetectedOffPlatformPremiumPerksStore",
    eS = {},
    eO = {},
    eC = [];
function eD() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of eu().values(eO)) {
        if (eC.includes(t)) continue;
        let i = d.A.getApplication(n);
        if (null == i) {
            d.A.isFetchingApplication(n) || d.A.didFetchingApplicationFail(n) || eT.Ay.fetchApplication(n);
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
            ? null != eS[t] && (delete eS[t], (e = !0))
            : ((eS[t] = { skuId: t, applicationId: n }), (e = !0));
    }
    return e;
}
class eP extends s.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        this.waitFor(d.A, ed.A, P.Ay, eI.A, j.default), (eC = E.w.get(eR) ?? eC);
    }
    getDetectedOffPlatformPremiumPerks() {
        return eu().values(eS);
    }
}
let eM = new eP(c.h, {
    LOGOUT: function () {
        (eS = {}), (eO = {});
    },
    SKU_FETCH_SUCCESS: eD,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eD,
    ENTITLEMENT_CREATE: eD,
    APPLICATION_FETCH_SUCCESS: eD,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete eS[t], eC.includes(t))) return !1;
        eC.push(t), E.w.set(eR, eC);
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of P.Ay.getRunningGames())
            if (null != t && n !== eN.d3x.DISCORD)
                for (let { skuId: n, applicationId: i } of eN.m_i)
                    i !== t ||
                        eC.includes(n) ||
                        (null == eO[n] &&
                            (ed.A.applicationIdsFetched.has(i) ||
                                ed.A.applicationIdsFetching.has(i) ||
                                null != ed.A.getForSku(n) ||
                                e_.LM(i),
                            (eO[n] = { skuId: n, applicationId: i }),
                            (e = !0)));
        return e && eD(), e;
    },
});
var ep = n(696451),
    em = n(317525),
    ef = n(71393),
    eg = n(186295),
    eU = n(803224),
    eh = n(576705),
    ek = n(362790),
    ey = n(763827),
    eL = n(309010),
    ex = n(967198),
    eG = n(437959),
    ej = n(351906),
    eq = n(274184),
    ev = n(870570),
    eX = n(977997),
    eb = n(295405),
    eB = n(166403),
    eF = n(354670),
    eV = n(147964),
    ew = n(488926),
    eH = n(723702),
    eY = n(19575),
    eW = n(755439),
    eK = n(422033),
    e$ = n(966846);
n(436317);
var eQ = n(202541),
    ez = n(88001),
    eZ = n(190107),
    eJ = n(818348),
    e0 = n(731854);
let e1 = {
        [eN.kqX.DOWNLOAD_NAG]: o.M.NAGBAR_NOTICE_DOWNLOAD,
        [eN.kqX.CONNECT_SPOTIFY]: o.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eN.kqX.CONNECT_PLAYSTATION]: o.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eN.kqX.PASSKEY_BACKUP]: o.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [eN.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eN.kqX.PREMIUM_REACTIVATE]: o.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eN.kqX.BOUNCED_EMAIL_DETECTED]: o.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eN.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eN.kqX.CHECKOUT_RECOVERY_NAGBAR]: o.M.CHECKOUT_RECOVERY_NAGBAR,
        [eN.kqX.QUEST_APP_UPSELL]: o.M.NAGBAR_QUEST_APP_UPSELL,
        [eN.kqX.RIOT_MIGRATION]: o.M.RIOT_CONNECTION_DEPRECATION_DISABLE,
        [eN.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
    },
    e2 = { [eN.kqX.GIFTING_PROMOTION_REMINDER]: o.M.GIFTING_PROMOTION_REMINDER },
    e5 = {
        [eN.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eN.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: o.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eN.kqX.RIOT_MIGRATION]: o.M.RIOT_CONNECTION_DEPRECATION,
        [eN.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: o.M.RIOT_CONNECTION_DEPRECATION_ADMIN,
    },
    e3 = { [eN.kqX.OUTBOUND_PROMOTION]: o.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    e6 = {
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
    e8 = {},
    e4 = {},
    e9 = Object.freeze({ id: null, message: null, buttonText: null, callback: void 0, metadata: null }),
    te = null;
function tt(e) {
    return e6[e] + "-untilAtLeast";
}
function tn(e, t, n) {
    if (null == e) return;
    let i = e6[e];
    (null == i || t || E.w.set(i, !0), e7.has(e) && (e8[e] = !0), null != n && null != i)
        ? E.w.set(tt(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
        : E.w.remove(tt(e));
}
let ti = null;
function tl() {
    if (null != ti) return ti;
    try {
        let e = document.createElement("canvas").getContext("2d"),
            t = "\uE700\uE701\uE702\uE703\uE704\uE705\uE706\uE707";
        e.font = "16px monospace";
        let n = e.measureText(t).width;
        (e.font = '16px "Segoe MDL2 Assets", monospace'), (ti = e.measureText(t).width !== n);
    } catch (e) {
        ti = !1;
    }
    return ti;
}
function tr(e) {
    if (null == e) return !1;
    let t = e5[e];
    if (null != t) {
        let n = (0, S.D)(e);
        return (0, R.FZ)(t, n).isDismissed;
    }
    let n = e1[e];
    if (null != n) return (0, N.k8)(n);
    let i = e6[e];
    if (null != i) {
        let t,
            n = null != (t = E.w.get(tt(e))) ? l()(t) : null;
        if (null != n) return n?.isAfter(l()());
    }
    let r = e8[e];
    return !!r || (null != i && "" !== i ? E.w.get(i) : !!e7.has(e) && r);
}
let ts = [
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
let ta = {
    [eN.kqX.GIFTING_PROMOTION_REMINDER]: { predicate: () => (0, B.MD)() },
    [eN.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, m.dj)().show && !tr(eN.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({ dismissUntil: l()().add(3, "hours").toDate() }),
    },
    [eN.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let i = ep.Ay.getMember(n, t.id);
            return null != i && !i.isPending && (0, g.TR)(i);
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
            let e = y.A.getWarning();
            return e?.surfaces?.includes(L.x.BANNER) === !0 && null != e.daysRemaining && e.daysRemaining >= 0;
        },
        metadata: () => ({ daysRemaining: y.A.getWarning()?.daysRemaining ?? null }),
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
            return (0, z.eY)(t) === z.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        },
    },
    [eN.kqX.LURKING_GUILD]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && k.A.isLurking(t);
        },
    },
    [eN.kqX.VOICE_DISABLED]: { predicate: () => null != ey.A.getRemoteDisconnectVoiceChannelId() },
    [eN.kqX.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != ey.A.getLastSessionVoiceChannelId() },
    [eN.kqX.NO_INPUT_DETECTED]: { predicate: () => C.A.hasActiveErrorOfType(O.iy.NO_AUDIO_INPUT_DETECTED) },
    [eN.kqX.NO_INPUT_DEVICES_DETECTED]: { predicate: () => C.A.hasActiveErrorOfType(O.iy.NO_INPUT_DEVICES) },
    [eN.kqX.VIDEO_BACKGROUND_UNAVAILABLE]: { predicate: () => ey.A.isConnected() && et.A.videoBackgroundUnavailable },
    [eN.kqX.HARDWARE_MUTE]: {
        predicate: () =>
            ey.A.isConnected() &&
            eg.Ay.isHardwareMute() &&
            eg.Ay.isHardwareMuteNoticeEnabled() &&
            !J.Ay.disableHardwareMuteSilenceAlert,
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
            !!en.A.getConfig({ location: "NoticeStore" }).showPTTNoKeybindWarning,
    },
    [eN.kqX.DISPATCH_ERROR]: {
        predicate: () => null != eW.A.getLastError(),
        metadata: () => ({ error: eW.A.getLastError() }),
    },
    [eN.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != eK.A.getLastProgress(),
        metadata: () => eK.A.getLastProgress(),
    },
    [eN.kqX.SPOTIFY_AUTO_PAUSED]: { predicate: () => Q.A.wasAutoPaused() },
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
                    !ef.A.getGuild(t)?.features.has(eN.GuildFeatures.GUILD_ONBOARDING) &&
                    ep.Ay.getMember(t, n.id)?.isPending) ??
                !1
            );
        },
    },
    [eN.kqX.OUTBOUND_PROMOTION]: { predicate: () => (0, w.So)() },
    [eN.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => eH.isPlatformEmbedded && (!a.A.supported() || e$.A.isCorruptInstallation()),
    },
    [eN.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t && eX.A.hasVideo(t) && !eg.Ay.supports(e0.O5.VIDEO) && !tr(eN.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
        },
    },
    [eN.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return q.Ay.canRedeemPremiumPerks(t) && eM.getDetectedOffPlatformPremiumPerks().length > 0;
        },
        metadata: () => eM.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eN.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () =>
            !tr(eN.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && eM.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => eM.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eN.kqX.STREAMER_MODE]: { predicate: () => ej.A.enabled },
    [eN.kqX.DOWNLOAD_NAG]: { predicate: () => !eH.isPlatformEmbedded && !tr(eN.kqX.DOWNLOAD_NAG) },
    [eN.kqX.QUEST_APP_UPSELL]: {
        predicate: () =>
            (0, eH.isOculusWeb)() && !tr(eN.kqX.QUEST_APP_UPSELL) && W.A.getConfig({ location: "NoticeStore" }).enabled,
    },
    [eN.kqX.SCHEDULED_MAINTENANCE]: {
        predicate: () => null != eG.A.getScheduledMaintenance(),
        metadata: () => {
            let e = eG.A.getScheduledMaintenance();
            if (null != e) return { id: e.id, start: new Date(e.scheduled_for), end: new Date(e.scheduled_until) };
        },
    },
    [eN.kqX.SURVEY]: { predicate: () => null != eq.Ay.getCurrentSurvey(), metadata: () => eq.Ay.getCurrentSurvey() },
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
            !Q.A.hasConnectedAccount() &&
            P.Ay.isObservedAppRunning(_.A.get(eN.fg2.SPOTIFY).name) &&
            !tr(eN.kqX.CONNECT_SPOTIFY),
    },
    [eN.kqX.WIN32_DEPRECATED_MESSAGE]: {
        predicate: () => u.A?.os.arch === "ia32" && u.A?.process.platform === "win32",
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eN.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (u.A?.process.platform === "win32")
                try {
                    if (parseInt(u.A?.os.release.split(".")[0]) >= 10) return !1;
                    return !tl();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eN.kqX.WIN_COMPAT_MODE_MESSAGE]: {
        predicate: () => {
            if (u.A?.process.platform === "win32")
                try {
                    if (parseInt(u.A?.os.release.split(".")[0]) >= 10) return !1;
                    return tl();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eN.kqX.MACOS_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (u.A?.process.platform === "darwin")
                try {
                    return 21 > parseInt(u.A?.os.release.split(".")[0]);
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eN.kqX.CONNECT_PLAYSTATION]: {
        predicate: () =>
            eE.A.isSuggestedAccountType(eN.fg2.PLAYSTATION) &&
            null == eE.A.getAccount(null, eN.fg2.PLAYSTATION) &&
            !tr(eN.kqX.CONNECT_PLAYSTATION),
    },
    [eN.kqX.PASSKEY_BACKUP]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.mfaEnabled && ei.A.hasFetchedCredentials() && !ei.A.hasCredentials && !tr(eN.kqX.PASSKEY_BACKUP);
        },
    },
    [eN.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () =>
            eF.A.getAlmostExpiringTrialOffersForReminder([eQ.pe.TIER_2]).length > 0 &&
            !tr(eN.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
    },
    [eN.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () =>
            eF.A.getAlmostExpiringTrialOffersForReminder([eQ.pe.TIER_0]).length > 0 &&
            !tr(eN.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
    },
    [eN.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () =>
            eF.A.getAlmostExpiringDiscountOffersForReminder([eQ.pe.TIER_2]).length > 0 &&
            !tr(eN.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
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
                    (0, q.YE)(n, eQ.PremiumTypes.TIER_2) &&
                    !r &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tr(eN.kqX.PREMIUM_UNCANCEL) && a;
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
                a = ed.A.applicationIdsFetched.has(eQ.tv),
                o = ed.A.getForApplication(eQ.tv),
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
                    t.status !== eN.Dmq.PAST_DUE &&
                    !s &&
                    a &&
                    !u &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tr(eN.kqX.PREMIUM_MISSING_PAYMENT) && _;
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
                i = null != t && null != t.paymentSourceId ? eb.A.getPaymentSource(t.paymentSourceId) : null,
                r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                s =
                    null != t &&
                    t.status === eN.Dmq.PAST_DUE &&
                    !r &&
                    null != i &&
                    i.invalid &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tr(eN.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s;
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
            return !tr(eN.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && r;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eN.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != eV.A.testModeApplicationId,
        metadata: () => {
            if (null == eV.A.testModeApplicationId) return {};
            let e = eV.A.testModeApplicationId,
                t = d.A.getApplication(e);
            return { applicationName: null != t ? t.name : e, applicationId: e };
        },
    },
    [eN.kqX.PREMIUM_REACTIVATE]: { predicate: () => !tr(eN.kqX.PREMIUM_REACTIVATE) && b.shouldShowReactivateNotice() },
    [eN.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                r = null != t && null != t.paymentSourceId ? eb.A.getPaymentSource(t.paymentSourceId) : null,
                s = null != r && eJ.AD.has(r.type),
                a =
                    null != t &&
                    t.status === eN.Dmq.PAST_DUE &&
                    !i &&
                    s &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tr(eN.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && a;
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
                n = null != t ? ef.A.getGuild(t) : null;
            return (
                (null != t &&
                    null != U.A.getMentionRaidDetected(t) &&
                    n?.features.has(eN.GuildFeatures.COMMUNITY) &&
                    !tr(eN.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
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
    [eN.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = el.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, p._z)(e),
                n = K.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= eZ.tZ;
        },
        metadata: () => {
            let e = el.A.getCurrentUserActiveStream();
            return { streamKey: null != e ? (0, p._z)(e) : null };
        },
    },
    [eN.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eb.A.paymentSources ?? {};
            return x.A.getIsTargeted() && !(0, q.TW)(t) && 0 !== Object.keys(n).length;
        },
    },
    [eN.kqX.PREMIUM_MARKETING_NAGBAR]: {
        predicate: () => {
            let e = H.A.getMarketingComponentByType(r.C.NAGBAR);
            if (null == e) return !1;
            if (null == e.promotionId) return !0;
            let t = H.A.getPromotionByTypeAndId(Y.pt.MARKETING_MOMENT, e.promotionId);
            return (
                !(null != t && t.endDate < new Date()) &&
                !(0, N.u$)(o.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, e.promotionId).isDismissed
            );
        },
    },
    [eN.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eB.A.getPremiumGroupSubscription();
            if (null == n) return !1;
            let i = F.A.hasFetchedMembers(),
                l = F.A.getNumAvailableInvites();
            return (0, V.ux)(t, n) && i && l >= ez.Vu;
        },
        metadata: () => ({ premiumSubscription: eB.A.getPremiumGroupSubscription() }),
    },
    [eN.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !tr(eN.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && $.Cm(),
        metadata: () => ({ dismissUntil: l()().add(180, "days").toDate(), sampleRate: 0.1 }),
    },
    [eN.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: { predicate: () => $.h6(), metadata: () => ({ sampleRate: 0.1 }) },
    [eN.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
                tr(eN.kqX.SYSTEM_SERVICE_WARNING) ||
                !(0, Z.yA)(P.Ay) ||
                null == t ||
                eg.Ay.getMode() !== eN.TBI.PUSH_TO_TALK
            )
                return !1;
            let n = P.Ay.getVisibleGame();
            return null != n && !!n.elevated;
        },
    },
    [eN.kqX.E2EE_UPDATE_REQUIRED]: {
        predicate: () => {
            if (tr(eN.kqX.E2EE_UPDATE_REQUIRED) || !ey.A.isConnected()) return !1;
            let e = eg.Ay.getMediaEngine();
            return 1 !== (e.getSupportedSecureFramesProtocolVersion?.() ?? 0);
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eN.kqX.WINDOWS_MEDIA_PACK_REQUIRED]: {
        predicate: () =>
            !(
                !eH.isPlatformEmbedded ||
                u.A?.process.platform !== "win32" ||
                tr(eN.kqX.WINDOWS_MEDIA_PACK_REQUIRED) ||
                eY.Ay.getEnableHardwareAcceleration()
            ) && !1 === eg.Ay.isH264MfDecodeAvailable(),
    },
    [eN.kqX.RIOT_MIGRATION]: {
        predicate: () => {
            if (!(0, A.getIsRiotSocialSDKMigrationEnabled)({ location: "NoticeStore" })) return !1;
            let e = null != eE.A.getAccount(null, eN.fg2.RIOT_GAMES),
                t = null != eE.A.getAccount(null, eN.fg2.LEAGUE_OF_LEGENDS);
            if (tr(eN.kqX.RIOT_MIGRATION) || (0, N.k8)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE) || (!e && !t))
                return !1;
            let n = _.A.get(eN.fg2.LEAGUE_OF_LEGENDS),
                i = _.A.get(eN.fg2.RIOT_GAMES);
            return null != n.migrationData && null != i.migrationData;
        },
    },
    [eN.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (
                !(0, A.getIsRiotSocialSDKMigrationEnabled)({ location: "NoticeStore" }) ||
                tr(eN.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN) ||
                (0, N.k8)(o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE)
            )
                return !1;
            let i = null != n ? ef.A.getGuild(n) : null,
                l = (0, ew.$3)({ permission: eN.xBc.ADMINISTRATOR, user: t, context: i }),
                r = null != i ? em.A.getSortedRoles(i.id).filter((e) => null === e.tags.guild_connections) : null;
            return null != i && !!l && null != r && !!(0, T.X)(r, [eN.fg2.RIOT_GAMES, eN.fg2.LEAGUE_OF_LEGENDS]);
        },
    },
};
function to() {
    if (!M.A.isConnected()) return !1;
    te = null;
    let e = j.default.getCurrentUser();
    if (null == e) return !1;
    let t = eB.A.getPremiumSubscription(),
        n = ex.A.getGuildId(),
        i = eL.A.getVoiceChannelId(),
        l = null != i ? eX.A.getVoiceStateForChannel(i) : null;
    for (let r of ts)
        if (
            null != ta[r] &&
            ta[r].predicate({
                selectedGuildId: n,
                voiceChannelId: i,
                voiceState: l,
                currentUser: e,
                premiumSubscription: t,
            })
        ) {
            let i = ta[r].metadata?.({ currentUser: e, premiumSubscription: t, selectedGuildId: n });
            te = { ...e9, type: r, metadata: i };
            break;
        }
    if (null != te) {
        te.metadata?.sampleRate != null &&
            null == e4[te.type] &&
            (e4[te.type] = Math.random() <= te.metadata.sampleRate);
        let e = !1 === e4[te.type];
        (tr(te.type) || e) && (te = null);
    }
}
function tE() {
    return ej.A.enabled || delete e8[eN.kqX.STREAMER_MODE], to();
}
class tc extends s.Ay.Store {
    static displayName = "NoticeStore";
    initialize() {
        this.syncWith(
            [C.A, eq.Ay, ek.A, eM, ex.A, H.A, eF.A, es.default, eE.A, ee.A, f.A, K.A, el.A, P.Ay, ei.A, C.A, I.A, y.A],
            to,
        ),
            this.waitFor(
                C.A,
                d.A,
                el.A,
                er.default,
                es.default,
                ea.A,
                eo.A,
                x.A,
                eE.A,
                eM,
                eW.A,
                eK.A,
                e$.A,
                ed.A,
                D.A,
                M.A,
                U.A,
                f.A,
                ep.Ay,
                I.A,
                em.A,
                ef.A,
                h.A,
                k.A,
                eg.Ay,
                eU.A,
                y.A,
                eb.A,
                eh.A,
                F.A,
                ek.A,
                H.A,
                K.A,
                ey.A,
                P.Ay,
                eL.A,
                ex.A,
                Q.A,
                eG.A,
                ej.A,
                b,
                eB.A,
                eq.Ay,
                eV.A,
                J.Ay,
                eF.A,
                ev.A,
                ee.A,
                j.default,
                et.A,
                eX.A,
                ei.A,
            );
    }
    hasNotice() {
        return null != te && null != te.type;
    }
    getNotice() {
        return null == ev.A.getAction() ? te : null;
    }
    isNoticeDismissed(e) {
        return tr(e);
    }
}
let tu = new tc(c.h, {
    CURRENT_USER_UPDATE: to,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: to,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: to,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: to,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: to,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: to,
    GUILD_CREATE: to,
    GUILD_DELETE: to,
    AUDIO_INPUT_DETECTED: to,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: to,
    CERTIFIED_DEVICES_SET: to,
    AUDIO_SET_INPUT_DEVICE: to,
    AUDIO_SET_OUTPUT_DEVICE: to,
    MEDIA_ENGINE_DEVICES: to,
    RTC_CONNECTION_STATE: to,
    RPC_APP_AUTHENTICATED: to,
    RPC_APP_DISCONNECTED: to,
    USER_CONNECTIONS_UPDATE: to,
    WINDOW_FOCUS: to,
    INSTANT_INVITE_CREATE: to,
    INSTANT_INVITE_REVOKE_SUCCESS: to,
    SPOTIFY_PLAYER_PAUSE: to,
    RUNNING_GAMES_CHANGE: to,
    EXPERIMENTS_FETCH_SUCCESS: to,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: to,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: to,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: to,
    DEVELOPER_TEST_MODE_RESET: to,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: to,
    DISPATCH_APPLICATION_INSTALL: to,
    IMPERSONATE_STOP: to,
    IMPERSONATE_UPDATE: to,
    GUILD_MEMBER_ADD: function (e) {
        return e.user.id === er.default.getId() && to();
    },
    GUILD_MEMBER_UPDATE: to,
    SURVEY_FETCHED: to,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: to,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: to,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: to,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: to,
    UNSYNCED_USER_SETTINGS_UPDATE: to,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return (
            (te?.type === eN.kqX.INVITED_TO_SPEAK ||
                t.some((e) => {
                    let { userId: t } = e;
                    return t !== er.default.getId();
                })) &&
            to()
        );
    },
    STREAMER_MODE_UPDATE: tE,
    RUNNING_STREAMER_TOOLS_CHANGE: tE,
    DISPATCH_APPLICATION_ERROR: function () {
        return delete e8[eN.kqX.DISPATCH_ERROR], to();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return delete e8[eN.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], to();
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return to();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return to();
    },
    NOTICE_SHOW: function (e) {
        te = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != te && (null == e.id || e.id === te.id) && (tn(te.type, e.isTemporary, e.untilAtLeast), to());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return tn(t), to();
    },
    LOGOUT: function () {
        (e8 = {}), (e4 = {}), (te = null);
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: to,
    AUTO_MODERATION_MENTION_RAID_DETECTION: to,
    REPORT_AV_ERROR: to,
    ACTIVE_AV_ERRORS_CHANGED: to,
    MEDIA_ENGINE_MF_AVAILABILITY_CHECKED: to,
    AUDIO_SET_MODE: to,
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: to,
});
