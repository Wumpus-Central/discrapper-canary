r.d(n, { default: () => p }), r(388685), r(290780);
var t = r(255367);
r(73800);
var s = r(990547),
    i = r(481060),
    a = r(785232),
    l = r(592125),
    o = r(594174),
    d = r(626135),
    c = r(33194),
    m = r(343544),
    u = r(14251),
    _ = r(110223),
    f = r(981631),
    x = r(388032),
    h = r(84414);
let g = (e) => {
        let { numOfBlockedUsers: n, numOfIgnoredUsers: r } = e,
            s = n > 0,
            i = r > 0;
        return s && i
            ? (0, t.jsxs)(t.Fragment, {
                  children: [x.intl.string(x.t.aTORmJ), (0, t.jsx)("br", {}), x.intl.string(x.t.LXFz19)],
              })
            : s
              ? (0, t.jsxs)(t.Fragment, {
                    children: [x.intl.format(x.t["J/ZBu7"], { n: n }), (0, t.jsx)("br", {}), x.intl.string(x.t.tFvYm5)],
                })
              : i
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          x.intl.format(x.t["8mtcq6"], { n: r }),
                          (0, t.jsx)("br", {}),
                          x.intl.string(x.t.Z21Rp6),
                      ],
                  })
                : null;
    },
    N = (e) => {
        let { channelId: n, blockedUsers: r, ignoredUsers: s } = e,
            o = l.Z.getChannel(n),
            d = r.length > 0,
            c = s.length > 0,
            m = [
                {
                    icon: (0, t.jsx)("div", {
                        className: h.icon,
                        children: (0, t.jsx)(i.aNP, {}),
                    }),
                    text: x.intl.string(x.t["7jN3FB"]),
                    className: h.row,
                },
            ];
        if (d && c) {
            let e = [...r, ...s],
                l = e.slice(0, 2).map((e) => e.id);
            m.unshift({
                icon: (0, t.jsx)("div", {
                    className: h.icon,
                    children: (0, t.jsx)(a.Z, {
                        recipients: l,
                        size: i.EFr.SIZE_32,
                    }),
                }),
                text: (0, u.a)(l, e.length, null == o ? void 0 : o.guild_id, n),
                className: h.row,
            });
        } else {
            let e = d ? r.slice(0, 2).map((e) => e.id) : s.slice(0, 2).map((e) => e.id),
                i = d ? r.length : s.length;
            m.unshift({
                icon: (0, t.jsx)("div", {
                    className: h.icon,
                    children: (0, u.r)(e, null == o ? void 0 : o.guild_id),
                }),
                text: (0, u.a)(e, i, null == o ? void 0 : o.guild_id, n),
                className: h.row,
            });
        }
        return m;
    };
function p(e) {
    let { channelId: n, blockedUserIds: r, ignoredUserIds: i, transitionState: a, onClose: l, onJoin: u } = e,
        h = Array.from(r)
            .map((e) => o.default.getUser(e))
            .filter((e) => null !== e),
        p = Array.from(i)
            .map((e) => o.default.getUser(e))
            .filter((e) => null !== e);
    return 0 === h.length && 0 === p.length
        ? null
        : (0, t.jsx)(m.Z, {
              headerText: x.intl.string(x.t.zPUmzc),
              descriptionText: (0, t.jsx)(g, {
                  numOfBlockedUsers: r.size,
                  numOfIgnoredUsers: i.size,
              }),
              infoRows: N({
                  channelId: n,
                  blockedUsers: h,
                  ignoredUsers: p,
              }),
              onDismissAndStay: () => {
                  u(),
                      l(),
                      (0, c.dI)(new Set([...r, ...i])),
                      d.default.track(f.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: _.q.CLICK_TO_JOIN,
                          channel_id: n,
                          blocked_user_ids: Array.from(r),
                          ignored_user_ids: Array.from(i),
                          warning_surface: _.fz.PRE_JOIN_MODAL,
                      });
              },
              onDismissAndLeave: () => {
                  l(),
                      d.default.track(f.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: _.q.CLICK_TO_LEAVE,
                          channel_id: n,
                          blocked_user_ids: Array.from(r),
                          ignored_user_ids: Array.from(i),
                          warning_surface: _.fz.PRE_JOIN_MODAL,
                      });
              },
              leaveButtonText: x.intl.string(x.t.Trz9Ji),
              stayButtonText: x.intl.string(x.t.kiODyM),
              transitionState: a,
              onClose: l,
              impression: {
                  impressionName: s.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
                  impressionProperties: {
                      channel_id: n,
                      blocked_user_ids: Array.from(r),
                      warning_surface: _.fz.PRE_JOIN_MODAL,
                  },
              },
          });
}
