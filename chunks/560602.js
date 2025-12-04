l.d(t, { default: () => k }), l(388685), l(539854);
var n = l(54381),
    r = l(473749),
    i = l(149765),
    a = l(793030),
    o = l(442837),
    s = l(668339),
    u = l(481060),
    c = l(741361),
    d = l(911969),
    p = l(605436),
    f = l(601964),
    h = l(485386),
    m = l(700785),
    v = l(993259),
    w = l(388032),
    y = l(628903);
function g(e) {
    return (t) => null != t && !(0, p.pM)(e, t);
}
let b = (e) => {
        let { rolesRow: t } = e;
        return (0, n.jsx)("div", {
            "aria-hidden": !0,
            className: y.roleCircle,
            style: { backgroundColor: null == t ? void 0 : t.colorString },
        });
    },
    k = (e) => {
        let { guild: t, channel: l, permission: k, onClose: x, transitionState: O, currentSelectedRoles: j = [] } = e,
            { shouldEveryonePost: S, setShouldEveryonePost: C } = ((e, t, l) => {
                let n = m.Uu(l, t),
                    [i, a] = r.useState(n);
                return {
                    shouldEveryonePost: i,
                    setShouldEveryonePost: a,
                };
            })(0, l, k),
            H = (function (e) {
                let t = (0, o.e7)([h.Z], () => h.Z.getSortedRoles(e.id));
                return r.useMemo(() => (0, v.K)(t).filter((t) => g(e.id)(t.id)), [e, t]);
            })(t),
            N = H.reduce((e, t) => (e.set(t.id, t), e), new Map()),
            P = H.map((e) => ({
                key: e.key,
                label: e.name,
                value: e.id,
            })),
            [E, R] = r.useState(j.map((e) => e.id).filter(g(t.id))),
            [Z, _] = r.useState(!1),
            [M, K] = r.useState(!1),
            B = E.length > 0 || S,
            I = (function (e, t) {
                let l = (0, o.e7)([h.Z], () => h.Z.getSortedRoles(e.id));
                return r.useCallback(
                    (n, r) => {
                        let a = (0, v.K)(l),
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
                            u = [],
                            f = [];
                        return (
                            a.forEach((t) => {
                                var l, r, a, c, h, v, w, y, g, b;
                                let k = t.id,
                                    x = o.has(k);
                                x
                                    ? u.push({
                                          id: k,
                                          type: d.BN.ROLE,
                                          allow: x
                                              ? i.IH(null != (c = null == (l = s[k]) ? void 0 : l.allow) ? c : m.Hn, n)
                                              : i.Od(null != (h = null == (r = s[k]) ? void 0 : r.allow) ? h : m.Hn, n),
                                          deny: i.Od(null != (v = null == (a = s[k]) ? void 0 : a.deny) ? v : m.Hn, n),
                                      })
                                    : (0, p.pM)(e.id, k)
                                      ? u.push({
                                            id: k,
                                            type: d.BN.ROLE,
                                            allow: i.Od(
                                                null != (g = null == (w = s[k]) ? void 0 : w.allow) ? g : m.Hn,
                                                n,
                                            ),
                                            deny: i.IH(
                                                null != (b = null == (y = s[k]) ? void 0 : y.deny) ? b : m.Hn,
                                                n,
                                            ),
                                        })
                                      : k in s && f.push(k);
                            }, []),
                            (0, c.kU)(t.id, u, f)
                        );
                    },
                    [e, l, t],
                );
            })(t, l),
            T = async () => {
                if (!B) return;
                _(!0), K(!1);
                let e = [...E];
                if (S) {
                    let l = (0, f.lV)(t);
                    e.push(l);
                }
                try {
                    await I(k, e), x();
                } catch (e) {
                    K(!0);
                } finally {
                    _(!1);
                }
            };
        return Z
            ? (0, n.jsx)(u.$jN, {})
            : (0, n.jsxs)(a.Modal, {
                  title: w.intl.string(w.t.TFGnmk),
                  actions: [
                      {
                          variant: "secondary",
                          text: w.intl.string(w.t["ETE/oC"]),
                          onClick: x,
                      },
                      {
                          variant: "primary",
                          text: w.intl.string(w.t["R3BPH+"]),
                          onClick: T,
                          disabled: !B,
                      },
                  ],
                  onClose: x,
                  transitionState: O,
                  children: [
                      (0, n.jsx)(s.d, {
                          closeOnSelect: !1,
                          className: y.roleSelector,
                          maxVisibleItems: 5,
                          placeholder: w.intl.string(w.t["8kKqCW"]),
                          multi: !0,
                          value: E,
                          options: P,
                          onChange: (e) => {
                              R(e);
                          },
                          renderOptionPrefix: (e) => (null != e ? (0, n.jsx)(b, { rolesRow: N.get(e.value) }) : null),
                      }),
                      (0, n.jsx)("div", {
                          className: y.row,
                          children: (0, n.jsx)(u.rsf, {
                              label: w.intl.string(w.t["kPwwA/"]),
                              description: w.intl.format(w.t.l7Ercq, {}),
                              checked: S,
                              onChange: C,
                          }),
                      }),
                      M
                          ? (0, n.jsx)("div", {
                                className: y.row,
                                children: (0, n.jsx)(u.Text, {
                                    className: y.error,
                                    variant: "text-sm/normal",
                                    children: w.intl.string(w.t.mgZKZP),
                                }),
                            })
                          : null,
                  ],
              });
    };
