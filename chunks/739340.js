n.d(t, {
    ZP: () => v,
    jd: () => O,
    wt: () => _
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
    d = n(592125),
    h = n(984933),
    p = n(375954),
    f = n(306680),
    g = n(771845),
    m = n(9156),
    b = n(709054),
    y = n(982183),
    O = (((r = {}).Loading = 'loading'), (r.Loaded = 'loaded'), (r.Done = 'done'), r);
function _() {
    let e = (0, o.Wu)([g.ZP], () => g.ZP.getFlattenedGuildIds()),
        t = (0, o.Wu)([h.ZP], () => e.flatMap((e) => h.ZP.getSelectableChannelIds(e)), [e]),
        n = (0, o.cj)([u.Z], () => u.Z.getAllActiveJoinedThreads());
    return (0, o.Wu)(
        [d.Z, m.ZP, f.ZP],
        () => {
            let e = (e) => !!l.T.GUILD_TEXTUAL.has(e.type) && m.ZP.allowAllMessages(e),
                r = [];
            for (let n of t) {
                let t = d.Z.getChannel(n);
                null != t && e(t) && r.push(t);
            }
            for (let t in n)
                for (let i in n[t])
                    for (let l in n[t][i]) {
                        let t = d.Z.getChannel(l);
                        null != t && e(t) && r.push(t);
                    }
            return r
                .map((e) => e.id)
                .sort((e, t) => b.default.compare(f.ZP.lastMessageId(t), f.ZP.lastMessageId(e)))
                .filter((e) => {
                    let t = f.ZP.lastMessageId(e);
                    return null == t || b.default.age(t) < y.ib;
                });
        },
        [t, n]
    );
}
function v() {
    let [e, t] = i.useState(!1),
        [n, r] = i.useState('loading'),
        l = _(),
        u = (0, o.Wu)([p.Z], () => (0, c.K)(l.map((e) => p.Z.getMessages(e))), [l]),
        d = i.useCallback(
            async (e) => {
                r('loading');
                let n = async () => {
                        let t = !1,
                            n = !1,
                            r = [];
                        for (let i of l) {
                            let l = f.ZP.lastMessageId(i),
                                o = null != e && null != l && 0 > b.default.compare(l, e);
                            if (r.length >= 5 || o) {
                                n = o;
                                break;
                            }
                            let a = p.Z.getMessages(i),
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
