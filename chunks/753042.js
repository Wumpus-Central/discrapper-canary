n.d(t, { Z: () => m });
var r = n(255367),
    l = n(73800),
    i = n(399606),
    s = n(481060),
    a = n(388905),
    o = n(527379),
    u = n(376923),
    c = n(16829),
    E = n(430824),
    d = n(944486),
    _ = n(189432),
    A = n(776767),
    T = n(981631),
    I = n(388032),
    g = n(12740);
function m(e) {
    let { member: t } = e,
        n = (0, i.e7)([E.Z], () => E.Z.getGuild(t.guildId), [t.guildId]),
        m = (0, u.mh)(t.userId, t.guildId),
        f = (0, u.mV)(t.userId, t.guildId),
        O = (0, u.LD)(t.userId),
        N = (0, u.wi)(t.userId, t.guildId);
    return (l.useEffect(() => {
        (0, o.zO)(t.guildId);
    }, [t.guildId]),
    null == n)
        ? null
        : (0, r.jsx)(s.xJW, {
              title: I.intl.string(I.t['ldCE/v']),
              titleClassName: g.infoTitle,
              children: (0, r.jsxs)(A.WM, {
                  children: [
                      (0, r.jsx)(A._2, {
                          icon: (0, r.jsx)(s.lZ8, {
                              size: 'custom',
                              width: A.Mn,
                              height: A.Mn
                          }),
                          name: (0, r.jsx)(s.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-default',
                              children: I.intl.string(I.t.nzGai4)
                          }),
                          description: m
                              ? (0, r.jsx)(s.sV5, {
                                    size: 'custom',
                                    width: A.Mn,
                                    height: A.Mn,
                                    color: s.TVs.colors.STATUS_POSITIVE
                                })
                              : (0, r.jsx)(s.CTb, {
                                    size: 'custom',
                                    width: A.Mn,
                                    height: A.Mn,
                                    color: s.TVs.colors.STATUS_DANGER
                                })
                      }),
                      f !== u.qc.NO_GATE &&
                          (0, r.jsx)(A._2, {
                              icon: (0, r.jsx)(s.snC, {
                                  size: 'custom',
                                  width: A.Mn,
                                  height: A.Mn
                              }),
                              name: (0, r.jsx)(s.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'text-default',
                                  children: I.intl.string(I.t['93hqlp'])
                              }),
                              description:
                                  f === u.qc.AGREED
                                      ? (0, r.jsx)(s.sV5, {
                                            size: 'custom',
                                            width: A.Mn,
                                            height: A.Mn,
                                            color: s.TVs.colors.STATUS_POSITIVE
                                        })
                                      : (0, r.jsx)(s.CTb, {
                                            size: 'custom',
                                            width: A.Mn,
                                            height: A.Mn,
                                            color: s.TVs.colors.STATUS_DANGER
                                        })
                          }),
                      (0, r.jsx)(A._2, {
                          icon: (0, r.jsx)(s.gw7, {
                              size: 'custom',
                              color: 'currentColor',
                              width: A.Mn,
                              height: A.Mn
                          }),
                          name: (0, r.jsx)(s.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-default',
                              children: I.intl.string(I.t.SaDIpK)
                          }),
                          description: (0, r.jsx)(s.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-default',
                              children: O
                          })
                      }),
                      (0, r.jsx)(A._2, {
                          icon: (0, r.jsx)(a.Vj, {
                              guild: n,
                              size: a.Vj.Sizes.SMOL,
                              animate: !1,
                              className: g.guildIcon
                          }),
                          name: (0, r.jsx)(s.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-default',
                              children: I.intl.string(I.t['NQJ+WF'])
                          }),
                          description: (0, r.jsx)(s.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-default',
                              children: N
                          })
                      }),
                      (0, r.jsx)(A._2, {
                          icon: (0, r.jsx)(s.ejJ, {
                              size: 'custom',
                              width: A.Mn,
                              height: A.Mn
                          }),
                          name: (0, r.jsx)(s.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-default',
                              children: I.intl.string(I.t['eJOq+f'])
                          }),
                          description: (0, r.jsx)(s.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-default',
                              children: (0, r.jsx)(c.ZP, {
                                  userId: t.userId,
                                  guildId: t.guildId,
                                  showInviterAsFooter: !0,
                                  onClickInviter: (e) => {
                                      let n = d.Z.getChannelId();
                                      (0, _.r)(t.guildId, e.id, null != n ? n : T.lds);
                                  }
                              })
                          })
                      })
                  ]
              })
          });
}
