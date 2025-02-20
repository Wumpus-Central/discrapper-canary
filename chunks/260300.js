n.d(t, { Z: () => o });
var r = n(544891),
    i = n(570140),
    l = n(981631);
let o = {
    show(e, t) {
        i.Z.wait(() =>
            i.Z.dispatch({
                type: 'TUTORIAL_INDICATOR_SHOW',
                tutorialId: e,
                renderData: t
            })
        );
    },
    hide(e) {
        i.Z.wait(() =>
            i.Z.dispatch({
                type: 'TUTORIAL_INDICATOR_HIDE',
                tutorialId: e
            })
        );
    },
    dismiss(e) {
        i.Z.wait(() =>
            i.Z.dispatch({
                type: 'TUTORIAL_INDICATOR_DISMISS',
                tutorialId: e
            })
        ),
            r.tn.put({
                url: l.ANM.TUTORIAL_INDICATOR(e),
                oldFormErrors: !0,
                rejectWithError: !0
            });
    },
    suppressAll() {
        i.Z.dispatch({ type: 'TUTORIAL_INDICATOR_SUPPRESS_ALL' }),
            r.tn.post({
                url: l.ANM.TUTORIAL_INDICATORS_SUPPRESS,
                oldFormErrors: !0,
                rejectWithError: !0
            });
    }
};
