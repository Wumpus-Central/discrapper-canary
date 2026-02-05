n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(323073),
    r = n(861382),
    o = n(47167),
    d = n(31717),
    c = n(834942),
    u = n(186111),
    h = n(576705),
    A = n(994500),
    g = n(287809),
    m = n(203982),
    p = n(518960),
    _ = n(65593),
    x = n(698638),
    f = n(652215),
    E = n(985018);
let C = function (e) {
    let { className: t, style: n, channel: C, draftType: I } = e,
        [S, b] = l.useState(!0),
        N = (0, s.bG)([u.A], () => u.A.hasLayers()),
        T = (0, s.bG)([h.A], () => null != C && h.A.can(f.xBc.ATTACH_FILES, C), [C]),
        j = null != (0, s.bG)([r.A], () => r.A.getActiveCommand(C.id)),
        v = C.getGuildId(),
        y = I === d.C.FirstThreadMessage,
        R = (0, a.vL)(C),
        O = l.useMemo(
            () => !N && ((C.isPrivate() && !C.isManaged()) || (null != v && !R && T && c.A.canChatInGuild(v))),
            [T, R, C, v, N],
        ),
        L = y
            ? f.kvI.GUILD_THREADS_ONLY.has(C.type)
                ? E.intl.string(E.t.RBBLhL)
                : E.intl.string(E.t.gUx4eu)
            : S
              ? E.intl.format(E.t.dYP2Fc, { destination: (0, o.m1)(C, g.default, A.A, !0) })
              : E.intl.string(E.t.h76ulG);
    return j || !O
        ? null
        : (0, i.jsx)(_.A, {
              className: t,
              style: n,
              title: L,
              description: y ? E.intl.string(E.t.lpgkzq) : E.intl.string(E.t.usQh4J),
              icons: x.ir,
              onDrop: (e) => {
                  if (j) return !1;
                  O &&
                      null != C &&
                      ((0, p.R)(e, C, I, { requireConfirm: S, origin: "drag_drop" }),
                      m._.dispatchToLastSubscribed(f.jej.TEXTAREA_FOCUS));
              },
              onDragClear: () => b(!0),
              onDragOver: (e) => {
                  if (j) return !1;
                  y || e.shiftKey !== S || b(!e.shiftKey);
              },
          });
};
