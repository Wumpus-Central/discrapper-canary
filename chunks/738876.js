i.d(n, { A: () => L });
var r = i(477900),
    e = i(582128),
    s = i(17928),
    a = i(323073),
    l = i(861382),
    u = i(47167),
    d = i(31717),
    o = i(834942),
    c = i(186111),
    A = i(576705),
    g = i(994500),
    h = i(287809),
    p = i(676279),
    f = i(625494),
    C = i(518960),
    _ = i(65593),
    b = i(698638),
    m = i(652215),
    G = i(375708);
let L = function (t) {
    let { className: n, style: i, channel: L, draftType: T } = t,
        [k, v] = e.useState(!0),
        y = (0, s.bG)([c.A], () => c.A.hasLayers()),
        D = (0, s.bG)([A.A], () => null != L && A.A.can(m.xBc.ATTACH_FILES, L), [L]),
        I = null != (0, s.bG)([l.A], () => l.A.getActiveCommand(L.id)),
        S = L.getGuildId(),
        E = T === d.C.FirstThreadMessage,
        F = (0, a.ni)(L),
        R = e.useMemo(
            () => !y && ((L.isPrivate() && !L.isManaged()) || (null != S && !F && D && o.A.canChatInGuild(S))),
            [D, F, L, S, y],
        ),
        j = E
            ? m.kvI.GUILD_THREADS_ONLY.has(L.type)
                ? G.intl.string(G.t.RBBLhL)
                : G.intl.string(G.t.gUx4eu)
            : k || (0, p.nr)()
              ? G.intl.format(G.t.dYP2Fc, { destination: (0, u.m1)(L, h.default, g.A, !0) })
              : G.intl.string(G.t.h76ulG);
    return I || !R
        ? null
        : (0, r.jsx)(_.A, {
              className: n,
              style: i,
              title: j,
              description: E || (0, p.nr)() ? G.intl.string(G.t.lpgkzq) : G.intl.string(G.t.usQh4J),
              icons: b.ir,
              onDrop: function (t) {
                  if (I) return !1;
                  R &&
                      null != L &&
                      ((0, C.R)(t, L, T, { requireConfirm: !!(0, p.nr)() || k, origin: "drag_drop" }),
                      f._.dispatchToLastSubscribed(m.jej.TEXTAREA_FOCUS));
              },
              onDragClear: function () {
                  return v(!0);
              },
              onDragOver: function (t) {
                  if (I) return !1;
                  E || t.shiftKey !== k || v(!t.shiftKey);
              },
          });
};
