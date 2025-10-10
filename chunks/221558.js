r.d(t, { Z: () => p });
var e = r(951288),
    n = r(647438),
    a = r(793030),
    s = r(442837),
    l = r(565138),
    d = r(430824),
    c = r(5888),
    o = r(198358),
    x = r(484718),
    u = r(388032);
function p() {
    let {
            guilds: { guilds: i, numGuildsJoined: t },
        } = (0, s.e7)([c.Z], () => c.Z.getCheckpointData()),
        r = (0, n.useMemo)(
            () =>
                i
                    .map((i) => {
                        let { guildId: t } = i;
                        return d.Z.getGuild(t);
                    })
                    .filter((i) => null != i),
            [i],
        );
    return (0, e.jsxs)(o.Z, {
        children: [
            (0, e.jsx)(a.xvT, {
                variant: "display-sm",
                color: "text-primary",
                children: u.intl.format(x.default.mAroeH, {
                    joinedCount: t,
                    guildCount: r.length,
                }),
            }),
            r.map((t, r) =>
                (0, e.jsxs)(
                    "div",
                    {
                        children: [
                            (0, e.jsx)(l.Z, {
                                guild: t,
                                size: l.Z.Sizes.XLARGE,
                            }),
                            (0, e.jsx)(a.xvT, {
                                variant: "display-md",
                                color: "text-primary",
                                children: t.name,
                            }),
                            0 === r &&
                                (0, e.jsxs)("div", {
                                    children: [
                                        (0, e.jsx)(a.xvT, {
                                            variant: "display-md",
                                            color: "text-primary",
                                            children: i[0].numMessagesSent,
                                        }),
                                        (0, e.jsx)(a.xvT, {
                                            variant: "display-sm",
                                            color: "text-primary",
                                            children: u.intl.string(x.default.wWKySE),
                                        }),
                                        (0, e.jsx)(a.xvT, {
                                            variant: "display-md",
                                            color: "text-primary",
                                            children: i[0].numMinutesListening + i[0].numMinutesSpeaking,
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
                    t.id,
                ),
            ),
        ],
    });
}
