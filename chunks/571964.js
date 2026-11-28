l(321073);
var r = l(477900);
l(582128);
var t = l(855986),
    a = l(477782),
    i = l(545059),
    u = l(870391),
    o = l(994500),
    d = l(589051),
    s = l(521398),
    c = l(313855),
    p = l(792996);
l.d(
    n,
    {},
    {
        A: function (e) {
            let { user: n, onAction: l, groupId: h } = e,
                { hasFriendList: g } = (0, d.M8)("useManageFriendGroupsItems"),
                A = n.id,
                [f, m] = (0, t.yK)([o.A, u.A], () => [o.A.isFriend(A), u.A.getGroups()], [A]);
            if (!g || !f) return null;
            let v = [];
            return (
                m.length > 0
                    ? v.push(
                          (0, r.jsxs)(
                              a.Dr,
                              {
                                  id: "add-to-group",
                                  label: p.intl.string(c.default["0L86g9"]),
                                  children: [
                                      m.map((e) =>
                                          (0, r.jsx)(
                                              a.Dr,
                                              {
                                                  id: `add-${e.id}`,
                                                  label: e.name,
                                                  action: () => {
                                                      (l?.(), i.A.addUsersToGroup(e.id, A));
                                                  },
                                              },
                                              e.id,
                                          ),
                                      ),
                                      (0, r.jsx)(a.bX, {}, "add-to-group-separator"),
                                      (0, r.jsx)(
                                          a.Dr,
                                          {
                                              id: "create-new-group",
                                              label: p.intl.string(p.t["3hF1W4"]),
                                              action: () => {
                                                  (l?.(), (0, s.R)({ initialUserIds: [A] }));
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
                              a.Dr,
                              {
                                  id: "create-new-group",
                                  label: p.intl.string(p.t["3hF1W4"]),
                                  action: () => {
                                      (l?.(), (0, s.R)({ initialUserIds: [A] }));
                                  },
                              },
                              "create-new-group",
                          ),
                      ),
                null != h &&
                    v.push(
                        (0, r.jsx)(
                            a.Dr,
                            {
                                id: "remove-from-group",
                                label: "Remove from Group",
                                action: () => {
                                    (l?.(), i.A.removeUsersFromGroup(h, A));
                                },
                            },
                            "remove-from-group",
                        ),
                    ),
                v
            );
        },
    },
);
