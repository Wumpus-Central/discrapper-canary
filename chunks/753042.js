t.d(e, { Z: () => C });
var n = t(951288),
    r = t(647438),
    l = t(399606),
    i = t(481060),
    a = t(388905),
    s = t(527379),
    o = t(376923),
    g = t(16829),
    c = t(430824),
    f = t(944486),
    v = t(189432),
    u = t(776767),
    h = t(981631),
    d = t(388032),
    E = t(87819);
function C(A) {
    let { member: e } = A,
        t = (0, l.e7)([c.Z], () => c.Z.getGuild(e.guildId), [e.guildId]),
        C = (0, o.mh)(e.userId, e.guildId),
        B = (0, o.mV)(e.userId, e.guildId),
        w = (0, o.LD)(e.userId),
        D = (0, o.wi)(e.userId, e.guildId);
    return (r.useEffect(() => {
        (0, s.zO)(e.guildId);
    }, [e.guildId]),
    null == t)
        ? null
        : (0, n.jsx)(i.xJW, {
              title: d.intl.string(d.t["ldCE/v"]),
              titleClassName: E.infoTitle,
              children: (0, n.jsxs)(u.WM, {
                  children: [
                      (0, n.jsx)(u._2, {
                          icon: (0, n.jsx)(i.lZ8, {
                              size: "custom",
                              width: u.Mn,
                              height: u.Mn,
                          }),
                          name: (0, n.jsx)(i.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: d.intl.string(d.t.nzGai4),
                          }),
                          description: C
                              ? (0, n.jsx)(i.sV5, {
                                    size: "custom",
                                    width: u.Mn,
                                    height: u.Mn,
                                    color: i.TVs.colors.STATUS_POSITIVE,
                                })
                              : (0, n.jsx)(i.CTb, {
                                    size: "custom",
                                    width: u.Mn,
                                    height: u.Mn,
                                    color: i.TVs.colors.STATUS_DANGER,
                                }),
                      }),
                      B !== o.qc.NO_GATE &&
                          (0, n.jsx)(u._2, {
                              icon: (0, n.jsx)(i.snC, {
                                  size: "custom",
                                  width: u.Mn,
                                  height: u.Mn,
                              }),
                              name: (0, n.jsx)(i.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  children: d.intl.string(d.t["93hqlp"]),
                              }),
                              description:
                                  B === o.qc.AGREED
                                      ? (0, n.jsx)(i.sV5, {
                                            size: "custom",
                                            width: u.Mn,
                                            height: u.Mn,
                                            color: i.TVs.colors.STATUS_POSITIVE,
                                        })
                                      : (0, n.jsx)(i.CTb, {
                                            size: "custom",
                                            width: u.Mn,
                                            height: u.Mn,
                                            color: i.TVs.colors.STATUS_DANGER,
                                        }),
                          }),
                      (0, n.jsx)(u._2, {
                          icon: (0, n.jsx)(i.gw7, {
                              size: "custom",
                              color: "currentColor",
                              width: u.Mn,
                              height: u.Mn,
                          }),
                          name: (0, n.jsx)(i.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: d.intl.string(d.t.SaDIpK),
                          }),
                          description: (0, n.jsx)(i.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: w,
                          }),
                      }),
                      (0, n.jsx)(u._2, {
                          icon: (0, n.jsx)(a.Vj, {
                              guild: t,
                              size: a.Vj.Sizes.SMOL,
                              animate: !1,
                              className: E.guildIcon,
                          }),
                          name: (0, n.jsx)(i.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: d.intl.string(d.t["NQJ+WF"]),
                          }),
                          description: (0, n.jsx)(i.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: D,
                          }),
                      }),
                      (0, n.jsx)(u._2, {
                          icon: (0, n.jsx)(i.ejJ, {
                              size: "custom",
                              width: u.Mn,
                              height: u.Mn,
                          }),
                          name: (0, n.jsx)(i.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: d.intl.string(d.t["eJOq+f"]),
                          }),
                          description: (0, n.jsx)(i.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: (0, n.jsx)(g.ZP, {
                                  userId: e.userId,
                                  guildId: e.guildId,
                                  showJoinMethodContextAsFooter: !0,
                                  onClickInviter: (A) => {
                                      let t = f.Z.getChannelId();
                                      (0, v.r)(e.guildId, A.id, null != t ? t : h.lds);
                                  },
                              }),
                          }),
                      }),
                  ],
              }),
          });
}
