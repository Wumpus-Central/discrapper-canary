n.d(t, { A: () => l });
var i = n(562465),
    r = n(73153),
    a = n(652215);
let l = {
    fetch() {
        r.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH" }),
            i.Bo.get({ url: a.Rsh.UNCLAIMED_GAMES, oldFormErrors: !0, rejectWithError: !1 }).then(
                (e) => {
                    let { body: t } = e;
                    r.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH_SUCCESS", guildIdToGameIds: t });
                },
                () => {
                    r.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH_FAIL" });
                },
            );
    },
};
