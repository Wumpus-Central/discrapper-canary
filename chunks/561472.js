n.d(t, { Z: () => x }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(622822),
    o = n(998698),
    s = n(933557),
    c = n(703558),
    u = n(607744),
    d = n(819640),
    p = n(496675),
    h = n(699516),
    f = n(594174),
    m = n(585483),
    g = n(127654),
    b = n(205822),
    y = n(731994),
    _ = n(981631),
    C = n(388032);
let x = function (e) {
    let { className: t, style: n, channel: x, draftType: v } = e,
        [O, j] = i.useState(!0),
        E = (0, l.e7)([d.Z], () => d.Z.hasLayers()),
        S = (0, l.e7)([p.Z], () => null != x && p.Z.can(_.Plq.ATTACH_FILES, x), [x]),
        I = null != (0, l.e7)([o.Z], () => o.Z.getActiveCommand(x.id)),
        P = x.getGuildId(),
        Z = v === c.d.FirstThreadMessage,
        T = (0, a.$5)(x),
        N = i.useMemo(
            () => !E && ((x.isPrivate() && !x.isManaged()) || (null != P && !T && S && u.Z.canChatInGuild(P))),
            [S, T, x, P, E],
        ),
        A = Z
            ? _.TPd.GUILD_THREADS_ONLY.has(x.type)
                ? C.intl.string(C.t.RBBLhI)
                : C.intl.string(C.t.gUx4en)
            : O
              ? C.intl.format(C.t.dYP2FR, { destination: (0, s.F6)(x, f.default, h.Z, !0) })
              : C.intl.string(C.t.h76ulJ);
    return I || !N
        ? null
        : (0, r.jsx)(b.Z, {
              className: t,
              style: n,
              title: A,
              description: Z ? C.intl.string(C.t.lpgkzs) : C.intl.string(C.t.usQh4O),
              icons: y.J6,
              onDrop: (e) => {
                  if (I) return !1;
                  N &&
                      null != x &&
                      ((0, g.d5)(e, x, v, {
                          requireConfirm: O,
                          showLargeMessageDialog: !1,
                          origin: "drag_drop",
                      }),
                      m.S.dispatchToLastSubscribed(_.CkL.TEXTAREA_FOCUS));
              },
              onDragClear: () => j(!0),
              onDragOver: (e) => {
                  if (I) return !1;
                  Z || e.shiftKey !== O || j(!e.shiftKey);
              },
          });
};
