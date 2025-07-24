(n.d(t, { Z: () => N }), n(539854), n(388685));
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
    h = n(305325),
    E = n(246364),
    I = n(983736),
    p = n(937111),
    C = n(981631),
    g = n(176505),
    O = n(388032),
    S = n(246752),
    T = n(240211);
function f(e) {
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
let N =
    12633 == n.j
        ? () => {
              var e, t;
              let r = (0, s.e7)([u.Z], () => u.Z.getGuildId(), []),
                  N = (0, s.e7)([d.Z], () => d.Z.getGuild(r), [r]),
                  m = (0, s.e7)([p.Z], () => (null != r ? p.Z.getRequest(r) : null), [r]),
                  R = (0, o.TH)(),
                  A = (null == (e = (0, o.LX)(R.pathname, C.Z5c.CHANNEL(null == N ? void 0 : N.id, g.oC.GUILD_ONBOARDING))) ? void 0 : e.isExact) === !0;
              if (null == N || !(0, I.Dc)(N) || A) return null;
              let y = null != (t = null == m ? void 0 : m.applicationStatus) ? t : E.wB.STARTED,
                  b = null,
                  P = null,
                  D = null,
                  v = [S.notice, T.notice];
              switch (y) {
                  case E.wB.SUBMITTED:
                      ((b = O.intl.string(O.t['5iLvS0'])),
                          (P = O.intl.string(O.t.mqtdmZ)),
                          (D = () => {
                              (0, c.h7j)((e) => {
                                  var t, n;
                                  return (0, i.jsx)(
                                      c.ConfirmModal,
                                      ((t = f(
                                          {
                                              header: O.intl.string(O.t.aIz1oa),
                                              confirmText: O.intl.string(O.t['cY+Ooa']),
                                              cancelText: O.intl.string(O.t['ETE/oK']),
                                              onConfirm: () => _.Z.removeGuildJoinRequest(N.id),
                                              confirmButtonColor: a.zx.Colors.BRAND
                                          },
                                          e
                                      )),
                                      (n = n =
                                          {
                                              children: (0, i.jsx)(c.Text, {
                                                  variant: 'text-md/normal',
                                                  children: O.intl.string(O.t['13tjTU'])
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
                  case E.wB.REJECTED:
                      ((b = O.intl.string(O.t.lk30cX)),
                          (P = O.intl.string(O.t['8RrsHh'])),
                          (D = () => {
                              (0, c.ZDy)(async () => {
                                  let { default: e } = await n.e('3378').then(n.bind(n, 76075));
                                  return (t) => (0, i.jsx)(e, f({ guildId: N.id }, t));
                              });
                          }),
                          v.push(S.error));
                      break;
                  default:
                      ((b = O.intl.string(O.t.G5YKXF)),
                          (P = O.intl.string(O.t['r8/DT0'])),
                          (D = () => {
                              (0, h.hk)(N.id);
                          }));
              }
              return (0, i.jsxs)('div', {
                  className: l()(...v),
                  children: [
                      (0, i.jsx)(c.Text, {
                          className: S.header,
                          variant: 'text-sm/normal',
                          children: b
                      }),
                      (0, i.jsx)(c.zxk, {
                          variant: 'overlay-primary',
                          size: 'sm',
                          onClick: D,
                          text: P
                      })
                  ]
              });
          }
        : null;
