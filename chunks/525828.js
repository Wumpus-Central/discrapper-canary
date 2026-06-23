n.d(e, { default: () => E }), n(667532);
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
    f = n(375708),
    A = n(131678);
function E(i) {
    var e, n;
    let E,
        h,
        { channelId: p, blockedUserIds: C, ignoredUserIds: I, transitionState: O, onClose: L, onJoin: x } = i,
        k = Array.from(C)
            .map((i) => d.default.getUser(i))
            .filter((i) => null !== i),
        T = Array.from(I)
            .map((i) => d.default.getUser(i))
            .filter((i) => null !== i);
    return 0 === k.length && 0 === T.length
        ? null
        : (0, t.jsx)(u.A, {
              headerText: f.intl.string(f.t.zPUmzZ),
              descriptionText:
                  ((e = C.size),
                  (n = I.size),
                  (E = e > 0),
                  (h = n > 0),
                  E && h
                      ? f.intl.string(f.t["X/iIjg"])
                      : E
                        ? f.intl.formatToPlainString(f.t.WgQ12s, { n: e })
                        : h
                          ? f.intl.formatToPlainString(f.t.bwibp1, { n: n })
                          : null),
              infoRows: (function (i) {
                  let { channelId: e, blockedUsers: n, ignoredUsers: s } = i,
                      d = _.A.getChannel(e),
                      o = n.length > 0,
                      c = s.length > 0,
                      u = [
                          {
                              icon: (0, t.jsx)("div", { className: A.Kk, children: (0, t.jsx)(r.i, {}) }),
                              text: f.intl.string(f.t["7jN3FC"]),
                              className: A.nM,
                          },
                      ];
                  if (o && c) {
                      let i = [...n, ...s],
                          r = i.slice(0, 2).map((i) => i.id);
                      u.unshift({
                          icon: (0, t.jsx)("div", {
                              className: A.Kk,
                              children: (0, t.jsx)(l.A, { recipients: r, size: a._3.SIZE_32 }),
                          }),
                          text: (0, g.T)(r, i.length, d?.guild_id, e),
                          className: A.nM,
                      });
                  } else {
                      let i = o ? n.slice(0, 2).map((i) => i.id) : s.slice(0, 2).map((i) => i.id),
                          r = o ? n.length : s.length;
                      u.unshift({
                          icon: (0, t.jsx)("div", { className: A.Kk, children: (0, g.I)(i, d?.guild_id) }),
                          text: (0, g.T)(i, r, d?.guild_id, e),
                          className: A.nM,
                      });
                  }
                  return u;
              })({ channelId: p, blockedUsers: k, ignoredUsers: T }),
              onDismissAndStay: function () {
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
              onDismissAndLeave: function () {
                  L(),
                      o.default.track(N.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: m.Qi.CLICK_TO_LEAVE,
                          channel_id: p,
                          blocked_user_ids: Array.from(C),
                          ignored_user_ids: Array.from(I),
                          warning_surface: m.gD.PRE_JOIN_MODAL,
                      });
              },
              leaveButtonText: f.intl.string(f.t.rOXspL),
              stayButtonText: f.intl.string(f.t.VJlc0S),
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
