n.d(t, {
    A: () => a,
    h: () => o
});
var i = n(544891),
    s = n(570140),
    r = n(809206),
    l = n(981631);
function a() {
    return (
        s.Z.dispatch({ type: 'LOAD_DATA_HARVEST_TYPE_START' }),
        i.tn
            .get({
                url: l.ANM.USER_HARVEST,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                s.Z.dispatch({
                    type: 'UPDATE_DATA_HARVEST_TYPE',
                    harvestType: e.body
                });
            })
            .catch((e) => {
                s.Z.dispatch({
                    type: 'LOAD_DATA_HARVEST_TYPE_FAILURE',
                    error: e
                });
            })
    );
}
function o(e) {
    return (0, r.V3)(e).then(
        (e) => (
            null != e &&
                null != e.body &&
                s.Z.dispatch({
                    type: 'UPDATE_DATA_HARVEST_TYPE',
                    harvestType: e.body
                }),
            e
        )
    );
}
