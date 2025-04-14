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
    y = n(731994),
    _ = n(981631),
    C = n(388032);
let x = function (e) {
    let { className: t, style: n, channel: x, draftType: v } = e,
        [j, O] = i.useState(!0),
        E = (0, l.e7)([d.Z], () => d.Z.hasLayers()),
        N = (0, l.e7)([p.Z], () => null != x && p.Z.can(_.Plq.ATTACH_FILES, x), [x]),
        I = null != (0, l.e7)([o.Z], () => o.Z.getActiveCommand(x.id)),
        P = x.getGuildId(),
        S = v === s.d.FirstThreadMessage,
        Z = (0, l.e7)([f.default], () => {
            var e;
            return !0 == !(null == (e = f.default.getCurrentUser()) ? void 0 : e.nsfwAllowed);
        }),
        T = (0, l.e7)([c.Z], () => c.Z.didAgree(P)) && !Z,
        A = i.useMemo(() => !E && ((x.isPrivate() && !x.isManaged()) || (null != P && (!x.isNSFW() || T) && N && u.Z.canChatInGuild(P))), [N, T, x, P, E]),
        w = S ? (_.TPd.GUILD_THREADS_ONLY.has(x.type) ? C.NW.string(C.t.RBBLhI) : C.NW.string(C.t.gUx4en)) : j ? C.NW.format(C.t.dYP2FR, { destination: (0, a.F6)(x, f.default, h.Z, !0) }) : C.NW.string(C.t.h76ulJ);
    return I || !A
        ? null
        : (0, r.jsx)(b.Z, {
              className: t,
              style: n,
              title: w,
              description: S ? C.NW.string(C.t.lpgkzs) : C.NW.string(C.t.usQh4O),
              icons: y.J6,
              onDrop: (e) => {
                  if (I) return !1;
                  A &&
                      null != x &&
                      ((0, g.d)(e, x, v, {
                          requireConfirm: j,
                          showLargeMessageDialog: !1
                      }),
                      m.S.dispatchToLastSubscribed(_.CkL.TEXTAREA_FOCUS));
              },
              onDragClear: () => O(!0),
              onDragOver: (e) => {
                  if (I) return !1;
                  S || e.shiftKey !== j || O(!e.shiftKey);
              }
          });
};
