"use strict";
n.d(t, { A: () => d });
var i = n(477900);
n(582128);
var r = n(192308),
    a = n(729937),
    s = n(981616),
    l = n(285933),
    o = n(227005);
async function d(e, t, d) {
    let { hasSpotifyAccount: c, activity: u, user: _ } = e;
    (0, o.A)(c) &&
        null != u &&
        null != u.sync_id &&
        (await (0, s.dM)(),
        await (0, s.G8)().catch(
            (e) => (
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await n.e("3371").then(n.bind(n, 990726));
                    return (t) => (0, i.jsx)(e, { ...t });
                }),
                Promise.reject(e)
            ),
        ),
        a.OH(u, _.id),
        (0, l.A)(t, _, u, d));
}
