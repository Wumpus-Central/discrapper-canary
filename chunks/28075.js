n.d(t, { A: () => d });
var r,
    i = n(311907),
    a = n(73153),
    s = n(736666);
function o(e, t, n) {
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
class c extends (r = i.Ay.PersistedStore) {
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
        case s.R.LOADING:
            l.lastInitAttemptMayHaveCrashed = !0;
            break;
        case s.R.LOADED:
        case s.R.FAILED:
        case s.R.UNSUPPORTED:
            l.lastInitAttemptMayHaveCrashed = !1;
    }
}
o(c, "displayName", "VoiceFilterPersistedStore"), o(c, "persistKey", "VoiceFilterPersistedStore");
let d = new c(a.h, { VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE: u });
