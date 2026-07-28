"use strict";
n.d(t, { A: () => A });
var i = n(477900);
n(582128);
var r = n(17928),
    a = n(978940),
    s = n(808107),
    l = n(451394),
    o = n(512474),
    d = n(146151),
    c = n(983851),
    u = n(148719),
    _ = n(576705),
    E = n(818348);
function A(e) {
    let { channel: t, ...n } = e,
        A = (0, r.bG)([_.A], () => t.isPrivate() || _.A.can(E.xB.CONNECT, t));
    if (t.isDM() || t.isGroupDM()) return (0, i.jsx)(a._, { ...n });
    let h = t.isGuildStageVoice(),
        I = !A || (0, u.A)(t);
    return h && I
        ? (0, i.jsx)(s.D, { ...n })
        : h
          ? (0, i.jsx)(l.q, { ...n })
          : t.isNSFW()
            ? (0, i.jsx)(o.O, { ...n })
            : I
              ? (0, i.jsx)(d.t, { ...n })
              : (0, i.jsx)(c.H, { ...n });
}
