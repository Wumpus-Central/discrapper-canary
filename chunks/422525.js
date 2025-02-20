n.d(t, { Z: () => S });
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(40851),
    l = n(132871),
    a = n(147890),
    o = n(593128),
    c = n(434404),
    u = n(956324),
    d = n(640678),
    g = n(84615),
    b = n(981631),
    p = n(308083),
    N = n(388032);
function S(e) {
    let t = (0, s.Aq)(),
        n = (0, u.Z)(e);
    if (__OVERLAY__ || !n) return null;
    let S = (n) => {
        c.Z.open(e.id, n), t.dispatch(b.CkL.POPOUT_CLOSE), (0, r.pTH)();
    };
    return (0, i.jsx)(r.sNh, {
        id: 'guild-settings',
        label: N.NW.string(N.t['154/bG']),
        action: () => S(),
        children: (0, d.t)(e).map((t) => {
            let { section: n, label: s } = t;
            if (null == s) return null;
            switch (n) {
                case b.pNK.DELETE:
                    return null;
                case b.pNK.COMMUNITY:
                    return (0, i.jsx)(
                        r.sNh,
                        {
                            id: n,
                            action: () => S(n),
                            label: N.NW.string(N.t.nRtNqq)
                        },
                        n
                    );
                case b.pNK.APP_DIRECTORY:
                    return (0, i.jsx)(
                        r.sNh,
                        {
                            id: n,
                            action: () => {
                                (0, a.dx)({
                                    guildId: e.id,
                                    entrypoint: { name: l.n3.GUILD_CONTEXT_MENU }
                                });
                            },
                            label: s
                        },
                        n
                    );
                case b.pNK.CLAN:
                    return (0, i.jsx)(r.sNh, {
                        id: 'guild-settings',
                        label: N.NW.string(N.t['6g8uHB']),
                        action: () =>
                            (0, g.q4)(
                                (t) => {
                                    let { closeLayer: n } = t;
                                    return (0, i.jsx)(o.Z, {
                                        onClose: n,
                                        guildId: e.id
                                    });
                                },
                                { layerKey: p.q2 }
                            )
                    });
                default:
                    return (0, i.jsx)(
                        r.sNh,
                        {
                            id: n,
                            action: () => S(n),
                            label: s
                        },
                        n
                    );
            }
        })
    });
}
