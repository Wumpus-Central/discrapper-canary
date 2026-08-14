e.d(l, { A: () => x });
var n = e(477900);
e(582128);
var i = e(17928),
    a = e(978940),
    s = e(808107),
    o = e(451394),
    r = e(512474),
    u = e(146151),
    p = e(983851),
    d = e(148719),
    c = e(576705),
    A = e(818348);
function x(t) {
    let { channel: l, ...e } = t,
        x = (0, i.bG)([c.A], () => l.isPrivate() || c.A.can(A.xB.CONNECT, l));
    if (l.isDM() || l.isGroupDM()) return (0, n.jsx)(a._, { ...e });
    let T = l.isGuildStageVoice(),
        m = !x || (0, d.A)(l);
    return T && m
        ? (0, n.jsx)(s.D, { ...e })
        : T
          ? (0, n.jsx)(o.q, { ...e })
          : l.isNSFW()
            ? (0, n.jsx)(r.O, { ...e })
            : m
              ? (0, n.jsx)(u.t, { ...e })
              : (0, n.jsx)(p.H, { ...e });
}
