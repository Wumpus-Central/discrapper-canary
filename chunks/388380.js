n.d(t, { Z: () => a });
var i = n(544891),
    l = n(570140),
    r = n(981631);
let a = {
    async fetch() {
        try {
            let e = await i.tn.get({
                url: r.ANM.FRIEND_SUGGESTIONS,
                rejectWithError: !0
            });
            l.Z.dispatch({
                type: 'LOAD_FRIEND_SUGGESTIONS_SUCCESS',
                suggestions: e.body
            });
        } catch (e) {
            l.Z.dispatch({ type: 'LOAD_FRIEND_SUGGESTIONS_FAILURE' });
        }
    },
    ignore(e) {
        i.tn.del({
            url: r.ANM.FRIEND_SUGGESTION(e),
            rejectWithError: !0
        });
    }
};
