n.d(t, { default: () => x }), n(388685), n(290780);
var i = n(54381);
n(473749);
var r = n(990547),
    s = n(481060),
    a = n(785232),
    o = n(592125),
    l = n(594174),
    c = n(626135),
    d = n(33194),
    u = n(343544),
    m = n(14251),
    f = n(110223),
    _ = n(981631),
    g = n(388032),
    N = n(729861);
function x(e) {
    let { channelId: t, blockedUserIds: n, ignoredUserIds: x, transitionState: h, onClose: p, onJoin: E } = e,
        v = Array.from(n)
            .map((e) => l.default.getUser(e))
            .filter((e) => null !== e),
        A = Array.from(x)
            .map((e) => l.default.getUser(e))
            .filter((e) => null !== e);
    return 0 === v.length && 0 === A.length
        ? null
        : (0, i.jsx)(u.Z, {
              headerText: g.intl.string(g.t.zPUmzZ),
              descriptionText: ((e, t) => {
                  let n = e > 0,
                      i = t > 0;
                  return n && i
                      ? g.intl.string(g.t["X/iIjg"])
                      : n
                        ? g.intl.formatToPlainString(g.t.WgQ12s, { n: e })
                        : i
                          ? g.intl.formatToPlainString(g.t.bwibp1, { n: t })
                          : null;
              })(n.size, x.size),
              infoRows: ((e) => {
                  let { channelId: t, blockedUsers: n, ignoredUsers: r } = e,
                      l = o.Z.getChannel(t),
                      c = n.length > 0,
                      d = r.length > 0,
                      u = [
                          {
                              icon: (0, i.jsx)("div", {
                                  className: N.icon,
                                  children: (0, i.jsx)(s.aNP, {}),
                              }),
                              text: g.intl.string(g.t["7jN3FC"]),
                              className: N.row,
                          },
                      ];
                  if (c && d) {
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
                      let e = c ? n.slice(0, 2).map((e) => e.id) : r.slice(0, 2).map((e) => e.id),
                          s = c ? n.length : r.length;
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
                  blockedUsers: v,
                  ignoredUsers: A,
              }),
              onDismissAndStay: () => {
                  E(),
                      p(),
                      (0, d.dI)(new Set([...n, ...x])),
                      c.default.track(_.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: f.q.CLICK_TO_JOIN,
                          channel_id: t,
                          blocked_user_ids: Array.from(n),
                          ignored_user_ids: Array.from(x),
                          warning_surface: f.fz.PRE_JOIN_MODAL,
                      });
              },
              onDismissAndLeave: () => {
                  p(),
                      c.default.track(_.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: f.q.CLICK_TO_LEAVE,
                          channel_id: t,
                          blocked_user_ids: Array.from(n),
                          ignored_user_ids: Array.from(x),
                          warning_surface: f.fz.PRE_JOIN_MODAL,
                      });
              },
              leaveButtonText: g.intl.string(g.t.rOXspL),
              stayButtonText: g.intl.string(g.t.VJlc0S),
              transitionState: h,
              onClose: p,
              impression: {
                  impressionName: r.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
                  impressionProperties: {
                      channel_id: t,
                      blocked_user_ids: Array.from(n),
                      warning_surface: f.fz.PRE_JOIN_MODAL,
                  },
              },
          });
}
