"use strict";
n.d(t, { b: () => w, default: () => P });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(189213),
    l = n(17928),
    u = n(462887),
    c = n(192308),
    d = n(331322),
    _ = n(939249),
    h = n(478016),
    f = n(834730),
    E = n(442433),
    p = n(66834),
    m = n(736653),
    g = n(573648),
    A = n(104171),
    I = n(95561),
    T = n(889227),
    S = n(280450),
    N = n(696451),
    C = n(317525),
    y = n(174459),
    O = n(975571),
    R = n(967740),
    v = n(652215),
    b = n(375708),
    L = n(967671),
    D = n(227568);
function w(e, t) {
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
    let { guildId: t, transitionState: s, onClose: c } = e,
        P = (0, l.bG)([C.A], () => C.A.getSortedRoles(t)),
        M = (0, l.bG)([S.default], () => S.default.getId()),
        x = (0, l.bG)([N.Ay], () => N.Ay.getMember(t, M)),
        [U, k] = r.useState([]),
        G = (0, m.Ay)();
    if (
        (r.useEffect(() => {
            0 !== U.length &&
                y.default.track(v.HAw.PASSPORT_ENTRY_VIEWED, {
                    role_ids: U.map((e) => {
                        let { role_id: t } = e;
                        return t;
                    }),
                    ...(0, I.H$)(t),
                });
        }, [t, U]),
        r.useEffect(() => {
            p.A.getGuildRoleConnectionsConfigurations(t).then((e) => k(e));
        }, [t]),
        null == x)
    )
        return null;
    let V = P.filter((e) => null === e.tags.guild_connections);
    return (0, i.jsx)(o.Modal, {
        transitionState: s,
        title: b.intl.string(b.t.ghtnss),
        onClose: c,
        subtitle: b.intl.format(b.t["Y+TsEV"], { helpdeskArticleUrl: O.A.getArticleURL(v.MVz.CONNECTION_DETAILS) }),
        actions: [],
        children: (0, i.jsx)(d.B, {
            padding: { top: 8 },
            children: V.map((e) => {
                let s = x.roles.includes(e.id),
                    o = (function (e) {
                        let n = U.find((t) => {
                            let { role_id: n } = t;
                            return n === e;
                        });
                        if (null == n) return [];
                        let r = {};
                        for (let e of n.rules.flat()) {
                            let s;
                            if (null != e.application_id) {
                                let r = n.applications?.[e.application_id];
                                s =
                                    r?.bot != null
                                        ? (0, i.jsx)("img", {
                                              src: new T.A(r.bot).getAvatarURL(t, 24),
                                              alt: "",
                                              className: a()(L.ZN, D.my),
                                          })
                                        : null;
                            } else {
                                let t = g.A.get(e.connection_type);
                                if (null == t) continue;
                                s = (0, i.jsx)("img", {
                                    src: (0, u.q)(G) ? t.icon.lightSVG : t.icon.darkSVG,
                                    alt: "",
                                    className: D.my,
                                });
                            }
                            null != s && (r[`${e.connection_type}:${e.application_id}`] = s);
                        }
                        return Object.values(r);
                    })(e.id);
                return (0, i.jsxs)(
                    _.D,
                    {
                        className: a()(L.L5, s ? L.xN : null),
                        onClick: s ? void 0 : () => w(e, t),
                        onContextMenu: s
                            ? (r) => {
                                  var s;
                                  return (
                                      (s = e.id),
                                      void (0, E.L3)(r, async () => {
                                          let { default: e } = await n.e("68001").then(n.bind(n, 699896));
                                          return (n) =>
                                              (0, i.jsx)(e, {
                                                  ...n,
                                                  roleId: s,
                                                  onLeaveRole: () => p.A.unassignGuildRoleConnection(t, s),
                                              });
                                      })
                                  );
                              }
                            : void 0,
                        children: [
                            s
                                ? (0, i.jsx)("div", {
                                      className: L.UA,
                                      children: (0, i.jsx)(h.U, { size: "xs", color: "currentColor" }),
                                  })
                                : null,
                            (0, i.jsx)(R.A, { guildId: t, role: e, size: 24 }),
                            (0, i.jsxs)("div", {
                                className: L.fk,
                                children: [
                                    (0, i.jsx)(f.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: L.CF,
                                        children: e.name,
                                    }),
                                    void 0 !== e.description
                                        ? (0, i.jsx)(f.E, {
                                              variant: "text-xs/normal",
                                              color: "text-default",
                                              className: L.Xr,
                                              children: e.description,
                                          })
                                        : null,
                                ],
                            }),
                            (0, i.jsx)(A.Ay, {
                                showUserPopout: !1,
                                guildId: t,
                                users: o.map(() => null),
                                renderUser: (e, t, n) => (0, i.jsx)(r.Fragment, { children: o[n] }, n),
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
