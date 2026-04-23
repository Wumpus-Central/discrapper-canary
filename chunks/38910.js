n.d(t, { A: () => l });
var i = n(562465),
    r = n(73153),
    s = n(652215);
let l = {
    async fetch() {
        try {
            let e = await i.Bo.get({ url: s.Rsh.FRIEND_SUGGESTIONS, rejectWithError: !0 });
            r.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: e.body });
        } catch (e) {
            r.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_FAILURE" });
        }
    },
    ignore(e) {
        i.Bo.del({ url: s.Rsh.FRIEND_SUGGESTION(e), rejectWithError: !0 });
    },
};
