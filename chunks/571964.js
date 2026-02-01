r.d(t, {
    A: () => s,
}),
    r(896048),
    r(321073);
var n = r(627968);
r(64700);
var i = r(311907),
    l = r(397927),
    o = r(545059),
    a = r(870391),
    c = r(994500),
    d = r(985018);

function s(e) {
    let { user: t, onAction: s, groupId: u } = e,
        A = t.id,
        [f, p] = (0, i.yK)([c.A, a.A], () => [c.A.isFriend(A), a.A.getGroups()], [A]);
    if (!f || 0 === p.length) return null;
    let b = [];
    return (
        p.length > 0 &&
            b.push(
                (0, n.jsxs)(
                    l.Drp,
                    {
                        id: "add-to-group",
                        label: "Add to Group",
                        children: [
                            p.map((e) =>
                                (0, n.jsx)(
                                    l.Drp,
                                    {
                                        id: "add-".concat(e.id),
                                        label: e.name,
                                        action: () => {
                                            null == s || s(), o.A.addUsersToGroup(e.id, A);
                                        },
                                    },
                                    e.id,
                                ),
                            ),
                            (0, n.jsx)(l.bXX, {}, "add-to-group-separator"),
                            (0, n.jsx)(
                                l.Drp,
                                {
                                    id: "create-new-group",
                                    label: d.intl.string(d.t["3hF1W4"]),
                                    action: () => {
                                        null == s || s(),
                                            (0, l.mMO)(async () => {
                                                let { default: e } = await r.e("51080").then(r.bind(r, 519528));
                                                return (t) => {
                                                    var r, i;
                                                    return (0, n.jsx)(
                                                        e,
                                                        ((r = (function (e) {
                                                            for (var t = 1; t < arguments.length; t++) {
                                                                var r = null != arguments[t] ? arguments[t] : {},
                                                                    n = Object.keys(r);
                                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                                    (n = n.concat(
                                                                        Object.getOwnPropertySymbols(r).filter(
                                                                            function (e) {
                                                                                return Object.getOwnPropertyDescriptor(
                                                                                    r,
                                                                                    e,
                                                                                ).enumerable;
                                                                            },
                                                                        ),
                                                                    )),
                                                                    n.forEach(function (t) {
                                                                        var n;
                                                                        (n = r[t]),
                                                                            t in e
                                                                                ? Object.defineProperty(e, t, {
                                                                                      value: n,
                                                                                      enumerable: !0,
                                                                                      configurable: !0,
                                                                                      writable: !0,
                                                                                  })
                                                                                : (e[t] = n);
                                                                    });
                                                            }
                                                            return e;
                                                        })({}, t)),
                                                        (i = i =
                                                            {
                                                                initialUserIds: [A],
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(
                                                                  r,
                                                                  Object.getOwnPropertyDescriptors(i),
                                                              )
                                                            : (function (e, t) {
                                                                  var r = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var n = Object.getOwnPropertySymbols(e);
                                                                      r.push.apply(r, n);
                                                                  }
                                                                  return r;
                                                              })(Object(i)).forEach(function (e) {
                                                                  Object.defineProperty(
                                                                      r,
                                                                      e,
                                                                      Object.getOwnPropertyDescriptor(i, e),
                                                                  );
                                                              }),
                                                        r),
                                                    );
                                                };
                                            });
                                    },
                                },
                                "create-new-group",
                            ),
                        ],
                    },
                    "add-to-group",
                ),
            ),
        null != u &&
            b.push(
                (0, n.jsx)(
                    l.Drp,
                    {
                        id: "remove-from-group",
                        label: "Remove from Group",
                        action: () => {
                            null == s || s(), o.A.removeUsersFromGroup(u, A);
                        },
                    },
                    "remove-from-group",
                ),
            ),
        b
    );
}
