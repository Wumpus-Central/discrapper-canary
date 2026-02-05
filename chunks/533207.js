"use strict";
n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(729937),
    s = n(981616),
    o = n(285933),
    l = n(227005);
async function u(e, t, u) {
    let { hasSpotifyAccount: c, activity: d, user: _ } = e;
    (0, l.A)(c) &&
        null != d &&
        null != d.sync_id &&
        (await (0, s.dM)(),
        await (0, s.G8)().catch(
            (e) => (
                (0, i.mMO)(async () => {
                    let { default: e } = await n.e("3371").then(n.bind(n, 990726));
                    return (t) => (0, r.jsx)(e, { ...t });
                }),
                Promise.reject(e)
            ),
        ),
        a.OH(d, _.id),
        (0, o.A)(t, _, d, u));
}
