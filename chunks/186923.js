var t = o(501661),
    n = o(774099),
    a = o(56833),
    i = o(883950),
    d = o(871186),
    s = o(363630),
    l = o(70298);
let u = ["oppobrowser", "realmebrowser", "heytapbrowser"],
    c = (function (e) {
        let { maxBudgetMinute: r, maxBudgetHour: o } = e,
            t = { slot: 0, budgetUsed: 0 },
            n = { slot: 0, budgetUsed: 0 };
        return () => {
            let e = Date.now(),
                a = Math.round(e / 1e3 / 60),
                i = Math.round(e / 1e3 / 60 / 60);
            return (
                t.slot !== a && ((t.slot = a), (t.budgetUsed = 0)),
                n.slot !== i && ((n.slot = i), (n.budgetUsed = 0)),
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
        release: "discord_web-45aa7ae3fe93013bb1b546eafd0af3c26aaef1f7",
        beforeSend: function (e, r) {
            return !(
                (null != e.exception &&
                    null != e.exception.values &&
                    e.exception.values.every(
                        (e) =>
                            null == e.stacktrace || (null != e.stacktrace.frames && 1 === e.stacktrace.frames.length),
                    ) &&
                    "canary" !== window.GLOBAL_ENV.RELEASE_CHANNEL) ||
                u.some((e) => window.navigator.appVersion.toLowerCase().indexOf(e) >= 0)
            ) &&
                !(0, l.b)() &&
                "Aborted" !== e.message &&
                "cancel captcha" !== e.message &&
                c()
                ? e
                : null;
        },
        integrations: [
            n.L({ onerror: !0, onunhandledrejection: !0 }),
            a.F({ console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0 }),
            i.S(),
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
        d.NA("buildNumber", "536181"),
        d.NA("builtAt", String("1777399126456"));
    let e = window.GLOBAL_ENV.SENTRY_TAGS;
    if (null != e && "object" == typeof e) for (let r in e) d.NA(r, e[r]);
    return s;
})();
