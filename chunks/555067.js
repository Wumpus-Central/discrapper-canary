n.r(t),
    n.d(t, {
        transformAppliedForumTagChange: () => ea,
        transformAvailableForumTagChange: () => er,
        getStringForPermission: () => ee,
        getSimpleAuditLogTitleContextFromChange: () => J,
        getChangeTitle: () => Z,
        getStringForRemovedChannelFlag: () => $,
        checkChangesToRender: () => H,
        getSimpleAuditLogTitleFromChange: () => K,
        ACTION_FILTER_ITEMS: () => w,
        shouldNotRenderChangeDetail: () => V,
        getStringForAddedChannelFlag: () => q,
        getSimpleAuditLogChangeDetails: () => Q,
        getChangeStrings: () => B,
        findChangeByKey: () => W,
        transformLogs: () => et,
    }),
    n(321073);
var l,
    a = n(824120),
    r = n.n(a),
    i = n(989349),
    s = n.n(i),
    E =
        (((l = {}).MESSAGE = "message"),
        (l.FORUM_POST = "forum_post"),
        (l.MESSAGE_BUNDLE = "message_bundle"),
        (l.CONVERSATION = "conversation"),
        l),
    _ = n(821418),
    o = n(136722),
    u = n(317097),
    c = n(665260),
    d = n(499979),
    A = n(155718),
    g = n(47167),
    T = n(626584),
    I = n(159273),
    N = n(627794),
    G = n(591552),
    O = n(701785),
    m = n(446600),
    S = n(750385),
    R = n(411153),
    D = n(734057),
    h = n(317525),
    L = n(994500),
    C = n(287809),
    M = n(58703),
    f = n(735547),
    x = n(935208),
    U = n(523599),
    p = n(652215),
    b = n(746080),
    F = n(243277),
    k = n(988794),
    P = n(985018);
let j = new T.A("AuditLogUtils"),
    v = [d.pJ.DAYS, d.pJ.HOURS, d.pJ.MINUTES, d.pJ.SECONDS],
    X = () => ({ [p.gGk.REASON]: () => P.t["2IW3C5"] });
function B(e) {
    switch (e.targetType) {
        case p.GaG.GUILD:
            return {
                [p.gGk.NAME]: () => P.t.CkDiNH,
                [p.gGk.DESCRIPTION]: eo(P.t.RP3Ey3, P.t.QAVj1Y),
                [p.gGk.ICON_HASH]: () => P.t.iLZ8Q9,
                [p.gGk.SPLASH_HASH]: () => P.t["4VV6dn"],
                [p.gGk.DISCOVERY_SPLASH_HASH]: () => P.t["2pds6p"],
                [p.gGk.BANNER_HASH]: eo(P.t.Cxq4zO, P.t["H7eE/9"]),
                [p.gGk.OWNER_ID]: () => P.t["8ltsLT"],
                [p.gGk.REGION]: () => P.t.X9r5Kf,
                [p.gGk.PREFERRED_LOCALE]: () => P.t.UnXuDS,
                [p.gGk.AFK_CHANNEL_ID]: eo(P.t.ClBuA4, P.t["ms+xtL"]),
                [p.gGk.AFK_TIMEOUT]: () => P.t.q21fHa,
                [p.gGk.SYSTEM_CHANNEL_ID]: eo(P.t.H1VXaa, P.t.XhtmxJ),
                [p.gGk.RULES_CHANNEL_ID]: eo(P.t.OI6MG2, P.t.lik3tI),
                [p.gGk.PUBLIC_UPDATES_CHANNEL_ID]: eo(P.t.YxBKrY, P.t.Ehsnij),
                [p.gGk.MFA_LEVEL]: ed({ [p.EkJ.NONE]: P.t.voaCCQ, [p.EkJ.ELEVATED]: P.t.pRNVwz }),
                [p.gGk.WIDGET_ENABLED]: ec(P.t.ADIty8, P.t.nf58VY),
                [p.gGk.WIDGET_CHANNEL_ID]: eo(P.t["6SBsDc"], P.t.deQ5wO),
                [p.gGk.VERIFICATION_LEVEL]: ed({
                    [p.PvD.NONE]: P.t.W27rsc,
                    [p.PvD.LOW]: P.t["V8P+Pw"],
                    [p.PvD.MEDIUM]: P.t.ERQFau,
                    [p.PvD.HIGH]: P.t["83fN0j"],
                    [p.PvD.VERY_HIGH]: P.t.PnkQJE,
                }),
                [p.gGk.DEFAULT_MESSAGE_NOTIFICATIONS]: ed({
                    [p.orn.ALL_MESSAGES]: P.t.LDi76A,
                    [p.orn.ONLY_MENTIONS]: P.t["6K83ba"],
                }),
                [p.gGk.VANITY_URL_CODE]: eo(P.t.Zplsov, P.t.u6cArh),
                [p.gGk.EXPLICIT_CONTENT_FILTER]: ed({
                    [p.gh6.DISABLED]: P.t.fmOeL3,
                    [p.gh6.MEMBERS_WITHOUT_ROLES]: P.t["4FghYw"],
                    [p.gh6.ALL_MEMBERS]: P.t.olyrSm,
                }),
                [p.gGk.PREMIUM_PROGRESS_BAR_ENABLED]: ec(P.t.rBT0sn, P.t["gc+te5"]),
                [p.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => P.t.YbouFH,
                [p.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => P.t.g3DMjB,
                [p.gGk.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => P.t["+fQAel"],
                [p.gGk.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => P.t.E1fc4v,
                [p.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => P.t.XbwtSA,
                ...X(),
            };
        case p.GaG.CHANNEL:
        case p.GaG.CHANNEL_OVERWRITE:
            return {
                [p.gGk.NAME]: e_(P.t.f8Rh0U, P.t.ebD4Qp),
                [p.gGk.POSITION]: e_(P.t.isS8te, P.t.t5uBis),
                [p.gGk.TOPIC]: eu(P.t.esQcxn, P.t["m+veAn"], P.t["ws/1FA"]),
                [p.gGk.BITRATE]: e_(P.t.fw81ak, P.t.MFNlgZ),
                [p.gGk.RTC_REGION_OVERRIDE]: eu(P.t["6kajxx"], P.t.eGOlmU, P.t["0JMZdz"]),
                [p.gGk.USER_LIMIT]: e_(P.t.wk5t7p, P.t.XgjCEh),
                [p.gGk.RATE_LIMIT_PER_USER]: e_(P.t["7lirhF"], P.t.j4CCJR),
                [p.gGk.PERMISSIONS_RESET]: () => P.t["+vSBFY"],
                [p.gGk.PERMISSIONS_GRANTED]: () => P.t.EKLJv8,
                [p.gGk.PERMISSIONS_DENIED]: () => P.t.U3rO5X,
                [p.gGk.REASON]: () => P.t["2IW3C5"],
                [p.gGk.NSFW]: ec(P.t.H8Ri2Y, P.t.WW6cJw),
                [p.gGk.TYPE]: e_(P.t.Vn5zn2, P.t.aq4uWI),
                [p.gGk.VIDEO_QUALITY_MODE]: e_(P.t.e68fAU, P.t.djbES0),
                [p.gGk.DEFAULT_AUTO_ARCHIVE_DURATION]: e_(P.t.nYz2mg, P.t.oczvRI),
                [p.gGk.FLAGS]: () => P.t.ImCQko,
                [p.gGk.AVAILABLE_TAG_ADD]: () => P.t.H86QQU,
                [p.gGk.AVAILABLE_TAG_EDIT]: () => P.t.YtUzls,
                [p.gGk.AVAILABLE_TAG_DELETE]: () => P.t["8QOseg"],
                [p.gGk.LINKED_LOBBY]: eo(P.t["+/3TkD"], P.t["5kDYS3"]),
            };
        case p.GaG.USER:
            return {
                [p.gGk.NICK]: eu(P.t.qXDsHv, P.t["m+qury"], P.t.DvLvjF),
                [p.gGk.DEAF]: ec(P.t.mArLlW, P.t.ddvVYG),
                [p.gGk.MUTE]: ec(P.t["bxs/lS"], P.t.FjecQM),
                [p.gGk.ROLES_REMOVE]: () => P.t["+2SDWV"],
                [p.gGk.ROLES_ADD]: () => P.t["B3/3IJ"],
                [p.gGk.PRUNE_DELETE_DAYS]: () => P.t["+Cvc+D"],
                [p.gGk.COMMUNICATION_DISABLED_UNTIL]: eu(P.t.LXTQr5, P.t.LXTQr5, P.t.ULSdnE),
                [p.gGk.BYPASSES_VERIFICATION]: ec(P.t.NBPBui, P.t.zATost),
                [p.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => P.t.YbouFH,
                ...X(),
            };
        case p.GaG.ROLE:
            return {
                [p.gGk.NAME]: e_(P.t.QBmlaD, P.t["Lfs4r+"]),
                [p.gGk.DESCRIPTION]: e_(P.t.XeYKWJ, P.t.PSfeIj),
                [p.gGk.PERMISSIONS_GRANTED]: () => P.t["9i/DvE"],
                [p.gGk.PERMISSIONS_DENIED]: () => P.t.pa1ZVh,
                [p.gGk.COLOR]: eA({ "#000000": P.t.TK6E1H }, P.t["2FQFiw"]),
                [p.gGk.COLORS]: (e) => (null == e.newValue.secondary_color ? P.t.U44ttm : P.t["WnSwL/"]),
                [p.gGk.HOIST]: ec(P.t.gWfe24, P.t["+tb8kN"]),
                [p.gGk.MENTIONABLE]: ec(P.t.LL8VFF, P.t.Z7xzmC),
                [p.gGk.ICON_HASH]: () => P.t["iEE79/"],
                [p.gGk.UNICODE_EMOJI]: () => P.t.KiLMM0,
                ...X(),
            };
        case p.GaG.ONBOARDING_PROMPT:
            return {
                ...X(),
                [p.gGk.TITLE]: e_(P.t["sNpuy/"], P.t["3Ukc/g"]),
                [p.gGk.DESCRIPTION]: e_(P.t.PP1q0x, P.t.z7pYLg),
                [p.gGk.OPTIONS]: () => P.t["3G5C9+"],
                [p.gGk.SINGLE_SELECT]: ec(P.t.v4WnR3, P.t["6Qg3uC"]),
                [p.gGk.REQUIRED]: ec(P.t["0MPAM6"], P.t.pwsXir),
            };
        case p.GaG.GUILD_ONBOARDING:
            return {
                ...X(),
                [p.gGk.DEFAULT_CHANNEL_IDS]: () => P.t["8M+D2s"],
                [p.gGk.ENABLE_DEFAULT_CHANNELS]: ec(P.t["EYd/ls"], P.t["36OZeQ"]),
                [p.gGk.ENABLE_ONBOARDING_PROMPTS]: ec(P.t.V3u8PV, P.t["r66lc/"]),
                [p.gGk.ENABLED]: ec(P.t.SODVIs, P.t.u8HY5U),
            };
        case p.GaG.HOME_SETTINGS:
            return {
                ...X(),
                [p.gGk.WELCOME_MESSAGE]: () => P.t.dKQ1xd,
                [p.gGk.NEW_MEMBER_ACTIONS]: () => P.t.jDUIno,
                [p.gGk.RESOURCE_CHANNELS]: () => P.t.SIX0mr,
            };
        case p.GaG.INVITE:
            return {
                [p.gGk.CODE]: () => P.t.rrRHgb,
                [p.gGk.CHANNEL_ID]: () => P.t.Q1vd5q,
                [p.gGk.MAX_USES]: eA({ 0: P.t.Yx8LNm }, P.t["3ygnwU"]),
                [p.gGk.MAX_AGE]: eA({ [P.intl.string(P.t.PqEzn8)]: P.t.uWrLvw }, P.t["Q+5kcO"]),
                [p.gGk.TEMPORARY]: ec(P.t.MWp6H7, P.t.omiqTH),
                [p.gGk.FLAGS]: ed({ [_.Q.IS_GUEST_INVITE]: P.t.XYZMbL }),
                [p.gGk.ROLE_IDS]: () => P.t.gb1Owj,
                ...X(),
            };
        case p.GaG.WEBHOOK:
            return {
                [p.gGk.CHANNEL_ID]: e_(P.t.jhPprR, P.t.ar4qYO),
                [p.gGk.NAME]: e_(P.t.ZVGrzU, P.t.tywdZR),
                [p.gGk.AVATAR_HASH]: () => P.t.KB52Uj,
                [p.gGk.REASON]: () => P.t["2IW3C5"],
            };
        case p.GaG.EMOJI:
            return { [p.gGk.NAME]: e_(P.t.ahU1o5, P.t["wxs+vZ"]), ...X() };
        case p.GaG.STICKER:
            return {
                [p.gGk.NAME]: e_(P.t.cdl0Yo, P.t.o3W2ly),
                [p.gGk.TAGS]: e_(P.t["zwL+S2"], P.t["VYfKA+"]),
                [p.gGk.DESCRIPTION]: e_(P.t.XeYKWJ, P.t.PSfeIj),
                ...X(),
            };
        case p.GaG.INTEGRATION:
            return {
                [p.gGk.ENABLE_EMOTICONS]: ec(P.t.FI0m5x, P.t.olpKC6),
                [p.gGk.EXPIRE_BEHAVIOR]: ed({ 0: P.t["1Bb1+u"], 1: P.t.vjlW6m }),
                [p.gGk.EXPIRE_GRACE_PERIOD]: () => P.t.iovXMa,
                ...X(),
            };
        case p.GaG.STAGE_INSTANCE:
            return {
                [p.gGk.TOPIC]: e_(P.t["m+veAn"], P.t.esQcxn),
                [p.gGk.PRIVACY_LEVEL]: ed({ [k.dD.GUILD_ONLY]: P.t["EC+CDt"], [k.dD.PUBLIC]: P.t["pK/WG0"] }),
                ...X(),
            };
        case p.GaG.GUILD_SCHEDULED_EVENT:
            return {
                [p.gGk.NAME]: () => P.t["21EXHW"],
                [p.gGk.DESCRIPTION]: () => P.t.Vm1ofw,
                [p.gGk.PRIVACY_LEVEL]: ed({ [k.dD.GUILD_ONLY]: P.t["EC+CDt"], [k.dD.PUBLIC]: P.t["pK/WG0"] }),
                [p.gGk.STATUS]: ed({
                    [k.XG.SCHEDULED]: P.t.hXKDgq,
                    [k.XG.ACTIVE]: P.t.lRX1nz,
                    [k.XG.COMPLETED]: P.t["/eFIhq"],
                    [k.XG.CANCELED]: P.t.NWIYhj,
                }),
                [p.gGk.ENTITY_TYPE]: ed({
                    [k.Ps.NONE]: P.t["6sO3Ss"],
                    [k.Ps.STAGE_INSTANCE]: P.t["Wo+s1y"],
                    [k.Ps.VOICE]: P.t.XCVaIL,
                    [k.Ps.EXTERNAL]: P.t.IvhAj2,
                }),
                [p.gGk.CHANNEL_ID]: eo(P.t.yJBIcX, P.t["+PqSsi"]),
                [p.gGk.LOCATION]: eo(P.t.GaMBHy, P.t.PsICk0),
                [p.gGk.IMAGE_HASH]: eo(P.t.S3vcRK, P.t.KQu47I),
                ...X(),
            };
        case p.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
            return {
                [p.gGk.SCHEDULED_START_TIME]: eo(P.t.zMIYVg, P.t.fzF8Gd),
                [p.gGk.SCHEDULED_END_TIME]: eo(P.t.vONSQA, P.t.IlIti3),
                [p.gGk.IS_CANCELED]: (e) => {
                    if (null != e.oldValue || !0 === e.newValue) {
                        if (!e.oldValue && e.newValue) return P.t["7RkicW"];
                        else if (e.oldValue && !e.newValue) return P.t.dRNTWW;
                    }
                },
                ...X(),
            };
        case p.GaG.THREAD:
            return {
                [p.gGk.NAME]: e_(P.t.tUKRzX, P.t.kPCHON),
                [p.gGk.ARCHIVED]: ec(P.t.jDi9FK, P.t.F6dvbT),
                [p.gGk.LOCKED]: ec(P.t.JSy1QW, P.t.C7Jgo8),
                [p.gGk.INVITABLE]: ec(P.t.dxNUs9, P.t.biJvYG),
                [p.gGk.AUTO_ARCHIVE_DURATION]: e_(P.t.LuaG3y, P.t["18d9qr"]),
                [p.gGk.RATE_LIMIT_PER_USER]: e_(P.t["7lirhF"], P.t.j4CCJR),
                [p.gGk.FLAGS]: () => P.t.sSAQtj,
                [p.gGk.AVAILABLE_TAG_ADD]: () => P.t.H86QQU,
                [p.gGk.AVAILABLE_TAG_DELETE]: () => P.t["8QOseg"],
                ...X(),
            };
        case p.GaG.APPLICATION_COMMAND:
            var t;
            let n;
            return (
                (t = e.changes),
                (n = { ...X() }),
                t?.forEach((e) => {
                    e.newValue
                        ? e.newValue.permission
                            ? (n[e.key] = () => P.t["JH+89C"])
                            : (n[e.key] = () => P.t.HUrFDu)
                        : (n[e.key] = () => P.t.vynxnV);
                }),
                n
            );
        case p.GaG.AUTO_MODERATION_RULE:
            return {
                [p.gGk.NAME]: () => P.t.XwxAJT,
                [p.gGk.AUTO_MODERATION_TRIGGER_TYPE]: () => P.t.fx0pyl,
                [p.gGk.AUTO_MODERATION_EVENT_TYPE]: () => P.t["46Y+L5"],
                [p.gGk.AUTO_MODERATION_ACTIONS]: () => P.t["8efxfv"],
                [p.gGk.AUTO_MODERATION_ENABLED]: (e) => (!0 === (e.newValue ?? e.oldValue) ? P.t.fCmxC2 : P.t.Wrg9Jn),
                [p.gGk.AUTO_MODERATION_EXEMPT_ROLES]: () => P.t.TRb7Nx,
                [p.gGk.AUTO_MODERATION_EXEMPT_CHANNELS]: () => P.t.mzitLE,
                [p.gGk.AUTO_MODERATION_TRIGGER_METADATA]: () => P.t["h/lM65"],
                [p.gGk.AUTO_MODERATION_ADD_KEYWORDS]: () => P.t["9V2yaC"],
                [p.gGk.AUTO_MODERATION_REMOVE_KEYWORDS]: () => P.t["4Qe9ny"],
                [p.gGk.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => P.t.GyZtxp,
                [p.gGk.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => P.t.OQDadc,
                [p.gGk.AUTO_MODERATION_ADD_ALLOW_LIST]: () => P.t["FvvR+K"],
                [p.gGk.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => P.t.p5nSvy,
                ...X(),
            };
        case p.GaG.GUILD_SOUNDBOARD:
            return {
                [p.gGk.NAME]: e_(P.t.VOtRSO, P.t.OK7B8E),
                [p.gGk.VOLUME]: e_(P.t.igrDB9, P.t.L5lDFJ),
                [p.gGk.EMOJI_NAME]: eu(P.t.IIanaY, P.t["z4w4U/"], P.t.V8TfyU),
                [p.gGk.EMOJI_ID]: eu(P.t.ainxMB, P.t["2NPsYu"], P.t["8crtns"]),
                ...X(),
            };
        case p.GaG.VOICE_CHANNEL_STATUS:
            return { [p.gGk.STATUS]: () => P.t.HyCSnI, ...X() };
        case p.GaG.GUILD_MEMBER_VERIFICATION:
            return {
                [p.gGk.VERIFICATION_ENABLED]: (e) => (!0 === e.newValue ? P.t.fnkzDY : P.t.WYT6ka),
                [p.gGk.MANUAL_APPROVAL_ENABLED]: (e) => (!0 === e.newValue ? P.t.jzSvVd : P.t.WxyOtj),
                ...X(),
            };
        case p.GaG.GUILD_PROFILE:
            return {
                [p.gGk.DESCRIPTION]: () => P.t.nsUZKY,
                [p.gGk.BRAND_COLOR_PRIMARY]: () => P.t.qe9mgN,
                [p.gGk.CUSTOM_BANNER_HASH]: () => P.t["04b5KC"],
                [p.gGk.TRAITS]: () => P.t.dEy9WO,
                [p.gGk.GAME_APPLICATION_IDS]: () => P.t["8BOT3x"],
                [p.gGk.VISIBILITY]: () => P.t.bCl1Ep,
                [p.gGk.SERVER_TAG]: eo(P.t.ix1dnX, P.t["4LKpKb"]),
            };
        default:
            return X();
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
    { value: p.F_X.ALL, label: P.intl.string(P.t.QxEVcv), valueLabel: P.intl.string(P.t.an9Ry3) },
    { value: p.F_X.GUILD_UPDATE, label: P.intl.string(P.t["5INZa3"]) },
    { value: p.F_X.CHANNEL_CREATE, label: P.intl.string(P.t["2uh4vJ"]) },
    { value: p.F_X.CHANNEL_UPDATE, label: P.intl.string(P.t.mGsBLV) },
    { value: p.F_X.CHANNEL_DELETE, label: P.intl.string(P.t.hCHzAr) },
    { value: p.F_X.CHANNEL_OVERWRITE_CREATE, label: P.intl.string(P.t["8TnAMP"]) },
    { value: p.F_X.CHANNEL_OVERWRITE_UPDATE, label: P.intl.string(P.t.Jqx0Bi) },
    { value: p.F_X.CHANNEL_OVERWRITE_DELETE, label: P.intl.string(P.t.gBXOr4) },
    { value: p.F_X.MEMBER_KICK, label: P.intl.string(P.t["Q1/hN8"]) },
    { value: p.F_X.MEMBER_PRUNE, label: P.intl.string(P.t.tOTTja) },
    { value: p.F_X.MEMBER_BAN_ADD, label: P.intl.string(P.t["NfPn+e"]) },
    { value: p.F_X.MEMBER_BAN_REMOVE, label: P.intl.string(P.t.XCsGfI) },
    { value: p.F_X.MEMBER_UPDATE, label: P.intl.string(P.t["F/jmNJ"]) },
    { value: p.F_X.MEMBER_ROLE_UPDATE, label: P.intl.string(P.t.zAveSI) },
    { value: p.F_X.MEMBER_MOVE, label: P.intl.string(P.t.QshteR) },
    { value: p.F_X.MEMBER_DISCONNECT, label: P.intl.string(P.t.Z45os7) },
    { value: p.F_X.BOT_ADD, label: P.intl.string(P.t.vuH24Z) },
    { value: p.F_X.THREAD_CREATE, label: P.intl.string(P.t["+zl0DG"]) },
    { value: p.F_X.THREAD_UPDATE, label: P.intl.string(P.t.rbIry3) },
    { value: p.F_X.THREAD_DELETE, label: P.intl.string(P.t.hFjNEA) },
    { value: p.F_X.ROLE_CREATE, label: P.intl.string(P.t.AbxKtv) },
    { value: p.F_X.ROLE_UPDATE, label: P.intl.string(P.t.t3Z6sU) },
    { value: p.F_X.ROLE_DELETE, label: P.intl.string(P.t.YsFpa4) },
    { value: p.F_X.ONBOARDING_PROMPT_CREATE, label: P.intl.string(P.t.ZV9tqc) },
    { value: p.F_X.ONBOARDING_PROMPT_UPDATE, label: P.intl.string(P.t.PcOdvX) },
    { value: p.F_X.ONBOARDING_PROMPT_DELETE, label: P.intl.string(P.t["+r33Na"]) },
    { value: p.F_X.ONBOARDING_CREATE, label: P.intl.string(P.t.uDADde) },
    { value: p.F_X.ONBOARDING_UPDATE, label: P.intl.string(P.t.J1H1wg) },
    { value: p.F_X.HOME_SETTINGS_CREATE, label: P.intl.string(P.t.Di4cvI) },
    { value: p.F_X.HOME_SETTINGS_UPDATE, label: P.intl.string(P.t.tzyrJH) },
    { value: p.F_X.INVITE_CREATE, label: P.intl.string(P.t["0BNJdX"]) },
    { value: p.F_X.INVITE_UPDATE, label: P.intl.string(P.t["o++obV"]) },
    { value: p.F_X.INVITE_DELETE, label: P.intl.string(P.t.iP40Az) },
    { value: p.F_X.WEBHOOK_CREATE, label: P.intl.string(P.t["tBF4+S"]) },
    { value: p.F_X.WEBHOOK_UPDATE, label: P.intl.string(P.t.eV3McO) },
    { value: p.F_X.WEBHOOK_DELETE, label: P.intl.string(P.t.AAL3K1) },
    { value: p.F_X.EMOJI_CREATE, label: P.intl.string(P.t.RuWm0V) },
    { value: p.F_X.EMOJI_UPDATE, label: P.intl.string(P.t.WzdUY7) },
    { value: p.F_X.EMOJI_DELETE, label: P.intl.string(P.t.c3dK2L) },
    { value: p.F_X.MESSAGE_DELETE, label: P.intl.string(P.t.daTfXh) },
    { value: p.F_X.MESSAGE_BULK_DELETE, label: P.intl.string(P.t.nrBxeh) },
    { value: p.F_X.MESSAGE_PIN, label: P.intl.string(P.t.MUldyN) },
    { value: p.F_X.MESSAGE_UNPIN, label: P.intl.string(P.t.n4zKhA) },
    { value: p.F_X.INTEGRATION_CREATE, label: P.intl.string(P.t.deNm8x) },
    { value: p.F_X.INTEGRATION_UPDATE, label: P.intl.string(P.t.HT7Sfg) },
    { value: p.F_X.INTEGRATION_DELETE, label: P.intl.string(P.t["+kJ09q"]) },
    { value: p.F_X.STICKER_CREATE, label: P.intl.string(P.t["3DzNjU"]) },
    { value: p.F_X.STICKER_UPDATE, label: P.intl.string(P.t.tdhW5b) },
    { value: p.F_X.STICKER_DELETE, label: P.intl.string(P.t["+ZhGOk"]) },
    { value: p.F_X.STAGE_INSTANCE_CREATE, label: P.intl.string(P.t.sPbjA6) },
    { value: p.F_X.STAGE_INSTANCE_UPDATE, label: P.intl.string(P.t.cW9LfJ) },
    { value: p.F_X.STAGE_INSTANCE_DELETE, label: P.intl.string(P.t["U1r+yD"]) },
    { value: p.F_X.GUILD_SCHEDULED_EVENT_CREATE, label: P.intl.string(P.t.H81Zyy) },
    { value: p.F_X.GUILD_SCHEDULED_EVENT_UPDATE, label: P.intl.string(P.t["FM69l+"]) },
    { value: p.F_X.GUILD_SCHEDULED_EVENT_DELETE, label: P.intl.string(P.t.Rq28Bh) },
    { value: p.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE, label: P.intl.string(P.t.iPdFOt) },
    { value: p.F_X.AUTO_MODERATION_BLOCK_MESSAGE, label: P.intl.string(P.t.gNq5z6) },
    { value: p.F_X.AUTO_MODERATION_RULE_CREATE, label: P.intl.string(P.t.f72Zqb) },
    { value: p.F_X.AUTO_MODERATION_RULE_UPDATE, label: P.intl.string(P.t.XeqIiv) },
    { value: p.F_X.AUTO_MODERATION_RULE_DELETE, label: P.intl.string(P.t.syAApU) },
    { value: p.F_X.GUILD_HOME_FEATURE_ITEM, label: P.intl.string(P.t.lhG5KN) },
    { value: p.F_X.GUILD_HOME_REMOVE_ITEM, label: P.intl.string(P.t.lRPRwS) },
    { value: p.F_X.SOUNDBOARD_SOUND_CREATE, label: P.intl.string(P.t.yoRi5r) },
    { value: p.F_X.SOUNDBOARD_SOUND_UPDATE, label: P.intl.string(P.t.uKlG0Z) },
    { value: p.F_X.SOUNDBOARD_SOUND_DELETE, label: P.intl.string(P.t.gq0iCT) },
    { value: p.F_X.VOICE_CHANNEL_STATUS_CREATE, label: P.intl.string(P.t.rGr0YM) },
    { value: p.F_X.VOICE_CHANNEL_STATUS_DELETE, label: P.intl.string(P.t.V9PEQ4) },
];
function W(e, t) {
    return null != t.changes ? t.changes.find((t) => t.key === e) : null;
}
function Y(e, t) {
    return null != t.changes ? t.changes.filter((t) => t.key === e) : [];
}
function K(e) {
    let t = w().find((t) => t.value === e.action);
    return null != W(p.gGk.COMMUNICATION_DISABLED_UNTIL, e) ? P.intl.string(P.t.z3wbj8) : (t?.label ?? null);
}
let z = {
    [d.pJ.SECONDS]: (e) => P.intl.formatToPlainString(P.t.geSp4K, { seconds: e }),
    [d.pJ.MINUTES]: (e) => P.intl.formatToPlainString(P.t.iXLF9W, { minutes: e }),
    [d.pJ.HOURS]: (e) => P.intl.formatToPlainString(P.t.xCjYxK, { hours: e }),
    [d.pJ.DAYS]: (e) => P.intl.formatToPlainString(P.t["k2UNz+"], { days: e }),
};
function J(e) {
    let t = W(p.gGk.COMMUNICATION_DISABLED_UNTIL, e),
        n = Y(p.gGk.ROLES_ADD, e).length > 0,
        l = Y(p.gGk.ROLES_REMOVE, e).length > 0;
    if (null != t) {
        if (t?.newValue != null) {
            let n = new Date(t?.newValue).getTime() - x.default.extractTimestamp(e.id),
                l = Math.round(n / 1e3 / 60),
                a = (0, d.$l)(l, v);
            if (null == a.unit || null == a.time) return null;
            if (a.unit in z) {
                let e = a.unit,
                    t = a.unit === d.pJ.SECONDS ? Math.round(n / 1e3) : a.time;
                return z[e](t);
            }
        } else if (t?.oldValue != null) return P.intl.string(P.t.MA1ltr);
    } else if (n && l) return P.intl.string(P.t.RdMMew);
    else if (n) return P.intl.string(P.t["4GQqs8"]);
    else if (l) return P.intl.string(P.t["8mQ6x0"]);
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
        ? P.intl.formatToPlainString(P.t.tZw1EW, { roleNamesAdded: l, roleNamesRemoved: a })
        : t.length > 0
          ? P.intl.formatToPlainString(P.t["/mTqt5"], { roleNames: l })
          : n.length > 0
            ? P.intl.formatToPlainString(P.t.Wk4pAJ, { roleNames: a })
            : null;
}
function Z(e) {
    switch (e.action) {
        case p.F_X.GUILD_UPDATE:
            return P.t.LjZO31;
        case p.F_X.CHANNEL_CREATE:
            let t = null != e.changes ? e.changes.find((e) => e.key === p.gGk.TYPE) : null;
            if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
            switch (t.newValue) {
                case p.rbe.GUILD_STAGE_VOICE:
                    return P.t["OKp4+o"];
                case p.rbe.GUILD_VOICE:
                    return P.t.NPOy4G;
                case p.rbe.GUILD_CATEGORY:
                    return P.t.T3KIjz;
                default:
                    return P.t.wrYNG2;
            }
        case p.F_X.CHANNEL_UPDATE:
            return P.t.nTYk6B;
        case p.F_X.CHANNEL_DELETE:
            return P.t.ynfvkm;
        case p.F_X.CHANNEL_OVERWRITE_CREATE:
            return P.t.l5Cu1a;
        case p.F_X.CHANNEL_OVERWRITE_UPDATE:
            return P.t.uhtbNU;
        case p.F_X.CHANNEL_OVERWRITE_DELETE:
            return P.t["HASt/3"];
        case p.F_X.MEMBER_KICK:
            return P.t.B5hDZX;
        case p.F_X.MEMBER_PRUNE:
            return P.t.qKOZTP;
        case p.F_X.MEMBER_BAN_ADD:
            return P.t["XklUm/"];
        case p.F_X.MEMBER_BAN_REMOVE:
            return P.t.o3Y6HD;
        case p.F_X.MEMBER_UPDATE:
            return P.t.pznhLN;
        case p.F_X.MEMBER_ROLE_UPDATE:
            return P.t.Vngfia;
        case p.F_X.MEMBER_MOVE:
            return P.t.Yt6NkU;
        case p.F_X.MEMBER_DISCONNECT:
            return P.t.K4eCZw;
        case p.F_X.BOT_ADD:
            return P.t.fWvX0G;
        case p.F_X.ROLE_CREATE:
            return P.t.UTLTx6;
        case p.F_X.ROLE_UPDATE:
            return P.t.NRbN18;
        case p.F_X.ROLE_DELETE:
            return P.t["4s63tb"];
        case p.F_X.INVITE_CREATE:
            return P.t.YHOXWy;
        case p.F_X.INVITE_UPDATE:
            return P.t.ja3kGS;
        case p.F_X.INVITE_DELETE:
            return P.t["3n/iWk"];
        case p.F_X.WEBHOOK_CREATE:
            return P.t.MhYhil;
        case p.F_X.WEBHOOK_UPDATE:
            return P.t["6GTlWB"];
        case p.F_X.WEBHOOK_DELETE:
            return P.t.in0VjZ;
        case p.F_X.EMOJI_CREATE:
            return P.t["7vekRO"];
        case p.F_X.EMOJI_UPDATE:
            return P.t.IsCKfh;
        case p.F_X.EMOJI_DELETE:
            return P.t.JnUaVG;
        case p.F_X.STICKER_CREATE:
            return P.t.DRZifq;
        case p.F_X.STICKER_UPDATE:
            return P.t.bhujGc;
        case p.F_X.STICKER_DELETE:
            return P.t.rGEP9U;
        case p.F_X.MESSAGE_DELETE:
            return P.t["HPkD+M"];
        case p.F_X.MESSAGE_BULK_DELETE:
            return P.t["3RIvLE"];
        case p.F_X.MESSAGE_PIN:
            return P.t.Yna7E7;
        case p.F_X.MESSAGE_UNPIN:
            return P.t.NCxXUW;
        case p.F_X.INTEGRATION_CREATE:
            return P.t.HYvCb3;
        case p.F_X.INTEGRATION_UPDATE:
            return P.t.ibCCOS;
        case p.F_X.INTEGRATION_DELETE:
            return P.t["8zScWY"];
        case p.F_X.STAGE_INSTANCE_CREATE:
            return P.t["n7x/DF"];
        case p.F_X.STAGE_INSTANCE_UPDATE:
            return P.t["0hQYU4"];
        case p.F_X.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return P.t["Oi/in9"];
            return P.t["7ZIFm9"];
        case p.F_X.GUILD_SCHEDULED_EVENT_CREATE:
            return P.t.S7k52p;
        case p.F_X.GUILD_SCHEDULED_EVENT_UPDATE:
            return P.t.ebTK11;
        case p.F_X.GUILD_SCHEDULED_EVENT_DELETE:
            return P.t["/ARPKQ"];
        case p.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case p.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return P.t["8qCI36"];
        case p.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return P.t.zYb2da;
        case p.F_X.THREAD_CREATE:
            let n = null != e.changes ? e.changes.find((e) => e.key === p.gGk.TYPE) : null;
            if (null == n) throw Error("[AuditLog] Could not find type change for thread create");
            switch (n.newValue) {
                case p.rbe.PRIVATE_THREAD:
                    return P.t.Br0y5w;
                case p.rbe.ANNOUNCEMENT_THREAD:
                    return P.t["6uaMmO"];
                default:
                    return P.t["2cxQ7G"];
            }
        case p.F_X.THREAD_UPDATE:
            return P.t.PSsy4t;
        case p.F_X.THREAD_DELETE:
            return P.t.s3Khn8;
        case p.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return P.t.uzCqBm;
        case p.F_X.AUTO_MODERATION_BLOCK_MESSAGE:
            return P.t.NqWv2K;
        case p.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL:
            if (e.options?.auto_moderation_rule_trigger_type === F.uh.USER_PROFILE.toString()) return P.t.YQsjej;
            return P.t.SD0PwJ;
        case p.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return P.t.Vk4TwX;
        case p.F_X.AUTO_MODERATION_QUARANTINE_USER:
            return P.t["/W5u5o"];
        case p.F_X.CREATOR_MONETIZATION_REQUEST_CREATED:
            return P.t.ONvWyr;
        case p.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return P.t["ryGLk+"];
        case p.F_X.AUTO_MODERATION_RULE_CREATE:
            return P.t["NKljj+"];
        case p.F_X.AUTO_MODERATION_RULE_UPDATE:
            return P.t["3wEA9u"];
        case p.F_X.AUTO_MODERATION_RULE_DELETE:
            return P.t.umua3n;
        case p.F_X.ONBOARDING_PROMPT_CREATE:
            return P.t["/8A1g2"];
        case p.F_X.ONBOARDING_PROMPT_UPDATE:
            return P.t.ArIrWI;
        case p.F_X.ONBOARDING_PROMPT_DELETE:
            return P.t.IuBTao;
        case p.F_X.ONBOARDING_CREATE:
            return P.t["wDaq3/"];
        case p.F_X.ONBOARDING_UPDATE:
            return P.t["yONu/l"];
        case p.F_X.HOME_SETTINGS_CREATE:
            return P.t.dSdCjG;
        case p.F_X.HOME_SETTINGS_UPDATE:
            return P.t.XHE8qv;
        case p.F_X.GUILD_HOME_FEATURE_ITEM:
            let l = null != e.changes ? e.changes.find((e) => e.key === p.gGk.ENTITY_TYPE) : null;
            if (null == l) return P.t["UZ+U3A"];
            switch (l.newValue) {
                case E.MESSAGE:
                    return P.t["PyEa+J"];
                case E.FORUM_POST:
                    return P.t.hCuAb1;
                default:
                    return P.t["UZ+U3A"];
            }
        case p.F_X.GUILD_HOME_REMOVE_ITEM:
            return P.t.kPReun;
        case p.F_X.SOUNDBOARD_SOUND_CREATE:
            return P.t["0PD83V"];
        case p.F_X.SOUNDBOARD_SOUND_UPDATE:
            return P.t.CM8n1w;
        case p.F_X.SOUNDBOARD_SOUND_DELETE:
            return P.t["kVz4/0"];
        case p.F_X.VOICE_CHANNEL_STATUS_CREATE:
            return P.t.MWjnU7;
        case p.F_X.VOICE_CHANNEL_STATUS_DELETE:
            return P.t.aS8Krq;
        case p.F_X.GUILD_MEMBER_VERIFICATION_UPDATE:
            return P.t["NUKUb+"];
        case p.F_X.GUILD_PROFILE_UPDATE:
            return P.t.Ed6hF1;
        case p.F_X.GUILD_MIGRATE_PIN_PERMISSION:
            return P.t["3Ne7MA"];
        case p.F_X.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION:
            return P.t["naflH+"];
        default:
            return null;
    }
}
function q(e) {
    switch (e) {
        case b.lx.GUILD_FEED_REMOVED:
            return P.intl.string(P.t["5G8ZD4"]);
        case b.lx.ACTIVE_CHANNELS_REMOVED:
            return P.intl.string(P.t["4YLtzC"]);
        case b.lx.PINNED:
            return P.intl.string(P.t["1QLRYb"]);
    }
    return null;
}
function $(e) {
    switch (e) {
        case b.lx.GUILD_FEED_REMOVED:
            return P.intl.string(P.t.S5kuWQ);
        case b.lx.ACTIVE_CHANNELS_REMOVED:
            return P.intl.string(P.t["8qpgcz"]);
        case b.lx.PINNED:
            return P.intl.string(P.t.CMweGA);
    }
    return null;
}
function ee(e, t) {
    switch (e) {
        case p.xBc.CREATE_INSTANT_INVITE:
            return P.intl.string(P.t.zJrgTG);
        case p.xBc.KICK_MEMBERS:
            return P.intl.string(P.t.pBNv6i);
        case p.xBc.BAN_MEMBERS:
            return P.intl.string(P.t.oTBA7N);
        case p.xBc.ADMINISTRATOR:
            return P.intl.string(P.t.PGvZqX);
        case p.xBc.MANAGE_CHANNELS:
            if (t.targetType === p.GaG.CHANNEL || t.targetType === p.GaG.CHANNEL_OVERWRITE)
                return P.intl.string(P.t.nAw15L);
            return P.intl.string(P.t["9qLtWs"]);
        case p.xBc.MANAGE_GUILD:
            return P.intl.string(P.t.QZRcfO);
        case p.xBc.VIEW_GUILD_ANALYTICS:
            return P.intl.string(P.t["rQJBE/"]);
        case p.xBc.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return P.intl.string(P.t["0lTLTv"]);
        case p.xBc.CHANGE_NICKNAME:
            return P.intl.string(P.t.dilOF6);
        case p.xBc.MANAGE_NICKNAMES:
            return P.intl.string(P.t["t+Ct5x"]);
        case p.xBc.MANAGE_ROLES:
            return P.intl.string(P.t["C8d+oG"]);
        case p.xBc.MANAGE_WEBHOOKS:
            return P.intl.string(P.t["/ADKmM"]);
        case p.xBc.CREATE_GUILD_EXPRESSIONS:
            return P.intl.string(P.t.HarVuP);
        case p.xBc.MANAGE_GUILD_EXPRESSIONS:
            return P.intl.string(P.t.bbuXIn);
        case p.xBc.VIEW_AUDIT_LOG:
            return P.intl.string(P.t.fZgLpA);
        case p.xBc.VIEW_CHANNEL:
            if (t.targetType === p.GaG.CHANNEL || t.targetType === p.GaG.CHANNEL_OVERWRITE)
                return P.intl.string(P.t["W/A4Qp"]);
            return P.intl.string(P.t.uV83yi);
        case p.xBc.SEND_MESSAGES:
            return P.intl.string(P.t.T32rkC);
        case p.xBc.SEND_TTS_MESSAGES:
            return P.intl.string(P.t.Mg7bku);
        case p.xBc.USE_APPLICATION_COMMANDS:
            return P.intl.string(P.t.shbR1a);
        case p.xBc.MANAGE_MESSAGES:
            return P.intl.string(P.t["6lU9xM"]);
        case p.xBc.EMBED_LINKS:
            return P.intl.string(P.t["969dEL"]);
        case p.xBc.ATTACH_FILES:
            return P.intl.string(P.t["3AS4UM"]);
        case p.xBc.READ_MESSAGE_HISTORY:
            return P.intl.string(P.t.l9ufaR);
        case p.xBc.MENTION_EVERYONE:
            return P.intl.string(P.t.Y78KGC);
        case p.xBc.USE_EXTERNAL_EMOJIS:
            return P.intl.string(P.t.BpBGZU);
        case p.xBc.USE_EXTERNAL_STICKERS:
            return P.intl.string(P.t["UeRs+b"]);
        case p.xBc.ADD_REACTIONS:
            return P.intl.string(P.t.yEoJAr);
        case p.xBc.CONNECT:
            return P.intl.string(P.t.S0W8Z5);
        case p.xBc.SPEAK:
            return P.intl.string(P.t["8w1tIR"]);
        case p.xBc.MUTE_MEMBERS:
            return P.intl.string(P.t["8EI30/"]);
        case p.xBc.DEAFEN_MEMBERS:
            return P.intl.string(P.t["9L47Fr"]);
        case p.xBc.MOVE_MEMBERS:
            return P.intl.string(P.t.YtjJPQ);
        case p.xBc.USE_VAD:
            return P.intl.string(P.t["08zAV7"]);
        case p.xBc.PRIORITY_SPEAKER:
            return P.intl.string(P.t.BVK71i);
        case p.xBc.STREAM:
            return P.intl.string(P.t.FlNoSV);
        case p.xBc.REQUEST_TO_SPEAK:
            return P.intl.string(P.t["5kicT2"]);
        case p.xBc.USE_EMBEDDED_ACTIVITIES:
            return P.intl.string(P.t.rLSGeh);
        case p.xBc.CREATE_EVENTS:
            return P.intl.string(P.t.qyjZua);
        case p.xBc.MANAGE_EVENTS:
            return P.intl.string(P.t.HIgA5a);
        case p.xBc.CREATE_PUBLIC_THREADS:
            return P.intl.string(P.t["25rKnX"]);
        case p.xBc.CREATE_PRIVATE_THREADS:
            return P.intl.string(P.t.QwbTSa);
        case p.xBc.SEND_MESSAGES_IN_THREADS:
            return P.intl.string(P.t.fTE74g);
        case p.xBc.MANAGE_THREADS:
            return P.intl.string(P.t.kEqgr7);
        case p.xBc.MODERATE_MEMBERS:
            return P.intl.string(P.t["+RL6pz"]);
        case p.xBc.SET_VOICE_CHANNEL_STATUS:
            return P.intl.string(P.t.VBwkUf);
        case p.xBc.SEND_POLLS:
            return P.intl.string(P.t.UMQ7Ww);
        case p.xBc.USE_EXTERNAL_APPS:
            return P.intl.string(P.t.TtA5rK);
        case p.xBc.PIN_MESSAGES:
            return P.intl.string(P.t.Y5BI39);
        case p.xBc.BYPASS_SLOWMODE:
            return P.intl.string(P.t.kqcjeV);
        case p.xBc.MANAGE_OFFICIAL_MESSAGES:
            return P.intl.string(P.t.Aj9ruN);
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
                                (e) => D.A.getChannel(e),
                                (e) => (0, g.m1)(e, C.default, L.A, !0),
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
                                (e) => h.A.getRole(t.id, e),
                                (e) => e.name,
                            );
                        case p.GaG.ONBOARDING_PROMPT:
                            let n = es(
                                e,
                                p.gGk.ID,
                                (e) => G.A.getOnboardingPrompt(e),
                                (e) => e.title,
                            );
                            return null == n || "" === n ? P.intl.string(P.t.ZNQyiR) : n;
                        case p.GaG.GUILD_ONBOARDING:
                        case p.GaG.GUILD_MEMBER_VERIFICATION:
                            return t;
                        case p.GaG.INVITE:
                            return es(e, p.gGk.CODE, p.FXj);
                        case p.GaG.INTEGRATION:
                            return es(
                                e,
                                p.gGk.TYPE,
                                (e) => U.A.integrations.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case p.GaG.WEBHOOK:
                            return es(
                                e,
                                p.gGk.NAME,
                                (e) => U.A.webhooks.find((t) => t.id === e),
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
                                (e) => S.A.getStickerById(e),
                                (e) => e.name,
                            );
                        case p.GaG.STAGE_INSTANCE:
                            return es(
                                e,
                                p.gGk.TOPIC,
                                (e) => Object.values(m.A.getStageInstancesByGuild(t.id))?.find((t) => t.id === e),
                                (e) => e.topic,
                            );
                        case p.GaG.GUILD_SCHEDULED_EVENT:
                        case p.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return es(
                                e,
                                p.gGk.NAME,
                                (e) => U.A.guildScheduledEvents.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case p.GaG.THREAD:
                            return es(
                                e,
                                p.gGk.NAME,
                                (e) => U.A.threads.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case p.GaG.APPLICATION_COMMAND:
                            if (e.targetId === e.options.application_id) {
                                let t = U.A.integrations.find((t) => t.application?.id === e.targetId);
                                if (null != t) return t.name;
                                return e.targetId;
                            }
                            return es(
                                e,
                                p.gGk.NAME,
                                (e) => U.A.applicationCommands.find((t) => t.id === e),
                                (e) => {
                                    let t =
                                        null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
                                    return e.type === A.kc.CHAT ? `/\u2060${t}` : t;
                                },
                            );
                        case p.GaG.AUTO_MODERATION_RULE:
                            return es(
                                e,
                                p.gGk.NAME,
                                (e) => U.A.automodRules.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case p.GaG.GUILD_SOUNDBOARD:
                            return es(e, p.gGk.NAME, p.FXj);
                        case p.GaG.HOME_SETTINGS:
                            return es(
                                e,
                                p.gGk.GUILD_ID,
                                (e) => O.h.getSettings(e),
                                () => P.intl.string(P.t.VbpLyU),
                                t.id,
                            );
                        case p.GaG.VOICE_CHANNEL_STATUS:
                            return es(
                                e,
                                p.gGk.STATUS,
                                (e) => D.A.getChannel(e),
                                (e) => (0, g.m1)(e, C.default, L.A, !0),
                            );
                        default:
                            return j.warn("Unknown targetType for log", e), null;
                    }
                })(e, t),
                a = C.default.getUser(e.userId);
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
                                            (e) => D.A.getChannel(e),
                                            (e) => e,
                                            e.options.channel_id,
                                        )),
                                    null != e.options.members_removed &&
                                        0 !== e.options.members_removed &&
                                        (t.count = e.options.members_removed),
                                    null != e.options.event_exception_id)
                                ) {
                                    let n = U.A.guildScheduledEvents.find((t) => t.id === e.targetId),
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
                        let a = (function (e, t, n) {
                            if (t.action === p.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let t = e.newValue || e.oldValue;
                                switch (t.type) {
                                    case p.g0g.ROLE:
                                        e.subtarget = eE(
                                            t.id,
                                            (e) => h.A.getRole(n.id, e),
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
                                        t.id === r()(n.id).subtract(1).toString()
                                            ? (e.subtarget = P.intl.string(P.t.MSYhgh))
                                            : (e.subtarget = eE(
                                                  t.id,
                                                  (e) => D.A.getChannel(e),
                                                  (e) => (0, g.m1)(e, C.default, L.A, !0),
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
                                        (e) => D.A.getChannel(e),
                                        (e) => (0, g.m1)(e, C.default, L.A, !0),
                                    );
                                case p.gGk.AFK_TIMEOUT:
                                    return ei(e, (e) => e / 60);
                                case p.gGk.BITRATE:
                                    return ei(e, (e) => e / 1e3);
                                case p.gGk.COLOR:
                                    return ei(e, (e) => (0, u.Hl)(e).toUpperCase());
                                case p.gGk.THEME_COLORS:
                                    return ei(
                                        e,
                                        (e) => `${(0, u.Hl)(e[0]).toUpperCase()}, ${(0, u.Hl)(e[1]).toUpperCase()}`,
                                    );
                                case p.gGk.MAX_AGE:
                                    return ei(e, (e) => {
                                        let t = f.Ay.getMaxAgeOptionByValue(e);
                                        return null !== t ? t.label : e;
                                    });
                                case p.gGk.PERMISSIONS: {
                                    let t = [],
                                        { added: n, removed: l } = en(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let e = new R.QO(p.gGk.PERMISSIONS_GRANTED, null, n);
                                        t.push(e);
                                    }
                                    if (l.length > 0) {
                                        let e = new R.QO(p.gGk.PERMISSIONS_DENIED, null, l);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case p.gGk.PERMISSIONS_GRANTED:
                                case p.gGk.PERMISSIONS_DENIED: {
                                    let t = [],
                                        { added: n, removed: l } = en(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let l = new R.QO(e.key, null, n);
                                        t.push(l);
                                    }
                                    if (l.length > 0) {
                                        let e = new R.QO(p.gGk.PERMISSIONS_RESET, l, l);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case p.gGk.FLAGS: {
                                    let t = [],
                                        { added: n, removed: l } = (function (e, t) {
                                            let n = "number" == typeof e ? e : 0,
                                                l = "number" == typeof t ? t : 0,
                                                a = c.VL(l, n),
                                                r = c.VL(n, l),
                                                i = [],
                                                s = [];
                                            for (let e in b.lx) {
                                                let t = b.lx[e];
                                                c.Lt(a, t) && i.push(t), c.Lt(r, t) && s.push(t);
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
                                case p.gGk.PREFERRED_LOCALE:
                                    return ei(e, (e) => {
                                        let t = (0, P.getAvailableLocales)().find((t) => t.value === e);
                                        return null != t ? t.name : null;
                                    });
                                case p.gGk.VIDEO_QUALITY_MODE:
                                    return ei(e, (e) =>
                                        e === p.K3c.FULL ? P.intl.string(P.t["7jOoJE"]) : P.intl.string(P.t.jjKYpu),
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
                                            let i = new R.QO(l[t], !n, !r);
                                            a.push(i);
                                        }),
                                        a
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
                                                    ? P.intl.formatToMarkdownString(P.t.y91UXV, {
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
                                                    .map(D.A.getChannel)
                                                    .filter((e) => null != e)
                                                    .map((e) => (0, g.m1)(e, C.default, L.A, !0)),
                                            (e) =>
                                                null != e && e.length > 0 ? e.join(", ") : P.intl.string(P.t["K/EdV8"]),
                                        );
                                    break;
                                case p.gGk.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (t.targetType === p.GaG.AUTO_MODERATION_RULE)
                                        return ei(
                                            e,
                                            (e) =>
                                                e
                                                    .map((e) => h.A.getRole(n.id, e))
                                                    .filter((e) => null != e)
                                                    .map((e) => e.name),
                                            (e) =>
                                                null != e && e.length > 0 ? e.join(", ") : P.intl.string(P.t["K/EdV8"]),
                                        );
                                    break;
                                case p.gGk.ROLE_IDS:
                                    if (t.targetType === p.GaG.INVITE)
                                        return ei(e, (e) =>
                                            e
                                                .map((e) => h.A.getRole(n.id, e))
                                                .filter((e) => null != e)
                                                .map((e) => ({ id: e.id, name: e.name })),
                                        );
                                    break;
                                case p.gGk.AVAILABLE_TAGS:
                                    return er(e);
                                case p.gGk.APPLIED_TAGS:
                                    return ea(e, t);
                                case p.gGk.SCHEDULED_START_TIME:
                                case p.gGk.SCHEDULED_END_TIME:
                                    return ei(e, (e) => (0, M.i$)(s()(new Date(e)), "LLLL"));
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
function en(e, t) {
    let n = o.iu("string" == typeof e ? e : 0),
        l = o.iu("string" == typeof t ? t : 0),
        a = o.TF(l, n),
        r = o.TF(n, l),
        i = [],
        s = [];
    for (let e in p.xBc) {
        let t = p.xBc[e];
        o.zy(a, t) && i.push(t), o.zy(r, t) && s.push(t);
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
function ea(e, t) {
    let n = Array.isArray(e.oldValue) ? e.oldValue : [],
        l = Array.isArray(e.newValue) ? e.newValue : [],
        a = D.A.getChannel(t.targetId),
        r = a?.parent_id != null ? D.A.getChannel(a.parent_id) : null,
        i = r?.availableTags ?? [],
        s = {};
    i.forEach((e) => {
        s[e.id] = { name: e.name, emojiId: e.emojiId, emojiName: e.emojiName };
    });
    let E = new Set(n),
        _ = new Set(l),
        o = l.filter((e) => !E.has(e)),
        u = n.filter((e) => !_.has(e)),
        c = [];
    for (let e of o) {
        let t = s[e] ?? { id: e, name: e };
        c.push(new R.QO(p.gGk.AVAILABLE_TAG_ADD, null, t));
    }
    for (let e of u) {
        let t = s[e] ?? { id: e, name: e };
        c.push(new R.QO(p.gGk.AVAILABLE_TAG_DELETE, null, t));
    }
    return c.length > 0 ? c : e;
}
function er(e) {
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
        for (let e in i) if (null == r[e]) return new R.QO(p.gGk.AVAILABLE_TAG_ADD, null, el(i[e]));
    }
    if (l.length > a.length) {
        for (let e in r) if (null == i[e]) return new R.QO(p.gGk.AVAILABLE_TAG_DELETE, null, el(r[e]));
    }
    for (let e in r) {
        let t = r[e],
            n = i[e];
        if (n?.name !== t.name || n?.emoji_id !== t.emoji_id || n?.emoji_name !== t.emoji_name)
            return new R.QO(p.gGk.AVAILABLE_TAG_EDIT, el(t), el(n));
    }
    return e;
}
function ei(e, t, n) {
    let l = e.newValue,
        a = e.oldValue;
    return (
        null != e.newValue && ((l = t(e.newValue)), null != n && null != l && (l = n(l))),
        null != e.oldValue && ((a = t(e.oldValue)), null != n && null != a && (a = n(a))),
        new R.QO(e.key, a || e.oldValue, l || e.newValue)
    );
}
function es(e, t, n, l, a) {
    let r = null,
        i = n((a = a ?? e.targetId));
    if ((null != i && null != l && (r = l(i)), null == r)) {
        let t = U.A.deletedTargets[e.targetType];
        null != t && null != t[a] && (r = t[a]);
    }
    if (null == r && null != e.changes) {
        let n = e.changes.find((e) => e.key === t);
        null != n && (r = n.newValue || n.oldValue);
    }
    return r ?? a;
}
function eE(e, t, n) {
    let l = e,
        a = t(e);
    return null != a && null != n && (l = n(a)), l;
}
function e_(e, t) {
    return (n) => (null == n.oldValue ? e : t);
}
function eo(e, t) {
    return (n) => (null == n.newValue ? e : t);
}
function eu(e, t, n, l) {
    return (a) => (null != a.newValue && null != a.oldValue ? e : null != a.newValue ? t : null != a.oldValue ? n : l);
}
function ec(e, t) {
    return (n) => (n.newValue ? e : t);
}
function ed(e) {
    return (t) => e[t.newValue];
}
function eA(e, t) {
    return (n) => e[n.newValue] ?? t;
}
