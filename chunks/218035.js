n.d(e, {
    Z: () => S,
    c: () => _
});
var i = n(255367);
n(73800);
var s = n(442837),
    l = n(481060),
    r = n(87051),
    a = n(729052),
    d = n(9156),
    g = n(621600),
    o = n(981631),
    c = n(388032);
function u(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (t.type) {
        case o.d4z.GUILD_VOICE:
            return e
                ? [
                      {
                          setting: o.bL.NULL,
                          label: null != t.parent_id ? c.intl.string(c.t.wlrV1d) : c.intl.string(c.t['1Wn2Mz'])
                      },
                      {
                          setting: o.bL.ALL_MESSAGES,
                          label: c.intl.string(c.t['9sGJkp'])
                      },
                      {
                          setting: o.bL.ONLY_MENTIONS,
                          label: c.intl.format(c.t.cpcXvb, {})
                      },
                      {
                          setting: o.bL.NO_MESSAGES,
                          label: c.intl.string(c.t.CtVGyc)
                      }
                  ]
                : null;
        case o.d4z.GUILD_STAGE_VOICE:
            return [
                {
                    setting: o.bL.NULL,
                    label: null != t.parent_id ? c.intl.string(c.t.wlrV1d) : c.intl.string(c.t['1Wn2Mz'])
                },
                {
                    setting: o.bL.ONLY_MENTIONS,
                    label: c.intl.string(c.t['BENn//'])
                },
                {
                    setting: o.bL.NO_MESSAGES,
                    label: c.intl.string(c.t.CtVGyc)
                }
            ];
        default:
            return [
                {
                    setting: o.bL.NULL,
                    label: null != t.parent_id ? c.intl.string(c.t.wlrV1d) : c.intl.string(c.t['1Wn2Mz'])
                },
                {
                    setting: o.bL.ALL_MESSAGES,
                    label: c.intl.string(c.t['n/bTaW'])
                },
                {
                    setting: o.bL.ONLY_MENTIONS,
                    label: c.intl.format(c.t.L2hmY2, {})
                },
                {
                    setting: o.bL.NO_MESSAGES,
                    label: c.intl.string(c.t.CtVGyc)
                }
            ];
    }
}
function _(t) {
    let e = t.getGuildId(),
        n = t.id,
        _ = (0, s.e7)(
            [d.ZP],
            () => {
                let n = o.bL.NULL;
                return null != t.parent_id && (n = d.ZP.getChannelMessageNotifications(e, t.parent_id)), n !== o.bL.NULL ? n : d.ZP.getMessageNotifications(e);
            },
            [e, t.parent_id]
        ),
        S = (0, s.e7)([d.ZP], () => d.ZP.getNewForumThreadsCreated(t)),
        L = (0, s.e7)([d.ZP], () => d.ZP.getChannelOverrides(e)[n], [e, n]),
        h = null == L ? o.bL.NULL : L.message_notifications,
        E = (0, a.p2)(t),
        N = u(t, E);
    return null == N
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  t.isForumLikeChannel()
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.S89, {
                                    id: 'new-forum-threads-created',
                                    label: c.intl.string(c.t.Rkgjpq),
                                    checked: S,
                                    action: () => r.Z.setForumThreadsCreated(t, !S)
                                }),
                                (0, i.jsx)(l.Clw, {})
                            ]
                        })
                      : null,
                  N.map((s) => {
                      let { setting: a, label: d } = s;
                      return (0, i.jsx)(
                          l.k5B,
                          {
                              group: 'channel-notifications',
                              id: ''.concat(a),
                              label: d,
                              subtext:
                                  a === o.bL.NULL
                                      ? (function (t, e) {
                                            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                            switch (t) {
                                                case o.bL.ALL_MESSAGES:
                                                    return e.type === o.d4z.GUILD_VOICE && n ? c.intl.string(c.t['9sGJkp']) : c.intl.string(c.t['n/bTaW']);
                                                case o.bL.ONLY_MENTIONS:
                                                    return c.intl.format(c.t.L2hmY2, {});
                                                case o.bL.NO_MESSAGES:
                                                    return c.intl.string(c.t.CtVGyc);
                                                case o.bL.NULL:
                                                default:
                                                    return;
                                            }
                                        })(_, t, E)
                                      : void 0,
                              action: () => {
                                  null != e && r.Z.updateChannelOverrideSettings(e, n, { message_notifications: a }, g.UE.notifications(a));
                              },
                              checked: a === h
                          },
                          a
                      );
                  })
              ]
          });
}
function S(t) {
    var e, n;
    let r = _(t),
        g = (0, s.e7)([d.ZP], () => d.ZP.resolvedMessageNotifications(t), [t]),
        S = (0, s.e7)([d.ZP], () => d.ZP.getChannelOverrides(t.guild_id)[t.id], [t.guild_id, t.id]),
        L = null == S ? o.bL.NULL : S.message_notifications,
        h = (0, a.p2)(t),
        E =
            L === o.bL.NULL && t.isGuildStageVoice()
                ? c.intl.format(c.t.L2hmY2, {})
                : null == (n = u(t, h)) ||
                    null ==
                        (e = n.find((t) => {
                            let { setting: e } = t;
                            return e === g;
                        }))
                  ? void 0
                  : e.label;
    return null != r
        ? (0, i.jsx)(l.sNh, {
              id: 'channel-notifications',
              label: c.intl.string(c.t.h850Sk),
              subtext: E,
              children: r
          })
        : null;
}
