"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153),
    s = n(998218),
    a = n(997013);
let o = new Map(),
    l = new Set(),
    u = new Set(),
    d = new Set();
class c extends r.Ay.Store {
    static displayName = "NewGameStore";
    isFetching(e) {
        return l.has(e);
    }
    didFetchingFail(e) {
        return u.has(e);
    }
    getGame(e) {
        return o.get(e);
    }
    hasNoData(e) {
        return d.has(e);
    }
    getCoverImageUrl(e, t) {
        let n = o.get(e)?.getCoverURL();
        if (null == n) return null;
        if (null == t) return n;
        let r = s.A.toURLSafe(n);
        return null == r ? n : (r.searchParams.set("size", t.size.toString()), r.toString());
    }
}
let _ = new c(i.h, {
    LOGOUT: function () {
        (o = new Map()), (l = new Set()), (u = new Set()), (d = new Set());
    },
    GAME_FETCH: function (e) {
        let { gameIds: t } = e;
        t.forEach((e) => {
            l.add(e), u.delete(e);
        });
    },
    GAME_FETCH_SUCCESS: function (e) {
        let { gameIds: t, games: n } = e,
            r = new Set(t);
        t.forEach((e) => {
            l.delete(e), u.delete(e);
        }),
            n.forEach((e) => {
                r.delete(e.id), o.set(e.id, new a.A(e));
            }),
            r.forEach((e) => {
                o.has(e) || d.add(e);
            });
    },
    GAME_FETCH_FAILURE: function (e) {
        let { gameIds: t } = e;
        t.forEach((e) => {
            l.delete(e), u.add(e);
        });
    },
});
