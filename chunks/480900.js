n.d(t, { b: () => D, default: () => x });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(189213),
    o = n(17928),
    d = n(462887),
    c = n(192308),
    u = n(331322),
    _ = n(939249),
    A = n(478016),
    h = n(834730),
    E = n(442433),
    p = n(686956),
    m = n(736653),
    I = n(573648),
    g = n(104171),
    C = n(58149),
    f = n(889227),
    T = n(495544),
    N = n(696451),
    S = n(317525),
    L = n(954571),
    y = n(975571),
    O = n(967740),
    b = n(652215),
    v = n(985018),
    R = n(967671),
    P = n(227568);
function D(e, t) {
    (0, c.openModalLazy)(async () => {
        let { default: r } = await Promise.all([n.e("49282"), n.e("10181")]).then(n.bind(n, 488358));
        return (n) => (0, i.jsx)(r, { role: e, guildId: t, ...n });
    });
}
let x = function (e) {
    let { guildId: t, transitionState: a, onClose: c } = e,
        x = (0, o.bG)([S.A], () => S.A.getSortedRoles(t)),
        w = (0, o.bG)([T.default], () => T.default.getId()),
        M = (0, o.bG)([N.Ay], () => N.Ay.getMember(t, w)),
        [U, G] = r.useState([]),
        j = (0, m.Ay)();
    if (
        (r.useEffect(() => {
            0 !== U.length &&
                L.default.track(b.HAw.PASSPORT_ENTRY_VIEWED, {
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
        null == M)
    )
        return null;
    let k = x.filter((e) => null === e.tags.guild_connections);
    return (0, i.jsx)(s.Modal, {
        transitionState: a,
        title: v.intl.string(v.t.ghtnss),
        onClose: c,
        subtitle: v.intl.format(v.t["Y+TsEV"], { helpdeskArticleUrl: y.A.getArticleURL(b.MVz.CONNECTION_DETAILS) }),
        actions: [],
        children: (0, i.jsx)(u.B, {
            padding: { top: 8 },
            children: k.map((e) => {
                let a = M.roles.includes(e.id),
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
                                              src: new f.A(r.bot).getAvatarURL(t, 24),
                                              alt: "",
                                              className: l()(R.ZN, P.my),
                                          })
                                        : null;
                            } else {
                                let t = I.A.get(e.connection_type);
                                a = (0, i.jsx)("img", {
                                    src: (0, d.q)(j) ? t.icon.lightSVG : t.icon.darkSVG,
                                    alt: "",
                                    className: P.my,
                                });
                            }
                            null != a && (r[`${e.connection_type}:${e.application_id}`] = a);
                        }
                        return Object.values(r);
                    })(e.id);
                return (0, i.jsxs)(
                    _.D,
                    {
                        className: l()(R.L5, a ? R.xN : null),
                        onClick: a ? void 0 : () => D(e, t),
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
                                      className: R.UA,
                                      children: (0, i.jsx)(A.U, { size: "xs", color: "currentColor" }),
                                  })
                                : null,
                            (0, i.jsx)(O.A, { guildId: t, role: e, size: 24 }),
                            (0, i.jsxs)("div", {
                                className: R.fk,
                                children: [
                                    (0, i.jsx)(h.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: R.CF,
                                        children: e.name,
                                    }),
                                    void 0 !== e.description
                                        ? (0, i.jsx)(h.E, {
                                              variant: "text-xs/normal",
                                              color: "text-default",
                                              className: R.Xr,
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
