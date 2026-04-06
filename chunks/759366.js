"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153),
    s = n(661191);
let a = 20,
    o = new Set(),
    l = !1;
function u(e) {
    return (
        o.size >= a &&
            (o = new Set(
                o
                    .values()
                    .toArray()
                    .sort(s.default.compare)
                    .slice(Math.floor(a / 2))
                    .map((e) => e.toString()),
            )),
        o.add(e.questId),
        !0
    );
}
function c(e) {
    return (l = e.autoEnroll), !0;
}
!(function () {
    (o = new Set()), (l = !1);
})();
class d extends r.Ay.PersistedStore {
    static displayName = "UnenrolledActivityQuestStore";
    static persistKey = "UnenrolledActivityQuestStore";
    initialize(e) {
        (o = new Set(e?.dismissedQuestIds ?? [])), (l = e?.autoEnroll ?? !1);
    }
    getState() {
        return { dismissedQuestIds: [...o], autoEnroll: l };
    }
    isDismissed(e) {
        return null != e && o.has(e);
    }
    getDismissedQuestIds() {
        return o;
    }
}
let _ = new d(i.h, { UNENROLLED_ACTIVITY_QUEST_DISMISS: u, UNENROLLED_ACTIVITY_QUEST_AUTO_ENROLL: c });
