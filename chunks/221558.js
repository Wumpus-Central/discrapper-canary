n.d(t, { Z: () => m });
var i = n(54381),
    s = n(793030),
    r = n(442837),
    l = n(565138),
    o = n(430824),
    a = n(5888),
    c = n(198358),
    u = n(140939),
    d = n(388032);
function m() {
    let {
            guilds: { guilds: e, numGuildsJoined: t } = {
                guilds: [],
                numGuildsJoined: 0,
            },
        } = (0, r.e7)([a.Z], () => a.Z.getCheckpointData()),
        n = e
            .map((e) => {
                let { guild: t } = e;
                return o.Z.getGuild(t.id);
            })
            .filter((e) => null != e);
    return (0, i.jsxs)(c.Z, {
        children: [
            (0, i.jsx)(s.xvT, {
                variant: "display-sm",
                color: "text-strong",
                children: d.intl.format(u.default.mAroeJ, {
                    joinedCount: t,
                    guildCount: n.length,
                }),
            }),
            n.map((t, n) =>
                (0, i.jsxs)(
                    "div",
                    {
                        children: [
                            (0, i.jsx)(l.Z, {
                                guild: t,
                                size: l.Z.Sizes.XLARGE,
                            }),
                            (0, i.jsx)(s.xvT, {
                                variant: "display-md",
                                color: "text-strong",
                                children: t.name,
                            }),
                            0 === n &&
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(s.xvT, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            children: e[0].numMessagesSent,
                                        }),
                                        (0, i.jsx)(s.xvT, {
                                            variant: "display-sm",
                                            color: "text-strong",
                                            children: d.intl.string(u.default.wWKySP),
                                        }),
                                        (0, i.jsx)(s.xvT, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            children: e[0].numVoiceMinutes,
                                        }),
                                        (0, i.jsx)(s.xvT, {
                                            variant: "display-sm",
                                            color: "text-strong",
                                            children: d.intl.string(u.default.lXT6ns),
                                        }),
                                    ],
                                }),
                        ],
                    },
                    t.id,
                ),
            ),
        ],
    });
}
