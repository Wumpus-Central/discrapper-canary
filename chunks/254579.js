n.d(t, {
    $H: () => b,
    $J: () => A,
    Ah: () => W,
    Bz: () => P,
    DR: () => _,
    Dr: () => g,
    Gs: () => d,
    HJ: () => C,
    MC: () => c,
    Mo: () => f,
    Nj: () => h,
    PB: () => S,
    Pz: () => v,
    Vl: () => O,
    b7: () => V,
    ge: () => R,
    il: () => F,
    nY: () => p,
    pO: () => E,
    q8: () => T,
    vj: () => u,
}),
    n(388685),
    n(415506),
    n(642613);
var r = n(392711),
    i = n(754700),
    a = n(70956),
    o = n(823379),
    s = n(616022);
function l(e, t) {
    if (null == e) return;
    let n = new Set();
    for (let r of t) {
        let t = e.config.taskConfigV2.tasks[r];
        if (null != t && "applications" in t && Array.isArray(t.applications))
            for (let e of t.applications) n.add(e.id);
    }
    return n.size > 0 ? Array.from(n) : void 0;
}
function c(e) {
    if (null == e) return;
    let t = Object.keys(e.config.taskConfigV2.tasks);
    return l(e, t);
}
function u(e) {
    return l(e, [i.X.PLAY_ON_DESKTOP]);
}
function d(e) {
    let t = l(e, [i.X.PLAY_ON_XBOX, i.X.PLAY_ON_PLAYSTATION]);
    return null == t ? void 0 : t[0];
}
function f(e) {
    let t = l(e, [i.X.PLAY_ACTIVITY]);
    return null == t ? void 0 : t[0];
}
function p(e) {
    let t = l(e, [i.X.PLAY_ACTIVITY, i.X.ACHIEVEMENT_IN_ACTIVITY]);
    return null == t ? void 0 : t[0];
}
function _(e) {
    let t = l(e, [i.X.STREAM_ON_DESKTOP]);
    return null == t ? void 0 : t[0];
}
function m(e) {
    return null != e.taskConfigV2.tasks[i.X.PLAY_ON_DESKTOP];
}
function h(e) {
    let { quest: t } = e;
    return m(t.config);
}
function g(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[i.X.STREAM_ON_DESKTOP];
}
function E(e) {
    return null != e.config.taskConfigV2.tasks[i.X.PLAY_ACTIVITY];
}
function b(e) {
    return null != e && h({ quest: e });
}
let y = (e) => (t) => e.some((e) => null != t.config.taskConfigV2.tasks[e]);
function O(e) {
    return Array.from(i.T.IN_GAME).some((t) => null != e.config.taskConfigV2.tasks[t]);
}
let v = y([i.X.PLAY_ON_XBOX, i.X.PLAY_ON_PLAYSTATION]),
    S = y([i.X.WATCH_VIDEO]),
    I = y([i.X.WATCH_VIDEO_ON_MOBILE]),
    T = y([i.X.WATCH_VIDEO, i.X.WATCH_VIDEO_ON_MOBILE]),
    C = (e) => I(e) && !S(e);
function A(e) {
    return v(e);
}
let N = (e, t) => {
    var n, r;
    let i = null == e || null == (r = e.progress[t]) || null == (n = r.heartbeat) ? void 0 : n.expiresAt;
    if (null == i) return !1;
    let a = new Date(i).valueOf();
    return !isNaN(a) && a > Date.now();
};
function P(e) {
    return null != e.userStatus && (N(e.userStatus, i.X.PLAY_ON_XBOX) || N(e.userStatus, i.X.PLAY_ON_PLAYSTATION));
}
function R(e) {
    return new Set(Object.keys(e.config.taskConfigV2.tasks));
}
function w(e) {
    return (null == e ? void 0 : e.type) === i.X.PLAY_ON_DESKTOP;
}
let D = (e, t) => (e > 0 ? (0, r.floor)(Math.min(t / e, 1), 4) : 0),
    x = (e) => P(e) || s.Z.isProgressingOnDesktop(e.id),
    L = (e, t) => {
        var n, i, o, s;
        let l =
            null == (s = e.userStatus) ||
            null == (o = s.progress) ||
            null == (i = o[t.type]) ||
            null == (n = i.heartbeat)
                ? void 0
                : n.lastBeatAt;
        if (null == l || !x(e)) return 0;
        let c = Date.now() - new Date(l).valueOf();
        return (0, r.floor)(c / a.Z.Millis.SECOND, 2);
    },
    j = (e, t) => {
        var n, r, i, a, o;
        let l = null == (r = e.userStatus) || null == (n = r.progress) ? void 0 : n[t.type],
            c =
                null !=
                (o =
                    null != (a = null == l ? void 0 : l.value)
                        ? a
                        : null == (i = e.userStatus)
                          ? void 0
                          : i.streamProgressSeconds)
                    ? o
                    : 0;
        if (T(e)) {
            let n = s.Z.getOptimisticProgress(e.id, t.type);
            return null == n || n < c ? c : n;
        }
        return c + L(e, t);
    },
    M = 0.99,
    k = (e, t) => {
        var n;
        let i = t.target;
        if ((null == (n = e.userStatus) ? void 0 : n.completedAt) != null) return i;
        let a = Math.min(i * M, j(e, t));
        return Math.max((0, r.floor)(a, 2), 0);
    },
    U = (e) => {
        var t, n, r;
        let { quest: o, taskType: s, includeTaskTypes: l = i.T.ALL } = e,
            c = o.config.taskConfigV2,
            u = null != s ? s : null == (t = Object.values(c.tasks).filter((e) => l.has(e.type))[0]) ? void 0 : t.type,
            d = null != (r = c.tasks[u]) ? r : c.tasks[i.X.STREAM_ON_DESKTOP];
        if (null == d) throw Error("No task with type ".concat(s, " found for quest ").concat(o.id, "!"));
        let f = d.target,
            p = k(o, d),
            _ = Object.values(c.tasks).find(w),
            m = null == _ || null == (n = _.applications) ? void 0 : n.map((e) => e.id);
        return {
            progressSeconds: p,
            targetSeconds: f,
            targetMinutes: Math.ceil(f / a.Z.Seconds.MINUTE),
            percentComplete: D(f, p),
            taskType: u,
            applications: m,
        };
    },
    G = (e) => (i.T.ALL.has(e) ? e : null),
    Z = (e) => {
        var t, n;
        let { quest: r, includeTaskTypes: a = i.T.ALL } = e;
        for (let e of Object.values(null != (n = null == (t = r.userStatus) ? void 0 : t.progress) ? n : {})
            .sort((e, t) => {
                var n, r;
                let i = null == e || null == (n = e.heartbeat) ? void 0 : n.lastBeatAt,
                    a = null == t || null == (r = t.heartbeat) ? void 0 : r.lastBeatAt;
                return null != i && null != a
                    ? new Date(i).valueOf() > new Date(a).valueOf()
                        ? -1
                        : 1
                    : null == i &&
                        null == a &&
                        (null == e ? void 0 : e.updatedAt) != null &&
                        (null == t ? void 0 : t.updatedAt) != null
                      ? new Date(e.updatedAt).valueOf() > new Date(t.updatedAt).valueOf()
                          ? -1
                          : 1
                      : null != i && null == a
                        ? -1
                        : 1;
            })
            .filter(o.lm)) {
            let t = G(e.eventName);
            if (null != t && (null == a ? void 0 : a.has(t)))
                return U({
                    quest: r,
                    taskType: t,
                    includeTaskTypes: a,
                });
        }
        return U({
            quest: r,
            includeTaskTypes: a,
        });
    },
    F = (e, t) => {
        if (O(e))
            return {
                progressSeconds: 0,
                targetSeconds: 1,
                targetMinutes: 1,
                percentComplete: 0,
                taskType: i.X.STREAM_ON_DESKTOP,
            };
        if (v(e))
            return Z({
                quest: e,
                includeTaskTypes: null != t ? t : P(e) ? i.T.CONSOLE : i.T.ALL,
            });
        if (T(e))
            if (I(e))
                return U({
                    quest: e,
                    taskType: i.X.WATCH_VIDEO_ON_MOBILE,
                });
            else
                return U({
                    quest: e,
                    taskType: i.X.WATCH_VIDEO,
                });
        return b(e)
            ? U({
                  quest: e,
                  taskType: i.X.PLAY_ON_DESKTOP,
              })
            : E(e)
              ? U({
                    quest: e,
                    taskType: i.X.PLAY_ACTIVITY,
                })
              : U({
                    quest: e,
                    taskType: i.X.STREAM_ON_DESKTOP,
                });
    };
function B(e) {
    var t;
    let n = e.taskConfigV2.tasks,
        r = n[i.X.ACHIEVEMENT_IN_ACTIVITY],
        a = n[i.X.ACHIEVEMENT_IN_GAME];
    return null != (t = null != r ? r : a) ? t : null;
}
function V(e) {
    var t, n, r, i;
    let a = B(e.config);
    if (null == a) return null;
    let o =
            null !=
            (i = null == (r = e.userStatus) || null == (n = r.progress) || null == (t = n[a.type]) ? void 0 : t.value)
                ? i
                : 0,
        s = D(a.target, o);
    return {
        title: a.messages.taskTitle,
        description: a.messages.taskDescription,
        target: a.target,
        progress: o,
        percentComplete: s,
    };
}
function H(e) {
    return Y(e.targetSeconds - e.progressSeconds);
}
function Y(e) {
    return {
        minutes: Math.max(0, Math.floor(e / 60)),
        seconds: Math.max(0, Math.floor(e % 60)),
    };
}
function W(e) {
    let t = H(e);
    return K(t.minutes, t.seconds);
}
function K(e, t) {
    return "".concat(String(e).padStart(2, "0"), ":").concat(String(t).padStart(2, "0"));
}
