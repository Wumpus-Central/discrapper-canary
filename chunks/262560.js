n.d(t, { A: () => A });
var i = n(477900),
    r = n(582128),
    s = n(805251),
    l = n(406810),
    a = n(855986),
    c = n(496431),
    o = n(287809),
    u = n(927813),
    d = n(773527),
    m = n(211824);
let h = 60 * u.A.Millis.SECOND,
    g = Object.values(m.vB);
var f = n(701256),
    p = n(792996);
function A(e) {
    let { perk: t, variant: n = "secondary" } = e,
        u = (function (e) {
            let t = (0, a.bG)([o.default], () => o.default.getCurrentUser()?.premiumType),
                n = r.useMemo(() => (null != e ? (0, d.cC)(e, t) : Math.min(...g.map((e) => (0, d.cC)(e, t)))), [e, t]),
                { days: i, hours: s } = (0, c.A)(n, h);
            return Math.max(i + +(s > 0), 1);
        })(t);
    return (0, i.jsx)(s.E, {
        type: { text: p.intl.formatToPlainString(f.default["noGK/D"], { days: u }) },
        variant: n,
        icon: l.ClockIcon,
    });
}
