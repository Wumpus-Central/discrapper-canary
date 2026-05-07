n.r(t),
    n.d(t, {
        transformAppliedForumTagChange: () => er,
        transformAvailableForumTagChange: () => ea,
        getStringForPermission: () => ee,
        getSimpleAuditLogTitleContextFromChange: () => J,
        getChangeTitle: () => q,
        getStringForRemovedChannelFlag: () => $,
        checkChangesToRender: () => H,
        getSimpleAuditLogTitleFromChange: () => K,
        ACTION_FILTER_ITEMS: () => w,
        shouldNotRenderChangeDetail: () => V,
        getStringForAddedChannelFlag: () => Z,
        getSimpleAuditLogChangeDetails: () => Q,
        getChangeStrings: () => B,
        findChangeByKey: () => W,
        transformLogs: () => et,
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
    _ = n(136722),
    c = n(317097),
    o = n(665260),
    A = n(499979),
    d = n(155718),
    T = n(47167),
    g = n(626584),
    I = n(159273),
    N = n(627794),
    G = n(591552),
    O = n(701785),
    S = n(446600),
    R = n(750385),
    D = n(411153),
    m = n(734057),
    L = n(317525),
    h = n(994500),
    C = n(287809),
    M = n(58703),
    U = n(735547),
    x = n(935208),
    f = n(523599),
    p = n(652215),
    F = n(746080),
    P = n(243277),
    k = n(988794),
    j = n(375708);
let v = new g.A("AuditLogUtils"),
    X = [A.pJ.DAYS, A.pJ.HOURS, A.pJ.MINUTES, A.pJ.SECONDS],
    b = () => ({ [p.gGk.REASON]: () => j.t["2IW3C5"] });
function B(e) {
    switch (e.targetType) {
        case p.GaG.GUILD:
            return {
                [p.gGk.NAME]: () => j.t.CkDiNH,
                [p.gGk.DESCRIPTION]: e_(j.t.RP3Ey3, j.t.QAVj1Y),
                [p.gGk.ICON_HASH]: () => j.t.iLZ8Q9,
                [p.gGk.SPLASH_HASH]: () => j.t["4VV6dn"],
                [p.gGk.DISCOVERY_SPLASH_HASH]: () => j.t["2pds6p"],
                [p.gGk.BANNER_HASH]: e_(j.t.Cxq4zO, j.t["H7eE/9"]),
                [p.gGk.OWNER_ID]: () => j.t["8ltsLT"],
                [p.gGk.REGION]: () => j.t.X9r5Kf,
                [p.gGk.PREFERRED_LOCALE]: () => j.t.UnXuDS,
                [p.gGk.AFK_CHANNEL_ID]: e_(j.t.ClBuA4, j.t["ms+xtL"]),
                [p.gGk.AFK_TIMEOUT]: () => j.t.q21fHa,
                [p.gGk.SYSTEM_CHANNEL_ID]: e_(j.t.H1VXaa, j.t.XhtmxJ),
                [p.gGk.RULES_CHANNEL_ID]: e_(j.t.OI6MG2, j.t.lik3tI),
                [p.gGk.PUBLIC_UPDATES_CHANNEL_ID]: e_(j.t.YxBKrY, j.t.Ehsnij),
                [p.gGk.MFA_LEVEL]: eA({ [p.EkJ.NONE]: j.t.voaCCQ, [p.EkJ.ELEVATED]: j.t.pRNVwz }),
                [p.gGk.WIDGET_ENABLED]: eo(j.t.ADIty8, j.t.nf58VY),
                [p.gGk.WIDGET_CHANNEL_ID]: e_(j.t["6SBsDc"], j.t.deQ5wO),
                [p.gGk.VERIFICATION_LEVEL]: eA({
                    [p.PvD.NONE]: j.t.W27rsc,
                    [p.PvD.LOW]: j.t["V8P+Pw"],
                    [p.PvD.MEDIUM]: j.t.ERQFau,
                    [p.PvD.HIGH]: j.t["83fN0j"],
                    [p.PvD.VERY_HIGH]: j.t.PnkQJE,
                }),
                [p.gGk.DEFAULT_MESSAGE_NOTIFICATIONS]: eA({
                    [p.orn.ALL_MESSAGES]: j.t.LDi76A,
                    [p.orn.ONLY_MENTIONS]: j.t["6K83ba"],
                }),
                [p.gGk.VANITY_URL_CODE]: e_(j.t.Zplsov, j.t.u6cArh),
                [p.gGk.EXPLICIT_CONTENT_FILTER]: eA({
                    [p.gh6.DISABLED]: j.t.fmOeL3,
                    [p.gh6.MEMBERS_WITHOUT_ROLES]: j.t["4FghYw"],
                    [p.gh6.ALL_MEMBERS]: j.t.olyrSm,
                }),
                [p.gGk.PREMIUM_PROGRESS_BAR_ENABLED]: eo(j.t.rBT0sn, j.t["gc+te5"]),
                [p.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => j.t.YbouFH,
                [p.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => j.t.g3DMjB,
                [p.gGk.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => j.t["+fQAel"],
                [p.gGk.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => j.t.E1fc4v,
                [p.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => j.t.XbwtSA,
                ...b(),
            };
        case p.GaG.CHANNEL:
        case p.GaG.CHANNEL_OVERWRITE:
            return {
                [p.gGk.NAME]: eu(j.t.f8Rh0U, j.t.ebD4Qp),
                [p.gGk.POSITION]: eu(j.t.isS8te, j.t.t5uBis),
                [p.gGk.TOPIC]: ec(j.t.esQcxn, j.t["m+veAn"], j.t["ws/1FA"]),
                [p.gGk.BITRATE]: eu(j.t.fw81ak, j.t.MFNlgZ),
                [p.gGk.RTC_REGION_OVERRIDE]: ec(j.t["6kajxx"], j.t.eGOlmU, j.t["0JMZdz"]),
                [p.gGk.USER_LIMIT]: eu(j.t.wk5t7p, j.t.XgjCEh),
                [p.gGk.RATE_LIMIT_PER_USER]: eu(j.t["7lirhF"], j.t.j4CCJR),
                [p.gGk.PERMISSIONS_RESET]: () => j.t["+vSBFY"],
                [p.gGk.PERMISSIONS_GRANTED]: () => j.t.EKLJv8,
                [p.gGk.PERMISSIONS_DENIED]: () => j.t.U3rO5X,
                [p.gGk.REASON]: () => j.t["2IW3C5"],
                [p.gGk.NSFW]: eo(j.t.H8Ri2Y, j.t.WW6cJw),
                [p.gGk.TYPE]: eu(j.t.Vn5zn2, j.t.aq4uWI),
                [p.gGk.VIDEO_QUALITY_MODE]: eu(j.t.e68fAU, j.t.djbES0),
                [p.gGk.DEFAULT_AUTO_ARCHIVE_DURATION]: eu(j.t.nYz2mg, j.t.oczvRI),
                [p.gGk.DEFAULT_THREAD_RATE_LIMIT_PER_USER]: ec(j.t.tOJ8h7, j.t.WaSgzk, j.t["lj+A4u"]),
                [p.gGk.FLAGS]: () => j.t.ImCQko,
                [p.gGk.AVAILABLE_TAG_ADD]: () => j.t.H86QQU,
                [p.gGk.AVAILABLE_TAG_EDIT]: () => j.t.YtUzls,
                [p.gGk.AVAILABLE_TAG_DELETE]: () => j.t["8QOseg"],
                [p.gGk.LINKED_LOBBY]: e_(j.t["+/3TkD"], j.t["5kDYS3"]),
            };
        case p.GaG.USER:
            return {
                [p.gGk.NICK]: ec(j.t.qXDsHv, j.t["m+qury"], j.t.DvLvjF),
                [p.gGk.DEAF]: eo(j.t.mArLlW, j.t.ddvVYG),
                [p.gGk.MUTE]: eo(j.t["bxs/lS"], j.t.FjecQM),
                [p.gGk.ROLES_REMOVE]: () => j.t["+2SDWV"],
                [p.gGk.ROLES_ADD]: () => j.t["B3/3IJ"],
                [p.gGk.PRUNE_DELETE_DAYS]: () => j.t["+Cvc+D"],
                [p.gGk.COMMUNICATION_DISABLED_UNTIL]: ec(j.t.LXTQr5, j.t.LXTQr5, j.t.ULSdnE),
                [p.gGk.BYPASSES_VERIFICATION]: eo(j.t.NBPBui, j.t.zATost),
                [p.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => j.t.YbouFH,
                ...b(),
            };
        case p.GaG.ROLE:
            return {
                [p.gGk.NAME]: eu(j.t.QBmlaD, j.t["Lfs4r+"]),
                [p.gGk.DESCRIPTION]: eu(j.t.XeYKWJ, j.t.PSfeIj),
                [p.gGk.PERMISSIONS_GRANTED]: () => j.t["9i/DvE"],
                [p.gGk.PERMISSIONS_DENIED]: () => j.t.pa1ZVh,
                [p.gGk.COLOR]: ed({ "#000000": j.t.TK6E1H }, j.t["2FQFiw"]),
                [p.gGk.COLORS]: (e) => (null == e.newValue.secondary_color ? j.t.U44ttm : j.t["WnSwL/"]),
                [p.gGk.HOIST]: eo(j.t.gWfe24, j.t["+tb8kN"]),
                [p.gGk.MENTIONABLE]: eo(j.t.LL8VFF, j.t.Z7xzmC),
                [p.gGk.ICON_HASH]: () => j.t["iEE79/"],
                [p.gGk.UNICODE_EMOJI]: () => j.t.KiLMM0,
                ...b(),
            };
        case p.GaG.ONBOARDING_PROMPT:
            return {
                ...b(),
                [p.gGk.TITLE]: eu(j.t["sNpuy/"], j.t["3Ukc/g"]),
                [p.gGk.DESCRIPTION]: eu(j.t.PP1q0x, j.t.z7pYLg),
                [p.gGk.OPTIONS]: () => j.t["3G5C9+"],
                [p.gGk.SINGLE_SELECT]: eo(j.t.v4WnR3, j.t["6Qg3uC"]),
                [p.gGk.REQUIRED]: eo(j.t["0MPAM6"], j.t.pwsXir),
            };
        case p.GaG.GUILD_ONBOARDING:
            return {
                ...b(),
                [p.gGk.DEFAULT_CHANNEL_IDS]: () => j.t["8M+D2s"],
                [p.gGk.ENABLE_DEFAULT_CHANNELS]: eo(j.t["EYd/ls"], j.t["36OZeQ"]),
                [p.gGk.ENABLE_ONBOARDING_PROMPTS]: eo(j.t.V3u8PV, j.t["r66lc/"]),
                [p.gGk.ENABLED]: eo(j.t.SODVIs, j.t.u8HY5U),
            };
        case p.GaG.HOME_SETTINGS:
            return {
                ...b(),
                [p.gGk.WELCOME_MESSAGE]: () => j.t.dKQ1xd,
                [p.gGk.NEW_MEMBER_ACTIONS]: () => j.t.jDUIno,
                [p.gGk.RESOURCE_CHANNELS]: () => j.t.SIX0mr,
            };
        case p.GaG.INVITE:
            return {
                [p.gGk.CODE]: () => j.t.rrRHgb,
                [p.gGk.CHANNEL_ID]: () => j.t.Q1vd5q,
                [p.gGk.MAX_USES]: ed({ 0: j.t.Yx8LNm }, j.t["3ygnwU"]),
                [p.gGk.MAX_AGE]: ed({ [j.intl.string(j.t.PqEzn8)]: j.t.uWrLvw }, j.t["Q+5kcO"]),
                [p.gGk.TEMPORARY]: eo(j.t.MWp6H7, j.t.omiqTH),
                [p.gGk.FLAGS]: eA({ [u.Q.IS_GUEST_INVITE]: j.t.XYZMbL }),
                [p.gGk.ROLE_IDS]: () => j.t.gb1Owj,
                ...b(),
            };
        case p.GaG.WEBHOOK:
            return {
                [p.gGk.CHANNEL_ID]: eu(j.t.jhPprR, j.t.ar4qYO),
                [p.gGk.NAME]: eu(j.t.ZVGrzU, j.t.tywdZR),
                [p.gGk.AVATAR_HASH]: () => j.t.KB52Uj,
                [p.gGk.REASON]: () => j.t["2IW3C5"],
            };
        case p.GaG.EMOJI:
            return { [p.gGk.NAME]: eu(j.t.ahU1o5, j.t["wxs+vZ"]), ...b() };
        case p.GaG.STICKER:
            return {
                [p.gGk.NAME]: eu(j.t.cdl0Yo, j.t.o3W2ly),
                [p.gGk.TAGS]: eu(j.t["zwL+S2"], j.t["VYfKA+"]),
                [p.gGk.DESCRIPTION]: eu(j.t.XeYKWJ, j.t.PSfeIj),
                ...b(),
            };
        case p.GaG.INTEGRATION:
            return {
                [p.gGk.ENABLE_EMOTICONS]: eo(j.t.FI0m5x, j.t.olpKC6),
                [p.gGk.EXPIRE_BEHAVIOR]: eA({ 0: j.t["1Bb1+u"], 1: j.t.vjlW6m }),
                [p.gGk.EXPIRE_GRACE_PERIOD]: () => j.t.iovXMa,
                ...b(),
            };
        case p.GaG.STAGE_INSTANCE:
            return {
                [p.gGk.TOPIC]: eu(j.t["m+veAn"], j.t.esQcxn),
                [p.gGk.PRIVACY_LEVEL]: eA({ [k.dD.GUILD_ONLY]: j.t["EC+CDt"], [k.dD.PUBLIC]: j.t["pK/WG0"] }),
                ...b(),
            };
        case p.GaG.GUILD_SCHEDULED_EVENT:
            return {
                [p.gGk.NAME]: () => j.t["21EXHW"],
                [p.gGk.DESCRIPTION]: () => j.t.Vm1ofw,
                [p.gGk.PRIVACY_LEVEL]: eA({ [k.dD.GUILD_ONLY]: j.t["EC+CDt"], [k.dD.PUBLIC]: j.t["pK/WG0"] }),
                [p.gGk.STATUS]: eA({
                    [k.XG.SCHEDULED]: j.t.hXKDgq,
                    [k.XG.ACTIVE]: j.t.lRX1nz,
                    [k.XG.COMPLETED]: j.t["/eFIhq"],
                    [k.XG.CANCELED]: j.t.NWIYhj,
                }),
                [p.gGk.ENTITY_TYPE]: eA({
                    [k.Ps.NONE]: j.t["6sO3Ss"],
                    [k.Ps.STAGE_INSTANCE]: j.t["Wo+s1y"],
                    [k.Ps.VOICE]: j.t.XCVaIL,
                    [k.Ps.EXTERNAL]: j.t.IvhAj2,
                }),
                [p.gGk.CHANNEL_ID]: e_(j.t.yJBIcX, j.t["+PqSsi"]),
                [p.gGk.LOCATION]: e_(j.t.GaMBHy, j.t.PsICk0),
                [p.gGk.IMAGE_HASH]: e_(j.t.S3vcRK, j.t.KQu47I),
                ...b(),
            };
        case p.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
            return {
                [p.gGk.SCHEDULED_START_TIME]: e_(j.t.zMIYVg, j.t.fzF8Gd),
                [p.gGk.SCHEDULED_END_TIME]: e_(j.t.vONSQA, j.t.IlIti3),
                [p.gGk.IS_CANCELED]: (e) => {
                    if (null != e.oldValue || !0 === e.newValue) {
                        if (!e.oldValue && e.newValue) return j.t["7RkicW"];
                        else if (e.oldValue && !e.newValue) return j.t.dRNTWW;
                    }
                },
                ...b(),
            };
        case p.GaG.THREAD:
            return {
                [p.gGk.NAME]: eu(j.t.tUKRzX, j.t.kPCHON),
                [p.gGk.ARCHIVED]: eo(j.t.jDi9FK, j.t.F6dvbT),
                [p.gGk.LOCKED]: eo(j.t.JSy1QW, j.t.C7Jgo8),
                [p.gGk.INVITABLE]: eo(j.t.dxNUs9, j.t.biJvYG),
                [p.gGk.AUTO_ARCHIVE_DURATION]: eu(j.t.LuaG3y, j.t["18d9qr"]),
                [p.gGk.RATE_LIMIT_PER_USER]: eu(j.t["7lirhF"], j.t.j4CCJR),
                [p.gGk.FLAGS]: () => j.t.sSAQtj,
                [p.gGk.AVAILABLE_TAG_ADD]: () => j.t.H86QQU,
                [p.gGk.AVAILABLE_TAG_DELETE]: () => j.t["8QOseg"],
                ...b(),
            };
        case p.GaG.APPLICATION_COMMAND:
            var t;
            let n;
            return (
                (t = e.changes),
                (n = { ...b() }),
                t?.forEach((e) => {
                    e.newValue
                        ? e.newValue.permission
                            ? (n[e.key] = () => j.t["JH+89C"])
                            : (n[e.key] = () => j.t.HUrFDu)
                        : (n[e.key] = () => j.t.vynxnV);
                }),
                n
            );
        case p.GaG.AUTO_MODERATION_RULE:
            return {
                [p.gGk.NAME]: () => j.t.XwxAJT,
                [p.gGk.AUTO_MODERATION_TRIGGER_TYPE]: () => j.t.fx0pyl,
                [p.gGk.AUTO_MODERATION_EVENT_TYPE]: () => j.t["46Y+L5"],
                [p.gGk.AUTO_MODERATION_ACTIONS]: () => j.t["8efxfv"],
                [p.gGk.AUTO_MODERATION_ENABLED]: (e) => (!0 === (e.newValue ?? e.oldValue) ? j.t.fCmxC2 : j.t.Wrg9Jn),
                [p.gGk.AUTO_MODERATION_EXEMPT_ROLES]: () => j.t.TRb7Nx,
                [p.gGk.AUTO_MODERATION_EXEMPT_CHANNELS]: () => j.t.mzitLE,
                [p.gGk.AUTO_MODERATION_TRIGGER_METADATA]: () => j.t["h/lM65"],
                [p.gGk.AUTO_MODERATION_ADD_KEYWORDS]: () => j.t["9V2yaC"],
                [p.gGk.AUTO_MODERATION_REMOVE_KEYWORDS]: () => j.t["4Qe9ny"],
                [p.gGk.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => j.t.GyZtxp,
                [p.gGk.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => j.t.OQDadc,
                [p.gGk.AUTO_MODERATION_ADD_ALLOW_LIST]: () => j.t["FvvR+K"],
                [p.gGk.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => j.t.p5nSvy,
                ...b(),
            };
        case p.GaG.GUILD_SOUNDBOARD:
            return {
                [p.gGk.NAME]: eu(j.t.VOtRSO, j.t.OK7B8E),
                [p.gGk.VOLUME]: eu(j.t.igrDB9, j.t.L5lDFJ),
                [p.gGk.EMOJI_NAME]: ec(j.t.IIanaY, j.t["z4w4U/"], j.t.V8TfyU),
                [p.gGk.EMOJI_ID]: ec(j.t.ainxMB, j.t["2NPsYu"], j.t["8crtns"]),
                ...b(),
            };
        case p.GaG.VOICE_CHANNEL_STATUS:
            return { [p.gGk.STATUS]: () => j.t.HyCSnI, ...b() };
        case p.GaG.GUILD_MEMBER_VERIFICATION:
            return {
                [p.gGk.VERIFICATION_ENABLED]: (e) => (!0 === e.newValue ? j.t.fnkzDY : j.t.WYT6ka),
                [p.gGk.MANUAL_APPROVAL_ENABLED]: (e) => (!0 === e.newValue ? j.t.jzSvVd : j.t.WxyOtj),
                ...b(),
            };
        case p.GaG.GUILD_PROFILE:
            return {
                [p.gGk.DESCRIPTION]: () => j.t.nsUZKY,
                [p.gGk.BRAND_COLOR_PRIMARY]: () => j.t.qe9mgN,
                [p.gGk.CUSTOM_BANNER_HASH]: () => j.t["04b5KC"],
                [p.gGk.TRAITS]: () => j.t.dEy9WO,
                [p.gGk.GAME_APPLICATION_IDS]: () => j.t["8BOT3x"],
                [p.gGk.VISIBILITY]: () => j.t.bCl1Ep,
                [p.gGk.SERVER_TAG]: e_(j.t.ix1dnX, j.t["4LKpKb"]),
            };
        default:
            return b();
    }
}
let y = {
    [p.GaG.CHANNEL]: { [p.gGk.ID]: !0, [p.gGk.PERMISSION_OVERWRITES]: !0 },
    [p.GaG.CHANNEL_OVERWRITE]: { [p.gGk.TYPE]: !0, [p.gGk.ID]: !0, [p.gGk.PERMISSION_OVERWRITES]: !0 },
    [p.GaG.INVITE]: { [p.gGk.INVITER_ID]: !0, [p.gGk.USES]: !0 },
    [p.GaG.WEBHOOK]: { [p.gGk.TYPE]: !0, [p.gGk.APPLICATION_ID]: !0 },
    [p.GaG.INTEGRATION]: { [p.gGk.TYPE]: !0 },
    [p.GaG.THREAD]: { [p.gGk.ID]: !0, [p.gGk.TYPE]: !0 },
    [p.GaG.STICKER]: {
        [p.gGk.ID]: !0,
        [p.gGk.TYPE]: !0,
        [p.gGk.ASSET]: !0,
        [p.gGk.FORMAT_TYPE]: !0,
        [p.gGk.AVAILABLE]: !0,
        [p.gGk.GUILD_ID]: !0,
    },
    [p.GaG.GUILD_HOME]: { [p.gGk.ENTITY_TYPE]: !0 },
    [p.GaG.GUILD_ONBOARDING]: { [p.gGk.PROMPTS]: !0 },
    [p.GaG.GUILD_SOUNDBOARD]: { [p.gGk.ID]: !0, [p.gGk.SOUND_ID]: !0 },
};
function V(e, t) {
    if (
        e.actionType === p.RWi.DELETE &&
        e.action !== p.F_X.MEMBER_BAN_ADD &&
        e.action !== p.F_X.MEMBER_KICK &&
        e.action !== p.F_X.MEMBER_PRUNE
    )
        return t.key !== p.gGk.REASON;
    let n = y[e.targetType];
    return null != n && !0 === n[t.key];
}
function H(e) {
    let { changes: t } = e;
    return null != t && t.some((t) => !V(e, t));
}
let w = () => [
    { value: p.F_X.ALL, label: j.intl.string(j.t.QxEVcv), valueLabel: j.intl.string(j.t.an9Ry3) },
    { value: p.F_X.GUILD_UPDATE, label: j.intl.string(j.t["5INZa3"]) },
    { value: p.F_X.CHANNEL_CREATE, label: j.intl.string(j.t["2uh4vJ"]) },
    { value: p.F_X.CHANNEL_UPDATE, label: j.intl.string(j.t.mGsBLV) },
    { value: p.F_X.CHANNEL_DELETE, label: j.intl.string(j.t.hCHzAr) },
    { value: p.F_X.CHANNEL_OVERWRITE_CREATE, label: j.intl.string(j.t["8TnAMP"]) },
    { value: p.F_X.CHANNEL_OVERWRITE_UPDATE, label: j.intl.string(j.t.Jqx0Bi) },
    { value: p.F_X.CHANNEL_OVERWRITE_DELETE, label: j.intl.string(j.t.gBXOr4) },
    { value: p.F_X.MEMBER_KICK, label: j.intl.string(j.t["Q1/hN8"]) },
    { value: p.F_X.MEMBER_PRUNE, label: j.intl.string(j.t.tOTTja) },
    { value: p.F_X.MEMBER_BAN_ADD, label: j.intl.string(j.t["NfPn+e"]) },
    { value: p.F_X.MEMBER_BAN_REMOVE, label: j.intl.string(j.t.XCsGfI) },
    { value: p.F_X.MEMBER_UPDATE, label: j.intl.string(j.t["F/jmNJ"]) },
    { value: p.F_X.MEMBER_ROLE_UPDATE, label: j.intl.string(j.t.zAveSI) },
    { value: p.F_X.MEMBER_MOVE, label: j.intl.string(j.t.QshteR) },
    { value: p.F_X.MEMBER_DISCONNECT, label: j.intl.string(j.t.Z45os7) },
    { value: p.F_X.BOT_ADD, label: j.intl.string(j.t.vuH24Z) },
    { value: p.F_X.THREAD_CREATE, label: j.intl.string(j.t["+zl0DG"]) },
    { value: p.F_X.THREAD_UPDATE, label: j.intl.string(j.t.rbIry3) },
    { value: p.F_X.THREAD_DELETE, label: j.intl.string(j.t.hFjNEA) },
    { value: p.F_X.ROLE_CREATE, label: j.intl.string(j.t.AbxKtv) },
    { value: p.F_X.ROLE_UPDATE, label: j.intl.string(j.t.t3Z6sU) },
    { value: p.F_X.ROLE_DELETE, label: j.intl.string(j.t.YsFpa4) },
    { value: p.F_X.ONBOARDING_PROMPT_CREATE, label: j.intl.string(j.t.ZV9tqc) },
    { value: p.F_X.ONBOARDING_PROMPT_UPDATE, label: j.intl.string(j.t.PcOdvX) },
    { value: p.F_X.ONBOARDING_PROMPT_DELETE, label: j.intl.string(j.t["+r33Na"]) },
    { value: p.F_X.ONBOARDING_CREATE, label: j.intl.string(j.t.uDADde) },
    { value: p.F_X.ONBOARDING_UPDATE, label: j.intl.string(j.t.J1H1wg) },
    { value: p.F_X.HOME_SETTINGS_CREATE, label: j.intl.string(j.t.Di4cvI) },
    { value: p.F_X.HOME_SETTINGS_UPDATE, label: j.intl.string(j.t.tzyrJH) },
    { value: p.F_X.INVITE_CREATE, label: j.intl.string(j.t["0BNJdX"]) },
    { value: p.F_X.INVITE_UPDATE, label: j.intl.string(j.t["o++obV"]) },
    { value: p.F_X.INVITE_DELETE, label: j.intl.string(j.t.iP40Az) },
    { value: p.F_X.WEBHOOK_CREATE, label: j.intl.string(j.t["tBF4+S"]) },
    { value: p.F_X.WEBHOOK_UPDATE, label: j.intl.string(j.t.eV3McO) },
    { value: p.F_X.WEBHOOK_DELETE, label: j.intl.string(j.t.AAL3K1) },
    { value: p.F_X.EMOJI_CREATE, label: j.intl.string(j.t.RuWm0V) },
    { value: p.F_X.EMOJI_UPDATE, label: j.intl.string(j.t.WzdUY7) },
    { value: p.F_X.EMOJI_DELETE, label: j.intl.string(j.t.c3dK2L) },
    { value: p.F_X.MESSAGE_DELETE, label: j.intl.string(j.t.daTfXh) },
    { value: p.F_X.MESSAGE_BULK_DELETE, label: j.intl.string(j.t.nrBxeh) },
    { value: p.F_X.MESSAGE_PIN, label: j.intl.string(j.t.MUldyN) },
    { value: p.F_X.MESSAGE_UNPIN, label: j.intl.string(j.t.n4zKhA) },
    { value: p.F_X.INTEGRATION_CREATE, label: j.intl.string(j.t.deNm8x) },
    { value: p.F_X.INTEGRATION_UPDATE, label: j.intl.string(j.t.HT7Sfg) },
    { value: p.F_X.INTEGRATION_DELETE, label: j.intl.string(j.t["+kJ09q"]) },
    { value: p.F_X.STICKER_CREATE, label: j.intl.string(j.t["3DzNjU"]) },
    { value: p.F_X.STICKER_UPDATE, label: j.intl.string(j.t.tdhW5b) },
    { value: p.F_X.STICKER_DELETE, label: j.intl.string(j.t["+ZhGOk"]) },
    { value: p.F_X.STAGE_INSTANCE_CREATE, label: j.intl.string(j.t.sPbjA6) },
    { value: p.F_X.STAGE_INSTANCE_UPDATE, label: j.intl.string(j.t.cW9LfJ) },
    { value: p.F_X.STAGE_INSTANCE_DELETE, label: j.intl.string(j.t["U1r+yD"]) },
    { value: p.F_X.GUILD_SCHEDULED_EVENT_CREATE, label: j.intl.string(j.t.H81Zyy) },
    { value: p.F_X.GUILD_SCHEDULED_EVENT_UPDATE, label: j.intl.string(j.t["FM69l+"]) },
    { value: p.F_X.GUILD_SCHEDULED_EVENT_DELETE, label: j.intl.string(j.t.Rq28Bh) },
    { value: p.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE, label: j.intl.string(j.t.iPdFOt) },
    { value: p.F_X.AUTO_MODERATION_BLOCK_MESSAGE, label: j.intl.string(j.t.gNq5z6) },
    { value: p.F_X.AUTO_MODERATION_RULE_CREATE, label: j.intl.string(j.t.f72Zqb) },
    { value: p.F_X.AUTO_MODERATION_RULE_UPDATE, label: j.intl.string(j.t.XeqIiv) },
    { value: p.F_X.AUTO_MODERATION_RULE_DELETE, label: j.intl.string(j.t.syAApU) },
    { value: p.F_X.GUILD_HOME_FEATURE_ITEM, label: j.intl.string(j.t.lhG5KN) },
    { value: p.F_X.GUILD_HOME_REMOVE_ITEM, label: j.intl.string(j.t.lRPRwS) },
    { value: p.F_X.SOUNDBOARD_SOUND_CREATE, label: j.intl.string(j.t.yoRi5r) },
    { value: p.F_X.SOUNDBOARD_SOUND_UPDATE, label: j.intl.string(j.t.uKlG0Z) },
    { value: p.F_X.SOUNDBOARD_SOUND_DELETE, label: j.intl.string(j.t.gq0iCT) },
    { value: p.F_X.VOICE_CHANNEL_STATUS_CREATE, label: j.intl.string(j.t.rGr0YM) },
    { value: p.F_X.VOICE_CHANNEL_STATUS_DELETE, label: j.intl.string(j.t.V9PEQ4) },
];
function W(e, t) {
    return null != t.changes ? t.changes.find((t) => t.key === e) : null;
}
function Y(e, t) {
    return null != t.changes ? t.changes.filter((t) => t.key === e) : [];
}
function K(e) {
    let t = w().find((t) => t.value === e.action);
    return null != W(p.gGk.COMMUNICATION_DISABLED_UNTIL, e) ? j.intl.string(j.t.z3wbj8) : (t?.label ?? null);
}
let z = {
    [A.pJ.SECONDS]: (e) => j.intl.formatToPlainString(j.t.geSp4K, { seconds: e }),
    [A.pJ.MINUTES]: (e) => j.intl.formatToPlainString(j.t.iXLF9W, { minutes: e }),
    [A.pJ.HOURS]: (e) => j.intl.formatToPlainString(j.t.xCjYxK, { hours: e }),
    [A.pJ.DAYS]: (e) => j.intl.formatToPlainString(j.t["k2UNz+"], { days: e }),
};
function J(e) {
    let t = W(p.gGk.COMMUNICATION_DISABLED_UNTIL, e),
        n = Y(p.gGk.ROLES_ADD, e).length > 0,
        l = Y(p.gGk.ROLES_REMOVE, e).length > 0;
    if (null != t) {
        if (t?.newValue != null) {
            let n = new Date(t?.newValue).getTime() - x.default.extractTimestamp(e.id),
                l = Math.round(n / 1e3 / 60),
                r = (0, A.$l)(l, X);
            if (null == r.unit || null == r.time) return null;
            if (r.unit in z) {
                let e = r.unit,
                    t = r.unit === A.pJ.SECONDS ? Math.round(n / 1e3) : r.time;
                return z[e](t);
            }
        } else if (t?.oldValue != null) return j.intl.string(j.t.MA1ltr);
    } else if (n && l) return j.intl.string(j.t.RdMMew);
    else if (n) return j.intl.string(j.t["4GQqs8"]);
    else if (l) return j.intl.string(j.t["8mQ6x0"]);
    return null;
}
function Q(e) {
    let t = Y(p.gGk.ROLES_ADD, e),
        n = Y(p.gGk.ROLES_REMOVE, e),
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
        ? j.intl.formatToPlainString(j.t.tZw1EW, { roleNamesAdded: l, roleNamesRemoved: r })
        : t.length > 0
          ? j.intl.formatToPlainString(j.t["/mTqt5"], { roleNames: l })
          : n.length > 0
            ? j.intl.formatToPlainString(j.t.Wk4pAJ, { roleNames: r })
            : null;
}
function q(e) {
    switch (e.action) {
        case p.F_X.GUILD_UPDATE:
            return j.t.LjZO31;
        case p.F_X.CHANNEL_CREATE:
            let t = null != e.changes ? e.changes.find((e) => e.key === p.gGk.TYPE) : null;
            if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
            switch (t.newValue) {
                case p.rbe.GUILD_STAGE_VOICE:
                    return j.t["OKp4+o"];
                case p.rbe.GUILD_VOICE:
                    return j.t.NPOy4G;
                case p.rbe.GUILD_CATEGORY:
                    return j.t.T3KIjz;
                default:
                    return j.t.wrYNG2;
            }
        case p.F_X.CHANNEL_UPDATE:
            return j.t.nTYk6B;
        case p.F_X.CHANNEL_DELETE:
            return j.t.ynfvkm;
        case p.F_X.CHANNEL_OVERWRITE_CREATE:
            return j.t.l5Cu1a;
        case p.F_X.CHANNEL_OVERWRITE_UPDATE:
            return j.t.uhtbNU;
        case p.F_X.CHANNEL_OVERWRITE_DELETE:
            return j.t["HASt/3"];
        case p.F_X.MEMBER_KICK:
            return j.t.B5hDZX;
        case p.F_X.MEMBER_PRUNE:
            return j.t.qKOZTP;
        case p.F_X.MEMBER_BAN_ADD:
            return j.t["XklUm/"];
        case p.F_X.MEMBER_BAN_REMOVE:
            return j.t.o3Y6HD;
        case p.F_X.MEMBER_UPDATE:
            return j.t.pznhLN;
        case p.F_X.MEMBER_ROLE_UPDATE:
            return j.t.Vngfia;
        case p.F_X.MEMBER_MOVE:
            return j.t.Yt6NkU;
        case p.F_X.MEMBER_DISCONNECT:
            return j.t.K4eCZw;
        case p.F_X.BOT_ADD:
            return j.t.fWvX0G;
        case p.F_X.ROLE_CREATE:
            return j.t.UTLTx6;
        case p.F_X.ROLE_UPDATE:
            return j.t.NRbN18;
        case p.F_X.ROLE_DELETE:
            return j.t["4s63tb"];
        case p.F_X.INVITE_CREATE:
            return j.t.YHOXWy;
        case p.F_X.INVITE_UPDATE:
            return j.t.ja3kGS;
        case p.F_X.INVITE_DELETE:
            return j.t["3n/iWk"];
        case p.F_X.WEBHOOK_CREATE:
            return j.t.MhYhil;
        case p.F_X.WEBHOOK_UPDATE:
            return j.t["6GTlWB"];
        case p.F_X.WEBHOOK_DELETE:
            return j.t.in0VjZ;
        case p.F_X.EMOJI_CREATE:
            return j.t["7vekRO"];
        case p.F_X.EMOJI_UPDATE:
            return j.t.IsCKfh;
        case p.F_X.EMOJI_DELETE:
            return j.t.JnUaVG;
        case p.F_X.STICKER_CREATE:
            return j.t.DRZifq;
        case p.F_X.STICKER_UPDATE:
            return j.t.bhujGc;
        case p.F_X.STICKER_DELETE:
            return j.t.rGEP9U;
        case p.F_X.MESSAGE_DELETE:
            return j.t["HPkD+M"];
        case p.F_X.MESSAGE_BULK_DELETE:
            return j.t["3RIvLE"];
        case p.F_X.MESSAGE_PIN:
            return j.t.Yna7E7;
        case p.F_X.MESSAGE_UNPIN:
            return j.t.NCxXUW;
        case p.F_X.INTEGRATION_CREATE:
            return j.t.HYvCb3;
        case p.F_X.INTEGRATION_UPDATE:
            return j.t.ibCCOS;
        case p.F_X.INTEGRATION_DELETE:
            return j.t["8zScWY"];
        case p.F_X.STAGE_INSTANCE_CREATE:
            return j.t["n7x/DF"];
        case p.F_X.STAGE_INSTANCE_UPDATE:
            return j.t["0hQYU4"];
        case p.F_X.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return j.t["Oi/in9"];
            return j.t["7ZIFm9"];
        case p.F_X.GUILD_SCHEDULED_EVENT_CREATE:
            return j.t.S7k52p;
        case p.F_X.GUILD_SCHEDULED_EVENT_UPDATE:
            return j.t.ebTK11;
        case p.F_X.GUILD_SCHEDULED_EVENT_DELETE:
            return j.t["/ARPKQ"];
        case p.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case p.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return j.t["8qCI36"];
        case p.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return j.t.zYb2da;
        case p.F_X.THREAD_CREATE:
            let n = null != e.changes ? e.changes.find((e) => e.key === p.gGk.TYPE) : null;
            if (null == n) throw Error("[AuditLog] Could not find type change for thread create");
            switch (n.newValue) {
                case p.rbe.PRIVATE_THREAD:
                    return j.t.Br0y5w;
                case p.rbe.ANNOUNCEMENT_THREAD:
                    return j.t["6uaMmO"];
                default:
                    return j.t["2cxQ7G"];
            }
        case p.F_X.THREAD_UPDATE:
            return j.t.PSsy4t;
        case p.F_X.THREAD_DELETE:
            return j.t.s3Khn8;
        case p.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return j.t.uzCqBm;
        case p.F_X.AUTO_MODERATION_BLOCK_MESSAGE:
            return j.t.NqWv2K;
        case p.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL:
            if (e.options?.auto_moderation_rule_trigger_type === P.uh.USER_PROFILE.toString()) return j.t.YQsjej;
            return j.t.SD0PwJ;
        case p.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return j.t.Vk4TwX;
        case p.F_X.AUTO_MODERATION_QUARANTINE_USER:
            return j.t["/W5u5o"];
        case p.F_X.CREATOR_MONETIZATION_REQUEST_CREATED:
            return j.t.ONvWyr;
        case p.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return j.t["ryGLk+"];
        case p.F_X.AUTO_MODERATION_RULE_CREATE:
            return j.t["NKljj+"];
        case p.F_X.AUTO_MODERATION_RULE_UPDATE:
            return j.t["3wEA9u"];
        case p.F_X.AUTO_MODERATION_RULE_DELETE:
            return j.t.umua3n;
        case p.F_X.ONBOARDING_PROMPT_CREATE:
            return j.t["/8A1g2"];
        case p.F_X.ONBOARDING_PROMPT_UPDATE:
            return j.t.ArIrWI;
        case p.F_X.ONBOARDING_PROMPT_DELETE:
            return j.t.IuBTao;
        case p.F_X.ONBOARDING_CREATE:
            return j.t["wDaq3/"];
        case p.F_X.ONBOARDING_UPDATE:
            return j.t["yONu/l"];
        case p.F_X.HOME_SETTINGS_CREATE:
            return j.t.dSdCjG;
        case p.F_X.HOME_SETTINGS_UPDATE:
            return j.t.XHE8qv;
        case p.F_X.GUILD_HOME_FEATURE_ITEM:
            let l = null != e.changes ? e.changes.find((e) => e.key === p.gGk.ENTITY_TYPE) : null;
            if (null == l) return j.t["UZ+U3A"];
            switch (l.newValue) {
                case E.MESSAGE:
                    return j.t["PyEa+J"];
                case E.FORUM_POST:
                    return j.t.hCuAb1;
                default:
                    return j.t["UZ+U3A"];
            }
        case p.F_X.GUILD_HOME_REMOVE_ITEM:
            return j.t.kPReun;
        case p.F_X.SOUNDBOARD_SOUND_CREATE:
            return j.t["0PD83V"];
        case p.F_X.SOUNDBOARD_SOUND_UPDATE:
            return j.t.CM8n1w;
        case p.F_X.SOUNDBOARD_SOUND_DELETE:
            return j.t["kVz4/0"];
        case p.F_X.VOICE_CHANNEL_STATUS_CREATE:
            return j.t.MWjnU7;
        case p.F_X.VOICE_CHANNEL_STATUS_DELETE:
            return j.t.aS8Krq;
        case p.F_X.GUILD_MEMBER_VERIFICATION_UPDATE:
            return j.t["NUKUb+"];
        case p.F_X.GUILD_PROFILE_UPDATE:
            return j.t.Ed6hF1;
        case p.F_X.GUILD_MIGRATE_PIN_PERMISSION:
            return j.t["3Ne7MA"];
        case p.F_X.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION:
            return j.t["naflH+"];
        default:
            return null;
    }
}
function Z(e) {
    switch (e) {
        case F.lx.GUILD_FEED_REMOVED:
            return j.intl.string(j.t["5G8ZD4"]);
        case F.lx.ACTIVE_CHANNELS_REMOVED:
            return j.intl.string(j.t["4YLtzC"]);
        case F.lx.PINNED:
            return j.intl.string(j.t["1QLRYb"]);
    }
    return null;
}
function $(e) {
    switch (e) {
        case F.lx.GUILD_FEED_REMOVED:
            return j.intl.string(j.t.S5kuWQ);
        case F.lx.ACTIVE_CHANNELS_REMOVED:
            return j.intl.string(j.t["8qpgcz"]);
        case F.lx.PINNED:
            return j.intl.string(j.t.CMweGA);
    }
    return null;
}
function ee(e, t) {
    switch (e) {
        case p.xBc.CREATE_INSTANT_INVITE:
            return j.intl.string(j.t.zJrgTG);
        case p.xBc.KICK_MEMBERS:
            return j.intl.string(j.t.pBNv6i);
        case p.xBc.BAN_MEMBERS:
            return j.intl.string(j.t.oTBA7N);
        case p.xBc.ADMINISTRATOR:
            return j.intl.string(j.t.PGvZqX);
        case p.xBc.MANAGE_CHANNELS:
            if (t.targetType === p.GaG.CHANNEL || t.targetType === p.GaG.CHANNEL_OVERWRITE)
                return j.intl.string(j.t.nAw15L);
            return j.intl.string(j.t["9qLtWs"]);
        case p.xBc.MANAGE_GUILD:
            return j.intl.string(j.t.QZRcfO);
        case p.xBc.VIEW_GUILD_ANALYTICS:
            return j.intl.string(j.t["rQJBE/"]);
        case p.xBc.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return j.intl.string(j.t["0lTLTv"]);
        case p.xBc.CHANGE_NICKNAME:
            return j.intl.string(j.t.dilOF6);
        case p.xBc.MANAGE_NICKNAMES:
            return j.intl.string(j.t["t+Ct5x"]);
        case p.xBc.MANAGE_ROLES:
            return j.intl.string(j.t["C8d+oG"]);
        case p.xBc.MANAGE_WEBHOOKS:
            return j.intl.string(j.t["/ADKmM"]);
        case p.xBc.CREATE_GUILD_EXPRESSIONS:
            return j.intl.string(j.t.HarVuP);
        case p.xBc.MANAGE_GUILD_EXPRESSIONS:
            return j.intl.string(j.t.bbuXIn);
        case p.xBc.VIEW_AUDIT_LOG:
            return j.intl.string(j.t.fZgLpA);
        case p.xBc.VIEW_CHANNEL:
            if (t.targetType === p.GaG.CHANNEL || t.targetType === p.GaG.CHANNEL_OVERWRITE)
                return j.intl.string(j.t["W/A4Qp"]);
            return j.intl.string(j.t.uV83yi);
        case p.xBc.SEND_MESSAGES:
            return j.intl.string(j.t.T32rkC);
        case p.xBc.SEND_TTS_MESSAGES:
            return j.intl.string(j.t.Mg7bku);
        case p.xBc.USE_APPLICATION_COMMANDS:
            return j.intl.string(j.t.shbR1a);
        case p.xBc.MANAGE_MESSAGES:
            return j.intl.string(j.t["6lU9xM"]);
        case p.xBc.EMBED_LINKS:
            return j.intl.string(j.t["969dEL"]);
        case p.xBc.ATTACH_FILES:
            return j.intl.string(j.t["3AS4UM"]);
        case p.xBc.READ_MESSAGE_HISTORY:
            return j.intl.string(j.t.l9ufaR);
        case p.xBc.MENTION_EVERYONE:
            return j.intl.string(j.t.Y78KGC);
        case p.xBc.USE_EXTERNAL_EMOJIS:
            return j.intl.string(j.t.BpBGZU);
        case p.xBc.USE_EXTERNAL_STICKERS:
            return j.intl.string(j.t["UeRs+b"]);
        case p.xBc.ADD_REACTIONS:
            return j.intl.string(j.t.yEoJAr);
        case p.xBc.CONNECT:
            return j.intl.string(j.t.S0W8Z5);
        case p.xBc.SPEAK:
            return j.intl.string(j.t["8w1tIR"]);
        case p.xBc.MUTE_MEMBERS:
            return j.intl.string(j.t["8EI30/"]);
        case p.xBc.DEAFEN_MEMBERS:
            return j.intl.string(j.t["9L47Fr"]);
        case p.xBc.MOVE_MEMBERS:
            return j.intl.string(j.t.YtjJPQ);
        case p.xBc.USE_VAD:
            return j.intl.string(j.t["08zAV7"]);
        case p.xBc.PRIORITY_SPEAKER:
            return j.intl.string(j.t.BVK71i);
        case p.xBc.STREAM:
            return j.intl.string(j.t.FlNoSV);
        case p.xBc.REQUEST_TO_SPEAK:
            return j.intl.string(j.t["5kicT2"]);
        case p.xBc.USE_EMBEDDED_ACTIVITIES:
            return j.intl.string(j.t.rLSGeh);
        case p.xBc.CREATE_EVENTS:
            return j.intl.string(j.t.qyjZua);
        case p.xBc.MANAGE_EVENTS:
            return j.intl.string(j.t.HIgA5a);
        case p.xBc.CREATE_PUBLIC_THREADS:
            return j.intl.string(j.t["25rKnX"]);
        case p.xBc.CREATE_PRIVATE_THREADS:
            return j.intl.string(j.t.QwbTSa);
        case p.xBc.SEND_MESSAGES_IN_THREADS:
            return j.intl.string(j.t.fTE74g);
        case p.xBc.MANAGE_THREADS:
            return j.intl.string(j.t.kEqgr7);
        case p.xBc.MODERATE_MEMBERS:
            return j.intl.string(j.t["+RL6pz"]);
        case p.xBc.SET_VOICE_CHANNEL_STATUS:
            return j.intl.string(j.t.VBwkUf);
        case p.xBc.SEND_POLLS:
            return j.intl.string(j.t.UMQ7Ww);
        case p.xBc.USE_EXTERNAL_APPS:
            return j.intl.string(j.t.TtA5rK);
        case p.xBc.PIN_MESSAGES:
            return j.intl.string(j.t.Y5BI39);
        case p.xBc.BYPASS_SLOWMODE:
            return j.intl.string(j.t.kqcjeV);
        case p.xBc.MANAGE_OFFICIAL_MESSAGES:
            return j.intl.string(j.t.Aj9ruN);
    }
    return null;
}
function et(e, t) {
    let n = [];
    return (
        e.forEach((e) => {
            let l = (function (e, t) {
                    switch (e.targetType) {
                        case p.GaG.GUILD:
                        case p.GaG.GUILD_HOME:
                        case p.GaG.GUILD_PROFILE:
                            return t;
                        case p.GaG.CHANNEL:
                        case p.GaG.CHANNEL_OVERWRITE:
                            return es(
                                e,
                                p.gGk.NAME,
                                (e) => m.A.getChannel(e),
                                (e) => (0, T.m1)(e, C.default, h.A, !0),
                            );
                        case p.GaG.USER:
                            return es(
                                e,
                                p.gGk.NICK,
                                (e) => C.default.getUser(e),
                                (e) => e,
                            );
                        case p.GaG.ROLE:
                            return es(
                                e,
                                p.gGk.NAME,
                                (e) => L.A.getRole(t.id, e),
                                (e) => e.name,
                            );
                        case p.GaG.ONBOARDING_PROMPT:
                            let n = es(
                                e,
                                p.gGk.ID,
                                (e) => G.A.getOnboardingPrompt(e),
                                (e) => e.title,
                            );
                            return null == n || "" === n ? j.intl.string(j.t.ZNQyiR) : n;
                        case p.GaG.GUILD_ONBOARDING:
                        case p.GaG.GUILD_MEMBER_VERIFICATION:
                            return t;
                        case p.GaG.INVITE:
                            return es(e, p.gGk.CODE, p.FXj);
                        case p.GaG.INTEGRATION:
                            return es(
                                e,
                                p.gGk.TYPE,
                                (e) => f.A.integrations.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case p.GaG.WEBHOOK:
                            return es(
                                e,
                                p.gGk.NAME,
                                (e) => f.A.webhooks.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case p.GaG.EMOJI:
                            return es(
                                e,
                                p.gGk.NAME,
                                (e) => I.Ay.getGuildEmoji(t.id).find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case p.GaG.STICKER:
                            return es(
                                e,
                                p.gGk.NAME,
                                (e) => R.A.getStickerById(e),
                                (e) => e.name,
                            );
                        case p.GaG.STAGE_INSTANCE:
                            return es(
                                e,
                                p.gGk.TOPIC,
                                (e) => Object.values(S.A.getStageInstancesByGuild(t.id))?.find((t) => t.id === e),
                                (e) => e.topic,
                            );
                        case p.GaG.GUILD_SCHEDULED_EVENT:
                        case p.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return es(
                                e,
                                p.gGk.NAME,
                                (e) => f.A.guildScheduledEvents.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case p.GaG.THREAD:
                            return es(
                                e,
                                p.gGk.NAME,
                                (e) => f.A.threads.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case p.GaG.APPLICATION_COMMAND:
                            if (e.targetId === e.options.application_id) {
                                let t = f.A.integrations.find((t) => t.application?.id === e.targetId);
                                if (null != t) return t.name;
                                return e.targetId;
                            }
                            return es(
                                e,
                                p.gGk.NAME,
                                (e) => f.A.applicationCommands.find((t) => t.id === e),
                                (e) => {
                                    let t =
                                        null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
                                    return e.type === d.kc.CHAT ? `/\u2060${t}` : t;
                                },
                            );
                        case p.GaG.AUTO_MODERATION_RULE:
                            return es(
                                e,
                                p.gGk.NAME,
                                (e) => f.A.automodRules.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case p.GaG.GUILD_SOUNDBOARD:
                            return es(e, p.gGk.NAME, p.FXj);
                        case p.GaG.HOME_SETTINGS:
                            return es(
                                e,
                                p.gGk.GUILD_ID,
                                (e) => O.h.getSettings(e),
                                () => j.intl.string(j.t.VbpLyU),
                                t.id,
                            );
                        case p.GaG.VOICE_CHANNEL_STATUS:
                            return es(
                                e,
                                p.gGk.STATUS,
                                (e) => m.A.getChannel(e),
                                (e) => (0, T.m1)(e, C.default, h.A, !0),
                            );
                        default:
                            return v.warn("Unknown targetType for log", e), null;
                    }
                })(e, t),
                r = C.default.getUser(e.userId);
            if (
                null != l ||
                [
                    p.F_X.MEMBER_PRUNE,
                    p.F_X.MEMBER_DISCONNECT,
                    p.F_X.MEMBER_MOVE,
                    p.F_X.CREATOR_MONETIZATION_REQUEST_CREATED,
                    p.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED,
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
                                    case p.AO_.USER:
                                        t.subtarget = eE(
                                            e.options.id,
                                            (e) => C.default.getUser(e),
                                            (e) => e.tag,
                                        );
                                        break;
                                    case p.AO_.ROLE:
                                        t.subtarget = eE(e.options.role_name, p.FXj);
                                }
                                if (
                                    (null != e.options.channel_id &&
                                        (t.channel = es(
                                            e,
                                            "",
                                            (e) => m.A.getChannel(e),
                                            (e) => e,
                                            e.options.channel_id,
                                        )),
                                    null != e.options.members_removed &&
                                        0 !== e.options.members_removed &&
                                        (t.count = e.options.members_removed),
                                    null != e.options.event_exception_id)
                                ) {
                                    let n = f.A.guildScheduledEvents.find((t) => t.id === e.targetId),
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
                    e.changes.forEach((l) => {
                        let r = (function (e, t, n) {
                            if (t.action === p.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let t = e.newValue || e.oldValue;
                                switch (t.type) {
                                    case p.g0g.ROLE:
                                        e.subtarget = eE(
                                            t.id,
                                            (e) => L.A.getRole(n.id, e),
                                            (e) => e.name,
                                        );
                                        break;
                                    case p.g0g.USER:
                                        e.subtarget = eE(
                                            t.id,
                                            (e) => C.default.getUser(e),
                                            (e) => e.tag,
                                        );
                                        break;
                                    case p.g0g.CHANNEL:
                                        t.id === a()(n.id).subtract(1).toString()
                                            ? (e.subtarget = j.intl.string(j.t.MSYhgh))
                                            : (e.subtarget = eE(
                                                  t.id,
                                                  (e) => m.A.getChannel(e),
                                                  (e) => (0, T.m1)(e, C.default, h.A, !0),
                                              ));
                                }
                                return e;
                            }
                            switch (e.key) {
                                case p.gGk.OWNER_ID:
                                    return ei(e, (e) => C.default.getUser(e));
                                case p.gGk.CHANNEL_ID:
                                case p.gGk.AFK_CHANNEL_ID:
                                case p.gGk.SYSTEM_CHANNEL_ID:
                                case p.gGk.RULES_CHANNEL_ID:
                                case p.gGk.PUBLIC_UPDATES_CHANNEL_ID:
                                    return ei(
                                        e,
                                        (e) => m.A.getChannel(e),
                                        (e) => (0, T.m1)(e, C.default, h.A, !0),
                                    );
                                case p.gGk.AFK_TIMEOUT:
                                    return ei(e, (e) => e / 60);
                                case p.gGk.BITRATE:
                                    return ei(e, (e) => e / 1e3);
                                case p.gGk.COLOR:
                                    return ei(e, (e) => (0, c.Hl)(e).toUpperCase());
                                case p.gGk.THEME_COLORS:
                                    return ei(
                                        e,
                                        (e) => `${(0, c.Hl)(e[0]).toUpperCase()}, ${(0, c.Hl)(e[1]).toUpperCase()}`,
                                    );
                                case p.gGk.MAX_AGE:
                                    return ei(e, (e) => {
                                        let t = U.Ay.getMaxAgeOptionByValue(e);
                                        return null !== t ? t.label : e;
                                    });
                                case p.gGk.PERMISSIONS: {
                                    let t = [],
                                        { added: n, removed: l } = en(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let e = new D.QO(p.gGk.PERMISSIONS_GRANTED, null, n);
                                        t.push(e);
                                    }
                                    if (l.length > 0) {
                                        let e = new D.QO(p.gGk.PERMISSIONS_DENIED, null, l);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case p.gGk.PERMISSIONS_GRANTED:
                                case p.gGk.PERMISSIONS_DENIED: {
                                    let t = [],
                                        { added: n, removed: l } = en(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let l = new D.QO(e.key, null, n);
                                        t.push(l);
                                    }
                                    if (l.length > 0) {
                                        let e = new D.QO(p.gGk.PERMISSIONS_RESET, l, l);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case p.gGk.FLAGS: {
                                    let t = [],
                                        { added: n, removed: l } = (function (e, t) {
                                            let n = "number" == typeof e ? e : 0,
                                                l = "number" == typeof t ? t : 0,
                                                r = o.VL(l, n),
                                                a = o.VL(n, l),
                                                i = [],
                                                s = [];
                                            for (let e in F.lx) {
                                                let t = F.lx[e];
                                                o.Lt(r, t) && i.push(t), o.Lt(a, t) && s.push(t);
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
                                case p.gGk.PREFERRED_LOCALE:
                                    return ei(e, (e) => {
                                        let t = (0, j.getAvailableLocales)().find((t) => t.value === e);
                                        return null != t ? t.name : null;
                                    });
                                case p.gGk.VIDEO_QUALITY_MODE:
                                    return ei(e, (e) =>
                                        e === p.K3c.FULL ? j.intl.string(j.t["7jOoJE"]) : j.intl.string(j.t.jjKYpu),
                                    );
                                case p.gGk.SYSTEM_CHANNEL_FLAGS:
                                    let l, r;
                                    return (
                                        (l = {
                                            [p.ogj.SUPPRESS_JOIN_NOTIFICATIONS]:
                                                p.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                            [p.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS]:
                                                p.gGk.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                            [p.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]:
                                                p.gGk.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                            [p.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES]:
                                                p.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES,
                                        }),
                                        (r = []),
                                        Object.values(p.ogj).forEach((t) => {
                                            let n = (e.oldValue & t) === t,
                                                a = (e.newValue & t) === t;
                                            if (n === a) return;
                                            let i = new D.QO(l[t], !n, !a);
                                            r.push(i);
                                        }),
                                        r
                                    );
                                case p.gGk.AUTO_MODERATION_ACTIONS:
                                    if (t.targetType === p.GaG.AUTO_MODERATION_RULE)
                                        return ei(
                                            e,
                                            (e) => e.map((e) => e.type),
                                            (e) => e.map(N.PZ).join(", "),
                                        );
                                    break;
                                case p.gGk.AUTO_MODERATION_EVENT_TYPE:
                                    if (t.targetType === p.GaG.AUTO_MODERATION_RULE) return ei(e, N.X3);
                                    break;
                                case p.gGk.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (t.targetType === p.GaG.AUTO_MODERATION_RULE) return ei(e, N.nl);
                                    break;
                                case p.gGk.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (t.targetType === p.GaG.AUTO_MODERATION_RULE)
                                        return ei(e, (e) =>
                                            null != e && "object" == typeof e
                                                ? null != e.keyword_filter && Array.isArray(e.keyword_filter)
                                                    ? j.intl.formatToMarkdownString(j.t.y91UXV, {
                                                          newValue: e.keyword_filter.map((e) => `'${e}'`).join(", "),
                                                      })
                                                    : JSON.stringify(e)
                                                : e,
                                        );
                                    break;
                                case p.gGk.AUTO_MODERATION_ADD_KEYWORDS:
                                case p.gGk.AUTO_MODERATION_REMOVE_KEYWORDS:
                                case p.gGk.AUTO_MODERATION_ADD_REGEX_PATTERNS:
                                case p.gGk.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
                                case p.gGk.AUTO_MODERATION_ADD_ALLOW_LIST:
                                case p.gGk.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                                    if (t.targetType === p.GaG.AUTO_MODERATION_RULE)
                                        return ei(e, (e) =>
                                            null != e && Array.isArray(e)
                                                ? e.map((e) => `'${e}'`).join(", ")
                                                : JSON.stringify(e),
                                        );
                                    break;
                                case p.gGk.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (t.targetType === p.GaG.AUTO_MODERATION_RULE)
                                        return ei(
                                            e,
                                            (e) =>
                                                e
                                                    .map(m.A.getChannel)
                                                    .filter((e) => null != e)
                                                    .map((e) => (0, T.m1)(e, C.default, h.A, !0)),
                                            (e) =>
                                                null != e && e.length > 0 ? e.join(", ") : j.intl.string(j.t["K/EdV8"]),
                                        );
                                    break;
                                case p.gGk.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (t.targetType === p.GaG.AUTO_MODERATION_RULE)
                                        return ei(
                                            e,
                                            (e) =>
                                                e
                                                    .map((e) => L.A.getRole(n.id, e))
                                                    .filter((e) => null != e)
                                                    .map((e) => e.name),
                                            (e) =>
                                                null != e && e.length > 0 ? e.join(", ") : j.intl.string(j.t["K/EdV8"]),
                                        );
                                    break;
                                case p.gGk.ROLE_IDS:
                                    if (t.targetType === p.GaG.INVITE)
                                        return ei(e, (e) =>
                                            e
                                                .map((e) => L.A.getRole(n.id, e))
                                                .filter((e) => null != e)
                                                .map((e) => ({ id: e.id, name: e.name })),
                                        );
                                    break;
                                case p.gGk.AVAILABLE_TAGS:
                                    return ea(e);
                                case p.gGk.APPLIED_TAGS:
                                    return er(e, t);
                                case p.gGk.SCHEDULED_START_TIME:
                                case p.gGk.SCHEDULED_END_TIME:
                                    return ei(e, (e) => (0, M.i$)(s()(new Date(e)), "LLLL"));
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
function en(e, t) {
    let n = _.iu("string" == typeof e ? e : 0),
        l = _.iu("string" == typeof t ? t : 0),
        r = _.TF(l, n),
        a = _.TF(n, l),
        i = [],
        s = [];
    for (let e in p.xBc) {
        let t = p.xBc[e];
        _.zy(r, t) && i.push(t), _.zy(a, t) && s.push(t);
    }
    return { added: i, removed: s };
}
function el(e) {
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
function er(e, t) {
    let n = Array.isArray(e.oldValue) ? e.oldValue : [],
        l = Array.isArray(e.newValue) ? e.newValue : [],
        r = m.A.getChannel(t.targetId),
        a = r?.parent_id != null ? m.A.getChannel(r.parent_id) : null,
        i = a?.availableTags ?? [],
        s = {};
    i.forEach((e) => {
        s[e.id] = { name: e.name, emojiId: e.emojiId, emojiName: e.emojiName };
    });
    let E = new Set(n),
        u = new Set(l),
        _ = l.filter((e) => !E.has(e)),
        c = n.filter((e) => !u.has(e)),
        o = [];
    for (let e of _) {
        let t = s[e] ?? { id: e, name: e };
        o.push(new D.QO(p.gGk.AVAILABLE_TAG_ADD, null, t));
    }
    for (let e of c) {
        let t = s[e] ?? { id: e, name: e };
        o.push(new D.QO(p.gGk.AVAILABLE_TAG_DELETE, null, t));
    }
    return o.length > 0 ? o : e;
}
function ea(e) {
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
        for (let e in i) if (null == a[e]) return new D.QO(p.gGk.AVAILABLE_TAG_ADD, null, el(i[e]));
    }
    if (l.length > r.length) {
        for (let e in a) if (null == i[e]) return new D.QO(p.gGk.AVAILABLE_TAG_DELETE, null, el(a[e]));
    }
    for (let e in a) {
        let t = a[e],
            n = i[e];
        if (n?.name !== t.name || n?.emoji_id !== t.emoji_id || n?.emoji_name !== t.emoji_name)
            return new D.QO(p.gGk.AVAILABLE_TAG_EDIT, el(t), el(n));
    }
    return e;
}
function ei(e, t, n) {
    let l = e.newValue,
        r = e.oldValue;
    return (
        null != e.newValue && ((l = t(e.newValue)), null != n && null != l && (l = n(l))),
        null != e.oldValue && ((r = t(e.oldValue)), null != n && null != r && (r = n(r))),
        new D.QO(e.key, r || e.oldValue, l || e.newValue)
    );
}
function es(e, t, n, l, r) {
    let a = null,
        i = n((r = r ?? e.targetId));
    if ((null != i && null != l && (a = l(i)), null == a)) {
        let t = f.A.deletedTargets[e.targetType];
        null != t && null != t[r] && (a = t[r]);
    }
    if (null == a && null != e.changes) {
        let n = e.changes.find((e) => e.key === t);
        null != n && (a = n.newValue || n.oldValue);
    }
    return a ?? r;
}
function eE(e, t, n) {
    let l = e,
        r = t(e);
    return null != r && null != n && (l = n(r)), l;
}
function eu(e, t) {
    return (n) => (null == n.oldValue ? e : t);
}
function e_(e, t) {
    return (n) => (null == n.newValue ? e : t);
}
function ec(e, t, n, l) {
    return (r) => (null != r.newValue && null != r.oldValue ? e : null != r.newValue ? t : null != r.oldValue ? n : l);
}
function eo(e, t) {
    return (n) => (n.newValue ? e : t);
}
function eA(e) {
    return (t) => e[t.newValue];
}
function ed(e, t) {
    return (n) => e[n.newValue] ?? t;
}
