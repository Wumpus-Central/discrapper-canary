i.d(t, { default: () => C }), i(321073);
var l = i(627968),
    a = i(64700),
    n = i(136722),
    r = i(158954),
    s = i(311907),
    d = i(397927),
    o = i(702805),
    c = i(155718),
    u = i(495273),
    h = i(260509),
    p = i(317525),
    x = i(488926),
    m = i(387255),
    y = i(985018),
    g = i(905060);
function f(e) {
    return (t) => null != t && !(0, u.N8)(e, t);
}
let k = (e) => {
        let { rolesRow: t } = e;
        return (0, l.jsx)("div", { "aria-hidden": !0, className: g.Ni, style: { backgroundColor: t?.colorString } });
    },
    C = (e) => {
        let t,
            i,
            { guild: C, channel: w, permission: S, onClose: v, transitionState: b, currentSelectedRoles: j = [] } = e,
            { shouldEveryonePost: N, setShouldEveryonePost: E } = ((e, t) => {
                let i = x.MJ(t, e),
                    [l, n] = a.useState(i);
                return { shouldEveryonePost: l, setShouldEveryonePost: n };
            })(w, S),
            M = ((t = (0, s.bG)([p.A], () => p.A.getSortedRoles(C.id))),
            a.useMemo(() => (0, m.i)(t).filter((e) => f(C.id)(e.id)), [C, t])).map((e) => ({
                key: e.key,
                id: e.id,
                label: e.name,
                value: e.id,
                leading: (0, l.jsx)(k, { rolesRow: e }),
            })),
            [R, _] = a.useState(j.map((e) => e.id).filter(f(C.id))),
            [A, O] = a.useState(!1),
            [T, G] = a.useState(!1),
            F = R.length > 0 || N,
            P =
                ((i = (0, s.bG)([p.A], () => p.A.getSortedRoles(C.id))),
                a.useCallback(
                    (e, t) => {
                        let l = (0, m.i)(i),
                            a = new Set(t),
                            r = { ...w.permissionOverwrites },
                            s = [],
                            d = [];
                        return (
                            l.forEach((t) => {
                                let i = t.id;
                                a.has(i)
                                    ? s.push({
                                          id: i,
                                          type: c.r2.ROLE,
                                          allow: n.WQ(r[i]?.allow ?? x.x3, e),
                                          deny: n.TF(r[i]?.deny ?? x.x3, e),
                                      })
                                    : (0, u.N8)(C.id, i)
                                      ? s.push({
                                            id: i,
                                            type: c.r2.ROLE,
                                            allow: n.TF(r[i]?.allow ?? x.x3, e),
                                            deny: n.WQ(r[i]?.deny ?? x.x3, e),
                                        })
                                      : i in r && d.push(i);
                            }, []),
                            (0, o.lS)(w.id, s, d)
                        );
                    },
                    [C, i, w],
                )),
            W = async () => {
                if (!F) return;
                O(!0), G(!1);
                let e = [...R];
                if (N) {
                    let t = (0, h.af)(C);
                    e.push(t);
                }
                try {
                    await P(S, e), v();
                } catch (e) {
                    G(!0);
                } finally {
                    O(!1);
                }
            };
        return A
            ? (0, l.jsx)(d.y$y, {})
            : (0, l.jsxs)(r.Modal, {
                  title: y.intl.string(y.t.TFGnmk),
                  actions: [
                      { variant: "secondary", text: y.intl.string(y.t["ETE/oC"]), onClick: v },
                      { variant: "primary", text: y.intl.string(y.t["R3BPH+"]), onClick: W, disabled: !F },
                  ],
                  onClose: v,
                  transitionState: b,
                  children: [
                      (0, l.jsx)("div", {
                          className: g.CI,
                          children: (0, l.jsx)(d.ZiE, {
                              selectionMode: "multiple",
                              maxOptionsVisible: 5,
                              placeholder: y.intl.string(y.t["8kKqCW"]),
                              value: R,
                              options: M,
                              onSelectionChange: (e) => {
                                  _(e);
                              },
                          }),
                      }),
                      (0, l.jsx)("div", {
                          className: g.nM,
                          children: (0, l.jsx)(d.dOG, {
                              label: y.intl.string(y.t["kPwwA/"]),
                              description: y.intl.format(y.t.l7Ercq, {}),
                              checked: N,
                              onChange: E,
                          }),
                      }),
                      T
                          ? (0, l.jsx)("div", {
                                className: g.nM,
                                children: (0, l.jsx)(d.Text, {
                                    className: g.z3,
                                    variant: "text-sm/normal",
                                    children: y.intl.string(y.t.mgZKZP),
                                }),
                            })
                          : null,
                  ],
              });
    };
