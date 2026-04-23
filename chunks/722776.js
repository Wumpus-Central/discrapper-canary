n.d(t, { A: () => u });
var i = n(17928),
    r = n(462887),
    a = n(736653),
    l = n(313961),
    s = n(309010),
    o = n(652215);
function u(e, t) {
    let n = (0, i.bG)([s.A], () => s.A.getVoiceChannelId()),
        u = (0, i.bG)([l.A], () => (null != n ? l.A.getMode(n) : null)),
        _ = (0, a.Ay)();
    return null != e
        ? e
        : u === o._Of.VOICE && (0, r.q)(_)
          ? t
              ? "activeLight"
              : "primaryLight"
          : t
            ? "white"
            : "primaryDark";
}
