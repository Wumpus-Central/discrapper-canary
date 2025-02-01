n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(998698),
    s = n(933557),
    o = n(703558),
    c = n(731290),
    d = n(607744),
    u = n(819640),
    h = n(496675),
    p = n(699516),
    m = n(594174),
    f = n(585483),
    g = n(127654),
    _ = n(205822),
    C = n(731994),
    x = n(981631),
    v = n(388032);
let E = function (e) {
    let { className: t, style: n, channel: E, draftType: I } = e,
        [b, Z] = l.useState(!0),
        N = (0, a.e7)([u.Z], () => u.Z.hasLayers()),
        T = (0, a.e7)([h.Z], () => null != E && h.Z.can(x.Plq.ATTACH_FILES, E), [E]),
        S = null != (0, a.e7)([r.Z], () => r.Z.getActiveCommand(E.id)),
        j = E.getGuildId(),
        A = I === o.d.FirstThreadMessage,
        y = (0, a.e7)([m.default], () => {
            var e;
            return !0 == !(null === (e = m.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed);
        }),
        P = (0, a.e7)([c.Z], () => c.Z.didAgree(j)) && !y,
        R = l.useMemo(() => !N && ((E.isPrivate() && !E.isManaged()) || (null != j && (!E.isNSFW() || P) && T && d.Z.canChatInGuild(j))), [T, P, E, j, N]),
        M = A ? (x.TPd.GUILD_THREADS_ONLY.has(E.type) ? v.intl.string(v.t.RBBLhI) : v.intl.string(v.t.gUx4en)) : b ? v.intl.format(v.t.dYP2FR, { destination: (0, s.F6)(E, m.default, p.Z, !0) }) : v.intl.string(v.t.h76ulJ);
    return S || !R
        ? null
        : (0, i.jsx)(_.Z, {
              className: t,
              style: n,
              title: M,
              description: A ? v.intl.string(v.t.lpgkzs) : v.intl.string(v.t.usQh4O),
              icons: C.J6,
              onDrop: (e) => {
                  if (S) return !1;
                  R &&
                      null != E &&
                      ((0, g.d)(e, E, I, {
                          requireConfirm: b,
                          showLargeMessageDialog: !1
                      }),
                      f.S.dispatchToLastSubscribed(x.CkL.TEXTAREA_FOCUS));
              },
              onDragClear: () => Z(!0),
              onDragOver: (e) => {
                  if (S) return !1;
                  A || e.shiftKey !== b || Z(!e.shiftKey);
              }
          });
};
