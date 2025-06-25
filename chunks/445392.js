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
let s = 10 * n(70956).Z.Millis.MINUTE,
    o = {
        lastUsedCommandId: null,
        lastUsedTimeMs: null
    };
class c extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && ((o.lastUsedCommandId = e.lastUsedCommandId), (o.lastUsedTimeMs = e.lastUsedTimeMs));
    }
    getState() {
        return o;
    }
    getLastUsedCommandId() {
        let e = Date.now();
        return null == o.lastUsedTimeMs || null == o.lastUsedCommandId ? null : (e > o.lastUsedTimeMs + s && ((o.lastUsedCommandId = null), (o.lastUsedTimeMs = null)), o.lastUsedCommandId);
    }
}
a(c, 'displayName', 'AppLauncherLastUsedCommandStore'),
    a(c, 'persistKey', 'AppLauncherLastUsedCommandStore'),
    new c(l.Z, {
        APPLICATION_COMMAND_USED: function (e) {
            let { command: t } = e;
            (o.lastUsedCommandId = t.id), (o.lastUsedTimeMs = Date.now());
        }
    });
