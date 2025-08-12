n.d(t, { Z: () => g });
var r = n(255367),
    l = n(73800),
    s = n(399606),
    i = n(481060),
    a = n(388905),
    o = n(527379),
    u = n(376923),
    c = n(16829),
    E = n(430824),
    d = n(944486),
    _ = n(189432),
    A = n(776767),
    T = n(981631),
    m = n(388032),
    I = n(983843);
function g(e) {
    let { member: t } = e,
        n = (0, s.e7)([E.Z], () => E.Z.getGuild(t.guildId), [t.guildId]),
        g = (0, u.mh)(t.userId, t.guildId),
        f = (0, u.mV)(t.userId, t.guildId),
        N = (0, u.LD)(t.userId),
        h = (0, u.wi)(t.userId, t.guildId);
    return (l.useEffect(() => {
        (0, o.zO)(t.guildId);
    }, [t.guildId]),
    null == n)
        ? null
        : (0, r.jsx)(i.xJW, {
              title: m.intl.string(m.t["ldCE/v"]),
              titleClassName: I.infoTitle,
              children: (0, r.jsxs)(A.WM, {
                  children: [
                      (0, r.jsx)(A._2, {
                          icon: (0, r.jsx)(i.lZ8, {
                              size: "custom",
                              width: A.Mn,
                              height: A.Mn,
                          }),
                          name: (0, r.jsx)(i.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: m.intl.string(m.t.nzGai4),
                          }),
                          description: g
                              ? (0, r.jsx)(i.sV5, {
                                    size: "custom",
                                    width: A.Mn,
                                    height: A.Mn,
                                    color: i.TVs.colors.STATUS_POSITIVE,
                                })
                              : (0, r.jsx)(i.CTb, {
                                    size: "custom",
                                    width: A.Mn,
                                    height: A.Mn,
                                    color: i.TVs.colors.STATUS_DANGER,
                                }),
                      }),
                      f !== u.qc.NO_GATE &&
                          (0, r.jsx)(A._2, {
                              icon: (0, r.jsx)(i.snC, {
                                  size: "custom",
                                  width: A.Mn,
                                  height: A.Mn,
                              }),
                              name: (0, r.jsx)(i.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  children: m.intl.string(m.t["93hqlp"]),
                              }),
                              description:
                                  f === u.qc.AGREED
                                      ? (0, r.jsx)(i.sV5, {
                                            size: "custom",
                                            width: A.Mn,
                                            height: A.Mn,
                                            color: i.TVs.colors.STATUS_POSITIVE,
                                        })
                                      : (0, r.jsx)(i.CTb, {
                                            size: "custom",
                                            width: A.Mn,
                                            height: A.Mn,
                                            color: i.TVs.colors.STATUS_DANGER,
                                        }),
                          }),
                      (0, r.jsx)(A._2, {
                          icon: (0, r.jsx)(i.gw7, {
                              size: "custom",
                              color: "currentColor",
                              width: A.Mn,
                              height: A.Mn,
                          }),
                          name: (0, r.jsx)(i.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: m.intl.string(m.t.SaDIpK),
                          }),
                          description: (0, r.jsx)(i.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: N,
                          }),
                      }),
                      (0, r.jsx)(A._2, {
                          icon: (0, r.jsx)(a.Vj, {
                              guild: n,
                              size: a.Vj.Sizes.SMOL,
                              animate: !1,
                              className: I.guildIcon,
                          }),
                          name: (0, r.jsx)(i.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: m.intl.string(m.t["NQJ+WF"]),
                          }),
                          description: (0, r.jsx)(i.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: h,
                          }),
                      }),
                      (0, r.jsx)(A._2, {
                          icon: (0, r.jsx)(i.ejJ, {
                              size: "custom",
                              width: A.Mn,
                              height: A.Mn,
                          }),
                          name: (0, r.jsx)(i.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: m.intl.string(m.t["eJOq+f"]),
                          }),
                          description: (0, r.jsx)(i.Text, {
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
