(e.d(n, { default: () => y }), e(388685));
var i = e(255367),
    l = e(73800),
    r = e(442837),
    a = e(82659),
    d = e(481060),
    s = e(933557),
    _ = e(724723),
    o = e(156699),
    p = e(734893),
    E = e(693196),
    u = e(66999),
    I = e(575830),
    g = e(554747),
    m = e(434404),
    c = e(144140),
    T = e(314897),
    C = e(430824),
    U = e(496675),
    D = e(981631),
    G = e(388032),
    L = e(356407);
let y = (t) => {
    let { channel: n, onClose: e, onConfirm: y, transitionState: S } = t,
        O = (0, s.ZP)(n, !0),
        A = n.id,
        z = n.isForumPost(),
        h = (0, r.e7)([C.Z], () => C.Z.getGuild(n.getGuildId())),
        f = (0, g.u1)(A),
        { isSubscriptionGated: v } = (0, u.Z)(n.id),
        N = (0, I.Z)(h, n),
        [R, H] = l.useState(),
        x = (0, r.e7)([T.default], () => n.isOwner(T.default.getId()), [n]),
        B = (0, _.q)('DeleteChannelConfirm'),
        M = (0, r.e7)([U.Z], () => U.Z.can(n.isThread() ? D.Plq.MANAGE_THREADS : D.Plq.MANAGE_CHANNELS, n), [n]),
        b = (0, r.e7)(
            [c.Z],
            () => {
                var t;
                return null != (t = c.Z.getCount(n.id)) ? t : 0;
            },
            [n.id]
        ),
        P = z && (M || (x && b < 1)),
        w = f.length > 0 && (n.type === D.d4z.GUILD_VOICE || n.type === D.d4z.GUILD_STAGE_VOICE);
    if (
        (l.useEffect(() => {
            (async () => {
                if (!(await (0, o.C)(n.getGuildId(), A))) return H(p.j.DEFAULT);
                let t = await (0, E.T)(n.getGuildId(), A);
                if (null != t) return H(t);
            })();
        }, [n, A]),
        l.useEffect(() => {
            null != h && h.features.has(D.oNc.COMMUNITY) && (h.rulesChannelId === A ? H(p.j.RULES) : h.publicUpdatesChannelId === A && H(p.j.UPDATES));
        }, [h, A]),
        null == h)
    )
        return null;
    if (null != R) {
        let t,
            n = async () => {
                (await m.Z.open(h.id, D.pNK.ONBOARDING), await e());
            },
            l = async () => {
                (await m.Z.open(h.id, D.pNK.COMMUNITY), await e());
            };
        switch (R) {
            case p.j.DEFAULT:
                t = G.intl.format(G.t.iWlB6u, { onClick: n });
                break;
            case p.j.TODO:
                t = G.intl.format(G.t['/rjozM'], { onClick: n });
                break;
            case p.j.RESOURCE:
                t = G.intl.format(G.t.Nf5pt7, { onClick: n });
                break;
            case p.j.RULES:
                t = G.intl.format(G.t['kB1f+/'], {
                    reason: G.intl.string(G.t.yjrZPj),
                    onClick: l
                });
                break;
            case p.j.UPDATES:
                t = G.intl.format(G.t['kB1f+/'], {
                    reason: G.intl.string(G.t['1B1/ND']),
                    onClick: l
                });
        }
        return B
            ? (0, i.jsx)(a.Modal, {
                  title: G.intl.string(G.t['TY/V+P']),
                  onClose: e,
                  subtitle: t,
                  transitionState: S,
                  actions: [
                      {
                          text: G.intl.string(G.t.BddRzc),
                          onClick: e,
                          variant: 'primary'
                      }
                  ]
              })
            : (0, i.jsxs)(d.Y0X, {
                  transitionState: S,
                  'aria-label': G.intl.string(G.t['TY/V+P']),
                  parentComponent: 'DeleteChannelConfirm',
                  children: [
                      (0, i.jsx)(d.xBx, {
                          separator: !1,
                          children: (0, i.jsx)(d.X6q, {
                              variant: 'heading-lg/semibold',
                              children: G.intl.string(G.t['TY/V+P'])
                          })
                      }),
                      (0, i.jsx)(d.hzk, {
                          children: (0, i.jsx)(d.Text, {
                              variant: 'text-md/normal',
                              children: t
                          })
                      }),
                      (0, i.jsx)(d.mzw, {
                          children: (0, i.jsx)(d.zxk, {
                              variant: 'primary',
                              text: G.intl.string(G.t.BddRzc),
                              onClick: e
                          })
                      })
                  ]
              });
    }
    let { deleteText: Z, deleteBody: V } =
        n.type === D.d4z.GUILD_CATEGORY
            ? {
                  deleteText: G.intl.string(G.t.ifbXnJ),
                  deleteBody: G.intl.format(G.t.a6Gz9P, { channelName: O })
              }
            : n.isForumPost()
              ? {
                    deleteText: P ? G.intl.string(G.t.nEOg1N) : G.intl.string(G.t.xwMqDw),
                    deleteBody: P && x && !M ? G.intl.format(G.t['6/pY29'], { postName: O }) : P ? G.intl.format(G.t.su3voK, { postName: O }) : G.intl.string(G.t.RUHcys)
                }
              : n.isThread()
                ? {
                      deleteText: G.intl.string(G.t.H7vTe3),
                      deleteBody: G.intl.format(G.t.a6Gz9P, { channelName: O })
                  }
                : v && N > 0
                  ? {
                        deleteText: G.intl.string(G.t['8D8Rsb']),
                        deleteBody: G.intl.format(G.t['+qkiT0'], {
                            channelName: O,
                            numGuildRoleSubscriptionMembers: N
                        })
                    }
                  : {
                        deleteText: G.intl.string(G.t['8D8Rsb']),
                        deleteBody: G.intl.format(G.t.a6Gz9P, { channelName: O })
                    };
    return B
        ? (0, i.jsx)(a.Modal, {
              size: 'sm',
              onClose: e,
              transitionState: S,
              title: Z,
              subtitle: V,
              actions: [
                  {
                      text: G.intl.string(G.t['ETE/oK']),
                      onClick: e,
                      variant: 'secondary'
                  },
                  {
                      text: Z,
                      onClick: y,
                      variant: 'critical-primary'
                  }
              ],
              children: w
                  ? (0, i.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: G.intl.format(G.t.Ze005O, { count: f.length })
                    })
                  : null
          })
        : (0, i.jsxs)(d.Y0X, {
              transitionState: S,
              'aria-label': Z,
              parentComponent: 'DeleteChannelConfirm',
              children: [
                  (0, i.jsx)(d.xBx, {
                      separator: !1,
                      children: (0, i.jsx)(d.X6q, {
                          variant: 'heading-lg/semibold',
                          children: Z
                      })
                  }),
                  (0, i.jsxs)(d.hzk, {
                      className: L.modalContent,
                      children: [
                          (0, i.jsx)(d.Text, {
                              variant: 'text-md/normal',
                              color: 'header-primary',
                              children: V
                          }),
                          w
                              ? (0, i.jsx)(d.Text, {
                                    variant: 'text-md/normal',
                                    color: 'header-secondary',
                                    className: L.warningText,
                                    children: G.intl.format(G.t.Ze005O, { count: f.length })
                                })
                              : null
                      ]
                  }),
                  (0, i.jsx)(d.mzw, {
                      children: (0, i.jsxs)(d.hE2, {
                          direction: 'horizontal-reverse',
                          children: [
                              (0, i.jsx)(d.zxk, {
                                  variant: 'critical-primary',
                                  text: Z,
                                  onClick: y
                              }),
                              (0, i.jsx)(d.zxk, {
                                  variant: 'secondary',
                                  text: G.intl.string(G.t['ETE/oK']),
                                  onClick: e
                              })
                          ]
                      })
                  })
              ]
          });
};
