n.d(t, { A: () => g }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(442433),
    r = n(686956),
    o = n(366811),
    c = n(383394),
    d = n(458294),
    u = n(71393),
    h = n(403362),
    A = n(842452),
    _ = n(305928),
    m = n(652215);
let g = l.memo(function (e) {
    let { folderNode: t, ...g } = e,
        { id: p, name: f, color: x, children: E } = t,
        I = E.map((e) => e.id),
        C = (0, o.A)((e) => e.guildId),
        N = (0, s.bG)([c.A], () => c.A.isFolderExpanded(p)),
        T = (function (e) {
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
        S = (0, _.A)(t),
        {
            mentionCount: b,
            isMentionLowImportance: y,
            unread: v,
        } = (0, s.cf)([d.default], () => ({
            mentionCount: I.map((e) => d.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: I.every((e) => d.default.getIsMentionLowImportance(e)),
            unread: I.some((e) => d.default.hasUnread(e)),
        })),
        j = l.useCallback(() => {
            r.A.toggleGuildFolderExpand(p);
        }, [p]),
        R = l.useCallback(
            (e) => {
                (0, a.L3)(e, async () => {
                    let { default: e } = await n.e("32857").then(n.bind(n, 842112));
                    return (t) =>
                        (0, i.jsx)(e, { ...t, folderId: p, folderName: f, folderColor: x, unread: v || b > 0 });
                });
            },
            [p, f, x, v, b],
        );
    return (0, i.jsx)(A.A, {
        ...g,
        folderNode: t,
        expanded: N,
        selected: null != C && I.includes(C),
        mentionCount: b,
        isMentionLowImportance: y,
        unread: v,
        mediaState: S,
        defaultFolderName: T,
        onExpandCollapse: j,
        onContextMenu: R,
    });
});
