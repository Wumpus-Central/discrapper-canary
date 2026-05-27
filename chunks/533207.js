"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(729937),
    a = n(981616),
    o = n(285933),
    l = n(227005);
async function u(e, t, u) {
    let { hasSpotifyAccount: c, activity: d, user: _ } = e;
    (0, l.A)(c) &&
        null != d &&
        null != d.sync_id &&
        (await (0, a.dM)(),
        await (0, a.G8)().catch(
            (e) => (
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("73547"), n.e("3371")]).then(n.bind(n, 990726));
                    return (t) => (0, i.jsx)(e, { ...t });
                }),
                Promise.reject(e)
            ),
        ),
        s.OH(d, _.id),
        (0, o.A)(t, _, d, u));
}
