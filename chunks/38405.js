"use strict";
n.d(t, { A: () => c });
var i = n(668279),
    r = n(39304),
    a = n(228366);
function s(e) {
    return {
        ...e,
        extra: {
            ...e?.extra,
            ...{
                ...(null != a.h._currentDispatchActionType ? { currentAction: a.h._currentDispatchActionType } : {}),
                lastFewActions: (0, r.lK)(),
            },
        },
    };
}
var l = n(723702),
    o = n(19575);
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    l.isPlatformEmbedded &&
        o.Ay.updateCrashReporter({
            user_id: e.id ?? "",
            username: e.username ?? "",
            email: e.email ?? "",
            sentry: { user: { id: e.id ?? "", username: e.username ?? "", email: e.email ?? "" } },
        });
}
let c = {
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
        let n,
            i = s(t);
        return (
            window.DiscordSentry?.withScope((t) => {
                null != i.tags && t.setTags(i.tags),
                    t.setExtras(i.extra),
                    (n = window.DiscordSentry?.captureException(e));
            }),
            n
        );
    },
    captureCrash(e, t) {
        let n,
            i = s(t);
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
    captureMessage(e, t, n) {
        let i = s(t);
        window.DiscordSentry?.withScope((t) => {
            null != i.tags && t.setTags(i.tags),
                null != i.fingerprint &&
                    (t.setFingerprint(i.fingerprint), t.addEventProcessor((e) => ((e.exception = void 0), e))),
                t.setExtras(i.extra),
                window.DiscordSentry?.captureMessage(e, n);
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
    triggerMemoryWarning() {},
    markCrashHandled(e) {},
    getLastCrashReport: () => Promise.resolve(null),
};
