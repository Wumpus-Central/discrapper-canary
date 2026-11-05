var n = t(477900),
    i = t(582128),
    s = t(503698),
    r = t.n(s),
    a = t(855986),
    o = t(189213),
    d = t(462887),
    c = t(192308),
    u = t(331322),
    m = t(939249),
    f = t(478016),
    p = t(834730),
    x = t(442433),
    g = t(778858),
    h = t(736653),
    A = t(573648),
    j = t(104171),
    b = t(149468),
    v = t(619019),
    N = t(46653),
    C = t(696451),
    _ = t(317525),
    y = t(129230),
    k = t(975571),
    E = t(967740),
    I = t(652215),
    S = t(792996),
    R = t(609548),
    w = t(76145);
function G(e, l) {
    (0, c.mM)(async () => {
        let { default: i } = await Promise.all([
            t.e(106980),
            t.e(839772),
            t.e(555679),
            t.e(317225),
            t.e(124060),
            t.e(146566),
            t.e(32661),
            t.e(696123),
            t.e(553984),
            t.e(237834),
            t.e(28561),
            t.e(553203),
            t.e(717460),
            t.e(269178),
            t.e(373566),
            t.e(49282),
            t.e(580971),
        ]).then(t.bind(t, 488358));
        return (t) => (0, n.jsx)(i, { role: e, guildId: l, ...t });
    });
}
t.d(
    l,
    {},
    {
        b: G,
        default: function (e) {
            let { guildId: l, transitionState: s, onClose: c } = e,
                L = (0, a.bG)([_.A], () => _.A.getSortedRoles(l)),
                U = (0, a.bG)([N.default], () => N.default.getId()),
                T = (0, a.bG)([C.Ay], () => C.Ay.getMember(l, U)),
                [V, z] = i.useState([]),
                M = (0, h.Ay)();
            if (
                (i.useEffect(() => {
                    0 !== V.length &&
                        y.default.track(I.HAw.PASSPORT_ENTRY_VIEWED, {
                            role_ids: V.map((e) => {
                                let { role_id: l } = e;
                                return l;
                            }),
                            ...(0, b.H$)(l),
                        });
                }, [l, V]),
                i.useEffect(() => {
                    g.A.getGuildRoleConnectionsConfigurations(l).then((e) => z(e));
                }, [l]),
                null == T)
            )
                return null;
            let O = L.filter((e) => null === e.tags.guild_connections);
            return (0, n.jsx)(o.a, {
                transitionState: s,
                title: S.intl.string(S.t.ghtnss),
                onClose: c,
                subtitle: S.intl.format(S.t["Y+TsEV"], {
                    helpdeskArticleUrl: k.A.getArticleURL(I.MVz.CONNECTION_DETAILS),
                }),
                actions: [],
                children: (0, n.jsx)(u.B, {
                    padding: { top: 8 },
                    children: O.map((e) => {
                        let s = T.roles.includes(e.id),
                            a = (function (e) {
                                let t = V.find((l) => {
                                    let { role_id: t } = l;
                                    return t === e;
                                });
                                if (null == t) return [];
                                let i = {};
                                for (let e of t.rules.flat()) {
                                    let s;
                                    if (null != e.application_id) {
                                        let i = t.applications?.[e.application_id];
                                        s =
                                            i?.bot != null
                                                ? (0, n.jsx)("img", {
                                                      src: new v.A(i.bot).getAvatarURL(l, 24),
                                                      alt: "",
                                                      className: r()(R.ZN, w.my),
                                                  })
                                                : null;
                                    } else {
                                        let l = A.A.get(e.connection_type);
                                        if (null == l) continue;
                                        s = (0, n.jsx)("img", {
                                            src: (0, d.q)(M) ? l.icon.lightSVG : l.icon.darkSVG,
                                            alt: "",
                                            className: w.my,
                                        });
                                    }
                                    null != s && (i[`${e.connection_type}:${e.application_id}`] = s);
                                }
                                return Object.values(i);
                            })(e.id);
                        return (0, n.jsxs)(
                            m.D,
                            {
                                className: r()(R.L5, s ? R.xN : null),
                                onClick: s ? void 0 : () => G(e, l),
                                onContextMenu: s
                                    ? (i) => {
                                          var s;
                                          return (
                                              (s = e.id),
                                              void (0, x.L3)(i, async () => {
                                                  let { default: e } = await t.e(868001).then(t.bind(t, 699896));
                                                  return (t) =>
                                                      (0, n.jsx)(e, {
                                                          ...t,
                                                          roleId: s,
                                                          onLeaveRole: () => g.A.unassignGuildRoleConnection(l, s),
                                                      });
                                              })
                                          );
                                      }
                                    : void 0,
                                children: [
                                    s
                                        ? (0, n.jsx)("div", {
                                              className: R.UA,
                                              children: (0, n.jsx)(f.CheckmarkSmallIcon, {
                                                  size: "xs",
                                                  color: "currentColor",
                                              }),
                                          })
                                        : null,
                                    (0, n.jsx)(E.A, { guildId: l, role: e, size: 24 }),
                                    (0, n.jsxs)("div", {
                                        className: R.fk,
                                        children: [
                                            (0, n.jsx)(p.E, {
                                                variant: "body-md/medium",
                                                color: "text-strong",
                                                className: R.CF,
                                                children: e.name,
                                            }),
                                            void 0 !== e.description
                                                ? (0, n.jsx)(p.E, {
                                                      variant: "body-xs/normal",
                                                      color: "text-default",
                                                      className: R.Xr,
                                                      children: e.description,
                                                  })
                                                : null,
                                        ],
                                    }),
                                    (0, n.jsx)(j.Ay, {
                                        showUserPopout: !1,
                                        guildId: l,
                                        users: a.map(() => null),
                                        renderUser: (e, l, t) => (0, n.jsx)(i.Fragment, { children: a[t] }, t),
                                        max: 3,
                                    }),
                                ],
                            },
                            e.id,
                        );
                    }),
                }),
            });
        },
    },
);
