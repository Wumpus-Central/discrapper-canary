var l = n(311907),
    i = n(73153);
let a = 10 * n(927813).A.Millis.MINUTE,
    s = { lastUsedCommandId: null, lastUsedTimeMs: null };
class r extends l.Ay.PersistedStore {
    static displayName = "AppLauncherLastUsedCommandStore";
    static persistKey = "AppLauncherLastUsedCommandStore";
    initialize(e) {
        null != e && ((s.lastUsedCommandId = e.lastUsedCommandId), (s.lastUsedTimeMs = e.lastUsedTimeMs));
    }
    getState() {
        return s;
    }
    getLastUsedCommandId() {
        let e = Date.now();
        return null == s.lastUsedTimeMs || null == s.lastUsedCommandId
            ? null
            : (e > s.lastUsedTimeMs + a && ((s.lastUsedCommandId = null), (s.lastUsedTimeMs = null)),
              s.lastUsedCommandId);
    }
}
new r(i.h, {
    APPLICATION_COMMAND_USED: function (e) {
        let { command: t } = e;
        (s.lastUsedCommandId = t.id), (s.lastUsedTimeMs = Date.now());
    },
});
