"use strict";
let i;
n.d(t, { A: () => V, S: () => x });
var r = n(435558),
    a = n.n(r),
    s = n(392421),
    l = n(602137),
    o = n(357758),
    d = n(17928),
    c = n(228366),
    u = n(970278),
    _ = n(456874),
    E = n(280450),
    A = n(734057),
    h = n(568548),
    I = n(309010),
    f = n(935208),
    p = n(767581);
let T = [],
    m = null,
    g = null,
    S = new Set(),
    N = l.T.LATEST_ACTIVITY,
    C = s.n.MATCH_SOME,
    R = 0,
    O = [],
    L = !1,
    y = [],
    D = a().chain(T),
    v = a().chain(T),
    b = new Set(),
    M = new Set();
function P(e) {
    return h.Ay.lastMessageId(e) ?? e;
}
function U(e) {
    return function (t, n) {
        return (0, p.yr)(t)
            ? -1
            : (0, p.yr)(n)
              ? 1
              : e === l.T.LATEST_ACTIVITY
                ? f.default.compare(P(n), P(t))
                : f.default.compare(n, t);
    };
}
function w() {
    (O = []),
        (i = null),
        (g = null),
        (S = new Set()),
        (N = l.T.LATEST_ACTIVITY),
        (C = s.n.MATCH_SOME),
        (R = 0),
        (y = []),
        (D = a().chain(T)),
        (v = a().chain(T)),
        M.clear(),
        b.clear();
}
function G() {
    let e = I.Ay.getChannelId();
    if (null == e || !A.A.getChannel(e)?.isForumLikeChannel()) return w(), !1;
    k({ refreshThreadIds: !0 });
}
function x(e) {
    let t = A.A.getChannel(e);
    return null == t
        ? []
        : Object.values(u.A.getThreadsForParent(t.guild_id, t.id))
              .map((e) => {
                  let { id: t } = e;
                  return t;
              })
              .sort(U(N));
}
function k(e) {
    var t, n;
    let r = A.A.getChannel(g);
    if (null == r) return;
    e?.refreshThreadIds &&
        ((y = Object.values(u.A.getThreadsForParent(r.guild_id, r.id)).map((e) => {
            let { id: t } = e;
            return t;
        })),
        (R = 0),
        (L = !0)),
        0 !== b.size && ((y = y.filter((e) => !b.has(e))), b.clear()),
        0 !== M.size && ((y = Array.from(new Set([...y, ...M]))), M.clear()),
        (e?.refreshThreadIds || e?.sortThreadIds) &&
            ((v = a().chain(y).sort(U(l.T.LATEST_ACTIVITY))), (D = a().chain(y).sort(U(l.T.CREATION_DATE))));
    let o = (N === l.T.LATEST_ACTIVITY ? v : D).value(),
        d = (O =
            0 === S.size
                ? o
                : o.filter(
                      ((t = S),
                      (n = C),
                      function (e) {
                          let i = A.A.getChannel(e)?.appliedTags;
                          if (null == i || 0 === i.length) return !1;
                          if (n === s.n.MATCH_SOME) return i.some((e) => t.has(e));
                          for (let e of t.values()) if (!i.includes(e)) return !1;
                          return !0;
                      }),
                  )).find((e) => {
            let t;
            return null === (t = _.A.getCount(e)) || 0 === t;
        });
    i = null == d ? null : d;
}
class F extends d.Ay.Store {
    static displayName = "ForumActivePostStore";
    initialize() {
        this.waitFor(u.A, E.default, A.A, h.Ay, I.Ay, _.A);
    }
    getNewThreadCount() {
        return R;
    }
    getCanAckThreads() {
        return L;
    }
    getThreadIds(e, t, n, i) {
        let r = e !== g,
            a = !(0, o._)(n, S),
            s = t !== N,
            l = i !== C;
        return (
            (g = e),
            (S = n),
            (N = t),
            (C = i),
            r ? k({ refreshThreadIds: !0 }) : s ? k({ sortThreadIds: !0 }) : (a || l) && k(),
            O
        );
    }
    getCurrentThreadIds() {
        return O;
    }
    getAndDeleteMostRecentUserCreatedThreadId() {
        let e = m;
        return (m = null), e;
    }
    getFirstNoReplyThreadId() {
        return i;
    }
}
let V = new F(c.h, {
    CONNECTION_OPEN: G,
    OVERLAY_INITIALIZE: G,
    GUILD_CREATE: G,
    CHANNEL_SELECT: G,
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        if (null == t.parent_id || t.parent_id !== g) return !1;
        w();
    },
    THREAD_LIST_SYNC: function (e) {
        let { guildId: t } = e;
        if (null == g || t !== A.A.getChannel(g)?.guild_id) return !1;
        k({ refreshThreadIds: !0 });
    },
    THREAD_CREATE: function (e) {
        let { channel: t, isNewlyCreated: n } = e;
        if (null == t.parent_id || t.parent_id !== g || !n) return !1;
        t.ownerId !== E.default.getId() ? R++ : (m = t.id);
    },
    THREAD_UPDATE: function (e) {
        let { channel: t } = e;
        if (null == t.parent_id || t.parent_id !== g) return !1;
        let n = (0, p.yr)(t.id),
            i = M.has(t.id);
        if (n && !i) M.add(t.id), k({ sortThreadIds: !0 });
        else {
            if (n || !i) return !1;
            M.delete(t.id), k({ sortThreadIds: !0 });
        }
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        if (null == t.parent_id || t.parent_id !== g) return !1;
        b.add(t.id), k({ sortThreadIds: !0 });
    },
    RESORT_THREADS: function (e) {
        let { channelId: t } = e;
        if (null == t || t !== g) return !1;
        k({ refreshThreadIds: !0 });
    },
    CHANNEL_ACK: function (e) {
        let { channelId: t } = e;
        if (null == t || t !== g) return !1;
        L = !1;
    },
});
