let n, r, i, o, _, I, s, l, a;
var S,
    A,
    T,
    O,
    R,
    N,
    c = E(214958),
    u = E.n(c);
function L() {
    let e = window;
    return null != e.jQuery || null != e.$ || null != e.BetterDiscord || null != e.BdApi || null != e.rambox;
}
function d() {
    return (
        ((Array.isArray(navigator.languages) ? navigator.languages[0] : null) ||
            navigator.language ||
            navigator.browserLanguage ||
            navigator.userLanguage) ??
        ""
    );
}
(n = E(973117).n), (r = E(28967).n);
let C = (0, E(132500).A)();
var g = E(264572).Buffer;
let D = "deviceProperties",
    p = "referralProperties",
    G = window.DiscordNative;
if (null != G) {
    let e,
        t = G.app.getVersion(),
        E = G.process.platform,
        n = G.os.release,
        r = G.os.arch,
        o = G.os.appArch,
        _ = G.app.getReleaseChannel(),
        I = d();
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
            release_channel: _ || "unknown",
            client_version: t,
            os_version: n,
            os_arch: r,
            app_arch: o,
            system_locale: I,
            has_client_mods: L(),
            client_launch_id: C,
        }),
        u().name?.toLocaleLowerCase() === "electron" &&
            ((i.browser_user_agent = u().ua || ""), (i.browser_version = u().version || "")),
        "linux" === E)
    ) {
        let e = G.crashReporter.getMetadata();
        (i.window_manager = e.wm),
            (i.distro = e.distro),
            (i.runtime_environment = e.runtime_environment),
            (i.display_server = e.display_server);
    } else
        "darwin" === E ? (i.os_sdk_version = n?.split(".")[0]) : "win32" === E && (i.os_sdk_version = n?.split(".")[2]);
}
function P(e, t) {
    if (null == e) return "";
    t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    let E = RegExp(`[\\?&]${t}=([^&#]*)`).exec(e);
    return null === E || ("string" != typeof E[1] && E[1].length) ? "" : decodeURIComponent(E[1]).replace(/\+/g, " ");
}
let M = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");
function f() {
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
            M.forEach((t) => {
                let n = P(e, t);
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
                    let e = P(E, "yahoo" !== n ? "q" : "p");
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
            let e = n.get(D);
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
                    (t.system_locale = d()),
                    (t.has_client_mods = L()),
                    (e = t),
                    n.set(D, e);
            }
            let t = n.get(p);
            null == t && ((t = f()), n.set(p, t));
            let E = r.get(p);
            if (null == E) {
                var i;
                let e;
                (i = f()), (e = {}), Object.keys(i).map((t) => (e[`${t}_current`] = i[t])), (E = e), r.set(p, E);
            }
            return {
                ...e,
                ...{
                    ...{ browser_user_agent: window.navigator.userAgent || "", browser_version: u().version || "" },
                    os_version: u()?.os?.version ?? "",
                },
                ...t,
                ...E,
            };
        })();
    } catch (e) {
        i = {};
    }
(I = {}),
    (s = window.GLOBAL_ENV.RELEASE_CHANNEL) &&
        (null == I.release_channel || "" === I.release_channel) &&
        (I.release_channel = s.split("-")[0]),
    isNaN((l = parseInt("534155", 10))) || (I.client_build_number = l),
    null == (a = G?.app.getBuildNumber()) || isNaN(a) || (I.native_build_number = a),
    (I.client_event_source = (function () {
        try {
            if (__OVERLAY__) return "OVERLAY";
        } catch (e) {}
        return null;
    })()),
    (I.has_client_mods = L()),
    (I.client_launch_id = C),
    (function (e) {
        try {
            g.from(JSON.stringify(e)).toString("base64");
        } catch (e) {
            return null;
        }
    })((i = { ...i, ...I }));
var h = E(824120),
    m = E.n(h);
function U(e) {
    let t = [];
    for (let E = 0; E < e.length; E++) {
        let n = Number(e[E]);
        for (let e = 0; n || e < t.length; e++) (n += 10 * (t[e] || 0)), (t[e] = n % 16), (n = (n - t[e]) / 16);
    }
    return t;
}
class w {
    parts;
    str;
    static fromString(e) {
        return new w(
            (function (e) {
                let t = U(e),
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
        return new w(t);
    }
    static asUintN(e, t) {
        let { parts: E } = t,
            n = 0,
            r = 0;
        for (; r < e && r < 16 * E.length; ) {
            let t = Math.min(e - r, 16),
                i = (1 << t) - 1,
                o = E.length - Math.floor(r / 16) - 1;
            (n |= (E[o] & i) << r), (r += t);
        }
        return n;
    }
    constructor(e, t) {
        (this.parts = e), (this.str = t);
    }
    and(e) {
        let { parts: t } = e;
        return new w(this.parts.map((e, E) => e & t[E]));
    }
    or(e) {
        let { parts: t } = e;
        return new w(this.parts.map((e, E) => e | t[E]));
    }
    xor(e) {
        let { parts: t } = e;
        return new w(this.parts.map((e, E) => e ^ t[E]));
    }
    not() {
        return new w(this.parts.map((e) => ~e));
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
                let n = U(t.toString());
                for (let t = 0; t < 4; t++) e[t + 4 * E] = n[3 - t] || 0;
            }),
            (this.str = m().fromArray(e, 16).toString())
        );
    }
    toJSON() {
        return this.toString();
    }
}
let $ = (function () {
    try {
        return !0;
    } catch (e) {
        return !1;
    }
})();
$ &&
    null == BigInt.prototype.toJSON &&
    (BigInt.prototype.toJSON = function () {
        return this.toString();
    });
let B = {},
    H = (
        $
            ? function (e) {
                  return BigInt(e);
              }
            : function (e) {
                  return e instanceof w
                      ? e
                      : ("number" == typeof e && (e = e.toString()), null != B[e] || (B[e] = w.fromString(e)), B[e]);
              }
    )(0),
    v = $
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H;
              return e | t;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H;
              return e.or(t);
          },
    y = $
        ? function (e) {
              return BigInt(1) << BigInt(e);
          }
        : function (e) {
              return w.fromBit(e);
          };
class b {
    value;
    constructor(e) {
        this.value = e;
    }
    toString() {
        return this.value;
    }
}
function Y(e, t) {
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
                            : e instanceof b
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
let V = location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT,
    F = location.protocol + "//discord.gg";
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
        9: "Apple ACOM",
        10: "TDS",
    }),
    Object.freeze({
        BRAINTREE: { KEY: window.GLOBAL_ENV.BRAINTREE_KEY, PAYMENT_GATEWAY: "braintree" },
        STRIPE: { KEY: window.GLOBAL_ENV.STRIPE_KEY, PAYMENT_GATEWAY: "stripe" },
        ADYEN: { KEY: window.GLOBAL_ENV.ADYEN_KEY, PAYMENT_GATEWAY: "adyen" },
    }),
    Object.freeze({ CONSTANT: 1, APPLE_STICKER: 2 }),
    Object.freeze({ 0: "subscription", 1: "sku" });
let W = Object.freeze({
    CREATE_INSTANT_INVITE: y(0),
    KICK_MEMBERS: y(1),
    BAN_MEMBERS: y(2),
    ADMINISTRATOR: y(3),
    MANAGE_CHANNELS: y(4),
    MANAGE_GUILD: y(5),
    CHANGE_NICKNAME: y(26),
    MANAGE_NICKNAMES: y(27),
    MANAGE_ROLES: y(28),
    MANAGE_WEBHOOKS: y(29),
    MANAGE_GUILD_EXPRESSIONS: y(30),
    CREATE_GUILD_EXPRESSIONS: y(43),
    VIEW_AUDIT_LOG: y(7),
    VIEW_CHANNEL: y(10),
    VIEW_GUILD_ANALYTICS: y(19),
    VIEW_CREATOR_MONETIZATION_ANALYTICS: y(41),
    MODERATE_MEMBERS: y(40),
    USE_EMBEDDED_ACTIVITIES: y(39),
    USE_EXTERNAL_APPS: y(50),
    SEND_MESSAGES: y(11),
    SEND_TTS_MESSAGES: y(12),
    MANAGE_MESSAGES: y(13),
    EMBED_LINKS: y(14),
    ATTACH_FILES: y(15),
    READ_MESSAGE_HISTORY: y(16),
    MENTION_EVERYONE: y(17),
    USE_EXTERNAL_EMOJIS: y(18),
    ADD_REACTIONS: y(6),
    USE_APPLICATION_COMMANDS: y(31),
    MANAGE_THREADS: y(34),
    CREATE_PUBLIC_THREADS: y(35),
    CREATE_PRIVATE_THREADS: y(36),
    USE_EXTERNAL_STICKERS: y(37),
    SEND_MESSAGES_IN_THREADS: y(38),
    SEND_VOICE_MESSAGES: y(46),
    SEND_POLLS: y(49),
    PIN_MESSAGES: y(51),
    BYPASS_SLOWMODE: y(52),
    MANAGE_OFFICIAL_MESSAGES: y(53),
    CONNECT: y(20),
    SPEAK: y(21),
    MUTE_MEMBERS: y(22),
    DEAFEN_MEMBERS: y(23),
    MOVE_MEMBERS: y(24),
    USE_VAD: y(25),
    PRIORITY_SPEAKER: y(8),
    STREAM: y(9),
    USE_SOUNDBOARD: y(42),
    USE_EXTERNAL_SOUNDS: y(45),
    SET_VOICE_CHANNEL_STATUS: y(48),
    REQUEST_TO_SPEAK: y(32),
    MANAGE_EVENTS: y(33),
    CREATE_EVENTS: y(44),
});
!(function () {
    for (var e = arguments.length, t = Array(e), E = 0; E < e; E++) t[E] = arguments[E];
    let n = t[0];
    for (let e = 1; e < t.length; e++) n = v(n, t[e]);
})(
    W.KICK_MEMBERS,
    W.BAN_MEMBERS,
    W.ADMINISTRATOR,
    W.MANAGE_CHANNELS,
    W.MANAGE_GUILD,
    W.MANAGE_ROLES,
    W.MANAGE_MESSAGES,
    W.MANAGE_THREADS,
    W.MODERATE_MEMBERS,
),
    Object.freeze({
        TWITTER: Object.freeze({ default: "https://twitter.com/discord", ja: "https://twitter.com/discord_jp" }),
    });
let k = Object.freeze({
    WELCOME: `${V}/welcome/`,
    ME: `${V}/channels/@me`,
    SETTINGS: (e, t) => `${V}/settings/${e}${t ? `/${t}` : ""}`,
    CONNECTION: (e) => `${V}/connections/${e}`,
    CHANGELOGS: `${V}/settings/changelogs`,
    LOGIN: `${V}/login`,
    LOGIN_WITH_REDIRECT: (e) => `${V}/login?redirect_to=${e}`,
    REGISTER: `${V}/register`,
    REGISTER_WITH_REDIRECT: (e) => `${V}/register?redirect_to=${e}`,
    CREATE_GUILD: `${V}/guilds/create`,
    VANITY_INVITE: (e) => `${F}/${e}`,
    HYPESQUAD_ONLINE: `${V}/settings/hypesquad-online`,
    BROWSE_NITRO_TITLES: `${V}/store/browse?type=nitro`,
    SKU_DETAILS: (e, t) => `${V}/store/skus/${e}${null != t ? `?store_listing_id=${t}` : ""}`,
    MESSAGE: (e, t, E) => `/channels/${e}/${t}/${E}`,
    CHANNEL: (e, t) => `/channels/${e}/${t}`,
    REPORT: `${V}/report`,
    QUEST_PREVIEW_TOOL_2: (e) => `${V}/quest-preview/${e}`,
});
var K =
    (((S = K || {}).INDEX = "/"),
    (S.INDEX_WORD = "/index"),
    (S.INDEX_BUCKET = "/index/:bucketId"),
    (S.CHANGELOGS = "/changelogs/:date"),
    (S.COMMUNITY = "/community"),
    (S.COMPANY = "/company"),
    (S.COMPANY_INFORMATION = "/company-information"),
    (S.CREATORS = "/creators"),
    (S.DOWNLOADS = "/downloads"),
    (S.DOWNLOAD = "/download"),
    (S.GAMING = "/gaming"),
    (S.PRIVACY = "/privacy"),
    (S.TOS = "/tos"),
    (S.TERMS = "/terms"),
    (S.STORE_TERMS = "/store-terms"),
    (S.ACKNOWLEDGEMENTS = "/acknowledgements"),
    (S.LICENSES = "/licenses"),
    (S.PARTNERS = "/partners"),
    (S.HYPESQUAD = "/hypesquad"),
    (S.HYPESQUAD_RIOT = "/hypesquad-riot"),
    (S.BRANDING = "/branding"),
    (S.ERROR_404 = "/404"),
    (S.JOBS = "/jobs"),
    (S.JOB = "/jobs/:jobId"),
    (S.STREAMKIT = "/streamkit"),
    (S.SECURITY = "/security"),
    (S.NITRO = "/nitro"),
    (S.DISCOVER = "/servers"),
    (S.QUESTS = "/ads/quests"),
    (S.GUIDELINES = "/guidelines"),
    (S.RICH_PRESENCE = "/rich-presence"),
    (S.VERIFICATION = "/verification"),
    (S.OPEN_SOURCE = "/open-source"),
    (S.WARFRAME = "/warframe"),
    (S.REMOTE_AUTH = "/ra/:remoteAuthFingerprint"),
    (S.SAFETY_LANDING = "/safetycenter"),
    (S.SAFETY_ARTICLE_ROOT = "/safety"),
    (S.SAFETY_ARTICLE = "/safety/:article"),
    (S.NEWSROOM = "/newsroom"),
    (S.INSPIRATION = "/inspiration"),
    (S.MOD_ACADEMY_LANDING = "/moderation"),
    (S.MOD_ACADEMY_EXAM = "/moderation/exam"),
    (S.MOD_ACADEMY_ARTICLE = "/moderation/:article"),
    (S.BLOG = "/blog"),
    (S.BUILD = "/build"),
    (S.DEVELOPERS = "/developers"),
    (S.APP_DIRECTORY = "/application-directory"),
    (S.REFRESH_INDEX = "/new"),
    (S.REFRESH_INDEX_WORD = "/new/index"),
    (S.REFRESH_COMPANY = "/new/company"),
    (S.REFRESH_DOWNLOAD = "/new/download"),
    (S.REFRESH_PRIVACY = "/new/privacy"),
    (S.REFRESH_TERMS = "/new/terms"),
    (S.REFRESH_ACKNOWLEDGEMENTS = "/new/acknowledgements"),
    (S.REFRESH_LICENSES = "/new/licenses"),
    (S.REFRESH_BRANDING = "/new/branding"),
    (S.REFRESH_JOBS = "/new/jobs"),
    (S.REFRESH_JOB = "/new/jobs/:jobId"),
    (S.REFRESH_STREAMKIT = "/new/streamkit"),
    (S.REFRESH_NITRO = "/new/nitro"),
    (S.REFRESH_GUIDELINES = "/new/guidelines"),
    (S.REFRESH_SAFETY_LANDING = "/new/safety"),
    (S.REFRESH_SAFETY_ARTICLE = "/new/safety/:article"),
    (S.COLLEGE = "/college"),
    (S.LEAGUE_CLUBS = "/league-communities"),
    (S.DISCORD_RECRUITING_SCAMS = "/discord-recruitment-scams"),
    (S.DEV_NEWSLETTER_SIGNUP = "/dev-newsletter"),
    (S.LEGACY_DEV_NEWSLETTER = "/newsletter"),
    (S.LEGAL_ARCHIVE = "/archive/"),
    (S.TERMS_MAY_2020 = "/archive/terms/may-2020"),
    (S.PRIVACY_JUNE_2020 = "/archive/privacy/june-2020"),
    (S.GUIDELINES_MAY_2020 = "/archive/guidelines/may-2020"),
    (S.FALL_RELEASE_2023 = "/fallrelease"),
    (S.MOBILE_REDESIGN_2023 = "/mobile"),
    (S.REFRESH_XBOX_OFFER = "/new/discord-xbox-offer-2019"),
    (S.REFRESH_WHY_DISCORD = "/why-discord-is-different"),
    (S.WHY_DISCORD = "/why-discord"),
    (S.XBOX_OFFER = "/discord-xbox-offer-2020"),
    (S.COLLEGE_BRUINS = "/bruins"),
    (S.COLLEGE_ANTEATERS = "/anteaters"),
    (S.COLLEGE_GAUCHOS = "/gauchos"),
    (S.COLLEGE_BEARS = "/bears"),
    (S.COLLEGE_SLUGS = "/slugs"),
    (S.BACK_TO_SCHOOL_GIVEAWAY_INSTAGRAM = "/terms/back-to-school-2020/instagram"),
    (S.BACK_TO_SCHOOL_GIVEAWAY_TWITTER = "/terms/back-to-school-2020/twitter"),
    (S.SNOWSGIVING_GIVEAWAY_INSTAGRAM = "/terms/snowsgiving-2020/instagram"),
    (S.SNOWSGIVING_GIVEAWAY_TWITTER = "/terms/snowsgiving-2020/twitter"),
    S);
Y(k),
    Y(K),
    Object.freeze({
        FACEBOOK_URL: "https://www.facebook.com/discord/",
        INSTAGRAM_URL: "https://www.instagram.com/discord/",
        YOUTUBE_URL: "https://www.youtube.com/discord/",
        TIKTOK_URL: "https://www.tiktok.com/@discord",
    });
let j = "dQw4w9WgXcQ:",
    Q = null,
    x = window.DiscordNative;
null != x && (Q = x.safeStorage);
let X = !1,
    z = {},
    J = !1;
function q(e) {
    return null == e || 0 === e.length
        ? { decryptedToken: null, wasEncrypted: !1 }
        : Q?.isEncryptionAvailable() && e.startsWith(j)
          ? { decryptedToken: Q.decryptString(e.substring(j.length)), wasEncrypted: !0 }
          : { decryptedToken: e, wasEncrypted: !1 };
}
var Z =
        (((A = {})[(A.DISPATCH = 0)] = "DISPATCH"),
        (A[(A.HEARTBEAT = 1)] = "HEARTBEAT"),
        (A[(A.IDENTIFY = 2)] = "IDENTIFY"),
        (A[(A.PRESENCE_UPDATE = 3)] = "PRESENCE_UPDATE"),
        (A[(A.VOICE_STATE_UPDATE = 4)] = "VOICE_STATE_UPDATE"),
        (A[(A.VOICE_SERVER_PING = 5)] = "VOICE_SERVER_PING"),
        (A[(A.RESUME = 6)] = "RESUME"),
        (A[(A.RECONNECT = 7)] = "RECONNECT"),
        (A[(A.REQUEST_GUILD_MEMBERS = 8)] = "REQUEST_GUILD_MEMBERS"),
        (A[(A.INVALID_SESSION = 9)] = "INVALID_SESSION"),
        (A[(A.HELLO = 10)] = "HELLO"),
        (A[(A.HEARTBEAT_ACK = 11)] = "HEARTBEAT_ACK"),
        (A[(A.CALL_CONNECT = 13)] = "CALL_CONNECT"),
        (A[(A.GUILD_SUBSCRIPTIONS = 14)] = "GUILD_SUBSCRIPTIONS"),
        (A[(A.STREAM_CREATE = 18)] = "STREAM_CREATE"),
        (A[(A.STREAM_DELETE = 19)] = "STREAM_DELETE"),
        (A[(A.STREAM_WATCH = 20)] = "STREAM_WATCH"),
        (A[(A.STREAM_PING = 21)] = "STREAM_PING"),
        (A[(A.STREAM_SET_PAUSED = 22)] = "STREAM_SET_PAUSED"),
        (A[(A.REQUEST_GUILD_APPLICATION_COMMANDS = 24)] = "REQUEST_GUILD_APPLICATION_COMMANDS"),
        (A[(A.REQUEST_FORUM_UNREADS = 28)] = "REQUEST_FORUM_UNREADS"),
        (A[(A.REMOTE_COMMAND = 29)] = "REMOTE_COMMAND"),
        (A[(A.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH = 30)] = "GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH"),
        (A[(A.REQUEST_SOUNDBOARD_SOUNDS = 31)] = "REQUEST_SOUNDBOARD_SOUNDS"),
        (A[(A.REQUEST_LAST_MESSAGES = 34)] = "REQUEST_LAST_MESSAGES"),
        (A[(A.SEARCH_RECENT_MEMBERS = 35)] = "SEARCH_RECENT_MEMBERS"),
        (A[(A.GUILD_SUBSCRIPTIONS_BULK = 37)] = "GUILD_SUBSCRIPTIONS_BULK"),
        (A[(A.GUILD_CHANNELS_RESYNC = 38)] = "GUILD_CHANNELS_RESYNC"),
        (A[(A.REQUEST_CHANNEL_MEMBER_COUNT = 39)] = "REQUEST_CHANNEL_MEMBER_COUNT"),
        (A[(A.QOS_HEARTBEAT = 40)] = "QOS_HEARTBEAT"),
        (A[(A.UPDATE_TIME_SPENT_SESSION_ID = 41)] = "UPDATE_TIME_SPENT_SESSION_ID"),
        (A[(A.REQUEST_CHANNEL_INFO = 43)] = "REQUEST_CHANNEL_INFO"),
        A),
    ee = E(418781),
    et = E.n(ee),
    eE = (((T = {}).ABOUT = "about"), (T.STORE = "store"), T),
    en =
        (((O = {}).GENERAL = "general"),
        (O.IMAGES = "images"),
        (O.PREMIUM_DEPRECATED = "premium"),
        (O.STORE = "store"),
        (O.PRIVACY = "privacy"),
        O);
let er = ["@me", "@favorites", "@guilds-empty-nux", "@inbox", "@guild-upsell-list"],
    ei = Y(
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
            INVITE_PROXY: (e) => `/invite-proxy/${e}`,
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
            GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU: (e, t) => `/discovery/applications/${e}/${eE.STORE}/${t}`,
            GLOBAL_DISCOVERY_APPS_SEARCH: "/discovery/applications/search",
            GUILD_MEMBER_VERIFICATION: (e) => `/member-verification/${e}`,
            GUILD_MEMBER_VERIFICATION_FOR_HUB: (e, t) => `/member-verification-for-hub/${e}${null != t ? `/${t}` : ""}`,
            POPOUT_WINDOW: "/popout",
            UPCOMING_STAGES: (e, t) => `/guild-stages/${e}${null != t ? `/${t}` : ""}`,
            VERIFY_HUB_EMAIL: "/verify-hub-email",
            OPEN_APP_FROM_EMAIL: "/open-app-from-email",
            BILLING_MANAGE_SUBSCRIPTION: "/billing/premium/manage",
            BILLING_MANAGE_SUBSCRIPTION_WITH_DEEP_LINK: (e, t) =>
                `/billing/premium/manage?deep_link_type=${e}${null != t ? `&load_id=${t}` : ""}`,
            BILLING_MANAGE_SUBSCRIPTION_WITH_FLOW_TYPE: (e, t) =>
                `/billing/premium/manage?flow_type=${e}${null != t ? `&load_id=${t}` : ""}`,
            BILLING_STANDALONE_CHECKOUT_PAGE: (e, t, E, n, r, i, o) =>
                `/billing/premium/subscribe?plan_id=${e}&gift=${t}&load_id=${E}${null != n ? `&payment_method_type=${n}` : ""}${null != r ? `&deep_link_type=${r}` : ""}${null != i ? `&use_preset_offer=${i}` : ""}${null != o ? `&flow_type=${o}` : ""}`,
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
            APPLICATION_DIRECTORY_PROFILE_STORE_SKU: (e, t) => `/application-directory/${e}/${en.STORE}/${t}`,
            APPLICATION_DIRECTORY_SEARCH: "/application-directory/search",
            FAMILY_CENTER: "/family-center",
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
    eo = new Set(
        Object.values(
            (((R = {}).ROLE_SUBSCRIPTIONS = "role-subscriptions"),
            (R.SERVER_MONETIZATION_ONBOARDING = "server-monetization-onboarding"),
            (R.GAME_SHOP = "game-shop"),
            (R.GUILD_SHOP = "shop"),
            (R.MEMBER_APPLICATIONS = "member-applications"),
            (R.GUILD_HOME = "@home"),
            (R.CHANNEL_BROWSER = "channel-browser"),
            (R.GUILD_ONBOARDING = "onboarding"),
            (R.CUSTOMIZE_COMMUNITY = "customize-community"),
            (R.MEMBER_SAFETY = "member-safety"),
            (R.GUILD_BOOSTS = "boosts"),
            (R.GAME_SERVERS = "game-servers"),
            (R.REPORT_TO_MOD = "report-to-mod"),
            R),
        ),
    );
function e_(e, t) {
    let { optional: E = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return new b(`:${et()(e)}(${t})${E ? "?" : ""}`);
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
}),
    Object.values(
        (((N = {}).GUILD_HOME = "home"),
        (N.SERVER_GUIDE = "guide"),
        (N.CHANNEL_BROWSER = "browse"),
        (N.CUSTOMIZE_COMMUNITY = "customize"),
        (N.LINKED_ROLES = "linked-roles"),
        N),
    );
let eI = {
    guildId() {
        let { name: e = "guildId", optional: t = !1 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            E = er.map(et()).join("|");
        return e_(e, `${E}|\\d+`, { optional: t });
    },
    channelId() {
        let { name: e = "channelId", optional: t = !1 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            E = [...eo].map(et()).join("|");
        return e_(e, `${E}|\\d+`, { optional: t });
    },
};
var es = E(873263);
let el = new Set([
    ei.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode"),
    ei.APP_WITH_GIFT_CODE(":giftCode"),
    ei.APP,
    ei.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
    ei.SETTINGS(":section", ":subsection?"),
    ei.USER_GUILD_NOTIFICATION_SETTINGS(eI.guildId()),
    ei.APPLICATION_LIBRARY_INVENTORY,
    ei.WELCOME(eI.guildId({ optional: !0 }), eI.channelId({ optional: !0 })),
    ei.GUILD_EVENT_DETAILS(eI.guildId({ optional: !0 }), ":guildEventId"),
    ei.GUILD_SETTINGS(eI.guildId(), ":section?", ":subsection?"),
    ei.CHANNEL_THREAD_VIEW(eI.guildId(), eI.channelId(), ":threadId", ":messageId?"),
    ei.CHANNEL(eI.guildId(), eI.channelId({ optional: !0 }), ":messageId?"),
    ei.ACTIVITY,
    ei.ACTIVITIES,
    ei.ACTIVITIES_HAPPENING_NOW,
    ei.ACTIVITY_DETAILS(":applicationId"),
    ei.APPLICATION_LIBRARY,
    ei.APPLICATION_STORE,
    ei.MESSAGE_REQUESTS,
    ei.COLLECTIBLES_SHOP,
    ei.COLLECTIBLES_SHOP_COLLECTION_DETAIL(":collectionId"),
    ei.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
    ei.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
    ei.GUILD_DISCOVERY,
    ei.QUEST_HOME_DEPRECATED,
    ei.QUEST_HOME,
    ei.ICYMI,
    ei.GLOBAL_DISCOVERY,
    ei.GUILD_MEMBER_VERIFICATION(eI.guildId()),
    ei.GUILD_MEMBER_VERIFICATION_FOR_HUB(eI.guildId(), ":inviteCode?"),
    ei.GUILD_BOOSTING_MARKETING(eI.guildId()),
    ei.GUILD_FEATURE(":feature", eI.guildId()),
    ei.FEATURE(":feature"),
    ei.FAMILY_CENTER,
    ei.APPLICATION_DIRECTORY,
    ei.GAME_SHOP(eI.guildId(), ":shopSkuId?", ":shopSlug?"),
]);
!(function () {
    if (null == window.WebSocket || null == window._ws) return;
    let e =
        ((function () {
            if (J) return;
            (_ = n.get("token")), (z = n.get("tokens") || {});
            let { decryptedToken: e, wasEncrypted: t } = q(_);
            (X = t),
                (o = e),
                [
                    ...Object.entries(z)
                        .map((e) => {
                            let [t, E] = e,
                                { decryptedToken: n, wasEncrypted: r } = q(E);
                            return (X = r || X), [t, n];
                        })
                        .filter((e) => {
                            let [t, E] = e;
                            return null != E;
                        }),
                ].reduce((e, t) => {
                    let [E, n] = t;
                    return (e[E] = n), e;
                }, {}),
                (J = !0);
        })(),
        o);
    if (null == e || __OVERLAY__) return;
    let t = window._ws.ws,
        E = window._ws.state;
    t.onopen = function () {
        if (
            ((E.open = !0),
            !(function (e) {
                for (let t of el) if (null != (0, es.B6)(e, { path: t })) return !0;
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
        let o = n.get("analytics_installation");
        var _ = r({
            op: Z.IDENTIFY,
            d: {
                token: e,
                capabilities: (function (e) {
                    let { useChannelObfuscation: t } = e;
                    return t ? 1767421 : 1734653;
                })({ useChannelObfuscation: null != n.get("private_channel_obfuscation") }),
                properties: { ...i, is_fast_connect: !0, ...(null != o && "" !== o ? { installation_id: o } : {}) },
                client_state: { guild_versions: {} },
            },
        });
        t.send(_), (E.identify = !0);
    };
})();
