var i,
    l = n(442837),
    a = n(570140);
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
let s = 10 * n(70956).Z.Millis.MINUTE,
    r = {
        lastUsedCommandId: null,
        lastUsedTimeMs: null
    };
class c extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        null != e && ((r.lastUsedCommandId = e.lastUsedCommandId), (r.lastUsedTimeMs = e.lastUsedTimeMs));
    }
    getState() {
        return r;
    }
    getLastUsedCommandId() {
        let e = Date.now();
        return null == r.lastUsedTimeMs || null == r.lastUsedCommandId ? null : (e > r.lastUsedTimeMs + s && ((r.lastUsedCommandId = null), (r.lastUsedTimeMs = null)), r.lastUsedCommandId);
    }
}
o(c, 'displayName', 'AppLauncherLastUsedCommandStore'),
    o(c, 'persistKey', 'AppLauncherLastUsedCommandStore'),
    new c(a.Z, {
        APPLICATION_COMMAND_USED: function (e) {
            let { command: t } = e;
            (r.lastUsedCommandId = t.id), (r.lastUsedTimeMs = Date.now());
        }
    });
