"use strict";
n.d(t, { A: () => m });
var r = n(311907),
    i = n(73153),
    s = n(998218),
    a = n(929490);
let o = new Map(),
    l = new Set(),
    u = new Set(),
    c = new Set();
function d() {
    (o = new Map()), (l = new Set()), (u = new Set()), (c = new Set());
}
function _(e) {
    let { gameIds: t } = e;
    t.forEach((e) => {
        l.add(e), u.delete(e);
    });
}
function f(e) {
    let { gameIds: t, games: n } = e,
        r = new Set(t);
    t.forEach((e) => {
        l.delete(e), u.delete(e);
    }),
        n.forEach((e) => {
            r.delete(e.id), o.set(e.id, new a.A(e));
        }),
        r.forEach((e) => {
            o.has(e) || c.add(e);
        });
}
function p(e) {
    let { gameIds: t } = e;
    t.forEach((e) => {
        l.delete(e), u.add(e);
    });
}
class h extends r.Ay.Store {
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
        return c.has(e);
    }
    getCoverImageUrl(e, t) {
        let n = o.get(e)?.supplementalData?.coverImageUrl;
        if (null == n) return null;
        if (null == t) return n;
        let r = s.A.toURLSafe(n);
        return null == r ? n : (r.searchParams.set("size", t.size.toString()), r.toString());
    }
}
let m = new h(i.h, { LOGOUT: d, GAME_FETCH: _, GAME_FETCH_SUCCESS: f, GAME_FETCH_FAILURE: p });
