"use strict";
n.d(t, { b: () => M, default: () => P });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(189213),
    o = n(17928),
    d = n(462887),
    c = n(192308),
    u = n(331322),
    _ = n(939249),
    E = n(478016),
    A = n(834730),
    h = n(442433),
    I = n(66834),
    f = n(736653),
    p = n(573648),
    T = n(104171),
    m = n(95561),
    g = n(889227),
    S = n(280450),
    N = n(696451),
    C = n(317525),
    O = n(174459),
    R = n(975571),
    L = n(967740),
    D = n(652215),
    y = n(375708),
    v = n(967671),
    b = n(227568);
function M(e, t) {
    (0, c.openModalLazy)(async () => {
        let { default: r } = await Promise.all([
            n.e("29205"),
            n.e("10931"),
            n.e("73435"),
            n.e("79816"),
            n.e("53984"),
            n.e("38042"),
            n.e("17460"),
            n.e("69178"),
            n.e("73566"),
            n.e("53203"),
            n.e("49282"),
            n.e("80971"),
        ]).then(n.bind(n, 488358));
        return (n) => (0, i.jsx)(r, { role: e, guildId: t, ...n });
    });
}
let P = function (e) {
    let { guildId: t, transitionState: a, onClose: c } = e,
        P = (0, o.bG)([C.A], () => C.A.getSortedRoles(t)),
        U = (0, o.bG)([S.default], () => S.default.getId()),
        w = (0, o.bG)([N.Ay], () => N.Ay.getMember(t, U)),
        [G, x] = r.useState([]),
        k = (0, f.Ay)();
    if (
        (r.useEffect(() => {
            0 !== G.length &&
                O.default.track(D.HAw.PASSPORT_ENTRY_VIEWED, {
                    role_ids: G.map((e) => {
                        let { role_id: t } = e;
                        return t;
                    }),
                    ...(0, m.H$)(t),
                });
        }, [t, G]),
        r.useEffect(() => {
            I.A.getGuildRoleConnectionsConfigurations(t).then((e) => x(e));
        }, [t]),
        null == w)
    )
        return null;
    let F = P.filter((e) => null === e.tags.guild_connections);
    return (0, i.jsx)(l.Modal, {
        transitionState: a,
        title: y.intl.string(y.t.ghtnss),
        onClose: c,
        subtitle: y.intl.format(y.t["Y+TsEV"], { helpdeskArticleUrl: R.A.getArticleURL(D.MVz.CONNECTION_DETAILS) }),
        actions: [],
        children: (0, i.jsx)(u.B, {
            padding: { top: 8 },
            children: F.map((e) => {
                let a = w.roles.includes(e.id),
                    l = (function (e) {
                        let n = G.find((t) => {
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
                                              src: new g.A(r.bot).getAvatarURL(t, 24),
                                              alt: "",
                                              className: s()(v.ZN, b.my),
                                          })
                                        : null;
                            } else {
                                let t = p.A.get(e.connection_type);
                                if (null == t) continue;
                                a = (0, i.jsx)("img", {
                                    src: (0, d.q)(k) ? t.icon.lightSVG : t.icon.darkSVG,
                                    alt: "",
                                    className: b.my,
                                });
                            }
                            null != a && (r[`${e.connection_type}:${e.application_id}`] = a);
                        }
                        return Object.values(r);
                    })(e.id);
                return (0, i.jsxs)(
                    _.D,
                    {
                        className: s()(v.L5, a ? v.xN : null),
                        onClick: a ? void 0 : () => M(e, t),
                        onContextMenu: a
                            ? (r) => {
                                  var a;
                                  return (
                                      (a = e.id),
                                      void (0, h.L3)(r, async () => {
                                          let { default: e } = await n.e("68001").then(n.bind(n, 699896));
                                          return (n) =>
                                              (0, i.jsx)(e, {
                                                  ...n,
                                                  roleId: a,
                                                  onLeaveRole: () => I.A.unassignGuildRoleConnection(t, a),
                                              });
                                      })
                                  );
                              }
                            : void 0,
                        children: [
                            a
                                ? (0, i.jsx)("div", {
                                      className: v.UA,
                                      children: (0, i.jsx)(E.U, { size: "xs", color: "currentColor" }),
                                  })
                                : null,
                            (0, i.jsx)(L.A, { guildId: t, role: e, size: 24 }),
                            (0, i.jsxs)("div", {
                                className: v.fk,
                                children: [
                                    (0, i.jsx)(A.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: v.CF,
                                        children: e.name,
                                    }),
                                    void 0 !== e.description
                                        ? (0, i.jsx)(A.E, {
                                              variant: "text-xs/normal",
                                              color: "text-default",
                                              className: v.Xr,
                                              children: e.description,
                                          })
                                        : null,
                                ],
                            }),
                            (0, i.jsx)(T.Ay, {
                                showUserPopout: !1,
                                guildId: t,
                                users: l.map(() => null),
                                renderUser: (e, t, n) => (0, i.jsx)(r.Fragment, { children: l[n] }, n),
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
