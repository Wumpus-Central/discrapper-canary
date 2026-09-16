n.d(t, { A: () => u });
var a = n(582128),
    l = n(17928),
    r = n(287809),
    i = n(982240),
    s = n(988341),
    o = n(234e3),
    d = n(248284),
    c = n(555149);
function u() {
    let e = r.default.getCurrentUser()?.id,
        t = (0, l.yK)([i.Ay], () => (null == e ? [] : i.Ay.getBadges(e)), [e]),
        { pendingBadgeDisplayOrder: n, pendingBadgeHiddenBadges: u } = (0, c.A)(),
        f = a.useMemo(
            () => (0, s.Cw)((0, o.S0)(t, { pendingBadgeDisplayOrder: n, pendingBadgeHiddenBadges: u })),
            [t, n, u],
        ),
        m = (0, d.A)((e) => e.hiddenOrder),
        { hiddenBadges: g, nextHiddenOrder: p } = a.useMemo(() => {
            let e = new Map(f.hiddenBadges.map((e) => [e.badge_id, e])),
                t = m.flatMap((t) => {
                    let n = e.get(t);
                    return null != n ? [n] : [];
                }),
                n = new Set(t.map((e) => e.badge_id)),
                a = [...t, ...f.hiddenBadges.filter((e) => !n.has(e.badge_id))];
            return { hiddenBadges: a, nextHiddenOrder: a.map((e) => e.badge_id) };
        }, [f.hiddenBadges, m]);
    return (
        a.useEffect(() => {
            (p.length === m.length && p.every((e, t) => e === m[t])) || d.A.setState({ hiddenOrder: p });
        }, [p, m]),
        { ...f, hiddenBadges: g }
    );
}
