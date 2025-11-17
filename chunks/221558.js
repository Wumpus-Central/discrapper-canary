i.d(e, { Z: () => p });
var r = i(54381),
    n = i(473749),
    l = i(793030),
    a = i(442837),
    s = i(565138),
    d = i(430824),
    c = i(5888),
    o = i(198358),
    u = i(892694),
    x = i(388032);
function p() {
    let {
            guilds: { guilds: t, numGuildsJoined: e },
        } = (0, a.e7)([c.Z], () => c.Z.getCheckpointData()),
        i = (0, n.useMemo)(
            () =>
                t
                    .map((t) => {
                        let { guild: e } = t;
                        return d.Z.getGuild(e.id);
                    })
                    .filter((t) => null != t),
            [t],
        );
    return (0, r.jsxs)(o.Z, {
        children: [
            (0, r.jsx)(l.xvT, {
                variant: "display-sm",
                color: "text-primary",
                children: x.intl.format(u.default.mAroeJ, {
                    joinedCount: e,
                    guildCount: i.length,
                }),
            }),
            i.map((e, i) =>
                (0, r.jsxs)(
                    "div",
                    {
                        children: [
                            (0, r.jsx)(s.Z, {
                                guild: e,
                                size: s.Z.Sizes.XLARGE,
                            }),
                            (0, r.jsx)(l.xvT, {
                                variant: "display-md",
                                color: "text-primary",
                                children: e.name,
                            }),
                            0 === i &&
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(l.xvT, {
                                            variant: "display-md",
                                            color: "text-primary",
                                            children: t[0].numMessagesSent,
                                        }),
                                        (0, r.jsx)(l.xvT, {
                                            variant: "display-sm",
                                            color: "text-primary",
                                            children: x.intl.string(u.default.wWKySP),
                                        }),
                                        (0, r.jsx)(l.xvT, {
                                            variant: "display-md",
                                            color: "text-primary",
                                            children: t[0].numVoiceMinutes,
                                        }),
                                        (0, r.jsx)(l.xvT, {
                                            variant: "display-sm",
                                            color: "text-primary",
                                            children: x.intl.string(u.default.lXT6ns),
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
