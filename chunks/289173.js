n.d(t, {
    Yy: () => u,
    fu: () => c,
    hL: () => l,
});
var r = n(926675),
    i = n(540185),
    a = n(735321);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = [i.x.CURRENT_GAMES, i.x.FAVORITE_GAMES, i.x.WANT_TO_PLAY_GAMES, i.x.PLAYED_GAMES];
function l(e) {
    return o.includes(e);
}
function c(e) {
    return e instanceof u;
}
class u {
    toSubmission() {
        let e = (e) => ({
            game_id: e.applicationId,
            comment: e.comment,
            tags: e.tags,
        });
        return {
            id: this.id,
            data: {
                type: this.type,
                games: this.games.map(e),
            },
        };
    }
    isDiscardable() {
        return 0 === this.games.length;
    }
    isValid() {
        return this.games.length > 0 && this.games.length <= r.um[this.type];
    }
    isEqual(e) {
        return e instanceof u && e.type === this.type && (0, a.g1)(this.games, e.games, this.type);
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
    constructor({ id: e, type: t, games: n }) {
        s(this, "id", void 0),
            s(this, "type", void 0),
            s(this, "games", void 0),
            (this.id = e),
            (this.type = t),
            (this.games = n);
    }
}
