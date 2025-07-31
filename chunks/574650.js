(n.d(t, { Z: () => m }), n(539854), n(388685));
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
    h = n(693546),
    _ = n(305325),
    E = n(246364),
    p = n(983736),
    I = n(937111),
    g = n(981631),
    f = n(176505),
    C = n(388032),
    O = n(246752),
    S = n(240211);
function T(e) {
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
let m =
    12633 == n.j
        ? () => {
              var e, t;
              let r = (0, s.e7)([u.Z], () => u.Z.getGuildId(), []),
                  m = (0, s.e7)([d.Z], () => d.Z.getGuild(r), [r]),
                  N = (0, s.e7)([I.Z], () => (null != r ? I.Z.getRequest(r) : null), [r]),
                  R = (0, o.TH)(),
                  A = (null == (e = (0, o.LX)(R.pathname, g.Z5c.CHANNEL(null == m ? void 0 : m.id, f.oC.GUILD_ONBOARDING))) ? void 0 : e.isExact) === !0;
              if (null == m || !(0, p.Dc)(m) || A) return null;
              let y = null != (t = null == N ? void 0 : N.applicationStatus) ? t : E.wB.STARTED,
                  b = null,
                  P = null,
                  D = null,
                  v = [O.notice, S.notice];
              switch (y) {
                  case E.wB.SUBMITTED:
                      ((b = C.intl.string(C.t['5iLvS0'])),
                          (P = C.intl.string(C.t.mqtdmZ)),
                          (D = () => {
                              (0, c.h7j)((e) => {
                                  var t, n;
                                  return (0, i.jsx)(
                                      c.ConfirmModal,
                                      ((t = T(
                                          {
                                              header: C.intl.string(C.t.aIz1oa),
                                              confirmText: C.intl.string(C.t['cY+Ooa']),
                                              cancelText: C.intl.string(C.t['ETE/oK']),
                                              onConfirm: () => h.Z.removeGuildJoinRequest(m.id),
                                              confirmButtonColor: a.zx.Colors.BRAND
                                          },
                                          e
                                      )),
                                      (n = n =
                                          {
                                              children: (0, i.jsx)(c.Text, {
                                                  variant: 'text-md/normal',
                                                  children: C.intl.string(C.t['13tjTU'])
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
                      ((b = C.intl.string(C.t.lk30cX)),
                          (P = C.intl.string(C.t['8RrsHh'])),
                          (D = () => {
                              (0, c.ZDy)(async () => {
                                  let { default: e } = await n.e('3378').then(n.bind(n, 76075));
                                  return (t) => (0, i.jsx)(e, T({ guildId: m.id }, t));
                              });
                          }),
                          v.push(O.error));
                      break;
                  default:
                      ((b = C.intl.string(C.t.G5YKXF)),
                          (P = C.intl.string(C.t['r8/DT0'])),
                          (D = () => {
                              (0, _.hk)(m.id);
                          }));
              }
              return (0, i.jsxs)('div', {
                  className: l()(...v),
                  children: [
                      (0, i.jsx)(c.Text, {
                          className: O.header,
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
