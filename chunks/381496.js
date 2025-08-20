n.d(t, { j: () => o });
var r = n(544891),
    i = n(570140),
    a = n(981631);
let o = () =>
    r.tn
        .get({
            url: a.ANM.GUILD_AFFINITIES,
            oldFormErrors: !0,
            rejectWithError: !1,
        })
        .then(
            (e) => {
                let {
                    body: { guild_affinities: t },
                } = e;
                i.Z.dispatch({
                    type: "LOAD_GUILD_AFFINITIES_SUCCESS",
                    guildAffinities: t,
                });
            },
            () => {
                i.Z.dispatch({ type: "LOAD_GUILD_AFFINITIES_FAILURE" });
            },
        );
