n.d(t, { Z: () => f }), n(653041), n(47120), n(724458);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(239091),
    a = n(749210),
    s = n(905423),
    c = n(664915),
    d = n(888369),
    u = n(430824),
    h = n(823379),
    p = n(179809),
    m = n(652376),
    g = n(981631);
let f = l.memo(function (e) {
    let { folderNode: t, ...f } = e,
        { id: _, name: v, color: C, children: x } = t,
        I = x.map((e) => e.id),
        Z = (0, s.Z)((e) => e.guildId),
        b = (0, r.e7)([c.Z], () => c.Z.isFolderExpanded(_)),
        S = (function (e) {
            let t = e.children
                    .map((e) => {
                        let t = e.id,
                            n = u.Z.getGuild(t);
                        return null != n ? n.name : null;
                    })
                    .filter(h.lm),
                n = 2 * g.dYL,
                i = [];
            for (let e of t) (e.length < n || 0 === i.length) && (i.push(e), (n -= e.length));
            return ''.concat(i.join(', ')).concat(i.length < t.length ? ', ...' : '');
        })(t),
        N = (0, m.Z)(t),
        {
            mentionCount: E,
            isMentionLowImportance: j,
            unread: y
        } = (0, r.cj)([d.default], () => ({
            mentionCount: I.map((e) => d.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: I.every((e) => d.default.getIsMentionLowImportance(e)),
            unread: I.some((e) => d.default.hasUnread(e))
        })),
        T = l.useCallback(() => {
            a.Z.toggleGuildFolderExpand(_);
        }, [_]),
        A = l.useCallback(
            (e) => {
                (0, o.jW)(e, async () => {
                    let { default: e } = await n.e('52590').then(n.bind(n, 205784));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            folderId: _,
                            folderName: v,
                            folderColor: C,
                            unread: y || E > 0
                        });
                });
            },
            [_, v, C, y, E]
        );
    return (0, i.jsx)(p.Z, {
        ...f,
        folderNode: t,
        expanded: b,
        selected: null != Z && I.includes(Z),
        mentionCount: E,
        isMentionLowImportance: j,
        unread: y,
        mediaState: N,
        defaultFolderName: S,
        onExpandCollapse: T,
        onContextMenu: A
    });
});
