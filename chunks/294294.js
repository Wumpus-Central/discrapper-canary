n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(512722),
    l = n.n(i),
    s = n(442837),
    a = n(481060),
    o = n(395586),
    c = n(825055),
    u = n(909656),
    d = n(430824),
    m = n(388032);
function g(e) {
    let { guildId: t } = e,
        n = (0, s.e7)([d.Z], () => d.Z.getGuild(t));
    return (
        l()(null != n, 'Guild not found'),
        (0, r.jsxs)(o.AL, {
            guildId: t,
            children: [
                (0, r.jsx)(c.Z, { children: m.intl.string(m.t.WMyX29) }),
                (0, r.jsx)(a.LZC, { size: 32 }),
                (0, r.jsx)(u.Z, {
                    guild: n,
                    isGuildProducts: !0
                })
            ]
        })
    );
}
