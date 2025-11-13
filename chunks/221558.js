e.d(r, { Z: () => p });
var i = e(951288),
    n = e(647438),
    l = e(793030),
    a = e(442837),
    s = e(565138),
    d = e(430824),
    c = e(5888),
    o = e(198358),
    u = e(892694),
    x = e(388032);
function p() {
    let {
            guilds: { guilds: t, numGuildsJoined: r },
        } = (0, a.e7)([c.Z], () => c.Z.getCheckpointData()),
        e = (0, n.useMemo)(
            () =>
                t
                    .map((t) => {
                        let { guild: r } = t;
                        return d.Z.getGuild(r.id);
                    })
                    .filter((t) => null != t),
            [t],
        );
    return (0, i.jsxs)(o.Z, {
        children: [
            (0, i.jsx)(l.xvT, {
                variant: "display-sm",
                color: "text-primary",
                children: x.intl.format(u.default.mAroeJ, {
                    joinedCount: r,
                    guildCount: e.length,
                }),
            }),
            e.map((r, e) =>
                (0, i.jsxs)(
                    "div",
                    {
                        children: [
                            (0, i.jsx)(s.Z, {
                                guild: r,
                                size: s.Z.Sizes.XLARGE,
                            }),
                            (0, i.jsx)(l.xvT, {
                                variant: "display-md",
                                color: "text-primary",
                                children: r.name,
                            }),
                            0 === e &&
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(l.xvT, {
                                            variant: "display-md",
                                            color: "text-primary",
                                            children: t[0].numMessagesSent,
                                        }),
                                        (0, i.jsx)(l.xvT, {
                                            variant: "display-sm",
                                            color: "text-primary",
                                            children: x.intl.string(u.default.wWKySP),
                                        }),
                                        (0, i.jsx)(l.xvT, {
                                            variant: "display-md",
                                            color: "text-primary",
                                            children: t[0].numVoiceMinutes,
                                        }),
                                        (0, i.jsx)(l.xvT, {
                                            variant: "display-sm",
                                            color: "text-primary",
                                            children: x.intl.string(u.default.lXT6ns),
                                        }),
                                    ],
                                }),
                        ],
                    },
                    r.id,
                ),
            ),
        ],
    });
}
