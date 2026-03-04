"use strict";
n.d(t, { A: () => P }), n(321073);
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r);
if (21552 == n.j) var s = n(873263);
var a = n(311907),
    o = n(314116),
    E = n(397927),
    c = n(334465),
    _ = n(71393),
    d = n(967198),
    A = n(624458),
    u = n(202384),
    T = n(513461),
    I = n(709977),
    N = n(212455),
    R = n(652215),
    S = n(746080),
    O = n(985018),
    C = n(121615),
    p = n(1624);
let P =
    21552 == n.j
        ? () => {
              let e = (0, a.bG)([d.A], () => d.A.getGuildId(), []),
                  t = (0, a.bG)([_.A], () => _.A.getGuild(e), [e]),
                  r = (0, a.bG)([N.A], () => (null != e ? N.A.getRequest(e) : null), [e]),
                  P = (0, s.zy)(),
                  D = (0, c.B)(P.pathname, R.BVt.CHANNEL(t?.id, S.VV.GUILD_ONBOARDING))?.isExact === !0;
              if (null == t || !(0, I.Qd)(t) || D) return null;
              let M = r?.applicationStatus ?? T.B5.STARTED,
                  g = null,
                  U = null,
                  m = null,
                  h = [C.lm, p.lm];
              switch (M) {
                  case T.B5.SUBMITTED:
                      (g = O.intl.string(O.t["5iLvSx"])),
                          (U = O.intl.string(O.t.mqtdmQ)),
                          (m = () => {
                              (0, o.A)({
                                  title: O.intl.string(O.t.aIz1oV),
                                  subtitle: O.intl.string(O.t["13tjTU"]),
                                  variant: "primary",
                                  confirmText: O.intl.string(O.t["cY+Oob"]),
                                  onConfirm: () => A.A.removeGuildJoinRequest(t.id),
                              });
                          });
                      break;
                  case T.B5.REJECTED:
                      (g = O.intl.string(O.t.lk30cY)),
                          (U = O.intl.string(O.t["8RrsHr"])),
                          (m = () => {
                              (0, E.mMO)(async () => {
                                  let { default: e } = await n.e("37548").then(n.bind(n, 856103));
                                  return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                              });
                          }),
                          h.push(C.z3);
                      break;
                  default:
                      (g = O.intl.string(O.t.G5YKXP)),
                          (U = O.intl.string(O.t["r8/DT+"])),
                          (m = () => {
                              (0, u.Ze)(t.id);
                          });
              }
              return (0, i.jsxs)("div", {
                  className: l()(...h),
                  children: [
                      (0, i.jsx)(E.Text, { className: C.wx, variant: "text-sm/normal", children: g }),
                      (0, i.jsx)(E.Button, { variant: "overlay-primary", size: "sm", onClick: m, text: U }),
                  ],
              });
          }
        : null;
