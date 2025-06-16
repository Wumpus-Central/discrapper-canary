n.d(e, { default: () => b }), n(388685);
var i = n(255367),
    r = n(73800),
    l = n(442837),
    a = n(82659),
    d = n(481060),
    s = n(933557),
    o = n(724723),
    c = n(156699),
    u = n(734893),
    p = n(693196),
    _ = n(66999),
    g = n(575830),
    m = n(554747),
    h = n(434404),
    E = n(144140),
    T = n(314897),
    I = n(430824),
    y = n(496675),
    f = n(981631),
    O = n(388032),
    C = n(356407);
let b = (t) => {
    let { channel: e, onClose: n, onConfirm: b, transitionState: U } = t,
        L = (0, s.ZP)(e, !0),
        D = e.id,
        v = e.isForumPost(),
        S = (0, l.e7)([I.Z], () => I.Z.getGuild(e.getGuildId())),
        G = (0, m.u1)(D),
        { isSubscriptionGated: j } = (0, _.Z)(e.id),
        x = (0, g.Z)(S, e),
        [z, A] = r.useState(),
        N = (0, l.e7)([T.default], () => e.isOwner(T.default.getId()), [e]),
        R = (0, o.q)('DeleteChannelConfirm'),
        B = (0, l.e7)([y.Z], () => y.Z.can(e.isThread() ? f.Plq.MANAGE_THREADS : f.Plq.MANAGE_CHANNELS, e), [e]),
        P = (0, l.e7)(
            [E.Z],
            () => {
                var t;
                return null != (t = E.Z.getCount(e.id)) ? t : 0;
            },
            [e.id]
        ),
        w = v && (B || (N && P < 1)),
        H = G.length > 0 && (e.type === f.d4z.GUILD_VOICE || e.type === f.d4z.GUILD_STAGE_VOICE);
    if (
        (r.useEffect(() => {
            (async () => {
                if (!(await (0, c.C)(e.getGuildId(), D))) return A(u.j.DEFAULT);
                let t = await (0, p.T)(e.getGuildId(), D);
                if (null != t) return A(t);
            })();
        }, [e, D]),
        r.useEffect(() => {
            null != S && S.hasFeature(f.oNc.COMMUNITY) && (S.rulesChannelId === D ? A(u.j.RULES) : S.publicUpdatesChannelId === D && A(u.j.UPDATES));
        }, [S, D]),
        null == S)
    )
        return null;
    if (null != z) {
        let t,
            e = async () => {
                await h.Z.open(S.id, f.pNK.ONBOARDING), await n();
            },
            r = async () => {
                await h.Z.open(S.id, f.pNK.COMMUNITY), await n();
            };
        switch (z) {
            case u.j.DEFAULT:
                t = O.intl.format(O.t.iWlB6u, { onClick: e });
                break;
            case u.j.TODO:
                t = O.intl.format(O.t['/rjozM'], { onClick: e });
                break;
            case u.j.RESOURCE:
                t = O.intl.format(O.t.Nf5pt7, { onClick: e });
                break;
            case u.j.RULES:
                t = O.intl.format(O.t['kB1f+/'], {
                    reason: O.intl.string(O.t.yjrZPj),
                    onClick: r
                });
                break;
            case u.j.UPDATES:
                t = O.intl.format(O.t['kB1f+/'], {
                    reason: O.intl.string(O.t['1B1/ND']),
                    onClick: r
                });
        }
        return R
            ? (0, i.jsx)(a.u, {
                  title: O.intl.string(O.t['TY/V+P']),
                  onClose: n,
                  headerBody: t,
                  transitionState: U,
                  actions: [
                      {
                          text: O.intl.string(O.t.BddRzc),
                          onClick: n,
                          variant: 'primary'
                      }
                  ]
              })
            : (0, i.jsxs)(d.Y0X, {
                  transitionState: U,
                  'aria-label': O.intl.string(O.t['TY/V+P']),
                  parentComponent: 'DeleteChannelConfirm',
                  children: [
                      (0, i.jsx)(d.xBx, {
                          separator: !1,
                          children: (0, i.jsx)(d.X6q, {
                              variant: 'heading-lg/semibold',
                              children: O.intl.string(O.t['TY/V+P'])
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
                              onClick: n,
                              children: O.intl.string(O.t.BddRzc)
                          })
                      })
                  ]
              });
    }
    let { deleteText: M, deleteBody: k } =
        e.type === f.d4z.GUILD_CATEGORY
            ? {
                  deleteText: O.intl.string(O.t.ifbXnJ),
                  deleteBody: O.intl.format(O.t.a6Gz9P, { channelName: L })
              }
            : e.isForumPost()
              ? {
                    deleteText: w ? O.intl.string(O.t.nEOg1N) : O.intl.string(O.t.xwMqDw),
                    deleteBody: w && N && !B ? O.intl.format(O.t['6/pY29'], { postName: L }) : w ? O.intl.format(O.t.su3voK, { postName: L }) : O.intl.string(O.t.RUHcys)
                }
              : e.isThread()
                ? {
                      deleteText: O.intl.string(O.t.H7vTe3),
                      deleteBody: O.intl.format(O.t.a6Gz9P, { channelName: L })
                  }
                : j && x > 0
                  ? {
                        deleteText: O.intl.string(O.t['8D8Rsb']),
                        deleteBody: O.intl.format(O.t['+qkiT0'], {
                            channelName: L,
                            numGuildRoleSubscriptionMembers: x
                        })
                    }
                  : {
                        deleteText: O.intl.string(O.t['8D8Rsb']),
                        deleteBody: O.intl.format(O.t.a6Gz9P, { channelName: L })
                    };
    return R
        ? (0, i.jsx)(a.u, {
              size: 'sm',
              onClose: n,
              transitionState: U,
              title: M,
              headerBody: k,
              actions: [
                  {
                      text: O.intl.string(O.t['ETE/oK']),
                      onClick: n,
                      variant: 'secondary'
                  },
                  {
                      text: M,
                      onClick: b,
                      variant: 'destructive-primary'
                  }
              ],
              children: H
                  ? (0, i.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: O.intl.format(O.t.Ze005O, { count: G.length })
                    })
                  : null
          })
        : (0, i.jsxs)(d.Y0X, {
              transitionState: U,
              'aria-label': M,
              parentComponent: 'DeleteChannelConfirm',
              children: [
                  (0, i.jsx)(d.xBx, {
                      separator: !1,
                      children: (0, i.jsx)(d.X6q, {
                          variant: 'heading-lg/semibold',
                          children: M
                      })
                  }),
                  (0, i.jsxs)(d.hzk, {
                      className: C.modalContent,
                      children: [
                          (0, i.jsx)(d.Text, {
                              variant: 'text-md/normal',
                              color: 'header-primary',
                              children: k
                          }),
                          H
                              ? (0, i.jsx)(d.Text, {
                                    variant: 'text-md/normal',
                                    color: 'header-secondary',
                                    className: C.warningText,
                                    children: O.intl.format(O.t.Ze005O, { count: G.length })
                                })
                              : null
                      ]
                  }),
                  (0, i.jsxs)(d.mzw, {
                      children: [
                          (0, i.jsx)(d.zxk, {
                              onClick: b,
                              color: d.zxk.Colors.RED,
                              children: M
                          }),
                          (0, i.jsx)(d.zxk, {
                              onClick: n,
                              look: d.zxk.Looks.LINK,
                              color: d.zxk.Colors.PRIMARY,
                              children: O.intl.string(O.t['ETE/oK'])
                          })
                      ]
                  })
              ]
          });
};
