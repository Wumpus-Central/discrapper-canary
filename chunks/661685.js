r.d(e, { A: () => k }), r(321073);
var l = r(582128),
    a = r(512750),
    i = r(17928),
    n = r(386784),
    u = r(498642),
    s = r(317525),
    d = r(71393),
    c = r(25525),
    o = r(375708);
function k(t, e) {
    let r = (0, i.bG)([u.A], () => u.A.getMemberCount(t)),
        k = (0, n.A)(t),
        b = (0, i.bG)([d.A], () => d.A.getGuild(t)?.vanityURLCode != null),
        f = (0, i.bG)(
            [s.A],
            () =>
                e.skuId !== a.aN || null == k
                    ? 0
                    : s.A.getSortedRoles(t).reduce(
                          (t, e) => (e.colorStrings?.secondaryColor == null ? t : t + (k[e.id] ?? 0)),
                          0,
                      ),
            [t, e.skuId, k],
        );
    return l.useMemo(() => {
        let t;
        switch (e.skuId) {
            case a.aN:
                t =
                    f > 0
                        ? o.intl.formatToPlainString(c.default["4jSvr1"], { perk: e.title, memberCount: f })
                        : o.intl.formatToPlainString(c.default.cavtEo, { perk: e.title });
                break;
            case a.FB:
                t = b ? o.intl.string(c.default.hN75yb) : o.intl.string(c.default.Du91Rb);
                break;
            case a.OJ:
            case a.jF:
            case a.Ht:
            case a.tv:
                t = o.intl.string(c.default.Vf2ZcR);
                break;
            default:
                t = o.intl.formatToPlainString(c.default["4jSvr1"], { perk: e.title, memberCount: r ?? 0 });
        }
        let l = [{ text: t, critical: e.skuId === a.FB }];
        return b && e.skuId === a.YG && l.push({ text: o.intl.string(c.default.M4XL5n), critical: !0 }), l;
    }, [e, f, r, b]);
}
