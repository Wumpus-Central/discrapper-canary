"use strict";
n.d(t, { A: () => p, b: () => m });
var i = n(627968);
n(64700);
var r = n(17928),
    a = n(477782),
    s = n(832712),
    l = n(543465),
    o = n(477427),
    d = n(652215),
    c = n(985018);
function u(e) {
    switch (e.type) {
        case d.rbe.GUILD_VOICE:
            return null;
        case d.rbe.GUILD_STAGE_VOICE:
            return [
                {
                    setting: d.orn.NULL,
                    label: null != e.parent_id ? c.intl.string(c.t.wlrV1c) : c.intl.string(c.t["1Wn2M4"]),
                },
                { setting: d.orn.ONLY_MENTIONS, label: c.intl.string(c.t["BENn/6"]) },
                { setting: d.orn.NO_MESSAGES, label: c.intl.string(c.t.CtVGyQ) },
            ];
        default:
            return [
                {
                    setting: d.orn.NULL,
                    label: null != e.parent_id ? c.intl.string(c.t.wlrV1c) : c.intl.string(c.t["1Wn2M4"]),
                },
                { setting: d.orn.ALL_MESSAGES, label: c.intl.string(c.t["n/bTaY"]) },
                { setting: d.orn.ONLY_MENTIONS, label: c.intl.format(c.t.L2hmYy, {}) },
                { setting: d.orn.NO_MESSAGES, label: c.intl.string(c.t.CtVGyQ) },
            ];
    }
}
function m(e) {
    let t = e.getGuildId(),
        n = e.id,
        m = (0, r.bG)([l.Ay], () => {
            let n = d.orn.NULL;
            return (
                null != e.parent_id && (n = l.Ay.getChannelMessageNotifications(t, e.parent_id)),
                n !== d.orn.NULL ? n : l.Ay.getMessageNotifications(t)
            );
        }, [t, e.parent_id]),
        p = (0, r.bG)([l.Ay], () => l.Ay.getNewForumThreadsCreated(e)),
        _ = (0, r.bG)([l.Ay], () => l.Ay.getChannelOverrides(t)[n], [t, n]),
        h = null == _ ? d.orn.NULL : _.message_notifications,
        g = u(e);
    return null == g
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  e.isForumLikeChannel()
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(a.sL, {
                                    id: "new-forum-threads-created",
                                    label: c.intl.string(c.t.Rkgjph),
                                    checked: p,
                                    action: () => s.A.setForumThreadsCreated(e, !p),
                                }),
                                (0, i.jsx)(a.bX, {}),
                            ],
                        })
                      : null,
                  g.map((e) => {
                      let { setting: r, label: l } = e;
                      return (
                          null != l &&
                          (0, i.jsx)(
                              a.iD,
                              {
                                  group: "channel-notifications",
                                  id: `${r}`,
                                  label: l,
                                  subtext:
                                      r === d.orn.NULL
                                          ? (function (e) {
                                                switch (e) {
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
                                            })(m)
                                          : void 0,
                                  action: () => {
                                      null != t &&
                                          s.A.updateChannelOverrideSettings(
                                              t,
                                              n,
                                              { message_notifications: r },
                                              o.G_.notifications(r),
                                          );
                                  },
                                  checked: r === h,
                              },
                              r,
                          )
                      );
                  }),
              ],
          });
}
function p(e) {
    let t = m(e),
        n = (0, r.bG)([l.Ay], () => l.Ay.resolvedMessageNotifications(e), [e]),
        s = (0, r.bG)([l.Ay], () => l.Ay.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
        o =
            (null == s ? d.orn.NULL : s.message_notifications) === d.orn.NULL && e.isGuildStageVoice()
                ? c.intl.format(c.t.L2hmYy, {})
                : u(e)?.find((e) => {
                      let { setting: t } = e;
                      return t === n;
                  })?.label;
    return null != t
        ? (0, i.jsx)(a.Dr, { id: "channel-notifications", label: c.intl.string(c.t.h850Ss), subtext: o, children: t })
        : null;
}
