i(321073);
var n = i(477900),
    l = i(582128),
    a = i(136722),
    s = i(855986),
    r = i(189213),
    d = i(289873),
    o = i(890497),
    c = i(143129),
    u = i(834730),
    h = i(702805),
    p = i(155718),
    m = i(495273),
    x = i(260509),
    y = i(317525),
    g = i(488926),
    f = i(387255),
    k = i(792996),
    w = i(403743);
function C(e) {
    return (t) => null != t && !(0, m.N8)(e, t);
}
function b(e) {
    let { rolesRow: t } = e;
    return (0, n.jsx)("div", { "aria-hidden": !0, className: w.Ni, style: { backgroundColor: t?.colorString } });
}
i.d(
    t,
    {},
    {
        default: function (e) {
            let t,
                i,
                {
                    guild: v,
                    channel: S,
                    permission: j,
                    onClose: N,
                    transitionState: E,
                    currentSelectedRoles: R = [],
                } = e,
                { shouldEveryonePost: A, setShouldEveryonePost: M } = (function (e, t) {
                    let i = g.MJ(t, e),
                        [n, a] = l.useState(i);
                    return { shouldEveryonePost: n, setShouldEveryonePost: a };
                })(S, j),
                O = ((t = (0, s.bG)([y.A], () => y.A.getSortedRoles(v.id))),
                l.useMemo(() => (0, f.i)(t).filter((e) => C(v.id)(e.id)), [v, t])).map((e) => ({
                    key: e.key,
                    id: e.id,
                    label: e.name,
                    value: e.id,
                    leading: (0, n.jsx)(b, { rolesRow: e }),
                })),
                [T, F] = l.useState(R.map((e) => e.id).filter(C(v.id))),
                [G, P] = l.useState(!1),
                [W, Z] = l.useState(!1),
                q = T.length > 0 || A,
                K =
                    ((i = (0, s.bG)([y.A], () => y.A.getSortedRoles(v.id))),
                    l.useCallback(
                        (e, t) => {
                            let n = (0, f.i)(i),
                                l = new Set(t),
                                s = { ...S.permissionOverwrites },
                                r = [],
                                d = [];
                            return (
                                n.forEach((t) => {
                                    let i = t.id;
                                    l.has(i)
                                        ? r.push({
                                              id: i,
                                              type: p.r2.ROLE,
                                              allow: a.WQ(s[i]?.allow ?? g.x3, e),
                                              deny: a.TF(s[i]?.deny ?? g.x3, e),
                                          })
                                        : (0, m.N8)(v.id, i)
                                          ? r.push({
                                                id: i,
                                                type: p.r2.ROLE,
                                                allow: a.TF(s[i]?.allow ?? g.x3, e),
                                                deny: a.WQ(s[i]?.deny ?? g.x3, e),
                                            })
                                          : i in s && d.push(i);
                                }, []),
                                (0, h.lS)(S.id, r, d)
                            );
                        },
                        [v, i, S],
                    ));
            return G
                ? (0, n.jsx)(d.y, {})
                : (0, n.jsxs)(r.a, {
                      title: k.intl.string(k.t.TFGnmk),
                      actions: [
                          { variant: "secondary", text: k.intl.string(k.t["ETE/oC"]), onClick: N },
                          {
                              variant: "primary",
                              text: k.intl.string(k.t["R3BPH+"]),
                              onClick: async function () {
                                  if (!q) return;
                                  (P(!0), Z(!1));
                                  let e = [...T];
                                  if (A) {
                                      let t = (0, x.af)(v);
                                      e.push(t);
                                  }
                                  try {
                                      (await K(j, e), N());
                                  } catch (e) {
                                      Z(!0);
                                  } finally {
                                      P(!1);
                                  }
                              },
                              disabled: !q,
                          },
                      ],
                      onClose: N,
                      transitionState: E,
                      children: [
                          (0, n.jsx)("div", {
                              className: w.CI,
                              children: (0, n.jsx)(o.Z, {
                                  selectionMode: "multiple",
                                  maxOptionsVisible: 5,
                                  placeholder: k.intl.string(k.t["8kKqCW"]),
                                  value: T,
                                  options: O,
                                  onSelectionChange: (e) => {
                                      F(e);
                                  },
                              }),
                          }),
                          (0, n.jsx)("div", {
                              className: w.nM,
                              children: (0, n.jsx)(c.d, {
                                  label: k.intl.string(k.t["kPwwA/"]),
                                  description: k.intl.format(k.t.l7Ercq, {}),
                                  checked: A,
                                  onChange: M,
                              }),
                          }),
                          W
                              ? (0, n.jsx)("div", {
                                    className: w.nM,
                                    children: (0, n.jsx)(u.E, {
                                        className: w.z3,
                                        variant: "body-sm/normal",
                                        children: k.intl.string(k.t.mgZKZP),
                                    }),
                                })
                              : null,
                      ],
                  });
        },
    },
);
