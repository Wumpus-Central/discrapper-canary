(n.d(t, { Z: () => v }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(622822),
    o = n(998698),
    s = n(933557),
    c = n(703558),
    u = n(731290),
    d = n(607744),
    p = n(819640),
    h = n(496675),
    f = n(699516),
    m = n(594174),
    g = n(585483),
    b = n(127654),
    _ = n(205822),
    y = n(731994),
    C = n(981631),
    x = n(388032);
let v = function (e) {
    let { className: t, style: n, channel: v, draftType: j } = e,
        [O, E] = i.useState(!0),
        S = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
        P = (0, l.e7)([h.Z], () => null != v && h.Z.can(C.Plq.ATTACH_FILES, v), [v]),
        I = null != (0, l.e7)([o.Z], () => o.Z.getActiveCommand(v.id)),
        Z = v.getGuildId(),
        T = j === c.d.FirstThreadMessage,
        N = (0, l.e7)([m.default], () => {
            var e;
            return !0 == !(null == (e = m.default.getCurrentUser()) ? void 0 : e.nsfwAllowed);
        }),
        A = (0, l.e7)([u.Z], () => u.Z.didAgree(Z)) && !N,
        w = i.useMemo(() => !S && ((v.isPrivate() && !v.isManaged()) || (null != Z && (!(0, a.aC)(v) || A) && P && d.Z.canChatInGuild(Z))), [P, A, v, Z, S]),
        R = T ? (C.TPd.GUILD_THREADS_ONLY.has(v.type) ? x.intl.string(x.t.RBBLhI) : x.intl.string(x.t.gUx4en)) : O ? x.intl.format(x.t.dYP2FR, { destination: (0, s.F6)(v, m.default, f.Z, !0) }) : x.intl.string(x.t.h76ulJ);
    return I || !w
        ? null
        : (0, r.jsx)(_.Z, {
              className: t,
              style: n,
              title: R,
              description: T ? x.intl.string(x.t.lpgkzs) : x.intl.string(x.t.usQh4O),
              icons: y.J6,
              onDrop: (e) => {
                  if (I) return !1;
                  w &&
                      null != v &&
                      ((0, b.d)(e, v, j, {
                          requireConfirm: O,
                          showLargeMessageDialog: !1,
                          origin: 'drag_drop'
                      }),
                      g.S.dispatchToLastSubscribed(C.CkL.TEXTAREA_FOCUS));
              },
              onDragClear: () => E(!0),
              onDragOver: (e) => {
                  if (I) return !1;
                  T || e.shiftKey !== O || E(!e.shiftKey);
              }
          });
};
