n.d(t, { Z: () => f });
var r = n(255367),
    i = n(73800),
    o = n(481369),
    a = n(944103),
    s = n(946050),
    l = n(256413),
    c = n(292853),
    u = n(359565),
    d = n(226027);
let f = i.memo(function (e) {
    let { channel: t, narrow: n } = e,
        i = (0, l.Z)(t),
        f = (0, o.Z)(),
        { showUnreadsNotice: _, clearUnreadsNotice: p } = (0, a.Z)(t);
    return t.isArchivedLockedThread()
        ? (0, r.jsx)(u.s, {
              channel: t,
              narrow: n,
          })
        : t.isLockedThread()
          ? (0, r.jsx)(u.q, {
                channel: t,
                narrow: n,
            })
          : _
            ? (0, r.jsx)(s.Z, {
                  channel: t,
                  clearUnreadsNotice: p,
              })
            : i && f.includes(d.E.OPT_IN_CHANNEL)
              ? (0, r.jsx)(c.Z, {
                    channel: t,
                    narrow: n,
                })
              : null;
});
