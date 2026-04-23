a.d(t, { A: () => m });
var n = a(64700),
    r = a(512750),
    s = a(311907),
    i = a(386784),
    l = a(498642),
    o = a(317525),
    c = a(71393),
    d = a(853513),
    u = a(985018);
function m(e, t) {
    let a = (0, s.bG)([l.A], () => l.A.getMemberCount(e)),
        m = (0, i.A)(e),
        f = (0, s.bG)([c.A], () => c.A.getGuild(e)?.vanityURLCode != null),
        b = (0, s.bG)(
            [o.A],
            () =>
                t.skuId !== r.aN || null == m
                    ? 0
                    : o.A.getSortedRoles(e).reduce(
                          (e, t) => (t.colorStrings?.secondaryColor == null ? e : e + (m[t.id] ?? 0)),
                          0,
                      ),
            [e, t.skuId, m],
        );
    return n.useMemo(() => {
        let e;
        switch (t.skuId) {
            case r.aN:
                e =
                    b > 0
                        ? u.intl.formatToPlainString(d.default["4jSvr1"], { perk: t.title, memberCount: b })
                        : u.intl.formatToPlainString(d.default.cavtEo, { perk: t.title });
                break;
            case r.FB:
                e = f ? u.intl.string(d.default.hN75yb) : u.intl.string(d.default.Du91Rb);
                break;
            case r.OJ:
            case r.jF:
                e = u.intl.string(d.default.Vf2ZcR);
                break;
            default:
                e = u.intl.formatToPlainString(d.default["4jSvr1"], { perk: t.title, memberCount: a ?? 0 });
        }
        let n = null;
        return f && t.skuId === r.YG && (n = u.intl.string(d.default.M4XL5n)), { warningText: e, vanityUrlWarning: n };
    }, [t, b, a, f]);
}
