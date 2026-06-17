n.d(i, { A: () => G });
var e = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(323073),
    l = n(861382),
    u = n(47167),
    d = n(31717),
    o = n(834942),
    c = n(186111),
    A = n(576705),
    g = n(994500),
    h = n(287809),
    p = n(625494),
    f = n(518960),
    C = n(65593),
    _ = n(698638),
    b = n(652215),
    m = n(375708);
let G = function (t) {
    let { className: i, style: n, channel: G, draftType: L } = t,
        [T, k] = r.useState(!0),
        v = (0, s.bG)([c.A], () => c.A.hasLayers()),
        y = (0, s.bG)([A.A], () => null != G && A.A.can(b.xBc.ATTACH_FILES, G), [G]),
        D = null != (0, s.bG)([l.A], () => l.A.getActiveCommand(G.id)),
        I = G.getGuildId(),
        S = L === d.C.FirstThreadMessage,
        E = (0, a.ni)(G),
        F = r.useMemo(
            () => !v && ((G.isPrivate() && !G.isManaged()) || (null != I && !E && y && o.A.canChatInGuild(I))),
            [y, E, G, I, v],
        ),
        R = S
            ? b.kvI.GUILD_THREADS_ONLY.has(G.type)
                ? m.intl.string(m.t.RBBLhL)
                : m.intl.string(m.t.gUx4eu)
            : T
              ? m.intl.format(m.t.dYP2Fc, { destination: (0, u.m1)(G, h.default, g.A, !0) })
              : m.intl.string(m.t.h76ulG);
    return D || !F
        ? null
        : (0, e.jsx)(C.A, {
              className: i,
              style: n,
              title: R,
              description: S ? m.intl.string(m.t.lpgkzq) : m.intl.string(m.t.usQh4J),
              icons: _.ir,
              onDrop: function (t) {
                  if (D) return !1;
                  F &&
                      null != G &&
                      ((0, f.R)(t, G, L, { requireConfirm: T, origin: "drag_drop" }),
                      p._.dispatchToLastSubscribed(b.jej.TEXTAREA_FOCUS));
              },
              onDragClear: function () {
                  return k(!0);
              },
              onDragOver: function (t) {
                  if (D) return !1;
                  S || t.shiftKey !== T || k(!t.shiftKey);
              },
          });
};
