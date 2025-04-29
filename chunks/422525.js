n.d(t, { Z: () => p });
var i = n(255367);
n(73800);
var r = n(481060),
    l = n(40851),
    s = n(749681),
    o = n(258971),
    a = n(434404),
    c = n(956324),
    u = n(640678),
    d = n(981631),
    g = n(49898),
    b = n(388032);
function p(e) {
    let t = (0, l.Aq)(),
        n = (0, c.Z)(e);
    if (__OVERLAY__ || !n) return null;
    let p = (n) => {
        a.Z.open(e.id, n), t.dispatch(d.CkL.POPOUT_CLOSE), (0, r.pTH)();
    };
    return (0, i.jsx)(r.sNh, {
        id: 'guild-settings',
        label: b.intl.string(b.t['154/bG']),
        action: () => p(),
        children: (0, u.t)(e).map((t) => {
            let { section: n, label: l } = t;
            if (null == l) return null;
            switch (n) {
                case d.pNK.DELETE:
                    return null;
                case d.pNK.COMMUNITY:
                    return (0, i.jsx)(
                        r.sNh,
                        {
                            id: n,
                            action: () => p(n),
                            label: b.intl.string(b.t.nRtNqq)
                        },
                        n
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
                                        entrypoint: { name: o.xF.GUILD_HEADER_POPOUT }
                                    }
                                });
                            },
                            label: l
                        },
                        n
                    );
                default:
                    return (0, i.jsx)(
                        r.sNh,
                        {
                            id: n,
                            action: () => p(n),
                            label: l
                        },
                        n
                    );
            }
        })
    });
}
