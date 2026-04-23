i.d(t, { A: () => _ });
var n = i(627968);
i(64700);
var s = i(192308),
    l = i(477782),
    a = i(811893),
    r = i(837057),
    d = i(310419),
    o = i(997509),
    c = i(5298),
    u = i(266648),
    g = i(267102),
    A = i(652215),
    E = i(488995),
    h = i(985018);
function _(e) {
    let t = (0, g.aL)(),
        i = (0, c.A)(e);
    if (__OVERLAY__ || !i) return null;
    let _ = (i) => {
        o.A.open(e.id, i), t.dispatch(A.jej.POPOUT_CLOSE), (0, s.closeAllModals)();
    };
    return (0, n.jsx)(l.Dr, {
        id: "guild-settings",
        label: h.intl.string(h.t["154/bL"]),
        action: () => _(),
        children: (0, u.P)(e).map((t) => {
            let { section: i, label: s, ariaLabel: o } = t;
            switch (i) {
                case A.BEX.DELETE:
                    return null;
                case A.BEX.COMMUNITY:
                    return (0, n.jsx)(l.Dr, { id: i, action: () => _(i), label: h.intl.string(h.t.nRtNqn) }, i);
                case A.BEX.APP_DIRECTORY:
                    return (0, n.jsx)(
                        l.Dr,
                        {
                            id: i,
                            action: () => {
                                (0, r.transitionToGlobalDiscovery)({
                                    tab: E.GlobalDiscoveryTab.APPS,
                                    newSessionState: { guildId: e.id, entrypoint: { name: d.sW.GUILD_HEADER_POPOUT } },
                                });
                            },
                            leadingAccessory: { type: "icon", icon: a.t },
                            iconLeft: a.t,
                            label: h.intl.string(h.t.AKcFUj),
                        },
                        i,
                    );
                default:
                    let c = "string" == typeof s ? s : o;
                    if (null == c) return null;
                    return (0, n.jsx)(l.Dr, { id: i, action: () => _(i), label: c }, i);
            }
        }),
    });
}
