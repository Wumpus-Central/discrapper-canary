i.d(n, { A: () => c });
var e = i(477900);
i(582128);
var l = i(192308),
    r = i(729937),
    a = i(981616),
    o = i(285933),
    u = i(227005);
async function c(t, n, c) {
    let { hasSpotifyAccount: d, activity: s, user: p } = t;
    (0, u.A)(d) &&
        null != s &&
        null != s.sync_id &&
        (await (0, a.dM)(),
        await (0, a.G8)().catch(
            (t) => (
                (0, l.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([i.e("173547"), i.e("503371")]).then(i.bind(i, 990726));
                    return (n) => (0, e.jsx)(t, { ...n });
                }),
                Promise.reject(t)
            ),
        ),
        r.OH(s, p.id),
        (0, o.A)(n, p, s, c));
}
