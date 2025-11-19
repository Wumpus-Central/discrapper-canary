n.d(t, { Z: () => s });
var r = n(544891),
    i = n(570140),
    l = n(981631);
let s = {
    async fetch() {
        try {
            let e = await r.tn.get({
                url: l.ANM.FRIEND_SUGGESTIONS,
                rejectWithError: !0,
            });
            i.Z.dispatch({
                type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS",
                suggestions: e.body,
            });
        } catch (e) {
            i.Z.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_FAILURE" });
        }
    },
    ignore(e) {
        r.tn.del({
            url: l.ANM.FRIEND_SUGGESTION(e),
            rejectWithError: !0,
        });
    },
};
