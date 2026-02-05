i.d(t, { default: () => w }), i(321073);
var l = i(627968),
    a = i(64700),
    n = i(136722),
    r = i(158954),
    s = i(311907),
    o = i(397927),
    d = i(702805),
    c = i(155718),
    u = i(495273),
    h = i(260509),
    p = i(317525),
    x = i(488926),
    m = i(387255),
    y = i(985018),
    g = i(811221);
function f(e) {
    return (t) => null != t && !(0, u.N8)(e, t);
}
let k = (e) => {
        let { rolesRow: t } = e;
        return (0, l.jsx)("div", { "aria-hidden": !0, className: g.Ni, style: { backgroundColor: t?.colorString } });
    },
    w = (e) => {
        let t,
            i,
            { guild: w, channel: C, permission: S, onClose: v, transitionState: b, currentSelectedRoles: j = [] } = e,
            { shouldEveryonePost: N, setShouldEveryonePost: E } = ((e, t, i) => {
                let l = x.MJ(i, t),
                    [n, r] = a.useState(l);
                return { shouldEveryonePost: n, setShouldEveryonePost: r };
            })(0, C, S),
            M = ((t = (0, s.bG)([p.A], () => p.A.getSortedRoles(w.id))),
            a.useMemo(() => (0, m.i)(t).filter((e) => f(w.id)(e.id)), [w, t])).map((e) => ({
                key: e.key,
                id: e.id,
                label: e.name,
                value: e.id,
                leading: (0, l.jsx)(k, { rolesRow: e }),
            })),
            [R, T] = a.useState(j.map((e) => e.id).filter(f(w.id))),
            [_, A] = a.useState(!1),
            [O, F] = a.useState(!1),
            G = R.length > 0 || N,
            P =
                ((i = (0, s.bG)([p.A], () => p.A.getSortedRoles(w.id))),
                a.useCallback(
                    (e, t) => {
                        let l = (0, m.i)(i),
                            a = new Set(t),
                            r = { ...C.permissionOverwrites },
                            s = [],
                            o = [];
                        return (
                            l.forEach((t) => {
                                let i = t.id,
                                    l = a.has(i);
                                l
                                    ? s.push({
                                          id: i,
                                          type: c.r2.ROLE,
                                          allow: l ? n.WQ(r[i]?.allow ?? x.x3, e) : n.TF(r[i]?.allow ?? x.x3, e),
                                          deny: n.TF(r[i]?.deny ?? x.x3, e),
                                      })
                                    : (0, u.N8)(w.id, i)
                                      ? s.push({
                                            id: i,
                                            type: c.r2.ROLE,
                                            allow: n.TF(r[i]?.allow ?? x.x3, e),
                                            deny: n.WQ(r[i]?.deny ?? x.x3, e),
                                        })
                                      : i in r && o.push(i);
                            }, []),
                            (0, d.lS)(C.id, s, o)
                        );
                    },
                    [w, i, C],
                )),
            W = async () => {
                if (!G) return;
                A(!0), F(!1);
                let e = [...R];
                if (N) {
                    let t = (0, h.af)(w);
                    e.push(t);
                }
                try {
                    await P(S, e), v();
                } catch (e) {
                    F(!0);
                } finally {
                    A(!1);
                }
            };
        return _
            ? (0, l.jsx)(o.y$y, {})
            : (0, l.jsxs)(r.Modal, {
                  title: y.intl.string(y.t.TFGnmk),
                  actions: [
                      { variant: "secondary", text: y.intl.string(y.t["ETE/oC"]), onClick: v },
                      { variant: "primary", text: y.intl.string(y.t["R3BPH+"]), onClick: W, disabled: !G },
                  ],
                  onClose: v,
                  transitionState: b,
                  children: [
                      (0, l.jsx)("div", {
                          className: g.CI,
                          children: (0, l.jsx)(o.ZiE, {
                              selectionMode: "multiple",
                              maxOptionsVisible: 5,
                              placeholder: y.intl.string(y.t["8kKqCW"]),
                              value: R,
                              options: M,
                              onSelectionChange: (e) => {
                                  T(e);
                              },
                          }),
                      }),
                      (0, l.jsx)("div", {
                          className: g.nM,
                          children: (0, l.jsx)(o.dOG, {
                              label: y.intl.string(y.t["kPwwA/"]),
                              description: y.intl.format(y.t.l7Ercq, {}),
                              checked: N,
                              onChange: E,
                          }),
                      }),
                      O
                          ? (0, l.jsx)("div", {
                                className: g.nM,
                                children: (0, l.jsx)(o.Text, {
                                    className: g.z3,
                                    variant: "text-sm/normal",
                                    children: y.intl.string(y.t.mgZKZP),
                                }),
                            })
                          : null,
                  ],
              });
    };
