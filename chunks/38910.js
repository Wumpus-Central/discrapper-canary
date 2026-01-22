n.d(t, {
    A: () => s,
});
var r = n(562465),
    i = n(73153),
    l = n(652215);
let s = {
    async fetch() {
        try {
            let e = await r.Bo.get({
                url: l.Rsh.FRIEND_SUGGESTIONS,
                rejectWithError: !0,
            });
            i.h.dispatch({
                type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS",
                suggestions: e.body,
            });
        } catch (e) {
            i.h.dispatch({
                type: "LOAD_FRIEND_SUGGESTIONS_FAILURE",
            });
        }
    },
    ignore(e) {
        r.Bo.del({
            url: l.Rsh.FRIEND_SUGGESTION(e),
            rejectWithError: !0,
        });
    },
};
