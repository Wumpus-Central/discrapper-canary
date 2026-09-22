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
    u = e(477427),
    g = e(652215),
    N = e(790782),
    L = e(355097),
    c = e(375708);
function A(t, n) {
    switch (t.type) {
        case g.rbe.GUILD_VOICE:
            return null;
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
                ...(n ? [{ setting: g.orn.ONLY_MENTIONS, label: c.intl.string(c.t.JzbSEY), allUnreads: !0 }] : []),
                { setting: g.orn.ONLY_MENTIONS, label: c.intl.format(c.t.L2hmYy, {}) },
                { setting: g.orn.NO_MESSAGES, label: c.intl.string(c.t.CtVGyQ) },
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
                let e = g.orn.NULL;
                return (
                    null != t.parent_id && (e = d.Ay.getChannelMessageNotifications(n, t.parent_id)),
                    e !== g.orn.NULL ? e : d.Ay.getMessageNotifications(n)
                );
            },
            [n, t.parent_id],
        ),
        h = (0, r.bG)([d.Ay], () => d.Ay.getNewForumThreadsCreated(t)),
        b = (0, r.bG)([d.Ay], () => d.Ay.getChannelOverrides(n)[e], [n, e]),
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
        O = null == b ? g.orn.NULL : b.message_notifications,
        y =
            _ && E === g.orn.ONLY_MENTIONS && G === N.e.ALL_MESSAGES
                ? c.intl.string(c.t.JzbSEY)
                : (function (t) {
                      switch (t) {
                          case g.orn.ALL_MESSAGES:
                              return c.intl.string(c.t["n/bTaY"]);
                          case g.orn.ONLY_MENTIONS:
                              return c.intl.format(c.t.L2hmYy, {});
                          case g.orn.NO_MESSAGES:
                              return c.intl.string(c.t.CtVGyQ);
                          case g.orn.NULL:
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
                                    checked: h,
                                    action: () => s.A.setForumThreadsCreated(t, !h),
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
                                  subtext: r === g.orn.NULL ? y : void 0,
                                  action: () =>
                                      (function (t, i) {
                                          let r;
                                          if (null == n) return;
                                          if (!_)
                                              return void s.A.updateChannelOverrideSettings(
                                                  n,
                                                  e,
                                                  { message_notifications: t },
                                                  u.G_.notifications(t),
                                              );
                                          let l = d.Ay.getChannelIdFlags(n, e);
                                          if (t === g.orn.NULL) r = (0, o.PW)(l);
                                          else {
                                              let n =
                                                  i || t === g.orn.ALL_MESSAGES
                                                      ? L.vv.UNREADS_ALL_MESSAGES
                                                      : L.vv.UNREADS_ONLY_MENTIONS;
                                              r = (0, o.mD)(l, n);
                                          }
                                          s.A.updateChannelOverrideSettings(
                                              n,
                                              e,
                                              { message_notifications: t, flags: r },
                                              u.G_.notifications(t),
                                          );
                                      })(r, !0 === S),
                                  checked:
                                      !0 === t.allUnreads
                                          ? O === g.orn.ONLY_MENTIONS && f === N.e.ALL_MESSAGES
                                          : _ && t.setting === g.orn.ONLY_MENTIONS
                                            ? O === g.orn.ONLY_MENTIONS && f !== N.e.ALL_MESSAGES
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
        u = (0, r.bG)([d.Ay], () => d.Ay.getChannelOverrides(t.guild_id)[t.id], [t.guild_id, t.id]),
        L = null == u ? g.orn.NULL : u.message_notifications,
        E = e && s === g.orn.ONLY_MENTIONS && o === N.e.ALL_MESSAGES,
        h =
            L === g.orn.NULL && t.isGuildStageVoice()
                ? c.intl.format(c.t.L2hmYy, {})
                : E
                  ? c.intl.string(c.t.JzbSEY)
                  : A(t, !1)?.find((t) => {
                        let { setting: n } = t;
                        return n === s;
                    })?.label;
    return null != n
        ? (0, i.jsx)(l.Dr, { id: "channel-notifications", label: c.intl.string(c.t.h850Ss), subtext: h, children: n })
        : null;
}
