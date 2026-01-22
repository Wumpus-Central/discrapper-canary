var r,
    i = n(311907),
    a = n(73153);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = 10 * n(927813).A.Millis.MINUTE,
    l = {
        lastUsedCommandId: null,
        lastUsedTimeMs: null,
    };

function c(e) {
    let { command: t } = e;
    (l.lastUsedCommandId = t.id), (l.lastUsedTimeMs = Date.now());
}
class u extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        null != e && ((l.lastUsedCommandId = e.lastUsedCommandId), (l.lastUsedTimeMs = e.lastUsedTimeMs));
    }
    getState() {
        return l;
    }
    getLastUsedCommandId() {
        let e = Date.now();
        return null == l.lastUsedTimeMs || null == l.lastUsedCommandId
            ? null
            : (e > l.lastUsedTimeMs + o && ((l.lastUsedCommandId = null), (l.lastUsedTimeMs = null)),
              l.lastUsedCommandId);
    }
}
s(u, "displayName", "AppLauncherLastUsedCommandStore"),
    s(u, "persistKey", "AppLauncherLastUsedCommandStore"),
    new u(a.h, {
        APPLICATION_COMMAND_USED: c,
    });
