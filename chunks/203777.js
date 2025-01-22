r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(763472),
    a = r(647162),
    o = r(680686),
    s = r(131303);
async function l(e, n, r) {
    let { hasSpotifyAccount: l, activity: u, user: c } = e;
    (0, s.Z)(l) && null != u && null != u.sync_id && (await (0, a.KV)(), i.hY(u, c.id), (0, o.Z)(n, c, u, r));
}
