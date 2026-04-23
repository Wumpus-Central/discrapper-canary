"use strict";
n.d(t, { A: () => c });
var i = n(17928),
    r = n(228366),
    s = n(998218),
    a = n(997013);
let o = new Map(),
    l = new Set(),
    d = new Set(),
    _ = new Set();
class u extends i.Ay.Store {
    static displayName = "NewGameStore";
    isFetching(e) {
        return l.has(e);
    }
    didFetchingFail(e) {
        return d.has(e);
    }
    getGame(e) {
        return o.get(e);
    }
    hasNoData(e) {
        return _.has(e);
    }
    getCoverImageUrl(e, t) {
        let n = o.get(e)?.getCoverURL();
        if (null == n) return null;
        if (null == t) return n;
        let i = s.A.toURLSafe(n);
        return null == i ? n : (i.searchParams.set("size", t.size.toString()), i.toString());
    }
}
let c = new u(r.h, {
    LOGOUT: function () {
        (o = new Map()), (l = new Set()), (d = new Set()), (_ = new Set());
    },
    GAME_FETCH: function (e) {
        let { gameIds: t } = e;
        t.forEach((e) => {
            l.add(e), d.delete(e);
        });
    },
    GAME_FETCH_SUCCESS: function (e) {
        let { gameIds: t, games: n } = e,
            i = new Set(t);
        t.forEach((e) => {
            l.delete(e), d.delete(e);
        }),
            n.forEach((e) => {
                i.delete(e.id), o.set(e.id, new a.A(e));
            }),
            i.forEach((e) => {
                o.has(e) || _.add(e);
            });
    },
    GAME_FETCH_FAILURE: function (e) {
        let { gameIds: t } = e;
        t.forEach((e) => {
            l.delete(e), d.add(e);
        });
    },
});
