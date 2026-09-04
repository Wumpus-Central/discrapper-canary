o(134528), o(947204);
var t = o(501661),
    n = o(774099),
    i = o(56833),
    l = o(883950),
    a = o(871186),
    s = o(363630);
let d = ["oppobrowser", "realmebrowser", "heytapbrowser"],
    u = (function (e) {
        let { maxBudgetMinute: r, maxBudgetHour: o } = e,
            t = { slot: 0, budgetUsed: 0 },
            n = { slot: 0, budgetUsed: 0 };
        return () => {
            let e = Date.now(),
                i = Math.round(e / 1e3 / 60),
                l = Math.round(e / 1e3 / 60 / 60);
            return (
                t.slot !== i && ((t.slot = i), (t.budgetUsed = 0)),
                n.slot !== l && ((n.slot = l), (n.budgetUsed = 0)),
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
        release: "discord_web-c62374007f9828d205d4a711fdb37c6c326c6c2e",
        beforeSend: function (e) {
            var r;
            let o;
            if (
                (null != e.exception &&
                    null != e.exception.values &&
                    e.exception.values.every(
                        (e) =>
                            null == e.stacktrace || (null != e.stacktrace.frames && 1 === e.stacktrace.frames.length),
                    ) &&
                    "canary" !== window.GLOBAL_ENV.RELEASE_CHANNEL) ||
                d.some((e) => window.navigator.appVersion.toLowerCase().indexOf(e) >= 0) ||
                null != (o = window).jQuery ||
                null != o.$ ||
                null != o.BetterDiscord ||
                null != o.BdApi ||
                null != o.rambox ||
                null != o.Vencord ||
                null != o.VencordNative ||
                "Aborted" === (r = e).message ||
                "cancel captcha" === r.message ||
                !u()
            )
                return null;
            if (null == e.fingerprint) {
                let r,
                    o,
                    t =
                        ((r = e.exception?.values?.at(-1)),
                        (o = r?.type === "HTTPResponseError" ? r : void 0),
                        o?.value == null ? null : ["HTTPResponseError", o.value]);
                null != t && (e.fingerprint = t);
            }
            return e;
        },
        integrations: [
            n.L({ onerror: !0, onunhandledrejection: !0 }),
            i.F({ console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0 }),
            l.S(),
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
        a.NA("buildNumber", "607946"),
        a.NA("builtAt", String("1788553236753"));
    let e = window.GLOBAL_ENV.SENTRY_TAGS;
    if (null != e && "object" == typeof e) for (let r in e) a.NA(r, e[r]);
    return s;
})();
