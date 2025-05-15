n.d(t, { Z: () => y }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(998698),
    o = n(933557),
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
    x = n(388032);
let y = function (e) {
    let { className: t, style: n, channel: y, draftType: v } = e,
        [j, O] = i.useState(!0),
        E = (0, l.e7)([d.Z], () => d.Z.hasLayers()),
        I = (0, l.e7)([p.Z], () => null != y && p.Z.can(C.Plq.ATTACH_FILES, y), [y]),
        S = null != (0, l.e7)([a.Z], () => a.Z.getActiveCommand(y.id)),
        P = y.getGuildId(),
        Z = v === s.d.FirstThreadMessage,
        N = (0, l.e7)([f.default], () => {
            var e;
            return !0 == !(null == (e = f.default.getCurrentUser()) ? void 0 : e.nsfwAllowed);
        }),
        T = (0, l.e7)([c.Z], () => c.Z.didAgree(P)) && !N,
        A = i.useMemo(() => !E && ((y.isPrivate() && !y.isManaged()) || (null != P && (!y.isNSFW() || T) && I && u.Z.canChatInGuild(P))), [I, T, y, P, E]),
        w = Z ? (C.TPd.GUILD_THREADS_ONLY.has(y.type) ? x.intl.string(x.t.RBBLhI) : x.intl.string(x.t.gUx4en)) : j ? x.intl.format(x.t.dYP2FR, { destination: (0, o.F6)(y, f.default, h.Z, !0) }) : x.intl.string(x.t.h76ulJ);
    return S || !A
        ? null
        : (0, r.jsx)(b.Z, {
              className: t,
              style: n,
              title: w,
              description: Z ? x.intl.string(x.t.lpgkzs) : x.intl.string(x.t.usQh4O),
              icons: _.J6,
              onDrop: (e) => {
                  if (S) return !1;
                  A &&
                      null != y &&
                      ((0, g.d)(e, y, v, {
                          requireConfirm: j,
                          showLargeMessageDialog: !1
                      }),
                      m.S.dispatchToLastSubscribed(C.CkL.TEXTAREA_FOCUS));
              },
              onDragClear: () => O(!0),
              onDragOver: (e) => {
                  if (S) return !1;
                  Z || e.shiftKey !== j || O(!e.shiftKey);
              }
          });
};
