n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var r = n(512722),
    l = n.n(r),
    s = n(442837),
    a = n(481060),
    o = n(395586),
    c = n(825055),
    d = n(909656),
    u = n(430824),
    m = n(388032);
function h(e) {
    let { guildId: t } = e,
        n = (0, s.e7)([u.Z], () => u.Z.getGuild(t));
    return (
        l()(null != n, 'Guild not found'),
        (0, i.jsxs)(o.AL, {
            guildId: t,
            children: [
                (0, i.jsx)(c.Z, { children: m.intl.string(m.t.WMyX29) }),
                (0, i.jsx)(a.Spacer, { size: 32 }),
                (0, i.jsx)(d.Z, {
                    guild: n,
                    isGuildProducts: !0
                })
            ]
        })
    );
}
