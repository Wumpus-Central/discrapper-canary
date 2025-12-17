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
    f = l(605436),
    p = l(601964),
    h = l(485386),
    b = l(700785),
    m = l(993259),
    v = l(388032),
    w = l(357378);
function y(e) {
    return (t) => null != t && !(0, f.pM)(e, t);
}
let g = (e) => {
        let { rolesRow: t } = e;
        return (0, n.jsx)("div", {
            "aria-hidden": !0,
            className: w.roleCircle,
            style: { backgroundColor: null == t ? void 0 : t.colorString },
        });
    },
    k = (e) => {
        let { guild: t, channel: l, permission: k, onClose: x, transitionState: O, currentSelectedRoles: j = [] } = e,
            { shouldEveryonePost: S, setShouldEveryonePost: C } = ((e, t, l) => {
                let n = b.Uu(l, t),
                    [i, a] = r.useState(n);
                return {
                    shouldEveryonePost: i,
                    setShouldEveryonePost: a,
                };
            })(0, l, k),
            H = (function (e) {
                let t = (0, o.e7)([h.Z], () => h.Z.getSortedRoles(e.id));
                return r.useMemo(() => (0, m.K)(t).filter((t) => y(e.id)(t.id)), [e, t]);
            })(t),
            N = H.reduce((e, t) => (e.set(t.id, t), e), new Map()),
            P = H.map((e) => ({
                key: e.key,
                label: e.name,
                value: e.id,
            })),
            [E, R] = r.useState(j.map((e) => e.id).filter(y(t.id))),
            [Z, M] = r.useState(!1),
            [K, B] = r.useState(!1),
            I = E.length > 0 || S,
            T = (function (e, t) {
                let l = (0, o.e7)([h.Z], () => h.Z.getSortedRoles(e.id));
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
                            u = [],
                            p = [];
                        return (
                            a.forEach((t) => {
                                var l, r, a, c, h, m, v, w, y, g;
                                let k = t.id,
                                    x = o.has(k);
                                x
                                    ? u.push({
                                          id: k,
                                          type: d.BN.ROLE,
                                          allow: x
                                              ? i.IH(null != (c = null == (l = s[k]) ? void 0 : l.allow) ? c : b.Hn, n)
                                              : i.Od(null != (h = null == (r = s[k]) ? void 0 : r.allow) ? h : b.Hn, n),
                                          deny: i.Od(null != (m = null == (a = s[k]) ? void 0 : a.deny) ? m : b.Hn, n),
                                      })
                                    : (0, f.pM)(e.id, k)
                                      ? u.push({
                                            id: k,
                                            type: d.BN.ROLE,
                                            allow: i.Od(
                                                null != (y = null == (v = s[k]) ? void 0 : v.allow) ? y : b.Hn,
                                                n,
                                            ),
                                            deny: i.IH(
                                                null != (g = null == (w = s[k]) ? void 0 : w.deny) ? g : b.Hn,
                                                n,
                                            ),
                                        })
                                      : k in s && p.push(k);
                            }, []),
                            (0, c.kU)(t.id, u, p)
                        );
                    },
                    [e, l, t],
                );
            })(t, l),
            q = async () => {
                if (!I) return;
                M(!0), B(!1);
                let e = [...E];
                if (S) {
                    let l = (0, p.lV)(t);
                    e.push(l);
                }
                try {
                    await T(k, e), x();
                } catch (e) {
                    B(!0);
                } finally {
                    M(!1);
                }
            };
        return Z
            ? (0, n.jsx)(u.$jN, {})
            : (0, n.jsxs)(a.Modal, {
                  title: v.intl.string(v.t.TFGnmk),
                  actions: [
                      {
                          variant: "secondary",
                          text: v.intl.string(v.t["ETE/oC"]),
                          onClick: x,
                      },
                      {
                          variant: "primary",
                          text: v.intl.string(v.t["R3BPH+"]),
                          onClick: q,
                          disabled: !I,
                      },
                  ],
                  onClose: x,
                  transitionState: O,
                  children: [
                      (0, n.jsx)(s.d, {
                          closeOnSelect: !1,
                          className: w.roleSelector,
                          maxVisibleItems: 5,
                          placeholder: v.intl.string(v.t["8kKqCW"]),
                          multi: !0,
                          value: E,
                          options: P,
                          onChange: (e) => {
                              R(e);
                          },
                          renderOptionPrefix: (e) => (null != e ? (0, n.jsx)(g, { rolesRow: N.get(e.value) }) : null),
                      }),
                      (0, n.jsx)("div", {
                          className: w.row,
                          children: (0, n.jsx)(u.rsf, {
                              label: v.intl.string(v.t["kPwwA/"]),
                              description: v.intl.format(v.t.l7Ercq, {}),
                              checked: S,
                              onChange: C,
                          }),
                      }),
                      K
                          ? (0, n.jsx)("div", {
                                className: w.row,
                                children: (0, n.jsx)(u.Text, {
                                    className: w.error,
                                    variant: "text-sm/normal",
                                    children: v.intl.string(v.t.mgZKZP),
                                }),
                            })
                          : null,
                  ],
              });
    };
