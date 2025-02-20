var i,
    l = n(442837),
    r = n(570140);
function o(e, t, n) {
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
let a = 10 * n(70956).Z.Millis.MINUTE,
    s = {
        lastUsedCommandId: null,
        lastUsedTimeMs: null
    };
class c extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        null != e && ((s.lastUsedCommandId = e.lastUsedCommandId), (s.lastUsedTimeMs = e.lastUsedTimeMs));
    }
    getState() {
        return s;
    }
    getLastUsedCommandId() {
        let e = Date.now();
        return null == s.lastUsedTimeMs || null == s.lastUsedCommandId ? null : (e > s.lastUsedTimeMs + a && ((s.lastUsedCommandId = null), (s.lastUsedTimeMs = null)), s.lastUsedCommandId);
    }
}
o(c, 'displayName', 'AppLauncherLastUsedCommandStore'),
    o(c, 'persistKey', 'AppLauncherLastUsedCommandStore'),
    new c(r.Z, {
        APPLICATION_COMMAND_USED: function (e) {
            let { command: t } = e;
            (s.lastUsedCommandId = t.id), (s.lastUsedTimeMs = Date.now());
        }
    });
