s.d(e, { default: () => c }), s(667532);
var i = s(627968);
s(64700);
var a = s(110259),
    _ = s(397927),
    n = s(954376),
    r = s(734057),
    A = s(287809),
    l = s(954571),
    I = s(549022),
    E = s(212758),
    o = s(90386),
    d = s(64175),
    h = s(652215),
    u = s(985018),
    L = s(441805);
function c(t) {
    var e, s;
    let c,
        N,
        { channelId: C, blockedUserIds: g, ignoredUserIds: f, transitionState: m, onClose: P, onJoin: O } = t,
        G = Array.from(g)
            .map((t) => A.default.getUser(t))
            .filter((t) => null !== t),
        p = Array.from(f)
            .map((t) => A.default.getUser(t))
            .filter((t) => null !== t);
    return 0 === G.length && 0 === p.length
        ? null
        : (0, i.jsx)(E.A, {
              headerText: u.intl.string(u.t.zPUmzZ),
              descriptionText:
                  ((e = g.size),
                  (s = f.size),
                  (c = e > 0),
                  (N = s > 0),
                  c && N
                      ? u.intl.string(u.t["X/iIjg"])
                      : c
                        ? u.intl.formatToPlainString(u.t.WgQ12s, { n: e })
                        : N
                          ? u.intl.formatToPlainString(u.t.bwibp1, { n: s })
                          : null),
              infoRows: ((t) => {
                  let { channelId: e, blockedUsers: s, ignoredUsers: a } = t,
                      A = r.A.getChannel(e),
                      l = s.length > 0,
                      I = a.length > 0,
                      E = [
                          {
                              icon: (0, i.jsx)("div", { className: L.Kk, children: (0, i.jsx)(_.id, {}) }),
                              text: u.intl.string(u.t["7jN3FC"]),
                              className: L.nM,
                          },
                      ];
                  if (l && I) {
                      let t = [...s, ...a],
                          r = t.slice(0, 2).map((t) => t.id);
                      E.unshift({
                          icon: (0, i.jsx)("div", {
                              className: L.Kk,
                              children: (0, i.jsx)(n.A, { recipients: r, size: _._3J.SIZE_32 }),
                          }),
                          text: (0, o.T)(r, t.length, A?.guild_id, e),
                          className: L.nM,
                      });
                  } else {
                      let t = l ? s.slice(0, 2).map((t) => t.id) : a.slice(0, 2).map((t) => t.id),
                          _ = l ? s.length : a.length;
                      E.unshift({
                          icon: (0, i.jsx)("div", { className: L.Kk, children: (0, o.I)(t, A?.guild_id) }),
                          text: (0, o.T)(t, _, A?.guild_id, e),
                          className: L.nM,
                      });
                  }
                  return E;
              })({ channelId: C, blockedUsers: G, ignoredUsers: p }),
              onDismissAndStay: () => {
                  O(),
                      P(),
                      (0, I.Cs)(new Set([...g, ...f])),
                      l.default.track(h.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: d.Qi.CLICK_TO_JOIN,
                          channel_id: C,
                          blocked_user_ids: Array.from(g),
                          ignored_user_ids: Array.from(f),
                          warning_surface: d.gD.PRE_JOIN_MODAL,
                      });
              },
              onDismissAndLeave: () => {
                  P(),
                      l.default.track(h.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                          action: d.Qi.CLICK_TO_LEAVE,
                          channel_id: C,
                          blocked_user_ids: Array.from(g),
                          ignored_user_ids: Array.from(f),
                          warning_surface: d.gD.PRE_JOIN_MODAL,
                      });
              },
              leaveButtonText: u.intl.string(u.t.rOXspL),
              stayButtonText: u.intl.string(u.t.VJlc0S),
              transitionState: m,
              onClose: P,
              impression: {
                  impressionName: a.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
                  impressionProperties: {
                      channel_id: C,
                      blocked_user_ids: Array.from(g),
                      warning_surface: d.gD.PRE_JOIN_MODAL,
                  },
              },
          });
}
