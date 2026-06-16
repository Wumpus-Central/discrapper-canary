"use strict";
let i;
n.d(t, { A: () => V, S: () => U });
var r = n(735438),
    s = n.n(r),
    a = n(392421),
    o = n(602137),
    l = n(357758),
    u = n(17928),
    c = n(228366),
    d = n(970278),
    _ = n(456874),
    h = n(495544),
    f = n(734057),
    p = n(222823),
    E = n(309010),
    m = n(935208),
    g = n(767581);
let A = [],
    I = null,
    T = null,
    S = new Set(),
    y = o.T.LATEST_ACTIVITY,
    C = a.n.MATCH_SOME,
    N = 0,
    v = [],
    R = !1,
    O = [],
    b = s().chain(A),
    D = s().chain(A),
    L = new Set(),
    w = new Set();
function M(e) {
    return p.Ay.lastMessageId(e) ?? e;
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
    (v = []),
        (i = null),
        (T = null),
        (S = new Set()),
        (y = o.T.LATEST_ACTIVITY),
        (C = a.n.MATCH_SOME),
        (N = 0),
        (O = []),
        (b = s().chain(A)),
        (D = s().chain(A)),
        w.clear(),
        L.clear();
}
function k() {
    let e = E.A.getChannelId();
    if (null == e || !f.A.getChannel(e)?.isForumLikeChannel()) return x(), !1;
    G({ refreshThreadIds: !0 });
}
function U(e) {
    let t = f.A.getChannel(e);
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
    let r = f.A.getChannel(T);
    if (null == r) return;
    e?.refreshThreadIds &&
        ((O = Object.values(d.A.getThreadsForParent(r.guild_id, r.id)).map((e) => {
            let { id: t } = e;
            return t;
        })),
        (N = 0),
        (R = !0)),
        0 !== L.size && ((O = O.filter((e) => !L.has(e))), L.clear()),
        0 !== w.size && ((O = Array.from(new Set([...O, ...w]))), w.clear()),
        (e?.refreshThreadIds || e?.sortThreadIds) &&
            ((D = s().chain(O).sort(P(o.T.LATEST_ACTIVITY))), (b = s().chain(O).sort(P(o.T.CREATION_DATE))));
    let l = (y === o.T.LATEST_ACTIVITY ? D : b).value(),
        u = (v =
            0 === S.size
                ? l
                : l.filter(
                      ((t = S),
                      (n = C),
                      function (e) {
                          let i = f.A.getChannel(e)?.appliedTags;
                          if (null == i || 0 === i.length) return !1;
                          if (n === a.n.MATCH_SOME) return i.some((e) => t.has(e));
                          for (let e of t.values()) if (!i.includes(e)) return !1;
                          return !0;
                      }),
                  )).find((e) => {
            let t;
            return null === (t = _.A.getCount(e)) || 0 === t;
        });
    i = null == u ? null : u;
}
class F extends u.Ay.Store {
    static displayName = "ForumActivePostStore";
    initialize() {
        this.waitFor(d.A, h.default, f.A, p.Ay, E.A, _.A);
    }
    getNewThreadCount() {
        return N;
    }
    getCanAckThreads() {
        return R;
    }
    getThreadIds(e, t, n, i) {
        let r = e !== T,
            s = !(0, l._)(n, S),
            a = t !== y,
            o = i !== C;
        return (
            (T = e),
            (S = n),
            (y = t),
            (C = i),
            r ? G({ refreshThreadIds: !0 }) : a ? G({ sortThreadIds: !0 }) : (s || o) && G(),
            v
        );
    }
    getCurrentThreadIds() {
        return v;
    }
    getAndDeleteMostRecentUserCreatedThreadId() {
        let e = I;
        return (I = null), e;
    }
    getFirstNoReplyThreadId() {
        return i;
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
        if (null == T || t !== f.A.getChannel(T)?.guild_id) return !1;
        G({ refreshThreadIds: !0 });
    },
    THREAD_CREATE: function (e) {
        let { channel: t, isNewlyCreated: n } = e;
        if (null == t.parent_id || t.parent_id !== T || !n) return !1;
        t.ownerId !== h.default.getId() ? N++ : (I = t.id);
    },
    THREAD_UPDATE: function (e) {
        let { channel: t } = e;
        if (null == t.parent_id || t.parent_id !== T) return !1;
        let n = (0, g.yr)(t.id),
            i = w.has(t.id);
        if (n && !i) w.add(t.id), G({ sortThreadIds: !0 });
        else {
            if (n || !i) return !1;
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
        R = !1;
    },
});
