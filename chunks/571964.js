n.d(t, { A: () => A }), n(321073);
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(477782),
    a = n(192308),
    d = n(545059),
    s = n(870391),
    o = n(994500),
    u = n(589051),
    c = n(985018);
function A(e) {
    let { user: t, onAction: A, groupId: g } = e,
        { hasFriendList: f } = (0, u.M8)("useManageFriendGroupsItems"),
        b = t.id,
        [E, v] = (0, i.yK)([o.A, s.A], () => [o.A.isFriend(b), s.A.getGroups()], [b]);
    if (!f || !E) return null;
    let h = [];
    return (
        v.length > 0
            ? h.push(
                  (0, l.jsxs)(
                      r.Dr,
                      {
                          id: "add-to-group",
                          label: "Add to Group",
                          children: [
                              v.map((e) =>
                                  (0, l.jsx)(
                                      r.Dr,
                                      {
                                          id: `add-${e.id}`,
                                          label: e.name,
                                          action: () => {
                                              A?.(), d.A.addUsersToGroup(e.id, b);
                                          },
                                      },
                                      e.id,
                                  ),
                              ),
                              (0, l.jsx)(r.bX, {}, "add-to-group-separator"),
                              (0, l.jsx)(
                                  r.Dr,
                                  {
                                      id: "create-new-group",
                                      label: c.intl.string(c.t["3hF1W4"]),
                                      action: () => {
                                          A?.(),
                                              (0, a.openModalLazy)(async () => {
                                                  let { default: e } = await n.e("51080").then(n.bind(n, 297147));
                                                  return (t) => (0, l.jsx)(e, { ...t, initialUserIds: [b] });
                                              });
                                      },
                                  },
                                  "create-new-group",
                              ),
                          ],
                      },
                      "add-to-group",
                  ),
              )
            : 0 === v.length &&
              h.push(
                  (0, l.jsx)(
                      r.Dr,
                      {
                          id: "create-new-group",
                          label: c.intl.string(c.t["3hF1W4"]),
                          action: () => {
                              A?.(),
                                  (0, a.openModalLazy)(async () => {
                                      let { default: e } = await n.e("51080").then(n.bind(n, 297147));
                                      return (t) => (0, l.jsx)(e, { ...t, initialUserIds: [b] });
                                  });
                          },
                      },
                      "create-new-group",
                  ),
              ),
        null != g &&
            h.push(
                (0, l.jsx)(
                    r.Dr,
                    {
                        id: "remove-from-group",
                        label: "Remove from Group",
                        action: () => {
                            A?.(), d.A.removeUsersFromGroup(g, b);
                        },
                    },
                    "remove-from-group",
                ),
            ),
        h
    );
}
