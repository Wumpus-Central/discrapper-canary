a.d(t, { A: () => k });
var r = a(64700),
    n = a(512750),
    s = a(311907),
    i = a(386784),
    l = a(498642),
    o = a(317525),
    c = a(71393),
    d = a(333354),
    u = a(985018);
function k(e, t) {
    let a = (0, s.bG)([l.A], () => l.A.getMemberCount(e)),
        k = (0, i.A)(e),
        m = (0, s.bG)([c.A], () => c.A.getGuild(e)?.vanityURLCode != null),
        b = (0, s.bG)(
            [o.A],
            () =>
                t.skuId !== n.aN || null == k
                    ? 0
                    : o.A.getSortedRoles(e).reduce(
                          (e, t) => (t.colorStrings?.secondaryColor == null ? e : e + (k[t.id] ?? 0)),
                          0,
                      ),
            [e, t.skuId, k],
        );
    return r.useMemo(() => {
        let e;
        switch (t.skuId) {
            case n.aN:
                e =
                    b > 0
                        ? u.intl.formatToPlainString(d.default["4jSvr1"], { perk: t.title, memberCount: b })
                        : u.intl.formatToPlainString(d.default.cavtEo, { perk: t.title });
                break;
            case n.FB:
                e = m ? u.intl.string(d.default.hN75yb) : u.intl.string(d.default.Du91Rb);
                break;
            case n.OJ:
            case n.jF:
                e = u.intl.string(d.default.Vf2ZcR);
                break;
            default:
                e = u.intl.formatToPlainString(d.default["4jSvr1"], { perk: t.title, memberCount: a ?? 0 });
        }
        let r = null;
        return m && t.skuId === n.YG && (r = u.intl.string(d.default.M4XL5n)), { warningText: e, vanityUrlWarning: r };
    }, [t, b, a, m]);
}
