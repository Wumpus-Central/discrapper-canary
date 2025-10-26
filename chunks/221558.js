r.d(t, { Z: () => p });
var e = r(951288),
    n = r(647438),
    a = r(793030),
    l = r(442837),
    s = r(565138),
    d = r(430824),
    c = r(5888),
    o = r(198358),
    x = r(506945),
    u = r(388032);
function p() {
    let {
            guilds: { guilds: i, numGuildsJoined: t },
        } = (0, l.e7)([c.Z], () => c.Z.getCheckpointData()),
        r = (0, n.useMemo)(
            () =>
                i
                    .map((i) => {
                        let { guild: t } = i;
                        return d.Z.getGuild(t.id);
                    })
                    .filter((i) => null != i),
            [i],
        );
    return (0, e.jsxs)(o.Z, {
        children: [
            (0, e.jsx)(a.xvT, {
                variant: "display-sm",
                color: "text-primary",
                children: u.intl.format(x.default.mAroeJ, {
                    joinedCount: t,
                    guildCount: r.length,
                }),
            }),
            r.map((t, r) =>
                (0, e.jsxs)(
                    "div",
                    {
                        children: [
                            (0, e.jsx)(s.Z, {
                                guild: t,
                                size: s.Z.Sizes.XLARGE,
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
                                            children: u.intl.string(x.default.wWKySP),
                                        }),
                                        (0, e.jsx)(a.xvT, {
                                            variant: "display-md",
                                            color: "text-primary",
                                            children: i[0].numVoiceMinutes,
                                        }),
                                        (0, e.jsx)(a.xvT, {
                                            variant: "display-sm",
                                            color: "text-primary",
                                            children: u.intl.string(x.default.lXT6ns),
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
