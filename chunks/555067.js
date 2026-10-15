(n.r(t),
    n.d(t, {
        transformAppliedForumTagChange: () => eE,
        transformAvailableForumTagChange: () => eu,
        getStringForPermission: () => el,
        getSimpleAuditLogTitleContextFromChange: () => q,
        getChangeTitle: () => ee,
        getStringForRemovedChannelFlag: () => en,
        checkChangesToRender: () => W,
        getSimpleAuditLogTitleFromChange: () => J,
        ACTION_FILTER_ITEMS: () => Y,
        shouldNotRenderChangeDetail: () => w,
        getStringForAddedChannelFlag: () => et,
        getSimpleAuditLogChangeDetails: () => Z,
        getChangeStrings: () => V,
        findChangeByKey: () => K,
        transformLogs: () => ea,
    }),
    n(321073));
var l,
    r = n(824120),
    a = n.n(r),
    i = n(536637),
    s = n.n(i),
    E =
        (((l = {}).MESSAGE = "message"),
        (l.FORUM_POST = "forum_post"),
        (l.MESSAGE_BUNDLE = "message_bundle"),
        (l.CONVERSATION = "conversation"),
        l),
    u = n(821418),
    o = n(136722),
    _ = n(317097),
    c = n(665260),
    d = n(499979),
    A = n(155718),
    g = n(47167),
    T = n(626584),
    I = n(236285),
    N = n(627794),
    G = n(591552),
    O = n(701785),
    S = n(446600),
    m = n(750385),
    D = n(411153),
    R = n(734057),
    L = n(317525),
    h = n(994500),
    C = n(287809),
    M = n(58703),
    U = n(735547),
    x = n(935208),
    f = n(427262),
    p = n(523599),
    F = n(652215),
    P = n(746080),
    k = n(243277),
    j = n(539916),
    v = n(988794),
    X = n(105292);
let b = new T.A("AuditLogUtils"),
    y = [d.pJ.DAYS, d.pJ.HOURS, d.pJ.MINUTES, d.pJ.SECONDS];
function B() {
    return { [F.gGk.REASON]: () => X.t["2IW3C5"] };
}
function V(e) {
    switch (e.targetType) {
        case F.GaG.GUILD:
            return {
                [F.gGk.NAME]: () => X.t.CkDiNH,
                [F.gGk.DESCRIPTION]: eA(X.t.RP3Ey3, X.t.QAVj1Y),
                [F.gGk.ICON_HASH]: () => X.t.iLZ8Q9,
                [F.gGk.SPLASH_HASH]: () => X.t["4VV6dn"],
                [F.gGk.DISCOVERY_SPLASH_HASH]: () => X.t["2pds6p"],
                [F.gGk.BANNER_HASH]: eA(X.t.Cxq4zO, X.t["H7eE/9"]),
                [F.gGk.OWNER_ID]: () => X.t["8ltsLT"],
                [F.gGk.REGION]: () => X.t.X9r5Kf,
                [F.gGk.PREFERRED_LOCALE]: () => X.t.UnXuDS,
                [F.gGk.AFK_CHANNEL_ID]: eA(X.t.ClBuA4, X.t["ms+xtL"]),
                [F.gGk.AFK_TIMEOUT]: () => X.t.q21fHa,
                [F.gGk.SYSTEM_CHANNEL_ID]: eA(X.t.H1VXaa, X.t.XhtmxJ),
                [F.gGk.RULES_CHANNEL_ID]: eA(X.t.OI6MG2, X.t.lik3tI),
                [F.gGk.PUBLIC_UPDATES_CHANNEL_ID]: eA(X.t.YxBKrY, X.t.Ehsnij),
                [F.gGk.MFA_LEVEL]: eI({ [F.EkJ.NONE]: X.t.voaCCQ, [F.EkJ.ELEVATED]: X.t.pRNVwz }),
                [F.gGk.WIDGET_ENABLED]: eT(X.t.ADIty8, X.t.nf58VY),
                [F.gGk.WIDGET_CHANNEL_ID]: eA(X.t["6SBsDc"], X.t.deQ5wO),
                [F.gGk.VERIFICATION_LEVEL]: eI({
                    [F.PvD.NONE]: X.t.W27rsc,
                    [F.PvD.LOW]: X.t["V8P+Pw"],
                    [F.PvD.MEDIUM]: X.t.ERQFau,
                    [F.PvD.HIGH]: X.t["83fN0j"],
                    [F.PvD.VERY_HIGH]: X.t.PnkQJE,
                }),
                [F.gGk.DEFAULT_MESSAGE_NOTIFICATIONS]: eI({
                    [F.orn.ALL_MESSAGES]: X.t.LDi76A,
                    [F.orn.ONLY_MENTIONS]: X.t["6K83ba"],
                }),
                [F.gGk.VANITY_URL_CODE]: eA(X.t.Zplsov, X.t.u6cArh),
                [F.gGk.EXPLICIT_CONTENT_FILTER]: eI({
                    [F.gh6.DISABLED]: X.t.fmOeL3,
                    [F.gh6.MEMBERS_WITHOUT_ROLES]: X.t["4FghYw"],
                    [F.gh6.ALL_MEMBERS]: X.t.olyrSm,
                }),
                [F.gGk.PREMIUM_PROGRESS_BAR_ENABLED]: eT(X.t.rBT0sn, X.t["gc+te5"]),
                [F.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => X.t.YbouFH,
                [F.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => X.t.g3DMjB,
                [F.gGk.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => X.t["+fQAel"],
                [F.gGk.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => X.t.E1fc4v,
                [F.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => X.t.XbwtSA,
                ...B(),
            };
        case F.GaG.CHANNEL:
        case F.GaG.CHANNEL_OVERWRITE:
            return {
                [F.gGk.NAME]: ed(X.t.f8Rh0U, X.t.ebD4Qp),
                [F.gGk.POSITION]: ed(X.t.isS8te, X.t.t5uBis),
                [F.gGk.TOPIC]: eg(X.t.esQcxn, X.t["m+veAn"], X.t["ws/1FA"]),
                [F.gGk.BITRATE]: ed(X.t.fw81ak, X.t.MFNlgZ),
                [F.gGk.RTC_REGION_OVERRIDE]: eg(X.t["6kajxx"], X.t.eGOlmU, X.t["0JMZdz"]),
                [F.gGk.USER_LIMIT]: ed(X.t.wk5t7p, X.t.XgjCEh),
                [F.gGk.RATE_LIMIT_PER_USER]: ed(X.t["7lirhF"], X.t.j4CCJR),
                [F.gGk.APPLICATION_ID]: ed(X.t.fnhin8, X.t.mcNs5B),
                [F.gGk.PERMISSIONS_RESET]: () => X.t["+vSBFY"],
                [F.gGk.PERMISSIONS_GRANTED]: () => X.t.EKLJv8,
                [F.gGk.PERMISSIONS_DENIED]: () => X.t.U3rO5X,
                [F.gGk.REASON]: () => X.t["2IW3C5"],
                [F.gGk.NSFW]: eT(X.t.H8Ri2Y, X.t.WW6cJw),
                [F.gGk.TYPE]: ed(X.t.Vn5zn2, X.t.aq4uWI),
                [F.gGk.VIDEO_QUALITY_MODE]: ed(X.t.e68fAU, X.t.djbES0),
                [F.gGk.DEFAULT_AUTO_ARCHIVE_DURATION]: ed(X.t.nYz2mg, X.t.oczvRI),
                [F.gGk.DEFAULT_THREAD_RATE_LIMIT_PER_USER]: eg(X.t.tOJ8h7, X.t.WaSgzk, X.t["lj+A4u"]),
                [F.gGk.FLAGS]: () => X.t.ImCQko,
                [F.gGk.AVAILABLE_TAG_ADD]: () => X.t.H86QQU,
                [F.gGk.AVAILABLE_TAG_EDIT]: () => X.t.YtUzls,
                [F.gGk.AVAILABLE_TAG_DELETE]: () => X.t["8QOseg"],
                [F.gGk.LINKED_LOBBY]: eA(X.t["+/3TkD"], X.t["5kDYS3"]),
            };
        case F.GaG.USER:
            return {
                [F.gGk.NICK]: eg(X.t.qXDsHv, X.t["m+qury"], X.t.DvLvjF),
                [F.gGk.DEAF]: eT(X.t.mArLlW, X.t.ddvVYG),
                [F.gGk.MUTE]: eT(X.t["bxs/lS"], X.t.FjecQM),
                [F.gGk.ROLES_REMOVE]: () => X.t["+2SDWV"],
                [F.gGk.ROLES_ADD]: () => X.t["B3/3IJ"],
                [F.gGk.PRUNE_DELETE_DAYS]: () => X.t["+Cvc+D"],
                [F.gGk.COMMUNICATION_DISABLED_UNTIL]: eg(X.t.LXTQr5, X.t.LXTQr5, X.t.ULSdnE),
                [F.gGk.BYPASSES_VERIFICATION]: eT(X.t.NBPBui, X.t.zATost),
                [F.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => X.t.YbouFH,
                ...B(),
            };
        case F.GaG.ROLE:
            return {
                [F.gGk.NAME]: ed(X.t.QBmlaD, X.t["Lfs4r+"]),
                [F.gGk.DESCRIPTION]: ed(X.t.XeYKWJ, X.t.PSfeIj),
                [F.gGk.PERMISSIONS_GRANTED]: () => X.t["9i/DvE"],
                [F.gGk.PERMISSIONS_DENIED]: () => X.t.pa1ZVh,
                [F.gGk.COLOR]: eN({ "#000000": X.t.TK6E1H }, X.t["2FQFiw"]),
                [F.gGk.COLORS]: (e) => (null == e.newValue.secondary_color ? X.t.U44ttm : X.t["WnSwL/"]),
                [F.gGk.HOIST]: eT(X.t.gWfe24, X.t["+tb8kN"]),
                [F.gGk.MENTIONABLE]: eT(X.t.LL8VFF, X.t.Z7xzmC),
                [F.gGk.ICON_HASH]: () => X.t["iEE79/"],
                [F.gGk.UNICODE_EMOJI]: () => X.t.KiLMM0,
                ...B(),
            };
        case F.GaG.ONBOARDING_PROMPT:
            return {
                ...B(),
                [F.gGk.TITLE]: ed(X.t["sNpuy/"], X.t["3Ukc/g"]),
                [F.gGk.DESCRIPTION]: ed(X.t.PP1q0x, X.t.z7pYLg),
                [F.gGk.OPTIONS]: () => X.t["3G5C9+"],
                [F.gGk.SINGLE_SELECT]: eT(X.t.v4WnR3, X.t["6Qg3uC"]),
                [F.gGk.REQUIRED]: eT(X.t["0MPAM6"], X.t.pwsXir),
            };
        case F.GaG.GUILD_ONBOARDING:
            return {
                ...B(),
                [F.gGk.DEFAULT_CHANNEL_IDS]: () => X.t["8M+D2s"],
                [F.gGk.ENABLE_DEFAULT_CHANNELS]: eT(X.t["EYd/ls"], X.t["36OZeQ"]),
                [F.gGk.ENABLE_ONBOARDING_PROMPTS]: eT(X.t.V3u8PV, X.t["r66lc/"]),
                [F.gGk.ENABLED]: eT(X.t.SODVIs, X.t.u8HY5U),
                [F.gGk.MODE]: eI({ [j.SD.ONBOARDING_ADVANCED]: X.t.JbzVsh, [j.SD.ONBOARDING_DEFAULT]: X.t.aCgU0S }),
            };
        case F.GaG.HOME_SETTINGS:
            return {
                ...B(),
                [F.gGk.WELCOME_MESSAGE]: () => X.t.dKQ1xd,
                [F.gGk.NEW_MEMBER_ACTIONS]: () => X.t.jDUIno,
                [F.gGk.RESOURCE_CHANNELS]: () => X.t.SIX0mr,
            };
        case F.GaG.INVITE:
            return {
                [F.gGk.CODE]: () => X.t.rrRHgb,
                [F.gGk.CHANNEL_ID]: () => X.t.Q1vd5q,
                [F.gGk.MAX_USES]: eN({ 0: X.t.Yx8LNm }, X.t["3ygnwU"]),
                [F.gGk.MAX_AGE]: eN({ [X.intl.string(X.t.PqEzn8)]: X.t.uWrLvw }, X.t["Q+5kcO"]),
                [F.gGk.TEMPORARY]: eT(X.t.MWp6H7, X.t.omiqTH),
                [F.gGk.FLAGS]: eI({ [u.Q.IS_GUEST_INVITE]: X.t.XYZMbL }),
                [F.gGk.ROLE_IDS]: () => X.t.gb1Owj,
                ...B(),
            };
        case F.GaG.WEBHOOK:
            return {
                [F.gGk.CHANNEL_ID]: ed(X.t.jhPprR, X.t.ar4qYO),
                [F.gGk.NAME]: ed(X.t.ZVGrzU, X.t.tywdZR),
                [F.gGk.AVATAR_HASH]: () => X.t.KB52Uj,
                [F.gGk.REASON]: () => X.t["2IW3C5"],
            };
        case F.GaG.EMOJI:
            return { [F.gGk.NAME]: ed(X.t.ahU1o5, X.t["wxs+vZ"]), ...B() };
        case F.GaG.STICKER:
            return {
                [F.gGk.NAME]: ed(X.t.cdl0Yo, X.t.o3W2ly),
                [F.gGk.TAGS]: ed(X.t["zwL+S2"], X.t["VYfKA+"]),
                [F.gGk.DESCRIPTION]: ed(X.t.XeYKWJ, X.t.PSfeIj),
                ...B(),
            };
        case F.GaG.INTEGRATION:
            return {
                [F.gGk.ENABLE_EMOTICONS]: eT(X.t.FI0m5x, X.t.olpKC6),
                [F.gGk.EXPIRE_BEHAVIOR]: eI({ 0: X.t["1Bb1+u"], 1: X.t.vjlW6m }),
                [F.gGk.EXPIRE_GRACE_PERIOD]: () => X.t.iovXMa,
                ...B(),
            };
        case F.GaG.STAGE_INSTANCE:
            return {
                [F.gGk.TOPIC]: ed(X.t["m+veAn"], X.t.esQcxn),
                [F.gGk.PRIVACY_LEVEL]: eI({ [v.dD.GUILD_ONLY]: X.t["EC+CDt"], [v.dD.PUBLIC]: X.t["pK/WG0"] }),
                ...B(),
            };
        case F.GaG.GUILD_SCHEDULED_EVENT:
            return {
                [F.gGk.NAME]: () => X.t["21EXHW"],
                [F.gGk.DESCRIPTION]: () => X.t.Vm1ofw,
                [F.gGk.PRIVACY_LEVEL]: eI({ [v.dD.GUILD_ONLY]: X.t["EC+CDt"], [v.dD.PUBLIC]: X.t["pK/WG0"] }),
                [F.gGk.STATUS]: eI({
                    [v.XG.SCHEDULED]: X.t.hXKDgq,
                    [v.XG.ACTIVE]: X.t.lRX1nz,
                    [v.XG.COMPLETED]: X.t["/eFIhq"],
                    [v.XG.CANCELED]: X.t.NWIYhj,
                }),
                [F.gGk.ENTITY_TYPE]: eI({
                    [v.Ps.NONE]: X.t["6sO3Ss"],
                    [v.Ps.STAGE_INSTANCE]: X.t["Wo+s1y"],
                    [v.Ps.VOICE]: X.t.XCVaIL,
                    [v.Ps.EXTERNAL]: X.t.IvhAj2,
                }),
                [F.gGk.CHANNEL_ID]: eA(X.t.yJBIcX, X.t["+PqSsi"]),
                [F.gGk.LOCATION]: eA(X.t.GaMBHy, X.t.PsICk0),
                [F.gGk.IMAGE_HASH]: eA(X.t.S3vcRK, X.t.KQu47I),
                ...B(),
            };
        case F.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
            return {
                [F.gGk.SCHEDULED_START_TIME]: eA(X.t.zMIYVg, X.t.fzF8Gd),
                [F.gGk.SCHEDULED_END_TIME]: eA(X.t.vONSQA, X.t.IlIti3),
                [F.gGk.IS_CANCELED]: (e) => {
                    if (null != e.oldValue || !0 === e.newValue) {
                        if (!e.oldValue && e.newValue) return X.t["7RkicW"];
                        else if (e.oldValue && !e.newValue) return X.t.dRNTWW;
                    }
                },
                ...B(),
            };
        case F.GaG.THREAD:
            return {
                [F.gGk.NAME]: ed(X.t.tUKRzX, X.t.kPCHON),
                [F.gGk.ARCHIVED]: eT(X.t.jDi9FK, X.t.F6dvbT),
                [F.gGk.LOCKED]: eT(X.t.JSy1QW, X.t.C7Jgo8),
                [F.gGk.INVITABLE]: eT(X.t.dxNUs9, X.t.biJvYG),
                [F.gGk.AUTO_ARCHIVE_DURATION]: ed(X.t.LuaG3y, X.t["18d9qr"]),
                [F.gGk.RATE_LIMIT_PER_USER]: ed(X.t["7lirhF"], X.t.j4CCJR),
                [F.gGk.FLAGS]: () => X.t.sSAQtj,
                [F.gGk.AVAILABLE_TAG_ADD]: () => X.t.H86QQU,
                [F.gGk.AVAILABLE_TAG_DELETE]: () => X.t["8QOseg"],
                ...B(),
            };
        case F.GaG.APPLICATION_COMMAND:
            var t;
            let n;
            return (
                (t = e.changes),
                (n = { ...B() }),
                t?.forEach((e) => {
                    e.newValue
                        ? e.newValue.permission
                            ? (n[e.key] = () => X.t["JH+89C"])
                            : (n[e.key] = () => X.t.HUrFDu)
                        : (n[e.key] = () => X.t.vynxnV);
                }),
                n
            );
        case F.GaG.AUTO_MODERATION_RULE:
            return {
                [F.gGk.NAME]: () => X.t.XwxAJT,
                [F.gGk.AUTO_MODERATION_TRIGGER_TYPE]: () => X.t.fx0pyl,
                [F.gGk.AUTO_MODERATION_EVENT_TYPE]: () => X.t["46Y+L5"],
                [F.gGk.AUTO_MODERATION_ACTIONS]: () => X.t["8efxfv"],
                [F.gGk.AUTO_MODERATION_ENABLED]: (e) => (!0 === (e.newValue ?? e.oldValue) ? X.t.fCmxC2 : X.t.Wrg9Jn),
                [F.gGk.AUTO_MODERATION_EXEMPT_ROLES]: () => X.t.TRb7Nx,
                [F.gGk.AUTO_MODERATION_EXEMPT_CHANNELS]: () => X.t.mzitLE,
                [F.gGk.AUTO_MODERATION_TRIGGER_METADATA]: () => X.t["h/lM65"],
                [F.gGk.AUTO_MODERATION_ADD_KEYWORDS]: () => X.t["9V2yaC"],
                [F.gGk.AUTO_MODERATION_REMOVE_KEYWORDS]: () => X.t["4Qe9ny"],
                [F.gGk.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => X.t.GyZtxp,
                [F.gGk.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => X.t.OQDadc,
                [F.gGk.AUTO_MODERATION_ADD_ALLOW_LIST]: () => X.t["FvvR+K"],
                [F.gGk.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => X.t.p5nSvy,
                ...B(),
            };
        case F.GaG.GUILD_SOUNDBOARD:
            return {
                [F.gGk.NAME]: ed(X.t.VOtRSO, X.t.OK7B8E),
                [F.gGk.VOLUME]: ed(X.t.igrDB9, X.t.L5lDFJ),
                [F.gGk.EMOJI_NAME]: eg(X.t.IIanaY, X.t["z4w4U/"], X.t.V8TfyU),
                [F.gGk.EMOJI_ID]: eg(X.t.ainxMB, X.t["2NPsYu"], X.t["8crtns"]),
                ...B(),
            };
        case F.GaG.VOICE_CHANNEL_STATUS:
            return { [F.gGk.STATUS]: () => X.t.HyCSnI, ...B() };
        case F.GaG.GUILD_MEMBER_VERIFICATION:
            return {
                [F.gGk.VERIFICATION_ENABLED]: (e) => (!0 === e.newValue ? X.t.fnkzDY : X.t.WYT6ka),
                [F.gGk.MANUAL_APPROVAL_ENABLED]: (e) => (!0 === e.newValue ? X.t.jzSvVd : X.t.WxyOtj),
                ...B(),
            };
        case F.GaG.GUILD_PROFILE:
            return {
                [F.gGk.DESCRIPTION]: () => X.t.nsUZKY,
                [F.gGk.BRAND_COLOR_PRIMARY]: () => X.t.qe9mgN,
                [F.gGk.CUSTOM_BANNER_HASH]: () => X.t["04b5KC"],
                [F.gGk.TRAITS]: () => X.t.dEy9WO,
                [F.gGk.GAME_APPLICATION_IDS]: () => X.t["8BOT3x"],
                [F.gGk.VISIBILITY]: () => X.t.bCl1Ep,
                [F.gGk.SERVER_TAG]: eA(X.t.ix1dnX, X.t["4LKpKb"]),
            };
        default:
            return B();
    }
}
let H = {
    [F.GaG.CHANNEL]: { [F.gGk.ID]: !0, [F.gGk.PERMISSION_OVERWRITES]: !0 },
    [F.GaG.CHANNEL_OVERWRITE]: { [F.gGk.TYPE]: !0, [F.gGk.ID]: !0, [F.gGk.PERMISSION_OVERWRITES]: !0 },
    [F.GaG.INVITE]: { [F.gGk.INVITER_ID]: !0, [F.gGk.USES]: !0 },
    [F.GaG.WEBHOOK]: { [F.gGk.TYPE]: !0, [F.gGk.APPLICATION_ID]: !0 },
    [F.GaG.INTEGRATION]: { [F.gGk.TYPE]: !0, [F.gGk.NAME]: !0 },
    [F.GaG.THREAD]: { [F.gGk.ID]: !0, [F.gGk.TYPE]: !0 },
    [F.GaG.STICKER]: {
        [F.gGk.ID]: !0,
        [F.gGk.TYPE]: !0,
        [F.gGk.ASSET]: !0,
        [F.gGk.FORMAT_TYPE]: !0,
        [F.gGk.AVAILABLE]: !0,
        [F.gGk.GUILD_ID]: !0,
    },
    [F.GaG.GUILD_HOME]: { [F.gGk.ENTITY_TYPE]: !0 },
    [F.GaG.GUILD_ONBOARDING]: { [F.gGk.PROMPTS]: !0 },
    [F.GaG.GUILD_SOUNDBOARD]: { [F.gGk.ID]: !0, [F.gGk.SOUND_ID]: !0 },
};
function w(e, t) {
    if (
        e.actionType === F.RWi.DELETE &&
        e.action !== F.F_X.MEMBER_BAN_ADD &&
        e.action !== F.F_X.MEMBER_KICK &&
        e.action !== F.F_X.MEMBER_PRUNE
    )
        return t.key !== F.gGk.REASON;
    let n = H[e.targetType];
    return null != n && !0 === n[t.key];
}
function W(e) {
    let { changes: t } = e;
    return null != t && t.some((t) => !w(e, t));
}
let Y = () => [
    { value: F.F_X.ALL, label: X.intl.string(X.t.QxEVcv), valueLabel: X.intl.string(X.t.an9Ry3) },
    { value: F.F_X.GUILD_UPDATE, label: X.intl.string(X.t["5INZa3"]) },
    { value: F.F_X.CHANNEL_CREATE, label: X.intl.string(X.t["2uh4vJ"]) },
    { value: F.F_X.CHANNEL_UPDATE, label: X.intl.string(X.t.mGsBLV) },
    { value: F.F_X.CHANNEL_DELETE, label: X.intl.string(X.t.hCHzAr) },
    { value: F.F_X.CHANNEL_OVERWRITE_CREATE, label: X.intl.string(X.t["8TnAMP"]) },
    { value: F.F_X.CHANNEL_OVERWRITE_UPDATE, label: X.intl.string(X.t.Jqx0Bi) },
    { value: F.F_X.CHANNEL_OVERWRITE_DELETE, label: X.intl.string(X.t.gBXOr4) },
    { value: F.F_X.CHANNEL_POSITION_UPDATE, label: X.intl.string(X.t.hKfSwp) },
    { value: F.F_X.MEMBER_KICK, label: X.intl.string(X.t["Q1/hN8"]) },
    { value: F.F_X.MEMBER_PRUNE, label: X.intl.string(X.t.tOTTja) },
    { value: F.F_X.MEMBER_BAN_ADD, label: X.intl.string(X.t["NfPn+e"]) },
    { value: F.F_X.MEMBER_BAN_REMOVE, label: X.intl.string(X.t.XCsGfI) },
    { value: F.F_X.MEMBER_UPDATE, label: X.intl.string(X.t["F/jmNJ"]) },
    { value: F.F_X.MEMBER_ROLE_UPDATE, label: X.intl.string(X.t.zAveSI) },
    { value: F.F_X.MEMBER_MOVE, label: X.intl.string(X.t.QshteR) },
    { value: F.F_X.MEMBER_DISCONNECT, label: X.intl.string(X.t.Z45os7) },
    { value: F.F_X.BOT_ADD, label: X.intl.string(X.t.vuH24Z) },
    { value: F.F_X.THREAD_CREATE, label: X.intl.string(X.t["+zl0DG"]) },
    { value: F.F_X.THREAD_UPDATE, label: X.intl.string(X.t.rbIry3) },
    { value: F.F_X.THREAD_DELETE, label: X.intl.string(X.t.hFjNEA) },
    { value: F.F_X.ROLE_CREATE, label: X.intl.string(X.t.AbxKtv) },
    { value: F.F_X.ROLE_UPDATE, label: X.intl.string(X.t.t3Z6sU) },
    { value: F.F_X.ROLE_DELETE, label: X.intl.string(X.t.YsFpa4) },
    { value: F.F_X.ROLE_POSITION_UPDATE, label: X.intl.string(X.t["g+lLUV"]) },
    { value: F.F_X.ONBOARDING_PROMPT_CREATE, label: X.intl.string(X.t.ZV9tqc) },
    { value: F.F_X.ONBOARDING_PROMPT_UPDATE, label: X.intl.string(X.t.PcOdvX) },
    { value: F.F_X.ONBOARDING_PROMPT_DELETE, label: X.intl.string(X.t["+r33Na"]) },
    { value: F.F_X.ONBOARDING_CREATE, label: X.intl.string(X.t.uDADde) },
    { value: F.F_X.ONBOARDING_UPDATE, label: X.intl.string(X.t.J1H1wg) },
    { value: F.F_X.HOME_SETTINGS_CREATE, label: X.intl.string(X.t.Di4cvI) },
    { value: F.F_X.HOME_SETTINGS_UPDATE, label: X.intl.string(X.t.tzyrJH) },
    { value: F.F_X.INVITE_CREATE, label: X.intl.string(X.t["0BNJdX"]) },
    { value: F.F_X.INVITE_UPDATE, label: X.intl.string(X.t["o++obV"]) },
    { value: F.F_X.INVITE_DELETE, label: X.intl.string(X.t.iP40Az) },
    { value: F.F_X.WEBHOOK_CREATE, label: X.intl.string(X.t["tBF4+S"]) },
    { value: F.F_X.WEBHOOK_UPDATE, label: X.intl.string(X.t.eV3McO) },
    { value: F.F_X.WEBHOOK_DELETE, label: X.intl.string(X.t.AAL3K1) },
    { value: F.F_X.EMOJI_CREATE, label: X.intl.string(X.t.RuWm0V) },
    { value: F.F_X.EMOJI_UPDATE, label: X.intl.string(X.t.WzdUY7) },
    { value: F.F_X.EMOJI_DELETE, label: X.intl.string(X.t.c3dK2L) },
    { value: F.F_X.MESSAGE_DELETE, label: X.intl.string(X.t.daTfXh) },
    { value: F.F_X.MESSAGE_BULK_DELETE, label: X.intl.string(X.t.nrBxeh) },
    { value: F.F_X.MESSAGE_PIN, label: X.intl.string(X.t.MUldyN) },
    { value: F.F_X.MESSAGE_UNPIN, label: X.intl.string(X.t.n4zKhA) },
    { value: F.F_X.INTEGRATION_CREATE, label: X.intl.string(X.t.deNm8x) },
    { value: F.F_X.INTEGRATION_UPDATE, label: X.intl.string(X.t.HT7Sfg) },
    { value: F.F_X.INTEGRATION_DELETE, label: X.intl.string(X.t["+kJ09q"]) },
    { value: F.F_X.STICKER_CREATE, label: X.intl.string(X.t["3DzNjU"]) },
    { value: F.F_X.STICKER_UPDATE, label: X.intl.string(X.t.tdhW5b) },
    { value: F.F_X.STICKER_DELETE, label: X.intl.string(X.t["+ZhGOk"]) },
    { value: F.F_X.STAGE_INSTANCE_CREATE, label: X.intl.string(X.t.sPbjA6) },
    { value: F.F_X.STAGE_INSTANCE_UPDATE, label: X.intl.string(X.t.cW9LfJ) },
    { value: F.F_X.STAGE_INSTANCE_DELETE, label: X.intl.string(X.t["U1r+yD"]) },
    { value: F.F_X.GUILD_SCHEDULED_EVENT_CREATE, label: X.intl.string(X.t.H81Zyy) },
    { value: F.F_X.GUILD_SCHEDULED_EVENT_UPDATE, label: X.intl.string(X.t["FM69l+"]) },
    { value: F.F_X.GUILD_SCHEDULED_EVENT_DELETE, label: X.intl.string(X.t.Rq28Bh) },
    { value: F.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE, label: X.intl.string(X.t.iPdFOt) },
    { value: F.F_X.AUTO_MODERATION_BLOCK_MESSAGE, label: X.intl.string(X.t.gNq5z6) },
    { value: F.F_X.AUTO_MODERATION_RULE_CREATE, label: X.intl.string(X.t.f72Zqb) },
    { value: F.F_X.AUTO_MODERATION_RULE_UPDATE, label: X.intl.string(X.t.XeqIiv) },
    { value: F.F_X.AUTO_MODERATION_RULE_DELETE, label: X.intl.string(X.t.syAApU) },
    { value: F.F_X.GUILD_HOME_FEATURE_ITEM, label: X.intl.string(X.t.lhG5KN) },
    { value: F.F_X.GUILD_HOME_REMOVE_ITEM, label: X.intl.string(X.t.lRPRwS) },
    { value: F.F_X.SOUNDBOARD_SOUND_CREATE, label: X.intl.string(X.t.yoRi5r) },
    { value: F.F_X.SOUNDBOARD_SOUND_UPDATE, label: X.intl.string(X.t.uKlG0Z) },
    { value: F.F_X.SOUNDBOARD_SOUND_DELETE, label: X.intl.string(X.t.gq0iCT) },
    { value: F.F_X.VOICE_CHANNEL_STATUS_CREATE, label: X.intl.string(X.t.rGr0YM) },
    { value: F.F_X.VOICE_CHANNEL_STATUS_DELETE, label: X.intl.string(X.t.V9PEQ4) },
];
function K(e, t) {
    return null != t.changes ? t.changes.find((t) => t.key === e) : null;
}
function z(e, t) {
    return null != t.changes ? t.changes.filter((t) => t.key === e) : [];
}
function J(e) {
    let t = Y().find((t) => t.value === e.action);
    return null != K(F.gGk.COMMUNICATION_DISABLED_UNTIL, e) ? X.intl.string(X.t.z3wbj8) : (t?.label ?? null);
}
let Q = {
    [d.pJ.SECONDS]: (e) => X.intl.formatToPlainString(X.t.geSp4K, { seconds: e }),
    [d.pJ.MINUTES]: (e) => X.intl.formatToPlainString(X.t.iXLF9W, { minutes: e }),
    [d.pJ.HOURS]: (e) => X.intl.formatToPlainString(X.t.xCjYxK, { hours: e }),
    [d.pJ.DAYS]: (e) => X.intl.formatToPlainString(X.t["k2UNz+"], { days: e }),
};
function q(e) {
    let t = K(F.gGk.COMMUNICATION_DISABLED_UNTIL, e),
        n = z(F.gGk.ROLES_ADD, e).length > 0,
        l = z(F.gGk.ROLES_REMOVE, e).length > 0;
    if (null != t) {
        if (t?.newValue != null) {
            let n = new Date(t?.newValue).getTime() - x.default.extractTimestamp(e.id),
                l = Math.round(n / 1e3 / 60),
                r = (0, d.$l)(l, y);
            if (null == r.unit || null == r.time) return null;
            if (r.unit in Q) {
                let e = r.unit,
                    t = r.unit === d.pJ.SECONDS ? Math.round(n / 1e3) : r.time;
                return Q[e](t);
            }
        } else if (t?.oldValue != null) return X.intl.string(X.t.MA1ltr);
    } else if (n && l) return X.intl.string(X.t.RdMMew);
    else if (n) return X.intl.string(X.t["4GQqs8"]);
    else if (l) return X.intl.string(X.t["8mQ6x0"]);
    return null;
}
function Z(e) {
    let t = z(F.gGk.ROLES_ADD, e),
        n = z(F.gGk.ROLES_REMOVE, e),
        l = t
            ?.map((e) => {
                let { newValue: t } = e;
                return t
                    ?.map((e) => {
                        let { name: t } = e;
                        return t;
                    })
                    .join(", ");
            })
            .join(", "),
        r = n
            ?.map((e) => {
                let { newValue: t } = e;
                return t
                    ?.map((e) => {
                        let { name: t } = e;
                        return t;
                    })
                    .join(", ");
            })
            .join(", ");
    return t.length > 0 && n.length > 0
        ? X.intl.formatToPlainString(X.t.tZw1EW, { roleNamesAdded: l, roleNamesRemoved: r })
        : t.length > 0
          ? X.intl.formatToPlainString(X.t["/mTqt5"], { roleNames: l })
          : n.length > 0
            ? X.intl.formatToPlainString(X.t.Wk4pAJ, { roleNames: r })
            : null;
}
function $(e, t) {
    let { unique_count: n, unique_overflow: l, member: r } = e.options,
        a = null != n ? Number(n) : null;
    return null == a || Number.isNaN(a) || a < 1
        ? t.legacy
        : "1" === l
          ? t.usersOverflow
          : 1 === a && null != r
            ? t.named
            : t.users;
}
function ee(e) {
    switch (e.action) {
        case F.F_X.GUILD_UPDATE:
            return X.t.LjZO31;
        case F.F_X.CHANNEL_CREATE:
            let t = null != e.changes ? e.changes.find((e) => e.key === F.gGk.TYPE) : null;
            if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
            switch (t.newValue) {
                case F.rbe.GUILD_STAGE_VOICE:
                    return X.t["OKp4+o"];
                case F.rbe.GUILD_VOICE:
                    return X.t.NPOy4G;
                case F.rbe.GUILD_CATEGORY:
                    return X.t.T3KIjz;
                case F.rbe.GUILD_FORUM:
                    return X.t.VvNgHX;
                case F.rbe.GUILD_MEDIA:
                    return X.t["4NWSxa"];
                case F.rbe.GUILD_ANNOUNCEMENT:
                    return X.t.eYP6UV;
                default:
                    return X.t.wrYNG2;
            }
        case F.F_X.CHANNEL_UPDATE:
            return X.t.nTYk6B;
        case F.F_X.CHANNEL_DELETE:
            return X.t.ynfvkm;
        case F.F_X.CHANNEL_OVERWRITE_CREATE:
            return X.t.l5Cu1a;
        case F.F_X.CHANNEL_OVERWRITE_UPDATE:
            return X.t.uhtbNU;
        case F.F_X.CHANNEL_OVERWRITE_DELETE:
            return X.t["HASt/3"];
        case F.F_X.CHANNEL_POSITION_UPDATE:
            return X.t.d3aX5b;
        case F.F_X.MEMBER_KICK:
            return X.t.B5hDZX;
        case F.F_X.MEMBER_PRUNE:
            return X.t.qKOZTP;
        case F.F_X.MEMBER_BAN_ADD:
            return X.t["XklUm/"];
        case F.F_X.MEMBER_BAN_REMOVE:
            return X.t.o3Y6HD;
        case F.F_X.MEMBER_UPDATE:
            return X.t.pznhLN;
        case F.F_X.MEMBER_ROLE_UPDATE:
            return X.t.Vngfia;
        case F.F_X.MEMBER_MOVE:
            return $(e, { legacy: X.t.Yt6NkU, named: X.t.VW2XVd, users: X.t.hEqea3, usersOverflow: X.t.qXazAb });
        case F.F_X.MEMBER_DISCONNECT:
            return $(e, { legacy: X.t.K4eCZw, named: X.t.tTwGD8, users: X.t.lODaeu, usersOverflow: X.t.xuGjhY });
        case F.F_X.BOT_ADD:
            return X.t.fWvX0G;
        case F.F_X.ROLE_CREATE:
            return X.t.UTLTx6;
        case F.F_X.ROLE_UPDATE:
            return X.t.NRbN18;
        case F.F_X.ROLE_DELETE:
            return X.t["4s63tb"];
        case F.F_X.ROLE_POSITION_UPDATE:
            return X.t.jZeaoW;
        case F.F_X.INVITE_CREATE:
            return X.t.YHOXWy;
        case F.F_X.INVITE_UPDATE:
            return X.t.ja3kGS;
        case F.F_X.INVITE_DELETE:
            return X.t["3n/iWk"];
        case F.F_X.WEBHOOK_CREATE:
            return X.t.MhYhil;
        case F.F_X.WEBHOOK_UPDATE:
            return X.t["6GTlWB"];
        case F.F_X.WEBHOOK_DELETE:
            return X.t.in0VjZ;
        case F.F_X.EMOJI_CREATE:
            return X.t["7vekRO"];
        case F.F_X.EMOJI_UPDATE:
            return X.t.IsCKfh;
        case F.F_X.EMOJI_DELETE:
            return X.t.JnUaVG;
        case F.F_X.STICKER_CREATE:
            return X.t.DRZifq;
        case F.F_X.STICKER_UPDATE:
            return X.t.bhujGc;
        case F.F_X.STICKER_DELETE:
            return X.t.rGEP9U;
        case F.F_X.MESSAGE_DELETE:
            return X.t["HPkD+M"];
        case F.F_X.MESSAGE_BULK_DELETE:
            return X.t["3RIvLE"];
        case F.F_X.MESSAGE_PIN:
            return X.t.Yna7E7;
        case F.F_X.MESSAGE_UNPIN:
            return X.t.NCxXUW;
        case F.F_X.INTEGRATION_CREATE:
            return X.t.HYvCb3;
        case F.F_X.INTEGRATION_UPDATE:
            return X.t.ibCCOS;
        case F.F_X.INTEGRATION_DELETE:
            return X.t["8zScWY"];
        case F.F_X.STAGE_INSTANCE_CREATE:
            return X.t["n7x/DF"];
        case F.F_X.STAGE_INSTANCE_UPDATE:
            return X.t["0hQYU4"];
        case F.F_X.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return X.t["Oi/in9"];
            return X.t["7ZIFm9"];
        case F.F_X.GUILD_SCHEDULED_EVENT_CREATE:
            return X.t.S7k52p;
        case F.F_X.GUILD_SCHEDULED_EVENT_UPDATE:
            return X.t.ebTK11;
        case F.F_X.GUILD_SCHEDULED_EVENT_DELETE:
            return X.t["/ARPKQ"];
        case F.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case F.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return X.t["8qCI36"];
        case F.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return X.t.zYb2da;
        case F.F_X.THREAD_CREATE:
            let n = null != e.changes ? e.changes.find((e) => e.key === F.gGk.TYPE) : null;
            if (null == n) throw Error("[AuditLog] Could not find type change for thread create");
            switch (n.newValue) {
                case F.rbe.PRIVATE_THREAD:
                    return X.t.Br0y5w;
                case F.rbe.ANNOUNCEMENT_THREAD:
                    return X.t["6uaMmO"];
                default:
                    return X.t["2cxQ7G"];
            }
        case F.F_X.THREAD_UPDATE:
            return X.t.PSsy4t;
        case F.F_X.THREAD_DELETE:
            return X.t.s3Khn8;
        case F.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return X.t.uzCqBm;
        case F.F_X.AUTO_MODERATION_BLOCK_MESSAGE:
            return X.t.NqWv2K;
        case F.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL:
            if (e.options?.auto_moderation_rule_trigger_type === k.uh.USER_PROFILE.toString()) return X.t.YQsjej;
            return X.t.SD0PwJ;
        case F.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return X.t.Vk4TwX;
        case F.F_X.AUTO_MODERATION_QUARANTINE_USER:
            return X.t["/W5u5o"];
        case F.F_X.CREATOR_MONETIZATION_REQUEST_CREATED:
            return X.t.ONvWyr;
        case F.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return X.t["ryGLk+"];
        case F.F_X.AUTO_MODERATION_RULE_CREATE:
            return X.t["NKljj+"];
        case F.F_X.AUTO_MODERATION_RULE_UPDATE:
            return X.t["3wEA9u"];
        case F.F_X.AUTO_MODERATION_RULE_DELETE:
            return X.t.umua3n;
        case F.F_X.ONBOARDING_PROMPT_CREATE:
            return X.t["/8A1g2"];
        case F.F_X.ONBOARDING_PROMPT_UPDATE:
            return X.t.ArIrWI;
        case F.F_X.ONBOARDING_PROMPT_DELETE:
            return X.t.IuBTao;
        case F.F_X.ONBOARDING_CREATE:
            return X.t["wDaq3/"];
        case F.F_X.ONBOARDING_UPDATE:
            return X.t["yONu/l"];
        case F.F_X.HOME_SETTINGS_CREATE:
            return X.t.dSdCjG;
        case F.F_X.HOME_SETTINGS_UPDATE:
            return X.t.XHE8qv;
        case F.F_X.GUILD_HOME_FEATURE_ITEM:
            let l = null != e.changes ? e.changes.find((e) => e.key === F.gGk.ENTITY_TYPE) : null;
            if (null == l) return X.t["UZ+U3A"];
            switch (l.newValue) {
                case E.MESSAGE:
                    return X.t["PyEa+J"];
                case E.FORUM_POST:
                    return X.t.hCuAb1;
                default:
                    return X.t["UZ+U3A"];
            }
        case F.F_X.GUILD_HOME_REMOVE_ITEM:
            return X.t.kPReun;
        case F.F_X.SOUNDBOARD_SOUND_CREATE:
            return X.t["0PD83V"];
        case F.F_X.SOUNDBOARD_SOUND_UPDATE:
            return X.t.CM8n1w;
        case F.F_X.SOUNDBOARD_SOUND_DELETE:
            return X.t["kVz4/0"];
        case F.F_X.VOICE_CHANNEL_STATUS_CREATE:
            return X.t.MWjnU7;
        case F.F_X.VOICE_CHANNEL_STATUS_DELETE:
            return X.t.aS8Krq;
        case F.F_X.GUILD_MEMBER_VERIFICATION_UPDATE:
            return X.t["NUKUb+"];
        case F.F_X.GUILD_PROFILE_UPDATE:
            return X.t.Ed6hF1;
        case F.F_X.GUILD_MIGRATE_PIN_PERMISSION:
            return X.t["3Ne7MA"];
        case F.F_X.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION:
            return X.t["naflH+"];
        default:
            return null;
    }
}
function et(e) {
    switch (e) {
        case P.lx.GUILD_FEED_REMOVED:
            return X.intl.string(X.t["5G8ZD4"]);
        case P.lx.ACTIVE_CHANNELS_REMOVED:
            return X.intl.string(X.t["4YLtzC"]);
        case P.lx.PINNED:
            return X.intl.string(X.t["1QLRYb"]);
    }
    return null;
}
function en(e) {
    switch (e) {
        case P.lx.GUILD_FEED_REMOVED:
            return X.intl.string(X.t.S5kuWQ);
        case P.lx.ACTIVE_CHANNELS_REMOVED:
            return X.intl.string(X.t["8qpgcz"]);
        case P.lx.PINNED:
            return X.intl.string(X.t.CMweGA);
    }
    return null;
}
function el(e, t) {
    switch (e) {
        case F.xBc.CREATE_INSTANT_INVITE:
            return X.intl.string(X.t.zJrgTG);
        case F.xBc.KICK_MEMBERS:
            return X.intl.string(X.t.pBNv6i);
        case F.xBc.BAN_MEMBERS:
            return X.intl.string(X.t.oTBA7N);
        case F.xBc.ADMINISTRATOR:
            return X.intl.string(X.t.PGvZqX);
        case F.xBc.MANAGE_CHANNELS:
            if (t.targetType === F.GaG.CHANNEL || t.targetType === F.GaG.CHANNEL_OVERWRITE)
                return X.intl.string(X.t.nAw15L);
            return X.intl.string(X.t["9qLtWs"]);
        case F.xBc.MANAGE_GUILD:
            return X.intl.string(X.t.QZRcfO);
        case F.xBc.VIEW_GUILD_ANALYTICS:
            return X.intl.string(X.t["rQJBE/"]);
        case F.xBc.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return X.intl.string(X.t["0lTLTv"]);
        case F.xBc.CHANGE_NICKNAME:
            return X.intl.string(X.t.dilOF6);
        case F.xBc.MANAGE_NICKNAMES:
            return X.intl.string(X.t["t+Ct5x"]);
        case F.xBc.MANAGE_ROLES:
            return X.intl.string(X.t["C8d+oG"]);
        case F.xBc.MANAGE_WEBHOOKS:
            return X.intl.string(X.t["/ADKmM"]);
        case F.xBc.CREATE_GUILD_EXPRESSIONS:
            return X.intl.string(X.t.HarVuP);
        case F.xBc.MANAGE_GUILD_EXPRESSIONS:
            return X.intl.string(X.t.bbuXIn);
        case F.xBc.VIEW_AUDIT_LOG:
            return X.intl.string(X.t.fZgLpA);
        case F.xBc.VIEW_CHANNEL:
            if (t.targetType === F.GaG.CHANNEL || t.targetType === F.GaG.CHANNEL_OVERWRITE)
                return X.intl.string(X.t["W/A4Qp"]);
            return X.intl.string(X.t.uV83yi);
        case F.xBc.SEND_MESSAGES:
            return X.intl.string(X.t.T32rkC);
        case F.xBc.SEND_TTS_MESSAGES:
            return X.intl.string(X.t.Mg7bku);
        case F.xBc.USE_APPLICATION_COMMANDS:
            return X.intl.string(X.t.shbR1a);
        case F.xBc.MANAGE_MESSAGES:
            return X.intl.string(X.t["6lU9xM"]);
        case F.xBc.EMBED_LINKS:
            return X.intl.string(X.t["969dEL"]);
        case F.xBc.ATTACH_FILES:
            return X.intl.string(X.t["3AS4UM"]);
        case F.xBc.READ_MESSAGE_HISTORY:
            return X.intl.string(X.t.l9ufaR);
        case F.xBc.MENTION_EVERYONE:
            return X.intl.string(X.t.Y78KGC);
        case F.xBc.USE_EXTERNAL_EMOJIS:
            return X.intl.string(X.t.BpBGZU);
        case F.xBc.USE_EXTERNAL_STICKERS:
            return X.intl.string(X.t["UeRs+b"]);
        case F.xBc.ADD_REACTIONS:
            return X.intl.string(X.t.yEoJAr);
        case F.xBc.CONNECT:
            return X.intl.string(X.t.S0W8Z5);
        case F.xBc.SPEAK:
            return X.intl.string(X.t["8w1tIR"]);
        case F.xBc.MUTE_MEMBERS:
            return X.intl.string(X.t["8EI30/"]);
        case F.xBc.DEAFEN_MEMBERS:
            return X.intl.string(X.t["9L47Fr"]);
        case F.xBc.MOVE_MEMBERS:
            return X.intl.string(X.t.YtjJPQ);
        case F.xBc.USE_VAD:
            return X.intl.string(X.t["08zAV7"]);
        case F.xBc.PRIORITY_SPEAKER:
            return X.intl.string(X.t.BVK71i);
        case F.xBc.STREAM:
            return X.intl.string(X.t.FlNoSV);
        case F.xBc.USE_SOUNDBOARD:
            return X.intl.string(X.t.Bco7NG);
        case F.xBc.USE_EXTERNAL_SOUNDS:
            return X.intl.string(X.t.pwaVJ6);
        case F.xBc.REQUEST_TO_SPEAK:
            return X.intl.string(X.t["5kicT2"]);
        case F.xBc.USE_EMBEDDED_ACTIVITIES:
            return X.intl.string(X.t.rLSGeh);
        case F.xBc.CREATE_EVENTS:
            return X.intl.string(X.t.qyjZua);
        case F.xBc.MANAGE_EVENTS:
            return X.intl.string(X.t.HIgA5a);
        case F.xBc.CREATE_PUBLIC_THREADS:
            return X.intl.string(X.t["25rKnX"]);
        case F.xBc.CREATE_PRIVATE_THREADS:
            return X.intl.string(X.t.QwbTSa);
        case F.xBc.SEND_MESSAGES_IN_THREADS:
            return X.intl.string(X.t.fTE74g);
        case F.xBc.MANAGE_THREADS:
            return X.intl.string(X.t.kEqgr7);
        case F.xBc.MODERATE_MEMBERS:
            return X.intl.string(X.t["+RL6pz"]);
        case F.xBc.SET_VOICE_CHANNEL_STATUS:
            return X.intl.string(X.t.VBwkUf);
        case F.xBc.SEND_POLLS:
            return X.intl.string(X.t.UMQ7Ww);
        case F.xBc.SEND_VOICE_MESSAGES:
            return X.intl.string(X.t.WlWSBT);
        case F.xBc.USE_EXTERNAL_APPS:
            return X.intl.string(X.t.TtA5rK);
        case F.xBc.PIN_MESSAGES:
            return X.intl.string(X.t.Y5BI39);
        case F.xBc.BYPASS_SLOWMODE:
            return X.intl.string(X.t.kqcjeV);
        case F.xBc.MANAGE_OFFICIAL_MESSAGES:
            return X.intl.string(X.t.Aj9ruN);
    }
    return null;
}
let er = [
    F.F_X.MEMBER_PRUNE,
    F.F_X.MEMBER_DISCONNECT,
    F.F_X.MEMBER_MOVE,
    F.F_X.CHANNEL_POSITION_UPDATE,
    F.F_X.ROLE_POSITION_UPDATE,
    F.F_X.CREATOR_MONETIZATION_REQUEST_CREATED,
    F.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED,
];
function ea(e, t) {
    let n = [];
    return (
        e.forEach((e) => {
            let l = (function (e, t) {
                    switch (e.targetType) {
                        case F.GaG.GUILD:
                        case F.GaG.GUILD_HOME:
                        case F.GaG.GUILD_PROFILE:
                            return t;
                        case F.GaG.CHANNEL:
                        case F.GaG.CHANNEL_OVERWRITE:
                            return e_(
                                e,
                                F.gGk.NAME,
                                (e) => R.A.getChannel(e),
                                (e) => (0, g.m1)(e, C.default, h.A, !0),
                            );
                        case F.GaG.USER:
                            return e_(
                                e,
                                F.gGk.NICK,
                                (e) => C.default.getUser(e),
                                (e) => e,
                            );
                        case F.GaG.ROLE:
                            return e_(
                                e,
                                F.gGk.NAME,
                                (e) => L.A.getRole(t.id, e),
                                (e) => e.name,
                            );
                        case F.GaG.ONBOARDING_PROMPT:
                            let n = e_(
                                e,
                                F.gGk.ID,
                                (e) => G.A.getOnboardingPrompt(e),
                                (e) => e.title,
                            );
                            return null == n || "" === n ? X.intl.string(X.t.ZNQyiR) : n;
                        case F.GaG.GUILD_ONBOARDING:
                        case F.GaG.GUILD_MEMBER_VERIFICATION:
                            return t;
                        case F.GaG.INVITE:
                            return e_(e, F.gGk.CODE, F.FXj);
                        case F.GaG.INTEGRATION:
                            return e_(
                                e,
                                F.gGk.TYPE,
                                (e) => p.A.integrations.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case F.GaG.WEBHOOK:
                            return e_(
                                e,
                                F.gGk.NAME,
                                (e) => p.A.webhooks.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case F.GaG.EMOJI:
                            return e_(
                                e,
                                F.gGk.NAME,
                                (e) => I.Ay.getGuildEmoji(t.id).find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case F.GaG.STICKER:
                            return e_(
                                e,
                                F.gGk.NAME,
                                (e) => m.A.getStickerById(e),
                                (e) => e.name,
                            );
                        case F.GaG.STAGE_INSTANCE:
                            return e_(
                                e,
                                F.gGk.TOPIC,
                                (e) => Object.values(S.A.getStageInstancesByGuild(t.id))?.find((t) => t.id === e),
                                (e) => e.topic,
                            );
                        case F.GaG.GUILD_SCHEDULED_EVENT:
                        case F.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return e_(
                                e,
                                F.gGk.NAME,
                                (e) => p.A.guildScheduledEvents.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case F.GaG.THREAD:
                            return e_(
                                e,
                                F.gGk.NAME,
                                (e) => p.A.threads.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case F.GaG.APPLICATION_COMMAND:
                            if (e.targetId === e.options.application_id) {
                                let t = p.A.integrations.find((t) => t.application?.id === e.targetId);
                                if (null != t) return t.name;
                                return e.targetId;
                            }
                            return e_(
                                e,
                                F.gGk.NAME,
                                (e) => p.A.applicationCommands.find((t) => t.id === e),
                                (e) => {
                                    let t =
                                        null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
                                    return e.type === A.kc.CHAT ? `/\u2060${t}` : t;
                                },
                            );
                        case F.GaG.AUTO_MODERATION_RULE:
                            return e_(
                                e,
                                F.gGk.NAME,
                                (e) => p.A.automodRules.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case F.GaG.GUILD_SOUNDBOARD:
                            return e_(e, F.gGk.NAME, F.FXj);
                        case F.GaG.HOME_SETTINGS:
                            return e_(
                                e,
                                F.gGk.GUILD_ID,
                                (e) => O.h.getSettings(e),
                                () => X.intl.string(X.t.VbpLyU),
                                t.id,
                            );
                        case F.GaG.VOICE_CHANNEL_STATUS:
                            return e_(
                                e,
                                F.gGk.STATUS,
                                (e) => R.A.getChannel(e),
                                (e) => (0, g.m1)(e, C.default, h.A, !0),
                            );
                        default:
                            return (b.warn("Unknown targetType for log", e), null);
                    }
                })(e, t),
                r = C.default.getUser(e.userId);
            if (null != l || er.includes(e.action)) {
                if (
                    null !=
                    (e = (e = (e = e.set("user", r)).set("target", l)).set(
                        "options",
                        (function (e) {
                            if (null != e.options) {
                                let t = { ...e.options };
                                switch (e.options.type) {
                                    case F.AO_.USER:
                                        t.subtarget = ec(
                                            e.options.id,
                                            (e) => C.default.getUser(e),
                                            (e) => f.Ay.getUserTag(e),
                                        );
                                        break;
                                    case F.AO_.ROLE:
                                        t.subtarget = ec(e.options.role_name, F.FXj);
                                }
                                if (
                                    (null != e.options.channel_id &&
                                        (t.channel = e_(
                                            e,
                                            "",
                                            (e) => R.A.getChannel(e),
                                            (e) => e,
                                            e.options.channel_id,
                                        )),
                                    null != e.options.members_removed &&
                                        0 !== e.options.members_removed &&
                                        (t.count = e.options.members_removed),
                                    null != e.options.event_exception_id)
                                ) {
                                    let n = p.A.guildScheduledEvents.find((t) => t.id === e.targetId),
                                        l = n?.guild_scheduled_event_exceptions.find(
                                            (t) => t.event_exception_id === e.options.event_exception_id,
                                        );
                                    t.subtarget = (0, M.i$)(
                                        s()(x.default.extractTimestamp(l?.event_exception_id ?? "0")),
                                        "LL",
                                    );
                                }
                                return (
                                    (e.action === F.F_X.MEMBER_MOVE || e.action === F.F_X.MEMBER_DISCONNECT) &&
                                        null != e.options.member_id &&
                                        "" !== e.options.member_id &&
                                        (t.member = C.default.getUser(e.options.member_id) ?? null),
                                    t
                                );
                            }
                            return e.options;
                        })(e),
                    )).changes
                ) {
                    let n = [];
                    (e.changes.forEach((l) => {
                        let r = (function (e, t, n) {
                            if (t.action === F.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let t = e.newValue || e.oldValue;
                                switch (t.type) {
                                    case F.g0g.ROLE:
                                        e.subtarget = ec(
                                            t.id,
                                            (e) => L.A.getRole(n.id, e),
                                            (e) => e.name,
                                        );
                                        break;
                                    case F.g0g.USER:
                                        e.subtarget = ec(
                                            t.id,
                                            (e) => C.default.getUser(e),
                                            (e) => f.Ay.getUserTag(e),
                                        );
                                        break;
                                    case F.g0g.CHANNEL:
                                        t.id === a()(n.id).subtract(1).toString()
                                            ? (e.subtarget = X.intl.string(X.t.MSYhgh))
                                            : (e.subtarget = ec(
                                                  t.id,
                                                  (e) => R.A.getChannel(e),
                                                  (e) => (0, g.m1)(e, C.default, h.A, !0),
                                              ));
                                }
                                return e;
                            }
                            switch (e.key) {
                                case F.gGk.OWNER_ID:
                                    return eo(e, (e) => C.default.getUser(e));
                                case F.gGk.CHANNEL_ID:
                                case F.gGk.AFK_CHANNEL_ID:
                                case F.gGk.SYSTEM_CHANNEL_ID:
                                case F.gGk.RULES_CHANNEL_ID:
                                case F.gGk.PUBLIC_UPDATES_CHANNEL_ID:
                                    return eo(
                                        e,
                                        (e) => R.A.getChannel(e),
                                        (e) => (0, g.m1)(e, C.default, h.A, !0),
                                    );
                                case F.gGk.AFK_TIMEOUT:
                                    return eo(e, (e) => e / 60);
                                case F.gGk.BITRATE:
                                    return eo(e, (e) => e / 1e3);
                                case F.gGk.COLOR:
                                    return eo(e, (e) => (0, _.Hl)(e).toUpperCase());
                                case F.gGk.THEME_COLORS:
                                    return eo(
                                        e,
                                        (e) => `${(0, _.Hl)(e[0]).toUpperCase()}, ${(0, _.Hl)(e[1]).toUpperCase()}`,
                                    );
                                case F.gGk.MAX_AGE:
                                    return eo(e, (e) => {
                                        let t = U.Ay.getMaxAgeOptionByValue(e);
                                        return null !== t ? t.label : e;
                                    });
                                case F.gGk.PERMISSIONS: {
                                    let t = [],
                                        { added: n, removed: l } = ei(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let e = new D.QO(F.gGk.PERMISSIONS_GRANTED, null, n);
                                        t.push(e);
                                    }
                                    if (l.length > 0) {
                                        let e = new D.QO(F.gGk.PERMISSIONS_DENIED, null, l);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case F.gGk.PERMISSIONS_GRANTED:
                                case F.gGk.PERMISSIONS_DENIED: {
                                    let t = [],
                                        { added: n, removed: l } = ei(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let l = new D.QO(e.key, null, n);
                                        t.push(l);
                                    }
                                    if (l.length > 0) {
                                        let e = new D.QO(F.gGk.PERMISSIONS_RESET, l, l);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case F.gGk.FLAGS: {
                                    let t = [],
                                        { added: n, removed: l } = (function (e, t) {
                                            let n = "number" == typeof e ? e : 0,
                                                l = "number" == typeof t ? t : 0,
                                                r = c.VL(l, n),
                                                a = c.VL(n, l),
                                                i = [],
                                                s = [];
                                            for (let e of Object.values(P.lx))
                                                (c.Lt(r, e) && i.push(e), c.Lt(a, e) && s.push(e));
                                            return { added: i, removed: s };
                                        })(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let l = new D.QO(e.key, null, n);
                                        t.push(l);
                                    }
                                    if (l.length > 0) {
                                        let n = new D.QO(e.key, l, null);
                                        t.push(n);
                                    }
                                    return t;
                                }
                                case F.gGk.PREFERRED_LOCALE:
                                    return eo(e, (e) => {
                                        let t = (0, X.getAvailableLocales)().find((t) => t.value === e);
                                        return null != t ? t.name : null;
                                    });
                                case F.gGk.VIDEO_QUALITY_MODE:
                                    return eo(e, (e) =>
                                        e === F.K3c.FULL ? X.intl.string(X.t["7jOoJE"]) : X.intl.string(X.t.jjKYpu),
                                    );
                                case F.gGk.SYSTEM_CHANNEL_FLAGS:
                                    let l, r;
                                    return (
                                        (l = {
                                            [F.ogj.SUPPRESS_JOIN_NOTIFICATIONS]:
                                                F.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                            [F.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS]:
                                                F.gGk.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                            [F.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]:
                                                F.gGk.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                            [F.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES]:
                                                F.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES,
                                        }),
                                        (r = []),
                                        Object.values(F.ogj).forEach((t) => {
                                            let n = (e.oldValue & t) === t,
                                                a = (e.newValue & t) === t;
                                            if (n === a) return;
                                            let i = new D.QO(l[t], !n, !a);
                                            r.push(i);
                                        }),
                                        r
                                    );
                                case F.gGk.AUTO_MODERATION_ACTIONS:
                                    if (t.targetType === F.GaG.AUTO_MODERATION_RULE)
                                        return eo(
                                            e,
                                            (e) => e.map((e) => e.type),
                                            (e) => e.map(N.PZ).join(", "),
                                        );
                                    break;
                                case F.gGk.AUTO_MODERATION_EVENT_TYPE:
                                    if (t.targetType === F.GaG.AUTO_MODERATION_RULE) return eo(e, N.X3);
                                    break;
                                case F.gGk.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (t.targetType === F.GaG.AUTO_MODERATION_RULE) return eo(e, N.nl);
                                    break;
                                case F.gGk.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (t.targetType === F.GaG.AUTO_MODERATION_RULE)
                                        return eo(e, (e) =>
                                            null != e && "object" == typeof e
                                                ? null != e.keyword_filter && Array.isArray(e.keyword_filter)
                                                    ? X.intl.formatToMarkdownString(X.t.y91UXV, {
                                                          newValue: e.keyword_filter.map((e) => `'${e}'`).join(", "),
                                                      })
                                                    : JSON.stringify(e)
                                                : e,
                                        );
                                    break;
                                case F.gGk.AUTO_MODERATION_ADD_KEYWORDS:
                                case F.gGk.AUTO_MODERATION_REMOVE_KEYWORDS:
                                case F.gGk.AUTO_MODERATION_ADD_REGEX_PATTERNS:
                                case F.gGk.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
                                case F.gGk.AUTO_MODERATION_ADD_ALLOW_LIST:
                                case F.gGk.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                                    if (t.targetType === F.GaG.AUTO_MODERATION_RULE)
                                        return eo(e, (e) =>
                                            null != e && Array.isArray(e)
                                                ? e.map((e) => `'${e}'`).join(", ")
                                                : JSON.stringify(e),
                                        );
                                    break;
                                case F.gGk.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (t.targetType === F.GaG.AUTO_MODERATION_RULE)
                                        return eo(
                                            e,
                                            (e) =>
                                                e
                                                    .map(R.A.getChannel)
                                                    .filter((e) => null != e)
                                                    .map((e) => (0, g.m1)(e, C.default, h.A, !0)),
                                            (e) =>
                                                null != e && e.length > 0 ? e.join(", ") : X.intl.string(X.t["K/EdV8"]),
                                        );
                                    break;
                                case F.gGk.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (t.targetType === F.GaG.AUTO_MODERATION_RULE)
                                        return eo(
                                            e,
                                            (e) =>
                                                e
                                                    .map((e) => L.A.getRole(n.id, e))
                                                    .filter((e) => null != e)
                                                    .map((e) => e.name),
                                            (e) =>
                                                null != e && e.length > 0 ? e.join(", ") : X.intl.string(X.t["K/EdV8"]),
                                        );
                                    break;
                                case F.gGk.ROLE_IDS:
                                    if (t.targetType === F.GaG.INVITE)
                                        return eo(e, (e) =>
                                            e
                                                .map((e) => L.A.getRole(n.id, e))
                                                .filter((e) => null != e)
                                                .map((e) => ({ id: e.id, name: e.name })),
                                        );
                                    break;
                                case F.gGk.AVAILABLE_TAGS:
                                    return eu(e);
                                case F.gGk.APPLIED_TAGS:
                                    return eE(e, t);
                                case F.gGk.SCHEDULED_START_TIME:
                                case F.gGk.SCHEDULED_END_TIME:
                                    return eo(e, (e) => (0, M.i$)(s()(new Date(e)), "LLLL"));
                            }
                            return e;
                        })(l, e, t);
                        Array.isArray(r) ? r.forEach((e) => n.push(e)) : n.push(r);
                    }),
                        (e = e.set("changes", n)));
                }
                n.push(e);
            }
        }),
        n
    );
}
function ei(e, t) {
    let n = o.iu("string" == typeof e ? e : 0),
        l = o.iu("string" == typeof t ? t : 0),
        r = o.TF(l, n),
        a = o.TF(n, l),
        i = [],
        s = [];
    for (let e of Object.values(F.xBc)) (o.zy(r, e) && i.push(e), o.zy(a, e) && s.push(e));
    return { added: i, removed: s };
}
function es(e) {
    return null == e
        ? null
        : {
              id: e.id,
              name: e.name,
              emojiId: 0 !== e.emoji_id ? e.emoji_id : void 0,
              emojiName: e.emoji_name,
              moderated: e.moderated,
          };
}
function eE(e, t) {
    let n = Array.isArray(e.oldValue) ? e.oldValue : [],
        l = Array.isArray(e.newValue) ? e.newValue : [],
        r = R.A.getChannel(t.targetId),
        a = r?.parent_id != null ? R.A.getChannel(r.parent_id) : null,
        i = a?.availableTags ?? [],
        s = {};
    i.forEach((e) => {
        s[e.id] = { name: e.name, emojiId: e.emojiId, emojiName: e.emojiName };
    });
    let E = new Set(n),
        u = new Set(l),
        o = l.filter((e) => !E.has(e)),
        _ = n.filter((e) => !u.has(e)),
        c = [];
    for (let e of o) {
        let t = s[e] ?? { id: e, name: e };
        c.push(new D.QO(F.gGk.AVAILABLE_TAG_ADD, null, t));
    }
    for (let e of _) {
        let t = s[e] ?? { id: e, name: e };
        c.push(new D.QO(F.gGk.AVAILABLE_TAG_DELETE, null, t));
    }
    return c.length > 0 ? c : e;
}
function eu(e) {
    let { oldValue: t, newValue: n } = e,
        l = Array.isArray(t) ? t : [],
        r = Array.isArray(n) ? n : [];
    if (0 === l.length && 0 === r.length) return e;
    let a = {},
        i = {};
    if (
        (l.forEach((e) => {
            a[e.id] = e;
        }),
        r.forEach((e) => {
            i[e.id] = e;
        }),
        l.length < r.length)
    ) {
        for (let e in i) if (null == a[e]) return new D.QO(F.gGk.AVAILABLE_TAG_ADD, null, es(i[e]));
    }
    if (l.length > r.length) {
        for (let e in a) if (null == i[e]) return new D.QO(F.gGk.AVAILABLE_TAG_DELETE, null, es(a[e]));
    }
    for (let e in a) {
        let t = a[e],
            n = i[e];
        if (n?.name !== t.name || n?.emoji_id !== t.emoji_id || n?.emoji_name !== t.emoji_name)
            return new D.QO(F.gGk.AVAILABLE_TAG_EDIT, es(t), es(n));
    }
    return e;
}
function eo(e, t, n) {
    let l = e.newValue,
        r = e.oldValue;
    return (
        null != e.newValue && ((l = t(e.newValue)), null != n && null != l && (l = n(l))),
        null != e.oldValue && ((r = t(e.oldValue)), null != n && null != r && (r = n(r))),
        new D.QO(e.key, r || e.oldValue, l || e.newValue)
    );
}
function e_(e, t, n, l, r) {
    let a = null,
        i = n((r = r ?? e.targetId));
    if ((null != i && null != l && (a = l(i)), null == a)) {
        let t = p.A.deletedTargets[e.targetType];
        null != t && null != t[r] && (a = t[r]);
    }
    if (null == a && null != e.changes) {
        let n = e.changes.find((e) => e.key === t);
        null != n && (a = n.newValue || n.oldValue);
    }
    return a ?? r;
}
function ec(e, t, n) {
    let l = e,
        r = null != e ? t(e) : null;
    return (null != r && null != n && (l = n(r)), l);
}
function ed(e, t) {
    return (n) => (null == n.oldValue ? e : t);
}
function eA(e, t) {
    return (n) => (null == n.newValue ? e : t);
}
function eg(e, t, n, l) {
    return (r) => (null != r.newValue && null != r.oldValue ? e : null != r.newValue ? t : null != r.oldValue ? n : l);
}
function eT(e, t) {
    return (n) => (n.newValue ? e : t);
}
function eI(e) {
    return (t) => e[t.newValue];
}
function eN(e, t) {
    return (n) => e[n.newValue] ?? t;
}
