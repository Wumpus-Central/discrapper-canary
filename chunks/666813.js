n.d(t, { A: () => L });
var l = n(627968),
    a = n(64700),
    r = n(417597),
    i = n(452027),
    s = n(179866),
    E = n(834730),
    _ = n(947641),
    u = n(827734),
    o = n(807072),
    c = n(622629),
    d = n(111159),
    A = n(241541),
    g = n(854378),
    T = n(221950),
    I = n(836731),
    N = n(589935),
    G = n(71393),
    m = n(309010),
    O = n(706752),
    S = n(829887),
    R = n(652215),
    D = n(985018),
    h = n(645267);
function L(e) {
    let { member: t } = e,
        n = (0, r.bG)([G.A], () => G.A.getGuild(t.guildId), [t.guildId]),
        L = (0, I.GT)(t.userId, t.guildId),
        C = (0, I.Wi)(t.userId, t.guildId),
        M = (0, I.t)(t.userId),
        f = (0, I.ff)(t.userId, t.guildId);
    return (a.useEffect(() => {
        (0, T.uO)(t.guildId);
    }, [t.guildId]),
    null == n)
        ? null
        : (0, l.jsx)(i.D, {
              label: D.intl.string(D.t["ldCE/p"]),
              children: (0, l.jsxs)(S.SQ, {
                  children: [
                      (0, l.jsx)(S.RU, {
                          icon: (0, l.jsx)(s.i, { size: "custom", width: S.mb, height: S.mb }),
                          name: (0, l.jsx)(E.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: D.intl.string(D.t.nzGai4),
                          }),
                          description: L
                              ? (0, l.jsx)(_.r, {
                                    size: "custom",
                                    width: S.mb,
                                    height: S.mb,
                                    color: u.A.colors.STATUS_POSITIVE,
                                })
                              : (0, l.jsx)(o.U, {
                                    size: "custom",
                                    width: S.mb,
                                    height: S.mb,
                                    color: u.A.colors.ICON_FEEDBACK_CRITICAL,
                                }),
                      }),
                      C !== I.bM.NO_GATE &&
                          (0, l.jsx)(S.RU, {
                              icon: (0, l.jsx)(c.B, { size: "custom", width: S.mb, height: S.mb }),
                              name: (0, l.jsx)(E.E, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  children: D.intl.string(D.t["93hqln"]),
                              }),
                              description:
                                  C === I.bM.AGREED
                                      ? (0, l.jsx)(_.r, {
                                            size: "custom",
                                            width: S.mb,
                                            height: S.mb,
                                            color: u.A.colors.STATUS_POSITIVE,
                                        })
                                      : (0, l.jsx)(o.U, {
                                            size: "custom",
                                            width: S.mb,
                                            height: S.mb,
                                            color: u.A.colors.ICON_FEEDBACK_CRITICAL,
                                        }),
                          }),
                      (0, l.jsx)(S.RU, {
                          icon: (0, l.jsx)(d.p, { size: "custom", color: "currentColor", width: S.mb, height: S.mb }),
                          name: (0, l.jsx)(E.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: D.intl.string(D.t.SaDIpL),
                          }),
                          description: (0, l.jsx)(E.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: M,
                          }),
                      }),
                      (0, l.jsx)(S.RU, {
                          icon: (0, l.jsx)(g.$v, { guild: n, size: g.$v.Sizes.SMOL, animate: !1, className: h.$f }),
                          name: (0, l.jsx)(E.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: D.intl.string(D.t["NQJ+WG"]),
                          }),
                          description: (0, l.jsx)(E.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: f,
                          }),
                      }),
                      (0, l.jsx)(S.RU, {
                          icon: (0, l.jsx)(A.D, { size: "custom", width: S.mb, height: S.mb }),
                          name: (0, l.jsx)(E.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: D.intl.string(D.t["eJOq+Z"]),
                          }),
                          description: (0, l.jsx)(E.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: (0, l.jsx)(N.Ay, {
                                  userId: t.userId,
                                  guildId: t.guildId,
                                  showJoinMethodContextAsFooter: !0,
                                  onClickInviter: (e) => {
                                      let n = m.A.getChannelId();
                                      (0, O.z)(t.guildId, e.id, n ?? R.dJq);
                                  },
                              }),
                          }),
                      }),
                  ],
              }),
          });
}
