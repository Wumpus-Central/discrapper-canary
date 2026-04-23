n.d(t, { A: () => r });
var i = n(311907),
    s = n(73153);
let l = {};
class a extends i.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return l[e] ?? !1;
    }
}
let r = new a(s.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        l[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        l[t] = !1;
    },
});
