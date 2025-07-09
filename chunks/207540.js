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
        S = (0, s.ZP)(n, !0),
        z = n.id,
        A = n.isForumPost(),
        h = (0, d.e7)([U.Z], () => U.Z.getGuild(n.getGuildId())),
        f = (0, u.u1)(z),
        { isSubscriptionGated: v } = (0, T.Z)(n.id),
        R = (0, I.Z)(h, n),
        [N, x] = l.useState(),
        H = (0, d.e7)([m.default], () => n.isOwner(m.default.getId()), [n]),
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
        j = A && (b || (H && M < 1)),
        P = f.length > 0 && (n.type === L.d4z.GUILD_VOICE || n.type === L.d4z.GUILD_STAGE_VOICE);
    if (
        (l.useEffect(() => {
            (async () => {
                if (!(await (0, o.C)(n.getGuildId(), z))) return x(p.j.DEFAULT);
                let t = await (0, E.T)(n.getGuildId(), z);
                if (null != t) return x(t);
            })();
        }, [n, z]),
        l.useEffect(() => {
            null != h && h.features.has(L.oNc.COMMUNITY) && (h.rulesChannelId === z ? x(p.j.RULES) : h.publicUpdatesChannelId === z && x(p.j.UPDATES));
        }, [h, z]),
        null == h)
    )
        return null;
    if (null != N) {
        let t,
            n = async () => {
                (await c.Z.open(h.id, L.pNK.ONBOARDING), await e());
            },
            l = async () => {
                (await c.Z.open(h.id, L.pNK.COMMUNITY), await e());
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
                  heading: D.intl.string(D.t['TY/V+P']),
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
                              variant: 'primary',
                              text: D.intl.string(D.t.BddRzc),
                              onClick: e
                          })
                      })
                  ]
              });
    }
    let { deleteText: X, deleteBody: Y } =
        n.type === L.d4z.GUILD_CATEGORY
            ? {
                  deleteText: D.intl.string(D.t.ifbXnJ),
                  deleteBody: D.intl.format(D.t.a6Gz9P, { channelName: S })
              }
            : n.isForumPost()
              ? {
                    deleteText: j ? D.intl.string(D.t.nEOg1N) : D.intl.string(D.t.xwMqDw),
                    deleteBody: j && H && !b ? D.intl.format(D.t['6/pY29'], { postName: S }) : j ? D.intl.format(D.t.su3voK, { postName: S }) : D.intl.string(D.t.RUHcys)
                }
              : n.isThread()
                ? {
                      deleteText: D.intl.string(D.t.H7vTe3),
                      deleteBody: D.intl.format(D.t.a6Gz9P, { channelName: S })
                  }
                : v && R > 0
                  ? {
                        deleteText: D.intl.string(D.t['8D8Rsb']),
                        deleteBody: D.intl.format(D.t['+qkiT0'], {
                            channelName: S,
                            numGuildRoleSubscriptionMembers: R
                        })
                    }
                  : {
                        deleteText: D.intl.string(D.t['8D8Rsb']),
                        deleteBody: D.intl.format(D.t.a6Gz9P, { channelName: S })
                    };
    return B
        ? (0, i.jsx)(r.u, {
              size: 'sm',
              onClose: e,
              transitionState: O,
              heading: X,
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
              children: P
                  ? (0, i.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: D.intl.format(D.t.Ze005O, { count: f.length })
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
                          P
                              ? (0, i.jsx)(a.Text, {
                                    variant: 'text-md/normal',
                                    color: 'header-secondary',
                                    className: G.warningText,
                                    children: D.intl.format(D.t.Ze005O, { count: f.length })
                                })
                              : null
                      ]
                  }),
                  (0, i.jsx)(a.mzw, {
                      children: (0, i.jsxs)(a.hE2, {
                          direction: 'horizontal-reverse',
                          children: [
                              (0, i.jsx)(a.zxk, {
                                  variant: 'critical-primary',
                                  text: X,
                                  onClick: y
                              }),
                              (0, i.jsx)(a.zxk, {
                                  variant: 'secondary',
                                  text: D.intl.string(D.t['ETE/oK']),
                                  onClick: e
                              })
                          ]
                      })
                  })
              ]
          });
};
