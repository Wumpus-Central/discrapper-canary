"use strict";
n.d(t, { Q: () => f });
var i = n(627968),
    r = n(64700),
    s = n(990078),
    a = n(459192),
    o = n(426983),
    l = n(176128),
    u = n(454938),
    c = n(714991),
    d = n(107773),
    _ = n(652215);
function f(e) {
    let { guild: t, children: n } = e,
        f = (0, u.A)(t);
    return r.useMemo(() => {
        if (f) {
            let e = (0, l.Jp)(t);
            return (0, o.K)(e) !== o._.NONE;
        }
        return (
            t.features.has(_.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) ||
            t.features.has(_.GuildFeatures.HUB) ||
            t.features.has(_.GuildFeatures.VERIFIED) ||
            t.features.has(_.GuildFeatures.PARTNERED)
        );
    }, [t, f])
        ? (0, i.jsx)(a.u, {
              asset: f
                  ? (0, i.jsx)(d.A, { disableBoostClick: !0, guild: t, size: 20 })
                  : (0, i.jsx)(c.A, { guild: t, size: 20 }),
              assetSize: 20,
              position: "right",
              align: "center",
              body: t.name,
              children: n,
          })
        : (0, i.jsx)(s.m, { position: "right", align: "center", text: t.name, children: n });
}
