n.d(t, { Z: () => g });
var r = n(951288),
    l = n(647438),
    i = n(399606),
    a = n(481060),
    s = n(388905),
    o = n(527379),
    u = n(376923),
    c = n(16829),
    d = n(430824),
    E = n(944486),
    _ = n(189432),
    A = n(776767),
    m = n(981631),
    T = n(388032),
    I = n(152540);
function g(e) {
    let { member: t } = e,
        n = (0, i.e7)([d.Z], () => d.Z.getGuild(t.guildId), [t.guildId]),
        g = (0, u.mh)(t.userId, t.guildId),
        f = (0, u.mV)(t.userId, t.guildId),
        h = (0, u.LD)(t.userId),
        N = (0, u.wi)(t.userId, t.guildId);
    return (l.useEffect(() => {
        (0, o.zO)(t.guildId);
    }, [t.guildId]),
    null == n)
        ? null
        : (0, r.jsx)(a.xJW, {
              title: T.intl.string(T.t["ldCE/v"]),
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
                              children: T.intl.string(T.t.nzGai4),
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
                      f !== u.qc.NO_GATE &&
                          (0, r.jsx)(A._2, {
                              icon: (0, r.jsx)(a.snC, {
                                  size: "custom",
                                  width: A.Mn,
                                  height: A.Mn,
                              }),
                              name: (0, r.jsx)(a.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  children: T.intl.string(T.t["93hqlp"]),
                              }),
                              description:
                                  f === u.qc.AGREED
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
                              children: T.intl.string(T.t.SaDIpK),
                          }),
                          description: (0, r.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: h,
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
                              children: T.intl.string(T.t["NQJ+WF"]),
                          }),
                          description: (0, r.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: N,
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
                              children: T.intl.string(T.t["eJOq+f"]),
                          }),
                          description: (0, r.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: (0, r.jsx)(c.ZP, {
                                  userId: t.userId,
                                  guildId: t.guildId,
                                  showJoinMethodContextAsFooter: !0,
                                  onClickInviter: (e) => {
                                      let n = E.Z.getChannelId();
                                      (0, _.r)(t.guildId, e.id, null != n ? n : m.lds);
                                  },
                              }),
                          }),
                      }),
                  ],
              }),
          });
}
