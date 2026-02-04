n.d(t, {
    A: () => P,
}),
    n(321073),
    n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i);
if (21552 == n.j) var o = n(960488);
var a = n(311907),
    s = n(314116),
    c = n(397927),
    u = n(71393),
    E = n(967198),
    d = n(624458),
    _ = n(202384),
    A = n(513461),
    T = n(709977),
    I = n(212455),
    O = n(652215),
    N = n(746080),
    p = n(985018),
    R = n(121615),
    S = n(1624);
let P =
    21552 == n.j
        ? () => {
              var e, t;
              let i = (0, a.bG)([E.A], () => E.A.getGuildId(), []),
                  P = (0, a.bG)([u.A], () => u.A.getGuild(i), [i]),
                  y = (0, a.bG)([I.A], () => (null != i ? I.A.getRequest(i) : null), [i]),
                  f = (0, o.zy)(),
                  C =
                      (null ==
                      (t = (0, o.B6)(f.pathname, O.BVt.CHANNEL(null == P ? void 0 : P.id, N.VV.GUILD_ONBOARDING)))
                          ? void 0
                          : t.isExact) === !0;
              if (null == P || !(0, T.Qd)(P) || C) return null;
              let g = null != (e = null == y ? void 0 : y.applicationStatus) ? e : A.B5.STARTED,
                  m = null,
                  D = null,
                  h = null,
                  U = [R.lm, S.lm];
              switch (g) {
                  case A.B5.SUBMITTED:
                      (m = p.intl.string(p.t["5iLvSx"])),
                          (D = p.intl.string(p.t.mqtdmQ)),
                          (h = () => {
                              (0, s.A)({
                                  title: p.intl.string(p.t.aIz1oV),
                                  subtitle: p.intl.string(p.t["13tjTU"]),
                                  variant: "primary",
                                  confirmText: p.intl.string(p.t["cY+Oob"]),
                                  onConfirm: () => d.A.removeGuildJoinRequest(P.id),
                              });
                          });
                      break;
                  case A.B5.REJECTED:
                      (m = p.intl.string(p.t.lk30cY)),
                          (D = p.intl.string(p.t["8RrsHr"])),
                          (h = () => {
                              (0, c.mMO)(async () => {
                                  let { default: e } = await n.e("37548").then(n.bind(n, 856103));
                                  return (t) =>
                                      (0, r.jsx)(
                                          e,
                                          (function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var n = null != arguments[t] ? arguments[t] : {},
                                                      r = Object.keys(n);
                                                  "function" == typeof Object.getOwnPropertySymbols &&
                                                      (r = r.concat(
                                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                          }),
                                                      )),
                                                      r.forEach(function (t) {
                                                          var r;
                                                          (r = n[t]),
                                                              t in e
                                                                  ? Object.defineProperty(e, t, {
                                                                        value: r,
                                                                        enumerable: !0,
                                                                        configurable: !0,
                                                                        writable: !0,
                                                                    })
                                                                  : (e[t] = r);
                                                      });
                                              }
                                              return e;
                                          })(
                                              {
                                                  guildId: P.id,
                                              },
                                              t,
                                          ),
                                      );
                              });
                          }),
                          U.push(R.z3);
                      break;
                  default:
                      (m = p.intl.string(p.t.G5YKXP)),
                          (D = p.intl.string(p.t["r8/DT+"])),
                          (h = () => {
                              (0, _.Ze)(P.id);
                          });
              }
              return (0, r.jsxs)("div", {
                  className: l()(...U),
                  children: [
                      (0, r.jsx)(c.Text, {
                          className: R.wx,
                          variant: "text-sm/normal",
                          children: m,
                      }),
                      (0, r.jsx)(c.Button, {
                          variant: "overlay-primary",
                          size: "sm",
                          onClick: h,
                          text: D,
                      }),
                  ],
              });
          }
        : null;
