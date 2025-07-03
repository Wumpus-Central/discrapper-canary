(t.d(l, { default: () => v }), t(388685), t(539854));
var n = t(255367),
    r = t(73800),
    i = t(149765),
    o = t(442837),
    s = t(481060),
    a = t(741361),
    c = t(911969),
    u = t(605436),
    d = t(601964),
    h = t(485386),
    p = t(700785),
    x = t(993259),
    m = t(388032),
    f = t(821383);
function w(e) {
    return (l) => null != l && !(0, u.pM)(e, l);
}
let j = (e, l, t) => {
        let n = p.Uu(t, l),
            [i, o] = r.useState(n);
        return {
            shouldEveryonePost: i,
            setShouldEveryonePost: o
        };
    },
    b = (e) => {
        let { rolesRow: l } = e;
        return (0, n.jsx)('div', {
            'aria-hidden': !0,
            className: f.roleCircle,
            style: { backgroundColor: null == l ? void 0 : l.colorString }
        });
    },
    v = (e) => {
        let { guild: l, channel: t, permission: v, onClose: g, transitionState: k, currentSelectedRoles: y = [] } = e,
            { shouldEveryonePost: S, setShouldEveryonePost: C } = j(l, t, v),
            O = r.useRef(null),
            N = (function (e) {
                let l = (0, o.e7)([h.Z], () => h.Z.getRoles(e.id));
                return r.useMemo(() => (0, x.KV)(e, l).filter((l) => w(e.id)(l.id)), [e, l]);
            })(l),
            z = N.reduce((e, l) => (e.set(l.id, l), e), new Map()),
            R = N.map((e) => ({
                key: e.key,
                label: e.name,
                value: e.id
            })),
            [P, H] = r.useState(y.map((e) => e.id).filter(w(l.id))),
            [M, _] = r.useState(!1),
            [V, B] = r.useState(!1),
            E = P.length > 0 || S,
            L = (function (e, l) {
                let t = (0, o.e7)([h.Z], () => h.Z.getRoles(e.id));
                return r.useCallback(
                    (n, r) => {
                        let o = (0, x.KV)(e, t),
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
                            h = [],
                            m = [];
                        return (
                            o.forEach((l) => {
                                var t, r, o, a, x, f, w, j, b, v;
                                let g = l.id,
                                    k = s.has(g);
                                k
                                    ? h.push({
                                          id: g,
                                          type: c.BN.ROLE,
                                          allow: k ? i.IH(null != (a = null == (t = d[g]) ? void 0 : t.allow) ? a : p.Hn, n) : i.Od(null != (x = null == (r = d[g]) ? void 0 : r.allow) ? x : p.Hn, n),
                                          deny: i.Od(null != (f = null == (o = d[g]) ? void 0 : o.deny) ? f : p.Hn, n)
                                      })
                                    : (0, u.pM)(e.id, g)
                                      ? h.push({
                                            id: g,
                                            type: c.BN.ROLE,
                                            allow: i.Od(null != (b = null == (w = d[g]) ? void 0 : w.allow) ? b : p.Hn, n),
                                            deny: i.IH(null != (v = null == (j = d[g]) ? void 0 : j.deny) ? v : p.Hn, n)
                                        })
                                      : g in d && m.push(g);
                            }, []),
                            (0, a.kU)(l.id, h, m)
                        );
                    },
                    [e, t, l]
                );
            })(l, t),
            Z = async () => {
                if (!E) return;
                (_(!0), B(!1));
                let e = [...P];
                if (S) {
                    let t = (0, d.lV)(l);
                    e.push(t);
                }
                try {
                    (await L(v, e), g());
                } catch (e) {
                    B(!0);
                } finally {
                    _(!1);
                }
            };
        return M
            ? (0, n.jsx)(s.$jN, {})
            : (0, n.jsxs)(s.Y0X, {
                  transitionState: k,
                  'aria-label': m.intl.string(m.t['3khS8P']),
                  parentComponent: 'QuickRolePermissionToggleModal',
                  children: [
                      (0, n.jsx)(s.xBx, {
                          separator: !1,
                          children: (0, n.jsx)(s.X6q, {
                              variant: 'heading-md/semibold',
                              children: m.intl.string(m.t.TFGnmp)
                          })
                      }),
                      (0, n.jsxs)(s.hzk, {
                          children: [
                              (0, n.jsx)('div', {
                                  className: f.row,
                                  children: (0, n.jsx)('div', {
                                      ref: O,
                                      children: (0, n.jsx)(s.JcV, {
                                          containerRef: O,
                                          children: (0, n.jsx)(s.VcW, {
                                              closeOnSelect: !1,
                                              className: f.roleSelector,
                                              maxVisibleItems: 5,
                                              placeholder: m.intl.string(m.t['8kKqCQ']),
                                              multi: !0,
                                              value: P,
                                              options: R,
                                              onChange: (e) => {
                                                  H(e);
                                              },
                                              renderOptionPrefix: (e) => (null != e ? (0, n.jsx)(b, { rolesRow: z.get(e.value) }) : null)
                                          })
                                      })
                                  })
                              }),
                              (0, n.jsxs)('div', {
                                  className: f.row,
                                  children: [
                                      (0, n.jsx)(s.j7V, {
                                          value: S,
                                          hideBorder: !0,
                                          onChange: C,
                                          className: f.switchGroup,
                                          children: m.intl.string(m.t.kPwwAw)
                                      }),
                                      (0, n.jsx)(s.Text, {
                                          variant: 'text-sm/normal',
                                          children: m.intl.format(m.t.NjCtHx, {})
                                      })
                                  ]
                              }),
                              V
                                  ? (0, n.jsx)('div', {
                                        className: f.row,
                                        children: (0, n.jsx)(s.Text, {
                                            className: f.error,
                                            variant: 'text-sm/normal',
                                            children: m.intl.string(m.t.mgZKZG)
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
                                  className: f.button,
                                  onClick: Z,
                                  disabled: !E,
                                  autoFocus: !0,
                                  children: m.intl.string(m.t.R3BPHx)
                              }),
                              (0, n.jsx)(s.zxk, {
                                  color: s.zxk.Colors.PRIMARY,
                                  size: s.zxk.Sizes.SMALL,
                                  className: f.button,
                                  onClick: g,
                                  children: m.intl.string(m.t['ETE/oK'])
                              })
                          ]
                      })
                  ]
              });
    };
