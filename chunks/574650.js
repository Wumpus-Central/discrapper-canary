(n.d(t, { Z: () => f }), n(539854), n(388685));
var i = n(255367);
n(73800);
var r = n(120356),
    l = n.n(r);
if (12633 == n.j) var o = n(114858);
var s = n(442837),
    a = n(755721),
    c = n(481060),
    d = n(430824),
    u = n(914010),
    _ = n(693546),
    E = n(305325),
    h = n(246364),
    I = n(983736),
    p = n(937111),
    C = n(981631),
    T = n(176505),
    g = n(388032),
    O = n(246752),
    S = n(240211);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
let f =
    12633 == n.j
        ? () => {
              var e, t;
              let r = (0, s.e7)([u.Z], () => u.Z.getGuildId(), []),
                  f = (0, s.e7)([d.Z], () => d.Z.getGuild(r), [r]),
                  A = (0, s.e7)([p.Z], () => (null != r ? p.Z.getRequest(r) : null), [r]),
                  R = (0, o.TH)(),
                  m = (null == (e = (0, o.LX)(R.pathname, C.Z5c.CHANNEL(null == f ? void 0 : f.id, T.oC.GUILD_ONBOARDING))) ? void 0 : e.isExact) === !0;
              if (null == f || !(0, I.Dc)(f) || m) return null;
              let P = null != (t = null == A ? void 0 : A.applicationStatus) ? t : h.wB.STARTED,
                  y = null,
                  b = null,
                  D = null,
                  v = [O.notice, S.notice];
              switch (P) {
                  case h.wB.SUBMITTED:
                      ((y = g.intl.string(g.t['5iLvS0'])),
                          (b = g.intl.string(g.t.mqtdmZ)),
                          (D = () => {
                              (0, c.h7j)((e) => {
                                  var t, n;
                                  return (0, i.jsx)(
                                      c.ConfirmModal,
                                      ((t = N(
                                          {
                                              header: g.intl.string(g.t.aIz1oa),
                                              confirmText: g.intl.string(g.t['cY+Ooa']),
                                              cancelText: g.intl.string(g.t['ETE/oK']),
                                              onConfirm: () => _.Z.removeGuildJoinRequest(f.id),
                                              confirmButtonColor: a.zx.Colors.BRAND
                                          },
                                          e
                                      )),
                                      (n = n =
                                          {
                                              children: (0, i.jsx)(c.Text, {
                                                  variant: 'text-md/normal',
                                                  children: g.intl.string(g.t['13tjTU'])
                                              })
                                          }),
                                      Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                          : (function (e, t) {
                                                var n = Object.keys(e);
                                                if (Object.getOwnPropertySymbols) {
                                                    var i = Object.getOwnPropertySymbols(e);
                                                    n.push.apply(n, i);
                                                }
                                                return n;
                                            })(Object(n)).forEach(function (e) {
                                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                            }),
                                      t)
                                  );
                              });
                          }));
                      break;
                  case h.wB.REJECTED:
                      ((y = g.intl.string(g.t.lk30cX)),
                          (b = g.intl.string(g.t['8RrsHh'])),
                          (D = () => {
                              (0, c.ZDy)(async () => {
                                  let { default: e } = await n.e('3378').then(n.bind(n, 76075));
                                  return (t) => (0, i.jsx)(e, N({ guildId: f.id }, t));
                              });
                          }),
                          v.push(O.error));
                      break;
                  default:
                      ((y = g.intl.string(g.t.G5YKXF)),
                          (b = g.intl.string(g.t['r8/DT0'])),
                          (D = () => {
                              (0, E.hk)(f.id);
                          }));
              }
              return (0, i.jsxs)('div', {
                  className: l()(...v),
                  children: [
                      (0, i.jsx)(c.Text, {
                          className: O.header,
                          variant: 'text-sm/normal',
                          children: y
                      }),
                      (0, i.jsx)(a.zx, {
                          className: O.button,
                          look: a.zx.Looks.OUTLINED,
                          color: a.zx.Colors.WHITE,
                          size: a.zx.Sizes.NONE,
                          onClick: D,
                          children: b
                      })
                  ]
              });
          }
        : null;
