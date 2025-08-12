n.d(e, { default: () => w }), n(388685);
var i = n(255367),
    l = n(73800),
    r = n(442837),
    a = n(82659),
    s = n(481060),
    o = n(933557),
    d = n(724723),
    c = n(156699),
    u = n(734893),
    f = n(693196),
    m = n(66999),
    x = n(575830),
    h = n(554747),
    C = n(434404),
    g = n(144140),
    T = n(314897),
    p = n(430824),
    j = n(496675),
    k = n(981631),
    E = n(388032),
    v = n(598225);
let w = (t) => {
    let { channel: e, onClose: n, onConfirm: w, transitionState: y } = t,
        O = (0, o.ZP)(e, !0),
        Z = e.id,
        b = e.isForumPost(),
        N = (0, r.e7)([p.Z], () => p.Z.getGuild(e.getGuildId())),
        z = (0, h.u1)(Z),
        { isSubscriptionGated: D } = (0, m.Z)(e.id),
        P = (0, x.Z)(N, e),
        [S, I] = l.useState(),
        A = (0, r.e7)([T.default], () => e.isOwner(T.default.getId()), [e]),
        G = (0, d.q)("DeleteChannelConfirm"),
        B = (0, r.e7)([j.Z], () => j.Z.can(e.isThread() ? k.Plq.MANAGE_THREADS : k.Plq.MANAGE_CHANNELS, e), [e]),
        R = (0, r.e7)([g.Z], () => {
            var t;
            return null != (t = g.Z.getCount(e.id)) ? t : 0;
        }, [e.id]),
        U = b && (B || (A && R < 1)),
        M = z.length > 0 && (e.type === k.d4z.GUILD_VOICE || e.type === k.d4z.GUILD_STAGE_VOICE);
    if (
        (l.useEffect(() => {
            (async () => {
                if (!(await (0, c.C)(e.getGuildId(), Z))) return I(u.j.DEFAULT);
                let t = await (0, f.T)(e.getGuildId(), Z);
                if (null != t) return I(t);
            })();
        }, [e, Z]),
        l.useEffect(() => {
            null != N &&
                N.features.has(k.oNc.COMMUNITY) &&
                (N.rulesChannelId === Z ? I(u.j.RULES) : N.publicUpdatesChannelId === Z && I(u.j.UPDATES));
        }, [N, Z]),
        null == N)
    )
        return null;
    if (null != S) {
        let t,
            e = async () => {
                await C.Z.open(N.id, k.pNK.ONBOARDING), await n();
            },
            l = async () => {
                await C.Z.open(N.id, k.pNK.COMMUNITY), await n();
            };
        switch (S) {
            case u.j.DEFAULT:
                t = E.intl.format(E.t.iWlB6u, { onClick: e });
                break;
            case u.j.TODO:
                t = E.intl.format(E.t["/rjozM"], { onClick: e });
                break;
            case u.j.RESOURCE:
                t = E.intl.format(E.t.Nf5pt7, { onClick: e });
                break;
            case u.j.RULES:
                t = E.intl.format(E.t["kB1f+/"], {
                    reason: E.intl.string(E.t.yjrZPj),
                    onClick: l,
                });
                break;
            case u.j.UPDATES:
                t = E.intl.format(E.t["kB1f+/"], {
                    reason: E.intl.string(E.t["1B1/ND"]),
                    onClick: l,
                });
        }
        return G
            ? (0, i.jsx)(a.Modal, {
                  title: E.intl.string(E.t["TY/V+P"]),
                  onClose: n,
                  subtitle: t,
                  transitionState: y,
                  actions: [
                      {
                          text: E.intl.string(E.t.BddRzc),
                          onClick: n,
                          variant: "primary",
                      },
                  ],
              })
            : (0, i.jsxs)(s.Y0X, {
                  transitionState: y,
                  "aria-label": E.intl.string(E.t["TY/V+P"]),
                  parentComponent: "DeleteChannelConfirm",
                  children: [
                      (0, i.jsx)(s.xBx, {
                          separator: !1,
                          children: (0, i.jsx)(s.X6q, {
                              variant: "heading-lg/semibold",
                              children: E.intl.string(E.t["TY/V+P"]),
                          }),
                      }),
                      (0, i.jsx)(s.hzk, {
                          children: (0, i.jsx)(s.Text, {
                              variant: "text-md/normal",
                              children: t,
                          }),
                      }),
                      (0, i.jsx)(s.mzw, {
                          children: (0, i.jsx)(s.zxk, {
                              variant: "primary",
                              text: E.intl.string(E.t.BddRzc),
                              onClick: n,
                          }),
                      }),
                  ],
              });
    }
    let { deleteText: _, deleteBody: L } =
        e.type === k.d4z.GUILD_CATEGORY
            ? {
                  deleteText: E.intl.string(E.t.ifbXnJ),
                  deleteBody: E.intl.format(E.t.a6Gz9P, { channelName: O }),
              }
            : e.isForumPost()
              ? {
                    deleteText: U ? E.intl.string(E.t.nEOg1N) : E.intl.string(E.t.xwMqDw),
                    deleteBody:
                        U && A && !B
                            ? E.intl.format(E.t["6/pY29"], { postName: O })
                            : U
                              ? E.intl.format(E.t.su3voK, { postName: O })
                              : E.intl.string(E.t.RUHcys),
                }
              : e.isThread()
                ? {
                      deleteText: E.intl.string(E.t.H7vTe3),
                      deleteBody: E.intl.format(E.t.a6Gz9P, { channelName: O }),
                  }
                : D && P > 0
                  ? {
                        deleteText: E.intl.string(E.t["8D8Rsb"]),
                        deleteBody: E.intl.format(E.t["+qkiT0"], {
                            channelName: O,
                            numGuildRoleSubscriptionMembers: P,
                        }),
                    }
                  : {
                        deleteText: E.intl.string(E.t["8D8Rsb"]),
                        deleteBody: E.intl.format(E.t.a6Gz9P, { channelName: O }),
                    };
    return G
        ? (0, i.jsx)(a.Modal, {
              size: "sm",
              onClose: n,
              transitionState: y,
              title: _,
              subtitle: L,
              actions: [
                  {
                      text: E.intl.string(E.t["ETE/oK"]),
                      onClick: n,
                      variant: "secondary",
                  },
                  {
                      text: _,
                      onClick: w,
                      variant: "critical-primary",
                  },
              ],
              children: M
                  ? (0, i.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: E.intl.format(E.t.Ze005O, { count: z.length }),
                    })
                  : null,
          })
        : (0, i.jsxs)(s.Y0X, {
              transitionState: y,
              "aria-label": _,
              parentComponent: "DeleteChannelConfirm",
              children: [
                  (0, i.jsx)(s.xBx, {
                      separator: !1,
                      children: (0, i.jsx)(s.X6q, {
                          variant: "heading-lg/semibold",
                          children: _,
                      }),
                  }),
                  (0, i.jsxs)(s.hzk, {
                      className: v.modalContent,
                      children: [
                          (0, i.jsx)(s.Text, {
                              variant: "text-md/normal",
                              color: "header-primary",
                              children: L,
                          }),
                          M
                              ? (0, i.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    color: "header-secondary",
                                    className: v.warningText,
                                    children: E.intl.format(E.t.Ze005O, { count: z.length }),
                                })
                              : null,
                      ],
                  }),
                  (0, i.jsx)(s.mzw, {
                      children: (0, i.jsxs)(s.hE2, {
                          direction: "horizontal-reverse",
                          children: [
                              (0, i.jsx)(s.zxk, {
                                  variant: "critical-primary",
                                  text: _,
                                  onClick: w,
                              }),
                              (0, i.jsx)(s.zxk, {
                                  variant: "secondary",
                                  text: E.intl.string(E.t["ETE/oK"]),
                                  onClick: n,
                              }),
                          ],
                      }),
                  }),
              ],
          });
};
