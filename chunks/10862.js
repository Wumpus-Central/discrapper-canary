n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var r = n(17928),
    i = n(978940),
    o = n(808107),
    a = n(451394),
    s = n(512474),
    E = n(146151),
    u = n(983851),
    d = n(148719),
    _ = n(576705),
    I = n(818348);
function c(e) {
    let { channel: t, ...n } = e,
        c = (0, r.bG)([_.A], () => t.isPrivate() || _.A.can(I.xB.CONNECT, t));
    if (t.isDM() || t.isGroupDM()) return (0, l.jsx)(i._, { ...n });
    let S = t.isGuildStageVoice(),
        T = !c || (0, d.A)(t);
    return S && T
        ? (0, l.jsx)(o.D, { ...n })
        : S
          ? (0, l.jsx)(a.q, { ...n })
          : t.isNSFW()
            ? (0, l.jsx)(s.O, { ...n })
            : T
              ? (0, l.jsx)(E.t, { ...n })
              : (0, l.jsx)(u.H, { ...n });
}
