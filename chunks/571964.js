n.d(t, { A: () => A }), n(321073);
var r = n(627968);
n(64700);
var i = n(17928),
    l = n(477782),
    a = n(192308),
    d = n(545059),
    s = n(870391),
    u = n(994500),
    o = n(589051),
    c = n(985018);
function A(e) {
    let { user: t, onAction: A, groupId: g } = e,
        { hasFriendList: f } = (0, o.M8)("useManageFriendGroupsItems"),
        h = t.id,
        [E, I] = (0, i.yK)([u.A, s.A], () => [u.A.isFriend(h), s.A.getGroups()], [h]);
    if (!f || !E) return null;
    let _ = [];
    return (
        I.length > 0
            ? _.push(
                  (0, r.jsxs)(
                      l.Dr,
                      {
                          id: "add-to-group",
                          label: "Add to Group",
                          children: [
                              I.map((e) =>
                                  (0, r.jsx)(
                                      l.Dr,
                                      {
                                          id: `add-${e.id}`,
                                          label: e.name,
                                          action: () => {
                                              A?.(), d.A.addUsersToGroup(e.id, h);
                                          },
                                      },
                                      e.id,
                                  ),
                              ),
                              (0, r.jsx)(l.bX, {}, "add-to-group-separator"),
                              (0, r.jsx)(
                                  l.Dr,
                                  {
                                      id: "create-new-group",
                                      label: c.intl.string(c.t["3hF1W4"]),
                                      action: () => {
                                          A?.(),
                                              (0, a.openModalLazy)(async () => {
                                                  let { default: e } = await n.e("51080").then(n.bind(n, 297147));
                                                  return (t) => (0, r.jsx)(e, { ...t, initialUserIds: [h] });
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
            : 0 === I.length &&
              _.push(
                  (0, r.jsx)(
                      l.Dr,
                      {
                          id: "create-new-group",
                          label: c.intl.string(c.t["3hF1W4"]),
                          action: () => {
                              A?.(),
                                  (0, a.openModalLazy)(async () => {
                                      let { default: e } = await n.e("51080").then(n.bind(n, 297147));
                                      return (t) => (0, r.jsx)(e, { ...t, initialUserIds: [h] });
                                  });
                          },
                      },
                      "create-new-group",
                  ),
              ),
        null != g &&
            _.push(
                (0, r.jsx)(
                    l.Dr,
                    {
                        id: "remove-from-group",
                        label: "Remove from Group",
                        action: () => {
                            A?.(), d.A.removeUsersFromGroup(g, h);
                        },
                    },
                    "remove-from-group",
                ),
            ),
        _
    );
}
