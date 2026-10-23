r.d(n, { A: () => c });
var i = r(477900);
r(582128);
var a = r(192308),
    e = r(729937),
    l = r(981616),
    u = r(285933),
    s = r(227005);
async function c(t, n, c) {
    let { hasSpotifyAccount: o, activity: d, user: f } = t;
    if ((0, s.A)(o) && null != d && null != d.sync_id) {
        await (0, l.dM)();
        try {
            await (0, l.G8)();
        } catch (t) {
            throw (
                (0, a.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([r.e("173547"), r.e("503371")]).then(r.bind(r, 990726));
                    return (n) => (0, i.jsx)(t, { ...n });
                }),
                t
            );
        }
        (e.OH(d, f.id), (0, u.A)(n, f, d, c));
    }
}
