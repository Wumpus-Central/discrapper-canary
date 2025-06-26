n.d(t, { a: () => s });
var r = n(73800),
    i = n(442837),
    l = n(566620),
    o = n(317381);
let a = (e) => null == e || new Date(e).getTime() < Date.now() - 43200000,
    s = (e) => {
        let { surface: t, skipFetchingShelf: n = !0 } = e,
            s = (0, i.e7)([o.ZP], () => o.ZP.getState());
        return (
            (0, r.useEffect)(() => {
                a(s.lastCheckedForBadgeableActivities) && !n && (0, l.w1)({ guildId: null });
            }, [s.lastCheckedForBadgeableActivities, n]),
            s.surfacesToShowNewActivityIndicator.has(t)
        );
    };
