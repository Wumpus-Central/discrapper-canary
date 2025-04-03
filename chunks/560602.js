l.d(r, { default: () => b }), l(47120), l(653041);
var t = l(200651),
    n = l(192379),
    a = l(120356),
    i = l.n(a),
    o = l(149765),
    s = l(442837),
    c = l(481060),
    d = l(741361),
    u = l(911969),
    h = l(605436),
    f = l(430824),
    m = l(700785),
    x = l(993259),
    p = l(388032),
    w = l(821383);
function j(e) {
    return (r) => null != r && !(0, h.pM)(e, r);
}
let v = (e, r, l) => {
        let t = m.Uu(l, r),
            [a, i] = n.useState(t);
        return {
            shouldEveryonePost: a,
            setShouldEveryonePost: i
        };
    },
    N = (e) => {
        let { rolesRow: r } = e;
        return (0, t.jsx)('div', {
            'aria-hidden': !0,
            className: w.roleCircle,
            style: { backgroundColor: null == r ? void 0 : r.colorString }
        });
    },
    b = (e) => {
        let { guild: r, channel: l, permission: a, onClose: b, transitionState: g, currentSelectedRoles: k = [] } = e,
            { shouldEveryonePost: y, setShouldEveryonePost: S } = v(r, l, a),
            C = n.useRef(null),
            O = (function (e) {
                let r = (0, s.e7)([f.Z], () => f.Z.getRoles(e.id));
                return n.useMemo(() => (0, x.KV)(e, r).filter((r) => j(e.id)(r.id)), [e, r]);
            })(r),
            _ = O.reduce((e, r) => (e.set(r.id, r), e), new Map()),
            z = O.map((e) => ({
                key: e.key,
                label: e.name,
                value: e.id
            })),
            [H, R] = n.useState(k.map((e) => e.id).filter(j(r.id))),
            [P, W] = n.useState(!1),
            [E, M] = n.useState(!1),
            B = H.length > 0 || y,
            L = (function (e, r) {
                let l = (0, s.e7)([f.Z], () => f.Z.getRoles(e.id));
                return n.useCallback(
                    (t, n) => {
                        let a = (0, x.KV)(e, l),
                            i = new Set(n),
                            s = (function (e) {
                                for (var r = 1; r < arguments.length; r++) {
                                    var l = null != arguments[r] ? arguments[r] : {},
                                        t = Object.keys(l);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (t = t.concat(
                                            Object.getOwnPropertySymbols(l).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                            })
                                        )),
                                        t.forEach(function (r) {
                                            var t;
                                            (t = l[r]),
                                                r in e
                                                    ? Object.defineProperty(e, r, {
                                                          value: t,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[r] = t);
                                        });
                                }
                                return e;
                            })({}, r.permissionOverwrites),
                            c = [],
                            f = [];
                        return (
                            a.forEach((r) => {
                                var l, n, a, d, x, p, w, j, v, N;
                                let b = r.id,
                                    g = i.has(b);
                                g
                                    ? c.push({
                                          id: b,
                                          type: u.BN.ROLE,
                                          allow: g ? o.IH(null != (d = null == (l = s[b]) ? void 0 : l.allow) ? d : m.Hn, t) : o.Od(null != (x = null == (n = s[b]) ? void 0 : n.allow) ? x : m.Hn, t),
                                          deny: o.Od(null != (p = null == (a = s[b]) ? void 0 : a.deny) ? p : m.Hn, t)
                                      })
                                    : (0, h.pM)(e.id, b)
                                      ? c.push({
                                            id: b,
                                            type: u.BN.ROLE,
                                            allow: o.Od(null != (v = null == (w = s[b]) ? void 0 : w.allow) ? v : m.Hn, t),
                                            deny: o.IH(null != (N = null == (j = s[b]) ? void 0 : j.deny) ? N : m.Hn, t)
                                        })
                                      : b in s && f.push(b);
                            }, []),
                            (0, d.kU)(r.id, c, f)
                        );
                    },
                    [e, l, r]
                );
            })(r, l),
            V = async () => {
                if (!B) return;
                W(!0), M(!1);
                let e = [...H];
                if (y) {
                    let l = r.getEveryoneRoleId();
                    e.push(l);
                }
                try {
                    await L(a, e), b();
                } catch (e) {
                    M(!0);
                } finally {
                    W(!1);
                }
            };
        return P
            ? (0, t.jsx)(c.$jN, {})
            : (0, t.jsxs)(c.Y0X, {
                  transitionState: g,
                  'aria-label': p.NW.string(p.t['3khS8P']),
                  children: [
                      (0, t.jsx)(c.xBx, {
                          separator: !1,
                          className: w.modalHeader,
                          children: (0, t.jsx)(c.X6q, {
                              variant: 'heading-md/semibold',
                              className: w.header,
                              children: p.NW.string(p.t.TFGnmp)
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
                                                  placeholder: p.NW.string(p.t['8kKqCQ']),
                                                  multi: !0,
                                                  value: H,
                                                  options: z,
                                                  onChange: (e) => {
                                                      R(e);
                                                  },
                                                  renderOptionPrefix: (e) => (null != e ? (0, t.jsx)(N, { rolesRow: _.get(e.value) }) : null)
                                              })
                                          })
                                      })
                                  }),
                                  (0, t.jsxs)('div', {
                                      className: w.row,
                                      children: [
                                          (0, t.jsx)(c.j7V, {
                                              value: y,
                                              hideBorder: !0,
                                              onChange: S,
                                              className: w.switchGroup,
                                              children: p.NW.string(p.t.kPwwAw)
                                          }),
                                          (0, t.jsx)(c.Text, {
                                              variant: 'text-sm/normal',
                                              children: p.NW.format(p.t.NjCtHx, {})
                                          })
                                      ]
                                  }),
                                  E
                                      ? (0, t.jsx)('div', {
                                            className: w.row,
                                            children: (0, t.jsx)(c.Text, {
                                                className: i()(w.row, w.error),
                                                variant: 'text-sm/normal',
                                                children: p.NW.string(p.t.mgZKZG)
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
                                  onClick: V,
                                  disabled: !B,
                                  autoFocus: !0,
                                  children: p.NW.string(p.t.R3BPHx)
                              }),
                              (0, t.jsx)(c.zxk, {
                                  color: c.zxk.Colors.PRIMARY,
                                  size: c.zxk.Sizes.SMALL,
                                  className: w.button,
                                  onClick: b,
                                  children: p.NW.string(p.t['ETE/oK'])
                              })
                          ]
                      })
                  ]
              });
    };
