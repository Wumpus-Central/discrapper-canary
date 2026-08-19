n.d(e, { A: () => c });
var i = n(477900);
n(582128);
var r = n(192308),
    l = n(729937),
    o = n(981616),
    a = n(285933),
    u = n(227005);
async function c(t, e, c) {
    let { hasSpotifyAccount: s, activity: d, user: p } = t;
    (0, u.A)(s) &&
        null != d &&
        null != d.sync_id &&
        (await (0, o.dM)(),
        await (0, o.G8)().catch(
            (t) => (
                (0, r.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([n.e("173547"), n.e("503371")]).then(n.bind(n, 990726));
                    return (e) => (0, i.jsx)(t, { ...e });
                }),
                Promise.reject(t)
            ),
        ),
        l.OH(d, p.id),
        (0, a.A)(e, p, d, c));
}
