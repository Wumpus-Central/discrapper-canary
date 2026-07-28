a.d(e, { A: () => f }), a(321073);
var s = a(582128),
    i = a(512750),
    r = a(17928),
    l = a(386784),
    n = a(498642),
    o = a(317525),
    d = a(71393),
    u = a(853513),
    c = a(375708);
function f(t, e) {
    let a = (0, r.bG)([n.A], () => n.A.getMemberCount(t)),
        f = (0, l.A)(t),
        m = (0, r.bG)([d.A], () => d.A.getGuild(t)?.vanityURLCode != null),
        k = (0, r.bG)(
            [o.A],
            () =>
                e.skuId !== i.aN || null == f
                    ? 0
                    : o.A.getSortedRoles(t).reduce(
                          (t, e) => (e.colorStrings?.secondaryColor == null ? t : t + (f[e.id] ?? 0)),
                          0,
                      ),
            [t, e.skuId, f],
        );
    return s.useMemo(() => {
        let t;
        switch (e.skuId) {
            case i.aN:
                t =
                    k > 0
                        ? c.intl.formatToPlainString(u.default["4jSvr1"], { perk: e.title, memberCount: k })
                        : c.intl.formatToPlainString(u.default.cavtEo, { perk: e.title });
                break;
            case i.FB:
                t = m ? c.intl.string(u.default.hN75yb) : c.intl.string(u.default.Du91Rb);
                break;
            case i.OJ:
            case i.jF:
            case i.Ht:
            case i.tv:
                t = c.intl.string(u.default.Vf2ZcR);
                break;
            default:
                t = c.intl.formatToPlainString(u.default["4jSvr1"], { perk: e.title, memberCount: a ?? 0 });
        }
        let s = [{ text: t, critical: e.skuId === i.FB }];
        return m && e.skuId === i.YG && s.push({ text: c.intl.string(u.default.M4XL5n), critical: !0 }), s;
    }, [e, k, a, m]);
}
