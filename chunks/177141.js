n.d(t, { f7: () => e1, Re: () => e0, Ay: () => tE, pe: () => ez, rV: () => eJ });
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
    A = n(941314),
    T = n(380786),
    d = n(587895),
    I = n(145643),
    N = n(826673),
    R = n(367727),
    S = n(385163),
    O = n(487329),
    C = n(161518),
    P = n(736056),
    D = n(952818),
    M = n(617710),
    p = n(652896),
    m = n(585510),
    h = n(610136),
    U = n(229527),
    g = n(93474),
    f = n(164956),
    k = n(857071),
    y = n(869968),
    L = n(243217),
    x = n(287809),
    G = n(428262);
let j = !1;
class q extends s.Ay.Store {
    initialize() {
        this.waitFor(x.default);
    }
    static displayName = "SubscriptionRemindersStore";
    shouldShowReactivateNotice() {
        let e = x.default.getCurrentUser();
        return !(0, G.TW)(e) && j;
    }
}
let v = new q(c.h, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let { subscription: t } = e;
        if (null != t) {
            let e = L.A.createFromServer(t);
            if (null == (0, G.EL)(e) || e.metadata?.ended_at == null) return;
            let n = l()(e.metadata.ended_at);
            l()().isBetween(n.clone().add(4, "days"), n.clone().add(11, "days")) && (j = !0);
        }
    },
});
var X = n(380619),
    b = n(233317),
    B = n(862990),
    F = n(264779),
    w = n(374200),
    H = n(852218),
    V = n(160394),
    Y = n(859703),
    W = n(988903),
    K = n(655116),
    $ = n(105530),
    Q = n(935671),
    Z = n(742023),
    z = n(617617),
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
    eE = n.n(ea),
    eo = n(339048),
    ec = n(830382),
    e_ = n(627363),
    eu = n(469778),
    eA = n(67480),
    eT = n(652215);
let ed = "DetectedOffPlatformPremiumPerksStore",
    eI = {},
    eN = {},
    eR = [];
function eS() {
    let e = !1;
    for (let { skuId: t, applicationId: n } of eE().values(eN)) {
        if (eR.includes(t)) continue;
        let i = d.A.getApplication(n);
        if (null == i) {
            d.A.isFetchingApplication(n) || d.A.didFetchingApplicationFail(n) || e_.Ay.fetchApplication(n);
            continue;
        }
        let l = eA.A.get(t);
        if (null == l) {
            eA.A.isFetching(t) || eA.A.didFetchingSkuFail(t) || ec.EX(i.id, t);
            continue;
        }
        eu.A.applicationIdsFetching.has(i.id) ||
        eu.A.isEntitledToSku(x.default.getCurrentUser(), t, i.id, i.id) ||
        !l.available
            ? null != eI[t] && (delete eI[t], (e = !0))
            : ((eI[t] = { skuId: t, applicationId: n }), (e = !0));
    }
    return e;
}
class eO extends s.Ay.Store {
    static displayName = "DetectedOffPlatformPremiumPerksStore";
    initialize() {
        this.waitFor(d.A, eu.A, D.Ay, eA.A, x.default), (eR = o.w.get(ed) ?? eR);
    }
    getDetectedOffPlatformPremiumPerks() {
        return eE().values(eI);
    }
}
let eC = new eO(c.h, {
    LOGOUT: function () {
        (eI = {}), (eN = {});
    },
    SKU_FETCH_SUCCESS: eS,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eS,
    ENTITLEMENT_CREATE: eS,
    APPLICATION_FETCH_SUCCESS: eS,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let { skuId: t } = e;
        if ((delete eI[t], eR.includes(t))) return !1;
        eR.push(t), o.w.set(ed, eR);
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
        return e && eS(), e;
    },
});
var eP = n(696451),
    eD = n(317525),
    eM = n(71393),
    ep = n(136491),
    em = n(803224),
    eh = n(576705),
    eU = n(362790),
    eg = n(763827),
    ef = n(309010),
    ek = n(967198),
    ey = n(437959),
    eL = n(351906),
    ex = n(274184),
    eG = n(870570),
    ej = n(977997),
    eq = n(295405),
    ev = n(166403),
    eX = n(354670),
    eb = n(147964),
    eB = n(488926),
    eF = n(723702),
    ew = n(19575),
    eH = n(755439),
    eV = n(422033),
    eY = n(966846);
n(436317);
var eW = n(788868),
    eK = n(88001),
    e$ = n(190107),
    eQ = n(818348),
    eZ = n(731854);
let ez = {
        [eT.kqX.DOWNLOAD_NAG]: E.M.NAGBAR_NOTICE_DOWNLOAD,
        [eT.kqX.CONNECT_SPOTIFY]: E.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eT.kqX.CONNECT_PLAYSTATION]: E.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eT.kqX.PASSKEY_BACKUP]: E.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [eT.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: E.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eT.kqX.PREMIUM_REACTIVATE]: E.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eT.kqX.BOUNCED_EMAIL_DETECTED]: E.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eT.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: E.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eT.kqX.CHECKOUT_RECOVERY_NAGBAR]: E.M.CHECKOUT_RECOVERY_NAGBAR,
        [eT.kqX.QUEST_APP_UPSELL]: E.M.NAGBAR_QUEST_APP_UPSELL,
        [eT.kqX.RIOT_MIGRATION]: E.M.RIOT_CONNECTION_DEPRECATION_DISABLE,
        [eT.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: E.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
    },
    eJ = { [eT.kqX.GIFTING_PROMOTION_REMINDER]: E.M.GIFTING_PROMOTION_REMINDER },
    e0 = {
        [eT.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: E.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eT.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: E.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eT.kqX.RIOT_MIGRATION]: E.M.RIOT_CONNECTION_DEPRECATION,
        [eT.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: E.M.RIOT_CONNECTION_DEPRECATION_ADMIN,
    },
    e1 = { [eT.kqX.OUTBOUND_PROMOTION]: E.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    e2 = {
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
        [eT.kqX.MACOS_19_DEPRECATED_MESSAGE]: "hideMacOS19DeprecationMessageNotice",
        [eT.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
        [eT.kqX.E2EE_UPDATE_REQUIRED]: "hideE2EEUpdateRequiredNotice",
    },
    e5 = new Set([
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
    e6 = {},
    e3 = {},
    e7 = Object.freeze({ id: null, message: null, buttonText: null, callback: void 0, metadata: null }),
    e8 = null;
function e4(e) {
    return e2[e] + "-untilAtLeast";
}
function e9(e, t, n) {
    if (null == e) return;
    let i = e2[e];
    (null == i || t || o.w.set(i, !0), e5.has(e) && (e6[e] = !0), null != n && null != i)
        ? o.w.set(e4(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
        : o.w.remove(e4(e));
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
        let n = (0, S.D)(e);
        return (0, R.FZ)(t, n).isDismissed;
    }
    let n = ez[e];
    if (null != n) return (0, N.k8)(n);
    let i = e2[e];
    if (null != i) {
        let t,
            n = null != (t = o.w.get(e4(e))) ? l()(t) : null;
        if (null != n) return n?.isAfter(l()());
    }
    let r = e6[e];
    return !!r || (null != i && "" !== i ? o.w.get(i) : !!e5.has(e) && r);
}
let ti = [
    eT.kqX.QUARANTINED,
    eT.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eT.kqX.VIEWING_ROLES,
    eT.kqX.INVITED_TO_SPEAK,
    eT.kqX.LURKING_GUILD,
    eT.kqX.VOICE_DISABLED,
    eT.kqX.NO_INPUT_DEVICES_DETECTED,
    eT.kqX.NO_INPUT_DETECTED,
    eT.kqX.PTT_NO_KEYBIND_WARNING,
    eT.kqX.HARDWARE_MUTE,
    eT.kqX.DISPATCH_ERROR,
    eT.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eT.kqX.SPOTIFY_AUTO_PAUSED,
    eT.kqX.WIN32_DEPRECATED_MESSAGE,
    eT.kqX.WIN7_8_DEPRECATED_MESSAGE,
    eT.kqX.WIN_COMPAT_MODE_MESSAGE,
    eT.kqX.MACOS_19_DEPRECATED_MESSAGE,
    eT.kqX.E2EE_UPDATE_REQUIRED,
    eT.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
    eT.kqX.VOICE_CONNECTED_LAST_SESSION,
    eT.kqX.SYSTEM_SERVICE_WARNING,
    eT.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
    eT.kqX.GUILD_RAID_NOTIFICATION,
    eT.kqX.GIFTING_PROMOTION_REMINDER,
    eT.kqX.RIOT_MIGRATION,
    eT.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
    eT.kqX.QUESTS_PROGRESS_INTERRUPTION,
    eT.kqX.UNCLAIMED_ACCOUNT,
    eT.kqX.PENDING_MEMBER,
    eT.kqX.CHECKOUT_RECOVERY_NAGBAR,
    eT.kqX.PREMIUM_MARKETING_NAGBAR,
    eT.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
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
    eT.kqX.CONNECT_PLAYSTATION,
    eT.kqX.SURVEY,
    eT.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
    eT.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
];
eT.kqX.QUARANTINED,
    eT.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eT.kqX.VIEWING_ROLES,
    eT.kqX.INVITED_TO_SPEAK,
    eT.kqX.LURKING_GUILD,
    eT.kqX.VOICE_DISABLED,
    eT.kqX.NO_INPUT_DETECTED,
    eT.kqX.HARDWARE_MUTE,
    eT.kqX.DISPATCH_ERROR,
    eT.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eT.kqX.SPOTIFY_AUTO_PAUSED,
    eT.kqX.VOICE_CONNECTED_LAST_SESSION,
    eT.kqX.PENDING_MEMBER,
    eT.kqX.STREAMER_MODE,
    eT.kqX.SCHEDULED_MAINTENANCE;
let tl = {
    [eT.kqX.GIFTING_PROMOTION_REMINDER]: { predicate: () => (0, X.MD)() },
    [eT.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, m.dj)().show && !tn(eT.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({ dismissUntil: l()().add(3, "hours").toDate() }),
    },
    [eT.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let i = eP.Ay.getMember(n, t.id);
            return null != i && !i.isPending && (0, U.TR)(i);
        },
    },
    [eT.kqX.QUARANTINED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t.hasFlag(eT.nhx.QUARANTINED);
        },
    },
    [eT.kqX.VIEWING_ROLES]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return f.A.isViewingRoles(t);
        },
    },
    [eT.kqX.INVITED_TO_SPEAK]: {
        predicate: (e) => {
            let { voiceState: t } = e;
            return (0, $.eY)(t) === $.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        },
    },
    [eT.kqX.LURKING_GUILD]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && k.A.isLurking(t);
        },
    },
    [eT.kqX.VOICE_DISABLED]: { predicate: () => null != eg.A.getRemoteDisconnectVoiceChannelId() },
    [eT.kqX.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != eg.A.getLastSessionVoiceChannelId() },
    [eT.kqX.NO_INPUT_DETECTED]: { predicate: () => C.A.hasActiveErrorOfType(O.iy.NO_AUDIO_INPUT_DETECTED) },
    [eT.kqX.NO_INPUT_DEVICES_DETECTED]: { predicate: () => C.A.hasActiveErrorOfType(O.iy.NO_INPUT_DEVICES) },
    [eT.kqX.HARDWARE_MUTE]: {
        predicate: () =>
            eg.A.isConnected() &&
            ep.Ay.isHardwareMute() &&
            ep.Ay.isHardwareMuteNoticeEnabled() &&
            !Z.Ay.disableHardwareMuteSilenceAlert,
        metadata: () => {
            let e = ep.Ay.getInputDeviceId(),
                t = el.A.getVendor(e),
                n = el.A.getModel(e);
            if (null != t && null != n) return { vendor: t, model: n };
        },
    },
    [eT.kqX.PTT_NO_KEYBIND_WARNING]: {
        predicate: () =>
            !!eg.A.isConnected() &&
            ep.Ay.getMode() === eT.TBI.PUSH_TO_TALK &&
            !(ep.Ay.getSettings().modeOptions.shortcut.length > 0) &&
            !!J.A.getConfig({ location: "NoticeStore" }).showPTTNoKeybindWarning,
    },
    [eT.kqX.DISPATCH_ERROR]: {
        predicate: () => null != eH.A.getLastError(),
        metadata: () => ({ error: eH.A.getLastError() }),
    },
    [eT.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != eV.A.getLastProgress(),
        metadata: () => eV.A.getLastProgress(),
    },
    [eT.kqX.SPOTIFY_AUTO_PAUSED]: { predicate: () => K.A.wasAutoPaused() },
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
                    eP.Ay.getMember(t, n.id)?.isPending) ??
                !1
            );
        },
    },
    [eT.kqX.OUTBOUND_PROMOTION]: { predicate: () => (0, F.So)() },
    [eT.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => eF.isPlatformEmbedded && (!a.A.supported() || eY.A.isCorruptInstallation()),
    },
    [eT.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t && ej.A.hasVideo(t) && !ep.Ay.supports(eZ.O5.VIDEO) && !tn(eT.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
        },
    },
    [eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return G.Ay.canRedeemPremiumPerks(t) && eC.getDetectedOffPlatformPremiumPerks().length > 0;
        },
        metadata: () => eC.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () =>
            !tn(eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && eC.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => eC.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eT.kqX.STREAMER_MODE]: { predicate: () => eL.A.enabled },
    [eT.kqX.DOWNLOAD_NAG]: { predicate: () => !eF.isPlatformEmbedded && !tn(eT.kqX.DOWNLOAD_NAG) },
    [eT.kqX.QUEST_APP_UPSELL]: {
        predicate: () =>
            (0, eF.isOculusWeb)() && !tn(eT.kqX.QUEST_APP_UPSELL) && V.A.getConfig({ location: "NoticeStore" }).enabled,
    },
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
            !K.A.hasConnectedAccount() &&
            D.Ay.isObservedAppRunning(u.A.get(eT.fg2.SPOTIFY).name) &&
            !tn(eT.kqX.CONNECT_SPOTIFY),
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
                    return !tt();
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
                    return tt();
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eT.kqX.MACOS_19_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (_.A?.process.platform === "darwin")
                try {
                    return 20 > parseInt(_.A?.os.release.split(".")[0]);
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eT.kqX.CONNECT_PLAYSTATION]: {
        predicate: () =>
            es.A.isSuggestedAccountType(eT.fg2.PLAYSTATION) &&
            null == es.A.getAccount(null, eT.fg2.PLAYSTATION) &&
            !tn(eT.kqX.CONNECT_PLAYSTATION),
    },
    [eT.kqX.PASSKEY_BACKUP]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t?.mfaEnabled && ee.A.hasFetchedCredentials() && !ee.A.hasCredentials && !tn(eT.kqX.PASSKEY_BACKUP);
        },
    },
    [eT.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () =>
            eX.A.getAlmostExpiringTrialOffersForReminder([eW.pe.TIER_2]).length > 0 &&
            !tn(eT.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
    },
    [eT.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () =>
            eX.A.getAlmostExpiringTrialOffersForReminder([eW.pe.TIER_0]).length > 0 &&
            !tn(eT.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
    },
    [eT.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () =>
            eX.A.getAlmostExpiringDiscountOffersForReminder([eW.pe.TIER_2]).length > 0 &&
            !tn(eT.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
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
                    (0, G.YE)(n, eW.PremiumTypes.TIER_2) &&
                    !r &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tn(eT.kqX.PREMIUM_UNCANCEL) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                i = null != t ? (0, G.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? G.Ay.getPremiumType(i) : null, premiumSubscription: t };
        },
    },
    [eT.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                r = null != t ? l()(t.currentPeriodEnd).diff(l()(t.currentPeriodStart).startOf("day"), "days") : 0,
                s = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                a = eu.A.applicationIdsFetched.has(eW.tv),
                E = eu.A.getForApplication(eW.tv),
                o = null != t ? (0, G.EL)(t) : null,
                c = null != o ? G.Ay.getSkuIdForPlan(o.planId) : null,
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
            return !tn(eT.kqX.PREMIUM_MISSING_PAYMENT) && u;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e,
                n = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0,
                i = null != t ? (0, G.EL)(t)?.planId : null;
            return { daysLeft: n, premiumType: null != i ? G.Ay.getPremiumType(i) : null, premiumSubscription: t };
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
            return !tn(eT.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s;
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
            return !tn(eT.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && r;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eT.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != eb.A.testModeApplicationId,
        metadata: () => {
            if (null == eb.A.testModeApplicationId) return {};
            let e = eb.A.testModeApplicationId,
                t = d.A.getApplication(e);
            return { applicationName: null != t ? t.name : e, applicationId: e };
        },
    },
    [eT.kqX.PREMIUM_REACTIVATE]: { predicate: () => !tn(eT.kqX.PREMIUM_REACTIVATE) && v.shouldShowReactivateNotice() },
    [eT.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                r = null != t && null != t.paymentSourceId ? eq.A.getPaymentSource(t.paymentSourceId) : null,
                s = null != r && eQ.AD.has(r.type),
                a =
                    null != t &&
                    t.status === eT.Dmq.PAST_DUE &&
                    !i &&
                    s &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !tn(eT.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && a;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return null == t
                ? { daysPastDue: 0, dismissUntil: l()().toDate() }
                : {
                      daysPastDue: t.status === eT.Dmq.PAST_DUE ? l()().diff(t.currentPeriodStart, "days") : 0,
                      dismissUntil: (0, G.ji)(t).expiresDate.toDate(),
                  };
        },
    },
    [eT.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e,
                n = null != t ? eM.A.getGuild(t) : null;
            return (
                (null != t &&
                    null != g.A.getMentionRaidDetected(t) &&
                    n?.features.has(eT.GuildFeatures.COMMUNITY) &&
                    !tn(eT.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
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
    [eT.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = et.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, p._z)(e),
                n = Y.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= e$.tZ;
        },
        metadata: () => {
            let e = et.A.getCurrentUserActiveStream();
            return { streamKey: null != e ? (0, p._z)(e) : null };
        },
    },
    [eT.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = eq.A.paymentSources ?? {};
            return y.A.getIsTargeted() && !(0, G.TW)(t) && 0 !== Object.keys(n).length;
        },
    },
    [eT.kqX.PREMIUM_MARKETING_NAGBAR]: {
        predicate: () => {
            let e = w.A.getMarketingComponentByType(r.C.NAGBAR);
            if (null == e) return !1;
            if (null == e.promotionId) return !0;
            let t = w.A.getPromotionByTypeAndId(H.pt.MARKETING_MOMENT, e.promotionId);
            return (
                !(null != t && t.endDate < new Date()) &&
                !(0, N.u$)(E.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, e.promotionId).isDismissed
            );
        },
    },
    [eT.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e,
                n = ev.A.getPremiumGroupSubscription();
            if (null == n) return !1;
            let i = b.A.hasFetchedMembers(),
                l = b.A.getNumAvailableInvites();
            return (0, B.ux)(t, n) && i && l >= eK.Vu;
        },
        metadata: () => ({ premiumSubscription: ev.A.getPremiumGroupSubscription() }),
    },
    [eT.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !tn(eT.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && W.Cm(),
        metadata: () => ({ dismissUntil: l()().add(180, "days").toDate(), sampleRate: 0.1 }),
    },
    [eT.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: { predicate: () => W.h6(), metadata: () => ({ sampleRate: 0.1 }) },
    [eT.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
                tn(eT.kqX.SYSTEM_SERVICE_WARNING) ||
                !(0, Q.yA)(D.Ay) ||
                null == t ||
                ep.Ay.getMode() !== eT.TBI.PUSH_TO_TALK
            )
                return !1;
            let n = D.Ay.getVisibleGame();
            return null != n && !!n.elevated;
        },
    },
    [eT.kqX.E2EE_UPDATE_REQUIRED]: {
        predicate: () => {
            if (tn(eT.kqX.E2EE_UPDATE_REQUIRED) || !eg.A.isConnected()) return !1;
            let e = ep.Ay.getMediaEngine();
            return 1 !== (e.getSupportedSecureFramesProtocolVersion?.() ?? 0);
        },
        metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
    },
    [eT.kqX.WINDOWS_MEDIA_PACK_REQUIRED]: {
        predicate: () =>
            !(
                !eF.isPlatformEmbedded ||
                _.A?.process.platform !== "win32" ||
                tn(eT.kqX.WINDOWS_MEDIA_PACK_REQUIRED) ||
                ew.Ay.getEnableHardwareAcceleration()
            ) && !1 === ep.Ay.isH264MfDecodeAvailable(),
    },
    [eT.kqX.RIOT_MIGRATION]: {
        predicate: () => {
            if (!(0, A.getIsRiotSocialSDKMigrationEnabled)({ location: "NoticeStore" })) return !1;
            let e = null != es.A.getAccount(null, eT.fg2.RIOT_GAMES),
                t = null != es.A.getAccount(null, eT.fg2.LEAGUE_OF_LEGENDS);
            if (tn(eT.kqX.RIOT_MIGRATION) || (0, N.k8)(E.M.RIOT_CONNECTION_DEPRECATION_DISABLE) || (!e && !t))
                return !1;
            let n = u.A.get(eT.fg2.LEAGUE_OF_LEGENDS),
                i = u.A.get(eT.fg2.RIOT_GAMES);
            return null != n.replacedBy && null != i.replacedBy;
        },
    },
    [eT.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (
                !(0, A.getIsRiotSocialSDKMigrationEnabled)({ location: "NoticeStore" }) ||
                tn(eT.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN) ||
                (0, N.k8)(E.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE)
            )
                return !1;
            let i = null != n ? eM.A.getGuild(n) : null,
                l = (0, eB.$3)({ permission: eT.xBc.ADMINISTRATOR, user: t, context: i }),
                r = null != i ? eD.A.getSortedRoles(i.id).filter((e) => null === e.tags.guild_connections) : null;
            return null != i && !!l && null != r && !!(0, T.D)(r);
        },
    },
};
function tr() {
    if (!M.A.isConnected()) return !1;
    e8 = null;
    let e = x.default.getCurrentUser();
    if (null == e) return !1;
    let t = ev.A.getPremiumSubscription(),
        n = ek.A.getGuildId(),
        i = ef.A.getVoiceChannelId(),
        l = null != i ? ej.A.getVoiceStateForChannel(i) : null;
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
            e8 = { ...e7, type: r, metadata: i };
            break;
        }
    if (null != e8) {
        e8.metadata?.sampleRate != null &&
            null == e3[e8.type] &&
            (e3[e8.type] = Math.random() <= e8.metadata.sampleRate);
        let e = !1 === e3[e8.type];
        (tn(e8.type) || e) && (e8 = null);
    }
}
function ts() {
    return eL.A.enabled || delete e6[eT.kqX.STREAMER_MODE], tr();
}
class ta extends s.Ay.Store {
    static displayName = "NoticeStore";
    initialize() {
        this.syncWith(
            [C.A, ex.Ay, eU.A, eC, ek.A, w.A, eX.A, ei.default, es.A, z.A, h.A, Y.A, et.A, D.Ay, ee.A, C.A, I.A],
            tr,
        ),
            this.waitFor(
                C.A,
                d.A,
                et.A,
                en.default,
                ei.default,
                el.A,
                er.A,
                y.A,
                es.A,
                eC,
                eH.A,
                eV.A,
                eY.A,
                eu.A,
                P.A,
                M.A,
                g.A,
                h.A,
                eP.Ay,
                I.A,
                eD.A,
                eM.A,
                f.A,
                k.A,
                ep.Ay,
                em.A,
                eq.A,
                eh.A,
                b.A,
                eU.A,
                w.A,
                Y.A,
                eg.A,
                D.Ay,
                ef.A,
                ek.A,
                K.A,
                ey.A,
                eL.A,
                v,
                ev.A,
                ex.Ay,
                eb.A,
                Z.Ay,
                eX.A,
                eG.A,
                z.A,
                x.default,
                ej.A,
                ee.A,
            );
    }
    hasNotice() {
        return null != e8 && null != e8.type;
    }
    getNotice() {
        return null == eG.A.getAction() ? e8 : null;
    }
    isNoticeDismissed(e) {
        return tn(e);
    }
}
let tE = new ta(c.h, {
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
            (e8?.type === eT.kqX.INVITED_TO_SPEAK ||
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
        return delete e6[eT.kqX.DISPATCH_ERROR], tr();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return delete e6[eT.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], tr();
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
        return null != e8 && (null == e.id || e.id === e8.id) && (e9(e8.type, e.isTemporary, e.untilAtLeast), tr());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return e9(t), tr();
    },
    LOGOUT: function () {
        (e6 = {}), (e3 = {}), (e8 = null);
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: tr,
    AUTO_MODERATION_MENTION_RAID_DETECTION: tr,
    REPORT_AV_ERROR: tr,
    ACTIVE_AV_ERRORS_CHANGED: tr,
    MEDIA_ENGINE_MF_AVAILABILITY_CHECKED: tr,
    AUDIO_SET_MODE: tr,
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: tr,
});
