t.d(n, {
    Z: function () {
        return f;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    a = t(40851),
    s = t(132871),
    r = t(147890),
    u = t(593128),
    o = t(434404),
    d = t(956324),
    c = t(640678),
    g = t(84615),
    E = t(981631),
    h = t(308083),
    M = t(388032);
function f(e) {
    let n = (0, a.Aq)(),
        t = (0, d.Z)(e);
    if (__OVERLAY__ || !t) return null;
    let f = (t) => {
        o.Z.open(e.id, t), n.dispatch(E.CkL.POPOUT_CLOSE), (0, l.closeAllModals)();
    };
    return (0, i.jsx)(l.MenuItem, {
        id: 'guild-settings',
        label: M.intl.string(M.t['154/bG']),
        action: () => f(),
        children: (0, c.t)(e).map((n) => {
            let { section: t, label: a } = n;
            if (null == a) return null;
            switch (t) {
                case E.pNK.DELETE:
                    return null;
                case E.pNK.COMMUNITY:
                    return (0, i.jsx)(
                        l.MenuItem,
                        {
                            id: t,
                            action: () => f(t),
                            label: M.intl.string(M.t.nRtNqq)
                        },
                        t
                    );
                case E.pNK.APP_DIRECTORY:
                    return (0, i.jsx)(
                        l.MenuItem,
                        {
                            id: t,
                            action: () => {
                                (0, r.goToAppDirectory)({
                                    guildId: e.id,
                                    entrypoint: { name: s.ApplicationDirectoryEntrypointNames.GUILD_CONTEXT_MENU }
                                });
                            },
                            label: a
                        },
                        t
                    );
                case E.pNK.CLAN:
                    return (0, i.jsx)(l.MenuItem, {
                        id: 'guild-settings',
                        label: M.intl.string(M.t['6g8uHB']),
                        action: () =>
                            (0, g.q4)(
                                (n) => {
                                    let { closeLayer: t } = n;
                                    return (0, i.jsx)(u.Z, {
                                        onClose: t,
                                        guildId: e.id
                                    });
                                },
                                { layerKey: h.q2 }
                            )
                    });
                default:
                    return (0, i.jsx)(
                        l.MenuItem,
                        {
                            id: t,
                            action: () => f(t),
                            label: a
                        },
                        t
                    );
            }
        })
    });
}
