var r = i(477900);
i(582128);
var e = i(192308),
    l = i(729937),
    a = i(981616),
    u = i(285933),
    o = i(227005);
i.d(
    n,
    {},
    {
        A: async function (t, n, c) {
            let { hasSpotifyAccount: d, activity: s, user: f } = t;
            if ((0, o.A)(d) && null != s && null != s.sync_id) {
                await (0, a.dM)();
                try {
                    await (0, a.G8)();
                } catch (t) {
                    throw (
                        (0, e.mM)(async () => {
                            let { default: t } = await Promise.all([i.e(173547), i.e(503371)]).then(i.bind(i, 990726));
                            return (n) => (0, r.jsx)(t, { ...n });
                        }),
                        t
                    );
                }
                (l.OH(s, f.id), (0, u.A)(n, f, s, c));
            }
        },
    },
);
