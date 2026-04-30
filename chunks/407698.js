"use strict";
n.d(t, { Q: () => m });
var l = n(627968),
    i = n(64700),
    s = n(990078),
    a = n(459192),
    r = n(426983),
    o = n(176128),
    c = n(454938),
    u = n(714991),
    d = n(57991),
    h = n(652215);
function m(e) {
    let { guild: t, children: n } = e,
        m = (0, c.A)(t);
    return i.useMemo(() => {
        if (m) {
            let e = (0, o.Jp)(t);
            return (0, r.K)(e) !== r._.NONE;
        }
        return (
            t.features.has(h.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) ||
            t.features.has(h.GuildFeatures.HUB) ||
            t.features.has(h.GuildFeatures.VERIFIED) ||
            t.features.has(h.GuildFeatures.PARTNERED)
        );
    }, [t, m])
        ? (0, l.jsx)(a.u, {
              asset: m
                  ? (0, l.jsx)(d.A, { disableBoostClick: !0, guild: t, size: 20 })
                  : (0, l.jsx)(u.A, { guild: t, size: 20 }),
              assetSize: 20,
              position: "right",
              align: "center",
              body: t.name,
              children: n,
          })
        : (0, l.jsx)(s.m, { position: "right", align: "center", text: t.name, children: n });
}
