let n, r, i, o, _, s, l, I, a, A;
var S,
    T,
    O,
    R,
    N,
    c,
    u,
    L,
    d,
    C,
    p,
    g,
    D = E(214958),
    M = E.n(D);
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
let f = "u" < typeof window ? null : window.DiscordNative,
    G = null != f ? f.process.platform : "";
function m() {
    return (
        ((Array.isArray(navigator.languages) ? navigator.languages[0] : null) ||
            navigator.language ||
            navigator.browserLanguage ||
            navigator.userLanguage) ??
        ""
    );
}
((n = E(973117).n), (r = E(28967).n));
let U = (0, E(115560).A)();
var h = E(264572).hp;
let w = "deviceProperties",
    $ = "devicePropertiesVersion",
    B = "referralProperties";
function v() {}
let H = window.DiscordNative;
if (null != H) {
    let e,
        t = H.app.getVersion(),
        E = H.process.platform,
        n = H.os.release,
        r = H.os.arch,
        o = H.os.appArch,
        _ = H.app.getReleaseChannel(),
        s = m();
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
            ...{
                os_version: (S = H.os.systemVersion) ?? ("darwin" === E ? "" : n),
                os_version_is_release: "darwin" !== E || null != S,
                ...("darwin" === E ? { os_sdk_version: n.split(".")[0] } : {}),
                ...("win32" === E ? { os_sdk_version: n.split(".")[2] } : {}),
            },
            os_arch: r,
            app_arch: o,
            system_locale: s,
            has_client_mods: P(),
            client_launch_id: U,
        }),
        M().name?.toLocaleLowerCase() === "electron" &&
            ((i.browser_user_agent = M().ua || ""), (i.browser_version = M().version || "")),
        "linux" === E)
    ) {
        let e = H.crashReporter.getMetadata();
        ((i.window_manager = e.wm),
            (i.distro = e.distro),
            (i.runtime_environment = e.runtime_environment),
            (i.display_server = e.display_server));
    }
}
function y(e, t) {
    if (null == e) return "";
    t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    let E = RegExp(`[\\?&]${t}=([^&#]*)`).exec(e);
    return null === E || ("string" != typeof E[1] && E[1].length) ? "" : decodeURIComponent(E[1]).replace(/\+/g, " ");
}
let b = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");
function F() {
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
            b.forEach((t) => {
                let n = y(e, t);
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
                    let e = y(E, "yahoo" !== n ? "q" : "p");
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
            let e = n.get(w);
            if (null == e || 1 !== n.get($)) {
                let t;
                (((t = {}).os = (function () {
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
                            { opera: E } = window,
                            n = (function (e) {
                                let { userAgentData: t } = window.navigator;
                                for (let { brand: E } of t?.brands ?? []) {
                                    if ("Microsoft Edge" === E) return "Edge";
                                    if ("Opera" === E) return /Mini/.test(e) ? "Opera Mini" : "Opera";
                                }
                                return null;
                            })(e);
                        if (E) return /Mini/.test(e) ? "Opera Mini" : "Opera";
                        if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
                        if (/FBIOS/.test(e)) return "Facebook Mobile";
                        if (/CriOS/.test(e)) return "Chrome iOS";
                        if (/FxiOS/.test(e)) return "Firefox iOS";
                        else if (/EdgiOS/.test(e)) return "Edge iOS";
                        else if (/EdgA/.test(e)) return "Android Edge";
                        else if (/Apple/.test(t))
                            return /Mobile/.test(e) ||
                                (null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2)
                                ? "Mobile Safari"
                                : "Safari";
                        else if (null !== n) return n;
                        else if (/Android/.test(e))
                            return /Firefox/.test(e)
                                ? "Android Firefox"
                                : /Chrome/.test(e)
                                  ? "Android Chrome"
                                  : "Android Mobile";
                        else if (/Edge/.test(e)) return "Edge";
                        else if (/Chrome/.test(e)) return "Chrome";
                        else if (/Konqueror/.test(e)) return "Konqueror";
                        else if (/Firefox/.test(e)) return "Firefox";
                        else if (/MSIE|Trident\//.test(e)) return "Internet Explorer";
                        else if (/Gecko/.test(e)) return "Mozilla";
                        else return "";
                    })()),
                    (t.device = (function () {
                        let e = v(),
                            { userAgent: t } = window.navigator;
                        if (null != e) return e.device;
                        if (/(BlackBerry|PlayBook|BB10)/i.test(t)) return "BlackBerry";
                        if (/Windows Phone/i.test(t)) return "Windows Phone";
                        if (/Android/.test(t)) return "Android";
                        if (/iPhone/.test(t)) return "iPhone";
                        else if (/iPad/.test(t)) return "iPad";
                        else return "";
                    })()),
                    (t.device_model_name = ""),
                    (t.system_locale = m()),
                    (t.has_client_mods = P()),
                    (e = t),
                    n.set(w, e),
                    n.set($, 1));
            }
            let t = n.get(B);
            null == t && ((t = F()), n.set(B, t));
            let E = r.get(B);
            if (null == E) {
                var i;
                let e;
                ((i = F()), (e = {}), Object.keys(i).map((t) => (e[`${t}_current`] = i[t])), (E = e), r.set(B, E));
            }
            return {
                ...e,
                ...(function () {
                    let e = {
                            browser_user_agent: window.navigator.userAgent || "",
                            browser_version: M().version || "",
                        },
                        t = v();
                    if (null != t) {
                        var E;
                        return {
                            ...e,
                            ...{
                                os_version: (E = "ios" === G) ? t.systemVersion : (t.osVersion ?? ""),
                                os_version_is_release: E || null != t.osVersion,
                                os_sdk_version: E ? t.osSdkVersion || void 0 : t.systemVersion,
                            },
                        };
                    }
                    return { ...e, os_version: M()?.os?.version ?? "" };
                })(),
                ...t,
                ...E,
            };
        })();
    } catch (e) {
        i = {};
    }
((s = {}),
    (l = window.GLOBAL_ENV.RELEASE_CHANNEL) &&
        (null == s.release_channel || "" === s.release_channel) &&
        (s.release_channel = l.split("-")[0]),
    isNaN((I = parseInt("664718", 10))) || (s.client_build_number = I),
    null == (a = H?.app.getBuildNumber()) || isNaN(a) || (s.native_build_number = a),
    (s.client_event_source = (function () {
        try {
            if (__OVERLAY__) return "OVERLAY";
        } catch (e) {}
        return null;
    })()),
    (s.has_client_mods = P()),
    (s.client_launch_id = U),
    null != (A = v()?.installSource) && (s.install_source = A),
    (function (e) {
        try {
            h.from(JSON.stringify(e)).toString("base64");
        } catch (e) {
            return null;
        }
    })((i = { ...i, ...s })));
var Y = E(824120),
    V = E.n(Y);
function W(e) {
    let t = [];
    for (let E = 0; E < e.length; E++) {
        let n = Number(e[E]);
        for (let e = 0; n || e < t.length; e++) ((n += 10 * (t[e] || 0)), (t[e] = n % 16), (n = (n - t[e]) / 16));
    }
    return t;
}
class k {
    parts;
    str;
    static fromString(e) {
        return new k(
            (function (e) {
                let t = W(e),
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
        return new k(t);
    }
    static asUintN(e, t) {
        let { parts: E } = t,
            n = 0,
            r = 0;
        for (; r < e && r < 16 * E.length;) {
            let t = Math.min(e - r, 16),
                i = (1 << t) - 1,
                o = E.length - Math.floor(r / 16) - 1;
            ((n |= (E[o] & i) << r), (r += t));
        }
        return n;
    }
    constructor(e, t) {
        ((this.parts = e), (this.str = t));
    }
    and(e) {
        let { parts: t } = e;
        return new k(this.parts.map((e, E) => e & t[E]));
    }
    or(e) {
        let { parts: t } = e;
        return new k(this.parts.map((e, E) => e | t[E]));
    }
    xor(e) {
        let { parts: t } = e;
        return new k(this.parts.map((e, E) => e ^ t[E]));
    }
    not() {
        return new k(this.parts.map((e) => ~e));
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
                let n = W(t.toString());
                for (let t = 0; t < 4; t++) e[t + 4 * E] = n[3 - t] || 0;
            }),
            (this.str = V().fromArray(e, 16).toString())
        );
    }
    toJSON() {
        return this.toString();
    }
}
let K = (function () {
    try {
        return !0;
    } catch (e) {
        return !1;
    }
})();
K &&
    null == BigInt.prototype.toJSON &&
    (BigInt.prototype.toJSON = function () {
        return this.toString();
    });
let j = {},
    x = (
        K
            ? function (e) {
                  return BigInt(e);
              }
            : function (e) {
                  return e instanceof k
                      ? e
                      : ("number" == typeof e && (e = e.toString()), null != j[e] || (j[e] = k.fromString(e)), j[e]);
              }
    )(0),
    Q = K
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x;
              return e | t;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x;
              return e.or(t);
          },
    J = K
        ? function (e) {
              return BigInt(1) << BigInt(e);
          }
        : function (e) {
              return k.fromBit(e);
          };
class X {
    value;
    constructor(e) {
        this.value = e;
    }
    toString() {
        return this.value;
    }
}
function q(e, t) {
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
                            : e instanceof X
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
let z = "u" < typeof location ? "" : location.protocol,
    Z = z + ("u" < typeof window ? "" : window.GLOBAL_ENV.WEBAPP_ENDPOINT),
    ee = z + "//discord.gg";
(Object.freeze({
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
        BRAINTREE: { KEY: "u" < typeof window ? "" : window.GLOBAL_ENV.BRAINTREE_KEY, PAYMENT_GATEWAY: "braintree" },
        STRIPE: { KEY: "u" < typeof window ? "" : window.GLOBAL_ENV.STRIPE_KEY, PAYMENT_GATEWAY: "stripe" },
        ADYEN: { KEY: "u" < typeof window ? "" : window.GLOBAL_ENV.ADYEN_KEY, PAYMENT_GATEWAY: "adyen" },
    }),
    Object.freeze({ CONSTANT: 1, APPLE_STICKER: 2 }),
    Object.freeze({ 0: "subscription", 1: "sku" }));
let et = Object.freeze({
    CREATE_INSTANT_INVITE: J(0),
    KICK_MEMBERS: J(1),
    BAN_MEMBERS: J(2),
    ADMINISTRATOR: J(3),
    MANAGE_CHANNELS: J(4),
    MANAGE_GUILD: J(5),
    CHANGE_NICKNAME: J(26),
    MANAGE_NICKNAMES: J(27),
    MANAGE_ROLES: J(28),
    MANAGE_WEBHOOKS: J(29),
    MANAGE_GUILD_EXPRESSIONS: J(30),
    CREATE_GUILD_EXPRESSIONS: J(43),
    VIEW_AUDIT_LOG: J(7),
    VIEW_CHANNEL: J(10),
    VIEW_GUILD_ANALYTICS: J(19),
    VIEW_CREATOR_MONETIZATION_ANALYTICS: J(41),
    MODERATE_MEMBERS: J(40),
    USE_EMBEDDED_ACTIVITIES: J(39),
    USE_EXTERNAL_APPS: J(50),
    SEND_MESSAGES: J(11),
    SEND_TTS_MESSAGES: J(12),
    MANAGE_MESSAGES: J(13),
    EMBED_LINKS: J(14),
    ATTACH_FILES: J(15),
    READ_MESSAGE_HISTORY: J(16),
    MENTION_EVERYONE: J(17),
    USE_EXTERNAL_EMOJIS: J(18),
    ADD_REACTIONS: J(6),
    USE_APPLICATION_COMMANDS: J(31),
    MANAGE_THREADS: J(34),
    CREATE_PUBLIC_THREADS: J(35),
    CREATE_PRIVATE_THREADS: J(36),
    USE_EXTERNAL_STICKERS: J(37),
    SEND_MESSAGES_IN_THREADS: J(38),
    SEND_VOICE_MESSAGES: J(46),
    SEND_POLLS: J(49),
    PIN_MESSAGES: J(51),
    BYPASS_SLOWMODE: J(52),
    MANAGE_OFFICIAL_MESSAGES: J(53),
    CONNECT: J(20),
    SPEAK: J(21),
    MUTE_MEMBERS: J(22),
    DEAFEN_MEMBERS: J(23),
    MOVE_MEMBERS: J(24),
    USE_VAD: J(25),
    PRIORITY_SPEAKER: J(8),
    STREAM: J(9),
    USE_SOUNDBOARD: J(42),
    USE_EXTERNAL_SOUNDS: J(45),
    SET_VOICE_CHANNEL_STATUS: J(48),
    REQUEST_TO_SPEAK: J(32),
    MANAGE_EVENTS: J(33),
    CREATE_EVENTS: J(44),
});
(!(function () {
    for (var e = arguments.length, t = Array(e), E = 0; E < e; E++) t[E] = arguments[E];
    let n = t[0];
    for (let e = 1; e < t.length; e++) n = Q(n, t[e]);
})(
    et.KICK_MEMBERS,
    et.BAN_MEMBERS,
    et.ADMINISTRATOR,
    et.MANAGE_CHANNELS,
    et.MANAGE_GUILD,
    et.MANAGE_ROLES,
    et.MANAGE_MESSAGES,
    et.MANAGE_THREADS,
    et.MODERATE_MEMBERS,
),
    Object.freeze({
        TWITTER: Object.freeze({ default: "https://twitter.com/discord", ja: "https://twitter.com/discord_jp" }),
    }));
let eE = Object.freeze({
    WELCOME: `${Z}/welcome/`,
    ME: `${Z}/channels/@me`,
    SETTINGS: (e, t) => `${Z}/settings/${e}${null != t && "" !== t ? `/${t}` : ""}`,
    CONNECTION: (e) => `${Z}/connections/${e}`,
    CHANGELOGS: `${Z}/settings/changelogs`,
    LOGIN: `${Z}/login`,
    LOGIN_WITH_REDIRECT: (e) => `${Z}/login?redirect_to=${e}`,
    REGISTER: `${Z}/register`,
    REGISTER_WITH_REDIRECT: (e) => `${Z}/register?redirect_to=${e}`,
    CREATE_GUILD: `${Z}/guilds/create`,
    VANITY_INVITE: (e) => `${ee}/${e}`,
    HYPESQUAD_ONLINE: `${Z}/settings/hypesquad-online`,
    BROWSE_NITRO_TITLES: `${Z}/store/browse?type=nitro`,
    SKU_DETAILS: (e, t) => `${Z}/store/skus/${e}${null != t ? `?store_listing_id=${t}` : ""}`,
    MESSAGE: (e, t, E) => `/channels/${e}/${t}/${E}`,
    CHANNEL: (e, t) => `/channels/${e}/${t}`,
    REPORT: `${Z}/report`,
    QUEST_PREVIEW_TOOL_2: (e) => `${Z}/quest-preview/${e}`,
    QUEST_HOME_PREVIEW: (e) => `${Z}/quest-home?ad_creative_ids=${e}`,
    QUEST_BAR_PREVIEW: (e) => `${Z}/quest-bar-preview?ad_creative_ids=${e}`,
});
var en =
    (((T = en || {}).INDEX = "/"),
    (T.INDEX_WORD = "/index"),
    (T.INDEX_BUCKET = "/index/:bucketId"),
    (T.CHANGELOGS = "/changelogs/:date"),
    (T.COMMUNITY = "/community"),
    (T.COMPANY = "/company"),
    (T.COMPANY_INFORMATION = "/company-information"),
    (T.CREATORS = "/creators"),
    (T.DOWNLOADS = "/downloads"),
    (T.DOWNLOAD = "/download"),
    (T.GAMING = "/gaming"),
    (T.PRIVACY = "/privacy"),
    (T.TOS = "/tos"),
    (T.TERMS = "/terms"),
    (T.STORE_TERMS = "/store-terms"),
    (T.ACKNOWLEDGEMENTS = "/acknowledgements"),
    (T.LICENSES = "/licenses"),
    (T.PARTNERS = "/partners"),
    (T.HYPESQUAD = "/hypesquad"),
    (T.HYPESQUAD_RIOT = "/hypesquad-riot"),
    (T.BRANDING = "/branding"),
    (T.ERROR_404 = "/404"),
    (T.JOBS = "/jobs"),
    (T.JOB = "/jobs/:jobId"),
    (T.STREAMKIT = "/streamkit"),
    (T.SECURITY = "/security"),
    (T.NITRO = "/nitro"),
    (T.DISCOVER = "/servers"),
    (T.QUESTS = "/ads/quests"),
    (T.GUIDELINES = "/guidelines"),
    (T.RICH_PRESENCE = "/rich-presence"),
    (T.VERIFICATION = "/verification"),
    (T.OPEN_SOURCE = "/open-source"),
    (T.WARFRAME = "/warframe"),
    (T.REMOTE_AUTH = "/ra/:remoteAuthFingerprint"),
    (T.SAFETY_LANDING = "/safetycenter"),
    (T.SAFETY_ARTICLE_ROOT = "/safety"),
    (T.SAFETY_ARTICLE = "/safety/:article"),
    (T.NEWSROOM = "/newsroom"),
    (T.INSPIRATION = "/inspiration"),
    (T.MOD_ACADEMY_LANDING = "/moderation"),
    (T.MOD_ACADEMY_EXAM = "/moderation/exam"),
    (T.MOD_ACADEMY_ARTICLE = "/moderation/:article"),
    (T.BLOG = "/blog"),
    (T.BUILD = "/build"),
    (T.DEVELOPERS = "/developers"),
    (T.APP_DIRECTORY = "/application-directory"),
    (T.REFRESH_INDEX = "/new"),
    (T.REFRESH_INDEX_WORD = "/new/index"),
    (T.REFRESH_COMPANY = "/new/company"),
    (T.REFRESH_DOWNLOAD = "/new/download"),
    (T.REFRESH_PRIVACY = "/new/privacy"),
    (T.REFRESH_TERMS = "/new/terms"),
    (T.REFRESH_ACKNOWLEDGEMENTS = "/new/acknowledgements"),
    (T.REFRESH_LICENSES = "/new/licenses"),
    (T.REFRESH_BRANDING = "/new/branding"),
    (T.REFRESH_JOBS = "/new/jobs"),
    (T.REFRESH_JOB = "/new/jobs/:jobId"),
    (T.REFRESH_STREAMKIT = "/new/streamkit"),
    (T.REFRESH_NITRO = "/new/nitro"),
    (T.REFRESH_GUIDELINES = "/new/guidelines"),
    (T.REFRESH_SAFETY_LANDING = "/new/safety"),
    (T.REFRESH_SAFETY_ARTICLE = "/new/safety/:article"),
    (T.COLLEGE = "/college"),
    (T.LEAGUE_CLUBS = "/league-communities"),
    (T.DISCORD_RECRUITING_SCAMS = "/discord-recruitment-scams"),
    (T.DEV_NEWSLETTER_SIGNUP = "/dev-newsletter"),
    (T.LEGACY_DEV_NEWSLETTER = "/newsletter"),
    (T.LEGAL_ARCHIVE = "/archive/"),
    (T.TERMS_MAY_2020 = "/archive/terms/may-2020"),
    (T.PRIVACY_JUNE_2020 = "/archive/privacy/june-2020"),
    (T.GUIDELINES_MAY_2020 = "/archive/guidelines/may-2020"),
    (T.FALL_RELEASE_2023 = "/fallrelease"),
    (T.MOBILE_REDESIGN_2023 = "/mobile"),
    (T.REFRESH_XBOX_OFFER = "/new/discord-xbox-offer-2019"),
    (T.REFRESH_WHY_DISCORD = "/why-discord-is-different"),
    (T.WHY_DISCORD = "/why-discord"),
    (T.XBOX_OFFER = "/discord-xbox-offer-2020"),
    (T.COLLEGE_BRUINS = "/bruins"),
    (T.COLLEGE_ANTEATERS = "/anteaters"),
    (T.COLLEGE_GAUCHOS = "/gauchos"),
    (T.COLLEGE_BEARS = "/bears"),
    (T.COLLEGE_SLUGS = "/slugs"),
    (T.BACK_TO_SCHOOL_GIVEAWAY_INSTAGRAM = "/terms/back-to-school-2020/instagram"),
    (T.BACK_TO_SCHOOL_GIVEAWAY_TWITTER = "/terms/back-to-school-2020/twitter"),
    (T.SNOWSGIVING_GIVEAWAY_INSTAGRAM = "/terms/snowsgiving-2020/instagram"),
    (T.SNOWSGIVING_GIVEAWAY_TWITTER = "/terms/snowsgiving-2020/twitter"),
    T);
(q(eE),
    q(en),
    Object.freeze({
        FACEBOOK_URL: "https://www.facebook.com/discord/",
        INSTAGRAM_URL: "https://www.instagram.com/discord/",
        YOUTUBE_URL: "https://www.youtube.com/discord/",
        TIKTOK_URL: "https://www.tiktok.com/@discord",
    }));
let er = "dQw4w9WgXcQ:",
    ei = null,
    eo = window.DiscordNative;
null != eo && (ei = eo.safeStorage);
let e_ = !1,
    es = {},
    el = !1;
function eI(e) {
    return null == e || 0 === e.length
        ? { decryptedToken: null, wasEncrypted: !1 }
        : ei?.isEncryptionAvailable() && e.startsWith(er)
          ? { decryptedToken: ei.decryptString(e.substring(er.length)), wasEncrypted: !0 }
          : { decryptedToken: e, wasEncrypted: !1 };
}
var ea =
        (((O = {})[(O.DISPATCH = 0)] = "DISPATCH"),
        (O[(O.HEARTBEAT = 1)] = "HEARTBEAT"),
        (O[(O.IDENTIFY = 2)] = "IDENTIFY"),
        (O[(O.PRESENCE_UPDATE = 3)] = "PRESENCE_UPDATE"),
        (O[(O.VOICE_STATE_UPDATE = 4)] = "VOICE_STATE_UPDATE"),
        (O[(O.VOICE_SERVER_PING = 5)] = "VOICE_SERVER_PING"),
        (O[(O.RESUME = 6)] = "RESUME"),
        (O[(O.RECONNECT = 7)] = "RECONNECT"),
        (O[(O.REQUEST_GUILD_MEMBERS = 8)] = "REQUEST_GUILD_MEMBERS"),
        (O[(O.INVALID_SESSION = 9)] = "INVALID_SESSION"),
        (O[(O.HELLO = 10)] = "HELLO"),
        (O[(O.HEARTBEAT_ACK = 11)] = "HEARTBEAT_ACK"),
        (O[(O.CALL_CONNECT = 13)] = "CALL_CONNECT"),
        (O[(O.GUILD_SUBSCRIPTIONS = 14)] = "GUILD_SUBSCRIPTIONS"),
        (O[(O.STREAM_CREATE = 18)] = "STREAM_CREATE"),
        (O[(O.STREAM_DELETE = 19)] = "STREAM_DELETE"),
        (O[(O.STREAM_WATCH = 20)] = "STREAM_WATCH"),
        (O[(O.STREAM_PING = 21)] = "STREAM_PING"),
        (O[(O.STREAM_SET_PAUSED = 22)] = "STREAM_SET_PAUSED"),
        (O[(O.REQUEST_GUILD_APPLICATION_COMMANDS = 24)] = "REQUEST_GUILD_APPLICATION_COMMANDS"),
        (O[(O.REQUEST_FORUM_UNREADS = 28)] = "REQUEST_FORUM_UNREADS"),
        (O[(O.REMOTE_COMMAND = 29)] = "REMOTE_COMMAND"),
        (O[(O.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH = 30)] = "GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH"),
        (O[(O.REQUEST_SOUNDBOARD_SOUNDS = 31)] = "REQUEST_SOUNDBOARD_SOUNDS"),
        (O[(O.REQUEST_LAST_MESSAGES = 34)] = "REQUEST_LAST_MESSAGES"),
        (O[(O.SEARCH_RECENT_MEMBERS = 35)] = "SEARCH_RECENT_MEMBERS"),
        (O[(O.GUILD_SUBSCRIPTIONS_BULK = 37)] = "GUILD_SUBSCRIPTIONS_BULK"),
        (O[(O.GUILD_CHANNELS_RESYNC = 38)] = "GUILD_CHANNELS_RESYNC"),
        (O[(O.REQUEST_CHANNEL_MEMBER_COUNT = 39)] = "REQUEST_CHANNEL_MEMBER_COUNT"),
        (O[(O.QOS_HEARTBEAT = 40)] = "QOS_HEARTBEAT"),
        (O[(O.UPDATE_TIME_SPENT_SESSION_ID = 41)] = "UPDATE_TIME_SPENT_SESSION_ID"),
        (O[(O.REQUEST_CHANNEL_INFO = 43)] = "REQUEST_CHANNEL_INFO"),
        O),
    eA = E(377941),
    eS = E.n(eA),
    eT =
        (((R = {}).ALL = "ALL"),
        (R.AVATAR_DECORATION = "AVATAR_DECORATION"),
        (R.PROFILE_EFFECT = "PROFILE_EFFECT"),
        (R.NAMEPLATE = "NAMEPLATE"),
        (R.PROFILE_FRAME = "PROFILE_FRAME"),
        (R.BUNDLE = "BUNDLE"),
        R),
    eO = (((N = {}).ASC = "asc"), (N.DESC = "desc"), N),
    eR =
        (((c = {}).PRICE = "price"),
        (c.ALPHABETICAL = "alphabetical"),
        (c.RECENCY = "recency"),
        (c.POPULARITY = "popularity"),
        (c.RELEVANCE = "relevance"),
        c),
    eN =
        (((u = {}).PREMIUM_TIER_2_1_HOUR = "1271583180566036480"),
        (u.PREMIUM_TIER_2_1_DAY = "1298745361602449479"),
        (u.PREMIUM_TIER_2_3_DAY = "1333912750274904064"),
        u),
    ec =
        (((L = {}).HOME = "home"),
        (L.CATALOG = "catalog"),
        (L.ORBS = "orbs"),
        (L.AVATAR_DECORATIONS = "avatar-decorations"),
        (L.PROFILE_EFFECTS = "profile-effects"),
        (L.NAMEPLATES = "nameplates"),
        (L.PROFILE_FRAMES = "profile-frames"),
        (L.BUNDLES = "bundles"),
        (L.COLLABS = "collabs"),
        (L.OFFER_ELIGIBLE = "offer-eligible"),
        (L.PROMOTION = "promotion"),
        (L.COLLECTION_INDEX = "collection-index"),
        (L.GAME_SHOPS = "game-shops"),
        (L.GAME_SERVERS = "game-servers"),
        L);
(new Set(
    Object.values({
        ORB_PROFILE_BADGE: "1342211853484429445",
        FRACTIONAL_PREMIUM: eN.PREMIUM_TIER_2_3_DAY,
        FRACTIONAL_PREMIUM_1_DAY: eN.PREMIUM_TIER_2_1_DAY,
    }),
),
    eT.AVATAR_DECORATION,
    eT.NAMEPLATE,
    eT.PROFILE_EFFECT,
    eT.PROFILE_FRAME,
    eT.BUNDLE,
    eR.RELEVANCE,
    eO.DESC,
    eR.RECENCY,
    eO.DESC,
    eR.PRICE,
    eO.ASC,
    eR.PRICE,
    eO.DESC,
    eR.POPULARITY,
    eO.DESC);
var eu = (((d = {}).ABOUT = "about"), (d.STORE = "store"), d),
    eL =
        (((C = {}).GENERAL = "general"),
        (C.IMAGES = "images"),
        (C.PREMIUM_DEPRECATED = "premium"),
        (C.STORE = "store"),
        (C.PRIVACY = "privacy"),
        C);
let ed = ["@me", "@favorites", "@guilds-empty-nux", "@inbox", "@guild-upsell-list"],
    eC = q(
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
                return (null != e && ((E += `/${e}`), null != t && (E += `/${t}`)), E);
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
            CONJURE: "/conjure",
            CONJURE_PROJECT: (e) => `/conjure/${e}`,
            GLOBAL_DISCOVERY_SERVERS: "/discovery/servers",
            GLOBAL_DISCOVERY_GAMES: "/discovery/games",
            GLOBAL_DISCOVERY_APPS: "/discovery/applications",
            GLOBAL_DISCOVERY_APPS_CATEGORY: (e) => `/discovery/applications/categories/${e}`,
            GLOBAL_DISCOVERY_APPS_PROFILE: (e) => `/discovery/applications/${e}`,
            GLOBAL_DISCOVERY_APPS_PROFILE_SECTION: (e, t) => `/discovery/applications/${e}/${t}`,
            GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU: (e, t) => `/discovery/applications/${e}/${eu.STORE}/${t}`,
            GLOBAL_DISCOVERY_APPS_SEARCH: "/discovery/applications/search",
            GUILD_MEMBER_VERIFICATION: (e) => `/member-verification/${e}`,
            GUILD_MEMBER_VERIFICATION_FOR_HUB: (e, t) => `/member-verification-for-hub/${e}${null != t ? `/${t}` : ""}`,
            POPOUT_WINDOW: "/popout",
            UPCOMING_STAGES: (e, t) => `/guild-stages/${e}${null != t ? `/${t}` : ""}`,
            VERIFY_HUB_EMAIL: "/verify-hub-email",
            OPEN_APP_FROM_EMAIL: "/open-app-from-email",
            BILLING_MANAGE_SUBSCRIPTION: "/billing/premium/manage",
            BILLING_PAST_DUE_SUBSCRIPTION: "/billing/premium/past-due",
            BILLING_PAST_DUE_PAYMENT: "/billing/past-due-payment",
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
            APPLICATION_DIRECTORY_PROFILE_STORE_SKU: (e, t) => `/application-directory/${e}/${eL.STORE}/${t}`,
            APPLICATION_DIRECTORY_SEARCH: "/application-directory/search",
            FAMILY_CENTER: "/family-center",
            FAMILY_CENTER_MY_FAMILY: (e, t) => `/feature/family-center/my-family/${e}/${t}`,
            SERVER_SHOP: (e) => `/channels/${e}/shop`,
            CHANNELS_GAME_SHOP: (e, t, E, n) => {
                let r = `/channels/${e}/game-shop`;
                return ((r += `/${t ?? 0}`), null != E && ((r += `/${E}`), null != n && (r += `/${n}`)), r);
            },
            GAME_SHOP: (e, t, E) => {
                let n = `/game-shop/${e}`;
                return (null != t && ((n += `/${t}`), null != E && (n += `/${E}`)), n);
            },
            GUILD_PRODUCT: (e, t) => `/channels/${e}/shop/${t}`,
            REPORT: "/report",
            REPORT_SECOND_LOOK: "/report-review",
            COLLECTIBLES_SHOP: "/shop",
            COLLECTIBLES_SHOP_GAME_SHOP: (e, t, E, n) => {
                let r = `/shop?tab=${ec.GAME_SHOPS}&applicationId=${e}`;
                return (
                    null != t && (r += `&pageIndex=${t}`),
                    null != E && (r += `&skuId=${E}`),
                    null != n && (r += `&slug=${n}`),
                    r
                );
            },
            COLLECTIBLES_SHOP_WITH_TAB: (e) => `/shop?tab=${e}`,
            COLLECTIBLES_SHOP_COLLECTION_DETAIL: (e) => `/shop/collection/${e}`,
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
    ep = new Set(
        Object.values(
            (((p = {}).CONJURE = "conjuring"),
            (p.CONJURE_PROJECT = "conjure"),
            (p.ROLE_SUBSCRIPTIONS = "role-subscriptions"),
            (p.SERVER_MONETIZATION_ONBOARDING = "server-monetization-onboarding"),
            (p.GAME_SHOP = "game-shop"),
            (p.GUILD_SHOP = "shop"),
            (p.MEMBER_APPLICATIONS = "member-applications"),
            (p.GUILD_HOME = "@home"),
            (p.CHANNEL_BROWSER = "channel-browser"),
            (p.GUILD_ONBOARDING = "onboarding"),
            (p.CUSTOMIZE_COMMUNITY = "customize-community"),
            (p.MEMBER_SAFETY = "member-safety"),
            (p.GUILD_BOOSTS = "boosts"),
            (p.GAME_SERVERS = "game-servers"),
            (p.REPORT_TO_MOD = "report-to-mod"),
            (p.GUILD_OFFICIAL_MESSAGES = "official-messages"),
            (p.GUILD_SPACE = "guild-space"),
            p),
        ),
    );
function eg(e, t) {
    let { optional: E = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return new X(`:${eS()(e)}(${t})${E ? "?" : ""}`);
}
(Object.freeze({
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
    UNLISTED: 0x4000000,
}),
    new Set(
        Object.values(
            (((g = {}).GUILD_HOME = "home"),
            (g.SERVER_GUIDE = "guide"),
            (g.CHANNEL_BROWSER = "browse"),
            (g.CUSTOMIZE_COMMUNITY = "customize"),
            (g.LINKED_ROLES = "linked-roles"),
            g),
        ),
    ));
let eD = {
    guildId() {
        let { name: e = "guildId", optional: t = !1 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            E = ed.map(eS()).join("|");
        return eg(e, `${E}|\\d+`, { optional: t });
    },
    channelId() {
        let { name: e = "channelId", optional: t = !1 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            E = [...ep].map(eS()).join("|");
        return eg(e, `${E}|\\d+`, { optional: t });
    },
};
var eM = E(806163);
let eP = new Set([
    eC.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode"),
    eC.APP_WITH_GIFT_CODE(":giftCode"),
    eC.APP,
    eC.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
    eC.SETTINGS(":section", ":subsection?"),
    eC.USER_GUILD_NOTIFICATION_SETTINGS(eD.guildId()),
    eC.APPLICATION_LIBRARY_INVENTORY,
    eC.WELCOME(eD.guildId({ optional: !0 }), eD.channelId({ optional: !0 })),
    eC.GUILD_EVENT_DETAILS(eD.guildId({ optional: !0 }), ":guildEventId"),
    eC.GUILD_SETTINGS(eD.guildId(), ":section?", ":subsection?"),
    eC.CHANNEL_THREAD_VIEW(eD.guildId(), eD.channelId(), ":threadId", ":messageId?"),
    eC.CHANNEL(eD.guildId(), eD.channelId({ optional: !0 }), ":messageId?"),
    eC.ACTIVITY,
    eC.ACTIVITIES,
    eC.ACTIVITIES_HAPPENING_NOW,
    eC.ACTIVITY_DETAILS(":applicationId"),
    eC.APPLICATION_LIBRARY,
    eC.APPLICATION_STORE,
    eC.MESSAGE_REQUESTS,
    eC.COLLECTIBLES_SHOP,
    eC.COLLECTIBLES_SHOP_COLLECTION_DETAIL(":collectionId"),
    eC.GUILD_DISCOVERY,
    eC.QUEST_HOME_DEPRECATED,
    eC.QUEST_HOME,
    eC.CONJURE,
    eC.CONJURE_PROJECT(":projectId"),
    eC.ICYMI,
    eC.GLOBAL_DISCOVERY,
    eC.GUILD_MEMBER_VERIFICATION(eD.guildId()),
    eC.GUILD_MEMBER_VERIFICATION_FOR_HUB(eD.guildId(), ":inviteCode?"),
    eC.GUILD_BOOSTING_MARKETING(eD.guildId()),
    eC.GUILD_FEATURE(":feature", eD.guildId()),
    eC.FEATURE(":feature"),
    eC.FAMILY_CENTER,
    eC.APPLICATION_DIRECTORY,
    eC.GAME_SHOP(eD.guildId(), ":shopSkuId?", ":shopSlug?"),
]);
!(function () {
    if (null == window.WebSocket || null == window._ws) return;
    let e =
        ((function () {
            if (el) return;
            ((_ = n.get("token")), (es = n.get("tokens") || {}));
            let { decryptedToken: e, wasEncrypted: t } = eI(_);
            ((e_ = t),
                (o = e),
                [
                    ...Object.entries(es)
                        .map((e) => {
                            let [t, E] = e,
                                { decryptedToken: n, wasEncrypted: r } = eI(E);
                            return ((e_ = r || e_), [t, n]);
                        })
                        .filter((e) => {
                            let [t, E] = e;
                            return null != E;
                        }),
                ].reduce((e, t) => {
                    let [E, n] = t;
                    return ((e[E] = n), e);
                }, {}),
                (el = !0));
        })(),
        o);
    if (null == e || __OVERLAY__) return;
    let t = window._ws.ws,
        E = window._ws.state,
        r = E.open;
    performance.mark("FastConnect-socket-open", { detail: { alreadyOpen: r } });
    let s = function () {
        if (
            (performance.mark("FastConnect-identify-handler-running"),
            (E.open = !0),
            !(function (e) {
                for (let t of eP) if (null != (0, eM.B6)(e, { path: t })) return !0;
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
        let o = n.get("installation_id_v3") ?? n.get("analytics_installation");
        var _ = r({
            op: ea.IDENTIFY,
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
        (performance.mark("FastConnect-identify-sent"), t.send(_), (E.identify = !0));
    };
    r ? s() : (t.onopen = s);
})();
