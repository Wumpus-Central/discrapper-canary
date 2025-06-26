n.d(t, { Z: () => P }), n(539854), n(388685);
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i);
if (12633 == n.j) var o = n(114858);
var a = n(442837),
    s = n(481060),
    c = n(430824),
    u = n(914010),
    E = n(693546),
    d = n(305325),
    _ = n(246364),
    O = n(983736),
    I = n(937111),
    T = n(981631),
    N = n(176505),
    S = n(388032),
    p = n(246752),
    R = n(240211);
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let P =
    12633 == n.j
        ? () => {
              var e, t;
              let i = (0, a.e7)([u.Z], () => u.Z.getGuildId(), []),
                  P = (0, a.e7)([c.Z], () => c.Z.getGuild(i), [i]),
                  C = (0, a.e7)([I.Z], () => (null != i ? I.Z.getRequest(i) : null), [i]),
                  D = (0, o.TH)(),
                  f = (null == (e = (0, o.LX)(D.pathname, T.Z5c.CHANNEL(null == P ? void 0 : P.id, N.oC.GUILD_ONBOARDING))) ? void 0 : e.isExact) === !0;
              if (null == P || !(0, O.Dc)(P) || f) return null;
              let m = null != (t = null == C ? void 0 : C.applicationStatus) ? t : _.wB.STARTED,
                  y = null,
                  g = null,
                  h = null,
                  U = [p.notice, R.notice];
              switch (m) {
                  case _.wB.SUBMITTED:
                      (y = S.intl.string(S.t['5iLvS0'])),
                          (g = S.intl.string(S.t.mqtdmZ)),
                          (h = () => {
                              (0, s.h7j)((e) => {
                                  var t, n;
                                  return (0, r.jsx)(
                                      s.ConfirmModal,
                                      ((t = A(
                                          {
                                              header: S.intl.string(S.t.aIz1oa),
                                              confirmText: S.intl.string(S.t['cY+Ooa']),
                                              cancelText: S.intl.string(S.t['ETE/oK']),
                                              onConfirm: () => E.Z.removeGuildJoinRequest(P.id),
                                              confirmButtonColor: s.zxk.Colors.BRAND
                                          },
                                          e
                                      )),
                                      (n = n =
                                          {
                                              children: (0, r.jsx)(s.Text, {
                                                  variant: 'text-md/normal',
                                                  children: S.intl.string(S.t['13tjTU'])
                                              })
                                          }),
                                      Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                          : (function (e, t) {
                                                var n = Object.keys(e);
                                                if (Object.getOwnPropertySymbols) {
                                                    var r = Object.getOwnPropertySymbols(e);
                                                    n.push.apply(n, r);
                                                }
                                                return n;
                                            })(Object(n)).forEach(function (e) {
                                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                            }),
                                      t)
                                  );
                              });
                          });
                      break;
                  case _.wB.REJECTED:
                      (y = S.intl.string(S.t.lk30cX)),
                          (g = S.intl.string(S.t['8RrsHh'])),
                          (h = () => {
                              (0, s.ZDy)(async () => {
                                  let { default: e } = await n.e('3378').then(n.bind(n, 76075));
                                  return (t) => (0, r.jsx)(e, A({ guildId: P.id }, t));
                              });
                          }),
                          U.push(p.error);
                      break;
                  default:
                      (y = S.intl.string(S.t.G5YKXF)),
                          (g = S.intl.string(S.t['r8/DT0'])),
                          (h = () => {
                              (0, d.hk)(P.id);
                          });
              }
              return (0, r.jsxs)('div', {
                  className: l()(...U),
                  children: [
                      (0, r.jsx)(s.Text, {
                          className: p.header,
                          variant: 'text-sm/normal',
                          children: y
                      }),
                      (0, r.jsx)(s.zxk, {
                          className: p.button,
                          look: s.zxk.Looks.OUTLINED,
                          color: s.zxk.Colors.WHITE,
                          size: s.zxk.Sizes.NONE,
                          onClick: h,
                          children: g
                      })
                  ]
              });
          }
        : null;
