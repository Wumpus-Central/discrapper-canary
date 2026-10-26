n.d(t, { A: () => c });
var l = n(582128),
    a = n(17928),
    i = n(47167),
    r = n(713654),
    u = n(808728),
    s = n(994500),
    o = n(287809),
    d = n(246338);
function c(e, t) {
    let n = (0, a.bG)([u.Ay], () => (null == e ? null : u.Ay.getChannels(e)), [e]);
    return l.useMemo(
        () =>
            null == n
                ? null
                : (0, d.Lp)(n, t).map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: (0, i.m1)(e, o.default, s.A),
                      leading: (0, r.gU)(e),
                  })),
        [n, t],
    );
}
