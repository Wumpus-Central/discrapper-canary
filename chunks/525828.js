i.d(t, {
    default: () => N,
}),
    i(896048),
    i(667532);
var n = i(627968);
i(64700);
var s = i(110259),
    r = i(397927),
    a = i(954376),
    l = i(734057),
    o = i(287809),
    d = i(954571),
    c = i(549022),
    m = i(212758),
    u = i(90386),
    _ = i(64175),
    g = i(652215),
    f = i(985018),
    h = i(441805);

function N(e) {
    var t, i;
    let N,
        x,
        { channelId: A, blockedUserIds: p, ignoredUserIds: E, transitionState: C, onClose: k, onJoin: v } = e,
        j = Array.from(p)
            .map((e) => o.default.getUser(e))
            .filter((e) => null !== e),
        I = Array.from(E)
            .map((e) => o.default.getUser(e))
            .filter((e) => null !== e);
    return 0 === j.length && 0 === I.length
        ? null
        : (0, n.jsx)(m.A, {
              headerText: f.intl.string(f.t.zPUmzZ),
              descriptionText:
                  ((t = p.size),
                  (i = E.size),
                  (N = t > 0),
                  (x = i > 0),
                  N && x
                      ? f.intl.string(f.t["X/iIjg"])
                      : N
                        ? f.intl.formatToPlainString(f.t.WgQ12s, {
                              n: t,
                          })
                        : x
                          ? f.intl.formatToPlainString(f.t.bwibp1, {
                                n: i,
                            })
                          : null),
              infoRows: ((e) => {
                  let { channelId: t, blockedUsers: i, ignoredUsers: s } = e,
                      o = l.A.getChannel(t),
                      d = i.length > 0,
                      c = s.length > 0,
                      m = [
                          {
                              icon: (0, n.jsx)("div", {
                                  className: h.Kk,
                                  children: (0, n.jsx)(r.id, {}),
                              }),
                              text: f.intl.string(f.t["7jN3FC"]),
                              className: h.nM,
                          },
                      ];
                  if (d && c) {
                      let e = [...i, ...s],
                          l = e.slice(0, 2).map((e) => e.id);
                      m.unshift({
                          icon: (0, n.jsx)("div", {
                              className: h.Kk,
                              children: (0, n.jsx)(a.A, {
                                  recipients: l,
                                  size: r._3J.SIZE_32,
                              }),
                          }),
                          text: (0, u.T)(l, e.length, null == o ? void 0 : o.guild_id, t),
                          className: h.nM,
                      });
                  } else {
                      let e = d ? i.slice(0, 2).map((e) => e.id) : s.slice(0, 2).map((e) => e.id),
                          r = d ? i.length : s.length;
                      m.unshift({
                          icon: (0, n.jsx)("div", {
                              className: h.Kk,
                              children: (0, u.I)(e, null == o ? void 0 : o.guild_id),
                          }),
                          text: (0, u.T)(e, r, null == o ? void 0 : o.guild_id, t),
                          className: h.nM,
                      });
                  }
                  return m;
              })({
                  channelId: A,
                  blockedUsers: j,
                  ignoredUsers: I,
              }),
              onDismissAndStay: () => {
                  v(),
                      k(),
                      (0, c.Cs)(new Set([...p, ...E])),
                      d.default.track(g.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: _.Qi.CLICK_TO_JOIN,
                          channel_id: A,
                          blocked_user_ids: Array.from(p),
                          ignored_user_ids: Array.from(E),
                          warning_surface: _.gD.PRE_JOIN_MODAL,
                      });
              },
              onDismissAndLeave: () => {
                  k(),
                      d.default.track(g.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: _.Qi.CLICK_TO_LEAVE,
                          channel_id: A,
                          blocked_user_ids: Array.from(p),
                          ignored_user_ids: Array.from(E),
                          warning_surface: _.gD.PRE_JOIN_MODAL,
                      });
              },
              leaveButtonText: f.intl.string(f.t.rOXspL),
              stayButtonText: f.intl.string(f.t.VJlc0S),
              transitionState: C,
              onClose: k,
              impression: {
                  impressionName: s.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
                  impressionProperties: {
                      channel_id: A,
                      blocked_user_ids: Array.from(p),
                      warning_surface: _.gD.PRE_JOIN_MODAL,
                  },
              },
          });
}
