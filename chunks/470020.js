"use strict";
n.d(t, { A: () => o });
var r = n(762230),
    i = n(807348),
    s = n(320501);
function a(e, t) {
    return e?.find((e) => String(e.sound_id) === String(t));
}
function o(e, t, n, o) {
    let l = a(o, n);
    if (null != l) return (0, i.N0)(l, l.guild_id ?? "0");
    let u = s.A.getMessage(e, t);
    if (
        null != u &&
        null !=
            (l =
                u?.messageReference?.type === r.S.FORWARD
                    ? (function (e, t) {
                          let n;
                          for (let r of e) {
                              let e = a(r.message?.soundboardSounds, t);
                              if (null != e) {
                                  n = e;
                                  break;
                              }
                          }
                          return n;
                      })(u?.messageSnapshots ?? [], n)
                    : a(u?.soundboardSounds, n))
    )
        return (0, i.N0)(l, l.guild_id ?? "0");
}
n(980504);
