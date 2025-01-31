n.d(t, { Z: () => N });
var i = n(200651);
n(192379);
var l = n(481060),
    s = n(40851),
    a = n(132871),
    r = n(147890),
    d = n(593128),
    u = n(434404),
    c = n(956324),
    o = n(640678),
    g = n(84615),
    E = n(981631),
    h = n(308083),
    S = n(388032);
function N(e) {
    let t = (0, s.Aq)(),
        n = (0, c.Z)(e);
    if (__OVERLAY__ || !n) return null;
    let N = (n) => {
        u.Z.open(e.id, n), t.dispatch(E.CkL.POPOUT_CLOSE), (0, l.pTH)();
    };
    return (0, i.jsx)(l.sNh, {
        id: 'guild-settings',
        label: S.intl.string(S.t['154/bG']),
        action: () => N(),
        children: (0, o.t)(e).map((t) => {
            let { section: n, label: s } = t;
            if (null == s) return null;
            switch (n) {
                case E.pNK.DELETE:
                    return null;
                case E.pNK.COMMUNITY:
                    return (0, i.jsx)(
                        l.sNh,
                        {
                            id: n,
                            action: () => N(n),
                            label: S.intl.string(S.t.nRtNqq)
                        },
                        n
                    );
                case E.pNK.APP_DIRECTORY:
                    return (0, i.jsx)(
                        l.sNh,
                        {
                            id: n,
                            action: () => {
                                (0, r.dx)({
                                    guildId: e.id,
                                    entrypoint: { name: a.n3.GUILD_CONTEXT_MENU }
                                });
                            },
                            label: s
                        },
                        n
                    );
                case E.pNK.CLAN:
                    return (0, i.jsx)(l.sNh, {
                        id: 'guild-settings',
                        label: S.intl.string(S.t['6g8uHB']),
                        action: () =>
                            (0, g.q4)(
                                (t) => {
                                    let { closeLayer: n } = t;
                                    return (0, i.jsx)(d.Z, {
                                        onClose: n,
                                        guildId: e.id
                                    });
                                },
                                { layerKey: h.q2 }
                            )
                    });
                default:
                    return (0, i.jsx)(
                        l.sNh,
                        {
                            id: n,
                            action: () => N(n),
                            label: s
                        },
                        n
                    );
            }
        })
    });
}
