n.d(t, { p: () => u });
var r = n(73800),
    i = n(442837),
    a = n(416587),
    o = n(566620),
    s = n(317381);
let l = 43200000,
    c = (e) => null == e || new Date(e).getTime() < Date.now() - l,
    u = (e) => {
        let { surface: t, skipFetchingShelf: n = !0 } = e,
            l = (0, i.e7)([s.ZP], () => s.ZP.getState());
        return (
            (0, r.useEffect)(() => {
                c(l.lastCheckedForBadgeableActivities) && !n && (0, o.w1)({ guildId: null });
            }, [l.lastCheckedForBadgeableActivities, n]),
            (0, r.useMemo)(
                () =>
                    (0, a.O)({
                        storeState: l,
                        surface: t
                    }),
                [l, t]
            )
        );
    };
