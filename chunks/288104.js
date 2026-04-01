e.d(n, { A: () => c, b: () => S });
var i = e(627968);
e(64700);
var r = e(311907),
    s = e(397927),
    l = e(832712),
    a = e(543465),
    o = e(477427),
    d = e(652215),
    g = e(985018);
function u(t) {
    switch (t.type) {
        case d.rbe.GUILD_VOICE:
            return null;
        case d.rbe.GUILD_STAGE_VOICE:
            return [
                {
                    setting: d.orn.NULL,
                    label: null != t.parent_id ? g.intl.string(g.t.wlrV1c) : g.intl.string(g.t["1Wn2M4"]),
                },
                { setting: d.orn.ONLY_MENTIONS, label: g.intl.string(g.t["BENn/6"]) },
                { setting: d.orn.NO_MESSAGES, label: g.intl.string(g.t.CtVGyQ) },
            ];
        default:
            return [
                {
                    setting: d.orn.NULL,
                    label: null != t.parent_id ? g.intl.string(g.t.wlrV1c) : g.intl.string(g.t["1Wn2M4"]),
                },
                { setting: d.orn.ALL_MESSAGES, label: g.intl.string(g.t["n/bTaY"]) },
                { setting: d.orn.ONLY_MENTIONS, label: g.intl.format(g.t.L2hmYy, {}) },
                { setting: d.orn.NO_MESSAGES, label: g.intl.string(g.t.CtVGyQ) },
            ];
    }
}
function S(t) {
    let n = t.getGuildId(),
        e = t.id,
        S = (0, r.bG)([a.Ay], () => {
            let e = d.orn.NULL;
            return (
                null != t.parent_id && (e = a.Ay.getChannelMessageNotifications(n, t.parent_id)),
                e !== d.orn.NULL ? e : a.Ay.getMessageNotifications(n)
            );
        }, [n, t.parent_id]),
        c = (0, r.bG)([a.Ay], () => a.Ay.getNewForumThreadsCreated(t)),
        _ = (0, r.bG)([a.Ay], () => a.Ay.getChannelOverrides(n)[e], [n, e]),
        A = null == _ ? d.orn.NULL : _.message_notifications,
        N = u(t);
    return null == N
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  t.isForumLikeChannel()
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(s.sLh, {
                                    id: "new-forum-threads-created",
                                    label: g.intl.string(g.t.Rkgjph),
                                    checked: c,
                                    action: () => l.A.setForumThreadsCreated(t, !c),
                                }),
                                (0, i.jsx)(s.bXX, {}),
                            ],
                        })
                      : null,
                  N.map((t) => {
                      let { setting: r, label: a } = t;
                      return (
                          null != a &&
                          (0, i.jsx)(
                              s.iDA,
                              {
                                  group: "channel-notifications",
                                  id: `${r}`,
                                  label: a,
                                  subtext:
                                      r === d.orn.NULL
                                          ? (function (t) {
                                                switch (t) {
                                                    case d.orn.ALL_MESSAGES:
                                                        return g.intl.string(g.t["n/bTaY"]);
                                                    case d.orn.ONLY_MENTIONS:
                                                        return g.intl.format(g.t.L2hmYy, {});
                                                    case d.orn.NO_MESSAGES:
                                                        return g.intl.string(g.t.CtVGyQ);
                                                    case d.orn.NULL:
                                                    default:
                                                        return;
                                                }
                                            })(S)
                                          : void 0,
                                  action: () => {
                                      null != n &&
                                          l.A.updateChannelOverrideSettings(
                                              n,
                                              e,
                                              { message_notifications: r },
                                              o.G_.notifications(r),
                                          );
                                  },
                                  checked: r === A,
                              },
                              r,
                          )
                      );
                  }),
              ],
          });
}
function c(t) {
    let n = S(t),
        e = (0, r.bG)([a.Ay], () => a.Ay.resolvedMessageNotifications(t), [t]),
        l = (0, r.bG)([a.Ay], () => a.Ay.getChannelOverrides(t.guild_id)[t.id], [t.guild_id, t.id]),
        o =
            (null == l ? d.orn.NULL : l.message_notifications) === d.orn.NULL && t.isGuildStageVoice()
                ? g.intl.format(g.t.L2hmYy, {})
                : u(t)?.find((t) => {
                      let { setting: n } = t;
                      return n === e;
                  })?.label;
    return null != n
        ? (0, i.jsx)(s.Drp, { id: "channel-notifications", label: g.intl.string(g.t.h850Ss), subtext: o, children: n })
        : null;
}
