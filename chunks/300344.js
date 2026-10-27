l.d(t, { A: () => c });
var n = l(582128),
    a = l(17928),
    r = l(47167),
    i = l(713654),
    s = l(808728),
    u = l(994500),
    o = l(287809),
    d = l(246338);
function c(e, t) {
    let l = (0, a.bG)([s.Ay], () => (null == e ? null : s.Ay.getChannels(e)), [e]);
    return n.useMemo(
        () =>
            null == l
                ? null
                : (0, d.Lp)(l, t).map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: (0, r.m1)(e, o.default, u.A),
                      leading: (0, i.gU)(e),
                  })),
        [l, t],
    );
}
