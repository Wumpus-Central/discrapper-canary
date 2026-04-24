i.d(e, { A: () => c });
var l = i(627968);
i(64700);
var a = i(192308),
    n = i(729937),
    r = i(981616),
    s = i(285933),
    o = i(227005);
async function c(t, e, c) {
    let { hasSpotifyAccount: d, activity: u, user: _ } = t;
    (0, o.A)(d) &&
        null != u &&
        null != u.sync_id &&
        (await (0, r.dM)(),
        await (0, r.G8)().catch(
            (t) => (
                (0, a.openModalLazy)(async () => {
                    let { default: t } = await i.e("3371").then(i.bind(i, 990726));
                    return (e) => (0, l.jsx)(t, { ...e });
                }),
                Promise.reject(t)
            ),
        ),
        n.OH(u, _.id),
        (0, s.A)(e, _, u, c));
}
