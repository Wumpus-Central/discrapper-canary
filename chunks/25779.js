r.d(t, {
    j: function () {
        return I;
    }
}),
    r(47120);
var a = r(509068),
    n = r(804410),
    _ = r(408720),
    o = r(233517),
    E = r(931327),
    i = r(903772),
    c = r(97145);
let s = ['oppobrowser', 'realmebrowser', 'heytapbrowser'],
    l = (0, c.f)({
        maxBudgetMinute: 1,
        maxBudgetHour: 3
    });
function I() {
    var e;
    a.S1({
        tunnel: '/error-reporting-proxy/web',
        dsn: 'https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984',
        autoSessionTracking: !1,
        environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
        release: 'discord_web-ae0af4b408a5fbf7cb510ca2777f4ee51e1cbd47',
        beforeSend: function (e, t) {
            var r, a;
            return !((null != (r = e).exception && null != r.exception.values && r.exception.values.every((e) => null == e.stacktrace || (null != e.stacktrace.frames && 1 === e.stacktrace.frames.length)) && 'canary' !== window.GLOBAL_ENV.RELEASE_CHANNEL) || s.some((e) => window.navigator.appVersion.toLowerCase().indexOf(e) >= 0)) && !(0, i.e)() && !('Aborted' === (a = e).message || 'cancel captcha' === a.message) && l() ? e : null;
        },
        integrations: [
            n.k({
                onerror: !0,
                onunhandledrejection: !0
            }),
            _.f({
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0
            })
        ],
        ignoreErrors: ['EADDRINUSE', 'BetterDiscord', 'EnhancedDiscord', 'Powercord', 'RecipeWebview', 'jQuery', 'localStorage', 'has already been declared', 'Cannot call hover while not dragging.', 'Cannot call beginDrag while dragging.', 'getHostNode', 'setupCSS', 'on missing remote object', 'ChunkLoadError', "Cannot find module 'discord_utils'", 'Failed to setup Krisp module', "Error invoking remote method 'DISCORD_NATIVE_MODULES_INSTALL': Error: Module updater is not available!", 'Non-Error promise rejection captured with keys:', 'Request has been terminated', 'Cannot resolve a Slate point from DOM point', 'Failed to fetch', 'no suitable image found', 'ResizeObserver loop limit exceeded', 'ResizeObserver loop completed with undelivered notifications.', 'The play() request was interrupted', 'could not play audio', 'notosans-400-normalitalic'],
        denyUrls: [/recaptcha/, /mobilediscord\.com/, /betterdiscord:\/\//]
    }),
        o.YA('buildNumber', ((e = '357295'), '357295'));
    o.YA('builtAt', String('1736361162950'));
    let t = window.GLOBAL_ENV.SENTRY_TAGS;
    if (null != t && 'object' == typeof t) for (let e in t) o.YA(e, t[e]);
    return E;
}
