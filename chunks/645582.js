"use strict";
n.d(t, { A: () => m });
var i = n(439372),
    r = n(183636),
    a = n(927813),
    s = n(723702),
    l = n(38405),
    o = n(352774),
    d = n(859703),
    c = n(945810);
let u = { questFetchJitterMs: 5 * a.A.Millis.SECOND, questHomeHeroJitterMs: 5 * a.A.Millis.SECOND },
    _ = (0, c.mj)({
        name: "2026-06-quest-fetch-reconnect-jitter",
        kind: "user",
        defaultConfig: u,
        variations: {
            1: { questFetchJitterMs: 60 * a.A.Millis.SECOND, questHomeHeroJitterMs: 60 * a.A.Millis.SECOND },
        },
    });
var E = n(971276);
let A = a.A.Millis.DAY,
    h = 30 * a.A.Millis.MINUTE,
    I = 5 * a.A.Millis.MINUTE,
    f = 12 * a.A.Millis.HOUR,
    p = 5 * a.A.Millis.MINUTE;
class T extends i.A {
    instantiatedAt = Date.now();
    initialFetchTimerId = null;
    initialQuestHomeHeroFetchTimerId = null;
    recurringFetchTimerId = null;
    lastFetchAttemptedAt = 0;
    lastFetchedQuestForLocaleChangeAt = 0;
    hasHandledConnectionOpen = !1;
    _fetch(e) {
        if (
            (0, E.s)() &&
            !d.A.isFetchingCurrentQuests &&
            (l.A.addBreadcrumb({
                category: "quests.fetch",
                message: "QuestFetchManager._fetch triggered",
                data: {
                    callerSource: e,
                    storeSize: d.A.quests.size,
                    lastFetchedCurrentQuests: d.A.lastFetchedCurrentQuests,
                    msSinceLastFetch: Date.now() - d.A.lastFetchedCurrentQuests,
                    isFetchingCurrentQuests: d.A.isFetchingCurrentQuests,
                },
            }),
            (0, o.N1)(),
            (0, s.isMac)() && "focused" !== r.A.getState())
        )
            return;
    }
    handleQuestsFetchCurrentQuestsBegin = () => {
        this.lastFetchAttemptedAt = Date.now();
    };
    handlePostConnectionOpen = () => {
        window.clearTimeout(this.initialFetchTimerId),
            window.clearTimeout(this.initialQuestHomeHeroFetchTimerId),
            window.clearTimeout(this.recurringFetchTimerId),
            (this.recurringFetchTimerId = window.setInterval(() => {
                Date.now() - this.lastFetchAttemptedAt > A && this._fetch("post_connect_recurring");
            }, h));
        let e = (0, E.s)(),
            t = this.hasHandledConnectionOpen;
        this.hasHandledConnectionOpen = !0;
        let { questFetchJitterMs: n, questHomeHeroJitterMs: i } =
                t && e
                    ? (function (e) {
                          let { location: t } = e;
                          return _.getConfig({ location: t });
                      })({ location: "QuestFetchManager" })
                    : u,
            r = Math.floor(Math.random() * n);
        if (
            ((this.initialFetchTimerId = window.setTimeout(() => {
                Date.now() - d.A.lastFetchedCurrentQuests <= p || this._fetch("post_connect_initial");
            }, r)),
            e)
        ) {
            let e = r + Math.floor(Math.random() * i);
            this.initialQuestHomeHeroFetchTimerId = window.setTimeout(() => {
                try {
                    (0, o.Yf)();
                } catch (e) {}
            }, e);
        }
    };
    handleRunningGamesChange = () => {
        this.instantiatedAt + f > Date.now() ||
            d.A.lastFetchedCurrentQuests + f > Date.now() ||
            this._fetch("running_games");
    };
    handleUserSettingsProtoUpdate = (e) => {
        let { partial: t, settings: n, wasSaved: i } = e;
        !("localization" in n.proto) ||
            !t ||
            i ||
            Date.now() - this.lastFetchedQuestForLocaleChangeAt <= I ||
            ((this.lastFetchedQuestForLocaleChangeAt = Date.now()), this._fetch("user_settings"));
    };
    handleStartSession = () => {
        this.hasHandledConnectionOpen = !1;
    };
    handleLogout = () => {
        window.clearTimeout(this.initialFetchTimerId),
            window.clearTimeout(this.initialQuestHomeHeroFetchTimerId),
            window.clearTimeout(this.recurringFetchTimerId),
            (this.lastFetchAttemptedAt = 0),
            (this.lastFetchedQuestForLocaleChangeAt = 0),
            (this.hasHandledConnectionOpen = !1);
    };
    actions = {
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: this.handleQuestsFetchCurrentQuestsBegin,
        POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
        RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
        RUNNING_NON_GAMES_CHANGE: this.handleRunningGamesChange,
        USER_SETTINGS_PROTO_UPDATE: this.handleUserSettingsProtoUpdate,
        START_SESSION: this.handleStartSession,
        LOGOUT: this.handleLogout,
    };
}
let m = new T();
