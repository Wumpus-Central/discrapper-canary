n.d(t, { Z: () => C }), n(388685);
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
    x = n(388032);
let C = function (e) {
    let { className: t, style: n, channel: C, draftType: v } = e,
        [j, O] = i.useState(!0),
        E = (0, l.e7)([d.Z], () => d.Z.hasLayers()),
        I = (0, l.e7)([p.Z], () => null != C && p.Z.can(y.Plq.ATTACH_FILES, C), [C]),
        P = null != (0, l.e7)([o.Z], () => o.Z.getActiveCommand(C.id)),
        S = C.getGuildId(),
        Z = v === s.d.FirstThreadMessage,
        N = (0, l.e7)([f.default], () => {
            var e;
            return !0 == !(null == (e = f.default.getCurrentUser()) ? void 0 : e.nsfwAllowed);
        }),
        T = (0, l.e7)([c.Z], () => c.Z.didAgree(S)) && !N,
        A = i.useMemo(() => !E && ((C.isPrivate() && !C.isManaged()) || (null != S && (!C.isNSFW() || T) && I && u.Z.canChatInGuild(S))), [I, T, C, S, E]),
        w = Z ? (y.TPd.GUILD_THREADS_ONLY.has(C.type) ? x.intl.string(x.t.RBBLhI) : x.intl.string(x.t.gUx4en)) : j ? x.intl.format(x.t.dYP2FR, { destination: (0, a.F6)(C, f.default, h.Z, !0) }) : x.intl.string(x.t.h76ulJ);
    return P || !A
        ? null
        : (0, r.jsx)(b.Z, {
              className: t,
              style: n,
              title: w,
              description: Z ? x.intl.string(x.t.lpgkzs) : x.intl.string(x.t.usQh4O),
              icons: _.J6,
              onDrop: (e) => {
                  if (P) return !1;
                  A &&
                      null != C &&
                      ((0, g.d)(e, C, v, {
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
