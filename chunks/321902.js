n.d(t, { T: () => o });
var a = n(64700),
    l = n(735438),
    i = n(96203),
    r = n(760716),
    s = n(652215);
function o(e) {
    let t = (0, i.A)({ userId: e }),
        n = (0, r.i)((e) => e.recommendationApplicationIds);
    return a.useMemo(() => (0, l.uniq)([s.FYj, ...t, ...(n ?? [])]).sort(), [t, n]);
}
