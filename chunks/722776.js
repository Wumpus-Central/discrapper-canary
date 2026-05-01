n.d(t, { A: () => _ });
var i = n(17928),
    r = n(462887),
    a = n(736653),
    l = n(313961),
    s = n(309010),
    E = n(652215);
function _(e, t) {
    let n = (0, i.bG)([s.A], () => s.A.getVoiceChannelId()),
        _ = (0, i.bG)([l.A], () => (null != n ? l.A.getMode(n) : null)),
        o = (0, a.Ay)();
    return null != e
        ? e
        : _ === E._Of.VOICE && (0, r.q)(o)
          ? t
              ? "activeLight"
              : "primaryLight"
          : t
            ? "white"
            : "primaryDark";
}
