var a = n(582128),
    r = n(855986),
    l = n(287809),
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
            let e = l.default.getCurrentUser()?.id,
                t = (0, r.yK)([s.Ay], () => (null == e ? [] : s.Ay.getBadges(e)), [e]),
                { pendingBadgeDisplayOrder: n, pendingBadgeHiddenBadges: u } = (0, c.A)(),
                f = a.useMemo(
                    () => (0, i.Cw)((0, o.S0)(t, { pendingBadgeDisplayOrder: n, pendingBadgeHiddenBadges: u })),
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
                        a = f.hiddenBadges.filter((e) => !n.has(e.badge_id)),
                        r = [...t, ...a];
                    return { hiddenBadges: r, nextHiddenOrder: r.map((e) => e.badge_id) };
                }, [f.hiddenBadges, m]);
            return (
                a.useEffect(() => {
                    (p.length === m.length && p.every((e, t) => e === m[t])) || d.A.setState({ hiddenOrder: p });
                }, [p, m]),
                { ...f, hiddenBadges: g }
            );
        },
    },
);
