var r,
    i = n(442837),
    o = n(570140);
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
    l = {
        lastUsedCommandId: null,
        lastUsedTimeMs: null
    };
function c(e) {
    let { command: t } = e;
    ((l.lastUsedCommandId = t.id), (l.lastUsedTimeMs = Date.now()));
}
class u extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && ((l.lastUsedCommandId = e.lastUsedCommandId), (l.lastUsedTimeMs = e.lastUsedTimeMs));
    }
    getState() {
        return l;
    }
    getLastUsedCommandId() {
        let e = Date.now();
        return null == l.lastUsedTimeMs || null == l.lastUsedCommandId ? null : (e > l.lastUsedTimeMs + s && ((l.lastUsedCommandId = null), (l.lastUsedTimeMs = null)), l.lastUsedCommandId);
    }
}
(a(u, 'displayName', 'AppLauncherLastUsedCommandStore'), a(u, 'persistKey', 'AppLauncherLastUsedCommandStore'), new u(o.Z, { APPLICATION_COMMAND_USED: c }));
