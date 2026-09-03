n.d(t, { Q: () => m });
var l = n(477900),
    i = n(582128),
    s = n(866665),
    r = n(683063),
    a = n(426983),
    o = n(176128),
    u = n(454938),
    c = n(714991),
    d = n(107773),
    h = n(652215);
function m(e) {
    let { guild: t, children: n } = e,
        m = (0, u.A)(t);
    return i.useMemo(() => {
        if (m) {
            let e = (0, o.Jp)(t);
            return (0, a.K)(e) !== a._.NONE;
        }
        return (
            t.features.has(h.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) ||
            t.features.has(h.GuildFeatures.HUB) ||
            t.features.has(h.GuildFeatures.VERIFIED) ||
            t.features.has(h.GuildFeatures.PARTNERED)
        );
    }, [t, m])
        ? (0, l.jsx)(r.u, {
              asset: m
                  ? (0, l.jsx)(d.A, { disableBoostClick: !0, guild: t, size: 20 })
                  : (0, l.jsx)(c.A, { guild: t, size: 20 }),
              assetSize: 20,
              position: "right",
              align: "center",
              body: t.name,
              children: n,
          })
        : (0, l.jsx)(s.m, { position: "right", align: "center", text: t.name, children: n });
}
