n.d(t, { Z: () => d }), n(388685), n(539854);
var i = n(54381);
n(473749);
var l = n(442837),
    r = n(481060),
    o = n(313426),
    a = n(643327),
    u = n(699516);
function d(e) {
    let { user: t, onAction: n, groupId: d } = e,
        s = t.id,
        [c, f] = (0, l.Wu)([u.Z, a.Z], () => [u.Z.isFriend(s), a.Z.getGroups()], [s]);
    if (!c || 0 === f.length) return null;
    let g = [];
    return (
        f.length > 0 &&
            g.push(
                (0, i.jsx)(
                    r.sNh,
                    {
                        id: "add-to-group",
                        label: "Add to Group",
                        children: f.map((e) =>
                            (0, i.jsx)(
                                r.sNh,
                                {
                                    id: "add-".concat(e.id),
                                    label: e.name,
                                    action: () => {
                                        null == n || n(), o.Z.addUsersToGroup(e.id, s);
                                    },
                                },
                                e.id,
                            ),
                        ),
                    },
                    "add-to-group",
                ),
            ),
        null != d &&
            g.push(
                (0, i.jsx)(
                    r.sNh,
                    {
                        id: "remove-from-group",
                        label: "Remove from Group",
                        action: () => {
                            null == n || n(), o.Z.removeUsersFromGroup(d, s);
                        },
                    },
                    "remove-from-group",
                ),
            ),
        g
    );
}
