r.d(l, { default: () => g }), r(388685), r(539854);
var t = r(255367),
    n = r(73800),
    a = r(120356),
    i = r.n(a),
    o = r(149765),
    s = r(442837),
    c = r(481060),
    d = r(741361),
    u = r(911969),
    h = r(605436),
    m = r(430824),
    f = r(700785),
    p = r(993259),
    x = r(388032),
    w = r(821383);
function j(e) {
    return (l) => null != l && !(0, h.pM)(e, l);
}
let v = (e, l, r) => {
        let t = f.Uu(r, l),
            [a, i] = n.useState(t);
        return {
            shouldEveryonePost: a,
            setShouldEveryonePost: i
        };
    },
    b = (e) => {
        let { rolesRow: l } = e;
        return (0, t.jsx)('div', {
            'aria-hidden': !0,
            className: w.roleCircle,
            style: { backgroundColor: null == l ? void 0 : l.colorString }
        });
    },
    g = (e) => {
        let { guild: l, channel: r, permission: a, onClose: g, transitionState: k, currentSelectedRoles: y = [] } = e,
            { shouldEveryonePost: N, setShouldEveryonePost: S } = v(l, r, a),
            C = n.useRef(null),
            O = (function (e) {
                let l = (0, s.e7)([m.Z], () => m.Z.getRoles(e.id));
                return n.useMemo(() => (0, p.KV)(e, l).filter((l) => j(e.id)(l.id)), [e, l]);
            })(l),
            _ = O.reduce((e, l) => (e.set(l.id, l), e), new Map()),
            R = O.map((e) => ({
                key: e.key,
                label: e.name,
                value: e.id
            })),
            [z, H] = n.useState(y.map((e) => e.id).filter(j(l.id))),
            [P, M] = n.useState(!1),
            [E, B] = n.useState(!1),
            L = z.length > 0 || N,
            V = (function (e, l) {
                let r = (0, s.e7)([m.Z], () => m.Z.getRoles(e.id));
                return n.useCallback(
                    (t, n) => {
                        let a = (0, p.KV)(e, r),
                            i = new Set(n),
                            s = (function (e) {
                                for (var l = 1; l < arguments.length; l++) {
                                    var r = null != arguments[l] ? arguments[l] : {},
                                        t = Object.keys(r);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (t = t.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                            })
                                        )),
                                        t.forEach(function (l) {
                                            var t;
                                            (t = r[l]),
                                                l in e
                                                    ? Object.defineProperty(e, l, {
                                                          value: t,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[l] = t);
                                        });
                                }
                                return e;
                            })({}, l.permissionOverwrites),
                            c = [],
                            m = [];
                        return (
                            a.forEach((l) => {
                                var r, n, a, d, p, x, w, j, v, b;
                                let g = l.id,
                                    k = i.has(g);
                                k
                                    ? c.push({
                                          id: g,
                                          type: u.BN.ROLE,
                                          allow: k ? o.IH(null != (d = null == (r = s[g]) ? void 0 : r.allow) ? d : f.Hn, t) : o.Od(null != (p = null == (n = s[g]) ? void 0 : n.allow) ? p : f.Hn, t),
                                          deny: o.Od(null != (x = null == (a = s[g]) ? void 0 : a.deny) ? x : f.Hn, t)
                                      })
                                    : (0, h.pM)(e.id, g)
                                      ? c.push({
                                            id: g,
                                            type: u.BN.ROLE,
                                            allow: o.Od(null != (v = null == (w = s[g]) ? void 0 : w.allow) ? v : f.Hn, t),
                                            deny: o.IH(null != (b = null == (j = s[g]) ? void 0 : j.deny) ? b : f.Hn, t)
                                        })
                                      : g in s && m.push(g);
                            }, []),
                            (0, d.kU)(l.id, c, m)
                        );
                    },
                    [e, r, l]
                );
            })(l, r),
            Z = async () => {
                if (!L) return;
                M(!0), B(!1);
                let e = [...z];
                if (N) {
                    let r = l.getEveryoneRoleId();
                    e.push(r);
                }
                try {
                    await V(a, e), g();
                } catch (e) {
                    B(!0);
                } finally {
                    M(!1);
                }
            };
        return P
            ? (0, t.jsx)(c.$jN, {})
            : (0, t.jsxs)(c.Y0X, {
                  transitionState: k,
                  'aria-label': x.intl.string(x.t['3khS8P']),
                  parentComponent: 'QuickRolePermissionToggleModal',
                  children: [
                      (0, t.jsx)(c.xBx, {
                          separator: !1,
                          className: w.modalHeader,
                          children: (0, t.jsx)(c.X6q, {
                              variant: 'heading-md/semibold',
                              className: w.header,
                              children: x.intl.string(x.t.TFGnmp)
                          })
                      }),
                      (0, t.jsx)(c.hzk, {
                          children: (0, t.jsxs)('div', {
                              className: w.container,
                              children: [
                                  (0, t.jsx)('div', {
                                      className: w.row,
                                      children: (0, t.jsx)('div', {
                                          ref: C,
                                          className: w.__invalid_roleSelectorContainer,
                                          children: (0, t.jsx)(c.JcV, {
                                              containerRef: C,
                                              children: (0, t.jsx)(c.VcW, {
                                                  closeOnSelect: !1,
                                                  className: w.roleSelector,
                                                  maxVisibleItems: 5,
                                                  placeholder: x.intl.string(x.t['8kKqCQ']),
                                                  multi: !0,
                                                  value: z,
                                                  options: R,
                                                  onChange: (e) => {
                                                      H(e);
                                                  },
                                                  renderOptionPrefix: (e) => (null != e ? (0, t.jsx)(b, { rolesRow: _.get(e.value) }) : null)
                                              })
                                          })
                                      })
                                  }),
                                  (0, t.jsxs)('div', {
                                      className: w.row,
                                      children: [
                                          (0, t.jsx)(c.j7V, {
                                              value: N,
                                              hideBorder: !0,
                                              onChange: S,
                                              className: w.switchGroup,
                                              children: x.intl.string(x.t.kPwwAw)
                                          }),
                                          (0, t.jsx)(c.Text, {
                                              variant: 'text-sm/normal',
                                              children: x.intl.format(x.t.NjCtHx, {})
                                          })
                                      ]
                                  }),
                                  E
                                      ? (0, t.jsx)('div', {
                                            className: w.row,
                                            children: (0, t.jsx)(c.Text, {
                                                className: i()(w.row, w.error),
                                                variant: 'text-sm/normal',
                                                children: x.intl.string(x.t.mgZKZG)
                                            })
                                        })
                                      : null
                              ]
                          })
                      }),
                      (0, t.jsxs)(c.mzw, {
                          className: w.footer,
                          children: [
                              (0, t.jsx)(c.zxk, {
                                  type: 'submit',
                                  color: c.zxk.Colors.BRAND,
                                  size: c.zxk.Sizes.SMALL,
                                  className: w.button,
                                  onClick: Z,
                                  disabled: !L,
                                  autoFocus: !0,
                                  children: x.intl.string(x.t.R3BPHx)
                              }),
                              (0, t.jsx)(c.zxk, {
                                  color: c.zxk.Colors.PRIMARY,
                                  size: c.zxk.Sizes.SMALL,
                                  className: w.button,
                                  onClick: g,
                                  children: x.intl.string(x.t['ETE/oK'])
                              })
                          ]
                      })
                  ]
              });
    };
