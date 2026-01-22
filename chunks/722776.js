n.d(t, { A: () => c });
var r = n(311907),
    i = n(582754),
    a = n(736653),
    s = n(313961),
    o = n(309010),
    l = n(652215);
function c(e, t) {
    let n = (0, r.bG)([o.A], () => o.A.getVoiceChannelId()),
        c = (0, r.bG)([s.A], () => (null != n ? s.A.getMode(n) : null)),
        u = (0, a.Ay)();
    return null != e
        ? e
        : c === l._Of.VOICE && (0, i.qB)(u)
          ? t
              ? "activeLight"
              : "primaryLight"
          : t
            ? "white"
            : "primaryDark";
}
