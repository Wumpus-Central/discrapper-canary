_.d(e, { j: () => I }), _(388685);
var a = _(509068),
    r = _(804410),
    n = _(408720),
    o = _(233517),
    E = _(931327),
    i = _(903772),
    c = _(97145);
let s = ["oppobrowser", "realmebrowser", "heytapbrowser"],
    l = (0, c.f)({
        maxBudgetMinute: 1,
        maxBudgetHour: 3,
    });
function I() {
    a.S1({
        tunnel: "/error-reporting-proxy/web",
        dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
        autoSessionTracking: !1,
        environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
        release: "discord_web-7a261b32ab1b02e768a3cf352b486f4a55e8dcea",
        beforeSend: function (t, e) {
            return !(
                (null != t.exception &&
                    null != t.exception.values &&
                    t.exception.values.every(
                        (t) =>
                            null == t.stacktrace || (null != t.stacktrace.frames && 1 === t.stacktrace.frames.length),
                    ) &&
                    "canary" !== window.GLOBAL_ENV.RELEASE_CHANNEL) ||
                s.some((t) => window.navigator.appVersion.toLowerCase().indexOf(t) >= 0)
            ) &&
                !(0, i.e)() &&
                "Aborted" !== t.message &&
                "cancel captcha" !== t.message &&
                l()
                ? t
                : null;
        },
        integrations: [
            r.k({
                onerror: !0,
                onunhandledrejection: !0,
            }),
            n.f({
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
        o.YA("buildNumber", "469895"),
        o.YA("builtAt", String("1763512186622"));
    let t = window.GLOBAL_ENV.SENTRY_TAGS;
    if (null != t && "object" == typeof t) for (let e in t) o.YA(e, t[e]);
    return E;
}
