a.d(t, { A: () => f });
var n = a(64700),
    r = a(512750),
    s = a(311907),
    i = a(386784),
    l = a(498642),
    o = a(317525),
    c = a(71393),
    d = a(840120),
    u = a(333354),
    m = a(985018);
function f(e, t) {
    let a = (0, s.bG)([l.A], () => l.A.getMemberCount(e)),
        f = (0, i.A)(e),
        b = (0, s.bG)([c.A], () => c.A.getGuild(e)?.vanityURLCode != null),
        k = (0, d.M5)(e, "Powerup Deactivate Modal"),
        p = (0, s.bG)(
            [o.A],
            () =>
                t.skuId !== r.aN || null == f
                    ? 0
                    : o.A.getSortedRoles(e).reduce(
                          (e, t) => (t.colorStrings?.secondaryColor == null ? e : e + (f[t.id] ?? 0)),
                          0,
                      ),
            [e, t.skuId, f],
        );
    return n.useMemo(() => {
        let e;
        switch (t.skuId) {
            case r.aN:
                e =
                    p > 0
                        ? m.intl.formatToPlainString(u.default["4jSvr1"], { perk: t.title, memberCount: p })
                        : m.intl.formatToPlainString(u.default.cavtEo, { perk: t.title });
                break;
            case r.FB:
                e = b ? m.intl.string(u.default.hN75yb) : m.intl.string(u.default.Du91Rb);
                break;
            case r.OJ:
            case r.jF:
                e = m.intl.string(u.default.Vf2ZcR);
                break;
            default:
                e = m.intl.formatToPlainString(u.default["4jSvr1"], { perk: t.title, memberCount: a ?? 0 });
        }
        let n = null;
        return (
            b && t.skuId === r.YG && (n = k ? m.intl.string(u.default.TkNA7b) : m.intl.string(u.default.M4XL5n)),
            { warningText: e, vanityUrlWarning: n }
        );
    }, [t, p, a, b, k]);
}
