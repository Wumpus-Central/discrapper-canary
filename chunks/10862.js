"use strict";
n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(978940),
    a = n(808107),
    o = n(451394),
    l = n(512474),
    u = n(146151),
    c = n(983851),
    d = n(148719),
    _ = n(576705),
    f = n(818348);
function p(e) {
    let { channel: t, ...n } = e,
        p = (0, i.bG)([_.A], () => t.isPrivate() || _.A.can(f.xB.CONNECT, t));
    if (t.isDM() || t.isGroupDM()) return (0, r.jsx)(s._, { ...n });
    let h = t.isGuildStageVoice(),
        E = !p || (0, d.A)(t);
    return h && E
        ? (0, r.jsx)(a.D, { ...n })
        : h
          ? (0, r.jsx)(o.q, { ...n })
          : t.isNSFW()
            ? (0, r.jsx)(l.O, { ...n })
            : E
              ? (0, r.jsx)(u.t, { ...n })
              : (0, r.jsx)(c.H, { ...n });
}
