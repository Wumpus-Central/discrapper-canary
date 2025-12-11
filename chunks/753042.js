n.d(t, { Z: () => f });
var r = n(54381),
    l = n(473749),
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
    I = n(388032),
    m = n(280533);
function f(e) {
    let { member: t } = e,
        n = (0, i.e7)([E.Z], () => E.Z.getGuild(t.guildId), [t.guildId]),
        f = (0, u.mh)(t.userId, t.guildId),
        g = (0, u.mV)(t.userId, t.guildId),
        N = (0, u.LD)(t.userId),
        h = (0, u.wi)(t.userId, t.guildId);
    return (l.useEffect(() => {
        (0, o.zO)(t.guildId);
    }, [t.guildId]),
    null == n)
        ? null
        : (0, r.jsx)(a.gNt, {
              label: I.intl.string(I.t["ldCE/p"]),
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
                              children: I.intl.string(I.t.nzGai4),
                          }),
                          description: f
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
                      g !== u.qc.NO_GATE &&
                          (0, r.jsx)(A._2, {
                              icon: (0, r.jsx)(a.snC, {
                                  size: "custom",
                                  width: A.Mn,
                                  height: A.Mn,
                              }),
                              name: (0, r.jsx)(a.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  children: I.intl.string(I.t["93hqln"]),
                              }),
                              description:
                                  g === u.qc.AGREED
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
                              children: I.intl.string(I.t.SaDIpL),
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
                              className: m.guildIcon,
                          }),
                          name: (0, r.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: I.intl.string(I.t["NQJ+WG"]),
                          }),
                          description: (0, r.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: h,
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
                              children: I.intl.string(I.t["eJOq+Z"]),
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
