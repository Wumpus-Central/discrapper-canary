e.d(t, { default: () => x });
var i = e(477900);
e(582128);
var s = e(17928),
    r = e(980707),
    n = e(477782),
    a = e(192308),
    d = e(442433),
    o = e(66834),
    u = e(383394),
    c = e(711014),
    b = e(567035),
    f = e(727479),
    g = e(375708),
    m = e(652215);
function x(l) {
    let { folderId: t, folderName: x, folderColor: h, unread: p, onSelect: A } = l,
        j = (0, s.bG)([c.Ay], () => c.Ay.getGuildFolderById(t), [t]),
        v = (0, s.bG)([u.A], () => u.A.getExpandedFolders().size > 0),
        L = (function (l) {
            let t = (function (l) {
                let [t] = (0, s.yK)([c.Ay], () => {
                        let l = c.Ay.getGuildsTree();
                        return [l, l.version];
                    }),
                    e = t.getNode(l),
                    i = t.getRoots(),
                    r = i.length > 1 ? { first: i[0], last: i[i.length - 1] } : null;
                return null == e || null == r
                    ? null
                    : {
                          label: g.intl.string(g.t.A95Fzm),
                          placements: {
                              firstLabel: g.intl.string(g.t.IMqgs9),
                              lastLabel: g.intl.string(g.t["8fQe3x"]),
                              isFirst: r.first === e,
                              isLast: r.last === e,
                              moveFirst: () => (0, f.A)(l, r.first.id, !1),
                              moveLast: () => (0, f.A)(l, r.last.id, !0),
                          },
                      };
            })(l);
            if (null == t) return null;
            let { placements: e } = t;
            return (0, i.jsxs)(n.Dr, {
                id: "move-to",
                label: t.label,
                children: [
                    (0, i.jsx)(n.Dr, {
                        id: "move-to-first",
                        label: e.firstLabel,
                        disabled: e.isFirst,
                        action: e.moveFirst,
                    }),
                    (0, i.jsx)(n.Dr, {
                        id: "move-to-last",
                        label: e.lastLabel,
                        disabled: e.isLast,
                        action: e.moveLast,
                    }),
                ],
            });
        })(t);
    return (0, i.jsxs)(r.W, {
        "data-menu-migrated": !0,
        navId: "guild-context",
        "aria-label": g.intl.string(g.t.HpQykc),
        onClose: d.Z_,
        onSelect: A,
        children: [
            (0, i.jsx)(n.rX, {
                children: (0, i.jsx)(n.Dr, {
                    id: "mark-folder-read",
                    label: g.intl.string(g.t.thzRJA),
                    action: function () {
                        if (null == j) return;
                        let { guildIds: l } = j;
                        (0, b.A)(l, m.JJy.GUILD_LIST);
                    },
                    disabled: !p,
                }),
            }),
            (0, i.jsx)(n.rX, { children: L }),
            (0, i.jsxs)(n.rX, {
                children: [
                    (0, i.jsx)(n.Dr, {
                        id: "folder-settings",
                        label: g.intl.string(g.t.Dx7im5),
                        action: () =>
                            (0, a.openModalLazy)(async () => {
                                let { default: l } = await Promise.all([e.e("507278"), e.e("699116")]).then(
                                    e.bind(e, 672551),
                                );
                                return (e) => (0, i.jsx)(l, { ...e, folderId: t, folderName: x, folderColor: h });
                            }),
                    }),
                    v &&
                        (0, i.jsx)(n.Dr, {
                            id: "folder-collapse",
                            label: g.intl.string(g.t.rCPsbo),
                            action: () => o.A.collapseAllFolders(),
                        }),
                ],
            }),
        ],
    });
}
