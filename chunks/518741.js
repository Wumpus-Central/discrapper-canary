n.d(t, { A: () => S });
var r = n(64700),
    l = n(681154),
    i = n(17928),
    a = n(941726),
    u = n(99753);
n(321073);
var o = n(136722),
    s = n(52133),
    d = n(734057),
    c = n(860071),
    A = n(696451),
    f = n(488926),
    p = n(818348);
let m = [],
    y = new Set();
var I = n(99066),
    g = n(435738),
    E = n(583846);
let h = new Set();
var v = n(808323),
    _ = n(424994);
let T = new Set([
    l.ContentInventoryEntryType.PLAYED_GAME,
    l.ContentInventoryEntryType.WATCHED_MEDIA,
    l.ContentInventoryEntryType.TOP_GAME,
    l.ContentInventoryEntryType.TOP_ARTIST,
    l.ContentInventoryEntryType.LISTENED_SESSION,
    l.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
function S(e) {
    var t;
    let n,
        l = (0, v.A)({ id: _.X1.GLOBAL_FEED });
    l = (function (e) {
        let { entries: t, channelId: n } = e,
            l = (0, i.bG)([d.A], () => d.A.getChannel(n)),
            a = l?.guild_id,
            u = r.useRef(new Set()),
            I = r.useMemo(() => {
                let e = new Set(t?.map((e) => e.author_id));
                return (0, s.v)([...u.current], [...e]) || (u.current = e), u.current;
            }, [t]);
        r.useEffect(() => {
            null != a &&
                Array.from(I).forEach((e) => {
                    c.A.requestMember(a, e);
                });
        }, [I, a]);
        let g = (0, i.yK)([A.Ay], () => {
                if (null == a) return m;
                let e = [];
                for (let t of I) A.Ay.isMember(a, t) && e.push(t);
                return e;
            }, [I, a]),
            E = r.useMemo(() => {
                if (null == l || 0 === g.length) return y;
                let e = new Set();
                for (let t of g) {
                    let n = f.cc({ user: t, context: l });
                    o.zy(n, p.xB.VIEW_CHANNEL) && e.add(t);
                }
                return e;
            }, [g, l]);
        return r.useMemo(() => t?.filter((e) => E.has(e.author_id)), [t, E]);
    })({ entries: l, channelId: e });
    let { entries: S, filteredIds: N } =
        ((t = l = r.useMemo(() => l?.filter((e) => T.has(e.content_type)), [l])),
        (n = (0, i.bG)([g.A, u.A], () => {
            let e = u.A.getDebugImpressionCappingDisabled();
            return !(0, I.sE)("useFilterImpressionCappedContent") || e ? h : g.A.getImpressionCappedItemIds();
        }, [t])),
        r.useMemo(() => {
            if (null == t) return { entries: t, filteredIds: h };
            let e = new Set();
            return { entries: t.filter((t) => !!(0, E.JM)(t) || !n.has(t.id) || (e.add(t.id), !1)), filteredIds: e };
        }, [t, n]));
    return (
        (l = S),
        {
            requestId: (0, i.bG)([u.A], () => u.A.getFeedRequestId(_.X1.GLOBAL_FEED)),
            entries: (l = (0, a.Ay)(l)),
            impressionCappedEntryIds: N,
        }
    );
}
