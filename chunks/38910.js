var i = n(620632),
    r = n(73153),
    a = n(652215);
n.d(
    t,
    {},
    {
        A: {
            async fetch() {
                try {
                    let e = await i.Bo.get({ url: a.Rsh.FRIEND_SUGGESTIONS, rejectWithError: !0 });
                    r.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: e.body });
                } catch (e) {
                    r.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_FAILURE" });
                }
            },
            ignore(e) {
                i.Bo.del({ url: a.Rsh.FRIEND_SUGGESTION(e), rejectWithError: !0 });
            },
        },
    },
);
