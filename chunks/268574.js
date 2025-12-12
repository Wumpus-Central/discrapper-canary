n.d(t, { Z: () => f });
var r = n(473749),
    a = n(494497),
    o = n(442837),
    i = n(14263),
    c = n(650774),
    l = n(485386),
    s = n(430824),
    u = n(158638),
    d = n(44542),
    b = n(388032);
function f(e, t) {
    let n = (0, o.e7)([c.Z], () => c.Z.getMemberCount(e)),
        f = (0, i.Z)(e),
        m = (0, o.e7)([s.Z], () => {
            var t;
            return (null == (t = s.Z.getGuild(e)) ? void 0 : t.vanityURLCode) != null;
        }),
        p = (0, u.g1)(e, "Powerup Deactivate Modal"),
        k = (0, o.e7)(
            [l.Z],
            () =>
                t.skuId !== a.If || null == f
                    ? 0
                    : l.Z.getSortedRoles(e).reduce((e, t) => {
                          var n, r;
                          return (null == (n = t.colorStrings) ? void 0 : n.secondaryColor) == null
                              ? e
                              : e + (null != (r = f[t.id]) ? r : 0);
                      }, 0),
            [e, t.skuId, f],
        );
    return r.useMemo(() => {
        let e;
        switch (t.skuId) {
            case a.If:
                e =
                    k > 0
                        ? b.intl.formatToPlainString(d.default["4jSvr1"], {
                              perk: t.title,
                              memberCount: k,
                          })
                        : b.intl.formatToPlainString(d.default.cavtEo, { perk: t.title });
                break;
            case a.A$:
                e = m ? b.intl.string(d.default.hN75yb) : b.intl.string(d.default.Du91Rb);
                break;
            case a.MB:
            case a.Vk:
                e = b.intl.string(d.default.Vf2ZcR);
                break;
            default:
                e = b.intl.formatToPlainString(d.default["4jSvr1"], {
                    perk: t.title,
                    memberCount: null != n ? n : 0,
                });
        }
        let r = null;
        return (
            m && t.skuId === a.XW && (r = p ? b.intl.string(d.default.TkNA7b) : b.intl.string(d.default.M4XL5n)),
            {
                warningText: e,
                vanityUrlWarning: r,
            }
        );
    }, [t, k, n, m, p]);
}
