i.d(e, {
    Z: () => N,
    c: () => _
});
var n = i(200651);
i(192379);
var s = i(442837),
    a = i(481060),
    r = i(87051),
    l = i(729052),
    d = i(9156),
    g = i(621600),
    c = i(981631),
    o = i(388032);
function S(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (t.type) {
        case c.d4z.GUILD_VOICE:
            return e
                ? [
                      {
                          setting: c.bL.NULL,
                          label: null != t.parent_id ? o.NW.string(o.t.wlrV1d) : o.NW.string(o.t['1Wn2Mz'])
                      },
                      {
                          setting: c.bL.ALL_MESSAGES,
                          label: o.NW.string(o.t['9sGJkp'])
                      },
                      {
                          setting: c.bL.ONLY_MENTIONS,
                          label: o.NW.format(o.t.cpcXvb, {})
                      },
                      {
                          setting: c.bL.NO_MESSAGES,
                          label: o.NW.string(o.t.CtVGyc)
                      }
                  ]
                : null;
        case c.d4z.GUILD_STAGE_VOICE:
            return [
                {
                    setting: c.bL.NULL,
                    label: null != t.parent_id ? o.NW.string(o.t.wlrV1d) : o.NW.string(o.t['1Wn2Mz'])
                },
                {
                    setting: c.bL.ONLY_MENTIONS,
                    label: o.NW.string(o.t['BENn//'])
                },
                {
                    setting: c.bL.NO_MESSAGES,
                    label: o.NW.string(o.t.CtVGyc)
                }
            ];
        default:
            return [
                {
                    setting: c.bL.NULL,
                    label: null != t.parent_id ? o.NW.string(o.t.wlrV1d) : o.NW.string(o.t['1Wn2Mz'])
                },
                {
                    setting: c.bL.ALL_MESSAGES,
                    label: o.NW.string(o.t['n/bTaW'])
                },
                {
                    setting: c.bL.ONLY_MENTIONS,
                    label: o.NW.format(o.t.L2hmY2, {})
                },
                {
                    setting: c.bL.NO_MESSAGES,
                    label: o.NW.string(o.t.CtVGyc)
                }
            ];
    }
}
function _(t) {
    let e = t.getGuildId(),
        i = t.id,
        _ = (0, s.e7)(
            [d.ZP],
            () => {
                let i = c.bL.NULL;
                return null != t.parent_id && (i = d.ZP.getChannelMessageNotifications(e, t.parent_id)), i !== c.bL.NULL ? i : d.ZP.getMessageNotifications(e);
            },
            [e, t.parent_id]
        ),
        N = (0, s.e7)([d.ZP], () => d.ZP.getNewForumThreadsCreated(t)),
        u = (0, s.e7)([d.ZP], () => d.ZP.getChannelOverrides(e)[i], [e, i]),
        L = null == u ? c.bL.NULL : u.message_notifications,
        h = (0, l.p2)(t),
        E = S(t, h);
    return null == E
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  t.isForumLikeChannel()
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(a.S89, {
                                    id: 'new-forum-threads-created',
                                    label: o.NW.string(o.t.Rkgjpq),
                                    checked: N,
                                    action: () => r.Z.setForumThreadsCreated(t, !N)
                                }),
                                (0, n.jsx)(a.Clw, {})
                            ]
                        })
                      : null,
                  E.map((s) => {
                      let { setting: l, label: d } = s;
                      return (0, n.jsx)(
                          a.k5B,
                          {
                              group: 'channel-notifications',
                              id: ''.concat(l),
                              label: d,
                              subtext:
                                  l === c.bL.NULL
                                      ? (function (t, e) {
                                            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                            switch (t) {
                                                case c.bL.ALL_MESSAGES:
                                                    return e.type === c.d4z.GUILD_VOICE && i ? o.NW.string(o.t['9sGJkp']) : o.NW.string(o.t['n/bTaW']);
                                                case c.bL.ONLY_MENTIONS:
                                                    return o.NW.format(o.t.L2hmY2, {});
                                                case c.bL.NO_MESSAGES:
                                                    return o.NW.string(o.t.CtVGyc);
                                                case c.bL.NULL:
                                                default:
                                                    return;
                                            }
                                        })(_, t, h)
                                      : void 0,
                              action: () => {
                                  null != e && r.Z.updateChannelOverrideSettings(e, i, { message_notifications: l }, g.UE.notifications(l));
                              },
                              checked: l === L
                          },
                          l
                      );
                  })
              ]
          });
}
function N(t) {
    var e, i;
    let r = _(t),
        g = (0, s.e7)([d.ZP], () => d.ZP.resolvedMessageNotifications(t), [t]),
        N = (0, s.e7)([d.ZP], () => d.ZP.getChannelOverrides(t.guild_id)[t.id], [t.guild_id, t.id]),
        u = null == N ? c.bL.NULL : N.message_notifications,
        L = (0, l.p2)(t),
        h =
            u === c.bL.NULL && t.isGuildStageVoice()
                ? o.NW.format(o.t.L2hmY2, {})
                : null == (i = S(t, L)) ||
                    null ==
                        (e = i.find((t) => {
                            let { setting: e } = t;
                            return e === g;
                        }))
                  ? void 0
                  : e.label;
    return null != r
        ? (0, n.jsx)(a.sNh, {
              id: 'channel-notifications',
              label: o.NW.string(o.t.h850Sk),
              subtext: h,
              children: r
          })
        : null;
}
