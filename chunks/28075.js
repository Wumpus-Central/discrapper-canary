"use strict";
n.d(t, { A: () => u });
var r = n(311907),
    i = n(73153),
    a = n(736666);
let s = { lastInitAttemptMayHaveCrashed: !1 };
class o extends r.Ay.PersistedStore {
    static displayName = "VoiceFilterPersistedStore";
    static persistKey = "VoiceFilterPersistedStore";
    initialize(e) {
        null != e && (s = e);
    }
    getState() {
        return s;
    }
    getLastInitAttemptMayHaveCrashed() {
        return s.lastInitAttemptMayHaveCrashed;
    }
}
function l(e) {
    let { state: t } = e;
    switch (t) {
        case a.R.LOADING:
            s.lastInitAttemptMayHaveCrashed = !0;
            break;
        case a.R.LOADED:
        case a.R.FAILED:
        case a.R.UNSUPPORTED:
            s.lastInitAttemptMayHaveCrashed = !1;
    }
}
let u = new o(i.h, { VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE: l });
