l.d(t, { A: () => I });
var n = l(477900);
l(582128);
var i = l(17928),
    r = l(978940),
    a = l(808107),
    s = l(451394),
    o = l(512474),
    c = l(146151),
    d = l(983851),
    u = l(148719),
    h = l(576705),
    E = l(818348);
function I(e) {
    let { channel: t, ...l } = e,
        I = (0, i.bG)([h.A], () => t.isPrivate() || h.A.can(E.xB.CONNECT, t));
    if (t.isDM() || t.isGroupDM()) return (0, n.jsx)(r._, { ...l });
    let _ = t.isGuildStageVoice(),
        T = !I || (0, u.A)(t);
    return _ && T
        ? (0, n.jsx)(a.D, { ...l })
        : _
          ? (0, n.jsx)(s.q, { ...l })
          : t.isNSFW()
            ? (0, n.jsx)(o.O, { ...l })
            : T
              ? (0, n.jsx)(c.t, { ...l })
              : (0, n.jsx)(d.H, { ...l });
}
