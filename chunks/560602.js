l.d(t, { default: () => g }), l(388685), l(539854);
var n = l(54381),
    r = l(473749),
    i = l(149765),
    a = l(793030),
    o = l(442837),
    s = l(481060),
    c = l(741361),
    d = l(911969),
    u = l(605436),
    f = l(601964),
    p = l(485386),
    h = l(700785),
    b = l(993259),
    m = l(388032),
    v = l(357378);
function y(e) {
    return (t) => null != t && !(0, u.pM)(e, t);
}
let w = (e) => {
        let { rolesRow: t } = e;
        return (0, n.jsx)("div", {
            "aria-hidden": !0,
            className: v.roleCircle,
            style: { backgroundColor: null == t ? void 0 : t.colorString },
        });
    },
    g = (e) => {
        let { guild: t, channel: l, permission: g, onClose: j, transitionState: k, currentSelectedRoles: x = [] } = e,
            { shouldEveryonePost: O, setShouldEveryonePost: S } = ((e, t, l) => {
                let n = h.Uu(l, t),
                    [i, a] = r.useState(n);
                return {
                    shouldEveryonePost: i,
                    setShouldEveryonePost: a,
                };
            })(0, l, g),
            C = (function (e) {
                let t = (0, o.e7)([p.Z], () => p.Z.getSortedRoles(e.id));
                return r.useMemo(() => (0, b.K)(t).filter((t) => y(e.id)(t.id)), [e, t]);
            })(t).map((e) => ({
                key: e.key,
                id: e.id,
                label: e.name,
                value: e.id,
                leading: (0, n.jsx)(w, { rolesRow: e }),
            })),
            [H, N] = r.useState(x.map((e) => e.id).filter(y(t.id))),
            [E, P] = r.useState(!1),
            [R, Z] = r.useState(!1),
            M = H.length > 0 || O,
            K = (function (e, t) {
                let l = (0, o.e7)([p.Z], () => p.Z.getSortedRoles(e.id));
                return r.useCallback(
                    (n, r) => {
                        let a = (0, b.K)(l),
                            o = new Set(r),
                            s = (function (e) {
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
                            })({}, t.permissionOverwrites),
                            f = [],
                            p = [];
                        return (
                            a.forEach((t) => {
                                var l, r, a, c, b, m, v, y, w, g;
                                let j = t.id,
                                    k = o.has(j);
                                k
                                    ? f.push({
                                          id: j,
                                          type: d.BN.ROLE,
                                          allow: k
                                              ? i.IH(null != (c = null == (l = s[j]) ? void 0 : l.allow) ? c : h.Hn, n)
                                              : i.Od(null != (b = null == (r = s[j]) ? void 0 : r.allow) ? b : h.Hn, n),
                                          deny: i.Od(null != (m = null == (a = s[j]) ? void 0 : a.deny) ? m : h.Hn, n),
                                      })
                                    : (0, u.pM)(e.id, j)
                                      ? f.push({
                                            id: j,
                                            type: d.BN.ROLE,
                                            allow: i.Od(
                                                null != (w = null == (v = s[j]) ? void 0 : v.allow) ? w : h.Hn,
                                                n,
                                            ),
                                            deny: i.IH(
                                                null != (g = null == (y = s[j]) ? void 0 : y.deny) ? g : h.Hn,
                                                n,
                                            ),
                                        })
                                      : j in s && p.push(j);
                            }, []),
                            (0, c.kU)(t.id, f, p)
                        );
                    },
                    [e, l, t],
                );
            })(t, l),
            B = async () => {
                if (!M) return;
                P(!0), Z(!1);
                let e = [...H];
                if (O) {
                    let l = (0, f.lV)(t);
                    e.push(l);
                }
                try {
                    await K(g, e), j();
                } catch (e) {
                    Z(!0);
                } finally {
                    P(!1);
                }
            };
        return E
            ? (0, n.jsx)(s.$jN, {})
            : (0, n.jsxs)(a.Modal, {
                  title: m.intl.string(m.t.TFGnmk),
                  actions: [
                      {
                          variant: "secondary",
                          text: m.intl.string(m.t["ETE/oC"]),
                          onClick: j,
                      },
                      {
                          variant: "primary",
                          text: m.intl.string(m.t["R3BPH+"]),
                          onClick: B,
                          disabled: !M,
                      },
                  ],
                  onClose: j,
                  transitionState: k,
                  children: [
                      (0, n.jsx)("div", {
                          className: v.roleSelector,
                          children: (0, n.jsx)(s.VcW, {
                              selectionMode: "multiple",
                              maxOptionsVisible: 5,
                              placeholder: m.intl.string(m.t["8kKqCW"]),
                              value: H,
                              options: C,
                              onSelectionChange: (e) => {
                                  N(e);
                              },
                          }),
                      }),
                      (0, n.jsx)("div", {
                          className: v.row,
                          children: (0, n.jsx)(s.rsf, {
                              label: m.intl.string(m.t["kPwwA/"]),
                              description: m.intl.format(m.t.l7Ercq, {}),
                              checked: O,
                              onChange: S,
                          }),
                      }),
                      R
                          ? (0, n.jsx)("div", {
                                className: v.row,
                                children: (0, n.jsx)(s.Text, {
                                    className: v.error,
                                    variant: "text-sm/normal",
                                    children: m.intl.string(m.t.mgZKZP),
                                }),
                            })
                          : null,
                  ],
              });
    };
