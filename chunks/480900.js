n.d(t, { b: () => y, default: () => O });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
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
    v = n(746183),
    b = n(83104);
function y(e, t) {
    (0, c.mMO)(async () => {
        let { default: a } = await Promise.all([n.e("49282"), n.e("46836")]).then(n.bind(n, 488358));
        return (n) => (0, i.jsx)(a, { role: e, guildId: t, ...n });
    });
}
let O = function (e) {
    let { guildId: t, transitionState: l, onClose: O } = e,
        L = (0, o.bG)([f.A], () => f.A.getSortedRoles(t)),
        R = (0, o.bG)([E.default], () => E.default.getId()),
        P = (0, o.bG)([I.Ay], () => I.Ay.getMember(t, R)),
        [D, M] = a.useState([]),
        j = (0, h.Ay)();
    if (
        (a.useEffect(() => {
            0 !== D.length &&
                C.default.track(S.HAw.PASSPORT_ENTRY_VIEWED, {
                    role_ids: D.map((e) => {
                        let { role_id: t } = e;
                        return t;
                    }),
                    ...(0, g.H$)(t),
                });
        }, [t, D]),
        a.useEffect(() => {
            A.A.getGuildRoleConnectionsConfigurations(t).then((e) => M(e));
        }, [t]),
        null == P)
    )
        return null;
    let w = L.filter((e) => null === e.tags.guild_connections);
    return (0, i.jsx)(s.Modal, {
        transitionState: l,
        title: x.intl.string(x.t.ghtnss),
        onClose: O,
        subtitle: x.intl.format(x.t["Y+TsEV"], { helpdeskArticleUrl: T.A.getArticleURL(S.MVz.CONNECTION_DETAILS) }),
        actions: [],
        children: (0, i.jsx)(c.BJc, {
            children: w.map((e) => {
                let l = P.roles.includes(e.id),
                    s = (function (e) {
                        let n = D.find((t) => {
                            let { role_id: n } = t;
                            return n === e;
                        });
                        if (null == n) return [];
                        let a = {};
                        for (let e of n.rules.flat()) {
                            let l;
                            if (null != e.application_id) {
                                let a = n.applications?.[e.application_id];
                                l =
                                    a?.bot != null
                                        ? (0, i.jsx)("img", {
                                              src: new p.A(a.bot).getAvatarURL(t, 24),
                                              alt: "",
                                              className: r()(v.ZN, b.my),
                                          })
                                        : null;
                            } else {
                                let t = _.A.get(e.connection_type);
                                l = (0, i.jsx)("img", {
                                    src: (0, d.qB)(j) ? t.icon.lightSVG : t.icon.darkSVG,
                                    alt: "",
                                    className: b.my,
                                });
                            }
                            null != l && (a[`${e.connection_type}:${e.application_id}`] = l);
                        }
                        return Object.values(a);
                    })(e.id);
                return (0, i.jsxs)(
                    c.DUT,
                    {
                        className: r()(v.L5, l ? v.xN : null),
                        onClick: l ? void 0 : () => y(e, t),
                        onContextMenu: l
                            ? (a) => {
                                  var l;
                                  return (
                                      (l = e.id),
                                      void (0, u.L3)(a, async () => {
                                          let { default: e } = await n.e("68001").then(n.bind(n, 699896));
                                          return (n) =>
                                              (0, i.jsx)(e, {
                                                  ...n,
                                                  roleId: l,
                                                  onLeaveRole: () => A.A.unassignGuildRoleConnection(t, l),
                                              });
                                      })
                                  );
                              }
                            : void 0,
                        children: [
                            l
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
                                renderUser: (e, t, n) => (0, i.jsx)(a.Fragment, { children: s[n] }, n),
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
