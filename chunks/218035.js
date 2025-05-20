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
    c = n(981631),
    o = n(388032);
function u(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (t.type) {
        case c.d4z.GUILD_VOICE:
            return e
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
    let e = t.getGuildId(),
        n = t.id,
        _ = (0, s.e7)(
            [d.ZP],
            () => {
                let n = c.bL.NULL;
                return null != t.parent_id && (n = d.ZP.getChannelMessageNotifications(e, t.parent_id)), n !== c.bL.NULL ? n : d.ZP.getMessageNotifications(e);
            },
            [e, t.parent_id]
        ),
        S = (0, s.e7)([d.ZP], () => d.ZP.getNewForumThreadsCreated(t)),
        L = (0, s.e7)([d.ZP], () => d.ZP.getChannelOverrides(e)[n], [e, n]),
        h = null == L ? c.bL.NULL : L.message_notifications,
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
                                    label: o.intl.string(o.t.Rkgjpq),
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
                                  a === c.bL.NULL
                                      ? (function (t, e) {
                                            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                            switch (t) {
                                                case c.bL.ALL_MESSAGES:
                                                    return e.type === c.d4z.GUILD_VOICE && n ? o.intl.string(o.t['9sGJkp']) : o.intl.string(o.t['n/bTaW']);
                                                case c.bL.ONLY_MENTIONS:
                                                    return o.intl.format(o.t.L2hmY2, {});
                                                case c.bL.NO_MESSAGES:
                                                    return o.intl.string(o.t.CtVGyc);
                                                case c.bL.NULL:
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
        L = null == S ? c.bL.NULL : S.message_notifications,
        h = (0, a.p2)(t),
        E =
            L === c.bL.NULL && t.isGuildStageVoice()
                ? o.intl.format(o.t.L2hmY2, {})
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
              label: o.intl.string(o.t.h850Sk),
              subtext: E,
              children: r
          })
        : null;
}
