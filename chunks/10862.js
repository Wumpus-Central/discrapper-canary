i.d(e, { A: () => f });
var l = i(627968);
i(64700);
var a = i(17928),
    n = i(978940),
    r = i(808107),
    s = i(451394),
    o = i(512474),
    c = i(146151),
    d = i(983851),
    u = i(148719),
    _ = i(576705),
    p = i(818348);
function f(t) {
    let { channel: e, ...i } = t,
        f = (0, a.bG)([_.A], () => e.isPrivate() || _.A.can(p.xB.CONNECT, e));
    if (e.isDM() || e.isGroupDM()) return (0, l.jsx)(n._, { ...i });
    let A = e.isGuildStageVoice(),
        h = !f || (0, u.A)(e);
    return A && h
        ? (0, l.jsx)(r.D, { ...i })
        : A
          ? (0, l.jsx)(s.q, { ...i })
          : e.isNSFW()
            ? (0, l.jsx)(o.O, { ...i })
            : h
              ? (0, l.jsx)(c.t, { ...i })
              : (0, l.jsx)(d.H, { ...i });
}
