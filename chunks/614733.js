l.d(t, { A: () => p });
var n = l(477900),
    a = l(582128),
    i = l(17928),
    r = l(97808),
    u = l(778712),
    s = l(290863),
    o = l(351906),
    d = l(562153),
    c = l(644968);
let f = { keys: ["label", "description"] };
function p(e, t) {
    let l = (0, i.bG)([o.A], () => o.A.hidePersonalInformation),
        p = (0, c.B5)(e),
        h = (0, i.cf)([s.A], () => Object.fromEntries(p.map((e) => [e.id, s.A.getStatus(e.id)])), [p]),
        m = a.useMemo(
            () =>
                p.map((t) => ({
                    id: t.id,
                    value: t.id,
                    label: (0, d.mG)(e, null, t),
                    leading: (0, n.jsx)(r.eu, {
                        size: u._3.SIZE_24,
                        src: t.getAvatarURL(e, 24),
                        "aria-hidden": !0,
                        status: h[t.id],
                    }),
                    description: (0, c.hY)(t, l),
                })),
            [e, l, h, p],
        ),
        g = (0, c.S6)(e, t);
    return { options: m, onQueryChange: a.useCallback((e) => g(e.currentTarget.value), [g]), matchSorterOptions: f };
}
