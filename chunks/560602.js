(t.d(l, { default: () => v }), t(388685), t(539854));
var n = t(255367),
    r = t(73800),
    i = t(149765),
    o = t(442837),
    s = t(481060),
    a = t(741361),
    c = t(911969),
    u = t(605436),
    d = t(485386),
    h = t(700785),
    p = t(993259),
    x = t(388032),
    m = t(821383);
function f(e) {
    return (l) => null != l && !(0, u.pM)(e, l);
}
let w = (e, l, t) => {
        let n = h.Uu(t, l),
            [i, o] = r.useState(n);
        return {
            shouldEveryonePost: i,
            setShouldEveryonePost: o
        };
    },
    j = (e) => {
        let { rolesRow: l } = e;
        return (0, n.jsx)('div', {
            'aria-hidden': !0,
            className: m.roleCircle,
            style: { backgroundColor: null == l ? void 0 : l.colorString }
        });
    },
    v = (e) => {
        let { guild: l, channel: t, permission: v, onClose: b, transitionState: g, currentSelectedRoles: k = [] } = e,
            { shouldEveryonePost: y, setShouldEveryonePost: S } = w(l, t, v),
            C = r.useRef(null),
            O = (function (e) {
                let l = (0, o.e7)([d.Z], () => d.Z.getRoles(e.id));
                return r.useMemo(() => (0, p.KV)(e, l).filter((l) => f(e.id)(l.id)), [e, l]);
            })(l),
            N = O.reduce((e, l) => (e.set(l.id, l), e), new Map()),
            R = O.map((e) => ({
                key: e.key,
                label: e.name,
                value: e.id
            })),
            [z, P] = r.useState(k.map((e) => e.id).filter(f(l.id))),
            [H, M] = r.useState(!1),
            [_, E] = r.useState(!1),
            B = z.length > 0 || y,
            L = (function (e, l) {
                let t = (0, o.e7)([d.Z], () => d.Z.getRoles(e.id));
                return r.useCallback(
                    (n, r) => {
                        let o = (0, p.KV)(e, t),
                            s = new Set(r),
                            d = (function (e) {
                                for (var l = 1; l < arguments.length; l++) {
                                    var t = null != arguments[l] ? arguments[l] : {},
                                        n = Object.keys(t);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                            })
                                        )),
                                        n.forEach(function (l) {
                                            var n;
                                            ((n = t[l]),
                                                l in e
                                                    ? Object.defineProperty(e, l, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[l] = n));
                                        }));
                                }
                                return e;
                            })({}, l.permissionOverwrites),
                            x = [],
                            m = [];
                        return (
                            o.forEach((l) => {
                                var t, r, o, a, p, f, w, j, v, b;
                                let g = l.id,
                                    k = s.has(g);
                                k
                                    ? x.push({
                                          id: g,
                                          type: c.BN.ROLE,
                                          allow: k ? i.IH(null != (a = null == (t = d[g]) ? void 0 : t.allow) ? a : h.Hn, n) : i.Od(null != (p = null == (r = d[g]) ? void 0 : r.allow) ? p : h.Hn, n),
                                          deny: i.Od(null != (f = null == (o = d[g]) ? void 0 : o.deny) ? f : h.Hn, n)
                                      })
                                    : (0, u.pM)(e.id, g)
                                      ? x.push({
                                            id: g,
                                            type: c.BN.ROLE,
                                            allow: i.Od(null != (v = null == (w = d[g]) ? void 0 : w.allow) ? v : h.Hn, n),
                                            deny: i.IH(null != (b = null == (j = d[g]) ? void 0 : j.deny) ? b : h.Hn, n)
                                        })
                                      : g in d && m.push(g);
                            }, []),
                            (0, a.kU)(l.id, x, m)
                        );
                    },
                    [e, t, l]
                );
            })(l, t),
            V = async () => {
                if (!B) return;
                (M(!0), E(!1));
                let e = [...z];
                if (y) {
                    let t = l.getEveryoneRoleId();
                    e.push(t);
                }
                try {
                    (await L(v, e), b());
                } catch (e) {
                    E(!0);
                } finally {
                    M(!1);
                }
            };
        return H
            ? (0, n.jsx)(s.$jN, {})
            : (0, n.jsxs)(s.Y0X, {
                  transitionState: g,
                  'aria-label': x.intl.string(x.t['3khS8P']),
                  parentComponent: 'QuickRolePermissionToggleModal',
                  children: [
                      (0, n.jsx)(s.xBx, {
                          separator: !1,
                          children: (0, n.jsx)(s.X6q, {
                              variant: 'heading-md/semibold',
                              children: x.intl.string(x.t.TFGnmp)
                          })
                      }),
                      (0, n.jsxs)(s.hzk, {
                          children: [
                              (0, n.jsx)('div', {
                                  className: m.row,
                                  children: (0, n.jsx)('div', {
                                      ref: C,
                                      children: (0, n.jsx)(s.JcV, {
                                          containerRef: C,
                                          children: (0, n.jsx)(s.VcW, {
                                              closeOnSelect: !1,
                                              className: m.roleSelector,
                                              maxVisibleItems: 5,
                                              placeholder: x.intl.string(x.t['8kKqCQ']),
                                              multi: !0,
                                              value: z,
                                              options: R,
                                              onChange: (e) => {
                                                  P(e);
                                              },
                                              renderOptionPrefix: (e) => (null != e ? (0, n.jsx)(j, { rolesRow: N.get(e.value) }) : null)
                                          })
                                      })
                                  })
                              }),
                              (0, n.jsxs)('div', {
                                  className: m.row,
                                  children: [
                                      (0, n.jsx)(s.j7V, {
                                          value: y,
                                          hideBorder: !0,
                                          onChange: S,
                                          className: m.switchGroup,
                                          children: x.intl.string(x.t.kPwwAw)
                                      }),
                                      (0, n.jsx)(s.Text, {
                                          variant: 'text-sm/normal',
                                          children: x.intl.format(x.t.NjCtHx, {})
                                      })
                                  ]
                              }),
                              _
                                  ? (0, n.jsx)('div', {
                                        className: m.row,
                                        children: (0, n.jsx)(s.Text, {
                                            className: m.error,
                                            variant: 'text-sm/normal',
                                            children: x.intl.string(x.t.mgZKZG)
                                        })
                                    })
                                  : null
                          ]
                      }),
                      (0, n.jsxs)(s.mzw, {
                          children: [
                              (0, n.jsx)(s.zxk, {
                                  type: 'submit',
                                  color: s.zxk.Colors.BRAND,
                                  size: s.zxk.Sizes.SMALL,
                                  className: m.button,
                                  onClick: V,
                                  disabled: !B,
                                  autoFocus: !0,
                                  children: x.intl.string(x.t.R3BPHx)
                              }),
                              (0, n.jsx)(s.zxk, {
                                  color: s.zxk.Colors.PRIMARY,
                                  size: s.zxk.Sizes.SMALL,
                                  className: m.button,
                                  onClick: b,
                                  children: x.intl.string(x.t['ETE/oK'])
                              })
                          ]
                      })
                  ]
              });
    };
