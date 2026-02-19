"use strict";
n.d(t, { A: () => m }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(442433),
    a = n(686956),
    o = n(366811),
    c = n(383394),
    d = n(458294),
    u = n(71393),
    h = n(403362),
    A = n(842452),
    p = n(305928),
    g = n(652215);
let m = s.memo(function (e) {
    let { folderNode: t, ...m } = e,
        { id: _, name: f, color: x, children: C } = t,
        E = C.map((e) => e.id),
        I = (0, o.A)((e) => e.guildId),
        b = (0, l.bG)([c.A], () => c.A.isFolderExpanded(_)),
        N = (function (e) {
            let t = e.children
                    .map((e) => {
                        let t = e.id,
                            n = u.A.getGuild(t);
                        return null != n ? n.name : null;
                    })
                    .filter(h.Vq),
                n = 2 * g.F05,
                i = [];
            for (let e of t) (e.length < n || 0 === i.length) && (i.push(e), (n -= e.length));
            return `${i.join(", ")}${i.length < t.length ? ", ..." : ""}`;
        })(t),
        S = (0, p.A)(t),
        {
            mentionCount: T,
            isMentionLowImportance: v,
            unread: y,
        } = (0, l.cf)([d.default], () => ({
            mentionCount: E.map((e) => d.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: E.every((e) => d.default.getIsMentionLowImportance(e)),
            unread: E.some((e) => d.default.hasUnread(e)),
        })),
        j = s.useCallback(() => {
            a.A.toggleGuildFolderExpand(_);
        }, [_]),
        R = s.useCallback(
            (e) => {
                (0, r.L3)(e, async () => {
                    let { default: e } = await n.e("32857").then(n.bind(n, 842112));
                    return (t) =>
                        (0, i.jsx)(e, { ...t, folderId: _, folderName: f, folderColor: x, unread: y || T > 0 });
                });
            },
            [_, f, x, y, T],
        );
    return (0, i.jsx)(A.A, {
        ...m,
        folderNode: t,
        expanded: b,
        selected: null != I && E.includes(I),
        mentionCount: T,
        isMentionLowImportance: v,
        unread: y,
        mediaState: S,
        defaultFolderName: N,
        onExpandCollapse: j,
        onContextMenu: R,
    });
});
