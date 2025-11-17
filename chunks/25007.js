n.d(t, { Z: () => p });
var i = n(54381),
    r = n(473749),
    l = n(481369),
    a = n(944103),
    o = n(946050),
    s = n(256413),
    c = n(292853),
    u = n(359565),
    d = n(226027);
let p = r.memo(function (e) {
    let { channel: t, narrow: n } = e,
        r = (0, s.Z)(t),
        p = (0, l.Z)(),
        { showUnreadsNotice: h, clearUnreadsNotice: f } = (0, a.Z)(t);
    return t.isArchivedLockedThread()
        ? (0, i.jsx)(u.s, {
              channel: t,
              narrow: n,
          })
        : t.isLockedThread()
          ? (0, i.jsx)(u.q, {
                channel: t,
                narrow: n,
            })
          : h
            ? (0, i.jsx)(o.Z, {
                  channel: t,
                  clearUnreadsNotice: f,
              })
            : r && p.includes(d.E.OPT_IN_CHANNEL)
              ? (0, i.jsx)(c.Z, {
                    channel: t,
                    narrow: n,
                })
              : null;
});
