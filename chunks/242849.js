n.d(t, { R: () => o });
var r = n(627968),
    i = n(158954),
    l = n(890514),
    s = n(863598),
    a = n(985018),
    c = n(932249);
function o(e) {
    let { canManageGuild: t, guild: n } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)("div", {
                className: c.t,
                children: [
                    (0, r.jsx)("div", {
                        className: c._,
                        children: (0, r.jsx)(s.y, {
                            label: a.intl.string(a.t.KuYcnU),
                            canManageGuild: t,
                            guildId: n.id,
                            afkChannelId: n.afkChannelId,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: c._,
                        children: (0, r.jsx)(l.S, {
                            label: a.intl.string(a.t.brhYaR),
                            canManageGuild: t,
                            afkChannelId: n.afkChannelId,
                            afkTimeout: n.afkTimeout,
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(i.EYj, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: a.intl.string(a.t.ffEOKP),
            }),
        ],
    });
}
