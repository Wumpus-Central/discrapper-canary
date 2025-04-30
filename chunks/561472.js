n.d(t, { Z: () => x }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(998698),
    a = n(933557),
    s = n(703558),
    c = n(731290),
    u = n(607744),
    d = n(819640),
    p = n(496675),
    h = n(699516),
    f = n(594174),
    m = n(585483),
    g = n(127654),
    b = n(205822),
    _ = n(731994),
    y = n(981631),
    C = n(388032);
let x = function (e) {
    let { className: t, style: n, channel: x, draftType: v } = e,
        [j, O] = i.useState(!0),
        E = (0, l.e7)([d.Z], () => d.Z.hasLayers()),
        I = (0, l.e7)([p.Z], () => null != x && p.Z.can(y.Plq.ATTACH_FILES, x), [x]),
        P = null != (0, l.e7)([o.Z], () => o.Z.getActiveCommand(x.id)),
        S = x.getGuildId(),
        Z = v === s.d.FirstThreadMessage,
        N = (0, l.e7)([f.default], () => {
            var e;
            return !0 == !(null == (e = f.default.getCurrentUser()) ? void 0 : e.nsfwAllowed);
        }),
        T = (0, l.e7)([c.Z], () => c.Z.didAgree(S)) && !N,
        A = i.useMemo(() => !E && ((x.isPrivate() && !x.isManaged()) || (null != S && (!x.isNSFW() || T) && I && u.Z.canChatInGuild(S))), [I, T, x, S, E]),
        w = Z ? (y.TPd.GUILD_THREADS_ONLY.has(x.type) ? C.intl.string(C.t.RBBLhI) : C.intl.string(C.t.gUx4en)) : j ? C.intl.format(C.t.dYP2FR, { destination: (0, a.F6)(x, f.default, h.Z, !0) }) : C.intl.string(C.t.h76ulJ);
    return P || !A
        ? null
        : (0, r.jsx)(b.Z, {
              className: t,
              style: n,
              title: w,
              description: Z ? C.intl.string(C.t.lpgkzs) : C.intl.string(C.t.usQh4O),
              icons: _.J6,
              onDrop: (e) => {
                  if (P) return !1;
                  A &&
                      null != x &&
                      ((0, g.d)(e, x, v, {
                          requireConfirm: j,
                          showLargeMessageDialog: !1
                      }),
                      m.S.dispatchToLastSubscribed(y.CkL.TEXTAREA_FOCUS));
              },
              onDragClear: () => O(!0),
              onDragOver: (e) => {
                  if (P) return !1;
                  Z || e.shiftKey !== j || O(!e.shiftKey);
              }
          });
};
