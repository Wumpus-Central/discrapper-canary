l.d(t, { A: () => m });
var n = l(477900),
    a = l(582128),
    r = l(17928),
    i = l(97808),
    s = l(778712),
    u = l(290863),
    o = l(351906),
    d = l(562153),
    c = l(644968);
let f = { keys: ["label", "description"] };
function m(e, t) {
    let l = (0, r.bG)([o.A], () => o.A.hidePersonalInformation),
        m = (0, c.B5)(e),
        g = (0, r.cf)([u.A], () => Object.fromEntries(m.map((e) => [e.id, u.A.getStatus(e.id)])), [m]),
        h = a.useMemo(
            () =>
                m.map((t) => ({
                    id: t.id,
                    value: t.id,
                    label: (0, d.mG)(e, null, t),
                    leading: (0, n.jsx)(i.eu, {
                        size: s._3.SIZE_24,
                        src: t.getAvatarURL(e, 24),
                        "aria-hidden": !0,
                        status: g[t.id],
                    }),
                    description: (0, c.hY)(t, l),
                })),
            [e, l, g, m],
        ),
        p = (0, c.S6)(e, t);
    return { options: h, onQueryChange: a.useCallback((e) => p(e.currentTarget.value), [p]), matchSorterOptions: f };
}
