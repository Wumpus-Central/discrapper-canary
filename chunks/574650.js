(n.d(t, { Z: () => N }), n(539854), n(388685));
var i = n(255367);
n(73800);
var r = n(120356),
    l = n.n(r);
if (12633 == n.j) var o = n(114858);
var s = n(442837),
    a = n(481060),
    c = n(430824),
    d = n(914010),
    u = n(693546),
    _ = n(305325),
    E = n(246364),
    h = n(983736),
    I = n(937111),
    p = n(981631),
    C = n(176505),
    T = n(388032),
    g = n(246752),
    O = n(240211);
function S(e) {
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
              let r = (0, s.e7)([d.Z], () => d.Z.getGuildId(), []),
                  N = (0, s.e7)([c.Z], () => c.Z.getGuild(r), [r]),
                  f = (0, s.e7)([I.Z], () => (null != r ? I.Z.getRequest(r) : null), [r]),
                  A = (0, o.TH)(),
                  R = (null == (e = (0, o.LX)(A.pathname, p.Z5c.CHANNEL(null == N ? void 0 : N.id, C.oC.GUILD_ONBOARDING))) ? void 0 : e.isExact) === !0;
              if (null == N || !(0, h.Dc)(N) || R) return null;
              let m = null != (t = null == f ? void 0 : f.applicationStatus) ? t : E.wB.STARTED,
                  P = null,
                  y = null,
                  b = null,
                  D = [g.notice, O.notice];
              switch (m) {
                  case E.wB.SUBMITTED:
                      ((P = T.intl.string(T.t['5iLvS0'])),
                          (y = T.intl.string(T.t.mqtdmZ)),
                          (b = () => {
                              (0, a.h7j)((e) => {
                                  var t, n;
                                  return (0, i.jsx)(
                                      a.ConfirmModal,
                                      ((t = S(
                                          {
                                              header: T.intl.string(T.t.aIz1oa),
                                              confirmText: T.intl.string(T.t['cY+Ooa']),
                                              cancelText: T.intl.string(T.t['ETE/oK']),
                                              onConfirm: () => u.Z.removeGuildJoinRequest(N.id),
                                              confirmButtonColor: a.zxk.Colors.BRAND
                                          },
                                          e
                                      )),
                                      (n = n =
                                          {
                                              children: (0, i.jsx)(a.Text, {
                                                  variant: 'text-md/normal',
                                                  children: T.intl.string(T.t['13tjTU'])
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
                      ((P = T.intl.string(T.t.lk30cX)),
                          (y = T.intl.string(T.t['8RrsHh'])),
                          (b = () => {
                              (0, a.ZDy)(async () => {
                                  let { default: e } = await n.e('3378').then(n.bind(n, 76075));
                                  return (t) => (0, i.jsx)(e, S({ guildId: N.id }, t));
                              });
                          }),
                          D.push(g.error));
                      break;
                  default:
                      ((P = T.intl.string(T.t.G5YKXF)),
                          (y = T.intl.string(T.t['r8/DT0'])),
                          (b = () => {
                              (0, _.hk)(N.id);
                          }));
              }
              return (0, i.jsxs)('div', {
                  className: l()(...D),
                  children: [
                      (0, i.jsx)(a.Text, {
                          className: g.header,
                          variant: 'text-sm/normal',
                          children: P
                      }),
                      (0, i.jsx)(a.zxk, {
                          className: g.button,
                          look: a.zxk.Looks.OUTLINED,
                          color: a.zxk.Colors.WHITE,
                          size: a.zxk.Sizes.NONE,
                          onClick: b,
                          children: y
                      })
                  ]
              });
          }
        : null;
