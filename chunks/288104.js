e.d(n, { A: () => L, b: () => g });
var i = e(627968);
e(64700);
var r = e(17928),
    l = e(477782),
    s = e(832712),
    a = e(543465),
    o = e(477427),
    u = e(652215),
    d = e(985018);
function c(t) {
    switch (t.type) {
        case u.rbe.GUILD_VOICE:
            return null;
        case u.rbe.GUILD_STAGE_VOICE:
            return [
                {
                    setting: u.orn.NULL,
                    label: null != t.parent_id ? d.intl.string(d.t.wlrV1c) : d.intl.string(d.t["1Wn2M4"]),
                },
                { setting: u.orn.ONLY_MENTIONS, label: d.intl.string(d.t["BENn/6"]) },
                { setting: u.orn.NO_MESSAGES, label: d.intl.string(d.t.CtVGyQ) },
            ];
        default:
            return [
                {
                    setting: u.orn.NULL,
                    label: null != t.parent_id ? d.intl.string(d.t.wlrV1c) : d.intl.string(d.t["1Wn2M4"]),
                },
                { setting: u.orn.ALL_MESSAGES, label: d.intl.string(d.t["n/bTaY"]) },
                { setting: u.orn.ONLY_MENTIONS, label: d.intl.format(d.t.L2hmYy, {}) },
                { setting: u.orn.NO_MESSAGES, label: d.intl.string(d.t.CtVGyQ) },
            ];
    }
}
function g(t) {
    let n = t.getGuildId(),
        e = t.id,
        g = (0, r.bG)([a.Ay], () => {
            let e = u.orn.NULL;
            return (
                null != t.parent_id && (e = a.Ay.getChannelMessageNotifications(n, t.parent_id)),
                e !== u.orn.NULL ? e : a.Ay.getMessageNotifications(n)
            );
        }, [n, t.parent_id]),
        L = (0, r.bG)([a.Ay], () => a.Ay.getNewForumThreadsCreated(t)),
        h = (0, r.bG)([a.Ay], () => a.Ay.getChannelOverrides(n)[e], [n, e]),
        b = null == h ? u.orn.NULL : h.message_notifications,
        N = c(t);
    return null == N
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  t.isForumLikeChannel()
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.sL, {
                                    id: "new-forum-threads-created",
                                    label: d.intl.string(d.t.Rkgjph),
                                    checked: L,
                                    action: () => s.A.setForumThreadsCreated(t, !L),
                                }),
                                (0, i.jsx)(l.bX, {}),
                            ],
                        })
                      : null,
                  N.map((t) => {
                      let { setting: r, label: a } = t;
                      return (
                          null != a &&
                          (0, i.jsx)(
                              l.iD,
                              {
                                  group: "channel-notifications",
                                  id: `${r}`,
                                  label: a,
                                  subtext:
                                      r === u.orn.NULL
                                          ? (function (t) {
                                                switch (t) {
                                                    case u.orn.ALL_MESSAGES:
                                                        return d.intl.string(d.t["n/bTaY"]);
                                                    case u.orn.ONLY_MENTIONS:
                                                        return d.intl.format(d.t.L2hmYy, {});
                                                    case u.orn.NO_MESSAGES:
                                                        return d.intl.string(d.t.CtVGyQ);
                                                    case u.orn.NULL:
                                                    default:
                                                        return;
                                                }
                                            })(g)
                                          : void 0,
                                  action: () => {
                                      null != n &&
                                          s.A.updateChannelOverrideSettings(
                                              n,
                                              e,
                                              { message_notifications: r },
                                              o.G_.notifications(r),
                                          );
                                  },
                                  checked: r === b,
                              },
                              r,
                          )
                      );
                  }),
              ],
          });
}
function L(t) {
    let n = g(t),
        e = (0, r.bG)([a.Ay], () => a.Ay.resolvedMessageNotifications(t), [t]),
        s = (0, r.bG)([a.Ay], () => a.Ay.getChannelOverrides(t.guild_id)[t.id], [t.guild_id, t.id]),
        o =
            (null == s ? u.orn.NULL : s.message_notifications) === u.orn.NULL && t.isGuildStageVoice()
                ? d.intl.format(d.t.L2hmYy, {})
                : c(t)?.find((t) => {
                      let { setting: n } = t;
                      return n === e;
                  })?.label;
    return null != n
        ? (0, i.jsx)(l.Dr, { id: "channel-notifications", label: d.intl.string(d.t.h850Ss), subtext: o, children: n })
        : null;
}
