i.d(t, { A: () => E });
var n = i(627968);
i(64700);
var l = i(397927),
    s = i(837057),
    r = i(310419),
    a = i(997509),
    d = i(5298),
    c = i(266648),
    o = i(267102),
    u = i(652215),
    A = i(488995),
    g = i(985018);
function E(e) {
    let t = (0, o.aL)(),
        i = (0, d.A)(e);
    if (__OVERLAY__ || !i) return null;
    let E = (i) => {
        a.A.open(e.id, i), t.dispatch(u.jej.POPOUT_CLOSE), (0, l.s7G)();
    };
    return (0, n.jsx)(l.Drp, {
        id: "guild-settings",
        label: g.intl.string(g.t["154/bL"]),
        action: () => E(),
        children: (0, c.P)(e).map((t) => {
            let { section: i, label: a, ariaLabel: d } = t;
            switch (i) {
                case u.BEX.DELETE:
                    return null;
                case u.BEX.COMMUNITY:
                    return (0, n.jsx)(l.Drp, { id: i, action: () => E(i), label: g.intl.string(g.t.nRtNqn) }, i);
                case u.BEX.APP_DIRECTORY:
                    return (0, n.jsx)(
                        l.Drp,
                        {
                            id: i,
                            action: () => {
                                (0, s.transitionToGlobalDiscovery)({
                                    tab: A.GlobalDiscoveryTab.APPS,
                                    newSessionState: { guildId: e.id, entrypoint: { name: r.sW.GUILD_HEADER_POPOUT } },
                                });
                            },
                            leadingAccessory: { type: "icon", icon: l.tfB },
                            iconLeft: l.tfB,
                            label: g.intl.string(g.t.AKcFUj),
                        },
                        i,
                    );
                default:
                    let c = "string" == typeof a ? a : d;
                    if (null == c) return null;
                    return (0, n.jsx)(l.Drp, { id: i, action: () => E(i), label: c }, i);
            }
        }),
    });
}
