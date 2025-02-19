l.d(r, { default: () => b }), l(47120), l(653041);
var t = l(200651),
    n = l(192379),
    a = l(120356),
    i = l.n(a),
    o = l(149765),
    s = l(442837),
    d = l(481060),
    c = l(741361),
    u = l(911969),
    h = l(605436),
    f = l(430824),
    m = l(700785),
    v = l(993259),
    x = l(388032),
    p = l(507584);
function w(e) {
    return (r) => null != r && !(0, h.pM)(e, r);
}
let j = (e, r, l) => {
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
            className: p.roleCircle,
            style: { backgroundColor: null == r ? void 0 : r.colorString }
        });
    },
    b = (e) => {
        let { guild: r, channel: l, permission: a, onClose: b, transitionState: g, currentSelectedRoles: k = [] } = e,
            { shouldEveryonePost: y, setShouldEveryonePost: S } = j(r, l, a),
            C = n.useRef(null),
            O = (function (e) {
                let r = (0, s.e7)([f.Z], () => f.Z.getRoles(e.id));
                return n.useMemo(() => (0, v.KV)(e, r).filter((r) => w(e.id)(r.id)), [e, r]);
            })(r),
            _ = O.reduce((e, r) => (e.set(r.id, r), e), new Map()),
            z = O.map((e) => ({
                key: e.key,
                label: e.name,
                value: e.id
            })),
            [H, R] = n.useState(k.map((e) => e.id).filter(w(r.id))),
            [P, W] = n.useState(!1),
            [E, M] = n.useState(!1),
            B = H.length > 0 || y,
            L = (function (e, r) {
                let l = (0, s.e7)([f.Z], () => f.Z.getRoles(e.id));
                return n.useCallback(
                    (t, n) => {
                        let a = (0, v.KV)(e, l),
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
                            d = [],
                            f = [];
                        return (
                            a.forEach((r) => {
                                var l, n, a, c, v, x, p, w, j, N;
                                let b = r.id,
                                    g = i.has(b);
                                g
                                    ? d.push({
                                          id: b,
                                          type: u.BN.ROLE,
                                          allow: g ? o.IH(null !== (c = null === (l = s[b]) || void 0 === l ? void 0 : l.allow) && void 0 !== c ? c : m.Hn, t) : o.Od(null !== (v = null === (n = s[b]) || void 0 === n ? void 0 : n.allow) && void 0 !== v ? v : m.Hn, t),
                                          deny: o.Od(null !== (x = null === (a = s[b]) || void 0 === a ? void 0 : a.deny) && void 0 !== x ? x : m.Hn, t)
                                      })
                                    : (0, h.pM)(e.id, b)
                                      ? d.push({
                                            id: b,
                                            type: u.BN.ROLE,
                                            allow: o.Od(null !== (j = null === (p = s[b]) || void 0 === p ? void 0 : p.allow) && void 0 !== j ? j : m.Hn, t),
                                            deny: o.IH(null !== (N = null === (w = s[b]) || void 0 === w ? void 0 : w.deny) && void 0 !== N ? N : m.Hn, t)
                                        })
                                      : b in s && f.push(b);
                            }, []),
                            (0, c.kU)(r.id, d, f)
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
            ? (0, t.jsx)(d.$jN, {})
            : (0, t.jsxs)(d.Y0X, {
                  transitionState: g,
                  'aria-label': x.NW.string(x.t['3khS8P']),
                  children: [
                      (0, t.jsx)(d.xBx, {
                          separator: !1,
                          className: p.modalHeader,
                          children: (0, t.jsx)(d.X6q, {
                              variant: 'heading-md/semibold',
                              className: p.header,
                              children: x.NW.string(x.t.TFGnmp)
                          })
                      }),
                      (0, t.jsx)(d.hzk, {
                          children: (0, t.jsxs)('div', {
                              className: p.container,
                              children: [
                                  (0, t.jsx)('div', {
                                      className: p.row,
                                      children: (0, t.jsx)('div', {
                                          ref: C,
                                          className: p.__invalid_roleSelectorContainer,
                                          children: (0, t.jsx)(d.JcV, {
                                              containerRef: C,
                                              children: (0, t.jsx)(d.VcW, {
                                                  closeOnSelect: !1,
                                                  className: p.roleSelector,
                                                  maxVisibleItems: 5,
                                                  placeholder: x.NW.string(x.t['8kKqCQ']),
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
                                      className: p.row,
                                      children: [
                                          (0, t.jsx)(d.j7V, {
                                              value: y,
                                              hideBorder: !0,
                                              onChange: S,
                                              className: p.switchGroup,
                                              children: x.NW.string(x.t.kPwwAw)
                                          }),
                                          (0, t.jsx)(d.Text, {
                                              variant: 'text-sm/normal',
                                              children: x.NW.format(x.t.NjCtHx, {})
                                          })
                                      ]
                                  }),
                                  E
                                      ? (0, t.jsx)('div', {
                                            className: p.row,
                                            children: (0, t.jsx)(d.Text, {
                                                className: i()(p.row, p.error),
                                                variant: 'text-sm/normal',
                                                children: x.NW.string(x.t.mgZKZG)
                                            })
                                        })
                                      : null
                              ]
                          })
                      }),
                      (0, t.jsxs)(d.mzw, {
                          className: p.footer,
                          children: [
                              (0, t.jsx)(d.zxk, {
                                  type: 'submit',
                                  color: d.zxk.Colors.BRAND,
                                  size: d.zxk.Sizes.SMALL,
                                  className: p.button,
                                  onClick: V,
                                  disabled: !B,
                                  autoFocus: !0,
                                  children: x.NW.string(x.t.R3BPHx)
                              }),
                              (0, t.jsx)(d.zxk, {
                                  color: d.zxk.Colors.PRIMARY,
                                  size: d.zxk.Sizes.SMALL,
                                  className: p.button,
                                  onClick: b,
                                  children: x.NW.string(x.t['ETE/oK'])
                              })
                          ]
                      })
                  ]
              });
    };
