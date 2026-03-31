n.d(t, { HN: () => g, ux: () => p });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    c = n(187508),
    d = n(851109),
    u = n(599486),
    h = n(394953),
    A = n(628325),
    _ = n(849077);
n(445368);
var m = n(480293);
function g() {
    let { setSelectedFilter: e } = (0, u.A)(),
        t = (0, A.S)((e) => e.setInboxReadState);
    return () => {
        e(_.Io.ALL), t(!1);
    };
}
function p(e) {
    let t,
        n,
        s,
        { isSelected: u } = e,
        { unreadRecentMentionsCount: A, unreadChannelIds: _ } = (0, h.U4)(),
        g =
            ((t = (function () {
                let { unreadRecentMentionsCount: e } = (0, h.U4)(),
                    { hasMoreMentions: t, mentionsLoading: n } = (0, r.cf)([c.Ay], () => ({
                        hasMoreMentions: c.Ay.hasMore,
                        mentionsLoading: c.Ay.loading,
                    })),
                    i = Math.min(e, 25),
                    l = e > i || t || n,
                    s = (0, o.o6S)(i) + 6 * !!l;
                return { clampedCount: i, isEstimated: l, width: s };
            })()),
            (n = l.useCallback((e) => (t.isEstimated ? `${e}+` : e), [t.isEstimated])),
            (s = l.useMemo(
                () =>
                    (function (e, t) {
                        let { clampedCount: n, width: l } = e;
                        return (0, i.jsx)(o.hVq, {
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
        { entrypoint: p } = (0, d.X8)({ location: "useInboxBadgeInfo" });
    return l.useMemo(() => {
        if (A > 0) return g;
        let e = _.length;
        if (0 === e) return { badge: null, badgeType: null };
        if (p === d.RK.SERVER_RAIL_TOP) {
            let t,
                n = (0, o.o6S)(e) - 3;
            return {
                badge:
                    ((t = (0, o.o6S)(e) - 3),
                    (0, i.jsx)(o.hVq, {
                        count: e,
                        style: { width: t, lineHeight: 13, height: 13, minHeight: 13, minWidth: 13 },
                        className: a()(m.xF, m.pw, { [m.wH]: u }),
                    })),
                badgeType: "unread",
                dimensions: { height: 13, width: n },
            };
        }
        return p === d.RK.TITLE_BAR_LEFT
            ? { badge: (0, i.jsx)(o.Text, { variant: "eyebrow", children: (0, o.Gub)(e) }), badgeType: "unread" }
            : { badge: null, badgeType: null };
    }, [A, g, _.length, p, u]);
}
