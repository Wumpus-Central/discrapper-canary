e.d(i, {
    Z: () => S,
    c: () => _,
});
var n = e(54381);
e(473749);
var l = e(442837),
    s = e(481060),
    a = e(87051),
    r = e(729052),
    d = e(9156),
    o = e(621600),
    c = e(981631),
    u = e(388032);
function g(t) {
    let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (t.type) {
        case c.d4z.GUILD_VOICE:
            return i
                ? [
                      {
                          setting: c.bL.NULL,
                          label: null != t.parent_id ? u.intl.string(u.t.wlrV1c) : u.intl.string(u.t["1Wn2M4"]),
                      },
                      {
                          setting: c.bL.ALL_MESSAGES,
                          label: u.intl.string(u.t["9sGJkt"]),
                      },
                      {
                          setting: c.bL.ONLY_MENTIONS,
                          label: u.intl.format(u.t.cpcXvW, {}),
                      },
                      {
                          setting: c.bL.NO_MESSAGES,
                          label: u.intl.string(u.t.CtVGyQ),
                      },
                  ]
                : null;
        case c.d4z.GUILD_STAGE_VOICE:
            return [
                {
                    setting: c.bL.NULL,
                    label: null != t.parent_id ? u.intl.string(u.t.wlrV1c) : u.intl.string(u.t["1Wn2M4"]),
                },
                {
                    setting: c.bL.ONLY_MENTIONS,
                    label: u.intl.string(u.t["BENn/6"]),
                },
                {
                    setting: c.bL.NO_MESSAGES,
                    label: u.intl.string(u.t.CtVGyQ),
                },
            ];
        default:
            return [
                {
                    setting: c.bL.NULL,
                    label: null != t.parent_id ? u.intl.string(u.t.wlrV1c) : u.intl.string(u.t["1Wn2M4"]),
                },
                {
                    setting: c.bL.ALL_MESSAGES,
                    label: u.intl.string(u.t["n/bTaY"]),
                },
                {
                    setting: c.bL.ONLY_MENTIONS,
                    label: u.intl.format(u.t.L2hmYy, {}),
                },
                {
                    setting: c.bL.NO_MESSAGES,
                    label: u.intl.string(u.t.CtVGyQ),
                },
            ];
    }
}
function _(t) {
    let i = t.getGuildId(),
        e = t.id,
        _ = (0, l.e7)([d.ZP], () => {
            let e = c.bL.NULL;
            return (
                null != t.parent_id && (e = d.ZP.getChannelMessageNotifications(i, t.parent_id)),
                e !== c.bL.NULL ? e : d.ZP.getMessageNotifications(i)
            );
        }, [i, t.parent_id]),
        S = (0, l.e7)([d.ZP], () => d.ZP.getNewForumThreadsCreated(t)),
        L = (0, l.e7)([d.ZP], () => d.ZP.getChannelOverrides(i)[e], [i, e]),
        N = null == L ? c.bL.NULL : L.message_notifications,
        E = (0, r.p2)(t),
        f = g(t, E);
    return null == f
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  t.isForumLikeChannel()
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(s.S89, {
                                    id: "new-forum-threads-created",
                                    label: u.intl.string(u.t.Rkgjph),
                                    checked: S,
                                    action: () => a.Z.setForumThreadsCreated(t, !S),
                                }),
                                (0, n.jsx)(s.Clw, {}),
                            ],
                        })
                      : null,
                  f.map((l) => {
                      let { setting: r, label: d } = l;
                      return (0, n.jsx)(
                          s.k5B,
                          {
                              group: "channel-notifications",
                              id: "".concat(r),
                              label: d,
                              subtext:
                                  r === c.bL.NULL
                                      ? (function (t, i) {
                                            let e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                            switch (t) {
                                                case c.bL.ALL_MESSAGES:
                                                    return i.type === c.d4z.GUILD_VOICE && e
                                                        ? u.intl.string(u.t["9sGJkt"])
                                                        : u.intl.string(u.t["n/bTaY"]);
                                                case c.bL.ONLY_MENTIONS:
                                                    return u.intl.format(u.t.L2hmYy, {});
                                                case c.bL.NO_MESSAGES:
                                                    return u.intl.string(u.t.CtVGyQ);
                                                case c.bL.NULL:
                                                default:
                                                    return;
                                            }
                                        })(_, t, E)
                                      : void 0,
                              action: () => {
                                  null != i &&
                                      a.Z.updateChannelOverrideSettings(
                                          i,
                                          e,
                                          { message_notifications: r },
                                          o.UE.notifications(r),
                                      );
                              },
                              checked: r === N,
                          },
                          r,
                      );
                  }),
              ],
          });
}
function S(t) {
    var i, e;
    let a = _(t),
        o = (0, l.e7)([d.ZP], () => d.ZP.resolvedMessageNotifications(t), [t]),
        S = (0, l.e7)([d.ZP], () => d.ZP.getChannelOverrides(t.guild_id)[t.id], [t.guild_id, t.id]),
        L = null == S ? c.bL.NULL : S.message_notifications,
        N = (0, r.p2)(t),
        E =
            L === c.bL.NULL && t.isGuildStageVoice()
                ? u.intl.format(u.t.L2hmYy, {})
                : null == (e = g(t, N)) ||
                    null ==
                        (i = e.find((t) => {
                            let { setting: i } = t;
                            return i === o;
                        }))
                  ? void 0
                  : i.label;
    return null != a
        ? (0, n.jsx)(s.sNh, {
              id: "channel-notifications",
              label: u.intl.string(u.t.h850Ss),
              subtext: E,
              children: a,
          })
        : null;
}
