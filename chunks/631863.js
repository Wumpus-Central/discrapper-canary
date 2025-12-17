n.d(t, { Z: () => o }), n(388685);
var r = n(835473),
    i = n(164670),
    a = n(699955);
function o(e, t) {
    var n, o;
    let s = (0, i.$p)(e)
            ? []
            : null != (o = null == e || null == (n = e.linkedGames) ? void 0 : n.map((e) => e.id))
              ? o
              : [],
        l = (0, r.Z)(s);
    if (!(0, a.cZ)({ location: t }) || null == e) return null;
    if ((0, i.$p)(e)) return e;
    for (let e of l) if (null != e && (0, i.$p)(e)) return e;
    return null;
}
