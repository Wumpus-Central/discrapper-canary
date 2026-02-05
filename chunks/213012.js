i.d(t, { I: () => r });
var n = i(562465),
    a = i(73153),
    l = i(652215);
let r = () =>
    n.Bo.get({ url: l.Rsh.GUILD_AFFINITIES, oldFormErrors: !0, rejectWithError: !1 }).then(
        (e) => {
            let {
                body: { guild_affinities: t },
            } = e;
            a.h.dispatch({ type: "LOAD_GUILD_AFFINITIES_SUCCESS", guildAffinities: t });
        },
        () => {
            a.h.dispatch({ type: "LOAD_GUILD_AFFINITIES_FAILURE" });
        },
    );
