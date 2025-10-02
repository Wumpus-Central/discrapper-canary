l.d(t, { default: () => b }), l(388685), l(539854);
var n = l(951288),
    r = l(647438),
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
    w = l(388032),
    v = l(356322);
function y(e) {
    return (t) => null != t && !(0, d.pM)(e, t);
}
let g = (e) => {
        let { rolesRow: t } = e;
        return (0, n.jsx)("div", {
            "aria-hidden": !0,
            className: v.roleCircle,
            style: { backgroundColor: null == t ? void 0 : t.colorString },
        });
    },
    b = (e) => {
        let { guild: t, channel: l, permission: b, onClose: x, transitionState: O, currentSelectedRoles: j = [] } = e,
            { shouldEveryonePost: k, setShouldEveryonePost: S } = ((e, t, l) => {
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
            [E, P] = r.useState(j.map((e) => e.id).filter(y(t.id))),
            [R, Z] = r.useState(!1),
            [_, K] = r.useState(!1),
            M = E.length > 0 || k,
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
                                var l, r, a, u, m, w, v, y, g, b;
                                let x = t.id,
                                    O = o.has(x);
                                O
                                    ? p.push({
                                          id: x,
                                          type: c.BN.ROLE,
                                          allow: O
                                              ? i.IH(null != (u = null == (l = s[x]) ? void 0 : l.allow) ? u : h.Hn, n)
                                              : i.Od(null != (m = null == (r = s[x]) ? void 0 : r.allow) ? m : h.Hn, n),
                                          deny: i.Od(null != (w = null == (a = s[x]) ? void 0 : a.deny) ? w : h.Hn, n),
                                      })
                                    : (0, d.pM)(e.id, x)
                                      ? p.push({
                                            id: x,
                                            type: c.BN.ROLE,
                                            allow: i.Od(
                                                null != (g = null == (v = s[x]) ? void 0 : v.allow) ? g : h.Hn,
                                                n,
                                            ),
                                            deny: i.IH(
                                                null != (b = null == (y = s[x]) ? void 0 : y.deny) ? b : h.Hn,
                                                n,
                                            ),
                                        })
                                      : x in s && f.push(x);
                            }, []),
                            (0, u.kU)(t.id, p, f)
                        );
                    },
                    [e, l, t],
                );
            })(t, l),
            I = async () => {
                if (!M) return;
                Z(!0), K(!1);
                let e = [...E];
                if (k) {
                    let l = (0, p.lV)(t);
                    e.push(l);
                }
                try {
                    await B(b, e), x();
                } catch (e) {
                    K(!0);
                } finally {
                    Z(!1);
                }
            };
        return R
            ? (0, n.jsx)(s.$jN, {})
            : (0, n.jsxs)(a.Modal, {
                  title: w.intl.string(w.t.TFGnmp),
                  actions: [
                      {
                          variant: "secondary",
                          text: w.intl.string(w.t["ETE/oK"]),
                          onClick: x,
                      },
                      {
                          variant: "primary",
                          text: w.intl.string(w.t.R3BPHx),
                          onClick: I,
                          disabled: !M,
                      },
                  ],
                  onClose: x,
                  transitionState: O,
                  children: [
                      (0, n.jsx)(s.VcW, {
                          closeOnSelect: !1,
                          className: v.roleSelector,
                          maxVisibleItems: 5,
                          placeholder: w.intl.string(w.t["8kKqCQ"]),
                          multi: !0,
                          value: E,
                          options: N,
                          onChange: (e) => {
                              P(e);
                          },
                          renderOptionPrefix: (e) => (null != e ? (0, n.jsx)(g, { rolesRow: H.get(e.value) }) : null),
                      }),
                      (0, n.jsx)("div", {
                          className: v.row,
                          children: (0, n.jsx)(s.rsf, {
                              label: w.intl.string(w.t.kPwwAw),
                              description: w.intl.format(w.t.l7Ercn, {}),
                              checked: k,
                              onChange: S,
                          }),
                      }),
                      _
                          ? (0, n.jsx)("div", {
                                className: v.row,
                                children: (0, n.jsx)(s.Text, {
                                    className: v.error,
                                    variant: "text-sm/normal",
                                    children: w.intl.string(w.t.mgZKZG),
                                }),
                            })
                          : null,
                  ],
              });
    };
