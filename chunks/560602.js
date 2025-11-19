l.d(t, { default: () => b }), l(388685), l(539854);
var n = l(54381),
    r = l(473749),
    i = l(149765),
    a = l(793030),
    o = l(442837),
    s = l(481060),
    u = l(741361),
    c = l(911969),
    d = l(605436),
    p = l(601964),
    f = l(485386),
    h = l(700785),
    m = l(993259),
    v = l(388032),
    w = l(356322);
function y(e) {
    return (t) => null != t && !(0, d.pM)(e, t);
}
let g = (e) => {
        let { rolesRow: t } = e;
        return (0, n.jsx)("div", {
            "aria-hidden": !0,
            className: w.roleCircle,
            style: { backgroundColor: null == t ? void 0 : t.colorString },
        });
    },
    b = (e) => {
        let { guild: t, channel: l, permission: b, onClose: k, transitionState: x, currentSelectedRoles: O = [] } = e,
            { shouldEveryonePost: j, setShouldEveryonePost: S } = ((e, t, l) => {
                let n = h.Uu(l, t),
                    [i, a] = r.useState(n);
                return {
                    shouldEveryonePost: i,
                    setShouldEveryonePost: a,
                };
            })(0, l, b),
            C = (function (e) {
                let t = (0, o.e7)([f.Z], () => f.Z.getSortedRoles(e.id));
                return r.useMemo(() => (0, m.K)(t).filter((t) => y(e.id)(t.id)), [e, t]);
            })(t),
            H = C.reduce((e, t) => (e.set(t.id, t), e), new Map()),
            N = C.map((e) => ({
                key: e.key,
                label: e.name,
                value: e.id,
            })),
            [P, E] = r.useState(O.map((e) => e.id).filter(y(t.id))),
            [R, Z] = r.useState(!1),
            [_, M] = r.useState(!1),
            K = P.length > 0 || j,
            B = (function (e, t) {
                let l = (0, o.e7)([f.Z], () => f.Z.getSortedRoles(e.id));
                return r.useCallback(
                    (n, r) => {
                        let a = (0, m.K)(l),
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
                            p = [],
                            f = [];
                        return (
                            a.forEach((t) => {
                                var l, r, a, u, m, v, w, y, g, b;
                                let k = t.id,
                                    x = o.has(k);
                                x
                                    ? p.push({
                                          id: k,
                                          type: c.BN.ROLE,
                                          allow: x
                                              ? i.IH(null != (u = null == (l = s[k]) ? void 0 : l.allow) ? u : h.Hn, n)
                                              : i.Od(null != (m = null == (r = s[k]) ? void 0 : r.allow) ? m : h.Hn, n),
                                          deny: i.Od(null != (v = null == (a = s[k]) ? void 0 : a.deny) ? v : h.Hn, n),
                                      })
                                    : (0, d.pM)(e.id, k)
                                      ? p.push({
                                            id: k,
                                            type: c.BN.ROLE,
                                            allow: i.Od(
                                                null != (g = null == (w = s[k]) ? void 0 : w.allow) ? g : h.Hn,
                                                n,
                                            ),
                                            deny: i.IH(
                                                null != (b = null == (y = s[k]) ? void 0 : y.deny) ? b : h.Hn,
                                                n,
                                            ),
                                        })
                                      : k in s && f.push(k);
                            }, []),
                            (0, u.kU)(t.id, p, f)
                        );
                    },
                    [e, l, t],
                );
            })(t, l),
            I = async () => {
                if (!K) return;
                Z(!0), M(!1);
                let e = [...P];
                if (j) {
                    let l = (0, p.lV)(t);
                    e.push(l);
                }
                try {
                    await B(b, e), k();
                } catch (e) {
                    M(!0);
                } finally {
                    Z(!1);
                }
            };
        return R
            ? (0, n.jsx)(s.$jN, {})
            : (0, n.jsxs)(a.Modal, {
                  title: v.intl.string(v.t.TFGnmk),
                  actions: [
                      {
                          variant: "secondary",
                          text: v.intl.string(v.t["ETE/oC"]),
                          onClick: k,
                      },
                      {
                          variant: "primary",
                          text: v.intl.string(v.t["R3BPH+"]),
                          onClick: I,
                          disabled: !K,
                      },
                  ],
                  onClose: k,
                  transitionState: x,
                  children: [
                      (0, n.jsx)(s.VcW, {
                          closeOnSelect: !1,
                          className: w.roleSelector,
                          maxVisibleItems: 5,
                          placeholder: v.intl.string(v.t["8kKqCW"]),
                          multi: !0,
                          value: P,
                          options: N,
                          onChange: (e) => {
                              E(e);
                          },
                          renderOptionPrefix: (e) => (null != e ? (0, n.jsx)(g, { rolesRow: H.get(e.value) }) : null),
                      }),
                      (0, n.jsx)("div", {
                          className: w.row,
                          children: (0, n.jsx)(s.rsf, {
                              label: v.intl.string(v.t["kPwwA/"]),
                              description: v.intl.format(v.t.l7Ercq, {}),
                              checked: j,
                              onChange: S,
                          }),
                      }),
                      _
                          ? (0, n.jsx)("div", {
                                className: w.row,
                                children: (0, n.jsx)(s.Text, {
                                    className: w.error,
                                    variant: "text-sm/normal",
                                    children: v.intl.string(v.t.mgZKZP),
                                }),
                            })
                          : null,
                  ],
              });
    };
