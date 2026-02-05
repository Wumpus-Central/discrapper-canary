n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    a = n(675171),
    s = n(750580),
    r = n(436136),
    o = n(228098),
    c = n(157259),
    d = n(706847),
    u = n(626360);
let h = l.memo(function (e) {
    let { channel: t, narrow: n } = e,
        l = (0, o.A)(t),
        h = (0, a.A)(),
        { showUnreadsNotice: m, clearUnreadsNotice: A } = (0, s.A)(t);
    return t.isArchivedLockedThread()
        ? (0, i.jsx)(d.p, { channel: t, narrow: n })
        : t.isLockedThread()
          ? (0, i.jsx)(d.z, { channel: t, narrow: n })
          : m
            ? (0, i.jsx)(r.A, { channel: t, clearUnreadsNotice: A })
            : l && h.includes(u.i.OPT_IN_CHANNEL)
              ? (0, i.jsx)(c.A, { channel: t, narrow: n })
              : null;
});
