n.d(t, { A: () => r });
var i = n(636537),
    l = n(228366),
    s = n(652215);
let r = {
    async fetch() {
        try {
            let e = await i.Bo.get({ url: s.Rsh.FRIEND_SUGGESTIONS, rejectWithError: !0 });
            l.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: e.body });
        } catch (e) {
            l.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_FAILURE" });
        }
    },
    ignore(e) {
        i.Bo.del({ url: s.Rsh.FRIEND_SUGGESTION(e), rejectWithError: !0 });
    },
};
