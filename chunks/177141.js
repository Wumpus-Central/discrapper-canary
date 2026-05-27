n.d(t, { f7: () => e1, Re: () => e0, Ay: () => tc, pe: () => eQ, rV: () => eJ });
var i = n(989349),
    l = n.n(i),
    r = n(877624),
    s = n(17928),
    a = n(206959),
    c = n(554146),
    o = n(506774),
    d = n(228366),
    u = n(77729),
    E = n(573648),
    A = n(941314),
    _ = n(380786),
    T = n(587895),
    I = n(145643),
    N = n(826673),
    R = n(367727),
    m = n(587054),
    C = n(487329),
    p = n(161518),
    S = n(736056),
    O = n(952818),
    g = n(587626),
    h = n(652896),
    f = n(585510),
    P = n(610136),
    M = n(229527),
    D = n(93474),
    x = n(164956),
    U = n(857071),
    y = n(869968),
    j = n(243217),
    L = n(287809),
    k = n(428262);
let v = !1;
class b extends s.Ay.Store {
    initialize() {
        this.waitFor(L.default);
    }
    static displayName = "SubscriptionRemindersStore";
    shouldShowReactivateNotice() {
        let e = L.default.getCurrentUser();
        return !(0, k.TW)(e) && v;
    }
}
let G = new b(d.h, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (null != t) {
            let e = j.A.createFromServer(t);
            if (null == (0, k.EL)(e) || e.metadata?.ended_at == null) return;
            let n = l()(e.metadata.ended_at);
            l()().isBetween(n.clone().add(4, "days"), n.clone().add(11, "days")) && (v = !0);
        }
    },
});
var X = n(380619),
    q = n(233317),
    F = n(39423),
    B = n(264779),
    w = n(374200),
    V = n(852218),
    H = n(160394),
    Y = n(859703),
    K = n(988903),
    W = n(655116),
    z = n(105530),
    $ = n(935671),
    Z = n(742023),
    Q = n(617617),
    J = n(499156),
    ee = n(976910),
    et = n(616356),
    en = n(495544),
    ei = n(546183),
    el = n(347481),
    er = n(734057),
    es = n(30370);
n(321073);
var ea = n(735438),
    ec = n.n(ea),
    eo = n(339048),
    ed = n(830382),
    eu = n(627363),
    eE = n(469778),
    eA = n(67480),
    e_ = n(652215);
let eT = "DetectedOffPlatformPremiumPerksStore",
    eI = {},
    eN = {},
    eR = [];
function em() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of ec().values(eN)) {
        if (eR.includes(t)) continue;
        let i = T.A.getApplication(n);
        if (null == i) {
            T.A.isFetchingApplication(n) || T.A.didFetchingApplicationFail(n) || eu.Ay.fetchApplication(n);
            continue;
        }
        let l = eA.A.get(t);
        if (null == l) {
            eA.A.isFetching(t) || eA.A.didFetchingSkuFail(t) || ed.EX(i.id, t);
            continue;
        }
        eE.A.applicationIdsFetching.has(i.id) ||
        eE.A.isEntitledToSku(L.default.getCurrentUser(), t, i.id, i.id) ||
        !l.available
            ? null != eI[t] && (delete eI[t], (e = !0))
            : ((eI[t] = { skuId: t, applicationId: n }), (e = !0));
    }
    return e;
}
class eC extends s.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        this.waitFor(T.A, eE.A, O.Ay, eA.A, L.default), (eR = o.w.get(eT) ?? eR);
    }
    getDetectedOffPlatformPremiumPerks() {
        return ec().values(eI);
    }
}
let ep = new eC(d.h, {
    LOGOUT: function () {
        (eI = {}), (eN = {});
    },
    SKU_FETCH_SUCCESS: em,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: em,
    ENTITLEMENT_CREATE: em,
    APPLICATION_FETCH_SUCCESS: em,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete eI[t], eR.includes(t))) return !1;
        eR.push(t), o.w.set(eT, eR);
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let { id: t, distributor: n } of O.Ay.getRunningGames())
            if (null != t && n !== e_.d3x.DISCORD)
                for (let { skuId: n, applicationId: i } of e_.m_i)
                    i !== t ||
                        eR.includes(n) ||
                        (null == eN[n] &&
                            (eE.A.applicationIdsFetched.has(i) ||
                                eE.A.applicationIdsFetching.has(i) ||
                                null != eE.A.getForSku(n) ||
                                eo.LM(i),
                            (eN[n] = { skuId: n, applicationId: i }),
                            (e = !0)));
        return e && em(), e;
    },
});
var eS = n(696451),
    eO = n(317525),
    eg = n(71393),
    eh = n(761853),
    ef = n(803224),
    eP = n(576705),
    eM = n(362790),
    eD = n(763827),
    ex = n(309010),
    eU = n(967198),
    ey = n(437959),
    ej = n(351906),
    eL = n(274184),
    ek = n(870570),
    ev = n(977997),
    eb = n(295405),
    eG = n(166403),
    eX = n(354670),
    eq = n(147964),
    eF = n(488926),
    eB = n(723702),
    ew = n(19575),
    eV = n(755439),
    eH = n(422033),
    eY = n(966846);
n(436317);
var eK = n(788868),
    eW = n(88001),
    ez = n(190107),
    e$ = n(818348),
    eZ = n(731854);
let eQ = {
        [e_.kqX.DOWNLOAD_NAG]: c.M.NAGBAR_NOTICE_DOWNLOAD,
        [e_.kqX.CONNECT_SPOTIFY]: c.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [e_.kqX.CONNECT_PLAYSTATION]: c.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [e_.kqX.PASSKEY_BACKUP]: c.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [e_.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: c.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [e_.kqX.PREMIUM_REACTIVATE]: c.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [e_.kqX.BOUNCED_EMAIL_DETECTED]: c.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [e_.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: c.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [e_.kqX.CHECKOUT_RECOVERY_NAGBAR]: c.M.CHECKOUT_RECOVERY_NAGBAR,
        [e_.kqX.QUEST_APP_UPSELL]: c.M.NAGBAR_QUEST_APP_UPSELL,
        [e_.kqX.RIOT_MIGRATION]: c.M.RIOT_CONNECTION_DEPRECATION_DISABLE,
        [e_.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: c.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
    },
    eJ = { [e_.kqX.GIFTING_PROMOTION_REMINDER]: c.M.GIFTING_PROMOTION_REMINDER },
    e0 = {
        [e_.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: c.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [e_.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: c.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [e_.kqX.RIOT_MIGRATION]: c.M.RIOT_CONNECTION_DEPRECATION,
        [e_.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: c.M.RIOT_CONNECTION_DEPRECATION_ADMIN,
    },
    e1 = { [e_.kqX.OUTBOUND_PROMOTION]: c.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    e2 = {
        [e_.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
        [e_.kqX.PREMIUM_UNCANCEL]: "hideUncancelReminder",
        [e_.kqX.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
        [e_.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
        [e_.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
        [e_.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
        [e_.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
        [e_.kqX.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
        [e_.kqX.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
        [e_.kqX.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
        [e_.kqX.WIN_COMPAT_MODE_MESSAGE]: "hideWinCompatModeNotice",
        [e_.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [e_.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [e_.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [e_.kqX.MACOS_19_DEPRECATED_MESSAGE]: "hideMacOS19DeprecationMessageNotice",
        [e_.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
        [e_.kqX.E2EE_UPDATE_REQUIRED]: "hideE2EEUpdateRequiredNotice",
    },
    e6 = new Set([
        e_.kqX.NO_INPUT_DETECTED,
        e_.kqX.NO_INPUT_DEVICES_DETECTED,
        e_.kqX.STREAMER_MODE,
        e_.kqX.VIDEO_UNSUPPORTED_BROWSER,
        e_.kqX.SPOTIFY_AUTO_PAUSED,
        e_.kqX.DISPATCH_ERROR,
        e_.kqX.DISPATCH_ERROR,
        e_.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        e_.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    ]),
    e7 = {},
    e5 = {},
    e9 = Object.freeze({ id: null, message: null, buttonText: null, callback: void 0, metadata: null }),
    e8 = null;
function e3(e) {
    return e2[e] + "-untilAtLeast";
}
function e4(e, t, n) {
    if (null == e) return;
    let i = e2[e];
    (null == i || t || o.w.set(i, !0), e6.has(e) && (e7[e] = !0), null != n && null != i)
        ? o.w.set(e3(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
        : o.w.remove(e3(e));
}
let te = null;
function tt() {
    if (null != te) return te;
    try {
        let e = document.createElement("canvas").getContext("2d"),
            t = "\uE700\uE701\uE702\uE703\uE704\uE705\uE706\uE707";
        e.font = "16px monospace";
        let n = e.measureText(t).width;
        (e.font = '16px "Segoe MDL2 Assets", monospace'), (te = e.measureText(t).width !== n);
    } catch (e) {
        te = !1;
    }
    return te;
}
function tn(e) {
    if (null == e) return !1;
    let t = e0[e];
    if (null != t) {
        let n = (0, m.D)(e);
        return (0, R.FZ)(t, n).isDismissed;
    }
    let n = eQ[e];
    if (null != n) return (0, N.k8)(n);
    let i = e2[e];
    if (null != i) {
        let t,
            n = null != (t = o.w.get(e3(e))) ? l()(t) : null;
        if (null != n) return n?.isAfter(l()());
    }
    let r = e7[e];
    return !!r || (null != i && "" !== i ? o.w.get(i) : !!e6.has(e) && r);
}
let ti = [
    e_.kqX.QUARANTINED,
    e_.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    e_.kqX.VIEWING_ROLES,
    e_.kqX.INVITED_TO_SPEAK,
    e_.kqX.LURKING_GUILD,
    e_.kqX.VOICE_DISABLED,
    e_.kqX.NO_INPUT_DEVICES_DETECTED,
    e_.kqX.NO_INPUT_DETECTED,
    e_.kqX.PTT_NO_KEYBIND_WARNING,
    e_.kqX.HARDWARE_MUTE,
    e_.kqX.DISPATCH_ERROR,
    e_.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    e_.kqX.SPOTIFY_AUTO_PAUSED,
    e_.kqX.WIN32_DEPRECATED_MESSAGE,
    e_.kqX.WIN7_8_DEPRECATED_MESSAGE,
    e_.kqX.WIN_COMPAT_MODE_MESSAGE,
    e_.kqX.MACOS_19_DEPRECATED_MESSAGE,
    e_.kqX.E2EE_UPDATE_REQUIRED,
    e_.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    e_.kqX.VOICE_CONNECTED_LAST_SESSION,
    e_.kqX.SYSTEM_SERVICE_WARNING,
    e_.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
    e_.kqX.GUILD_RAID_NOTIFICATION,
    e_.kqX.GIFTING_PROMOTION_REMINDER,
    e_.kqX.RIOT_MIGRATION,
    e_.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
    e_.kqX.QUESTS_PROGRESS_INTERRUPTION,
    e_.kqX.UNCLAIMED_ACCOUNT,
    e_.kqX.PENDING_MEMBER,
    e_.kqX.CHECKOUT_RECOVERY_NAGBAR,
    e_.kqX.PREMIUM_MARKETING_NAGBAR,
    e_.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
    e_.kqX.OUTBOUND_PROMOTION,
    e_.kqX.CORRUPT_INSTALLATION,
    e_.kqX.VIDEO_UNSUPPORTED_BROWSER,
    e_.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
    e_.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
    e_.kqX.STREAMER_MODE,
    e_.kqX.SCHEDULED_MAINTENANCE,
    e_.kqX.BOUNCED_EMAIL_DETECTED,
    e_.kqX.UNVERIFIED_ACCOUNT,
    e_.kqX.PREMIUM_TIER_2_TRIAL_ENDING,
    e_.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
    e_.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
    e_.kqX.PREMIUM_UNCANCEL,
    e_.kqX.PREMIUM_MISSING_PAYMENT,
    e_.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
    e_.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
    e_.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
    e_.kqX.PREMIUM_REACTIVATE,
    e_.kqX.PASSKEY_BACKUP,
    e_.kqX.APPLICATION_TEST_MODE,
    e_.kqX.QUEST_APP_UPSELL,
    e_.kqX.DOWNLOAD_NAG,
    e_.kqX.CONNECT_SPOTIFY,
    e_.kqX.CONNECT_PLAYSTATION,
    e_.kqX.SURVEY,
    e_.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
    e_.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
];
e_.kqX.QUARANTINED,
    e_.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    e_.kqX.VIEWING_ROLES,
    e_.kqX.INVITED_TO_SPEAK,
    e_.kqX.LURKING_GUILD,
    e_.kqX.VOICE_DISABLED,
    e_.kqX.NO_INPUT_DETECTED,
    e_.kqX.HARDWARE_MUTE,
    e_.kqX.DISPATCH_ERROR,
    e_.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    e_.kqX.SPOTIFY_AUTO_PAUSED,
    e_.kqX.VOICE_CONNECTED_LAST_SESSION,
    e_.kqX.PENDING_MEMBER,
    e_.kqX.STREAMER_MODE,
    e_.kqX.SCHEDULED_MAINTENANCE;
let tl = {
    [e_.kqX.GIFTING_PROMOTION_REMINDER]: { predicate: () => (0, X.MD)() },
    [e_.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, f.dj)().show && !tn(e_.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({ dismissUntil: l()().add(3, "hours").toDate() }),
    },
    [e_.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let i = eS.Ay.getMember(n, t.id);
            return null != i && !i.isPending && (0, M.TR)(i);
        },
    },
    [e_.kqX.QUARANTINED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t.hasFlag(e_.nhx.QUARANTINED);
        },
    },
    [e_.kqX.VIEWING_ROLES]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return x.A.isViewingRoles(t);
        },
    },
    [e_.kqX.INVITED_TO_SPEAK]: {
        predicate: (e) => {
            let { voiceState: t } = e;
            return (0, z.eY)(t) === z.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        },
    },
    [e_.kqX.LURKING_GUILD]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && U.A.isLurking(t);
        },
    },
    [e_.kqX.VOICE_DISABLED]: { predicate: () => null != eD.A.getRemoteDisconnectVoiceChannelId() },
    [e_.kqX.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != eD.A.getLastSessionVoiceChannelId() },
    [e_.kqX.NO_INPUT_DETECTED]: { predicate: () => p.A.hasActiveErrorOfType(C.iy.NO_AUDIO_INPUT_DETECTED) },
    [e_.kqX.NO_INPUT_DEVICES_DETECTED]: { predicate: () => p.A.hasActiveErrorOfType(C.iy.NO_INPUT_DEVICES) },
    [e_.kqX.HARDWARE_MUTE]: {
        predicate: () =>
            eD.A.isConnected() &&
            eh.Ay.isHardwareMute() &&
            eh.Ay.isHardwareMuteNoticeEnabled() &&
            !Z.Ay.disableHardwareMuteSilenceAlert,
        metadata: () => {
            let e = eh.Ay.getInputDeviceId(),
                t = el.A.getVendor(e),
                n = el.A.getModel(e);
            if (null != t && null != n) return { vendor: t, model: n };
        },
    },
    [e_.kqX.PTT_NO_KEYBIND_WARNING]: {
        predicate: () =>
            !!eD.A.isConnected() &&
            eh.Ay.getMode() === e_.TBI.PUSH_TO_TALK &&
            !(eh.Ay.getSettings().modeOptions.shortcut.length > 0) &&
            !!J.A.getConfig({ location: "NoticeStore" }).showPTTNoKeybindWarning,
    },
    [e_.kqX.DISPATCH_ERROR]: {
        predicate: () => null != eV.A.getLastError(),
        metadata: () => ({ error: eV.A.getLastError() }),
    },
    [e_.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != eH.A.getLastProgress(),
        metadata: () => eH.A.getLastProgress(),
    },
    [e_.kqX.SPOTIFY_AUTO_PAUSED]: { predicate: () => W.A.wasAutoPaused() },
    [e_.kqX.UNCLAIMED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return null != t && !t.isClaimed();
        },
    },
    [e_.kqX.PENDING_MEMBER]: {
        predicate: (e) => {
            let { selectedGuildId: t, currentUser: n } = e;
            return (
                (null != t &&
                    null != n &&
                    !eg.A.getGuild(t)?.features.has(e_.GuildFeatures.GUILD_ONBOARDING) &&
                    eS.Ay.getMember(t, n.id)?.isPending) ??
                !1
            );
        },
    },
    [e_.kqX.OUTBOUND_PROMOTION]: { predicate: () => (0, B.So)() },
    [e_.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => eB.isPlatformEmbedded && (!a.A.supported() || eY.A.isCorruptInstallation()),
    },
    [e_.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t && ev.A.hasVideo(t) && !eh.Ay.supports(eZ.O5.VIDEO) && !tn(e_.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
        },
    },
    [e_.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return k.Ay.canRedeemPremiumPerks(t) && ep.getDetectedOffPlatformPremiumPerks().length > 0;
        },
        metadata: () => ep.getDetectedOffPlatformPremiumPerks()[0],
    },
    [e_.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () =>
            !tn(e_.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && ep.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => ep.getDetectedOffPlatformPremiumPerks()[0],
    },
    [e_.kqX.STREAMER_MODE]: { predicate: () => ej.A.enabled },
    [e_.kqX.DOWNLOAD_NAG]: { predicate: () => !eB.isPlatformEmbedded && !tn(e_.kqX.DOWNLOAD_NAG) },
    [e_.kqX.QUEST_APP_UPSELL]: {
        predicate: () =>
            (0, eB.isOculusWeb)() && !tn(e_.kqX.QUEST_APP_UPSELL) && H.A.getConfig({ location: "NoticeStore" }).enabled,
    },
    [e_.kqX.SCHEDULED_MAINTENANCE]: {
        predicate: () => null != ey.A.getScheduledMaintenance(),
        metadata: () => {
            let e = ey.A.getScheduledMaintenance();
            if (null != e) return { id: e.id, start: new Date(e.scheduled_for), end: new Date(e.scheduled_until) };
        },
    },
    [e_.kqX.SURVEY]: { predicate: () => null != eL.Ay.getCurrentSurvey(), metadata: () => eL.Ay.getCurrentSurvey() },
    [e_.kqX.UNVERIFIED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.email != null && !t.verified;
        },
    },
    [e_.kqX.BOUNCED_EMAIL_DETECTED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.hasBouncedEmail;
        },
    },
    [e_.kqX.CONNECT_SPOTIFY]: {
        predicate: () =>
            !W.A.hasConnectedAccount() &&
            O.Ay.isObservedAppRunning(E.A.get(e_.fg2.SPOTIFY).name) &&
            !tn(e_.kqX.CONNECT_SPOTIFY),
    },
    [e_.kqX.WIN32_DEPRECATED_MESSAGE]: {
        predicate: () => u.A?.os.arch === "ia32" && u.A?.process.platform === "win32",
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [e_.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (u.A?.process.platform === "win32")
                try {
                    if (parseInt(u.A?.os.release.split(".")[0]) >= 10) return !1;
                    return !tt();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [e_.kqX.WIN_COMPAT_MODE_MESSAGE]: {
        predicate: () => {
            if (u.A?.process.platform === "win32")
                try {
                    if (parseInt(u.A?.os.release.split(".")[0]) >= 10) return !1;
                    return tt();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [e_.kqX.MACOS_19_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (u.A?.process.platform === "darwin")
                try {
                    return 20 > parseInt(u.A?.os.release.split(".")[0]);
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [e_.kqX.CONNECT_PLAYSTATION]: {
        predicate: () =>
            es.A.isSuggestedAccountType(e_.fg2.PLAYSTATION) &&
            null == es.A.getAccount(null, e_.fg2.PLAYSTATION) &&
            !tn(e_.kqX.CONNECT_PLAYSTATION),
    },
    [e_.kqX.PASSKEY_BACKUP]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.mfaEnabled && ee.A.hasFetchedCredentials() && !ee.A.hasCredentials && !tn(e_.kqX.PASSKEY_BACKUP);
        },
    },
    [e_.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () =>
            eX.A.getAlmostExpiringTrialOffersForReminder([eK.pe.TIER_2]).length > 0 &&
            !tn(e_.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
    },
    [e_.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () =>
            eX.A.getAlmostExpiringTrialOffersForReminder([eK.pe.TIER_0]).length > 0 &&
            !tn(e_.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
    },
    [e_.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () =>
            eX.A.getAlmostExpiringDiscountOffersForReminder([eK.pe.TIER_2]).length > 0 &&
            !tn(e_.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
    },
    [e_.kqX.PREMIUM_UNCANCEL]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                r =
                    t?.canceledAt != null &&
                    t?.status === e_.Dmq.CANCELED &&
                    1 >= l()().diff(l()(t.canceledAt), "days"),
                s = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                a =
                    null != t &&
                    t.status === e_.Dmq.CANCELED &&
                    !s &&
                    i <= 7 &&
                    i >= 0 &&
                    (0, k.YE)(n, eK.PremiumTypes.TIER_2) &&
                    !r &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tn(e_.kqX.PREMIUM_UNCANCEL) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                i = null != t ? (0, k.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? k.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [e_.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                r = null != t ? l()(t.currentPeriodEnd).diff(l()(t.currentPeriodStart).startOf("day"), "days") : 0,
                s = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                a = eE.A.applicationIdsFetched.has(eK.tv),
                c = eE.A.getForApplication(eK.tv),
                o = null != t ? (0, k.EL)(t) : null,
                d = null != o ? k.Ay.getSkuIdForPlan(o.planId) : null,
                u =
                    null != c &&
                    null != o &&
                    Array.from(c).filter((e) => {
                        let { skuId: t, consumed: n } = e;
                        return !n && t === d;
                    }).length > 0,
                E =
                    null != t &&
                    i <= (r > 14 ? 7 : 2) &&
                    i >= 0 &&
                    t.status !== e_.Dmq.PAST_DUE &&
                    !s &&
                    a &&
                    !u &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tn(e_.kqX.PREMIUM_MISSING_PAYMENT) && E;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                i = null != t ? (0, k.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? k.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [e_.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && null != t.paymentSourceId ? eb.A.getPaymentSource(t.paymentSourceId) : null,
                r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                s =
                    null != t &&
                    t.status === e_.Dmq.PAST_DUE &&
                    !r &&
                    null != i &&
                    i.invalid &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tn(e_.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [e_.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                r =
                    null != t &&
                    t.status === e_.Dmq.PAST_DUE &&
                    !i &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tn(e_.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && r;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [e_.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != eq.A.testModeApplicationId,
        metadata: () => {
            if (null == eq.A.testModeApplicationId) return {};
            let e = eq.A.testModeApplicationId,
                t = T.A.getApplication(e);
            return { applicationName: null != t ? t.name : e, applicationId: e };
        },
    },
    [e_.kqX.PREMIUM_REACTIVATE]: { predicate: () => !tn(e_.kqX.PREMIUM_REACTIVATE) && G.shouldShowReactivateNotice() },
    [e_.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                r = null != t && null != t.paymentSourceId ? eb.A.getPaymentSource(t.paymentSourceId) : null,
                s = null != r && e$.AD.has(r.type),
                a =
                    null != t &&
                    t.status === e_.Dmq.PAST_DUE &&
                    !i &&
                    s &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tn(e_.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return null == t
                ? { daysPastDue: 0, dismissUntil: l()().toDate() }
                : {
                      daysPastDue: t.status === e_.Dmq.PAST_DUE ? l()().diff(t.currentPeriodStart, "days") : 0,
                      dismissUntil: (0, k.ji)(t).expiresDate.toDate(),
                  };
        },
    },
    [e_.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e,
                n = null != t ? eg.A.getGuild(t) : null;
            return (
                (null != t &&
                    null != D.A.getMentionRaidDetected(t) &&
                    n?.features.has(e_.GuildFeatures.COMMUNITY) &&
                    !tn(e_.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
                !1
            );
        },
        metadata: (e) => {
            let { selectedGuildId: t } = e,
                n = { dismissUntil: l()().add(2, "hours").toDate() };
            if (null != t) {
                let e = D.A.getMentionRaidDetected(t);
                null != e && (n.decisionId = e.decisionId);
            }
            return n;
        },
    },
    [e_.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = et.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, h._z)(e),
                n = Y.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= ez.tZ;
        },
        metadata: () => {
            let e = et.A.getCurrentUserActiveStream();
            return { streamKey: null != e ? (0, h._z)(e) : null };
        },
    },
    [e_.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eb.A.paymentSources ?? {};
            return y.A.getIsTargeted() && !(0, k.TW)(t) && 0 !== Object.keys(n).length;
        },
    },
    [e_.kqX.PREMIUM_MARKETING_NAGBAR]: {
        predicate: () => {
            let e = w.A.getMarketingComponentByType(r.C.NAGBAR);
            if (null == e) return !1;
            if (null == e.promotionId) return !0;
            let t = w.A.getPromotionByTypeAndId(V.pt.MARKETING_MOMENT, e.promotionId);
            return (
                !(null != t && t.endDate < new Date()) &&
                !(0, N.u$)(c.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, e.promotionId).isDismissed
            );
        },
    },
    [e_.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eG.A.getPremiumGroupSubscription();
            if (null == n) return !1;
            let i = q.A.hasFetchedMembers(),
                l = q.A.getNumAvailableInvites();
            return (0, F.ux)(t, n) && i && l >= eW.Vu;
        },
        metadata: () => ({ premiumSubscription: eG.A.getPremiumGroupSubscription() }),
    },
    [e_.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !tn(e_.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && K.Cm(),
        metadata: () => ({ dismissUntil: l()().add(180, "days").toDate(), sampleRate: 0.1 }),
    },
    [e_.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: { predicate: () => K.h6(), metadata: () => ({ sampleRate: 0.1 }) },
    [e_.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
                tn(e_.kqX.SYSTEM_SERVICE_WARNING) ||
                !(0, $.yA)(O.Ay) ||
                null == t ||
                eh.Ay.getMode() !== e_.TBI.PUSH_TO_TALK
            )
                return !1;
            let n = O.Ay.getVisibleGame();
            return null != n && !!n.elevated;
        },
    },
    [e_.kqX.E2EE_UPDATE_REQUIRED]: {
        predicate: () => {
            if (tn(e_.kqX.E2EE_UPDATE_REQUIRED) || !eD.A.isConnected()) return !1;
            let e = eh.Ay.getMediaEngine();
            return 1 !== (e.getSupportedSecureFramesProtocolVersion?.() ?? 0);
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [e_.kqX.WINDOWS_MEDIA_PACK_REQUIRED]: {
        predicate: () =>
            !(
                !eB.isPlatformEmbedded ||
                u.A?.process.platform !== "win32" ||
                tn(e_.kqX.WINDOWS_MEDIA_PACK_REQUIRED) ||
                ew.Ay.getEnableHardwareAcceleration()
            ) && !1 === eh.Ay.isH264MfDecodeAvailable(),
    },
    [e_.kqX.RIOT_MIGRATION]: {
        predicate: () => {
            if (!(0, A.getIsRiotSocialSDKMigrationEnabled)({ location: "NoticeStore" })) return !1;
            let e = null != es.A.getAccount(null, e_.fg2.RIOT_GAMES),
                t = null != es.A.getAccount(null, e_.fg2.LEAGUE_OF_LEGENDS);
            if (tn(e_.kqX.RIOT_MIGRATION) || (0, N.k8)(c.M.RIOT_CONNECTION_DEPRECATION_DISABLE) || (!e && !t))
                return !1;
            let n = E.A.get(e_.fg2.LEAGUE_OF_LEGENDS),
                i = E.A.get(e_.fg2.RIOT_GAMES);
            return null != n.replacedBy && null != i.replacedBy;
        },
    },
    [e_.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (
                !(0, A.getIsRiotSocialSDKMigrationEnabled)({ location: "NoticeStore" }) ||
                tn(e_.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN) ||
                (0, N.k8)(c.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE)
            )
                return !1;
            let i = null != n ? eg.A.getGuild(n) : null,
                l = (0, eF.$3)({ permission: e_.xBc.ADMINISTRATOR, user: t, context: i }),
                r = null != i ? eO.A.getSortedRoles(i.id).filter((e) => null === e.tags.guild_connections) : null;
            return null != i && !!l && null != r && !!(0, _.D)(r);
        },
    },
};
function tr() {
    if (!g.A.isConnected()) return !1;
    e8 = null;
    let e = L.default.getCurrentUser();
    if (null == e) return !1;
    let t = eG.A.getPremiumSubscription(),
        n = eU.A.getGuildId(),
        i = ex.A.getVoiceChannelId(),
        l = null != i ? ev.A.getVoiceStateForChannel(i) : null;
    for (let r of ti)
        if (
            null != tl[r] &&
            tl[r].predicate({
                selectedGuildId: n,
                voiceChannelId: i,
                voiceState: l,
                currentUser: e,
                premiumSubscription: t,
            })
        ) {
            let i = tl[r].metadata?.({ currentUser: e, premiumSubscription: t, selectedGuildId: n });
            e8 = { ...e9, type: r, metadata: i };
            break;
        }
    if (null != e8) {
        e8.metadata?.sampleRate != null &&
            null == e5[e8.type] &&
            (e5[e8.type] = Math.random() <= e8.metadata.sampleRate);
        let e = !1 === e5[e8.type];
        (tn(e8.type) || e) && (e8 = null);
    }
}
function ts() {
    return ej.A.enabled || delete e7[e_.kqX.STREAMER_MODE], tr();
}
class ta extends s.Ay.Store {
    static displayName = "NoticeStore";
    initialize() {
        this.syncWith(
            [p.A, eL.Ay, eM.A, ep, eU.A, w.A, eX.A, ei.default, es.A, Q.A, P.A, Y.A, et.A, O.Ay, ee.A, p.A, I.A],
            tr,
        ),
            this.waitFor(
                p.A,
                T.A,
                et.A,
                en.default,
                ei.default,
                el.A,
                er.A,
                y.A,
                es.A,
                ep,
                eV.A,
                eH.A,
                eY.A,
                eE.A,
                S.A,
                g.A,
                D.A,
                P.A,
                eS.Ay,
                I.A,
                eO.A,
                eg.A,
                x.A,
                U.A,
                eh.Ay,
                ef.A,
                eb.A,
                eP.A,
                q.A,
                eM.A,
                w.A,
                Y.A,
                eD.A,
                O.Ay,
                ex.A,
                eU.A,
                W.A,
                ey.A,
                ej.A,
                G,
                eG.A,
                eL.Ay,
                eq.A,
                Z.Ay,
                eX.A,
                ek.A,
                Q.A,
                L.default,
                ev.A,
                ee.A,
            );
    }
    hasNotice() {
        return null != e8 && null != e8.type;
    }
    getNotice() {
        return null == ek.A.getAction() ? e8 : null;
    }
    isNoticeDismissed(e) {
        return tn(e);
    }
}
let tc = new ta(d.h, {
    CURRENT_USER_UPDATE: tr,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: tr,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: tr,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: tr,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: tr,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: tr,
    GUILD_CREATE: tr,
    GUILD_DELETE: tr,
    AUDIO_INPUT_DETECTED: tr,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: tr,
    CERTIFIED_DEVICES_SET: tr,
    AUDIO_SET_INPUT_DEVICE: tr,
    AUDIO_SET_OUTPUT_DEVICE: tr,
    MEDIA_ENGINE_DEVICES: tr,
    RTC_CONNECTION_STATE: tr,
    RPC_APP_AUTHENTICATED: tr,
    RPC_APP_DISCONNECTED: tr,
    USER_CONNECTIONS_UPDATE: tr,
    WINDOW_FOCUS: tr,
    INSTANT_INVITE_CREATE: tr,
    INSTANT_INVITE_REVOKE_SUCCESS: tr,
    SPOTIFY_PLAYER_PAUSE: tr,
    RUNNING_GAMES_CHANGE: tr,
    EXPERIMENTS_FETCH_SUCCESS: tr,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: tr,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: tr,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: tr,
    DEVELOPER_TEST_MODE_RESET: tr,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: tr,
    DISPATCH_APPLICATION_INSTALL: tr,
    IMPERSONATE_STOP: tr,
    IMPERSONATE_UPDATE: tr,
    GUILD_MEMBER_ADD: function (e) {
        return e.user.id === en.default.getId() && tr();
    },
    GUILD_MEMBER_UPDATE: tr,
    SURVEY_FETCHED: tr,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: tr,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: tr,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: tr,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: tr,
    UNSYNCED_USER_SETTINGS_UPDATE: tr,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return (
            (e8?.type === e_.kqX.INVITED_TO_SPEAK ||
                t.some((e) => {
                    let { userId: t } = e;
                    return t !== en.default.getId();
                })) &&
            tr()
        );
    },
    STREAMER_MODE_UPDATE: ts,
    RUNNING_STREAMER_TOOLS_CHANGE: ts,
    DISPATCH_APPLICATION_ERROR: function () {
        return delete e7[e_.kqX.DISPATCH_ERROR], tr();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return delete e7[e_.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], tr();
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return tr();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return tr();
    },
    NOTICE_SHOW: function (e) {
        e8 = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != e8 && (null == e.id || e.id === e8.id) && (e4(e8.type, e.isTemporary, e.untilAtLeast), tr());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return e4(t), tr();
    },
    LOGOUT: function () {
        (e7 = {}), (e5 = {}), (e8 = null);
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: tr,
    AUTO_MODERATION_MENTION_RAID_DETECTION: tr,
    REPORT_AV_ERROR: tr,
    ACTIVE_AV_ERRORS_CHANGED: tr,
    MEDIA_ENGINE_MF_AVAILABILITY_CHECKED: tr,
    AUDIO_SET_MODE: tr,
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: tr,
});
