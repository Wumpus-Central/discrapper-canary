l.d(t, { A: () => c });
var n = l(582128),
    a = l(17928),
    i = l(47167),
    r = l(713654),
    u = l(808728),
    s = l(994500),
    o = l(287809),
    d = l(246338);
function c(e, t) {
    let l = (0, a.bG)([u.Ay], () => (null == e ? null : u.Ay.getChannels(e)), [e]);
    return n.useMemo(
        () =>
            null == l
                ? null
                : (0, d.Lp)(l, t).map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: (0, i.m1)(e, o.default, s.A),
                      leading: (0, r.gU)(e),
                  })),
        [l, t],
    );
}
