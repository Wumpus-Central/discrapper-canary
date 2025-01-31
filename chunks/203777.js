n.d(t, { Z: () => o });
var i = n(763472),
    r = n(647162),
    a = n(680686),
    s = n(131303);
async function o(e, t, n) {
    let { hasSpotifyAccount: o, activity: l, user: u } = e;
    (0, s.Z)(o) && null != l && null != l.sync_id && (await (0, r.KV)(), i.hY(l, u.id), (0, a.Z)(t, u, l, n));
}
