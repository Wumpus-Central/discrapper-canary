i.d(t, { q: () => d, z: () => r });
var l = i(64700),
    n = i(945810),
    s = i(449054),
    a = i(652215);
let r = (0, n.mj)({
    name: "2026-02-silp-in-app-redesign",
    kind: "user",
    defaultConfig: { enabled: !1, treatment: void 0 },
    variations: { 1: { enabled: !0, treatment: "v1" }, 2: { enabled: !0, treatment: "v2" } },
});
function d(e, t) {
    let { enabled: i, treatment: n } = r.useConfig({ location: t }),
        [d, c] = l.useState(null),
        [o, u] = l.useState(!1),
        m = i && null != e && e.features.has(a.GuildFeatures.DISCOVERABLE);
    l.useEffect(() => {
        if (!m || null == e) {
            c(null), u(!1);
            return;
        }
        u(!0);
        let t = !1;
        return (
            (0, s.jm)(e.id).then((e) => {
                t || (u(!1), null != e ? c(e.guild) : c(null));
            }),
            () => {
                t = !0;
            }
        );
    }, [m, e]);
    let x = i && null != e && e.features.has(a.GuildFeatures.DISCOVERABLE) && d?.is_published === !0;
    return { enabled: x, discoveryGuild: x ? d : null, treatment: n, isLoading: o };
}
