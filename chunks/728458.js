"use strict";
n.d(t, { A: () => l });
var r = n(668279),
    i = n(761296),
    s = n(723702),
    a = n(837921);
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    s.isPlatformEmbedded &&
        a.Ay.updateCrashReporter({
            user_id: e.id ?? "",
            username: e.username ?? "",
            email: e.email ?? "",
            sentry: { user: { id: e.id ?? "", username: e.username ?? "", email: e.email ?? "" } },
        });
}
let l = {
    setUser(e, t, n, r) {
        let i = { id: e, username: t, email: n, staff: r };
        window.DiscordSentry?.getCurrentScope().setUser(i), o(i);
    },
    clearUser() {
        window.DiscordSentry?.getCurrentScope().setUser(null), o();
    },
    setTags(e) {
        window.DiscordSentry?.getCurrentScope().setTags(e);
    },
    setExtra(e) {
        window.DiscordSentry?.getCurrentScope().setExtras(e);
    },
    captureException(e, t) {
        let n = (0, i.Q)(t);
        window.DiscordSentry?.withScope((t) => {
            null != n.tags && t.setTags(n.tags), t.setExtras(n.extra), window.DiscordSentry?.captureException(e);
        });
    },
    captureCrash(e, t) {
        let n,
            r = (0, i.Q)(t);
        return (
            window.DiscordSentry?.withScope((t) => {
                t.setExtras(r.extra),
                    t.setTag("crash", "true"),
                    t.setLevel("fatal"),
                    t.addEventProcessor((e) => {
                        let t = e.exception?.values?.[0];
                        return null != t && (t.mechanism = { ...t.mechanism, handled: !1 }), e;
                    }),
                    (n = window.DiscordSentry?.captureException(e));
            }),
            n
        );
    },
    captureMessage(e, t) {
        let n = (0, i.Q)(t);
        window.DiscordSentry?.withScope((t) => {
            null != n.tags && t.setTags(n.tags), t.setExtras(n.extra), window.DiscordSentry?.captureMessage(e);
        });
    },
    addFeatureFlag(e, t) {
        let n = window.DiscordSentry?.getClient?.(),
            r = n?.getIntegrationByName?.("FeatureFlags");
        r?.addFeatureFlag?.(e, t);
    },
    addBreadcrumb(e) {
        (0, r.A)(e);
    },
    profiledRootComponent: (e) => e,
    crash() {
        throw Error("crash");
    },
    markCrashHandled(e) {},
    getLastCrashReport: () => Promise.resolve(null),
};
