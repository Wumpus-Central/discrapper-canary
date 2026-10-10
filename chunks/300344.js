n.d(t, { A: () => c });
var l = n(582128),
    i = n(17928),
    a = n(47167),
    r = n(713654),
    s = n(808728),
    u = n(994500),
    o = n(287809),
    d = n(246338);
function c(e, t) {
    let n = (0, i.bG)([s.Ay], () => (null == e ? null : s.Ay.getChannels(e)), [e]);
    return l.useMemo(
        () =>
            null == n
                ? null
                : (0, d.Lp)(n, t).map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: (0, a.m1)(e, o.default, u.A),
                      leading: (0, r.gU)(e),
                  })),
        [n, t],
    );
}
