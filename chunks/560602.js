r.d(l, { default: () => N }), r(47120), r(653041), r(724458);
var i = r(200651),
    t = r(192379),
    a = r(120356),
    n = r.n(a),
    o = r(149765),
    s = r(442837),
    d = r(481060),
    c = r(741361),
    u = r(911969),
    h = r(605436),
    x = r(430824),
    m = r(700785),
    v = r(993259),
    f = r(388032),
    p = r(944205);
function w(e) {
    return (l) => null != l && !(0, h.pM)(e, l);
}
let j = (e, l, r) => {
        let i = m.Uu(r, l),
            [a, n] = t.useState(i);
        return {
            shouldEveryonePost: a,
            setShouldEveryonePost: n
        };
    },
    k = (e) => {
        let { rolesRow: l } = e;
        return (0, i.jsx)('div', {
            'aria-hidden': !0,
            className: p.roleCircle,
            style: { backgroundColor: null == l ? void 0 : l.colorString }
        });
    },
    N = (e) => {
        let { guild: l, channel: r, permission: a, onClose: N, transitionState: g, currentSelectedRoles: S = [] } = e,
            { shouldEveryonePost: C, setShouldEveryonePost: _ } = j(l, r, a),
            b = t.useRef(null),
            y = (function (e) {
                let l = (0, s.e7)([x.Z], () => x.Z.getRoles(e.id));
                return t.useMemo(() => (0, v.KV)(e, l).filter((l) => w(e.id)(l.id)), [e, l]);
            })(l),
            z = y.reduce((e, l) => (e.set(l.id, l), e), new Map()),
            H = y.map((e) => ({
                key: e.key,
                label: e.name,
                value: e.id
            })),
            [R, O] = t.useState(S.map((e) => e.id).filter(w(l.id))),
            [M, B] = t.useState(!1),
            [E, L] = t.useState(!1),
            V = R.length > 0 || C,
            Z = (function (e, l) {
                let r = (0, s.e7)([x.Z], () => x.Z.getRoles(e.id));
                return t.useCallback(
                    (i, t) => {
                        let a = (0, v.KV)(e, r),
                            n = new Set(t),
                            s = { ...l.permissionOverwrites },
                            d = [],
                            x = [];
                        return (
                            a.forEach((l) => {
                                var r, t, a, c, v, f, p, w, j, k;
                                let N = l.id,
                                    g = n.has(N);
                                g
                                    ? d.push({
                                          id: N,
                                          type: u.BN.ROLE,
                                          allow: g ? o.IH(null !== (c = null === (r = s[N]) || void 0 === r ? void 0 : r.allow) && void 0 !== c ? c : m.Hn, i) : o.Od(null !== (v = null === (t = s[N]) || void 0 === t ? void 0 : t.allow) && void 0 !== v ? v : m.Hn, i),
                                          deny: o.Od(null !== (f = null === (a = s[N]) || void 0 === a ? void 0 : a.deny) && void 0 !== f ? f : m.Hn, i)
                                      })
                                    : (0, h.pM)(e.id, N)
                                      ? d.push({
                                            id: N,
                                            type: u.BN.ROLE,
                                            allow: o.Od(null !== (j = null === (p = s[N]) || void 0 === p ? void 0 : p.allow) && void 0 !== j ? j : m.Hn, i),
                                            deny: o.IH(null !== (k = null === (w = s[N]) || void 0 === w ? void 0 : w.deny) && void 0 !== k ? k : m.Hn, i)
                                        })
                                      : N in s && x.push(N);
                            }, []),
                            (0, c.kU)(l.id, d, x)
                        );
                    },
                    [e, r, l]
                );
            })(l, r),
            A = async () => {
                if (!V) return;
                B(!0), L(!1);
                let e = [...R];
                if (C) {
                    let r = l.getEveryoneRoleId();
                    e.push(r);
                }
                try {
                    await Z(a, e), N();
                } catch (e) {
                    L(!0);
                } finally {
                    B(!1);
                }
            };
        return M
            ? (0, i.jsx)(d.$jN, {})
            : (0, i.jsxs)(d.Y0X, {
                  transitionState: g,
                  'aria-label': f.intl.string(f.t['3khS8P']),
                  children: [
                      (0, i.jsx)(d.xBx, {
                          separator: !1,
                          className: p.modalHeader,
                          children: (0, i.jsx)(d.X6q, {
                              variant: 'heading-md/semibold',
                              className: p.header,
                              children: f.intl.string(f.t.TFGnmp)
                          })
                      }),
                      (0, i.jsx)(d.hzk, {
                          children: (0, i.jsxs)('div', {
                              className: p.container,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: p.row,
                                      children: (0, i.jsx)('div', {
                                          ref: b,
                                          className: p.__invalid_roleSelectorContainer,
                                          children: (0, i.jsx)(d.JcV, {
                                              containerRef: b,
                                              children: (0, i.jsx)(d.VcW, {
                                                  closeOnSelect: !1,
                                                  className: p.roleSelector,
                                                  maxVisibleItems: 5,
                                                  placeholder: f.intl.string(f.t['8kKqCQ']),
                                                  multi: !0,
                                                  value: R,
                                                  options: H,
                                                  onChange: (e) => {
                                                      O(e);
                                                  },
                                                  renderOptionPrefix: (e) => (null != e ? (0, i.jsx)(k, { rolesRow: z.get(e.value) }) : null)
                                              })
                                          })
                                      })
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: p.row,
                                      children: [
                                          (0, i.jsx)(d.j7V, {
                                              value: C,
                                              hideBorder: !0,
                                              onChange: _,
                                              className: p.switchGroup,
                                              children: f.intl.string(f.t.kPwwAw)
                                          }),
                                          (0, i.jsx)(d.Text, {
                                              variant: 'text-sm/normal',
                                              children: f.intl.format(f.t.NjCtHx, {})
                                          })
                                      ]
                                  }),
                                  E
                                      ? (0, i.jsx)('div', {
                                            className: p.row,
                                            children: (0, i.jsx)(d.Text, {
                                                className: n()(p.row, p.error),
                                                variant: 'text-sm/normal',
                                                children: f.intl.string(f.t.mgZKZG)
                                            })
                                        })
                                      : null
                              ]
                          })
                      }),
                      (0, i.jsxs)(d.mzw, {
                          className: p.footer,
                          children: [
                              (0, i.jsx)(d.zxk, {
                                  type: 'submit',
                                  color: d.zxk.Colors.BRAND,
                                  size: d.zxk.Sizes.SMALL,
                                  className: p.button,
                                  onClick: A,
                                  disabled: !V,
                                  autoFocus: !0,
                                  children: f.intl.string(f.t.R3BPHx)
                              }),
                              (0, i.jsx)(d.zxk, {
                                  color: d.zxk.Colors.PRIMARY,
                                  size: d.zxk.Sizes.SMALL,
                                  className: p.button,
                                  onClick: N,
                                  children: f.intl.string(f.t['ETE/oK'])
                              })
                          ]
                      })
                  ]
              });
    };
