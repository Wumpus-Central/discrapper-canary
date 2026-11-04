let i;
var r = n(435558),
    a = n.n(r),
    s = n(392421),
    l = n(602137),
    o = n(357758),
    d = n(855986),
    c = n(73153),
    u = n(970278),
    _ = n(456874),
    E = n(46653),
    A = n(734057),
    h = n(218461),
    f = n(309010),
    I = n(811091),
    p = n(767581);
let m = [],
    T = null,
    g = null,
    S = new Set(),
    N = l.T.LATEST_ACTIVITY,
    C = s.n.MATCH_SOME,
    O = 0,
    R = [],
    L = !1,
    y = [],
    D = a().chain(m),
    b = a().chain(m),
    v = new Set(),
    P = new Set();
function M(e) {
    return h.Ay.lastMessageId(e) ?? e;
}
function U(e) {
    return function (t, n) {
        return (0, p.yr)(t)
            ? -1
            : (0, p.yr)(n)
              ? 1
              : e === l.T.LATEST_ACTIVITY
                ? I.default.compare(M(n), M(t))
                : I.default.compare(n, t);
    };
}
function w() {
    ((R = []),
        (i = null),
        (g = null),
        (S = new Set()),
        (N = l.T.LATEST_ACTIVITY),
        (C = s.n.MATCH_SOME),
        (O = 0),
        (y = []),
        (D = a().chain(m)),
        (b = a().chain(m)),
        P.clear(),
        v.clear());
}
function G() {
    let e = f.Ay.getChannelId();
    if (null == e || !A.A.getChannel(e)?.isForumLikeChannel()) return (w(), !1);
    x({ refreshThreadIds: !0 });
}
function x(e) {
    var t, n;
    let r = A.A.getChannel(g);
    if (null == r) return;
    (e?.refreshThreadIds &&
        ((y = Object.values(u.A.getThreadsForParent(r.guild_id, r.id)).map((e) => {
            let { id: t } = e;
            return t;
        })),
        (O = 0),
        (L = !0)),
        0 !== v.size && ((y = y.filter((e) => !v.has(e))), v.clear()),
        0 !== P.size && ((y = Array.from(new Set([...y, ...P]))), P.clear()),
        (e?.refreshThreadIds || e?.sortThreadIds) &&
            ((b = a().chain(y).sort(U(l.T.LATEST_ACTIVITY))), (D = a().chain(y).sort(U(l.T.CREATION_DATE)))));
    let o = (N === l.T.LATEST_ACTIVITY ? b : D).value(),
        d = (R =
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
class k extends d.Ay.Store {
    static displayName = "ForumActivePostStore";
    initialize() {
        this.waitFor(u.A, E.default, A.A, h.Ay, f.Ay, _.A);
    }
    getNewThreadCount() {
        return O;
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
            r ? x({ refreshThreadIds: !0 }) : s ? x({ sortThreadIds: !0 }) : (a || l) && x(),
            R
        );
    }
    getCurrentThreadIds() {
        return R;
    }
    getAndDeleteMostRecentUserCreatedThreadId() {
        let e = T;
        return ((T = null), e);
    }
    getFirstNoReplyThreadId() {
        return i;
    }
}
let F = new k(c.h, {
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
        x({ refreshThreadIds: !0 });
    },
    THREAD_CREATE: function (e) {
        let { channel: t, isNewlyCreated: n } = e;
        if (null == t.parent_id || t.parent_id !== g || !n) return !1;
        t.ownerId !== E.default.getId() ? O++ : (T = t.id);
    },
    THREAD_UPDATE: function (e) {
        let { channel: t } = e;
        if (null == t.parent_id || t.parent_id !== g) return !1;
        let n = (0, p.yr)(t.id),
            i = P.has(t.id);
        if (n && !i) (P.add(t.id), x({ sortThreadIds: !0 }));
        else {
            if (n || !i) return !1;
            (P.delete(t.id), x({ sortThreadIds: !0 }));
        }
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        if (null == t.parent_id || t.parent_id !== g) return !1;
        (v.add(t.id), x({ sortThreadIds: !0 }));
    },
    RESORT_THREADS: function (e) {
        let { channelId: t } = e;
        if (null == t || t !== g) return !1;
        x({ refreshThreadIds: !0 });
    },
    CHANNEL_ACK: function (e) {
        let { channelId: t } = e;
        if (null == t || t !== g) return !1;
        L = !1;
    },
});
n.d(
    t,
    {},
    {
        A: F,
        S: function (e) {
            let t = A.A.getChannel(e);
            return null == t
                ? []
                : Object.values(u.A.getThreadsForParent(t.guild_id, t.id))
                      .map((e) => {
                          let { id: t } = e;
                          return t;
                      })
                      .sort(U(N));
        },
    },
);
