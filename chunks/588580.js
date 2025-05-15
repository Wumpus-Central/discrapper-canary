n.d(t, { a: () => s });
var r = n(73800),
    i = n(442837),
    l = n(566620),
    a = n(317381);
let o = (e) => null == e || new Date(e).getTime() < Date.now() - 43200000,
    s = (e) => {
        let { surface: t, skipFetchingShelf: n = !0 } = e,
            s = (0, i.e7)([a.ZP], () => a.ZP.getState());
        return (
            (0, r.useEffect)(() => {
                o(s.lastCheckedForBadgeableActivities) && !n && (0, l.w1)({ guildId: null });
            }, [s.lastCheckedForBadgeableActivities, n]),
            s.surfacesToShowNewActivityIndicator.has(t)
        );
    };
