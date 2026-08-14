n.r(t),
    n.d(t, {
        transformAppliedForumTagChange: () => ea,
        transformAvailableForumTagChange: () => ei,
        getStringForPermission: () => et,
        getSimpleAuditLogTitleContextFromChange: () => Q,
        getChangeTitle: () => Z,
        getStringForRemovedChannelFlag: () => ee,
        checkChangesToRender: () => w,
        getSimpleAuditLogTitleFromChange: () => z,
        ACTION_FILTER_ITEMS: () => W,
        shouldNotRenderChangeDetail: () => H,
        getStringForAddedChannelFlag: () => $,
        getSimpleAuditLogChangeDetails: () => q,
        getChangeStrings: () => B,
        findChangeByKey: () => Y,
        transformLogs: () => en,
    }),
    n(321073);
var l,
    r = n(824120),
    a = n.n(r),
    i = n(989349),
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
    j = n(988794),
    v = n(375708);
let X = new T.A("AuditLogUtils"),
    b = [d.pJ.DAYS, d.pJ.HOURS, d.pJ.MINUTES, d.pJ.SECONDS];
function y() {
    return { [k.gGk.REASON]: () => v.t["2IW3C5"] };
}
function B(e) {
    switch (e.targetType) {
        case k.GaG.GUILD:
            return {
                [k.gGk.NAME]: () => v.t.CkDiNH,
                [k.gGk.DESCRIPTION]: ec(v.t.RP3Ey3, v.t.QAVj1Y),
                [k.gGk.ICON_HASH]: () => v.t.iLZ8Q9,
                [k.gGk.SPLASH_HASH]: () => v.t["4VV6dn"],
                [k.gGk.DISCOVERY_SPLASH_HASH]: () => v.t["2pds6p"],
                [k.gGk.BANNER_HASH]: ec(v.t.Cxq4zO, v.t["H7eE/9"]),
                [k.gGk.OWNER_ID]: () => v.t["8ltsLT"],
                [k.gGk.REGION]: () => v.t.X9r5Kf,
                [k.gGk.PREFERRED_LOCALE]: () => v.t.UnXuDS,
                [k.gGk.AFK_CHANNEL_ID]: ec(v.t.ClBuA4, v.t["ms+xtL"]),
                [k.gGk.AFK_TIMEOUT]: () => v.t.q21fHa,
                [k.gGk.SYSTEM_CHANNEL_ID]: ec(v.t.H1VXaa, v.t.XhtmxJ),
                [k.gGk.RULES_CHANNEL_ID]: ec(v.t.OI6MG2, v.t.lik3tI),
                [k.gGk.PUBLIC_UPDATES_CHANNEL_ID]: ec(v.t.YxBKrY, v.t.Ehsnij),
                [k.gGk.MFA_LEVEL]: eA({ [k.EkJ.NONE]: v.t.voaCCQ, [k.EkJ.ELEVATED]: v.t.pRNVwz }),
                [k.gGk.WIDGET_ENABLED]: ed(v.t.ADIty8, v.t.nf58VY),
                [k.gGk.WIDGET_CHANNEL_ID]: ec(v.t["6SBsDc"], v.t.deQ5wO),
                [k.gGk.VERIFICATION_LEVEL]: eA({
                    [k.PvD.NONE]: v.t.W27rsc,
                    [k.PvD.LOW]: v.t["V8P+Pw"],
                    [k.PvD.MEDIUM]: v.t.ERQFau,
                    [k.PvD.HIGH]: v.t["83fN0j"],
                    [k.PvD.VERY_HIGH]: v.t.PnkQJE,
                }),
                [k.gGk.DEFAULT_MESSAGE_NOTIFICATIONS]: eA({
                    [k.orn.ALL_MESSAGES]: v.t.LDi76A,
                    [k.orn.ONLY_MENTIONS]: v.t["6K83ba"],
                }),
                [k.gGk.VANITY_URL_CODE]: ec(v.t.Zplsov, v.t.u6cArh),
                [k.gGk.EXPLICIT_CONTENT_FILTER]: eA({
                    [k.gh6.DISABLED]: v.t.fmOeL3,
                    [k.gh6.MEMBERS_WITHOUT_ROLES]: v.t["4FghYw"],
                    [k.gh6.ALL_MEMBERS]: v.t.olyrSm,
                }),
                [k.gGk.PREMIUM_PROGRESS_BAR_ENABLED]: ed(v.t.rBT0sn, v.t["gc+te5"]),
                [k.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => v.t.YbouFH,
                [k.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => v.t.g3DMjB,
                [k.gGk.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => v.t["+fQAel"],
                [k.gGk.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => v.t.E1fc4v,
                [k.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => v.t.XbwtSA,
                ...y(),
            };
        case k.GaG.CHANNEL:
        case k.GaG.CHANNEL_OVERWRITE:
            return {
                [k.gGk.NAME]: eo(v.t.f8Rh0U, v.t.ebD4Qp),
                [k.gGk.POSITION]: eo(v.t.isS8te, v.t.t5uBis),
                [k.gGk.TOPIC]: e_(v.t.esQcxn, v.t["m+veAn"], v.t["ws/1FA"]),
                [k.gGk.BITRATE]: eo(v.t.fw81ak, v.t.MFNlgZ),
                [k.gGk.RTC_REGION_OVERRIDE]: e_(v.t["6kajxx"], v.t.eGOlmU, v.t["0JMZdz"]),
                [k.gGk.USER_LIMIT]: eo(v.t.wk5t7p, v.t.XgjCEh),
                [k.gGk.RATE_LIMIT_PER_USER]: eo(v.t["7lirhF"], v.t.j4CCJR),
                [k.gGk.PERMISSIONS_RESET]: () => v.t["+vSBFY"],
                [k.gGk.PERMISSIONS_GRANTED]: () => v.t.EKLJv8,
                [k.gGk.PERMISSIONS_DENIED]: () => v.t.U3rO5X,
                [k.gGk.REASON]: () => v.t["2IW3C5"],
                [k.gGk.NSFW]: ed(v.t.H8Ri2Y, v.t.WW6cJw),
                [k.gGk.TYPE]: eo(v.t.Vn5zn2, v.t.aq4uWI),
                [k.gGk.VIDEO_QUALITY_MODE]: eo(v.t.e68fAU, v.t.djbES0),
                [k.gGk.DEFAULT_AUTO_ARCHIVE_DURATION]: eo(v.t.nYz2mg, v.t.oczvRI),
                [k.gGk.DEFAULT_THREAD_RATE_LIMIT_PER_USER]: e_(v.t.tOJ8h7, v.t.WaSgzk, v.t["lj+A4u"]),
                [k.gGk.FLAGS]: () => v.t.ImCQko,
                [k.gGk.AVAILABLE_TAG_ADD]: () => v.t.H86QQU,
                [k.gGk.AVAILABLE_TAG_EDIT]: () => v.t.YtUzls,
                [k.gGk.AVAILABLE_TAG_DELETE]: () => v.t["8QOseg"],
                [k.gGk.LINKED_LOBBY]: ec(v.t["+/3TkD"], v.t["5kDYS3"]),
            };
        case k.GaG.USER:
            return {
                [k.gGk.NICK]: e_(v.t.qXDsHv, v.t["m+qury"], v.t.DvLvjF),
                [k.gGk.DEAF]: ed(v.t.mArLlW, v.t.ddvVYG),
                [k.gGk.MUTE]: ed(v.t["bxs/lS"], v.t.FjecQM),
                [k.gGk.ROLES_REMOVE]: () => v.t["+2SDWV"],
                [k.gGk.ROLES_ADD]: () => v.t["B3/3IJ"],
                [k.gGk.PRUNE_DELETE_DAYS]: () => v.t["+Cvc+D"],
                [k.gGk.COMMUNICATION_DISABLED_UNTIL]: e_(v.t.LXTQr5, v.t.LXTQr5, v.t.ULSdnE),
                [k.gGk.BYPASSES_VERIFICATION]: ed(v.t.NBPBui, v.t.zATost),
                [k.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => v.t.YbouFH,
                ...y(),
            };
        case k.GaG.ROLE:
            return {
                [k.gGk.NAME]: eo(v.t.QBmlaD, v.t["Lfs4r+"]),
                [k.gGk.DESCRIPTION]: eo(v.t.XeYKWJ, v.t.PSfeIj),
                [k.gGk.PERMISSIONS_GRANTED]: () => v.t["9i/DvE"],
                [k.gGk.PERMISSIONS_DENIED]: () => v.t.pa1ZVh,
                [k.gGk.COLOR]: eg({ "#000000": v.t.TK6E1H }, v.t["2FQFiw"]),
                [k.gGk.COLORS]: (e) => (null == e.newValue.secondary_color ? v.t.U44ttm : v.t["WnSwL/"]),
                [k.gGk.HOIST]: ed(v.t.gWfe24, v.t["+tb8kN"]),
                [k.gGk.MENTIONABLE]: ed(v.t.LL8VFF, v.t.Z7xzmC),
                [k.gGk.ICON_HASH]: () => v.t["iEE79/"],
                [k.gGk.UNICODE_EMOJI]: () => v.t.KiLMM0,
                ...y(),
            };
        case k.GaG.ONBOARDING_PROMPT:
            return {
                ...y(),
                [k.gGk.TITLE]: eo(v.t["sNpuy/"], v.t["3Ukc/g"]),
                [k.gGk.DESCRIPTION]: eo(v.t.PP1q0x, v.t.z7pYLg),
                [k.gGk.OPTIONS]: () => v.t["3G5C9+"],
                [k.gGk.SINGLE_SELECT]: ed(v.t.v4WnR3, v.t["6Qg3uC"]),
                [k.gGk.REQUIRED]: ed(v.t["0MPAM6"], v.t.pwsXir),
            };
        case k.GaG.GUILD_ONBOARDING:
            return {
                ...y(),
                [k.gGk.DEFAULT_CHANNEL_IDS]: () => v.t["8M+D2s"],
                [k.gGk.ENABLE_DEFAULT_CHANNELS]: ed(v.t["EYd/ls"], v.t["36OZeQ"]),
                [k.gGk.ENABLE_ONBOARDING_PROMPTS]: ed(v.t.V3u8PV, v.t["r66lc/"]),
                [k.gGk.ENABLED]: ed(v.t.SODVIs, v.t.u8HY5U),
            };
        case k.GaG.HOME_SETTINGS:
            return {
                ...y(),
                [k.gGk.WELCOME_MESSAGE]: () => v.t.dKQ1xd,
                [k.gGk.NEW_MEMBER_ACTIONS]: () => v.t.jDUIno,
                [k.gGk.RESOURCE_CHANNELS]: () => v.t.SIX0mr,
            };
        case k.GaG.INVITE:
            return {
                [k.gGk.CODE]: () => v.t.rrRHgb,
                [k.gGk.CHANNEL_ID]: () => v.t.Q1vd5q,
                [k.gGk.MAX_USES]: eg({ 0: v.t.Yx8LNm }, v.t["3ygnwU"]),
                [k.gGk.MAX_AGE]: eg({ [v.intl.string(v.t.PqEzn8)]: v.t.uWrLvw }, v.t["Q+5kcO"]),
                [k.gGk.TEMPORARY]: ed(v.t.MWp6H7, v.t.omiqTH),
                [k.gGk.FLAGS]: eA({ [u.Q.IS_GUEST_INVITE]: v.t.XYZMbL }),
                [k.gGk.ROLE_IDS]: () => v.t.gb1Owj,
                ...y(),
            };
        case k.GaG.WEBHOOK:
            return {
                [k.gGk.CHANNEL_ID]: eo(v.t.jhPprR, v.t.ar4qYO),
                [k.gGk.NAME]: eo(v.t.ZVGrzU, v.t.tywdZR),
                [k.gGk.AVATAR_HASH]: () => v.t.KB52Uj,
                [k.gGk.REASON]: () => v.t["2IW3C5"],
            };
        case k.GaG.EMOJI:
            return { [k.gGk.NAME]: eo(v.t.ahU1o5, v.t["wxs+vZ"]), ...y() };
        case k.GaG.STICKER:
            return {
                [k.gGk.NAME]: eo(v.t.cdl0Yo, v.t.o3W2ly),
                [k.gGk.TAGS]: eo(v.t["zwL+S2"], v.t["VYfKA+"]),
                [k.gGk.DESCRIPTION]: eo(v.t.XeYKWJ, v.t.PSfeIj),
                ...y(),
            };
        case k.GaG.INTEGRATION:
            return {
                [k.gGk.ENABLE_EMOTICONS]: ed(v.t.FI0m5x, v.t.olpKC6),
                [k.gGk.EXPIRE_BEHAVIOR]: eA({ 0: v.t["1Bb1+u"], 1: v.t.vjlW6m }),
                [k.gGk.EXPIRE_GRACE_PERIOD]: () => v.t.iovXMa,
                ...y(),
            };
        case k.GaG.STAGE_INSTANCE:
            return {
                [k.gGk.TOPIC]: eo(v.t["m+veAn"], v.t.esQcxn),
                [k.gGk.PRIVACY_LEVEL]: eA({ [j.dD.GUILD_ONLY]: v.t["EC+CDt"], [j.dD.PUBLIC]: v.t["pK/WG0"] }),
                ...y(),
            };
        case k.GaG.GUILD_SCHEDULED_EVENT:
            return {
                [k.gGk.NAME]: () => v.t["21EXHW"],
                [k.gGk.DESCRIPTION]: () => v.t.Vm1ofw,
                [k.gGk.PRIVACY_LEVEL]: eA({ [j.dD.GUILD_ONLY]: v.t["EC+CDt"], [j.dD.PUBLIC]: v.t["pK/WG0"] }),
                [k.gGk.STATUS]: eA({
                    [j.XG.SCHEDULED]: v.t.hXKDgq,
                    [j.XG.ACTIVE]: v.t.lRX1nz,
                    [j.XG.COMPLETED]: v.t["/eFIhq"],
                    [j.XG.CANCELED]: v.t.NWIYhj,
                }),
                [k.gGk.ENTITY_TYPE]: eA({
                    [j.Ps.NONE]: v.t["6sO3Ss"],
                    [j.Ps.STAGE_INSTANCE]: v.t["Wo+s1y"],
                    [j.Ps.VOICE]: v.t.XCVaIL,
                    [j.Ps.EXTERNAL]: v.t.IvhAj2,
                }),
                [k.gGk.CHANNEL_ID]: ec(v.t.yJBIcX, v.t["+PqSsi"]),
                [k.gGk.LOCATION]: ec(v.t.GaMBHy, v.t.PsICk0),
                [k.gGk.IMAGE_HASH]: ec(v.t.S3vcRK, v.t.KQu47I),
                ...y(),
            };
        case k.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
            return {
                [k.gGk.SCHEDULED_START_TIME]: ec(v.t.zMIYVg, v.t.fzF8Gd),
                [k.gGk.SCHEDULED_END_TIME]: ec(v.t.vONSQA, v.t.IlIti3),
                [k.gGk.IS_CANCELED]: (e) => {
                    if (null != e.oldValue || !0 === e.newValue) {
                        if (!e.oldValue && e.newValue) return v.t["7RkicW"];
                        else if (e.oldValue && !e.newValue) return v.t.dRNTWW;
                    }
                },
                ...y(),
            };
        case k.GaG.THREAD:
            return {
                [k.gGk.NAME]: eo(v.t.tUKRzX, v.t.kPCHON),
                [k.gGk.ARCHIVED]: ed(v.t.jDi9FK, v.t.F6dvbT),
                [k.gGk.LOCKED]: ed(v.t.JSy1QW, v.t.C7Jgo8),
                [k.gGk.INVITABLE]: ed(v.t.dxNUs9, v.t.biJvYG),
                [k.gGk.AUTO_ARCHIVE_DURATION]: eo(v.t.LuaG3y, v.t["18d9qr"]),
                [k.gGk.RATE_LIMIT_PER_USER]: eo(v.t["7lirhF"], v.t.j4CCJR),
                [k.gGk.FLAGS]: () => v.t.sSAQtj,
                [k.gGk.AVAILABLE_TAG_ADD]: () => v.t.H86QQU,
                [k.gGk.AVAILABLE_TAG_DELETE]: () => v.t["8QOseg"],
                ...y(),
            };
        case k.GaG.APPLICATION_COMMAND:
            var t;
            let n;
            return (
                (t = e.changes),
                (n = { ...y() }),
                t?.forEach((e) => {
                    e.newValue
                        ? e.newValue.permission
                            ? (n[e.key] = () => v.t["JH+89C"])
                            : (n[e.key] = () => v.t.HUrFDu)
                        : (n[e.key] = () => v.t.vynxnV);
                }),
                n
            );
        case k.GaG.AUTO_MODERATION_RULE:
            return {
                [k.gGk.NAME]: () => v.t.XwxAJT,
                [k.gGk.AUTO_MODERATION_TRIGGER_TYPE]: () => v.t.fx0pyl,
                [k.gGk.AUTO_MODERATION_EVENT_TYPE]: () => v.t["46Y+L5"],
                [k.gGk.AUTO_MODERATION_ACTIONS]: () => v.t["8efxfv"],
                [k.gGk.AUTO_MODERATION_ENABLED]: (e) => (!0 === (e.newValue ?? e.oldValue) ? v.t.fCmxC2 : v.t.Wrg9Jn),
                [k.gGk.AUTO_MODERATION_EXEMPT_ROLES]: () => v.t.TRb7Nx,
                [k.gGk.AUTO_MODERATION_EXEMPT_CHANNELS]: () => v.t.mzitLE,
                [k.gGk.AUTO_MODERATION_TRIGGER_METADATA]: () => v.t["h/lM65"],
                [k.gGk.AUTO_MODERATION_ADD_KEYWORDS]: () => v.t["9V2yaC"],
                [k.gGk.AUTO_MODERATION_REMOVE_KEYWORDS]: () => v.t["4Qe9ny"],
                [k.gGk.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => v.t.GyZtxp,
                [k.gGk.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => v.t.OQDadc,
                [k.gGk.AUTO_MODERATION_ADD_ALLOW_LIST]: () => v.t["FvvR+K"],
                [k.gGk.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => v.t.p5nSvy,
                ...y(),
            };
        case k.GaG.GUILD_SOUNDBOARD:
            return {
                [k.gGk.NAME]: eo(v.t.VOtRSO, v.t.OK7B8E),
                [k.gGk.VOLUME]: eo(v.t.igrDB9, v.t.L5lDFJ),
                [k.gGk.EMOJI_NAME]: e_(v.t.IIanaY, v.t["z4w4U/"], v.t.V8TfyU),
                [k.gGk.EMOJI_ID]: e_(v.t.ainxMB, v.t["2NPsYu"], v.t["8crtns"]),
                ...y(),
            };
        case k.GaG.VOICE_CHANNEL_STATUS:
            return { [k.gGk.STATUS]: () => v.t.HyCSnI, ...y() };
        case k.GaG.GUILD_MEMBER_VERIFICATION:
            return {
                [k.gGk.VERIFICATION_ENABLED]: (e) => (!0 === e.newValue ? v.t.fnkzDY : v.t.WYT6ka),
                [k.gGk.MANUAL_APPROVAL_ENABLED]: (e) => (!0 === e.newValue ? v.t.jzSvVd : v.t.WxyOtj),
                ...y(),
            };
        case k.GaG.GUILD_PROFILE:
            return {
                [k.gGk.DESCRIPTION]: () => v.t.nsUZKY,
                [k.gGk.BRAND_COLOR_PRIMARY]: () => v.t.qe9mgN,
                [k.gGk.CUSTOM_BANNER_HASH]: () => v.t["04b5KC"],
                [k.gGk.TRAITS]: () => v.t.dEy9WO,
                [k.gGk.GAME_APPLICATION_IDS]: () => v.t["8BOT3x"],
                [k.gGk.VISIBILITY]: () => v.t.bCl1Ep,
                [k.gGk.SERVER_TAG]: ec(v.t.ix1dnX, v.t["4LKpKb"]),
            };
        default:
            return y();
    }
}
let V = {
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
function H(e, t) {
    if (
        e.actionType === k.RWi.DELETE &&
        e.action !== k.F_X.MEMBER_BAN_ADD &&
        e.action !== k.F_X.MEMBER_KICK &&
        e.action !== k.F_X.MEMBER_PRUNE
    )
        return t.key !== k.gGk.REASON;
    let n = V[e.targetType];
    return null != n && !0 === n[t.key];
}
function w(e) {
    let { changes: t } = e;
    return null != t && t.some((t) => !H(e, t));
}
let W = () => [
    { value: k.F_X.ALL, label: v.intl.string(v.t.QxEVcv), valueLabel: v.intl.string(v.t.an9Ry3) },
    { value: k.F_X.GUILD_UPDATE, label: v.intl.string(v.t["5INZa3"]) },
    { value: k.F_X.CHANNEL_CREATE, label: v.intl.string(v.t["2uh4vJ"]) },
    { value: k.F_X.CHANNEL_UPDATE, label: v.intl.string(v.t.mGsBLV) },
    { value: k.F_X.CHANNEL_DELETE, label: v.intl.string(v.t.hCHzAr) },
    { value: k.F_X.CHANNEL_OVERWRITE_CREATE, label: v.intl.string(v.t["8TnAMP"]) },
    { value: k.F_X.CHANNEL_OVERWRITE_UPDATE, label: v.intl.string(v.t.Jqx0Bi) },
    { value: k.F_X.CHANNEL_OVERWRITE_DELETE, label: v.intl.string(v.t.gBXOr4) },
    { value: k.F_X.MEMBER_KICK, label: v.intl.string(v.t["Q1/hN8"]) },
    { value: k.F_X.MEMBER_PRUNE, label: v.intl.string(v.t.tOTTja) },
    { value: k.F_X.MEMBER_BAN_ADD, label: v.intl.string(v.t["NfPn+e"]) },
    { value: k.F_X.MEMBER_BAN_REMOVE, label: v.intl.string(v.t.XCsGfI) },
    { value: k.F_X.MEMBER_UPDATE, label: v.intl.string(v.t["F/jmNJ"]) },
    { value: k.F_X.MEMBER_ROLE_UPDATE, label: v.intl.string(v.t.zAveSI) },
    { value: k.F_X.MEMBER_MOVE, label: v.intl.string(v.t.QshteR) },
    { value: k.F_X.MEMBER_DISCONNECT, label: v.intl.string(v.t.Z45os7) },
    { value: k.F_X.BOT_ADD, label: v.intl.string(v.t.vuH24Z) },
    { value: k.F_X.THREAD_CREATE, label: v.intl.string(v.t["+zl0DG"]) },
    { value: k.F_X.THREAD_UPDATE, label: v.intl.string(v.t.rbIry3) },
    { value: k.F_X.THREAD_DELETE, label: v.intl.string(v.t.hFjNEA) },
    { value: k.F_X.ROLE_CREATE, label: v.intl.string(v.t.AbxKtv) },
    { value: k.F_X.ROLE_UPDATE, label: v.intl.string(v.t.t3Z6sU) },
    { value: k.F_X.ROLE_DELETE, label: v.intl.string(v.t.YsFpa4) },
    { value: k.F_X.ONBOARDING_PROMPT_CREATE, label: v.intl.string(v.t.ZV9tqc) },
    { value: k.F_X.ONBOARDING_PROMPT_UPDATE, label: v.intl.string(v.t.PcOdvX) },
    { value: k.F_X.ONBOARDING_PROMPT_DELETE, label: v.intl.string(v.t["+r33Na"]) },
    { value: k.F_X.ONBOARDING_CREATE, label: v.intl.string(v.t.uDADde) },
    { value: k.F_X.ONBOARDING_UPDATE, label: v.intl.string(v.t.J1H1wg) },
    { value: k.F_X.HOME_SETTINGS_CREATE, label: v.intl.string(v.t.Di4cvI) },
    { value: k.F_X.HOME_SETTINGS_UPDATE, label: v.intl.string(v.t.tzyrJH) },
    { value: k.F_X.INVITE_CREATE, label: v.intl.string(v.t["0BNJdX"]) },
    { value: k.F_X.INVITE_UPDATE, label: v.intl.string(v.t["o++obV"]) },
    { value: k.F_X.INVITE_DELETE, label: v.intl.string(v.t.iP40Az) },
    { value: k.F_X.WEBHOOK_CREATE, label: v.intl.string(v.t["tBF4+S"]) },
    { value: k.F_X.WEBHOOK_UPDATE, label: v.intl.string(v.t.eV3McO) },
    { value: k.F_X.WEBHOOK_DELETE, label: v.intl.string(v.t.AAL3K1) },
    { value: k.F_X.EMOJI_CREATE, label: v.intl.string(v.t.RuWm0V) },
    { value: k.F_X.EMOJI_UPDATE, label: v.intl.string(v.t.WzdUY7) },
    { value: k.F_X.EMOJI_DELETE, label: v.intl.string(v.t.c3dK2L) },
    { value: k.F_X.MESSAGE_DELETE, label: v.intl.string(v.t.daTfXh) },
    { value: k.F_X.MESSAGE_BULK_DELETE, label: v.intl.string(v.t.nrBxeh) },
    { value: k.F_X.MESSAGE_PIN, label: v.intl.string(v.t.MUldyN) },
    { value: k.F_X.MESSAGE_UNPIN, label: v.intl.string(v.t.n4zKhA) },
    { value: k.F_X.INTEGRATION_CREATE, label: v.intl.string(v.t.deNm8x) },
    { value: k.F_X.INTEGRATION_UPDATE, label: v.intl.string(v.t.HT7Sfg) },
    { value: k.F_X.INTEGRATION_DELETE, label: v.intl.string(v.t["+kJ09q"]) },
    { value: k.F_X.STICKER_CREATE, label: v.intl.string(v.t["3DzNjU"]) },
    { value: k.F_X.STICKER_UPDATE, label: v.intl.string(v.t.tdhW5b) },
    { value: k.F_X.STICKER_DELETE, label: v.intl.string(v.t["+ZhGOk"]) },
    { value: k.F_X.STAGE_INSTANCE_CREATE, label: v.intl.string(v.t.sPbjA6) },
    { value: k.F_X.STAGE_INSTANCE_UPDATE, label: v.intl.string(v.t.cW9LfJ) },
    { value: k.F_X.STAGE_INSTANCE_DELETE, label: v.intl.string(v.t["U1r+yD"]) },
    { value: k.F_X.GUILD_SCHEDULED_EVENT_CREATE, label: v.intl.string(v.t.H81Zyy) },
    { value: k.F_X.GUILD_SCHEDULED_EVENT_UPDATE, label: v.intl.string(v.t["FM69l+"]) },
    { value: k.F_X.GUILD_SCHEDULED_EVENT_DELETE, label: v.intl.string(v.t.Rq28Bh) },
    { value: k.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE, label: v.intl.string(v.t.iPdFOt) },
    { value: k.F_X.AUTO_MODERATION_BLOCK_MESSAGE, label: v.intl.string(v.t.gNq5z6) },
    { value: k.F_X.AUTO_MODERATION_RULE_CREATE, label: v.intl.string(v.t.f72Zqb) },
    { value: k.F_X.AUTO_MODERATION_RULE_UPDATE, label: v.intl.string(v.t.XeqIiv) },
    { value: k.F_X.AUTO_MODERATION_RULE_DELETE, label: v.intl.string(v.t.syAApU) },
    { value: k.F_X.GUILD_HOME_FEATURE_ITEM, label: v.intl.string(v.t.lhG5KN) },
    { value: k.F_X.GUILD_HOME_REMOVE_ITEM, label: v.intl.string(v.t.lRPRwS) },
    { value: k.F_X.SOUNDBOARD_SOUND_CREATE, label: v.intl.string(v.t.yoRi5r) },
    { value: k.F_X.SOUNDBOARD_SOUND_UPDATE, label: v.intl.string(v.t.uKlG0Z) },
    { value: k.F_X.SOUNDBOARD_SOUND_DELETE, label: v.intl.string(v.t.gq0iCT) },
    { value: k.F_X.VOICE_CHANNEL_STATUS_CREATE, label: v.intl.string(v.t.rGr0YM) },
    { value: k.F_X.VOICE_CHANNEL_STATUS_DELETE, label: v.intl.string(v.t.V9PEQ4) },
];
function Y(e, t) {
    return null != t.changes ? t.changes.find((t) => t.key === e) : null;
}
function K(e, t) {
    return null != t.changes ? t.changes.filter((t) => t.key === e) : [];
}
function z(e) {
    let t = W().find((t) => t.value === e.action);
    return null != Y(k.gGk.COMMUNICATION_DISABLED_UNTIL, e) ? v.intl.string(v.t.z3wbj8) : (t?.label ?? null);
}
let J = {
    [d.pJ.SECONDS]: (e) => v.intl.formatToPlainString(v.t.geSp4K, { seconds: e }),
    [d.pJ.MINUTES]: (e) => v.intl.formatToPlainString(v.t.iXLF9W, { minutes: e }),
    [d.pJ.HOURS]: (e) => v.intl.formatToPlainString(v.t.xCjYxK, { hours: e }),
    [d.pJ.DAYS]: (e) => v.intl.formatToPlainString(v.t["k2UNz+"], { days: e }),
};
function Q(e) {
    let t = Y(k.gGk.COMMUNICATION_DISABLED_UNTIL, e),
        n = K(k.gGk.ROLES_ADD, e).length > 0,
        l = K(k.gGk.ROLES_REMOVE, e).length > 0;
    if (null != t) {
        if (t?.newValue != null) {
            let n = new Date(t?.newValue).getTime() - U.default.extractTimestamp(e.id),
                l = Math.round(n / 1e3 / 60),
                r = (0, d.$l)(l, b);
            if (null == r.unit || null == r.time) return null;
            if (r.unit in J) {
                let e = r.unit,
                    t = r.unit === d.pJ.SECONDS ? Math.round(n / 1e3) : r.time;
                return J[e](t);
            }
        } else if (t?.oldValue != null) return v.intl.string(v.t.MA1ltr);
    } else if (n && l) return v.intl.string(v.t.RdMMew);
    else if (n) return v.intl.string(v.t["4GQqs8"]);
    else if (l) return v.intl.string(v.t["8mQ6x0"]);
    return null;
}
function q(e) {
    let t = K(k.gGk.ROLES_ADD, e),
        n = K(k.gGk.ROLES_REMOVE, e),
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
        ? v.intl.formatToPlainString(v.t.tZw1EW, { roleNamesAdded: l, roleNamesRemoved: r })
        : t.length > 0
          ? v.intl.formatToPlainString(v.t["/mTqt5"], { roleNames: l })
          : n.length > 0
            ? v.intl.formatToPlainString(v.t.Wk4pAJ, { roleNames: r })
            : null;
}
function Z(e) {
    switch (e.action) {
        case k.F_X.GUILD_UPDATE:
            return v.t.LjZO31;
        case k.F_X.CHANNEL_CREATE:
            let t = null != e.changes ? e.changes.find((e) => e.key === k.gGk.TYPE) : null;
            if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
            switch (t.newValue) {
                case k.rbe.GUILD_STAGE_VOICE:
                    return v.t["OKp4+o"];
                case k.rbe.GUILD_VOICE:
                    return v.t.NPOy4G;
                case k.rbe.GUILD_CATEGORY:
                    return v.t.T3KIjz;
                case k.rbe.GUILD_FORUM:
                    return v.t.VvNgHX;
                case k.rbe.GUILD_MEDIA:
                    return v.t["4NWSxa"];
                case k.rbe.GUILD_ANNOUNCEMENT:
                    return v.t.eYP6UV;
                default:
                    return v.t.wrYNG2;
            }
        case k.F_X.CHANNEL_UPDATE:
            return v.t.nTYk6B;
        case k.F_X.CHANNEL_DELETE:
            return v.t.ynfvkm;
        case k.F_X.CHANNEL_OVERWRITE_CREATE:
            return v.t.l5Cu1a;
        case k.F_X.CHANNEL_OVERWRITE_UPDATE:
            return v.t.uhtbNU;
        case k.F_X.CHANNEL_OVERWRITE_DELETE:
            return v.t["HASt/3"];
        case k.F_X.MEMBER_KICK:
            return v.t.B5hDZX;
        case k.F_X.MEMBER_PRUNE:
            return v.t.qKOZTP;
        case k.F_X.MEMBER_BAN_ADD:
            return v.t["XklUm/"];
        case k.F_X.MEMBER_BAN_REMOVE:
            return v.t.o3Y6HD;
        case k.F_X.MEMBER_UPDATE:
            return v.t.pznhLN;
        case k.F_X.MEMBER_ROLE_UPDATE:
            return v.t.Vngfia;
        case k.F_X.MEMBER_MOVE:
            return v.t.Yt6NkU;
        case k.F_X.MEMBER_DISCONNECT:
            return v.t.K4eCZw;
        case k.F_X.BOT_ADD:
            return v.t.fWvX0G;
        case k.F_X.ROLE_CREATE:
            return v.t.UTLTx6;
        case k.F_X.ROLE_UPDATE:
            return v.t.NRbN18;
        case k.F_X.ROLE_DELETE:
            return v.t["4s63tb"];
        case k.F_X.INVITE_CREATE:
            return v.t.YHOXWy;
        case k.F_X.INVITE_UPDATE:
            return v.t.ja3kGS;
        case k.F_X.INVITE_DELETE:
            return v.t["3n/iWk"];
        case k.F_X.WEBHOOK_CREATE:
            return v.t.MhYhil;
        case k.F_X.WEBHOOK_UPDATE:
            return v.t["6GTlWB"];
        case k.F_X.WEBHOOK_DELETE:
            return v.t.in0VjZ;
        case k.F_X.EMOJI_CREATE:
            return v.t["7vekRO"];
        case k.F_X.EMOJI_UPDATE:
            return v.t.IsCKfh;
        case k.F_X.EMOJI_DELETE:
            return v.t.JnUaVG;
        case k.F_X.STICKER_CREATE:
            return v.t.DRZifq;
        case k.F_X.STICKER_UPDATE:
            return v.t.bhujGc;
        case k.F_X.STICKER_DELETE:
            return v.t.rGEP9U;
        case k.F_X.MESSAGE_DELETE:
            return v.t["HPkD+M"];
        case k.F_X.MESSAGE_BULK_DELETE:
            return v.t["3RIvLE"];
        case k.F_X.MESSAGE_PIN:
            return v.t.Yna7E7;
        case k.F_X.MESSAGE_UNPIN:
            return v.t.NCxXUW;
        case k.F_X.INTEGRATION_CREATE:
            return v.t.HYvCb3;
        case k.F_X.INTEGRATION_UPDATE:
            return v.t.ibCCOS;
        case k.F_X.INTEGRATION_DELETE:
            return v.t["8zScWY"];
        case k.F_X.STAGE_INSTANCE_CREATE:
            return v.t["n7x/DF"];
        case k.F_X.STAGE_INSTANCE_UPDATE:
            return v.t["0hQYU4"];
        case k.F_X.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return v.t["Oi/in9"];
            return v.t["7ZIFm9"];
        case k.F_X.GUILD_SCHEDULED_EVENT_CREATE:
            return v.t.S7k52p;
        case k.F_X.GUILD_SCHEDULED_EVENT_UPDATE:
            return v.t.ebTK11;
        case k.F_X.GUILD_SCHEDULED_EVENT_DELETE:
            return v.t["/ARPKQ"];
        case k.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case k.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return v.t["8qCI36"];
        case k.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return v.t.zYb2da;
        case k.F_X.THREAD_CREATE:
            let n = null != e.changes ? e.changes.find((e) => e.key === k.gGk.TYPE) : null;
            if (null == n) throw Error("[AuditLog] Could not find type change for thread create");
            switch (n.newValue) {
                case k.rbe.PRIVATE_THREAD:
                    return v.t.Br0y5w;
                case k.rbe.ANNOUNCEMENT_THREAD:
                    return v.t["6uaMmO"];
                default:
                    return v.t["2cxQ7G"];
            }
        case k.F_X.THREAD_UPDATE:
            return v.t.PSsy4t;
        case k.F_X.THREAD_DELETE:
            return v.t.s3Khn8;
        case k.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return v.t.uzCqBm;
        case k.F_X.AUTO_MODERATION_BLOCK_MESSAGE:
            return v.t.NqWv2K;
        case k.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL:
            if (e.options?.auto_moderation_rule_trigger_type === P.uh.USER_PROFILE.toString()) return v.t.YQsjej;
            return v.t.SD0PwJ;
        case k.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return v.t.Vk4TwX;
        case k.F_X.AUTO_MODERATION_QUARANTINE_USER:
            return v.t["/W5u5o"];
        case k.F_X.CREATOR_MONETIZATION_REQUEST_CREATED:
            return v.t.ONvWyr;
        case k.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return v.t["ryGLk+"];
        case k.F_X.AUTO_MODERATION_RULE_CREATE:
            return v.t["NKljj+"];
        case k.F_X.AUTO_MODERATION_RULE_UPDATE:
            return v.t["3wEA9u"];
        case k.F_X.AUTO_MODERATION_RULE_DELETE:
            return v.t.umua3n;
        case k.F_X.ONBOARDING_PROMPT_CREATE:
            return v.t["/8A1g2"];
        case k.F_X.ONBOARDING_PROMPT_UPDATE:
            return v.t.ArIrWI;
        case k.F_X.ONBOARDING_PROMPT_DELETE:
            return v.t.IuBTao;
        case k.F_X.ONBOARDING_CREATE:
            return v.t["wDaq3/"];
        case k.F_X.ONBOARDING_UPDATE:
            return v.t["yONu/l"];
        case k.F_X.HOME_SETTINGS_CREATE:
            return v.t.dSdCjG;
        case k.F_X.HOME_SETTINGS_UPDATE:
            return v.t.XHE8qv;
        case k.F_X.GUILD_HOME_FEATURE_ITEM:
            let l = null != e.changes ? e.changes.find((e) => e.key === k.gGk.ENTITY_TYPE) : null;
            if (null == l) return v.t["UZ+U3A"];
            switch (l.newValue) {
                case E.MESSAGE:
                    return v.t["PyEa+J"];
                case E.FORUM_POST:
                    return v.t.hCuAb1;
                default:
                    return v.t["UZ+U3A"];
            }
        case k.F_X.GUILD_HOME_REMOVE_ITEM:
            return v.t.kPReun;
        case k.F_X.SOUNDBOARD_SOUND_CREATE:
            return v.t["0PD83V"];
        case k.F_X.SOUNDBOARD_SOUND_UPDATE:
            return v.t.CM8n1w;
        case k.F_X.SOUNDBOARD_SOUND_DELETE:
            return v.t["kVz4/0"];
        case k.F_X.VOICE_CHANNEL_STATUS_CREATE:
            return v.t.MWjnU7;
        case k.F_X.VOICE_CHANNEL_STATUS_DELETE:
            return v.t.aS8Krq;
        case k.F_X.GUILD_MEMBER_VERIFICATION_UPDATE:
            return v.t["NUKUb+"];
        case k.F_X.GUILD_PROFILE_UPDATE:
            return v.t.Ed6hF1;
        case k.F_X.GUILD_MIGRATE_PIN_PERMISSION:
            return v.t["3Ne7MA"];
        case k.F_X.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION:
            return v.t["naflH+"];
        default:
            return null;
    }
}
function $(e) {
    switch (e) {
        case F.lx.GUILD_FEED_REMOVED:
            return v.intl.string(v.t["5G8ZD4"]);
        case F.lx.ACTIVE_CHANNELS_REMOVED:
            return v.intl.string(v.t["4YLtzC"]);
        case F.lx.PINNED:
            return v.intl.string(v.t["1QLRYb"]);
    }
    return null;
}
function ee(e) {
    switch (e) {
        case F.lx.GUILD_FEED_REMOVED:
            return v.intl.string(v.t.S5kuWQ);
        case F.lx.ACTIVE_CHANNELS_REMOVED:
            return v.intl.string(v.t["8qpgcz"]);
        case F.lx.PINNED:
            return v.intl.string(v.t.CMweGA);
    }
    return null;
}
function et(e, t) {
    switch (e) {
        case k.xBc.CREATE_INSTANT_INVITE:
            return v.intl.string(v.t.zJrgTG);
        case k.xBc.KICK_MEMBERS:
            return v.intl.string(v.t.pBNv6i);
        case k.xBc.BAN_MEMBERS:
            return v.intl.string(v.t.oTBA7N);
        case k.xBc.ADMINISTRATOR:
            return v.intl.string(v.t.PGvZqX);
        case k.xBc.MANAGE_CHANNELS:
            if (t.targetType === k.GaG.CHANNEL || t.targetType === k.GaG.CHANNEL_OVERWRITE)
                return v.intl.string(v.t.nAw15L);
            return v.intl.string(v.t["9qLtWs"]);
        case k.xBc.MANAGE_GUILD:
            return v.intl.string(v.t.QZRcfO);
        case k.xBc.VIEW_GUILD_ANALYTICS:
            return v.intl.string(v.t["rQJBE/"]);
        case k.xBc.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return v.intl.string(v.t["0lTLTv"]);
        case k.xBc.CHANGE_NICKNAME:
            return v.intl.string(v.t.dilOF6);
        case k.xBc.MANAGE_NICKNAMES:
            return v.intl.string(v.t["t+Ct5x"]);
        case k.xBc.MANAGE_ROLES:
            return v.intl.string(v.t["C8d+oG"]);
        case k.xBc.MANAGE_WEBHOOKS:
            return v.intl.string(v.t["/ADKmM"]);
        case k.xBc.CREATE_GUILD_EXPRESSIONS:
            return v.intl.string(v.t.HarVuP);
        case k.xBc.MANAGE_GUILD_EXPRESSIONS:
            return v.intl.string(v.t.bbuXIn);
        case k.xBc.VIEW_AUDIT_LOG:
            return v.intl.string(v.t.fZgLpA);
        case k.xBc.VIEW_CHANNEL:
            if (t.targetType === k.GaG.CHANNEL || t.targetType === k.GaG.CHANNEL_OVERWRITE)
                return v.intl.string(v.t["W/A4Qp"]);
            return v.intl.string(v.t.uV83yi);
        case k.xBc.SEND_MESSAGES:
            return v.intl.string(v.t.T32rkC);
        case k.xBc.SEND_TTS_MESSAGES:
            return v.intl.string(v.t.Mg7bku);
        case k.xBc.USE_APPLICATION_COMMANDS:
            return v.intl.string(v.t.shbR1a);
        case k.xBc.MANAGE_MESSAGES:
            return v.intl.string(v.t["6lU9xM"]);
        case k.xBc.EMBED_LINKS:
            return v.intl.string(v.t["969dEL"]);
        case k.xBc.ATTACH_FILES:
            return v.intl.string(v.t["3AS4UM"]);
        case k.xBc.READ_MESSAGE_HISTORY:
            return v.intl.string(v.t.l9ufaR);
        case k.xBc.MENTION_EVERYONE:
            return v.intl.string(v.t.Y78KGC);
        case k.xBc.USE_EXTERNAL_EMOJIS:
            return v.intl.string(v.t.BpBGZU);
        case k.xBc.USE_EXTERNAL_STICKERS:
            return v.intl.string(v.t["UeRs+b"]);
        case k.xBc.ADD_REACTIONS:
            return v.intl.string(v.t.yEoJAr);
        case k.xBc.CONNECT:
            return v.intl.string(v.t.S0W8Z5);
        case k.xBc.SPEAK:
            return v.intl.string(v.t["8w1tIR"]);
        case k.xBc.MUTE_MEMBERS:
            return v.intl.string(v.t["8EI30/"]);
        case k.xBc.DEAFEN_MEMBERS:
            return v.intl.string(v.t["9L47Fr"]);
        case k.xBc.MOVE_MEMBERS:
            return v.intl.string(v.t.YtjJPQ);
        case k.xBc.USE_VAD:
            return v.intl.string(v.t["08zAV7"]);
        case k.xBc.PRIORITY_SPEAKER:
            return v.intl.string(v.t.BVK71i);
        case k.xBc.STREAM:
            return v.intl.string(v.t.FlNoSV);
        case k.xBc.USE_SOUNDBOARD:
            return v.intl.string(v.t.Bco7NG);
        case k.xBc.USE_EXTERNAL_SOUNDS:
            return v.intl.string(v.t.pwaVJ6);
        case k.xBc.REQUEST_TO_SPEAK:
            return v.intl.string(v.t["5kicT2"]);
        case k.xBc.USE_EMBEDDED_ACTIVITIES:
            return v.intl.string(v.t.rLSGeh);
        case k.xBc.CREATE_EVENTS:
            return v.intl.string(v.t.qyjZua);
        case k.xBc.MANAGE_EVENTS:
            return v.intl.string(v.t.HIgA5a);
        case k.xBc.CREATE_PUBLIC_THREADS:
            return v.intl.string(v.t["25rKnX"]);
        case k.xBc.CREATE_PRIVATE_THREADS:
            return v.intl.string(v.t.QwbTSa);
        case k.xBc.SEND_MESSAGES_IN_THREADS:
            return v.intl.string(v.t.fTE74g);
        case k.xBc.MANAGE_THREADS:
            return v.intl.string(v.t.kEqgr7);
        case k.xBc.MODERATE_MEMBERS:
            return v.intl.string(v.t["+RL6pz"]);
        case k.xBc.SET_VOICE_CHANNEL_STATUS:
            return v.intl.string(v.t.VBwkUf);
        case k.xBc.SEND_POLLS:
            return v.intl.string(v.t.UMQ7Ww);
        case k.xBc.SEND_VOICE_MESSAGES:
            return v.intl.string(v.t.WlWSBT);
        case k.xBc.USE_EXTERNAL_APPS:
            return v.intl.string(v.t.TtA5rK);
        case k.xBc.PIN_MESSAGES:
            return v.intl.string(v.t.Y5BI39);
        case k.xBc.BYPASS_SLOWMODE:
            return v.intl.string(v.t.kqcjeV);
        case k.xBc.MANAGE_OFFICIAL_MESSAGES:
            return v.intl.string(v.t.Aj9ruN);
    }
    return null;
}
function en(e, t) {
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
                            return eE(
                                e,
                                k.gGk.NAME,
                                (e) => D.A.getChannel(e),
                                (e) => (0, g.m1)(e, C.default, L.A, !0),
                            );
                        case k.GaG.USER:
                            return eE(
                                e,
                                k.gGk.NICK,
                                (e) => C.default.getUser(e),
                                (e) => e,
                            );
                        case k.GaG.ROLE:
                            return eE(
                                e,
                                k.gGk.NAME,
                                (e) => h.A.getRole(t.id, e),
                                (e) => e.name,
                            );
                        case k.GaG.ONBOARDING_PROMPT:
                            let n = eE(
                                e,
                                k.gGk.ID,
                                (e) => G.A.getOnboardingPrompt(e),
                                (e) => e.title,
                            );
                            return null == n || "" === n ? v.intl.string(v.t.ZNQyiR) : n;
                        case k.GaG.GUILD_ONBOARDING:
                        case k.GaG.GUILD_MEMBER_VERIFICATION:
                            return t;
                        case k.GaG.INVITE:
                            return eE(e, k.gGk.CODE, k.FXj);
                        case k.GaG.INTEGRATION:
                            return eE(
                                e,
                                k.gGk.TYPE,
                                (e) => p.A.integrations.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case k.GaG.WEBHOOK:
                            return eE(
                                e,
                                k.gGk.NAME,
                                (e) => p.A.webhooks.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case k.GaG.EMOJI:
                            return eE(
                                e,
                                k.gGk.NAME,
                                (e) => I.Ay.getGuildEmoji(t.id).find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case k.GaG.STICKER:
                            return eE(
                                e,
                                k.gGk.NAME,
                                (e) => m.A.getStickerById(e),
                                (e) => e.name,
                            );
                        case k.GaG.STAGE_INSTANCE:
                            return eE(
                                e,
                                k.gGk.TOPIC,
                                (e) => Object.values(S.A.getStageInstancesByGuild(t.id))?.find((t) => t.id === e),
                                (e) => e.topic,
                            );
                        case k.GaG.GUILD_SCHEDULED_EVENT:
                        case k.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return eE(
                                e,
                                k.gGk.NAME,
                                (e) => p.A.guildScheduledEvents.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case k.GaG.THREAD:
                            return eE(
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
                            return eE(
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
                            return eE(
                                e,
                                k.gGk.NAME,
                                (e) => p.A.automodRules.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case k.GaG.GUILD_SOUNDBOARD:
                            return eE(e, k.gGk.NAME, k.FXj);
                        case k.GaG.HOME_SETTINGS:
                            return eE(
                                e,
                                k.gGk.GUILD_ID,
                                (e) => O.h.getSettings(e),
                                () => v.intl.string(v.t.VbpLyU),
                                t.id,
                            );
                        case k.GaG.VOICE_CHANNEL_STATUS:
                            return eE(
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
                                        t.subtarget = eu(
                                            e.options.id,
                                            (e) => C.default.getUser(e),
                                            (e) => f.Ay.getUserTag(e),
                                        );
                                        break;
                                    case k.AO_.ROLE:
                                        t.subtarget = eu(e.options.role_name, k.FXj);
                                }
                                if (
                                    (null != e.options.channel_id &&
                                        (t.channel = eE(
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
                                        e.subtarget = eu(
                                            t.id,
                                            (e) => h.A.getRole(n.id, e),
                                            (e) => e.name,
                                        );
                                        break;
                                    case k.g0g.USER:
                                        e.subtarget = eu(
                                            t.id,
                                            (e) => C.default.getUser(e),
                                            (e) => f.Ay.getUserTag(e),
                                        );
                                        break;
                                    case k.g0g.CHANNEL:
                                        t.id === a()(n.id).subtract(1).toString()
                                            ? (e.subtarget = v.intl.string(v.t.MSYhgh))
                                            : (e.subtarget = eu(
                                                  t.id,
                                                  (e) => D.A.getChannel(e),
                                                  (e) => (0, g.m1)(e, C.default, L.A, !0),
                                              ));
                                }
                                return e;
                            }
                            switch (e.key) {
                                case k.gGk.OWNER_ID:
                                    return es(e, (e) => C.default.getUser(e));
                                case k.gGk.CHANNEL_ID:
                                case k.gGk.AFK_CHANNEL_ID:
                                case k.gGk.SYSTEM_CHANNEL_ID:
                                case k.gGk.RULES_CHANNEL_ID:
                                case k.gGk.PUBLIC_UPDATES_CHANNEL_ID:
                                    return es(
                                        e,
                                        (e) => D.A.getChannel(e),
                                        (e) => (0, g.m1)(e, C.default, L.A, !0),
                                    );
                                case k.gGk.AFK_TIMEOUT:
                                    return es(e, (e) => e / 60);
                                case k.gGk.BITRATE:
                                    return es(e, (e) => e / 1e3);
                                case k.gGk.COLOR:
                                    return es(e, (e) => (0, c.Hl)(e).toUpperCase());
                                case k.gGk.THEME_COLORS:
                                    return es(
                                        e,
                                        (e) => `${(0, c.Hl)(e[0]).toUpperCase()}, ${(0, c.Hl)(e[1]).toUpperCase()}`,
                                    );
                                case k.gGk.MAX_AGE:
                                    return es(e, (e) => {
                                        let t = x.Ay.getMaxAgeOptionByValue(e);
                                        return null !== t ? t.label : e;
                                    });
                                case k.gGk.PERMISSIONS: {
                                    let t = [],
                                        { added: n, removed: l } = el(e.oldValue, e.newValue);
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
                                        { added: n, removed: l } = el(e.oldValue, e.newValue);
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
                                    return es(e, (e) => {
                                        let t = (0, v.getAvailableLocales)().find((t) => t.value === e);
                                        return null != t ? t.name : null;
                                    });
                                case k.gGk.VIDEO_QUALITY_MODE:
                                    return es(e, (e) =>
                                        e === k.K3c.FULL ? v.intl.string(v.t["7jOoJE"]) : v.intl.string(v.t.jjKYpu),
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
                                        return es(
                                            e,
                                            (e) => e.map((e) => e.type),
                                            (e) => e.map(N.PZ).join(", "),
                                        );
                                    break;
                                case k.gGk.AUTO_MODERATION_EVENT_TYPE:
                                    if (t.targetType === k.GaG.AUTO_MODERATION_RULE) return es(e, N.X3);
                                    break;
                                case k.gGk.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (t.targetType === k.GaG.AUTO_MODERATION_RULE) return es(e, N.nl);
                                    break;
                                case k.gGk.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (t.targetType === k.GaG.AUTO_MODERATION_RULE)
                                        return es(e, (e) =>
                                            null != e && "object" == typeof e
                                                ? null != e.keyword_filter && Array.isArray(e.keyword_filter)
                                                    ? v.intl.formatToMarkdownString(v.t.y91UXV, {
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
                                        return es(e, (e) =>
                                            null != e && Array.isArray(e)
                                                ? e.map((e) => `'${e}'`).join(", ")
                                                : JSON.stringify(e),
                                        );
                                    break;
                                case k.gGk.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (t.targetType === k.GaG.AUTO_MODERATION_RULE)
                                        return es(
                                            e,
                                            (e) =>
                                                e
                                                    .map(D.A.getChannel)
                                                    .filter((e) => null != e)
                                                    .map((e) => (0, g.m1)(e, C.default, L.A, !0)),
                                            (e) =>
                                                null != e && e.length > 0 ? e.join(", ") : v.intl.string(v.t["K/EdV8"]),
                                        );
                                    break;
                                case k.gGk.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (t.targetType === k.GaG.AUTO_MODERATION_RULE)
                                        return es(
                                            e,
                                            (e) =>
                                                e
                                                    .map((e) => h.A.getRole(n.id, e))
                                                    .filter((e) => null != e)
                                                    .map((e) => e.name),
                                            (e) =>
                                                null != e && e.length > 0 ? e.join(", ") : v.intl.string(v.t["K/EdV8"]),
                                        );
                                    break;
                                case k.gGk.ROLE_IDS:
                                    if (t.targetType === k.GaG.INVITE)
                                        return es(e, (e) =>
                                            e
                                                .map((e) => h.A.getRole(n.id, e))
                                                .filter((e) => null != e)
                                                .map((e) => ({ id: e.id, name: e.name })),
                                        );
                                    break;
                                case k.gGk.AVAILABLE_TAGS:
                                    return ei(e);
                                case k.gGk.APPLIED_TAGS:
                                    return ea(e, t);
                                case k.gGk.SCHEDULED_START_TIME:
                                case k.gGk.SCHEDULED_END_TIME:
                                    return es(e, (e) => (0, M.i$)(s()(new Date(e)), "LLLL"));
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
function el(e, t) {
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
function er(e) {
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
function ea(e, t) {
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
function ei(e) {
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
        for (let e in i) if (null == a[e]) return new R.QO(k.gGk.AVAILABLE_TAG_ADD, null, er(i[e]));
    }
    if (l.length > r.length) {
        for (let e in a) if (null == i[e]) return new R.QO(k.gGk.AVAILABLE_TAG_DELETE, null, er(a[e]));
    }
    for (let e in a) {
        let t = a[e],
            n = i[e];
        if (n?.name !== t.name || n?.emoji_id !== t.emoji_id || n?.emoji_name !== t.emoji_name)
            return new R.QO(k.gGk.AVAILABLE_TAG_EDIT, er(t), er(n));
    }
    return e;
}
function es(e, t, n) {
    let l = e.newValue,
        r = e.oldValue;
    return (
        null != e.newValue && ((l = t(e.newValue)), null != n && null != l && (l = n(l))),
        null != e.oldValue && ((r = t(e.oldValue)), null != n && null != r && (r = n(r))),
        new R.QO(e.key, r || e.oldValue, l || e.newValue)
    );
}
function eE(e, t, n, l, r) {
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
function eu(e, t, n) {
    let l = e,
        r = t(e);
    return null != r && null != n && (l = n(r)), l;
}
function eo(e, t) {
    return (n) => (null == n.oldValue ? e : t);
}
function ec(e, t) {
    return (n) => (null == n.newValue ? e : t);
}
function e_(e, t, n, l) {
    return (r) => (null != r.newValue && null != r.oldValue ? e : null != r.newValue ? t : null != r.oldValue ? n : l);
}
function ed(e, t) {
    return (n) => (n.newValue ? e : t);
}
function eA(e) {
    return (t) => e[t.newValue];
}
function eg(e, t) {
    return (n) => e[n.newValue] ?? t;
}
