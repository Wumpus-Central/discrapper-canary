n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(665149),
    o = n(853856),
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
        m = (0, i.e7)([o.Z], () => o.Z.isFavorite(t.id));
    if (!n || h) return null;
    let g = m ? l.r7p : l.vxU,
        b = m ? p.intl.string(p.t.Bou7lZ) : p.intl.string(p.t['4wcdEx']);
    return (0, r.jsx)(a.ZP.Icon, {
        icon: g,
        tooltip: b,
        'aria-label': b,
        onClick: () => {
            m ? (0, s.oC)(t.id) : (f(), (0, s.kj)(t.id));
        }
    });
}
