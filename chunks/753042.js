n.d(t, { Z: () => I });
var r = n(54381),
    l = n(473749),
    i = n(399606),
    a = n(481060),
    s = n(388905),
    o = n(527379),
    c = n(376923),
    u = n(16829),
    d = n(430824),
    E = n(944486),
    _ = n(189432),
    A = n(776767),
    f = n(981631),
    T = n(388032),
    g = n(280533);
function I(e) {
    let { member: t } = e,
        n = (0, i.e7)([d.Z], () => d.Z.getGuild(t.guildId), [t.guildId]),
        I = (0, c.mh)(t.userId, t.guildId),
        m = (0, c.mV)(t.userId, t.guildId),
        h = (0, c.LD)(t.userId),
        N = (0, c.wi)(t.userId, t.guildId);
    return (l.useEffect(() => {
        (0, o.zO)(t.guildId);
    }, [t.guildId]),
    null == n)
        ? null
        : (0, r.jsx)(a.gNt, {
              label: T.intl.string(T.t["ldCE/p"]),
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
                          description: I
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
                                    color: a.TVs.colors.ICON_FEEDBACK_CRITICAL,
                                }),
                      }),
                      m !== c.qc.NO_GATE &&
                          (0, r.jsx)(A._2, {
                              icon: (0, r.jsx)(a.snC, {
                                  size: "custom",
                                  width: A.Mn,
                                  height: A.Mn,
                              }),
                              name: (0, r.jsx)(a.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  children: T.intl.string(T.t["93hqln"]),
                              }),
                              description:
                                  m === c.qc.AGREED
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
                                            color: a.TVs.colors.ICON_FEEDBACK_CRITICAL,
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
                              children: T.intl.string(T.t.SaDIpL),
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
                              className: g.guildIcon,
                          }),
                          name: (0, r.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: T.intl.string(T.t["NQJ+WG"]),
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
                              children: T.intl.string(T.t["eJOq+Z"]),
                          }),
                          description: (0, r.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: (0, r.jsx)(u.ZP, {
                                  userId: t.userId,
                                  guildId: t.guildId,
                                  showJoinMethodContextAsFooter: !0,
                                  onClickInviter: (e) => {
                                      let n = E.Z.getChannelId();
                                      (0, _.r)(t.guildId, e.id, null != n ? n : f.lds);
                                  },
                              }),
                          }),
                      }),
                  ],
              }),
          });
}
