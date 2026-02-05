n.d(t, { b: () => y, default: () => L });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(158954),
    o = n(311907),
    d = n(582754),
    c = n(397927),
    u = n(442433),
    A = n(686956),
    h = n(736653),
    _ = n(573648),
    m = n(104171),
    p = n(58149),
    g = n(427157),
    E = n(961350),
    f = n(696451),
    I = n(317525),
    C = n(954571),
    N = n(975571),
    T = n(967740),
    S = n(652215),
    x = n(985018),
    v = n(702326),
    b = n(688963);
function y(e, t) {
    (0, c.mMO)(async () => {
        let { default: r } = await Promise.all([n.e("49282"), n.e("58481")]).then(n.bind(n, 488358));
        return (n) => (0, i.jsx)(r, { role: e, guildId: t, ...n });
    });
}
let L = function (e) {
    let { guildId: t, transitionState: a, onClose: L } = e,
        O = (0, o.bG)([I.A], () => I.A.getSortedRoles(t)),
        R = (0, o.bG)([E.default], () => E.default.getId()),
        P = (0, o.bG)([f.Ay], () => f.Ay.getMember(t, R)),
        [j, D] = r.useState([]),
        w = (0, h.Ay)();
    if (
        (r.useEffect(() => {
            0 !== j.length &&
                C.default.track(S.HAw.PASSPORT_ENTRY_VIEWED, {
                    role_ids: j.map((e) => {
                        let { role_id: t } = e;
                        return t;
                    }),
                    ...(0, p.H$)(t),
                });
        }, [t, j]),
        r.useEffect(() => {
            A.A.getGuildRoleConnectionsConfigurations(t).then((e) => D(e));
        }, [t]),
        null == P)
    )
        return null;
    let M = O.filter((e) => null === e.tags.guild_connections);
    return (0, i.jsx)(s.Modal, {
        transitionState: a,
        title: x.intl.string(x.t.ghtnss),
        onClose: L,
        subtitle: x.intl.format(x.t["Y+TsEV"], { helpdeskArticleUrl: N.A.getArticleURL(S.MVz.CONNECTION_DETAILS) }),
        actions: [],
        children: (0, i.jsx)(c.BJc, {
            children: M.map((e) => {
                let a = P.roles.includes(e.id),
                    s = (function (e) {
                        let n = j.find((t) => {
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
                                              className: l()(v.ZN, b.my),
                                          })
                                        : null;
                            } else {
                                let t = _.A.get(e.connection_type);
                                a = (0, i.jsx)("img", {
                                    src: (0, d.qB)(w) ? t.icon.lightSVG : t.icon.darkSVG,
                                    alt: "",
                                    className: b.my,
                                });
                            }
                            null != a && (r[`${e.connection_type}:${e.application_id}`] = a);
                        }
                        return Object.values(r);
                    })(e.id);
                return (0, i.jsxs)(
                    c.DUT,
                    {
                        className: l()(v.L5, a ? v.xN : null),
                        onClick: a ? void 0 : () => y(e, t),
                        onContextMenu: a
                            ? (r) => {
                                  var a;
                                  return (
                                      (a = e.id),
                                      void (0, u.L3)(r, async () => {
                                          let { default: e } = await n.e("68001").then(n.bind(n, 699896));
                                          return (n) =>
                                              (0, i.jsx)(e, {
                                                  ...n,
                                                  roleId: a,
                                                  onLeaveRole: () => A.A.unassignGuildRoleConnection(t, a),
                                              });
                                      })
                                  );
                              }
                            : void 0,
                        children: [
                            a
                                ? (0, i.jsx)("div", {
                                      className: v.UA,
                                      children: (0, i.jsx)(c.Uzd, { size: "xs", color: "currentColor" }),
                                  })
                                : null,
                            (0, i.jsx)(T.A, { guildId: t, role: e, size: 24 }),
                            (0, i.jsxs)("div", {
                                className: v.fk,
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: v.CF,
                                        children: e.name,
                                    }),
                                    void 0 !== e.description
                                        ? (0, i.jsx)(c.Text, {
                                              variant: "text-xs/normal",
                                              color: "text-default",
                                              className: v.Xr,
                                              children: e.description,
                                          })
                                        : null,
                                ],
                            }),
                            (0, i.jsx)(m.Ay, {
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
