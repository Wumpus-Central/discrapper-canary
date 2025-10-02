r.d(i, { Z: () => p });
var e = r(951288),
    n = r(647438),
    a = r(793030),
    s = r(442837),
    l = r(565138),
    d = r(430824),
    c = r(5888),
    o = r(198358),
    x = r(509950),
    u = r(388032);
function p() {
    let {
            guilds: { guilds: t, numGuildsJoined: i },
        } = (0, s.e7)([c.Z], () => c.Z.getCheckpointData()),
        r = (0, n.useMemo)(
            () =>
                t
                    .map((t) => {
                        let { guildId: i } = t;
                        return d.Z.getGuild(i);
                    })
                    .filter((t) => null != t),
            [t],
        );
    return (0, e.jsxs)(o.Z, {
        children: [
            (0, e.jsx)(a.xvT, {
                variant: "display-sm",
                color: "text-primary",
                children: u.intl.format(x.default.mAroeH, {
                    joinedCount: i,
                    guildCount: r.length,
                }),
            }),
            r.map((i, r) =>
                (0, e.jsxs)(
                    "div",
                    {
                        children: [
                            (0, e.jsx)(l.Z, {
                                guild: i,
                                size: l.Z.Sizes.XLARGE,
                            }),
                            (0, e.jsx)(a.xvT, {
                                variant: "display-md",
                                color: "text-primary",
                                children: i.name,
                            }),
                            0 === r &&
                                (0, e.jsxs)("div", {
                                    children: [
                                        (0, e.jsx)(a.xvT, {
                                            variant: "display-md",
                                            color: "text-primary",
                                            children: t[0].numMessagesSent,
                                        }),
                                        (0, e.jsx)(a.xvT, {
                                            variant: "display-sm",
                                            color: "text-primary",
                                            children: u.intl.string(x.default.wWKySE),
                                        }),
                                        (0, e.jsx)(a.xvT, {
                                            variant: "display-md",
                                            color: "text-primary",
                                            children: t[0].numMinutesListening + t[0].numMinutesSpeaking,
                                        }),
                                        (0, e.jsx)(a.xvT, {
                                            variant: "display-sm",
                                            color: "text-primary",
                                            children: u.intl.string(x.default.lXT6np),
                                        }),
                                    ],
                                }),
                        ],
                    },
                    i.id,
                ),
            ),
        ],
    });
}
