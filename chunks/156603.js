n.d(t, { A: () => p });
var l = n(627968),
    a = n(397927),
    r = n(790381),
    s = n(266080),
    i = n(121090),
    o = n(18282),
    d = n(424994),
    c = n(985018);
let u = { [d.a4.SPOTIFY]: i.A, [d.a4.CRUNCHYROLL]: a.kwD, [d.a4.XBOX]: s.A, [d.a4.PLAYSTATION]: r.A },
    m = {
        [d.a4.SPOTIFY]: () => c.intl.string(c.t["0ZB/XE"]),
        [d.a4.CRUNCHYROLL]: () => c.intl.string(c.t.jdJYXw),
        [d.a4.XBOX]: () => c.intl.string(c.t.Nfvo72),
        [d.a4.PLAYSTATION]: () => c.intl.string(c.t.fFl4jo),
    };
function p(e) {
    let { type: t, "aria-label": n, ...a } = e,
        r = u[t];
    if (null == r) return null;
    let s = n ?? m[t]?.();
    return (0, l.jsx)(o.A, { Icon: r, ...a, "aria-label": s });
}
