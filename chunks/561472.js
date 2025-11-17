n.d(t, { Z: () => _ }), n(388685);
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
    y = n(731994),
    C = n(981631),
    v = n(388032);
let _ = function (e) {
    let { className: t, style: n, channel: _, draftType: x } = e,
        [j, O] = r.useState(!0),
        E = (0, l.e7)([d.Z], () => d.Z.hasLayers()),
        S = (0, l.e7)([p.Z], () => null != _ && p.Z.can(C.Plq.ATTACH_FILES, _), [_]),
        P = null != (0, l.e7)([o.Z], () => o.Z.getActiveCommand(_.id)),
        I = _.getGuildId(),
        Z = x === c.d.FirstThreadMessage,
        T = (0, a.$5)(_),
        N = r.useMemo(
            () => !E && ((_.isPrivate() && !_.isManaged()) || (null != I && !T && S && u.Z.canChatInGuild(I))),
            [S, T, _, I, E],
        ),
        A = Z
            ? C.TPd.GUILD_THREADS_ONLY.has(_.type)
                ? v.intl.string(v.t.RBBLhL)
                : v.intl.string(v.t.gUx4eu)
            : j
              ? v.intl.format(v.t.dYP2Fc, { destination: (0, s.F6)(_, f.default, h.Z, !0) })
              : v.intl.string(v.t.h76ulG);
    return P || !N
        ? null
        : (0, i.jsx)(b.Z, {
              className: t,
              style: n,
              title: A,
              description: Z ? v.intl.string(v.t.lpgkzq) : v.intl.string(v.t.usQh4J),
              icons: y.J6,
              onDrop: (e) => {
                  if (P) return !1;
                  N &&
                      null != _ &&
                      ((0, g.d)(e, _, x, {
                          requireConfirm: j,
                          showLargeMessageDialog: !1,
                          origin: "drag_drop",
                      }),
                      m.S.dispatchToLastSubscribed(C.CkL.TEXTAREA_FOCUS));
              },
              onDragClear: () => O(!0),
              onDragOver: (e) => {
                  if (P) return !1;
                  Z || e.shiftKey !== j || O(!e.shiftKey);
              },
          });
};
