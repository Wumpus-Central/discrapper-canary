n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(323073),
    r = n(861382),
    o = n(47167),
    c = n(31717),
    d = n(834942),
    u = n(186111),
    h = n(576705),
    A = n(994500),
    _ = n(287809),
    m = n(203982),
    g = n(518960),
    p = n(65593),
    f = n(698638),
    x = n(652215),
    E = n(985018);
let I = function (e) {
    let { className: t, style: n, channel: I, draftType: C } = e,
        [N, T] = l.useState(!0),
        S = (0, s.bG)([u.A], () => u.A.hasLayers()),
        b = (0, s.bG)([h.A], () => null != I && h.A.can(x.xBc.ATTACH_FILES, I), [I]),
        y = null != (0, s.bG)([r.A], () => r.A.getActiveCommand(I.id)),
        v = I.getGuildId(),
        j = C === c.C.FirstThreadMessage,
        R = (0, a.vL)(I),
        O = l.useMemo(
            () => !S && ((I.isPrivate() && !I.isManaged()) || (null != v && !R && b && d.A.canChatInGuild(v))),
            [b, R, I, v, S],
        ),
        L = j
            ? x.kvI.GUILD_THREADS_ONLY.has(I.type)
                ? E.intl.string(E.t.RBBLhL)
                : E.intl.string(E.t.gUx4eu)
            : N
              ? E.intl.format(E.t.dYP2Fc, { destination: (0, o.m1)(I, _.default, A.A, !0) })
              : E.intl.string(E.t.h76ulG);
    return y || !O
        ? null
        : (0, i.jsx)(p.A, {
              className: t,
              style: n,
              title: L,
              description: j ? E.intl.string(E.t.lpgkzq) : E.intl.string(E.t.usQh4J),
              icons: f.ir,
              onDrop: (e) => {
                  if (y) return !1;
                  O &&
                      null != I &&
                      ((0, g.R)(e, I, C, { requireConfirm: N, origin: "drag_drop" }),
                      m._.dispatchToLastSubscribed(x.jej.TEXTAREA_FOCUS));
              },
              onDragClear: () => T(!0),
              onDragOver: (e) => {
                  if (y) return !1;
                  j || e.shiftKey !== N || T(!e.shiftKey);
              },
          });
};
