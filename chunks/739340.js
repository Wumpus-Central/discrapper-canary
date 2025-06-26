n.d(t, {
    ZP: () => j,
    jd: () => v,
    wt: () => C
}),
    n(361932),
    n(187205),
    n(539854),
    n(388685),
    n(642613);
var r,
    i = n(73800),
    l = n(106351),
    o = n(442837),
    s = n(904245),
    a = n(89892),
    c = n(601070),
    u = n(569471),
    d = n(723170),
    h = n(592125),
    p = n(984933),
    f = n(375954),
    g = n(306680),
    m = n(771845),
    b = n(9156),
    _ = n(709054),
    O = n(982183),
    y = n(124368),
    v = (((r = {}).Loading = 'loading'), (r.Loaded = 'loaded'), (r.Done = 'done'), r);
function C() {
    let e = (0, o.Wu)([m.ZP], () => m.ZP.getFlattenedGuildIds()),
        t = (0, o.Wu)([p.ZP], () => e.flatMap((e) => p.ZP.getSelectableChannelIds(e)), [e]),
        n = (0, o.cj)([c.Z], () => c.Z.getAllActiveJoinedThreads());
    return (0, o.Wu)(
        [h.Z, b.ZP, g.ZP, u.Z],
        () => {
            let e = (e) => !!l.T.GUILD_TEXTUAL.has(e.type) && (b.ZP.allowAllMessages(e) || (0, d.J)(e, u.Z, b.ZP, h.Z) === y.iN.ALL_MESSAGES),
                r = [];
            for (let n of t) {
                let t = h.Z.getChannel(n);
                null != t && e(t) && r.push(t);
            }
            for (let t in n)
                for (let i in n[t])
                    for (let l in n[t][i]) {
                        let t = h.Z.getChannel(l);
                        null != t && e(t) && r.push(t);
                    }
            return r
                .map((e) => e.id)
                .sort((e, t) => _.default.compare(g.ZP.lastMessageId(t), g.ZP.lastMessageId(e)))
                .filter((e) => {
                    let t = g.ZP.lastMessageId(e);
                    return null == t || _.default.age(t) < O.ib;
                });
        },
        [t, n]
    );
}
function j() {
    let [e, t] = i.useState(!1),
        [n, r] = i.useState('loading'),
        l = C(),
        c = (0, o.Wu)([f.Z], () => (0, a.K)(l.map((e) => f.Z.getMessages(e))), [l]),
        u = i.useCallback(
            async (n) => {
                r('loading');
                let i = async () => {
                        let e = !1,
                            t = !1,
                            r = [];
                        for (let i of l) {
                            let l = g.ZP.lastMessageId(i),
                                o = null != n && null != l && 0 > _.default.compare(l, n);
                            if (r.length >= 5 || o) {
                                t = o;
                                break;
                            }
                            let a = f.Z.getMessages(i),
                                c = a.length;
                            null == i ||
                                a.loadingMore ||
                                (a.hasPresent() && (a.hasFetched || a.ready) && (!(c < 50) || !a.hasMoreBefore)) ||
                                (r.push(
                                    s.Z.fetchMessages({
                                        channelId: i,
                                        limit: 50
                                    })
                                ),
                                (e = !0));
                        }
                        return (
                            await Promise.all(r),
                            {
                                hasLoadedAny: e,
                                hasMoreOlder: t
                            }
                        );
                    },
                    { hasLoadedAny: o, hasMoreOlder: a } = await i();
                o || a ? r('loaded') : r('done'), !e && l.length > 0 && t(!0);
            },
            [l, e]
        );
    return (
        i.useEffect(() => {
            e || 0 === l.length || u();
        }, [l, e, u]),
        {
            messages: c,
            loadState: n,
            loadMore: u,
            hasLoadedEver: e
        }
    );
}
