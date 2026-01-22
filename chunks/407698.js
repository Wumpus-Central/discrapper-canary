n.d(t, { Q: () => f });
var r = n(627968),
    i = n(64700),
    a = n(435371),
    s = n(426983),
    o = n(176128),
    l = n(454938),
    c = n(714991),
    u = n(57991),
    d = n(652215);
function f(e) {
    let { guild: t, children: n } = e,
        f = (0, l.A)(t);
    return i.useMemo(() => {
        if (f) {
            let e = (0, o.Jp)(t);
            return (0, s.K)(e) !== s._.NONE;
        }
        return (
            t.features.has(d.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) ||
            t.features.has(d.GuildFeatures.HUB) ||
            t.features.has(d.GuildFeatures.VERIFIED) ||
            t.features.has(d.GuildFeatures.PARTNERED)
        );
    }, [t, f])
        ? (0, r.jsx)(a.un, {
              asset: f
                  ? (0, r.jsx)(u.A, {
                        guild: t,
                        size: 20,
                    })
                  : (0, r.jsx)(c.A, {
                        guild: t,
                        size: 20,
                    }),
              assetSize: 20,
              position: "right",
              align: "center",
              body: t.name,
              children: n,
          })
        : (0, r.jsx)(a.m_, {
              position: "right",
              align: "center",
              text: t.name,
              children: n,
          });
}
