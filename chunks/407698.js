"use strict";
n.d(t, { Q: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(435371),
    a = n(426983),
    o = n(176128),
    l = n(454938),
    u = n(714991),
    c = n(57991),
    d = n(652215);
function _(e) {
    let { guild: t, children: n } = e,
        _ = (0, l.A)(t);
    return i.useMemo(() => {
        if (_) {
            let e = (0, o.Jp)(t);
            return (0, a.K)(e) !== a._.NONE;
        }
        return (
            t.features.has(d.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) ||
            t.features.has(d.GuildFeatures.HUB) ||
            t.features.has(d.GuildFeatures.VERIFIED) ||
            t.features.has(d.GuildFeatures.PARTNERED)
        );
    }, [t, _])
        ? (0, r.jsx)(s.un, {
              asset: _
                  ? (0, r.jsx)(c.A, { disableBoostClick: !0, guild: t, size: 20 })
                  : (0, r.jsx)(u.A, { guild: t, size: 20 }),
              assetSize: 20,
              position: "right",
              align: "center",
              body: t.name,
              children: n,
          })
        : (0, r.jsx)(s.m_, { position: "right", align: "center", text: t.name, children: n });
}
