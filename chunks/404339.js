n.d(e, { default: () => S }), n(388685), n(290780);
var r = n(951288);
n(647438);
var i = n(990547),
    s = n(481060),
    a = n(785232),
    l = n(592125),
    o = n(594174),
    u = n(626135),
    _ = n(33194),
    c = n(343544),
    d = n(14251),
    A = n(110223),
    E = n(981631),
    f = n(388032),
    I = n(405842);
function S(t) {
    let { channelId: e, blockedUserIds: n, ignoredUserIds: S, transitionState: N, onClose: m, onJoin: g } = t,
        L = Array.from(n)
            .map((t) => o.default.getUser(t))
            .filter((t) => null !== t),
        p = Array.from(S)
            .map((t) => o.default.getUser(t))
            .filter((t) => null !== t);
    return 0 === L.length && 0 === p.length
        ? null
        : (0, r.jsx)(c.Z, {
              headerText: f.intl.string(f.t.zPUmzc),
              descriptionText: ((t, e) => {
                  let n = t > 0,
                      r = e > 0;
                  return n && r
                      ? f.intl.string(f.t["X/iIjo"])
                      : n
                        ? f.intl.formatToPlainString(f.t.WgQ12t, { n: t })
                        : r
                          ? f.intl.formatToPlainString(f.t.bwibp6, { n: e })
                          : null;
              })(n.size, S.size),
              infoRows: ((t) => {
                  let { channelId: e, blockedUsers: n, ignoredUsers: i } = t,
                      o = l.Z.getChannel(e),
                      u = n.length > 0,
                      _ = i.length > 0,
                      c = [
                          {
                              icon: (0, r.jsx)("div", {
                                  className: I.icon,
                                  children: (0, r.jsx)(s.aNP, {}),
                              }),
                              text: f.intl.string(f.t["7jN3FB"]),
                              className: I.row,
                          },
                      ];
                  if (u && _) {
                      let t = [...n, ...i],
                          l = t.slice(0, 2).map((t) => t.id);
                      c.unshift({
                          icon: (0, r.jsx)("div", {
                              className: I.icon,
                              children: (0, r.jsx)(a.Z, {
                                  recipients: l,
                                  size: s.EFr.SIZE_32,
                              }),
                          }),
                          text: (0, d.a)(l, t.length, null == o ? void 0 : o.guild_id, e),
                          className: I.row,
                      });
                  } else {
                      let t = u ? n.slice(0, 2).map((t) => t.id) : i.slice(0, 2).map((t) => t.id),
                          s = u ? n.length : i.length;
                      c.unshift({
                          icon: (0, r.jsx)("div", {
                              className: I.icon,
                              children: (0, d.r)(t, null == o ? void 0 : o.guild_id),
                          }),
                          text: (0, d.a)(t, s, null == o ? void 0 : o.guild_id, e),
                          className: I.row,
                      });
                  }
                  return c;
              })({
                  channelId: e,
                  blockedUsers: L,
                  ignoredUsers: p,
              }),
              onDismissAndStay: () => {
                  g(),
                      m(),
                      (0, _.dI)(new Set([...n, ...S])),
                      u.default.track(E.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: A.q.CLICK_TO_JOIN,
                          channel_id: e,
                          blocked_user_ids: Array.from(n),
                          ignored_user_ids: Array.from(S),
                          warning_surface: A.fz.PRE_JOIN_MODAL,
                      });
              },
              onDismissAndLeave: () => {
                  m(),
                      u.default.track(E.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: A.q.CLICK_TO_LEAVE,
                          channel_id: e,
                          blocked_user_ids: Array.from(n),
                          ignored_user_ids: Array.from(S),
                          warning_surface: A.fz.PRE_JOIN_MODAL,
                      });
              },
              leaveButtonText: f.intl.string(f.t.rOXspK),
              stayButtonText: f.intl.string(f.t.VJlc0d),
              transitionState: N,
              onClose: m,
              impression: {
                  impressionName: i.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
                  impressionProperties: {
                      channel_id: e,
                      blocked_user_ids: Array.from(n),
                      warning_surface: A.fz.PRE_JOIN_MODAL,
                  },
              },
          });
}
