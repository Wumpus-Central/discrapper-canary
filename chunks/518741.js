n.d(t, { A: () => v });
var r = n(64700),
    i = n(681154),
    l = n(17928),
    o = n(941726),
    u = n(99753);
n(321073);
var s = n(136722),
    a = n(52133),
    d = n(734057),
    c = n(860071),
    y = n(696451),
    p = n(488926),
    A = n(818348);
let E = 21552 == n.j ? [] : null,
    f = new Set();
var I = n(99066),
    _ = n(435738),
    h = n(583846);
let C = new Set();
var T = n(808323),
    m = n(424994);
let g = new Set([
    i.ContentInventoryEntryType.PLAYED_GAME,
    i.ContentInventoryEntryType.WATCHED_MEDIA,
    i.ContentInventoryEntryType.TOP_GAME,
    i.ContentInventoryEntryType.TOP_ARTIST,
    i.ContentInventoryEntryType.LISTENED_SESSION,
    i.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
function v(e) {
    var t;
    let n,
        i = (0, T.A)({ id: m.X1.GLOBAL_FEED });
    i = (function (e) {
        let { entries: t, channelId: n } = e,
            i = (0, l.bG)([d.A], () => d.A.getChannel(n)),
            o = i?.guild_id,
            u = r.useRef(new Set()),
            I = r.useMemo(() => {
                let e = new Set(t?.map((e) => e.author_id));
                return (0, a.v)([...u.current], [...e]) || (u.current = e), u.current;
            }, [t]);
        r.useEffect(() => {
            null != o &&
                Array.from(I).forEach((e) => {
                    c.A.requestMember(o, e);
                });
        }, [I, o]);
        let _ = (0, l.yK)([y.Ay], () => {
                if (null == o) return E;
                let e = [];
                for (let t of I) y.Ay.isMember(o, t) && e.push(t);
                return e;
            }, [I, o]),
            h = r.useMemo(() => {
                if (null == i || 0 === _.length) return f;
                let e = new Set();
                for (let t of _) {
                    let n = p.cc({ user: t, context: i });
                    s.zy(n, A.xB.VIEW_CHANNEL) && e.add(t);
                }
                return e;
            }, [_, i]);
        return r.useMemo(() => t?.filter((e) => h.has(e.author_id)), [t, h]);
    })({ entries: i, channelId: e });
    let { entries: v, filteredIds: P } =
        ((t = i = r.useMemo(() => i?.filter((e) => g.has(e.content_type)), [i])),
        (n = (0, l.bG)([_.A, u.A], () => {
            let e = u.A.getDebugImpressionCappingDisabled();
            return !(0, I.sE)("useFilterImpressionCappedContent") || e ? C : _.A.getImpressionCappedItemIds();
        }, [t])),
        r.useMemo(() => {
            if (null == t) return { entries: t, filteredIds: C };
            let e = new Set();
            return { entries: t.filter((t) => !!(0, h.JM)(t) || !n.has(t.id) || (e.add(t.id), !1)), filteredIds: e };
        }, [t, n]));
    return (
        (i = v),
        {
            requestId: (0, l.bG)([u.A], () => u.A.getFeedRequestId(m.X1.GLOBAL_FEED)),
            entries: (i = (0, o.Ay)(i)),
            impressionCappedEntryIds: P,
        }
    );
}
