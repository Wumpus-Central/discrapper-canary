let n, r, i, _, o, I, l, s, a;
var A,
    S,
    T,
    O,
    R,
    N,
    c,
    u,
    L,
    C,
    d,
    D = E(214958),
    p = E.n(D);
function P() {
    let e = window;
    return (
        null != e.jQuery ||
        null != e.$ ||
        null != e.BetterDiscord ||
        null != e.BdApi ||
        null != e.rambox ||
        null != e.Vencord ||
        null != e.VencordNative
    );
}
function g() {
    return (
        ((Array.isArray(navigator.languages) ? navigator.languages[0] : null) ||
            navigator.language ||
            navigator.browserLanguage ||
            navigator.userLanguage) ??
        ""
    );
}
(n = E(973117).n), (r = E(28967).n);
let M = (0, E(132500).A)();
var G = E(264572).Buffer;
let f = "deviceProperties",
    m = "referralProperties",
    U = window.DiscordNative;
if (null != U) {
    let e,
        t = U.app.getVersion(),
        E = U.process.platform,
        n = U.os.release,
        r = U.os.arch,
        _ = U.os.appArch,
        o = U.app.getReleaseChannel(),
        I = g();
    switch (E) {
        case "win32":
            e = "Windows";
            break;
        case "darwin":
            e = "Mac OS X";
            break;
        case "linux":
            e = "Linux";
            break;
        default:
            e = E;
    }
    if (
        ((i = {
            os: e,
            browser: "Discord Client",
            release_channel: o || "unknown",
            client_version: t,
            os_version: n,
            os_arch: r,
            app_arch: _,
            system_locale: I,
            has_client_mods: P(),
            client_launch_id: M,
        }),
        p().name?.toLocaleLowerCase() === "electron" &&
            ((i.browser_user_agent = p().ua || ""), (i.browser_version = p().version || "")),
        "linux" === E)
    ) {
        let e = U.crashReporter.getMetadata();
        (i.window_manager = e.wm),
            (i.distro = e.distro),
            (i.runtime_environment = e.runtime_environment),
            (i.display_server = e.display_server);
    } else
        "darwin" === E ? (i.os_sdk_version = n?.split(".")[0]) : "win32" === E && (i.os_sdk_version = n?.split(".")[2]);
}
function h(e, t) {
    if (null == e) return "";
    t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    let E = RegExp(`[\\?&]${t}=([^&#]*)`).exec(e);
    return null === E || ("string" != typeof E[1] && E[1].length) ? "" : decodeURIComponent(E[1]).replace(/\+/g, " ");
}
let w = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");
function $() {
    var e;
    let t,
        E,
        n = {};
    return (
        (n.referrer = document.referrer),
        (n.referring_domain = (t = document.referrer.split("/")).length >= 3 ? t[2] : ""),
        {
            ...n,
            ...((e = window.location.href),
            (E = {}),
            w.forEach((t) => {
                let n = h(e, t);
                n.length > 0 && (E[t] = n);
            }),
            E),
            ...(function () {
                let e,
                    t = {},
                    E = document.referrer,
                    n =
                        0 === (e = document.referrer).search("https?://(.*)google.([^/?]*)")
                            ? "google"
                            : 0 === e.search("https?://(.*)bing.com")
                              ? "bing"
                              : 0 === e.search("https?://(.*)yahoo.com")
                                ? "yahoo"
                                : 0 === e.search("https?://(.*)duckduckgo.com")
                                  ? "duckduckgo"
                                  : null;
                if (null != n) {
                    t.search_engine = n;
                    let e = h(E, "yahoo" !== n ? "q" : "p");
                    e.length > 0 && (t.mp_keyword = e);
                }
                return t;
            })(),
        }
    );
}
if (null == i)
    try {
        i = (function () {
            let e = n.get(f);
            if (null == e) {
                let t;
                ((t = {}).os = (function () {
                    let { userAgent: e } = window.navigator;
                    if (/Windows/i.test(e)) return /Phone/.test(e) ? "Windows Mobile" : "Windows";
                    if (/(iPhone|iPad|iPod)/.test(e)) return "iOS";
                    if (/Android/.test(e)) return "Android";
                    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
                    if (/Mac/i.test(e))
                        return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2
                            ? "iOS"
                            : "Mac OS X";
                    else if (/Linux/i.test(e)) return "Linux";
                    else return "";
                })()),
                    (t.browser = (function () {
                        let { userAgent: e, vendor: t = "" } = window.navigator,
                            { opera: E } = window;
                        if (E) return /Mini/.test(e) ? "Opera Mini" : "Opera";
                        if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
                        if (/FBIOS/.test(e)) return "Facebook Mobile";
                        if (/CriOS/.test(e)) return "Chrome iOS";
                        if (/Apple/.test(t))
                            return /Mobile/.test(e) ||
                                (null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2)
                                ? "Mobile Safari"
                                : "Safari";
                        else if (/Android/.test(e)) return /Chrome/.test(e) ? "Android Chrome" : "Android Mobile";
                        else if (/Edge/.test(e)) return "Edge";
                        else if (/Chrome/.test(e)) return "Chrome";
                        else if (/Konqueror/.test(e)) return "Konqueror";
                        else if (/Firefox/.test(e)) return "Firefox";
                        else if (/MSIE|Trident\//.test(e)) return "Internet Explorer";
                        else if (/Gecko/.test(e)) return "Mozilla";
                        else return "";
                    })()),
                    (t.device = (function () {
                        let { userAgent: e } = window.navigator;
                        if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
                        if (/Windows Phone/i.test(e)) return "Windows Phone";
                        if (/Android/.test(e)) return "Android";
                        if (/iPhone/.test(e)) return "iPhone";
                        if (/iPad/.test(e)) return "iPad";
                        else return "";
                    })()),
                    (t.system_locale = g()),
                    (t.has_client_mods = P()),
                    (e = t),
                    n.set(f, e);
            }
            let t = n.get(m);
            null == t && ((t = $()), n.set(m, t));
            let E = r.get(m);
            if (null == E) {
                var i;
                let e;
                (i = $()), (e = {}), Object.keys(i).map((t) => (e[`${t}_current`] = i[t])), (E = e), r.set(m, E);
            }
            return {
                ...e,
                ...{
                    ...{ browser_user_agent: window.navigator.userAgent || "", browser_version: p().version || "" },
                    os_version: p()?.os?.version ?? "",
                },
                ...t,
                ...E,
            };
        })();
    } catch (e) {
        i = {};
    }
(I = {}),
    (l = window.GLOBAL_ENV.RELEASE_CHANNEL) &&
        (null == I.release_channel || "" === I.release_channel) &&
        (I.release_channel = l.split("-")[0]),
    isNaN((s = parseInt("574859", 10))) || (I.client_build_number = s),
    null == (a = U?.app.getBuildNumber()) || isNaN(a) || (I.native_build_number = a),
    (I.client_event_source = (function () {
        try {
            if (__OVERLAY__) return "OVERLAY";
        } catch (e) {}
        return null;
    })()),
    (I.has_client_mods = P()),
    (I.client_launch_id = M),
    (function (e) {
        try {
            G.from(JSON.stringify(e)).toString("base64");
        } catch (e) {
            return null;
        }
    })((i = { ...i, ...I }));
var B = E(824120),
    H = E.n(B);
function v(e) {
    let t = [];
    for (let E = 0; E < e.length; E++) {
        let n = Number(e[E]);
        for (let e = 0; n || e < t.length; e++) (n += 10 * (t[e] || 0)), (t[e] = n % 16), (n = (n - t[e]) / 16);
    }
    return t;
}
class y {
    parts;
    str;
    static fromString(e) {
        return new y(
            (function (e) {
                let t = v(e),
                    E = [, , , ,];
                for (let e = 0; e < 4; e++)
                    E[3 - e] = (function (e, t) {
                        let E = 0;
                        for (let n = 0; n < 4; n++) {
                            let r = e[t + n];
                            if (void 0 === r) break;
                            E += r * 16 ** n;
                        }
                        return E;
                    })(t, 4 * e);
                return E;
            })(e),
            e,
        );
    }
    static fromBit(e) {
        let t = [, , , ,],
            E = Math.floor(e / 16);
        for (let n = 0; n < 4; n++) t[3 - n] = n === E ? 1 << (e - 16 * E) : 0;
        return new y(t);
    }
    static asUintN(e, t) {
        let { parts: E } = t,
            n = 0,
            r = 0;
        for (; r < e && r < 16 * E.length; ) {
            let t = Math.min(e - r, 16),
                i = (1 << t) - 1,
                _ = E.length - Math.floor(r / 16) - 1;
            (n |= (E[_] & i) << r), (r += t);
        }
        return n;
    }
    constructor(e, t) {
        (this.parts = e), (this.str = t);
    }
    and(e) {
        let { parts: t } = e;
        return new y(this.parts.map((e, E) => e & t[E]));
    }
    or(e) {
        let { parts: t } = e;
        return new y(this.parts.map((e, E) => e | t[E]));
    }
    xor(e) {
        let { parts: t } = e;
        return new y(this.parts.map((e, E) => e ^ t[E]));
    }
    not() {
        return new y(this.parts.map((e) => ~e));
    }
    equals(e) {
        let { parts: t } = e;
        return this.parts.every((e, E) => e === t[E]);
    }
    toString() {
        if (null != this.str) return this.str;
        let e = Array(16);
        return (
            this.parts.forEach((t, E) => {
                let n = v(t.toString());
                for (let t = 0; t < 4; t++) e[t + 4 * E] = n[3 - t] || 0;
            }),
            (this.str = H().fromArray(e, 16).toString())
        );
    }
    toJSON() {
        return this.toString();
    }
}
let b = (function () {
    try {
        return !0;
    } catch (e) {
        return !1;
    }
})();
b &&
    null == BigInt.prototype.toJSON &&
    (BigInt.prototype.toJSON = function () {
        return this.toString();
    });
let Y = {},
    F = (
        b
            ? function (e) {
                  return BigInt(e);
              }
            : function (e) {
                  return e instanceof y
                      ? e
                      : ("number" == typeof e && (e = e.toString()), null != Y[e] || (Y[e] = y.fromString(e)), Y[e]);
              }
    )(0),
    V = b
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : F;
              return e | t;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : F;
              return e.or(t);
          },
    W = b
        ? function (e) {
              return BigInt(1) << BigInt(e);
          }
        : function (e) {
              return y.fromBit(e);
          };
class k {
    value;
    constructor(e) {
        this.value = e;
    }
    toString() {
        return this.value;
    }
}
function K(e, t) {
    let E = {};
    for (let n of Object.keys(e)) {
        let r = e[n];
        if ("function" != typeof r) {
            E[n] = r;
            continue;
        }
        E[n] = function () {
            for (var e = arguments.length, E = Array(e), n = 0; n < e; n++) E[n] = arguments[n];
            return r(
                ...(function (e, t) {
                    return e.map((e) =>
                        null == e
                            ? e
                            : e instanceof k
                              ? e.toString()
                              : null == t
                                ? encodeURIComponent(e)
                                : String(e)
                                      .split("")
                                      .map((e) => (null != t && t.includes(e) ? e : encodeURIComponent(e)))
                                      .join(""),
                    );
                })(E, t),
            );
        };
    }
    return E;
}
let j = location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT,
    Q = location.protocol + "//discord.gg";
Object.freeze({
    HINT_PURPLE: "#c9d2f0",
    DARK_PURPLE: "#697ec4",
    MODAL_GREY: "#EFEFF4",
    ORANGE: "#f57731",
    GUILDS_GREY: "#1e2124",
    ACCOUNT_GREY: "#282b30",
    CHAT_GREY: "#36393e",
    UNREAD_GREY: "#8a8e94",
    HIGHLIGHT_GREY: "#25282c",
    AVATAR_GREY: "#747F8C",
    WHITE2: "#f3f3f3",
    WHITE3: "#f0f0f0",
    WHITE7: "#dbdde1",
    WHITE8: "#cdcdcd",
    GREY1: "#99aab5",
    GREY2: "#87909c",
    GREY3: "#737f8d",
    GREY4: "#949494",
    GREY5: "#535559",
    GREY6: "#4f545c",
    GREY7: "#1c242b",
    GREY9: "#202226",
}),
    Object.freeze({
        1: "Stripe",
        2: "Braintree",
        3: "Apple",
        4: "Google",
        5: "Adyen",
        6: "Apple Partner",
        8: "Virtual Currency",
        9: "Apple",
        10: "TDS",
    }),
    Object.freeze({
        BRAINTREE: { KEY: window.GLOBAL_ENV.BRAINTREE_KEY, PAYMENT_GATEWAY: "braintree" },
        STRIPE: { KEY: window.GLOBAL_ENV.STRIPE_KEY, PAYMENT_GATEWAY: "stripe" },
        ADYEN: { KEY: window.GLOBAL_ENV.ADYEN_KEY, PAYMENT_GATEWAY: "adyen" },
    }),
    Object.freeze({ CONSTANT: 1, APPLE_STICKER: 2 }),
    Object.freeze({ 0: "subscription", 1: "sku" });
let x = Object.freeze({
    CREATE_INSTANT_INVITE: W(0),
    KICK_MEMBERS: W(1),
    BAN_MEMBERS: W(2),
    ADMINISTRATOR: W(3),
    MANAGE_CHANNELS: W(4),
    MANAGE_GUILD: W(5),
    CHANGE_NICKNAME: W(26),
    MANAGE_NICKNAMES: W(27),
    MANAGE_ROLES: W(28),
    MANAGE_WEBHOOKS: W(29),
    MANAGE_GUILD_EXPRESSIONS: W(30),
    CREATE_GUILD_EXPRESSIONS: W(43),
    VIEW_AUDIT_LOG: W(7),
    VIEW_CHANNEL: W(10),
    VIEW_GUILD_ANALYTICS: W(19),
    VIEW_CREATOR_MONETIZATION_ANALYTICS: W(41),
    MODERATE_MEMBERS: W(40),
    USE_EMBEDDED_ACTIVITIES: W(39),
    USE_EXTERNAL_APPS: W(50),
    SEND_MESSAGES: W(11),
    SEND_TTS_MESSAGES: W(12),
    MANAGE_MESSAGES: W(13),
    EMBED_LINKS: W(14),
    ATTACH_FILES: W(15),
    READ_MESSAGE_HISTORY: W(16),
    MENTION_EVERYONE: W(17),
    USE_EXTERNAL_EMOJIS: W(18),
    ADD_REACTIONS: W(6),
    USE_APPLICATION_COMMANDS: W(31),
    MANAGE_THREADS: W(34),
    CREATE_PUBLIC_THREADS: W(35),
    CREATE_PRIVATE_THREADS: W(36),
    USE_EXTERNAL_STICKERS: W(37),
    SEND_MESSAGES_IN_THREADS: W(38),
    SEND_VOICE_MESSAGES: W(46),
    SEND_POLLS: W(49),
    PIN_MESSAGES: W(51),
    BYPASS_SLOWMODE: W(52),
    MANAGE_OFFICIAL_MESSAGES: W(53),
    CONNECT: W(20),
    SPEAK: W(21),
    MUTE_MEMBERS: W(22),
    DEAFEN_MEMBERS: W(23),
    MOVE_MEMBERS: W(24),
    USE_VAD: W(25),
    PRIORITY_SPEAKER: W(8),
    STREAM: W(9),
    USE_SOUNDBOARD: W(42),
    USE_EXTERNAL_SOUNDS: W(45),
    SET_VOICE_CHANNEL_STATUS: W(48),
    REQUEST_TO_SPEAK: W(32),
    MANAGE_EVENTS: W(33),
    CREATE_EVENTS: W(44),
});
!(function () {
    for (var e = arguments.length, t = Array(e), E = 0; E < e; E++) t[E] = arguments[E];
    let n = t[0];
    for (let e = 1; e < t.length; e++) n = V(n, t[e]);
})(
    x.KICK_MEMBERS,
    x.BAN_MEMBERS,
    x.ADMINISTRATOR,
    x.MANAGE_CHANNELS,
    x.MANAGE_GUILD,
    x.MANAGE_ROLES,
    x.MANAGE_MESSAGES,
    x.MANAGE_THREADS,
    x.MODERATE_MEMBERS,
),
    Object.freeze({
        TWITTER: Object.freeze({ default: "https://twitter.com/discord", ja: "https://twitter.com/discord_jp" }),
    });
let X = Object.freeze({
    WELCOME: `${j}/welcome/`,
    ME: `${j}/channels/@me`,
    SETTINGS: (e, t) => `${j}/settings/${e}${t ? `/${t}` : ""}`,
    CONNECTION: (e) => `${j}/connections/${e}`,
    CHANGELOGS: `${j}/settings/changelogs`,
    LOGIN: `${j}/login`,
    LOGIN_WITH_REDIRECT: (e) => `${j}/login?redirect_to=${e}`,
    REGISTER: `${j}/register`,
    REGISTER_WITH_REDIRECT: (e) => `${j}/register?redirect_to=${e}`,
    CREATE_GUILD: `${j}/guilds/create`,
    VANITY_INVITE: (e) => `${Q}/${e}`,
    HYPESQUAD_ONLINE: `${j}/settings/hypesquad-online`,
    BROWSE_NITRO_TITLES: `${j}/store/browse?type=nitro`,
    SKU_DETAILS: (e, t) => `${j}/store/skus/${e}${null != t ? `?store_listing_id=${t}` : ""}`,
    MESSAGE: (e, t, E) => `/channels/${e}/${t}/${E}`,
    CHANNEL: (e, t) => `/channels/${e}/${t}`,
    REPORT: `${j}/report`,
    QUEST_PREVIEW_TOOL_2: (e) => `${j}/quest-preview/${e}`,
    QUEST_HOME_PREVIEW: (e) => `${j}/quest-home?ad_creative_ids=${e}`,
});
var q =
    (((A = q || {}).INDEX = "/"),
    (A.INDEX_WORD = "/index"),
    (A.INDEX_BUCKET = "/index/:bucketId"),
    (A.CHANGELOGS = "/changelogs/:date"),
    (A.COMMUNITY = "/community"),
    (A.COMPANY = "/company"),
    (A.COMPANY_INFORMATION = "/company-information"),
    (A.CREATORS = "/creators"),
    (A.DOWNLOADS = "/downloads"),
    (A.DOWNLOAD = "/download"),
    (A.GAMING = "/gaming"),
    (A.PRIVACY = "/privacy"),
    (A.TOS = "/tos"),
    (A.TERMS = "/terms"),
    (A.STORE_TERMS = "/store-terms"),
    (A.ACKNOWLEDGEMENTS = "/acknowledgements"),
    (A.LICENSES = "/licenses"),
    (A.PARTNERS = "/partners"),
    (A.HYPESQUAD = "/hypesquad"),
    (A.HYPESQUAD_RIOT = "/hypesquad-riot"),
    (A.BRANDING = "/branding"),
    (A.ERROR_404 = "/404"),
    (A.JOBS = "/jobs"),
    (A.JOB = "/jobs/:jobId"),
    (A.STREAMKIT = "/streamkit"),
    (A.SECURITY = "/security"),
    (A.NITRO = "/nitro"),
    (A.DISCOVER = "/servers"),
    (A.QUESTS = "/ads/quests"),
    (A.GUIDELINES = "/guidelines"),
    (A.RICH_PRESENCE = "/rich-presence"),
    (A.VERIFICATION = "/verification"),
    (A.OPEN_SOURCE = "/open-source"),
    (A.WARFRAME = "/warframe"),
    (A.REMOTE_AUTH = "/ra/:remoteAuthFingerprint"),
    (A.SAFETY_LANDING = "/safetycenter"),
    (A.SAFETY_ARTICLE_ROOT = "/safety"),
    (A.SAFETY_ARTICLE = "/safety/:article"),
    (A.NEWSROOM = "/newsroom"),
    (A.INSPIRATION = "/inspiration"),
    (A.MOD_ACADEMY_LANDING = "/moderation"),
    (A.MOD_ACADEMY_EXAM = "/moderation/exam"),
    (A.MOD_ACADEMY_ARTICLE = "/moderation/:article"),
    (A.BLOG = "/blog"),
    (A.BUILD = "/build"),
    (A.DEVELOPERS = "/developers"),
    (A.APP_DIRECTORY = "/application-directory"),
    (A.REFRESH_INDEX = "/new"),
    (A.REFRESH_INDEX_WORD = "/new/index"),
    (A.REFRESH_COMPANY = "/new/company"),
    (A.REFRESH_DOWNLOAD = "/new/download"),
    (A.REFRESH_PRIVACY = "/new/privacy"),
    (A.REFRESH_TERMS = "/new/terms"),
    (A.REFRESH_ACKNOWLEDGEMENTS = "/new/acknowledgements"),
    (A.REFRESH_LICENSES = "/new/licenses"),
    (A.REFRESH_BRANDING = "/new/branding"),
    (A.REFRESH_JOBS = "/new/jobs"),
    (A.REFRESH_JOB = "/new/jobs/:jobId"),
    (A.REFRESH_STREAMKIT = "/new/streamkit"),
    (A.REFRESH_NITRO = "/new/nitro"),
    (A.REFRESH_GUIDELINES = "/new/guidelines"),
    (A.REFRESH_SAFETY_LANDING = "/new/safety"),
    (A.REFRESH_SAFETY_ARTICLE = "/new/safety/:article"),
    (A.COLLEGE = "/college"),
    (A.LEAGUE_CLUBS = "/league-communities"),
    (A.DISCORD_RECRUITING_SCAMS = "/discord-recruitment-scams"),
    (A.DEV_NEWSLETTER_SIGNUP = "/dev-newsletter"),
    (A.LEGACY_DEV_NEWSLETTER = "/newsletter"),
    (A.LEGAL_ARCHIVE = "/archive/"),
    (A.TERMS_MAY_2020 = "/archive/terms/may-2020"),
    (A.PRIVACY_JUNE_2020 = "/archive/privacy/june-2020"),
    (A.GUIDELINES_MAY_2020 = "/archive/guidelines/may-2020"),
    (A.FALL_RELEASE_2023 = "/fallrelease"),
    (A.MOBILE_REDESIGN_2023 = "/mobile"),
    (A.REFRESH_XBOX_OFFER = "/new/discord-xbox-offer-2019"),
    (A.REFRESH_WHY_DISCORD = "/why-discord-is-different"),
    (A.WHY_DISCORD = "/why-discord"),
    (A.XBOX_OFFER = "/discord-xbox-offer-2020"),
    (A.COLLEGE_BRUINS = "/bruins"),
    (A.COLLEGE_ANTEATERS = "/anteaters"),
    (A.COLLEGE_GAUCHOS = "/gauchos"),
    (A.COLLEGE_BEARS = "/bears"),
    (A.COLLEGE_SLUGS = "/slugs"),
    (A.BACK_TO_SCHOOL_GIVEAWAY_INSTAGRAM = "/terms/back-to-school-2020/instagram"),
    (A.BACK_TO_SCHOOL_GIVEAWAY_TWITTER = "/terms/back-to-school-2020/twitter"),
    (A.SNOWSGIVING_GIVEAWAY_INSTAGRAM = "/terms/snowsgiving-2020/instagram"),
    (A.SNOWSGIVING_GIVEAWAY_TWITTER = "/terms/snowsgiving-2020/twitter"),
    A);
K(X),
    K(q),
    Object.freeze({
        FACEBOOK_URL: "https://www.facebook.com/discord/",
        INSTAGRAM_URL: "https://www.instagram.com/discord/",
        YOUTUBE_URL: "https://www.youtube.com/discord/",
        TIKTOK_URL: "https://www.tiktok.com/@discord",
    });
let z = "dQw4w9WgXcQ:",
    J = null,
    Z = window.DiscordNative;
null != Z && (J = Z.safeStorage);
let ee = !1,
    et = {},
    eE = !1;
function en(e) {
    return null == e || 0 === e.length
        ? { decryptedToken: null, wasEncrypted: !1 }
        : J?.isEncryptionAvailable() && e.startsWith(z)
          ? { decryptedToken: J.decryptString(e.substring(z.length)), wasEncrypted: !0 }
          : { decryptedToken: e, wasEncrypted: !1 };
}
var er =
        (((S = {})[(S.DISPATCH = 0)] = "DISPATCH"),
        (S[(S.HEARTBEAT = 1)] = "HEARTBEAT"),
        (S[(S.IDENTIFY = 2)] = "IDENTIFY"),
        (S[(S.PRESENCE_UPDATE = 3)] = "PRESENCE_UPDATE"),
        (S[(S.VOICE_STATE_UPDATE = 4)] = "VOICE_STATE_UPDATE"),
        (S[(S.VOICE_SERVER_PING = 5)] = "VOICE_SERVER_PING"),
        (S[(S.RESUME = 6)] = "RESUME"),
        (S[(S.RECONNECT = 7)] = "RECONNECT"),
        (S[(S.REQUEST_GUILD_MEMBERS = 8)] = "REQUEST_GUILD_MEMBERS"),
        (S[(S.INVALID_SESSION = 9)] = "INVALID_SESSION"),
        (S[(S.HELLO = 10)] = "HELLO"),
        (S[(S.HEARTBEAT_ACK = 11)] = "HEARTBEAT_ACK"),
        (S[(S.CALL_CONNECT = 13)] = "CALL_CONNECT"),
        (S[(S.GUILD_SUBSCRIPTIONS = 14)] = "GUILD_SUBSCRIPTIONS"),
        (S[(S.STREAM_CREATE = 18)] = "STREAM_CREATE"),
        (S[(S.STREAM_DELETE = 19)] = "STREAM_DELETE"),
        (S[(S.STREAM_WATCH = 20)] = "STREAM_WATCH"),
        (S[(S.STREAM_PING = 21)] = "STREAM_PING"),
        (S[(S.STREAM_SET_PAUSED = 22)] = "STREAM_SET_PAUSED"),
        (S[(S.REQUEST_GUILD_APPLICATION_COMMANDS = 24)] = "REQUEST_GUILD_APPLICATION_COMMANDS"),
        (S[(S.REQUEST_FORUM_UNREADS = 28)] = "REQUEST_FORUM_UNREADS"),
        (S[(S.REMOTE_COMMAND = 29)] = "REMOTE_COMMAND"),
        (S[(S.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH = 30)] = "GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH"),
        (S[(S.REQUEST_SOUNDBOARD_SOUNDS = 31)] = "REQUEST_SOUNDBOARD_SOUNDS"),
        (S[(S.REQUEST_LAST_MESSAGES = 34)] = "REQUEST_LAST_MESSAGES"),
        (S[(S.SEARCH_RECENT_MEMBERS = 35)] = "SEARCH_RECENT_MEMBERS"),
        (S[(S.GUILD_SUBSCRIPTIONS_BULK = 37)] = "GUILD_SUBSCRIPTIONS_BULK"),
        (S[(S.GUILD_CHANNELS_RESYNC = 38)] = "GUILD_CHANNELS_RESYNC"),
        (S[(S.REQUEST_CHANNEL_MEMBER_COUNT = 39)] = "REQUEST_CHANNEL_MEMBER_COUNT"),
        (S[(S.QOS_HEARTBEAT = 40)] = "QOS_HEARTBEAT"),
        (S[(S.UPDATE_TIME_SPENT_SESSION_ID = 41)] = "UPDATE_TIME_SPENT_SESSION_ID"),
        (S[(S.REQUEST_CHANNEL_INFO = 43)] = "REQUEST_CHANNEL_INFO"),
        S),
    ei = E(418781),
    e_ = E.n(ei),
    eo =
        (((T = {}).ALL = "ALL"),
        (T.AVATAR_DECORATION = "AVATAR_DECORATION"),
        (T.PROFILE_EFFECT = "PROFILE_EFFECT"),
        (T.NAMEPLATE = "NAMEPLATE"),
        (T.PROFILE_FRAME = "PROFILE_FRAME"),
        (T.BUNDLE = "BUNDLE"),
        T),
    eI = (((O = {}).ASC = "asc"), (O.DESC = "desc"), O),
    el =
        (((R = {}).PRICE = "price"),
        (R.ALPHABETICAL = "alphabetical"),
        (R.RECENCY = "recency"),
        (R.POPULARITY = "popularity"),
        (R.RELEVANCE = "relevance"),
        R),
    es =
        (((N = {}).PREMIUM_TIER_2_1_HOUR = "1271583180566036480"),
        (N.PREMIUM_TIER_2_1_DAY = "1298745361602449479"),
        (N.PREMIUM_TIER_2_3_DAY = "1333912750274904064"),
        N),
    ea =
        (((c = {}).HOME = "home"),
        (c.CATALOG = "catalog"),
        (c.ORBS = "orbs"),
        (c.AVATAR_DECORATIONS = "avatar-decorations"),
        (c.PROFILE_EFFECTS = "profile-effects"),
        (c.NAMEPLATES = "nameplates"),
        (c.PROFILE_FRAMES = "profile-frames"),
        (c.BUNDLES = "bundles"),
        (c.LAYOUT = "layout"),
        (c.COLLECTION_INDEX = "collection-index"),
        (c.GAME_SHOPS = "game-shops"),
        c);
Object.values({
    ORB_PROFILE_BADGE: "1342211853484429445",
    FRACTIONAL_PREMIUM: es.PREMIUM_TIER_2_3_DAY,
    FRACTIONAL_PREMIUM_1_DAY: es.PREMIUM_TIER_2_1_DAY,
}),
    eo.AVATAR_DECORATION,
    eo.NAMEPLATE,
    eo.PROFILE_EFFECT,
    eo.PROFILE_FRAME,
    eo.BUNDLE,
    el.RELEVANCE,
    eI.DESC,
    el.RECENCY,
    eI.DESC,
    el.PRICE,
    eI.ASC,
    el.PRICE,
    eI.DESC,
    el.POPULARITY,
    eI.DESC;
var eA = (((u = {}).ABOUT = "about"), (u.STORE = "store"), u),
    eS =
        (((L = {}).GENERAL = "general"),
        (L.IMAGES = "images"),
        (L.PREMIUM_DEPRECATED = "premium"),
        (L.STORE = "store"),
        (L.PRIVACY = "privacy"),
        L);
let eT = ["@me", "@favorites", "@guilds-empty-nux", "@inbox", "@guild-upsell-list"],
    eO = K(
        Object.freeze({
            INDEX: "/",
            APP: "/app",
            APP_WITH_INVITE_AND_GUILD_ONBOARDING: (e) => `/app/invite-with-guild-onboarding/${e}`,
            APP_WITH_GIFT_CODE: (e) => `/app/gifts/${e}`,
            ACTIVITY: "/activity",
            ACTIVITIES: "/activities",
            ACTIVITIES_HAPPENING_NOW: "/activities/happening-now",
            ACTIVITY_DETAILS: (e) => `/activities/${e}`,
            APPLICATION_LIBRARY: "/library",
            APPLICATION_LIBRARY_INVENTORY: "/library/inventory",
            APPLICATION_LIBRARY_ACTION: (e, t) => `/library/${e}/${t}`,
            APPLICATION_LIBRARY_SETTINGS: "/library/settings",
            APPLICATION_STORE: "/store",
            APPLICATION_STORE_LISTING_SKU: (e, t) => `/store/skus/${e}${null != t ? `/${t}` : ""}`,
            APPLICATION_STORE_LISTING_APPLICATION: (e, t) => `/store/applications/${e}${null != t ? `/${t}` : ""}`,
            BILLING_PREFIX: "/billing",
            BILLING_LOGIN_HANDOFF: "/billing/login/handoff",
            BILLING_PREMIUM_SUBSCRIBE: "/billing/premium/subscribe",
            BILLING_PAYMENT_SOURCES_CREATE: "/billing/payment-sources/create",
            BILLING_PREMIUM_SWITCH_PLAN: "/billing/premium/switch-plan",
            BILLING_GUILD_SUBSCRIPTIONS_PURCHASE: "/billing/guild-subscriptions/purchase",
            BILLING_PAYMENTS: "/billing/payments",
            BILLING_PROMOTION_REDEMPTION: (e) => `/billing/promotions/${e}`,
            BILLING_PROMOTION_REDEMPTION_GENERIC: "/billing/promotions",
            BILLING_PROMOTION_DIRECT_FULFILLMENT_REDEMPTION: (e, t) => `/billing/partner-promotions/${e}/${t}`,
            GIFT_CARD_REDEEM: "/redeem",
            FRIENDS: "/channels/@me",
            ME: "/channels/@me",
            MESSAGE_REQUESTS: "/message-requests",
            CHANNEL: (e, t, E) => {
                let n = null == t ? `/channels/${e || "@me"}` : `/channels/${e || "@me"}/${t}`;
                return null == E ? n : `${n}/${E}`;
            },
            CHANNEL_THREAD_VIEW: (e, t, E, n) => {
                let r = `/channels/${e}/${t}/threads/${E}`;
                return null == n ? r : `${r}/${n}`;
            },
            VOICE_CHAT_CHANNEL_PARTIAL: (e, t, E) => {
                let n = `/voice/${e}/${t}`;
                return null == E ? n : `${n}/${E}`;
            },
            LOGIN: "/login",
            LOGIN_HANDOFF: "/login/handoff",
            LOGIN_ONE_TIME: "/login/one-time",
            REGISTER: "/register",
            DEFAULT_LOGGED_OUT: "/login",
            INVITE: (e) => `/invite/${e}`,
            INVITE_LOGIN: (e) => `/invite/${e}/login`,
            INVITE_REGISTER: (e) => `/invite/${e}/register`,
            INVITE_PROXY: (e, t) => (null != t ? `/invite-proxy/${e}?messageId=${t}` : `/invite-proxy/${e}`),
            GUILD_TEMPLATE: (e) => `/template/${e}`,
            GUILD_TEMPLATE_LOGIN: (e) => `/template/${e}/login`,
            GIFT_CODE: (e) => `/gifts/${e}`,
            GIFT_CODE_LOGIN: (e) => `/gifts/${e}/login`,
            WELCOME: (e, t) => (null != t ? `/welcome/${e ?? "@me"}/${t}` : `/welcome/${e ?? "@me"}`),
            VERIFY: "/verify",
            VERIFY_REQUEST: "/verify-request",
            RESET: "/reset",
            APPS: "/apps",
            ACTIVATE: "/activate",
            ACTIVATE_HANDOFF: "/activate/handoff",
            CONNECTION_LINK: (e) => `/connections/${e}/link`,
            CONNECTION_LINK_AUTHORIZE: (e) => `/connections/${e}/link-authorize`,
            CONNECTIONS_SUCCESS: (e) => `/connections/${e}/success`,
            CONNECTIONS_ERROR: (e) => `/connections/${e}/error`,
            CONNECTIONS: (e) => `/connections/${e}`,
            CONNECTIONS_AUTHORIZE_CONTINUE: (e) => `/connections/${e}/authorize-continue`,
            CONNECT_AUTHORIZE: "/connect/authorize",
            OAUTH2_AUTHORIZE: "/oauth2/authorize",
            OAUTH2_AUTHORIZED: "/oauth2/authorized",
            OAUTH2_ERROR: "/oauth2/error",
            SETTINGS: (e, t) => `/settings/${e}${null != t ? `/${t}` : ""}`,
            DEVELOPER_ACTIVATE_APPLICATION_TEST_MODE: "/settings/advanced/activate-application-test-mode",
            SNOWSGIVING: "/snowsgiving",
            PLAYGROUND: (e, t) => {
                let E = "/playground";
                return null != e && ((E += `/${e}`), null != t && (E += `/${t}`)), E;
            },
            CHANGELOGS: (e) => `/settings/changelogs${null != e ? `/${e}` : ""}`,
            USERS: (e) => `/users/${e}`,
            GUILD_CREATE: "/guilds/create",
            DISABLE_EMAIL_NOTIFICATIONS: "/disable-email-notifications",
            DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS: "/disable-server-highlight-notifications",
            USER_GUILD_NOTIFICATION_SETTINGS: (e) => `/guilds/${e}/notification-settings`,
            AUTHORIZE_IP: "/authorize-ip",
            REJECT_IP: "/reject-ip",
            REJECT_MFA: "/reject-mfa",
            AUTHORIZE_PAYMENT: "/authorize-payment",
            HANDOFF: "/handoff",
            DOMAIN_MIGRATION: "/domain-migration",
            XBOX_EDU: "/connections/xbox/intro",
            XBOX_PIN: "/connections/xbox/pin",
            DOWNLOAD_QR_CODE_REDIRECT: "/download-qr-code",
            BILLING_POPUP_BRIDGE_CALLBACK: "/billing/popup-bridge/callback",
            OAUTH2_WHITELIST_ACCEPT: "/oauth2/allowlist/accept",
            GUILD_DISCOVERY: "/guild-discovery",
            GLOBAL_DISCOVERY: "/discovery",
            QUEST_HOME_DEPRECATED: "/discovery/quests",
            QUEST_HOME: "/quest-home",
            GLOBAL_DISCOVERY_SERVERS: "/discovery/servers",
            GLOBAL_DISCOVERY_APPS: "/discovery/applications",
            GLOBAL_DISCOVERY_APPS_CATEGORY: (e) => `/discovery/applications/categories/${e}`,
            GLOBAL_DISCOVERY_APPS_PROFILE: (e) => `/discovery/applications/${e}`,
            GLOBAL_DISCOVERY_APPS_PROFILE_SECTION: (e, t) => `/discovery/applications/${e}/${t}`,
            GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU: (e, t) => `/discovery/applications/${e}/${eA.STORE}/${t}`,
            GLOBAL_DISCOVERY_APPS_SEARCH: "/discovery/applications/search",
            GUILD_MEMBER_VERIFICATION: (e) => `/member-verification/${e}`,
            GUILD_MEMBER_VERIFICATION_FOR_HUB: (e, t) => `/member-verification-for-hub/${e}${null != t ? `/${t}` : ""}`,
            POPOUT_WINDOW: "/popout",
            UPCOMING_STAGES: (e, t) => `/guild-stages/${e}${null != t ? `/${t}` : ""}`,
            VERIFY_HUB_EMAIL: "/verify-hub-email",
            OPEN_APP_FROM_EMAIL: "/open-app-from-email",
            BILLING_MANAGE_SUBSCRIPTION: "/billing/premium/manage",
            BILLING_PAST_DUE_SUBSCRIPTION: "/billing/premium/past-due",
            BILLING_MANAGE_SUBSCRIPTION_WITH_DEEP_LINK: (e, t) =>
                `/billing/premium/manage?deep_link_type=${e}${null != t ? `&load_id=${t}` : ""}`,
            BILLING_MANAGE_SUBSCRIPTION_WITH_FLOW_TYPE: (e, t) =>
                `/billing/premium/manage?flow_type=${e}${null != t ? `&load_id=${t}` : ""}`,
            BILLING_STANDALONE_CHECKOUT_PAGE: (e, t, E, n, r, i, _) =>
                `/billing/premium/subscribe?plan_id=${e}&gift=${t}&load_id=${E}${null != n ? `&payment_method_type=${n}` : ""}${null != r ? `&deep_link_type=${r}` : ""}${null != i ? `&use_preset_offer=${i}` : ""}${null != _ ? `&flow_type=${_}` : ""}`,
            BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE: (e, t, E, n) =>
                `/billing/guild-subscriptions/purchase?guild_id=${e}${null != t ? `&deep_link_type=${t}` : ""}${null != E ? `&load_id=${E}` : ""}${null != n ? `&flow_type=${n}` : ""}`,
            GUILD_BOOSTING_MARKETING: (e) => `/guilds/${e}/premium-guild-subscriptions`,
            GUILD_SETTINGS: (e, t, E) => {
                let n = `/guilds/${e}/settings${null != t ? `/${t}` : ""}`;
                return null == E ? n : `${n}/${E}`;
            },
            PICK_GUILD_SETTINGS: (e, t, E) => {
                let n = `/guilds/settings${null != e ? `/${e}` : ""}`,
                    r = null == t ? n : `${n}/${t}`;
                return `${r}${null != E ? `?feature=${E}` : ""}`;
            },
            GUILD_EVENT_DETAILS: (e, t, E) => `/events/${e}/${t}` + (null != E ? `/${E}` : ""),
            FEATURE: (e) => `/feature/${e}`,
            GUILD_FEATURE: (e, t) => `/feature/${e}/${t}`,
            GUILD_JOIN_REQUEST: (e, t) => `/guilds/${e}/requests/${t}`,
            MOBILE_WEB_HANDOFF: "/mweb-handoff",
            APPLICATION_DIRECTORY: "/application-directory",
            APPLICATION_DIRECTORY_PROFILE: (e) => `/application-directory/${e}`,
            APPLICATION_DIRECTORY_PROFILE_SECTION: (e, t) => `/application-directory/${e}/${t}`,
            APPLICATION_DIRECTORY_PROFILE_STORE_SKU: (e, t) => `/application-directory/${e}/${eS.STORE}/${t}`,
            APPLICATION_DIRECTORY_SEARCH: "/application-directory/search",
            FAMILY_CENTER: "/family-center",
            FAMILY_CENTER_MY_FAMILY: (e, t) => `/feature/family-center/my-family/${e}/${t}`,
            SERVER_SHOP: (e) => `/channels/${e}/shop`,
            CHANNELS_GAME_SHOP: (e, t, E, n) => {
                let r = `/channels/${e}/game-shop`;
                return (r += `/${t ?? 0}`), null != E && ((r += `/${E}`), null != n && (r += `/${n}`)), r;
            },
            GAME_SHOP: (e, t, E) => {
                let n = `/game-shop/${e}`;
                return null != t && ((n += `/${t}`), null != E && (n += `/${E}`)), n;
            },
            GUILD_PRODUCT: (e, t) => `/channels/${e}/shop/${t}`,
            REPORT: "/report",
            REPORT_SECOND_LOOK: "/report-review",
            COLLECTIBLES_SHOP: "/shop",
            COLLECTIBLES_SHOP_GAME_SHOP: (e, t, E, n) => {
                let r = `/shop?tab=${ea.GAME_SHOPS}&applicationId=${e}`;
                return (
                    null != t && (r += `&pageIndex=${t}`),
                    null != E && (r += `&skuId=${E}`),
                    null != n && (r += `&slug=${n}`),
                    r
                );
            },
            COLLECTIBLES_SHOP_WITH_TAB: (e) => `/shop?tab=${e}`,
            COLLECTIBLES_SHOP_COLLECTION_DETAIL: (e) => `/shop/collection/${e}`,
            COLLECTIBLES_SHOP_PRODUCT_DETAIL: (e) => `/shop/product/${e}`,
            COLLECTIBLES_SHOP_LAYOUT: (e) => `/shop/layout/${e}`,
            NITRO_HOME: "/store",
            ACCOUNT_STANDING: "/account-standing",
            CHANNEL_SUMMARIES: (e) => `/channels/${e}/summaries`,
            CHANNEL_SUMMARY: (e, t) => `/channels/${e}/summaries/${t}`,
            USER_SUMMARIES: "/users/@me/summaries",
            QUESTS: (e) => `/quests/${e}`,
            GAME_PROFILE: (e) => `/games/${e}`,
            ACCOUNT_REVERT: (e) => `/wasntme/${e}`,
            POWERUP_STORE: (e) => `/channels/${e}/boosts`,
            CONFERENCE_MODE: "/conference-mode",
            CONFERENCE_MODE_VOICE: (e, t) => `/conference-mode/voice/${e}/${t}`,
            QUEST_PREVIEW: (e) => `/quest-preview/${e}`,
            QUEST_PREVIEW_TOOL_2: (e) => `/quest-home?tab=preview_tool&quest_id=${e}`,
            ICYMI: "/icymi",
        }),
        [":", "?", "@"],
    ),
    eR = new Set(
        Object.values(
            (((C = {}).ROLE_SUBSCRIPTIONS = "role-subscriptions"),
            (C.SERVER_MONETIZATION_ONBOARDING = "server-monetization-onboarding"),
            (C.GAME_SHOP = "game-shop"),
            (C.GUILD_SHOP = "shop"),
            (C.MEMBER_APPLICATIONS = "member-applications"),
            (C.GUILD_HOME = "@home"),
            (C.CHANNEL_BROWSER = "channel-browser"),
            (C.GUILD_ONBOARDING = "onboarding"),
            (C.CUSTOMIZE_COMMUNITY = "customize-community"),
            (C.MEMBER_SAFETY = "member-safety"),
            (C.GUILD_BOOSTS = "boosts"),
            (C.GAME_SERVERS = "game-servers"),
            (C.REPORT_TO_MOD = "report-to-mod"),
            (C.GUILD_OFFICIAL_MESSAGES = "official-messages"),
            C),
        ),
    );
function eN(e, t) {
    let { optional: E = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return new k(`:${e_()(e)}(${t})${E ? "?" : ""}`);
}
Object.freeze({
    GUILD_FEED_REMOVED: 1,
    PINNED: 2,
    ACTIVE_CHANNELS_REMOVED: 4,
    REQUIRE_TAG: 16,
    IS_SPAM: 32,
    IS_GUILD_RESOURCE_CHANNEL: 128,
    CLYDE_AI: 256,
    IS_SCHEDULED_FOR_DELETION: 512,
    IS_MEDIA_CHANNEL: 1024,
    SUMMARIES_DISABLED: 2048,
    IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL: 8192,
    IS_BROADCASTING: 16384,
    HIDE_MEDIA_DOWNLOAD_OPTIONS: 32768,
    IS_JOIN_REQUEST_INTERVIEW_CHANNEL: 65536,
    OBFUSCATED: 131072,
    IS_MODERATOR_REPORT_CHANNEL: 524288,
    IS_SPOILER_CHANNEL: 2097152,
    IS_GAME_INVITES_CHANNEL: 4194304,
    HAS_ONLY_SYSTEM_MESSAGES: 8388608,
}),
    Object.values(
        (((d = {}).GUILD_HOME = "home"),
        (d.SERVER_GUIDE = "guide"),
        (d.CHANNEL_BROWSER = "browse"),
        (d.CUSTOMIZE_COMMUNITY = "customize"),
        (d.LINKED_ROLES = "linked-roles"),
        d),
    );
let ec = {
    guildId() {
        let { name: e = "guildId", optional: t = !1 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            E = eT.map(e_()).join("|");
        return eN(e, `${E}|\\d+`, { optional: t });
    },
    channelId() {
        let { name: e = "channelId", optional: t = !1 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            E = [...eR].map(e_()).join("|");
        return eN(e, `${E}|\\d+`, { optional: t });
    },
};
var eu = E(873263);
let eL = new Set([
    eO.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode"),
    eO.APP_WITH_GIFT_CODE(":giftCode"),
    eO.APP,
    eO.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
    eO.SETTINGS(":section", ":subsection?"),
    eO.USER_GUILD_NOTIFICATION_SETTINGS(ec.guildId()),
    eO.APPLICATION_LIBRARY_INVENTORY,
    eO.WELCOME(ec.guildId({ optional: !0 }), ec.channelId({ optional: !0 })),
    eO.GUILD_EVENT_DETAILS(ec.guildId({ optional: !0 }), ":guildEventId"),
    eO.GUILD_SETTINGS(ec.guildId(), ":section?", ":subsection?"),
    eO.CHANNEL_THREAD_VIEW(ec.guildId(), ec.channelId(), ":threadId", ":messageId?"),
    eO.CHANNEL(ec.guildId(), ec.channelId({ optional: !0 }), ":messageId?"),
    eO.ACTIVITY,
    eO.ACTIVITIES,
    eO.ACTIVITIES_HAPPENING_NOW,
    eO.ACTIVITY_DETAILS(":applicationId"),
    eO.APPLICATION_LIBRARY,
    eO.APPLICATION_STORE,
    eO.MESSAGE_REQUESTS,
    eO.COLLECTIBLES_SHOP,
    eO.COLLECTIBLES_SHOP_COLLECTION_DETAIL(":collectionId"),
    eO.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
    eO.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
    eO.GUILD_DISCOVERY,
    eO.QUEST_HOME_DEPRECATED,
    eO.QUEST_HOME,
    eO.ICYMI,
    eO.GLOBAL_DISCOVERY,
    eO.GUILD_MEMBER_VERIFICATION(ec.guildId()),
    eO.GUILD_MEMBER_VERIFICATION_FOR_HUB(ec.guildId(), ":inviteCode?"),
    eO.GUILD_BOOSTING_MARKETING(ec.guildId()),
    eO.GUILD_FEATURE(":feature", ec.guildId()),
    eO.FEATURE(":feature"),
    eO.FAMILY_CENTER,
    eO.APPLICATION_DIRECTORY,
    eO.GAME_SHOP(ec.guildId(), ":shopSkuId?", ":shopSlug?"),
]);
!(function () {
    if (null == window.WebSocket || null == window._ws) return;
    let e =
        ((function () {
            if (eE) return;
            (o = n.get("token")), (et = n.get("tokens") || {});
            let { decryptedToken: e, wasEncrypted: t } = en(o);
            (ee = t),
                (_ = e),
                [
                    ...Object.entries(et)
                        .map((e) => {
                            let [t, E] = e,
                                { decryptedToken: n, wasEncrypted: r } = en(E);
                            return (ee = r || ee), [t, n];
                        })
                        .filter((e) => {
                            let [t, E] = e;
                            return null != E;
                        }),
                ].reduce((e, t) => {
                    let [E, n] = t;
                    return (e[E] = n), e;
                }, {}),
                (eE = !0);
        })(),
        _);
    if (null == e || __OVERLAY__) return;
    let t = window._ws.ws,
        E = window._ws.state,
        r = E.open;
    performance.mark("FastConnect-socket-open", { detail: { alreadyOpen: r } });
    let I = function () {
        if (
            (performance.mark("FastConnect-identify-handler-running"),
            (E.open = !0),
            !(function (e) {
                for (let t of eL) if (null != (0, eu.B6)(e, { path: t })) return !0;
                return !1;
            })(window.location.pathname))
        )
            return void console.log("[FAST CONNECT] session is not required, skipping fast connect early identify");
        console.log("[FAST CONNECT] sending identify");
        let r = (e) => JSON.stringify(e);
        if (null != window.DiscordNative) {
            let e,
                t = window.DiscordNative;
            try {
                e = t.nativeModules.requireModule("discord_erlpack");
            } catch (E) {
                try {
                    e = t.nativeModules.requireModule("erlpack");
                } catch (e) {}
            }
            null != e && (r = (t) => e.pack(t).buffer);
        }
        let _ = n.get("installation_id_v3") ?? n.get("analytics_installation");
        var o = r({
            op: er.IDENTIFY,
            d: {
                token: e,
                capabilities: (function (e) {
                    let { useChannelObfuscation: t } = e;
                    return t ? 1767421 : 1734653;
                })({ useChannelObfuscation: null != n.get("private_channel_obfuscation") }),
                properties: { ...i, is_fast_connect: !0, ...(null != _ && "" !== _ ? { installation_id: _ } : {}) },
                client_state: { guild_versions: {} },
            },
        });
        performance.mark("FastConnect-identify-sent"), t.send(o), (E.identify = !0);
    };
    r ? I() : (t.onopen = I);
})();
