n.d(t, { A: () => b });
var i = n(627968);
n(64700);
var r = n(397927),
    s = n(837057),
    l = n(310419),
    a = n(997509),
    o = n(5298),
    c = n(266648),
    u = n(267102),
    d = n(652215),
    g = n(488995),
    p = n(985018);
function b(e) {
    let t = (0, u.aL)(),
        n = (0, o.A)(e);
    if (__OVERLAY__ || !n) return null;
    let b = (n) => {
        a.A.open(e.id, n), t.dispatch(d.jej.POPOUT_CLOSE), (0, r.s7G)();
    };
    return (0, i.jsx)(r.Drp, {
        id: "guild-settings",
        label: p.intl.string(p.t["154/bL"]),
        action: () => b(),
        children: (0, c.P)(e).map((t) => {
            let { section: n, label: a } = t;
            if (null == a) return null;
            switch (n) {
                case d.BEX.DELETE:
                    return null;
                case d.BEX.COMMUNITY:
                    return (0, i.jsx)(
                        r.Drp,
                        {
                            id: n,
                            action: () => b(n),
                            label: p.intl.string(p.t.nRtNqn),
                        },
                        n,
                    );
                case d.BEX.APP_DIRECTORY:
                    return (0, i.jsx)(
                        r.Drp,
                        {
                            id: n,
                            action: () => {
                                (0, s.transitionToGlobalDiscovery)({
                                    tab: g.GlobalDiscoveryTab.APPS,
                                    newSessionState: {
                                        guildId: e.id,
                                        entrypoint: { name: l.sW.GUILD_HEADER_POPOUT },
                                    },
                                });
                            },
                            label: a,
                        },
                        n,
                    );
                default:
                    return (0, i.jsx)(
                        r.Drp,
                        {
                            id: n,
                            action: () => b(n),
                            label: a,
                        },
                        n,
                    );
            }
        }),
    });
}
