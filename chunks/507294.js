n.d(t, {
    default: () => x,
    g: () => P,
}),
    n(388685),
    n(472816),
    n(794429),
    n(953529);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(793030),
    o = n(442837),
    c = n(780384),
    u = n(481060),
    d = n(239091),
    p = n(749210),
    f = n(410030),
    m = n(726542),
    h = n(884338),
    g = n(367907),
    _ = n(598077),
    b = n(314897),
    E = n(271383),
    O = n(485386),
    I = n(626135),
    y = n(63063),
    v = n(225104),
    C = n(981631),
    S = n(388032),
    T = n(375563),
    N = n(245141);
function j(e) {
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
function P(e, t) {
    (0, u.ZDy)(async () => {
        let { default: i } = await n.e("38413").then(n.bind(n, 107807));
        return (n) =>
            (0, r.jsx)(
                i,
                j(
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
        A = (0, o.e7)([O.Z], () => O.Z.getSortedRoles(t)),
        Z = (0, o.e7)([b.default], () => b.default.getId()),
        w = (0, o.e7)([E.ZP], () => E.ZP.getMember(t, Z)),
        [L, R] = i.useState([]),
        D = (0, f.ZP)();
    if (
        (i.useEffect(() => {
            0 !== L.length &&
                I.default.track(
                    C.rMx.PASSPORT_ENTRY_VIEWED,
                    j(
                        {
                            role_ids: L.map((e) => {
                                let { role_id: t } = e;
                                return t;
                            }),
                        },
                        (0, g.hH)(t),
                    ),
                );
        }, [t, L]),
        i.useEffect(() => {
            p.Z.getGuildRoleConnectionsConfigurations(t).then((e) => R(e));
        }, [t]),
        null == w)
    )
        return null;
    let M = A.filter((e) => null === e.tags.guild_connections);
    return (0, r.jsx)(s.Modal, {
        transitionState: l,
        title: S.intl.string(S.t.ghtnss),
        onClose: x,
        subtitle: S.intl.format(S.t["Y+TsEV"], { helpdeskArticleUrl: y.Z.getArticleURL(C.BhN.CONNECTION_DETAILS) }),
        actions: [],
        children: (0, r.jsx)(u.Kqy, {
            children: M.map((e) => {
                let l = w.roles.includes(e.id),
                    s = (function (e) {
                        let n = L.find((t) => {
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
                                              src: new _.Z(i.bot).getAvatarURL(t, 24),
                                              alt: "",
                                              className: a()(T.botAvatar, N.avatar),
                                          })
                                        : null;
                            } else {
                                let t = m.Z.get(e.connection_type);
                                s = (0, r.jsx)("img", {
                                    src: (0, c.ap)(D) ? t.icon.lightSVG : t.icon.darkSVG,
                                    alt: "",
                                    className: N.avatar,
                                });
                            }
                            null != s && (i["".concat(e.connection_type, ":").concat(e.application_id)] = s);
                        }
                        return Object.values(i);
                    })(e.id);
                return (0, r.jsxs)(
                    u.P3F,
                    {
                        className: a()(T.verifiedRole, l ? T.verifiedRoleHasRole : null),
                        onClick: l ? void 0 : () => P(e, t),
                        onContextMenu: l
                            ? (i) => {
                                  var l;
                                  return (
                                      (l = e.id),
                                      void (0, d.jW)(i, async () => {
                                          let { default: e } = await n.e("60079").then(n.bind(n, 850902));
                                          return (n) => {
                                              var i, a;
                                              return (0, r.jsx)(
                                                  e,
                                                  ((i = j({}, n)),
                                                  (a = a =
                                                      {
                                                          roleId: l,
                                                          onLeaveRole: () => p.Z.unassignGuildRoleConnection(t, l),
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
                                      className: T.roleCheckmark,
                                      children: (0, r.jsx)(u.kmB, {
                                          size: "xs",
                                          color: "currentColor",
                                      }),
                                  })
                                : null,
                            (0, r.jsx)(v.Z, {
                                guildId: t,
                                role: e,
                                size: 24,
                            }),
                            (0, r.jsxs)("div", {
                                className: T.verifiedRoleNameDescriptionContainer,
                                children: [
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-md/medium",
                                        color: "header-primary",
                                        className: T.verifiedRoleName,
                                        children: e.name,
                                    }),
                                    void 0 !== e.description
                                        ? (0, r.jsx)(u.Text, {
                                              variant: "text-xs/normal",
                                              color: "header-secondary",
                                              className: T.verifiedRoleDescription,
                                              children: e.description,
                                          })
                                        : null,
                                ],
                            }),
                            (0, r.jsx)(h.ZP, {
                                showUserPopout: !1,
                                guildId: t,
                                users: s.map(() => null),
                                renderUser: (e, t, n) => (0, r.jsx)(i.Fragment, { children: s[n] }, n),
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
