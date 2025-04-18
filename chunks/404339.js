r.d(t, { default: () => g }), r(388685), r(290780);
var n = r(200651);
r(192379);
var s = r(990547),
    i = r(481060),
    a = r(785232),
    l = r(592125),
    o = r(594174),
    c = r(626135),
    u = r(33194),
    d = r(343544),
    _ = r(14251),
    f = r(110223),
    A = r(981631),
    E = r(388032),
    m = r(560215);
let I = (e) => {
        let { numOfBlockedUsers: t, numOfIgnoredUsers: r } = e,
            s = t > 0,
            i = r > 0;
        return s && i
            ? (0, n.jsxs)(n.Fragment, {
                  children: [E.NW.string(E.t.aTORmJ), (0, n.jsx)('br', {}), E.NW.string(E.t.LXFz19)]
              })
            : s
              ? (0, n.jsxs)(n.Fragment, {
                    children: [E.NW.format(E.t['J/ZBu7'], { n: t }), (0, n.jsx)('br', {}), E.NW.string(E.t.tFvYm5)]
                })
              : i
                ? (0, n.jsxs)(n.Fragment, {
                      children: [E.NW.format(E.t['8mtcq6'], { n: r }), (0, n.jsx)('br', {}), E.NW.string(E.t.Z21Rp6)]
                  })
                : null;
    },
    N = (e) => {
        let { channelId: t, blockedUsers: r, ignoredUsers: s } = e,
            o = l.Z.getChannel(t),
            c = r.length > 0,
            u = s.length > 0,
            d = [
                {
                    icon: (0, n.jsx)('div', {
                        className: m.icon,
                        children: (0, n.jsx)(i.aNP, {})
                    }),
                    text: E.NW.string(E.t['7jN3FB']),
                    className: m.row
                }
            ];
        if (c && u) {
            let e = [...r, ...s],
                l = e.slice(0, 2).map((e) => e.id);
            d.unshift({
                icon: (0, n.jsx)('div', {
                    className: m.icon,
                    children: (0, n.jsx)(a.Z, {
                        recipients: l,
                        size: i.EFr.SIZE_32
                    })
                }),
                text: (0, _.a)(l, e.length, null == o ? void 0 : o.guild_id, t),
                className: m.row
            });
        } else {
            let e = c ? r.slice(0, 2).map((e) => e.id) : s.slice(0, 2).map((e) => e.id),
                i = c ? r.length : s.length;
            d.unshift({
                icon: (0, n.jsx)('div', {
                    className: m.icon,
                    children: (0, _.r)(e, null == o ? void 0 : o.guild_id)
                }),
                text: (0, _.a)(e, i, null == o ? void 0 : o.guild_id, t),
                className: m.row
            });
        }
        return d;
    };
function g(e) {
    let { channelId: t, blockedUserIds: r, ignoredUserIds: i, transitionState: a, onClose: l, onJoin: _ } = e,
        m = Array.from(r)
            .map((e) => o.default.getUser(e))
            .filter((e) => null !== e),
        g = Array.from(i)
            .map((e) => o.default.getUser(e))
            .filter((e) => null !== e);
    return 0 === m.length && 0 === g.length
        ? null
        : (0, n.jsx)(d.Z, {
              headerText: E.NW.string(E.t.zPUmzc),
              descriptionText: (0, n.jsx)(I, {
                  numOfBlockedUsers: r.size,
                  numOfIgnoredUsers: i.size
              }),
              infoRows: N({
                  channelId: t,
                  blockedUsers: m,
                  ignoredUsers: g
              }),
              onDismissAndStay: () => {
                  _(),
                      l(),
                      (0, u.g6)(t),
                      c.default.track(A.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: f.q.CLICK_TO_JOIN,
                          channel_id: t,
                          blocked_user_ids: Array.from(r),
                          ignored_user_ids: Array.from(i),
                          warning_surface: f.fz.PRE_JOIN_MODAL
                      });
              },
              onDismissAndLeave: () => {
                  l(),
                      c.default.track(A.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: f.q.CLICK_TO_LEAVE,
                          channel_id: t,
                          blocked_user_ids: Array.from(r),
                          ignored_user_ids: Array.from(i),
                          warning_surface: f.fz.PRE_JOIN_MODAL
                      });
              },
              leaveButtonText: E.NW.string(E.t.Trz9Ji),
              stayButtonText: E.NW.string(E.t.kiODyM),
              transitionState: a,
              onClose: l,
              impression: {
                  impressionName: s.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
                  impressionProperties: {
                      channel_id: t,
                      blocked_user_ids: Array.from(r),
                      warning_surface: f.fz.PRE_JOIN_MODAL
                  }
              }
          });
}
