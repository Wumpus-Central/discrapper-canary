var c = e(613412),
    r = e(620632),
    i = e(73153),
    s = e(499785),
    h = e(716357),
    n = e(513446),
    _ = e(652215);
let o = 0;
e.d(
    a,
    {},
    {
        W: async function (t, a) {
            let { body: e } = await r.Bo.patch({ url: _.Rsh.GUILD_SPACE_SETTINGS(t), body: a, rejectWithError: !0 });
            return e;
        },
        u: async function (t, a) {
            let { shouldRefetch: e = !1 } = a,
                p = h.A.getFetchStatus(t),
                E = h.A.isInBackoff(t);
            "loading" === p ||
                E ||
                (("idle" === p || e) &&
                    (await (async function (t) {
                        let a = o++;
                        i.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: t, requestId: a });
                        try {
                            let { body: e } = await s.A.get({
                                url: _.Rsh.GUILD_SPACE(t),
                                trackedActionData: { event: c.NetworkActionNames.GUILD_SPACE_FETCH },
                                rejectWithError: !0,
                            });
                            i.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: t, requestId: a, space: e });
                        } catch (e) {
                            if (e instanceof r.oh && 404 === e.status)
                                return void i.h.dispatch({
                                    type: "GUILD_SPACE_FETCH_NOT_FOUND",
                                    guildId: t,
                                    requestId: a,
                                });
                            i.h.dispatch({
                                type: "GUILD_SPACE_FETCH_FAILURE",
                                guildId: t,
                                requestId: a,
                                retryable: (0, n.a)(e),
                            });
                        }
                    })(t)));
        },
    },
);
