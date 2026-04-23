n.d(t, { A: () => _ });
var i = n(762230),
    r = n(807348),
    a = n(232835);
function s(e, t) {
    return e?.find((e) => String(e.sound_id) === String(t));
}
function _(e, t, n, _) {
    let l = s(_, n);
    if (null != l) return (0, r.N0)(l, l.guild_id ?? "0");
    let o = a.A.getMessage(e, t);
    if (
        null != o &&
        null !=
            (l =
                o?.messageReference?.type === i.S.FORWARD
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
                      })(o?.messageSnapshots ?? [], n)
                    : s(o?.soundboardSounds, n))
    )
        return (0, r.N0)(l, l.guild_id ?? "0");
}
n(980504);
