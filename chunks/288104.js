e.d(i, { A: () => S, b: () => _ });
var n = e(627968);
e(64700);
var r = e(311907),
    l = e(397927),
    s = e(832712),
    a = e(718194),
    o = e(543465),
    d = e(477427),
    g = e(652215),
    c = e(985018);
function u(t) {
    let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (t.type) {
        case g.rbe.GUILD_VOICE:
            return i
                ? [
                      {
                          setting: g.orn.NULL,
                          label: null != t.parent_id ? c.intl.string(c.t.wlrV1c) : c.intl.string(c.t["1Wn2M4"]),
                      },
                      { setting: g.orn.ALL_MESSAGES, label: c.intl.string(c.t["9sGJkt"]) },
                      { setting: g.orn.ONLY_MENTIONS, label: c.intl.format(c.t.cpcXvW, {}) },
                      { setting: g.orn.NO_MESSAGES, label: c.intl.string(c.t.CtVGyQ) },
                  ]
                : null;
        case g.rbe.GUILD_STAGE_VOICE:
            return [
                {
                    setting: g.orn.NULL,
                    label: null != t.parent_id ? c.intl.string(c.t.wlrV1c) : c.intl.string(c.t["1Wn2M4"]),
                },
                { setting: g.orn.ONLY_MENTIONS, label: c.intl.string(c.t["BENn/6"]) },
                { setting: g.orn.NO_MESSAGES, label: c.intl.string(c.t.CtVGyQ) },
            ];
        default:
            return [
                {
                    setting: g.orn.NULL,
                    label: null != t.parent_id ? c.intl.string(c.t.wlrV1c) : c.intl.string(c.t["1Wn2M4"]),
                },
                { setting: g.orn.ALL_MESSAGES, label: c.intl.string(c.t["n/bTaY"]) },
                { setting: g.orn.ONLY_MENTIONS, label: c.intl.format(c.t.L2hmYy, {}) },
                { setting: g.orn.NO_MESSAGES, label: c.intl.string(c.t.CtVGyQ) },
            ];
    }
}
function _(t) {
    let i = t.getGuildId(),
        e = t.id,
        _ = (0, r.bG)([o.Ay], () => {
            let e = g.orn.NULL;
            return (
                null != t.parent_id && (e = o.Ay.getChannelMessageNotifications(i, t.parent_id)),
                e !== g.orn.NULL ? e : o.Ay.getMessageNotifications(i)
            );
        }, [i, t.parent_id]),
        S = (0, r.bG)([o.Ay], () => o.Ay.getNewForumThreadsCreated(t)),
        A = (0, r.bG)([o.Ay], () => o.Ay.getChannelOverrides(i)[e], [i, e]),
        N = null == A ? g.orn.NULL : A.message_notifications,
        E = (0, a.YK)(t),
        h = u(t, E);
    return null == h
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  t.isForumLikeChannel()
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(l.sLh, {
                                    id: "new-forum-threads-created",
                                    label: c.intl.string(c.t.Rkgjph),
                                    checked: S,
                                    action: () => s.A.setForumThreadsCreated(t, !S),
                                }),
                                (0, n.jsx)(l.bXX, {}),
                            ],
                        })
                      : null,
                  h.map((r) => {
                      let { setting: a, label: o } = r;
                      return (
                          null != o &&
                          (0, n.jsx)(
                              l.iDA,
                              {
                                  group: "channel-notifications",
                                  id: `${a}`,
                                  label: o,
                                  subtext:
                                      a === g.orn.NULL
                                          ? (function (t, i) {
                                                let e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                                switch (t) {
                                                    case g.orn.ALL_MESSAGES:
                                                        return i.type === g.rbe.GUILD_VOICE && e
                                                            ? c.intl.string(c.t["9sGJkt"])
                                                            : c.intl.string(c.t["n/bTaY"]);
                                                    case g.orn.ONLY_MENTIONS:
                                                        return c.intl.format(c.t.L2hmYy, {});
                                                    case g.orn.NO_MESSAGES:
                                                        return c.intl.string(c.t.CtVGyQ);
                                                    case g.orn.NULL:
                                                    default:
                                                        return;
                                                }
                                            })(_, t, E)
                                          : void 0,
                                  action: () => {
                                      null != i &&
                                          s.A.updateChannelOverrideSettings(
                                              i,
                                              e,
                                              { message_notifications: a },
                                              d.G_.notifications(a),
                                          );
                                  },
                                  checked: a === N,
                              },
                              a,
                          )
                      );
                  }),
              ],
          });
}
function S(t) {
    let i = _(t),
        e = (0, r.bG)([o.Ay], () => o.Ay.resolvedMessageNotifications(t), [t]),
        s = (0, r.bG)([o.Ay], () => o.Ay.getChannelOverrides(t.guild_id)[t.id], [t.guild_id, t.id]),
        d = null == s ? g.orn.NULL : s.message_notifications,
        S = (0, a.YK)(t),
        A =
            d === g.orn.NULL && t.isGuildStageVoice()
                ? c.intl.format(c.t.L2hmYy, {})
                : u(t, S)?.find((t) => {
                      let { setting: i } = t;
                      return i === e;
                  })?.label;
    return null != i
        ? (0, n.jsx)(l.Drp, { id: "channel-notifications", label: c.intl.string(c.t.h850Ss), subtext: A, children: i })
        : null;
}
