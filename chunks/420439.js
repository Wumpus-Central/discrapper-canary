n.d(t, { Z: () => d });
var r,
    i = n(442837),
    a = n(570140),
    o = n(750180);
function s(e, t, n) {
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
        case o.O.LOADING:
            l.lastInitAttemptMayHaveCrashed = !0;
            break;
        case o.O.LOADED:
        case o.O.FAILED:
        case o.O.UNSUPPORTED:
            l.lastInitAttemptMayHaveCrashed = !1;
    }
}
(s(c, 'displayName', 'VoiceFilterPersistedStore'), s(c, 'persistKey', 'VoiceFilterPersistedStore'));
let d = new c(a.Z, { VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE: u });
