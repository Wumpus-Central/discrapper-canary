var n = i(620632),
    r = i(73153),
    a = i(652215);
i.d(
    t,
    {},
    {
        A: {
            async fetch() {
                try {
                    let e = await n.Bo.get({ url: a.Rsh.FRIEND_SUGGESTIONS, rejectWithError: !0 });
                    r.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: e.body });
                } catch (e) {
                    r.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_FAILURE" });
                }
            },
            ignore(e) {
                n.Bo.del({ url: a.Rsh.FRIEND_SUGGESTION(e), rejectWithError: !0 });
            },
        },
    },
);
