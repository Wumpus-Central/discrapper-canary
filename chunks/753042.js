n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(399606),
    a = n(481060),
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
    C = n(758570);
function x(e) {
    let { member: t } = e,
        n = (0, r.e7)([u.Z], () => u.Z.getGuild(t.guildId), [t.guildId]),
        x = (0, c.mh)(t.userId, t.guildId),
        v = (0, c.mV)(t.userId, t.guildId),
        _ = (0, c.LD)(t.userId),
        I = (0, c.wi)(t.userId, t.guildId);
    return (l.useEffect(() => {
        (0, o.zO)(t.guildId);
    }, [t.guildId]),
    null == n)
        ? null
        : (0, i.jsx)(a.FormItem, {
              title: g.intl.string(g.t['ldCE/v']),
              titleClassName: C.infoTitle,
              children: (0, i.jsxs)(m.WM, {
                  children: [
                      (0, i.jsx)(m._2, {
                          icon: (0, i.jsx)(a.ShieldUserIcon, {
                              size: 'custom',
                              width: m.Mn,
                              height: m.Mn
                          }),
                          name: (0, i.jsx)(a.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: g.intl.string(g.t.nzGai4)
                          }),
                          description: x
                              ? (0, i.jsx)(a.CheckmarkLargeBoldIcon, {
                                    size: 'custom',
                                    width: m.Mn,
                                    height: m.Mn,
                                    color: a.tokens.colors.INFO_POSITIVE_FOREGROUND
                                })
                              : (0, i.jsx)(a.XLargeBoldIcon, {
                                    size: 'custom',
                                    width: m.Mn,
                                    height: m.Mn,
                                    color: a.tokens.colors.INFO_DANGER_FOREGROUND
                                })
                      }),
                      v !== c.qc.NO_GATE &&
                          (0, i.jsx)(m._2, {
                              icon: (0, i.jsx)(a.BookCheckIcon, {
                                  size: 'custom',
                                  width: m.Mn,
                                  height: m.Mn
                              }),
                              name: (0, i.jsx)(a.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'text-normal',
                                  children: g.intl.string(g.t['93hqlp'])
                              }),
                              description:
                                  v === c.qc.AGREED
                                      ? (0, i.jsx)(a.CheckmarkLargeBoldIcon, {
                                            size: 'custom',
                                            width: m.Mn,
                                            height: m.Mn,
                                            color: a.tokens.colors.INFO_POSITIVE_FOREGROUND
                                        })
                                      : (0, i.jsx)(a.XLargeBoldIcon, {
                                            size: 'custom',
                                            width: m.Mn,
                                            height: m.Mn,
                                            color: a.tokens.colors.INFO_DANGER_FOREGROUND
                                        })
                          }),
                      (0, i.jsx)(m._2, {
                          icon: (0, i.jsx)(a.ClydeIcon, {
                              size: 'custom',
                              color: 'currentColor',
                              width: m.Mn,
                              height: m.Mn
                          }),
                          name: (0, i.jsx)(a.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: g.intl.string(g.t.SaDIpK)
                          }),
                          description: (0, i.jsx)(a.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: _
                          })
                      }),
                      (0, i.jsx)(m._2, {
                          icon: (0, i.jsx)(s.Vj, {
                              guild: n,
                              size: s.Vj.Sizes.SMOL,
                              animate: !1,
                              className: C.guildIcon
                          }),
                          name: (0, i.jsx)(a.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: g.intl.string(g.t['NQJ+WF'])
                          }),
                          description: (0, i.jsx)(a.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: I
                          })
                      }),
                      (0, i.jsx)(m._2, {
                          icon: (0, i.jsx)(a.GroupPlusIcon, {
                              size: 'custom',
                              width: m.Mn,
                              height: m.Mn
                          }),
                          name: (0, i.jsx)(a.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-normal',
                              children: g.intl.string(g.t['eJOq+f'])
                          }),
                          description: (0, i.jsx)(a.Text, {
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
