n.d(t, { Z: () => s });
var r = n(763472),
    i = n(647162),
    o = n(680686),
    a = n(131303);
async function s(e, t, n) {
    let { hasSpotifyAccount: s, activity: l, user: c } = e;
    (0, a.Z)(s) && null != l && null != l.sync_id && (await (0, i.KV)(), r.hY(l, c.id), (0, o.Z)(t, c, l, n));
}
