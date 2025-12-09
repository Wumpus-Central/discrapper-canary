n.d(t, { Z: () => v }), n(388685);
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
    h = n(699516),
    f = n(594174),
    m = n(585483),
    g = n(127654),
    b = n(205822),
    C = n(731994),
    y = n(981631),
    _ = n(388032);
let v = function (e) {
    let { className: t, style: n, channel: v, draftType: O } = e,
        [x, E] = r.useState(!0),
        j = (0, l.e7)([d.Z], () => d.Z.hasLayers()),
        S = (0, l.e7)([p.Z], () => null != v && p.Z.can(y.Plq.ATTACH_FILES, v), [v]),
        P = null != (0, l.e7)([o.Z], () => o.Z.getActiveCommand(v.id)),
        I = v.getGuildId(),
        Z = O === c.d.FirstThreadMessage,
        T = (0, a.$5)(v),
        N = r.useMemo(
            () => !j && ((v.isPrivate() && !v.isManaged()) || (null != I && !T && S && u.Z.canChatInGuild(I))),
            [S, T, v, I, j],
        ),
        A = Z
            ? y.TPd.GUILD_THREADS_ONLY.has(v.type)
                ? _.intl.string(_.t.RBBLhL)
                : _.intl.string(_.t.gUx4eu)
            : x
              ? _.intl.format(_.t.dYP2Fc, { destination: (0, s.F6)(v, f.default, h.Z, !0) })
              : _.intl.string(_.t.h76ulG);
    return P || !N
        ? null
        : (0, i.jsx)(b.Z, {
              className: t,
              style: n,
              title: A,
              description: Z ? _.intl.string(_.t.lpgkzq) : _.intl.string(_.t.usQh4J),
              icons: C.J6,
              onDrop: (e) => {
                  if (P) return !1;
                  N &&
                      null != v &&
                      ((0, g.d)(e, v, O, {
                          requireConfirm: x,
                          showLargeMessageDialog: !1,
                          origin: "drag_drop",
                      }),
                      m.S.dispatchToLastSubscribed(y.CkL.TEXTAREA_FOCUS));
              },
              onDragClear: () => E(!0),
              onDragOver: (e) => {
                  if (P) return !1;
                  Z || e.shiftKey !== x || E(!e.shiftKey);
              },
          });
};
