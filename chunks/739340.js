n.d(t, {
    ZP: () => E,
    jd: () => C,
    wt: () => j
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
    a = n(493773),
    c = n(89892),
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
        u = (0, o.Wu)([g.Z], () => (0, c.K)(l.map((e) => g.Z.getMessages(e))), [l]),
        d = i.useCallback(
            async (e) => {
                r('loading');
                let n = async () => {
                        let t = !1,
                            n = !1,
                            r = [];
                        for (let i of l) {
                            let l = m.ZP.lastMessageId(i),
                                o = null != e && null != l && 0 > O.default.compare(l, e);
                            if (r.length >= 5 || o) {
                                n = o;
                                break;
                            }
                            let a = g.Z.getMessages(i),
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
                                (t = !0));
                        }
                        return (
                            await Promise.all(r),
                            {
                                hasLoadedAny: t,
                                hasMoreOlder: n
                            }
                        );
                    },
                    { hasLoadedAny: i, hasMoreOlder: o } = await n();
                i || o ? r('loaded') : r('done'), t(!0);
            },
            [l]
        );
    return (
        (0, a.ZP)(() => {
            d();
        }),
        {
            messages: u,
            loadState: n,
            loadMore: d,
            hasLoadedEver: e
        }
    );
}
