let r, i, E, o, _, s, l;
var a,
    I = n(214958),
    A = n.n(I),
    O = n(70298),
    c = n(175259),
    S = n(506774),
    R = n(362474),
    N = n(71931),
    T = n(368849);
let u = "deviceProperties",
    d = "referralProperties",
    L = window.DiscordNative;
if (null != L) {
    let e,
        t = L.app.getVersion(),
        n = L.process.platform,
        i = L.os.release,
        E = L.os.arch,
        o = L.os.appArch,
        _ = L.app.getReleaseChannel(),
        s = (0, c.c)();
    switch (n) {
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
            e = n;
    }
    if (
        ((r = {
            os: e,
            browser: "Discord Client",
            release_channel: _ || "unknown",
            client_version: t,
            os_version: i,
            os_arch: E,
            app_arch: o,
            system_locale: s,
            has_client_mods: (0, O.b)(),
            client_launch_id: N.C,
        }),
        A().name?.toLocaleLowerCase() === "electron" &&
            ((r.browser_user_agent = A().ua || ""), (r.browser_version = A().version || "")),
        "linux" === n)
    ) {
        let e = L.crashReporter.getMetadata();
        (r.window_manager = e.wm),
            (r.distro = e.distro),
            (r.runtime_environment = e.runtime_environment),
            (r.display_server = e.display_server);
    } else
        "darwin" === n ? (r.os_sdk_version = i?.split(".")[0]) : "win32" === n && (r.os_sdk_version = i?.split(".")[2]);
}
function C(e, t) {
    if (null == e) return "";
    t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    let n = RegExp(`[\\?&]${t}=([^&#]*)`).exec(e);
    return null === n || ("string" != typeof n[1] && n[1].length) ? "" : decodeURIComponent(n[1]).replace(/\+/g, " ");
}
let p = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");
function f() {
    var e;
    let t,
        n,
        r = {};
    return (
        (r.referrer = document.referrer),
        (r.referring_domain = (t = document.referrer.split("/")).length >= 3 ? t[2] : ""),
        {
            ...r,
            ...((e = window.location.href),
            (n = {}),
            p.forEach((t) => {
                let r = C(e, t);
                r.length > 0 && (n[t] = r);
            }),
            n),
            ...(function () {
                let e,
                    t = {},
                    n = document.referrer,
                    r =
                        0 === (e = document.referrer).search("https?://(.*)google.([^/?]*)")
                            ? "google"
                            : 0 === e.search("https?://(.*)bing.com")
                              ? "bing"
                              : 0 === e.search("https?://(.*)yahoo.com")
                                ? "yahoo"
                                : 0 === e.search("https?://(.*)duckduckgo.com")
                                  ? "duckduckgo"
                                  : null;
                if (null != r) {
                    t.search_engine = r;
                    let e = C(n, "yahoo" !== r ? "q" : "p");
                    e.length > 0 && (t.mp_keyword = e);
                }
                return t;
            })(),
        }
    );
}
if (null == r)
    try {
        r = (function () {
            let e = S.w.get(u);
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
                            { opera: n } = window;
                        if (n) return /Mini/.test(e) ? "Opera Mini" : "Opera";
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
                    (t.system_locale = (0, c.c)()),
                    (t.has_client_mods = (0, O.b)()),
                    (e = t),
                    S.w.set(u, e);
            }
            let t = S.w.get(d);
            null == t && ((t = f()), S.w.set(d, t));
            let n = R.u.get(d);
            if (null == n) {
                var r;
                let e;
                (r = f()), (e = {}), Object.keys(r).map((t) => (e[`${t}_current`] = r[t])), (n = e), R.u.set(d, n);
            }
            return {
                ...e,
                ...{
                    ...{ browser_user_agent: window.navigator.userAgent || "", browser_version: A().version || "" },
                    os_version: A()?.os?.version ?? "",
                },
                ...t,
                ...n,
            };
        })();
    } catch (e) {
        r = {};
    }
(o = {}),
    (_ = window.GLOBAL_ENV.RELEASE_CHANNEL) &&
        (null == o.release_channel || "" === o.release_channel) &&
        (o.release_channel = _.split("-")[0]),
    isNaN((s = parseInt("537800", 10))) || (o.client_build_number = s),
    null == (l = L?.app.getBuildNumber()) || isNaN(l) || (o.native_build_number = l),
    (o.client_event_source = (function () {
        try {
            if (__OVERLAY__) return "OVERLAY";
        } catch (e) {}
        return null;
    })()),
    (o.has_client_mods = (0, O.b)()),
    (o.client_launch_id = N.C),
    (r = { ...r, ...o }),
    (0, T.q)(r);
var G = n(824120),
    D = n.n(G);
function g(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let r = Number(e[n]);
        for (let e = 0; r || e < t.length; e++) (r += 10 * (t[e] || 0)), (t[e] = r % 16), (r = (r - t[e]) / 16);
    }
    return t;
}
class m {
    parts;
    str;
    static fromString(e) {
        return new m(
            (function (e) {
                let t = g(e),
                    n = [, , , ,];
                for (let e = 0; e < 4; e++)
                    n[3 - e] = (function (e, t) {
                        let n = 0;
                        for (let r = 0; r < 4; r++) {
                            let i = e[t + r];
                            if (void 0 === i) break;
                            n += i * 16 ** r;
                        }
                        return n;
                    })(t, 4 * e);
                return n;
            })(e),
            e,
        );
    }
    static fromBit(e) {
        let t = [, , , ,],
            n = Math.floor(e / 16);
        for (let r = 0; r < 4; r++) t[3 - r] = r === n ? 1 << (e - 16 * n) : 0;
        return new m(t);
    }
    static asUintN(e, t) {
        let { parts: n } = t,
            r = 0,
            i = 0;
        for (; i < e && i < 16 * n.length; ) {
            let t = Math.min(e - i, 16),
                E = (1 << t) - 1,
                o = n.length - Math.floor(i / 16) - 1;
            (r |= (n[o] & E) << i), (i += t);
        }
        return r;
    }
    constructor(e, t) {
        (this.parts = e), (this.str = t);
    }
    and(e) {
        let { parts: t } = e;
        return new m(this.parts.map((e, n) => e & t[n]));
    }
    or(e) {
        let { parts: t } = e;
        return new m(this.parts.map((e, n) => e | t[n]));
    }
    xor(e) {
        let { parts: t } = e;
        return new m(this.parts.map((e, n) => e ^ t[n]));
    }
    not() {
        return new m(this.parts.map((e) => ~e));
    }
    equals(e) {
        let { parts: t } = e;
        return this.parts.every((e, n) => e === t[n]);
    }
    toString() {
        if (null != this.str) return this.str;
        let e = Array(16);
        return (
            this.parts.forEach((t, n) => {
                let r = g(t.toString());
                for (let t = 0; t < 4; t++) e[t + 4 * n] = r[3 - t] || 0;
            }),
            (this.str = D().fromArray(e, 16).toString())
        );
    }
    toJSON() {
        return this.toString();
    }
}
let P = (function () {
    try {
        return !0;
    } catch (e) {
        return !1;
    }
})();
P &&
    null == BigInt.prototype.toJSON &&
    (BigInt.prototype.toJSON = function () {
        return this.toString();
    });
let M = {},
    h = (
        P
            ? function (e) {
                  return BigInt(e);
              }
            : function (e) {
                  return e instanceof m
                      ? e
                      : ("number" == typeof e && (e = e.toString()), null != M[e] || (M[e] = m.fromString(e)), M[e]);
              }
    )(0),
    $ = P
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
              return e | t;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
              return e.or(t);
          },
    w = P
        ? function (e) {
              return BigInt(1) << BigInt(e);
          }
        : function (e) {
              return m.fromBit(e);
          };
var U = n(323125);
let b = location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT,
    B = location.protocol + "//discord.gg";
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
let v = Object.freeze({
    CREATE_INSTANT_INVITE: w(0),
    KICK_MEMBERS: w(1),
    BAN_MEMBERS: w(2),
    ADMINISTRATOR: w(3),
    MANAGE_CHANNELS: w(4),
    MANAGE_GUILD: w(5),
    CHANGE_NICKNAME: w(26),
    MANAGE_NICKNAMES: w(27),
    MANAGE_ROLES: w(28),
    MANAGE_WEBHOOKS: w(29),
    MANAGE_GUILD_EXPRESSIONS: w(30),
    CREATE_GUILD_EXPRESSIONS: w(43),
    VIEW_AUDIT_LOG: w(7),
    VIEW_CHANNEL: w(10),
    VIEW_GUILD_ANALYTICS: w(19),
    VIEW_CREATOR_MONETIZATION_ANALYTICS: w(41),
    MODERATE_MEMBERS: w(40),
    USE_EMBEDDED_ACTIVITIES: w(39),
    USE_EXTERNAL_APPS: w(50),
    SEND_MESSAGES: w(11),
    SEND_TTS_MESSAGES: w(12),
    MANAGE_MESSAGES: w(13),
    EMBED_LINKS: w(14),
    ATTACH_FILES: w(15),
    READ_MESSAGE_HISTORY: w(16),
    MENTION_EVERYONE: w(17),
    USE_EXTERNAL_EMOJIS: w(18),
    ADD_REACTIONS: w(6),
    USE_APPLICATION_COMMANDS: w(31),
    MANAGE_THREADS: w(34),
    CREATE_PUBLIC_THREADS: w(35),
    CREATE_PRIVATE_THREADS: w(36),
    USE_EXTERNAL_STICKERS: w(37),
    SEND_MESSAGES_IN_THREADS: w(38),
    SEND_VOICE_MESSAGES: w(46),
    SEND_POLLS: w(49),
    PIN_MESSAGES: w(51),
    BYPASS_SLOWMODE: w(52),
    MANAGE_OFFICIAL_MESSAGES: w(53),
    CONNECT: w(20),
    SPEAK: w(21),
    MUTE_MEMBERS: w(22),
    DEAFEN_MEMBERS: w(23),
    MOVE_MEMBERS: w(24),
    USE_VAD: w(25),
    PRIORITY_SPEAKER: w(8),
    STREAM: w(9),
    USE_SOUNDBOARD: w(42),
    USE_EXTERNAL_SOUNDS: w(45),
    SET_VOICE_CHANNEL_STATUS: w(48),
    REQUEST_TO_SPEAK: w(32),
    MANAGE_EVENTS: w(33),
    CREATE_EVENTS: w(44),
});
!(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let r = t[0];
    for (let e = 1; e < t.length; e++) r = $(r, t[e]);
})(
    v.KICK_MEMBERS,
    v.BAN_MEMBERS,
    v.ADMINISTRATOR,
    v.MANAGE_CHANNELS,
    v.MANAGE_GUILD,
    v.MANAGE_ROLES,
    v.MANAGE_MESSAGES,
    v.MANAGE_THREADS,
    v.MODERATE_MEMBERS,
),
    Object.freeze({
        TWITTER: Object.freeze({ default: "https://twitter.com/discord", ja: "https://twitter.com/discord_jp" }),
    });
let y = Object.freeze({
    WELCOME: `${b}/welcome/`,
    ME: `${b}/channels/@me`,
    SETTINGS: (e, t) => `${b}/settings/${e}${t ? `/${t}` : ""}`,
    CONNECTION: (e) => `${b}/connections/${e}`,
    CHANGELOGS: `${b}/settings/changelogs`,
    LOGIN: `${b}/login`,
    LOGIN_WITH_REDIRECT: (e) => `${b}/login?redirect_to=${e}`,
    REGISTER: `${b}/register`,
    REGISTER_WITH_REDIRECT: (e) => `${b}/register?redirect_to=${e}`,
    CREATE_GUILD: `${b}/guilds/create`,
    VANITY_INVITE: (e) => `${B}/${e}`,
    HYPESQUAD_ONLINE: `${b}/settings/hypesquad-online`,
    BROWSE_NITRO_TITLES: `${b}/store/browse?type=nitro`,
    SKU_DETAILS: (e, t) => `${b}/store/skus/${e}${null != t ? `?store_listing_id=${t}` : ""}`,
    MESSAGE: (e, t, n) => `/channels/${e}/${t}/${n}`,
    CHANNEL: (e, t) => `/channels/${e}/${t}`,
    REPORT: `${b}/report`,
    QUEST_PREVIEW_TOOL_2: (e) => `${b}/quest-preview/${e}`,
});
var H =
    (((a = H || {}).INDEX = "/"),
    (a.INDEX_WORD = "/index"),
    (a.INDEX_BUCKET = "/index/:bucketId"),
    (a.CHANGELOGS = "/changelogs/:date"),
    (a.COMMUNITY = "/community"),
    (a.COMPANY = "/company"),
    (a.COMPANY_INFORMATION = "/company-information"),
    (a.CREATORS = "/creators"),
    (a.DOWNLOADS = "/downloads"),
    (a.DOWNLOAD = "/download"),
    (a.GAMING = "/gaming"),
    (a.PRIVACY = "/privacy"),
    (a.TOS = "/tos"),
    (a.TERMS = "/terms"),
    (a.STORE_TERMS = "/store-terms"),
    (a.ACKNOWLEDGEMENTS = "/acknowledgements"),
    (a.LICENSES = "/licenses"),
    (a.PARTNERS = "/partners"),
    (a.HYPESQUAD = "/hypesquad"),
    (a.HYPESQUAD_RIOT = "/hypesquad-riot"),
    (a.BRANDING = "/branding"),
    (a.ERROR_404 = "/404"),
    (a.JOBS = "/jobs"),
    (a.JOB = "/jobs/:jobId"),
    (a.STREAMKIT = "/streamkit"),
    (a.SECURITY = "/security"),
    (a.NITRO = "/nitro"),
    (a.DISCOVER = "/servers"),
    (a.QUESTS = "/ads/quests"),
    (a.GUIDELINES = "/guidelines"),
    (a.RICH_PRESENCE = "/rich-presence"),
    (a.VERIFICATION = "/verification"),
    (a.OPEN_SOURCE = "/open-source"),
    (a.WARFRAME = "/warframe"),
    (a.REMOTE_AUTH = "/ra/:remoteAuthFingerprint"),
    (a.SAFETY_LANDING = "/safetycenter"),
    (a.SAFETY_ARTICLE_ROOT = "/safety"),
    (a.SAFETY_ARTICLE = "/safety/:article"),
    (a.NEWSROOM = "/newsroom"),
    (a.INSPIRATION = "/inspiration"),
    (a.MOD_ACADEMY_LANDING = "/moderation"),
    (a.MOD_ACADEMY_EXAM = "/moderation/exam"),
    (a.MOD_ACADEMY_ARTICLE = "/moderation/:article"),
    (a.BLOG = "/blog"),
    (a.BUILD = "/build"),
    (a.DEVELOPERS = "/developers"),
    (a.APP_DIRECTORY = "/application-directory"),
    (a.REFRESH_INDEX = "/new"),
    (a.REFRESH_INDEX_WORD = "/new/index"),
    (a.REFRESH_COMPANY = "/new/company"),
    (a.REFRESH_DOWNLOAD = "/new/download"),
    (a.REFRESH_PRIVACY = "/new/privacy"),
    (a.REFRESH_TERMS = "/new/terms"),
    (a.REFRESH_ACKNOWLEDGEMENTS = "/new/acknowledgements"),
    (a.REFRESH_LICENSES = "/new/licenses"),
    (a.REFRESH_BRANDING = "/new/branding"),
    (a.REFRESH_JOBS = "/new/jobs"),
    (a.REFRESH_JOB = "/new/jobs/:jobId"),
    (a.REFRESH_STREAMKIT = "/new/streamkit"),
    (a.REFRESH_NITRO = "/new/nitro"),
    (a.REFRESH_GUIDELINES = "/new/guidelines"),
    (a.REFRESH_SAFETY_LANDING = "/new/safety"),
    (a.REFRESH_SAFETY_ARTICLE = "/new/safety/:article"),
    (a.COLLEGE = "/college"),
    (a.LEAGUE_CLUBS = "/league-communities"),
    (a.DISCORD_RECRUITING_SCAMS = "/discord-recruitment-scams"),
    (a.DEV_NEWSLETTER_SIGNUP = "/dev-newsletter"),
    (a.LEGACY_DEV_NEWSLETTER = "/newsletter"),
    (a.LEGAL_ARCHIVE = "/archive/"),
    (a.TERMS_MAY_2020 = "/archive/terms/may-2020"),
    (a.PRIVACY_JUNE_2020 = "/archive/privacy/june-2020"),
    (a.GUIDELINES_MAY_2020 = "/archive/guidelines/may-2020"),
    (a.FALL_RELEASE_2023 = "/fallrelease"),
    (a.MOBILE_REDESIGN_2023 = "/mobile"),
    (a.REFRESH_XBOX_OFFER = "/new/discord-xbox-offer-2019"),
    (a.REFRESH_WHY_DISCORD = "/why-discord-is-different"),
    (a.WHY_DISCORD = "/why-discord"),
    (a.XBOX_OFFER = "/discord-xbox-offer-2020"),
    (a.COLLEGE_BRUINS = "/bruins"),
    (a.COLLEGE_ANTEATERS = "/anteaters"),
    (a.COLLEGE_GAUCHOS = "/gauchos"),
    (a.COLLEGE_BEARS = "/bears"),
    (a.COLLEGE_SLUGS = "/slugs"),
    (a.BACK_TO_SCHOOL_GIVEAWAY_INSTAGRAM = "/terms/back-to-school-2020/instagram"),
    (a.BACK_TO_SCHOOL_GIVEAWAY_TWITTER = "/terms/back-to-school-2020/twitter"),
    (a.SNOWSGIVING_GIVEAWAY_INSTAGRAM = "/terms/snowsgiving-2020/instagram"),
    (a.SNOWSGIVING_GIVEAWAY_TWITTER = "/terms/snowsgiving-2020/twitter"),
    a);
(0, U.dN)(y),
    (0, U.dN)(H),
    Object.freeze({
        FACEBOOK_URL: "https://www.facebook.com/discord/",
        INSTAGRAM_URL: "https://www.instagram.com/discord/",
        YOUTUBE_URL: "https://www.youtube.com/discord/",
        TIKTOK_URL: "https://www.tiktok.com/@discord",
    });
let Y = "dQw4w9WgXcQ:",
    F = null,
    V = window.DiscordNative;
null != V && (F = V.safeStorage);
let W = !1,
    k = {},
    K = !1;
function x(e) {
    return null == e || 0 === e.length
        ? { decryptedToken: null, wasEncrypted: !1 }
        : F?.isEncryptionAvailable() && e.startsWith(Y)
          ? { decryptedToken: F.decryptString(e.substring(Y.length)), wasEncrypted: !0 }
          : { decryptedToken: e, wasEncrypted: !1 };
}
var j = n(949189),
    X = n(353198),
    q = n(569745);
!(function () {
    if (null == window.WebSocket || null == window._ws) return;
    let e =
        ((function () {
            if (K) return;
            (E = S.w.get("token")), (k = S.w.get("tokens") || {});
            let { decryptedToken: e, wasEncrypted: t } = x(E);
            (W = t),
                (i = e),
                [
                    ...Object.entries(k)
                        .map((e) => {
                            let [t, n] = e,
                                { decryptedToken: r, wasEncrypted: i } = x(n);
                            return (W = i || W), [t, r];
                        })
                        .filter((e) => {
                            let [t, n] = e;
                            return null != n;
                        }),
                ].reduce((e, t) => {
                    let [n, r] = t;
                    return (e[n] = r), e;
                }, {}),
                (K = !0);
        })(),
        i);
    if (null == e || __OVERLAY__) return;
    let t = window._ws.ws,
        n = window._ws.state,
        o = n.open;
    performance.mark("FastConnect-socket-open", { detail: { alreadyOpen: o } });
    let _ = function () {
        if (
            (performance.mark("FastConnect-identify-handler-running"),
            (n.open = !0),
            !(0, q.Q)(window.location.pathname))
        )
            return void console.log("[FAST CONNECT] session is not required, skipping fast connect early identify");
        console.log("[FAST CONNECT] sending identify");
        let i = (e) => JSON.stringify(e);
        if (null != window.DiscordNative) {
            let e,
                t = window.DiscordNative;
            try {
                e = t.nativeModules.requireModule("discord_erlpack");
            } catch (n) {
                try {
                    e = t.nativeModules.requireModule("erlpack");
                } catch (e) {}
            }
            null != e && (i = (t) => e.pack(t).buffer);
        }
        let E = S.w.get("analytics_installation");
        var o = i({
            op: X.p.IDENTIFY,
            d: {
                token: e,
                capabilities: (0, j.O)({ useChannelObfuscation: null != S.w.get("private_channel_obfuscation") }),
                properties: { ...r, is_fast_connect: !0, ...(null != E && "" !== E ? { installation_id: E } : {}) },
                client_state: { guild_versions: {} },
            },
        });
        performance.mark("FastConnect-identify-sent"), t.send(o), (n.identify = !0);
    };
    o ? _() : (t.onopen = _);
})();
