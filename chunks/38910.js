"use strict";
n.d(t, { A: () => l });
var r = n(636537),
    i = n(228366),
    a = n(652215);
let l = {
    async fetch() {
        try {
            let e = await r.Bo.get({ url: a.Rsh.FRIEND_SUGGESTIONS, rejectWithError: !0 });
            i.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: e.body });
        } catch (e) {
            i.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_FAILURE" });
        }
    },
    ignore(e) {
        r.Bo.del({ url: a.Rsh.FRIEND_SUGGESTION(e), rejectWithError: !0 });
    },
};
