n.d(t, {
    ZP: () => O,
    jd: () => y
}),
    n(361932),
    n(187205),
    n(539854),
    n(388685),
    n(642613);
var r,
    i = n(73800),
    l = n(442837),
    o = n(904245),
    s = n(493773),
    a = n(89892),
    c = n(601070),
    u = n(592125),
    d = n(984933),
    h = n(375954),
    p = n(306680),
    f = n(771845),
    g = n(9156),
    m = n(709054),
    b = n(982183),
    y = (((r = {}).Loading = 'loading'), (r.Loaded = 'loaded'), (r.Done = 'done'), r);
function O() {
    let [e, t] = i.useState(!1),
        [n, r] = i.useState('loading'),
        y = (function () {
            let e = (0, l.Wu)([f.ZP], () => f.ZP.getFlattenedGuildIds()),
                t = (0, l.Wu)([d.ZP], () => e.flatMap((e) => d.ZP.getSelectableChannelIds(e)), [e]),
                n = (0, l.cj)([c.Z], () => c.Z.getAllActiveJoinedThreads());
            return (0, l.Wu)(
                [u.Z, g.ZP, p.ZP],
                () => {
                    let e = (e) => g.ZP.allowAllMessages(e),
                        r = [];
                    for (let n of t) {
                        let t = u.Z.getChannel(n);
                        null != t && e(t) && r.push(t);
                    }
                    for (let t in n)
                        for (let i in n[t])
                            for (let l in n[t][i]) {
                                let t = u.Z.getChannel(l);
                                null != t && e(t) && r.push(t);
                            }
                    return r
                        .map((e) => e.id)
                        .sort((e, t) => m.default.compare(p.ZP.lastMessageId(t), p.ZP.lastMessageId(e)))
                        .filter((e) => {
                            let t = p.ZP.lastMessageId(e);
                            return null == t || m.default.age(t) < b.ib;
                        });
                },
                [t, n]
            );
        })(),
        O = (0, l.Wu)([h.Z], () => (0, a.K)(y.map((e) => h.Z.getMessages(e))), [y]),
        v = i.useCallback(
            async (e) => {
                r('loading');
                let n = async () => {
                        let t = !1,
                            n = !1,
                            r = [];
                        for (let i of y) {
                            let l = p.ZP.lastMessageId(i),
                                s = null != e && null != l && 0 > m.default.compare(l, e);
                            if (r.length >= 5 || s) {
                                n = s;
                                break;
                            }
                            let a = h.Z.getMessages(i),
                                c = a.length;
                            null == i ||
                                a.loadingMore ||
                                (a.hasPresent() && (a.hasFetched || a.ready) && (!(c < 50) || !a.hasMoreBefore)) ||
                                (r.push(
                                    o.Z.fetchMessages({
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
                    { hasLoadedAny: i, hasMoreOlder: l } = await n();
                i || l ? r('loaded') : r('done'), t(!0);
            },
            [y]
        );
    return (
        (0, s.ZP)(() => {
            v();
        }),
        {
            messages: O,
            loadState: n,
            loadMore: v,
            hasLoadedEver: e
        }
    );
}
