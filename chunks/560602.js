(l.d(t, { default: () => b }), l(388685), l(539854));
var n = l(255367),
    r = l(73800),
    i = l(149765),
    a = l(442837),
    s = l(481060),
    o = l(741361),
    c = l(911969),
    u = l(605436),
    d = l(601964),
    h = l(485386),
    p = l(700785),
    m = l(993259),
    x = l(388032),
    f = l(821383);
function w(e) {
    return (t) => null != t && !(0, u.pM)(e, t);
}
let j = (e, t, l) => {
        let n = p.Uu(l, t),
            [i, a] = r.useState(n);
        return {
            shouldEveryonePost: i,
            setShouldEveryonePost: a
        };
    },
    v = (e) => {
        let { rolesRow: t } = e;
        return (0, n.jsx)('div', {
            'aria-hidden': !0,
            className: f.roleCircle,
            style: { backgroundColor: null == t ? void 0 : t.colorString }
        });
    },
    b = (e) => {
        let { guild: t, channel: l, permission: b, onClose: g, transitionState: y, currentSelectedRoles: k = [] } = e,
            { shouldEveryonePost: O, setShouldEveryonePost: C } = j(t, l, b),
            S = r.useRef(null),
            N = (function (e) {
                let t = (0, a.e7)([h.Z], () => h.Z.getRoles(e.id));
                return r.useMemo(() => (0, m.KV)(e, t).filter((t) => w(e.id)(t.id)), [e, t]);
            })(t),
            H = N.reduce((e, t) => (e.set(t.id, t), e), new Map()),
            P = N.map((e) => ({
                key: e.key,
                label: e.name,
                value: e.id
            })),
            [R, _] = r.useState(k.map((e) => e.id).filter(w(t.id))),
            [V, z] = r.useState(!1),
            [E, Z] = r.useState(!1),
            B = R.length > 0 || O,
            G = (function (e, t) {
                let l = (0, a.e7)([h.Z], () => h.Z.getRoles(e.id));
                return r.useCallback(
                    (n, r) => {
                        let a = (0, m.KV)(e, l),
                            s = new Set(r),
                            d = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var l = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(l);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(l).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                            })
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            ((n = l[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = n));
                                        }));
                                }
                                return e;
                            })({}, t.permissionOverwrites),
                            h = [],
                            x = [];
                        return (
                            a.forEach((t) => {
                                var l, r, a, o, m, f, w, j, v, b;
                                let g = t.id,
                                    y = s.has(g);
                                y
                                    ? h.push({
                                          id: g,
                                          type: c.BN.ROLE,
                                          allow: y ? i.IH(null != (o = null == (l = d[g]) ? void 0 : l.allow) ? o : p.Hn, n) : i.Od(null != (m = null == (r = d[g]) ? void 0 : r.allow) ? m : p.Hn, n),
                                          deny: i.Od(null != (f = null == (a = d[g]) ? void 0 : a.deny) ? f : p.Hn, n)
                                      })
                                    : (0, u.pM)(e.id, g)
                                      ? h.push({
                                            id: g,
                                            type: c.BN.ROLE,
                                            allow: i.Od(null != (v = null == (w = d[g]) ? void 0 : w.allow) ? v : p.Hn, n),
                                            deny: i.IH(null != (b = null == (j = d[g]) ? void 0 : j.deny) ? b : p.Hn, n)
                                        })
                                      : g in d && x.push(g);
                            }, []),
                            (0, o.kU)(t.id, h, x)
                        );
                    },
                    [e, l, t]
                );
            })(t, l),
            K = async () => {
                if (!B) return;
                (z(!0), Z(!1));
                let e = [...R];
                if (O) {
                    let l = (0, d.lV)(t);
                    e.push(l);
                }
                try {
                    (await G(b, e), g());
                } catch (e) {
                    Z(!0);
                } finally {
                    z(!1);
                }
            };
        return V
            ? (0, n.jsx)(s.$jN, {})
            : (0, n.jsxs)(s.Y0X, {
                  transitionState: y,
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
                                  className: f.row,
                                  children: (0, n.jsx)('div', {
                                      ref: S,
                                      children: (0, n.jsx)(s.JcV, {
                                          containerRef: S,
                                          children: (0, n.jsx)(s.VcW, {
                                              closeOnSelect: !1,
                                              className: f.roleSelector,
                                              maxVisibleItems: 5,
                                              placeholder: x.intl.string(x.t['8kKqCQ']),
                                              multi: !0,
                                              value: R,
                                              options: P,
                                              onChange: (e) => {
                                                  _(e);
                                              },
                                              renderOptionPrefix: (e) => (null != e ? (0, n.jsx)(v, { rolesRow: H.get(e.value) }) : null)
                                          })
                                      })
                                  })
                              }),
                              (0, n.jsxs)('div', {
                                  className: f.row,
                                  children: [
                                      (0, n.jsx)(s.j7V, {
                                          value: O,
                                          hideBorder: !0,
                                          onChange: C,
                                          className: f.switchGroup,
                                          children: x.intl.string(x.t.kPwwAw)
                                      }),
                                      (0, n.jsx)(s.Text, {
                                          variant: 'text-sm/normal',
                                          children: x.intl.format(x.t.NjCtHx, {})
                                      })
                                  ]
                              }),
                              E
                                  ? (0, n.jsx)('div', {
                                        className: f.row,
                                        children: (0, n.jsx)(s.Text, {
                                            className: f.error,
                                            variant: 'text-sm/normal',
                                            children: x.intl.string(x.t.mgZKZG)
                                        })
                                    })
                                  : null
                          ]
                      }),
                      (0, n.jsxs)(s.mzw, {
                          children: [
                              (0, n.jsx)('div', {
                                  'data-button-hoisted-classname-wrapper': !0,
                                  className: f.button,
                                  children: (0, n.jsx)(s.zxk, {
                                      variant: 'primary',
                                      size: 'sm',
                                      text: x.intl.string(x.t.R3BPHx),
                                      type: 'submit',
                                      onClick: K,
                                      disabled: !B,
                                      autoFocus: !0
                                  })
                              }),
                              (0, n.jsx)('div', {
                                  'data-button-hoisted-classname-wrapper': !0,
                                  className: f.button,
                                  children: (0, n.jsx)(s.zxk, {
                                      variant: 'secondary',
                                      size: 'sm',
                                      text: x.intl.string(x.t['ETE/oK']),
                                      onClick: g
                                  })
                              })
                          ]
                      })
                  ]
              });
    };
