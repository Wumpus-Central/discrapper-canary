n.d(t, { Z: () => C });
var i = n(200651),
    l = n(192379),
    a = n(399606),
    r = n(481060),
    s = n(388905),
    o = n(527379),
    c = n(376923),
    d = n(16829),
    u = n(430824),
    h = n(944486),
    p = n(189432),
    m = n(776767),
    f = n(981631),
    g = n(388032),
    _ = n(859113);
function C(e) {
    let { member: t } = e,
        n = (0, a.e7)([u.Z], () => u.Z.getGuild(t.guildId), [t.guildId]),
        C = (0, c.mh)(t.userId, t.guildId),
        x = (0, c.mV)(t.userId, t.guildId),
        v = (0, c.LD)(t.userId),
        E = (0, c.wi)(t.userId, t.guildId);
    return (l.useEffect(() => {
        (0, o.zO)(t.guildId);
    }, [t.guildId]),
    null == n)
        ? null
        : (0, i.jsx)(r.xJW, {
              title: g.intl.string(g.t['ldCE/v']),
              titleClassName: _.infoTitle,
              children: (0, i.jsxs)(m.WM, {
                  children: [
                      (0, i.jsx)(m._2, {
                          icon: (0, i.jsx)(r.lZ8, {
                              size: 'custom',
                              width: m.Mn,
                              height: m.Mn
                          }),
                          name: (0, i.jsx)(r.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: g.intl.string(g.t.nzGai4)
                          }),
                          description: C
                              ? (0, i.jsx)(r.sV5, {
                                    size: 'custom',
                                    width: m.Mn,
                                    height: m.Mn,
                                    color: r.TVs.colors.INFO_POSITIVE_FOREGROUND
                                })
                              : (0, i.jsx)(r.CTb, {
                                    size: 'custom',
                                    width: m.Mn,
                                    height: m.Mn,
                                    color: r.TVs.colors.INFO_DANGER_FOREGROUND
                                })
                      }),
                      x !== c.qc.NO_GATE &&
                          (0, i.jsx)(m._2, {
                              icon: (0, i.jsx)(r.snC, {
                                  size: 'custom',
                                  width: m.Mn,
                                  height: m.Mn
                              }),
                              name: (0, i.jsx)(r.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'text-normal',
                                  children: g.intl.string(g.t['93hqlp'])
                              }),
                              description:
                                  x === c.qc.AGREED
                                      ? (0, i.jsx)(r.sV5, {
                                            size: 'custom',
                                            width: m.Mn,
                                            height: m.Mn,
                                            color: r.TVs.colors.INFO_POSITIVE_FOREGROUND
                                        })
                                      : (0, i.jsx)(r.CTb, {
                                            size: 'custom',
                                            width: m.Mn,
                                            height: m.Mn,
                                            color: r.TVs.colors.INFO_DANGER_FOREGROUND
                                        })
                          }),
                      (0, i.jsx)(m._2, {
                          icon: (0, i.jsx)(r.gw7, {
                              size: 'custom',
                              color: 'currentColor',
                              width: m.Mn,
                              height: m.Mn
                          }),
                          name: (0, i.jsx)(r.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: g.intl.string(g.t.SaDIpK)
                          }),
                          description: (0, i.jsx)(r.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: v
                          })
                      }),
                      (0, i.jsx)(m._2, {
                          icon: (0, i.jsx)(s.Vj, {
                              guild: n,
                              size: s.Vj.Sizes.SMOL,
                              animate: !1,
                              className: _.guildIcon
                          }),
                          name: (0, i.jsx)(r.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: g.intl.string(g.t['NQJ+WF'])
                          }),
                          description: (0, i.jsx)(r.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: E
                          })
                      }),
                      (0, i.jsx)(m._2, {
                          icon: (0, i.jsx)(r.ejJ, {
                              size: 'custom',
                              width: m.Mn,
                              height: m.Mn
                          }),
                          name: (0, i.jsx)(r.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: g.intl.string(g.t['eJOq+f'])
                          }),
                          description: (0, i.jsx)(r.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: (0, i.jsx)(d.ZP, {
                                  userId: t.userId,
                                  guildId: t.guildId,
                                  showInviterAsFooter: !0,
                                  onClickInviter: (e) => {
                                      let n = h.Z.getChannelId();
                                      (0, p.r)(t.guildId, e.id, null != n ? n : f.lds);
                                  }
                              })
                          })
                      })
                  ]
              })
          });
}
