n.d(t, { Z: () => E });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(122810),
    l = n(74433),
    u = n(750881),
    c = n(545957),
    d = n(699516),
    f = n(6074),
    _ = n(584973),
    p = n(303524),
    h = n(170187),
    m = n(981631),
    g = n(394347);
function E(e) {
    var t;
    let { activities: n, applicationStream: r, textClassName: E, emojiClassName: v, animate: y = !0, hideTooltip: I = !1, hideEmoji: T = !1, user: b, hasQuest: S } = e,
        A = 'activity-status-web',
        { blockeeExperimentEnabled: N, blockerExperimentEnabled: C } = (0, u.NR)(A);
    (0, c.Z)(null == b ? void 0 : b.id, A);
    let R = (0, s.e7)([d.Z], () => d.Z.isBlocked(null == b ? void 0 : b.id));
    if (C && R) return null;
    let O = (0, l.Z)(n, r, void 0, N),
        D = null == O ? void 0 : O.activityText,
        L = null != D && '' !== D,
        x =
            null !==
                (t =
                    null == n
                        ? void 0
                        : n.find((e) => {
                              let { type: t } = e;
                              return t === m.IIU.CUSTOM_STATUS;
                          })) && void 0 !== t
                ? t
                : null,
        P =
            (null == x ? void 0 : x.emoji) == null || T
                ? null
                : (0, i.jsx)(_.Z, {
                      emoji: x.emoji,
                      animate: y,
                      hideTooltip: I,
                      className: a()(g.emoji, v)
                  });
    return L || null != P
        ? (0, i.jsxs)('div', {
              className: g.container,
              children: [
                  P,
                  (0, i.jsx)(h.Z, {
                      className: E,
                      children: D
                  }),
                  S && (0, i.jsx)(p.Z, { className: g.questsIcon }),
                  (null == n ? void 0 : n.some(o.Z)) &&
                      (0, i.jsx)(f.Z, {
                          width: 16,
                          height: 16,
                          className: g.icon
                      })
              ]
          })
        : null;
}
