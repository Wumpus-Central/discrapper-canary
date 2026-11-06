var t = l(582128),
    i = l(158390),
    n = l(855986),
    a = l(927813),
    o = l(682618),
    r = l(864197),
    m = l(982240),
    d = l(988341);
function u(e) {
    let { currentUserId: s, enabled: l, fetchCatalog: u = !0 } = e,
        c = l ? s : null,
        p = (0, n.bG)([m.Ay], () => null != c && m.Ay.hasCatalogFor(c), [c]),
        f = (0, n.bG)([m.Ay], () => null != c && m.Ay.hasCatalogFetchErrorFor(c), [c]),
        [S] = t.useState(() => new i.A(5 * a.A.Millis.SECOND, 5 * a.A.Millis.MINUTE)),
        g = t.useRef(null);
    t.useEffect(() => {
        if (null != c && u) {
            if (p) return void S.succeed();
            if (f) {
                if (S.fails >= 3) return;
                return (S.fail(() => (0, o.RS)(c, { isRetry: !0 })), () => S.cancel());
            }
            g.current !== c && ((g.current = c), (0, o.RS)(c));
        }
    }, [c, u, p, f, S]);
    let h = (0, n.bG)(
            [m.Ay],
            () => (null != c ? m.Ay.getBadges(c).filter((e) => d.sC.has(e.badge_id) && e.owned).length : 0),
            [c],
        ),
        A = (0, n.yK)([m.Ay], () => (null != c ? (0, r.z)(m.Ay.getBadges(c)) : []), [c]),
        y = t.useMemo(
            () =>
                null != c && p
                    ? h > 0
                        ? { variant: "progress", newBadgeCount: h, badgeIconUrls: A }
                        : { variant: "no-progress" }
                    : null,
            [c, p, h, A],
        ),
        C = u && S.fails < 3;
    return { variantProps: y, isPending: null != c && !p && (!f || C) };
}
l.d(
    s,
    {},
    {
        V: u,
        b: function (e) {
            return u(e).variantProps;
        },
    },
);
