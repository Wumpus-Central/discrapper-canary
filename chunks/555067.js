(n.r(t),
    n.d(t, {
        transformAppliedForumTagChange: () => ei,
        transformAvailableForumTagChange: () => es,
        getStringForPermission: () => en,
        getSimpleAuditLogTitleContextFromChange: () => Z,
        getChangeTitle: () => $,
        getStringForRemovedChannelFlag: () => et,
        checkChangesToRender: () => W,
        getSimpleAuditLogTitleFromChange: () => J,
        ACTION_FILTER_ITEMS: () => Y,
        shouldNotRenderChangeDetail: () => w,
        getStringForAddedChannelFlag: () => ee,
        getSimpleAuditLogChangeDetails: () => q,
        getChangeStrings: () => V,
        findChangeByKey: () => K,
        transformLogs: () => el,
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
    P = n(652215),
    k = n(746080),
    F = n(243277),
    j = n(539916),
    v = n(988794),
    X = n(375708);
let b = new T.A("AuditLogUtils"),
    y = [d.pJ.DAYS, d.pJ.HOURS, d.pJ.MINUTES, d.pJ.SECONDS];
function B() {
    return { [P.gGk.REASON]: () => X.t["2IW3C5"] };
}
function V(e) {
    switch (e.targetType) {
        case P.GaG.GUILD:
            return {
                [P.gGk.NAME]: () => X.t.CkDiNH,
                [P.gGk.DESCRIPTION]: ec(X.t.RP3Ey3, X.t.QAVj1Y),
                [P.gGk.ICON_HASH]: () => X.t.iLZ8Q9,
                [P.gGk.SPLASH_HASH]: () => X.t["4VV6dn"],
                [P.gGk.DISCOVERY_SPLASH_HASH]: () => X.t["2pds6p"],
                [P.gGk.BANNER_HASH]: ec(X.t.Cxq4zO, X.t["H7eE/9"]),
                [P.gGk.OWNER_ID]: () => X.t["8ltsLT"],
                [P.gGk.REGION]: () => X.t.X9r5Kf,
                [P.gGk.PREFERRED_LOCALE]: () => X.t.UnXuDS,
                [P.gGk.AFK_CHANNEL_ID]: ec(X.t.ClBuA4, X.t["ms+xtL"]),
                [P.gGk.AFK_TIMEOUT]: () => X.t.q21fHa,
                [P.gGk.SYSTEM_CHANNEL_ID]: ec(X.t.H1VXaa, X.t.XhtmxJ),
                [P.gGk.RULES_CHANNEL_ID]: ec(X.t.OI6MG2, X.t.lik3tI),
                [P.gGk.PUBLIC_UPDATES_CHANNEL_ID]: ec(X.t.YxBKrY, X.t.Ehsnij),
                [P.gGk.MFA_LEVEL]: eg({ [P.EkJ.NONE]: X.t.voaCCQ, [P.EkJ.ELEVATED]: X.t.pRNVwz }),
                [P.gGk.WIDGET_ENABLED]: eA(X.t.ADIty8, X.t.nf58VY),
                [P.gGk.WIDGET_CHANNEL_ID]: ec(X.t["6SBsDc"], X.t.deQ5wO),
                [P.gGk.VERIFICATION_LEVEL]: eg({
                    [P.PvD.NONE]: X.t.W27rsc,
                    [P.PvD.LOW]: X.t["V8P+Pw"],
                    [P.PvD.MEDIUM]: X.t.ERQFau,
                    [P.PvD.HIGH]: X.t["83fN0j"],
                    [P.PvD.VERY_HIGH]: X.t.PnkQJE,
                }),
                [P.gGk.DEFAULT_MESSAGE_NOTIFICATIONS]: eg({
                    [P.orn.ALL_MESSAGES]: X.t.LDi76A,
                    [P.orn.ONLY_MENTIONS]: X.t["6K83ba"],
                }),
                [P.gGk.VANITY_URL_CODE]: ec(X.t.Zplsov, X.t.u6cArh),
                [P.gGk.EXPLICIT_CONTENT_FILTER]: eg({
                    [P.gh6.DISABLED]: X.t.fmOeL3,
                    [P.gh6.MEMBERS_WITHOUT_ROLES]: X.t["4FghYw"],
                    [P.gh6.ALL_MEMBERS]: X.t.olyrSm,
                }),
                [P.gGk.PREMIUM_PROGRESS_BAR_ENABLED]: eA(X.t.rBT0sn, X.t["gc+te5"]),
                [P.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => X.t.YbouFH,
                [P.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => X.t.g3DMjB,
                [P.gGk.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => X.t["+fQAel"],
                [P.gGk.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => X.t.E1fc4v,
                [P.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => X.t.XbwtSA,
                ...B(),
            };
        case P.GaG.CHANNEL:
        case P.GaG.CHANNEL_OVERWRITE:
            return {
                [P.gGk.NAME]: e_(X.t.f8Rh0U, X.t.ebD4Qp),
                [P.gGk.POSITION]: e_(X.t.isS8te, X.t.t5uBis),
                [P.gGk.TOPIC]: ed(X.t.esQcxn, X.t["m+veAn"], X.t["ws/1FA"]),
                [P.gGk.BITRATE]: e_(X.t.fw81ak, X.t.MFNlgZ),
                [P.gGk.RTC_REGION_OVERRIDE]: ed(X.t["6kajxx"], X.t.eGOlmU, X.t["0JMZdz"]),
                [P.gGk.USER_LIMIT]: e_(X.t.wk5t7p, X.t.XgjCEh),
                [P.gGk.RATE_LIMIT_PER_USER]: e_(X.t["7lirhF"], X.t.j4CCJR),
                [P.gGk.APPLICATION_ID]: e_(X.t.fnhin8, X.t.mcNs5B),
                [P.gGk.PERMISSIONS_RESET]: () => X.t["+vSBFY"],
                [P.gGk.PERMISSIONS_GRANTED]: () => X.t.EKLJv8,
                [P.gGk.PERMISSIONS_DENIED]: () => X.t.U3rO5X,
                [P.gGk.REASON]: () => X.t["2IW3C5"],
                [P.gGk.NSFW]: eA(X.t.H8Ri2Y, X.t.WW6cJw),
                [P.gGk.TYPE]: e_(X.t.Vn5zn2, X.t.aq4uWI),
                [P.gGk.VIDEO_QUALITY_MODE]: e_(X.t.e68fAU, X.t.djbES0),
                [P.gGk.DEFAULT_AUTO_ARCHIVE_DURATION]: e_(X.t.nYz2mg, X.t.oczvRI),
                [P.gGk.DEFAULT_THREAD_RATE_LIMIT_PER_USER]: ed(X.t.tOJ8h7, X.t.WaSgzk, X.t["lj+A4u"]),
                [P.gGk.FLAGS]: () => X.t.ImCQko,
                [P.gGk.AVAILABLE_TAG_ADD]: () => X.t.H86QQU,
                [P.gGk.AVAILABLE_TAG_EDIT]: () => X.t.YtUzls,
                [P.gGk.AVAILABLE_TAG_DELETE]: () => X.t["8QOseg"],
                [P.gGk.LINKED_LOBBY]: ec(X.t["+/3TkD"], X.t["5kDYS3"]),
            };
        case P.GaG.USER:
            return {
                [P.gGk.NICK]: ed(X.t.qXDsHv, X.t["m+qury"], X.t.DvLvjF),
                [P.gGk.DEAF]: eA(X.t.mArLlW, X.t.ddvVYG),
                [P.gGk.MUTE]: eA(X.t["bxs/lS"], X.t.FjecQM),
                [P.gGk.ROLES_REMOVE]: () => X.t["+2SDWV"],
                [P.gGk.ROLES_ADD]: () => X.t["B3/3IJ"],
                [P.gGk.PRUNE_DELETE_DAYS]: () => X.t["+Cvc+D"],
                [P.gGk.COMMUNICATION_DISABLED_UNTIL]: ed(X.t.LXTQr5, X.t.LXTQr5, X.t.ULSdnE),
                [P.gGk.BYPASSES_VERIFICATION]: eA(X.t.NBPBui, X.t.zATost),
                [P.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => X.t.YbouFH,
                ...B(),
            };
        case P.GaG.ROLE:
            return {
                [P.gGk.NAME]: e_(X.t.QBmlaD, X.t["Lfs4r+"]),
                [P.gGk.DESCRIPTION]: e_(X.t.XeYKWJ, X.t.PSfeIj),
                [P.gGk.PERMISSIONS_GRANTED]: () => X.t["9i/DvE"],
                [P.gGk.PERMISSIONS_DENIED]: () => X.t.pa1ZVh,
                [P.gGk.COLOR]: eT({ "#000000": X.t.TK6E1H }, X.t["2FQFiw"]),
                [P.gGk.COLORS]: (e) => (null == e.newValue.secondary_color ? X.t.U44ttm : X.t["WnSwL/"]),
                [P.gGk.HOIST]: eA(X.t.gWfe24, X.t["+tb8kN"]),
                [P.gGk.MENTIONABLE]: eA(X.t.LL8VFF, X.t.Z7xzmC),
                [P.gGk.ICON_HASH]: () => X.t["iEE79/"],
                [P.gGk.UNICODE_EMOJI]: () => X.t.KiLMM0,
                ...B(),
            };
        case P.GaG.ONBOARDING_PROMPT:
            return {
                ...B(),
                [P.gGk.TITLE]: e_(X.t["sNpuy/"], X.t["3Ukc/g"]),
                [P.gGk.DESCRIPTION]: e_(X.t.PP1q0x, X.t.z7pYLg),
                [P.gGk.OPTIONS]: () => X.t["3G5C9+"],
                [P.gGk.SINGLE_SELECT]: eA(X.t.v4WnR3, X.t["6Qg3uC"]),
                [P.gGk.REQUIRED]: eA(X.t["0MPAM6"], X.t.pwsXir),
            };
        case P.GaG.GUILD_ONBOARDING:
            return {
                ...B(),
                [P.gGk.DEFAULT_CHANNEL_IDS]: () => X.t["8M+D2s"],
                [P.gGk.ENABLE_DEFAULT_CHANNELS]: eA(X.t["EYd/ls"], X.t["36OZeQ"]),
                [P.gGk.ENABLE_ONBOARDING_PROMPTS]: eA(X.t.V3u8PV, X.t["r66lc/"]),
                [P.gGk.ENABLED]: eA(X.t.SODVIs, X.t.u8HY5U),
                [P.gGk.MODE]: eg({ [j.SD.ONBOARDING_ADVANCED]: X.t.JbzVsh, [j.SD.ONBOARDING_DEFAULT]: X.t.aCgU0S }),
            };
        case P.GaG.HOME_SETTINGS:
            return {
                ...B(),
                [P.gGk.WELCOME_MESSAGE]: () => X.t.dKQ1xd,
                [P.gGk.NEW_MEMBER_ACTIONS]: () => X.t.jDUIno,
                [P.gGk.RESOURCE_CHANNELS]: () => X.t.SIX0mr,
            };
        case P.GaG.INVITE:
            return {
                [P.gGk.CODE]: () => X.t.rrRHgb,
                [P.gGk.CHANNEL_ID]: () => X.t.Q1vd5q,
                [P.gGk.MAX_USES]: eT({ 0: X.t.Yx8LNm }, X.t["3ygnwU"]),
                [P.gGk.MAX_AGE]: eT({ [X.intl.string(X.t.PqEzn8)]: X.t.uWrLvw }, X.t["Q+5kcO"]),
                [P.gGk.TEMPORARY]: eA(X.t.MWp6H7, X.t.omiqTH),
                [P.gGk.FLAGS]: eg({ [u.Q.IS_GUEST_INVITE]: X.t.XYZMbL }),
                [P.gGk.ROLE_IDS]: () => X.t.gb1Owj,
                ...B(),
            };
        case P.GaG.WEBHOOK:
            return {
                [P.gGk.CHANNEL_ID]: e_(X.t.jhPprR, X.t.ar4qYO),
                [P.gGk.NAME]: e_(X.t.ZVGrzU, X.t.tywdZR),
                [P.gGk.AVATAR_HASH]: () => X.t.KB52Uj,
                [P.gGk.REASON]: () => X.t["2IW3C5"],
            };
        case P.GaG.EMOJI:
            return { [P.gGk.NAME]: e_(X.t.ahU1o5, X.t["wxs+vZ"]), ...B() };
        case P.GaG.STICKER:
            return {
                [P.gGk.NAME]: e_(X.t.cdl0Yo, X.t.o3W2ly),
                [P.gGk.TAGS]: e_(X.t["zwL+S2"], X.t["VYfKA+"]),
                [P.gGk.DESCRIPTION]: e_(X.t.XeYKWJ, X.t.PSfeIj),
                ...B(),
            };
        case P.GaG.INTEGRATION:
            return {
                [P.gGk.ENABLE_EMOTICONS]: eA(X.t.FI0m5x, X.t.olpKC6),
                [P.gGk.EXPIRE_BEHAVIOR]: eg({ 0: X.t["1Bb1+u"], 1: X.t.vjlW6m }),
                [P.gGk.EXPIRE_GRACE_PERIOD]: () => X.t.iovXMa,
                ...B(),
            };
        case P.GaG.STAGE_INSTANCE:
            return {
                [P.gGk.TOPIC]: e_(X.t["m+veAn"], X.t.esQcxn),
                [P.gGk.PRIVACY_LEVEL]: eg({ [v.dD.GUILD_ONLY]: X.t["EC+CDt"], [v.dD.PUBLIC]: X.t["pK/WG0"] }),
                ...B(),
            };
        case P.GaG.GUILD_SCHEDULED_EVENT:
            return {
                [P.gGk.NAME]: () => X.t["21EXHW"],
                [P.gGk.DESCRIPTION]: () => X.t.Vm1ofw,
                [P.gGk.PRIVACY_LEVEL]: eg({ [v.dD.GUILD_ONLY]: X.t["EC+CDt"], [v.dD.PUBLIC]: X.t["pK/WG0"] }),
                [P.gGk.STATUS]: eg({
                    [v.XG.SCHEDULED]: X.t.hXKDgq,
                    [v.XG.ACTIVE]: X.t.lRX1nz,
                    [v.XG.COMPLETED]: X.t["/eFIhq"],
                    [v.XG.CANCELED]: X.t.NWIYhj,
                }),
                [P.gGk.ENTITY_TYPE]: eg({
                    [v.Ps.NONE]: X.t["6sO3Ss"],
                    [v.Ps.STAGE_INSTANCE]: X.t["Wo+s1y"],
                    [v.Ps.VOICE]: X.t.XCVaIL,
                    [v.Ps.EXTERNAL]: X.t.IvhAj2,
                }),
                [P.gGk.CHANNEL_ID]: ec(X.t.yJBIcX, X.t["+PqSsi"]),
                [P.gGk.LOCATION]: ec(X.t.GaMBHy, X.t.PsICk0),
                [P.gGk.IMAGE_HASH]: ec(X.t.S3vcRK, X.t.KQu47I),
                ...B(),
            };
        case P.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
            return {
                [P.gGk.SCHEDULED_START_TIME]: ec(X.t.zMIYVg, X.t.fzF8Gd),
                [P.gGk.SCHEDULED_END_TIME]: ec(X.t.vONSQA, X.t.IlIti3),
                [P.gGk.IS_CANCELED]: (e) => {
                    if (null != e.oldValue || !0 === e.newValue) {
                        if (!e.oldValue && e.newValue) return X.t["7RkicW"];
                        else if (e.oldValue && !e.newValue) return X.t.dRNTWW;
                    }
                },
                ...B(),
            };
        case P.GaG.THREAD:
            return {
                [P.gGk.NAME]: e_(X.t.tUKRzX, X.t.kPCHON),
                [P.gGk.ARCHIVED]: eA(X.t.jDi9FK, X.t.F6dvbT),
                [P.gGk.LOCKED]: eA(X.t.JSy1QW, X.t.C7Jgo8),
                [P.gGk.INVITABLE]: eA(X.t.dxNUs9, X.t.biJvYG),
                [P.gGk.AUTO_ARCHIVE_DURATION]: e_(X.t.LuaG3y, X.t["18d9qr"]),
                [P.gGk.RATE_LIMIT_PER_USER]: e_(X.t["7lirhF"], X.t.j4CCJR),
                [P.gGk.FLAGS]: () => X.t.sSAQtj,
                [P.gGk.AVAILABLE_TAG_ADD]: () => X.t.H86QQU,
                [P.gGk.AVAILABLE_TAG_DELETE]: () => X.t["8QOseg"],
                ...B(),
            };
        case P.GaG.APPLICATION_COMMAND:
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
        case P.GaG.AUTO_MODERATION_RULE:
            return {
                [P.gGk.NAME]: () => X.t.XwxAJT,
                [P.gGk.AUTO_MODERATION_TRIGGER_TYPE]: () => X.t.fx0pyl,
                [P.gGk.AUTO_MODERATION_EVENT_TYPE]: () => X.t["46Y+L5"],
                [P.gGk.AUTO_MODERATION_ACTIONS]: () => X.t["8efxfv"],
                [P.gGk.AUTO_MODERATION_ENABLED]: (e) => (!0 === (e.newValue ?? e.oldValue) ? X.t.fCmxC2 : X.t.Wrg9Jn),
                [P.gGk.AUTO_MODERATION_EXEMPT_ROLES]: () => X.t.TRb7Nx,
                [P.gGk.AUTO_MODERATION_EXEMPT_CHANNELS]: () => X.t.mzitLE,
                [P.gGk.AUTO_MODERATION_TRIGGER_METADATA]: () => X.t["h/lM65"],
                [P.gGk.AUTO_MODERATION_ADD_KEYWORDS]: () => X.t["9V2yaC"],
                [P.gGk.AUTO_MODERATION_REMOVE_KEYWORDS]: () => X.t["4Qe9ny"],
                [P.gGk.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => X.t.GyZtxp,
                [P.gGk.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => X.t.OQDadc,
                [P.gGk.AUTO_MODERATION_ADD_ALLOW_LIST]: () => X.t["FvvR+K"],
                [P.gGk.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => X.t.p5nSvy,
                ...B(),
            };
        case P.GaG.GUILD_SOUNDBOARD:
            return {
                [P.gGk.NAME]: e_(X.t.VOtRSO, X.t.OK7B8E),
                [P.gGk.VOLUME]: e_(X.t.igrDB9, X.t.L5lDFJ),
                [P.gGk.EMOJI_NAME]: ed(X.t.IIanaY, X.t["z4w4U/"], X.t.V8TfyU),
                [P.gGk.EMOJI_ID]: ed(X.t.ainxMB, X.t["2NPsYu"], X.t["8crtns"]),
                ...B(),
            };
        case P.GaG.VOICE_CHANNEL_STATUS:
            return { [P.gGk.STATUS]: () => X.t.HyCSnI, ...B() };
        case P.GaG.GUILD_MEMBER_VERIFICATION:
            return {
                [P.gGk.VERIFICATION_ENABLED]: (e) => (!0 === e.newValue ? X.t.fnkzDY : X.t.WYT6ka),
                [P.gGk.MANUAL_APPROVAL_ENABLED]: (e) => (!0 === e.newValue ? X.t.jzSvVd : X.t.WxyOtj),
                ...B(),
            };
        case P.GaG.GUILD_PROFILE:
            return {
                [P.gGk.DESCRIPTION]: () => X.t.nsUZKY,
                [P.gGk.BRAND_COLOR_PRIMARY]: () => X.t.qe9mgN,
                [P.gGk.CUSTOM_BANNER_HASH]: () => X.t["04b5KC"],
                [P.gGk.TRAITS]: () => X.t.dEy9WO,
                [P.gGk.GAME_APPLICATION_IDS]: () => X.t["8BOT3x"],
                [P.gGk.VISIBILITY]: () => X.t.bCl1Ep,
                [P.gGk.SERVER_TAG]: ec(X.t.ix1dnX, X.t["4LKpKb"]),
            };
        default:
            return B();
    }
}
let H = {
    [P.GaG.CHANNEL]: { [P.gGk.ID]: !0, [P.gGk.PERMISSION_OVERWRITES]: !0 },
    [P.GaG.CHANNEL_OVERWRITE]: { [P.gGk.TYPE]: !0, [P.gGk.ID]: !0, [P.gGk.PERMISSION_OVERWRITES]: !0 },
    [P.GaG.INVITE]: { [P.gGk.INVITER_ID]: !0, [P.gGk.USES]: !0 },
    [P.GaG.WEBHOOK]: { [P.gGk.TYPE]: !0, [P.gGk.APPLICATION_ID]: !0 },
    [P.GaG.INTEGRATION]: { [P.gGk.TYPE]: !0, [P.gGk.NAME]: !0 },
    [P.GaG.THREAD]: { [P.gGk.ID]: !0, [P.gGk.TYPE]: !0 },
    [P.GaG.STICKER]: {
        [P.gGk.ID]: !0,
        [P.gGk.TYPE]: !0,
        [P.gGk.ASSET]: !0,
        [P.gGk.FORMAT_TYPE]: !0,
        [P.gGk.AVAILABLE]: !0,
        [P.gGk.GUILD_ID]: !0,
    },
    [P.GaG.GUILD_HOME]: { [P.gGk.ENTITY_TYPE]: !0 },
    [P.GaG.GUILD_ONBOARDING]: { [P.gGk.PROMPTS]: !0 },
    [P.GaG.GUILD_SOUNDBOARD]: { [P.gGk.ID]: !0, [P.gGk.SOUND_ID]: !0 },
};
function w(e, t) {
    if (
        e.actionType === P.RWi.DELETE &&
        e.action !== P.F_X.MEMBER_BAN_ADD &&
        e.action !== P.F_X.MEMBER_KICK &&
        e.action !== P.F_X.MEMBER_PRUNE
    )
        return t.key !== P.gGk.REASON;
    let n = H[e.targetType];
    return null != n && !0 === n[t.key];
}
function W(e) {
    let { changes: t } = e;
    return null != t && t.some((t) => !w(e, t));
}
let Y = () => [
    { value: P.F_X.ALL, label: X.intl.string(X.t.QxEVcv), valueLabel: X.intl.string(X.t.an9Ry3) },
    { value: P.F_X.GUILD_UPDATE, label: X.intl.string(X.t["5INZa3"]) },
    { value: P.F_X.CHANNEL_CREATE, label: X.intl.string(X.t["2uh4vJ"]) },
    { value: P.F_X.CHANNEL_UPDATE, label: X.intl.string(X.t.mGsBLV) },
    { value: P.F_X.CHANNEL_DELETE, label: X.intl.string(X.t.hCHzAr) },
    { value: P.F_X.CHANNEL_OVERWRITE_CREATE, label: X.intl.string(X.t["8TnAMP"]) },
    { value: P.F_X.CHANNEL_OVERWRITE_UPDATE, label: X.intl.string(X.t.Jqx0Bi) },
    { value: P.F_X.CHANNEL_OVERWRITE_DELETE, label: X.intl.string(X.t.gBXOr4) },
    { value: P.F_X.CHANNEL_POSITION_UPDATE, label: X.intl.string(X.t.hKfSwp) },
    { value: P.F_X.MEMBER_KICK, label: X.intl.string(X.t["Q1/hN8"]) },
    { value: P.F_X.MEMBER_PRUNE, label: X.intl.string(X.t.tOTTja) },
    { value: P.F_X.MEMBER_BAN_ADD, label: X.intl.string(X.t["NfPn+e"]) },
    { value: P.F_X.MEMBER_BAN_REMOVE, label: X.intl.string(X.t.XCsGfI) },
    { value: P.F_X.MEMBER_UPDATE, label: X.intl.string(X.t["F/jmNJ"]) },
    { value: P.F_X.MEMBER_ROLE_UPDATE, label: X.intl.string(X.t.zAveSI) },
    { value: P.F_X.MEMBER_MOVE, label: X.intl.string(X.t.QshteR) },
    { value: P.F_X.MEMBER_DISCONNECT, label: X.intl.string(X.t.Z45os7) },
    { value: P.F_X.BOT_ADD, label: X.intl.string(X.t.vuH24Z) },
    { value: P.F_X.THREAD_CREATE, label: X.intl.string(X.t["+zl0DG"]) },
    { value: P.F_X.THREAD_UPDATE, label: X.intl.string(X.t.rbIry3) },
    { value: P.F_X.THREAD_DELETE, label: X.intl.string(X.t.hFjNEA) },
    { value: P.F_X.ROLE_CREATE, label: X.intl.string(X.t.AbxKtv) },
    { value: P.F_X.ROLE_UPDATE, label: X.intl.string(X.t.t3Z6sU) },
    { value: P.F_X.ROLE_DELETE, label: X.intl.string(X.t.YsFpa4) },
    { value: P.F_X.ROLE_POSITION_UPDATE, label: X.intl.string(X.t["g+lLUV"]) },
    { value: P.F_X.ONBOARDING_PROMPT_CREATE, label: X.intl.string(X.t.ZV9tqc) },
    { value: P.F_X.ONBOARDING_PROMPT_UPDATE, label: X.intl.string(X.t.PcOdvX) },
    { value: P.F_X.ONBOARDING_PROMPT_DELETE, label: X.intl.string(X.t["+r33Na"]) },
    { value: P.F_X.ONBOARDING_CREATE, label: X.intl.string(X.t.uDADde) },
    { value: P.F_X.ONBOARDING_UPDATE, label: X.intl.string(X.t.J1H1wg) },
    { value: P.F_X.HOME_SETTINGS_CREATE, label: X.intl.string(X.t.Di4cvI) },
    { value: P.F_X.HOME_SETTINGS_UPDATE, label: X.intl.string(X.t.tzyrJH) },
    { value: P.F_X.INVITE_CREATE, label: X.intl.string(X.t["0BNJdX"]) },
    { value: P.F_X.INVITE_UPDATE, label: X.intl.string(X.t["o++obV"]) },
    { value: P.F_X.INVITE_DELETE, label: X.intl.string(X.t.iP40Az) },
    { value: P.F_X.WEBHOOK_CREATE, label: X.intl.string(X.t["tBF4+S"]) },
    { value: P.F_X.WEBHOOK_UPDATE, label: X.intl.string(X.t.eV3McO) },
    { value: P.F_X.WEBHOOK_DELETE, label: X.intl.string(X.t.AAL3K1) },
    { value: P.F_X.EMOJI_CREATE, label: X.intl.string(X.t.RuWm0V) },
    { value: P.F_X.EMOJI_UPDATE, label: X.intl.string(X.t.WzdUY7) },
    { value: P.F_X.EMOJI_DELETE, label: X.intl.string(X.t.c3dK2L) },
    { value: P.F_X.MESSAGE_DELETE, label: X.intl.string(X.t.daTfXh) },
    { value: P.F_X.MESSAGE_BULK_DELETE, label: X.intl.string(X.t.nrBxeh) },
    { value: P.F_X.MESSAGE_PIN, label: X.intl.string(X.t.MUldyN) },
    { value: P.F_X.MESSAGE_UNPIN, label: X.intl.string(X.t.n4zKhA) },
    { value: P.F_X.INTEGRATION_CREATE, label: X.intl.string(X.t.deNm8x) },
    { value: P.F_X.INTEGRATION_UPDATE, label: X.intl.string(X.t.HT7Sfg) },
    { value: P.F_X.INTEGRATION_DELETE, label: X.intl.string(X.t["+kJ09q"]) },
    { value: P.F_X.STICKER_CREATE, label: X.intl.string(X.t["3DzNjU"]) },
    { value: P.F_X.STICKER_UPDATE, label: X.intl.string(X.t.tdhW5b) },
    { value: P.F_X.STICKER_DELETE, label: X.intl.string(X.t["+ZhGOk"]) },
    { value: P.F_X.STAGE_INSTANCE_CREATE, label: X.intl.string(X.t.sPbjA6) },
    { value: P.F_X.STAGE_INSTANCE_UPDATE, label: X.intl.string(X.t.cW9LfJ) },
    { value: P.F_X.STAGE_INSTANCE_DELETE, label: X.intl.string(X.t["U1r+yD"]) },
    { value: P.F_X.GUILD_SCHEDULED_EVENT_CREATE, label: X.intl.string(X.t.H81Zyy) },
    { value: P.F_X.GUILD_SCHEDULED_EVENT_UPDATE, label: X.intl.string(X.t["FM69l+"]) },
    { value: P.F_X.GUILD_SCHEDULED_EVENT_DELETE, label: X.intl.string(X.t.Rq28Bh) },
    { value: P.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE, label: X.intl.string(X.t.iPdFOt) },
    { value: P.F_X.AUTO_MODERATION_BLOCK_MESSAGE, label: X.intl.string(X.t.gNq5z6) },
    { value: P.F_X.AUTO_MODERATION_RULE_CREATE, label: X.intl.string(X.t.f72Zqb) },
    { value: P.F_X.AUTO_MODERATION_RULE_UPDATE, label: X.intl.string(X.t.XeqIiv) },
    { value: P.F_X.AUTO_MODERATION_RULE_DELETE, label: X.intl.string(X.t.syAApU) },
    { value: P.F_X.GUILD_HOME_FEATURE_ITEM, label: X.intl.string(X.t.lhG5KN) },
    { value: P.F_X.GUILD_HOME_REMOVE_ITEM, label: X.intl.string(X.t.lRPRwS) },
    { value: P.F_X.SOUNDBOARD_SOUND_CREATE, label: X.intl.string(X.t.yoRi5r) },
    { value: P.F_X.SOUNDBOARD_SOUND_UPDATE, label: X.intl.string(X.t.uKlG0Z) },
    { value: P.F_X.SOUNDBOARD_SOUND_DELETE, label: X.intl.string(X.t.gq0iCT) },
    { value: P.F_X.VOICE_CHANNEL_STATUS_CREATE, label: X.intl.string(X.t.rGr0YM) },
    { value: P.F_X.VOICE_CHANNEL_STATUS_DELETE, label: X.intl.string(X.t.V9PEQ4) },
];
function K(e, t) {
    return null != t.changes ? t.changes.find((t) => t.key === e) : null;
}
function z(e, t) {
    return null != t.changes ? t.changes.filter((t) => t.key === e) : [];
}
function J(e) {
    let t = Y().find((t) => t.value === e.action);
    return null != K(P.gGk.COMMUNICATION_DISABLED_UNTIL, e) ? X.intl.string(X.t.z3wbj8) : (t?.label ?? null);
}
let Q = {
    [d.pJ.SECONDS]: (e) => X.intl.formatToPlainString(X.t.geSp4K, { seconds: e }),
    [d.pJ.MINUTES]: (e) => X.intl.formatToPlainString(X.t.iXLF9W, { minutes: e }),
    [d.pJ.HOURS]: (e) => X.intl.formatToPlainString(X.t.xCjYxK, { hours: e }),
    [d.pJ.DAYS]: (e) => X.intl.formatToPlainString(X.t["k2UNz+"], { days: e }),
};
function Z(e) {
    let t = K(P.gGk.COMMUNICATION_DISABLED_UNTIL, e),
        n = z(P.gGk.ROLES_ADD, e).length > 0,
        l = z(P.gGk.ROLES_REMOVE, e).length > 0;
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
function q(e) {
    let t = z(P.gGk.ROLES_ADD, e),
        n = z(P.gGk.ROLES_REMOVE, e),
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
function $(e) {
    switch (e.action) {
        case P.F_X.GUILD_UPDATE:
            return X.t.LjZO31;
        case P.F_X.CHANNEL_CREATE:
            let t = null != e.changes ? e.changes.find((e) => e.key === P.gGk.TYPE) : null;
            if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
            switch (t.newValue) {
                case P.rbe.GUILD_STAGE_VOICE:
                    return X.t["OKp4+o"];
                case P.rbe.GUILD_VOICE:
                    return X.t.NPOy4G;
                case P.rbe.GUILD_CATEGORY:
                    return X.t.T3KIjz;
                case P.rbe.GUILD_FORUM:
                    return X.t.VvNgHX;
                case P.rbe.GUILD_MEDIA:
                    return X.t["4NWSxa"];
                case P.rbe.GUILD_ANNOUNCEMENT:
                    return X.t.eYP6UV;
                default:
                    return X.t.wrYNG2;
            }
        case P.F_X.CHANNEL_UPDATE:
            return X.t.nTYk6B;
        case P.F_X.CHANNEL_DELETE:
            return X.t.ynfvkm;
        case P.F_X.CHANNEL_OVERWRITE_CREATE:
            return X.t.l5Cu1a;
        case P.F_X.CHANNEL_OVERWRITE_UPDATE:
            return X.t.uhtbNU;
        case P.F_X.CHANNEL_OVERWRITE_DELETE:
            return X.t["HASt/3"];
        case P.F_X.CHANNEL_POSITION_UPDATE:
            return X.t.d3aX5b;
        case P.F_X.MEMBER_KICK:
            return X.t.B5hDZX;
        case P.F_X.MEMBER_PRUNE:
            return X.t.qKOZTP;
        case P.F_X.MEMBER_BAN_ADD:
            return X.t["XklUm/"];
        case P.F_X.MEMBER_BAN_REMOVE:
            return X.t.o3Y6HD;
        case P.F_X.MEMBER_UPDATE:
            return X.t.pznhLN;
        case P.F_X.MEMBER_ROLE_UPDATE:
            return X.t.Vngfia;
        case P.F_X.MEMBER_MOVE:
            return X.t.Yt6NkU;
        case P.F_X.MEMBER_DISCONNECT:
            return X.t.K4eCZw;
        case P.F_X.BOT_ADD:
            return X.t.fWvX0G;
        case P.F_X.ROLE_CREATE:
            return X.t.UTLTx6;
        case P.F_X.ROLE_UPDATE:
            return X.t.NRbN18;
        case P.F_X.ROLE_DELETE:
            return X.t["4s63tb"];
        case P.F_X.ROLE_POSITION_UPDATE:
            return X.t.jZeaoW;
        case P.F_X.INVITE_CREATE:
            return X.t.YHOXWy;
        case P.F_X.INVITE_UPDATE:
            return X.t.ja3kGS;
        case P.F_X.INVITE_DELETE:
            return X.t["3n/iWk"];
        case P.F_X.WEBHOOK_CREATE:
            return X.t.MhYhil;
        case P.F_X.WEBHOOK_UPDATE:
            return X.t["6GTlWB"];
        case P.F_X.WEBHOOK_DELETE:
            return X.t.in0VjZ;
        case P.F_X.EMOJI_CREATE:
            return X.t["7vekRO"];
        case P.F_X.EMOJI_UPDATE:
            return X.t.IsCKfh;
        case P.F_X.EMOJI_DELETE:
            return X.t.JnUaVG;
        case P.F_X.STICKER_CREATE:
            return X.t.DRZifq;
        case P.F_X.STICKER_UPDATE:
            return X.t.bhujGc;
        case P.F_X.STICKER_DELETE:
            return X.t.rGEP9U;
        case P.F_X.MESSAGE_DELETE:
            return X.t["HPkD+M"];
        case P.F_X.MESSAGE_BULK_DELETE:
            return X.t["3RIvLE"];
        case P.F_X.MESSAGE_PIN:
            return X.t.Yna7E7;
        case P.F_X.MESSAGE_UNPIN:
            return X.t.NCxXUW;
        case P.F_X.INTEGRATION_CREATE:
            return X.t.HYvCb3;
        case P.F_X.INTEGRATION_UPDATE:
            return X.t.ibCCOS;
        case P.F_X.INTEGRATION_DELETE:
            return X.t["8zScWY"];
        case P.F_X.STAGE_INSTANCE_CREATE:
            return X.t["n7x/DF"];
        case P.F_X.STAGE_INSTANCE_UPDATE:
            return X.t["0hQYU4"];
        case P.F_X.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return X.t["Oi/in9"];
            return X.t["7ZIFm9"];
        case P.F_X.GUILD_SCHEDULED_EVENT_CREATE:
            return X.t.S7k52p;
        case P.F_X.GUILD_SCHEDULED_EVENT_UPDATE:
            return X.t.ebTK11;
        case P.F_X.GUILD_SCHEDULED_EVENT_DELETE:
            return X.t["/ARPKQ"];
        case P.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case P.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return X.t["8qCI36"];
        case P.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return X.t.zYb2da;
        case P.F_X.THREAD_CREATE:
            let n = null != e.changes ? e.changes.find((e) => e.key === P.gGk.TYPE) : null;
            if (null == n) throw Error("[AuditLog] Could not find type change for thread create");
            switch (n.newValue) {
                case P.rbe.PRIVATE_THREAD:
                    return X.t.Br0y5w;
                case P.rbe.ANNOUNCEMENT_THREAD:
                    return X.t["6uaMmO"];
                default:
                    return X.t["2cxQ7G"];
            }
        case P.F_X.THREAD_UPDATE:
            return X.t.PSsy4t;
        case P.F_X.THREAD_DELETE:
            return X.t.s3Khn8;
        case P.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return X.t.uzCqBm;
        case P.F_X.AUTO_MODERATION_BLOCK_MESSAGE:
            return X.t.NqWv2K;
        case P.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL:
            if (e.options?.auto_moderation_rule_trigger_type === F.uh.USER_PROFILE.toString()) return X.t.YQsjej;
            return X.t.SD0PwJ;
        case P.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return X.t.Vk4TwX;
        case P.F_X.AUTO_MODERATION_QUARANTINE_USER:
            return X.t["/W5u5o"];
        case P.F_X.CREATOR_MONETIZATION_REQUEST_CREATED:
            return X.t.ONvWyr;
        case P.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return X.t["ryGLk+"];
        case P.F_X.AUTO_MODERATION_RULE_CREATE:
            return X.t["NKljj+"];
        case P.F_X.AUTO_MODERATION_RULE_UPDATE:
            return X.t["3wEA9u"];
        case P.F_X.AUTO_MODERATION_RULE_DELETE:
            return X.t.umua3n;
        case P.F_X.ONBOARDING_PROMPT_CREATE:
            return X.t["/8A1g2"];
        case P.F_X.ONBOARDING_PROMPT_UPDATE:
            return X.t.ArIrWI;
        case P.F_X.ONBOARDING_PROMPT_DELETE:
            return X.t.IuBTao;
        case P.F_X.ONBOARDING_CREATE:
            return X.t["wDaq3/"];
        case P.F_X.ONBOARDING_UPDATE:
            return X.t["yONu/l"];
        case P.F_X.HOME_SETTINGS_CREATE:
            return X.t.dSdCjG;
        case P.F_X.HOME_SETTINGS_UPDATE:
            return X.t.XHE8qv;
        case P.F_X.GUILD_HOME_FEATURE_ITEM:
            let l = null != e.changes ? e.changes.find((e) => e.key === P.gGk.ENTITY_TYPE) : null;
            if (null == l) return X.t["UZ+U3A"];
            switch (l.newValue) {
                case E.MESSAGE:
                    return X.t["PyEa+J"];
                case E.FORUM_POST:
                    return X.t.hCuAb1;
                default:
                    return X.t["UZ+U3A"];
            }
        case P.F_X.GUILD_HOME_REMOVE_ITEM:
            return X.t.kPReun;
        case P.F_X.SOUNDBOARD_SOUND_CREATE:
            return X.t["0PD83V"];
        case P.F_X.SOUNDBOARD_SOUND_UPDATE:
            return X.t.CM8n1w;
        case P.F_X.SOUNDBOARD_SOUND_DELETE:
            return X.t["kVz4/0"];
        case P.F_X.VOICE_CHANNEL_STATUS_CREATE:
            return X.t.MWjnU7;
        case P.F_X.VOICE_CHANNEL_STATUS_DELETE:
            return X.t.aS8Krq;
        case P.F_X.GUILD_MEMBER_VERIFICATION_UPDATE:
            return X.t["NUKUb+"];
        case P.F_X.GUILD_PROFILE_UPDATE:
            return X.t.Ed6hF1;
        case P.F_X.GUILD_MIGRATE_PIN_PERMISSION:
            return X.t["3Ne7MA"];
        case P.F_X.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION:
            return X.t["naflH+"];
        default:
            return null;
    }
}
function ee(e) {
    switch (e) {
        case k.lx.GUILD_FEED_REMOVED:
            return X.intl.string(X.t["5G8ZD4"]);
        case k.lx.ACTIVE_CHANNELS_REMOVED:
            return X.intl.string(X.t["4YLtzC"]);
        case k.lx.PINNED:
            return X.intl.string(X.t["1QLRYb"]);
    }
    return null;
}
function et(e) {
    switch (e) {
        case k.lx.GUILD_FEED_REMOVED:
            return X.intl.string(X.t.S5kuWQ);
        case k.lx.ACTIVE_CHANNELS_REMOVED:
            return X.intl.string(X.t["8qpgcz"]);
        case k.lx.PINNED:
            return X.intl.string(X.t.CMweGA);
    }
    return null;
}
function en(e, t) {
    switch (e) {
        case P.xBc.CREATE_INSTANT_INVITE:
            return X.intl.string(X.t.zJrgTG);
        case P.xBc.KICK_MEMBERS:
            return X.intl.string(X.t.pBNv6i);
        case P.xBc.BAN_MEMBERS:
            return X.intl.string(X.t.oTBA7N);
        case P.xBc.ADMINISTRATOR:
            return X.intl.string(X.t.PGvZqX);
        case P.xBc.MANAGE_CHANNELS:
            if (t.targetType === P.GaG.CHANNEL || t.targetType === P.GaG.CHANNEL_OVERWRITE)
                return X.intl.string(X.t.nAw15L);
            return X.intl.string(X.t["9qLtWs"]);
        case P.xBc.MANAGE_GUILD:
            return X.intl.string(X.t.QZRcfO);
        case P.xBc.VIEW_GUILD_ANALYTICS:
            return X.intl.string(X.t["rQJBE/"]);
        case P.xBc.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return X.intl.string(X.t["0lTLTv"]);
        case P.xBc.CHANGE_NICKNAME:
            return X.intl.string(X.t.dilOF6);
        case P.xBc.MANAGE_NICKNAMES:
            return X.intl.string(X.t["t+Ct5x"]);
        case P.xBc.MANAGE_ROLES:
            return X.intl.string(X.t["C8d+oG"]);
        case P.xBc.MANAGE_WEBHOOKS:
            return X.intl.string(X.t["/ADKmM"]);
        case P.xBc.CREATE_GUILD_EXPRESSIONS:
            return X.intl.string(X.t.HarVuP);
        case P.xBc.MANAGE_GUILD_EXPRESSIONS:
            return X.intl.string(X.t.bbuXIn);
        case P.xBc.VIEW_AUDIT_LOG:
            return X.intl.string(X.t.fZgLpA);
        case P.xBc.VIEW_CHANNEL:
            if (t.targetType === P.GaG.CHANNEL || t.targetType === P.GaG.CHANNEL_OVERWRITE)
                return X.intl.string(X.t["W/A4Qp"]);
            return X.intl.string(X.t.uV83yi);
        case P.xBc.SEND_MESSAGES:
            return X.intl.string(X.t.T32rkC);
        case P.xBc.SEND_TTS_MESSAGES:
            return X.intl.string(X.t.Mg7bku);
        case P.xBc.USE_APPLICATION_COMMANDS:
            return X.intl.string(X.t.shbR1a);
        case P.xBc.MANAGE_MESSAGES:
            return X.intl.string(X.t["6lU9xM"]);
        case P.xBc.EMBED_LINKS:
            return X.intl.string(X.t["969dEL"]);
        case P.xBc.ATTACH_FILES:
            return X.intl.string(X.t["3AS4UM"]);
        case P.xBc.READ_MESSAGE_HISTORY:
            return X.intl.string(X.t.l9ufaR);
        case P.xBc.MENTION_EVERYONE:
            return X.intl.string(X.t.Y78KGC);
        case P.xBc.USE_EXTERNAL_EMOJIS:
            return X.intl.string(X.t.BpBGZU);
        case P.xBc.USE_EXTERNAL_STICKERS:
            return X.intl.string(X.t["UeRs+b"]);
        case P.xBc.ADD_REACTIONS:
            return X.intl.string(X.t.yEoJAr);
        case P.xBc.CONNECT:
            return X.intl.string(X.t.S0W8Z5);
        case P.xBc.SPEAK:
            return X.intl.string(X.t["8w1tIR"]);
        case P.xBc.MUTE_MEMBERS:
            return X.intl.string(X.t["8EI30/"]);
        case P.xBc.DEAFEN_MEMBERS:
            return X.intl.string(X.t["9L47Fr"]);
        case P.xBc.MOVE_MEMBERS:
            return X.intl.string(X.t.YtjJPQ);
        case P.xBc.USE_VAD:
            return X.intl.string(X.t["08zAV7"]);
        case P.xBc.PRIORITY_SPEAKER:
            return X.intl.string(X.t.BVK71i);
        case P.xBc.STREAM:
            return X.intl.string(X.t.FlNoSV);
        case P.xBc.USE_SOUNDBOARD:
            return X.intl.string(X.t.Bco7NG);
        case P.xBc.USE_EXTERNAL_SOUNDS:
            return X.intl.string(X.t.pwaVJ6);
        case P.xBc.REQUEST_TO_SPEAK:
            return X.intl.string(X.t["5kicT2"]);
        case P.xBc.USE_EMBEDDED_ACTIVITIES:
            return X.intl.string(X.t.rLSGeh);
        case P.xBc.CREATE_EVENTS:
            return X.intl.string(X.t.qyjZua);
        case P.xBc.MANAGE_EVENTS:
            return X.intl.string(X.t.HIgA5a);
        case P.xBc.CREATE_PUBLIC_THREADS:
            return X.intl.string(X.t["25rKnX"]);
        case P.xBc.CREATE_PRIVATE_THREADS:
            return X.intl.string(X.t.QwbTSa);
        case P.xBc.SEND_MESSAGES_IN_THREADS:
            return X.intl.string(X.t.fTE74g);
        case P.xBc.MANAGE_THREADS:
            return X.intl.string(X.t.kEqgr7);
        case P.xBc.MODERATE_MEMBERS:
            return X.intl.string(X.t["+RL6pz"]);
        case P.xBc.SET_VOICE_CHANNEL_STATUS:
            return X.intl.string(X.t.VBwkUf);
        case P.xBc.SEND_POLLS:
            return X.intl.string(X.t.UMQ7Ww);
        case P.xBc.SEND_VOICE_MESSAGES:
            return X.intl.string(X.t.WlWSBT);
        case P.xBc.USE_EXTERNAL_APPS:
            return X.intl.string(X.t.TtA5rK);
        case P.xBc.PIN_MESSAGES:
            return X.intl.string(X.t.Y5BI39);
        case P.xBc.BYPASS_SLOWMODE:
            return X.intl.string(X.t.kqcjeV);
        case P.xBc.MANAGE_OFFICIAL_MESSAGES:
            return X.intl.string(X.t.Aj9ruN);
    }
    return null;
}
function el(e, t) {
    let n = [];
    return (
        e.forEach((e) => {
            let l = (function (e, t) {
                    switch (e.targetType) {
                        case P.GaG.GUILD:
                        case P.GaG.GUILD_HOME:
                        case P.GaG.GUILD_PROFILE:
                            return t;
                        case P.GaG.CHANNEL:
                        case P.GaG.CHANNEL_OVERWRITE:
                            return eu(
                                e,
                                P.gGk.NAME,
                                (e) => R.A.getChannel(e),
                                (e) => (0, g.m1)(e, C.default, h.A, !0),
                            );
                        case P.GaG.USER:
                            return eu(
                                e,
                                P.gGk.NICK,
                                (e) => C.default.getUser(e),
                                (e) => e,
                            );
                        case P.GaG.ROLE:
                            return eu(
                                e,
                                P.gGk.NAME,
                                (e) => L.A.getRole(t.id, e),
                                (e) => e.name,
                            );
                        case P.GaG.ONBOARDING_PROMPT:
                            let n = eu(
                                e,
                                P.gGk.ID,
                                (e) => G.A.getOnboardingPrompt(e),
                                (e) => e.title,
                            );
                            return null == n || "" === n ? X.intl.string(X.t.ZNQyiR) : n;
                        case P.GaG.GUILD_ONBOARDING:
                        case P.GaG.GUILD_MEMBER_VERIFICATION:
                            return t;
                        case P.GaG.INVITE:
                            return eu(e, P.gGk.CODE, P.FXj);
                        case P.GaG.INTEGRATION:
                            return eu(
                                e,
                                P.gGk.TYPE,
                                (e) => p.A.integrations.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case P.GaG.WEBHOOK:
                            return eu(
                                e,
                                P.gGk.NAME,
                                (e) => p.A.webhooks.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case P.GaG.EMOJI:
                            return eu(
                                e,
                                P.gGk.NAME,
                                (e) => I.Ay.getGuildEmoji(t.id).find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case P.GaG.STICKER:
                            return eu(
                                e,
                                P.gGk.NAME,
                                (e) => m.A.getStickerById(e),
                                (e) => e.name,
                            );
                        case P.GaG.STAGE_INSTANCE:
                            return eu(
                                e,
                                P.gGk.TOPIC,
                                (e) => Object.values(S.A.getStageInstancesByGuild(t.id))?.find((t) => t.id === e),
                                (e) => e.topic,
                            );
                        case P.GaG.GUILD_SCHEDULED_EVENT:
                        case P.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return eu(
                                e,
                                P.gGk.NAME,
                                (e) => p.A.guildScheduledEvents.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case P.GaG.THREAD:
                            return eu(
                                e,
                                P.gGk.NAME,
                                (e) => p.A.threads.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case P.GaG.APPLICATION_COMMAND:
                            if (e.targetId === e.options.application_id) {
                                let t = p.A.integrations.find((t) => t.application?.id === e.targetId);
                                if (null != t) return t.name;
                                return e.targetId;
                            }
                            return eu(
                                e,
                                P.gGk.NAME,
                                (e) => p.A.applicationCommands.find((t) => t.id === e),
                                (e) => {
                                    let t =
                                        null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
                                    return e.type === A.kc.CHAT ? `/\u2060${t}` : t;
                                },
                            );
                        case P.GaG.AUTO_MODERATION_RULE:
                            return eu(
                                e,
                                P.gGk.NAME,
                                (e) => p.A.automodRules.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case P.GaG.GUILD_SOUNDBOARD:
                            return eu(e, P.gGk.NAME, P.FXj);
                        case P.GaG.HOME_SETTINGS:
                            return eu(
                                e,
                                P.gGk.GUILD_ID,
                                (e) => O.h.getSettings(e),
                                () => X.intl.string(X.t.VbpLyU),
                                t.id,
                            );
                        case P.GaG.VOICE_CHANNEL_STATUS:
                            return eu(
                                e,
                                P.gGk.STATUS,
                                (e) => R.A.getChannel(e),
                                (e) => (0, g.m1)(e, C.default, h.A, !0),
                            );
                        default:
                            return (b.warn("Unknown targetType for log", e), null);
                    }
                })(e, t),
                r = C.default.getUser(e.userId);
            if (
                null != l ||
                [
                    P.F_X.MEMBER_PRUNE,
                    P.F_X.MEMBER_DISCONNECT,
                    P.F_X.MEMBER_MOVE,
                    P.F_X.CHANNEL_POSITION_UPDATE,
                    P.F_X.ROLE_POSITION_UPDATE,
                    P.F_X.CREATOR_MONETIZATION_REQUEST_CREATED,
                    P.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED,
                ].includes(e.action)
            ) {
                if (
                    null !=
                    (e = (e = (e = e.set("user", r)).set("target", l)).set(
                        "options",
                        (function (e) {
                            if (null != e.options) {
                                let t = { ...e.options };
                                switch (e.options.type) {
                                    case P.AO_.USER:
                                        t.subtarget = eo(
                                            e.options.id,
                                            (e) => C.default.getUser(e),
                                            (e) => f.Ay.getUserTag(e),
                                        );
                                        break;
                                    case P.AO_.ROLE:
                                        t.subtarget = eo(e.options.role_name, P.FXj);
                                }
                                if (
                                    (null != e.options.channel_id &&
                                        (t.channel = eu(
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
                                return t;
                            }
                            return e.options;
                        })(e),
                    )).changes
                ) {
                    let n = [];
                    (e.changes.forEach((l) => {
                        let r = (function (e, t, n) {
                            if (t.action === P.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let t = e.newValue || e.oldValue;
                                switch (t.type) {
                                    case P.g0g.ROLE:
                                        e.subtarget = eo(
                                            t.id,
                                            (e) => L.A.getRole(n.id, e),
                                            (e) => e.name,
                                        );
                                        break;
                                    case P.g0g.USER:
                                        e.subtarget = eo(
                                            t.id,
                                            (e) => C.default.getUser(e),
                                            (e) => f.Ay.getUserTag(e),
                                        );
                                        break;
                                    case P.g0g.CHANNEL:
                                        t.id === a()(n.id).subtract(1).toString()
                                            ? (e.subtarget = X.intl.string(X.t.MSYhgh))
                                            : (e.subtarget = eo(
                                                  t.id,
                                                  (e) => R.A.getChannel(e),
                                                  (e) => (0, g.m1)(e, C.default, h.A, !0),
                                              ));
                                }
                                return e;
                            }
                            switch (e.key) {
                                case P.gGk.OWNER_ID:
                                    return eE(e, (e) => C.default.getUser(e));
                                case P.gGk.CHANNEL_ID:
                                case P.gGk.AFK_CHANNEL_ID:
                                case P.gGk.SYSTEM_CHANNEL_ID:
                                case P.gGk.RULES_CHANNEL_ID:
                                case P.gGk.PUBLIC_UPDATES_CHANNEL_ID:
                                    return eE(
                                        e,
                                        (e) => R.A.getChannel(e),
                                        (e) => (0, g.m1)(e, C.default, h.A, !0),
                                    );
                                case P.gGk.AFK_TIMEOUT:
                                    return eE(e, (e) => e / 60);
                                case P.gGk.BITRATE:
                                    return eE(e, (e) => e / 1e3);
                                case P.gGk.COLOR:
                                    return eE(e, (e) => (0, _.Hl)(e).toUpperCase());
                                case P.gGk.THEME_COLORS:
                                    return eE(
                                        e,
                                        (e) => `${(0, _.Hl)(e[0]).toUpperCase()}, ${(0, _.Hl)(e[1]).toUpperCase()}`,
                                    );
                                case P.gGk.MAX_AGE:
                                    return eE(e, (e) => {
                                        let t = U.Ay.getMaxAgeOptionByValue(e);
                                        return null !== t ? t.label : e;
                                    });
                                case P.gGk.PERMISSIONS: {
                                    let t = [],
                                        { added: n, removed: l } = er(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let e = new D.QO(P.gGk.PERMISSIONS_GRANTED, null, n);
                                        t.push(e);
                                    }
                                    if (l.length > 0) {
                                        let e = new D.QO(P.gGk.PERMISSIONS_DENIED, null, l);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case P.gGk.PERMISSIONS_GRANTED:
                                case P.gGk.PERMISSIONS_DENIED: {
                                    let t = [],
                                        { added: n, removed: l } = er(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let l = new D.QO(e.key, null, n);
                                        t.push(l);
                                    }
                                    if (l.length > 0) {
                                        let e = new D.QO(P.gGk.PERMISSIONS_RESET, l, l);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case P.gGk.FLAGS: {
                                    let t = [],
                                        { added: n, removed: l } = (function (e, t) {
                                            let n = "number" == typeof e ? e : 0,
                                                l = "number" == typeof t ? t : 0,
                                                r = c.VL(l, n),
                                                a = c.VL(n, l),
                                                i = [],
                                                s = [];
                                            for (let e in k.lx) {
                                                let t = k.lx[e];
                                                (c.Lt(r, t) && i.push(t), c.Lt(a, t) && s.push(t));
                                            }
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
                                case P.gGk.PREFERRED_LOCALE:
                                    return eE(e, (e) => {
                                        let t = (0, X.getAvailableLocales)().find((t) => t.value === e);
                                        return null != t ? t.name : null;
                                    });
                                case P.gGk.VIDEO_QUALITY_MODE:
                                    return eE(e, (e) =>
                                        e === P.K3c.FULL ? X.intl.string(X.t["7jOoJE"]) : X.intl.string(X.t.jjKYpu),
                                    );
                                case P.gGk.SYSTEM_CHANNEL_FLAGS:
                                    let l, r;
                                    return (
                                        (l = {
                                            [P.ogj.SUPPRESS_JOIN_NOTIFICATIONS]:
                                                P.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                            [P.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS]:
                                                P.gGk.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                            [P.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]:
                                                P.gGk.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                            [P.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES]:
                                                P.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES,
                                        }),
                                        (r = []),
                                        Object.values(P.ogj).forEach((t) => {
                                            let n = (e.oldValue & t) === t,
                                                a = (e.newValue & t) === t;
                                            if (n === a) return;
                                            let i = new D.QO(l[t], !n, !a);
                                            r.push(i);
                                        }),
                                        r
                                    );
                                case P.gGk.AUTO_MODERATION_ACTIONS:
                                    if (t.targetType === P.GaG.AUTO_MODERATION_RULE)
                                        return eE(
                                            e,
                                            (e) => e.map((e) => e.type),
                                            (e) => e.map(N.PZ).join(", "),
                                        );
                                    break;
                                case P.gGk.AUTO_MODERATION_EVENT_TYPE:
                                    if (t.targetType === P.GaG.AUTO_MODERATION_RULE) return eE(e, N.X3);
                                    break;
                                case P.gGk.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (t.targetType === P.GaG.AUTO_MODERATION_RULE) return eE(e, N.nl);
                                    break;
                                case P.gGk.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (t.targetType === P.GaG.AUTO_MODERATION_RULE)
                                        return eE(e, (e) =>
                                            null != e && "object" == typeof e
                                                ? null != e.keyword_filter && Array.isArray(e.keyword_filter)
                                                    ? X.intl.formatToMarkdownString(X.t.y91UXV, {
                                                          newValue: e.keyword_filter.map((e) => `'${e}'`).join(", "),
                                                      })
                                                    : JSON.stringify(e)
                                                : e,
                                        );
                                    break;
                                case P.gGk.AUTO_MODERATION_ADD_KEYWORDS:
                                case P.gGk.AUTO_MODERATION_REMOVE_KEYWORDS:
                                case P.gGk.AUTO_MODERATION_ADD_REGEX_PATTERNS:
                                case P.gGk.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
                                case P.gGk.AUTO_MODERATION_ADD_ALLOW_LIST:
                                case P.gGk.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                                    if (t.targetType === P.GaG.AUTO_MODERATION_RULE)
                                        return eE(e, (e) =>
                                            null != e && Array.isArray(e)
                                                ? e.map((e) => `'${e}'`).join(", ")
                                                : JSON.stringify(e),
                                        );
                                    break;
                                case P.gGk.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (t.targetType === P.GaG.AUTO_MODERATION_RULE)
                                        return eE(
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
                                case P.gGk.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (t.targetType === P.GaG.AUTO_MODERATION_RULE)
                                        return eE(
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
                                case P.gGk.ROLE_IDS:
                                    if (t.targetType === P.GaG.INVITE)
                                        return eE(e, (e) =>
                                            e
                                                .map((e) => L.A.getRole(n.id, e))
                                                .filter((e) => null != e)
                                                .map((e) => ({ id: e.id, name: e.name })),
                                        );
                                    break;
                                case P.gGk.AVAILABLE_TAGS:
                                    return es(e);
                                case P.gGk.APPLIED_TAGS:
                                    return ei(e, t);
                                case P.gGk.SCHEDULED_START_TIME:
                                case P.gGk.SCHEDULED_END_TIME:
                                    return eE(e, (e) => (0, M.i$)(s()(new Date(e)), "LLLL"));
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
function er(e, t) {
    let n = o.iu("string" == typeof e ? e : 0),
        l = o.iu("string" == typeof t ? t : 0),
        r = o.TF(l, n),
        a = o.TF(n, l),
        i = [],
        s = [];
    for (let e in P.xBc) {
        let t = P.xBc[e];
        (o.zy(r, t) && i.push(t), o.zy(a, t) && s.push(t));
    }
    return { added: i, removed: s };
}
function ea(e) {
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
function ei(e, t) {
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
        c.push(new D.QO(P.gGk.AVAILABLE_TAG_ADD, null, t));
    }
    for (let e of _) {
        let t = s[e] ?? { id: e, name: e };
        c.push(new D.QO(P.gGk.AVAILABLE_TAG_DELETE, null, t));
    }
    return c.length > 0 ? c : e;
}
function es(e) {
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
        for (let e in i) if (null == a[e]) return new D.QO(P.gGk.AVAILABLE_TAG_ADD, null, ea(i[e]));
    }
    if (l.length > r.length) {
        for (let e in a) if (null == i[e]) return new D.QO(P.gGk.AVAILABLE_TAG_DELETE, null, ea(a[e]));
    }
    for (let e in a) {
        let t = a[e],
            n = i[e];
        if (n?.name !== t.name || n?.emoji_id !== t.emoji_id || n?.emoji_name !== t.emoji_name)
            return new D.QO(P.gGk.AVAILABLE_TAG_EDIT, ea(t), ea(n));
    }
    return e;
}
function eE(e, t, n) {
    let l = e.newValue,
        r = e.oldValue;
    return (
        null != e.newValue && ((l = t(e.newValue)), null != n && null != l && (l = n(l))),
        null != e.oldValue && ((r = t(e.oldValue)), null != n && null != r && (r = n(r))),
        new D.QO(e.key, r || e.oldValue, l || e.newValue)
    );
}
function eu(e, t, n, l, r) {
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
function eo(e, t, n) {
    let l = e,
        r = t(e);
    return (null != r && null != n && (l = n(r)), l);
}
function e_(e, t) {
    return (n) => (null == n.oldValue ? e : t);
}
function ec(e, t) {
    return (n) => (null == n.newValue ? e : t);
}
function ed(e, t, n, l) {
    return (r) => (null != r.newValue && null != r.oldValue ? e : null != r.newValue ? t : null != r.oldValue ? n : l);
}
function eA(e, t) {
    return (n) => (n.newValue ? e : t);
}
function eg(e) {
    return (t) => e[t.newValue];
}
function eT(e, t) {
    return (n) => e[n.newValue] ?? t;
}
