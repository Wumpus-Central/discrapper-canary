n.d(t, { a: () => a });
var r = n(442837),
    i = n(566620),
    l = n(317381);
let o = (e) => null == e || new Date(e).getTime() < Date.now() - 21600000,
    a = (e) => {
        let { surface: t, skipFetchingShelf: n = !0 } = e;
        return (0, r.e7)([l.ZP], () => (o(l.ZP.getState().lastCheckedForBadgeableActivities) && !n && (0, i.w1)({ guildId: null }), l.ZP.getState().surfacesToShowNewActivityIndicator.has(t)));
    };
