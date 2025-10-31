n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    l = n(481369),
    a = n(944103),
    o = n(946050),
    s = n(256413),
    c = n(292853),
    u = n(359565),
    d = n(226027);
let p = i.memo(function (e) {
    let { channel: t, narrow: n } = e,
        i = (0, s.Z)(t),
        p = (0, l.Z)(),
        { showUnreadsNotice: f, clearUnreadsNotice: h } = (0, a.Z)(t);
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
          : f
            ? (0, r.jsx)(o.Z, {
                  channel: t,
                  clearUnreadsNotice: h,
              })
            : i && p.includes(d.E.OPT_IN_CHANNEL)
              ? (0, r.jsx)(c.Z, {
                    channel: t,
                    narrow: n,
                })
              : null;
});
