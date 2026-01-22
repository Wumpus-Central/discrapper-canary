n.d(t, {
    A: () => j,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(323073),
    s = n(861382),
    o = n(47167),
    c = n(31717),
    u = n(834942),
    d = n(186111),
    f = n(576705),
    p = n(994500),
    h = n(287809),
    b = n(203982),
    g = n(518960),
    m = n(65593),
    A = n(698638),
    y = n(652215),
    O = n(985018);
let j = function (e) {
    let { className: t, style: n, channel: j, draftType: v } = e,
        [x, E] = l.useState(!0),
        _ = (0, i.bG)([d.A], () => d.A.hasLayers()),
        C = (0, i.bG)([f.A], () => null != j && f.A.can(y.xBc.ATTACH_FILES, j), [j]),
        S = null != (0, i.bG)([s.A], () => s.A.getActiveCommand(j.id)),
        I = j.getGuildId(),
        N = v === c.C.FirstThreadMessage,
        T = (0, a.vL)(j),
        P = l.useMemo(
            () => !_ && ((j.isPrivate() && !j.isManaged()) || (null != I && !T && C && u.A.canChatInGuild(I))),
            [C, T, j, I, _],
        ),
        w = N
            ? y.kvI.GUILD_THREADS_ONLY.has(j.type)
                ? O.intl.string(O.t.RBBLhL)
                : O.intl.string(O.t.gUx4eu)
            : x
              ? O.intl.format(O.t.dYP2Fc, {
                    destination: (0, o.m1)(j, h.default, p.A, !0),
                })
              : O.intl.string(O.t.h76ulG);
    return S || !P
        ? null
        : (0, r.jsx)(m.A, {
              className: t,
              style: n,
              title: w,
              description: N ? O.intl.string(O.t.lpgkzq) : O.intl.string(O.t.usQh4J),
              icons: A.ir,
              onDrop: (e) => {
                  if (S) return !1;
                  P &&
                      null != j &&
                      ((0, g.R)(e, j, v, {
                          requireConfirm: x,
                          origin: "drag_drop",
                      }),
                      b._.dispatchToLastSubscribed(y.jej.TEXTAREA_FOCUS));
              },
              onDragClear: () => E(!0),
              onDragOver: (e) => {
                  if (S) return !1;
                  N || e.shiftKey !== x || E(!e.shiftKey);
              },
          });
};
