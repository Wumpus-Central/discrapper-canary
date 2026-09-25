l.d(t, { A: () => s });
var i = l(636537),
    a = l(228366),
    n = l(652215);
let s = {
    async fetch() {
        try {
            let e = await i.Bo.get({ url: n.Rsh.FRIEND_SUGGESTIONS, rejectWithError: !0 });
            a.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: e.body });
        } catch (e) {
            a.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_FAILURE" });
        }
    },
    ignore(e) {
        i.Bo.del({ url: n.Rsh.FRIEND_SUGGESTION(e), rejectWithError: !0 });
    },
};
