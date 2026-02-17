n.d(t, { A: () => a });
var i = n(562465),
    r = n(73153),
    l = n(652215);
let a = {
    fetch() {
        r.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH" }),
            i.Bo.get({ url: l.Rsh.UNCLAIMED_GAMES, oldFormErrors: !0, rejectWithError: !1 }).then(
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
