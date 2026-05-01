n.d(t, { A: () => l });
var i = n(762230),
    a = n(807348),
    r = n(232835);
function s(e, t) {
    return e?.find((e) => String(e.sound_id) === String(t));
}
function l(e, t, n, l) {
    let o = s(l, n);
    if (null != o) return (0, a.N0)(o, o.guild_id ?? "0");
    let d = r.A.getMessage(e, t);
    if (
        null != d &&
        null !=
            (o =
                d?.messageReference?.type === i.S.FORWARD
                    ? (function (e, t) {
                          let n;
                          for (let i of e) {
                              let e = s(i.message?.soundboardSounds, t);
                              if (null != e) {
                                  n = e;
                                  break;
                              }
                          }
                          return n;
                      })(d?.messageSnapshots ?? [], n)
                    : s(d?.soundboardSounds, n))
    )
        return (0, a.N0)(o, o.guild_id ?? "0");
}
n(980504);
