"use strict";
n.d(t, { A: () => c });
var r = n(311907),
    i = n(73153);
let a = new Set(),
    s = !1;
function o(e) {
    return a.add(e.questId), !0;
}
function l(e) {
    return (s = e.autoEnroll), !0;
}
!(function () {
    (a = new Set()), (s = !1);
})();
class u extends r.Ay.PersistedStore {
    static displayName = "UnenrolledActivityQuestStore";
    static persistKey = "UnenrolledActivityQuestStore";
    initialize(e) {
        (a = new Set(e?.dismissedQuestIds ?? [])), (s = e?.autoEnroll ?? !1);
    }
    getState() {
        return { dismissedQuestIds: Array.from(a), autoEnroll: s };
    }
    isDismissed(e) {
        return null != e && a.has(e);
    }
    getDismissedQuestIds() {
        return new Set(a);
    }
}
let c = new u(i.h, { UNENROLLED_ACTIVITY_QUEST_DISMISS: o, UNENROLLED_ACTIVITY_QUEST_AUTO_ENROLL: l });
