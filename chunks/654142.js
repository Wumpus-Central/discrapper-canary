n(653041), n(47120), n(724458);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(239091),
    o = n(749210),
    s = n(905423),
    c = n(664915),
    u = n(888369),
    d = n(430824),
    h = n(823379),
    p = n(179809),
    f = n(652376),
    m = n(981631);
t.Z = l.memo(function (e) {
    let { folderNode: t, ...g } = e,
        { id: v, name: C, color: x, children: I } = t,
        _ = I.map((e) => e.id),
        Z = (0, s.Z)((e) => e.guildId),
        b = (0, r.e7)([c.Z], () => c.Z.isFolderExpanded(v)),
        S = (function (e) {
            let t = e.children
                    .map((e) => {
                        let t = e.id,
                            n = d.Z.getGuild(t);
                        return null != n ? n.name : null;
                    })
                    .filter(h.lm),
                n = 2 * m.dYL,
                i = [];
            for (let e of t) (e.length < n || 0 === i.length) && (i.push(e), (n -= e.length));
            return ''.concat(i.join(', ')).concat(i.length < t.length ? ', ...' : '');
        })(t),
        N = (0, f.Z)(t),
        {
            mentionCount: E,
            isMentionLowImportance: y,
            unread: j
        } = (0, r.cj)([u.default], () => ({
            mentionCount: _.map((e) => u.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: _.every((e) => u.default.getIsMentionLowImportance(e)),
            unread: _.some((e) => u.default.hasUnread(e))
        })),
        T = l.useCallback(() => {
            o.Z.toggleGuildFolderExpand(v);
        }, [v]),
        P = l.useCallback(
            (e) => {
                (0, a.jW)(e, async () => {
                    let { default: e } = await n.e('52590').then(n.bind(n, 205784));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            folderId: v,
                            folderName: C,
                            folderColor: x,
                            unread: j || E > 0
                        });
                });
            },
            [v, C, x, j, E]
        );
    return (0, i.jsx)(p.Z, {
        ...g,
        folderNode: t,
        expanded: b,
        selected: null != Z && _.includes(Z),
        mentionCount: E,
        isMentionLowImportance: y,
        unread: j,
        mediaState: N,
        defaultFolderName: S,
        onExpandCollapse: T,
        onContextMenu: P
    });
});
