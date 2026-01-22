n.d(t, {
    A: () => c,
}),
    n(896048);
var r = n(179771),
    i = n(260509),
    l = n(71393),
    a = n(636401),
    s = n(629471),
    o = n(652215);
let c = {
    [o.e$_.GET_GUILD]: {
        scope: r.F.RPC,
        validation: (e) =>
            (0, s.A)(e)
                .required()
                .keys({
                    guild_id: e.string(),
                    timeout: e.number().min(0).max(60),
                }),
        handler(e) {
            let {
                socket: t,
                server: n,
                args: { guild_id: r, timeout: s = 0 },
            } = e;
            return n
                .storeWait(t, () => l.A.getGuild(r), s)
                .catch(() => {
                    throw new a.A(
                        {
                            errorCode: o.Lw6.GET_GUILD_TIMED_OUT,
                        },
                        "Request to get guild timed out.",
                    );
                })
                .then((e) => {
                    var t;
                    if (null == e)
                        throw new a.A(
                            {
                                errorCode: o.Lw6.INVALID_GUILD,
                            },
                            "Invalid guild id: ".concat(r),
                        );
                    return {
                        id: e.id,
                        name: e.name,
                        icon_url: null != (t = (0, i.Iv)(e, 128)) ? t : null,
                        members: [],
                        vanity_url_code: e.vanityURLCode,
                    };
                });
        },
    },
    [o.e$_.GET_GUILDS]: {
        scope: r.F.RPC,
        handler: () => ({
            guilds: l.A.getGuildsArray().map((e) => {
                var t;
                return {
                    id: e.id,
                    name: e.name,
                    icon_url: null != (t = (0, i.Iv)(e, 128)) ? t : null,
                };
            }),
        }),
    },
};
