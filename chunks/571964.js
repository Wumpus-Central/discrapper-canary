n.d(t, { A: () => c }), n(321073);
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(545059),
    d = n(870391),
    s = n(994500),
    u = n(589051),
    o = n(985018);
function c(e) {
    let { user: t, onAction: c, groupId: A } = e,
        { hasFriendList: g } = (0, u.M8)("useManageFriendGroupsItems"),
        f = t.id,
        [E, h] = (0, i.yK)([s.A, d.A], () => [s.A.isFriend(f), d.A.getGroups()], [f]);
    if (!g || !E) return null;
    let p = [];
    return (
        h.length > 0
            ? p.push(
                  (0, r.jsxs)(
                      l.Drp,
                      {
                          id: "add-to-group",
                          label: "Add to Group",
                          children: [
                              h.map((e) =>
                                  (0, r.jsx)(
                                      l.Drp,
                                      {
                                          id: `add-${e.id}`,
                                          label: e.name,
                                          action: () => {
                                              c?.(), a.A.addUsersToGroup(e.id, f);
                                          },
                                      },
                                      e.id,
                                  ),
                              ),
                              (0, r.jsx)(l.bXX, {}, "add-to-group-separator"),
                              (0, r.jsx)(
                                  l.Drp,
                                  {
                                      id: "create-new-group",
                                      label: o.intl.string(o.t["3hF1W4"]),
                                      action: () => {
                                          c?.(),
                                              (0, l.mMO)(async () => {
                                                  let { default: e } = await n.e("51080").then(n.bind(n, 519528));
                                                  return (t) => (0, r.jsx)(e, { ...t, initialUserIds: [f] });
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
            : 0 === h.length &&
              p.push(
                  (0, r.jsx)(
                      l.Drp,
                      {
                          id: "create-new-group",
                          label: o.intl.string(o.t["3hF1W4"]),
                          action: () => {
                              c?.(),
                                  (0, l.mMO)(async () => {
                                      let { default: e } = await n.e("51080").then(n.bind(n, 519528));
                                      return (t) => (0, r.jsx)(e, { ...t, initialUserIds: [f] });
                                  });
                          },
                      },
                      "create-new-group",
                  ),
              ),
        null != A &&
            p.push(
                (0, r.jsx)(
                    l.Drp,
                    {
                        id: "remove-from-group",
                        label: "Remove from Group",
                        action: () => {
                            c?.(), a.A.removeUsersFromGroup(A, f);
                        },
                    },
                    "remove-from-group",
                ),
            ),
        p
    );
}
