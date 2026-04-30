n.d(t, { A: () => r });
var l = n(636537),
    i = n(228366),
    s = n(652215);
let r = {
    async fetch() {
        try {
            let e = await l.Bo.get({ url: s.Rsh.FRIEND_SUGGESTIONS, rejectWithError: !0 });
            i.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: e.body });
        } catch (e) {
            i.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_FAILURE" });
        }
    },
    ignore(e) {
        l.Bo.del({ url: s.Rsh.FRIEND_SUGGESTION(e), rejectWithError: !0 });
    },
};
