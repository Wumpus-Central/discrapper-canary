n.d(t, {
    A: () => s,
    h: () => l,
});
var r = n(544891),
    i = n(570140),
    a = n(809206),
    o = n(981631);
function s() {
    return (
        i.Z.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
        r.tn
            .get({
                url: o.ANM.USER_HARVEST,
                oldFormErrors: !0,
                rejectWithError: !1,
            })
            .then((e) => {
                i.Z.dispatch({
                    type: "UPDATE_DATA_HARVEST_TYPE",
                    harvestType: e.body,
                });
            })
            .catch((e) => {
                i.Z.dispatch({
                    type: "LOAD_DATA_HARVEST_TYPE_FAILURE",
                    error: e,
                });
            })
    );
}
function l(e) {
    return (0, a.V3)(e).then(
        (e) => (
            null != e &&
                null != e.body &&
                i.Z.dispatch({
                    type: "UPDATE_DATA_HARVEST_TYPE",
                    harvestType: e.body,
                }),
            e
        ),
    );
}
