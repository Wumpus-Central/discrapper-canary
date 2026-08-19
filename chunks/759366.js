"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366),
    a = n(935208);
let s = new Set(),
    l = !1;
(s = new Set()), (l = !1);
class o extends i.Ay.PersistedStore {
    static displayName = "UnenrolledActivityQuestStore";
    static persistKey = "UnenrolledActivityQuestStore";
    initialize(e) {
        (s = new Set(e?.dismissedQuestIds ?? [])), (l = e?.autoEnroll ?? !1);
    }
    getState() {
        return { dismissedQuestIds: [...s], autoEnroll: l };
    }
    isDismissed(e) {
        return null != e && s.has(e);
    }
    getDismissedQuestIds() {
        return s;
    }
}
let d = new o(r.h, {
    UNENROLLED_ACTIVITY_QUEST_DISMISS: function (e) {
        return (
            s.size >= 20 &&
                (s = new Set(
                    Array.from(s)
                        .sort(a.default.compare)
                        .slice(Math.floor(10))
                        .map((e) => e.toString()),
                )),
            s.add(e.questId),
            !0
        );
    },
    UNENROLLED_ACTIVITY_QUEST_AUTO_ENROLL: function (e) {
        return (l = e.autoEnroll), !0;
    },
});
