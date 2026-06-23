"use strict";
n.d(t, { Yy: () => u, fu: () => l, hL: () => o });
var i = n(926675),
    r = n(540185),
    s = n(735321);
let a = [r.x.CURRENT_GAMES, r.x.FAVORITE_GAMES, r.x.WANT_TO_PLAY_GAMES, r.x.PLAYED_GAMES];
function o(e) {
    return a.includes(e);
}
function l(e) {
    return e instanceof u;
}
class u {
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
                    return { game_id: e.applicationId, comment: e.comment, tags: e.tags };
                }),
            },
        };
    }
    isDiscardable() {
        return 0 === this.games.length;
    }
    isValid() {
        return this.games.length > 0 && this.games.length <= i.u[this.type];
    }
    isEqual(e) {
        return e instanceof u && e.type === this.type && (0, s.g1)(this.games, e.games, this.type);
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
