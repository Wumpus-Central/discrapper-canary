n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(192308),
    s = n(729937),
    r = n(981616),
    a = n(285933),
    o = n(227005);
async function c(e, t, c) {
    let { hasSpotifyAccount: d, activity: u, user: m } = e;
    (0, o.A)(d) &&
        null != u &&
        null != u.sync_id &&
        (await (0, r.dM)(),
        await (0, r.G8)().catch(
            (e) => (
                (0, l.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("73547"), n.e("3371")]).then(n.bind(n, 990726));
                    return (t) => (0, i.jsx)(e, { ...t });
                }),
                Promise.reject(e)
            ),
        ),
        s.OH(u, m.id),
        (0, a.A)(t, m, u, c));
}
