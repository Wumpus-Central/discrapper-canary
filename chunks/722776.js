"use strict";
n.d(t, { A: () => u });
var r = n(311907),
    i = n(462887),
    s = n(736653),
    a = n(313961),
    o = n(309010),
    l = n(652215);
function u(e, t) {
    let n = (0, r.bG)([o.A], () => o.A.getVoiceChannelId()),
        u = (0, r.bG)([a.A], () => (null != n ? a.A.getMode(n) : null)),
        c = (0, s.Ay)();
    return null != e
        ? e
        : u === l._Of.VOICE && (0, i.q)(c)
          ? t
              ? "activeLight"
              : "primaryLight"
          : t
            ? "white"
            : "primaryDark";
}
