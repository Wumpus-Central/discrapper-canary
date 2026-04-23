n.r(t),
    n.d(t, {
        ACTION_FILTER_ITEMS: () => H,
        checkChangesToRender: () => V,
        findChangeByKey: () => w,
        getChangeStrings: () => y,
        getChangeTitle: () => J,
        getSimpleAuditLogChangeDetails: () => Q,
        getSimpleAuditLogTitleContextFromChange: () => z,
        getSimpleAuditLogTitleFromChange: () => Y,
        getStringForAddedChannelFlag: () => Z,
        getStringForPermission: () => $,
        getStringForRemovedChannelFlag: () => q,
        shouldNotRenderChangeDetail: () => B,
        transformAppliedForumTagChange: () => el,
        transformAvailableForumTagChange: () => ea,
        transformLogs: () => ee,
    }),
    n(321073);
var l = n(824120),
    a = n.n(l),
    r = n(989349),
    i = n.n(r),
    s = n(794174),
    E = n(821418),
    _ = n(136722),
    u = n(317097),
    o = n(665260),
    c = n(499979),
    d = n(155718),
    A = n(47167),
    g = n(626584),
    T = n(508675),
    I = n(627794),
    N = n(591552),
    G = n(701785),
    m = n(446600),
    O = n(679382),
    S = n(411153),
    R = n(734057),
    D = n(317525),
    h = n(994500),
    L = n(287809),
    C = n(405269),
    M = n(735547),
    f = n(661191),
    x = n(523599),
    U = n(652215),
    p = n(746080),
    b = n(411335),
    F = n(988794),
    k = n(985018);
let P = new g.A("AuditLogUtils"),
    j = [c.pJ.DAYS, c.pJ.HOURS, c.pJ.MINUTES, c.pJ.SECONDS],
    v = () => ({ [U.gGk.REASON]: () => k.t["2IW3C5"] });
function y(e) {
    switch (e.targetType) {
        case U.GaG.GUILD:
            return {
                [U.gGk.NAME]: () => k.t.CkDiNH,
                [U.gGk.DESCRIPTION]: e_(k.t.RP3Ey3, k.t.QAVj1Y),
                [U.gGk.ICON_HASH]: () => k.t.iLZ8Q9,
                [U.gGk.SPLASH_HASH]: () => k.t["4VV6dn"],
                [U.gGk.DISCOVERY_SPLASH_HASH]: () => k.t["2pds6p"],
                [U.gGk.BANNER_HASH]: e_(k.t.Cxq4zO, k.t["H7eE/9"]),
                [U.gGk.OWNER_ID]: () => k.t["8ltsLT"],
                [U.gGk.REGION]: () => k.t.X9r5Kf,
                [U.gGk.PREFERRED_LOCALE]: () => k.t.UnXuDS,
                [U.gGk.AFK_CHANNEL_ID]: e_(k.t.ClBuA4, k.t["ms+xtL"]),
                [U.gGk.AFK_TIMEOUT]: () => k.t.q21fHa,
                [U.gGk.SYSTEM_CHANNEL_ID]: e_(k.t.H1VXaa, k.t.XhtmxJ),
                [U.gGk.RULES_CHANNEL_ID]: e_(k.t.OI6MG2, k.t.lik3tI),
                [U.gGk.PUBLIC_UPDATES_CHANNEL_ID]: e_(k.t.YxBKrY, k.t.Ehsnij),
                [U.gGk.MFA_LEVEL]: ec({ [U.EkJ.NONE]: k.t.voaCCQ, [U.EkJ.ELEVATED]: k.t.pRNVwz }),
                [U.gGk.WIDGET_ENABLED]: eo(k.t.ADIty8, k.t.nf58VY),
                [U.gGk.WIDGET_CHANNEL_ID]: e_(k.t["6SBsDc"], k.t.deQ5wO),
                [U.gGk.VERIFICATION_LEVEL]: ec({
                    [U.PvD.NONE]: k.t.W27rsc,
                    [U.PvD.LOW]: k.t["V8P+Pw"],
                    [U.PvD.MEDIUM]: k.t.ERQFau,
                    [U.PvD.HIGH]: k.t["83fN0j"],
                    [U.PvD.VERY_HIGH]: k.t.PnkQJE,
                }),
                [U.gGk.DEFAULT_MESSAGE_NOTIFICATIONS]: ec({
                    [U.orn.ALL_MESSAGES]: k.t.LDi76A,
                    [U.orn.ONLY_MENTIONS]: k.t["6K83ba"],
                }),
                [U.gGk.VANITY_URL_CODE]: e_(k.t.Zplsov, k.t.u6cArh),
                [U.gGk.EXPLICIT_CONTENT_FILTER]: ec({
                    [U.gh6.DISABLED]: k.t.fmOeL3,
                    [U.gh6.MEMBERS_WITHOUT_ROLES]: k.t["4FghYw"],
                    [U.gh6.ALL_MEMBERS]: k.t.olyrSm,
                }),
                [U.gGk.PREMIUM_PROGRESS_BAR_ENABLED]: eo(k.t.rBT0sn, k.t["gc+te5"]),
                [U.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => k.t.YbouFH,
                [U.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => k.t.g3DMjB,
                [U.gGk.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => k.t["+fQAel"],
                [U.gGk.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => k.t.E1fc4v,
                [U.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => k.t.XbwtSA,
                ...v(),
            };
        case U.GaG.CHANNEL:
        case U.GaG.CHANNEL_OVERWRITE:
            return {
                [U.gGk.NAME]: eE(k.t.f8Rh0U, k.t.ebD4Qp),
                [U.gGk.POSITION]: eE(k.t.isS8te, k.t.t5uBis),
                [U.gGk.TOPIC]: eu(k.t.esQcxn, k.t["m+veAn"], k.t["ws/1FA"]),
                [U.gGk.BITRATE]: eE(k.t.fw81ak, k.t.MFNlgZ),
                [U.gGk.RTC_REGION_OVERRIDE]: eu(k.t["6kajxx"], k.t.eGOlmU, k.t["0JMZdz"]),
                [U.gGk.USER_LIMIT]: eE(k.t.wk5t7p, k.t.XgjCEh),
                [U.gGk.RATE_LIMIT_PER_USER]: eE(k.t["7lirhF"], k.t.j4CCJR),
                [U.gGk.PERMISSIONS_RESET]: () => k.t["+vSBFY"],
                [U.gGk.PERMISSIONS_GRANTED]: () => k.t.EKLJv8,
                [U.gGk.PERMISSIONS_DENIED]: () => k.t.U3rO5X,
                [U.gGk.REASON]: () => k.t["2IW3C5"],
                [U.gGk.NSFW]: eo(k.t.H8Ri2Y, k.t.WW6cJw),
                [U.gGk.TYPE]: eE(k.t.Vn5zn2, k.t.aq4uWI),
                [U.gGk.VIDEO_QUALITY_MODE]: eE(k.t.e68fAU, k.t.djbES0),
                [U.gGk.DEFAULT_AUTO_ARCHIVE_DURATION]: eE(k.t.nYz2mg, k.t.oczvRI),
                [U.gGk.FLAGS]: () => k.t.ImCQko,
                [U.gGk.AVAILABLE_TAG_ADD]: () => k.t.H86QQU,
                [U.gGk.AVAILABLE_TAG_EDIT]: () => k.t.YtUzls,
                [U.gGk.AVAILABLE_TAG_DELETE]: () => k.t["8QOseg"],
                [U.gGk.LINKED_LOBBY]: e_(k.t["+/3TkD"], k.t["5kDYS3"]),
            };
        case U.GaG.USER:
            return {
                [U.gGk.NICK]: eu(k.t.qXDsHv, k.t["m+qury"], k.t.DvLvjF),
                [U.gGk.DEAF]: eo(k.t.mArLlW, k.t.ddvVYG),
                [U.gGk.MUTE]: eo(k.t["bxs/lS"], k.t.FjecQM),
                [U.gGk.ROLES_REMOVE]: () => k.t["+2SDWV"],
                [U.gGk.ROLES_ADD]: () => k.t["B3/3IJ"],
                [U.gGk.PRUNE_DELETE_DAYS]: () => k.t["+Cvc+D"],
                [U.gGk.COMMUNICATION_DISABLED_UNTIL]: eu(k.t.LXTQr5, k.t.LXTQr5, k.t.ULSdnE),
                [U.gGk.BYPASSES_VERIFICATION]: eo(k.t.NBPBui, k.t.zATost),
                [U.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => k.t.YbouFH,
                ...v(),
            };
        case U.GaG.ROLE:
            return {
                [U.gGk.NAME]: eE(k.t.QBmlaD, k.t["Lfs4r+"]),
                [U.gGk.DESCRIPTION]: eE(k.t.XeYKWJ, k.t.PSfeIj),
                [U.gGk.PERMISSIONS_GRANTED]: () => k.t["9i/DvE"],
                [U.gGk.PERMISSIONS_DENIED]: () => k.t.pa1ZVh,
                [U.gGk.COLOR]: ed({ "#000000": k.t.TK6E1H }, k.t["2FQFiw"]),
                [U.gGk.COLORS]: (e) => (null == e.newValue.secondary_color ? k.t.U44ttm : k.t["WnSwL/"]),
                [U.gGk.HOIST]: eo(k.t.gWfe24, k.t["+tb8kN"]),
                [U.gGk.MENTIONABLE]: eo(k.t.LL8VFF, k.t.Z7xzmC),
                [U.gGk.ICON_HASH]: () => k.t["iEE79/"],
                [U.gGk.UNICODE_EMOJI]: () => k.t.KiLMM0,
                ...v(),
            };
        case U.GaG.ONBOARDING_PROMPT:
            return {
                ...v(),
                [U.gGk.TITLE]: eE(k.t["sNpuy/"], k.t["3Ukc/g"]),
                [U.gGk.DESCRIPTION]: eE(k.t.PP1q0x, k.t.z7pYLg),
                [U.gGk.OPTIONS]: () => k.t["3G5C9+"],
                [U.gGk.SINGLE_SELECT]: eo(k.t.v4WnR3, k.t["6Qg3uC"]),
                [U.gGk.REQUIRED]: eo(k.t["0MPAM6"], k.t.pwsXir),
            };
        case U.GaG.GUILD_ONBOARDING:
            return {
                ...v(),
                [U.gGk.DEFAULT_CHANNEL_IDS]: () => k.t["8M+D2s"],
                [U.gGk.ENABLE_DEFAULT_CHANNELS]: eo(k.t["EYd/ls"], k.t["36OZeQ"]),
                [U.gGk.ENABLE_ONBOARDING_PROMPTS]: eo(k.t.V3u8PV, k.t["r66lc/"]),
                [U.gGk.ENABLED]: eo(k.t.SODVIs, k.t.u8HY5U),
            };
        case U.GaG.HOME_SETTINGS:
            return {
                ...v(),
                [U.gGk.WELCOME_MESSAGE]: () => k.t.dKQ1xd,
                [U.gGk.NEW_MEMBER_ACTIONS]: () => k.t.jDUIno,
                [U.gGk.RESOURCE_CHANNELS]: () => k.t.SIX0mr,
            };
        case U.GaG.INVITE:
            return {
                [U.gGk.CODE]: () => k.t.rrRHgb,
                [U.gGk.CHANNEL_ID]: () => k.t.Q1vd5q,
                [U.gGk.MAX_USES]: ed({ 0: k.t.Yx8LNm }, k.t["3ygnwU"]),
                [U.gGk.MAX_AGE]: ed({ [k.intl.string(k.t.PqEzn8)]: k.t.uWrLvw }, k.t["Q+5kcO"]),
                [U.gGk.TEMPORARY]: eo(k.t.MWp6H7, k.t.omiqTH),
                [U.gGk.FLAGS]: ec({ [E.Q.IS_GUEST_INVITE]: k.t.XYZMbL }),
                [U.gGk.ROLE_IDS]: () => k.t.gb1Owj,
                ...v(),
            };
        case U.GaG.WEBHOOK:
            return {
                [U.gGk.CHANNEL_ID]: eE(k.t.jhPprR, k.t.ar4qYO),
                [U.gGk.NAME]: eE(k.t.ZVGrzU, k.t.tywdZR),
                [U.gGk.AVATAR_HASH]: () => k.t.KB52Uj,
                [U.gGk.REASON]: () => k.t["2IW3C5"],
            };
        case U.GaG.EMOJI:
            return { [U.gGk.NAME]: eE(k.t.ahU1o5, k.t["wxs+vZ"]), ...v() };
        case U.GaG.STICKER:
            return {
                [U.gGk.NAME]: eE(k.t.cdl0Yo, k.t.o3W2ly),
                [U.gGk.TAGS]: eE(k.t["zwL+S2"], k.t["VYfKA+"]),
                [U.gGk.DESCRIPTION]: eE(k.t.XeYKWJ, k.t.PSfeIj),
                ...v(),
            };
        case U.GaG.INTEGRATION:
            return {
                [U.gGk.ENABLE_EMOTICONS]: eo(k.t.FI0m5x, k.t.olpKC6),
                [U.gGk.EXPIRE_BEHAVIOR]: ec({ 0: k.t["1Bb1+u"], 1: k.t.vjlW6m }),
                [U.gGk.EXPIRE_GRACE_PERIOD]: () => k.t.iovXMa,
                ...v(),
            };
        case U.GaG.STAGE_INSTANCE:
            return {
                [U.gGk.TOPIC]: eE(k.t["m+veAn"], k.t.esQcxn),
                [U.gGk.PRIVACY_LEVEL]: ec({ [F.dD.GUILD_ONLY]: k.t["EC+CDt"], [F.dD.PUBLIC]: k.t["pK/WG0"] }),
                ...v(),
            };
        case U.GaG.GUILD_SCHEDULED_EVENT:
            return {
                [U.gGk.NAME]: () => k.t["21EXHW"],
                [U.gGk.DESCRIPTION]: () => k.t.Vm1ofw,
                [U.gGk.PRIVACY_LEVEL]: ec({ [F.dD.GUILD_ONLY]: k.t["EC+CDt"], [F.dD.PUBLIC]: k.t["pK/WG0"] }),
                [U.gGk.STATUS]: ec({
                    [F.XG.SCHEDULED]: k.t.hXKDgq,
                    [F.XG.ACTIVE]: k.t.lRX1nz,
                    [F.XG.COMPLETED]: k.t["/eFIhq"],
                    [F.XG.CANCELED]: k.t.NWIYhj,
                }),
                [U.gGk.ENTITY_TYPE]: ec({
                    [F.Ps.NONE]: k.t["6sO3Ss"],
                    [F.Ps.STAGE_INSTANCE]: k.t["Wo+s1y"],
                    [F.Ps.VOICE]: k.t.XCVaIL,
                    [F.Ps.EXTERNAL]: k.t.IvhAj2,
                }),
                [U.gGk.CHANNEL_ID]: e_(k.t.yJBIcX, k.t["+PqSsi"]),
                [U.gGk.LOCATION]: e_(k.t.GaMBHy, k.t.PsICk0),
                [U.gGk.IMAGE_HASH]: e_(k.t.S3vcRK, k.t.KQu47I),
                ...v(),
            };
        case U.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
            return {
                [U.gGk.SCHEDULED_START_TIME]: e_(k.t.zMIYVg, k.t.fzF8Gd),
                [U.gGk.SCHEDULED_END_TIME]: e_(k.t.vONSQA, k.t.IlIti3),
                [U.gGk.IS_CANCELED]: (e) => {
                    if (null != e.oldValue || !0 === e.newValue) {
                        if (!e.oldValue && e.newValue) return k.t["7RkicW"];
                        else if (e.oldValue && !e.newValue) return k.t.dRNTWW;
                    }
                },
                ...v(),
            };
        case U.GaG.THREAD:
            return {
                [U.gGk.NAME]: eE(k.t.tUKRzX, k.t.kPCHON),
                [U.gGk.ARCHIVED]: eo(k.t.jDi9FK, k.t.F6dvbT),
                [U.gGk.LOCKED]: eo(k.t.JSy1QW, k.t.C7Jgo8),
                [U.gGk.INVITABLE]: eo(k.t.dxNUs9, k.t.biJvYG),
                [U.gGk.AUTO_ARCHIVE_DURATION]: eE(k.t.LuaG3y, k.t["18d9qr"]),
                [U.gGk.RATE_LIMIT_PER_USER]: eE(k.t["7lirhF"], k.t.j4CCJR),
                [U.gGk.FLAGS]: () => k.t.sSAQtj,
                [U.gGk.AVAILABLE_TAG_ADD]: () => k.t.H86QQU,
                [U.gGk.AVAILABLE_TAG_DELETE]: () => k.t["8QOseg"],
                ...v(),
            };
        case U.GaG.APPLICATION_COMMAND:
            var t;
            let n;
            return (
                (t = e.changes),
                (n = { ...v() }),
                t?.forEach((e) => {
                    e.newValue
                        ? e.newValue.permission
                            ? (n[e.key] = () => k.t["JH+89C"])
                            : (n[e.key] = () => k.t.HUrFDu)
                        : (n[e.key] = () => k.t.vynxnV);
                }),
                n
            );
        case U.GaG.AUTO_MODERATION_RULE:
            return {
                [U.gGk.NAME]: () => k.t.XwxAJT,
                [U.gGk.AUTO_MODERATION_TRIGGER_TYPE]: () => k.t.fx0pyl,
                [U.gGk.AUTO_MODERATION_EVENT_TYPE]: () => k.t["46Y+L5"],
                [U.gGk.AUTO_MODERATION_ACTIONS]: () => k.t["8efxfv"],
                [U.gGk.AUTO_MODERATION_ENABLED]: (e) => (!0 === (e.newValue ?? e.oldValue) ? k.t.fCmxC2 : k.t.Wrg9Jn),
                [U.gGk.AUTO_MODERATION_EXEMPT_ROLES]: () => k.t.TRb7Nx,
                [U.gGk.AUTO_MODERATION_EXEMPT_CHANNELS]: () => k.t.mzitLE,
                [U.gGk.AUTO_MODERATION_TRIGGER_METADATA]: () => k.t["h/lM65"],
                [U.gGk.AUTO_MODERATION_ADD_KEYWORDS]: () => k.t["9V2yaC"],
                [U.gGk.AUTO_MODERATION_REMOVE_KEYWORDS]: () => k.t["4Qe9ny"],
                [U.gGk.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => k.t.GyZtxp,
                [U.gGk.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => k.t.OQDadc,
                [U.gGk.AUTO_MODERATION_ADD_ALLOW_LIST]: () => k.t["FvvR+K"],
                [U.gGk.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => k.t.p5nSvy,
                ...v(),
            };
        case U.GaG.GUILD_SOUNDBOARD:
            return {
                [U.gGk.NAME]: eE(k.t.VOtRSO, k.t.OK7B8E),
                [U.gGk.VOLUME]: eE(k.t.igrDB9, k.t.L5lDFJ),
                [U.gGk.EMOJI_NAME]: eu(k.t.IIanaY, k.t["z4w4U/"], k.t.V8TfyU),
                [U.gGk.EMOJI_ID]: eu(k.t.ainxMB, k.t["2NPsYu"], k.t["8crtns"]),
                ...v(),
            };
        case U.GaG.VOICE_CHANNEL_STATUS:
            return { [U.gGk.STATUS]: () => k.t.HyCSnI, ...v() };
        case U.GaG.GUILD_MEMBER_VERIFICATION:
            return {
                [U.gGk.VERIFICATION_ENABLED]: (e) => (!0 === e.newValue ? k.t.fnkzDY : k.t.WYT6ka),
                [U.gGk.MANUAL_APPROVAL_ENABLED]: (e) => (!0 === e.newValue ? k.t.jzSvVd : k.t.WxyOtj),
                ...v(),
            };
        case U.GaG.GUILD_PROFILE:
            return {
                [U.gGk.DESCRIPTION]: () => k.t.nsUZKY,
                [U.gGk.BRAND_COLOR_PRIMARY]: () => k.t.qe9mgN,
                [U.gGk.CUSTOM_BANNER_HASH]: () => k.t["04b5KC"],
                [U.gGk.TRAITS]: () => k.t.dEy9WO,
                [U.gGk.GAME_APPLICATION_IDS]: () => k.t["8BOT3x"],
                [U.gGk.VISIBILITY]: () => k.t.bCl1Ep,
                [U.gGk.SERVER_TAG]: e_(k.t.ix1dnX, k.t["4LKpKb"]),
            };
        default:
            return v();
    }
}
let X = {
    [U.GaG.CHANNEL]: { [U.gGk.ID]: !0, [U.gGk.PERMISSION_OVERWRITES]: !0 },
    [U.GaG.CHANNEL_OVERWRITE]: { [U.gGk.TYPE]: !0, [U.gGk.ID]: !0, [U.gGk.PERMISSION_OVERWRITES]: !0 },
    [U.GaG.INVITE]: { [U.gGk.INVITER_ID]: !0, [U.gGk.USES]: !0 },
    [U.GaG.WEBHOOK]: { [U.gGk.TYPE]: !0, [U.gGk.APPLICATION_ID]: !0 },
    [U.GaG.INTEGRATION]: { [U.gGk.TYPE]: !0 },
    [U.GaG.THREAD]: { [U.gGk.ID]: !0, [U.gGk.TYPE]: !0 },
    [U.GaG.STICKER]: {
        [U.gGk.ID]: !0,
        [U.gGk.TYPE]: !0,
        [U.gGk.ASSET]: !0,
        [U.gGk.FORMAT_TYPE]: !0,
        [U.gGk.AVAILABLE]: !0,
        [U.gGk.GUILD_ID]: !0,
    },
    [U.GaG.GUILD_HOME]: { [U.gGk.ENTITY_TYPE]: !0 },
    [U.GaG.GUILD_ONBOARDING]: { [U.gGk.PROMPTS]: !0 },
    [U.GaG.GUILD_SOUNDBOARD]: { [U.gGk.ID]: !0, [U.gGk.SOUND_ID]: !0 },
};
function B(e, t) {
    if (
        e.actionType === U.RWi.DELETE &&
        e.action !== U.F_X.MEMBER_BAN_ADD &&
        e.action !== U.F_X.MEMBER_KICK &&
        e.action !== U.F_X.MEMBER_PRUNE
    )
        return t.key !== U.gGk.REASON;
    let n = X[e.targetType];
    return null != n && !0 === n[t.key];
}
function V(e) {
    let { changes: t } = e;
    return null != t && t.some((t) => !B(e, t));
}
let H = () => [
    { value: U.F_X.ALL, label: k.intl.string(k.t.QxEVcv), valueLabel: k.intl.string(k.t.an9Ry3) },
    { value: U.F_X.GUILD_UPDATE, label: k.intl.string(k.t["5INZa3"]) },
    { value: U.F_X.CHANNEL_CREATE, label: k.intl.string(k.t["2uh4vJ"]) },
    { value: U.F_X.CHANNEL_UPDATE, label: k.intl.string(k.t.mGsBLV) },
    { value: U.F_X.CHANNEL_DELETE, label: k.intl.string(k.t.hCHzAr) },
    { value: U.F_X.CHANNEL_OVERWRITE_CREATE, label: k.intl.string(k.t["8TnAMP"]) },
    { value: U.F_X.CHANNEL_OVERWRITE_UPDATE, label: k.intl.string(k.t.Jqx0Bi) },
    { value: U.F_X.CHANNEL_OVERWRITE_DELETE, label: k.intl.string(k.t.gBXOr4) },
    { value: U.F_X.MEMBER_KICK, label: k.intl.string(k.t["Q1/hN8"]) },
    { value: U.F_X.MEMBER_PRUNE, label: k.intl.string(k.t.tOTTja) },
    { value: U.F_X.MEMBER_BAN_ADD, label: k.intl.string(k.t["NfPn+e"]) },
    { value: U.F_X.MEMBER_BAN_REMOVE, label: k.intl.string(k.t.XCsGfI) },
    { value: U.F_X.MEMBER_UPDATE, label: k.intl.string(k.t["F/jmNJ"]) },
    { value: U.F_X.MEMBER_ROLE_UPDATE, label: k.intl.string(k.t.zAveSI) },
    { value: U.F_X.MEMBER_MOVE, label: k.intl.string(k.t.QshteR) },
    { value: U.F_X.MEMBER_DISCONNECT, label: k.intl.string(k.t.Z45os7) },
    { value: U.F_X.BOT_ADD, label: k.intl.string(k.t.vuH24Z) },
    { value: U.F_X.THREAD_CREATE, label: k.intl.string(k.t["+zl0DG"]) },
    { value: U.F_X.THREAD_UPDATE, label: k.intl.string(k.t.rbIry3) },
    { value: U.F_X.THREAD_DELETE, label: k.intl.string(k.t.hFjNEA) },
    { value: U.F_X.ROLE_CREATE, label: k.intl.string(k.t.AbxKtv) },
    { value: U.F_X.ROLE_UPDATE, label: k.intl.string(k.t.t3Z6sU) },
    { value: U.F_X.ROLE_DELETE, label: k.intl.string(k.t.YsFpa4) },
    { value: U.F_X.ONBOARDING_PROMPT_CREATE, label: k.intl.string(k.t.ZV9tqc) },
    { value: U.F_X.ONBOARDING_PROMPT_UPDATE, label: k.intl.string(k.t.PcOdvX) },
    { value: U.F_X.ONBOARDING_PROMPT_DELETE, label: k.intl.string(k.t["+r33Na"]) },
    { value: U.F_X.ONBOARDING_CREATE, label: k.intl.string(k.t.uDADde) },
    { value: U.F_X.ONBOARDING_UPDATE, label: k.intl.string(k.t.J1H1wg) },
    { value: U.F_X.HOME_SETTINGS_CREATE, label: k.intl.string(k.t.Di4cvI) },
    { value: U.F_X.HOME_SETTINGS_UPDATE, label: k.intl.string(k.t.tzyrJH) },
    { value: U.F_X.INVITE_CREATE, label: k.intl.string(k.t["0BNJdX"]) },
    { value: U.F_X.INVITE_UPDATE, label: k.intl.string(k.t["o++obV"]) },
    { value: U.F_X.INVITE_DELETE, label: k.intl.string(k.t.iP40Az) },
    { value: U.F_X.WEBHOOK_CREATE, label: k.intl.string(k.t["tBF4+S"]) },
    { value: U.F_X.WEBHOOK_UPDATE, label: k.intl.string(k.t.eV3McO) },
    { value: U.F_X.WEBHOOK_DELETE, label: k.intl.string(k.t.AAL3K1) },
    { value: U.F_X.EMOJI_CREATE, label: k.intl.string(k.t.RuWm0V) },
    { value: U.F_X.EMOJI_UPDATE, label: k.intl.string(k.t.WzdUY7) },
    { value: U.F_X.EMOJI_DELETE, label: k.intl.string(k.t.c3dK2L) },
    { value: U.F_X.MESSAGE_DELETE, label: k.intl.string(k.t.daTfXh) },
    { value: U.F_X.MESSAGE_BULK_DELETE, label: k.intl.string(k.t.nrBxeh) },
    { value: U.F_X.MESSAGE_PIN, label: k.intl.string(k.t.MUldyN) },
    { value: U.F_X.MESSAGE_UNPIN, label: k.intl.string(k.t.n4zKhA) },
    { value: U.F_X.INTEGRATION_CREATE, label: k.intl.string(k.t.deNm8x) },
    { value: U.F_X.INTEGRATION_UPDATE, label: k.intl.string(k.t.HT7Sfg) },
    { value: U.F_X.INTEGRATION_DELETE, label: k.intl.string(k.t["+kJ09q"]) },
    { value: U.F_X.STICKER_CREATE, label: k.intl.string(k.t["3DzNjU"]) },
    { value: U.F_X.STICKER_UPDATE, label: k.intl.string(k.t.tdhW5b) },
    { value: U.F_X.STICKER_DELETE, label: k.intl.string(k.t["+ZhGOk"]) },
    { value: U.F_X.STAGE_INSTANCE_CREATE, label: k.intl.string(k.t.sPbjA6) },
    { value: U.F_X.STAGE_INSTANCE_UPDATE, label: k.intl.string(k.t.cW9LfJ) },
    { value: U.F_X.STAGE_INSTANCE_DELETE, label: k.intl.string(k.t["U1r+yD"]) },
    { value: U.F_X.GUILD_SCHEDULED_EVENT_CREATE, label: k.intl.string(k.t.H81Zyy) },
    { value: U.F_X.GUILD_SCHEDULED_EVENT_UPDATE, label: k.intl.string(k.t["FM69l+"]) },
    { value: U.F_X.GUILD_SCHEDULED_EVENT_DELETE, label: k.intl.string(k.t.Rq28Bh) },
    { value: U.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE, label: k.intl.string(k.t.iPdFOt) },
    { value: U.F_X.AUTO_MODERATION_BLOCK_MESSAGE, label: k.intl.string(k.t.gNq5z6) },
    { value: U.F_X.AUTO_MODERATION_RULE_CREATE, label: k.intl.string(k.t.f72Zqb) },
    { value: U.F_X.AUTO_MODERATION_RULE_UPDATE, label: k.intl.string(k.t.XeqIiv) },
    { value: U.F_X.AUTO_MODERATION_RULE_DELETE, label: k.intl.string(k.t.syAApU) },
    { value: U.F_X.GUILD_HOME_FEATURE_ITEM, label: k.intl.string(k.t.lhG5KN) },
    { value: U.F_X.GUILD_HOME_REMOVE_ITEM, label: k.intl.string(k.t.lRPRwS) },
    { value: U.F_X.SOUNDBOARD_SOUND_CREATE, label: k.intl.string(k.t.yoRi5r) },
    { value: U.F_X.SOUNDBOARD_SOUND_UPDATE, label: k.intl.string(k.t.uKlG0Z) },
    { value: U.F_X.SOUNDBOARD_SOUND_DELETE, label: k.intl.string(k.t.gq0iCT) },
    { value: U.F_X.VOICE_CHANNEL_STATUS_CREATE, label: k.intl.string(k.t.rGr0YM) },
    { value: U.F_X.VOICE_CHANNEL_STATUS_DELETE, label: k.intl.string(k.t.V9PEQ4) },
];
function w(e, t) {
    return null != t.changes ? t.changes.find((t) => t.key === e) : null;
}
function W(e, t) {
    return null != t.changes ? t.changes.filter((t) => t.key === e) : [];
}
function Y(e) {
    let t = H().find((t) => t.value === e.action);
    return null != w(U.gGk.COMMUNICATION_DISABLED_UNTIL, e) ? k.intl.string(k.t.z3wbj8) : (t?.label ?? null);
}
let K = {
    [c.pJ.SECONDS]: (e) => k.intl.formatToPlainString(k.t.geSp4K, { seconds: e }),
    [c.pJ.MINUTES]: (e) => k.intl.formatToPlainString(k.t.iXLF9W, { minutes: e }),
    [c.pJ.HOURS]: (e) => k.intl.formatToPlainString(k.t.xCjYxK, { hours: e }),
    [c.pJ.DAYS]: (e) => k.intl.formatToPlainString(k.t["k2UNz+"], { days: e }),
};
function z(e) {
    let t = w(U.gGk.COMMUNICATION_DISABLED_UNTIL, e),
        n = W(U.gGk.ROLES_ADD, e).length > 0,
        l = W(U.gGk.ROLES_REMOVE, e).length > 0;
    if (null != t) {
        if (t?.newValue != null) {
            let n = new Date(t?.newValue).getTime() - f.default.extractTimestamp(e.id),
                l = Math.round(n / 1e3 / 60),
                a = (0, c.$l)(l, j);
            if (null == a.unit || null == a.time) return null;
            if (a.unit in K) {
                let e = a.unit,
                    t = a.unit === c.pJ.SECONDS ? Math.round(n / 1e3) : a.time;
                return K[e](t);
            }
        } else if (t?.oldValue != null) return k.intl.string(k.t.MA1ltr);
    } else if (n && l) return k.intl.string(k.t.RdMMew);
    else if (n) return k.intl.string(k.t["4GQqs8"]);
    else if (l) return k.intl.string(k.t["8mQ6x0"]);
    return null;
}
function Q(e) {
    let t = W(U.gGk.ROLES_ADD, e),
        n = W(U.gGk.ROLES_REMOVE, e),
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
        a = n
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
        ? k.intl.formatToPlainString(k.t.tZw1EW, { roleNamesAdded: l, roleNamesRemoved: a })
        : t.length > 0
          ? k.intl.formatToPlainString(k.t["/mTqt5"], { roleNames: l })
          : n.length > 0
            ? k.intl.formatToPlainString(k.t.Wk4pAJ, { roleNames: a })
            : null;
}
function J(e) {
    switch (e.action) {
        case U.F_X.GUILD_UPDATE:
            return k.t.LjZO31;
        case U.F_X.CHANNEL_CREATE:
            let t = null != e.changes ? e.changes.find((e) => e.key === U.gGk.TYPE) : null;
            if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
            switch (t.newValue) {
                case U.rbe.GUILD_STAGE_VOICE:
                    return k.t["OKp4+o"];
                case U.rbe.GUILD_VOICE:
                    return k.t.NPOy4G;
                case U.rbe.GUILD_CATEGORY:
                    return k.t.T3KIjz;
                default:
                    return k.t.wrYNG2;
            }
        case U.F_X.CHANNEL_UPDATE:
            return k.t.nTYk6B;
        case U.F_X.CHANNEL_DELETE:
            return k.t.ynfvkm;
        case U.F_X.CHANNEL_OVERWRITE_CREATE:
            return k.t.l5Cu1a;
        case U.F_X.CHANNEL_OVERWRITE_UPDATE:
            return k.t.uhtbNU;
        case U.F_X.CHANNEL_OVERWRITE_DELETE:
            return k.t["HASt/3"];
        case U.F_X.MEMBER_KICK:
            return k.t.B5hDZX;
        case U.F_X.MEMBER_PRUNE:
            return k.t.qKOZTP;
        case U.F_X.MEMBER_BAN_ADD:
            return k.t["XklUm/"];
        case U.F_X.MEMBER_BAN_REMOVE:
            return k.t.o3Y6HD;
        case U.F_X.MEMBER_UPDATE:
            return k.t.pznhLN;
        case U.F_X.MEMBER_ROLE_UPDATE:
            return k.t.Vngfia;
        case U.F_X.MEMBER_MOVE:
            return k.t.Yt6NkU;
        case U.F_X.MEMBER_DISCONNECT:
            return k.t.K4eCZw;
        case U.F_X.BOT_ADD:
            return k.t.fWvX0G;
        case U.F_X.ROLE_CREATE:
            return k.t.UTLTx6;
        case U.F_X.ROLE_UPDATE:
            return k.t.NRbN18;
        case U.F_X.ROLE_DELETE:
            return k.t["4s63tb"];
        case U.F_X.INVITE_CREATE:
            return k.t.YHOXWy;
        case U.F_X.INVITE_UPDATE:
            return k.t.ja3kGS;
        case U.F_X.INVITE_DELETE:
            return k.t["3n/iWk"];
        case U.F_X.WEBHOOK_CREATE:
            return k.t.MhYhil;
        case U.F_X.WEBHOOK_UPDATE:
            return k.t["6GTlWB"];
        case U.F_X.WEBHOOK_DELETE:
            return k.t.in0VjZ;
        case U.F_X.EMOJI_CREATE:
            return k.t["7vekRO"];
        case U.F_X.EMOJI_UPDATE:
            return k.t.IsCKfh;
        case U.F_X.EMOJI_DELETE:
            return k.t.JnUaVG;
        case U.F_X.STICKER_CREATE:
            return k.t.DRZifq;
        case U.F_X.STICKER_UPDATE:
            return k.t.bhujGc;
        case U.F_X.STICKER_DELETE:
            return k.t.rGEP9U;
        case U.F_X.MESSAGE_DELETE:
            return k.t["HPkD+M"];
        case U.F_X.MESSAGE_BULK_DELETE:
            return k.t["3RIvLE"];
        case U.F_X.MESSAGE_PIN:
            return k.t.Yna7E7;
        case U.F_X.MESSAGE_UNPIN:
            return k.t.NCxXUW;
        case U.F_X.INTEGRATION_CREATE:
            return k.t.HYvCb3;
        case U.F_X.INTEGRATION_UPDATE:
            return k.t.ibCCOS;
        case U.F_X.INTEGRATION_DELETE:
            return k.t["8zScWY"];
        case U.F_X.STAGE_INSTANCE_CREATE:
            return k.t["n7x/DF"];
        case U.F_X.STAGE_INSTANCE_UPDATE:
            return k.t["0hQYU4"];
        case U.F_X.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return k.t["Oi/in9"];
            return k.t["7ZIFm9"];
        case U.F_X.GUILD_SCHEDULED_EVENT_CREATE:
            return k.t.S7k52p;
        case U.F_X.GUILD_SCHEDULED_EVENT_UPDATE:
            return k.t.ebTK11;
        case U.F_X.GUILD_SCHEDULED_EVENT_DELETE:
            return k.t["/ARPKQ"];
        case U.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case U.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return k.t["8qCI36"];
        case U.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return k.t.zYb2da;
        case U.F_X.THREAD_CREATE:
            let n = null != e.changes ? e.changes.find((e) => e.key === U.gGk.TYPE) : null;
            if (null == n) throw Error("[AuditLog] Could not find type change for thread create");
            switch (n.newValue) {
                case U.rbe.PRIVATE_THREAD:
                    return k.t.Br0y5w;
                case U.rbe.ANNOUNCEMENT_THREAD:
                    return k.t["6uaMmO"];
                default:
                    return k.t["2cxQ7G"];
            }
        case U.F_X.THREAD_UPDATE:
            return k.t.PSsy4t;
        case U.F_X.THREAD_DELETE:
            return k.t.s3Khn8;
        case U.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return k.t.uzCqBm;
        case U.F_X.AUTO_MODERATION_BLOCK_MESSAGE:
            return k.t.NqWv2K;
        case U.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL:
            if (e.options?.auto_moderation_rule_trigger_type === b.uh.USER_PROFILE.toString()) return k.t.YQsjej;
            return k.t.SD0PwJ;
        case U.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return k.t.Vk4TwX;
        case U.F_X.AUTO_MODERATION_QUARANTINE_USER:
            return k.t["/W5u5o"];
        case U.F_X.CREATOR_MONETIZATION_REQUEST_CREATED:
            return k.t.ONvWyr;
        case U.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return k.t["ryGLk+"];
        case U.F_X.AUTO_MODERATION_RULE_CREATE:
            return k.t["NKljj+"];
        case U.F_X.AUTO_MODERATION_RULE_UPDATE:
            return k.t["3wEA9u"];
        case U.F_X.AUTO_MODERATION_RULE_DELETE:
            return k.t.umua3n;
        case U.F_X.ONBOARDING_PROMPT_CREATE:
            return k.t["/8A1g2"];
        case U.F_X.ONBOARDING_PROMPT_UPDATE:
            return k.t.ArIrWI;
        case U.F_X.ONBOARDING_PROMPT_DELETE:
            return k.t.IuBTao;
        case U.F_X.ONBOARDING_CREATE:
            return k.t["wDaq3/"];
        case U.F_X.ONBOARDING_UPDATE:
            return k.t["yONu/l"];
        case U.F_X.HOME_SETTINGS_CREATE:
            return k.t.dSdCjG;
        case U.F_X.HOME_SETTINGS_UPDATE:
            return k.t.XHE8qv;
        case U.F_X.GUILD_HOME_FEATURE_ITEM:
            let l = null != e.changes ? e.changes.find((e) => e.key === U.gGk.ENTITY_TYPE) : null;
            if (null == l) return k.t["UZ+U3A"];
            switch (l.newValue) {
                case s.U.MESSAGE:
                    return k.t["PyEa+J"];
                case s.U.FORUM_POST:
                    return k.t.hCuAb1;
                default:
                    return k.t["UZ+U3A"];
            }
        case U.F_X.GUILD_HOME_REMOVE_ITEM:
            return k.t.kPReun;
        case U.F_X.SOUNDBOARD_SOUND_CREATE:
            return k.t["0PD83V"];
        case U.F_X.SOUNDBOARD_SOUND_UPDATE:
            return k.t.CM8n1w;
        case U.F_X.SOUNDBOARD_SOUND_DELETE:
            return k.t["kVz4/0"];
        case U.F_X.VOICE_CHANNEL_STATUS_CREATE:
            return k.t.MWjnU7;
        case U.F_X.VOICE_CHANNEL_STATUS_DELETE:
            return k.t.aS8Krq;
        case U.F_X.GUILD_MEMBER_VERIFICATION_UPDATE:
            return k.t["NUKUb+"];
        case U.F_X.GUILD_PROFILE_UPDATE:
            return k.t.Ed6hF1;
        case U.F_X.GUILD_MIGRATE_PIN_PERMISSION:
            return k.t["3Ne7MA"];
        case U.F_X.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION:
            return k.t["naflH+"];
        default:
            return null;
    }
}
function Z(e) {
    switch (e) {
        case p.lx.GUILD_FEED_REMOVED:
            return k.intl.string(k.t["5G8ZD4"]);
        case p.lx.ACTIVE_CHANNELS_REMOVED:
            return k.intl.string(k.t["4YLtzC"]);
        case p.lx.PINNED:
            return k.intl.string(k.t["1QLRYb"]);
    }
    return null;
}
function q(e) {
    switch (e) {
        case p.lx.GUILD_FEED_REMOVED:
            return k.intl.string(k.t.S5kuWQ);
        case p.lx.ACTIVE_CHANNELS_REMOVED:
            return k.intl.string(k.t["8qpgcz"]);
        case p.lx.PINNED:
            return k.intl.string(k.t.CMweGA);
    }
    return null;
}
function $(e, t) {
    switch (e) {
        case U.xBc.CREATE_INSTANT_INVITE:
            return k.intl.string(k.t.zJrgTG);
        case U.xBc.KICK_MEMBERS:
            return k.intl.string(k.t.pBNv6i);
        case U.xBc.BAN_MEMBERS:
            return k.intl.string(k.t.oTBA7N);
        case U.xBc.ADMINISTRATOR:
            return k.intl.string(k.t.PGvZqX);
        case U.xBc.MANAGE_CHANNELS:
            if (t.targetType === U.GaG.CHANNEL || t.targetType === U.GaG.CHANNEL_OVERWRITE)
                return k.intl.string(k.t.nAw15L);
            return k.intl.string(k.t["9qLtWs"]);
        case U.xBc.MANAGE_GUILD:
            return k.intl.string(k.t.QZRcfO);
        case U.xBc.VIEW_GUILD_ANALYTICS:
            return k.intl.string(k.t["rQJBE/"]);
        case U.xBc.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return k.intl.string(k.t["0lTLTv"]);
        case U.xBc.CHANGE_NICKNAME:
            return k.intl.string(k.t.dilOF6);
        case U.xBc.MANAGE_NICKNAMES:
            return k.intl.string(k.t["t+Ct5x"]);
        case U.xBc.MANAGE_ROLES:
            return k.intl.string(k.t["C8d+oG"]);
        case U.xBc.MANAGE_WEBHOOKS:
            return k.intl.string(k.t["/ADKmM"]);
        case U.xBc.CREATE_GUILD_EXPRESSIONS:
            return k.intl.string(k.t.HarVuP);
        case U.xBc.MANAGE_GUILD_EXPRESSIONS:
            return k.intl.string(k.t.bbuXIn);
        case U.xBc.VIEW_AUDIT_LOG:
            return k.intl.string(k.t.fZgLpA);
        case U.xBc.VIEW_CHANNEL:
            if (t.targetType === U.GaG.CHANNEL || t.targetType === U.GaG.CHANNEL_OVERWRITE)
                return k.intl.string(k.t["W/A4Qp"]);
            return k.intl.string(k.t.uV83yi);
        case U.xBc.SEND_MESSAGES:
            return k.intl.string(k.t.T32rkC);
        case U.xBc.SEND_TTS_MESSAGES:
            return k.intl.string(k.t.Mg7bku);
        case U.xBc.USE_APPLICATION_COMMANDS:
            return k.intl.string(k.t.shbR1a);
        case U.xBc.MANAGE_MESSAGES:
            return k.intl.string(k.t["6lU9xM"]);
        case U.xBc.EMBED_LINKS:
            return k.intl.string(k.t["969dEL"]);
        case U.xBc.ATTACH_FILES:
            return k.intl.string(k.t["3AS4UM"]);
        case U.xBc.READ_MESSAGE_HISTORY:
            return k.intl.string(k.t.l9ufaR);
        case U.xBc.MENTION_EVERYONE:
            return k.intl.string(k.t.Y78KGC);
        case U.xBc.USE_EXTERNAL_EMOJIS:
            return k.intl.string(k.t.BpBGZU);
        case U.xBc.USE_EXTERNAL_STICKERS:
            return k.intl.string(k.t["UeRs+b"]);
        case U.xBc.ADD_REACTIONS:
            return k.intl.string(k.t.yEoJAr);
        case U.xBc.CONNECT:
            return k.intl.string(k.t.S0W8Z5);
        case U.xBc.SPEAK:
            return k.intl.string(k.t["8w1tIR"]);
        case U.xBc.MUTE_MEMBERS:
            return k.intl.string(k.t["8EI30/"]);
        case U.xBc.DEAFEN_MEMBERS:
            return k.intl.string(k.t["9L47Fr"]);
        case U.xBc.MOVE_MEMBERS:
            return k.intl.string(k.t.YtjJPQ);
        case U.xBc.USE_VAD:
            return k.intl.string(k.t["08zAV7"]);
        case U.xBc.PRIORITY_SPEAKER:
            return k.intl.string(k.t.BVK71i);
        case U.xBc.STREAM:
            return k.intl.string(k.t.FlNoSV);
        case U.xBc.REQUEST_TO_SPEAK:
            return k.intl.string(k.t["5kicT2"]);
        case U.xBc.USE_EMBEDDED_ACTIVITIES:
            return k.intl.string(k.t.rLSGeh);
        case U.xBc.CREATE_EVENTS:
            return k.intl.string(k.t.qyjZua);
        case U.xBc.MANAGE_EVENTS:
            return k.intl.string(k.t.HIgA5a);
        case U.xBc.CREATE_PUBLIC_THREADS:
            return k.intl.string(k.t["25rKnX"]);
        case U.xBc.CREATE_PRIVATE_THREADS:
            return k.intl.string(k.t.QwbTSa);
        case U.xBc.SEND_MESSAGES_IN_THREADS:
            return k.intl.string(k.t.fTE74g);
        case U.xBc.MANAGE_THREADS:
            return k.intl.string(k.t.kEqgr7);
        case U.xBc.MODERATE_MEMBERS:
            return k.intl.string(k.t["+RL6pz"]);
        case U.xBc.SET_VOICE_CHANNEL_STATUS:
            return k.intl.string(k.t.VBwkUf);
        case U.xBc.SEND_POLLS:
            return k.intl.string(k.t.UMQ7Ww);
        case U.xBc.USE_EXTERNAL_APPS:
            return k.intl.string(k.t.TtA5rK);
        case U.xBc.PIN_MESSAGES:
            return k.intl.string(k.t.Y5BI39);
        case U.xBc.BYPASS_SLOWMODE:
            return k.intl.string(k.t.kqcjeV);
        case U.xBc.MANAGE_OFFICIAL_MESSAGES:
            return k.intl.string(k.t.Aj9ruN);
    }
    return null;
}
function ee(e, t) {
    let n = [];
    return (
        e.forEach((e) => {
            let l = (function (e, t) {
                    switch (e.targetType) {
                        case U.GaG.GUILD:
                        case U.GaG.GUILD_HOME:
                        case U.GaG.GUILD_PROFILE:
                            return t;
                        case U.GaG.CHANNEL:
                        case U.GaG.CHANNEL_OVERWRITE:
                            return ei(
                                e,
                                U.gGk.NAME,
                                (e) => R.A.getChannel(e),
                                (e) => (0, A.m1)(e, L.default, h.A, !0),
                            );
                        case U.GaG.USER:
                            return ei(
                                e,
                                U.gGk.NICK,
                                (e) => L.default.getUser(e),
                                (e) => e,
                            );
                        case U.GaG.ROLE:
                            return ei(
                                e,
                                U.gGk.NAME,
                                (e) => D.A.getRole(t.id, e),
                                (e) => e.name,
                            );
                        case U.GaG.ONBOARDING_PROMPT:
                            let n = ei(
                                e,
                                U.gGk.ID,
                                (e) => N.A.getOnboardingPrompt(e),
                                (e) => e.title,
                            );
                            return null == n || "" === n ? k.intl.string(k.t.ZNQyiR) : n;
                        case U.GaG.GUILD_ONBOARDING:
                        case U.GaG.GUILD_MEMBER_VERIFICATION:
                            return t;
                        case U.GaG.INVITE:
                            return ei(e, U.gGk.CODE, U.FXj);
                        case U.GaG.INTEGRATION:
                            return ei(
                                e,
                                U.gGk.TYPE,
                                (e) => x.A.integrations.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case U.GaG.WEBHOOK:
                            return ei(
                                e,
                                U.gGk.NAME,
                                (e) => x.A.webhooks.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case U.GaG.EMOJI:
                            return ei(
                                e,
                                U.gGk.NAME,
                                (e) => T.Ay.getGuildEmoji(t.id).find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case U.GaG.STICKER:
                            return ei(
                                e,
                                U.gGk.NAME,
                                (e) => O.A.getStickerById(e),
                                (e) => e.name,
                            );
                        case U.GaG.STAGE_INSTANCE:
                            return ei(
                                e,
                                U.gGk.TOPIC,
                                (e) => Object.values(m.A.getStageInstancesByGuild(t.id))?.find((t) => t.id === e),
                                (e) => e.topic,
                            );
                        case U.GaG.GUILD_SCHEDULED_EVENT:
                        case U.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return ei(
                                e,
                                U.gGk.NAME,
                                (e) => x.A.guildScheduledEvents.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case U.GaG.THREAD:
                            return ei(
                                e,
                                U.gGk.NAME,
                                (e) => x.A.threads.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case U.GaG.APPLICATION_COMMAND:
                            if (e.targetId === e.options.application_id) {
                                let t = x.A.integrations.find((t) => t.application?.id === e.targetId);
                                if (null != t) return t.name;
                                return e.targetId;
                            }
                            return ei(
                                e,
                                U.gGk.NAME,
                                (e) => x.A.applicationCommands.find((t) => t.id === e),
                                (e) => {
                                    let t =
                                        null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
                                    return e.type === d.kc.CHAT ? `/\u2060${t}` : t;
                                },
                            );
                        case U.GaG.AUTO_MODERATION_RULE:
                            return ei(
                                e,
                                U.gGk.NAME,
                                (e) => x.A.automodRules.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case U.GaG.GUILD_SOUNDBOARD:
                            return ei(e, U.gGk.NAME, U.FXj);
                        case U.GaG.HOME_SETTINGS:
                            return ei(
                                e,
                                U.gGk.GUILD_ID,
                                (e) => G.h.getSettings(e),
                                () => k.intl.string(k.t.VbpLyU),
                                t.id,
                            );
                        case U.GaG.VOICE_CHANNEL_STATUS:
                            return ei(
                                e,
                                U.gGk.STATUS,
                                (e) => R.A.getChannel(e),
                                (e) => (0, A.m1)(e, L.default, h.A, !0),
                            );
                        default:
                            return P.warn("Unknown targetType for log", e), null;
                    }
                })(e, t),
                r = L.default.getUser(e.userId);
            if (
                null != l ||
                [
                    U.F_X.MEMBER_PRUNE,
                    U.F_X.MEMBER_DISCONNECT,
                    U.F_X.MEMBER_MOVE,
                    U.F_X.CREATOR_MONETIZATION_REQUEST_CREATED,
                    U.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED,
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
                                    case U.AO_.USER:
                                        t.subtarget = es(
                                            e.options.id,
                                            (e) => L.default.getUser(e),
                                            (e) => e.tag,
                                        );
                                        break;
                                    case U.AO_.ROLE:
                                        t.subtarget = es(e.options.role_name, U.FXj);
                                }
                                if (
                                    (null != e.options.channel_id &&
                                        (t.channel = ei(
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
                                    let n = x.A.guildScheduledEvents.find((t) => t.id === e.targetId),
                                        l = n?.guild_scheduled_event_exceptions.find(
                                            (t) => t.event_exception_id === e.options.event_exception_id,
                                        );
                                    t.subtarget = (0, C.i$)(
                                        i()(f.default.extractTimestamp(l?.event_exception_id ?? "0")),
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
                            if (t.action === U.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let t = e.newValue || e.oldValue;
                                switch (t.type) {
                                    case U.g0g.ROLE:
                                        e.subtarget = es(
                                            t.id,
                                            (e) => D.A.getRole(n.id, e),
                                            (e) => e.name,
                                        );
                                        break;
                                    case U.g0g.USER:
                                        e.subtarget = es(
                                            t.id,
                                            (e) => L.default.getUser(e),
                                            (e) => e.tag,
                                        );
                                        break;
                                    case U.g0g.CHANNEL:
                                        t.id === a()(n.id).subtract(1).toString()
                                            ? (e.subtarget = k.intl.string(k.t.MSYhgh))
                                            : (e.subtarget = es(
                                                  t.id,
                                                  (e) => R.A.getChannel(e),
                                                  (e) => (0, A.m1)(e, L.default, h.A, !0),
                                              ));
                                }
                                return e;
                            }
                            switch (e.key) {
                                case U.gGk.OWNER_ID:
                                    return er(e, (e) => L.default.getUser(e));
                                case U.gGk.CHANNEL_ID:
                                case U.gGk.AFK_CHANNEL_ID:
                                case U.gGk.SYSTEM_CHANNEL_ID:
                                case U.gGk.RULES_CHANNEL_ID:
                                case U.gGk.PUBLIC_UPDATES_CHANNEL_ID:
                                    return er(
                                        e,
                                        (e) => R.A.getChannel(e),
                                        (e) => (0, A.m1)(e, L.default, h.A, !0),
                                    );
                                case U.gGk.AFK_TIMEOUT:
                                    return er(e, (e) => e / 60);
                                case U.gGk.BITRATE:
                                    return er(e, (e) => e / 1e3);
                                case U.gGk.COLOR:
                                    return er(e, (e) => (0, u.Hl)(e).toUpperCase());
                                case U.gGk.THEME_COLORS:
                                    return er(
                                        e,
                                        (e) => `${(0, u.Hl)(e[0]).toUpperCase()}, ${(0, u.Hl)(e[1]).toUpperCase()}`,
                                    );
                                case U.gGk.MAX_AGE:
                                    return er(e, (e) => {
                                        let t = M.Ay.getMaxAgeOptionByValue(e);
                                        return null !== t ? t.label : e;
                                    });
                                case U.gGk.PERMISSIONS: {
                                    let t = [],
                                        { added: n, removed: l } = et(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let e = new S.QO(U.gGk.PERMISSIONS_GRANTED, null, n);
                                        t.push(e);
                                    }
                                    if (l.length > 0) {
                                        let e = new S.QO(U.gGk.PERMISSIONS_DENIED, null, l);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case U.gGk.PERMISSIONS_GRANTED:
                                case U.gGk.PERMISSIONS_DENIED: {
                                    let t = [],
                                        { added: n, removed: l } = et(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let l = new S.QO(e.key, null, n);
                                        t.push(l);
                                    }
                                    if (l.length > 0) {
                                        let e = new S.QO(U.gGk.PERMISSIONS_RESET, l, l);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case U.gGk.FLAGS: {
                                    let t = [],
                                        { added: n, removed: l } = (function (e, t) {
                                            let n = "number" == typeof e ? e : 0,
                                                l = "number" == typeof t ? t : 0,
                                                a = o.VL(l, n),
                                                r = o.VL(n, l),
                                                i = [],
                                                s = [];
                                            for (let e in p.lx) {
                                                let t = p.lx[e];
                                                o.Lt(a, t) && i.push(t), o.Lt(r, t) && s.push(t);
                                            }
                                            return { added: i, removed: s };
                                        })(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let l = new S.QO(e.key, null, n);
                                        t.push(l);
                                    }
                                    if (l.length > 0) {
                                        let n = new S.QO(e.key, l, null);
                                        t.push(n);
                                    }
                                    return t;
                                }
                                case U.gGk.PREFERRED_LOCALE:
                                    return er(e, (e) => {
                                        let t = (0, k.getAvailableLocales)().find((t) => t.value === e);
                                        return null != t ? t.name : null;
                                    });
                                case U.gGk.VIDEO_QUALITY_MODE:
                                    return er(e, (e) =>
                                        e === U.K3c.FULL ? k.intl.string(k.t["7jOoJE"]) : k.intl.string(k.t.jjKYpu),
                                    );
                                case U.gGk.SYSTEM_CHANNEL_FLAGS:
                                    let l, r;
                                    return (
                                        (l = {
                                            [U.ogj.SUPPRESS_JOIN_NOTIFICATIONS]:
                                                U.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                            [U.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS]:
                                                U.gGk.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                            [U.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]:
                                                U.gGk.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                            [U.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES]:
                                                U.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES,
                                        }),
                                        (r = []),
                                        Object.values(U.ogj).forEach((t) => {
                                            let n = (e.oldValue & t) === t,
                                                a = (e.newValue & t) === t;
                                            if (n === a) return;
                                            let i = new S.QO(l[t], !n, !a);
                                            r.push(i);
                                        }),
                                        r
                                    );
                                case U.gGk.AUTO_MODERATION_ACTIONS:
                                    if (t.targetType === U.GaG.AUTO_MODERATION_RULE)
                                        return er(
                                            e,
                                            (e) => e.map((e) => e.type),
                                            (e) => e.map(I.PZ).join(", "),
                                        );
                                    break;
                                case U.gGk.AUTO_MODERATION_EVENT_TYPE:
                                    if (t.targetType === U.GaG.AUTO_MODERATION_RULE) return er(e, I.X3);
                                    break;
                                case U.gGk.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (t.targetType === U.GaG.AUTO_MODERATION_RULE) return er(e, I.nl);
                                    break;
                                case U.gGk.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (t.targetType === U.GaG.AUTO_MODERATION_RULE)
                                        return er(e, (e) =>
                                            null != e && "object" == typeof e
                                                ? null != e.keyword_filter && Array.isArray(e.keyword_filter)
                                                    ? k.intl.formatToMarkdownString(k.t.y91UXV, {
                                                          newValue: e.keyword_filter.map((e) => `'${e}'`).join(", "),
                                                      })
                                                    : JSON.stringify(e)
                                                : e,
                                        );
                                    break;
                                case U.gGk.AUTO_MODERATION_ADD_KEYWORDS:
                                case U.gGk.AUTO_MODERATION_REMOVE_KEYWORDS:
                                case U.gGk.AUTO_MODERATION_ADD_REGEX_PATTERNS:
                                case U.gGk.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
                                case U.gGk.AUTO_MODERATION_ADD_ALLOW_LIST:
                                case U.gGk.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                                    if (t.targetType === U.GaG.AUTO_MODERATION_RULE)
                                        return er(e, (e) =>
                                            null != e && Array.isArray(e)
                                                ? e.map((e) => `'${e}'`).join(", ")
                                                : JSON.stringify(e),
                                        );
                                    break;
                                case U.gGk.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (t.targetType === U.GaG.AUTO_MODERATION_RULE)
                                        return er(
                                            e,
                                            (e) =>
                                                e
                                                    .map(R.A.getChannel)
                                                    .filter((e) => null != e)
                                                    .map((e) => (0, A.m1)(e, L.default, h.A, !0)),
                                            (e) =>
                                                null != e && e.length > 0 ? e.join(", ") : k.intl.string(k.t["K/EdV8"]),
                                        );
                                    break;
                                case U.gGk.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (t.targetType === U.GaG.AUTO_MODERATION_RULE)
                                        return er(
                                            e,
                                            (e) =>
                                                e
                                                    .map((e) => D.A.getRole(n.id, e))
                                                    .filter((e) => null != e)
                                                    .map((e) => e.name),
                                            (e) =>
                                                null != e && e.length > 0 ? e.join(", ") : k.intl.string(k.t["K/EdV8"]),
                                        );
                                    break;
                                case U.gGk.ROLE_IDS:
                                    if (t.targetType === U.GaG.INVITE)
                                        return er(e, (e) =>
                                            e
                                                .map((e) => D.A.getRole(n.id, e))
                                                .filter((e) => null != e)
                                                .map((e) => ({ id: e.id, name: e.name })),
                                        );
                                    break;
                                case U.gGk.AVAILABLE_TAGS:
                                    return ea(e);
                                case U.gGk.APPLIED_TAGS:
                                    return el(e, t);
                                case U.gGk.SCHEDULED_START_TIME:
                                case U.gGk.SCHEDULED_END_TIME:
                                    return er(e, (e) => (0, C.i$)(i()(new Date(e)), "LLLL"));
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
function et(e, t) {
    let n = _.iu("string" == typeof e ? e : 0),
        l = _.iu("string" == typeof t ? t : 0),
        a = _.TF(l, n),
        r = _.TF(n, l),
        i = [],
        s = [];
    for (let e in U.xBc) {
        let t = U.xBc[e];
        _.zy(a, t) && i.push(t), _.zy(r, t) && s.push(t);
    }
    return { added: i, removed: s };
}
function en(e) {
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
function el(e, t) {
    let n = Array.isArray(e.oldValue) ? e.oldValue : [],
        l = Array.isArray(e.newValue) ? e.newValue : [],
        a = R.A.getChannel(t.targetId),
        r = a?.parent_id != null ? R.A.getChannel(a.parent_id) : null,
        i = r?.availableTags ?? [],
        s = {};
    i.forEach((e) => {
        s[e.id] = { name: e.name, emojiId: e.emojiId, emojiName: e.emojiName };
    });
    let E = new Set(n),
        _ = new Set(l),
        u = l.filter((e) => !E.has(e)),
        o = n.filter((e) => !_.has(e)),
        c = [];
    for (let e of u) {
        let t = s[e] ?? { id: e, name: e };
        c.push(new S.QO(U.gGk.AVAILABLE_TAG_ADD, null, t));
    }
    for (let e of o) {
        let t = s[e] ?? { id: e, name: e };
        c.push(new S.QO(U.gGk.AVAILABLE_TAG_DELETE, null, t));
    }
    return c.length > 0 ? c : e;
}
function ea(e) {
    let { oldValue: t, newValue: n } = e,
        l = Array.isArray(t) ? t : [],
        a = Array.isArray(n) ? n : [];
    if (0 === l.length && 0 === a.length) return e;
    let r = {},
        i = {};
    if (
        (l.forEach((e) => {
            r[e.id] = e;
        }),
        a.forEach((e) => {
            i[e.id] = e;
        }),
        l.length < a.length)
    ) {
        for (let e in i) if (null == r[e]) return new S.QO(U.gGk.AVAILABLE_TAG_ADD, null, en(i[e]));
    }
    if (l.length > a.length) {
        for (let e in r) if (null == i[e]) return new S.QO(U.gGk.AVAILABLE_TAG_DELETE, null, en(r[e]));
    }
    for (let e in r) {
        let t = r[e],
            n = i[e];
        if (n?.name !== t.name || n?.emoji_id !== t.emoji_id || n?.emoji_name !== t.emoji_name)
            return new S.QO(U.gGk.AVAILABLE_TAG_EDIT, en(t), en(n));
    }
    return e;
}
function er(e, t, n) {
    let l = e.newValue,
        a = e.oldValue;
    return (
        null != e.newValue && ((l = t(e.newValue)), null != n && null != l && (l = n(l))),
        null != e.oldValue && ((a = t(e.oldValue)), null != n && null != a && (a = n(a))),
        new S.QO(e.key, a || e.oldValue, l || e.newValue)
    );
}
function ei(e, t, n, l, a) {
    let r = null,
        i = n((a = a ?? e.targetId));
    if ((null != i && null != l && (r = l(i)), null == r)) {
        let t = x.A.deletedTargets[e.targetType];
        null != t && null != t[a] && (r = t[a]);
    }
    if (null == r && null != e.changes) {
        let n = e.changes.find((e) => e.key === t);
        null != n && (r = n.newValue || n.oldValue);
    }
    return r ?? a;
}
function es(e, t, n) {
    let l = e,
        a = t(e);
    return null != a && null != n && (l = n(a)), l;
}
function eE(e, t) {
    return (n) => (null == n.oldValue ? e : t);
}
function e_(e, t) {
    return (n) => (null == n.newValue ? e : t);
}
function eu(e, t, n, l) {
    return (a) => (null != a.newValue && null != a.oldValue ? e : null != a.newValue ? t : null != a.oldValue ? n : l);
}
function eo(e, t) {
    return (n) => (n.newValue ? e : t);
}
function ec(e) {
    return (t) => e[t.newValue];
}
function ed(e, t) {
    return (n) => e[n.newValue] ?? t;
}
