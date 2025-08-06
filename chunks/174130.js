n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(665149),
    s = n(853856),
    o = n(117984),
    c = n(593214),
    u = n(362658),
    d = n(916069),
    h = n(388032);
function p(e) {
    let { channel: t } = e,
        { isFavoritesPerk: n } = (0, u.z)('ChannelFavoritesHeaderButton'),
        p = (0, d.Z)(),
        { notifyFavoriteAdded: f } = (0, c.up)(),
        g = (0, i.e7)([s.Z], () => s.Z.isFavorite(t.id));
    if (!n || p) return null;
    let m = g ? l.r7p : l.vxU,
        b = g ? h.intl.string(h.t.Bou7lZ) : h.intl.string(h.t['4wcdEx']);
    return (0, r.jsx)(a.ZP.Icon, {
        icon: m,
        tooltip: b,
        'aria-label': b,
        onClick: () => {
            g ? (0, o.oC)(t.id) : (f(), (0, o.kj)(t.id));
        }
    });
}
