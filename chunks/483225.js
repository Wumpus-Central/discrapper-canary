a.d(i, { default: () => f });
var r = a(477900),
    e = a(772707),
    n = a(834730),
    d = a(976860),
    l = a(349085),
    c = a(527664),
    o = a(652215),
    s = a(746080),
    p = a(394107),
    u = a(105292);
function f(t) {
    let { gameServerGame: i, guildId: a, status: f, ...h } = t,
        g = (0, l.A)(i.gameId, "cover"),
        k = u.intl.string("created" === f ? p.default["4lLdBM"] : p.default.VPDgHa),
        m = u.intl.formatToPlainString(p.default.yL6BiH, { provider: (0, c.A)(i.provider) });
    return (0, r.jsx)(e.k, {
        ...h,
        graphic: { type: "image", src: g ?? "", aspectRatio: "16/9" },
        title: k,
        actions: [
            {
                variant: "primary",
                text: u.intl.string(p.default.VkItSr),
                onClick: function () {
                    ((0, d.pX)(o.BVt.CHANNEL(a, s.VV.GAME_SERVERS)), h.onClose());
                },
            },
        ],
        children: (0, r.jsx)(n.E, { variant: "text-md/normal", children: m }),
    });
}
