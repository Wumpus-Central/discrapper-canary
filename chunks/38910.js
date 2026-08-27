n.d(t, { A: () => s });
var i = n(636537),
    l = n(228366),
    r = n(652215);
let s = {
    async fetch() {
        try {
            let e = await i.Bo.get({ url: r.Rsh.FRIEND_SUGGESTIONS, rejectWithError: !0 });
            l.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: e.body });
        } catch (e) {
            l.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_FAILURE" });
        }
    },
    ignore(e) {
        i.Bo.del({ url: r.Rsh.FRIEND_SUGGESTION(e), rejectWithError: !0 });
    },
};
