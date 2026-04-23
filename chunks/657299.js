n.d(t, { A: () => s });
var i = n(73153),
    l = n(954571),
    a = n(652215);
let s = {
    dismissForApplicationId(e) {
        i.h.dispatch({ type: "ACTIVITY_INVITE_EDUCATION_DISMISS", key: e, value: !0 }),
            l.default.track(a.HAw.CLOSE_TUTORIAL, {
                tutorial: "activity-invite-nux-inline",
                application_id: e,
                acknowledged: !0,
            });
    },
};
