n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(665149),
    a = n(853856),
    s = n(117984),
    c = n(593214),
    u = n(362658),
    d = n(916069),
    p = n(388032);
function h(e) {
    let { channel: t } = e,
        { isFavoritesPerk: n } = (0, u.z)('ChannelFavoritesHeaderButton'),
        h = (0, d.Z)(),
        { notifyFavoriteAdded: f } = (0, c.up)(),
        m = (0, i.e7)([a.Z], () => a.Z.isFavorite(t.id));
    if (!n || h) return null;
    let g = m ? l.r7p : l.vxU,
        b = m ? p.NW.string(p.t.Bou7lZ) : p.NW.string(p.t['4wcdEx']);
    return (0, r.jsx)(o.ZP.Icon, {
        icon: g,
        tooltip: b,
        'aria-label': b,
        onClick: () => {
            m ? (0, s.oC)(t.id) : (f(), (0, s.kj)(t.id));
        }
    });
}
