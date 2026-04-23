"use strict";
let r;
n.d(t, { A: () => V, S: () => U });
var i = n(735438),
    s = n.n(i),
    a = n(392421),
    o = n(602137),
    l = n(357758),
    u = n(311907),
    c = n(73153),
    d = n(970278),
    _ = n(456874),
    f = n(961350),
    p = n(734057),
    h = n(222823),
    E = n(309010),
    m = n(661191),
    g = n(767581);
let A = [],
    I = null,
    T = null,
    S = new Set(),
    y = o.T.LATEST_ACTIVITY,
    N = a.n.MATCH_SOME,
    v = 0,
    C = [],
    O = !1,
    R = [],
    b = s().chain(A),
    D = s().chain(A),
    L = new Set(),
    w = new Set();
function M(e) {
    return h.Ay.lastMessageId(e) ?? e;
}
function P(e) {
    return function (t, n) {
        return (0, g.yr)(t)
            ? -1
            : (0, g.yr)(n)
              ? 1
              : e === o.T.LATEST_ACTIVITY
                ? m.default.compare(M(n), M(t))
                : m.default.compare(n, t);
    };
}
function x() {
    (C = []),
        (r = null),
        (T = null),
        (S = new Set()),
        (y = o.T.LATEST_ACTIVITY),
        (N = a.n.MATCH_SOME),
        (v = 0),
        (R = []),
        (b = s().chain(A)),
        (D = s().chain(A)),
        w.clear(),
        L.clear();
}
function k() {
    let e = E.A.getChannelId();
    if (null == e || !p.A.getChannel(e)?.isForumLikeChannel()) return x(), !1;
    G({ refreshThreadIds: !0 });
}
function U(e) {
    let t = p.A.getChannel(e);
    return null == t
        ? []
        : Object.values(d.A.getThreadsForParent(t.guild_id, t.id))
              .map((e) => {
                  let { id: t } = e;
                  return t;
              })
              .sort(P(y));
}
function G(e) {
    var t, n;
    let i = p.A.getChannel(T);
    if (null == i) return;
    e?.refreshThreadIds &&
        ((R = Object.values(d.A.getThreadsForParent(i.guild_id, i.id)).map((e) => {
            let { id: t } = e;
            return t;
        })),
        (v = 0),
        (O = !0)),
        0 !== L.size && ((R = R.filter((e) => !L.has(e))), L.clear()),
        0 !== w.size && ((R = Array.from(new Set([...R, ...w]))), w.clear()),
        (e?.refreshThreadIds || e?.sortThreadIds) &&
            ((D = s().chain(R).sort(P(o.T.LATEST_ACTIVITY))), (b = s().chain(R).sort(P(o.T.CREATION_DATE))));
    let l = (y === o.T.LATEST_ACTIVITY ? D : b).value(),
        u = (C =
            0 === S.size
                ? l
                : l.filter(
                      ((t = S),
                      (n = N),
                      function (e) {
                          let r = p.A.getChannel(e)?.appliedTags;
                          if (null == r || 0 === r.length) return !1;
                          if (n === a.n.MATCH_SOME) return r.some((e) => t.has(e));
                          for (let e of t.values()) if (!r.includes(e)) return !1;
                          return !0;
                      }),
                  )).find((e) => {
            let t;
            return null === (t = _.A.getCount(e)) || 0 === t;
        });
    r = null == u ? null : u;
}
class F extends u.Ay.Store {
    static displayName = "ForumActivePostStore";
    initialize() {
        this.waitFor(d.A, f.default, p.A, h.Ay, E.A, _.A);
    }
    getNewThreadCount() {
        return v;
    }
    getCanAckThreads() {
        return O;
    }
    getThreadIds(e, t, n, r) {
        let i = e !== T,
            s = !(0, l._)(n, S),
            a = t !== y,
            o = r !== N;
        return (
            (T = e),
            (S = n),
            (y = t),
            (N = r),
            i ? G({ refreshThreadIds: !0 }) : a ? G({ sortThreadIds: !0 }) : (s || o) && G(),
            C
        );
    }
    getCurrentThreadIds() {
        return C;
    }
    getAndDeleteMostRecentUserCreatedThreadId() {
        let e = I;
        return (I = null), e;
    }
    getFirstNoReplyThreadId() {
        return r;
    }
}
let V = new F(c.h, {
    CONNECTION_OPEN: k,
    OVERLAY_INITIALIZE: k,
    GUILD_CREATE: k,
    CHANNEL_SELECT: k,
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        if (null == t.parent_id || t.parent_id !== T) return !1;
        x();
    },
    THREAD_LIST_SYNC: function (e) {
        let { guildId: t } = e;
        if (null == T || t !== p.A.getChannel(T)?.guild_id) return !1;
        G({ refreshThreadIds: !0 });
    },
    THREAD_CREATE: function (e) {
        let { channel: t, isNewlyCreated: n } = e;
        if (null == t.parent_id || t.parent_id !== T || !n) return !1;
        t.ownerId !== f.default.getId() ? v++ : (I = t.id);
    },
    THREAD_UPDATE: function (e) {
        let { channel: t } = e;
        if (null == t.parent_id || t.parent_id !== T) return !1;
        let n = (0, g.yr)(t.id),
            r = w.has(t.id);
        if (n && !r) w.add(t.id), G({ sortThreadIds: !0 });
        else {
            if (n || !r) return !1;
            w.delete(t.id), G({ sortThreadIds: !0 });
        }
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        if (null == t.parent_id || t.parent_id !== T) return !1;
        L.add(t.id), G({ sortThreadIds: !0 });
    },
    RESORT_THREADS: function (e) {
        let { channelId: t } = e;
        if (null == t || t !== T) return !1;
        G({ refreshThreadIds: !0 });
    },
    CHANNEL_ACK: function (e) {
        let { channelId: t } = e;
        if (null == t || t !== T) return !1;
        O = !1;
    },
});
