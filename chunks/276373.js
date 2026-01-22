n.d(t, {
    $b: () => el,
    AO: () => eE,
    CI: () => J,
    D_: () => Y,
    Df: () => eo,
    Iv: () => W,
    Kj: () => K,
    Kw: () => es,
    Lw: () => ef,
    Sn: () => eO,
    Sy: () => et,
    UM: () => X,
    Uq: () => ei,
    X9: () => ee,
    XB: () => Q,
    Yj: () => ec,
    Yx: () => $,
    Zo: () => e_,
    d8: () => eu,
    eA: () => eI,
    eN: () => Z,
    gQ: () => z,
    gT: () => eT,
    gW: () => B,
    nG: () => eA,
    nt: () => H,
    pu: () => en,
    qM: () => V,
    qd: () => er,
    rt: () => q,
    sU: () => eh,
    yy: () => eN,
    z3: () => ea,
}),
    n(65821),
    n(321073),
    n(457529);
var l = n(824120),
    r = n.n(l),
    a = n(989349),
    i = n.n(a),
    s = n(794174),
    o = n(821418),
    c = n(136722),
    u = n(317097),
    E = n(665260),
    d = n(499979),
    _ = n(155718),
    g = n(47167),
    A = n(626584),
    T = n(508675),
    f = n(627794),
    h = n(591552),
    I = n(701785),
    O = n(446600),
    N = n(679382),
    m = n(411153),
    S = n(734057),
    p = n(317525),
    b = n(994500),
    G = n(287809),
    R = n(405269),
    D = n(735547),
    L = n(661191),
    x = n(523599),
    C = n(652215),
    M = n(746080),
    v = n(411335),
    j = n(988794),
    U = n(985018);

function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}

function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let k = new A.A("AuditLogUtils"),
    F = [d.pJ.DAYS, d.pJ.HOURS, d.pJ.MINUTES, d.pJ.SECONDS],
    w = () => ({
        [C.gGk.REASON]: () => U.t["2IW3C5"],
    }),
    X = () =>
        y(
            {
                [C.gGk.NAME]: () => U.t.CkDiNH,
                [C.gGk.DESCRIPTION]: eD(U.t.RP3Ey3, U.t.QAVj1Y),
                [C.gGk.ICON_HASH]: () => U.t.iLZ8Q9,
                [C.gGk.SPLASH_HASH]: () => U.t["4VV6dn"],
                [C.gGk.DISCOVERY_SPLASH_HASH]: () => U.t["2pds6p"],
                [C.gGk.BANNER_HASH]: eD(U.t.Cxq4zO, U.t["H7eE/9"]),
                [C.gGk.OWNER_ID]: () => U.t["8ltsLT"],
                [C.gGk.REGION]: () => U.t.X9r5Kf,
                [C.gGk.PREFERRED_LOCALE]: () => U.t.UnXuDS,
                [C.gGk.AFK_CHANNEL_ID]: eD(U.t.ClBuA4, U.t["ms+xtL"]),
                [C.gGk.AFK_TIMEOUT]: () => U.t.q21fHa,
                [C.gGk.SYSTEM_CHANNEL_ID]: eD(U.t.H1VXaa, U.t.XhtmxJ),
                [C.gGk.RULES_CHANNEL_ID]: eD(U.t.OI6MG2, U.t.lik3tI),
                [C.gGk.PUBLIC_UPDATES_CHANNEL_ID]: eD(U.t.YxBKrY, U.t.Ehsnij),
                [C.gGk.MFA_LEVEL]: eC({
                    [C.EkJ.NONE]: U.t.voaCCQ,
                    [C.EkJ.ELEVATED]: U.t.pRNVwz,
                }),
                [C.gGk.WIDGET_ENABLED]: ex(U.t.ADIty8, U.t.nf58VY),
                [C.gGk.WIDGET_CHANNEL_ID]: eD(U.t["6SBsDc"], U.t.deQ5wO),
                [C.gGk.VERIFICATION_LEVEL]: eC({
                    [C.PvD.NONE]: U.t.W27rsc,
                    [C.PvD.LOW]: U.t["V8P+Pw"],
                    [C.PvD.MEDIUM]: U.t.ERQFau,
                    [C.PvD.HIGH]: U.t["83fN0j"],
                    [C.PvD.VERY_HIGH]: U.t.PnkQJE,
                }),
                [C.gGk.DEFAULT_MESSAGE_NOTIFICATIONS]: eC({
                    [C.orn.ALL_MESSAGES]: U.t.LDi76A,
                    [C.orn.ONLY_MENTIONS]: U.t["6K83ba"],
                }),
                [C.gGk.VANITY_URL_CODE]: eD(U.t.Zplsov, U.t.u6cArh),
                [C.gGk.EXPLICIT_CONTENT_FILTER]: eC({
                    [C.gh6.DISABLED]: U.t.fmOeL3,
                    [C.gh6.MEMBERS_WITHOUT_ROLES]: U.t["4FghYw"],
                    [C.gh6.ALL_MEMBERS]: U.t.olyrSm,
                }),
                [C.gGk.PREMIUM_PROGRESS_BAR_ENABLED]: ex(U.t.rBT0sn, U.t["gc+te5"]),
                [C.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => U.t.YbouFH,
                [C.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => U.t.g3DMjB,
                [C.gGk.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => U.t["+fQAel"],
                [C.gGk.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => U.t.E1fc4v,
                [C.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => U.t.XbwtSA,
            },
            w(),
        ),
    B = () => ({
        [C.gGk.NAME]: eR(U.t.f8Rh0U, U.t.ebD4Qp),
        [C.gGk.POSITION]: eR(U.t.isS8te, U.t.t5uBis),
        [C.gGk.TOPIC]: eL(U.t.esQcxn, U.t["m+veAn"], U.t["ws/1FA"]),
        [C.gGk.BITRATE]: eR(U.t.fw81ak, U.t.MFNlgZ),
        [C.gGk.RTC_REGION_OVERRIDE]: eL(U.t["6kajxx"], U.t.eGOlmU, U.t["0JMZdz"]),
        [C.gGk.USER_LIMIT]: eR(U.t.wk5t7p, U.t.XgjCEh),
        [C.gGk.RATE_LIMIT_PER_USER]: eR(U.t["7lirhF"], U.t.j4CCJR),
        [C.gGk.PERMISSIONS_RESET]: () => U.t["+vSBFY"],
        [C.gGk.PERMISSIONS_GRANTED]: () => U.t.EKLJv8,
        [C.gGk.PERMISSIONS_DENIED]: () => U.t.U3rO5X,
        [C.gGk.REASON]: () => U.t["2IW3C5"],
        [C.gGk.NSFW]: ex(U.t.H8Ri2Y, U.t.WW6cJw),
        [C.gGk.TYPE]: eR(U.t.Vn5zn2, U.t.aq4uWI),
        [C.gGk.VIDEO_QUALITY_MODE]: eR(U.t.e68fAU, U.t.djbES0),
        [C.gGk.DEFAULT_AUTO_ARCHIVE_DURATION]: eR(U.t.nYz2mg, U.t.oczvRI),
        [C.gGk.FLAGS]: () => U.t.ImCQko,
        [C.gGk.AVAILABLE_TAG_ADD]: () => U.t.H86QQU,
        [C.gGk.AVAILABLE_TAG_EDIT]: () => U.t.YtUzls,
        [C.gGk.AVAILABLE_TAG_DELETE]: () => U.t["8QOseg"],
        [C.gGk.LINKED_LOBBY]: eD(U.t["+/3TkD"], U.t["5kDYS3"]),
    }),
    V = () =>
        y(
            {
                [C.gGk.NICK]: eL(U.t.qXDsHv, U.t["m+qury"], U.t.DvLvjF),
                [C.gGk.DEAF]: ex(U.t.mArLlW, U.t.ddvVYG),
                [C.gGk.MUTE]: ex(U.t["bxs/lS"], U.t.FjecQM),
                [C.gGk.ROLES_REMOVE]: () => U.t["+2SDWV"],
                [C.gGk.ROLES_ADD]: () => U.t["B3/3IJ"],
                [C.gGk.PRUNE_DELETE_DAYS]: () => U.t["+Cvc+D"],
                [C.gGk.COMMUNICATION_DISABLED_UNTIL]: eL(U.t.LXTQr5, U.t.LXTQr5, U.t.ULSdnE),
                [C.gGk.BYPASSES_VERIFICATION]: ex(U.t.NBPBui, U.t.zATost),
                [C.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => U.t.YbouFH,
            },
            w(),
        ),
    H = () =>
        y(
            {
                [C.gGk.NAME]: eR(U.t.QBmlaD, U.t["Lfs4r+"]),
                [C.gGk.DESCRIPTION]: eR(U.t.XeYKWJ, U.t.PSfeIj),
                [C.gGk.PERMISSIONS_GRANTED]: () => U.t["9i/DvE"],
                [C.gGk.PERMISSIONS_DENIED]: () => U.t.pa1ZVh,
                [C.gGk.COLOR]: eM(
                    {
                        "#000000": U.t.TK6E1H,
                    },
                    U.t["2FQFiw"],
                ),
                [C.gGk.COLORS]: (e) => (null == e.newValue.secondary_color ? U.t.U44ttm : U.t["WnSwL/"]),
                [C.gGk.HOIST]: ex(U.t.gWfe24, U.t["+tb8kN"]),
                [C.gGk.MENTIONABLE]: ex(U.t.LL8VFF, U.t.Z7xzmC),
                [C.gGk.ICON_HASH]: () => U.t["iEE79/"],
                [C.gGk.UNICODE_EMOJI]: () => U.t.KiLMM0,
            },
            w(),
        ),
    W = () =>
        P(y({}, w()), {
            [C.gGk.TITLE]: eR(U.t["sNpuy/"], U.t["3Ukc/g"]),
            [C.gGk.DESCRIPTION]: eR(U.t.PP1q0x, U.t.z7pYLg),
            [C.gGk.OPTIONS]: () => U.t["3G5C9+"],
            [C.gGk.SINGLE_SELECT]: ex(U.t.v4WnR3, U.t["6Qg3uC"]),
            [C.gGk.REQUIRED]: ex(U.t["0MPAM6"], U.t.pwsXir),
        }),
    K = () =>
        P(y({}, w()), {
            [C.gGk.DEFAULT_CHANNEL_IDS]: () => U.t["8M+D2s"],
            [C.gGk.ENABLE_DEFAULT_CHANNELS]: ex(U.t["EYd/ls"], U.t["36OZeQ"]),
            [C.gGk.ENABLE_ONBOARDING_PROMPTS]: ex(U.t.V3u8PV, U.t["r66lc/"]),
            [C.gGk.ENABLED]: ex(U.t.SODVIs, U.t.u8HY5U),
        }),
    Y = () =>
        P(y({}, w()), {
            [C.gGk.WELCOME_MESSAGE]: () => U.t.dKQ1xd,
            [C.gGk.NEW_MEMBER_ACTIONS]: () => U.t.jDUIno,
            [C.gGk.RESOURCE_CHANNELS]: () => U.t.SIX0mr,
        }),
    z = () =>
        y(
            {
                [C.gGk.CODE]: () => U.t.rrRHgb,
                [C.gGk.CHANNEL_ID]: () => U.t.Q1vd5q,
                [C.gGk.MAX_USES]: eM(
                    {
                        0: U.t.Yx8LNm,
                    },
                    U.t["3ygnwU"],
                ),
                [C.gGk.MAX_AGE]: eM(
                    {
                        [U.intl.string(U.t.PqEzn8)]: U.t.uWrLvw,
                    },
                    U.t["Q+5kcO"],
                ),
                [C.gGk.TEMPORARY]: ex(U.t.MWp6H7, U.t.omiqTH),
                [C.gGk.FLAGS]: eC({
                    [o.Q.IS_GUEST_INVITE]: U.t.XYZMbL,
                }),
            },
            w(),
        ),
    J = () => ({
        [C.gGk.CHANNEL_ID]: eR(U.t.jhPprR, U.t.ar4qYO),
        [C.gGk.NAME]: eR(U.t.ZVGrzU, U.t.tywdZR),
        [C.gGk.AVATAR_HASH]: () => U.t.KB52Uj,
        [C.gGk.REASON]: () => U.t["2IW3C5"],
    }),
    Q = () =>
        y(
            {
                [C.gGk.NAME]: eR(U.t.ahU1o5, U.t["wxs+vZ"]),
            },
            w(),
        ),
    Z = () =>
        y(
            {
                [C.gGk.NAME]: eR(U.t.cdl0Yo, U.t.o3W2ly),
                [C.gGk.TAGS]: eR(U.t["zwL+S2"], U.t["VYfKA+"]),
                [C.gGk.DESCRIPTION]: eR(U.t.XeYKWJ, U.t.PSfeIj),
            },
            w(),
        ),
    q = () =>
        y(
            {
                [C.gGk.ENABLE_EMOTICONS]: ex(U.t.FI0m5x, U.t.olpKC6),
                [C.gGk.EXPIRE_BEHAVIOR]: eC({
                    0: U.t["1Bb1+u"],
                    1: U.t.vjlW6m,
                }),
                [C.gGk.EXPIRE_GRACE_PERIOD]: () => U.t.iovXMa,
            },
            w(),
        ),
    $ = () =>
        y(
            {
                [C.gGk.TOPIC]: eR(U.t["m+veAn"], U.t.esQcxn),
                [C.gGk.PRIVACY_LEVEL]: eC({
                    [j.dD.GUILD_ONLY]: U.t["EC+CDt"],
                    [j.dD.PUBLIC]: U.t["pK/WG0"],
                }),
            },
            w(),
        ),
    ee = () =>
        y(
            {
                [C.gGk.NAME]: () => U.t["21EXHW"],
                [C.gGk.DESCRIPTION]: () => U.t.Vm1ofw,
                [C.gGk.PRIVACY_LEVEL]: eC({
                    [j.dD.GUILD_ONLY]: U.t["EC+CDt"],
                    [j.dD.PUBLIC]: U.t["pK/WG0"],
                }),
                [C.gGk.STATUS]: eC({
                    [j.XG.SCHEDULED]: U.t.hXKDgq,
                    [j.XG.ACTIVE]: U.t.lRX1nz,
                    [j.XG.COMPLETED]: U.t["/eFIhq"],
                    [j.XG.CANCELED]: U.t.NWIYhj,
                }),
                [C.gGk.ENTITY_TYPE]: eC({
                    [j.Ps.NONE]: U.t["6sO3Ss"],
                    [j.Ps.STAGE_INSTANCE]: U.t["Wo+s1y"],
                    [j.Ps.VOICE]: U.t.XCVaIL,
                    [j.Ps.EXTERNAL]: U.t.IvhAj2,
                }),
                [C.gGk.CHANNEL_ID]: eD(U.t.yJBIcX, U.t["+PqSsi"]),
                [C.gGk.LOCATION]: eD(U.t.GaMBHy, U.t.PsICk0),
                [C.gGk.IMAGE_HASH]: eD(U.t.S3vcRK, U.t.KQu47I),
            },
            w(),
        ),
    et = () =>
        y(
            {
                [C.gGk.SCHEDULED_START_TIME]: eD(U.t.zMIYVg, U.t.fzF8Gd),
                [C.gGk.SCHEDULED_END_TIME]: eD(U.t.vONSQA, U.t.IlIti3),
                [C.gGk.IS_CANCELED]: (e) => {
                    if (null != e.oldValue || !0 === e.newValue) {
                        if (!e.oldValue && e.newValue) return U.t["7RkicW"];
                        else if (e.oldValue && !e.newValue) return U.t.dRNTWW;
                    }
                },
            },
            w(),
        ),
    en = () =>
        y(
            {
                [C.gGk.NAME]: eR(U.t.tUKRzX, U.t.kPCHON),
                [C.gGk.ARCHIVED]: ex(U.t.jDi9FK, U.t.F6dvbT),
                [C.gGk.LOCKED]: ex(U.t.JSy1QW, U.t.C7Jgo8),
                [C.gGk.INVITABLE]: ex(U.t.dxNUs9, U.t.biJvYG),
                [C.gGk.AUTO_ARCHIVE_DURATION]: eR(U.t.LuaG3y, U.t["18d9qr"]),
                [C.gGk.RATE_LIMIT_PER_USER]: eR(U.t["7lirhF"], U.t.j4CCJR),
                [C.gGk.FLAGS]: () => U.t.sSAQtj,
            },
            w(),
        ),
    el = (e) => {
        let t = y({}, w());
        return (
            null == e ||
                e.forEach((e) => {
                    e.newValue
                        ? e.newValue.permission
                            ? (t[e.key] = () => U.t["JH+89C"])
                            : (t[e.key] = () => U.t.HUrFDu)
                        : (t[e.key] = () => U.t.vynxnV);
                }),
            t
        );
    },
    er = () =>
        y(
            {
                [C.gGk.NAME]: () => U.t.XwxAJT,
                [C.gGk.AUTO_MODERATION_TRIGGER_TYPE]: () => U.t.fx0pyl,
                [C.gGk.AUTO_MODERATION_EVENT_TYPE]: () => U.t["46Y+L5"],
                [C.gGk.AUTO_MODERATION_ACTIONS]: () => U.t["8efxfv"],
                [C.gGk.AUTO_MODERATION_ENABLED]: (e) => {
                    var t;
                    return !0 === (null != (t = e.newValue) ? t : e.oldValue) ? U.t.fCmxC2 : U.t.Wrg9Jn;
                },
                [C.gGk.AUTO_MODERATION_EXEMPT_ROLES]: () => U.t.TRb7Nx,
                [C.gGk.AUTO_MODERATION_EXEMPT_CHANNELS]: () => U.t.mzitLE,
                [C.gGk.AUTO_MODERATION_TRIGGER_METADATA]: () => U.t["h/lM65"],
                [C.gGk.AUTO_MODERATION_ADD_KEYWORDS]: () => U.t["9V2yaC"],
                [C.gGk.AUTO_MODERATION_REMOVE_KEYWORDS]: () => U.t["4Qe9ny"],
                [C.gGk.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => U.t.GyZtxp,
                [C.gGk.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => U.t.OQDadc,
                [C.gGk.AUTO_MODERATION_ADD_ALLOW_LIST]: () => U.t["FvvR+K"],
                [C.gGk.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => U.t.p5nSvy,
            },
            w(),
        ),
    ea = () =>
        y(
            {
                [C.gGk.NAME]: eR(U.t.VOtRSO, U.t.OK7B8E),
                [C.gGk.VOLUME]: eR(U.t.igrDB9, U.t.L5lDFJ),
                [C.gGk.EMOJI_NAME]: eL(U.t.IIanaY, U.t["z4w4U/"], U.t.V8TfyU),
                [C.gGk.EMOJI_ID]: eL(U.t.ainxMB, U.t["2NPsYu"], U.t["8crtns"]),
            },
            w(),
        ),
    ei = () =>
        y(
            {
                [C.gGk.VERIFICATION_ENABLED]: (e) => (!0 === e.newValue ? U.t.fnkzDY : U.t.WYT6ka),
                [C.gGk.MANUAL_APPROVAL_ENABLED]: (e) => (!0 === e.newValue ? U.t.jzSvVd : U.t.WxyOtj),
            },
            w(),
        ),
    es = () =>
        y(
            {
                [C.gGk.STATUS]: () => U.t.HyCSnI,
            },
            w(),
        ),
    eo = () => ({
        [C.gGk.DESCRIPTION]: () => U.t.nsUZKY,
        [C.gGk.BRAND_COLOR_PRIMARY]: () => U.t.qe9mgN,
        [C.gGk.CUSTOM_BANNER_HASH]: () => U.t["04b5KC"],
        [C.gGk.TRAITS]: () => U.t.dEy9WO,
        [C.gGk.GAME_APPLICATION_IDS]: () => U.t["8BOT3x"],
        [C.gGk.VISIBILITY]: () => U.t.bCl1Ep,
        [C.gGk.SERVER_TAG]: eD(U.t.ix1dnX, U.t["4LKpKb"]),
    }),
    ec = {
        [C.GaG.CHANNEL]: {
            [C.gGk.ID]: !0,
            [C.gGk.PERMISSION_OVERWRITES]: !0,
        },
        [C.GaG.CHANNEL_OVERWRITE]: {
            [C.gGk.TYPE]: !0,
            [C.gGk.ID]: !0,
            [C.gGk.PERMISSION_OVERWRITES]: !0,
        },
        [C.GaG.INVITE]: {
            [C.gGk.INVITER_ID]: !0,
            [C.gGk.USES]: !0,
        },
        [C.GaG.WEBHOOK]: {
            [C.gGk.TYPE]: !0,
            [C.gGk.APPLICATION_ID]: !0,
        },
        [C.GaG.INTEGRATION]: {
            [C.gGk.TYPE]: !0,
        },
        [C.GaG.THREAD]: {
            [C.gGk.ID]: !0,
            [C.gGk.TYPE]: !0,
        },
        [C.GaG.STICKER]: {
            [C.gGk.ID]: !0,
            [C.gGk.TYPE]: !0,
            [C.gGk.ASSET]: !0,
            [C.gGk.FORMAT_TYPE]: !0,
            [C.gGk.AVAILABLE]: !0,
            [C.gGk.GUILD_ID]: !0,
        },
        [C.GaG.GUILD_HOME]: {
            [C.gGk.ENTITY_TYPE]: !0,
        },
        [C.GaG.GUILD_ONBOARDING]: {
            [C.gGk.PROMPTS]: !0,
        },
        [C.GaG.GUILD_SOUNDBOARD]: {
            [C.gGk.ID]: !0,
            [C.gGk.SOUND_ID]: !0,
        },
    },
    eu = () => [
        {
            value: C.F_X.ALL,
            label: U.intl.string(U.t.QxEVcv),
            valueLabel: U.intl.string(U.t.an9Ry3),
        },
        {
            value: C.F_X.GUILD_UPDATE,
            label: U.intl.string(U.t["5INZa3"]),
        },
        {
            value: C.F_X.CHANNEL_CREATE,
            label: U.intl.string(U.t["2uh4vJ"]),
        },
        {
            value: C.F_X.CHANNEL_UPDATE,
            label: U.intl.string(U.t.mGsBLV),
        },
        {
            value: C.F_X.CHANNEL_DELETE,
            label: U.intl.string(U.t.hCHzAr),
        },
        {
            value: C.F_X.CHANNEL_OVERWRITE_CREATE,
            label: U.intl.string(U.t["8TnAMP"]),
        },
        {
            value: C.F_X.CHANNEL_OVERWRITE_UPDATE,
            label: U.intl.string(U.t.Jqx0Bi),
        },
        {
            value: C.F_X.CHANNEL_OVERWRITE_DELETE,
            label: U.intl.string(U.t.gBXOr4),
        },
        {
            value: C.F_X.MEMBER_KICK,
            label: U.intl.string(U.t["Q1/hN8"]),
        },
        {
            value: C.F_X.MEMBER_PRUNE,
            label: U.intl.string(U.t.tOTTja),
        },
        {
            value: C.F_X.MEMBER_BAN_ADD,
            label: U.intl.string(U.t["NfPn+e"]),
        },
        {
            value: C.F_X.MEMBER_BAN_REMOVE,
            label: U.intl.string(U.t.XCsGfI),
        },
        {
            value: C.F_X.MEMBER_UPDATE,
            label: U.intl.string(U.t["F/jmNJ"]),
        },
        {
            value: C.F_X.MEMBER_ROLE_UPDATE,
            label: U.intl.string(U.t.zAveSI),
        },
        {
            value: C.F_X.MEMBER_MOVE,
            label: U.intl.string(U.t.QshteR),
        },
        {
            value: C.F_X.MEMBER_DISCONNECT,
            label: U.intl.string(U.t.Z45os7),
        },
        {
            value: C.F_X.BOT_ADD,
            label: U.intl.string(U.t.vuH24Z),
        },
        {
            value: C.F_X.THREAD_CREATE,
            label: U.intl.string(U.t["+zl0DG"]),
        },
        {
            value: C.F_X.THREAD_UPDATE,
            label: U.intl.string(U.t.rbIry3),
        },
        {
            value: C.F_X.THREAD_DELETE,
            label: U.intl.string(U.t.hFjNEA),
        },
        {
            value: C.F_X.ROLE_CREATE,
            label: U.intl.string(U.t.AbxKtv),
        },
        {
            value: C.F_X.ROLE_UPDATE,
            label: U.intl.string(U.t.t3Z6sU),
        },
        {
            value: C.F_X.ROLE_DELETE,
            label: U.intl.string(U.t.YsFpa4),
        },
        {
            value: C.F_X.ONBOARDING_PROMPT_CREATE,
            label: U.intl.string(U.t.ZV9tqc),
        },
        {
            value: C.F_X.ONBOARDING_PROMPT_UPDATE,
            label: U.intl.string(U.t.PcOdvX),
        },
        {
            value: C.F_X.ONBOARDING_PROMPT_DELETE,
            label: U.intl.string(U.t["+r33Na"]),
        },
        {
            value: C.F_X.ONBOARDING_CREATE,
            label: U.intl.string(U.t.uDADde),
        },
        {
            value: C.F_X.ONBOARDING_UPDATE,
            label: U.intl.string(U.t.J1H1wg),
        },
        {
            value: C.F_X.HOME_SETTINGS_CREATE,
            label: U.intl.string(U.t.Di4cvI),
        },
        {
            value: C.F_X.HOME_SETTINGS_UPDATE,
            label: U.intl.string(U.t.tzyrJH),
        },
        {
            value: C.F_X.INVITE_CREATE,
            label: U.intl.string(U.t["0BNJdX"]),
        },
        {
            value: C.F_X.INVITE_UPDATE,
            label: U.intl.string(U.t["o++obV"]),
        },
        {
            value: C.F_X.INVITE_DELETE,
            label: U.intl.string(U.t.iP40Az),
        },
        {
            value: C.F_X.WEBHOOK_CREATE,
            label: U.intl.string(U.t["tBF4+S"]),
        },
        {
            value: C.F_X.WEBHOOK_UPDATE,
            label: U.intl.string(U.t.eV3McO),
        },
        {
            value: C.F_X.WEBHOOK_DELETE,
            label: U.intl.string(U.t.AAL3K1),
        },
        {
            value: C.F_X.EMOJI_CREATE,
            label: U.intl.string(U.t.RuWm0V),
        },
        {
            value: C.F_X.EMOJI_UPDATE,
            label: U.intl.string(U.t.WzdUY7),
        },
        {
            value: C.F_X.EMOJI_DELETE,
            label: U.intl.string(U.t.c3dK2L),
        },
        {
            value: C.F_X.MESSAGE_DELETE,
            label: U.intl.string(U.t.daTfXh),
        },
        {
            value: C.F_X.MESSAGE_BULK_DELETE,
            label: U.intl.string(U.t.nrBxeh),
        },
        {
            value: C.F_X.MESSAGE_PIN,
            label: U.intl.string(U.t.MUldyN),
        },
        {
            value: C.F_X.MESSAGE_UNPIN,
            label: U.intl.string(U.t.n4zKhA),
        },
        {
            value: C.F_X.INTEGRATION_CREATE,
            label: U.intl.string(U.t.deNm8x),
        },
        {
            value: C.F_X.INTEGRATION_UPDATE,
            label: U.intl.string(U.t.HT7Sfg),
        },
        {
            value: C.F_X.INTEGRATION_DELETE,
            label: U.intl.string(U.t["+kJ09q"]),
        },
        {
            value: C.F_X.STICKER_CREATE,
            label: U.intl.string(U.t["3DzNjU"]),
        },
        {
            value: C.F_X.STICKER_UPDATE,
            label: U.intl.string(U.t.tdhW5b),
        },
        {
            value: C.F_X.STICKER_DELETE,
            label: U.intl.string(U.t["+ZhGOk"]),
        },
        {
            value: C.F_X.STAGE_INSTANCE_CREATE,
            label: U.intl.string(U.t.sPbjA6),
        },
        {
            value: C.F_X.STAGE_INSTANCE_UPDATE,
            label: U.intl.string(U.t.cW9LfJ),
        },
        {
            value: C.F_X.STAGE_INSTANCE_DELETE,
            label: U.intl.string(U.t["U1r+yD"]),
        },
        {
            value: C.F_X.GUILD_SCHEDULED_EVENT_CREATE,
            label: U.intl.string(U.t.H81Zyy),
        },
        {
            value: C.F_X.GUILD_SCHEDULED_EVENT_UPDATE,
            label: U.intl.string(U.t["FM69l+"]),
        },
        {
            value: C.F_X.GUILD_SCHEDULED_EVENT_DELETE,
            label: U.intl.string(U.t.Rq28Bh),
        },
        {
            value: C.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE,
            label: U.intl.string(U.t.iPdFOt),
        },
        {
            value: C.F_X.AUTO_MODERATION_BLOCK_MESSAGE,
            label: U.intl.string(U.t.gNq5z6),
        },
        {
            value: C.F_X.AUTO_MODERATION_RULE_CREATE,
            label: U.intl.string(U.t.f72Zqb),
        },
        {
            value: C.F_X.AUTO_MODERATION_RULE_UPDATE,
            label: U.intl.string(U.t.XeqIiv),
        },
        {
            value: C.F_X.AUTO_MODERATION_RULE_DELETE,
            label: U.intl.string(U.t.syAApU),
        },
        {
            value: C.F_X.GUILD_HOME_FEATURE_ITEM,
            label: U.intl.string(U.t.lhG5KN),
        },
        {
            value: C.F_X.GUILD_HOME_REMOVE_ITEM,
            label: U.intl.string(U.t.lRPRwS),
        },
        {
            value: C.F_X.SOUNDBOARD_SOUND_CREATE,
            label: U.intl.string(U.t.yoRi5r),
        },
        {
            value: C.F_X.SOUNDBOARD_SOUND_UPDATE,
            label: U.intl.string(U.t.uKlG0Z),
        },
        {
            value: C.F_X.SOUNDBOARD_SOUND_DELETE,
            label: U.intl.string(U.t.gq0iCT),
        },
        {
            value: C.F_X.VOICE_CHANNEL_STATUS_CREATE,
            label: U.intl.string(U.t.rGr0YM),
        },
        {
            value: C.F_X.VOICE_CHANNEL_STATUS_DELETE,
            label: U.intl.string(U.t.V9PEQ4),
        },
    ];

function eE(e, t) {
    return null != t.changes ? t.changes.find((t) => t.key === e) : null;
}

function ed(e, t) {
    return null != t.changes ? t.changes.filter((t) => t.key === e) : [];
}

function e_(e) {
    var t;
    let n = eu().find((t) => t.value === e.action);
    return null != eE(C.gGk.COMMUNICATION_DISABLED_UNTIL, e)
        ? U.intl.string(U.t.z3wbj8)
        : null != (t = null == n ? void 0 : n.label)
          ? t
          : null;
}
let eg = {
    [d.pJ.SECONDS]: (e) =>
        U.intl.formatToPlainString(U.t.geSp4K, {
            seconds: e,
        }),
    [d.pJ.MINUTES]: (e) =>
        U.intl.formatToPlainString(U.t.iXLF9W, {
            minutes: e,
        }),
    [d.pJ.HOURS]: (e) =>
        U.intl.formatToPlainString(U.t.xCjYxK, {
            hours: e,
        }),
    [d.pJ.DAYS]: (e) =>
        U.intl.formatToPlainString(U.t["k2UNz+"], {
            days: e,
        }),
};

function eA(e) {
    let t = eE(C.gGk.COMMUNICATION_DISABLED_UNTIL, e),
        n = ed(C.gGk.ROLES_ADD, e).length > 0,
        l = ed(C.gGk.ROLES_REMOVE, e).length > 0;
    if (null != t) {
        if ((null == t ? void 0 : t.newValue) != null) {
            let n = new Date(null == t ? void 0 : t.newValue).getTime() - L.default.extractTimestamp(e.id),
                l = Math.round(n / 1e3 / 60),
                r = (0, d.$l)(l, F);
            if (null == r.unit || null == r.time) return null;
            if (r.unit in eg) {
                let e = r.unit,
                    t = r.unit === d.pJ.SECONDS ? Math.round(n / 1e3) : r.time;
                return eg[e](t);
            }
        } else if ((null == t ? void 0 : t.oldValue) != null) return U.intl.string(U.t.MA1ltr);
    } else if (n && l) return U.intl.string(U.t.RdMMew);
    else if (n) return U.intl.string(U.t["4GQqs8"]);
    else if (l) return U.intl.string(U.t["8mQ6x0"]);
    return null;
}

function eT(e) {
    let t = ed(C.gGk.ROLES_ADD, e),
        n = ed(C.gGk.ROLES_REMOVE, e),
        l =
            null == t
                ? void 0
                : t
                      .map((e) => {
                          let { newValue: t } = e;
                          return null == t
                              ? void 0
                              : t
                                    .map((e) => {
                                        let { name: t } = e;
                                        return t;
                                    })
                                    .join(", ");
                      })
                      .join(", "),
        r =
            null == n
                ? void 0
                : n
                      .map((e) => {
                          let { newValue: t } = e;
                          return null == t
                              ? void 0
                              : t
                                    .map((e) => {
                                        let { name: t } = e;
                                        return t;
                                    })
                                    .join(", ");
                      })
                      .join(", ");
    return t.length > 0 && n.length > 0
        ? U.intl.formatToPlainString(U.t.tZw1EW, {
              roleNamesAdded: l,
              roleNamesRemoved: r,
          })
        : t.length > 0
          ? U.intl.formatToPlainString(U.t["/mTqt5"], {
                roleNames: l,
            })
          : n.length > 0
            ? U.intl.formatToPlainString(U.t.Wk4pAJ, {
                  roleNames: r,
              })
            : null;
}

function ef(e) {
    switch (e.action) {
        case C.F_X.GUILD_UPDATE:
            return U.t.LjZO31;
        case C.F_X.CHANNEL_CREATE:
            let t = null != e.changes ? e.changes.find((e) => e.key === C.gGk.TYPE) : null;
            if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
            switch (t.newValue) {
                case C.rbe.GUILD_STAGE_VOICE:
                    return U.t["OKp4+o"];
                case C.rbe.GUILD_VOICE:
                    return U.t.NPOy4G;
                case C.rbe.GUILD_CATEGORY:
                    return U.t.T3KIjz;
                default:
                    return U.t.wrYNG2;
            }
        case C.F_X.CHANNEL_UPDATE:
            return U.t.nTYk6B;
        case C.F_X.CHANNEL_DELETE:
            return U.t.ynfvkm;
        case C.F_X.CHANNEL_OVERWRITE_CREATE:
            return U.t.l5Cu1a;
        case C.F_X.CHANNEL_OVERWRITE_UPDATE:
            return U.t.uhtbNU;
        case C.F_X.CHANNEL_OVERWRITE_DELETE:
            return U.t["HASt/3"];
        case C.F_X.MEMBER_KICK:
            return U.t.B5hDZX;
        case C.F_X.MEMBER_PRUNE:
            return U.t.qKOZTP;
        case C.F_X.MEMBER_BAN_ADD:
            return U.t["XklUm/"];
        case C.F_X.MEMBER_BAN_REMOVE:
            return U.t.o3Y6HD;
        case C.F_X.MEMBER_UPDATE:
            return U.t.pznhLN;
        case C.F_X.MEMBER_ROLE_UPDATE:
            return U.t.Vngfia;
        case C.F_X.MEMBER_MOVE:
            return U.t.Yt6NkU;
        case C.F_X.MEMBER_DISCONNECT:
            return U.t.K4eCZw;
        case C.F_X.BOT_ADD:
            return U.t.fWvX0G;
        case C.F_X.ROLE_CREATE:
            return U.t.UTLTx6;
        case C.F_X.ROLE_UPDATE:
            return U.t.NRbN18;
        case C.F_X.ROLE_DELETE:
            return U.t["4s63tb"];
        case C.F_X.INVITE_CREATE:
            return U.t.YHOXWy;
        case C.F_X.INVITE_UPDATE:
            return U.t.ja3kGS;
        case C.F_X.INVITE_DELETE:
            return U.t["3n/iWk"];
        case C.F_X.WEBHOOK_CREATE:
            return U.t.MhYhil;
        case C.F_X.WEBHOOK_UPDATE:
            return U.t["6GTlWB"];
        case C.F_X.WEBHOOK_DELETE:
            return U.t.in0VjZ;
        case C.F_X.EMOJI_CREATE:
            return U.t["7vekRO"];
        case C.F_X.EMOJI_UPDATE:
            return U.t.IsCKfh;
        case C.F_X.EMOJI_DELETE:
            return U.t.JnUaVG;
        case C.F_X.STICKER_CREATE:
            return U.t.DRZifq;
        case C.F_X.STICKER_UPDATE:
            return U.t.bhujGc;
        case C.F_X.STICKER_DELETE:
            return U.t.rGEP9U;
        case C.F_X.MESSAGE_DELETE:
            return U.t["HPkD+M"];
        case C.F_X.MESSAGE_BULK_DELETE:
            return U.t["3RIvLE"];
        case C.F_X.MESSAGE_PIN:
            return U.t.Yna7E7;
        case C.F_X.MESSAGE_UNPIN:
            return U.t.NCxXUW;
        case C.F_X.INTEGRATION_CREATE:
            return U.t.HYvCb3;
        case C.F_X.INTEGRATION_UPDATE:
            return U.t.ibCCOS;
        case C.F_X.INTEGRATION_DELETE:
            return U.t["8zScWY"];
        case C.F_X.STAGE_INSTANCE_CREATE:
            return U.t["n7x/DF"];
        case C.F_X.STAGE_INSTANCE_UPDATE:
            return U.t["0hQYU4"];
        case C.F_X.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return U.t["Oi/in9"];
            return U.t["7ZIFm9"];
        case C.F_X.GUILD_SCHEDULED_EVENT_CREATE:
            return U.t.S7k52p;
        case C.F_X.GUILD_SCHEDULED_EVENT_UPDATE:
            return U.t.ebTK11;
        case C.F_X.GUILD_SCHEDULED_EVENT_DELETE:
            return U.t["/ARPKQ"];
        case C.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case C.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return U.t["8qCI36"];
        case C.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return U.t.zYb2da;
        case C.F_X.THREAD_CREATE:
            let n = null != e.changes ? e.changes.find((e) => e.key === C.gGk.TYPE) : null;
            if (null == n) throw Error("[AuditLog] Could not find type change for thread create");
            switch (n.newValue) {
                case C.rbe.PRIVATE_THREAD:
                    return U.t.Br0y5w;
                case C.rbe.ANNOUNCEMENT_THREAD:
                    return U.t["6uaMmO"];
                default:
                    return U.t["2cxQ7G"];
            }
        case C.F_X.THREAD_UPDATE:
            return U.t.PSsy4t;
        case C.F_X.THREAD_DELETE:
            return U.t.s3Khn8;
        case C.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return U.t.uzCqBm;
        case C.F_X.AUTO_MODERATION_BLOCK_MESSAGE:
            return U.t.NqWv2K;
        case C.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL:
            var l;
            if (
                (null == (l = e.options) ? void 0 : l.auto_moderation_rule_trigger_type) ===
                v.uh.USER_PROFILE.toString()
            )
                return U.t.YQsjej;
            return U.t.SD0PwJ;
        case C.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return U.t.Vk4TwX;
        case C.F_X.AUTO_MODERATION_QUARANTINE_USER:
            return U.t["/W5u5o"];
        case C.F_X.CREATOR_MONETIZATION_REQUEST_CREATED:
            return U.t.ONvWyr;
        case C.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return U.t["ryGLk+"];
        case C.F_X.AUTO_MODERATION_RULE_CREATE:
            return U.t["NKljj+"];
        case C.F_X.AUTO_MODERATION_RULE_UPDATE:
            return U.t["3wEA9u"];
        case C.F_X.AUTO_MODERATION_RULE_DELETE:
            return U.t.umua3n;
        case C.F_X.ONBOARDING_PROMPT_CREATE:
            return U.t["/8A1g2"];
        case C.F_X.ONBOARDING_PROMPT_UPDATE:
            return U.t.ArIrWI;
        case C.F_X.ONBOARDING_PROMPT_DELETE:
            return U.t.IuBTao;
        case C.F_X.ONBOARDING_CREATE:
            return U.t["wDaq3/"];
        case C.F_X.ONBOARDING_UPDATE:
            return U.t["yONu/l"];
        case C.F_X.HOME_SETTINGS_CREATE:
            return U.t.dSdCjG;
        case C.F_X.HOME_SETTINGS_UPDATE:
            return U.t.XHE8qv;
        case C.F_X.GUILD_HOME_FEATURE_ITEM:
            let r = null != e.changes ? e.changes.find((e) => e.key === C.gGk.ENTITY_TYPE) : null;
            if (null == r) return U.t["UZ+U3A"];
            switch (r.newValue) {
                case s.U.MESSAGE:
                    return U.t["PyEa+J"];
                case s.U.FORUM_POST:
                    return U.t.hCuAb1;
                default:
                    return U.t["UZ+U3A"];
            }
        case C.F_X.GUILD_HOME_REMOVE_ITEM:
            return U.t.kPReun;
        case C.F_X.SOUNDBOARD_SOUND_CREATE:
            return U.t["0PD83V"];
        case C.F_X.SOUNDBOARD_SOUND_UPDATE:
            return U.t.CM8n1w;
        case C.F_X.SOUNDBOARD_SOUND_DELETE:
            return U.t["kVz4/0"];
        case C.F_X.VOICE_CHANNEL_STATUS_CREATE:
            return U.t.MWjnU7;
        case C.F_X.VOICE_CHANNEL_STATUS_DELETE:
            return U.t.aS8Krq;
        case C.F_X.GUILD_MEMBER_VERIFICATION_UPDATE:
            return U.t["NUKUb+"];
        case C.F_X.GUILD_PROFILE_UPDATE:
            return U.t.Ed6hF1;
        case C.F_X.GUILD_MIGRATE_PIN_PERMISSION:
            return U.t["3Ne7MA"];
        case C.F_X.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION:
            return U.t["naflH+"];
        default:
            return null;
    }
}

function eh(e) {
    switch (e) {
        case M.lx.GUILD_FEED_REMOVED:
            return U.intl.string(U.t["5G8ZD4"]);
        case M.lx.ACTIVE_CHANNELS_REMOVED:
            return U.intl.string(U.t["4YLtzC"]);
        case M.lx.PINNED:
            return U.intl.string(U.t["1QLRYb"]);
    }
    return null;
}

function eI(e) {
    switch (e) {
        case M.lx.GUILD_FEED_REMOVED:
            return U.intl.string(U.t.S5kuWQ);
        case M.lx.ACTIVE_CHANNELS_REMOVED:
            return U.intl.string(U.t["8qpgcz"]);
        case M.lx.PINNED:
            return U.intl.string(U.t.CMweGA);
    }
    return null;
}

function eO(e, t) {
    switch (e) {
        case C.xBc.CREATE_INSTANT_INVITE:
            return U.intl.string(U.t.zJrgTG);
        case C.xBc.KICK_MEMBERS:
            return U.intl.string(U.t.pBNv6i);
        case C.xBc.BAN_MEMBERS:
            return U.intl.string(U.t.oTBA7N);
        case C.xBc.ADMINISTRATOR:
            return U.intl.string(U.t.PGvZqX);
        case C.xBc.MANAGE_CHANNELS:
            if (t.targetType === C.GaG.CHANNEL || t.targetType === C.GaG.CHANNEL_OVERWRITE)
                return U.intl.string(U.t.nAw15L);
            return U.intl.string(U.t["9qLtWs"]);
        case C.xBc.MANAGE_GUILD:
            return U.intl.string(U.t.QZRcfO);
        case C.xBc.VIEW_GUILD_ANALYTICS:
            return U.intl.string(U.t["rQJBE/"]);
        case C.xBc.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return U.intl.string(U.t["0lTLTv"]);
        case C.xBc.CHANGE_NICKNAME:
            return U.intl.string(U.t.dilOF6);
        case C.xBc.MANAGE_NICKNAMES:
            return U.intl.string(U.t["t+Ct5x"]);
        case C.xBc.MANAGE_ROLES:
            return U.intl.string(U.t["C8d+oG"]);
        case C.xBc.MANAGE_WEBHOOKS:
            return U.intl.string(U.t["/ADKmM"]);
        case C.xBc.CREATE_GUILD_EXPRESSIONS:
            return U.intl.string(U.t.HarVuP);
        case C.xBc.MANAGE_GUILD_EXPRESSIONS:
            return U.intl.string(U.t.bbuXIn);
        case C.xBc.VIEW_AUDIT_LOG:
            return U.intl.string(U.t.fZgLpA);
        case C.xBc.VIEW_CHANNEL:
            if (t.targetType === C.GaG.CHANNEL || t.targetType === C.GaG.CHANNEL_OVERWRITE)
                return U.intl.string(U.t["W/A4Qp"]);
            return U.intl.string(U.t.uV83yi);
        case C.xBc.SEND_MESSAGES:
            return U.intl.string(U.t.T32rkC);
        case C.xBc.SEND_TTS_MESSAGES:
            return U.intl.string(U.t.Mg7bku);
        case C.xBc.USE_APPLICATION_COMMANDS:
            return U.intl.string(U.t.shbR1a);
        case C.xBc.MANAGE_MESSAGES:
            return U.intl.string(U.t["6lU9xM"]);
        case C.xBc.EMBED_LINKS:
            return U.intl.string(U.t["969dEL"]);
        case C.xBc.ATTACH_FILES:
            return U.intl.string(U.t["3AS4UM"]);
        case C.xBc.READ_MESSAGE_HISTORY:
            return U.intl.string(U.t.l9ufaR);
        case C.xBc.MENTION_EVERYONE:
            return U.intl.string(U.t.Y78KGC);
        case C.xBc.USE_EXTERNAL_EMOJIS:
            return U.intl.string(U.t.BpBGZU);
        case C.xBc.USE_EXTERNAL_STICKERS:
            return U.intl.string(U.t["UeRs+b"]);
        case C.xBc.ADD_REACTIONS:
            return U.intl.string(U.t.yEoJAr);
        case C.xBc.CONNECT:
            return U.intl.string(U.t.S0W8Z5);
        case C.xBc.SPEAK:
            return U.intl.string(U.t["8w1tIR"]);
        case C.xBc.MUTE_MEMBERS:
            return U.intl.string(U.t["8EI30/"]);
        case C.xBc.DEAFEN_MEMBERS:
            return U.intl.string(U.t["9L47Fr"]);
        case C.xBc.MOVE_MEMBERS:
            return U.intl.string(U.t.YtjJPQ);
        case C.xBc.USE_VAD:
            return U.intl.string(U.t["08zAV7"]);
        case C.xBc.PRIORITY_SPEAKER:
            return U.intl.string(U.t.BVK71i);
        case C.xBc.STREAM:
            return U.intl.string(U.t.FlNoSV);
        case C.xBc.REQUEST_TO_SPEAK:
            return U.intl.string(U.t["5kicT2"]);
        case C.xBc.USE_EMBEDDED_ACTIVITIES:
            return U.intl.string(U.t.rLSGeh);
        case C.xBc.CREATE_EVENTS:
            return U.intl.string(U.t.qyjZua);
        case C.xBc.MANAGE_EVENTS:
            return U.intl.string(U.t.HIgA5a);
        case C.xBc.CREATE_PUBLIC_THREADS:
            return U.intl.string(U.t["25rKnX"]);
        case C.xBc.CREATE_PRIVATE_THREADS:
            return U.intl.string(U.t.QwbTSa);
        case C.xBc.SEND_MESSAGES_IN_THREADS:
            return U.intl.string(U.t.fTE74g);
        case C.xBc.MANAGE_THREADS:
            return U.intl.string(U.t.kEqgr7);
        case C.xBc.MODERATE_MEMBERS:
            return U.intl.string(U.t["+RL6pz"]);
        case C.xBc.SET_VOICE_CHANNEL_STATUS:
            return U.intl.string(U.t.VBwkUf);
        case C.xBc.SEND_POLLS:
            return U.intl.string(U.t.UMQ7Ww);
        case C.xBc.USE_EXTERNAL_APPS:
            return U.intl.string(U.t.TtA5rK);
        case C.xBc.PIN_MESSAGES:
            return U.intl.string(U.t.Y5BI39);
        case C.xBc.BYPASS_SLOWMODE:
            return U.intl.string(U.t.kqcjeV);
    }
    return null;
}

function eN(e, t) {
    let n = [];
    return (
        e.forEach((e) => {
            let l = (function (e, t) {
                    switch (e.targetType) {
                        case C.GaG.GUILD:
                        case C.GaG.GUILD_HOME:
                        case C.GaG.GUILD_PROFILE:
                            return t;
                        case C.GaG.CHANNEL:
                        case C.GaG.CHANNEL_OVERWRITE:
                            return eb(
                                e,
                                C.gGk.NAME,
                                (e) => S.A.getChannel(e),
                                (e) => (0, g.m1)(e, G.default, b.A, !0),
                            );
                        case C.GaG.USER:
                            return eb(
                                e,
                                C.gGk.NICK,
                                (e) => G.default.getUser(e),
                                (e) => e,
                            );
                        case C.GaG.ROLE:
                            return eb(
                                e,
                                C.gGk.NAME,
                                (e) => p.A.getRole(t.id, e),
                                (e) => e.name,
                            );
                        case C.GaG.ONBOARDING_PROMPT:
                            let n = eb(
                                e,
                                C.gGk.ID,
                                (e) => h.A.getOnboardingPrompt(e),
                                (e) => e.title,
                            );
                            return null == n || "" === n ? U.intl.string(U.t.ZNQyiR) : n;
                        case C.GaG.GUILD_ONBOARDING:
                        case C.GaG.GUILD_MEMBER_VERIFICATION:
                            return t;
                        case C.GaG.INVITE:
                            return eb(e, C.gGk.CODE, C.FXj);
                        case C.GaG.INTEGRATION:
                            return eb(
                                e,
                                C.gGk.TYPE,
                                (e) => x.A.integrations.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case C.GaG.WEBHOOK:
                            return eb(
                                e,
                                C.gGk.NAME,
                                (e) => x.A.webhooks.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case C.GaG.EMOJI:
                            return eb(
                                e,
                                C.gGk.NAME,
                                (e) => T.Ay.getGuildEmoji(t.id).find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case C.GaG.STICKER:
                            return eb(
                                e,
                                C.gGk.NAME,
                                (e) => N.A.getStickerById(e),
                                (e) => e.name,
                            );
                        case C.GaG.STAGE_INSTANCE:
                            return eb(
                                e,
                                C.gGk.TOPIC,
                                (e) => {
                                    var n;
                                    return null == (n = Object.values(O.A.getStageInstancesByGuild(t.id)))
                                        ? void 0
                                        : n.find((t) => t.id === e);
                                },
                                (e) => e.topic,
                            );
                        case C.GaG.GUILD_SCHEDULED_EVENT:
                        case C.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return eb(
                                e,
                                C.gGk.NAME,
                                (e) => x.A.guildScheduledEvents.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case C.GaG.THREAD:
                            return eb(
                                e,
                                C.gGk.NAME,
                                (e) => x.A.threads.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case C.GaG.APPLICATION_COMMAND:
                            if (e.targetId === e.options.application_id) {
                                let t = x.A.integrations.find((t) => {
                                    var n;
                                    return (null == (n = t.application) ? void 0 : n.id) === e.targetId;
                                });
                                if (null != t) return t.name;
                                return e.targetId;
                            }
                            return eb(
                                e,
                                C.gGk.NAME,
                                (e) => x.A.applicationCommands.find((t) => t.id === e),
                                (e) => {
                                    let t =
                                        null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
                                    return e.type === _.kc.CHAT ? "/⁠".concat(t) : t;
                                },
                            );
                        case C.GaG.AUTO_MODERATION_RULE:
                            return eb(
                                e,
                                C.gGk.NAME,
                                (e) => x.A.automodRules.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case C.GaG.GUILD_SOUNDBOARD:
                            return eb(e, C.gGk.NAME, C.FXj);
                        case C.GaG.HOME_SETTINGS:
                            return eb(
                                e,
                                C.gGk.GUILD_ID,
                                (e) => I.h.getSettings(e),
                                () => U.intl.string(U.t.VbpLyU),
                                t.id,
                            );
                        case C.GaG.VOICE_CHANNEL_STATUS:
                            return eb(
                                e,
                                C.gGk.STATUS,
                                (e) => S.A.getChannel(e),
                                (e) => (0, g.m1)(e, G.default, b.A, !0),
                            );
                        default:
                            return k.warn("Unknown targetType for log", e), null;
                    }
                })(e, t),
                a = G.default.getUser(e.userId);
            if (
                null != l ||
                [
                    C.F_X.MEMBER_PRUNE,
                    C.F_X.MEMBER_DISCONNECT,
                    C.F_X.MEMBER_MOVE,
                    C.F_X.CREATOR_MONETIZATION_REQUEST_CREATED,
                    C.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED,
                ].includes(e.action)
            ) {
                if (
                    null !=
                    (e = (e = (e = e.set("user", a)).set("target", l)).set(
                        "options",
                        (function (e) {
                            if (null != e.options) {
                                let n = y({}, e.options);
                                switch (e.options.type) {
                                    case C.AO_.USER:
                                        n.subtarget = eG(
                                            e.options.id,
                                            (e) => G.default.getUser(e),
                                            (e) => e.tag,
                                        );
                                        break;
                                    case C.AO_.ROLE:
                                        n.subtarget = eG(e.options.role_name, C.FXj);
                                }
                                if (
                                    (null != e.options.channel_id &&
                                        (n.channel = eb(
                                            e,
                                            "",
                                            (e) => S.A.getChannel(e),
                                            (e) => e,
                                            e.options.channel_id,
                                        )),
                                    null != e.options.members_removed &&
                                        0 !== e.options.members_removed &&
                                        (n.count = e.options.members_removed),
                                    null != e.options.event_exception_id)
                                ) {
                                    var t;
                                    let l = x.A.guildScheduledEvents.find((t) => t.id === e.targetId),
                                        r =
                                            null == l
                                                ? void 0
                                                : l.guild_scheduled_event_exceptions.find(
                                                      (t) => t.event_exception_id === e.options.event_exception_id,
                                                  );
                                    n.subtarget = (0, R.i$)(
                                        i()(
                                            L.default.extractTimestamp(
                                                null != (t = null == r ? void 0 : r.event_exception_id) ? t : "0",
                                            ),
                                        ),
                                        "LL",
                                    );
                                }
                                return n;
                            }
                            return e.options;
                        })(e),
                    )).changes
                ) {
                    let n = [];
                    e.changes.forEach((l) => {
                        let a = (function (e, t, n) {
                            if (t.action === C.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let t = e.newValue || e.oldValue;
                                switch (t.type) {
                                    case C.g0g.ROLE:
                                        e.subtarget = eG(
                                            t.id,
                                            (e) => p.A.getRole(n.id, e),
                                            (e) => e.name,
                                        );
                                        break;
                                    case C.g0g.USER:
                                        e.subtarget = eG(
                                            t.id,
                                            (e) => G.default.getUser(e),
                                            (e) => e.tag,
                                        );
                                        break;
                                    case C.g0g.CHANNEL:
                                        t.id === r()(n.id).subtract(1).toString()
                                            ? (e.subtarget = U.intl.string(U.t.MSYhgh))
                                            : (e.subtarget = eG(
                                                  t.id,
                                                  (e) => S.A.getChannel(e),
                                                  (e) => (0, g.m1)(e, G.default, b.A, !0),
                                              ));
                                }
                                return e;
                            }
                            switch (e.key) {
                                case C.gGk.OWNER_ID:
                                    return ep(e, (e) => G.default.getUser(e));
                                case C.gGk.CHANNEL_ID:
                                case C.gGk.AFK_CHANNEL_ID:
                                case C.gGk.SYSTEM_CHANNEL_ID:
                                case C.gGk.RULES_CHANNEL_ID:
                                case C.gGk.PUBLIC_UPDATES_CHANNEL_ID:
                                    return ep(
                                        e,
                                        (e) => S.A.getChannel(e),
                                        (e) => (0, g.m1)(e, G.default, b.A, !0),
                                    );
                                case C.gGk.AFK_TIMEOUT:
                                    return ep(e, (e) => e / 60);
                                case C.gGk.BITRATE:
                                    return ep(e, (e) => e / 1e3);
                                case C.gGk.COLOR:
                                    return ep(e, (e) => (0, u.Hl)(e).toUpperCase());
                                case C.gGk.THEME_COLORS:
                                    return ep(e, (e) =>
                                        ""
                                            .concat((0, u.Hl)(e[0]).toUpperCase(), ", ")
                                            .concat((0, u.Hl)(e[1]).toUpperCase()),
                                    );
                                case C.gGk.MAX_AGE:
                                    return ep(e, (e) => {
                                        let t = D.Ay.getMaxAgeOptionByValue(e);
                                        return null !== t ? t.label : e;
                                    });
                                case C.gGk.PERMISSIONS: {
                                    let t = [],
                                        { added: n, removed: l } = em(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let e = new m.QO(C.gGk.PERMISSIONS_GRANTED, null, n);
                                        t.push(e);
                                    }
                                    if (l.length > 0) {
                                        let e = new m.QO(C.gGk.PERMISSIONS_DENIED, null, l);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case C.gGk.PERMISSIONS_GRANTED:
                                case C.gGk.PERMISSIONS_DENIED: {
                                    let t = [],
                                        { added: n, removed: l } = em(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let l = new m.QO(e.key, null, n);
                                        t.push(l);
                                    }
                                    if (l.length > 0) {
                                        let e = new m.QO(C.gGk.PERMISSIONS_RESET, l, l);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case C.gGk.FLAGS: {
                                    let t = [],
                                        { added: n, removed: l } = (function (e, t) {
                                            let n = "number" == typeof e ? e : 0,
                                                l = "number" == typeof t ? t : 0,
                                                r = E.VL(l, n),
                                                a = E.VL(n, l),
                                                i = [],
                                                s = [];
                                            for (let e in M.lx) {
                                                let t = M.lx[e];
                                                E.Lt(r, t) && i.push(t), E.Lt(a, t) && s.push(t);
                                            }
                                            return {
                                                added: i,
                                                removed: s,
                                            };
                                        })(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let l = new m.QO(e.key, null, n);
                                        t.push(l);
                                    }
                                    if (l.length > 0) {
                                        let n = new m.QO(e.key, l, null);
                                        t.push(n);
                                    }
                                    return t;
                                }
                                case C.gGk.PREFERRED_LOCALE:
                                    return ep(e, (e) => {
                                        let t = (0, U.getAvailableLocales)().find((t) => t.value === e);
                                        return null != t ? t.name : null;
                                    });
                                case C.gGk.VIDEO_QUALITY_MODE:
                                    return ep(e, (e) =>
                                        e === C.K3c.FULL ? U.intl.string(U.t["7jOoJE"]) : U.intl.string(U.t.jjKYpu),
                                    );
                                case C.gGk.SYSTEM_CHANNEL_FLAGS:
                                    let l, a;
                                    return (
                                        (l = {
                                            [C.ogj.SUPPRESS_JOIN_NOTIFICATIONS]:
                                                C.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                            [C.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS]:
                                                C.gGk.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                            [C.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]:
                                                C.gGk.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                            [C.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES]:
                                                C.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES,
                                        }),
                                        (a = []),
                                        Object.values(C.ogj).forEach((t) => {
                                            let n = (e.oldValue & t) === t,
                                                r = (e.newValue & t) === t;
                                            if (n === r) return;
                                            let i = new m.QO(l[t], !n, !r);
                                            a.push(i);
                                        }),
                                        a
                                    );
                                case C.gGk.AUTO_MODERATION_ACTIONS:
                                    if (t.targetType === C.GaG.AUTO_MODERATION_RULE)
                                        return ep(
                                            e,
                                            (e) => e.map((e) => e.type),
                                            (e) => e.map(f.PZ).join(", "),
                                        );
                                    break;
                                case C.gGk.AUTO_MODERATION_EVENT_TYPE:
                                    if (t.targetType === C.GaG.AUTO_MODERATION_RULE) return ep(e, f.X3);
                                    break;
                                case C.gGk.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (t.targetType === C.GaG.AUTO_MODERATION_RULE) return ep(e, f.nl);
                                    break;
                                case C.gGk.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (t.targetType === C.GaG.AUTO_MODERATION_RULE)
                                        return ep(e, (e) =>
                                            null != e && "object" == typeof e
                                                ? null != e.keyword_filter && Array.isArray(e.keyword_filter)
                                                    ? U.intl.formatToMarkdownString(U.t.y91UXV, {
                                                          newValue: e.keyword_filter
                                                              .map((e) => "'".concat(e, "'"))
                                                              .join(", "),
                                                      })
                                                    : JSON.stringify(e)
                                                : e,
                                        );
                                    break;
                                case C.gGk.AUTO_MODERATION_ADD_KEYWORDS:
                                case C.gGk.AUTO_MODERATION_REMOVE_KEYWORDS:
                                case C.gGk.AUTO_MODERATION_ADD_REGEX_PATTERNS:
                                case C.gGk.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
                                case C.gGk.AUTO_MODERATION_ADD_ALLOW_LIST:
                                case C.gGk.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                                    if (t.targetType === C.GaG.AUTO_MODERATION_RULE)
                                        return ep(e, (e) =>
                                            null != e && Array.isArray(e)
                                                ? e.map((e) => "'".concat(e, "'")).join(", ")
                                                : JSON.stringify(e),
                                        );
                                    break;
                                case C.gGk.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (t.targetType === C.GaG.AUTO_MODERATION_RULE)
                                        return ep(
                                            e,
                                            (e) =>
                                                e
                                                    .map(S.A.getChannel)
                                                    .filter((e) => null != e)
                                                    .map((e) => (0, g.m1)(e, G.default, b.A, !0)),
                                            (e) =>
                                                null != e && e.length > 0 ? e.join(", ") : U.intl.string(U.t["K/EdV8"]),
                                        );
                                    break;
                                case C.gGk.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (t.targetType === C.GaG.AUTO_MODERATION_RULE)
                                        return ep(
                                            e,
                                            (e) =>
                                                e
                                                    .map((e) => p.A.getRole(n.id, e))
                                                    .filter((e) => null != e)
                                                    .map((e) => e.name),
                                            (e) =>
                                                null != e && e.length > 0 ? e.join(", ") : U.intl.string(U.t["K/EdV8"]),
                                        );
                                    break;
                                case C.gGk.AVAILABLE_TAGS:
                                    return (function (e) {
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
                                            for (let e in i)
                                                if (null == a[e])
                                                    return new m.QO(C.gGk.AVAILABLE_TAG_ADD, null, eS(i[e]));
                                        }
                                        if (l.length > r.length) {
                                            for (let e in a)
                                                if (null == i[e])
                                                    return new m.QO(C.gGk.AVAILABLE_TAG_DELETE, null, eS(a[e]));
                                        }
                                        for (let e in a) {
                                            let t = a[e],
                                                n = i[e];
                                            if (
                                                (null == n ? void 0 : n.name) !== t.name ||
                                                (null == n ? void 0 : n.emoji_id) !== t.emoji_id ||
                                                (null == n ? void 0 : n.emoji_name) !== t.emoji_name
                                            )
                                                return new m.QO(C.gGk.AVAILABLE_TAG_EDIT, eS(t), eS(n));
                                        }
                                        return e;
                                    })(e);
                                case C.gGk.SCHEDULED_START_TIME:
                                case C.gGk.SCHEDULED_END_TIME:
                                    return ep(e, (e) => (0, R.i$)(i()(new Date(e)), "LLLL"));
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

function em(e, t) {
    let n = c.iu("string" == typeof e ? e : 0),
        l = c.iu("string" == typeof t ? t : 0),
        r = c.TF(l, n),
        a = c.TF(n, l),
        i = [],
        s = [];
    for (let e in C.xBc) {
        let t = C.xBc[e];
        c.zy(r, t) && i.push(t), c.zy(a, t) && s.push(t);
    }
    return {
        added: i,
        removed: s,
    };
}

function eS(e) {
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

function ep(e, t, n) {
    let l = e.newValue,
        r = e.oldValue;
    return (
        null != e.newValue && ((l = t(e.newValue)), null != n && null != l && (l = n(l))),
        null != e.oldValue && ((r = t(e.oldValue)), null != n && null != r && (r = n(r))),
        new m.QO(e.key, r || e.oldValue, l || e.newValue)
    );
}

function eb(e, t, n, l, r) {
    let a = null,
        i = n((r = null != r ? r : e.targetId));
    if ((null != i && null != l && (a = l(i)), null == a)) {
        let t = x.A.deletedTargets[e.targetType];
        null != t && null != t[r] && (a = t[r]);
    }
    if (null == a && null != e.changes) {
        let n = e.changes.find((e) => e.key === t);
        null != n && (a = n.newValue || n.oldValue);
    }
    return null != a ? a : r;
}

function eG(e, t, n) {
    let l = e,
        r = t(e);
    return null != r && null != n && (l = n(r)), l;
}

function eR(e, t) {
    return (n) => (null == n.oldValue ? e : t);
}

function eD(e, t) {
    return (n) => (null == n.newValue ? e : t);
}

function eL(e, t, n, l) {
    return (r) => (null != r.newValue && null != r.oldValue ? e : null != r.newValue ? t : null != r.oldValue ? n : l);
}

function ex(e, t) {
    return (n) => (n.newValue ? e : t);
}

function eC(e) {
    return (t) => e[t.newValue];
}

function eM(e, t) {
    return (n) => {
        var l;
        return null != (l = e[n.newValue]) ? l : t;
    };
}
