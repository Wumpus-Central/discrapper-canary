"use strict";
let i;
n.d(t, { A: () => F, S: () => x });
var r = n(735438),
    s = n.n(r),
    a = n(392421),
    o = n(602137),
    l = n(357758),
    d = n(17928),
    _ = n(228366),
    u = n(970278),
    c = n(456874),
    E = n(495544),
    h = n(734057),
    m = n(222823),
    f = n(309010),
    g = n(935208),
    p = n(767581);
let A = [],
    I = null,
    T = null,
    S = new Set(),
    N = o.T.LATEST_ACTIVITY,
    C = a.n.MATCH_SOME,
    R = 0,
    O = [],
    y = !1,
    v = [],
    D = s().chain(A),
    L = s().chain(A),
    b = new Set(),
    w = new Set();
function P(e) {
    return m.Ay.lastMessageId(e) ?? e;
}
function k(e) {
    return function (t, n) {
        return (0, p.yr)(t)
            ? -1
            : (0, p.yr)(n)
              ? 1
              : e === o.T.LATEST_ACTIVITY
                ? g.default.compare(P(n), P(t))
                : g.default.compare(n, t);
    };
}
function M() {
    (O = []),
        (i = null),
        (T = null),
        (S = new Set()),
        (N = o.T.LATEST_ACTIVITY),
        (C = a.n.MATCH_SOME),
        (R = 0),
        (v = []),
        (D = s().chain(A)),
        (L = s().chain(A)),
        w.clear(),
        b.clear();
}
function U() {
    let e = f.A.getChannelId();
    if (null == e || !h.A.getChannel(e)?.isForumLikeChannel()) return M(), !1;
    G({ refreshThreadIds: !0 });
}
function x(e) {
    let t = h.A.getChannel(e);
    return null == t
        ? []
        : Object.values(u.A.getThreadsForParent(t.guild_id, t.id))
              .map((e) => {
                  let { id: t } = e;
                  return t;
              })
              .sort(k(N));
}
function G(e) {
    var t, n;
    let r = h.A.getChannel(T);
    if (null == r) return;
    e?.refreshThreadIds &&
        ((v = Object.values(u.A.getThreadsForParent(r.guild_id, r.id)).map((e) => {
            let { id: t } = e;
            return t;
        })),
        (R = 0),
        (y = !0)),
        0 !== b.size && ((v = v.filter((e) => !b.has(e))), b.clear()),
        0 !== w.size && ((v = Array.from(new Set([...v, ...w]))), w.clear()),
        (e?.refreshThreadIds || e?.sortThreadIds) &&
            ((L = s().chain(v).sort(k(o.T.LATEST_ACTIVITY))), (D = s().chain(v).sort(k(o.T.CREATION_DATE))));
    let l = (N === o.T.LATEST_ACTIVITY ? L : D).value(),
        d = (O =
            0 === S.size
                ? l
                : l.filter(
                      ((t = S),
                      (n = C),
                      function (e) {
                          let i = h.A.getChannel(e)?.appliedTags;
                          if (null == i || 0 === i.length) return !1;
                          if (n === a.n.MATCH_SOME) return i.some((e) => t.has(e));
                          for (let e of t.values()) if (!i.includes(e)) return !1;
                          return !0;
                      }),
                  )).find((e) => {
            let t;
            return null === (t = c.A.getCount(e)) || 0 === t;
        });
    i = null == d ? null : d;
}
class V extends d.Ay.Store {
    static displayName = "ForumActivePostStore";
    initialize() {
        this.waitFor(u.A, E.default, h.A, m.Ay, f.A, c.A);
    }
    getNewThreadCount() {
        return R;
    }
    getCanAckThreads() {
        return y;
    }
    getThreadIds(e, t, n, i) {
        let r = e !== T,
            s = !(0, l._)(n, S),
            a = t !== N,
            o = i !== C;
        return (
            (T = e),
            (S = n),
            (N = t),
            (C = i),
            r ? G({ refreshThreadIds: !0 }) : a ? G({ sortThreadIds: !0 }) : (s || o) && G(),
            O
        );
    }
    getCurrentThreadIds() {
        return O;
    }
    getAndDeleteMostRecentUserCreatedThreadId() {
        let e = I;
        return (I = null), e;
    }
    getFirstNoReplyThreadId() {
        return i;
    }
}
let F = new V(_.h, {
    CONNECTION_OPEN: U,
    OVERLAY_INITIALIZE: U,
    GUILD_CREATE: U,
    CHANNEL_SELECT: U,
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        if (null == t.parent_id || t.parent_id !== T) return !1;
        M();
    },
    THREAD_LIST_SYNC: function (e) {
        let { guildId: t } = e;
        if (null == T || t !== h.A.getChannel(T)?.guild_id) return !1;
        G({ refreshThreadIds: !0 });
    },
    THREAD_CREATE: function (e) {
        let { channel: t, isNewlyCreated: n } = e;
        if (null == t.parent_id || t.parent_id !== T || !n) return !1;
        t.ownerId !== E.default.getId() ? R++ : (I = t.id);
    },
    THREAD_UPDATE: function (e) {
        let { channel: t } = e;
        if (null == t.parent_id || t.parent_id !== T) return !1;
        let n = (0, p.yr)(t.id),
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
        b.add(t.id), G({ sortThreadIds: !0 });
    },
    RESORT_THREADS: function (e) {
        let { channelId: t } = e;
        if (null == t || t !== T) return !1;
        G({ refreshThreadIds: !0 });
    },
    CHANNEL_ACK: function (e) {
        let { channelId: t } = e;
        if (null == t || t !== T) return !1;
        y = !1;
    },
});
