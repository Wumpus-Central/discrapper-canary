n.d(t, { Z: () => a });
var i = n(544891),
    r = n(570140),
    l = n(981631);
let a = {
    show(e, t) {
        r.Z.wait(() =>
            r.Z.dispatch({
                type: "TUTORIAL_INDICATOR_SHOW",
                tutorialId: e,
                renderData: t,
            }),
        );
    },
    hide(e) {
        r.Z.wait(() =>
            r.Z.dispatch({
                type: "TUTORIAL_INDICATOR_HIDE",
                tutorialId: e,
            }),
        );
    },
    dismiss(e) {
        r.Z.wait(() =>
            r.Z.dispatch({
                type: "TUTORIAL_INDICATOR_DISMISS",
                tutorialId: e,
            }),
        ),
            i.tn.put({
                url: l.ANM.TUTORIAL_INDICATOR(e),
                oldFormErrors: !0,
                rejectWithError: !0,
            });
    },
    suppressAll() {
        r.Z.dispatch({ type: "TUTORIAL_INDICATOR_SUPPRESS_ALL" }),
            i.tn.post({
                url: l.ANM.TUTORIAL_INDICATORS_SUPPRESS,
                oldFormErrors: !0,
                rejectWithError: !0,
            });
    },
};
