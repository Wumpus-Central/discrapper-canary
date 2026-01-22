r.d(t, { A: () => p });
var n = r(64700),
    a = r(512750),
    l = r(311907),
    o = r(386784),
    s = r(498642),
    i = r(317525),
    c = r(71393),
    u = r(840120),
    d = r(333354),
    f = r(985018);
function p(e, t) {
    let r = (0, l.bG)([s.A], () => s.A.getMemberCount(e)),
        p = (0, o.A)(e),
        m = (0, l.bG)([c.A], () => {
            var t;
            return (null == (t = c.A.getGuild(e)) ? void 0 : t.vanityURLCode) != null;
        }),
        b = (0, u.M5)(e, "Powerup Deactivate Modal"),
        k = (0, l.bG)(
            [i.A],
            () =>
                t.skuId !== a.aN || null == p
                    ? 0
                    : i.A.getSortedRoles(e).reduce((e, t) => {
                          var r, n;
                          return (null == (n = t.colorStrings) ? void 0 : n.secondaryColor) == null
                              ? e
                              : e + (null != (r = p[t.id]) ? r : 0);
                      }, 0),
            [e, t.skuId, p],
        );
    return n.useMemo(() => {
        let e;
        switch (t.skuId) {
            case a.aN:
                e =
                    k > 0
                        ? f.intl.formatToPlainString(d.default["4jSvr1"], {
                              perk: t.title,
                              memberCount: k,
                          })
                        : f.intl.formatToPlainString(d.default.cavtEo, { perk: t.title });
                break;
            case a.FB:
                e = m ? f.intl.string(d.default.hN75yb) : f.intl.string(d.default.Du91Rb);
                break;
            case a.OJ:
            case a.jF:
                e = f.intl.string(d.default.Vf2ZcR);
                break;
            default:
                e = f.intl.formatToPlainString(d.default["4jSvr1"], {
                    perk: t.title,
                    memberCount: null != r ? r : 0,
                });
        }
        let n = null;
        return (
            m && t.skuId === a.YG && (n = b ? f.intl.string(d.default.TkNA7b) : f.intl.string(d.default.M4XL5n)),
            {
                warningText: e,
                vanityUrlWarning: n,
            }
        );
    }, [t, k, r, m, b]);
}
