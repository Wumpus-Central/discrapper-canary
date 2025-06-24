n.d(e, {
    Z: () => S,
    c: () => _
});
var i = n(255367);
n(73800);
var l = n(442837),
    r = n(481060),
    s = n(87051),
    a = n(729052),
    o = n(9156),
    d = n(621600),
    u = n(981631),
    c = n(388032);
function g(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (t.type) {
        case u.d4z.GUILD_VOICE:
            return e
                ? [
                      {
                          setting: u.bL.NULL,
                          label: null != t.parent_id ? c.intl.string(c.t.wlrV1d) : c.intl.string(c.t['1Wn2Mz'])
                      },
                      {
                          setting: u.bL.ALL_MESSAGES,
                          label: c.intl.string(c.t['9sGJkp'])
                      },
                      {
                          setting: u.bL.ONLY_MENTIONS,
                          label: c.intl.format(c.t.cpcXvb, {})
                      },
                      {
                          setting: u.bL.NO_MESSAGES,
                          label: c.intl.string(c.t.CtVGyc)
                      }
                  ]
                : null;
        case u.d4z.GUILD_STAGE_VOICE:
            return [
                {
                    setting: u.bL.NULL,
                    label: null != t.parent_id ? c.intl.string(c.t.wlrV1d) : c.intl.string(c.t['1Wn2Mz'])
                },
                {
                    setting: u.bL.ONLY_MENTIONS,
                    label: c.intl.string(c.t['BENn//'])
                },
                {
                    setting: u.bL.NO_MESSAGES,
                    label: c.intl.string(c.t.CtVGyc)
                }
            ];
        default:
            return [
                {
                    setting: u.bL.NULL,
                    label: null != t.parent_id ? c.intl.string(c.t.wlrV1d) : c.intl.string(c.t['1Wn2Mz'])
                },
                {
                    setting: u.bL.ALL_MESSAGES,
                    label: c.intl.string(c.t['n/bTaW'])
                },
                {
                    setting: u.bL.ONLY_MENTIONS,
                    label: c.intl.format(c.t.L2hmY2, {})
                },
                {
                    setting: u.bL.NO_MESSAGES,
                    label: c.intl.string(c.t.CtVGyc)
                }
            ];
    }
}
function _(t) {
    let e = t.getGuildId(),
        n = t.id,
        _ = (0, l.e7)(
            [o.ZP],
            () => {
                let n = u.bL.NULL;
                return null != t.parent_id && (n = o.ZP.getChannelMessageNotifications(e, t.parent_id)), n !== u.bL.NULL ? n : o.ZP.getMessageNotifications(e);
            },
            [e, t.parent_id]
        ),
        S = (0, l.e7)([o.ZP], () => o.ZP.getNewForumThreadsCreated(t)),
        f = (0, l.e7)([o.ZP], () => o.ZP.getChannelOverrides(e)[n], [e, n]),
        h = null == f ? u.bL.NULL : f.message_notifications,
        E = (0, a.p2)(t),
        L = g(t, E);
    return null == L
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  t.isForumLikeChannel()
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.S89, {
                                    id: 'new-forum-threads-created',
                                    label: c.intl.string(c.t.Rkgjpq),
                                    checked: S,
                                    action: () => s.Z.setForumThreadsCreated(t, !S)
                                }),
                                (0, i.jsx)(r.Clw, {})
                            ]
                        })
                      : null,
                  L.map((l) => {
                      let { setting: a, label: o } = l;
                      return (0, i.jsx)(
                          r.k5B,
                          {
                              group: 'channel-notifications',
                              id: ''.concat(a),
                              label: o,
                              subtext:
                                  a === u.bL.NULL
                                      ? (function (t, e) {
                                            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                            switch (t) {
                                                case u.bL.ALL_MESSAGES:
                                                    return e.type === u.d4z.GUILD_VOICE && n ? c.intl.string(c.t['9sGJkp']) : c.intl.string(c.t['n/bTaW']);
                                                case u.bL.ONLY_MENTIONS:
                                                    return c.intl.format(c.t.L2hmY2, {});
                                                case u.bL.NO_MESSAGES:
                                                    return c.intl.string(c.t.CtVGyc);
                                                case u.bL.NULL:
                                                default:
                                                    return;
                                            }
                                        })(_, t, E)
                                      : void 0,
                              action: () => {
                                  null != e && s.Z.updateChannelOverrideSettings(e, n, { message_notifications: a }, d.UE.notifications(a));
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
    let s = _(t),
        d = (0, l.e7)([o.ZP], () => o.ZP.resolvedMessageNotifications(t), [t]),
        S = (0, l.e7)([o.ZP], () => o.ZP.getChannelOverrides(t.guild_id)[t.id], [t.guild_id, t.id]),
        f = null == S ? u.bL.NULL : S.message_notifications,
        h = (0, a.p2)(t),
        E =
            f === u.bL.NULL && t.isGuildStageVoice()
                ? c.intl.format(c.t.L2hmY2, {})
                : null == (n = g(t, h)) ||
                    null ==
                        (e = n.find((t) => {
                            let { setting: e } = t;
                            return e === d;
                        }))
                  ? void 0
                  : e.label;
    return null != s
        ? (0, i.jsx)(r.sNh, {
              id: 'channel-notifications',
              label: c.intl.string(c.t.h850Sk),
              subtext: E,
              children: s
          })
        : null;
}
