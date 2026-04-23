n.d(t, { HN: () => p, ux: () => f });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(777666),
    d = n(834730),
    c = n(135978),
    u = n(851109),
    h = n(599486),
    A = n(394953),
    _ = n(628325),
    g = n(849077);
n(445368);
var m = n(773557);
function p() {
    let { setSelectedFilter: e } = (0, h.A)(),
        t = (0, _.S)((e) => e.setInboxReadState);
    return () => {
        e(g.Io.ALL), t(!1);
    };
}
function f(e) {
    let t,
        n,
        s,
        { isSelected: h } = e,
        { unreadRecentMentionsCount: _, unreadChannelIds: g } = (0, A.U4)(),
        p =
            ((t = (function () {
                let { unreadRecentMentionsCount: e } = (0, A.U4)(),
                    { hasMoreMentions: t, mentionsLoading: n } = (0, a.cf)([c.Ay], () => ({
                        hasMoreMentions: c.Ay.hasMore,
                        mentionsLoading: c.Ay.loading,
                    })),
                    i = Math.min(e, 25),
                    l = e > i || t || n,
                    s = (0, o.o6)(i) + 6 * !!l;
                return { clampedCount: i, isEstimated: l, width: s };
            })()),
            (n = l.useCallback((e) => (t.isEstimated ? `${e}+` : e), [t.isEstimated])),
            (s = l.useMemo(
                () =>
                    (function (e, t) {
                        let { clampedCount: n, width: l } = e;
                        return (0, i.jsx)(o.hV, {
                            count: n,
                            renderBadgeCount: t,
                            style: { width: l },
                            className: m.xF,
                        });
                    })(t, n),
                [t, n],
            )),
            l.useMemo(
                () => ({ badge: s, badgeType: "mentions", dimensions: { height: 16, width: t.width } }),
                [s, t.width],
            )),
        { entrypoint: f } = (0, u.X8)({ location: "useInboxBadgeInfo" });
    return l.useMemo(() => {
        if (_ > 0) return p;
        let e = g.length;
        if (0 === e) return { badge: null, badgeType: null };
        if (f === u.RK.SERVER_RAIL_TOP) {
            let t,
                n = (0, o.o6)(e) - 3;
            return {
                badge:
                    ((t = (0, o.o6)(e) - 3),
                    (0, i.jsx)(o.hV, {
                        count: e,
                        style: { width: t, lineHeight: 13, height: 13, minHeight: 13, minWidth: 13 },
                        className: r()(m.xF, m.pw, { [m.wH]: h }),
                    })),
                badgeType: "unread",
                dimensions: { height: 13, width: n },
            };
        }
        return f === u.RK.TITLE_BAR_LEFT
            ? { badge: (0, i.jsx)(d.E, { variant: "eyebrow", children: (0, o.Gu)(e) }), badgeType: "unread" }
            : { badge: null, badgeType: null };
    }, [_, p, g.length, f, h]);
}
