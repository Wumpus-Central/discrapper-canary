n.d(t, { Z: () => d });
var r,
    i = n(442837),
    o = n(570140),
    a = n(750180);
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
let l = { lastInitAttemptMayHaveCrashed: !1 };
class c extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (l = e);
    }
    getState() {
        return l;
    }
    getLastInitAttemptMayHaveCrashed() {
        return l.lastInitAttemptMayHaveCrashed;
    }
}
function u(e) {
    let { state: t } = e;
    switch (t) {
        case a.O.LOADING:
            l.lastInitAttemptMayHaveCrashed = !0;
            break;
        case a.O.LOADED:
        case a.O.FAILED:
        case a.O.UNSUPPORTED:
            l.lastInitAttemptMayHaveCrashed = !1;
    }
}
s(c, "displayName", "VoiceFilterPersistedStore"), s(c, "persistKey", "VoiceFilterPersistedStore");
let d = new c(o.Z, { VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE: u });
