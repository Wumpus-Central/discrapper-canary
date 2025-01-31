n.d(t, { Z: () => r });
var i = n(544891),
    l = n(570140),
    a = n(981631);
let r = {
    show(e, t) {
        l.Z.wait(() =>
            l.Z.dispatch({
                type: 'TUTORIAL_INDICATOR_SHOW',
                tutorialId: e,
                renderData: t
            })
        );
    },
    hide(e) {
        l.Z.wait(() =>
            l.Z.dispatch({
                type: 'TUTORIAL_INDICATOR_HIDE',
                tutorialId: e
            })
        );
    },
    dismiss(e) {
        l.Z.wait(() =>
            l.Z.dispatch({
                type: 'TUTORIAL_INDICATOR_DISMISS',
                tutorialId: e
            })
        ),
            i.tn.put({
                url: a.ANM.TUTORIAL_INDICATOR(e),
                oldFormErrors: !0,
                rejectWithError: !0
            });
    },
    suppressAll() {
        l.Z.dispatch({ type: 'TUTORIAL_INDICATOR_SUPPRESS_ALL' }),
            i.tn.post({
                url: a.ANM.TUTORIAL_INDICATORS_SUPPRESS,
                oldFormErrors: !0,
                rejectWithError: !0
            });
    }
};
