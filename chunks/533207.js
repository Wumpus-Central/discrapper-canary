n.d(e, { A: () => c });
var i = n(627968);
n(64700);
var r = n(192308),
    l = n(729937),
    o = n(981616),
    a = n(285933),
    u = n(227005);
async function c(t, e, c) {
    let { hasSpotifyAccount: d, activity: s, user: A } = t;
    (0, u.A)(d) &&
        null != s &&
        null != s.sync_id &&
        (await (0, o.dM)(),
        await (0, o.G8)().catch(
            (t) => (
                (0, r.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([n.e("73547"), n.e("3371")]).then(n.bind(n, 990726));
                    return (e) => (0, i.jsx)(t, { ...e });
                }),
                Promise.reject(t)
            ),
        ),
        l.OH(s, A.id),
        (0, a.A)(e, A, s, c));
}
