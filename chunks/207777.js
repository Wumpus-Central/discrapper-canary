"use strict";
let r;
n.d(t, { A: () => F, S: () => x });
var i = n(735438),
    s = n.n(i),
    a = n(392421),
    o = n(602137),
    l = n(357758),
    u = n(311907),
    d = n(73153),
    c = n(970278),
    _ = n(456874),
    f = n(961350),
    E = n(734057),
    h = n(222823),
    p = n(309010),
    m = n(661191),
    g = n(767581);
let A = [],
    I = null,
    T = null,
    S = new Set(),
    y = o.T.LATEST_ACTIVITY,
    N = a.n.MATCH_SOME,
    O = 0,
    R = [],
    v = !1,
    C = [],
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
function U() {
    (R = []),
        (r = null),
        (T = null),
        (S = new Set()),
        (y = o.T.LATEST_ACTIVITY),
        (N = a.n.MATCH_SOME),
        (O = 0),
        (C = []),
        (b = s().chain(A)),
        (D = s().chain(A)),
        w.clear(),
        L.clear();
}
function k() {
    let e = p.A.getChannelId();
    if (null == e || !E.A.getChannel(e)?.isForumLikeChannel()) return U(), !1;
    G({ refreshThreadIds: !0 });
}
function x(e) {
    let t = E.A.getChannel(e);
    return null == t
        ? []
        : Object.values(c.A.getThreadsForParent(t.guild_id, t.id))
              .map((e) => {
                  let { id: t } = e;
                  return t;
              })
              .sort(P(y));
}
function G(e) {
    var t, n;
    let i = E.A.getChannel(T);
    if (null == i) return;
    e?.refreshThreadIds &&
        ((C = Object.values(c.A.getThreadsForParent(i.guild_id, i.id)).map((e) => {
            let { id: t } = e;
            return t;
        })),
        (O = 0),
        (v = !0)),
        0 !== L.size && ((C = C.filter((e) => !L.has(e))), L.clear()),
        0 !== w.size && ((C = Array.from(new Set([...C, ...w]))), w.clear()),
        (e?.refreshThreadIds || e?.sortThreadIds) &&
            ((D = s().chain(C).sort(P(o.T.LATEST_ACTIVITY))), (b = s().chain(C).sort(P(o.T.CREATION_DATE))));
    let l = (y === o.T.LATEST_ACTIVITY ? D : b).value(),
        u = (R =
            0 === S.size
                ? l
                : l.filter(
                      ((t = S),
                      (n = N),
                      function (e) {
                          let r = E.A.getChannel(e)?.appliedTags;
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
class V extends u.Ay.Store {
    static displayName = "ForumActivePostStore";
    initialize() {
        this.waitFor(c.A, f.default, E.A, h.Ay, p.A, _.A);
    }
    getNewThreadCount() {
        return O;
    }
    getCanAckThreads() {
        return v;
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
            R
        );
    }
    getCurrentThreadIds() {
        return R;
    }
    getAndDeleteMostRecentUserCreatedThreadId() {
        let e = I;
        return (I = null), e;
    }
    getFirstNoReplyThreadId() {
        return r;
    }
}
let F = new V(d.h, {
    CONNECTION_OPEN: k,
    OVERLAY_INITIALIZE: k,
    GUILD_CREATE: k,
    CHANNEL_SELECT: k,
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        if (null == t.parent_id || t.parent_id !== T) return !1;
        U();
    },
    THREAD_LIST_SYNC: function (e) {
        let { guildId: t } = e;
        if (null == T || t !== E.A.getChannel(T)?.guild_id) return !1;
        G({ refreshThreadIds: !0 });
    },
    THREAD_CREATE: function (e) {
        let { channel: t, isNewlyCreated: n } = e;
        if (null == t.parent_id || t.parent_id !== T || !n) return !1;
        t.ownerId !== f.default.getId() ? O++ : (I = t.id);
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
        v = !1;
    },
});
