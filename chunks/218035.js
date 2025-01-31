e.d(i, {
    Z: () => u,
    c: () => _
});
var n = e(200651);
e(192379);
var s = e(442837),
    l = e(481060),
    a = e(87051),
    r = e(729052),
    d = e(9156),
    g = e(621600),
    c = e(981631),
    o = e(388032);
function S(t) {
    let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (t.type) {
        case c.d4z.GUILD_VOICE:
            return i
                ? [
                      {
                          setting: c.bL.NULL,
                          label: null != t.parent_id ? o.intl.string(o.t.wlrV1d) : o.intl.string(o.t['1Wn2Mz'])
                      },
                      {
                          setting: c.bL.ALL_MESSAGES,
                          label: o.intl.string(o.t['9sGJkp'])
                      },
                      {
                          setting: c.bL.ONLY_MENTIONS,
                          label: o.intl.format(o.t.cpcXvb, {})
                      },
                      {
                          setting: c.bL.NO_MESSAGES,
                          label: o.intl.string(o.t.CtVGyc)
                      }
                  ]
                : null;
        case c.d4z.GUILD_STAGE_VOICE:
            return [
                {
                    setting: c.bL.NULL,
                    label: null != t.parent_id ? o.intl.string(o.t.wlrV1d) : o.intl.string(o.t['1Wn2Mz'])
                },
                {
                    setting: c.bL.ONLY_MENTIONS,
                    label: o.intl.string(o.t['BENn//'])
                },
                {
                    setting: c.bL.NO_MESSAGES,
                    label: o.intl.string(o.t.CtVGyc)
                }
            ];
        default:
            return [
                {
                    setting: c.bL.NULL,
                    label: null != t.parent_id ? o.intl.string(o.t.wlrV1d) : o.intl.string(o.t['1Wn2Mz'])
                },
                {
                    setting: c.bL.ALL_MESSAGES,
                    label: o.intl.string(o.t['n/bTaW'])
                },
                {
                    setting: c.bL.ONLY_MENTIONS,
                    label: o.intl.format(o.t.L2hmY2, {})
                },
                {
                    setting: c.bL.NO_MESSAGES,
                    label: o.intl.string(o.t.CtVGyc)
                }
            ];
    }
}
function _(t) {
    let i = t.getGuildId(),
        e = t.id,
        _ = (0, s.e7)(
            [d.ZP],
            () => {
                let e = c.bL.NULL;
                return null != t.parent_id && (e = d.ZP.getChannelMessageNotifications(i, t.parent_id)), e !== c.bL.NULL ? e : d.ZP.getMessageNotifications(i);
            },
            [i, t.parent_id]
        ),
        u = (0, s.e7)([d.ZP], () => d.ZP.getNewForumThreadsCreated(t)),
        L = (0, s.e7)([d.ZP], () => d.ZP.getChannelOverrides(i)[e], [i, e]),
        h = null == L ? c.bL.NULL : L.message_notifications,
        N = (0, r.p2)(t),
        E = S(t, N);
    return null == E
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  t.isForumLikeChannel()
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(l.S89, {
                                    id: 'new-forum-threads-created',
                                    label: o.intl.string(o.t.Rkgjpq),
                                    checked: u,
                                    action: () => a.Z.setForumThreadsCreated(t, !u)
                                }),
                                (0, n.jsx)(l.Clw, {})
                            ]
                        })
                      : null,
                  E.map((s) => {
                      let { setting: r, label: d } = s;
                      return (0, n.jsx)(
                          l.k5B,
                          {
                              group: 'channel-notifications',
                              id: ''.concat(r),
                              label: d,
                              subtext:
                                  r === c.bL.NULL
                                      ? (function (t, i) {
                                            let e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                            switch (t) {
                                                case c.bL.ALL_MESSAGES:
                                                    return i.type === c.d4z.GUILD_VOICE && e ? o.intl.string(o.t['9sGJkp']) : o.intl.string(o.t['n/bTaW']);
                                                case c.bL.ONLY_MENTIONS:
                                                    return o.intl.format(o.t.L2hmY2, {});
                                                case c.bL.NO_MESSAGES:
                                                    return o.intl.string(o.t.CtVGyc);
                                                case c.bL.NULL:
                                                default:
                                                    return;
                                            }
                                        })(_, t, N)
                                      : void 0,
                              action: () => {
                                  null != i && a.Z.updateChannelOverrideSettings(i, e, { message_notifications: r }, g.UE.notifications(r));
                              },
                              checked: r === h
                          },
                          r
                      );
                  })
              ]
          });
}
function u(t) {
    var i, e;
    let a = _(t),
        g = (0, s.e7)([d.ZP], () => d.ZP.resolvedMessageNotifications(t), [t]),
        u = (0, s.e7)([d.ZP], () => d.ZP.getChannelOverrides(t.guild_id)[t.id], [t.guild_id, t.id]),
        L = null == u ? c.bL.NULL : u.message_notifications,
        h = (0, r.p2)(t),
        N =
            L === c.bL.NULL && t.isGuildStageVoice()
                ? o.intl.format(o.t.L2hmY2, {})
                : null === (e = S(t, h)) || void 0 === e
                  ? void 0
                  : null ===
                          (i = e.find((t) => {
                              let { setting: i } = t;
                              return i === g;
                          })) || void 0 === i
                    ? void 0
                    : i.label;
    return null != a
        ? (0, n.jsx)(l.sNh, {
              id: 'channel-notifications',
              label: o.intl.string(o.t.h850Sk),
              subtext: N,
              children: a
          })
        : null;
}
