n.d(i, { default: () => E }), n(667532);
var t = n(627968);
n(64700);
var s = n(562708),
    r = n(738188),
    a = n(778712),
    l = n(954376),
    _ = n(734057),
    d = n(287809),
    o = n(174459),
    c = n(549022),
    u = n(212758),
    g = n(90386),
    m = n(64175),
    N = n(652215),
    A = n(375708),
    f = n(131678);
function E(e) {
    var i, n;
    let E,
        h,
        { channelId: p, blockedUserIds: C, ignoredUserIds: I, transitionState: O, onClose: L, onJoin: x } = e,
        k = Array.from(C)
            .map((e) => d.default.getUser(e))
            .filter((e) => null !== e),
        T = Array.from(I)
            .map((e) => d.default.getUser(e))
            .filter((e) => null !== e);
    return 0 === k.length && 0 === T.length
        ? null
        : (0, t.jsx)(u.A, {
              headerText: A.intl.string(A.t.zPUmzZ),
              descriptionText:
                  ((i = C.size),
                  (n = I.size),
                  (E = i > 0),
                  (h = n > 0),
                  E && h
                      ? A.intl.string(A.t["X/iIjg"])
                      : E
                        ? A.intl.formatToPlainString(A.t.WgQ12s, { n: i })
                        : h
                          ? A.intl.formatToPlainString(A.t.bwibp1, { n: n })
                          : null),
              infoRows: ((e) => {
                  let { channelId: i, blockedUsers: n, ignoredUsers: s } = e,
                      d = _.A.getChannel(i),
                      o = n.length > 0,
                      c = s.length > 0,
                      u = [
                          {
                              icon: (0, t.jsx)("div", { className: f.Kk, children: (0, t.jsx)(r.i, {}) }),
                              text: A.intl.string(A.t["7jN3FC"]),
                              className: f.nM,
                          },
                      ];
                  if (o && c) {
                      let e = [...n, ...s],
                          r = e.slice(0, 2).map((e) => e.id);
                      u.unshift({
                          icon: (0, t.jsx)("div", {
                              className: f.Kk,
                              children: (0, t.jsx)(l.A, { recipients: r, size: a._3.SIZE_32 }),
                          }),
                          text: (0, g.T)(r, e.length, d?.guild_id, i),
                          className: f.nM,
                      });
                  } else {
                      let e = o ? n.slice(0, 2).map((e) => e.id) : s.slice(0, 2).map((e) => e.id),
                          r = o ? n.length : s.length;
                      u.unshift({
                          icon: (0, t.jsx)("div", { className: f.Kk, children: (0, g.I)(e, d?.guild_id) }),
                          text: (0, g.T)(e, r, d?.guild_id, i),
                          className: f.nM,
                      });
                  }
                  return u;
              })({ channelId: p, blockedUsers: k, ignoredUsers: T }),
              onDismissAndStay: () => {
                  x(),
                      L(),
                      (0, c.Cs)(new Set([...C, ...I])),
                      o.default.track(N.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: m.Qi.CLICK_TO_JOIN,
                          channel_id: p,
                          blocked_user_ids: Array.from(C),
                          ignored_user_ids: Array.from(I),
                          warning_surface: m.gD.PRE_JOIN_MODAL,
                      });
              },
              onDismissAndLeave: () => {
                  L(),
                      o.default.track(N.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: m.Qi.CLICK_TO_LEAVE,
                          channel_id: p,
                          blocked_user_ids: Array.from(C),
                          ignored_user_ids: Array.from(I),
                          warning_surface: m.gD.PRE_JOIN_MODAL,
                      });
              },
              leaveButtonText: A.intl.string(A.t.rOXspL),
              stayButtonText: A.intl.string(A.t.VJlc0S),
              transitionState: O,
              onClose: L,
              impression: {
                  impressionName: s.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
                  impressionProperties: {
                      channel_id: p,
                      blocked_user_ids: Array.from(C),
                      warning_surface: m.gD.PRE_JOIN_MODAL,
                  },
              },
          });
}
