n.d(t, {
    A: function () {
        return l;
    },
    h: function () {
        return o;
    }
});
var i = n(544891),
    s = n(570140),
    r = n(809206),
    a = n(981631);
function l() {
    return (
        s.Z.dispatch({ type: 'LOAD_DATA_HARVEST_TYPE_START' }),
        i.tn
            .get({
                url: a.ANM.USER_HARVEST,
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
