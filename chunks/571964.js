l.d(n, { A: () => p }), l(321073);
var r = l(627968);
l(64700);
var a = l(17928),
    t = l(477782),
    i = l(545059),
    o = l(870391),
    u = l(994500),
    d = l(589051),
    s = l(521398),
    c = l(375708);
function p(e) {
    let { user: n, onAction: l, groupId: p } = e,
        { hasFriendList: h } = (0, d.M8)("useManageFriendGroupsItems"),
        g = n.id,
        [A, m] = (0, a.yK)([u.A, o.A], () => [u.A.isFriend(g), o.A.getGroups()], [g]);
    if (!h || !A) return null;
    let f = [];
    return (
        m.length > 0
            ? f.push(
                  (0, r.jsxs)(
                      t.Dr,
                      {
                          id: "add-to-group",
                          label: "Add to Group",
                          children: [
                              m.map((e) =>
                                  (0, r.jsx)(
                                      t.Dr,
                                      {
                                          id: `add-${e.id}`,
                                          label: e.name,
                                          action: () => {
                                              l?.(), i.A.addUsersToGroup(e.id, g);
                                          },
                                      },
                                      e.id,
                                  ),
                              ),
                              (0, r.jsx)(t.bX, {}, "add-to-group-separator"),
                              (0, r.jsx)(
                                  t.Dr,
                                  {
                                      id: "create-new-group",
                                      label: c.intl.string(c.t["3hF1W4"]),
                                      action: () => {
                                          l?.(), (0, s.R)({ initialUserIds: [g] });
                                      },
                                  },
                                  "create-new-group",
                              ),
                          ],
                      },
                      "add-to-group",
                  ),
              )
            : 0 === m.length &&
              f.push(
                  (0, r.jsx)(
                      t.Dr,
                      {
                          id: "create-new-group",
                          label: c.intl.string(c.t["3hF1W4"]),
                          action: () => {
                              l?.(), (0, s.R)({ initialUserIds: [g] });
                          },
                      },
                      "create-new-group",
                  ),
              ),
        null != p &&
            f.push(
                (0, r.jsx)(
                    t.Dr,
                    {
                        id: "remove-from-group",
                        label: "Remove from Group",
                        action: () => {
                            l?.(), i.A.removeUsersFromGroup(p, g);
                        },
                    },
                    "remove-from-group",
                ),
            ),
        f
    );
}
