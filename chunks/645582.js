"use strict";
n.d(t, { A: () => S });
var i = n(439372),
    r = n(183636),
    s = n(927813),
    a = n(723702),
    o = n(38405),
    l = n(340124),
    u = n(859703),
    c = n(507107),
    d = n(302654),
    _ = n(945810);
let h = { questFetchJitterMs: 5 * s.A.Millis.SECOND, questHomeHeroJitterMs: 5 * s.A.Millis.SECOND },
    f = (0, _.mj)({
        name: "2026-06-quest-fetch-reconnect-jitter",
        kind: "user",
        defaultConfig: h,
        variations: {
            1: { questFetchJitterMs: 60 * s.A.Millis.SECOND, questHomeHeroJitterMs: 60 * s.A.Millis.SECOND },
        },
    });
var p = n(971276);
let E = s.A.Millis.DAY,
    m = 30 * s.A.Millis.MINUTE,
    g = 5 * s.A.Millis.MINUTE,
    A = 12 * s.A.Millis.HOUR,
    I = 5 * s.A.Millis.MINUTE;
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
            !(0, p.s)() ||
            u.A.isFetchingCurrentQuests ||
            (o.A.addBreadcrumb({
                category: "quests.fetch",
                message: "QuestFetchManager._fetch triggered",
                data: {
                    callerSource: e,
                    storeSize: u.A.quests.size,
                    lastFetchedCurrentQuests: u.A.lastFetchedCurrentQuests,
                    msSinceLastFetch: Date.now() - u.A.lastFetchedCurrentQuests,
                    isFetchingCurrentQuests: u.A.isFetchingCurrentQuests,
                },
            }),
            (0, l.N1)(),
            (0, a.isMac)() && "focused" !== r.A.getState())
        )
            return;
        let { enableNewRequestBehavior: t } = d.A.getConfig({ location: "QuestFetchManager" });
        t || (0, l.r8)(c.yW.DESKTOP_ACCOUNT_PANEL_AREA, e);
    }
    handleQuestsFetchCurrentQuestsBegin = () => {
        this.lastFetchAttemptedAt = Date.now();
    };
    handlePostConnectionOpen = () => {
        window.clearTimeout(this.initialFetchTimerId),
            window.clearTimeout(this.initialQuestHomeHeroFetchTimerId),
            window.clearTimeout(this.recurringFetchTimerId),
            (this.recurringFetchTimerId = window.setInterval(() => {
                Date.now() - this.lastFetchAttemptedAt > E && this._fetch("post_connect_recurring");
            }, m));
        let e = (0, p.s)(),
            t = this.hasHandledConnectionOpen;
        this.hasHandledConnectionOpen = !0;
        let { questFetchJitterMs: n, questHomeHeroJitterMs: i } =
                t && e
                    ? (function (e) {
                          let { location: t } = e;
                          return f.getConfig({ location: t });
                      })({ location: "QuestFetchManager" })
                    : h,
            r = Math.floor(Math.random() * n);
        if (
            ((this.initialFetchTimerId = window.setTimeout(() => {
                Date.now() - u.A.lastFetchedCurrentQuests <= I || this._fetch("post_connect_initial");
            }, r)),
            e)
        ) {
            let e = r + Math.floor(Math.random() * i);
            this.initialQuestHomeHeroFetchTimerId = window.setTimeout(() => {
                try {
                    (0, l.Yf)();
                } catch (e) {}
            }, e);
        }
    };
    handleRunningGamesChange = () => {
        this.instantiatedAt + A > Date.now() ||
            u.A.lastFetchedCurrentQuests + A > Date.now() ||
            this._fetch("running_games");
    };
    handleUserSettingsProtoUpdate = (e) => {
        let { partial: t, settings: n, wasSaved: i } = e;
        !("localization" in n.proto) ||
            !t ||
            i ||
            Date.now() - this.lastFetchedQuestForLocaleChangeAt <= g ||
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
let S = new T();
