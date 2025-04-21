n.d(t, {
    A: () => a,
    h: () => o
});
var i = n(544891),
    r = n(570140),
    s = n(809206),
    l = n(981631);
function a() {
    return (
        r.Z.dispatch({ type: 'LOAD_DATA_HARVEST_TYPE_START' }),
        i.tn
            .get({
                url: l.ANM.USER_HARVEST,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                r.Z.dispatch({
                    type: 'UPDATE_DATA_HARVEST_TYPE',
                    harvestType: e.body
                });
            })
            .catch((e) => {
                r.Z.dispatch({
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
                r.Z.dispatch({
                    type: 'UPDATE_DATA_HARVEST_TYPE',
                    harvestType: e.body
                }),
            e
        )
    );
}
