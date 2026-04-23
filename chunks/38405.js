"use strict";
n.d(t, { A: () => _ });
var i = n(668279),
    r = n(39304),
    s = n(228366);
function a(e) {
    return {
        ...e,
        extra: {
            ...e?.extra,
            ...{
                ...(null != s.h._currentDispatchActionType ? { currentAction: s.h._currentDispatchActionType } : {}),
                lastFewActions: (0, r.lK)(),
            },
        },
    };
}
var o = n(723702),
    l = n(19575);
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    o.isPlatformEmbedded &&
        l.Ay.updateCrashReporter({
            user_id: e.id ?? "",
            username: e.username ?? "",
            email: e.email ?? "",
            sentry: { user: { id: e.id ?? "", username: e.username ?? "", email: e.email ?? "" } },
        });
}
let _ = {
    setUser(e, t, n, i) {
        let r = { id: e, username: t, email: n, staff: i };
        window.DiscordSentry?.getCurrentScope().setUser(r), d(r);
    },
    clearUser() {
        window.DiscordSentry?.getCurrentScope().setUser(null), d();
    },
    setTags(e) {
        window.DiscordSentry?.getCurrentScope().setTags(e);
    },
    setExtra(e) {
        window.DiscordSentry?.getCurrentScope().setExtras(e);
    },
    captureException(e, t) {
        let n = a(t);
        window.DiscordSentry?.withScope((t) => {
            null != n.tags && t.setTags(n.tags), t.setExtras(n.extra), window.DiscordSentry?.captureException(e);
        });
    },
    captureCrash(e, t) {
        let n,
            i = a(t);
        return (
            window.DiscordSentry?.withScope((t) => {
                t.setExtras(i.extra),
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
        let n = a(t);
        window.DiscordSentry?.withScope((t) => {
            null != n.tags && t.setTags(n.tags), t.setExtras(n.extra), window.DiscordSentry?.captureMessage(e);
        });
    },
    addFeatureFlag(e, t) {
        let n = window.DiscordSentry?.getClient?.(),
            i = n?.getIntegrationByName?.("FeatureFlags");
        i?.addFeatureFlag?.(e, t);
    },
    addBreadcrumb(e) {
        (0, i.A)(e);
    },
    profiledRootComponent: (e) => e,
    crash() {
        throw Error("crash");
    },
    markCrashHandled(e) {},
    getLastCrashReport: () => Promise.resolve(null),
};
