var t = o(501661),
    n = o(774099),
    i = o(56833),
    a = o(883950),
    d = o(871186),
    l = o(363630);
let s = ["oppobrowser", "realmebrowser", "heytapbrowser"],
    u = (function (e) {
        let { maxBudgetMinute: r, maxBudgetHour: o } = e,
            t = { slot: 0, budgetUsed: 0 },
            n = { slot: 0, budgetUsed: 0 };
        return () => {
            let e = Date.now(),
                i = Math.round(e / 1e3 / 60),
                a = Math.round(e / 1e3 / 60 / 60);
            return (
                t.slot !== i && ((t.slot = i), (t.budgetUsed = 0)),
                n.slot !== a && ((n.slot = a), (n.budgetUsed = 0)),
                !!(t.budgetUsed < r) && (t.budgetUsed++, !!(n.budgetUsed < o)) && (n.budgetUsed++, !0)
            );
        };
    })({ maxBudgetMinute: 1, maxBudgetHour: 3 });
window.DiscordSentry = (function () {
    t.Ts({
        tunnel: "/error-reporting-proxy/web",
        dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
        autoSessionTracking: !1,
        environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
        release: "discord_web-b9cd5f8a3120f3477fa7bdf83b487928662f0d4b",
        beforeSend: function (e, r) {
            let o;
            return !(
                (null != e.exception &&
                    null != e.exception.values &&
                    e.exception.values.every(
                        (e) =>
                            null == e.stacktrace || (null != e.stacktrace.frames && 1 === e.stacktrace.frames.length),
                    ) &&
                    "canary" !== window.GLOBAL_ENV.RELEASE_CHANNEL) ||
                s.some((e) => window.navigator.appVersion.toLowerCase().indexOf(e) >= 0)
            ) &&
                null == (o = window).jQuery &&
                null == o.$ &&
                null == o.BetterDiscord &&
                null == o.BdApi &&
                null == o.rambox &&
                "Aborted" !== e.message &&
                "cancel captcha" !== e.message &&
                u()
                ? e
                : null;
        },
        integrations: [
            n.L({ onerror: !0, onunhandledrejection: !0 }),
            i.F({ console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0 }),
            a.S(),
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
        d.NA("buildNumber", "534148"),
        d.NA("builtAt", String("1776967787688"));
    let e = window.GLOBAL_ENV.SENTRY_TAGS;
    if (null != e && "object" == typeof e) for (let r in e) d.NA(r, e[r]);
    return l;
})();
