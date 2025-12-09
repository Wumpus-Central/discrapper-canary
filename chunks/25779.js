r.d(t, { j: () => u }), r(388685);
var n = r(767020),
    a = r(382792),
    i = r(848576),
    o = r(771560),
    _ = r(883086),
    s = r(903772),
    c = r(97145);
let E = ["oppobrowser", "realmebrowser", "heytapbrowser"],
    l = (0, c.f)({
        maxBudgetMinute: 1,
        maxBudgetHour: 3,
    });
function u() {
    n.S1({
        tunnel: "/error-reporting-proxy/web",
        dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
        autoSessionTracking: !1,
        environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
        release: "discord_web-3cc912906fe3704d1381dfd1204fbf764b5dd480",
        beforeSend: function (e, t) {
            return !(
                (null != e.exception &&
                    null != e.exception.values &&
                    e.exception.values.every(
                        (e) =>
                            null == e.stacktrace || (null != e.stacktrace.frames && 1 === e.stacktrace.frames.length),
                    ) &&
                    "canary" !== window.GLOBAL_ENV.RELEASE_CHANNEL) ||
                E.some((e) => window.navigator.appVersion.toLowerCase().indexOf(e) >= 0)
            ) &&
                !(0, s.e)() &&
                "Aborted" !== e.message &&
                "cancel captcha" !== e.message &&
                l()
                ? e
                : null;
        },
        integrations: [
            a.k({
                onerror: !0,
                onunhandledrejection: !0,
            }),
            i.f({
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
            }),
        ],
        ignoreErrors: [
            "EADDRINUSE",
            "BetterDiscord",
            "EnhancedDiscord",
            "Powercord",
            "RecipeWebview",
            "jQuery",
            "localStorage",
            "has already been declared",
            "Cannot call hover while not dragging.",
            "Cannot call beginDrag while dragging.",
            "getHostNode",
            "setupCSS",
            "on missing remote object",
            "ChunkLoadError",
            "Cannot find module 'discord_utils'",
            "Failed to setup Krisp module",
            "Error invoking remote method 'DISCORD_NATIVE_MODULES_INSTALL': Error: Module updater is not available!",
            "Non-Error promise rejection captured with keys:",
            "Request has been terminated",
            "Cannot resolve a Slate point from DOM point",
            "Failed to fetch",
            "no suitable image found",
            "ResizeObserver loop limit exceeded",
            "ResizeObserver loop completed with undelivered notifications.",
            "The play() request was interrupted",
            "could not play audio",
            "notosans-400-normalitalic",
        ],
        denyUrls: [/recaptcha/, /mobilediscord\.com/, /betterdiscord:\/\//],
    }),
        o.YA("buildNumber", "477609"),
        o.YA("builtAt", String("1765306432409"));
    let e = window.GLOBAL_ENV.SENTRY_TAGS;
    if (null != e && "object" == typeof e) for (let t in e) o.YA(t, e[t]);
    return _;
}
