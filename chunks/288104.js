i.d(t, { A: () => h, b: () => u });
var e = i(477900);
i(582128);
var r = i(17928),
    l = i(477782),
    s = i(832712),
    a = i(543465),
    o = i(477427),
    d = i(652215),
    c = i(375708);
function g(n) {
    switch (n.type) {
        case d.rbe.GUILD_VOICE:
            return null;
        case d.rbe.GUILD_STAGE_VOICE:
            return [
                {
                    setting: d.orn.NULL,
                    label: null != n.parent_id ? c.intl.string(c.t.wlrV1c) : c.intl.string(c.t["1Wn2M4"]),
                },
                { setting: d.orn.ONLY_MENTIONS, label: c.intl.string(c.t["BENn/6"]) },
                { setting: d.orn.NO_MESSAGES, label: c.intl.string(c.t.CtVGyQ) },
            ];
        default:
            return [
                {
                    setting: d.orn.NULL,
                    label: null != n.parent_id ? c.intl.string(c.t.wlrV1c) : c.intl.string(c.t["1Wn2M4"]),
                },
                { setting: d.orn.ALL_MESSAGES, label: c.intl.string(c.t["n/bTaY"]) },
                { setting: d.orn.ONLY_MENTIONS, label: c.intl.format(c.t.L2hmYy, {}) },
                { setting: d.orn.NO_MESSAGES, label: c.intl.string(c.t.CtVGyQ) },
            ];
    }
}
function u(n) {
    let t = n.getGuildId(),
        i = n.id,
        u = (0, r.bG)(
            [a.Ay],
            () => {
                let i = d.orn.NULL;
                return (
                    null != n.parent_id && (i = a.Ay.getChannelMessageNotifications(t, n.parent_id)),
                    i !== d.orn.NULL ? i : a.Ay.getMessageNotifications(t)
                );
            },
            [t, n.parent_id],
        ),
        h = (0, r.bG)([a.Ay], () => a.Ay.getNewForumThreadsCreated(n)),
        _ = (0, r.bG)([a.Ay], () => a.Ay.getChannelOverrides(t)[i], [t, i]),
        N = null == _ ? d.orn.NULL : _.message_notifications,
        b = g(n);
    return null == b
        ? null
        : (0, e.jsxs)(e.Fragment, {
              children: [
                  n.isForumLikeChannel()
                      ? (0, e.jsxs)(e.Fragment, {
                            children: [
                                (0, e.jsx)(l.sL, {
                                    id: "new-forum-threads-created",
                                    label: c.intl.string(c.t.Rkgjph),
                                    checked: h,
                                    action: () => s.A.setForumThreadsCreated(n, !h),
                                }),
                                (0, e.jsx)(l.bX, {}),
                            ],
                        })
                      : null,
                  b.map((n) => {
                      let { setting: r, label: a } = n;
                      return (
                          null != a &&
                          (0, e.jsx)(
                              l.iD,
                              {
                                  group: "channel-notifications",
                                  id: `${r}`,
                                  label: a,
                                  subtext:
                                      r === d.orn.NULL
                                          ? (function (n) {
                                                switch (n) {
                                                    case d.orn.ALL_MESSAGES:
                                                        return c.intl.string(c.t["n/bTaY"]);
                                                    case d.orn.ONLY_MENTIONS:
                                                        return c.intl.format(c.t.L2hmYy, {});
                                                    case d.orn.NO_MESSAGES:
                                                        return c.intl.string(c.t.CtVGyQ);
                                                    case d.orn.NULL:
                                                    default:
                                                        return;
                                                }
                                            })(u)
                                          : void 0,
                                  action: () => {
                                      null != t &&
                                          s.A.updateChannelOverrideSettings(
                                              t,
                                              i,
                                              { message_notifications: r },
                                              o.G_.notifications(r),
                                          );
                                  },
                                  checked: r === N,
                              },
                              r,
                          )
                      );
                  }),
              ],
          });
}
function h(n) {
    let t = u(n),
        i = (0, r.bG)([a.Ay], () => a.Ay.resolvedMessageNotifications(n), [n]),
        s = (0, r.bG)([a.Ay], () => a.Ay.getChannelOverrides(n.guild_id)[n.id], [n.guild_id, n.id]),
        o =
            (null == s ? d.orn.NULL : s.message_notifications) === d.orn.NULL && n.isGuildStageVoice()
                ? c.intl.format(c.t.L2hmYy, {})
                : g(n)?.find((n) => {
                      let { setting: t } = n;
                      return t === i;
                  })?.label;
    return null != t
        ? (0, e.jsx)(l.Dr, { id: "channel-notifications", label: c.intl.string(c.t.h850Ss), subtext: o, children: t })
        : null;
}
