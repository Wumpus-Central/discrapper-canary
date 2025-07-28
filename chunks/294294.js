n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(512722),
    l = n.n(i),
    a = n(442837),
    s = n(481060),
    o = n(395586),
    c = n(825055),
    d = n(909656),
    u = n(430824),
    m = n(388032);
function g(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([u.Z], () => u.Z.getGuild(t));
    return (
        l()(null != n, 'Guild not found'),
        (0, r.jsxs)(o.AL, {
            guildId: t,
            children: [
                (0, r.jsx)(c.Z, { children: m.intl.string(m.t.WMyX29) }),
                (0, r.jsx)(s.LZC, { size: 32 }),
                (0, r.jsx)(d.Z, {
                    guild: n,
                    isGuildProducts: !0
                })
            ]
        })
    );
}
