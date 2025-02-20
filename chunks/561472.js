n.d(t, { Z: () => y }), n(47120);
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
    C = n(981631),
    v = n(388032);
let y = function (e) {
    let { className: t, style: n, channel: y, draftType: x } = e,
        [j, O] = i.useState(!0),
        N = (0, l.e7)([d.Z], () => d.Z.hasLayers()),
        E = (0, l.e7)([p.Z], () => null != y && p.Z.can(C.Plq.ATTACH_FILES, y), [y]),
        P = null != (0, l.e7)([o.Z], () => o.Z.getActiveCommand(y.id)),
        I = y.getGuildId(),
        S = x === s.d.FirstThreadMessage,
        Z = (0, l.e7)([f.default], () => {
            var e;
            return !0 == !(null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed);
        }),
        T = (0, l.e7)([c.Z], () => c.Z.didAgree(I)) && !Z,
        A = i.useMemo(() => !N && ((y.isPrivate() && !y.isManaged()) || (null != I && (!y.isNSFW() || T) && E && u.Z.canChatInGuild(I))), [E, T, y, I, N]),
        w = S ? (C.TPd.GUILD_THREADS_ONLY.has(y.type) ? v.NW.string(v.t.RBBLhI) : v.NW.string(v.t.gUx4en)) : j ? v.NW.format(v.t.dYP2FR, { destination: (0, a.F6)(y, f.default, h.Z, !0) }) : v.NW.string(v.t.h76ulJ);
    return P || !A
        ? null
        : (0, r.jsx)(b.Z, {
              className: t,
              style: n,
              title: w,
              description: S ? v.NW.string(v.t.lpgkzs) : v.NW.string(v.t.usQh4O),
              icons: _.J6,
              onDrop: (e) => {
                  if (P) return !1;
                  A &&
                      null != y &&
                      ((0, g.d)(e, y, x, {
                          requireConfirm: j,
                          showLargeMessageDialog: !1
                      }),
                      m.S.dispatchToLastSubscribed(C.CkL.TEXTAREA_FOCUS));
              },
              onDragClear: () => O(!0),
              onDragOver: (e) => {
                  if (P) return !1;
                  S || e.shiftKey !== j || O(!e.shiftKey);
              }
          });
};
