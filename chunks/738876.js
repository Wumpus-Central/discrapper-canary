"use strict";
n.d(t, { A: () => j });
var r = n(627968),
    i = n(64700),
    s = n(17928),
    a = n(323073),
    l = n(861382),
    o = n(47167),
    d = n(31717),
    c = n(834942),
    u = n(186111),
    h = n(576705),
    g = n(994500),
    p = n(287809),
    v = n(625494),
    f = n(518960),
    m = n(65593),
    D = n(698638),
    A = n(652215),
    x = n(985018);
let j = function (e) {
    let { className: t, style: n, channel: j, draftType: O } = e,
        [y, L] = i.useState(!0),
        N = (0, s.bG)([u.A], () => u.A.hasLayers()),
        w = (0, s.bG)([h.A], () => null != j && h.A.can(A.xBc.ATTACH_FILES, j), [j]),
        T = null != (0, s.bG)([l.A], () => l.A.getActiveCommand(j.id)),
        E = j.getGuildId(),
        b = O === d.C.FirstThreadMessage,
        C = (0, a.ni)(j),
        M = i.useMemo(
            () => !N && ((j.isPrivate() && !j.isManaged()) || (null != E && !C && w && c.A.canChatInGuild(E))),
            [w, C, j, E, N],
        ),
        G = b
            ? A.kvI.GUILD_THREADS_ONLY.has(j.type)
                ? x.intl.string(x.t.RBBLhL)
                : x.intl.string(x.t.gUx4eu)
            : y
              ? x.intl.format(x.t.dYP2Fc, { destination: (0, o.m1)(j, p.default, g.A, !0) })
              : x.intl.string(x.t.h76ulG);
    return T || !M
        ? null
        : (0, r.jsx)(m.A, {
              className: t,
              style: n,
              title: G,
              description: b ? x.intl.string(x.t.lpgkzq) : x.intl.string(x.t.usQh4J),
              icons: D.ir,
              onDrop: (e) => {
                  if (T) return !1;
                  M &&
                      null != j &&
                      ((0, f.R)(e, j, O, { requireConfirm: y, origin: "drag_drop" }),
                      v._.dispatchToLastSubscribed(A.jej.TEXTAREA_FOCUS));
              },
              onDragClear: () => L(!0),
              onDragOver: (e) => {
                  if (T) return !1;
                  b || e.shiftKey !== y || L(!e.shiftKey);
              },
          });
};
