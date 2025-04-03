n.d(t, { Z: () => o });
var i = n(544891),
    r = n(570140),
    l = n(981631);
let o = {
    async fetch() {
        try {
            let e = await i.tn.get({
                url: l.ANM.FRIEND_SUGGESTIONS,
                rejectWithError: !0
            });
            r.Z.dispatch({
                type: 'LOAD_FRIEND_SUGGESTIONS_SUCCESS',
                suggestions: e.body
            });
        } catch (e) {
            r.Z.dispatch({ type: 'LOAD_FRIEND_SUGGESTIONS_FAILURE' });
        }
    },
    ignore(e) {
        i.tn.del({
            url: l.ANM.FRIEND_SUGGESTION(e),
            rejectWithError: !0
        });
    }
};
