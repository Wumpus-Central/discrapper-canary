n.d(t, { Z: () => f }), n(388685);
var r = n(647438),
    i = n(876215),
    l = n(442837),
    a = n(592125),
    o = n(146282),
    s = n(442853),
    c = n(520951),
    u = n(567493),
    d = n(897674),
    p = n(206583);
let h = new Set([
    i.s.PLAYED_GAME,
    i.s.WATCHED_MEDIA,
    i.s.TOP_GAME,
    i.s.TOP_ARTIST,
    i.s.LISTENED_SESSION,
    i.s.LAUNCHED_ACTIVITY,
]);
function f(e) {
    let t = (0, l.e7)([a.Z], () => a.Z.getChannel(e)),
        n = null == t ? void 0 : t.guild_id,
        i = (0, d.Z)({ id: p.YN.GLOBAL_FEED });
    (i = (0, s.Z)({
        entries: i,
        channelId: e,
    })),
        (i = r.useMemo(() => (null == i ? void 0 : i.filter((e) => h.has(e.content_type))), [i]));
    let { entries: f, filteredIds: m } = (0, c.Z)(i);
    i = f;
    let g = (0, u.im)(n);
    return (
        (i = r.useMemo(() => {
            if (null == i) return g;
            let e = new Set();
            for (let t of g) {
                let n = "".concat(t.author_id, ":").concat(t.extra.application_id);
                e.add(n);
            }
            return [
                ...g,
                ...i.filter((t) => {
                    if ("application_id" in t.extra) {
                        let n = "".concat(t.author_id, ":").concat(t.extra.application_id);
                        return !e.has(n);
                    }
                    return !0;
                }),
            ];
        }, [i, g])),
        {
            requestId: (0, l.e7)([o.Z], () => o.Z.getFeedRequestId(p.YN.GLOBAL_FEED)),
            entries: i,
            impressionCappedEntryIds: m,
        }
    );
}
