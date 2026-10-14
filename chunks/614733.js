n.d(t, { A: () => p });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(97808),
    u = n(778712),
    s = n(290863),
    o = n(351906),
    d = n(562153),
    c = n(644968);
let f = { keys: ["label", "description"] };
function p(e, t) {
    let n = (0, r.bG)([o.A], () => o.A.hidePersonalInformation),
        p = (0, c.B5)(e),
        h = (0, r.cf)([s.A], () => Object.fromEntries(p.map((e) => [e.id, s.A.getStatus(e.id)])), [p]),
        g = i.useMemo(
            () =>
                p.map((t) => ({
                    id: t.id,
                    value: t.id,
                    label: (0, d.mG)(e, null, t),
                    leading: (0, l.jsx)(a.eu, {
                        size: u._3.SIZE_24,
                        src: t.getAvatarURL(e, 24),
                        "aria-hidden": !0,
                        status: h[t.id],
                    }),
                    description: (0, c.hY)(t, n),
                })),
            [e, n, h, p],
        ),
        m = (0, c.S6)(e, t);
    return { options: g, onQueryChange: i.useCallback((e) => m(e.currentTarget.value), [m]), matchSorterOptions: f };
}
