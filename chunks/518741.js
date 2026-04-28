n.d(t, { A: () => P });
var r = n(64700),
    i = n(681154),
    s = n(17928),
    a = n(941726),
    l = n(99753);
n(321073);
var o = n(136722),
    u = n(52133),
    c = n(734057),
    E = n(860071),
    d = n(696451),
    I = n(488926),
    A = n(818348);
let p = 21552 == n.j ? [] : null,
    _ = new Set();
var C = n(99066),
    T = n(435738),
    f = n(583846);
let h = new Set();
var y = n(808323),
    S = n(424994);
let O = new Set([
    i.ContentInventoryEntryType.PLAYED_GAME,
    i.ContentInventoryEntryType.WATCHED_MEDIA,
    i.ContentInventoryEntryType.TOP_GAME,
    i.ContentInventoryEntryType.TOP_ARTIST,
    i.ContentInventoryEntryType.LISTENED_SESSION,
    i.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
function P(e) {
    var t;
    let n,
        i = (0, y.A)({ id: S.X1.GLOBAL_FEED });
    i = (function (e) {
        let { entries: t, channelId: n } = e,
            i = (0, s.bG)([c.A], () => c.A.getChannel(n)),
            a = i?.guild_id,
            l = r.useRef(new Set()),
            C = r.useMemo(() => {
                let e = new Set(t?.map((e) => e.author_id));
                return (0, u.v)([...l.current], [...e]) || (l.current = e), l.current;
            }, [t]);
        r.useEffect(() => {
            null != a &&
                Array.from(C).forEach((e) => {
                    E.A.requestMember(a, e);
                });
        }, [C, a]);
        let T = (0, s.yK)([d.Ay], () => {
                if (null == a) return p;
                let e = [];
                for (let t of C) d.Ay.isMember(a, t) && e.push(t);
                return e;
            }, [C, a]),
            f = r.useMemo(() => {
                if (null == i || 0 === T.length) return _;
                let e = new Set();
                for (let t of T) {
                    let n = I.cc({ user: t, context: i });
                    o.zy(n, A.xB.VIEW_CHANNEL) && e.add(t);
                }
                return e;
            }, [T, i]);
        return r.useMemo(() => t?.filter((e) => f.has(e.author_id)), [t, f]);
    })({ entries: i, channelId: e });
    let { entries: P, filteredIds: g } =
        ((t = i = r.useMemo(() => i?.filter((e) => O.has(e.content_type)), [i])),
        (n = (0, s.bG)([T.A, l.A], () => {
            let e = l.A.getDebugImpressionCappingDisabled();
            return !(0, C.sE)("useFilterImpressionCappedContent") || e ? h : T.A.getImpressionCappedItemIds();
        }, [t])),
        r.useMemo(() => {
            if (null == t) return { entries: t, filteredIds: h };
            let e = new Set();
            return { entries: t.filter((t) => !!(0, f.JM)(t) || !n.has(t.id) || (e.add(t.id), !1)), filteredIds: e };
        }, [t, n]));
    return (
        (i = P),
        {
            requestId: (0, s.bG)([l.A], () => l.A.getFeedRequestId(S.X1.GLOBAL_FEED)),
            entries: (i = (0, a.Ay)(i)),
            impressionCappedEntryIds: g,
        }
    );
}
