n.d(t, { A: () => d });
var i = n(179771),
    r = n(260509),
    a = n(71393),
    l = n(636401),
    s = n(629471),
    o = n(652215);
let d = {
    [o.e$_.GET_GUILD]: {
        scope: i.F.RPC,
        validation: (e) =>
            (0, s.A)(e)
                .required()
                .keys({ guild_id: e.string(), timeout: e.number().min(0).max(60) }),
        handler(e) {
            let {
                socket: t,
                server: n,
                args: { guild_id: i, timeout: s = 0 },
            } = e;
            return n
                .storeWait(t, () => a.A.getGuild(i), s)
                .catch(() => {
                    throw new l.A({ errorCode: o.Lw6.GET_GUILD_TIMED_OUT }, "Request to get guild timed out.");
                })
                .then((e) => {
                    if (null == e) throw new l.A({ errorCode: o.Lw6.INVALID_GUILD }, `Invalid guild id: ${i}`);
                    return {
                        id: e.id,
                        name: e.name,
                        icon_url: (0, r.Iv)(e, 128) ?? null,
                        members: [],
                        vanity_url_code: e.vanityURLCode,
                    };
                });
        },
    },
    [o.e$_.GET_GUILDS]: {
        scope: i.F.RPC,
        handler: () => ({
            guilds: a.A.getGuildsArray().map((e) => ({ id: e.id, name: e.name, icon_url: (0, r.Iv)(e, 128) ?? null })),
        }),
    },
};
