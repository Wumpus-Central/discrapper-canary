t.d(l, { default: () => b });
var i = t(200651);
t(192379);
var n = t(442837),
    d = t(481060),
    r = t(239091),
    a = t(749210),
    s = t(664915),
    o = t(771845),
    u = t(181945),
    c = t(945983),
    f = t(981631),
    m = t(388032);
function b(e) {
    var l;
    let { folderId: b, folderName: g, folderColor: h, unread: p, onSelect: k } = e,
        Z = (0, n.e7)([o.ZP], () => o.ZP.getGuildFolderById(b), [b]),
        j = (0, c.Z)(null !== (l = null == Z ? void 0 : Z.guildIds) && void 0 !== l ? l : []),
        x = (0, n.e7)([s.Z], () => s.Z.getExpandedFolders().size > 0);
    return (0, i.jsxs)(d.v2r, {
        navId: 'guild-context',
        'aria-label': m.intl.string(m.t.HpQykZ),
        onClose: r.Zy,
        onSelect: k,
        children: [
            (0, i.jsx)(d.kSQ, {
                children: (0, i.jsx)(d.sNh, {
                    id: 'mark-folder-read',
                    label: m.intl.string(m.t.thzRJC),
                    action: function () {
                        if (null == Z) return;
                        let { guildIds: e } = Z;
                        (0, u.Z)(e, f.jXE.GUILD_LIST);
                    },
                    disabled: !p
                })
            }),
            null != j ? (0, i.jsx)(d.kSQ, { children: j }) : null,
            (0, i.jsxs)(d.kSQ, {
                children: [
                    (0, i.jsx)(d.sNh, {
                        id: 'folder-settings',
                        label: m.intl.string(m.t.Dx7im5),
                        action: () =>
                            (0, d.ZDy)(async () => {
                                let { default: e } = await t.e('66915').then(t.bind(t, 662708));
                                return (l) =>
                                    (0, i.jsx)(e, {
                                        ...l,
                                        folderId: b,
                                        folderName: g,
                                        folderColor: h
                                    });
                            })
                    }),
                    x &&
                        (0, i.jsx)(d.sNh, {
                            id: 'folder-collapse',
                            label: m.intl.string(m.t.rCPsbm),
                            action: () => a.Z.collapseAllFolders()
                        })
                ]
            })
        ]
    });
}
