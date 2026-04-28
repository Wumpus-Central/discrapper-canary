n.d(t, { A: () => u });
var r = n(636537),
    a = n(228366),
    l = n(652215);
let u = {
    async fetch() {
        try {
            let e = await r.Bo.get({ url: l.Rsh.FRIEND_SUGGESTIONS, rejectWithError: !0 });
            a.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: e.body });
        } catch (e) {
            a.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_FAILURE" });
        }
    },
    ignore(e) {
        r.Bo.del({ url: l.Rsh.FRIEND_SUGGESTION(e), rejectWithError: !0 });
    },
};
