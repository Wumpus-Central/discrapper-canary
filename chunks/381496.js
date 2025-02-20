n.d(t, { j: () => a });
var r = n(544891),
    i = n(570140),
    s = n(981631);
let a = () =>
    r.tn
        .get({
            url: s.ANM.GUILD_AFFINITIES,
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then(
            (e) => {
                let {
                    body: { guild_affinities: t }
                } = e;
                i.Z.dispatch({
                    type: 'LOAD_GUILD_AFFINITIES_SUCCESS',
                    guildAffinities: t
                });
            },
            () => {
                i.Z.dispatch({ type: 'LOAD_GUILD_AFFINITIES_FAILURE' });
            }
        );
