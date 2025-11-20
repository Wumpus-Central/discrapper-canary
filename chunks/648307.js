n.d(t, { V: () => f });
var r = n(54381),
    i = n(473749),
    a = n(681715),
    o = n(284363),
    s = n(854218),
    l = n(666188),
    c = n(372769),
    u = n(523751),
    d = n(981631);
function f(e) {
    let { guild: t, children: n } = e,
        f = (0, l.Z)(t);
    return i.useMemo(() => {
        if (f) {
            let e = (0, s.XX)(t);
            return (0, o.i)(e) !== o.Q.NONE;
        }
        return (
            t.features.has(d.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) ||
            t.features.has(d.GuildFeatures.HUB) ||
            t.features.has(d.GuildFeatures.VERIFIED) ||
            t.features.has(d.GuildFeatures.PARTNERED)
        );
    }, [t, f])
        ? (0, r.jsx)(a.i_, {
              asset: f
                  ? (0, r.jsx)(u.Z, {
                        guild: t,
                        size: 20,
                    })
                  : (0, r.jsx)(c.Z, {
                        guild: t,
                        size: 20,
                    }),
              assetSize: 20,
              position: "right",
              align: "center",
              body: t.name,
              children: n,
          })
        : (0, r.jsx)(a.u, {
              position: "right",
              align: "center",
              text: t.name,
              children: n,
          });
}
