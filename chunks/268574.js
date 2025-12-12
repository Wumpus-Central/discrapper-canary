n.d(t, { Z: () => b });
var r = n(473749),
    o = n(494497),
    a = n(442837),
    i = n(14263),
    c = n(650774),
    l = n(485386),
    s = n(430824),
    u = n(158638),
    d = n(5238),
    f = n(388032);
function b(e, t) {
    let n = (0, a.e7)([c.Z], () => c.Z.getMemberCount(e)),
        b = (0, i.Z)(e),
        m = (0, a.e7)([s.Z], () => {
            var t;
            return (null == (t = s.Z.getGuild(e)) ? void 0 : t.vanityURLCode) != null;
        }),
        p = (0, u.g1)(e, "Powerup Deactivate Modal"),
        k = (0, a.e7)(
            [l.Z],
            () =>
                t.skuId !== o.If || null == b
                    ? 0
                    : l.Z.getSortedRoles(e).reduce((e, t) => {
                          var n, r;
                          return (null == (n = t.colorStrings) ? void 0 : n.secondaryColor) == null
                              ? e
                              : e + (null != (r = b[t.id]) ? r : 0);
                      }, 0),
            [e, t.skuId, b],
        );
    return r.useMemo(() => {
        let e;
        switch (t.skuId) {
            case o.If:
                e =
                    k > 0
                        ? f.intl.formatToPlainString(d.default["4jSvr1"], {
                              perk: t.title,
                              memberCount: k,
                          })
                        : f.intl.formatToPlainString(d.default.cavtEo, { perk: t.title });
                break;
            case o.A$:
                e = m ? f.intl.string(d.default.hN75yb) : f.intl.string(d.default.Du91Rb);
                break;
            case o.MB:
            case o.Vk:
                e = f.intl.string(d.default.Vf2ZcR);
                break;
            default:
                e = f.intl.formatToPlainString(d.default["4jSvr1"], {
                    perk: t.title,
                    memberCount: null != n ? n : 0,
                });
        }
        let r = null;
        return (
            m && t.skuId === o.XW && (r = p ? f.intl.string(d.default.TkNA7b) : f.intl.string(d.default.M4XL5n)),
            {
                warningText: e,
                vanityUrlWarning: r,
            }
        );
    }, [t, k, n, m, p]);
}
