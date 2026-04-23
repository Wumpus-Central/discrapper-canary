n.d(t, { A: () => I });
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
    _ = n(287809),
    m = n(203982),
    g = n(518960),
    p = n(65593),
    f = n(698638),
    E = n(652215),
    x = n(985018);
let I = function (e) {
    let { className: t, style: n, channel: I, draftType: C } = e,
        [b, N] = l.useState(!0),
        S = (0, s.bG)([u.A], () => u.A.hasLayers()),
        v = (0, s.bG)([h.A], () => null != I && h.A.can(E.xBc.ATTACH_FILES, I), [I]),
        T = null != (0, s.bG)([r.A], () => r.A.getActiveCommand(I.id)),
        y = I.getGuildId(),
        j = C === d.C.FirstThreadMessage,
        R = (0, a.ni)(I),
        L = l.useMemo(
            () => !S && ((I.isPrivate() && !I.isManaged()) || (null != y && !R && v && c.A.canChatInGuild(y))),
            [v, R, I, y, S],
        ),
        O = j
            ? E.kvI.GUILD_THREADS_ONLY.has(I.type)
                ? x.intl.string(x.t.RBBLhL)
                : x.intl.string(x.t.gUx4eu)
            : b
              ? x.intl.format(x.t.dYP2Fc, { destination: (0, o.m1)(I, _.default, A.A, !0) })
              : x.intl.string(x.t.h76ulG);
    return T || !L
        ? null
        : (0, i.jsx)(p.A, {
              className: t,
              style: n,
              title: O,
              description: j ? x.intl.string(x.t.lpgkzq) : x.intl.string(x.t.usQh4J),
              icons: f.ir,
              onDrop: (e) => {
                  if (T) return !1;
                  L &&
                      null != I &&
                      ((0, g.R)(e, I, C, { requireConfirm: b, origin: "drag_drop" }),
                      m._.dispatchToLastSubscribed(E.jej.TEXTAREA_FOCUS));
              },
              onDragClear: () => N(!0),
              onDragOver: (e) => {
                  if (T) return !1;
                  j || e.shiftKey !== b || N(!e.shiftKey);
              },
          });
};
