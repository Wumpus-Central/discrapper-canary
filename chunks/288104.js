e.d(n, { A: () => E, b: () => _ });
var i = e(477900);
e(582128);
var r = e(17928),
    l = e(477782),
    s = e(832712),
    a = e(769591),
    o = e(393432),
    S = e(95701),
    d = e(543465),
    g = e(477427),
    u = e(652215),
    N = e(790782),
    L = e(355097),
    c = e(375708);
function A(t, n) {
    switch (t.type) {
        case u.rbe.GUILD_VOICE:
            return null;
        case u.rbe.GUILD_STAGE_VOICE:
            return [
                {
                    setting: u.orn.NULL,
                    label: null != t.parent_id ? c.intl.string(c.t.wlrV1c) : c.intl.string(c.t["1Wn2M4"]),
                },
                { setting: u.orn.ONLY_MENTIONS, label: c.intl.string(c.t["BENn/6"]) },
                { setting: u.orn.NO_MESSAGES, label: c.intl.string(c.t.CtVGyQ) },
            ];
        default:
            return [
                {
                    setting: u.orn.NULL,
                    label: null != t.parent_id ? c.intl.string(c.t.wlrV1c) : c.intl.string(c.t["1Wn2M4"]),
                },
                { setting: u.orn.ALL_MESSAGES, label: c.intl.string(c.t["n/bTaY"]) },
                ...(n ? [{ setting: u.orn.ONLY_MENTIONS, label: c.intl.string(c.t.JzbSEY), allUnreads: !0 }] : []),
                { setting: u.orn.ONLY_MENTIONS, label: c.intl.format(c.t.L2hmYy, {}) },
                { setting: u.orn.NO_MESSAGES, label: c.intl.string(c.t.CtVGyQ) },
            ];
    }
}
function _(t) {
    let n = t.getGuildId(),
        e = t.id,
        _ = (0, a.os)("ChannelNotificationItems") && S.B4.has(t.type),
        E = (0, r.bG)(
            [d.Ay],
            () => {
                let e = u.orn.NULL;
                return (
                    null != t.parent_id && (e = d.Ay.getChannelMessageNotifications(n, t.parent_id)),
                    e !== u.orn.NULL ? e : d.Ay.getMessageNotifications(n)
                );
            },
            [n, t.parent_id],
        ),
        b = (0, r.bG)([d.Ay], () => d.Ay.getNewForumThreadsCreated(t)),
        h = (0, r.bG)([d.Ay], () => d.Ay.getChannelOverrides(n)[e], [n, e]),
        f = (0, r.bG)([d.Ay], () => d.Ay.resolveUnreadSetting(t), [t]),
        G = (0, r.bG)(
            [d.Ay],
            () => {
                if (null == n) return N.e.UNSET;
                if (null != t.parent_id) {
                    let e = d.Ay.getChannelUnreadSetting(n, t.parent_id);
                    if (e !== N.e.UNSET) return e;
                }
                return d.Ay.getGuildUnreadSetting(n);
            },
            [n, t.parent_id],
        ),
        O = null == h ? u.orn.NULL : h.message_notifications,
        y =
            _ && E === u.orn.ONLY_MENTIONS && G === N.e.ALL_MESSAGES
                ? c.intl.string(c.t.JzbSEY)
                : (function (t) {
                      switch (t) {
                          case u.orn.ALL_MESSAGES:
                              return c.intl.string(c.t["n/bTaY"]);
                          case u.orn.ONLY_MENTIONS:
                              return c.intl.format(c.t.L2hmYy, {});
                          case u.orn.NO_MESSAGES:
                              return c.intl.string(c.t.CtVGyQ);
                          case u.orn.NULL:
                          default:
                              return;
                      }
                  })(E),
        M = A(t, _);
    return null == M
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  t.isForumLikeChannel()
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.sL, {
                                    id: "new-forum-threads-created",
                                    label: c.intl.string(c.t.Rkgjph),
                                    checked: b,
                                    action: () => s.A.setForumThreadsCreated(t, !b),
                                }),
                                (0, i.jsx)(l.bX, {}),
                            ],
                        })
                      : null,
                  M.map((t) => {
                      let { setting: r, label: a, allUnreads: S } = t,
                          c = `${r}-${!0 === S}`;
                      return (
                          null != a &&
                          (0, i.jsx)(
                              l.iD,
                              {
                                  group: "channel-notifications",
                                  id: c,
                                  label: a,
                                  subtext: r === u.orn.NULL ? y : void 0,
                                  action: () =>
                                      (function (t, i) {
                                          let r;
                                          if (null == n) return;
                                          if (!_)
                                              return void s.A.updateChannelOverrideSettings({
                                                  guildId: n,
                                                  channelId: e,
                                                  settings: { message_notifications: t },
                                                  label: g.G_.notifications(t),
                                              });
                                          let l = d.Ay.getChannelIdFlags(n, e);
                                          if (t === u.orn.NULL) r = (0, o.PW)(l);
                                          else {
                                              let n =
                                                  i || t === u.orn.ALL_MESSAGES
                                                      ? L.vv.UNREADS_ALL_MESSAGES
                                                      : L.vv.UNREADS_ONLY_MENTIONS;
                                              r = (0, o.mD)(l, n);
                                          }
                                          s.A.updateChannelOverrideSettings({
                                              guildId: n,
                                              channelId: e,
                                              settings: { message_notifications: t, flags: r },
                                              label: g.G_.notifications(t),
                                          });
                                      })(r, !0 === S),
                                  checked:
                                      !0 === t.allUnreads
                                          ? O === u.orn.ONLY_MENTIONS && f === N.e.ALL_MESSAGES
                                          : _ && t.setting === u.orn.ONLY_MENTIONS
                                            ? O === u.orn.ONLY_MENTIONS && f !== N.e.ALL_MESSAGES
                                            : t.setting === O,
                              },
                              c,
                          )
                      );
                  }),
              ],
          });
}
function E(t) {
    let n = _(t),
        e = (0, a.os)("ChannelNotificationItems") && S.B4.has(t.type),
        s = (0, r.bG)([d.Ay], () => d.Ay.resolvedMessageNotifications(t), [t]),
        o = (0, r.bG)([d.Ay], () => d.Ay.resolveUnreadSetting(t), [t]),
        g = (0, r.bG)([d.Ay], () => d.Ay.getChannelOverrides(t.guild_id)[t.id], [t.guild_id, t.id]),
        L = null == g ? u.orn.NULL : g.message_notifications,
        E = e && s === u.orn.ONLY_MENTIONS && o === N.e.ALL_MESSAGES,
        b =
            L === u.orn.NULL && t.isGuildStageVoice()
                ? c.intl.format(c.t.L2hmYy, {})
                : E
                  ? c.intl.string(c.t.JzbSEY)
                  : A(t, !1)?.find((t) => {
                        let { setting: n } = t;
                        return n === s;
                    })?.label;
    return null != n
        ? (0, i.jsx)(l.Dr, { id: "channel-notifications", label: c.intl.string(c.t.h850Ss), subtext: b, children: n })
        : null;
}
