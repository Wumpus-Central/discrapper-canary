n.d(t, { b: () => y, default: () => O });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(158954),
    o = n(311907),
    d = n(582754),
    c = n(397927),
    u = n(442433),
    A = n(686956),
    h = n(736653),
    _ = n(573648),
    m = n(104171),
    g = n(58149),
    p = n(427157),
    E = n(961350),
    I = n(696451),
    f = n(317525),
    C = n(954571),
    T = n(975571),
    N = n(967740),
    S = n(652215),
    x = n(985018),
    v = n(967671),
    b = n(227568);
function y(e, t) {
    (0, c.mMO)(async () => {
        let { default: l } = await Promise.all([n.e("49282"), n.e("45204")]).then(n.bind(n, 488358));
        return (n) => (0, i.jsx)(l, { role: e, guildId: t, ...n });
    });
}
let O = function (e) {
    let { guildId: t, transitionState: a, onClose: O } = e,
        L = (0, o.bG)([f.A], () => f.A.getSortedRoles(t)),
        R = (0, o.bG)([E.default], () => E.default.getId()),
        P = (0, o.bG)([I.Ay], () => I.Ay.getMember(t, R)),
        [D, j] = l.useState([]),
        M = (0, h.Ay)();
    if (
        (l.useEffect(() => {
            0 !== D.length &&
                C.default.track(S.HAw.PASSPORT_ENTRY_VIEWED, {
                    role_ids: D.map((e) => {
                        let { role_id: t } = e;
                        return t;
                    }),
                    ...(0, g.H$)(t),
                });
        }, [t, D]),
        l.useEffect(() => {
            A.A.getGuildRoleConnectionsConfigurations(t).then((e) => j(e));
        }, [t]),
        null == P)
    )
        return null;
    let w = L.filter((e) => null === e.tags.guild_connections);
    return (0, i.jsx)(s.Modal, {
        transitionState: a,
        title: x.intl.string(x.t.ghtnss),
        onClose: O,
        subtitle: x.intl.format(x.t["Y+TsEV"], { helpdeskArticleUrl: T.A.getArticleURL(S.MVz.CONNECTION_DETAILS) }),
        actions: [],
        children: (0, i.jsx)(c.BJc, {
            children: w.map((e) => {
                let a = P.roles.includes(e.id),
                    s = (function (e) {
                        let n = D.find((t) => {
                            let { role_id: n } = t;
                            return n === e;
                        });
                        if (null == n) return [];
                        let l = {};
                        for (let e of n.rules.flat()) {
                            let a;
                            if (null != e.application_id) {
                                let l = n.applications?.[e.application_id];
                                a =
                                    l?.bot != null
                                        ? (0, i.jsx)("img", {
                                              src: new p.A(l.bot).getAvatarURL(t, 24),
                                              alt: "",
                                              className: r()(v.ZN, b.my),
                                          })
                                        : null;
                            } else {
                                let t = _.A.get(e.connection_type);
                                a = (0, i.jsx)("img", {
                                    src: (0, d.qB)(M) ? t.icon.lightSVG : t.icon.darkSVG,
                                    alt: "",
                                    className: b.my,
                                });
                            }
                            null != a && (l[`${e.connection_type}:${e.application_id}`] = a);
                        }
                        return Object.values(l);
                    })(e.id);
                return (0, i.jsxs)(
                    c.DUT,
                    {
                        className: r()(v.L5, a ? v.xN : null),
                        onClick: a ? void 0 : () => y(e, t),
                        onContextMenu: a
                            ? (l) => {
                                  var a;
                                  return (
                                      (a = e.id),
                                      void (0, u.L3)(l, async () => {
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
                            (0, i.jsx)(N.A, { guildId: t, role: e, size: 24 }),
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
                                renderUser: (e, t, n) => (0, i.jsx)(l.Fragment, { children: s[n] }, n),
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
