n.d(t, { A: () => D }), n(321073);
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l);
if (21552 == n.j) var s = n(873263);
var a = n(311907),
    o = n(314116),
    E = n(397927),
    _ = n(334465),
    c = n(71393),
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
    P = n(1624);
let D =
    21552 == n.j
        ? () => {
              let e = (0, a.bG)([d.A], () => d.A.getGuildId(), []),
                  t = (0, a.bG)([c.A], () => c.A.getGuild(e), [e]),
                  l = (0, a.bG)([N.A], () => (null != e ? N.A.getRequest(e) : null), [e]),
                  D = (0, s.zy)(),
                  p = (0, _.B)(D.pathname, R.BVt.CHANNEL(t?.id, S.VV.GUILD_ONBOARDING))?.isExact === !0;
              if (null == t || !(0, I.Qd)(t) || p) return null;
              let U = l?.applicationStatus ?? T.B5.STARTED,
                  m = null,
                  M = null,
                  h = null,
                  g = [C.lm, P.lm];
              switch (U) {
                  case T.B5.SUBMITTED:
                      (m = O.intl.string(O.t["5iLvSx"])),
                          (M = O.intl.string(O.t.mqtdmQ)),
                          (h = () => {
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
                      (m = O.intl.string(O.t.lk30cY)),
                          (M = O.intl.string(O.t["8RrsHr"])),
                          (h = () => {
                              (0, E.mMO)(async () => {
                                  let { default: e } = await n.e("37548").then(n.bind(n, 856103));
                                  return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                              });
                          }),
                          g.push(C.z3);
                      break;
                  default:
                      (m = O.intl.string(O.t.G5YKXP)),
                          (M = O.intl.string(O.t["r8/DT+"])),
                          (h = () => {
                              (0, u.Ze)(t.id);
                          });
              }
              return (0, i.jsxs)("div", {
                  className: r()(...g),
                  children: [
                      (0, i.jsx)(E.Text, { className: C.wx, variant: "text-sm/normal", children: m }),
                      (0, i.jsx)(E.Button, { variant: "overlay-primary", size: "sm", onClick: h, text: M }),
                  ],
              });
          }
        : null;
