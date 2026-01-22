l.d(t, { default: () => g }), l(896048), l(321073);
var n = l(627968),
    i = l(64700),
    r = l(136722),
    a = l(158954),
    s = l(311907),
    o = l(397927),
    d = l(702805),
    c = l(155718),
    u = l(495273),
    p = l(260509),
    h = l(317525),
    b = l(488926),
    f = l(387255),
    y = l(985018),
    m = l(811221);
function v(e) {
    return (t) => null != t && !(0, u.N8)(e, t);
}
let x = (e) => {
        let { rolesRow: t } = e;
        return (0, n.jsx)("div", {
            "aria-hidden": !0,
            className: m.Ni,
            style: { backgroundColor: null == t ? void 0 : t.colorString },
        });
    },
    g = (e) => {
        let t,
            l,
            { guild: g, channel: w, permission: j, onClose: k, transitionState: C, currentSelectedRoles: O = [] } = e,
            { shouldEveryonePost: S, setShouldEveryonePost: N } = ((e, t, l) => {
                let n = b.MJ(l, t),
                    [r, a] = i.useState(n);
                return {
                    shouldEveryonePost: r,
                    setShouldEveryonePost: a,
                };
            })(0, w, j),
            E = ((t = (0, s.bG)([h.A], () => h.A.getSortedRoles(g.id))),
            i.useMemo(() => (0, f.i)(t).filter((e) => v(g.id)(e.id)), [g, t])).map((e) => ({
                key: e.key,
                id: e.id,
                label: e.name,
                value: e.id,
                leading: (0, n.jsx)(x, { rolesRow: e }),
            })),
            [M, P] = i.useState(O.map((e) => e.id).filter(v(g.id))),
            [R, T] = i.useState(!1),
            [A, _] = i.useState(!1),
            F = M.length > 0 || S,
            G =
                ((l = (0, s.bG)([h.A], () => h.A.getSortedRoles(g.id))),
                i.useCallback(
                    (e, t) => {
                        let n = (0, f.i)(l),
                            i = new Set(t),
                            a = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var l = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(l);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(l).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                            }),
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            (n = l[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = n);
                                        });
                                }
                                return e;
                            })({}, w.permissionOverwrites),
                            s = [],
                            o = [];
                        return (
                            n.forEach((t) => {
                                var l, n, d, p, h, f, y, m, v, x;
                                let w = t.id,
                                    j = i.has(w);
                                j
                                    ? s.push({
                                          id: w,
                                          type: c.r2.ROLE,
                                          allow: j
                                              ? r.WQ(null != (l = null == (p = a[w]) ? void 0 : p.allow) ? l : b.x3, e)
                                              : r.TF(null != (n = null == (h = a[w]) ? void 0 : h.allow) ? n : b.x3, e),
                                          deny: r.TF(null != (d = null == (f = a[w]) ? void 0 : f.deny) ? d : b.x3, e),
                                      })
                                    : (0, u.N8)(g.id, w)
                                      ? s.push({
                                            id: w,
                                            type: c.r2.ROLE,
                                            allow: r.TF(
                                                null != (y = null == (v = a[w]) ? void 0 : v.allow) ? y : b.x3,
                                                e,
                                            ),
                                            deny: r.WQ(
                                                null != (m = null == (x = a[w]) ? void 0 : x.deny) ? m : b.x3,
                                                e,
                                            ),
                                        })
                                      : w in a && o.push(w);
                            }, []),
                            (0, d.lS)(w.id, s, o)
                        );
                    },
                    [g, l, w],
                )),
            W = async () => {
                if (!F) return;
                T(!0), _(!1);
                let e = [...M];
                if (S) {
                    let t = (0, p.af)(g);
                    e.push(t);
                }
                try {
                    await G(j, e), k();
                } catch (e) {
                    _(!0);
                } finally {
                    T(!1);
                }
            };
        return R
            ? (0, n.jsx)(o.y$y, {})
            : (0, n.jsxs)(a.Modal, {
                  title: y.intl.string(y.t.TFGnmk),
                  actions: [
                      {
                          variant: "secondary",
                          text: y.intl.string(y.t["ETE/oC"]),
                          onClick: k,
                      },
                      {
                          variant: "primary",
                          text: y.intl.string(y.t["R3BPH+"]),
                          onClick: W,
                          disabled: !F,
                      },
                  ],
                  onClose: k,
                  transitionState: C,
                  children: [
                      (0, n.jsx)("div", {
                          className: m.CI,
                          children: (0, n.jsx)(o.ZiE, {
                              selectionMode: "multiple",
                              maxOptionsVisible: 5,
                              placeholder: y.intl.string(y.t["8kKqCW"]),
                              value: M,
                              options: E,
                              onSelectionChange: (e) => {
                                  P(e);
                              },
                          }),
                      }),
                      (0, n.jsx)("div", {
                          className: m.nM,
                          children: (0, n.jsx)(o.dOG, {
                              label: y.intl.string(y.t["kPwwA/"]),
                              description: y.intl.format(y.t.l7Ercq, {}),
                              checked: S,
                              onChange: N,
                          }),
                      }),
                      A
                          ? (0, n.jsx)("div", {
                                className: m.nM,
                                children: (0, n.jsx)(o.Text, {
                                    className: m.z3,
                                    variant: "text-sm/normal",
                                    children: y.intl.string(y.t.mgZKZP),
                                }),
                            })
                          : null,
                  ],
              });
    };
