n.d(t, { b: () => M, default: () => P });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(189213),
    o = n(17928),
    d = n(462887),
    u = n(192308),
    c = n(331322),
    _ = n(939249),
    A = n(478016),
    h = n(834730),
    E = n(442433),
    p = n(686956),
    m = n(736653),
    I = n(573648),
    g = n(104171),
    C = n(58149),
    T = n(889227),
    f = n(495544),
    N = n(696451),
    S = n(317525),
    O = n(954571),
    L = n(975571),
    y = n(967740),
    b = n(652215),
    v = n(985018),
    D = n(967671),
    R = n(227568);
function M(e, t) {
    (0, u.openModalLazy)(async () => {
        let { default: r } = await Promise.all([n.e("49282"), n.e("45204")]).then(n.bind(n, 488358));
        return (n) => (0, i.jsx)(r, { role: e, guildId: t, ...n });
    });
}
let P = function (e) {
    let { guildId: t, transitionState: a, onClose: u } = e,
        P = (0, o.bG)([S.A], () => S.A.getSortedRoles(t)),
        w = (0, o.bG)([f.default], () => f.default.getId()),
        x = (0, o.bG)([N.Ay], () => N.Ay.getMember(t, w)),
        [U, G] = r.useState([]),
        k = (0, m.Ay)();
    if (
        (r.useEffect(() => {
            0 !== U.length &&
                O.default.track(b.HAw.PASSPORT_ENTRY_VIEWED, {
                    role_ids: U.map((e) => {
                        let { role_id: t } = e;
                        return t;
                    }),
                    ...(0, C.H$)(t),
                });
        }, [t, U]),
        r.useEffect(() => {
            p.A.getGuildRoleConnectionsConfigurations(t).then((e) => G(e));
        }, [t]),
        null == x)
    )
        return null;
    let j = P.filter((e) => null === e.tags.guild_connections);
    return (0, i.jsx)(s.Modal, {
        transitionState: a,
        title: v.intl.string(v.t.ghtnss),
        onClose: u,
        subtitle: v.intl.format(v.t["Y+TsEV"], { helpdeskArticleUrl: L.A.getArticleURL(b.MVz.CONNECTION_DETAILS) }),
        actions: [],
        children: (0, i.jsx)(c.B, {
            children: j.map((e) => {
                let a = x.roles.includes(e.id),
                    s = (function (e) {
                        let n = U.find((t) => {
                            let { role_id: n } = t;
                            return n === e;
                        });
                        if (null == n) return [];
                        let r = {};
                        for (let e of n.rules.flat()) {
                            let a;
                            if (null != e.application_id) {
                                let r = n.applications?.[e.application_id];
                                a =
                                    r?.bot != null
                                        ? (0, i.jsx)("img", {
                                              src: new T.A(r.bot).getAvatarURL(t, 24),
                                              alt: "",
                                              className: l()(D.ZN, R.my),
                                          })
                                        : null;
                            } else {
                                let t = I.A.get(e.connection_type);
                                a = (0, i.jsx)("img", {
                                    src: (0, d.q)(k) ? t.icon.lightSVG : t.icon.darkSVG,
                                    alt: "",
                                    className: R.my,
                                });
                            }
                            null != a && (r[`${e.connection_type}:${e.application_id}`] = a);
                        }
                        return Object.values(r);
                    })(e.id);
                return (0, i.jsxs)(
                    _.D,
                    {
                        className: l()(D.L5, a ? D.xN : null),
                        onClick: a ? void 0 : () => M(e, t),
                        onContextMenu: a
                            ? (r) => {
                                  var a;
                                  return (
                                      (a = e.id),
                                      void (0, E.L3)(r, async () => {
                                          let { default: e } = await n.e("68001").then(n.bind(n, 699896));
                                          return (n) =>
                                              (0, i.jsx)(e, {
                                                  ...n,
                                                  roleId: a,
                                                  onLeaveRole: () => p.A.unassignGuildRoleConnection(t, a),
                                              });
                                      })
                                  );
                              }
                            : void 0,
                        children: [
                            a
                                ? (0, i.jsx)("div", {
                                      className: D.UA,
                                      children: (0, i.jsx)(A.U, { size: "xs", color: "currentColor" }),
                                  })
                                : null,
                            (0, i.jsx)(y.A, { guildId: t, role: e, size: 24 }),
                            (0, i.jsxs)("div", {
                                className: D.fk,
                                children: [
                                    (0, i.jsx)(h.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: D.CF,
                                        children: e.name,
                                    }),
                                    void 0 !== e.description
                                        ? (0, i.jsx)(h.E, {
                                              variant: "text-xs/normal",
                                              color: "text-default",
                                              className: D.Xr,
                                              children: e.description,
                                          })
                                        : null,
                                ],
                            }),
                            (0, i.jsx)(g.Ay, {
                                showUserPopout: !1,
                                guildId: t,
                                users: s.map(() => null),
                                renderUser: (e, t, n) => (0, i.jsx)(r.Fragment, { children: s[n] }, n),
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
