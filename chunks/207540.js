(e.d(n, { default: () => y }), e(388685));
var i = e(255367),
    l = e(73800),
    d = e(442837),
    r = e(82659),
    a = e(481060),
    s = e(933557),
    _ = e(724723),
    o = e(156699),
    p = e(734893),
    E = e(693196),
    T = e(66999),
    I = e(575830),
    u = e(554747),
    c = e(434404),
    g = e(144140),
    m = e(314897),
    U = e(430824),
    C = e(496675),
    L = e(981631),
    D = e(388032),
    G = e(356407);
let y = (t) => {
    let { channel: n, onClose: e, onConfirm: y, transitionState: O } = t,
        z = (0, s.ZP)(n, !0),
        S = n.id,
        A = n.isForumPost(),
        f = (0, d.e7)([U.Z], () => U.Z.getGuild(n.getGuildId())),
        h = (0, u.u1)(S),
        { isSubscriptionGated: v } = (0, T.Z)(n.id),
        R = (0, I.Z)(f, n),
        [N, H] = l.useState(),
        x = (0, d.e7)([m.default], () => n.isOwner(m.default.getId()), [n]),
        B = (0, _.q)('DeleteChannelConfirm'),
        b = (0, d.e7)([C.Z], () => C.Z.can(n.isThread() ? L.Plq.MANAGE_THREADS : L.Plq.MANAGE_CHANNELS, n), [n]),
        M = (0, d.e7)(
            [g.Z],
            () => {
                var t;
                return null != (t = g.Z.getCount(n.id)) ? t : 0;
            },
            [n.id]
        ),
        P = A && (b || (x && M < 1)),
        j = h.length > 0 && (n.type === L.d4z.GUILD_VOICE || n.type === L.d4z.GUILD_STAGE_VOICE);
    if (
        (l.useEffect(() => {
            (async () => {
                if (!(await (0, o.C)(n.getGuildId(), S))) return H(p.j.DEFAULT);
                let t = await (0, E.T)(n.getGuildId(), S);
                if (null != t) return H(t);
            })();
        }, [n, S]),
        l.useEffect(() => {
            null != f && f.features.has(L.oNc.COMMUNITY) && (f.rulesChannelId === S ? H(p.j.RULES) : f.publicUpdatesChannelId === S && H(p.j.UPDATES));
        }, [f, S]),
        null == f)
    )
        return null;
    if (null != N) {
        let t,
            n = async () => {
                (await c.Z.open(f.id, L.pNK.ONBOARDING), await e());
            },
            l = async () => {
                (await c.Z.open(f.id, L.pNK.COMMUNITY), await e());
            };
        switch (N) {
            case p.j.DEFAULT:
                t = D.intl.format(D.t.iWlB6u, { onClick: n });
                break;
            case p.j.TODO:
                t = D.intl.format(D.t['/rjozM'], { onClick: n });
                break;
            case p.j.RESOURCE:
                t = D.intl.format(D.t.Nf5pt7, { onClick: n });
                break;
            case p.j.RULES:
                t = D.intl.format(D.t['kB1f+/'], {
                    reason: D.intl.string(D.t.yjrZPj),
                    onClick: l
                });
                break;
            case p.j.UPDATES:
                t = D.intl.format(D.t['kB1f+/'], {
                    reason: D.intl.string(D.t['1B1/ND']),
                    onClick: l
                });
        }
        return B
            ? (0, i.jsx)(r.u, {
                  title: D.intl.string(D.t['TY/V+P']),
                  onClose: e,
                  headerBody: t,
                  transitionState: O,
                  actions: [
                      {
                          text: D.intl.string(D.t.BddRzc),
                          onClick: e,
                          variant: 'primary'
                      }
                  ]
              })
            : (0, i.jsxs)(a.Y0X, {
                  transitionState: O,
                  'aria-label': D.intl.string(D.t['TY/V+P']),
                  parentComponent: 'DeleteChannelConfirm',
                  children: [
                      (0, i.jsx)(a.xBx, {
                          separator: !1,
                          children: (0, i.jsx)(a.X6q, {
                              variant: 'heading-lg/semibold',
                              children: D.intl.string(D.t['TY/V+P'])
                          })
                      }),
                      (0, i.jsx)(a.hzk, {
                          children: (0, i.jsx)(a.Text, {
                              variant: 'text-md/normal',
                              children: t
                          })
                      }),
                      (0, i.jsx)(a.mzw, {
                          children: (0, i.jsx)(a.zxk, {
                              onClick: e,
                              children: D.intl.string(D.t.BddRzc)
                          })
                      })
                  ]
              });
    }
    let { deleteText: X, deleteBody: Y } =
        n.type === L.d4z.GUILD_CATEGORY
            ? {
                  deleteText: D.intl.string(D.t.ifbXnJ),
                  deleteBody: D.intl.format(D.t.a6Gz9P, { channelName: z })
              }
            : n.isForumPost()
              ? {
                    deleteText: P ? D.intl.string(D.t.nEOg1N) : D.intl.string(D.t.xwMqDw),
                    deleteBody: P && x && !b ? D.intl.format(D.t['6/pY29'], { postName: z }) : P ? D.intl.format(D.t.su3voK, { postName: z }) : D.intl.string(D.t.RUHcys)
                }
              : n.isThread()
                ? {
                      deleteText: D.intl.string(D.t.H7vTe3),
                      deleteBody: D.intl.format(D.t.a6Gz9P, { channelName: z })
                  }
                : v && R > 0
                  ? {
                        deleteText: D.intl.string(D.t['8D8Rsb']),
                        deleteBody: D.intl.format(D.t['+qkiT0'], {
                            channelName: z,
                            numGuildRoleSubscriptionMembers: R
                        })
                    }
                  : {
                        deleteText: D.intl.string(D.t['8D8Rsb']),
                        deleteBody: D.intl.format(D.t.a6Gz9P, { channelName: z })
                    };
    return B
        ? (0, i.jsx)(r.u, {
              size: 'sm',
              onClose: e,
              transitionState: O,
              title: X,
              headerBody: Y,
              actions: [
                  {
                      text: D.intl.string(D.t['ETE/oK']),
                      onClick: e,
                      variant: 'secondary'
                  },
                  {
                      text: X,
                      onClick: y,
                      variant: 'critical-primary'
                  }
              ],
              children: j
                  ? (0, i.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: D.intl.format(D.t.Ze005O, { count: h.length })
                    })
                  : null
          })
        : (0, i.jsxs)(a.Y0X, {
              transitionState: O,
              'aria-label': X,
              parentComponent: 'DeleteChannelConfirm',
              children: [
                  (0, i.jsx)(a.xBx, {
                      separator: !1,
                      children: (0, i.jsx)(a.X6q, {
                          variant: 'heading-lg/semibold',
                          children: X
                      })
                  }),
                  (0, i.jsxs)(a.hzk, {
                      className: G.modalContent,
                      children: [
                          (0, i.jsx)(a.Text, {
                              variant: 'text-md/normal',
                              color: 'header-primary',
                              children: Y
                          }),
                          j
                              ? (0, i.jsx)(a.Text, {
                                    variant: 'text-md/normal',
                                    color: 'header-secondary',
                                    className: G.warningText,
                                    children: D.intl.format(D.t.Ze005O, { count: h.length })
                                })
                              : null
                      ]
                  }),
                  (0, i.jsxs)(a.mzw, {
                      children: [
                          (0, i.jsx)(a.zxk, {
                              onClick: y,
                              color: a.zxk.Colors.RED,
                              children: X
                          }),
                          (0, i.jsx)(a.zxk, {
                              onClick: e,
                              look: a.zxk.Looks.LINK,
                              color: a.zxk.Colors.PRIMARY,
                              children: D.intl.string(D.t['ETE/oK'])
                          })
                      ]
                  })
              ]
          });
};
