n.d(t, { T: () => o });
var l = n(64700),
    a = n(735438),
    i = n(96203),
    r = n(760716),
    s = n(652215);
function o(e) {
    let t = (0, i.A)({ userId: e }),
        n = (0, r.i)((e) => e.recommendationApplicationIds);
    return l.useMemo(() => (0, a.uniq)([s.FYj, ...t, ...(n ?? [])]).sort(), [t, n]);
}
