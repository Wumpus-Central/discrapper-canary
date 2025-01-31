n.d(t, { Z: () => O }), n(653041), n(47120);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l);
if (12633 == n.j) var a = n(512969);
var s = n(442837),
    o = n(481060),
    c = n(430824),
    u = n(914010),
    E = n(693546),
    d = n(305325),
    _ = n(246364),
    I = n(983736),
    T = n(937111),
    N = n(981631),
    A = n(176505),
    S = n(388032),
    R = n(59220),
    C = n(532623);
let O =
    12633 == n.j
        ? () => {
              var e, t;
              let l = (0, s.e7)([u.Z], () => u.Z.getGuildId(), []),
                  O = (0, s.e7)([c.Z], () => c.Z.getGuild(l), [l]),
                  P = (0, s.e7)([T.Z], () => (null != l ? T.Z.getRequest(l) : null), [l]),
                  D = (0, a.TH)(),
                  m = (null === (e = (0, a.LX)(D.pathname, N.Z5c.CHANNEL(null == O ? void 0 : O.id, A.oC.GUILD_ONBOARDING))) || void 0 === e ? void 0 : e.isExact) === !0;
              if (null == O || !(0, I.Dc)(O) || m) return null;
              let p = null !== (t = null == P ? void 0 : P.applicationStatus) && void 0 !== t ? t : _.wB.STARTED,
                  h = null,
                  U = null,
                  M = null,
                  g = [R.notice, C.notice];
              switch (p) {
                  case _.wB.SUBMITTED:
                      (h = S.intl.string(S.t['5iLvS0'])),
                          (U = S.intl.string(S.t.mqtdmZ)),
                          (M = () => {
                              (0, o.h7j)((e) =>
                                  (0, i.jsx)(o.ConfirmModal, {
                                      header: S.intl.string(S.t.aIz1oa),
                                      confirmText: S.intl.string(S.t['cY+Ooa']),
                                      cancelText: S.intl.string(S.t['ETE/oK']),
                                      onConfirm: () => E.Z.removeGuildJoinRequest(O.id),
                                      confirmButtonColor: o.zxk.Colors.BRAND,
                                      ...e,
                                      children: (0, i.jsx)(o.Text, {
                                          variant: 'text-md/normal',
                                          children: S.intl.string(S.t['13tjTU'])
                                      })
                                  })
                              );
                          });
                      break;
                  case _.wB.REJECTED:
                      (h = S.intl.string(S.t.lk30cX)),
                          (U = S.intl.string(S.t['8RrsHh'])),
                          (M = () => {
                              (0, o.ZDy)(async () => {
                                  let { default: e } = await n.e('3378').then(n.bind(n, 76075));
                                  return (t) =>
                                      (0, i.jsx)(e, {
                                          guildId: O.id,
                                          ...t
                                      });
                              });
                          }),
                          g.push(R.error);
                      break;
                  default:
                      (h = S.intl.string(S.t.G5YKXF)),
                          (U = S.intl.string(S.t['r8/DT0'])),
                          (M = () => {
                              (0, d.hk)(O.id);
                          });
              }
              return (0, i.jsxs)('div', {
                  className: r()(...g),
                  children: [
                      (0, i.jsx)(o.Text, {
                          className: R.header,
                          variant: 'text-sm/normal',
                          children: h
                      }),
                      (0, i.jsx)(o.zxk, {
                          className: R.button,
                          look: o.zxk.Looks.OUTLINED,
                          color: o.zxk.Colors.WHITE,
                          size: o.zxk.Sizes.NONE,
                          onClick: M,
                          children: U
                      })
                  ]
              });
          }
        : null;
