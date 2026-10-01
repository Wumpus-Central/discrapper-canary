i.d(n, { A: () => c });
var r = i(477900);
i(582128);
var a = i(192308),
    e = i(729937),
    l = i(981616),
    u = i(285933),
    s = i(227005);
async function c(t, n, c) {
    let { hasSpotifyAccount: o, activity: d, user: f } = t;
    (0, s.A)(o) &&
        null != d &&
        null != d.sync_id &&
        (await (0, l.dM)(),
        await (0, l.G8)().catch(
            (t) => (
                (0, a.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([i.e("173547"), i.e("503371")]).then(i.bind(i, 990726));
                    return (n) => (0, r.jsx)(t, { ...n });
                }),
                Promise.reject(t)
            ),
        ),
        e.OH(d, f.id),
        (0, u.A)(n, f, d, c));
}
