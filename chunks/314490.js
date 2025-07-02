n.d(t, { p: () => c });
var r = n(73800),
    i = n(442837),
    l = n(416587),
    o = n(566620),
    a = n(317381);
let s = (e) => null == e || new Date(e).getTime() < Date.now() - 43200000,
    c = (e) => {
        let { surface: t, skipFetchingShelf: n = !0 } = e,
            c = (0, i.e7)([a.ZP], () => a.ZP.getState());
        return (
            (0, r.useEffect)(() => {
                s(c.lastCheckedForBadgeableActivities) && !n && (0, o.w1)({ guildId: null });
            }, [c.lastCheckedForBadgeableActivities, n]),
            (0, r.useMemo)(
                () =>
                    (0, l.O)({
                        storeState: c,
                        surface: t
                    }),
                [c, t]
            )
        );
    };
