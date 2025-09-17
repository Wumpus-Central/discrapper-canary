n.d(t, { Z: () => g });
var r = n(951288),
    l = n(647438),
    i = n(399606),
    a = n(481060),
    s = n(388905),
    o = n(527379),
    u = n(376923),
    c = n(16829),
    E = n(430824),
    d = n(944486),
    _ = n(189432),
    A = n(776767),
    T = n(981631),
    m = n(388032),
    I = n(87819);
function g(e) {
    let { member: t } = e,
        n = (0, i.e7)([E.Z], () => E.Z.getGuild(t.guildId), [t.guildId]),
        g = (0, u.mh)(t.userId, t.guildId),
        h = (0, u.mV)(t.userId, t.guildId),
        N = (0, u.LD)(t.userId),
        O = (0, u.wi)(t.userId, t.guildId);
    return (l.useEffect(() => {
        (0, o.zO)(t.guildId);
    }, [t.guildId]),
    null == n)
        ? null
        : (0, r.jsx)(a.xJW, {
              title: m.intl.string(m.t["ldCE/v"]),
              titleClassName: I.infoTitle,
              children: (0, r.jsxs)(A.WM, {
                  children: [
                      (0, r.jsx)(A._2, {
                          icon: (0, r.jsx)(a.lZ8, {
                              size: "custom",
                              width: A.Mn,
                              height: A.Mn,
                          }),
                          name: (0, r.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: m.intl.string(m.t.nzGai4),
                          }),
                          description: g
                              ? (0, r.jsx)(a.sV5, {
                                    size: "custom",
                                    width: A.Mn,
                                    height: A.Mn,
                                    color: a.TVs.colors.STATUS_POSITIVE,
                                })
                              : (0, r.jsx)(a.CTb, {
                                    size: "custom",
                                    width: A.Mn,
                                    height: A.Mn,
                                    color: a.TVs.colors.STATUS_DANGER,
                                }),
                      }),
                      h !== u.qc.NO_GATE &&
                          (0, r.jsx)(A._2, {
                              icon: (0, r.jsx)(a.snC, {
                                  size: "custom",
                                  width: A.Mn,
                                  height: A.Mn,
                              }),
                              name: (0, r.jsx)(a.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  children: m.intl.string(m.t["93hqlp"]),
                              }),
                              description:
                                  h === u.qc.AGREED
                                      ? (0, r.jsx)(a.sV5, {
                                            size: "custom",
                                            width: A.Mn,
                                            height: A.Mn,
                                            color: a.TVs.colors.STATUS_POSITIVE,
                                        })
                                      : (0, r.jsx)(a.CTb, {
                                            size: "custom",
                                            width: A.Mn,
                                            height: A.Mn,
                                            color: a.TVs.colors.STATUS_DANGER,
                                        }),
                          }),
                      (0, r.jsx)(A._2, {
                          icon: (0, r.jsx)(a.gw7, {
                              size: "custom",
                              color: "currentColor",
                              width: A.Mn,
                              height: A.Mn,
                          }),
                          name: (0, r.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: m.intl.string(m.t.SaDIpK),
                          }),
                          description: (0, r.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: N,
                          }),
                      }),
                      (0, r.jsx)(A._2, {
                          icon: (0, r.jsx)(s.Vj, {
                              guild: n,
                              size: s.Vj.Sizes.SMOL,
                              animate: !1,
                              className: I.guildIcon,
                          }),
                          name: (0, r.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: m.intl.string(m.t["NQJ+WF"]),
                          }),
                          description: (0, r.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: O,
                          }),
                      }),
                      (0, r.jsx)(A._2, {
                          icon: (0, r.jsx)(a.ejJ, {
                              size: "custom",
                              width: A.Mn,
                              height: A.Mn,
                          }),
                          name: (0, r.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: m.intl.string(m.t["eJOq+f"]),
                          }),
                          description: (0, r.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: (0, r.jsx)(c.ZP, {
                                  userId: t.userId,
                                  guildId: t.guildId,
                                  showJoinMethodContextAsFooter: !0,
                                  onClickInviter: (e) => {
                                      let n = d.Z.getChannelId();
                                      (0, _.r)(t.guildId, e.id, null != n ? n : T.lds);
                                  },
                              }),
                          }),
                      }),
                  ],
              }),
          });
}
