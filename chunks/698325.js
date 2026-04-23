i.d(t, { default: () => v }), i(321073);
var l = i(627968),
    a = i(64700),
    n = i(136722),
    r = i(189213),
    s = i(17928),
    d = i(289873),
    o = i(783878),
    c = i(243721),
    u = i(834730),
    h = i(702805),
    p = i(155718),
    x = i(495273),
    m = i(260509),
    g = i(317525),
    y = i(488926),
    f = i(387255),
    k = i(985018),
    C = i(905060);
function w(e) {
    return (t) => null != t && !(0, x.N8)(e, t);
}
let S = (e) => {
        let { rolesRow: t } = e;
        return (0, l.jsx)("div", { "aria-hidden": !0, className: C.Ni, style: { backgroundColor: t?.colorString } });
    },
    v = (e) => {
        let t,
            i,
            { guild: v, channel: b, permission: j, onClose: N, transitionState: E, currentSelectedRoles: M = [] } = e,
            { shouldEveryonePost: R, setShouldEveryonePost: _ } = ((e, t) => {
                let i = y.MJ(t, e),
                    [l, n] = a.useState(i);
                return { shouldEveryonePost: l, setShouldEveryonePost: n };
            })(b, j),
            A = ((t = (0, s.bG)([g.A], () => g.A.getSortedRoles(v.id))),
            a.useMemo(() => (0, f.i)(t).filter((e) => w(v.id)(e.id)), [v, t])).map((e) => ({
                key: e.key,
                id: e.id,
                label: e.name,
                value: e.id,
                leading: (0, l.jsx)(S, { rolesRow: e }),
            })),
            [O, T] = a.useState(M.map((e) => e.id).filter(w(v.id))),
            [F, G] = a.useState(!1),
            [P, W] = a.useState(!1),
            Z = O.length > 0 || R,
            q =
                ((i = (0, s.bG)([g.A], () => g.A.getSortedRoles(v.id))),
                a.useCallback(
                    (e, t) => {
                        let l = (0, f.i)(i),
                            a = new Set(t),
                            r = { ...b.permissionOverwrites },
                            s = [],
                            d = [];
                        return (
                            l.forEach((t) => {
                                let i = t.id;
                                a.has(i)
                                    ? s.push({
                                          id: i,
                                          type: p.r2.ROLE,
                                          allow: n.WQ(r[i]?.allow ?? y.x3, e),
                                          deny: n.TF(r[i]?.deny ?? y.x3, e),
                                      })
                                    : (0, x.N8)(v.id, i)
                                      ? s.push({
                                            id: i,
                                            type: p.r2.ROLE,
                                            allow: n.TF(r[i]?.allow ?? y.x3, e),
                                            deny: n.WQ(r[i]?.deny ?? y.x3, e),
                                        })
                                      : i in r && d.push(i);
                            }, []),
                            (0, h.lS)(b.id, s, d)
                        );
                    },
                    [v, i, b],
                )),
            z = async () => {
                if (!Z) return;
                G(!0), W(!1);
                let e = [...O];
                if (R) {
                    let t = (0, m.af)(v);
                    e.push(t);
                }
                try {
                    await q(j, e), N();
                } catch (e) {
                    W(!0);
                } finally {
                    G(!1);
                }
            };
        return F
            ? (0, l.jsx)(d.y, {})
            : (0, l.jsxs)(r.Modal, {
                  title: k.intl.string(k.t.TFGnmk),
                  actions: [
                      { variant: "secondary", text: k.intl.string(k.t["ETE/oC"]), onClick: N },
                      { variant: "primary", text: k.intl.string(k.t["R3BPH+"]), onClick: z, disabled: !Z },
                  ],
                  onClose: N,
                  transitionState: E,
                  children: [
                      (0, l.jsx)("div", {
                          className: C.CI,
                          children: (0, l.jsx)(o.Z, {
                              selectionMode: "multiple",
                              maxOptionsVisible: 5,
                              placeholder: k.intl.string(k.t["8kKqCW"]),
                              value: O,
                              options: A,
                              onSelectionChange: (e) => {
                                  T(e);
                              },
                          }),
                      }),
                      (0, l.jsx)("div", {
                          className: C.nM,
                          children: (0, l.jsx)(c.d, {
                              label: k.intl.string(k.t["kPwwA/"]),
                              description: k.intl.format(k.t.l7Ercq, {}),
                              checked: R,
                              onChange: _,
                          }),
                      }),
                      P
                          ? (0, l.jsx)("div", {
                                className: C.nM,
                                children: (0, l.jsx)(u.E, {
                                    className: C.z3,
                                    variant: "text-sm/normal",
                                    children: k.intl.string(k.t.mgZKZP),
                                }),
                            })
                          : null,
                  ],
              });
    };
