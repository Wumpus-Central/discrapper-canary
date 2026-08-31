l.d(t, { A: () => r });
var n = l(636537),
    i = l(228366),
    a = l(652215);
let r = {
    async fetch() {
        try {
            let e = await n.Bo.get({ url: a.Rsh.FRIEND_SUGGESTIONS, rejectWithError: !0 });
            i.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: e.body });
        } catch (e) {
            i.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_FAILURE" });
        }
    },
    ignore(e) {
        n.Bo.del({ url: a.Rsh.FRIEND_SUGGESTION(e), rejectWithError: !0 });
    },
};
