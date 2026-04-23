n.d(t, { A: () => _ });
var a = n(627968),
    l = n(347306),
    r = n(790381),
    i = n(266080),
    s = n(121090),
    o = n(18282),
    d = n(424994),
    c = n(985018);
let u = { [d.a4.SPOTIFY]: s.A, [d.a4.CRUNCHYROLL]: l.k, [d.a4.XBOX]: i.A, [d.a4.PLAYSTATION]: r.A },
    m = {
        [d.a4.SPOTIFY]: () => c.intl.string(c.t["0ZB/XE"]),
        [d.a4.CRUNCHYROLL]: () => c.intl.string(c.t.jdJYXw),
        [d.a4.XBOX]: () => c.intl.string(c.t.Nfvo72),
        [d.a4.PLAYSTATION]: () => c.intl.string(c.t.fFl4jo),
    };
function _(e) {
    let { type: t, "aria-label": n, ...l } = e,
        r = u[t];
    if (null == r) return null;
    let i = n ?? m[t]?.();
    return (0, a.jsx)(o.A, { Icon: r, ...l, "aria-label": i });
}
