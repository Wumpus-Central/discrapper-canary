n.d(t, {
    A: function () {
        return l;
    },
    h: function () {
        return o;
    }
});
var i = n(544891),
    r = n(570140),
    s = n(809206),
    a = n(981631);
function l() {
    return (
        r.Z.dispatch({ type: 'LOAD_DATA_HARVEST_TYPE_START' }),
        i.tn
            .get({
                url: a.ANM.USER_HARVEST,
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
