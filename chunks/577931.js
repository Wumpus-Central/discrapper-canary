var a = n(582128),
    l = n(855986),
    r = n(287809),
    s = n(982240),
    i = n(988341),
    o = n(234e3),
    d = n(248284),
    c = n(555149);
n.d(
    t,
    {},
    {
        A: function () {
            let e = r.default.getCurrentUser()?.id,
                t = (0, l.yK)([s.Ay], () => (null == e ? [] : s.Ay.getBadges(e)), [e]),
                { pendingBadgeDisplayOrder: n, pendingBadgeHiddenBadges: u } = (0, c.A)(),
                m = a.useMemo(
                    () => (0, i.Cw)((0, o.S0)(t, { pendingBadgeDisplayOrder: n, pendingBadgeHiddenBadges: u })),
                    [t, n, u],
                ),
                f = (0, d.A)((e) => e.hiddenOrder),
                { hiddenBadges: g, nextHiddenOrder: p } = a.useMemo(() => {
                    let e = new Map(m.hiddenBadges.map((e) => [e.badge_id, e])),
                        t = f.flatMap((t) => {
                            let n = e.get(t);
                            return null != n ? [n] : [];
                        }),
                        n = new Set(t.map((e) => e.badge_id)),
                        a = m.hiddenBadges.filter((e) => !n.has(e.badge_id)),
                        l = [...t, ...a];
                    return { hiddenBadges: l, nextHiddenOrder: l.map((e) => e.badge_id) };
                }, [m.hiddenBadges, f]);
            return (
                a.useEffect(() => {
                    (p.length === f.length && p.every((e, t) => e === f[t])) || d.A.setState({ hiddenOrder: p });
                }, [p, f]),
                { ...m, hiddenBadges: g }
            );
        },
    },
);
