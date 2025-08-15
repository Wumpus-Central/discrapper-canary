r.d(t, { default: () => g }), r(388685), r(290780);
var n = r(951288);
r(647438);
var s = r(990547),
    i = r(481060),
    a = r(785232),
    l = r(592125),
    o = r(594174),
    c = r(626135),
    u = r(33194),
    _ = r(343544),
    d = r(14251),
    A = r(110223),
    f = r(981631),
    E = r(388032),
    I = r(405842);
let m = (e) => {
    let { numOfBlockedUsers: t, numOfIgnoredUsers: r } = e,
        s = t > 0,
        i = r > 0;
    return s && i
        ? (0, n.jsxs)(n.Fragment, {
              children: [E.intl.string(E.t.aTORmJ), (0, n.jsx)("br", {}), E.intl.string(E.t.LXFz19)],
          })
        : s
          ? (0, n.jsxs)(n.Fragment, {
                children: [E.intl.format(E.t["J/ZBu7"], { n: t }), (0, n.jsx)("br", {}), E.intl.string(E.t.tFvYm5)],
            })
          : i
            ? (0, n.jsxs)(n.Fragment, {
                  children: [E.intl.format(E.t["8mtcq6"], { n: r }), (0, n.jsx)("br", {}), E.intl.string(E.t.Z21Rp6)],
              })
            : null;
};
function g(e) {
    let { channelId: t, blockedUserIds: r, ignoredUserIds: g, transitionState: N, onClose: h, onJoin: S } = e,
        x = Array.from(r)
            .map((e) => o.default.getUser(e))
            .filter((e) => null !== e),
        p = Array.from(g)
            .map((e) => o.default.getUser(e))
            .filter((e) => null !== e);
    return 0 === x.length && 0 === p.length
        ? null
        : (0, n.jsx)(_.Z, {
              headerText: E.intl.string(E.t.zPUmzc),
              descriptionText: (0, n.jsx)(m, {
                  numOfBlockedUsers: r.size,
                  numOfIgnoredUsers: g.size,
              }),
              infoRows: ((e) => {
                  let { channelId: t, blockedUsers: r, ignoredUsers: s } = e,
                      o = l.Z.getChannel(t),
                      c = r.length > 0,
                      u = s.length > 0,
                      _ = [
                          {
                              icon: (0, n.jsx)("div", {
                                  className: I.icon,
                                  children: (0, n.jsx)(i.aNP, {}),
                              }),
                              text: E.intl.string(E.t["7jN3FB"]),
                              className: I.row,
                          },
                      ];
                  if (c && u) {
                      let e = [...r, ...s],
                          l = e.slice(0, 2).map((e) => e.id);
                      _.unshift({
                          icon: (0, n.jsx)("div", {
                              className: I.icon,
                              children: (0, n.jsx)(a.Z, {
                                  recipients: l,
                                  size: i.EFr.SIZE_32,
                              }),
                          }),
                          text: (0, d.a)(l, e.length, null == o ? void 0 : o.guild_id, t),
                          className: I.row,
                      });
                  } else {
                      let e = c ? r.slice(0, 2).map((e) => e.id) : s.slice(0, 2).map((e) => e.id),
                          i = c ? r.length : s.length;
                      _.unshift({
                          icon: (0, n.jsx)("div", {
                              className: I.icon,
                              children: (0, d.r)(e, null == o ? void 0 : o.guild_id),
                          }),
                          text: (0, d.a)(e, i, null == o ? void 0 : o.guild_id, t),
                          className: I.row,
                      });
                  }
                  return _;
              })({
                  channelId: t,
                  blockedUsers: x,
                  ignoredUsers: p,
              }),
              onDismissAndStay: () => {
                  S(),
                      h(),
                      (0, u.dI)(new Set([...r, ...g])),
                      c.default.track(f.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: A.q.CLICK_TO_JOIN,
                          channel_id: t,
                          blocked_user_ids: Array.from(r),
                          ignored_user_ids: Array.from(g),
                          warning_surface: A.fz.PRE_JOIN_MODAL,
                      });
              },
              onDismissAndLeave: () => {
                  h(),
                      c.default.track(f.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: A.q.CLICK_TO_LEAVE,
                          channel_id: t,
                          blocked_user_ids: Array.from(r),
                          ignored_user_ids: Array.from(g),
                          warning_surface: A.fz.PRE_JOIN_MODAL,
                      });
              },
              leaveButtonText: E.intl.string(E.t.Trz9Ji),
              stayButtonText: E.intl.string(E.t.kiODyM),
              transitionState: N,
              onClose: h,
              impression: {
                  impressionName: s.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
                  impressionProperties: {
                      channel_id: t,
                      blocked_user_ids: Array.from(r),
                      warning_surface: A.fz.PRE_JOIN_MODAL,
                  },
              },
          });
}
