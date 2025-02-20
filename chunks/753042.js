n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    l = n(399606),
    o = n(481060),
    a = n(388905),
    s = n(527379),
    c = n(376923),
    u = n(16829),
    d = n(430824),
    p = n(944486),
    h = n(189432),
    f = n(776767),
    m = n(981631),
    g = n(388032),
    b = n(211971);
function _(e) {
    let { member: t } = e,
        n = (0, l.e7)([d.Z], () => d.Z.getGuild(t.guildId), [t.guildId]),
        _ = (0, c.mh)(t.userId, t.guildId),
        C = (0, c.mV)(t.userId, t.guildId),
        v = (0, c.LD)(t.userId),
        y = (0, c.wi)(t.userId, t.guildId);
    return (i.useEffect(() => {
        (0, s.zO)(t.guildId);
    }, [t.guildId]),
    null == n)
        ? null
        : (0, r.jsx)(o.xJW, {
              title: g.NW.string(g.t['ldCE/v']),
              titleClassName: b.infoTitle,
              children: (0, r.jsxs)(f.WM, {
                  children: [
                      (0, r.jsx)(f._2, {
                          icon: (0, r.jsx)(o.lZ8, {
                              size: 'custom',
                              width: f.Mn,
                              height: f.Mn
                          }),
                          name: (0, r.jsx)(o.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: g.NW.string(g.t.nzGai4)
                          }),
                          description: _
                              ? (0, r.jsx)(o.sV5, {
                                    size: 'custom',
                                    width: f.Mn,
                                    height: f.Mn,
                                    color: o.TVs.colors.INFO_POSITIVE_FOREGROUND
                                })
                              : (0, r.jsx)(o.CTb, {
                                    size: 'custom',
                                    width: f.Mn,
                                    height: f.Mn,
                                    color: o.TVs.colors.INFO_DANGER_FOREGROUND
                                })
                      }),
                      C !== c.qc.NO_GATE &&
                          (0, r.jsx)(f._2, {
                              icon: (0, r.jsx)(o.snC, {
                                  size: 'custom',
                                  width: f.Mn,
                                  height: f.Mn
                              }),
                              name: (0, r.jsx)(o.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'text-normal',
                                  children: g.NW.string(g.t['93hqlp'])
                              }),
                              description:
                                  C === c.qc.AGREED
                                      ? (0, r.jsx)(o.sV5, {
                                            size: 'custom',
                                            width: f.Mn,
                                            height: f.Mn,
                                            color: o.TVs.colors.INFO_POSITIVE_FOREGROUND
                                        })
                                      : (0, r.jsx)(o.CTb, {
                                            size: 'custom',
                                            width: f.Mn,
                                            height: f.Mn,
                                            color: o.TVs.colors.INFO_DANGER_FOREGROUND
                                        })
                          }),
                      (0, r.jsx)(f._2, {
                          icon: (0, r.jsx)(o.gw7, {
                              size: 'custom',
                              color: 'currentColor',
                              width: f.Mn,
                              height: f.Mn
                          }),
                          name: (0, r.jsx)(o.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: g.NW.string(g.t.SaDIpK)
                          }),
                          description: (0, r.jsx)(o.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: v
                          })
                      }),
                      (0, r.jsx)(f._2, {
                          icon: (0, r.jsx)(a.Vj, {
                              guild: n,
                              size: a.Vj.Sizes.SMOL,
                              animate: !1,
                              className: b.guildIcon
                          }),
                          name: (0, r.jsx)(o.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: g.NW.string(g.t['NQJ+WF'])
                          }),
                          description: (0, r.jsx)(o.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: y
                          })
                      }),
                      (0, r.jsx)(f._2, {
                          icon: (0, r.jsx)(o.ejJ, {
                              size: 'custom',
                              width: f.Mn,
                              height: f.Mn
                          }),
                          name: (0, r.jsx)(o.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: g.NW.string(g.t['eJOq+f'])
                          }),
                          description: (0, r.jsx)(o.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: (0, r.jsx)(u.ZP, {
                                  userId: t.userId,
                                  guildId: t.guildId,
                                  showInviterAsFooter: !0,
                                  onClickInviter: (e) => {
                                      let n = p.Z.getChannelId();
                                      (0, h.r)(t.guildId, e.id, null != n ? n : m.lds);
                                  }
                              })
                          })
                      })
                  ]
              })
          });
}
