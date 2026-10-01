n.d(t, { Yy: () => d, fu: () => o, hL: () => l });
var i = n(926675),
    r = n(540185),
    a = n(229231);
let s = [r.x.CURRENT_GAMES, r.x.FAVORITE_GAMES, r.x.WANT_TO_PLAY_GAMES, r.x.PLAYED_GAMES];
function l(e) {
    return s.includes(e);
}
function o(e) {
    return e instanceof d;
}
class d {
    id;
    type;
    games;
    constructor({ id: e, type: t, games: n }) {
        ((this.id = e), (this.type = t), (this.games = n));
    }
    toSubmission() {
        return {
            id: this.id,
            data: {
                type: this.type,
                games: this.games.map(function (e) {
                    return { game_id: e.gameId, comment: e.comment, tags: e.tags };
                }),
            },
        };
    }
    isUpdatable() {
        return !0;
    }
    isDiscardable() {
        return 0 === this.games.length;
    }
    isValid() {
        return this.games.length > 0 && this.games.length <= i.u[this.type];
    }
    isEqual(e) {
        var t, n, i;
        return (
            e instanceof d &&
            e.type === this.type &&
            ((t = this.games),
            (n = e.games),
            (i = this.type),
            t.length === n.length &&
                t.every((e, t) =>
                    (function (e, t, n) {
                        if (e.gameId !== t.gameId || ((0, a.y9)(n) && c(e.comment) !== c(t.comment))) return !1;
                        if ((0, a.mS)(n)) {
                            let n = c(e.tags),
                                i = c(t.tags);
                            if (
                                (null === n) != (null === i) ||
                                (null !== n && null !== i && (n.length !== i.length || !n.every((e, t) => e === i[t])))
                            )
                                return !1;
                        }
                        return !0;
                    })(e, n[t], i),
                ))
        );
    }
    getUniqueKey() {
        return this.type;
    }
    getProfileAnalyticsOptions() {
        return { widgetType: this.type };
    }
    getProfileEditAnalyticsOptions() {
        return { widgetEdited: this.type };
    }
}
function c(e) {
    return null == e || "" === e || (Array.isArray(e) && 0 === e.length) ? null : e;
}
