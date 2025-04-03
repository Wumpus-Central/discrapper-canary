n.d(t, { default: () => x }), n(47120), n(733860);
var s = n(200651);
n(192379);
var r = n(990547),
    i = n(481060),
    a = n(785232),
    o = n(592125),
    _ = n(594174),
    c = n(626135),
    d = n(33194),
    l = n(343544),
    u = n(14251),
    g = n(110223),
    m = n(981631),
    f = n(388032),
    p = n(193728);
let h = (e) => {
        let { numOfBlockedUsers: t, numOfIgnoredUsers: n } = e,
            r = t > 0,
            i = n > 0;
        return r && i
            ? (0, s.jsxs)(s.Fragment, {
                  children: [f.NW.string(f.t.aTORmJ), (0, s.jsx)('br', {}), f.NW.string(f.t.LXFz19)]
              })
            : r
              ? (0, s.jsxs)(s.Fragment, {
                    children: [f.NW.format(f.t['J/ZBu7'], { n: t }), (0, s.jsx)('br', {}), f.NW.string(f.t.tFvYm5)]
                })
              : i
                ? (0, s.jsxs)(s.Fragment, {
                      children: [f.NW.format(f.t['8mtcq6'], { n: n }), (0, s.jsx)('br', {}), f.NW.string(f.t.Z21Rp6)]
                  })
                : null;
    },
    N = (e) => {
        let { channelId: t, blockedUsers: n, ignoredUsers: r } = e,
            _ = o.Z.getChannel(t),
            c = n.length > 0,
            d = r.length > 0,
            l = [
                {
                    icon: (0, s.jsx)('div', {
                        className: p.icon,
                        children: (0, s.jsx)(i.aNP, {})
                    }),
                    text: f.NW.string(f.t['7jN3FB']),
                    className: p.row
                }
            ];
        if (c && d) {
            let e = [...n, ...r],
                o = e.slice(0, 2).map((e) => e.id);
            l.unshift({
                icon: (0, s.jsx)('div', {
                    className: p.icon,
                    children: (0, s.jsx)(a.Z, {
                        recipients: o,
                        size: i.EFr.SIZE_32
                    })
                }),
                text: (0, u.a)(o, e.length, null == _ ? void 0 : _.guild_id, t),
                className: p.row
            });
        } else {
            let e = c ? n.slice(0, 2).map((e) => e.id) : r.slice(0, 2).map((e) => e.id),
                i = c ? n.length : r.length;
            l.unshift({
                icon: (0, s.jsx)('div', {
                    className: p.icon,
                    children: (0, u.r)(e, null == _ ? void 0 : _.guild_id)
                }),
                text: (0, u.a)(e, i, null == _ ? void 0 : _.guild_id, t),
                className: p.row
            });
        }
        return l;
    };
function x(e) {
    let { channelId: t, blockedUserIds: n, ignoredUserIds: i, transitionState: a, onClose: o, onJoin: u } = e,
        p = Array.from(n)
            .map((e) => _.default.getUser(e))
            .filter((e) => null !== e),
        x = Array.from(i)
            .map((e) => _.default.getUser(e))
            .filter((e) => null !== e);
    return 0 === p.length && 0 === x.length
        ? null
        : (0, s.jsx)(l.Z, {
              headerText: f.NW.string(f.t.zPUmzc),
              descriptionText: (0, s.jsx)(h, {
                  numOfBlockedUsers: n.size,
                  numOfIgnoredUsers: i.size
              }),
              infoRows: N({
                  channelId: t,
                  blockedUsers: p,
                  ignoredUsers: x
              }),
              onDismissAndStay: () => {
                  u(),
                      o(),
                      (0, d.g6)(t),
                      c.default.track(m.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: g.q.CLICK_TO_JOIN,
                          channel_id: t,
                          blocked_user_ids: Array.from(n),
                          ignored_user_ids: Array.from(i),
                          warning_surface: g.fz.PRE_JOIN_MODAL
                      });
              },
              onDismissAndLeave: () => {
                  o(),
                      c.default.track(m.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: g.q.CLICK_TO_LEAVE,
                          channel_id: t,
                          blocked_user_ids: Array.from(n),
                          ignored_user_ids: Array.from(i),
                          warning_surface: g.fz.PRE_JOIN_MODAL
                      });
              },
              leaveButtonText: f.NW.string(f.t.Trz9Ji),
              stayButtonText: f.NW.string(f.t.kiODyM),
              transitionState: a,
              onClose: o,
              impression: {
                  impressionName: r.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
                  impressionProperties: {
                      channel_id: t,
                      blocked_user_ids: Array.from(n),
                      warning_surface: g.fz.PRE_JOIN_MODAL
                  }
              }
          });
}
