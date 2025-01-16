n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(998698),
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
    C = n(205822),
    x = n(731994),
    v = n(981631),
    _ = n(388032);
t.Z = function (e) {
    let { className: t, style: n, channel: I, draftType: E } = e,
        [b, Z] = l.useState(!0),
        N = (0, r.e7)([u.Z], () => u.Z.hasLayers()),
        S = (0, r.e7)([h.Z], () => null != I && h.Z.can(v.Plq.ATTACH_FILES, I), [I]),
        T = null != (0, r.e7)([a.Z], () => a.Z.getActiveCommand(I.id)),
        j = I.getGuildId(),
        A = E === o.d.FirstThreadMessage,
        y = (0, r.e7)([m.default], () => {
            var e;
            return !0 == !(null === (e = m.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed);
        }),
        P = (0, r.e7)([c.Z], () => c.Z.didAgree(j)) && !y,
        M = l.useMemo(() => !N && ((I.isPrivate() && !I.isManaged()) || (null != j && (!I.isNSFW() || P) && S && d.Z.canChatInGuild(j))), [S, P, I, j, N]),
        R = A ? (v.TPd.GUILD_THREADS_ONLY.has(I.type) ? _.intl.string(_.t.RBBLhI) : _.intl.string(_.t.gUx4en)) : b ? _.intl.format(_.t.dYP2FR, { destination: (0, s.F6)(I, m.default, p.Z, !0) }) : _.intl.string(_.t.h76ulJ);
    return T || !M
        ? null
        : (0, i.jsx)(C.Z, {
              className: t,
              style: n,
              title: R,
              description: A ? _.intl.string(_.t.lpgkzs) : _.intl.string(_.t.usQh4O),
              icons: x.J6,
              onDrop: (e) => {
                  if (T) return !1;
                  M &&
                      null != I &&
                      ((0, g.d)(e, I, E, {
                          requireConfirm: b,
                          showLargeMessageDialog: !1
                      }),
                      f.S.dispatchToLastSubscribed(v.CkL.TEXTAREA_FOCUS));
              },
              onDragClear: () => Z(!0),
              onDragOver: (e) => {
                  if (T) return !1;
                  !A && e.shiftKey === b && Z(!e.shiftKey);
              }
          });
};
