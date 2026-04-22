"use strict";
n.d(t, { Q: () => m });
var i = n(627968),
    l = n(64700),
    s = n(990078),
    r = n(459192),
    a = n(426983),
    o = n(176128),
    c = n(454938),
    u = n(714991),
    d = n(57991),
    h = n(652215);
function m(e) {
    let { guild: t, children: n } = e,
        m = (0, c.A)(t);
    return l.useMemo(() => {
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
        ? (0, i.jsx)(r.u, {
              asset: m
                  ? (0, i.jsx)(d.A, { disableBoostClick: !0, guild: t, size: 20 })
                  : (0, i.jsx)(u.A, { guild: t, size: 20 }),
              assetSize: 20,
              position: "right",
              align: "center",
              body: t.name,
              children: n,
          })
        : (0, i.jsx)(s.m, { position: "right", align: "center", text: t.name, children: n });
}
