n.d(t, { I: () => s });
var i = n(562465),
    l = n(73153),
    a = n(652215);
let s = () =>
    i.Bo.get({ url: a.Rsh.GUILD_AFFINITIES, oldFormErrors: !0, rejectWithError: !1 }).then(
        (e) => {
            let {
                body: { guild_affinities: t },
            } = e;
            l.h.dispatch({ type: "LOAD_GUILD_AFFINITIES_SUCCESS", guildAffinities: t });
        },
        () => {
            l.h.dispatch({ type: "LOAD_GUILD_AFFINITIES_FAILURE" });
        },
    );
