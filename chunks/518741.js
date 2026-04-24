n.d(t, { A: () => T });
var r = n(64700),
    i = n(681154),
    l = n(17928),
    a = n(941726),
    s = n(99753);
n(321073);
var u = n(136722),
    o = n(52133),
    d = n(734057),
    c = n(860071),
    p = n(696451),
    A = n(488926),
    f = n(818348);
let m = [],
    I = new Set();
var y = n(99066),
    h = n(435738),
    g = n(583846);
let E = new Set();
var _ = n(808323),
    v = n(424994);
let S = new Set([
    i.ContentInventoryEntryType.PLAYED_GAME,
    i.ContentInventoryEntryType.WATCHED_MEDIA,
    i.ContentInventoryEntryType.TOP_GAME,
    i.ContentInventoryEntryType.TOP_ARTIST,
    i.ContentInventoryEntryType.LISTENED_SESSION,
    i.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
function T(e) {
    var t;
    let n,
        i = (0, _.A)({ id: v.X1.GLOBAL_FEED });
    i = (function (e) {
        let { entries: t, channelId: n } = e,
            i = (0, l.bG)([d.A], () => d.A.getChannel(n)),
            a = i?.guild_id,
            s = r.useRef(new Set()),
            y = r.useMemo(() => {
                let e = new Set(t?.map((e) => e.author_id));
                return (0, o.v)([...s.current], [...e]) || (s.current = e), s.current;
            }, [t]);
        r.useEffect(() => {
            null != a &&
                Array.from(y).forEach((e) => {
                    c.A.requestMember(a, e);
                });
        }, [y, a]);
        let h = (0, l.yK)([p.Ay], () => {
                if (null == a) return m;
                let e = [];
                for (let t of y) p.Ay.isMember(a, t) && e.push(t);
                return e;
            }, [y, a]),
            g = r.useMemo(() => {
                if (null == i || 0 === h.length) return I;
                let e = new Set();
                for (let t of h) {
                    let n = A.cc({ user: t, context: i });
                    u.zy(n, f.xB.VIEW_CHANNEL) && e.add(t);
                }
                return e;
            }, [h, i]);
        return r.useMemo(() => t?.filter((e) => g.has(e.author_id)), [t, g]);
    })({ entries: i, channelId: e });
    let { entries: T, filteredIds: b } =
        ((t = i = r.useMemo(() => i?.filter((e) => S.has(e.content_type)), [i])),
        (n = (0, l.bG)([h.A, s.A], () => {
            let e = s.A.getDebugImpressionCappingDisabled();
            return !(0, y.sE)("useFilterImpressionCappedContent") || e ? E : h.A.getImpressionCappedItemIds();
        }, [t])),
        r.useMemo(() => {
            if (null == t) return { entries: t, filteredIds: E };
            let e = new Set();
            return { entries: t.filter((t) => !!(0, g.JM)(t) || !n.has(t.id) || (e.add(t.id), !1)), filteredIds: e };
        }, [t, n]));
    return (
        (i = T),
        {
            requestId: (0, l.bG)([s.A], () => s.A.getFeedRequestId(v.X1.GLOBAL_FEED)),
            entries: (i = (0, a.Ay)(i)),
            impressionCappedEntryIds: b,
        }
    );
}
