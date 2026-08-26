n.r(t),
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
    n(321073);
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
    c = n(317097),
    _ = n(665260),
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
    R = n(411153),
    D = n(734057),
    h = n(317525),
    L = n(994500),
    C = n(287809),
    M = n(58703),
    x = n(735547),
    U = n(935208),
    f = n(427262),
    p = n(523599),
    k = n(652215),
    F = n(746080),
    P = n(243277),
    j = n(539916),
    v = n(988794),
    b = n(375708);
let X = new T.A("AuditLogUtils"),
    y = [d.pJ.DAYS, d.pJ.HOURS, d.pJ.MINUTES, d.pJ.SECONDS];
function B() {
    return { [k.gGk.REASON]: () => b.t["2IW3C5"] };
}
function V(e) {
    switch (e.targetType) {
        case k.GaG.GUILD:
            return {
                [k.gGk.NAME]: () => b.t.CkDiNH,
                [k.gGk.DESCRIPTION]: e_(b.t.RP3Ey3, b.t.QAVj1Y),
                [k.gGk.ICON_HASH]: () => b.t.iLZ8Q9,
                [k.gGk.SPLASH_HASH]: () => b.t["4VV6dn"],
                [k.gGk.DISCOVERY_SPLASH_HASH]: () => b.t["2pds6p"],
                [k.gGk.BANNER_HASH]: e_(b.t.Cxq4zO, b.t["H7eE/9"]),
                [k.gGk.OWNER_ID]: () => b.t["8ltsLT"],
                [k.gGk.REGION]: () => b.t.X9r5Kf,
                [k.gGk.PREFERRED_LOCALE]: () => b.t.UnXuDS,
                [k.gGk.AFK_CHANNEL_ID]: e_(b.t.ClBuA4, b.t["ms+xtL"]),
                [k.gGk.AFK_TIMEOUT]: () => b.t.q21fHa,
                [k.gGk.SYSTEM_CHANNEL_ID]: e_(b.t.H1VXaa, b.t.XhtmxJ),
                [k.gGk.RULES_CHANNEL_ID]: e_(b.t.OI6MG2, b.t.lik3tI),
                [k.gGk.PUBLIC_UPDATES_CHANNEL_ID]: e_(b.t.YxBKrY, b.t.Ehsnij),
                [k.gGk.MFA_LEVEL]: eg({ [k.EkJ.NONE]: b.t.voaCCQ, [k.EkJ.ELEVATED]: b.t.pRNVwz }),
                [k.gGk.WIDGET_ENABLED]: eA(b.t.ADIty8, b.t.nf58VY),
                [k.gGk.WIDGET_CHANNEL_ID]: e_(b.t["6SBsDc"], b.t.deQ5wO),
                [k.gGk.VERIFICATION_LEVEL]: eg({
                    [k.PvD.NONE]: b.t.W27rsc,
                    [k.PvD.LOW]: b.t["V8P+Pw"],
                    [k.PvD.MEDIUM]: b.t.ERQFau,
                    [k.PvD.HIGH]: b.t["83fN0j"],
                    [k.PvD.VERY_HIGH]: b.t.PnkQJE,
                }),
                [k.gGk.DEFAULT_MESSAGE_NOTIFICATIONS]: eg({
                    [k.orn.ALL_MESSAGES]: b.t.LDi76A,
                    [k.orn.ONLY_MENTIONS]: b.t["6K83ba"],
                }),
                [k.gGk.VANITY_URL_CODE]: e_(b.t.Zplsov, b.t.u6cArh),
                [k.gGk.EXPLICIT_CONTENT_FILTER]: eg({
                    [k.gh6.DISABLED]: b.t.fmOeL3,
                    [k.gh6.MEMBERS_WITHOUT_ROLES]: b.t["4FghYw"],
                    [k.gh6.ALL_MEMBERS]: b.t.olyrSm,
                }),
                [k.gGk.PREMIUM_PROGRESS_BAR_ENABLED]: eA(b.t.rBT0sn, b.t["gc+te5"]),
                [k.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => b.t.YbouFH,
                [k.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => b.t.g3DMjB,
                [k.gGk.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => b.t["+fQAel"],
                [k.gGk.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => b.t.E1fc4v,
                [k.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => b.t.XbwtSA,
                ...B(),
            };
        case k.GaG.CHANNEL:
        case k.GaG.CHANNEL_OVERWRITE:
            return {
                [k.gGk.NAME]: ec(b.t.f8Rh0U, b.t.ebD4Qp),
                [k.gGk.POSITION]: ec(b.t.isS8te, b.t.t5uBis),
                [k.gGk.TOPIC]: ed(b.t.esQcxn, b.t["m+veAn"], b.t["ws/1FA"]),
                [k.gGk.BITRATE]: ec(b.t.fw81ak, b.t.MFNlgZ),
                [k.gGk.RTC_REGION_OVERRIDE]: ed(b.t["6kajxx"], b.t.eGOlmU, b.t["0JMZdz"]),
                [k.gGk.USER_LIMIT]: ec(b.t.wk5t7p, b.t.XgjCEh),
                [k.gGk.RATE_LIMIT_PER_USER]: ec(b.t["7lirhF"], b.t.j4CCJR),
                [k.gGk.PERMISSIONS_RESET]: () => b.t["+vSBFY"],
                [k.gGk.PERMISSIONS_GRANTED]: () => b.t.EKLJv8,
                [k.gGk.PERMISSIONS_DENIED]: () => b.t.U3rO5X,
                [k.gGk.REASON]: () => b.t["2IW3C5"],
                [k.gGk.NSFW]: eA(b.t.H8Ri2Y, b.t.WW6cJw),
                [k.gGk.TYPE]: ec(b.t.Vn5zn2, b.t.aq4uWI),
                [k.gGk.VIDEO_QUALITY_MODE]: ec(b.t.e68fAU, b.t.djbES0),
                [k.gGk.DEFAULT_AUTO_ARCHIVE_DURATION]: ec(b.t.nYz2mg, b.t.oczvRI),
                [k.gGk.DEFAULT_THREAD_RATE_LIMIT_PER_USER]: ed(b.t.tOJ8h7, b.t.WaSgzk, b.t["lj+A4u"]),
                [k.gGk.FLAGS]: () => b.t.ImCQko,
                [k.gGk.AVAILABLE_TAG_ADD]: () => b.t.H86QQU,
                [k.gGk.AVAILABLE_TAG_EDIT]: () => b.t.YtUzls,
                [k.gGk.AVAILABLE_TAG_DELETE]: () => b.t["8QOseg"],
                [k.gGk.LINKED_LOBBY]: e_(b.t["+/3TkD"], b.t["5kDYS3"]),
            };
        case k.GaG.USER:
            return {
                [k.gGk.NICK]: ed(b.t.qXDsHv, b.t["m+qury"], b.t.DvLvjF),
                [k.gGk.DEAF]: eA(b.t.mArLlW, b.t.ddvVYG),
                [k.gGk.MUTE]: eA(b.t["bxs/lS"], b.t.FjecQM),
                [k.gGk.ROLES_REMOVE]: () => b.t["+2SDWV"],
                [k.gGk.ROLES_ADD]: () => b.t["B3/3IJ"],
                [k.gGk.PRUNE_DELETE_DAYS]: () => b.t["+Cvc+D"],
                [k.gGk.COMMUNICATION_DISABLED_UNTIL]: ed(b.t.LXTQr5, b.t.LXTQr5, b.t.ULSdnE),
                [k.gGk.BYPASSES_VERIFICATION]: eA(b.t.NBPBui, b.t.zATost),
                [k.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => b.t.YbouFH,
                ...B(),
            };
        case k.GaG.ROLE:
            return {
                [k.gGk.NAME]: ec(b.t.QBmlaD, b.t["Lfs4r+"]),
                [k.gGk.DESCRIPTION]: ec(b.t.XeYKWJ, b.t.PSfeIj),
                [k.gGk.PERMISSIONS_GRANTED]: () => b.t["9i/DvE"],
                [k.gGk.PERMISSIONS_DENIED]: () => b.t.pa1ZVh,
                [k.gGk.COLOR]: eT({ "#000000": b.t.TK6E1H }, b.t["2FQFiw"]),
                [k.gGk.COLORS]: (e) => (null == e.newValue.secondary_color ? b.t.U44ttm : b.t["WnSwL/"]),
                [k.gGk.HOIST]: eA(b.t.gWfe24, b.t["+tb8kN"]),
                [k.gGk.MENTIONABLE]: eA(b.t.LL8VFF, b.t.Z7xzmC),
                [k.gGk.ICON_HASH]: () => b.t["iEE79/"],
                [k.gGk.UNICODE_EMOJI]: () => b.t.KiLMM0,
                ...B(),
            };
        case k.GaG.ONBOARDING_PROMPT:
            return {
                ...B(),
                [k.gGk.TITLE]: ec(b.t["sNpuy/"], b.t["3Ukc/g"]),
                [k.gGk.DESCRIPTION]: ec(b.t.PP1q0x, b.t.z7pYLg),
                [k.gGk.OPTIONS]: () => b.t["3G5C9+"],
                [k.gGk.SINGLE_SELECT]: eA(b.t.v4WnR3, b.t["6Qg3uC"]),
                [k.gGk.REQUIRED]: eA(b.t["0MPAM6"], b.t.pwsXir),
            };
        case k.GaG.GUILD_ONBOARDING:
            return {
                ...B(),
                [k.gGk.DEFAULT_CHANNEL_IDS]: () => b.t["8M+D2s"],
                [k.gGk.ENABLE_DEFAULT_CHANNELS]: eA(b.t["EYd/ls"], b.t["36OZeQ"]),
                [k.gGk.ENABLE_ONBOARDING_PROMPTS]: eA(b.t.V3u8PV, b.t["r66lc/"]),
                [k.gGk.ENABLED]: eA(b.t.SODVIs, b.t.u8HY5U),
                [k.gGk.MODE]: eg({ [j.SD.ONBOARDING_ADVANCED]: b.t.JbzVsh, [j.SD.ONBOARDING_DEFAULT]: b.t.aCgU0S }),
            };
        case k.GaG.HOME_SETTINGS:
            return {
                ...B(),
                [k.gGk.WELCOME_MESSAGE]: () => b.t.dKQ1xd,
                [k.gGk.NEW_MEMBER_ACTIONS]: () => b.t.jDUIno,
                [k.gGk.RESOURCE_CHANNELS]: () => b.t.SIX0mr,
            };
        case k.GaG.INVITE:
            return {
                [k.gGk.CODE]: () => b.t.rrRHgb,
                [k.gGk.CHANNEL_ID]: () => b.t.Q1vd5q,
                [k.gGk.MAX_USES]: eT({ 0: b.t.Yx8LNm }, b.t["3ygnwU"]),
                [k.gGk.MAX_AGE]: eT({ [b.intl.string(b.t.PqEzn8)]: b.t.uWrLvw }, b.t["Q+5kcO"]),
                [k.gGk.TEMPORARY]: eA(b.t.MWp6H7, b.t.omiqTH),
                [k.gGk.FLAGS]: eg({ [u.Q.IS_GUEST_INVITE]: b.t.XYZMbL }),
                [k.gGk.ROLE_IDS]: () => b.t.gb1Owj,
                ...B(),
            };
        case k.GaG.WEBHOOK:
            return {
                [k.gGk.CHANNEL_ID]: ec(b.t.jhPprR, b.t.ar4qYO),
                [k.gGk.NAME]: ec(b.t.ZVGrzU, b.t.tywdZR),
                [k.gGk.AVATAR_HASH]: () => b.t.KB52Uj,
                [k.gGk.REASON]: () => b.t["2IW3C5"],
            };
        case k.GaG.EMOJI:
            return { [k.gGk.NAME]: ec(b.t.ahU1o5, b.t["wxs+vZ"]), ...B() };
        case k.GaG.STICKER:
            return {
                [k.gGk.NAME]: ec(b.t.cdl0Yo, b.t.o3W2ly),
                [k.gGk.TAGS]: ec(b.t["zwL+S2"], b.t["VYfKA+"]),
                [k.gGk.DESCRIPTION]: ec(b.t.XeYKWJ, b.t.PSfeIj),
                ...B(),
            };
        case k.GaG.INTEGRATION:
            return {
                [k.gGk.ENABLE_EMOTICONS]: eA(b.t.FI0m5x, b.t.olpKC6),
                [k.gGk.EXPIRE_BEHAVIOR]: eg({ 0: b.t["1Bb1+u"], 1: b.t.vjlW6m }),
                [k.gGk.EXPIRE_GRACE_PERIOD]: () => b.t.iovXMa,
                ...B(),
            };
        case k.GaG.STAGE_INSTANCE:
            return {
                [k.gGk.TOPIC]: ec(b.t["m+veAn"], b.t.esQcxn),
                [k.gGk.PRIVACY_LEVEL]: eg({ [v.dD.GUILD_ONLY]: b.t["EC+CDt"], [v.dD.PUBLIC]: b.t["pK/WG0"] }),
                ...B(),
            };
        case k.GaG.GUILD_SCHEDULED_EVENT:
            return {
                [k.gGk.NAME]: () => b.t["21EXHW"],
                [k.gGk.DESCRIPTION]: () => b.t.Vm1ofw,
                [k.gGk.PRIVACY_LEVEL]: eg({ [v.dD.GUILD_ONLY]: b.t["EC+CDt"], [v.dD.PUBLIC]: b.t["pK/WG0"] }),
                [k.gGk.STATUS]: eg({
                    [v.XG.SCHEDULED]: b.t.hXKDgq,
                    [v.XG.ACTIVE]: b.t.lRX1nz,
                    [v.XG.COMPLETED]: b.t["/eFIhq"],
                    [v.XG.CANCELED]: b.t.NWIYhj,
                }),
                [k.gGk.ENTITY_TYPE]: eg({
                    [v.Ps.NONE]: b.t["6sO3Ss"],
                    [v.Ps.STAGE_INSTANCE]: b.t["Wo+s1y"],
                    [v.Ps.VOICE]: b.t.XCVaIL,
                    [v.Ps.EXTERNAL]: b.t.IvhAj2,
                }),
                [k.gGk.CHANNEL_ID]: e_(b.t.yJBIcX, b.t["+PqSsi"]),
                [k.gGk.LOCATION]: e_(b.t.GaMBHy, b.t.PsICk0),
                [k.gGk.IMAGE_HASH]: e_(b.t.S3vcRK, b.t.KQu47I),
                ...B(),
            };
        case k.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
            return {
                [k.gGk.SCHEDULED_START_TIME]: e_(b.t.zMIYVg, b.t.fzF8Gd),
                [k.gGk.SCHEDULED_END_TIME]: e_(b.t.vONSQA, b.t.IlIti3),
                [k.gGk.IS_CANCELED]: (e) => {
                    if (null != e.oldValue || !0 === e.newValue) {
                        if (!e.oldValue && e.newValue) return b.t["7RkicW"];
                        else if (e.oldValue && !e.newValue) return b.t.dRNTWW;
                    }
                },
                ...B(),
            };
        case k.GaG.THREAD:
            return {
                [k.gGk.NAME]: ec(b.t.tUKRzX, b.t.kPCHON),
                [k.gGk.ARCHIVED]: eA(b.t.jDi9FK, b.t.F6dvbT),
                [k.gGk.LOCKED]: eA(b.t.JSy1QW, b.t.C7Jgo8),
                [k.gGk.INVITABLE]: eA(b.t.dxNUs9, b.t.biJvYG),
                [k.gGk.AUTO_ARCHIVE_DURATION]: ec(b.t.LuaG3y, b.t["18d9qr"]),
                [k.gGk.RATE_LIMIT_PER_USER]: ec(b.t["7lirhF"], b.t.j4CCJR),
                [k.gGk.FLAGS]: () => b.t.sSAQtj,
                [k.gGk.AVAILABLE_TAG_ADD]: () => b.t.H86QQU,
                [k.gGk.AVAILABLE_TAG_DELETE]: () => b.t["8QOseg"],
                ...B(),
            };
        case k.GaG.APPLICATION_COMMAND:
            var t;
            let n;
            return (
                (t = e.changes),
                (n = { ...B() }),
                t?.forEach((e) => {
                    e.newValue
                        ? e.newValue.permission
                            ? (n[e.key] = () => b.t["JH+89C"])
                            : (n[e.key] = () => b.t.HUrFDu)
                        : (n[e.key] = () => b.t.vynxnV);
                }),
                n
            );
        case k.GaG.AUTO_MODERATION_RULE:
            return {
                [k.gGk.NAME]: () => b.t.XwxAJT,
                [k.gGk.AUTO_MODERATION_TRIGGER_TYPE]: () => b.t.fx0pyl,
                [k.gGk.AUTO_MODERATION_EVENT_TYPE]: () => b.t["46Y+L5"],
                [k.gGk.AUTO_MODERATION_ACTIONS]: () => b.t["8efxfv"],
                [k.gGk.AUTO_MODERATION_ENABLED]: (e) => (!0 === (e.newValue ?? e.oldValue) ? b.t.fCmxC2 : b.t.Wrg9Jn),
                [k.gGk.AUTO_MODERATION_EXEMPT_ROLES]: () => b.t.TRb7Nx,
                [k.gGk.AUTO_MODERATION_EXEMPT_CHANNELS]: () => b.t.mzitLE,
                [k.gGk.AUTO_MODERATION_TRIGGER_METADATA]: () => b.t["h/lM65"],
                [k.gGk.AUTO_MODERATION_ADD_KEYWORDS]: () => b.t["9V2yaC"],
                [k.gGk.AUTO_MODERATION_REMOVE_KEYWORDS]: () => b.t["4Qe9ny"],
                [k.gGk.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => b.t.GyZtxp,
                [k.gGk.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => b.t.OQDadc,
                [k.gGk.AUTO_MODERATION_ADD_ALLOW_LIST]: () => b.t["FvvR+K"],
                [k.gGk.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => b.t.p5nSvy,
                ...B(),
            };
        case k.GaG.GUILD_SOUNDBOARD:
            return {
                [k.gGk.NAME]: ec(b.t.VOtRSO, b.t.OK7B8E),
                [k.gGk.VOLUME]: ec(b.t.igrDB9, b.t.L5lDFJ),
                [k.gGk.EMOJI_NAME]: ed(b.t.IIanaY, b.t["z4w4U/"], b.t.V8TfyU),
                [k.gGk.EMOJI_ID]: ed(b.t.ainxMB, b.t["2NPsYu"], b.t["8crtns"]),
                ...B(),
            };
        case k.GaG.VOICE_CHANNEL_STATUS:
            return { [k.gGk.STATUS]: () => b.t.HyCSnI, ...B() };
        case k.GaG.GUILD_MEMBER_VERIFICATION:
            return {
                [k.gGk.VERIFICATION_ENABLED]: (e) => (!0 === e.newValue ? b.t.fnkzDY : b.t.WYT6ka),
                [k.gGk.MANUAL_APPROVAL_ENABLED]: (e) => (!0 === e.newValue ? b.t.jzSvVd : b.t.WxyOtj),
                ...B(),
            };
        case k.GaG.GUILD_PROFILE:
            return {
                [k.gGk.DESCRIPTION]: () => b.t.nsUZKY,
                [k.gGk.BRAND_COLOR_PRIMARY]: () => b.t.qe9mgN,
                [k.gGk.CUSTOM_BANNER_HASH]: () => b.t["04b5KC"],
                [k.gGk.TRAITS]: () => b.t.dEy9WO,
                [k.gGk.GAME_APPLICATION_IDS]: () => b.t["8BOT3x"],
                [k.gGk.VISIBILITY]: () => b.t.bCl1Ep,
                [k.gGk.SERVER_TAG]: e_(b.t.ix1dnX, b.t["4LKpKb"]),
            };
        default:
            return B();
    }
}
let H = {
    [k.GaG.CHANNEL]: { [k.gGk.ID]: !0, [k.gGk.PERMISSION_OVERWRITES]: !0 },
    [k.GaG.CHANNEL_OVERWRITE]: { [k.gGk.TYPE]: !0, [k.gGk.ID]: !0, [k.gGk.PERMISSION_OVERWRITES]: !0 },
    [k.GaG.INVITE]: { [k.gGk.INVITER_ID]: !0, [k.gGk.USES]: !0 },
    [k.GaG.WEBHOOK]: { [k.gGk.TYPE]: !0, [k.gGk.APPLICATION_ID]: !0 },
    [k.GaG.INTEGRATION]: { [k.gGk.TYPE]: !0, [k.gGk.NAME]: !0 },
    [k.GaG.THREAD]: { [k.gGk.ID]: !0, [k.gGk.TYPE]: !0 },
    [k.GaG.STICKER]: {
        [k.gGk.ID]: !0,
        [k.gGk.TYPE]: !0,
        [k.gGk.ASSET]: !0,
        [k.gGk.FORMAT_TYPE]: !0,
        [k.gGk.AVAILABLE]: !0,
        [k.gGk.GUILD_ID]: !0,
    },
    [k.GaG.GUILD_HOME]: { [k.gGk.ENTITY_TYPE]: !0 },
    [k.GaG.GUILD_ONBOARDING]: { [k.gGk.PROMPTS]: !0 },
    [k.GaG.GUILD_SOUNDBOARD]: { [k.gGk.ID]: !0, [k.gGk.SOUND_ID]: !0 },
};
function w(e, t) {
    if (
        e.actionType === k.RWi.DELETE &&
        e.action !== k.F_X.MEMBER_BAN_ADD &&
        e.action !== k.F_X.MEMBER_KICK &&
        e.action !== k.F_X.MEMBER_PRUNE
    )
        return t.key !== k.gGk.REASON;
    let n = H[e.targetType];
    return null != n && !0 === n[t.key];
}
function W(e) {
    let { changes: t } = e;
    return null != t && t.some((t) => !w(e, t));
}
let Y = () => [
    { value: k.F_X.ALL, label: b.intl.string(b.t.QxEVcv), valueLabel: b.intl.string(b.t.an9Ry3) },
    { value: k.F_X.GUILD_UPDATE, label: b.intl.string(b.t["5INZa3"]) },
    { value: k.F_X.CHANNEL_CREATE, label: b.intl.string(b.t["2uh4vJ"]) },
    { value: k.F_X.CHANNEL_UPDATE, label: b.intl.string(b.t.mGsBLV) },
    { value: k.F_X.CHANNEL_DELETE, label: b.intl.string(b.t.hCHzAr) },
    { value: k.F_X.CHANNEL_OVERWRITE_CREATE, label: b.intl.string(b.t["8TnAMP"]) },
    { value: k.F_X.CHANNEL_OVERWRITE_UPDATE, label: b.intl.string(b.t.Jqx0Bi) },
    { value: k.F_X.CHANNEL_OVERWRITE_DELETE, label: b.intl.string(b.t.gBXOr4) },
    { value: k.F_X.MEMBER_KICK, label: b.intl.string(b.t["Q1/hN8"]) },
    { value: k.F_X.MEMBER_PRUNE, label: b.intl.string(b.t.tOTTja) },
    { value: k.F_X.MEMBER_BAN_ADD, label: b.intl.string(b.t["NfPn+e"]) },
    { value: k.F_X.MEMBER_BAN_REMOVE, label: b.intl.string(b.t.XCsGfI) },
    { value: k.F_X.MEMBER_UPDATE, label: b.intl.string(b.t["F/jmNJ"]) },
    { value: k.F_X.MEMBER_ROLE_UPDATE, label: b.intl.string(b.t.zAveSI) },
    { value: k.F_X.MEMBER_MOVE, label: b.intl.string(b.t.QshteR) },
    { value: k.F_X.MEMBER_DISCONNECT, label: b.intl.string(b.t.Z45os7) },
    { value: k.F_X.BOT_ADD, label: b.intl.string(b.t.vuH24Z) },
    { value: k.F_X.THREAD_CREATE, label: b.intl.string(b.t["+zl0DG"]) },
    { value: k.F_X.THREAD_UPDATE, label: b.intl.string(b.t.rbIry3) },
    { value: k.F_X.THREAD_DELETE, label: b.intl.string(b.t.hFjNEA) },
    { value: k.F_X.ROLE_CREATE, label: b.intl.string(b.t.AbxKtv) },
    { value: k.F_X.ROLE_UPDATE, label: b.intl.string(b.t.t3Z6sU) },
    { value: k.F_X.ROLE_DELETE, label: b.intl.string(b.t.YsFpa4) },
    { value: k.F_X.ONBOARDING_PROMPT_CREATE, label: b.intl.string(b.t.ZV9tqc) },
    { value: k.F_X.ONBOARDING_PROMPT_UPDATE, label: b.intl.string(b.t.PcOdvX) },
    { value: k.F_X.ONBOARDING_PROMPT_DELETE, label: b.intl.string(b.t["+r33Na"]) },
    { value: k.F_X.ONBOARDING_CREATE, label: b.intl.string(b.t.uDADde) },
    { value: k.F_X.ONBOARDING_UPDATE, label: b.intl.string(b.t.J1H1wg) },
    { value: k.F_X.HOME_SETTINGS_CREATE, label: b.intl.string(b.t.Di4cvI) },
    { value: k.F_X.HOME_SETTINGS_UPDATE, label: b.intl.string(b.t.tzyrJH) },
    { value: k.F_X.INVITE_CREATE, label: b.intl.string(b.t["0BNJdX"]) },
    { value: k.F_X.INVITE_UPDATE, label: b.intl.string(b.t["o++obV"]) },
    { value: k.F_X.INVITE_DELETE, label: b.intl.string(b.t.iP40Az) },
    { value: k.F_X.WEBHOOK_CREATE, label: b.intl.string(b.t["tBF4+S"]) },
    { value: k.F_X.WEBHOOK_UPDATE, label: b.intl.string(b.t.eV3McO) },
    { value: k.F_X.WEBHOOK_DELETE, label: b.intl.string(b.t.AAL3K1) },
    { value: k.F_X.EMOJI_CREATE, label: b.intl.string(b.t.RuWm0V) },
    { value: k.F_X.EMOJI_UPDATE, label: b.intl.string(b.t.WzdUY7) },
    { value: k.F_X.EMOJI_DELETE, label: b.intl.string(b.t.c3dK2L) },
    { value: k.F_X.MESSAGE_DELETE, label: b.intl.string(b.t.daTfXh) },
    { value: k.F_X.MESSAGE_BULK_DELETE, label: b.intl.string(b.t.nrBxeh) },
    { value: k.F_X.MESSAGE_PIN, label: b.intl.string(b.t.MUldyN) },
    { value: k.F_X.MESSAGE_UNPIN, label: b.intl.string(b.t.n4zKhA) },
    { value: k.F_X.INTEGRATION_CREATE, label: b.intl.string(b.t.deNm8x) },
    { value: k.F_X.INTEGRATION_UPDATE, label: b.intl.string(b.t.HT7Sfg) },
    { value: k.F_X.INTEGRATION_DELETE, label: b.intl.string(b.t["+kJ09q"]) },
    { value: k.F_X.STICKER_CREATE, label: b.intl.string(b.t["3DzNjU"]) },
    { value: k.F_X.STICKER_UPDATE, label: b.intl.string(b.t.tdhW5b) },
    { value: k.F_X.STICKER_DELETE, label: b.intl.string(b.t["+ZhGOk"]) },
    { value: k.F_X.STAGE_INSTANCE_CREATE, label: b.intl.string(b.t.sPbjA6) },
    { value: k.F_X.STAGE_INSTANCE_UPDATE, label: b.intl.string(b.t.cW9LfJ) },
    { value: k.F_X.STAGE_INSTANCE_DELETE, label: b.intl.string(b.t["U1r+yD"]) },
    { value: k.F_X.GUILD_SCHEDULED_EVENT_CREATE, label: b.intl.string(b.t.H81Zyy) },
    { value: k.F_X.GUILD_SCHEDULED_EVENT_UPDATE, label: b.intl.string(b.t["FM69l+"]) },
    { value: k.F_X.GUILD_SCHEDULED_EVENT_DELETE, label: b.intl.string(b.t.Rq28Bh) },
    { value: k.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE, label: b.intl.string(b.t.iPdFOt) },
    { value: k.F_X.AUTO_MODERATION_BLOCK_MESSAGE, label: b.intl.string(b.t.gNq5z6) },
    { value: k.F_X.AUTO_MODERATION_RULE_CREATE, label: b.intl.string(b.t.f72Zqb) },
    { value: k.F_X.AUTO_MODERATION_RULE_UPDATE, label: b.intl.string(b.t.XeqIiv) },
    { value: k.F_X.AUTO_MODERATION_RULE_DELETE, label: b.intl.string(b.t.syAApU) },
    { value: k.F_X.GUILD_HOME_FEATURE_ITEM, label: b.intl.string(b.t.lhG5KN) },
    { value: k.F_X.GUILD_HOME_REMOVE_ITEM, label: b.intl.string(b.t.lRPRwS) },
    { value: k.F_X.SOUNDBOARD_SOUND_CREATE, label: b.intl.string(b.t.yoRi5r) },
    { value: k.F_X.SOUNDBOARD_SOUND_UPDATE, label: b.intl.string(b.t.uKlG0Z) },
    { value: k.F_X.SOUNDBOARD_SOUND_DELETE, label: b.intl.string(b.t.gq0iCT) },
    { value: k.F_X.VOICE_CHANNEL_STATUS_CREATE, label: b.intl.string(b.t.rGr0YM) },
    { value: k.F_X.VOICE_CHANNEL_STATUS_DELETE, label: b.intl.string(b.t.V9PEQ4) },
];
function K(e, t) {
    return null != t.changes ? t.changes.find((t) => t.key === e) : null;
}
function z(e, t) {
    return null != t.changes ? t.changes.filter((t) => t.key === e) : [];
}
function J(e) {
    let t = Y().find((t) => t.value === e.action);
    return null != K(k.gGk.COMMUNICATION_DISABLED_UNTIL, e) ? b.intl.string(b.t.z3wbj8) : (t?.label ?? null);
}
let Q = {
    [d.pJ.SECONDS]: (e) => b.intl.formatToPlainString(b.t.geSp4K, { seconds: e }),
    [d.pJ.MINUTES]: (e) => b.intl.formatToPlainString(b.t.iXLF9W, { minutes: e }),
    [d.pJ.HOURS]: (e) => b.intl.formatToPlainString(b.t.xCjYxK, { hours: e }),
    [d.pJ.DAYS]: (e) => b.intl.formatToPlainString(b.t["k2UNz+"], { days: e }),
};
function Z(e) {
    let t = K(k.gGk.COMMUNICATION_DISABLED_UNTIL, e),
        n = z(k.gGk.ROLES_ADD, e).length > 0,
        l = z(k.gGk.ROLES_REMOVE, e).length > 0;
    if (null != t) {
        if (t?.newValue != null) {
            let n = new Date(t?.newValue).getTime() - U.default.extractTimestamp(e.id),
                l = Math.round(n / 1e3 / 60),
                r = (0, d.$l)(l, y);
            if (null == r.unit || null == r.time) return null;
            if (r.unit in Q) {
                let e = r.unit,
                    t = r.unit === d.pJ.SECONDS ? Math.round(n / 1e3) : r.time;
                return Q[e](t);
            }
        } else if (t?.oldValue != null) return b.intl.string(b.t.MA1ltr);
    } else if (n && l) return b.intl.string(b.t.RdMMew);
    else if (n) return b.intl.string(b.t["4GQqs8"]);
    else if (l) return b.intl.string(b.t["8mQ6x0"]);
    return null;
}
function q(e) {
    let t = z(k.gGk.ROLES_ADD, e),
        n = z(k.gGk.ROLES_REMOVE, e),
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
        ? b.intl.formatToPlainString(b.t.tZw1EW, { roleNamesAdded: l, roleNamesRemoved: r })
        : t.length > 0
          ? b.intl.formatToPlainString(b.t["/mTqt5"], { roleNames: l })
          : n.length > 0
            ? b.intl.formatToPlainString(b.t.Wk4pAJ, { roleNames: r })
            : null;
}
function $(e) {
    switch (e.action) {
        case k.F_X.GUILD_UPDATE:
            return b.t.LjZO31;
        case k.F_X.CHANNEL_CREATE:
            let t = null != e.changes ? e.changes.find((e) => e.key === k.gGk.TYPE) : null;
            if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
            switch (t.newValue) {
                case k.rbe.GUILD_STAGE_VOICE:
                    return b.t["OKp4+o"];
                case k.rbe.GUILD_VOICE:
                    return b.t.NPOy4G;
                case k.rbe.GUILD_CATEGORY:
                    return b.t.T3KIjz;
                case k.rbe.GUILD_FORUM:
                    return b.t.VvNgHX;
                case k.rbe.GUILD_MEDIA:
                    return b.t["4NWSxa"];
                case k.rbe.GUILD_ANNOUNCEMENT:
                    return b.t.eYP6UV;
                default:
                    return b.t.wrYNG2;
            }
        case k.F_X.CHANNEL_UPDATE:
            return b.t.nTYk6B;
        case k.F_X.CHANNEL_DELETE:
            return b.t.ynfvkm;
        case k.F_X.CHANNEL_OVERWRITE_CREATE:
            return b.t.l5Cu1a;
        case k.F_X.CHANNEL_OVERWRITE_UPDATE:
            return b.t.uhtbNU;
        case k.F_X.CHANNEL_OVERWRITE_DELETE:
            return b.t["HASt/3"];
        case k.F_X.MEMBER_KICK:
            return b.t.B5hDZX;
        case k.F_X.MEMBER_PRUNE:
            return b.t.qKOZTP;
        case k.F_X.MEMBER_BAN_ADD:
            return b.t["XklUm/"];
        case k.F_X.MEMBER_BAN_REMOVE:
            return b.t.o3Y6HD;
        case k.F_X.MEMBER_UPDATE:
            return b.t.pznhLN;
        case k.F_X.MEMBER_ROLE_UPDATE:
            return b.t.Vngfia;
        case k.F_X.MEMBER_MOVE:
            return b.t.Yt6NkU;
        case k.F_X.MEMBER_DISCONNECT:
            return b.t.K4eCZw;
        case k.F_X.BOT_ADD:
            return b.t.fWvX0G;
        case k.F_X.ROLE_CREATE:
            return b.t.UTLTx6;
        case k.F_X.ROLE_UPDATE:
            return b.t.NRbN18;
        case k.F_X.ROLE_DELETE:
            return b.t["4s63tb"];
        case k.F_X.INVITE_CREATE:
            return b.t.YHOXWy;
        case k.F_X.INVITE_UPDATE:
            return b.t.ja3kGS;
        case k.F_X.INVITE_DELETE:
            return b.t["3n/iWk"];
        case k.F_X.WEBHOOK_CREATE:
            return b.t.MhYhil;
        case k.F_X.WEBHOOK_UPDATE:
            return b.t["6GTlWB"];
        case k.F_X.WEBHOOK_DELETE:
            return b.t.in0VjZ;
        case k.F_X.EMOJI_CREATE:
            return b.t["7vekRO"];
        case k.F_X.EMOJI_UPDATE:
            return b.t.IsCKfh;
        case k.F_X.EMOJI_DELETE:
            return b.t.JnUaVG;
        case k.F_X.STICKER_CREATE:
            return b.t.DRZifq;
        case k.F_X.STICKER_UPDATE:
            return b.t.bhujGc;
        case k.F_X.STICKER_DELETE:
            return b.t.rGEP9U;
        case k.F_X.MESSAGE_DELETE:
            return b.t["HPkD+M"];
        case k.F_X.MESSAGE_BULK_DELETE:
            return b.t["3RIvLE"];
        case k.F_X.MESSAGE_PIN:
            return b.t.Yna7E7;
        case k.F_X.MESSAGE_UNPIN:
            return b.t.NCxXUW;
        case k.F_X.INTEGRATION_CREATE:
            return b.t.HYvCb3;
        case k.F_X.INTEGRATION_UPDATE:
            return b.t.ibCCOS;
        case k.F_X.INTEGRATION_DELETE:
            return b.t["8zScWY"];
        case k.F_X.STAGE_INSTANCE_CREATE:
            return b.t["n7x/DF"];
        case k.F_X.STAGE_INSTANCE_UPDATE:
            return b.t["0hQYU4"];
        case k.F_X.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return b.t["Oi/in9"];
            return b.t["7ZIFm9"];
        case k.F_X.GUILD_SCHEDULED_EVENT_CREATE:
            return b.t.S7k52p;
        case k.F_X.GUILD_SCHEDULED_EVENT_UPDATE:
            return b.t.ebTK11;
        case k.F_X.GUILD_SCHEDULED_EVENT_DELETE:
            return b.t["/ARPKQ"];
        case k.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case k.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return b.t["8qCI36"];
        case k.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return b.t.zYb2da;
        case k.F_X.THREAD_CREATE:
            let n = null != e.changes ? e.changes.find((e) => e.key === k.gGk.TYPE) : null;
            if (null == n) throw Error("[AuditLog] Could not find type change for thread create");
            switch (n.newValue) {
                case k.rbe.PRIVATE_THREAD:
                    return b.t.Br0y5w;
                case k.rbe.ANNOUNCEMENT_THREAD:
                    return b.t["6uaMmO"];
                default:
                    return b.t["2cxQ7G"];
            }
        case k.F_X.THREAD_UPDATE:
            return b.t.PSsy4t;
        case k.F_X.THREAD_DELETE:
            return b.t.s3Khn8;
        case k.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return b.t.uzCqBm;
        case k.F_X.AUTO_MODERATION_BLOCK_MESSAGE:
            return b.t.NqWv2K;
        case k.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL:
            if (e.options?.auto_moderation_rule_trigger_type === P.uh.USER_PROFILE.toString()) return b.t.YQsjej;
            return b.t.SD0PwJ;
        case k.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return b.t.Vk4TwX;
        case k.F_X.AUTO_MODERATION_QUARANTINE_USER:
            return b.t["/W5u5o"];
        case k.F_X.CREATOR_MONETIZATION_REQUEST_CREATED:
            return b.t.ONvWyr;
        case k.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return b.t["ryGLk+"];
        case k.F_X.AUTO_MODERATION_RULE_CREATE:
            return b.t["NKljj+"];
        case k.F_X.AUTO_MODERATION_RULE_UPDATE:
            return b.t["3wEA9u"];
        case k.F_X.AUTO_MODERATION_RULE_DELETE:
            return b.t.umua3n;
        case k.F_X.ONBOARDING_PROMPT_CREATE:
            return b.t["/8A1g2"];
        case k.F_X.ONBOARDING_PROMPT_UPDATE:
            return b.t.ArIrWI;
        case k.F_X.ONBOARDING_PROMPT_DELETE:
            return b.t.IuBTao;
        case k.F_X.ONBOARDING_CREATE:
            return b.t["wDaq3/"];
        case k.F_X.ONBOARDING_UPDATE:
            return b.t["yONu/l"];
        case k.F_X.HOME_SETTINGS_CREATE:
            return b.t.dSdCjG;
        case k.F_X.HOME_SETTINGS_UPDATE:
            return b.t.XHE8qv;
        case k.F_X.GUILD_HOME_FEATURE_ITEM:
            let l = null != e.changes ? e.changes.find((e) => e.key === k.gGk.ENTITY_TYPE) : null;
            if (null == l) return b.t["UZ+U3A"];
            switch (l.newValue) {
                case E.MESSAGE:
                    return b.t["PyEa+J"];
                case E.FORUM_POST:
                    return b.t.hCuAb1;
                default:
                    return b.t["UZ+U3A"];
            }
        case k.F_X.GUILD_HOME_REMOVE_ITEM:
            return b.t.kPReun;
        case k.F_X.SOUNDBOARD_SOUND_CREATE:
            return b.t["0PD83V"];
        case k.F_X.SOUNDBOARD_SOUND_UPDATE:
            return b.t.CM8n1w;
        case k.F_X.SOUNDBOARD_SOUND_DELETE:
            return b.t["kVz4/0"];
        case k.F_X.VOICE_CHANNEL_STATUS_CREATE:
            return b.t.MWjnU7;
        case k.F_X.VOICE_CHANNEL_STATUS_DELETE:
            return b.t.aS8Krq;
        case k.F_X.GUILD_MEMBER_VERIFICATION_UPDATE:
            return b.t["NUKUb+"];
        case k.F_X.GUILD_PROFILE_UPDATE:
            return b.t.Ed6hF1;
        case k.F_X.GUILD_MIGRATE_PIN_PERMISSION:
            return b.t["3Ne7MA"];
        case k.F_X.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION:
            return b.t["naflH+"];
        default:
            return null;
    }
}
function ee(e) {
    switch (e) {
        case F.lx.GUILD_FEED_REMOVED:
            return b.intl.string(b.t["5G8ZD4"]);
        case F.lx.ACTIVE_CHANNELS_REMOVED:
            return b.intl.string(b.t["4YLtzC"]);
        case F.lx.PINNED:
            return b.intl.string(b.t["1QLRYb"]);
    }
    return null;
}
function et(e) {
    switch (e) {
        case F.lx.GUILD_FEED_REMOVED:
            return b.intl.string(b.t.S5kuWQ);
        case F.lx.ACTIVE_CHANNELS_REMOVED:
            return b.intl.string(b.t["8qpgcz"]);
        case F.lx.PINNED:
            return b.intl.string(b.t.CMweGA);
    }
    return null;
}
function en(e, t) {
    switch (e) {
        case k.xBc.CREATE_INSTANT_INVITE:
            return b.intl.string(b.t.zJrgTG);
        case k.xBc.KICK_MEMBERS:
            return b.intl.string(b.t.pBNv6i);
        case k.xBc.BAN_MEMBERS:
            return b.intl.string(b.t.oTBA7N);
        case k.xBc.ADMINISTRATOR:
            return b.intl.string(b.t.PGvZqX);
        case k.xBc.MANAGE_CHANNELS:
            if (t.targetType === k.GaG.CHANNEL || t.targetType === k.GaG.CHANNEL_OVERWRITE)
                return b.intl.string(b.t.nAw15L);
            return b.intl.string(b.t["9qLtWs"]);
        case k.xBc.MANAGE_GUILD:
            return b.intl.string(b.t.QZRcfO);
        case k.xBc.VIEW_GUILD_ANALYTICS:
            return b.intl.string(b.t["rQJBE/"]);
        case k.xBc.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return b.intl.string(b.t["0lTLTv"]);
        case k.xBc.CHANGE_NICKNAME:
            return b.intl.string(b.t.dilOF6);
        case k.xBc.MANAGE_NICKNAMES:
            return b.intl.string(b.t["t+Ct5x"]);
        case k.xBc.MANAGE_ROLES:
            return b.intl.string(b.t["C8d+oG"]);
        case k.xBc.MANAGE_WEBHOOKS:
            return b.intl.string(b.t["/ADKmM"]);
        case k.xBc.CREATE_GUILD_EXPRESSIONS:
            return b.intl.string(b.t.HarVuP);
        case k.xBc.MANAGE_GUILD_EXPRESSIONS:
            return b.intl.string(b.t.bbuXIn);
        case k.xBc.VIEW_AUDIT_LOG:
            return b.intl.string(b.t.fZgLpA);
        case k.xBc.VIEW_CHANNEL:
            if (t.targetType === k.GaG.CHANNEL || t.targetType === k.GaG.CHANNEL_OVERWRITE)
                return b.intl.string(b.t["W/A4Qp"]);
            return b.intl.string(b.t.uV83yi);
        case k.xBc.SEND_MESSAGES:
            return b.intl.string(b.t.T32rkC);
        case k.xBc.SEND_TTS_MESSAGES:
            return b.intl.string(b.t.Mg7bku);
        case k.xBc.USE_APPLICATION_COMMANDS:
            return b.intl.string(b.t.shbR1a);
        case k.xBc.MANAGE_MESSAGES:
            return b.intl.string(b.t["6lU9xM"]);
        case k.xBc.EMBED_LINKS:
            return b.intl.string(b.t["969dEL"]);
        case k.xBc.ATTACH_FILES:
            return b.intl.string(b.t["3AS4UM"]);
        case k.xBc.READ_MESSAGE_HISTORY:
            return b.intl.string(b.t.l9ufaR);
        case k.xBc.MENTION_EVERYONE:
            return b.intl.string(b.t.Y78KGC);
        case k.xBc.USE_EXTERNAL_EMOJIS:
            return b.intl.string(b.t.BpBGZU);
        case k.xBc.USE_EXTERNAL_STICKERS:
            return b.intl.string(b.t["UeRs+b"]);
        case k.xBc.ADD_REACTIONS:
            return b.intl.string(b.t.yEoJAr);
        case k.xBc.CONNECT:
            return b.intl.string(b.t.S0W8Z5);
        case k.xBc.SPEAK:
            return b.intl.string(b.t["8w1tIR"]);
        case k.xBc.MUTE_MEMBERS:
            return b.intl.string(b.t["8EI30/"]);
        case k.xBc.DEAFEN_MEMBERS:
            return b.intl.string(b.t["9L47Fr"]);
        case k.xBc.MOVE_MEMBERS:
            return b.intl.string(b.t.YtjJPQ);
        case k.xBc.USE_VAD:
            return b.intl.string(b.t["08zAV7"]);
        case k.xBc.PRIORITY_SPEAKER:
            return b.intl.string(b.t.BVK71i);
        case k.xBc.STREAM:
            return b.intl.string(b.t.FlNoSV);
        case k.xBc.USE_SOUNDBOARD:
            return b.intl.string(b.t.Bco7NG);
        case k.xBc.USE_EXTERNAL_SOUNDS:
            return b.intl.string(b.t.pwaVJ6);
        case k.xBc.REQUEST_TO_SPEAK:
            return b.intl.string(b.t["5kicT2"]);
        case k.xBc.USE_EMBEDDED_ACTIVITIES:
            return b.intl.string(b.t.rLSGeh);
        case k.xBc.CREATE_EVENTS:
            return b.intl.string(b.t.qyjZua);
        case k.xBc.MANAGE_EVENTS:
            return b.intl.string(b.t.HIgA5a);
        case k.xBc.CREATE_PUBLIC_THREADS:
            return b.intl.string(b.t["25rKnX"]);
        case k.xBc.CREATE_PRIVATE_THREADS:
            return b.intl.string(b.t.QwbTSa);
        case k.xBc.SEND_MESSAGES_IN_THREADS:
            return b.intl.string(b.t.fTE74g);
        case k.xBc.MANAGE_THREADS:
            return b.intl.string(b.t.kEqgr7);
        case k.xBc.MODERATE_MEMBERS:
            return b.intl.string(b.t["+RL6pz"]);
        case k.xBc.SET_VOICE_CHANNEL_STATUS:
            return b.intl.string(b.t.VBwkUf);
        case k.xBc.SEND_POLLS:
            return b.intl.string(b.t.UMQ7Ww);
        case k.xBc.SEND_VOICE_MESSAGES:
            return b.intl.string(b.t.WlWSBT);
        case k.xBc.USE_EXTERNAL_APPS:
            return b.intl.string(b.t.TtA5rK);
        case k.xBc.PIN_MESSAGES:
            return b.intl.string(b.t.Y5BI39);
        case k.xBc.BYPASS_SLOWMODE:
            return b.intl.string(b.t.kqcjeV);
        case k.xBc.MANAGE_OFFICIAL_MESSAGES:
            return b.intl.string(b.t.Aj9ruN);
    }
    return null;
}
function el(e, t) {
    let n = [];
    return (
        e.forEach((e) => {
            let l = (function (e, t) {
                    switch (e.targetType) {
                        case k.GaG.GUILD:
                        case k.GaG.GUILD_HOME:
                        case k.GaG.GUILD_PROFILE:
                            return t;
                        case k.GaG.CHANNEL:
                        case k.GaG.CHANNEL_OVERWRITE:
                            return eu(
                                e,
                                k.gGk.NAME,
                                (e) => D.A.getChannel(e),
                                (e) => (0, g.m1)(e, C.default, L.A, !0),
                            );
                        case k.GaG.USER:
                            return eu(
                                e,
                                k.gGk.NICK,
                                (e) => C.default.getUser(e),
                                (e) => e,
                            );
                        case k.GaG.ROLE:
                            return eu(
                                e,
                                k.gGk.NAME,
                                (e) => h.A.getRole(t.id, e),
                                (e) => e.name,
                            );
                        case k.GaG.ONBOARDING_PROMPT:
                            let n = eu(
                                e,
                                k.gGk.ID,
                                (e) => G.A.getOnboardingPrompt(e),
                                (e) => e.title,
                            );
                            return null == n || "" === n ? b.intl.string(b.t.ZNQyiR) : n;
                        case k.GaG.GUILD_ONBOARDING:
                        case k.GaG.GUILD_MEMBER_VERIFICATION:
                            return t;
                        case k.GaG.INVITE:
                            return eu(e, k.gGk.CODE, k.FXj);
                        case k.GaG.INTEGRATION:
                            return eu(
                                e,
                                k.gGk.TYPE,
                                (e) => p.A.integrations.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case k.GaG.WEBHOOK:
                            return eu(
                                e,
                                k.gGk.NAME,
                                (e) => p.A.webhooks.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case k.GaG.EMOJI:
                            return eu(
                                e,
                                k.gGk.NAME,
                                (e) => I.Ay.getGuildEmoji(t.id).find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case k.GaG.STICKER:
                            return eu(
                                e,
                                k.gGk.NAME,
                                (e) => m.A.getStickerById(e),
                                (e) => e.name,
                            );
                        case k.GaG.STAGE_INSTANCE:
                            return eu(
                                e,
                                k.gGk.TOPIC,
                                (e) => Object.values(S.A.getStageInstancesByGuild(t.id))?.find((t) => t.id === e),
                                (e) => e.topic,
                            );
                        case k.GaG.GUILD_SCHEDULED_EVENT:
                        case k.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return eu(
                                e,
                                k.gGk.NAME,
                                (e) => p.A.guildScheduledEvents.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case k.GaG.THREAD:
                            return eu(
                                e,
                                k.gGk.NAME,
                                (e) => p.A.threads.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case k.GaG.APPLICATION_COMMAND:
                            if (e.targetId === e.options.application_id) {
                                let t = p.A.integrations.find((t) => t.application?.id === e.targetId);
                                if (null != t) return t.name;
                                return e.targetId;
                            }
                            return eu(
                                e,
                                k.gGk.NAME,
                                (e) => p.A.applicationCommands.find((t) => t.id === e),
                                (e) => {
                                    let t =
                                        null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
                                    return e.type === A.kc.CHAT ? `/\u2060${t}` : t;
                                },
                            );
                        case k.GaG.AUTO_MODERATION_RULE:
                            return eu(
                                e,
                                k.gGk.NAME,
                                (e) => p.A.automodRules.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case k.GaG.GUILD_SOUNDBOARD:
                            return eu(e, k.gGk.NAME, k.FXj);
                        case k.GaG.HOME_SETTINGS:
                            return eu(
                                e,
                                k.gGk.GUILD_ID,
                                (e) => O.h.getSettings(e),
                                () => b.intl.string(b.t.VbpLyU),
                                t.id,
                            );
                        case k.GaG.VOICE_CHANNEL_STATUS:
                            return eu(
                                e,
                                k.gGk.STATUS,
                                (e) => D.A.getChannel(e),
                                (e) => (0, g.m1)(e, C.default, L.A, !0),
                            );
                        default:
                            return X.warn("Unknown targetType for log", e), null;
                    }
                })(e, t),
                r = C.default.getUser(e.userId);
            if (
                null != l ||
                [
                    k.F_X.MEMBER_PRUNE,
                    k.F_X.MEMBER_DISCONNECT,
                    k.F_X.MEMBER_MOVE,
                    k.F_X.CREATOR_MONETIZATION_REQUEST_CREATED,
                    k.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED,
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
                                    case k.AO_.USER:
                                        t.subtarget = eo(
                                            e.options.id,
                                            (e) => C.default.getUser(e),
                                            (e) => f.Ay.getUserTag(e),
                                        );
                                        break;
                                    case k.AO_.ROLE:
                                        t.subtarget = eo(e.options.role_name, k.FXj);
                                }
                                if (
                                    (null != e.options.channel_id &&
                                        (t.channel = eu(
                                            e,
                                            "",
                                            (e) => D.A.getChannel(e),
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
                                        s()(U.default.extractTimestamp(l?.event_exception_id ?? "0")),
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
                    e.changes.forEach((l) => {
                        let r = (function (e, t, n) {
                            if (t.action === k.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let t = e.newValue || e.oldValue;
                                switch (t.type) {
                                    case k.g0g.ROLE:
                                        e.subtarget = eo(
                                            t.id,
                                            (e) => h.A.getRole(n.id, e),
                                            (e) => e.name,
                                        );
                                        break;
                                    case k.g0g.USER:
                                        e.subtarget = eo(
                                            t.id,
                                            (e) => C.default.getUser(e),
                                            (e) => f.Ay.getUserTag(e),
                                        );
                                        break;
                                    case k.g0g.CHANNEL:
                                        t.id === a()(n.id).subtract(1).toString()
                                            ? (e.subtarget = b.intl.string(b.t.MSYhgh))
                                            : (e.subtarget = eo(
                                                  t.id,
                                                  (e) => D.A.getChannel(e),
                                                  (e) => (0, g.m1)(e, C.default, L.A, !0),
                                              ));
                                }
                                return e;
                            }
                            switch (e.key) {
                                case k.gGk.OWNER_ID:
                                    return eE(e, (e) => C.default.getUser(e));
                                case k.gGk.CHANNEL_ID:
                                case k.gGk.AFK_CHANNEL_ID:
                                case k.gGk.SYSTEM_CHANNEL_ID:
                                case k.gGk.RULES_CHANNEL_ID:
                                case k.gGk.PUBLIC_UPDATES_CHANNEL_ID:
                                    return eE(
                                        e,
                                        (e) => D.A.getChannel(e),
                                        (e) => (0, g.m1)(e, C.default, L.A, !0),
                                    );
                                case k.gGk.AFK_TIMEOUT:
                                    return eE(e, (e) => e / 60);
                                case k.gGk.BITRATE:
                                    return eE(e, (e) => e / 1e3);
                                case k.gGk.COLOR:
                                    return eE(e, (e) => (0, c.Hl)(e).toUpperCase());
                                case k.gGk.THEME_COLORS:
                                    return eE(
                                        e,
                                        (e) => `${(0, c.Hl)(e[0]).toUpperCase()}, ${(0, c.Hl)(e[1]).toUpperCase()}`,
                                    );
                                case k.gGk.MAX_AGE:
                                    return eE(e, (e) => {
                                        let t = x.Ay.getMaxAgeOptionByValue(e);
                                        return null !== t ? t.label : e;
                                    });
                                case k.gGk.PERMISSIONS: {
                                    let t = [],
                                        { added: n, removed: l } = er(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let e = new R.QO(k.gGk.PERMISSIONS_GRANTED, null, n);
                                        t.push(e);
                                    }
                                    if (l.length > 0) {
                                        let e = new R.QO(k.gGk.PERMISSIONS_DENIED, null, l);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case k.gGk.PERMISSIONS_GRANTED:
                                case k.gGk.PERMISSIONS_DENIED: {
                                    let t = [],
                                        { added: n, removed: l } = er(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let l = new R.QO(e.key, null, n);
                                        t.push(l);
                                    }
                                    if (l.length > 0) {
                                        let e = new R.QO(k.gGk.PERMISSIONS_RESET, l, l);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case k.gGk.FLAGS: {
                                    let t = [],
                                        { added: n, removed: l } = (function (e, t) {
                                            let n = "number" == typeof e ? e : 0,
                                                l = "number" == typeof t ? t : 0,
                                                r = _.VL(l, n),
                                                a = _.VL(n, l),
                                                i = [],
                                                s = [];
                                            for (let e in F.lx) {
                                                let t = F.lx[e];
                                                _.Lt(r, t) && i.push(t), _.Lt(a, t) && s.push(t);
                                            }
                                            return { added: i, removed: s };
                                        })(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let l = new R.QO(e.key, null, n);
                                        t.push(l);
                                    }
                                    if (l.length > 0) {
                                        let n = new R.QO(e.key, l, null);
                                        t.push(n);
                                    }
                                    return t;
                                }
                                case k.gGk.PREFERRED_LOCALE:
                                    return eE(e, (e) => {
                                        let t = (0, b.getAvailableLocales)().find((t) => t.value === e);
                                        return null != t ? t.name : null;
                                    });
                                case k.gGk.VIDEO_QUALITY_MODE:
                                    return eE(e, (e) =>
                                        e === k.K3c.FULL ? b.intl.string(b.t["7jOoJE"]) : b.intl.string(b.t.jjKYpu),
                                    );
                                case k.gGk.SYSTEM_CHANNEL_FLAGS:
                                    let l, r;
                                    return (
                                        (l = {
                                            [k.ogj.SUPPRESS_JOIN_NOTIFICATIONS]:
                                                k.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                            [k.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS]:
                                                k.gGk.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                            [k.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]:
                                                k.gGk.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                            [k.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES]:
                                                k.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES,
                                        }),
                                        (r = []),
                                        Object.values(k.ogj).forEach((t) => {
                                            let n = (e.oldValue & t) === t,
                                                a = (e.newValue & t) === t;
                                            if (n === a) return;
                                            let i = new R.QO(l[t], !n, !a);
                                            r.push(i);
                                        }),
                                        r
                                    );
                                case k.gGk.AUTO_MODERATION_ACTIONS:
                                    if (t.targetType === k.GaG.AUTO_MODERATION_RULE)
                                        return eE(
                                            e,
                                            (e) => e.map((e) => e.type),
                                            (e) => e.map(N.PZ).join(", "),
                                        );
                                    break;
                                case k.gGk.AUTO_MODERATION_EVENT_TYPE:
                                    if (t.targetType === k.GaG.AUTO_MODERATION_RULE) return eE(e, N.X3);
                                    break;
                                case k.gGk.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (t.targetType === k.GaG.AUTO_MODERATION_RULE) return eE(e, N.nl);
                                    break;
                                case k.gGk.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (t.targetType === k.GaG.AUTO_MODERATION_RULE)
                                        return eE(e, (e) =>
                                            null != e && "object" == typeof e
                                                ? null != e.keyword_filter && Array.isArray(e.keyword_filter)
                                                    ? b.intl.formatToMarkdownString(b.t.y91UXV, {
                                                          newValue: e.keyword_filter.map((e) => `'${e}'`).join(", "),
                                                      })
                                                    : JSON.stringify(e)
                                                : e,
                                        );
                                    break;
                                case k.gGk.AUTO_MODERATION_ADD_KEYWORDS:
                                case k.gGk.AUTO_MODERATION_REMOVE_KEYWORDS:
                                case k.gGk.AUTO_MODERATION_ADD_REGEX_PATTERNS:
                                case k.gGk.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
                                case k.gGk.AUTO_MODERATION_ADD_ALLOW_LIST:
                                case k.gGk.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                                    if (t.targetType === k.GaG.AUTO_MODERATION_RULE)
                                        return eE(e, (e) =>
                                            null != e && Array.isArray(e)
                                                ? e.map((e) => `'${e}'`).join(", ")
                                                : JSON.stringify(e),
                                        );
                                    break;
                                case k.gGk.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (t.targetType === k.GaG.AUTO_MODERATION_RULE)
                                        return eE(
                                            e,
                                            (e) =>
                                                e
                                                    .map(D.A.getChannel)
                                                    .filter((e) => null != e)
                                                    .map((e) => (0, g.m1)(e, C.default, L.A, !0)),
                                            (e) =>
                                                null != e && e.length > 0 ? e.join(", ") : b.intl.string(b.t["K/EdV8"]),
                                        );
                                    break;
                                case k.gGk.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (t.targetType === k.GaG.AUTO_MODERATION_RULE)
                                        return eE(
                                            e,
                                            (e) =>
                                                e
                                                    .map((e) => h.A.getRole(n.id, e))
                                                    .filter((e) => null != e)
                                                    .map((e) => e.name),
                                            (e) =>
                                                null != e && e.length > 0 ? e.join(", ") : b.intl.string(b.t["K/EdV8"]),
                                        );
                                    break;
                                case k.gGk.ROLE_IDS:
                                    if (t.targetType === k.GaG.INVITE)
                                        return eE(e, (e) =>
                                            e
                                                .map((e) => h.A.getRole(n.id, e))
                                                .filter((e) => null != e)
                                                .map((e) => ({ id: e.id, name: e.name })),
                                        );
                                    break;
                                case k.gGk.AVAILABLE_TAGS:
                                    return es(e);
                                case k.gGk.APPLIED_TAGS:
                                    return ei(e, t);
                                case k.gGk.SCHEDULED_START_TIME:
                                case k.gGk.SCHEDULED_END_TIME:
                                    return eE(e, (e) => (0, M.i$)(s()(new Date(e)), "LLLL"));
                            }
                            return e;
                        })(l, e, t);
                        Array.isArray(r) ? r.forEach((e) => n.push(e)) : n.push(r);
                    }),
                        (e = e.set("changes", n));
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
    for (let e in k.xBc) {
        let t = k.xBc[e];
        o.zy(r, t) && i.push(t), o.zy(a, t) && s.push(t);
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
        r = D.A.getChannel(t.targetId),
        a = r?.parent_id != null ? D.A.getChannel(r.parent_id) : null,
        i = a?.availableTags ?? [],
        s = {};
    i.forEach((e) => {
        s[e.id] = { name: e.name, emojiId: e.emojiId, emojiName: e.emojiName };
    });
    let E = new Set(n),
        u = new Set(l),
        o = l.filter((e) => !E.has(e)),
        c = n.filter((e) => !u.has(e)),
        _ = [];
    for (let e of o) {
        let t = s[e] ?? { id: e, name: e };
        _.push(new R.QO(k.gGk.AVAILABLE_TAG_ADD, null, t));
    }
    for (let e of c) {
        let t = s[e] ?? { id: e, name: e };
        _.push(new R.QO(k.gGk.AVAILABLE_TAG_DELETE, null, t));
    }
    return _.length > 0 ? _ : e;
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
        for (let e in i) if (null == a[e]) return new R.QO(k.gGk.AVAILABLE_TAG_ADD, null, ea(i[e]));
    }
    if (l.length > r.length) {
        for (let e in a) if (null == i[e]) return new R.QO(k.gGk.AVAILABLE_TAG_DELETE, null, ea(a[e]));
    }
    for (let e in a) {
        let t = a[e],
            n = i[e];
        if (n?.name !== t.name || n?.emoji_id !== t.emoji_id || n?.emoji_name !== t.emoji_name)
            return new R.QO(k.gGk.AVAILABLE_TAG_EDIT, ea(t), ea(n));
    }
    return e;
}
function eE(e, t, n) {
    let l = e.newValue,
        r = e.oldValue;
    return (
        null != e.newValue && ((l = t(e.newValue)), null != n && null != l && (l = n(l))),
        null != e.oldValue && ((r = t(e.oldValue)), null != n && null != r && (r = n(r))),
        new R.QO(e.key, r || e.oldValue, l || e.newValue)
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
    return null != r && null != n && (l = n(r)), l;
}
function ec(e, t) {
    return (n) => (null == n.oldValue ? e : t);
}
function e_(e, t) {
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
