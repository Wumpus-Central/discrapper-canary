"use strict";
n.d(t, { A: () => S }), n(321073);
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r);
if (21552 == n.j) var s = n(873263);
var a = n(311907);
if (21552 == n.j) var o = n(314116);
if (21552 == n.j) var c = n(192308);
if (21552 == n.j) var u = n(834730);
if (21552 == n.j) var d = n(821609);
var _ = n(334465),
    E = n(71393),
    A = n(967198),
    m = n(624458),
    I = n(202384),
    T = n(513461),
    N = n(709977),
    g = n(212455),
    p = n(652215),
    C = n(746080),
    f = n(985018),
    R = n(182430),
    h = n(580537);
let S =
    21552 == n.j
        ? () => {
              let e = (0, a.bG)([A.A], () => A.A.getGuildId(), []),
                  t = (0, a.bG)([E.A], () => E.A.getGuild(e), [e]),
                  r = (0, a.bG)([g.A], () => (null != e ? g.A.getRequest(e) : null), [e]),
                  S = (0, s.zy)(),
                  O = (0, _.B)(S.pathname, p.BVt.CHANNEL(t?.id, C.VV.GUILD_ONBOARDING))?.isExact === !0;
              if (null == t || !(0, N.Qd)(t) || O) return null;
              let x = r?.applicationStatus ?? T.B5.STARTED,
                  M = null,
                  D = null,
                  P = null,
                  U = [R.lm, h.lm];
              switch (x) {
                  case T.B5.SUBMITTED:
                      (M = f.intl.string(f.t["5iLvSx"])),
                          (D = f.intl.string(f.t.mqtdmQ)),
                          (P = () => {
                              (0, o.A)({
                                  title: f.intl.string(f.t.aIz1oV),
                                  subtitle: f.intl.string(f.t["13tjTU"]),
                                  variant: "primary",
                                  confirmText: f.intl.string(f.t["cY+Oob"]),
                                  onConfirm: () => m.A.removeGuildJoinRequest(t.id),
                              });
                          });
                      break;
                  case T.B5.REJECTED:
                      (M = f.intl.string(f.t.lk30cY)),
                          (D = f.intl.string(f.t["8RrsHr"])),
                          (P = () => {
                              (0, c.openModalLazy)(async () => {
                                  let { default: e } = await n.e("37548").then(n.bind(n, 856103));
                                  return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                              });
                          }),
                          U.push(R.z3);
                      break;
                  default:
                      (M = f.intl.string(f.t.G5YKXP)),
                          (D = f.intl.string(f.t["r8/DT+"])),
                          (P = () => {
                              (0, I.Ze)(t.id);
                          });
              }
              return (0, i.jsxs)("div", {
                  className: l()(...U),
                  children: [
                      (0, i.jsx)(u.E, { className: R.wx, variant: "text-sm/normal", children: M }),
                      (0, i.jsx)(d.$, { variant: "overlay-primary", size: "sm", onClick: P, text: D }),
                  ],
              });
          }
        : null;
