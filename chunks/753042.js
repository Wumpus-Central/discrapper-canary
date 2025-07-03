n.d(t, { Z: () => g });
var r = n(255367),
    l = n(73800),
    i = n(399606),
    s = n(481060),
    a = n(388905),
    o = n(527379),
    u = n(376923),
    c = n(16829),
    d = n(430824),
    E = n(944486),
    _ = n(189432),
    A = n(776767),
    m = n(981631),
    f = n(388032),
    T = n(12740);
function g(e) {
    let { member: t } = e,
        n = (0, i.e7)([d.Z], () => d.Z.getGuild(t.guildId), [t.guildId]),
        g = (0, u.mh)(t.userId, t.guildId),
        I = (0, u.mV)(t.userId, t.guildId),
        h = (0, u.LD)(t.userId),
        O = (0, u.wi)(t.userId, t.guildId);
    return (l.useEffect(() => {
        (0, o.zO)(t.guildId);
    }, [t.guildId]),
    null == n)
        ? null
        : (0, r.jsx)(s.xJW, {
              title: f.intl.string(f.t['ldCE/v']),
              titleClassName: T.infoTitle,
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
                              children: f.intl.string(f.t.nzGai4)
                          }),
                          description: g
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
                      I !== u.qc.NO_GATE &&
                          (0, r.jsx)(A._2, {
                              icon: (0, r.jsx)(s.snC, {
                                  size: 'custom',
                                  width: A.Mn,
                                  height: A.Mn
                              }),
                              name: (0, r.jsx)(s.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'text-default',
                                  children: f.intl.string(f.t['93hqlp'])
                              }),
                              description:
                                  I === u.qc.AGREED
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
                              children: f.intl.string(f.t.SaDIpK)
                          }),
                          description: (0, r.jsx)(s.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-default',
                              children: h
                          })
                      }),
                      (0, r.jsx)(A._2, {
                          icon: (0, r.jsx)(a.Vj, {
                              guild: n,
                              size: a.Vj.Sizes.SMOL,
                              animate: !1,
                              className: T.guildIcon
                          }),
                          name: (0, r.jsx)(s.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-default',
                              children: f.intl.string(f.t['NQJ+WF'])
                          }),
                          description: (0, r.jsx)(s.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-default',
                              children: O
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
                              children: f.intl.string(f.t['eJOq+f'])
                          }),
                          description: (0, r.jsx)(s.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-default',
                              children: (0, r.jsx)(c.ZP, {
                                  userId: t.userId,
                                  guildId: t.guildId,
                                  showInviterAsFooter: !0,
                                  onClickInviter: (e) => {
                                      let n = E.Z.getChannelId();
                                      (0, _.r)(t.guildId, e.id, null != n ? n : m.lds);
                                  }
                              })
                          })
                      })
                  ]
              })
          });
}
