n.d(t, { Q: () => f });
var i = n(477900),
    s = n(582128),
    l = n(866665),
    r = n(683063),
    a = n(426983),
    o = n(176128),
    c = n(454938),
    u = n(714991),
    d = n(107773),
    m = n(652215);
function f(e) {
    let { guild: t, children: n } = e,
        f = (0, c.A)(t);
    return s.useMemo(() => {
        if (f) {
            let e = (0, o.Jp)(t);
            return (0, a.K)(e) !== a._.NONE;
        }
        return (
            t.features.has(m.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) ||
            t.features.has(m.GuildFeatures.HUB) ||
            t.features.has(m.GuildFeatures.VERIFIED) ||
            t.features.has(m.GuildFeatures.PARTNERED)
        );
    }, [t, f])
        ? (0, i.jsx)(r.u, {
              asset: f
                  ? (0, i.jsx)(d.A, { disableBoostClick: !0, guild: t, size: 20 })
                  : (0, i.jsx)(u.A, { guild: t, size: 20 }),
              assetSize: 20,
              position: "right",
              align: "center",
              body: t.name,
              children: n,
          })
        : (0, i.jsx)(l.m, { position: "right", align: "center", text: t.name, children: n });
}
