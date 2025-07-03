(n.d(t, {
    ZP: () => E,
    jd: () => C,
    wt: () => j
}),
    n(361932),
    n(187205),
    n(539854),
    n(388685),
    n(642613));
var r,
    i = n(73800),
    l = n(106351),
    o = n(442837),
    a = n(904245),
    s = n(89892),
    c = n(38618),
    u = n(601070),
    d = n(569471),
    h = n(723170),
    p = n(592125),
    f = n(984933),
    g = n(375954),
    m = n(306680),
    b = n(771845),
    _ = n(9156),
    O = n(709054),
    y = n(982183),
    v = n(124368),
    C = (((r = {}).Loading = 'loading'), (r.Loaded = 'loaded'), (r.Done = 'done'), r);
function j() {
    let e = (0, o.Wu)([b.ZP], () => b.ZP.getFlattenedGuildIds()),
        t = (0, o.Wu)([f.ZP], () => e.flatMap((e) => f.ZP.getSelectableChannelIds(e)), [e]),
        n = (0, o.cj)([u.Z], () => u.Z.getAllActiveJoinedThreads());
    return (0, o.Wu)(
        [p.Z, _.ZP, m.ZP, d.Z],
        () => {
            let e = (e) => !!l.T.GUILD_TEXTUAL.has(e.type) && (_.ZP.allowAllMessages(e) || (0, h.J)(e, d.Z, _.ZP, p.Z) === v.iN.ALL_MESSAGES),
                r = [];
            for (let n of t) {
                let t = p.Z.getChannel(n);
                null != t && e(t) && r.push(t);
            }
            for (let t in n)
                for (let i in n[t])
                    for (let l in n[t][i]) {
                        let t = p.Z.getChannel(l);
                        null != t && e(t) && r.push(t);
                    }
            return r
                .map((e) => e.id)
                .sort((e, t) => O.default.compare(m.ZP.lastMessageId(t), m.ZP.lastMessageId(e)))
                .filter((e) => {
                    let t = m.ZP.lastMessageId(e);
                    return null == t || O.default.age(t) < y.ib;
                });
        },
        [t, n]
    );
}
function E() {
    let [e, t] = i.useState(!1),
        [n, r] = i.useState('loading'),
        l = j(),
        u = (0, o.e7)([c.Z], () => c.Z.isConnected()),
        d = (0, o.Wu)([g.Z], () => (0, s.K)(l.map((e) => g.Z.getMessages(e))), [l]),
        h = i.useCallback(
            async (n) => {
                r('loading');
                let i = async () => {
                        let e = !1,
                            t = !1,
                            r = [];
                        for (let i of l) {
                            let l = m.ZP.lastMessageId(i),
                                o = null != n && null != l && 0 > O.default.compare(l, n);
                            if (r.length >= 5 || o) {
                                t = o;
                                break;
                            }
                            let s = g.Z.getMessages(i),
                                c = s.length;
                            null == i ||
                                s.loadingMore ||
                                (s.hasPresent() && (s.hasFetched || s.ready) && (!(c < 50) || !s.hasMoreBefore)) ||
                                (r.push(
                                    a.Z.fetchMessages({
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
                    { hasLoadedAny: o, hasMoreOlder: s } = await i();
                (o || s ? r('loaded') : r('done'), !e && l.length > 0 && t(!0));
            },
            [l, e]
        );
    return (
        i.useEffect(() => {
            if (!e && u) {
                if (0 === l.length) {
                    (t(!0), r('done'));
                    return;
                }
                h();
            }
        }, [l, e, h, u]),
        {
            messages: d,
            loadState: n,
            loadMore: h,
            hasLoadedEver: e
        }
    );
}
