var i = n(762230),
    r = n(807348),
    a = n(596344);
function s(e, t) {
    return e?.find((e) => String(e.sound_id) === String(t));
}
(n(980504),
    n.d(
        t,
        {},
        {
            A: function (e, t, n, l) {
                let o = s(l, n);
                if (null != o) return (0, r.N0)(o, o.guild_id ?? "0");
                let d = a.A.getMessage(e, t);
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
                    return (0, r.N0)(o, o.guild_id ?? "0");
            },
        },
    ));
