n.d(t, {
    A: () => l,
});
var i = n(73153),
    s = n(954571),
    r = n(652215);
let l = {
    dismissForApplicationId(e) {
        i.h.dispatch({
            type: "ACTIVITY_INVITE_EDUCATION_DISMISS",
            key: e,
            value: !0,
        }),
            s.default.track(r.HAw.CLOSE_TUTORIAL, {
                tutorial: "activity-invite-nux-inline",
                application_id: e,
                acknowledged: !0,
            });
    },
};
