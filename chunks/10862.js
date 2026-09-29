e.d(l, { A: () => m });
var n = e(477900);
e(582128);
var a = e(17928),
    i = e(978940),
    o = e(808107),
    r = e(451394),
    s = e(512474),
    u = e(146151),
    p = e(983851),
    d = e(148719),
    c = e(576705),
    A = e(818348);
function m(t) {
    let { channel: l, ...e } = t,
        m = (0, a.bG)([c.A], () => l.isPrivate() || c.A.can(A.xB.CONNECT, l));
    if (l.isDM() || l.isGroupDM()) return (0, n.jsx)(i._, { ...e });
    let x = l.isGuildStageVoice(),
        T = !m || (0, d.A)(l);
    return x && T
        ? (0, n.jsx)(o.D, { ...e })
        : x
          ? (0, n.jsx)(r.q, { ...e })
          : l.isNSFW()
            ? (0, n.jsx)(s.O, { ...e })
            : T
              ? (0, n.jsx)(u.t, { ...e })
              : (0, n.jsx)(p.H, { ...e });
}
