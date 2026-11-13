var n = l(582128),
    a = l(855986),
    r = l(47167),
    i = l(713654),
    s = l(808728),
    u = l(994500),
    o = l(287809),
    d = l(246338);
l.d(
    t,
    {},
    {
        A: function (e, t) {
            let l = (0, a.bG)([s.A], () => (null == e ? null : s.A.getChannels(e)), [e]);
            return n.useMemo(
                () =>
                    null == l
                        ? null
                        : (0, d.Lp)(l, t).map((e) => ({
                              id: e.id,
                              value: e.id,
                              label: (0, r.m1)(e, o.default, u.A),
                              leading: (0, i.gU)(e),
                          })),
                [l, t],
            );
        },
    },
);
