l.d(n, { A: () => p }), l(321073);
var r = l(627968);
l(64700);
var a = l(17928),
    t = l(477782),
    i = l(192308),
    o = l(545059),
    u = l(870391),
    d = l(994500),
    s = l(589051),
    c = l(375708);
function p(e) {
    let { user: n, onAction: p, groupId: h } = e,
        { hasFriendList: g } = (0, s.M8)("useManageFriendGroupsItems"),
        A = n.id,
        [f, m] = (0, a.yK)([d.A, u.A], () => [d.A.isFriend(A), u.A.getGroups()], [A]);
    if (!g || !f) return null;
    let v = [];
    return (
        m.length > 0
            ? v.push(
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
                                              p?.(), o.A.addUsersToGroup(e.id, A);
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
                                          p?.(),
                                              (0, i.openModalLazy)(async () => {
                                                  let { default: e } = await l.e("51080").then(l.bind(l, 297147));
                                                  return (n) => (0, r.jsx)(e, { ...n, initialUserIds: [A] });
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
            : 0 === m.length &&
              v.push(
                  (0, r.jsx)(
                      t.Dr,
                      {
                          id: "create-new-group",
                          label: c.intl.string(c.t["3hF1W4"]),
                          action: () => {
                              p?.(),
                                  (0, i.openModalLazy)(async () => {
                                      let { default: e } = await l.e("51080").then(l.bind(l, 297147));
                                      return (n) => (0, r.jsx)(e, { ...n, initialUserIds: [A] });
                                  });
                          },
                      },
                      "create-new-group",
                  ),
              ),
        null != h &&
            v.push(
                (0, r.jsx)(
                    t.Dr,
                    {
                        id: "remove-from-group",
                        label: "Remove from Group",
                        action: () => {
                            p?.(), o.A.removeUsersFromGroup(h, A);
                        },
                    },
                    "remove-from-group",
                ),
            ),
        v
    );
}
