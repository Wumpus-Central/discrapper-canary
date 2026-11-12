var n = l(477900),
    a = l(582128),
    r = l(855986),
    i = l(97808),
    s = l(778712),
    o = l(290863),
    u = l(351906),
    d = l(562153),
    c = l(644968);
let f = { keys: ["label", "description"] };
l.d(
    t,
    {},
    {
        A: function (e, t) {
            let l = (0, r.bG)([u.A], () => u.A.hidePersonalInformation),
                m = (0, c.B5)(e),
                p = (0, r.cf)([o.A], () => Object.fromEntries(m.map((e) => [e.id, o.A.getStatus(e.id)])), [m]),
                g = a.useMemo(
                    () =>
                        m.map((t) => ({
                            id: t.id,
                            value: t.id,
                            label: (0, d.mG)(e, null, t),
                            leading: (0, n.jsx)(i.eu, {
                                size: s._3.SIZE_24,
                                src: t.getAvatarURL(e, 24),
                                "aria-hidden": !0,
                                status: p[t.id],
                            }),
                            description: (0, c.hY)(t, l),
                        })),
                    [e, l, p, m],
                ),
                v = (0, c.S6)(e, t);
            return {
                options: g,
                onQueryChange: a.useCallback((e) => v(e.currentTarget.value), [v]),
                matchSorterOptions: f,
            };
        },
    },
);
