t.d(n, { HN: () => m, ux: () => E });
var i = t(627968),
    s = t(64700),
    a = t(503698),
    o = t.n(a),
    r = t(17928),
    l = t(777666),
    u = t(834730),
    d = t(135978),
    c = t(851109),
    h = t(599486),
    b = t(394953),
    g = t(849077);
t(445368);
var T = t(773557);
function m() {
    let { setSelectedFilter: e } = (0, h.A)();
    return () => {
        e(g.Io.ALL);
    };
}
function E(e) {
    let n,
        t,
        a,
        { isSelected: h } = e,
        { unreadRecentMentionsCount: g, unreadChannelIds: m } = (0, b.U4)(),
        E =
            ((n = (function () {
                let { unreadRecentMentionsCount: e } = (0, b.U4)(),
                    { hasMoreMentions: n, mentionsLoading: t } = (0, r.cf)([d.Ay], () => ({
                        hasMoreMentions: d.Ay.hasMore,
                        mentionsLoading: d.Ay.loading,
                    })),
                    i = Math.min(e, 25),
                    s = e > i || n || t,
                    a = (0, l.o6)(i) + 6 * !!s;
                return { clampedCount: i, isEstimated: s, width: a };
            })()),
            (t = s.useCallback((e) => (n.isEstimated ? `${e}+` : e), [n.isEstimated])),
            (a = s.useMemo(
                () =>
                    (function (e, n) {
                        let { clampedCount: t, width: s } = e;
                        return (0, i.jsx)(l.hV, {
                            count: t,
                            renderBadgeCount: n,
                            style: { width: s },
                            className: T.xF,
                        });
                    })(n, t),
                [n, t],
            )),
            s.useMemo(
                () => ({ badge: a, badgeType: "mentions", dimensions: { height: 16, width: n.width } }),
                [a, n.width],
            )),
        { entrypoint: p } = (0, c.X8)({ location: "useInboxBadgeInfo" });
    return s.useMemo(() => {
        if (g > 0) return E;
        let e = m.length;
        if (0 === e) return { badge: null, badgeType: null };
        if (p === c.RK.SERVER_RAIL_TOP) {
            let n,
                t = (0, l.o6)(e) - 3;
            return {
                badge:
                    ((n = (0, l.o6)(e) - 3),
                    (0, i.jsx)(l.hV, {
                        count: e,
                        style: { width: n, lineHeight: 13, height: 13, minHeight: 13, minWidth: 13 },
                        className: o()(T.xF, T.pw, { [T.wH]: h }),
                    })),
                badgeType: "unread",
                dimensions: { height: 13, width: t },
            };
        }
        return p === c.RK.TITLE_BAR_LEFT
            ? { badge: (0, i.jsx)(u.E, { variant: "eyebrow", children: (0, l.Gu)(e) }), badgeType: "unread" }
            : { badge: null, badgeType: null };
    }, [g, E, m.length, p, h]);
}
