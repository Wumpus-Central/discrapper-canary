var o,
    r = t(442837),
    a = t(570140);
function i(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
let c = 10 * t(70956).Z.Millis.MINUTE,
    l = {
        lastUsedCommandId: null,
        lastUsedTimeMs: null
    };
class d extends (o = r.ZP.PersistedStore) {
    initialize(e) {
        null != e && ((l.lastUsedCommandId = e.lastUsedCommandId), (l.lastUsedTimeMs = e.lastUsedTimeMs));
    }
    getState() {
        return l;
    }
    getLastUsedCommandId() {
        let e = Date.now();
        return null == l.lastUsedTimeMs || null == l.lastUsedCommandId ? null : (e > l.lastUsedTimeMs + c && ((l.lastUsedCommandId = null), (l.lastUsedTimeMs = null)), l.lastUsedCommandId);
    }
}
(i(d, 'displayName', 'AppLauncherLastUsedCommandStore'),
    i(d, 'persistKey', 'AppLauncherLastUsedCommandStore'),
    new d(a.Z, {
        APPLICATION_COMMAND_USED: function (e) {
            let { command: n } = e;
            ((l.lastUsedCommandId = n.id), (l.lastUsedTimeMs = Date.now()));
        }
    }));
