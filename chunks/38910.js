i.d(t, { A: () => s });
var l = i(636537),
    a = i(228366),
    n = i(652215);
let s = {
    async fetch() {
        try {
            let e = await l.Bo.get({ url: n.Rsh.FRIEND_SUGGESTIONS, rejectWithError: !0 });
            a.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: e.body });
        } catch (e) {
            a.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_FAILURE" });
        }
    },
    ignore(e) {
        l.Bo.del({ url: n.Rsh.FRIEND_SUGGESTION(e), rejectWithError: !0 });
    },
};
