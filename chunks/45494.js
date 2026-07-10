"use strict";
n.d(t, { A: () => N, m: () => I });
var i = n(735438),
    r = n.n(i),
    a = n(392421),
    s = n(602137),
    l = n(17928),
    o = n(228366),
    d = n(767581),
    c = n(853742),
    u = n(95701),
    _ = n(734057),
    E = n(568548),
    A = n(935208),
    h = n(152007);
let I = 25,
    f = new Map();
function p(e, t, n, i) {
    let r = `${e}|${t}|${i}|`;
    return 0 === n.size ? r : 1 === n.size ? r + n.values().next().value : r + Array.from(n).sort().join(",");
}
function T(e, t) {
    return t === s.T.LATEST_ACTIVITY ? E.Ay.lastMessageId(e.id) : e.id;
}
function m(e) {
    let { channelId: t, sortOrder: n, tagFilter: i, tagSetting: s, hasMore: l } = e,
        o = !l,
        d = _.A.getChannel(e.threads[e.threads.length - 1]),
        c = null == d ? null : T(d, n);
    e.threads = r()(_.A.getAllThreadsForParent(t))
        .filter((e) => e.isArchivedThread())
        .filter((e) => {
            if (0 !== i.size)
                switch (s) {
                    case a.n.MATCH_SOME:
                        if (e.appliedTags?.some((e) => i.has(e)) !== !0) return !1;
                        break;
                    case a.n.MATCH_ALL:
                        for (let t of i.values()) if (e.appliedTags?.includes(t) !== !0) return !1;
                }
            if (o || null == c) return !0;
            {
                let t = null == e ? null : T(e, n);
                return null != t && A.default.compare(t, c) >= 0;
            }
        })
        .sort((e, t) => A.default.compare(T(e, n), T(t, n)))
        .map((e) => e.id)
        .reverse()
        .value();
}
let g = [];
class S extends l.Ay.Store {
    static displayName = "ArchivedThreadsStore";
    initialize() {
        this.waitFor(_.A, h.A, E.Ay);
    }
    getCanLoadMore(e, t, n, i) {
        let r = f.get(p(e, t, n, i));
        return null != r && r.hasMore && !r.loading && !r.failed;
    }
    getNextOffset(e, t, n, i) {
        let r = f.get(p(e, t, n, i));
        return r?.nextOffset ?? 0;
    }
    getIsInitialLoad(e, t, n, i) {
        let r = f.get(p(e, t, n, i));
        return r?.isInitialLoad ?? !0;
    }
    isLoading(e, t, n, i) {
        let r = f.get(p(e, t, n, i));
        return r?.loading ?? !1;
    }
    getThreads(e, t, n, i) {
        let r = f.get(p(e, t, n, i));
        return r?.threads ?? g;
    }
}
let N = new S(o.h, {
    CONNECTION_OPEN: function () {
        f.clear();
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        if (
            !(function (e) {
                let t = !1;
                for (let n of f.values())
                    n.threads.indexOf(e) >= 0 && ((n.threads = n.threads.filter((t) => t !== e)), (t = !0));
                return t;
            })(t.id)
        )
            return !1;
    },
    THREAD_UPDATE: function (e) {
        let { channel: t } = e;
        if (!(0, d.yr)(t.id)) return !1;
        let n = !1;
        for (let e of f.values())
            e.channelId === t.parent_id &&
                e.threads.indexOf(t.id) >= 0 &&
                ((e.threads = e.threads.filter((e) => e !== t.id)), (n = !0));
        if (!n) return !1;
    },
    CHANNEL_DELETE: function (e) {
        let t = !1;
        for (let [n, i] of f) i.channelId === e.channel.id && (f.delete(n), (t = !0));
        if (!t) return !1;
    },
    LOAD_ARCHIVED_THREADS: function (e) {
        let t = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter),
            n = p(e.channelId, e.sortOrder, t, e.tagSetting);
        for (let [t, i] of f) t !== n && i.channelId === e.channelId && i.failed && f.delete(t);
        let i = f.get(n);
        if (null == i) {
            var r, a;
            (r = e.channelId),
                (a = e.sortOrder),
                (i = {
                    loading: !1,
                    isInitialLoad: !0,
                    hasMore: !1,
                    failed: !1,
                    threads: [],
                    nextOffset: 0,
                    channelId: r,
                    sortOrder: a,
                    tagFilter: t,
                    tagSetting: e.tagSetting,
                });
        } else (i.tagFilter = t), (i.failed = !1);
        (i.loading = !0), (i.isInitialLoad = !1);
        var s = i;
        if ((f.delete(n), f.set(n, s), !(f.size <= 50)))
            for (let [e, t] of f) {
                if (f.size <= 50) break;
                t.loading || f.delete(e);
            }
    },
    LOAD_ARCHIVED_THREADS_SUCCESS: function (e) {
        let t = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter),
            n = p(e.channelId, e.sortOrder, t, e.tagSetting),
            i = f.get(n);
        if (null == i) return !1;
        let r = e.threads.filter((e) => u.A_.has(e.type)).map((e) => e.id);
        i.threads = i.threads.concat(r);
        let a = _.A.getChannel(i.channelId);
        null != a &&
            a.isForumLikeChannel() &&
            (0, c._Z)({
                guildId: a.guild_id,
                channelId: a.id,
                numArchivedThreads: i.threads.length,
                hasMoreThreads: e.hasMore,
                filterTagIds: Array.from(e.tagFilter),
                sortOrder: e.sortOrder,
            }),
            m(i),
            (i.hasMore = e.hasMore),
            (i.nextOffset = e.offset + I),
            (i.loading = !1),
            (i.isInitialLoad = !1);
    },
    LOAD_ARCHIVED_THREADS_FAIL: function (e) {
        let t = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter),
            n = p(e.channelId, e.sortOrder, t, e.tagSetting),
            i = f.get(n);
        if (null == i) return !1;
        (i.loading = !1), (i.failed = !0), (i.isInitialLoad = !1);
    },
    RESORT_THREADS: function (e) {
        let t = !1;
        for (let n of f.values()) (null == e.channelId || n.channelId === e.channelId) && (m(n), (t = !0));
        if (!t) return !1;
    },
});
