a.d(e, { A: () => k });
var n = a(477900),
    r = a(582128),
    i = a(805251),
    u = a(406810),
    c = a(855986),
    l = a(496431),
    s = a(287809),
    o = a(927813),
    p = a(773527),
    d = a(211824);
let h = 60 * o.A.Millis.SECOND,
    m = Object.values(d.vB);
var C = a(701256),
    f = a(792996);
function k(t) {
    let { perk: e, variant: a = "secondary" } = t,
        o = (function (t) {
            let e = (0, c.bG)([s.default], () => s.default.getCurrentUser()?.premiumType),
                a = r.useMemo(() => (null != t ? (0, p.cC)(t, e) : Math.min(...m.map((t) => (0, p.cC)(t, e)))), [t, e]),
                { days: n, hours: i } = (0, l.A)(a, h);
            return Math.max(n + +(i > 0), 1);
        })(e);
    return (0, n.jsx)(i.E, {
        type: { text: f.intl.formatToPlainString(C.default["noGK/D"], { days: o }) },
        variant: a,
        icon: u.ClockIcon,
    });
}
