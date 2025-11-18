t.d(n, { default: () => x }), t(388685), t(290780);
var i = t(54381);
t(473749);
var r = t(990547),
    s = t(481060),
    a = t(785232),
    o = t(592125),
    l = t(594174),
    d = t(626135),
    c = t(33194),
    u = t(343544),
    m = t(14251),
    _ = t(110223),
    f = t(981631),
    g = t(388032),
    N = t(73199);
function x(e) {
    let { channelId: n, blockedUserIds: t, ignoredUserIds: x, transitionState: h, onClose: E, onJoin: p } = e,
        A = Array.from(t)
            .map((e) => l.default.getUser(e))
            .filter((e) => null !== e),
        C = Array.from(x)
            .map((e) => l.default.getUser(e))
            .filter((e) => null !== e);
    return 0 === A.length && 0 === C.length
        ? null
        : (0, i.jsx)(u.Z, {
              headerText: g.intl.string(g.t.zPUmzZ),
              descriptionText: ((e, n) => {
                  let t = e > 0,
                      i = n > 0;
                  return t && i
                      ? g.intl.string(g.t["X/iIjg"])
                      : t
                        ? g.intl.formatToPlainString(g.t.WgQ12s, { n: e })
                        : i
                          ? g.intl.formatToPlainString(g.t.bwibp1, { n: n })
                          : null;
              })(t.size, x.size),
              infoRows: ((e) => {
                  let { channelId: n, blockedUsers: t, ignoredUsers: r } = e,
                      l = o.Z.getChannel(n),
                      d = t.length > 0,
                      c = r.length > 0,
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
                  if (d && c) {
                      let e = [...t, ...r],
                          o = e.slice(0, 2).map((e) => e.id);
                      u.unshift({
                          icon: (0, i.jsx)("div", {
                              className: N.icon,
                              children: (0, i.jsx)(a.Z, {
                                  recipients: o,
                                  size: s.EFr.SIZE_32,
                              }),
                          }),
                          text: (0, m.a)(o, e.length, null == l ? void 0 : l.guild_id, n),
                          className: N.row,
                      });
                  } else {
                      let e = d ? t.slice(0, 2).map((e) => e.id) : r.slice(0, 2).map((e) => e.id),
                          s = d ? t.length : r.length;
                      u.unshift({
                          icon: (0, i.jsx)("div", {
                              className: N.icon,
                              children: (0, m.r)(e, null == l ? void 0 : l.guild_id),
                          }),
                          text: (0, m.a)(e, s, null == l ? void 0 : l.guild_id, n),
                          className: N.row,
                      });
                  }
                  return u;
              })({
                  channelId: n,
                  blockedUsers: A,
                  ignoredUsers: C,
              }),
              onDismissAndStay: () => {
                  p(),
                      E(),
                      (0, c.dI)(new Set([...t, ...x])),
                      d.default.track(f.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: _.q.CLICK_TO_JOIN,
                          channel_id: n,
                          blocked_user_ids: Array.from(t),
                          ignored_user_ids: Array.from(x),
                          warning_surface: _.fz.PRE_JOIN_MODAL,
                      });
              },
              onDismissAndLeave: () => {
                  E(),
                      d.default.track(f.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: _.q.CLICK_TO_LEAVE,
                          channel_id: n,
                          blocked_user_ids: Array.from(t),
                          ignored_user_ids: Array.from(x),
                          warning_surface: _.fz.PRE_JOIN_MODAL,
                      });
              },
              leaveButtonText: g.intl.string(g.t.rOXspL),
              stayButtonText: g.intl.string(g.t.VJlc0S),
              transitionState: h,
              onClose: E,
              impression: {
                  impressionName: r.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
                  impressionProperties: {
                      channel_id: n,
                      blocked_user_ids: Array.from(t),
                      warning_surface: _.fz.PRE_JOIN_MODAL,
                  },
              },
          });
}
