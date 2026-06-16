"use strict";
n.d(t, { A: () => I });
var i = n(439372),
    r = n(183636),
    s = n(927813),
    a = n(723702),
    o = n(38405),
    l = n(340124),
    u = n(859703),
    c = n(507107),
    d = n(302654),
    _ = n(971276);
let h = s.A.Millis.DAY,
    f = 30 * s.A.Millis.MINUTE,
    p = 5 * s.A.Millis.SECOND,
    E = 5 * s.A.Millis.MINUTE,
    m = 12 * s.A.Millis.HOUR,
    g = 5 * s.A.Millis.MINUTE;
class A extends i.A {
    instantiatedAt = Date.now();
    initialFetchTimerId = null;
    initialQuestHomeHeroFetchTimerId = null;
    recurringFetchTimerId = null;
    lastFetchAttemptedAt = 0;
    lastFetchedQuestForLocaleChangeAt = 0;
    _fetch(e) {
        if (
            !(0, _.s)() ||
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
                Date.now() - this.lastFetchAttemptedAt > h && this._fetch("post_connect_recurring");
            }, f));
        let e = Math.floor(Math.random() * p);
        if (
            ((this.initialFetchTimerId = window.setTimeout(() => {
                Date.now() - u.A.lastFetchedCurrentQuests <= g || this._fetch("post_connect_initial");
            }, e)),
            (0, _.s)())
        ) {
            let t = e + Math.floor(Math.random() * p);
            this.initialQuestHomeHeroFetchTimerId = window.setTimeout(() => {
                try {
                    (0, l.Yf)();
                } catch (e) {}
            }, t);
        }
    };
    handleRunningGamesChange = () => {
        this.instantiatedAt + m > Date.now() ||
            u.A.lastFetchedCurrentQuests + m > Date.now() ||
            this._fetch("running_games");
    };
    handleUserSettingsProtoUpdate = (e) => {
        let { partial: t, settings: n, wasSaved: i } = e;
        !("localization" in n.proto) ||
            !t ||
            i ||
            Date.now() - this.lastFetchedQuestForLocaleChangeAt <= E ||
            ((this.lastFetchedQuestForLocaleChangeAt = Date.now()), this._fetch("user_settings"));
    };
    handleLogout = () => {
        window.clearTimeout(this.initialFetchTimerId),
            window.clearTimeout(this.initialQuestHomeHeroFetchTimerId),
            window.clearTimeout(this.recurringFetchTimerId),
            (this.lastFetchAttemptedAt = 0),
            (this.lastFetchedQuestForLocaleChangeAt = 0);
    };
    actions = {
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: this.handleQuestsFetchCurrentQuestsBegin,
        POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
        RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
        RUNNING_NON_GAMES_CHANGE: this.handleRunningGamesChange,
        USER_SETTINGS_PROTO_UPDATE: this.handleUserSettingsProtoUpdate,
        LOGOUT: this.handleLogout,
    };
}
let I = new A();
