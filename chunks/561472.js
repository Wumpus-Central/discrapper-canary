(n.d(t, { Z: () => v }), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(622822),
    s = n(998698),
    l = n(933557),
    c = n(703558),
    u = n(731290),
    d = n(607744),
    f = n(819640),
    _ = n(496675),
    p = n(699516),
    h = n(594174),
    m = n(585483),
    g = n(127654),
    E = n(205822),
    b = n(731994),
    y = n(981631),
    O = n(388032);
let v = function (e) {
    let { className: t, style: n, channel: v, draftType: I } = e,
        [T, S] = i.useState(!0),
        A = (0, o.e7)([f.Z], () => f.Z.hasLayers()),
        N = (0, o.e7)([_.Z], () => null != v && _.Z.can(y.Plq.ATTACH_FILES, v), [v]),
        C = null != (0, o.e7)([s.Z], () => s.Z.getActiveCommand(v.id)),
        R = v.getGuildId(),
        P = I === c.d.FirstThreadMessage,
        w = (0, o.e7)([h.default], () => {
            var e;
            return !0 == !(null == (e = h.default.getCurrentUser()) ? void 0 : e.nsfwAllowed);
        }),
        D = (0, o.e7)([u.Z], () => u.Z.didAgree(R)) && !w,
        L = i.useMemo(() => !A && ((v.isPrivate() && !v.isManaged()) || (null != R && (!(0, a.aC)(v) || D) && N && d.Z.canChatInGuild(R))), [N, D, v, R, A]),
        x = (e) => {
            if (C) return !1;
            L &&
                null != v &&
                ((0, g.d)(e, v, I, {
                    requireConfirm: T,
                    showLargeMessageDialog: !1,
                    origin: 'drag_drop'
                }),
                m.S.dispatchToLastSubscribed(y.CkL.TEXTAREA_FOCUS));
        },
        M = () => S(!0),
        k = (e) => {
            if (C) return !1;
            P || e.shiftKey !== T || S(!e.shiftKey);
        },
        j = P ? (y.TPd.GUILD_THREADS_ONLY.has(v.type) ? O.intl.string(O.t.RBBLhI) : O.intl.string(O.t.gUx4en)) : T ? O.intl.format(O.t.dYP2FR, { destination: (0, l.F6)(v, h.default, p.Z, !0) }) : O.intl.string(O.t.h76ulJ);
    return C || !L
        ? null
        : (0, r.jsx)(E.Z, {
              className: t,
              style: n,
              title: j,
              description: P ? O.intl.string(O.t.lpgkzs) : O.intl.string(O.t.usQh4O),
              icons: b.J6,
              onDrop: x,
              onDragClear: M,
              onDragOver: k
          });
};
