n.d(t, {
    Ay: () => tt,
    Re: () => eM,
    f7: () => ek,
    k3: () => ej,
    pe: () => eL,
}),
    n(896048),
    n(747238);
var r,
    i = n(989349),
    a = n.n(i),
    s = n(877624),
    o = n(311907),
    l = n(531417),
    c = n(554146),
    u = n(506774),
    d = n(73153),
    f = n(77729),
    p = n(573648),
    _ = n(587895),
    h = n(469993),
    m = n(662427),
    g = n(826673),
    E = n(367727),
    b = n(487329),
    y = n(161518),
    O = n(49463),
    A = n(15285),
    v = n(142120),
    S = n(652896),
    I = n(585510),
    T = n(610136),
    C = n(229527),
    N = n(93474),
    R = n(164956),
    w = n(857071),
    P = n(772786),
    D = n(869968),
    x = n(923349),
    L = n(437852),
    j = n(264779),
    M = n(412260),
    k = n(426123),
    U = n(83375),
    G = n(859703),
    V = n(597936),
    F = n(34550),
    B = n(655116),
    H = n(105530),
    Y = n(942405),
    W = n(617617),
    K = n(976910),
    z = n(616356),
    q = n(961350),
    X = n(546183),
    Z = n(347481),
    Q = n(734057),
    $ = n(962173),
    J = n(584584),
    ee = n(696451),
    et = n(71393),
    en = n(430452),
    er = n(803224),
    ei = n(576705),
    ea = n(362790),
    es = n(383501),
    eo = n(309010),
    el = n(967198),
    ec = n(437959),
    eu = n(351906),
    ed = n(274184),
    ef = n(870570),
    ep = n(287809),
    e_ = n(977997),
    eh = n(295405),
    em = n(166403),
    eg = n(816733),
    eE = n(469778),
    eb = n(147964),
    ey = n(723702),
    eO = n(927578),
    eA = n(755439),
    ev = n(422033),
    eS = n(966846),
    eI = n(652215);
n(436317);
var eT = n(788868),
    eC = n(654487),
    eN = n(818348),
    eR = n(731854);

function ew(e, t, n) {
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

function eP(e) {
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
                ew(e, t, n[t]);
            });
    }
    return e;
}

function eD(e, t) {
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

function ex(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eD(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eL = {
        [eI.kqX.DOWNLOAD_NAG]: c.M.NAGBAR_NOTICE_DOWNLOAD,
        [eI.kqX.CONNECT_SPOTIFY]: c.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eI.kqX.CONNECT_PLAYSTATION]: c.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eI.kqX.PASSKEY_BACKUP]: c.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [eI.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: c.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eI.kqX.PREMIUM_REACTIVATE]: c.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eI.kqX.BOUNCED_EMAIL_DETECTED]: c.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eI.kqX.ACTIVATE_SERVER_SUBSCRIPTION]: c.M.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [eI.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: c.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eI.kqX.POMELO_ELIGIBLE]: c.M.NAGBAR_NOTICE_POMELO,
        [eI.kqX.CHECKOUT_RECOVERY_NAGBAR]: c.M.CHECKOUT_RECOVERY_NAGBAR,
    },
    ej = {
        [eI.kqX.GIFTING_PROMOTION_REMINDER]: c.M.GIFTING_PROMOTION_REMINDER,
    },
    eM = {
        [eI.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: c.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eI.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: c.M.NAGBAR_NOTICE_OFFER_EXPIRING,
    },
    ek = {
        [eI.kqX.OUTBOUND_PROMOTION]: c.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR,
    },
    eU = {
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
        [eI.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [eI.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [eI.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [eI.kqX.MACOS_19_DEPRECATED_MESSAGE]: "hideMacOS19DeprecationMessageNotice",
        [eI.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
    },
    eG = new Set([
        eI.kqX.NO_INPUT_DETECTED,
        eI.kqX.NO_INPUT_DEVICES_DETECTED,
        eI.kqX.STREAMER_MODE,
        eI.kqX.VIDEO_UNSUPPORTED_BROWSER,
        eI.kqX.SPOTIFY_AUTO_PAUSED,
        eI.kqX.DISPATCH_ERROR,
        eI.kqX.DISPATCH_ERROR,
        eI.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eI.kqX.BLOCKED_BY_PROXY,
    ]),
    eV = {},
    eF = {},
    eB = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null,
    }),
    eH = null;

function eY(e) {
    return eU[e] + "-untilAtLeast";
}

function eW(e) {
    let t = u.w.get(eY(e));
    return null != t ? a()(t) : null;
}

function eK(e, t) {
    u.w.set(eY(e), t.format("YYYY-MM-DDTHH:mm:ss.SSSZ"));
}

function ez(e) {
    u.w.remove(eY(e));
}

function eq(e, t, n) {
    if (null == e) return;
    let r = eU[e];
    null == r || t || u.w.set(r, !0), eG.has(e) && (eV[e] = !0), null != n && null != r ? eK(e, n) : ez(e);
}

function eX(e) {
    if (null == e || null != eM[e]) return !1;
    let t = ej[e];
    if (null != t) return (0, E.En)(t).isDismissed;
    let n = eL[e];
    if (null != n) return (0, g.k8)(n);
    let r = eU[e];
    if (null != r) {
        let t = eW(e);
        if (null != t) return null == t ? void 0 : t.isAfter(a()());
    }
    let i = eV[e];
    return !!i || (null != r && "" !== r ? u.w.get(r) : !!eG.has(e) && i);
}
let eZ = [
    eI.kqX.QUARANTINED,
    eI.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eI.kqX.VIEWING_ROLES,
    eI.kqX.INVITED_TO_SPEAK,
    eI.kqX.LURKING_GUILD,
    eI.kqX.VOICE_DISABLED,
    eI.kqX.NO_INPUT_DEVICES_DETECTED,
    eI.kqX.NO_INPUT_DETECTED,
    eI.kqX.HARDWARE_MUTE,
    eI.kqX.DISPATCH_ERROR,
    eI.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eI.kqX.SPOTIFY_AUTO_PAUSED,
    eI.kqX.WIN32_DEPRECATED_MESSAGE,
    eI.kqX.WIN7_8_DEPRECATED_MESSAGE,
    eI.kqX.MACOS_19_DEPRECATED_MESSAGE,
    eI.kqX.BLOCKED_BY_PROXY,
    eI.kqX.VOICE_CONNECTED_LAST_SESSION,
    eI.kqX.SYSTEM_SERVICE_WARNING,
    eI.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
    eI.kqX.GUILD_RAID_NOTIFICATION,
    eI.kqX.GIFTING_PROMOTION_REMINDER,
    eI.kqX.QUESTS_PROGRESS_INTERRUPTION,
    eI.kqX.UNCLAIMED_ACCOUNT,
    eI.kqX.POMELO_ELIGIBLE,
    eI.kqX.PENDING_MEMBER,
    eI.kqX.CHECKOUT_RECOVERY_NAGBAR,
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
    eI.kqX.ACTIVATE_SERVER_SUBSCRIPTION,
    eI.kqX.PASSKEY_BACKUP,
    eI.kqX.APPLICATION_TEST_MODE,
    eI.kqX.DOWNLOAD_NAG,
    eI.kqX.CONNECT_SPOTIFY,
    eI.kqX.CONNECT_PLAYSTATION,
    eI.kqX.SURVEY,
    eI.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
    eI.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
    eI.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
];
eI.kqX.QUARANTINED,
    eI.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
    eI.kqX.VIEWING_ROLES,
    eI.kqX.INVITED_TO_SPEAK,
    eI.kqX.LURKING_GUILD,
    eI.kqX.VOICE_DISABLED,
    eI.kqX.NO_INPUT_DETECTED,
    eI.kqX.HARDWARE_MUTE,
    eI.kqX.DISPATCH_ERROR,
    eI.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
    eI.kqX.SPOTIFY_AUTO_PAUSED,
    eI.kqX.BLOCKED_BY_PROXY,
    eI.kqX.VOICE_CONNECTED_LAST_SESSION,
    eI.kqX.PENDING_MEMBER,
    eI.kqX.STREAMER_MODE,
    eI.kqX.SCHEDULED_MAINTENANCE;
let eQ = {
    [eI.kqX.GIFTING_PROMOTION_REMINDER]: {
        predicate: () => {
            let { enabled: e } = L.qe.getCurrentConfig(
                    {
                        location: "NoticeStore",
                    },
                    {
                        autoTrackExposure: !1,
                    },
                ),
                { enabled: t } = L.Fq.getConfig({
                    location: "NoticeStore",
                }),
                n = M.A.getMarketingComponentByType(s.C.GIFT_REMINDER_NAGBAR);
            return (
                e &&
                t &&
                null != n &&
                (0, E.En)(c.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed &&
                !eX(eI.kqX.GIFTING_PROMOTION_REMINDER)
            );
        },
    },
    [eI.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, I.dj)().show && !eX(eI.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({
            dismissUntil: a()().add(3, "hours").toDate(),
        }),
    },
    [eI.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let r = ee.Ay.getMember(n, t.id);
            return null != r && !r.isPending && (0, C.TR)(r);
        },
    },
    [eI.kqX.QUARANTINED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return t.hasFlag(eI.nhx.QUARANTINED);
        },
    },
    [eI.kqX.VIEWING_ROLES]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return R.A.isViewingRoles(t);
        },
    },
    [eI.kqX.INVITED_TO_SPEAK]: {
        predicate: (e) => {
            let { voiceState: t } = e;
            return (0, H.eY)(t) === H.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        },
    },
    [eI.kqX.LURKING_GUILD]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && w.A.isLurking(t);
        },
    },
    [eI.kqX.VOICE_DISABLED]: {
        predicate: () => null != es.A.getRemoteDisconnectVoiceChannelId(),
    },
    [eI.kqX.VOICE_CONNECTED_LAST_SESSION]: {
        predicate: () => null != es.A.getLastSessionVoiceChannelId(),
    },
    [eI.kqX.NO_INPUT_DETECTED]: {
        predicate: () => y.A.hasActiveErrorOfType(b.iy.NO_AUDIO_INPUT_DETECTED),
    },
    [eI.kqX.NO_INPUT_DEVICES_DETECTED]: {
        predicate: () => y.A.hasActiveErrorOfType(b.iy.NO_INPUT_DEVICES),
    },
    [eI.kqX.HARDWARE_MUTE]: {
        predicate: () => es.A.isConnected() && en.A.isHardwareMute() && en.A.isEnableHardwareMuteNotice(),
        metadata: () => {
            let e = en.A.getInputDeviceId(),
                t = Z.A.getVendor(e),
                n = Z.A.getModel(e);
            if (null != t && null != n)
                return {
                    vendor: t,
                    model: n,
                };
        },
    },
    [eI.kqX.DISPATCH_ERROR]: {
        predicate: () => null != eA.A.getLastError(),
        metadata: () => ({
            error: eA.A.getLastError(),
        }),
    },
    [eI.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != ev.A.getLastProgress(),
        metadata: () => ev.A.getLastProgress(),
    },
    [eI.kqX.SPOTIFY_AUTO_PAUSED]: {
        predicate: () => B.A.wasAutoPaused(),
    },
    [eI.kqX.BLOCKED_BY_PROXY]: {
        predicate: () =>
            !eX(eI.kqX.BLOCKED_BY_PROXY) &&
            U.A.blockedByProxy &&
            k.A.getCurrentConfig({
                location: "notice_store",
            }).eligibleForNotice,
    },
    [eI.kqX.UNCLAIMED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return null != t && !t.isClaimed();
        },
    },
    [eI.kqX.PENDING_MEMBER]: {
        predicate: (e) => {
            var t, n, r;
            let { selectedGuildId: i, currentUser: a } = e;
            return (
                null !=
                    (t =
                        null != i &&
                        null != a &&
                        !(null == (n = et.A.getGuild(i))
                            ? void 0
                            : n.features.has(eI.GuildFeatures.GUILD_ONBOARDING)) &&
                        (null == (r = ee.Ay.getMember(i, a.id)) ? void 0 : r.isPending)) && t
            );
        },
    },
    [eI.kqX.OUTBOUND_PROMOTION]: {
        predicate: () => (0, j.So)(),
    },
    [eI.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => ey.isPlatformEmbedded && (!l.A.supported() || eS.A.isCorruptInstallation()),
    },
    [eI.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
                null != t && e_.A.hasVideo(t) && !en.A.supports(eR.O5.VIDEO) && !eX(eI.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
        },
    },
    [eI.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return eO.Ay.canRedeemPremiumPerks(t) && J.A.getDetectedOffPlatformPremiumPerks().length > 0;
        },
        metadata: () => J.A.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eI.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () =>
            !eX(eI.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) &&
            J.A.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => J.A.getDetectedOffPlatformPremiumPerks()[0],
    },
    [eI.kqX.STREAMER_MODE]: {
        predicate: () => eu.A.enabled,
    },
    [eI.kqX.DOWNLOAD_NAG]: {
        predicate: () => !ey.isPlatformEmbedded && !eX(eI.kqX.DOWNLOAD_NAG),
    },
    [eI.kqX.SCHEDULED_MAINTENANCE]: {
        predicate: () => null != ec.A.getScheduledMaintenance(),
        metadata: () => {
            let e = ec.A.getScheduledMaintenance();
            if (null != e)
                return {
                    id: e.id,
                    start: new Date(e.scheduled_for),
                    end: new Date(e.scheduled_until),
                };
        },
    },
    [eI.kqX.SURVEY]: {
        predicate: () => null != ed.Ay.getCurrentSurvey(),
        metadata: () => ed.Ay.getCurrentSurvey(),
    },
    [eI.kqX.UNVERIFIED_ACCOUNT]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return (null == t ? void 0 : t.email) != null && !t.verified;
        },
    },
    [eI.kqX.BOUNCED_EMAIL_DETECTED]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return null == t ? void 0 : t.hasBouncedEmail;
        },
    },
    [eI.kqX.CONNECT_SPOTIFY]: {
        predicate: () =>
            !B.A.hasConnectedAccount() &&
            A.Ay.isObservedAppRunning(p.A.get(eI.fg2.SPOTIFY).name) &&
            !eX(eI.kqX.CONNECT_SPOTIFY),
    },
    [eI.kqX.WIN32_DEPRECATED_MESSAGE]: {
        predicate: () =>
            (null === f.A || void 0 === f.A ? void 0 : f.A.os.arch) === "ia32" &&
            (null === f.A || void 0 === f.A ? void 0 : f.A.process.platform) === "win32",
        metadata: () => ({
            dismissUntil: a()().add(5, "days").toDate(),
        }),
    },
    [eI.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if ((null === f.A || void 0 === f.A ? void 0 : f.A.process.platform) === "win32")
                try {
                    return 10 > parseInt(null === f.A || void 0 === f.A ? void 0 : f.A.os.release.split(".")[0]);
                } catch (e) {}
            return !1;
        },
        metadata: () => ({
            dismissUntil: a()().add(5, "days").toDate(),
        }),
    },
    [eI.kqX.MACOS_19_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if ((null === f.A || void 0 === f.A ? void 0 : f.A.process.platform) === "darwin")
                try {
                    return 20 > parseInt(null === f.A || void 0 === f.A ? void 0 : f.A.os.release.split(".")[0]);
                } catch (e) {}
            return !1;
        },
        metadata: () => ({
            dismissUntil: a()().add(5, "days").toDate(),
        }),
    },
    [eI.kqX.CONNECT_PLAYSTATION]: {
        predicate: () =>
            $.A.isSuggestedAccountType(eI.fg2.PLAYSTATION) &&
            null == $.A.getAccount(null, eI.fg2.PLAYSTATION) &&
            !eX(eI.kqX.CONNECT_PLAYSTATION),
    },
    [eI.kqX.PASSKEY_BACKUP]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return (
                (null == t ? void 0 : t.mfaEnabled) &&
                K.A.hasFetchedCredentials() &&
                !K.A.hasCredentials &&
                !eX(eI.kqX.PASSKEY_BACKUP)
            );
        },
    },
    [eI.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () =>
            eg.A.getAlmostExpiringTrialOffers([eT.pe.TIER_2]).length > 0 && !eX(eI.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
    },
    [eI.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () =>
            eg.A.getAlmostExpiringTrialOffers([eT.pe.TIER_0]).length > 0 && !eX(eI.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
    },
    [eI.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () =>
            eg.A.getAlmostExpiringDiscountOffers([eT.pe.TIER_2]).length > 0 &&
            !eX(eI.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
    },
    [eI.kqX.PREMIUM_UNCANCEL]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                r = null != t ? a()(t.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0,
                i =
                    (null == t ? void 0 : t.canceledAt) != null &&
                    (null == t ? void 0 : t.status) === eI.Dmq.CANCELED &&
                    1 >= a()().diff(a()(t.canceledAt), "days"),
                s = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                o =
                    null != t &&
                    t.status === eI.Dmq.CANCELED &&
                    !s &&
                    r <= 7 &&
                    r >= 0 &&
                    (0, eO.YE)(n, eT.PremiumTypes.TIER_2) &&
                    !i &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eX(eI.kqX.PREMIUM_UNCANCEL) && o;
        },
        metadata: (e) => {
            var t;
            let { premiumSubscription: n } = e,
                r = null != n ? a()(n.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0,
                i = null != n ? (null == (t = (0, eO.EL)(n)) ? void 0 : t.planId) : null;
            return {
                daysLeft: r,
                premiumType: null != i ? eO.Ay.getPremiumType(i) : null,
                premiumSubscription: n,
            };
        },
    },
    [eI.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                r = null != t ? a()(t.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0,
                i =
                    (null != t ? a()(t.currentPeriodEnd).diff(a()(t.currentPeriodStart).startOf("day"), "days") : 0) >
                    14
                        ? 7
                        : 2,
                s = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                o = eE.A.applicationIdsFetched.has(eT.tv),
                l = eE.A.getForApplication(eT.tv),
                c = null != t ? (0, eO.EL)(t) : null,
                u = null != c ? eO.Ay.getSkuIdForPlan(c.planId) : null,
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
                    t.status !== eI.Dmq.PAST_DUE &&
                    !s &&
                    o &&
                    !d &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eX(eI.kqX.PREMIUM_MISSING_PAYMENT) && f;
        },
        metadata: (e) => {
            var t;
            let { premiumSubscription: n } = e,
                r = null != n ? a()(n.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0,
                i = null != n ? (null == (t = (0, eO.EL)(n)) ? void 0 : t.planId) : null;
            return {
                daysLeft: r,
                premiumType: null != i ? eO.Ay.getPremiumType(i) : null,
                premiumSubscription: n,
            };
        },
    },
    [eI.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                r = null != t && null != t.paymentSourceId ? eh.A.getPaymentSource(t.paymentSourceId) : null,
                i = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                s =
                    null != t &&
                    t.status === eI.Dmq.PAST_DUE &&
                    !i &&
                    null != r &&
                    r.invalid &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eX(eI.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return {
                premiumSubscription: t,
            };
        },
    },
    [eI.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                r = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                i =
                    null != t &&
                    t.status === eI.Dmq.PAST_DUE &&
                    !r &&
                    null === t.paymentSourceId &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eX(eI.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && i;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return {
                premiumSubscription: t,
            };
        },
    },
    [eI.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != eb.A.testModeApplicationId,
        metadata: () => {
            if (null == eb.A.testModeApplicationId) return {};
            let e = eb.A.testModeApplicationId,
                t = _.A.getApplication(e);
            return {
                applicationName: null != t ? t.name : e,
                applicationId: e,
            };
        },
    },
    [eI.kqX.PREMIUM_REACTIVATE]: {
        predicate: () => !eX(eI.kqX.PREMIUM_REACTIVATE) && x.A.shouldShowReactivateNotice(),
    },
    [eI.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
                r = null != t && a()(t.currentPeriodEnd).isBefore(a()()),
                i = null != t && null != t.paymentSourceId ? eh.A.getPaymentSource(t.paymentSourceId) : null,
                s = null != i && eN.AD.has(i.type),
                o =
                    null != t &&
                    t.status === eI.Dmq.PAST_DUE &&
                    !r &&
                    s &&
                    !n.hasFreePremium() &&
                    !t.isPurchasedExternally;
            return !eX(eI.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && o;
        },
        metadata: (e) => {
            let { premiumSubscription: t } = e;
            return null == t
                ? {
                      daysPastDue: 0,
                      dismissUntil: a()().toDate(),
                  }
                : {
                      daysPastDue: t.status === eI.Dmq.PAST_DUE ? a()().diff(t.currentPeriodStart, "days") : 0,
                      dismissUntil: (0, eO.ji)(t).expiresDate.toDate(),
                  };
        },
    },
    [eI.kqX.POMELO_ELIGIBLE]: {
        predicate: () => (0, P.x)() && !eX(eI.kqX.POMELO_ELIGIBLE),
    },
    [eI.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: (e) => {
            let { selectedGuildId: t } = e,
                n = null != t ? et.A.getGuild(t) : null;
            return (
                (null != t &&
                    null != N.A.getMentionRaidDetected(t) &&
                    (null == n ? void 0 : n.features.has(eI.GuildFeatures.COMMUNITY)) &&
                    !eX(eI.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
                !1
            );
        },
        metadata: (e) => {
            let { selectedGuildId: t } = e,
                n = {
                    dismissUntil: a()().add(2, "hours").toDate(),
                };
            if (null != t) {
                let e = N.A.getMentionRaidDetected(t);
                null != e && (n.decisionId = e.decisionId);
            }
            return n;
        },
    },
    [eI.kqX.ACTIVATE_SERVER_SUBSCRIPTION]: {
        predicate: () =>
            !eX(eI.kqX.ACTIVATE_SERVER_SUBSCRIPTION) &&
            0 !== m.A.getEligibleGuildsForNagActivate().length &&
            (0, h.KD)(),
    },
    [eI.kqX.SAFETY_USER_SENTIMENT_NAGBAR]: {
        predicate: (e) => {
            let { currentUser: t } = e;
            return V.BN(t);
        },
    },
    [eI.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = z.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, S._z)(e),
                n = G.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= eC.tZ;
        },
        metadata: () => {
            let e = z.A.getCurrentUserActiveStream();
            return {
                streamKey: null != e ? (0, S._z)(e) : null,
            };
        },
    },
    [eI.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: (e) => {
            var t;
            let { currentUser: n } = e,
                r = null != (t = eh.A.paymentSources) ? t : {};
            return D.A.getIsTargeted() && !(0, eO.TW)(n) && 0 !== Object.keys(r).length;
        },
    },
    [eI.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !eX(eI.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && F.Cm(),
        metadata: () => ({
            dismissUntil: a()().add(180, "days").toDate(),
            sampleRate: 0.1,
        }),
    },
    [eI.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: {
        predicate: () => F.h6(),
        metadata: () => ({
            sampleRate: 0.1,
        }),
    },
    [eI.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
                eX(eI.kqX.SYSTEM_SERVICE_WARNING) ||
                !(0, Y.yA)(A.Ay) ||
                null == t ||
                en.A.getMode() !== eI.TBI.PUSH_TO_TALK
            )
                return !1;
            let n = A.Ay.getVisibleGame();
            return null != n && !!n.elevated;
        },
    },
};

function e$() {
    var e, t, n;
    if (!v.A.isConnected()) return !1;
    eH = null;
    let r = ep.default.getCurrentUser();
    if (null == r) return !1;
    let i = em.A.getPremiumSubscription(),
        a = el.A.getGuildId(),
        s = eo.A.getVoiceChannelId(),
        o = null != s ? e_.A.getVoiceStateForChannel(s) : null;
    for (let n of eZ)
        if (
            null != eQ[n] &&
            eQ[n].predicate({
                selectedGuildId: a,
                voiceChannelId: s,
                voiceState: o,
                currentUser: r,
                premiumSubscription: i,
            })
        ) {
            let s =
                null == (e = (t = eQ[n]).metadata)
                    ? void 0
                    : e.call(t, {
                          currentUser: r,
                          premiumSubscription: i,
                          selectedGuildId: a,
                      });
            eH = ex(eP({}, eB), {
                type: n,
                metadata: s,
            });
            break;
        }
    if (null != eH) {
        (null == (n = eH.metadata) ? void 0 : n.sampleRate) != null &&
            null == eF[eH.type] &&
            (eF[eH.type] = Math.random() <= eH.metadata.sampleRate);
        let e = !1 === eF[eH.type];
        (eX(eH.type) || e) && (eH = null);
    }
}

function eJ(e) {
    let { voiceStates: t } = e;
    return (
        ((null == eH ? void 0 : eH.type) === eI.kqX.INVITED_TO_SPEAK ||
            t.some((e) => {
                let { userId: t } = e;
                return t !== q.default.getId();
            })) &&
        e$()
    );
}

function e0(e) {
    eH = e.notice;
}

function e1(e) {
    return null != eH && (null == e.id || e.id === eH.id) && (eq(eH.type, e.isTemporary, e.untilAtLeast), e$());
}

function e2(e) {
    let { noticeType: t } = e;
    return eq(t), e$();
}

function e3() {
    return eu.A.enabled || delete eV[eI.kqX.STREAMER_MODE], e$();
}

function e6() {
    return delete eV[eI.kqX.DISPATCH_ERROR], e$();
}

function e4() {
    return delete eV[eI.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], e$();
}

function e5() {
    return e$();
}

function e7() {
    return e$();
}

function e8(e) {
    return e.user.id === q.default.getId() && e$();
}

function e9() {
    (eV = {}), (eF = {}), (eH = null);
}
class te extends (r = o.Ay.Store) {
    initialize() {
        this.syncWith([ed.Ay, ea.A, J.A, el.A, M.A, eg.A, X.default, $.A, W.A, T.A, G.A, z.A, A.Ay, K.A], e$),
            this.waitFor(
                y.A,
                _.A,
                z.A,
                q.default,
                X.default,
                Z.A,
                Q.A,
                D.A,
                $.A,
                m.A,
                J.A,
                eA.A,
                ev.A,
                eS.A,
                eE.A,
                O.A,
                v.A,
                N.A,
                T.A,
                ee.Ay,
                et.A,
                R.A,
                w.A,
                en.A,
                er.A,
                eh.A,
                ei.A,
                ea.A,
                M.A,
                U.A,
                G.A,
                es.A,
                A.Ay,
                eo.A,
                el.A,
                B.A,
                ec.A,
                eu.A,
                x.A,
                em.A,
                ed.Ay,
                eb.A,
                eg.A,
                ef.A,
                W.A,
                ep.default,
                e_.A,
                K.A,
            );
    }
    hasNotice() {
        return null != eH && null != eH.type;
    }
    getNotice() {
        return null == ef.A.getAction() ? eH : null;
    }
    isNoticeDismissed(e) {
        return eX(e);
    }
}
ew(te, "displayName", "NoticeStore");
let tt = new te(d.h, {
    CURRENT_USER_UPDATE: e$,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: e$,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: e$,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: e$,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: e$,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: e$,
    GUILD_CREATE: e$,
    GUILD_DELETE: e$,
    AUDIO_INPUT_DETECTED: e$,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: e$,
    CERTIFIED_DEVICES_SET: e$,
    AUDIO_SET_INPUT_DEVICE: e$,
    AUDIO_SET_OUTPUT_DEVICE: e$,
    MEDIA_ENGINE_DEVICES: e$,
    RTC_CONNECTION_STATE: e$,
    RPC_APP_AUTHENTICATED: e$,
    RPC_APP_DISCONNECTED: e$,
    USER_CONNECTIONS_UPDATE: e$,
    WINDOW_FOCUS: e$,
    INSTANT_INVITE_CREATE: e$,
    INSTANT_INVITE_REVOKE_SUCCESS: e$,
    SPOTIFY_PLAYER_PAUSE: e$,
    RUNNING_GAMES_CHANGE: e$,
    EXPERIMENTS_FETCH_SUCCESS: e$,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: e$,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: e$,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: e$,
    DEVELOPER_TEST_MODE_RESET: e$,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: e$,
    DISPATCH_APPLICATION_INSTALL: e$,
    IMPERSONATE_STOP: e$,
    IMPERSONATE_UPDATE: e$,
    GUILD_MEMBER_ADD: e8,
    GUILD_MEMBER_UPDATE: e$,
    SURVEY_FETCHED: e$,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: e$,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: e$,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: e$,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: e$,
    VOICE_STATE_UPDATES: eJ,
    STREAMER_MODE_UPDATE: e3,
    RUNNING_STREAMER_TOOLS_CHANGE: e3,
    DISPATCH_APPLICATION_ERROR: e6,
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: e4,
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: e5,
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: e7,
    NOTICE_SHOW: e0,
    NOTICE_DISMISS: e1,
    NOTICE_DISABLE: e2,
    LOGOUT: e9,
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: e$,
    AUTO_MODERATION_MENTION_RAID_DETECTION: e$,
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: e$,
    PROXY_BLOCKED_REQUEST: e$,
    REPORT_AV_ERROR: e$,
});
