n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(512722),
    l = n.n(i),
    a = n(442837),
    s = n(481060),
    o = n(395586),
    c = n(825055),
    d = n(909656),
    u = n(430824),
    g = n(388032);
function m(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([u.Z], () => u.Z.getGuild(t));
    return (
        l()(null != n, "Guild not found"),
        (0, r.jsxs)(o.AL, {
            guildId: t,
            children: [
                (0, r.jsx)(c.Z, { children: g.intl.string(g.t["WMyX2+"]) }),
                (0, r.jsx)(s.LZC, { size: 32 }),
                (0, r.jsx)(d.Z, {
                    guild: n,
                    isGuildProducts: !0,
                }),
            ],
        })
    );
}
