e.d(n, { A: () => d });
var i = e(627968);
e(64700);
var l = e(192308),
    r = e(729937),
    a = e(981616),
    u = e(285933),
    c = e(227005);
async function d(t, n, d) {
    let { hasSpotifyAccount: s, activity: o, user: p } = t;
    (0, c.A)(s) &&
        null != o &&
        null != o.sync_id &&
        (await (0, a.dM)(),
        await (0, a.G8)().catch(
            (t) => (
                (0, l.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([e.e("73547"), e.e("3371")]).then(e.bind(e, 990726));
                    return (n) => (0, i.jsx)(t, { ...n });
                }),
                Promise.reject(t)
            ),
        ),
        r.OH(o, p.id),
        (0, u.A)(n, p, o, d));
}
