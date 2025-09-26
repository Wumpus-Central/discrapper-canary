n.d(t, { default: () => x }), n(388685), n(290780);
var i = n(951288);
n(647438);
var r = n(990547),
    s = n(481060),
    a = n(785232),
    o = n(592125),
    l = n(594174),
    d = n(626135),
    c = n(33194),
    u = n(343544),
    m = n(14251),
    _ = n(110223),
    f = n(981631),
    g = n(388032),
    N = n(405842);
function x(e) {
    let { channelId: t, blockedUserIds: n, ignoredUserIds: x, transitionState: h, onClose: E, onJoin: p } = e,
        A = Array.from(n)
            .map((e) => l.default.getUser(e))
            .filter((e) => null !== e),
        C = Array.from(x)
            .map((e) => l.default.getUser(e))
            .filter((e) => null !== e);
    return 0 === A.length && 0 === C.length
        ? null
        : (0, i.jsx)(u.Z, {
              headerText: g.intl.string(g.t.zPUmzc),
              descriptionText: ((e, t) => {
                  let n = e > 0,
                      i = t > 0;
                  return n && i
                      ? g.intl.string(g.t["X/iIjo"])
                      : n
                        ? g.intl.formatToPlainString(g.t.WgQ12t, { n: e })
                        : i
                          ? g.intl.formatToPlainString(g.t.bwibp6, { n: t })
                          : null;
              })(n.size, x.size),
              infoRows: ((e) => {
                  let { channelId: t, blockedUsers: n, ignoredUsers: r } = e,
                      l = o.Z.getChannel(t),
                      d = n.length > 0,
                      c = r.length > 0,
                      u = [
                          {
                              icon: (0, i.jsx)("div", {
                                  className: N.icon,
                                  children: (0, i.jsx)(s.aNP, {}),
                              }),
                              text: g.intl.string(g.t["7jN3FB"]),
                              className: N.row,
                          },
                      ];
                  if (d && c) {
                      let e = [...n, ...r],
                          o = e.slice(0, 2).map((e) => e.id);
                      u.unshift({
                          icon: (0, i.jsx)("div", {
                              className: N.icon,
                              children: (0, i.jsx)(a.Z, {
                                  recipients: o,
                                  size: s.EFr.SIZE_32,
                              }),
                          }),
                          text: (0, m.a)(o, e.length, null == l ? void 0 : l.guild_id, t),
                          className: N.row,
                      });
                  } else {
                      let e = d ? n.slice(0, 2).map((e) => e.id) : r.slice(0, 2).map((e) => e.id),
                          s = d ? n.length : r.length;
                      u.unshift({
                          icon: (0, i.jsx)("div", {
                              className: N.icon,
                              children: (0, m.r)(e, null == l ? void 0 : l.guild_id),
                          }),
                          text: (0, m.a)(e, s, null == l ? void 0 : l.guild_id, t),
                          className: N.row,
                      });
                  }
                  return u;
              })({
                  channelId: t,
                  blockedUsers: A,
                  ignoredUsers: C,
              }),
              onDismissAndStay: () => {
                  p(),
                      E(),
                      (0, c.dI)(new Set([...n, ...x])),
                      d.default.track(f.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: _.q.CLICK_TO_JOIN,
                          channel_id: t,
                          blocked_user_ids: Array.from(n),
                          ignored_user_ids: Array.from(x),
                          warning_surface: _.fz.PRE_JOIN_MODAL,
                      });
              },
              onDismissAndLeave: () => {
                  E(),
                      d.default.track(f.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: _.q.CLICK_TO_LEAVE,
                          channel_id: t,
                          blocked_user_ids: Array.from(n),
                          ignored_user_ids: Array.from(x),
                          warning_surface: _.fz.PRE_JOIN_MODAL,
                      });
              },
              leaveButtonText: g.intl.string(g.t.rOXspK),
              stayButtonText: g.intl.string(g.t.VJlc0d),
              transitionState: h,
              onClose: E,
              impression: {
                  impressionName: r.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
                  impressionProperties: {
                      channel_id: t,
                      blocked_user_ids: Array.from(n),
                      warning_surface: _.fz.PRE_JOIN_MODAL,
                  },
              },
          });
}
