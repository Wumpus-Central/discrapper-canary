"use strict";
n.d(t, { SH: () => l, qE: () => u, zQ: () => o });
var i = n(64700),
    r = n(945810),
    s = n(449054),
    a = n(652215);
let o = (0, r.mj)({
        name: "2026-02-silp-in-app-redesign",
        kind: "user",
        defaultConfig: { enabled: !1, treatment: void 0 },
        variations: { 1: { enabled: !0, treatment: "v1" }, 2: { enabled: !0, treatment: "v2" } },
    }),
    l = (0, r.mj)({
        name: "2026-03-silp-in-app-redesign-profile",
        kind: "user",
        defaultConfig: { enabled: !1, treatment: void 0 },
        variations: { 1: { enabled: !0, treatment: "v1" }, 2: { enabled: !0, treatment: "v2" } },
    });
function u(e, t) {
    let { enabled: n, treatment: r } = o.useConfig({ location: t }),
        [l, u] = i.useState(null),
        [c, d] = i.useState(!1),
        _ = n && null != e && e.features.has(a.GuildFeatures.DISCOVERABLE);
    i.useEffect(() => {
        if (!_ || null == e) {
            u(null), d(!1);
            return;
        }
        d(!0);
        let t = !1;
        return (
            (0, s.jm)(e.id).then((e) => {
                t || (d(!1), null != e ? u(e.guild) : u(null));
            }),
            () => {
                t = !0;
            }
        );
    }, [_, e]);
    let f = n && null != e && e.features.has(a.GuildFeatures.DISCOVERABLE) && l?.is_published === !0;
    return { enabled: f, discoveryGuild: f ? l : null, treatment: r, isLoading: c };
}
