var r,
    o = n(442837),
    l = n(570140);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = 10 * n(70956).Z.Millis.MINUTE,
    a = {
        lastUsedCommandId: null,
        lastUsedTimeMs: null
    };
class u extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        null != e && ((a.lastUsedCommandId = e.lastUsedCommandId), (a.lastUsedTimeMs = e.lastUsedTimeMs));
    }
    getState() {
        return a;
    }
    getLastUsedCommandId() {
        let e = Date.now();
        return null == a.lastUsedTimeMs || null == a.lastUsedCommandId ? null : (e > a.lastUsedTimeMs + c && ((a.lastUsedCommandId = null), (a.lastUsedTimeMs = null)), a.lastUsedCommandId);
    }
}
i(u, 'displayName', 'AppLauncherLastUsedCommandStore'),
    i(u, 'persistKey', 'AppLauncherLastUsedCommandStore'),
    new u(l.Z, {
        APPLICATION_COMMAND_USED: function (e) {
            let { command: t } = e;
            (a.lastUsedCommandId = t.id), (a.lastUsedTimeMs = Date.now());
        }
    });
