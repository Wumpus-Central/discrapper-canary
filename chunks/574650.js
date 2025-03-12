n.d(t, { Z: () => R }), n(653041), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i);
if (12633 == n.j) var o = n(512969);
var a = n(442837),
    s = n(481060),
    c = n(430824),
    u = n(914010),
    E = n(693546),
    d = n(305325),
    _ = n(246364),
    N = n(983736),
    I = n(937111),
    O = n(981631),
    T = n(176505),
    S = n(388032),
    p = n(276332),
    P = n(361275);
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
let R =
    12633 == n.j
        ? () => {
              var e, t;
              let i = (0, a.e7)([u.Z], () => u.Z.getGuildId(), []),
                  R = (0, a.e7)([c.Z], () => c.Z.getGuild(i), [i]),
                  C = (0, a.e7)([I.Z], () => (null != i ? I.Z.getRequest(i) : null), [i]),
                  f = (0, o.TH)(),
                  m = (null === (e = (0, o.LX)(f.pathname, O.Z5c.CHANNEL(null == R ? void 0 : R.id, T.oC.GUILD_ONBOARDING))) || void 0 === e ? void 0 : e.isExact) === !0;
              if (null == R || !(0, N.Dc)(R) || m) return null;
              let D = null !== (t = null == C ? void 0 : C.applicationStatus) && void 0 !== t ? t : _.wB.STARTED,
                  g = null,
                  h = null,
                  y = null,
                  b = [p.notice, P.notice];
              switch (D) {
                  case _.wB.SUBMITTED:
                      (g = S.NW.string(S.t['5iLvS0'])),
                          (h = S.NW.string(S.t.mqtdmZ)),
                          (y = () => {
                              (0, s.h7j)((e) => {
                                  var t, n;
                                  return (0, r.jsx)(
                                      s.ConfirmModal,
                                      ((t = A(
                                          {
                                              header: S.NW.string(S.t.aIz1oa),
                                              confirmText: S.NW.string(S.t['cY+Ooa']),
                                              cancelText: S.NW.string(S.t['ETE/oK']),
                                              onConfirm: () => E.Z.removeGuildJoinRequest(R.id),
                                              confirmButtonColor: s.zxk.Colors.BRAND
                                          },
                                          e
                                      )),
                                      (n = n =
                                          {
                                              children: (0, r.jsx)(s.Text, {
                                                  variant: 'text-md/normal',
                                                  children: S.NW.string(S.t['13tjTU'])
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
                      (g = S.NW.string(S.t.lk30cX)),
                          (h = S.NW.string(S.t['8RrsHh'])),
                          (y = () => {
                              (0, s.ZDy)(async () => {
                                  let { default: e } = await n.e('3378').then(n.bind(n, 76075));
                                  return (t) => (0, r.jsx)(e, A({ guildId: R.id }, t));
                              });
                          }),
                          b.push(p.error);
                      break;
                  default:
                      (g = S.NW.string(S.t.G5YKXF)),
                          (h = S.NW.string(S.t['r8/DT0'])),
                          (y = () => {
                              (0, d.hk)(R.id);
                          });
              }
              return (0, r.jsxs)('div', {
                  className: l()(...b),
                  children: [
                      (0, r.jsx)(s.Text, {
                          className: p.header,
                          variant: 'text-sm/normal',
                          children: g
                      }),
                      (0, r.jsx)(s.zxk, {
                          className: p.button,
                          look: s.zxk.Looks.OUTLINED,
                          color: s.zxk.Colors.WHITE,
                          size: s.zxk.Sizes.NONE,
                          onClick: y,
                          children: h
                      })
                  ]
              });
          }
        : null;
