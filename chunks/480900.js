n.d(t, {
    b: () => j,
    default: () => x,
}),
    n(896048),
    n(864466),
    n(443073),
    n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(158954),
    o = n(311907),
    c = n(582754),
    u = n(397927),
    d = n(442433),
    p = n(686956),
    h = n(736653),
    g = n(573648),
    f = n(104171),
    m = n(58149),
    A = n(427157),
    _ = n(961350),
    b = n(696451),
    E = n(317525),
    O = n(954571),
    y = n(975571),
    I = n(967740),
    v = n(652215),
    S = n(985018),
    C = n(702326),
    N = n(688963);

function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function j(e, t) {
    (0, u.mMO)(async () => {
        let { default: i } = await Promise.all([n.e("49282"), n.e("58481")]).then(n.bind(n, 488358));
        return (n) =>
            (0, r.jsx)(
                i,
                T(
                    {
                        role: e,
                        guildId: t,
                    },
                    n,
                ),
            );
    });
}
let x = function (e) {
    let { guildId: t, transitionState: l, onClose: x } = e,
        P = (0, o.bG)([E.A], () => E.A.getSortedRoles(t)),
        w = (0, o.bG)([_.default], () => _.default.getId()),
        L = (0, o.bG)([b.Ay], () => b.Ay.getMember(t, w)),
        [R, D] = i.useState([]),
        M = (0, h.Ay)();
    if (
        (i.useEffect(() => {
            0 !== R.length &&
                O.default.track(
                    v.HAw.PASSPORT_ENTRY_VIEWED,
                    T(
                        {
                            role_ids: R.map((e) => {
                                let { role_id: t } = e;
                                return t;
                            }),
                        },
                        (0, m.H$)(t),
                    ),
                );
        }, [t, R]),
        i.useEffect(() => {
            p.A.getGuildRoleConnectionsConfigurations(t).then((e) => D(e));
        }, [t]),
        null == L)
    )
        return null;
    let k = P.filter((e) => null === e.tags.guild_connections);
    return (0, r.jsx)(s.Modal, {
        transitionState: l,
        title: S.intl.string(S.t.ghtnss),
        onClose: x,
        subtitle: S.intl.format(S.t["Y+TsEV"], {
            helpdeskArticleUrl: y.A.getArticleURL(v.MVz.CONNECTION_DETAILS),
        }),
        actions: [],
        children: (0, r.jsx)(u.BJc, {
            children: k.map((e) => {
                let l = L.roles.includes(e.id),
                    s = (function (e) {
                        let n = R.find((t) => {
                            let { role_id: n } = t;
                            return n === e;
                        });
                        if (null == n) return [];
                        let i = {};
                        for (let e of n.rules.flat()) {
                            let s;
                            if (null != e.application_id) {
                                var l;
                                let i = null == (l = n.applications) ? void 0 : l[e.application_id];
                                s =
                                    (null == i ? void 0 : i.bot) != null
                                        ? (0, r.jsx)("img", {
                                              src: new A.A(i.bot).getAvatarURL(t, 24),
                                              alt: "",
                                              className: a()(C.ZN, N.my),
                                          })
                                        : null;
                            } else {
                                let t = g.A.get(e.connection_type);
                                s = (0, r.jsx)("img", {
                                    src: (0, c.qB)(M) ? t.icon.lightSVG : t.icon.darkSVG,
                                    alt: "",
                                    className: N.my,
                                });
                            }
                            null != s && (i["".concat(e.connection_type, ":").concat(e.application_id)] = s);
                        }
                        return Object.values(i);
                    })(e.id);
                return (0, r.jsxs)(
                    u.DUT,
                    {
                        className: a()(C.L5, l ? C.xN : null),
                        onClick: l ? void 0 : () => j(e, t),
                        onContextMenu: l
                            ? (i) => {
                                  var l;
                                  return (
                                      (l = e.id),
                                      void (0, d.L3)(i, async () => {
                                          let { default: e } = await n.e("68001").then(n.bind(n, 699896));
                                          return (n) => {
                                              var i, a;
                                              return (0, r.jsx)(
                                                  e,
                                                  ((i = T({}, n)),
                                                  (a = a =
                                                      {
                                                          roleId: l,
                                                          onLeaveRole: () => p.A.unassignGuildRoleConnection(t, l),
                                                      }),
                                                  Object.getOwnPropertyDescriptors
                                                      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                                      : (function (e, t) {
                                                            var n = Object.keys(e);
                                                            if (Object.getOwnPropertySymbols) {
                                                                var r = Object.getOwnPropertySymbols(e);
                                                                n.push.apply(n, r);
                                                            }
                                                            return n;
                                                        })(Object(a)).forEach(function (e) {
                                                            Object.defineProperty(
                                                                i,
                                                                e,
                                                                Object.getOwnPropertyDescriptor(a, e),
                                                            );
                                                        }),
                                                  i),
                                              );
                                          };
                                      })
                                  );
                              }
                            : void 0,
                        children: [
                            l
                                ? (0, r.jsx)("div", {
                                      className: C.UA,
                                      children: (0, r.jsx)(u.Uzd, {
                                          size: "xs",
                                          color: "currentColor",
                                      }),
                                  })
                                : null,
                            (0, r.jsx)(I.A, {
                                guildId: t,
                                role: e,
                                size: 24,
                            }),
                            (0, r.jsxs)("div", {
                                className: C.fk,
                                children: [
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: C.CF,
                                        children: e.name,
                                    }),
                                    void 0 !== e.description
                                        ? (0, r.jsx)(u.Text, {
                                              variant: "text-xs/normal",
                                              color: "text-default",
                                              className: C.Xr,
                                              children: e.description,
                                          })
                                        : null,
                                ],
                            }),
                            (0, r.jsx)(f.Ay, {
                                showUserPopout: !1,
                                guildId: t,
                                users: s.map(() => null),
                                renderUser: (e, t, n) =>
                                    (0, r.jsx)(
                                        i.Fragment,
                                        {
                                            children: s[n],
                                        },
                                        n,
                                    ),
                                max: 3,
                            }),
                        ],
                    },
                    e.id,
                );
            }),
        }),
    });
};
