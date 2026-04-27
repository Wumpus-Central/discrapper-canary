n.d(t, { A: () => j });
var r = n(627968),
    s = n(64700),
    i = n(17928),
    a = n(323073),
    l = n(861382),
    o = n(47167),
    d = n(31717),
    c = n(834942),
    g = n(186111),
    u = n(576705),
    h = n(994500),
    p = n(287809),
    v = n(625494),
    m = n(518960),
    f = n(65593),
    D = n(698638),
    x = n(652215),
    A = n(985018);
let j = function (e) {
    let { className: t, style: n, channel: j, draftType: O } = e,
        [w, N] = s.useState(!0),
        L = (0, i.bG)([g.A], () => g.A.hasLayers()),
        T = (0, i.bG)([u.A], () => null != j && u.A.can(x.xBc.ATTACH_FILES, j), [j]),
        y = null != (0, i.bG)([l.A], () => l.A.getActiveCommand(j.id)),
        E = j.getGuildId(),
        b = O === d.C.FirstThreadMessage,
        C = (0, a.ni)(j),
        G = s.useMemo(
            () => !L && ((j.isPrivate() && !j.isManaged()) || (null != E && !C && T && c.A.canChatInGuild(E))),
            [T, C, j, E, L],
        ),
        M = b
            ? x.kvI.GUILD_THREADS_ONLY.has(j.type)
                ? A.intl.string(A.t.RBBLhL)
                : A.intl.string(A.t.gUx4eu)
            : w
              ? A.intl.format(A.t.dYP2Fc, { destination: (0, o.m1)(j, p.default, h.A, !0) })
              : A.intl.string(A.t.h76ulG);
    return y || !G
        ? null
        : (0, r.jsx)(f.A, {
              className: t,
              style: n,
              title: M,
              description: b ? A.intl.string(A.t.lpgkzq) : A.intl.string(A.t.usQh4J),
              icons: D.ir,
              onDrop: (e) => {
                  if (y) return !1;
                  G &&
                      null != j &&
                      ((0, m.R)(e, j, O, { requireConfirm: w, origin: "drag_drop" }),
                      v._.dispatchToLastSubscribed(x.jej.TEXTAREA_FOCUS));
              },
              onDragClear: () => N(!0),
              onDragOver: (e) => {
                  if (y) return !1;
                  b || e.shiftKey !== w || N(!e.shiftKey);
              },
          });
};
