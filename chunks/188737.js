n.d(t, { A: () => f }), n(896048);
var r = n(64700),
    i = n(681154),
    a = n(311907),
    s = n(99753),
    o = n(903790),
    l = n(929509),
    c = n(475450),
    u = n(424994);
let d = new Set([
    i.I.PLAYED_GAME,
    i.I.WATCHED_MEDIA,
    i.I.TOP_GAME,
    i.I.TOP_ARTIST,
    i.I.LISTENED_SESSION,
    i.I.LAUNCHED_ACTIVITY,
]);
function f(e) {
    let t = (0, c.A)({ id: u.X1.GLOBAL_FEED });
    (t = (0, o.A)({
        entries: t,
        channelId: e,
    })),
        (t = r.useMemo(() => (null == t ? void 0 : t.filter((e) => d.has(e.content_type))), [t]));
    let { entries: n, filteredIds: i } = (0, l.A)(t);
    return (
        (t = n),
        {
            requestId: (0, a.bG)([s.A], () => s.A.getFeedRequestId(u.X1.GLOBAL_FEED)),
            entries: t,
            impressionCappedEntryIds: i,
        }
    );
}
