"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(978940),
    a = n(808107),
    o = n(451394),
    l = n(512474),
    d = n(146151),
    _ = n(983851),
    u = n(148719),
    c = n(576705),
    E = n(818348);
function h(e) {
    let { channel: t, ...n } = e,
        h = (0, r.bG)([c.A], () => t.isPrivate() || c.A.can(E.xB.CONNECT, t));
    if (t.isDM() || t.isGroupDM()) return (0, i.jsx)(s._, { ...n });
    let m = t.isGuildStageVoice(),
        f = !h || (0, u.A)(t);
    return m && f
        ? (0, i.jsx)(a.D, { ...n })
        : m
          ? (0, i.jsx)(o.q, { ...n })
          : t.isNSFW()
            ? (0, i.jsx)(l.O, { ...n })
            : f
              ? (0, i.jsx)(d.t, { ...n })
              : (0, i.jsx)(_.H, { ...n });
}
