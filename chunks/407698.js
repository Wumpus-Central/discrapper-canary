"use strict";
n.d(t, { Q: () => E });
var i = n(477900),
    r = n(582128),
    a = n(866665),
    s = n(459192),
    l = n(426983),
    o = n(176128),
    d = n(454938),
    c = n(714991),
    u = n(107773),
    _ = n(652215);
function E(e) {
    let { guild: t, children: n } = e,
        E = (0, d.A)(t);
    return r.useMemo(() => {
        if (E) {
            let e = (0, o.Jp)(t);
            return (0, l.K)(e) !== l._.NONE;
        }
        return (
            t.features.has(_.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) ||
            t.features.has(_.GuildFeatures.HUB) ||
            t.features.has(_.GuildFeatures.VERIFIED) ||
            t.features.has(_.GuildFeatures.PARTNERED)
        );
    }, [t, E])
        ? (0, i.jsx)(s.u, {
              asset: E
                  ? (0, i.jsx)(u.A, { disableBoostClick: !0, guild: t, size: 20 })
                  : (0, i.jsx)(c.A, { guild: t, size: 20 }),
              assetSize: 20,
              position: "right",
              align: "center",
              body: t.name,
              children: n,
          })
        : (0, i.jsx)(a.m, { position: "right", align: "center", text: t.name, children: n });
}
