n.d(t, { SH: () => o, qE: () => _, zQ: () => d });
var i = n(64700),
    l = n(945810),
    a = n(449054),
    r = n(652215);
let d = (0, l.mj)({
        name: "2026-02-silp-in-app-redesign",
        kind: "user",
        defaultConfig: { enabled: !1, treatment: void 0 },
        variations: { 1: { enabled: !0, treatment: "v1" }, 2: { enabled: !0, treatment: "v2" } },
    }),
    o = (0, l.mj)({
        name: "2026-03-silp-in-app-redesign-profile",
        kind: "user",
        defaultConfig: { enabled: !1, treatment: void 0 },
        variations: { 1: { enabled: !0, treatment: "v1" }, 2: { enabled: !0, treatment: "v2" } },
    });
function _(e, t) {
    let { enabled: n, treatment: l } = d.useConfig({ location: t }),
        [o, _] = i.useState(null),
        [u, s] = i.useState(!1),
        c = n && null != e && e.features.has(r.GuildFeatures.DISCOVERABLE);
    i.useEffect(() => {
        if (!c || null == e) {
            _(null), s(!1);
            return;
        }
        s(!0);
        let t = !1;
        return (
            (0, a.jm)(e.id).then((e) => {
                t || (s(!1), null != e ? _(e.guild) : _(null));
            }),
            () => {
                t = !0;
            }
        );
    }, [c, e]);
    let f = n && null != e && e.features.has(r.GuildFeatures.DISCOVERABLE) && o?.is_published === !0;
    return { enabled: f, discoveryGuild: f ? o : null, treatment: l, isLoading: u };
}
