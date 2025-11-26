i.d(e, { Z: () => x });
var n = i(54381),
    r = i(793030),
    l = i(442837),
    a = i(565138),
    s = i(430824),
    d = i(5888),
    c = i(198358),
    o = i(140939),
    u = i(388032);
function x() {
    let {
            guilds: { guilds: t, numGuildsJoined: e } = {
                guilds: [],
                numGuildsJoined: 0,
            },
        } = (0, l.e7)([d.Z], () => d.Z.getCheckpointData()),
        i = t
            .map((t) => {
                let { guild: e } = t;
                return s.Z.getGuild(e.id);
            })
            .filter((t) => null != t);
    return (0, n.jsxs)(c.Z, {
        children: [
            (0, n.jsx)(r.xvT, {
                variant: "display-sm",
                color: "text-primary",
                children: u.intl.format(o.default.mAroeJ, {
                    joinedCount: e,
                    guildCount: i.length,
                }),
            }),
            i.map((e, i) =>
                (0, n.jsxs)(
                    "div",
                    {
                        children: [
                            (0, n.jsx)(a.Z, {
                                guild: e,
                                size: a.Z.Sizes.XLARGE,
                            }),
                            (0, n.jsx)(r.xvT, {
                                variant: "display-md",
                                color: "text-primary",
                                children: e.name,
                            }),
                            0 === i &&
                                (0, n.jsxs)("div", {
                                    children: [
                                        (0, n.jsx)(r.xvT, {
                                            variant: "display-md",
                                            color: "text-primary",
                                            children: t[0].numMessagesSent,
                                        }),
                                        (0, n.jsx)(r.xvT, {
                                            variant: "display-sm",
                                            color: "text-primary",
                                            children: u.intl.string(o.default.wWKySP),
                                        }),
                                        (0, n.jsx)(r.xvT, {
                                            variant: "display-md",
                                            color: "text-primary",
                                            children: t[0].numVoiceMinutes,
                                        }),
                                        (0, n.jsx)(r.xvT, {
                                            variant: "display-sm",
                                            color: "text-primary",
                                            children: u.intl.string(o.default.lXT6ns),
                                        }),
                                    ],
                                }),
                        ],
                    },
                    e.id,
                ),
            ),
        ],
    });
}
