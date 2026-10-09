n.d(t, { A: () => p });
var l = n(477900),
    i = n(582128),
    a = n(17928),
    r = n(97808),
    u = n(778712),
    s = n(290863),
    o = n(351906),
    d = n(562153),
    c = n(644968);
let f = { keys: ["label", "description"] };
function p(e, t) {
    let n = (0, a.bG)([o.A], () => o.A.hidePersonalInformation),
        p = (0, c.B5)(e),
        h = (0, a.cf)([s.A], () => Object.fromEntries(p.map((e) => [e.id, s.A.getStatus(e.id)])), [p]),
        m = i.useMemo(
            () =>
                p.map((t) => ({
                    id: t.id,
                    value: t.id,
                    label: (0, d.mG)(e, null, t),
                    leading: (0, l.jsx)(r.eu, {
                        size: u._3.SIZE_24,
                        src: t.getAvatarURL(e, 24),
                        "aria-hidden": !0,
                        status: h[t.id],
                    }),
                    description: (0, c.hY)(t, n),
                })),
            [e, n, h, p],
        ),
        g = (0, c.S6)(e, t);
    return { options: m, onQueryChange: i.useCallback((e) => g(e.currentTarget.value), [g]), matchSorterOptions: f };
}
