n.d(t, {
    A: () => l,
    h: () => o
});
var r = n(544891),
    i = n(570140),
    s = n(809206),
    a = n(981631);
function l() {
    return (
        i.Z.dispatch({ type: 'LOAD_DATA_HARVEST_TYPE_START' }),
        r.tn
            .get({
                url: a.ANM.USER_HARVEST,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                i.Z.dispatch({
                    type: 'UPDATE_DATA_HARVEST_TYPE',
                    harvestType: e.body
                });
            })
            .catch((e) => {
                i.Z.dispatch({
                    type: 'LOAD_DATA_HARVEST_TYPE_FAILURE',
                    error: e
                });
            })
    );
}
function o(e) {
    return (0, s.V3)(e).then(
        (e) => (
            null != e &&
                null != e.body &&
                i.Z.dispatch({
                    type: 'UPDATE_DATA_HARVEST_TYPE',
                    harvestType: e.body
                }),
            e
        )
    );
}
