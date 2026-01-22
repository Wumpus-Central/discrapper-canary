n.d(t, {
    Ay: () => te,
    Re: () => ej,
    f7: () => eM,
    k3: () => eL,
    pe: () => ex,
}),
    n(896048),
    n(747238);
var r,
    i = n(989349),
    a = n.n(i),
    s = n(311907),
    o = n(531417),
    l = n(554146),
    c = n(506774),
    u = n(73153),
    d = n(77729),
    f = n(573648),
    p = n(587895),
    _ = n(469993),
    h = n(662427),
    m = n(826673),
    g = n(367727),
    E = n(487329),
    b = n(161518),
    y = n(49463),
    O = n(15285),
    A = n(142120),
    v = n(652896),
    S = n(585510),
    I = n(610136),
    T = n(229527),
    C = n(93474),
    N = n(164956),
    R = n(857071),
    w = n(772786),
    P = n(869968),
    D = n(923349),
    x = n(437852),
    L = n(264779),
    j = n(412260),
    M = n(426123),
    k = n(83375),
    U = n(859703),
    G = n(597936),
    V = n(34550),
    F = n(655116),
    B = n(105530),
    H = n(942405),
    Y = n(617617),
    W = n(976910),
    K = n(616356),
    z = n(961350),
    q = n(546183),
    X = n(347481),
    Z = n(734057),
    Q = n(962173),
    $ = n(584584),
    J = n(696451),
    ee = n(71393),
    et = n(430452),
    en = n(803224),
    er = n(576705),
    ei = n(362790),
    ea = n(383501),
    es = n(309010),
    eo = n(967198),
    el = n(437959),
    ec = n(351906),
    eu = n(274184),
    ed = n(870570),
    ef = n(287809),
    ep = n(977997),
    e_ = n(295405),
    eh = n(166403),
    em = n(816733),
    eg = n(469778),
    eE = n(147964),
    eb = n(723702),
    ey = n(927578),
    eO = n(755439),
    eA = n(422033),
    ev = n(966846),
    eS = n(652215);
n(436317);
var eI = n(788868),
    eT = n(654487),
    eC = n(818348),
    eN = n(731854);
function eR(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function ew(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                eR(e, t, n[t]);
            });
    }
    return e;
}
function eP(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function eD(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eP(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ex = {
        [eS.kqX.DOWNLOAD_NAG]: l.M.NAGBAR_NOTICE_DOWNLOAD,
        [eS.kqX.CONNECT_SPOTIFY]: l.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eS.kqX.CONNECT_PLAYSTATION]: l.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eS.kqX.PASSKEY_BACKUP]: l.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [eS.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: l.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eS.kqX.PREMIUM_REACTIVATE]: l.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eS.kqX.BOUNCED_EMAIL_DETECTED]: l.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eS.kqX.ACTIVATE_SERVER_SUBSCRIPTION]: l.M.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [eS.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: l.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eS.kqX.POMELO_ELIGIBLE]: l.M.NAGBAR_NOTICE_POMELO,
        [eS.kqX.CHECKOUT_RECOVERY_NAGBAR]: l.M.CHECKOUT_RECOVERY_NAGBAR,
    },
    eL = { [eS.kqX.GIFTING_PROMOTION_REMINDER]: l.M.GIFTING_PROMOTION_REMINDER },
    ej = {
        [eS.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: l.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eS.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: l.M.NAGBAR_NOTICE_OFFER_EXPIRING,
    },
    eM = { [eS.kqX.OUTBOUND_PROMOTION]: l.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR },
    ek = {
        [eS.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
        [eS.kqX.PREMIUM_UNCANCEL]: "hideUncancelReminder",
        [eS.kqX.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
        [eS.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
        [eS.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
        [eS.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
        [eS.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
        [eS.kqX.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
        [eS.kqX.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
        [eS.kqX.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
        [eS.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [eS.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [eS.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [eS.kqX.MACOS_19_DEPRECATED_MESSAGE]: "hideMacOS19DeprecationMessageNotice",
        [eS.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
    },
    eU = new Set([
        eS.kqX.NO_INPUT_DETECTED,
        eS.kqX.NO_INPUT_DEVICES_DETECTED,
        eS.kqX.STREAMER_MODE,
        eS.kqX.VIDEO_UNSUPPORTED_BROWSER,
        eS.kqX.SPOTIFY_AUTO_PAUSED,
        eS.kqX.DISPATCH_ERROR,
        eS.kqX.DISPATCH_ERROR,
        eS.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eS.kqX.BLOCKED_BY_PROXY,
    ]),
    eG = {},
    eV = {},
    eF = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null,
    }),
    eB = null;
function eH(e) {
    return ek[e] + "-untilAtLeast";
}
function eY(e) {
    let t = c.w.get(eH(e));
    return null != t ? a()(t) : null;
}
function eW(e, t) {
    c.w.set(eH(e), t.format("YYYY-MM-DDTHH:mm:ss.SSSZ"));
}
function eK(e) {
    c.w.remove(eH(e));
}
function ez(e, t, n) {
    if (null == e) return;
    let r = ek[e];
    null == r || t || c.w.set(r, !0), eU.has(e) && (eG[e] = !0), null != n && null != r ? eW(e, n) : eK(e);
}
function eq(e) {
    if (null == e || null != ej[e]) return !1;
    let t = eL[e];
    if (null != t) return (0, g.En)(t).isDismissed;
    let n = ex[e];
    if (null != n) return (0, m.k8)(n);
    let r = ek[e];
    if (null != r) {
        let t = eY(e);
        if (null != t) return null == t ? void 0 : t.isAfter(a()());
    }
    let i = eG[e];
    return !!i || (null != r && "" !== r ? c.w.get(r) : !!eU.has(e) && i);
}
let eX = [
    eS.kqX.QUARANTINED,
    eS.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eS.kqX.VIEWING_ROLES,
    eS.kqX.INVITED_TO_SPEAK,
    eS.kqX.LURKING_GUILD,
    eS.kqX.VOICE_DISABLED,
    eS.kqX.NO_INPUT_DEVICES_DETECTED,
    eS.kqX.NO_INPUT_DETECTED,
    eS.kqX.HARDWARE_MUTE,
    eS.kqX.DISPATCH_ERROR,
    eS.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eS.kqX.SPOTIFY_AUTO_PAUSED,
    eS.kqX.WIN32_DEPRECATED_MESSAGE,
    eS.kqX.WIN7_8_DEPRECATED_MESSAGE,
    eS.kqX.MACOS_19_DEPRECATED_MESSAGE,
    eS.kqX.BLOCKED_BY_PROXY,
    eS.kqX.VOICE_CONNECTED_LAST_SESSION,
    eS.kqX.SYSTEM_SERVICE_WARNING,
    eS.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
    eS.kqX.GUILD_RAID_NOTIFICATION,
    eS.kqX.GIFTING_PROMOTION_REMINDER,
    eS.kqX.QUESTS_PROGRESS_INTERRUPTION,
    eS.kqX.UNCLAIMED_ACCOUNT,
    eS.kqX.POMELO_ELIGIBLE,
    eS.kqX.PENDING_MEMBER,
    eS.kqX.CHECKOUT_RECOVERY_NAGBAR,
    eS.kqX.OUTBOUND_PROMOTION,
    eS.kqX.CORRUPT_INSTALLATION,
    eS.kqX.VIDEO_UNSUPPORTED_BROWSER,
    eS.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
    eS.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
    eS.kqX.STREAMER_MODE,
    eS.kqX.SCHEDULED_MAINTENANCE,
    eS.kqX.BOUNCED_EMAIL_DETECTED,
    eS.kqX.UNVERIFIED_ACCOUNT,
    eS.kqX.PREMIUM_TIER_2_TRIAL_ENDING,
    eS.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
    eS.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
    eS.kqX.PREMIUM_UNCANCEL,
    eS.kqX.PREMIUM_MISSING_PAYMENT,
    eS.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
    eS.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
    eS.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
    eS.kqX.PREMIUM_REACTIVATE,
    eS.kqX.ACTIVATE_SERVER_SUBSCRIPTION,
    eS.kqX.PASSKEY_BACKUP,
    eS.kqX.APPLICATION_TEST_MODE,
    eS.kqX.DOWNLOAD_NAG,
    eS.kqX.CONNECT_SPOTIFY,
    eS.kqX.CONNECT_PLAYSTATION,
    eS.kqX.SURVEY,
    eS.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
    eS.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
    eS.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
];
eS.kqX.QUARANTINED,
    eS.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eS.kqX.VIEWING_ROLES,
    eS.kqX.INVITED_TO_SPEAK,
    eS.kqX.LURKING_GUILD,
    eS.kqX.VOICE_DISABLED,
    eS.kqX.NO_INPUT_DETECTED,
    eS.kqX.HARDWARE_MUTE,
    eS.kqX.DISPATCH_ERROR,
    eS.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eS.kqX.SPOTIFY_AUTO_PAUSED,
    eS.kqX.BLOCKED_BY_PROXY,
    eS.kqX.VOICE_CONNECTED_LAST_SESSION,
    eS.kqX.PENDING_MEMBER,
    eS.kqX.STREAMER_MODE,
    eS.kqX.SCHEDULED_MAINTENANCE;
let eZ = {
    [eS.kqX.GIFTING_PROMOTION_REMINDER]: {
        predicate: () => {
            let { enabled: e } = x.qe.getCurrentConfig({ location: "NoticeStore" }, { autoTrackExposure: !1 }),
                { enabled: t } = x.Fq.getConfig({ location: "NoticeStore" });
            return (
                e &&
                t &&
                (0, g.En)(l.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed &&
                !eq(eS.kqX.GIFTING_PROMOTION_REMINDER)
            );
        },
    },
    [eS.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, S.dj)().show && !eq(eS.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({ dismissUntil: a()().add(3, "hours").toDate() }),
    },
    [eS.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let r = J.Ay.getMember(n, t.id);
            return null != r && !r.isPending && (0, T.TR)(r);
        },
    },
    [eS.kqX.QUARANTINED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t.hasFlag(eS.nhx.QUARANTINED);
        },
    },
    [eS.kqX.VIEWING_ROLES]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return N.A.isViewingRoles(t);
        },
    },
    [eS.kqX.INVITED_TO_SPEAK]: {
        predicate: (e) => {
            let { voiceState: t } = e;
            return (0, B.eY)(t) === B.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        },
    },
    [eS.kqX.LURKING_GUILD]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && R.A.isLurking(t);
        },
    },
    [eS.kqX.VOICE_DISABLED]: { predicate: () => null != ea.A.getRemoteDisconnectVoiceChannelId() },
    [eS.kqX.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != ea.A.getLastSessionVoiceChannelId() },
    [eS.kqX.NO_INPUT_DETECTED]: { predicate: () => b.A.hasActiveErrorOfType(E.iy.NO_AUDIO_INPUT_DETECTED) },
    [eS.kqX.NO_INPUT_DEVICES_DETECTED]: { predicate: () => b.A.hasActiveErrorOfType(E.iy.NO_INPUT_DEVICES) },
    [eS.kqX.HARDWARE_MUTE]: {
        predicate: () => ea.A.isConnected() && et.A.isHardwareMute() && et.A.isEnableHardwareMuteNotice(),
        metadata: () => {
            let e = et.A.getInputDeviceId(),
                t = X.A.getVendor(e),
                n = X.A.getModel(e);
            if (null != t && null != n)
                return {
                    vendor: t,
                    model: n,
                };
        },
    },
    [eS.kqX.DISPATCH_ERROR]: {
        predicate: () => null != eO.A.getLastError(),
        metadata: () => ({ error: eO.A.getLastError() }),
    },
    [eS.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != eA.A.getLastProgress(),
        metadata: () => eA.A.getLastProgress(),
    },
    [eS.kqX.SPOTIFY_AUTO_PAUSED]: { predicate: () => F.A.wasAutoPaused() },
    [eS.kqX.BLOCKED_BY_PROXY]: {
        predicate: () =>
            !eq(eS.kqX.BLOCKED_BY_PROXY) &&
            k.A.blockedByProxy &&
            M.A.getCurrentConfig({ location: "notice_store" }).eligibleForNotice,
    },
    [eS.kqX.UNCLAIMED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return null != t && !t.isClaimed();
        },
    },
    [eS.kqX.PENDING_MEMBER]: {
        predicate: (e) => {
            var t, n, r;
            let { selectedGuildId: i, currentUser: a } = e;
            return (
                null !=
                    (t =
                        null != i &&
                        null != a &&
                        !(null == (n = ee.A.getGuild(i))
                            ? void 0
                            : n.features.has(eS.GuildFeatures.GUILD_ONBOARDING)) &&
                        (null == (r = J.Ay.getMember(i, a.id)) ? void 0 : r.isPending)) && t
            );
        },
    },
    [eS.kqX.OUTBOUND_PROMOTION]: { predicate: () => (0, L.So)() },
    [eS.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => eb.isPlatformEmbedded && (!o.A.supported() || ev.A.isCorruptInstallation()),
    },
    [eS.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t && ep.A.hasVideo(t) && !et.A.supports(eN.O5.VIDEO) && !eq(eS.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
        },
    },
    [eS.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return ey.Ay.canRedeemPremiumPerks(t) && $.A.getDetectedOffPlatformPremiumPerks().length > 0;
        },
        metadata: () => $.A.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eS.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () =>
            !eq(eS.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) &&
            $.A.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => $.A.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eS.kqX.STREAMER_MODE]: { predicate: () => ec.A.enabled },
    [eS.kqX.DOWNLOAD_NAG]: { predicate: () => !eb.isPlatformEmbedded && !eq(eS.kqX.DOWNLOAD_NAG) },
    [eS.kqX.SCHEDULED_MAINTENANCE]: {
        predicate: () => null != el.A.getScheduledMaintenance(),
        metadata: () => {
            let e = el.A.getScheduledMaintenance();
            if (null != e)
                return {
                    id: e.id,
                    start: new Date(e.scheduled_for),
                    end: new Date(e.scheduled_until),
                };
        },
    },
    [eS.kqX.SURVEY]: {
        predicate: () => null != eu.Ay.getCurrentSurvey(),
        metadata: () => eu.Ay.getCurrentSurvey(),
    },
    [eS.kqX.UNVERIFIED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return (null == t ? void 0 : t.email) != null && !t.verified;
        },
    },
    [eS.kqX.BOUNCED_EMAIL_DETECTED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return null == t ? void 0 : t.hasBouncedEmail;
        },
    },
    [eS.kqX.CONNECT_SPOTIFY]: {
        predicate: () =>
            !F.A.hasConnectedAccount() &&
            O.Ay.isObservedAppRunning(f.A.get(eS.fg2.SPOTIFY).name) &&
            !eq(eS.kqX.CONNECT_SPOTIFY),
    },
    [eS.kqX.WIN32_DEPRECATED_MESSAGE]: {
        predicate: () =>
            (null === d.A || void 0 === d.A ? void 0 : d.A.os.arch) === "ia32" &&
            (null === d.A || void 0 === d.A ? void 0 : d.A.process.platform) === "win32",
        metadata: () => ({ dismissUntil: a()().add(5, "days").toDate() }),
    },
    [eS.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if ((null === d.A || void 0 === d.A ? void 0 : d.A.process.platform) === "win32")
                try {
                    return 10 > parseInt(null === d.A || void 0 === d.A ? void 0 : d.A.os.release.split(".")[0]);
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: a()().add(5, "days").toDate() }),
    },
    [eS.kqX.MACOS_19_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if ((null === d.A || void 0 === d.A ? void 0 : d.A.process.platform) === "darwin")
                try {
                    return 20 > parseInt(null === d.A || void 0 === d.A ? void 0 : d.A.os.release.split(".")[0]);
                } catch (e) {}
            return !1;
        },
        metadata: () => ({ dismissUntil: a()().add(5, "days").toDate() }),
    },
    [eS.kqX.CONNECT_PLAYSTATION]: {
        predicate: () =>
            Q.A.isSuggestedAccountType(eS.fg2.PLAYSTATION) &&
            null == Q.A.getAccount(null, eS.fg2.PLAYSTATION) &&
            !eq(eS.kqX.CONNECT_PLAYSTATION),
    },
    [eS.kqX.PASSKEY_BACKUP]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return (
                (null == t ? void 0 : t.mfaEnabled) &&
                W.A.hasFetchedCredentials() &&
                !W.A.hasCredentials &&
                !eq(eS.kqX.PASSKEY_BACKUP)
            );
        },
    },
    [eS.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () =>
            em.A.getAlmostExpiringTrialOffers([eI.pe.TIER_2]).length > 0 && !eq(eS.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
    },
    [eS.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () =>
            em.A.getAlmostExpiringTrialOffers([eI.pe.TIER_0]).length > 0 && !eq(eS.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
    },
    [eS.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () =>
            em.A.getAlmostExpiringDiscountOffers([eI.pe.TIER_2]).length > 0 &&
            !eq(eS.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
    },
    [eS.kqX.PREMIUM_UNCANCEL]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                r = null != t ? a()(t.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0,
                i =
                    (null == t ? void 0 : t.canceledAt) != null &&
                    (null == t ? void 0 : t.status) === eS.Dmq.CANCELED &&
                    1 >= a()().diff(a()(t.canceledAt), "days"),
                s = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                o =
                    null != t &&
                    t.status === eS.Dmq.CANCELED &&
                    !s &&
                    r <= 7 &&
                    r >= 0 &&
                    (0, ey.YE)(n, eI.PremiumTypes.TIER_2) &&
                    !i &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eq(eS.kqX.PREMIUM_UNCANCEL) && o;
        },
        metadata: (e) => {
            var t;
            let { premiumSubscription: n } = e,
                r = null != n ? a()(n.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0,
                i = null != n ? (null == (t = (0, ey.EL)(n)) ? void 0 : t.planId) : null;
            return {
                daysLeft: r,
                premiumType: null != i ? ey.Ay.getPremiumType(i) : null,
                premiumSubscription: n,
            };
        },
    },
    [eS.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                r = null != t ? a()(t.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0,
                i =
                    (null != t ? a()(t.currentPeriodEnd).diff(a()(t.currentPeriodStart).startOf("day"), "days") : 0) >
                    14
                        ? 7
                        : 2,
                s = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                o = eg.A.applicationIdsFetched.has(eI.tv),
                l = eg.A.getForApplication(eI.tv),
                c = null != t ? (0, ey.EL)(t) : null,
                u = null != c ? ey.Ay.getSkuIdForPlan(c.planId) : null,
                d =
                    null != l &&
                    null != c &&
                    Array.from(l).filter((e) => {
                        let { skuId: t, consumed: n } = e;
                        return !n && t === u;
                    }).length > 0,
                f =
                    null != t &&
                    r <= i &&
                    r >= 0 &&
                    t.status !== eS.Dmq.PAST_DUE &&
                    !s &&
                    o &&
                    !d &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eq(eS.kqX.PREMIUM_MISSING_PAYMENT) && f;
        },
        metadata: (e) => {
            var t;
            let { premiumSubscription: n } = e,
                r = null != n ? a()(n.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0,
                i = null != n ? (null == (t = (0, ey.EL)(n)) ? void 0 : t.planId) : null;
            return {
                daysLeft: r,
                premiumType: null != i ? ey.Ay.getPremiumType(i) : null,
                premiumSubscription: n,
            };
        },
    },
    [eS.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                r = null != t && null != t.paymentSourceId ? e_.A.getPaymentSource(t.paymentSourceId) : null,
                i = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                s =
                    null != t &&
                    t.status === eS.Dmq.PAST_DUE &&
                    !i &&
                    null != r &&
                    r.invalid &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eq(eS.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eS.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                r = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                i =
                    null != t &&
                    t.status === eS.Dmq.PAST_DUE &&
                    !r &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eq(eS.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && i;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
        },
    },
    [eS.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != eE.A.testModeApplicationId,
        metadata: () => {
            if (null == eE.A.testModeApplicationId) return {};
            let e = eE.A.testModeApplicationId,
                t = p.A.getApplication(e);
            return {
                applicationName: null != t ? t.name : e,
                applicationId: e,
            };
        },
    },
    [eS.kqX.PREMIUM_REACTIVATE]: {
        predicate: () => !eq(eS.kqX.PREMIUM_REACTIVATE) && D.A.shouldShowReactivateNotice(),
    },
    [eS.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                r = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                i = null != t && null != t.paymentSourceId ? e_.A.getPaymentSource(t.paymentSourceId) : null,
                s = null != i && eC.AD.has(i.type),
                o =
                    null != t &&
                    t.status === eS.Dmq.PAST_DUE &&
                    !r &&
                    s &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eq(eS.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && o;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return null == t
                ? {
                      daysPastDue: 0,
                      dismissUntil: a()().toDate(),
                  }
                : {
                      daysPastDue: t.status === eS.Dmq.PAST_DUE ? a()().diff(t.currentPeriodStart, "days") : 0,
                      dismissUntil: (0, ey.ji)(t).expiresDate.toDate(),
                  };
        },
    },
    [eS.kqX.POMELO_ELIGIBLE]: { predicate: () => (0, w.x)() && !eq(eS.kqX.POMELO_ELIGIBLE) },
    [eS.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e,
                n = null != t ? ee.A.getGuild(t) : null;
            return (
                (null != t &&
                    null != C.A.getMentionRaidDetected(t) &&
                    (null == n ? void 0 : n.features.has(eS.GuildFeatures.COMMUNITY)) &&
                    !eq(eS.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
                !1
            );
        },
        metadata: (e) => {
            let { selectedGuildId: t } = e,
                n = { dismissUntil: a()().add(2, "hours").toDate() };
            if (null != t) {
                let e = C.A.getMentionRaidDetected(t);
                null != e && (n.decisionId = e.decisionId);
            }
            return n;
        },
    },
    [eS.kqX.ACTIVATE_SERVER_SUBSCRIPTION]: {
        predicate: () =>
            !eq(eS.kqX.ACTIVATE_SERVER_SUBSCRIPTION) &&
            0 !== h.A.getEligibleGuildsForNagActivate().length &&
            (0, _.KD)(),
    },
    [eS.kqX.SAFETY_USER_SENTIMENT_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return G.BN(t);
        },
    },
    [eS.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = K.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, v._z)(e),
                n = U.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= eT.tZ;
        },
        metadata: () => {
            let e = K.A.getCurrentUserActiveStream();
            return { streamKey: null != e ? (0, v._z)(e) : null };
        },
    },
    [eS.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: (e) => {
            var t;
            let { currentUser: n } = e,
                r = null != (t = e_.A.paymentSources) ? t : {};
            return P.A.getIsTargeted() && !(0, ey.TW)(n) && 0 !== Object.keys(r).length;
        },
    },
    [eS.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !eq(eS.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && V.Cm(),
        metadata: () => ({
            dismissUntil: a()().add(180, "days").toDate(),
            sampleRate: 0.1,
        }),
    },
    [eS.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: {
        predicate: () => V.h6(),
        metadata: () => ({ sampleRate: 0.1 }),
    },
    [eS.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
                eq(eS.kqX.SYSTEM_SERVICE_WARNING) ||
                !(0, H.yA)(O.Ay) ||
                null == t ||
                et.A.getMode() !== eS.TBI.PUSH_TO_TALK
            )
                return !1;
            let n = O.Ay.getVisibleGame();
            return null != n && !!n.elevated;
        },
    },
};
function eQ() {
    var e, t, n;
    if (!A.A.isConnected()) return !1;
    eB = null;
    let r = ef.default.getCurrentUser();
    if (null == r) return !1;
    let i = eh.A.getPremiumSubscription(),
        a = eo.A.getGuildId(),
        s = es.A.getVoiceChannelId(),
        o = null != s ? ep.A.getVoiceStateForChannel(s) : null;
    for (let n of eX)
        if (
            null != eZ[n] &&
            eZ[n].predicate({
                selectedGuildId: a,
                voiceChannelId: s,
                voiceState: o,
                currentUser: r,
                premiumSubscription: i,
            })
        ) {
            let s =
                null == (e = (t = eZ[n]).metadata)
                    ? void 0
                    : e.call(t, {
                          currentUser: r,
                          premiumSubscription: i,
                          selectedGuildId: a,
                      });
            eB = eD(ew({}, eF), {
                type: n,
                metadata: s,
            });
            break;
        }
    if (null != eB) {
        (null == (n = eB.metadata) ? void 0 : n.sampleRate) != null &&
            null == eV[eB.type] &&
            (eV[eB.type] = Math.random() <= eB.metadata.sampleRate);
        let e = !1 === eV[eB.type];
        (eq(eB.type) || e) && (eB = null);
    }
}
function e$(e) {
    let { voiceStates: t } = e;
    return (
        ((null == eB ? void 0 : eB.type) === eS.kqX.INVITED_TO_SPEAK ||
            t.some((e) => {
                let { userId: t } = e;
                return t !== z.default.getId();
            })) &&
        eQ()
    );
}
function eJ(e) {
    eB = e.notice;
}
function e0(e) {
    return null != eB && (null == e.id || e.id === eB.id) && (ez(eB.type, e.isTemporary, e.untilAtLeast), eQ());
}
function e1(e) {
    let { noticeType: t } = e;
    return ez(t), eQ();
}
function e2() {
    return ec.A.enabled || delete eG[eS.kqX.STREAMER_MODE], eQ();
}
function e3() {
    return delete eG[eS.kqX.DISPATCH_ERROR], eQ();
}
function e6() {
    return delete eG[eS.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], eQ();
}
function e4() {
    return eQ();
}
function e5() {
    return eQ();
}
function e7(e) {
    return e.user.id === z.default.getId() && eQ();
}
function e8() {
    (eG = {}), (eV = {}), (eB = null);
}
class e9 extends (r = s.Ay.Store) {
    initialize() {
        this.syncWith([eu.Ay, ei.A, $.A, eo.A, j.A, em.A, q.default, Q.A, Y.A, I.A, U.A, K.A, O.Ay, W.A], eQ),
            this.waitFor(
                b.A,
                p.A,
                K.A,
                z.default,
                q.default,
                X.A,
                Z.A,
                P.A,
                Q.A,
                h.A,
                $.A,
                eO.A,
                eA.A,
                ev.A,
                eg.A,
                y.A,
                A.A,
                C.A,
                I.A,
                J.Ay,
                ee.A,
                N.A,
                R.A,
                et.A,
                en.A,
                e_.A,
                er.A,
                ei.A,
                j.A,
                k.A,
                U.A,
                ea.A,
                O.Ay,
                es.A,
                eo.A,
                F.A,
                el.A,
                ec.A,
                D.A,
                eh.A,
                eu.Ay,
                eE.A,
                em.A,
                ed.A,
                Y.A,
                ef.default,
                ep.A,
                W.A,
            );
    }
    hasNotice() {
        return null != eB && null != eB.type;
    }
    getNotice() {
        return null == ed.A.getAction() ? eB : null;
    }
    isNoticeDismissed(e) {
        return eq(e);
    }
}
eR(e9, "displayName", "NoticeStore");
let te = new e9(u.h, {
    CURRENT_USER_UPDATE: eQ,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: eQ,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: eQ,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: eQ,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: eQ,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: eQ,
    GUILD_CREATE: eQ,
    GUILD_DELETE: eQ,
    AUDIO_INPUT_DETECTED: eQ,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: eQ,
    CERTIFIED_DEVICES_SET: eQ,
    AUDIO_SET_INPUT_DEVICE: eQ,
    AUDIO_SET_OUTPUT_DEVICE: eQ,
    MEDIA_ENGINE_DEVICES: eQ,
    RTC_CONNECTION_STATE: eQ,
    RPC_APP_AUTHENTICATED: eQ,
    RPC_APP_DISCONNECTED: eQ,
    USER_CONNECTIONS_UPDATE: eQ,
    WINDOW_FOCUS: eQ,
    INSTANT_INVITE_CREATE: eQ,
    INSTANT_INVITE_REVOKE_SUCCESS: eQ,
    SPOTIFY_PLAYER_PAUSE: eQ,
    RUNNING_GAMES_CHANGE: eQ,
    EXPERIMENTS_FETCH_SUCCESS: eQ,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: eQ,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: eQ,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: eQ,
    DEVELOPER_TEST_MODE_RESET: eQ,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: eQ,
    DISPATCH_APPLICATION_INSTALL: eQ,
    IMPERSONATE_STOP: eQ,
    IMPERSONATE_UPDATE: eQ,
    GUILD_MEMBER_ADD: e7,
    GUILD_MEMBER_UPDATE: eQ,
    SURVEY_FETCHED: eQ,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eQ,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: eQ,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: eQ,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: eQ,
    VOICE_STATE_UPDATES: e$,
    STREAMER_MODE_UPDATE: e2,
    RUNNING_STREAMER_TOOLS_CHANGE: e2,
    DISPATCH_APPLICATION_ERROR: e3,
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: e6,
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: e4,
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: e5,
    NOTICE_SHOW: eJ,
    NOTICE_DISMISS: e0,
    NOTICE_DISABLE: e1,
    LOGOUT: e8,
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: eQ,
    AUTO_MODERATION_MENTION_RAID_DETECTION: eQ,
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eQ,
    PROXY_BLOCKED_REQUEST: eQ,
    REPORT_AV_ERROR: eQ,
});
