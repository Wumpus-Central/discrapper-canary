n.d(t, { A: () => P }), n(321073);
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l);
if (21552 == n.j) var s = n(960488);
var a = n(311907),
    o = n(314116),
    E = n(397927),
    _ = n(71393),
    c = n(967198),
    d = n(624458),
    A = n(202384),
    u = n(513461),
    T = n(709977),
    I = n(212455),
    N = n(652215),
    R = n(746080),
    S = n(985018),
    O = n(121615),
    C = n(1624);
let P =
    21552 == n.j
        ? () => {
              let e = (0, a.bG)([c.A], () => c.A.getGuildId(), []),
                  t = (0, a.bG)([_.A], () => _.A.getGuild(e), [e]),
                  l = (0, a.bG)([I.A], () => (null != e ? I.A.getRequest(e) : null), [e]),
                  P = (0, s.zy)(),
                  D = (0, s.B6)(P.pathname, N.BVt.CHANNEL(t?.id, R.VV.GUILD_ONBOARDING))?.isExact === !0;
              if (null == t || !(0, T.Qd)(t) || D) return null;
              let p = l?.applicationStatus ?? u.B5.STARTED,
                  U = null,
                  m = null,
                  M = null,
                  h = [O.lm, C.lm];
              switch (p) {
                  case u.B5.SUBMITTED:
                      (U = S.intl.string(S.t["5iLvSx"])),
                          (m = S.intl.string(S.t.mqtdmQ)),
                          (M = () => {
                              (0, o.A)({
                                  title: S.intl.string(S.t.aIz1oV),
                                  subtitle: S.intl.string(S.t["13tjTU"]),
                                  variant: "primary",
                                  confirmText: S.intl.string(S.t["cY+Oob"]),
                                  onConfirm: () => d.A.removeGuildJoinRequest(t.id),
                              });
                          });
                      break;
                  case u.B5.REJECTED:
                      (U = S.intl.string(S.t.lk30cY)),
                          (m = S.intl.string(S.t["8RrsHr"])),
                          (M = () => {
                              (0, E.mMO)(async () => {
                                  let { default: e } = await n.e("37548").then(n.bind(n, 856103));
                                  return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                              });
                          }),
                          h.push(O.z3);
                      break;
                  default:
                      (U = S.intl.string(S.t.G5YKXP)),
                          (m = S.intl.string(S.t["r8/DT+"])),
                          (M = () => {
                              (0, A.Ze)(t.id);
                          });
              }
              return (0, i.jsxs)("div", {
                  className: r()(...h),
                  children: [
                      (0, i.jsx)(E.Text, { className: O.wx, variant: "text-sm/normal", children: U }),
                      (0, i.jsx)(E.Button, { variant: "overlay-primary", size: "sm", onClick: M, text: m }),
                  ],
              });
          }
        : null;
