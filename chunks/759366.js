"use strict";
n.d(t, { A: () => u });
var r = n(311907),
    i = n(73153),
    s = n(661191);
let a = new Set(),
    o = !1;
(a = new Set()), (o = !1);
class l extends r.Ay.PersistedStore {
    static displayName = "UnenrolledActivityQuestStore";
    static persistKey = "UnenrolledActivityQuestStore";
    initialize(e) {
        (a = new Set(e?.dismissedQuestIds ?? [])), (o = e?.autoEnroll ?? !1);
    }
    getState() {
        return { dismissedQuestIds: [...a], autoEnroll: o };
    }
    isDismissed(e) {
        return null != e && a.has(e);
    }
    getDismissedQuestIds() {
        return a;
    }
}
let u = new l(i.h, {
    UNENROLLED_ACTIVITY_QUEST_DISMISS: function (e) {
        return (
            a.size >= 20 &&
                (a = new Set(
                    a
                        .values()
                        .toArray()
                        .sort(s.default.compare)
                        .slice(Math.floor(10))
                        .map((e) => e.toString()),
                )),
            a.add(e.questId),
            !0
        );
    },
    UNENROLLED_ACTIVITY_QUEST_AUTO_ENROLL: function (e) {
        return (o = e.autoEnroll), !0;
    },
});
