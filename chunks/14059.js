n.d(t, { A: () => r });
var a = n(311907),
    i = n(73153);
let s = {};
class l extends a.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return s[e] ?? !1;
    }
}
let r = new l(i.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        s[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        s[t] = !1;
    },
});
