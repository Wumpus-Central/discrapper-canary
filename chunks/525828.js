n.d(_, { default: () => h }), n(667532);
var t = n(627968);
n(64700);
var i = n(110259),
    s = n(738188),
    r = n(778712),
    a = n(954376),
    l = n(734057),
    c = n(287809),
    o = n(954571),
    d = n(549022),
    u = n(212758),
    g = n(90386),
    m = n(64175),
    p = n(652215),
    f = n(985018),
    N = n(131678);
function h(e) {
    var _, n;
    let h,
        A,
        { channelId: C, blockedUserIds: E, ignoredUserIds: I, transitionState: M, onClose: x, onJoin: O } = e,
        k = Array.from(E)
            .map((e) => c.default.getUser(e))
            .filter((e) => null !== e),
        L = Array.from(I)
            .map((e) => c.default.getUser(e))
            .filter((e) => null !== e);
    return 0 === k.length && 0 === L.length
        ? null
        : (0, t.jsx)(u.A, {
              headerText: f.intl.string(f.t.zPUmzZ),
              descriptionText:
                  ((_ = E.size),
                  (n = I.size),
                  (h = _ > 0),
                  (A = n > 0),
                  h && A
                      ? f.intl.string(f.t["X/iIjg"])
                      : h
                        ? f.intl.formatToPlainString(f.t.WgQ12s, { n: _ })
                        : A
                          ? f.intl.formatToPlainString(f.t.bwibp1, { n: n })
                          : null),
              infoRows: ((e) => {
                  let { channelId: _, blockedUsers: n, ignoredUsers: i } = e,
                      c = l.A.getChannel(_),
                      o = n.length > 0,
                      d = i.length > 0,
                      u = [
                          {
                              icon: (0, t.jsx)("div", { className: N.Kk, children: (0, t.jsx)(s.i, {}) }),
                              text: f.intl.string(f.t["7jN3FC"]),
                              className: N.nM,
                          },
                      ];
                  if (o && d) {
                      let e = [...n, ...i],
                          s = e.slice(0, 2).map((e) => e.id);
                      u.unshift({
                          icon: (0, t.jsx)("div", {
                              className: N.Kk,
                              children: (0, t.jsx)(a.A, { recipients: s, size: r._3.SIZE_32 }),
                          }),
                          text: (0, g.T)(s, e.length, c?.guild_id, _),
                          className: N.nM,
                      });
                  } else {
                      let e = o ? n.slice(0, 2).map((e) => e.id) : i.slice(0, 2).map((e) => e.id),
                          s = o ? n.length : i.length;
                      u.unshift({
                          icon: (0, t.jsx)("div", { className: N.Kk, children: (0, g.I)(e, c?.guild_id) }),
                          text: (0, g.T)(e, s, c?.guild_id, _),
                          className: N.nM,
                      });
                  }
                  return u;
              })({ channelId: C, blockedUsers: k, ignoredUsers: L }),
              onDismissAndStay: () => {
                  O(),
                      x(),
                      (0, d.Cs)(new Set([...E, ...I])),
                      o.default.track(p.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: m.Qi.CLICK_TO_JOIN,
                          channel_id: C,
                          blocked_user_ids: Array.from(E),
                          ignored_user_ids: Array.from(I),
                          warning_surface: m.gD.PRE_JOIN_MODAL,
                      });
              },
              onDismissAndLeave: () => {
                  x(),
                      o.default.track(p.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: m.Qi.CLICK_TO_LEAVE,
                          channel_id: C,
                          blocked_user_ids: Array.from(E),
                          ignored_user_ids: Array.from(I),
                          warning_surface: m.gD.PRE_JOIN_MODAL,
                      });
              },
              leaveButtonText: f.intl.string(f.t.rOXspL),
              stayButtonText: f.intl.string(f.t.VJlc0S),
              transitionState: M,
              onClose: x,
              impression: {
                  impressionName: i.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
                  impressionProperties: {
                      channel_id: C,
                      blocked_user_ids: Array.from(E),
                      warning_surface: m.gD.PRE_JOIN_MODAL,
                  },
              },
          });
}
