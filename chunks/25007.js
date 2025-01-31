n.d(t, { Z: () => h });
var i = n(200651),
    l = n(192379),
    a = n(481369),
    r = n(944103),
    s = n(946050),
    o = n(256413),
    c = n(292853),
    d = n(359565),
    u = n(226027);
let h = l.memo(function (e) {
    let { channel: t, narrow: n } = e,
        l = (0, o.Z)(t),
        h = (0, a.Z)(),
        { showUnreadsNotice: p, clearUnreadsNotice: m } = (0, r.Z)(t);
    return t.isArchivedLockedThread()
        ? (0, i.jsx)(d.s, {
              channel: t,
              narrow: n
          })
        : t.isLockedThread()
          ? (0, i.jsx)(d.q, {
                channel: t,
                narrow: n
            })
          : p
            ? (0, i.jsx)(s.Z, {
                  channel: t,
                  clearUnreadsNotice: m
              })
            : l && h.includes(u.E.OPT_IN_CHANNEL)
              ? (0, i.jsx)(c.Z, {
                    channel: t,
                    narrow: n
                })
              : null;
});
