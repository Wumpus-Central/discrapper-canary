n.d(e, {
    A: () => A,
    b: () => _,
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(832712),
    s = n(718194),
    o = n(543465),
    d = n(477427),
    u = n(652215),
    c = n(985018);

function g(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (t.type) {
        case u.rbe.GUILD_VOICE:
            return e
                ? [
                      {
                          setting: u.orn.NULL,
                          label: null != t.parent_id ? c.intl.string(c.t.wlrV1c) : c.intl.string(c.t["1Wn2M4"]),
                      },
                      {
                          setting: u.orn.ALL_MESSAGES,
                          label: c.intl.string(c.t["9sGJkt"]),
                      },
                      {
                          setting: u.orn.ONLY_MENTIONS,
                          label: c.intl.format(c.t.cpcXvW, {}),
                      },
                      {
                          setting: u.orn.NO_MESSAGES,
                          label: c.intl.string(c.t.CtVGyQ),
                      },
                  ]
                : null;
        case u.rbe.GUILD_STAGE_VOICE:
            return [
                {
                    setting: u.orn.NULL,
                    label: null != t.parent_id ? c.intl.string(c.t.wlrV1c) : c.intl.string(c.t["1Wn2M4"]),
                },
                {
                    setting: u.orn.ONLY_MENTIONS,
                    label: c.intl.string(c.t["BENn/6"]),
                },
                {
                    setting: u.orn.NO_MESSAGES,
                    label: c.intl.string(c.t.CtVGyQ),
                },
            ];
        default:
            return [
                {
                    setting: u.orn.NULL,
                    label: null != t.parent_id ? c.intl.string(c.t.wlrV1c) : c.intl.string(c.t["1Wn2M4"]),
                },
                {
                    setting: u.orn.ALL_MESSAGES,
                    label: c.intl.string(c.t["n/bTaY"]),
                },
                {
                    setting: u.orn.ONLY_MENTIONS,
                    label: c.intl.format(c.t.L2hmYy, {}),
                },
                {
                    setting: u.orn.NO_MESSAGES,
                    label: c.intl.string(c.t.CtVGyQ),
                },
            ];
    }
}

function _(t) {
    let e = t.getGuildId(),
        n = t.id,
        _ = (0, r.bG)([o.Ay], () => {
            let n = u.orn.NULL;
            return (
                null != t.parent_id && (n = o.Ay.getChannelMessageNotifications(e, t.parent_id)),
                n !== u.orn.NULL ? n : o.Ay.getMessageNotifications(e)
            );
        }, [e, t.parent_id]),
        A = (0, r.bG)([o.Ay], () => o.Ay.getNewForumThreadsCreated(t)),
        S = (0, r.bG)([o.Ay], () => o.Ay.getChannelOverrides(e)[n], [e, n]),
        f = null == S ? u.orn.NULL : S.message_notifications,
        N = (0, s.YK)(t),
        E = g(t, N);
    return null == E
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  t.isForumLikeChannel()
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.sLh, {
                                    id: "new-forum-threads-created",
                                    label: c.intl.string(c.t.Rkgjph),
                                    checked: A,
                                    action: () => a.A.setForumThreadsCreated(t, !A),
                                }),
                                (0, i.jsx)(l.bXX, {}),
                            ],
                        })
                      : null,
                  E.map((r) => {
                      let { setting: s, label: o } = r;
                      return (
                          null != o &&
                          (0, i.jsx)(
                              l.iDA,
                              {
                                  group: "channel-notifications",
                                  id: "".concat(s),
                                  label: o,
                                  subtext:
                                      s === u.orn.NULL
                                          ? (function (t, e) {
                                                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                                switch (t) {
                                                    case u.orn.ALL_MESSAGES:
                                                        return e.type === u.rbe.GUILD_VOICE && n
                                                            ? c.intl.string(c.t["9sGJkt"])
                                                            : c.intl.string(c.t["n/bTaY"]);
                                                    case u.orn.ONLY_MENTIONS:
                                                        return c.intl.format(c.t.L2hmYy, {});
                                                    case u.orn.NO_MESSAGES:
                                                        return c.intl.string(c.t.CtVGyQ);
                                                    case u.orn.NULL:
                                                    default:
                                                        return;
                                                }
                                            })(_, t, N)
                                          : void 0,
                                  action: () => {
                                      null != e &&
                                          a.A.updateChannelOverrideSettings(
                                              e,
                                              n,
                                              {
                                                  message_notifications: s,
                                              },
                                              d.G_.notifications(s),
                                          );
                                  },
                                  checked: s === f,
                              },
                              s,
                          )
                      );
                  }),
              ],
          });
}

function A(t) {
    var e, n;
    let a = _(t),
        d = (0, r.bG)([o.Ay], () => o.Ay.resolvedMessageNotifications(t), [t]),
        A = (0, r.bG)([o.Ay], () => o.Ay.getChannelOverrides(t.guild_id)[t.id], [t.guild_id, t.id]),
        S = null == A ? u.orn.NULL : A.message_notifications,
        f = (0, s.YK)(t),
        N =
            S === u.orn.NULL && t.isGuildStageVoice()
                ? c.intl.format(c.t.L2hmYy, {})
                : null == (n = g(t, f)) ||
                    null ==
                        (e = n.find((t) => {
                            let { setting: e } = t;
                            return e === d;
                        }))
                  ? void 0
                  : e.label;
    return null != a
        ? (0, i.jsx)(l.Drp, {
              id: "channel-notifications",
              label: c.intl.string(c.t.h850Ss),
              subtext: N,
              children: a,
          })
        : null;
}
