n.d(t, {
    A: () => s,
}),
    n(896048),
    n(321073);
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    o = n(545059),
    a = n(870391),
    d = n(994500);

function s(e) {
    let { user: t, onAction: n, groupId: s } = e,
        u = t.id,
        [c, A] = (0, l.yK)([d.A, a.A], () => [d.A.isFriend(u), a.A.getGroups()], [u]);
    if (!c || 0 === A.length) return null;
    let b = [];
    return (
        A.length > 0 &&
            b.push(
                (0, r.jsx)(
                    i.Drp,
                    {
                        id: "add-to-group",
                        label: "Add to Group",
                        children: A.map((e) =>
                            (0, r.jsx)(
                                i.Drp,
                                {
                                    id: "add-".concat(e.id),
                                    label: e.name,
                                    action: () => {
                                        null == n || n(), o.A.addUsersToGroup(e.id, u);
                                    },
                                },
                                e.id,
                            ),
                        ),
                    },
                    "add-to-group",
                ),
            ),
        null != s &&
            b.push(
                (0, r.jsx)(
                    i.Drp,
                    {
                        id: "remove-from-group",
                        label: "Remove from Group",
                        action: () => {
                            null == n || n(), o.A.removeUsersFromGroup(s, u);
                        },
                    },
                    "remove-from-group",
                ),
            ),
        b
    );
}
