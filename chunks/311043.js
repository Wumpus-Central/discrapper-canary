"use strict";
n.d(t, { A: () => _ });
var i = n(17928),
    r = n(228366),
    a = n(998218),
    s = n(997013);
let l = new Map(),
    o = new Set(),
    d = new Set(),
    c = new Set();
class u extends i.Ay.Store {
    static displayName = "NewGameStore";
    isFetching(e) {
        return o.has(e);
    }
    didFetchingFail(e) {
        return d.has(e);
    }
    getGame(e) {
        return l.get(e);
    }
    hasNoData(e) {
        return c.has(e);
    }
    getCoverImageUrl(e, t) {
        let n = l.get(e)?.getCoverURL();
        if (null == n) return null;
        if (null == t) return n;
        let i = a.A.toURLSafe(n);
        return null == i ? n : (i.searchParams.set("size", t.size.toString()), i.toString());
    }
}
let _ = new u(r.h, {
    LOGOUT: function () {
        (l = new Map()), (o = new Set()), (d = new Set()), (c = new Set());
    },
    GAME_FETCH: function (e) {
        let { gameIds: t } = e;
        t.forEach((e) => {
            o.add(e), d.delete(e);
        });
    },
    GAME_FETCH_CANCELLED: function (e) {
        let { gameIds: t } = e;
        t.forEach((e) => o.delete(e));
    },
    GAME_FETCH_SUCCESS: function (e) {
        let { gameIds: t, games: n } = e,
            i = new Set(t);
        t.forEach((e) => {
            o.delete(e), d.delete(e);
        }),
            n.forEach((e) => {
                i.delete(e.id), l.set(e.id, new s.A(e));
            }),
            i.forEach((e) => {
                l.has(e) || c.add(e);
            });
    },
    GAME_FETCH_FAILURE: function (e) {
        let { gameIds: t } = e;
        t.forEach((e) => {
            o.delete(e), d.add(e);
        });
    },
});
