n.d(t, {
    A: () => s,
}),
    n(896048);
var r = n(429913),
    i = n(871123),
    a = n(916023);

function s(e, t) {
    var n, s;
    let o = (0, i.Xg)(e)
            ? []
            : null != (n = null == e || null == (s = e.linkedGames) ? void 0 : s.map((e) => e.id))
              ? n
              : [],
        l = (0, r.A)(o);
    if (
        !(0, a.kt)({
            location: t,
        }) ||
        null == e
    )
        return null;
    if ((0, i.Xg)(e)) return e;
    for (let e of l) if (null != e && (0, i.Xg)(e)) return e;
    return null;
}
