n.d(t, { Z: () => x }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(442837),
    a = n(622822),
    o = n(998698),
    s = n(933557),
    c = n(703558),
    u = n(607744),
    d = n(819640),
    p = n(496675),
    f = n(699516),
    h = n(594174),
    m = n(585483),
    g = n(127654),
    b = n(205822),
    C = n(731994),
    y = n(981631),
    v = n(388032);
let x = function (e) {
    let { className: t, style: n, channel: x, draftType: O } = e,
        [E, j] = r.useState(!0),
        S = (0, l.e7)([d.Z], () => d.Z.hasLayers()),
        _ = (0, l.e7)([p.Z], () => null != x && p.Z.can(y.Plq.ATTACH_FILES, x), [x]),
        P = null != (0, l.e7)([o.Z], () => o.Z.getActiveCommand(x.id)),
        I = x.getGuildId(),
        Z = O === c.d.FirstThreadMessage,
        T = (0, a.$5)(x),
        N = r.useMemo(
            () => !S && ((x.isPrivate() && !x.isManaged()) || (null != I && !T && _ && u.Z.canChatInGuild(I))),
            [_, T, x, I, S],
        ),
        A = Z
            ? y.TPd.GUILD_THREADS_ONLY.has(x.type)
                ? v.intl.string(v.t.RBBLhL)
                : v.intl.string(v.t.gUx4eu)
            : E
              ? v.intl.format(v.t.dYP2Fc, { destination: (0, s.F6)(x, h.default, f.Z, !0) })
              : v.intl.string(v.t.h76ulG);
    return P || !N
        ? null
        : (0, i.jsx)(b.Z, {
              className: t,
              style: n,
              title: A,
              description: Z ? v.intl.string(v.t.lpgkzq) : v.intl.string(v.t.usQh4J),
              icons: C.J6,
              onDrop: (e) => {
                  if (P) return !1;
                  N &&
                      null != x &&
                      ((0, g.d)(e, x, O, {
                          requireConfirm: E,
                          showLargeMessageDialog: !1,
                          origin: "drag_drop",
                      }),
                      m.S.dispatchToLastSubscribed(y.CkL.TEXTAREA_FOCUS));
              },
              onDragClear: () => j(!0),
              onDragOver: (e) => {
                  if (P) return !1;
                  Z || e.shiftKey !== E || j(!e.shiftKey);
              },
          });
};
