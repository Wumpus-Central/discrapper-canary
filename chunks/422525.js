n.d(t, { Z: () => p });
var i = n(951288);
n(647438);
var r = n(481060),
    s = n(749681),
    l = n(258971),
    a = n(434404),
    c = n(956324),
    o = n(640678),
    u = n(728285),
    d = n(981631),
    g = n(49898),
    b = n(388032);
function p(e) {
    let t = (0, u.Aq)(),
        n = (0, c.Z)(e);
    if (__OVERLAY__ || !n) return null;
    let p = (n) => {
        a.Z.open(e.id, n), t.dispatch(d.CkL.POPOUT_CLOSE), (0, r.pTH)();
    };
    return (0, i.jsx)(r.sNh, {
        id: "guild-settings",
        label: b.intl.string(b.t["154/bL"]),
        action: () => p(),
        children: (0, o.t)(e).map((t) => {
            let { section: n, label: a } = t;
            if (null == a) return null;
            switch (n) {
                case d.pNK.DELETE:
                    return null;
                case d.pNK.COMMUNITY:
                    return (0, i.jsx)(
                        r.sNh,
                        {
                            id: n,
                            action: () => p(n),
                            label: b.intl.string(b.t.nRtNqn),
                        },
                        n,
                    );
                case d.pNK.APP_DIRECTORY:
                    return (0, i.jsx)(
                        r.sNh,
                        {
                            id: n,
                            action: () => {
                                (0, s.transitionToGlobalDiscovery)({
                                    tab: g.GlobalDiscoveryTab.APPS,
                                    newSessionState: {
                                        guildId: e.id,
                                        entrypoint: { name: l.xF.GUILD_HEADER_POPOUT },
                                    },
                                });
                            },
                            label: a,
                        },
                        n,
                    );
                default:
                    return (0, i.jsx)(
                        r.sNh,
                        {
                            id: n,
                            action: () => p(n),
                            label: a,
                        },
                        n,
                    );
            }
        }),
    });
}
