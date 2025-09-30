t.d(e, { Z: () => m });
var n = t(951288),
    r = t(647438),
    s = t(793030),
    l = t(442837),
    a = t(565138),
    d = t(430824),
    c = t(5888),
    o = t(198358),
    x = t(509950),
    u = t(388032);
function m() {
    let {
            guilds: { guilds: i, numGuildsJoined: e },
        } = (0, l.e7)([c.Z], () => c.Z.getCheckpointData()),
        t = (0, r.useMemo)(
            () =>
                i
                    .map((i) => {
                        let { guildId: e } = i;
                        return d.Z.getGuild(e);
                    })
                    .filter((i) => null != i),
            [i],
        );
    return (0, n.jsxs)(o.Z, {
        children: [
            (0, n.jsx)(s.xvT, {
                variant: "display-sm",
                color: "text-primary",
                children: u.intl.format(x.default.mAroeH, {
                    joinedCount: e,
                    guildCount: t.length,
                }),
            }),
            t.map((e, t) =>
                (0, n.jsxs)(
                    "div",
                    {
                        children: [
                            (0, n.jsx)(a.Z, {
                                guild: e,
                                size: a.Z.Sizes.XLARGE,
                            }),
                            (0, n.jsx)(s.xvT, {
                                variant: "display-md",
                                color: "text-primary",
                                children: e.name,
                            }),
                            0 === t &&
                                (0, n.jsxs)("div", {
                                    children: [
                                        (0, n.jsx)(s.xvT, {
                                            variant: "display-md",
                                            color: "text-primary",
                                            children: i[0].numMessagesSent,
                                        }),
                                        (0, n.jsx)(s.xvT, {
                                            variant: "display-sm",
                                            color: "text-primary",
                                            children: u.intl.string(x.default.nPTMHh),
                                        }),
                                        (0, n.jsx)(s.xvT, {
                                            variant: "display-md",
                                            color: "text-primary",
                                            children: i[0].numMinutesListening + i[0].numMinutesSpeaking,
                                        }),
                                        (0, n.jsx)(s.xvT, {
                                            variant: "display-sm",
                                            color: "text-primary",
                                            children: u.intl.string(x.default["3NjdFR"]),
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
