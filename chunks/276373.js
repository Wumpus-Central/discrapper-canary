n.r(t),
    n.d(t, {
        ACTION_FILTER_ITEMS: () => H,
        checkChangesToRender: () => V,
        findChangeByKey: () => w,
        getChangeStrings: () => y,
        getChangeTitle: () => Q,
        getSimpleAuditLogChangeDetails: () => J,
        getSimpleAuditLogTitleContextFromChange: () => z,
        getSimpleAuditLogTitleFromChange: () => Y,
        getStringForAddedChannelFlag: () => Z,
        getStringForPermission: () => $,
        getStringForRemovedChannelFlag: () => q,
        shouldNotRenderChangeDetail: () => B,
        transformAppliedForumTagChange: () => el,
        transformAvailableForumTagChange: () => er,
        transformLogs: () => ee,
    }),
    n(321073);
var l = n(824120),
    r = n.n(l),
    a = n(989349),
    i = n.n(a),
    s = n(794174),
    o = n(821418),
    E = n(136722),
    u = n(317097),
    c = n(665260),
    _ = n(499979),
    d = n(155718),
    A = n(47167),
    g = n(626584),
    T = n(508675),
    I = n(627794),
    N = n(591552),
    h = n(701785),
    m = n(446600),
    S = n(679382),
    G = n(411153),
    O = n(734057),
    R = n(317525),
    C = n(994500),
    L = n(287809),
    D = n(405269),
    f = n(735547),
    x = n(661191),
    M = n(523599),
    p = n(652215),
    U = n(746080),
    k = n(411335),
    b = n(988794),
    F = n(985018);
let j = new g.A("AuditLogUtils"),
    v = [_.pJ.DAYS, _.pJ.HOURS, _.pJ.MINUTES, _.pJ.SECONDS],
    P = () => ({ [p.gGk.REASON]: () => F.t["2IW3C5"] });
function y(e) {
    switch (e.targetType) {
        case p.GaG.GUILD:
            return {
                [p.gGk.NAME]: () => F.t.CkDiNH,
                [p.gGk.DESCRIPTION]: eE(F.t.RP3Ey3, F.t.QAVj1Y),
                [p.gGk.ICON_HASH]: () => F.t.iLZ8Q9,
                [p.gGk.SPLASH_HASH]: () => F.t["4VV6dn"],
                [p.gGk.DISCOVERY_SPLASH_HASH]: () => F.t["2pds6p"],
                [p.gGk.BANNER_HASH]: eE(F.t.Cxq4zO, F.t["H7eE/9"]),
                [p.gGk.OWNER_ID]: () => F.t["8ltsLT"],
                [p.gGk.REGION]: () => F.t.X9r5Kf,
                [p.gGk.PREFERRED_LOCALE]: () => F.t.UnXuDS,
                [p.gGk.AFK_CHANNEL_ID]: eE(F.t.ClBuA4, F.t["ms+xtL"]),
                [p.gGk.AFK_TIMEOUT]: () => F.t.q21fHa,
                [p.gGk.SYSTEM_CHANNEL_ID]: eE(F.t.H1VXaa, F.t.XhtmxJ),
                [p.gGk.RULES_CHANNEL_ID]: eE(F.t.OI6MG2, F.t.lik3tI),
                [p.gGk.PUBLIC_UPDATES_CHANNEL_ID]: eE(F.t.YxBKrY, F.t.Ehsnij),
                [p.gGk.MFA_LEVEL]: e_({ [p.EkJ.NONE]: F.t.voaCCQ, [p.EkJ.ELEVATED]: F.t.pRNVwz }),
                [p.gGk.WIDGET_ENABLED]: ec(F.t.ADIty8, F.t.nf58VY),
                [p.gGk.WIDGET_CHANNEL_ID]: eE(F.t["6SBsDc"], F.t.deQ5wO),
                [p.gGk.VERIFICATION_LEVEL]: e_({
                    [p.PvD.NONE]: F.t.W27rsc,
                    [p.PvD.LOW]: F.t["V8P+Pw"],
                    [p.PvD.MEDIUM]: F.t.ERQFau,
                    [p.PvD.HIGH]: F.t["83fN0j"],
                    [p.PvD.VERY_HIGH]: F.t.PnkQJE,
                }),
                [p.gGk.DEFAULT_MESSAGE_NOTIFICATIONS]: e_({
                    [p.orn.ALL_MESSAGES]: F.t.LDi76A,
                    [p.orn.ONLY_MENTIONS]: F.t["6K83ba"],
                }),
                [p.gGk.VANITY_URL_CODE]: eE(F.t.Zplsov, F.t.u6cArh),
                [p.gGk.EXPLICIT_CONTENT_FILTER]: e_({
                    [p.gh6.DISABLED]: F.t.fmOeL3,
                    [p.gh6.MEMBERS_WITHOUT_ROLES]: F.t["4FghYw"],
                    [p.gh6.ALL_MEMBERS]: F.t.olyrSm,
                }),
                [p.gGk.PREMIUM_PROGRESS_BAR_ENABLED]: ec(F.t.rBT0sn, F.t["gc+te5"]),
                [p.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => F.t.YbouFH,
                [p.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => F.t.g3DMjB,
                [p.gGk.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => F.t["+fQAel"],
                [p.gGk.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => F.t.E1fc4v,
                [p.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => F.t.XbwtSA,
                ...P(),
            };
        case p.GaG.CHANNEL:
        case p.GaG.CHANNEL_OVERWRITE:
            return {
                [p.gGk.NAME]: eo(F.t.f8Rh0U, F.t.ebD4Qp),
                [p.gGk.POSITION]: eo(F.t.isS8te, F.t.t5uBis),
                [p.gGk.TOPIC]: eu(F.t.esQcxn, F.t["m+veAn"], F.t["ws/1FA"]),
                [p.gGk.BITRATE]: eo(F.t.fw81ak, F.t.MFNlgZ),
                [p.gGk.RTC_REGION_OVERRIDE]: eu(F.t["6kajxx"], F.t.eGOlmU, F.t["0JMZdz"]),
                [p.gGk.USER_LIMIT]: eo(F.t.wk5t7p, F.t.XgjCEh),
                [p.gGk.RATE_LIMIT_PER_USER]: eo(F.t["7lirhF"], F.t.j4CCJR),
                [p.gGk.PERMISSIONS_RESET]: () => F.t["+vSBFY"],
                [p.gGk.PERMISSIONS_GRANTED]: () => F.t.EKLJv8,
                [p.gGk.PERMISSIONS_DENIED]: () => F.t.U3rO5X,
                [p.gGk.REASON]: () => F.t["2IW3C5"],
                [p.gGk.NSFW]: ec(F.t.H8Ri2Y, F.t.WW6cJw),
                [p.gGk.TYPE]: eo(F.t.Vn5zn2, F.t.aq4uWI),
                [p.gGk.VIDEO_QUALITY_MODE]: eo(F.t.e68fAU, F.t.djbES0),
                [p.gGk.DEFAULT_AUTO_ARCHIVE_DURATION]: eo(F.t.nYz2mg, F.t.oczvRI),
                [p.gGk.FLAGS]: () => F.t.ImCQko,
                [p.gGk.AVAILABLE_TAG_ADD]: () => F.t.H86QQU,
                [p.gGk.AVAILABLE_TAG_EDIT]: () => F.t.YtUzls,
                [p.gGk.AVAILABLE_TAG_DELETE]: () => F.t["8QOseg"],
                [p.gGk.LINKED_LOBBY]: eE(F.t["+/3TkD"], F.t["5kDYS3"]),
            };
        case p.GaG.USER:
            return {
                [p.gGk.NICK]: eu(F.t.qXDsHv, F.t["m+qury"], F.t.DvLvjF),
                [p.gGk.DEAF]: ec(F.t.mArLlW, F.t.ddvVYG),
                [p.gGk.MUTE]: ec(F.t["bxs/lS"], F.t.FjecQM),
                [p.gGk.ROLES_REMOVE]: () => F.t["+2SDWV"],
                [p.gGk.ROLES_ADD]: () => F.t["B3/3IJ"],
                [p.gGk.PRUNE_DELETE_DAYS]: () => F.t["+Cvc+D"],
                [p.gGk.COMMUNICATION_DISABLED_UNTIL]: eu(F.t.LXTQr5, F.t.LXTQr5, F.t.ULSdnE),
                [p.gGk.BYPASSES_VERIFICATION]: ec(F.t.NBPBui, F.t.zATost),
                [p.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => F.t.YbouFH,
                ...P(),
            };
        case p.GaG.ROLE:
            return {
                [p.gGk.NAME]: eo(F.t.QBmlaD, F.t["Lfs4r+"]),
                [p.gGk.DESCRIPTION]: eo(F.t.XeYKWJ, F.t.PSfeIj),
                [p.gGk.PERMISSIONS_GRANTED]: () => F.t["9i/DvE"],
                [p.gGk.PERMISSIONS_DENIED]: () => F.t.pa1ZVh,
                [p.gGk.COLOR]: ed({ "#000000": F.t.TK6E1H }, F.t["2FQFiw"]),
                [p.gGk.COLORS]: (e) => (null == e.newValue.secondary_color ? F.t.U44ttm : F.t["WnSwL/"]),
                [p.gGk.HOIST]: ec(F.t.gWfe24, F.t["+tb8kN"]),
                [p.gGk.MENTIONABLE]: ec(F.t.LL8VFF, F.t.Z7xzmC),
                [p.gGk.ICON_HASH]: () => F.t["iEE79/"],
                [p.gGk.UNICODE_EMOJI]: () => F.t.KiLMM0,
                ...P(),
            };
        case p.GaG.ONBOARDING_PROMPT:
            return {
                ...P(),
                [p.gGk.TITLE]: eo(F.t["sNpuy/"], F.t["3Ukc/g"]),
                [p.gGk.DESCRIPTION]: eo(F.t.PP1q0x, F.t.z7pYLg),
                [p.gGk.OPTIONS]: () => F.t["3G5C9+"],
                [p.gGk.SINGLE_SELECT]: ec(F.t.v4WnR3, F.t["6Qg3uC"]),
                [p.gGk.REQUIRED]: ec(F.t["0MPAM6"], F.t.pwsXir),
            };
        case p.GaG.GUILD_ONBOARDING:
            return {
                ...P(),
                [p.gGk.DEFAULT_CHANNEL_IDS]: () => F.t["8M+D2s"],
                [p.gGk.ENABLE_DEFAULT_CHANNELS]: ec(F.t["EYd/ls"], F.t["36OZeQ"]),
                [p.gGk.ENABLE_ONBOARDING_PROMPTS]: ec(F.t.V3u8PV, F.t["r66lc/"]),
                [p.gGk.ENABLED]: ec(F.t.SODVIs, F.t.u8HY5U),
            };
        case p.GaG.HOME_SETTINGS:
            return {
                ...P(),
                [p.gGk.WELCOME_MESSAGE]: () => F.t.dKQ1xd,
                [p.gGk.NEW_MEMBER_ACTIONS]: () => F.t.jDUIno,
                [p.gGk.RESOURCE_CHANNELS]: () => F.t.SIX0mr,
            };
        case p.GaG.INVITE:
            return {
                [p.gGk.CODE]: () => F.t.rrRHgb,
                [p.gGk.CHANNEL_ID]: () => F.t.Q1vd5q,
                [p.gGk.MAX_USES]: ed({ 0: F.t.Yx8LNm }, F.t["3ygnwU"]),
                [p.gGk.MAX_AGE]: ed({ [F.intl.string(F.t.PqEzn8)]: F.t.uWrLvw }, F.t["Q+5kcO"]),
                [p.gGk.TEMPORARY]: ec(F.t.MWp6H7, F.t.omiqTH),
                [p.gGk.FLAGS]: e_({ [o.Q.IS_GUEST_INVITE]: F.t.XYZMbL }),
                ...P(),
            };
        case p.GaG.WEBHOOK:
            return {
                [p.gGk.CHANNEL_ID]: eo(F.t.jhPprR, F.t.ar4qYO),
                [p.gGk.NAME]: eo(F.t.ZVGrzU, F.t.tywdZR),
                [p.gGk.AVATAR_HASH]: () => F.t.KB52Uj,
                [p.gGk.REASON]: () => F.t["2IW3C5"],
            };
        case p.GaG.EMOJI:
            return { [p.gGk.NAME]: eo(F.t.ahU1o5, F.t["wxs+vZ"]), ...P() };
        case p.GaG.STICKER:
            return {
                [p.gGk.NAME]: eo(F.t.cdl0Yo, F.t.o3W2ly),
                [p.gGk.TAGS]: eo(F.t["zwL+S2"], F.t["VYfKA+"]),
                [p.gGk.DESCRIPTION]: eo(F.t.XeYKWJ, F.t.PSfeIj),
                ...P(),
            };
        case p.GaG.INTEGRATION:
            return {
                [p.gGk.ENABLE_EMOTICONS]: ec(F.t.FI0m5x, F.t.olpKC6),
                [p.gGk.EXPIRE_BEHAVIOR]: e_({ 0: F.t["1Bb1+u"], 1: F.t.vjlW6m }),
                [p.gGk.EXPIRE_GRACE_PERIOD]: () => F.t.iovXMa,
                ...P(),
            };
        case p.GaG.STAGE_INSTANCE:
            return {
                [p.gGk.TOPIC]: eo(F.t["m+veAn"], F.t.esQcxn),
                [p.gGk.PRIVACY_LEVEL]: e_({ [b.dD.GUILD_ONLY]: F.t["EC+CDt"], [b.dD.PUBLIC]: F.t["pK/WG0"] }),
                ...P(),
            };
        case p.GaG.GUILD_SCHEDULED_EVENT:
            return {
                [p.gGk.NAME]: () => F.t["21EXHW"],
                [p.gGk.DESCRIPTION]: () => F.t.Vm1ofw,
                [p.gGk.PRIVACY_LEVEL]: e_({ [b.dD.GUILD_ONLY]: F.t["EC+CDt"], [b.dD.PUBLIC]: F.t["pK/WG0"] }),
                [p.gGk.STATUS]: e_({
                    [b.XG.SCHEDULED]: F.t.hXKDgq,
                    [b.XG.ACTIVE]: F.t.lRX1nz,
                    [b.XG.COMPLETED]: F.t["/eFIhq"],
                    [b.XG.CANCELED]: F.t.NWIYhj,
                }),
                [p.gGk.ENTITY_TYPE]: e_({
                    [b.Ps.NONE]: F.t["6sO3Ss"],
                    [b.Ps.STAGE_INSTANCE]: F.t["Wo+s1y"],
                    [b.Ps.VOICE]: F.t.XCVaIL,
                    [b.Ps.EXTERNAL]: F.t.IvhAj2,
                }),
                [p.gGk.CHANNEL_ID]: eE(F.t.yJBIcX, F.t["+PqSsi"]),
                [p.gGk.LOCATION]: eE(F.t.GaMBHy, F.t.PsICk0),
                [p.gGk.IMAGE_HASH]: eE(F.t.S3vcRK, F.t.KQu47I),
                ...P(),
            };
        case p.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
            return {
                [p.gGk.SCHEDULED_START_TIME]: eE(F.t.zMIYVg, F.t.fzF8Gd),
                [p.gGk.SCHEDULED_END_TIME]: eE(F.t.vONSQA, F.t.IlIti3),
                [p.gGk.IS_CANCELED]: (e) => {
                    if (null != e.oldValue || !0 === e.newValue) {
                        if (!e.oldValue && e.newValue) return F.t["7RkicW"];
                        else if (e.oldValue && !e.newValue) return F.t.dRNTWW;
                    }
                },
                ...P(),
            };
        case p.GaG.THREAD:
            return {
                [p.gGk.NAME]: eo(F.t.tUKRzX, F.t.kPCHON),
                [p.gGk.ARCHIVED]: ec(F.t.jDi9FK, F.t.F6dvbT),
                [p.gGk.LOCKED]: ec(F.t.JSy1QW, F.t.C7Jgo8),
                [p.gGk.INVITABLE]: ec(F.t.dxNUs9, F.t.biJvYG),
                [p.gGk.AUTO_ARCHIVE_DURATION]: eo(F.t.LuaG3y, F.t["18d9qr"]),
                [p.gGk.RATE_LIMIT_PER_USER]: eo(F.t["7lirhF"], F.t.j4CCJR),
                [p.gGk.FLAGS]: () => F.t.sSAQtj,
                [p.gGk.AVAILABLE_TAG_ADD]: () => F.t.H86QQU,
                [p.gGk.AVAILABLE_TAG_DELETE]: () => F.t["8QOseg"],
                ...P(),
            };
        case p.GaG.APPLICATION_COMMAND:
            var t;
            let n;
            return (
                (t = e.changes),
                (n = { ...P() }),
                t?.forEach((e) => {
                    e.newValue
                        ? e.newValue.permission
                            ? (n[e.key] = () => F.t["JH+89C"])
                            : (n[e.key] = () => F.t.HUrFDu)
                        : (n[e.key] = () => F.t.vynxnV);
                }),
                n
            );
        case p.GaG.AUTO_MODERATION_RULE:
            return {
                [p.gGk.NAME]: () => F.t.XwxAJT,
                [p.gGk.AUTO_MODERATION_TRIGGER_TYPE]: () => F.t.fx0pyl,
                [p.gGk.AUTO_MODERATION_EVENT_TYPE]: () => F.t["46Y+L5"],
                [p.gGk.AUTO_MODERATION_ACTIONS]: () => F.t["8efxfv"],
                [p.gGk.AUTO_MODERATION_ENABLED]: (e) => (!0 === (e.newValue ?? e.oldValue) ? F.t.fCmxC2 : F.t.Wrg9Jn),
                [p.gGk.AUTO_MODERATION_EXEMPT_ROLES]: () => F.t.TRb7Nx,
                [p.gGk.AUTO_MODERATION_EXEMPT_CHANNELS]: () => F.t.mzitLE,
                [p.gGk.AUTO_MODERATION_TRIGGER_METADATA]: () => F.t["h/lM65"],
                [p.gGk.AUTO_MODERATION_ADD_KEYWORDS]: () => F.t["9V2yaC"],
                [p.gGk.AUTO_MODERATION_REMOVE_KEYWORDS]: () => F.t["4Qe9ny"],
                [p.gGk.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => F.t.GyZtxp,
                [p.gGk.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => F.t.OQDadc,
                [p.gGk.AUTO_MODERATION_ADD_ALLOW_LIST]: () => F.t["FvvR+K"],
                [p.gGk.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => F.t.p5nSvy,
                ...P(),
            };
        case p.GaG.GUILD_SOUNDBOARD:
            return {
                [p.gGk.NAME]: eo(F.t.VOtRSO, F.t.OK7B8E),
                [p.gGk.VOLUME]: eo(F.t.igrDB9, F.t.L5lDFJ),
                [p.gGk.EMOJI_NAME]: eu(F.t.IIanaY, F.t["z4w4U/"], F.t.V8TfyU),
                [p.gGk.EMOJI_ID]: eu(F.t.ainxMB, F.t["2NPsYu"], F.t["8crtns"]),
                ...P(),
            };
        case p.GaG.VOICE_CHANNEL_STATUS:
            return { [p.gGk.STATUS]: () => F.t.HyCSnI, ...P() };
        case p.GaG.GUILD_MEMBER_VERIFICATION:
            return {
                [p.gGk.VERIFICATION_ENABLED]: (e) => (!0 === e.newValue ? F.t.fnkzDY : F.t.WYT6ka),
                [p.gGk.MANUAL_APPROVAL_ENABLED]: (e) => (!0 === e.newValue ? F.t.jzSvVd : F.t.WxyOtj),
                ...P(),
            };
        case p.GaG.GUILD_PROFILE:
            return {
                [p.gGk.DESCRIPTION]: () => F.t.nsUZKY,
                [p.gGk.BRAND_COLOR_PRIMARY]: () => F.t.qe9mgN,
                [p.gGk.CUSTOM_BANNER_HASH]: () => F.t["04b5KC"],
                [p.gGk.TRAITS]: () => F.t.dEy9WO,
                [p.gGk.GAME_APPLICATION_IDS]: () => F.t["8BOT3x"],
                [p.gGk.VISIBILITY]: () => F.t.bCl1Ep,
                [p.gGk.SERVER_TAG]: eE(F.t.ix1dnX, F.t["4LKpKb"]),
            };
        default:
            return P();
    }
}
let X = {
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
function B(e, t) {
    if (
        e.actionType === p.RWi.DELETE &&
        e.action !== p.F_X.MEMBER_BAN_ADD &&
        e.action !== p.F_X.MEMBER_KICK &&
        e.action !== p.F_X.MEMBER_PRUNE
    )
        return t.key !== p.gGk.REASON;
    let n = X[e.targetType];
    return null != n && !0 === n[t.key];
}
function V(e) {
    let { changes: t } = e;
    return null != t && t.some((t) => !B(e, t));
}
let H = () => [
    { value: p.F_X.ALL, label: F.intl.string(F.t.QxEVcv), valueLabel: F.intl.string(F.t.an9Ry3) },
    { value: p.F_X.GUILD_UPDATE, label: F.intl.string(F.t["5INZa3"]) },
    { value: p.F_X.CHANNEL_CREATE, label: F.intl.string(F.t["2uh4vJ"]) },
    { value: p.F_X.CHANNEL_UPDATE, label: F.intl.string(F.t.mGsBLV) },
    { value: p.F_X.CHANNEL_DELETE, label: F.intl.string(F.t.hCHzAr) },
    { value: p.F_X.CHANNEL_OVERWRITE_CREATE, label: F.intl.string(F.t["8TnAMP"]) },
    { value: p.F_X.CHANNEL_OVERWRITE_UPDATE, label: F.intl.string(F.t.Jqx0Bi) },
    { value: p.F_X.CHANNEL_OVERWRITE_DELETE, label: F.intl.string(F.t.gBXOr4) },
    { value: p.F_X.MEMBER_KICK, label: F.intl.string(F.t["Q1/hN8"]) },
    { value: p.F_X.MEMBER_PRUNE, label: F.intl.string(F.t.tOTTja) },
    { value: p.F_X.MEMBER_BAN_ADD, label: F.intl.string(F.t["NfPn+e"]) },
    { value: p.F_X.MEMBER_BAN_REMOVE, label: F.intl.string(F.t.XCsGfI) },
    { value: p.F_X.MEMBER_UPDATE, label: F.intl.string(F.t["F/jmNJ"]) },
    { value: p.F_X.MEMBER_ROLE_UPDATE, label: F.intl.string(F.t.zAveSI) },
    { value: p.F_X.MEMBER_MOVE, label: F.intl.string(F.t.QshteR) },
    { value: p.F_X.MEMBER_DISCONNECT, label: F.intl.string(F.t.Z45os7) },
    { value: p.F_X.BOT_ADD, label: F.intl.string(F.t.vuH24Z) },
    { value: p.F_X.THREAD_CREATE, label: F.intl.string(F.t["+zl0DG"]) },
    { value: p.F_X.THREAD_UPDATE, label: F.intl.string(F.t.rbIry3) },
    { value: p.F_X.THREAD_DELETE, label: F.intl.string(F.t.hFjNEA) },
    { value: p.F_X.ROLE_CREATE, label: F.intl.string(F.t.AbxKtv) },
    { value: p.F_X.ROLE_UPDATE, label: F.intl.string(F.t.t3Z6sU) },
    { value: p.F_X.ROLE_DELETE, label: F.intl.string(F.t.YsFpa4) },
    { value: p.F_X.ONBOARDING_PROMPT_CREATE, label: F.intl.string(F.t.ZV9tqc) },
    { value: p.F_X.ONBOARDING_PROMPT_UPDATE, label: F.intl.string(F.t.PcOdvX) },
    { value: p.F_X.ONBOARDING_PROMPT_DELETE, label: F.intl.string(F.t["+r33Na"]) },
    { value: p.F_X.ONBOARDING_CREATE, label: F.intl.string(F.t.uDADde) },
    { value: p.F_X.ONBOARDING_UPDATE, label: F.intl.string(F.t.J1H1wg) },
    { value: p.F_X.HOME_SETTINGS_CREATE, label: F.intl.string(F.t.Di4cvI) },
    { value: p.F_X.HOME_SETTINGS_UPDATE, label: F.intl.string(F.t.tzyrJH) },
    { value: p.F_X.INVITE_CREATE, label: F.intl.string(F.t["0BNJdX"]) },
    { value: p.F_X.INVITE_UPDATE, label: F.intl.string(F.t["o++obV"]) },
    { value: p.F_X.INVITE_DELETE, label: F.intl.string(F.t.iP40Az) },
    { value: p.F_X.WEBHOOK_CREATE, label: F.intl.string(F.t["tBF4+S"]) },
    { value: p.F_X.WEBHOOK_UPDATE, label: F.intl.string(F.t.eV3McO) },
    { value: p.F_X.WEBHOOK_DELETE, label: F.intl.string(F.t.AAL3K1) },
    { value: p.F_X.EMOJI_CREATE, label: F.intl.string(F.t.RuWm0V) },
    { value: p.F_X.EMOJI_UPDATE, label: F.intl.string(F.t.WzdUY7) },
    { value: p.F_X.EMOJI_DELETE, label: F.intl.string(F.t.c3dK2L) },
    { value: p.F_X.MESSAGE_DELETE, label: F.intl.string(F.t.daTfXh) },
    { value: p.F_X.MESSAGE_BULK_DELETE, label: F.intl.string(F.t.nrBxeh) },
    { value: p.F_X.MESSAGE_PIN, label: F.intl.string(F.t.MUldyN) },
    { value: p.F_X.MESSAGE_UNPIN, label: F.intl.string(F.t.n4zKhA) },
    { value: p.F_X.INTEGRATION_CREATE, label: F.intl.string(F.t.deNm8x) },
    { value: p.F_X.INTEGRATION_UPDATE, label: F.intl.string(F.t.HT7Sfg) },
    { value: p.F_X.INTEGRATION_DELETE, label: F.intl.string(F.t["+kJ09q"]) },
    { value: p.F_X.STICKER_CREATE, label: F.intl.string(F.t["3DzNjU"]) },
    { value: p.F_X.STICKER_UPDATE, label: F.intl.string(F.t.tdhW5b) },
    { value: p.F_X.STICKER_DELETE, label: F.intl.string(F.t["+ZhGOk"]) },
    { value: p.F_X.STAGE_INSTANCE_CREATE, label: F.intl.string(F.t.sPbjA6) },
    { value: p.F_X.STAGE_INSTANCE_UPDATE, label: F.intl.string(F.t.cW9LfJ) },
    { value: p.F_X.STAGE_INSTANCE_DELETE, label: F.intl.string(F.t["U1r+yD"]) },
    { value: p.F_X.GUILD_SCHEDULED_EVENT_CREATE, label: F.intl.string(F.t.H81Zyy) },
    { value: p.F_X.GUILD_SCHEDULED_EVENT_UPDATE, label: F.intl.string(F.t["FM69l+"]) },
    { value: p.F_X.GUILD_SCHEDULED_EVENT_DELETE, label: F.intl.string(F.t.Rq28Bh) },
    { value: p.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE, label: F.intl.string(F.t.iPdFOt) },
    { value: p.F_X.AUTO_MODERATION_BLOCK_MESSAGE, label: F.intl.string(F.t.gNq5z6) },
    { value: p.F_X.AUTO_MODERATION_RULE_CREATE, label: F.intl.string(F.t.f72Zqb) },
    { value: p.F_X.AUTO_MODERATION_RULE_UPDATE, label: F.intl.string(F.t.XeqIiv) },
    { value: p.F_X.AUTO_MODERATION_RULE_DELETE, label: F.intl.string(F.t.syAApU) },
    { value: p.F_X.GUILD_HOME_FEATURE_ITEM, label: F.intl.string(F.t.lhG5KN) },
    { value: p.F_X.GUILD_HOME_REMOVE_ITEM, label: F.intl.string(F.t.lRPRwS) },
    { value: p.F_X.SOUNDBOARD_SOUND_CREATE, label: F.intl.string(F.t.yoRi5r) },
    { value: p.F_X.SOUNDBOARD_SOUND_UPDATE, label: F.intl.string(F.t.uKlG0Z) },
    { value: p.F_X.SOUNDBOARD_SOUND_DELETE, label: F.intl.string(F.t.gq0iCT) },
    { value: p.F_X.VOICE_CHANNEL_STATUS_CREATE, label: F.intl.string(F.t.rGr0YM) },
    { value: p.F_X.VOICE_CHANNEL_STATUS_DELETE, label: F.intl.string(F.t.V9PEQ4) },
];
function w(e, t) {
    return null != t.changes ? t.changes.find((t) => t.key === e) : null;
}
function W(e, t) {
    return null != t.changes ? t.changes.filter((t) => t.key === e) : [];
}
function Y(e) {
    let t = H().find((t) => t.value === e.action);
    return null != w(p.gGk.COMMUNICATION_DISABLED_UNTIL, e) ? F.intl.string(F.t.z3wbj8) : (t?.label ?? null);
}
let K = {
    [_.pJ.SECONDS]: (e) => F.intl.formatToPlainString(F.t.geSp4K, { seconds: e }),
    [_.pJ.MINUTES]: (e) => F.intl.formatToPlainString(F.t.iXLF9W, { minutes: e }),
    [_.pJ.HOURS]: (e) => F.intl.formatToPlainString(F.t.xCjYxK, { hours: e }),
    [_.pJ.DAYS]: (e) => F.intl.formatToPlainString(F.t["k2UNz+"], { days: e }),
};
function z(e) {
    let t = w(p.gGk.COMMUNICATION_DISABLED_UNTIL, e),
        n = W(p.gGk.ROLES_ADD, e).length > 0,
        l = W(p.gGk.ROLES_REMOVE, e).length > 0;
    if (null != t) {
        if (t?.newValue != null) {
            let n = new Date(t?.newValue).getTime() - x.default.extractTimestamp(e.id),
                l = Math.round(n / 1e3 / 60),
                r = (0, _.$l)(l, v);
            if (null == r.unit || null == r.time) return null;
            if (r.unit in K) {
                let e = r.unit,
                    t = r.unit === _.pJ.SECONDS ? Math.round(n / 1e3) : r.time;
                return K[e](t);
            }
        } else if (t?.oldValue != null) return F.intl.string(F.t.MA1ltr);
    } else if (n && l) return F.intl.string(F.t.RdMMew);
    else if (n) return F.intl.string(F.t["4GQqs8"]);
    else if (l) return F.intl.string(F.t["8mQ6x0"]);
    return null;
}
function J(e) {
    let t = W(p.gGk.ROLES_ADD, e),
        n = W(p.gGk.ROLES_REMOVE, e),
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
        ? F.intl.formatToPlainString(F.t.tZw1EW, { roleNamesAdded: l, roleNamesRemoved: r })
        : t.length > 0
          ? F.intl.formatToPlainString(F.t["/mTqt5"], { roleNames: l })
          : n.length > 0
            ? F.intl.formatToPlainString(F.t.Wk4pAJ, { roleNames: r })
            : null;
}
function Q(e) {
    switch (e.action) {
        case p.F_X.GUILD_UPDATE:
            return F.t.LjZO31;
        case p.F_X.CHANNEL_CREATE:
            let t = null != e.changes ? e.changes.find((e) => e.key === p.gGk.TYPE) : null;
            if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
            switch (t.newValue) {
                case p.rbe.GUILD_STAGE_VOICE:
                    return F.t["OKp4+o"];
                case p.rbe.GUILD_VOICE:
                    return F.t.NPOy4G;
                case p.rbe.GUILD_CATEGORY:
                    return F.t.T3KIjz;
                default:
                    return F.t.wrYNG2;
            }
        case p.F_X.CHANNEL_UPDATE:
            return F.t.nTYk6B;
        case p.F_X.CHANNEL_DELETE:
            return F.t.ynfvkm;
        case p.F_X.CHANNEL_OVERWRITE_CREATE:
            return F.t.l5Cu1a;
        case p.F_X.CHANNEL_OVERWRITE_UPDATE:
            return F.t.uhtbNU;
        case p.F_X.CHANNEL_OVERWRITE_DELETE:
            return F.t["HASt/3"];
        case p.F_X.MEMBER_KICK:
            return F.t.B5hDZX;
        case p.F_X.MEMBER_PRUNE:
            return F.t.qKOZTP;
        case p.F_X.MEMBER_BAN_ADD:
            return F.t["XklUm/"];
        case p.F_X.MEMBER_BAN_REMOVE:
            return F.t.o3Y6HD;
        case p.F_X.MEMBER_UPDATE:
            return F.t.pznhLN;
        case p.F_X.MEMBER_ROLE_UPDATE:
            return F.t.Vngfia;
        case p.F_X.MEMBER_MOVE:
            return F.t.Yt6NkU;
        case p.F_X.MEMBER_DISCONNECT:
            return F.t.K4eCZw;
        case p.F_X.BOT_ADD:
            return F.t.fWvX0G;
        case p.F_X.ROLE_CREATE:
            return F.t.UTLTx6;
        case p.F_X.ROLE_UPDATE:
            return F.t.NRbN18;
        case p.F_X.ROLE_DELETE:
            return F.t["4s63tb"];
        case p.F_X.INVITE_CREATE:
            return F.t.YHOXWy;
        case p.F_X.INVITE_UPDATE:
            return F.t.ja3kGS;
        case p.F_X.INVITE_DELETE:
            return F.t["3n/iWk"];
        case p.F_X.WEBHOOK_CREATE:
            return F.t.MhYhil;
        case p.F_X.WEBHOOK_UPDATE:
            return F.t["6GTlWB"];
        case p.F_X.WEBHOOK_DELETE:
            return F.t.in0VjZ;
        case p.F_X.EMOJI_CREATE:
            return F.t["7vekRO"];
        case p.F_X.EMOJI_UPDATE:
            return F.t.IsCKfh;
        case p.F_X.EMOJI_DELETE:
            return F.t.JnUaVG;
        case p.F_X.STICKER_CREATE:
            return F.t.DRZifq;
        case p.F_X.STICKER_UPDATE:
            return F.t.bhujGc;
        case p.F_X.STICKER_DELETE:
            return F.t.rGEP9U;
        case p.F_X.MESSAGE_DELETE:
            return F.t["HPkD+M"];
        case p.F_X.MESSAGE_BULK_DELETE:
            return F.t["3RIvLE"];
        case p.F_X.MESSAGE_PIN:
            return F.t.Yna7E7;
        case p.F_X.MESSAGE_UNPIN:
            return F.t.NCxXUW;
        case p.F_X.INTEGRATION_CREATE:
            return F.t.HYvCb3;
        case p.F_X.INTEGRATION_UPDATE:
            return F.t.ibCCOS;
        case p.F_X.INTEGRATION_DELETE:
            return F.t["8zScWY"];
        case p.F_X.STAGE_INSTANCE_CREATE:
            return F.t["n7x/DF"];
        case p.F_X.STAGE_INSTANCE_UPDATE:
            return F.t["0hQYU4"];
        case p.F_X.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return F.t["Oi/in9"];
            return F.t["7ZIFm9"];
        case p.F_X.GUILD_SCHEDULED_EVENT_CREATE:
            return F.t.S7k52p;
        case p.F_X.GUILD_SCHEDULED_EVENT_UPDATE:
            return F.t.ebTK11;
        case p.F_X.GUILD_SCHEDULED_EVENT_DELETE:
            return F.t["/ARPKQ"];
        case p.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case p.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return F.t["8qCI36"];
        case p.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return F.t.zYb2da;
        case p.F_X.THREAD_CREATE:
            let n = null != e.changes ? e.changes.find((e) => e.key === p.gGk.TYPE) : null;
            if (null == n) throw Error("[AuditLog] Could not find type change for thread create");
            switch (n.newValue) {
                case p.rbe.PRIVATE_THREAD:
                    return F.t.Br0y5w;
                case p.rbe.ANNOUNCEMENT_THREAD:
                    return F.t["6uaMmO"];
                default:
                    return F.t["2cxQ7G"];
            }
        case p.F_X.THREAD_UPDATE:
            return F.t.PSsy4t;
        case p.F_X.THREAD_DELETE:
            return F.t.s3Khn8;
        case p.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return F.t.uzCqBm;
        case p.F_X.AUTO_MODERATION_BLOCK_MESSAGE:
            return F.t.NqWv2K;
        case p.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL:
            if (e.options?.auto_moderation_rule_trigger_type === k.uh.USER_PROFILE.toString()) return F.t.YQsjej;
            return F.t.SD0PwJ;
        case p.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return F.t.Vk4TwX;
        case p.F_X.AUTO_MODERATION_QUARANTINE_USER:
            return F.t["/W5u5o"];
        case p.F_X.CREATOR_MONETIZATION_REQUEST_CREATED:
            return F.t.ONvWyr;
        case p.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return F.t["ryGLk+"];
        case p.F_X.AUTO_MODERATION_RULE_CREATE:
            return F.t["NKljj+"];
        case p.F_X.AUTO_MODERATION_RULE_UPDATE:
            return F.t["3wEA9u"];
        case p.F_X.AUTO_MODERATION_RULE_DELETE:
            return F.t.umua3n;
        case p.F_X.ONBOARDING_PROMPT_CREATE:
            return F.t["/8A1g2"];
        case p.F_X.ONBOARDING_PROMPT_UPDATE:
            return F.t.ArIrWI;
        case p.F_X.ONBOARDING_PROMPT_DELETE:
            return F.t.IuBTao;
        case p.F_X.ONBOARDING_CREATE:
            return F.t["wDaq3/"];
        case p.F_X.ONBOARDING_UPDATE:
            return F.t["yONu/l"];
        case p.F_X.HOME_SETTINGS_CREATE:
            return F.t.dSdCjG;
        case p.F_X.HOME_SETTINGS_UPDATE:
            return F.t.XHE8qv;
        case p.F_X.GUILD_HOME_FEATURE_ITEM:
            let l = null != e.changes ? e.changes.find((e) => e.key === p.gGk.ENTITY_TYPE) : null;
            if (null == l) return F.t["UZ+U3A"];
            switch (l.newValue) {
                case s.U.MESSAGE:
                    return F.t["PyEa+J"];
                case s.U.FORUM_POST:
                    return F.t.hCuAb1;
                default:
                    return F.t["UZ+U3A"];
            }
        case p.F_X.GUILD_HOME_REMOVE_ITEM:
            return F.t.kPReun;
        case p.F_X.SOUNDBOARD_SOUND_CREATE:
            return F.t["0PD83V"];
        case p.F_X.SOUNDBOARD_SOUND_UPDATE:
            return F.t.CM8n1w;
        case p.F_X.SOUNDBOARD_SOUND_DELETE:
            return F.t["kVz4/0"];
        case p.F_X.VOICE_CHANNEL_STATUS_CREATE:
            return F.t.MWjnU7;
        case p.F_X.VOICE_CHANNEL_STATUS_DELETE:
            return F.t.aS8Krq;
        case p.F_X.GUILD_MEMBER_VERIFICATION_UPDATE:
            return F.t["NUKUb+"];
        case p.F_X.GUILD_PROFILE_UPDATE:
            return F.t.Ed6hF1;
        case p.F_X.GUILD_MIGRATE_PIN_PERMISSION:
            return F.t["3Ne7MA"];
        case p.F_X.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION:
            return F.t["naflH+"];
        default:
            return null;
    }
}
function Z(e) {
    switch (e) {
        case U.lx.GUILD_FEED_REMOVED:
            return F.intl.string(F.t["5G8ZD4"]);
        case U.lx.ACTIVE_CHANNELS_REMOVED:
            return F.intl.string(F.t["4YLtzC"]);
        case U.lx.PINNED:
            return F.intl.string(F.t["1QLRYb"]);
    }
    return null;
}
function q(e) {
    switch (e) {
        case U.lx.GUILD_FEED_REMOVED:
            return F.intl.string(F.t.S5kuWQ);
        case U.lx.ACTIVE_CHANNELS_REMOVED:
            return F.intl.string(F.t["8qpgcz"]);
        case U.lx.PINNED:
            return F.intl.string(F.t.CMweGA);
    }
    return null;
}
function $(e, t) {
    switch (e) {
        case p.xBc.CREATE_INSTANT_INVITE:
            return F.intl.string(F.t.zJrgTG);
        case p.xBc.KICK_MEMBERS:
            return F.intl.string(F.t.pBNv6i);
        case p.xBc.BAN_MEMBERS:
            return F.intl.string(F.t.oTBA7N);
        case p.xBc.ADMINISTRATOR:
            return F.intl.string(F.t.PGvZqX);
        case p.xBc.MANAGE_CHANNELS:
            if (t.targetType === p.GaG.CHANNEL || t.targetType === p.GaG.CHANNEL_OVERWRITE)
                return F.intl.string(F.t.nAw15L);
            return F.intl.string(F.t["9qLtWs"]);
        case p.xBc.MANAGE_GUILD:
            return F.intl.string(F.t.QZRcfO);
        case p.xBc.VIEW_GUILD_ANALYTICS:
            return F.intl.string(F.t["rQJBE/"]);
        case p.xBc.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return F.intl.string(F.t["0lTLTv"]);
        case p.xBc.CHANGE_NICKNAME:
            return F.intl.string(F.t.dilOF6);
        case p.xBc.MANAGE_NICKNAMES:
            return F.intl.string(F.t["t+Ct5x"]);
        case p.xBc.MANAGE_ROLES:
            return F.intl.string(F.t["C8d+oG"]);
        case p.xBc.MANAGE_WEBHOOKS:
            return F.intl.string(F.t["/ADKmM"]);
        case p.xBc.CREATE_GUILD_EXPRESSIONS:
            return F.intl.string(F.t.HarVuP);
        case p.xBc.MANAGE_GUILD_EXPRESSIONS:
            return F.intl.string(F.t.bbuXIn);
        case p.xBc.VIEW_AUDIT_LOG:
            return F.intl.string(F.t.fZgLpA);
        case p.xBc.VIEW_CHANNEL:
            if (t.targetType === p.GaG.CHANNEL || t.targetType === p.GaG.CHANNEL_OVERWRITE)
                return F.intl.string(F.t["W/A4Qp"]);
            return F.intl.string(F.t.uV83yi);
        case p.xBc.SEND_MESSAGES:
            return F.intl.string(F.t.T32rkC);
        case p.xBc.SEND_TTS_MESSAGES:
            return F.intl.string(F.t.Mg7bku);
        case p.xBc.USE_APPLICATION_COMMANDS:
            return F.intl.string(F.t.shbR1a);
        case p.xBc.MANAGE_MESSAGES:
            return F.intl.string(F.t["6lU9xM"]);
        case p.xBc.EMBED_LINKS:
            return F.intl.string(F.t["969dEL"]);
        case p.xBc.ATTACH_FILES:
            return F.intl.string(F.t["3AS4UM"]);
        case p.xBc.READ_MESSAGE_HISTORY:
            return F.intl.string(F.t.l9ufaR);
        case p.xBc.MENTION_EVERYONE:
            return F.intl.string(F.t.Y78KGC);
        case p.xBc.USE_EXTERNAL_EMOJIS:
            return F.intl.string(F.t.BpBGZU);
        case p.xBc.USE_EXTERNAL_STICKERS:
            return F.intl.string(F.t["UeRs+b"]);
        case p.xBc.ADD_REACTIONS:
            return F.intl.string(F.t.yEoJAr);
        case p.xBc.CONNECT:
            return F.intl.string(F.t.S0W8Z5);
        case p.xBc.SPEAK:
            return F.intl.string(F.t["8w1tIR"]);
        case p.xBc.MUTE_MEMBERS:
            return F.intl.string(F.t["8EI30/"]);
        case p.xBc.DEAFEN_MEMBERS:
            return F.intl.string(F.t["9L47Fr"]);
        case p.xBc.MOVE_MEMBERS:
            return F.intl.string(F.t.YtjJPQ);
        case p.xBc.USE_VAD:
            return F.intl.string(F.t["08zAV7"]);
        case p.xBc.PRIORITY_SPEAKER:
            return F.intl.string(F.t.BVK71i);
        case p.xBc.STREAM:
            return F.intl.string(F.t.FlNoSV);
        case p.xBc.REQUEST_TO_SPEAK:
            return F.intl.string(F.t["5kicT2"]);
        case p.xBc.USE_EMBEDDED_ACTIVITIES:
            return F.intl.string(F.t.rLSGeh);
        case p.xBc.CREATE_EVENTS:
            return F.intl.string(F.t.qyjZua);
        case p.xBc.MANAGE_EVENTS:
            return F.intl.string(F.t.HIgA5a);
        case p.xBc.CREATE_PUBLIC_THREADS:
            return F.intl.string(F.t["25rKnX"]);
        case p.xBc.CREATE_PRIVATE_THREADS:
            return F.intl.string(F.t.QwbTSa);
        case p.xBc.SEND_MESSAGES_IN_THREADS:
            return F.intl.string(F.t.fTE74g);
        case p.xBc.MANAGE_THREADS:
            return F.intl.string(F.t.kEqgr7);
        case p.xBc.MODERATE_MEMBERS:
            return F.intl.string(F.t["+RL6pz"]);
        case p.xBc.SET_VOICE_CHANNEL_STATUS:
            return F.intl.string(F.t.VBwkUf);
        case p.xBc.SEND_POLLS:
            return F.intl.string(F.t.UMQ7Ww);
        case p.xBc.USE_EXTERNAL_APPS:
            return F.intl.string(F.t.TtA5rK);
        case p.xBc.PIN_MESSAGES:
            return F.intl.string(F.t.Y5BI39);
        case p.xBc.BYPASS_SLOWMODE:
            return F.intl.string(F.t.kqcjeV);
        case p.xBc.MANAGE_OFFICIAL_MESSAGES:
            return F.intl.string(F.t.Aj9ruN);
    }
    return null;
}
function ee(e, t) {
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
                            return ei(
                                e,
                                p.gGk.NAME,
                                (e) => O.A.getChannel(e),
                                (e) => (0, A.m1)(e, L.default, C.A, !0),
                            );
                        case p.GaG.USER:
                            return ei(
                                e,
                                p.gGk.NICK,
                                (e) => L.default.getUser(e),
                                (e) => e,
                            );
                        case p.GaG.ROLE:
                            return ei(
                                e,
                                p.gGk.NAME,
                                (e) => R.A.getRole(t.id, e),
                                (e) => e.name,
                            );
                        case p.GaG.ONBOARDING_PROMPT:
                            let n = ei(
                                e,
                                p.gGk.ID,
                                (e) => N.A.getOnboardingPrompt(e),
                                (e) => e.title,
                            );
                            return null == n || "" === n ? F.intl.string(F.t.ZNQyiR) : n;
                        case p.GaG.GUILD_ONBOARDING:
                        case p.GaG.GUILD_MEMBER_VERIFICATION:
                            return t;
                        case p.GaG.INVITE:
                            return ei(e, p.gGk.CODE, p.FXj);
                        case p.GaG.INTEGRATION:
                            return ei(
                                e,
                                p.gGk.TYPE,
                                (e) => M.A.integrations.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case p.GaG.WEBHOOK:
                            return ei(
                                e,
                                p.gGk.NAME,
                                (e) => M.A.webhooks.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case p.GaG.EMOJI:
                            return ei(
                                e,
                                p.gGk.NAME,
                                (e) => T.Ay.getGuildEmoji(t.id).find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case p.GaG.STICKER:
                            return ei(
                                e,
                                p.gGk.NAME,
                                (e) => S.A.getStickerById(e),
                                (e) => e.name,
                            );
                        case p.GaG.STAGE_INSTANCE:
                            return ei(
                                e,
                                p.gGk.TOPIC,
                                (e) => Object.values(m.A.getStageInstancesByGuild(t.id))?.find((t) => t.id === e),
                                (e) => e.topic,
                            );
                        case p.GaG.GUILD_SCHEDULED_EVENT:
                        case p.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return ei(
                                e,
                                p.gGk.NAME,
                                (e) => M.A.guildScheduledEvents.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case p.GaG.THREAD:
                            return ei(
                                e,
                                p.gGk.NAME,
                                (e) => M.A.threads.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case p.GaG.APPLICATION_COMMAND:
                            if (e.targetId === e.options.application_id) {
                                let t = M.A.integrations.find((t) => t.application?.id === e.targetId);
                                if (null != t) return t.name;
                                return e.targetId;
                            }
                            return ei(
                                e,
                                p.gGk.NAME,
                                (e) => M.A.applicationCommands.find((t) => t.id === e),
                                (e) => {
                                    let t =
                                        null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
                                    return e.type === d.kc.CHAT ? `/\u2060${t}` : t;
                                },
                            );
                        case p.GaG.AUTO_MODERATION_RULE:
                            return ei(
                                e,
                                p.gGk.NAME,
                                (e) => M.A.automodRules.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case p.GaG.GUILD_SOUNDBOARD:
                            return ei(e, p.gGk.NAME, p.FXj);
                        case p.GaG.HOME_SETTINGS:
                            return ei(
                                e,
                                p.gGk.GUILD_ID,
                                (e) => h.h.getSettings(e),
                                () => F.intl.string(F.t.VbpLyU),
                                t.id,
                            );
                        case p.GaG.VOICE_CHANNEL_STATUS:
                            return ei(
                                e,
                                p.gGk.STATUS,
                                (e) => O.A.getChannel(e),
                                (e) => (0, A.m1)(e, L.default, C.A, !0),
                            );
                        default:
                            return j.warn("Unknown targetType for log", e), null;
                    }
                })(e, t),
                a = L.default.getUser(e.userId);
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
                    (e = (e = (e = e.set("user", a)).set("target", l)).set(
                        "options",
                        (function (e) {
                            if (null != e.options) {
                                let t = { ...e.options };
                                switch (e.options.type) {
                                    case p.AO_.USER:
                                        t.subtarget = es(
                                            e.options.id,
                                            (e) => L.default.getUser(e),
                                            (e) => e.tag,
                                        );
                                        break;
                                    case p.AO_.ROLE:
                                        t.subtarget = es(e.options.role_name, p.FXj);
                                }
                                if (
                                    (null != e.options.channel_id &&
                                        (t.channel = ei(
                                            e,
                                            "",
                                            (e) => O.A.getChannel(e),
                                            (e) => e,
                                            e.options.channel_id,
                                        )),
                                    null != e.options.members_removed &&
                                        0 !== e.options.members_removed &&
                                        (t.count = e.options.members_removed),
                                    null != e.options.event_exception_id)
                                ) {
                                    let n = M.A.guildScheduledEvents.find((t) => t.id === e.targetId),
                                        l = n?.guild_scheduled_event_exceptions.find(
                                            (t) => t.event_exception_id === e.options.event_exception_id,
                                        );
                                    t.subtarget = (0, D.i$)(
                                        i()(x.default.extractTimestamp(l?.event_exception_id ?? "0")),
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
                        let a = (function (e, t, n) {
                            if (t.action === p.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let t = e.newValue || e.oldValue;
                                switch (t.type) {
                                    case p.g0g.ROLE:
                                        e.subtarget = es(
                                            t.id,
                                            (e) => R.A.getRole(n.id, e),
                                            (e) => e.name,
                                        );
                                        break;
                                    case p.g0g.USER:
                                        e.subtarget = es(
                                            t.id,
                                            (e) => L.default.getUser(e),
                                            (e) => e.tag,
                                        );
                                        break;
                                    case p.g0g.CHANNEL:
                                        t.id === r()(n.id).subtract(1).toString()
                                            ? (e.subtarget = F.intl.string(F.t.MSYhgh))
                                            : (e.subtarget = es(
                                                  t.id,
                                                  (e) => O.A.getChannel(e),
                                                  (e) => (0, A.m1)(e, L.default, C.A, !0),
                                              ));
                                }
                                return e;
                            }
                            switch (e.key) {
                                case p.gGk.OWNER_ID:
                                    return ea(e, (e) => L.default.getUser(e));
                                case p.gGk.CHANNEL_ID:
                                case p.gGk.AFK_CHANNEL_ID:
                                case p.gGk.SYSTEM_CHANNEL_ID:
                                case p.gGk.RULES_CHANNEL_ID:
                                case p.gGk.PUBLIC_UPDATES_CHANNEL_ID:
                                    return ea(
                                        e,
                                        (e) => O.A.getChannel(e),
                                        (e) => (0, A.m1)(e, L.default, C.A, !0),
                                    );
                                case p.gGk.AFK_TIMEOUT:
                                    return ea(e, (e) => e / 60);
                                case p.gGk.BITRATE:
                                    return ea(e, (e) => e / 1e3);
                                case p.gGk.COLOR:
                                    return ea(e, (e) => (0, u.Hl)(e).toUpperCase());
                                case p.gGk.THEME_COLORS:
                                    return ea(
                                        e,
                                        (e) => `${(0, u.Hl)(e[0]).toUpperCase()}, ${(0, u.Hl)(e[1]).toUpperCase()}`,
                                    );
                                case p.gGk.MAX_AGE:
                                    return ea(e, (e) => {
                                        let t = f.Ay.getMaxAgeOptionByValue(e);
                                        return null !== t ? t.label : e;
                                    });
                                case p.gGk.PERMISSIONS: {
                                    let t = [],
                                        { added: n, removed: l } = et(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let e = new G.QO(p.gGk.PERMISSIONS_GRANTED, null, n);
                                        t.push(e);
                                    }
                                    if (l.length > 0) {
                                        let e = new G.QO(p.gGk.PERMISSIONS_DENIED, null, l);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case p.gGk.PERMISSIONS_GRANTED:
                                case p.gGk.PERMISSIONS_DENIED: {
                                    let t = [],
                                        { added: n, removed: l } = et(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let l = new G.QO(e.key, null, n);
                                        t.push(l);
                                    }
                                    if (l.length > 0) {
                                        let e = new G.QO(p.gGk.PERMISSIONS_RESET, l, l);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case p.gGk.FLAGS: {
                                    let t = [],
                                        { added: n, removed: l } = (function (e, t) {
                                            let n = "number" == typeof e ? e : 0,
                                                l = "number" == typeof t ? t : 0,
                                                r = c.VL(l, n),
                                                a = c.VL(n, l),
                                                i = [],
                                                s = [];
                                            for (let e in U.lx) {
                                                let t = U.lx[e];
                                                c.Lt(r, t) && i.push(t), c.Lt(a, t) && s.push(t);
                                            }
                                            return { added: i, removed: s };
                                        })(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let l = new G.QO(e.key, null, n);
                                        t.push(l);
                                    }
                                    if (l.length > 0) {
                                        let n = new G.QO(e.key, l, null);
                                        t.push(n);
                                    }
                                    return t;
                                }
                                case p.gGk.PREFERRED_LOCALE:
                                    return ea(e, (e) => {
                                        let t = (0, F.getAvailableLocales)().find((t) => t.value === e);
                                        return null != t ? t.name : null;
                                    });
                                case p.gGk.VIDEO_QUALITY_MODE:
                                    return ea(e, (e) =>
                                        e === p.K3c.FULL ? F.intl.string(F.t["7jOoJE"]) : F.intl.string(F.t.jjKYpu),
                                    );
                                case p.gGk.SYSTEM_CHANNEL_FLAGS:
                                    let l, a;
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
                                        (a = []),
                                        Object.values(p.ogj).forEach((t) => {
                                            let n = (e.oldValue & t) === t,
                                                r = (e.newValue & t) === t;
                                            if (n === r) return;
                                            let i = new G.QO(l[t], !n, !r);
                                            a.push(i);
                                        }),
                                        a
                                    );
                                case p.gGk.AUTO_MODERATION_ACTIONS:
                                    if (t.targetType === p.GaG.AUTO_MODERATION_RULE)
                                        return ea(
                                            e,
                                            (e) => e.map((e) => e.type),
                                            (e) => e.map(I.PZ).join(", "),
                                        );
                                    break;
                                case p.gGk.AUTO_MODERATION_EVENT_TYPE:
                                    if (t.targetType === p.GaG.AUTO_MODERATION_RULE) return ea(e, I.X3);
                                    break;
                                case p.gGk.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (t.targetType === p.GaG.AUTO_MODERATION_RULE) return ea(e, I.nl);
                                    break;
                                case p.gGk.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (t.targetType === p.GaG.AUTO_MODERATION_RULE)
                                        return ea(e, (e) =>
                                            null != e && "object" == typeof e
                                                ? null != e.keyword_filter && Array.isArray(e.keyword_filter)
                                                    ? F.intl.formatToMarkdownString(F.t.y91UXV, {
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
                                        return ea(e, (e) =>
                                            null != e && Array.isArray(e)
                                                ? e.map((e) => `'${e}'`).join(", ")
                                                : JSON.stringify(e),
                                        );
                                    break;
                                case p.gGk.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (t.targetType === p.GaG.AUTO_MODERATION_RULE)
                                        return ea(
                                            e,
                                            (e) =>
                                                e
                                                    .map(O.A.getChannel)
                                                    .filter((e) => null != e)
                                                    .map((e) => (0, A.m1)(e, L.default, C.A, !0)),
                                            (e) =>
                                                null != e && e.length > 0 ? e.join(", ") : F.intl.string(F.t["K/EdV8"]),
                                        );
                                    break;
                                case p.gGk.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (t.targetType === p.GaG.AUTO_MODERATION_RULE)
                                        return ea(
                                            e,
                                            (e) =>
                                                e
                                                    .map((e) => R.A.getRole(n.id, e))
                                                    .filter((e) => null != e)
                                                    .map((e) => e.name),
                                            (e) =>
                                                null != e && e.length > 0 ? e.join(", ") : F.intl.string(F.t["K/EdV8"]),
                                        );
                                    break;
                                case p.gGk.AVAILABLE_TAGS:
                                    return er(e);
                                case p.gGk.APPLIED_TAGS:
                                    return el(e, t);
                                case p.gGk.SCHEDULED_START_TIME:
                                case p.gGk.SCHEDULED_END_TIME:
                                    return ea(e, (e) => (0, D.i$)(i()(new Date(e)), "LLLL"));
                            }
                            return e;
                        })(l, e, t);
                        Array.isArray(a) ? a.forEach((e) => n.push(e)) : n.push(a);
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
    let n = E.iu("string" == typeof e ? e : 0),
        l = E.iu("string" == typeof t ? t : 0),
        r = E.TF(l, n),
        a = E.TF(n, l),
        i = [],
        s = [];
    for (let e in p.xBc) {
        let t = p.xBc[e];
        E.zy(r, t) && i.push(t), E.zy(a, t) && s.push(t);
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
        r = O.A.getChannel(t.targetId),
        a = r?.parent_id != null ? O.A.getChannel(r.parent_id) : null,
        i = a?.availableTags ?? [],
        s = {};
    i.forEach((e) => {
        s[e.id] = { name: e.name, emojiId: e.emojiId, emojiName: e.emojiName };
    });
    let o = new Set(n),
        E = new Set(l),
        u = l.filter((e) => !o.has(e)),
        c = n.filter((e) => !E.has(e)),
        _ = [];
    for (let e of u) {
        let t = s[e] ?? { id: e, name: e };
        _.push(new G.QO(p.gGk.AVAILABLE_TAG_ADD, null, t));
    }
    for (let e of c) {
        let t = s[e] ?? { id: e, name: e };
        _.push(new G.QO(p.gGk.AVAILABLE_TAG_DELETE, null, t));
    }
    return _.length > 0 ? _ : e;
}
function er(e) {
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
        for (let e in i) if (null == a[e]) return new G.QO(p.gGk.AVAILABLE_TAG_ADD, null, en(i[e]));
    }
    if (l.length > r.length) {
        for (let e in a) if (null == i[e]) return new G.QO(p.gGk.AVAILABLE_TAG_DELETE, null, en(a[e]));
    }
    for (let e in a) {
        let t = a[e],
            n = i[e];
        if (n?.name !== t.name || n?.emoji_id !== t.emoji_id || n?.emoji_name !== t.emoji_name)
            return new G.QO(p.gGk.AVAILABLE_TAG_EDIT, en(t), en(n));
    }
    return e;
}
function ea(e, t, n) {
    let l = e.newValue,
        r = e.oldValue;
    return (
        null != e.newValue && ((l = t(e.newValue)), null != n && null != l && (l = n(l))),
        null != e.oldValue && ((r = t(e.oldValue)), null != n && null != r && (r = n(r))),
        new G.QO(e.key, r || e.oldValue, l || e.newValue)
    );
}
function ei(e, t, n, l, r) {
    let a = null,
        i = n((r = r ?? e.targetId));
    if ((null != i && null != l && (a = l(i)), null == a)) {
        let t = M.A.deletedTargets[e.targetType];
        null != t && null != t[r] && (a = t[r]);
    }
    if (null == a && null != e.changes) {
        let n = e.changes.find((e) => e.key === t);
        null != n && (a = n.newValue || n.oldValue);
    }
    return a ?? r;
}
function es(e, t, n) {
    let l = e,
        r = t(e);
    return null != r && null != n && (l = n(r)), l;
}
function eo(e, t) {
    return (n) => (null == n.oldValue ? e : t);
}
function eE(e, t) {
    return (n) => (null == n.newValue ? e : t);
}
function eu(e, t, n, l) {
    return (r) => (null != r.newValue && null != r.oldValue ? e : null != r.newValue ? t : null != r.oldValue ? n : l);
}
function ec(e, t) {
    return (n) => (n.newValue ? e : t);
}
function e_(e) {
    return (t) => e[t.newValue];
}
function ed(e, t) {
    return (n) => e[n.newValue] ?? t;
}
