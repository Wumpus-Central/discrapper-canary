t.d(e, { Z: () => C });
var n = t(255367),
    r = t(73800),
    l = t(399606),
    i = t(481060),
    s = t(388905),
    a = t(527379),
    o = t(376923),
    g = t(16829),
    f = t(430824),
    v = t(944486),
    c = t(189432),
    h = t(776767),
    E = t(981631),
    u = t(388032),
    d = t(12740);
function C(A) {
    let { member: e } = A,
        t = (0, l.e7)([f.Z], () => f.Z.getGuild(e.guildId), [e.guildId]),
        C = (0, o.mh)(e.userId, e.guildId),
        B = (0, o.mV)(e.userId, e.guildId),
        w = (0, o.LD)(e.userId),
        D = (0, o.wi)(e.userId, e.guildId);
    return (r.useEffect(() => {
        (0, a.zO)(e.guildId);
    }, [e.guildId]),
    null == t)
        ? null
        : (0, n.jsx)(i.xJW, {
              title: u.intl.string(u.t['ldCE/v']),
              titleClassName: d.infoTitle,
              children: (0, n.jsxs)(h.WM, {
                  children: [
                      (0, n.jsx)(h._2, {
                          icon: (0, n.jsx)(i.lZ8, {
                              size: 'custom',
                              width: h.Mn,
                              height: h.Mn
                          }),
                          name: (0, n.jsx)(i.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-default',
                              children: u.intl.string(u.t.nzGai4)
                          }),
                          description: C
                              ? (0, n.jsx)(i.sV5, {
                                    size: 'custom',
                                    width: h.Mn,
                                    height: h.Mn,
                                    color: i.TVs.colors.STATUS_POSITIVE
                                })
                              : (0, n.jsx)(i.CTb, {
                                    size: 'custom',
                                    width: h.Mn,
                                    height: h.Mn,
                                    color: i.TVs.colors.STATUS_DANGER
                                })
                      }),
                      B !== o.qc.NO_GATE &&
                          (0, n.jsx)(h._2, {
                              icon: (0, n.jsx)(i.snC, {
                                  size: 'custom',
                                  width: h.Mn,
                                  height: h.Mn
                              }),
                              name: (0, n.jsx)(i.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'text-default',
                                  children: u.intl.string(u.t['93hqlp'])
                              }),
                              description:
                                  B === o.qc.AGREED
                                      ? (0, n.jsx)(i.sV5, {
                                            size: 'custom',
                                            width: h.Mn,
                                            height: h.Mn,
                                            color: i.TVs.colors.STATUS_POSITIVE
                                        })
                                      : (0, n.jsx)(i.CTb, {
                                            size: 'custom',
                                            width: h.Mn,
                                            height: h.Mn,
                                            color: i.TVs.colors.STATUS_DANGER
                                        })
                          }),
                      (0, n.jsx)(h._2, {
                          icon: (0, n.jsx)(i.gw7, {
                              size: 'custom',
                              color: 'currentColor',
                              width: h.Mn,
                              height: h.Mn
                          }),
                          name: (0, n.jsx)(i.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-default',
                              children: u.intl.string(u.t.SaDIpK)
                          }),
                          description: (0, n.jsx)(i.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-default',
                              children: w
                          })
                      }),
                      (0, n.jsx)(h._2, {
                          icon: (0, n.jsx)(s.Vj, {
                              guild: t,
                              size: s.Vj.Sizes.SMOL,
                              animate: !1,
                              className: d.guildIcon
                          }),
                          name: (0, n.jsx)(i.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-default',
                              children: u.intl.string(u.t['NQJ+WF'])
                          }),
                          description: (0, n.jsx)(i.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-default',
                              children: D
                          })
                      }),
                      (0, n.jsx)(h._2, {
                          icon: (0, n.jsx)(i.ejJ, {
                              size: 'custom',
                              width: h.Mn,
                              height: h.Mn
                          }),
                          name: (0, n.jsx)(i.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-default',
                              children: u.intl.string(u.t['eJOq+f'])
                          }),
                          description: (0, n.jsx)(i.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-default',
                              children: (0, n.jsx)(g.ZP, {
                                  userId: e.userId,
                                  guildId: e.guildId,
                                  showJoinMethodContextAsFooter: !0,
                                  onClickInviter: (A) => {
                                      let t = v.Z.getChannelId();
                                      (0, c.r)(e.guildId, A.id, null != t ? t : E.lds);
                                  }
                              })
                          })
                      })
                  ]
              })
          });
}
