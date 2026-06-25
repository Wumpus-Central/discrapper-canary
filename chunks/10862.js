"use strict";
n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(978940),
    a = n(808107),
    o = n(451394),
    l = n(512474),
    u = n(146151),
    c = n(983851),
    d = n(148719),
    _ = n(576705),
    h = n(818348);
function f(e) {
    let { channel: t, ...n } = e,
        f = (0, r.bG)([_.A], () => t.isPrivate() || _.A.can(h.xB.CONNECT, t));
    if (t.isDM() || t.isGroupDM()) return (0, i.jsx)(s._, { ...n });
    let p = t.isGuildStageVoice(),
        E = !f || (0, d.A)(t);
    return p && E
        ? (0, i.jsx)(a.D, { ...n })
        : p
          ? (0, i.jsx)(o.q, { ...n })
          : t.isNSFW()
            ? (0, i.jsx)(l.O, { ...n })
            : E
              ? (0, i.jsx)(u.t, { ...n })
              : (0, i.jsx)(c.H, { ...n });
}
