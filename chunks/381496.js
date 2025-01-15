n.d(t, {
    j: function () {
        return a;
    }
});
var i = n(544891),
    r = n(570140),
    s = n(981631);
let a = () =>
    i.tn
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
                r.Z.dispatch({
                    type: 'LOAD_GUILD_AFFINITIES_SUCCESS',
                    guildAffinities: t
                });
            },
            () => {
                r.Z.dispatch({ type: 'LOAD_GUILD_AFFINITIES_FAILURE' });
            }
        );
