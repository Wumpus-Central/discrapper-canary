var r = n(120747),
    t = n(427262);
n.d(
    i,
    {},
    {
        A: function (e, i) {
            return (0, r.A)({
                targetChannelId: i,
                mention: { display: `@${t.Ay.getUserTag(e, { decoration: "never" })}`, raw: `<@${e.id}>` },
            });
        },
        C: function (e, i) {
            (0, r.G)(`@${t.Ay.getUserTag(e, { decoration: "never" })}`, `<@${e.id}>`, i);
        },
    },
);
