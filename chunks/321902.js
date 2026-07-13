n.d(e, { T: () => u });
var i = n(64700),
    l = n(735438),
    o = n(96203),
    r = n(760716),
    s = n(652215);
function u(t) {
    let e = (0, o.A)({ userId: t }),
        n = (0, r.i)((t) => t.recommendationApplicationIds);
    return i.useMemo(() => (0, l.uniq)([s.FYj, ...e, ...(n ?? [])]).sort(), [e, n]);
}
