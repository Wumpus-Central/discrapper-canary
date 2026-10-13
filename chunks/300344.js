n.d(t, { A: () => c });
var l = n(582128),
    i = n(17928),
    r = n(47167),
    a = n(713654),
    u = n(808728),
    s = n(994500),
    o = n(287809),
    d = n(246338);
function c(e, t) {
    let n = (0, i.bG)([u.Ay], () => (null == e ? null : u.Ay.getChannels(e)), [e]);
    return l.useMemo(
        () =>
            null == n
                ? null
                : (0, d.Lp)(n, t).map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: (0, r.m1)(e, o.default, s.A),
                      leading: (0, a.gU)(e),
                  })),
        [n, t],
    );
}
