"use strict";
n.d(t, { Yy: () => d, fu: () => o, hL: () => l });
var i = n(926675),
    r = n(540185),
    a = n(735321);
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
        (this.id = e), (this.type = t), (this.games = n);
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
        return e instanceof d && e.type === this.type && (0, a.g1)(this.games, e.games, this.type);
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
