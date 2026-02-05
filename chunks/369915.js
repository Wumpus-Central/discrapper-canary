n.d(t, { A: () => p }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(442433),
    r = n(686956),
    o = n(366811),
    d = n(383394),
    c = n(458294),
    u = n(71393),
    h = n(403362),
    A = n(842452),
    g = n(305928),
    m = n(652215);
let p = l.memo(function (e) {
    let { folderNode: t, ...p } = e,
        { id: _, name: x, color: f, children: E } = t,
        C = E.map((e) => e.id),
        I = (0, o.A)((e) => e.guildId),
        S = (0, s.bG)([d.A], () => d.A.isFolderExpanded(_)),
        b = (function (e) {
            let t = e.children
                    .map((e) => {
                        let t = e.id,
                            n = u.A.getGuild(t);
                        return null != n ? n.name : null;
                    })
                    .filter(h.Vq),
                n = 2 * m.F05,
                i = [];
            for (let e of t) (e.length < n || 0 === i.length) && (i.push(e), (n -= e.length));
            return `${i.join(", ")}${i.length < t.length ? ", ..." : ""}`;
        })(t),
        N = (0, g.A)(t),
        {
            mentionCount: T,
            isMentionLowImportance: j,
            unread: v,
        } = (0, s.cf)([c.default], () => ({
            mentionCount: C.map((e) => c.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: C.every((e) => c.default.getIsMentionLowImportance(e)),
            unread: C.some((e) => c.default.hasUnread(e)),
        })),
        y = l.useCallback(() => {
            r.A.toggleGuildFolderExpand(_);
        }, [_]),
        R = l.useCallback(
            (e) => {
                (0, a.L3)(e, async () => {
                    let { default: e } = await n.e("32857").then(n.bind(n, 842112));
                    return (t) =>
                        (0, i.jsx)(e, { ...t, folderId: _, folderName: x, folderColor: f, unread: v || T > 0 });
                });
            },
            [_, x, f, v, T],
        );
    return (0, i.jsx)(A.A, {
        ...p,
        folderNode: t,
        expanded: S,
        selected: null != I && C.includes(I),
        mentionCount: T,
        isMentionLowImportance: j,
        unread: v,
        mediaState: N,
        defaultFolderName: b,
        onExpandCollapse: y,
        onContextMenu: R,
    });
});
