n.d(t, {
    A: () => f,
});
var r = n(627968),
    l = n(64700),
    i = n(675171),
    a = n(750580),
    s = n(436136),
    o = n(228098),
    c = n(157259),
    u = n(706847),
    d = n(626360);
let f = l.memo(function (e) {
    let { channel: t, narrow: n } = e,
        l = (0, o.A)(t),
        f = (0, i.A)(),
        { showUnreadsNotice: p, clearUnreadsNotice: h } = (0, a.A)(t);
    return t.isArchivedLockedThread()
        ? (0, r.jsx)(u.p, {
              channel: t,
              narrow: n,
          })
        : t.isLockedThread()
          ? (0, r.jsx)(u.z, {
                channel: t,
                narrow: n,
            })
          : p
            ? (0, r.jsx)(s.A, {
                  channel: t,
                  clearUnreadsNotice: h,
              })
            : l && f.includes(d.i.OPT_IN_CHANNEL)
              ? (0, r.jsx)(c.A, {
                    channel: t,
                    narrow: n,
                })
              : null;
});
