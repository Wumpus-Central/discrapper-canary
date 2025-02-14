n.d(t, { j: () => l });
var i = n(544891),
    s = n(570140),
    r = n(981631);
let l = () =>
    i.tn
        .get({
            url: r.ANM.GUILD_AFFINITIES,
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then(
            (e) => {
                let {
                    body: { guild_affinities: t }
                } = e;
                s.Z.dispatch({
                    type: 'LOAD_GUILD_AFFINITIES_SUCCESS',
                    guildAffinities: t
                });
            },
            () => {
                s.Z.dispatch({ type: 'LOAD_GUILD_AFFINITIES_FAILURE' });
            }
        );
