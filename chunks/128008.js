n.d(t, {
    h6: () => _,
    mv: () => b,
});
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(455199),
    u = n(821020),
    d = n(725739),
    p = n(370774),
    f = n(334426),
    h = n(982183),
    g = n(871301),
    m = n(888158);
function b() {
    let { setSelectedFilter: e } = (0, d.Z)(),
        t = (0, f.d)((e) => e.setInboxReadState);
    return () => {
        e(h.V5.ALL), t(!1);
    };
}
function _(e) {
    let { isSelected: t } = e,
        { unreadRecentMentionsCount: n, unreadChannelIds: l } = (0, p.O4)(),
        d = (function () {
            let e = (function () {
                    let { unreadRecentMentionsCount: e } = (0, p.O4)(),
                        { hasMoreMentions: t, mentionsLoading: n } = (0, a.cj)([c.ZP], () => ({
                            hasMoreMentions: c.ZP.hasMore,
                            mentionsLoading: c.ZP.loading,
                        })),
                        r = Math.min(e, g.om),
                        i = e > r || t || n,
                        l = (0, s.OVM)(r) + 6 * !!i;
                    return {
                        clampedCount: r,
                        isEstimated: i,
                        width: l,
                    };
                })(),
                t = i.useCallback((t) => (e.isEstimated ? "".concat(t, "+") : t), [e.isEstimated]),
                n = i.useMemo(
                    () =>
                        (function (e, t) {
                            let { clampedCount: n, width: i } = e;
                            return (0, r.jsx)(s.mAB, {
                                count: n,
                                renderBadgeCount: t,
                                style: { width: i },
                                className: m.badgeTransition,
                            });
                        })(e, t),
                    [e, t],
                );
            return i.useMemo(
                () => ({
                    badge: n,
                    badgeType: "mentions",
                    dimensions: {
                        height: g.hh,
                        width: e.width,
                    },
                }),
                [n, e.width],
            );
        })(),
        { entrypoint: f } = (0, u.pN)({ location: "useInboxBadgeInfo" });
    return i.useMemo(() => {
        if (n > 0) return d;
        let e = l.length;
        if (0 === e)
            return {
                badge: null,
                badgeType: null,
            };
        if (f === u.u3.SERVER_RAIL_TOP) {
            let n = (0, s.OVM)(e) - 3;
            return {
                badge: (function (e, t) {
                    let n = (0, s.OVM)(e) - 3;
                    return (0, r.jsx)(s.mAB, {
                        count: e,
                        style: {
                            width: n,
                            lineHeight: g.zw,
                            height: g.zw,
                            minHeight: g.zw,
                            minWidth: g.zw,
                        },
                        className: o()(m.badgeTransition, m.grayBadge, { [m.selected]: t }),
                    });
                })(e, t),
                badgeType: "unread",
                dimensions: {
                    height: g.zw,
                    width: n,
                },
            };
        }
        return f === u.u3.TITLE_BAR_LEFT
            ? {
                  badge: (0, r.jsx)(s.Text, {
                      variant: "eyebrow",
                      children: (0, s.NGo)(e),
                  }),
                  badgeType: "unread",
              }
            : {
                  badge: null,
                  badgeType: null,
              };
    }, [n, d, l.length, f, t]);
}
