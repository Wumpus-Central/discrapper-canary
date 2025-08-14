l.d(t, { default: () => x }), l(388685), l(539854);
var r = l(255367),
    n = l(73800),
    i = l(149765),
    a = l(442837),
    o = l(82659),
    s = l(481060),
    u = l(741361),
    c = l(911969),
    d = l(605436),
    p = l(601964),
    f = l(485386),
    h = l(700785),
    m = l(993259),
    w = l(388032),
    v = l(628903);
function y(e) {
    return (t) => null != t && !(0, d.pM)(e, t);
}
let g = (e) => {
        let { rolesRow: t } = e;
        return (0, r.jsx)("div", {
            "aria-hidden": !0,
            className: v.roleCircle,
            style: { backgroundColor: null == t ? void 0 : t.colorString },
        });
    },
    x = (e) => {
        let { guild: t, channel: l, permission: x, onClose: b, transitionState: j, currentSelectedRoles: O = [] } = e,
            { shouldEveryonePost: S, setShouldEveryonePost: k } = ((e, t, l) => {
                let r = h.Uu(l, t),
                    [i, a] = n.useState(r);
                return {
                    shouldEveryonePost: i,
                    setShouldEveryonePost: a,
                };
            })(0, l, x),
            C = (function (e) {
                let t = (0, a.e7)([f.Z], () => f.Z.getSortedRoles(e.id));
                return n.useMemo(() => (0, m.K)(t).filter((t) => y(e.id)(t.id)), [e, t]);
            })(t),
            N = C.reduce((e, t) => (e.set(t.id, t), e), new Map()),
            H = C.map((e) => ({
                key: e.key,
                label: e.name,
                value: e.id,
            })),
            [E, P] = n.useState(O.map((e) => e.id).filter(y(t.id))),
            [_, R] = n.useState(!1),
            [Z, G] = n.useState(!1),
            K = E.length > 0 || S,
            M = (function (e, t) {
                let l = (0, a.e7)([f.Z], () => f.Z.getSortedRoles(e.id));
                return n.useCallback(
                    (r, n) => {
                        let a = (0, m.K)(l),
                            o = new Set(n),
                            s = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var l = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(l);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(l).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = l[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, t.permissionOverwrites),
                            p = [],
                            f = [];
                        return (
                            a.forEach((t) => {
                                var l, n, a, u, m, w, v, y, g, x;
                                let b = t.id,
                                    j = o.has(b);
                                j
                                    ? p.push({
                                          id: b,
                                          type: c.BN.ROLE,
                                          allow: j
                                              ? i.IH(null != (u = null == (l = s[b]) ? void 0 : l.allow) ? u : h.Hn, r)
                                              : i.Od(null != (m = null == (n = s[b]) ? void 0 : n.allow) ? m : h.Hn, r),
                                          deny: i.Od(null != (w = null == (a = s[b]) ? void 0 : a.deny) ? w : h.Hn, r),
                                      })
                                    : (0, d.pM)(e.id, b)
                                      ? p.push({
                                            id: b,
                                            type: c.BN.ROLE,
                                            allow: i.Od(
                                                null != (g = null == (v = s[b]) ? void 0 : v.allow) ? g : h.Hn,
                                                r,
                                            ),
                                            deny: i.IH(
                                                null != (x = null == (y = s[b]) ? void 0 : y.deny) ? x : h.Hn,
                                                r,
                                            ),
                                        })
                                      : b in s && f.push(b);
                            }, []),
                            (0, u.kU)(t.id, p, f)
                        );
                    },
                    [e, l, t],
                );
            })(t, l),
            B = async () => {
                if (!K) return;
                R(!0), G(!1);
                let e = [...E];
                if (S) {
                    let l = (0, p.lV)(t);
                    e.push(l);
                }
                try {
                    await M(x, e), b();
                } catch (e) {
                    G(!0);
                } finally {
                    R(!1);
                }
            };
        return _
            ? (0, r.jsx)(s.$jN, {})
            : (0, r.jsxs)(o.Modal, {
                  title: w.intl.string(w.t.TFGnmp),
                  actions: [
                      {
                          variant: "secondary",
                          text: w.intl.string(w.t["ETE/oK"]),
                          onClick: b,
                      },
                      {
                          variant: "primary",
                          text: w.intl.string(w.t.R3BPHx),
                          onClick: B,
                          disabled: !K,
                      },
                  ],
                  onClose: b,
                  transitionState: j,
                  children: [
                      (0, r.jsx)(s.VcW, {
                          closeOnSelect: !1,
                          className: v.roleSelector,
                          maxVisibleItems: 5,
                          placeholder: w.intl.string(w.t["8kKqCQ"]),
                          multi: !0,
                          value: E,
                          options: H,
                          onChange: (e) => {
                              P(e);
                          },
                          renderOptionPrefix: (e) => (null != e ? (0, r.jsx)(g, { rolesRow: N.get(e.value) }) : null),
                      }),
                      (0, r.jsxs)("div", {
                          className: v.row,
                          children: [
                              (0, r.jsx)(s.j7V, {
                                  value: S,
                                  hideBorder: !0,
                                  onChange: k,
                                  className: v.switchGroup,
                                  children: w.intl.string(w.t.kPwwAw),
                              }),
                              (0, r.jsx)(s.Text, {
                                  variant: "text-sm/normal",
                                  children: w.intl.format(w.t.l7Ercn, {}),
                              }),
                          ],
                      }),
                      Z
                          ? (0, r.jsx)("div", {
                                className: v.row,
                                children: (0, r.jsx)(s.Text, {
                                    className: v.error,
                                    variant: "text-sm/normal",
                                    children: w.intl.string(w.t.mgZKZG),
                                }),
                            })
                          : null,
                  ],
              });
    };
