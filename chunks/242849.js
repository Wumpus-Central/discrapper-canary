n.d(t, { R: () => d });
var i = n(627968),
    l = n(834730),
    s = n(890514),
    r = n(863598),
    a = n(985018),
    o = n(12544);
function d(e) {
    let { canManageGuild: t, guild: n } = e;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)("div", {
                className: o.t,
                children: [
                    (0, i.jsx)("div", {
                        className: o._,
                        children: (0, i.jsx)(r.y, {
                            label: a.intl.string(a.t.KuYcnU),
                            canManageGuild: t,
                            guildId: n.id,
                            afkChannelId: n.afkChannelId,
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: o._,
                        children: (0, i.jsx)(s.S, {
                            label: a.intl.string(a.t.brhYaR),
                            canManageGuild: t,
                            afkChannelId: n.afkChannelId,
                            afkTimeout: n.afkTimeout,
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(l.E, { variant: "text-sm/medium", color: "text-subtle", children: a.intl.string(a.t.ffEOKP) }),
        ],
    });
}
