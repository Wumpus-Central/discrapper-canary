n.d(t, { Z: () => E });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(122810),
    l = n(74433),
    c = n(750881),
    u = n(545957),
    d = n(699516),
    f = n(6074),
    p = n(584973),
    _ = n(303524),
    h = n(170187),
    m = n(981631),
    g = n(66973);
function E(e) {
    var t;
    let { activities: n, applicationStream: i, textClassName: E, emojiClassName: v, animate: b = !0, hideTooltip: y = !1, hideEmoji: O = !1, user: S, hasQuest: I } = e,
        T = 'activity-status-web',
        { blockeeExperimentEnabled: N, blockerExperimentEnabled: A } = (0, c.NR)(T);
    (0, u.Z)(null == S ? void 0 : S.id, T);
    let C = (0, a.e7)([d.Z], () => d.Z.isBlocked(null == S ? void 0 : S.id));
    if (A && C) return null;
    let R = (0, l.Z)(n, i, void 0, N),
        P = null == R ? void 0 : R.activityText,
        w = null != P && '' !== P,
        D =
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
        x =
            (null == D ? void 0 : D.emoji) == null || O
                ? null
                : (0, r.jsx)(p.Z, {
                      emoji: D.emoji,
                      animate: b,
                      hideTooltip: y,
                      className: o()(g.emoji, v)
                  });
    return w || null != x
        ? (0, r.jsxs)('div', {
              className: g.container,
              children: [
                  x,
                  (0, r.jsx)(h.Z, {
                      className: E,
                      children: P
                  }),
                  I && (0, r.jsx)(_.Z, { className: g.questsIcon }),
                  (null == n ? void 0 : n.some(s.Z)) &&
                      (0, r.jsx)(f.Z, {
                          width: 16,
                          height: 16,
                          className: g.icon
                      })
              ]
          })
        : null;
}
