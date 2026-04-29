n.d(t, { A: () => C });
var i = n(64700),
    a = n(681154),
    r = n(17928),
    s = n(941726),
    l = n(99753);
n(321073);
var o = n(136722),
    d = n(52133),
    c = n(734057),
    _ = n(860071),
    E = n(696451),
    u = n(488926),
    A = n(818348);
let I = [],
    T = new Set();
var h = n(99066),
    S = n(435738),
    N = n(583846);
let f = new Set();
var p = n(808323),
    m = n(424994);
let O = new Set([
    a.ContentInventoryEntryType.PLAYED_GAME,
    a.ContentInventoryEntryType.WATCHED_MEDIA,
    a.ContentInventoryEntryType.TOP_GAME,
    a.ContentInventoryEntryType.TOP_ARTIST,
    a.ContentInventoryEntryType.LISTENED_SESSION,
    a.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
function C(e) {
    var t;
    let n,
        a = (0, p.A)({ id: m.X1.GLOBAL_FEED });
    a = (function (e) {
        let { entries: t, channelId: n } = e,
            a = (0, r.bG)([c.A], () => c.A.getChannel(n)),
            s = a?.guild_id,
            l = i.useRef(new Set()),
            h = i.useMemo(() => {
                let e = new Set(t?.map((e) => e.author_id));
                return (0, d.v)([...l.current], [...e]) || (l.current = e), l.current;
            }, [t]);
        i.useEffect(() => {
            null != s &&
                Array.from(h).forEach((e) => {
                    _.A.requestMember(s, e);
                });
        }, [h, s]);
        let S = (0, r.yK)([E.Ay], () => {
                if (null == s) return I;
                let e = [];
                for (let t of h) E.Ay.isMember(s, t) && e.push(t);
                return e;
            }, [h, s]),
            N = i.useMemo(() => {
                if (null == a || 0 === S.length) return T;
                let e = new Set();
                for (let t of S) {
                    let n = u.cc({ user: t, context: a });
                    o.zy(n, A.xB.VIEW_CHANNEL) && e.add(t);
                }
                return e;
            }, [S, a]);
        return i.useMemo(() => t?.filter((e) => N.has(e.author_id)), [t, N]);
    })({ entries: a, channelId: e });
    let { entries: C, filteredIds: R } =
        ((t = a = i.useMemo(() => a?.filter((e) => O.has(e.content_type)), [a])),
        (n = (0, r.bG)([S.A, l.A], () => {
            let e = l.A.getDebugImpressionCappingDisabled();
            return !(0, h.sE)("useFilterImpressionCappedContent") || e ? f : S.A.getImpressionCappedItemIds();
        }, [t])),
        i.useMemo(() => {
            if (null == t) return { entries: t, filteredIds: f };
            let e = new Set();
            return { entries: t.filter((t) => !!(0, N.JM)(t) || !n.has(t.id) || (e.add(t.id), !1)), filteredIds: e };
        }, [t, n]));
    return (
        (a = C),
        {
            requestId: (0, r.bG)([l.A], () => l.A.getFeedRequestId(m.X1.GLOBAL_FEED)),
            entries: (a = (0, s.Ay)(a)),
            impressionCappedEntryIds: R,
        }
    );
}
