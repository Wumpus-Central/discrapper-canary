n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    a = n(665149),
    s = n(853856),
    o = n(117984),
    c = n(593214),
    d = n(362658),
    u = n(916069),
    h = n(388032);
function p(e) {
    let { channel: t } = e,
        { isFavoritesPerk: n } = (0, d.z)("ChannelFavoritesHeaderButton"),
        p = (0, u.Z)(),
        { notifyFavoriteAdded: f } = (0, c.up)(),
        g = (0, i.e7)([s.Z], () => s.Z.isFavorite(t.id));
    if (!n || p) return null;
    let m = g ? l.r7p : l.vxU,
        b = g ? h.intl.string(h.t.Bou7lZ) : h.intl.string(h.t["4wcdEx"]);
    return (0, r.jsx)(a.ZP.Icon, {
        icon: m,
        tooltip: b,
        "aria-label": b,
        onClick: () => {
            g ? (0, o.oC)(t.id) : (f(), (0, o.kj)(t.id));
        },
    });
}
