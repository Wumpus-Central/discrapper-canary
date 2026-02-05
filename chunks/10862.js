"use strict";
n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(148719),
    o = n(576705),
    l = n(818348);
function u(e) {
    let { channel: t, ...n } = e,
        u = (0, i.bG)([o.A], () => t.isPrivate() || o.A.can(l.xB.CONNECT, t));
    if (t.isDM() || t.isGroupDM()) return (0, r.jsx)(a._jp, { ...n });
    let c = t.isGuildStageVoice(),
        d = !u || (0, s.A)(t);
    return c && d
        ? (0, r.jsx)(a.DC, { ...n })
        : c
          ? (0, r.jsx)(a.qux, { ...n })
          : t.isNSFW()
            ? (0, r.jsx)(a.Ob$, { ...n })
            : d
              ? (0, r.jsx)(a.trU, { ...n })
              : (0, r.jsx)(a.HKD, { ...n });
}
