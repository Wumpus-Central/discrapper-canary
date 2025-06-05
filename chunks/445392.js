var r,
    i = n(442837),
    l = n(570140);
function a(e, t, n) {
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
let o = 10 * n(70956).Z.Millis.MINUTE,
    s = {
        lastUsedCommandId: null,
        lastUsedTimeMs: null
    };
class c extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && ((s.lastUsedCommandId = e.lastUsedCommandId), (s.lastUsedTimeMs = e.lastUsedTimeMs));
    }
    getState() {
        return s;
    }
    getLastUsedCommandId() {
        let e = Date.now();
        return null == s.lastUsedTimeMs || null == s.lastUsedCommandId ? null : (e > s.lastUsedTimeMs + o && ((s.lastUsedCommandId = null), (s.lastUsedTimeMs = null)), s.lastUsedCommandId);
    }
}
a(c, 'displayName', 'AppLauncherLastUsedCommandStore'),
    a(c, 'persistKey', 'AppLauncherLastUsedCommandStore'),
    new c(l.Z, {
        APPLICATION_COMMAND_USED: function (e) {
            let { command: t } = e;
            (s.lastUsedCommandId = t.id), (s.lastUsedTimeMs = Date.now());
        }
    });
