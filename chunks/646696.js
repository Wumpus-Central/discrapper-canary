"use strict";
n.d(t, { A: () => S });
var r = n(439372),
    i = n(183636),
    a = n(927813),
    s = n(67486),
    o = n(723702),
    l = n(829219),
    u = n(859703),
    c = n(341915),
    d = n(245853),
    _ = n(51935),
    f = n(302654),
    p = n(677402),
    h = n(654487);
let m = a.A.Millis.DAY,
    g = 30 * a.A.Millis.MINUTE,
    E = 5 * a.A.Millis.SECOND,
    A = 5 * a.A.Millis.MINUTE,
    I = 12 * a.A.Millis.HOUR;
class T extends r.A {
    instantiatedAt = Date.now();
    initialFetchTimerId = null;
    initialTakeoverFetchTimerId = null;
    recurringFetchTimerId = null;
    lastFetchAttemptedAt = 0;
    lastFetchedQuestForLocaleChangeAt = 0;
    _fetch(e) {
        if (
            !(0, p.s)({ location: h.rE.QUESTS_MANAGER }) ||
            u.A.isFetchingCurrentQuests ||
            (0, s.I)() ||
            ((0, l.N1)(), (0, o.isMac)() && "focused" !== i.A.getState())
        )
            return;
        let { enableNewRequestBehavior: t } = f.A.getConfig({ location: "QuestFetchManager" });
        t || (0, l.r8)(c.yW.DESKTOP_ACCOUNT_PANEL_AREA, e);
    }
    handleQuestsFetchCurrentQuestsBegin = () => {
        this.lastFetchAttemptedAt = Date.now();
    };
    handlePostConnectionOpen = () => {
        let e = (0, _.u)({ location: h.rE.QUESTS_MANAGER });
        window.clearTimeout(this.initialFetchTimerId),
            window.clearTimeout(this.initialTakeoverFetchTimerId),
            window.clearTimeout(this.recurringFetchTimerId),
            (this.recurringFetchTimerId = window.setInterval(() => {
                Date.now() - this.lastFetchAttemptedAt > m && this._fetch("post_connect_recurring");
            }, g));
        let t = Math.floor(Math.random() * E);
        this.initialFetchTimerId = window.setTimeout(() => {
            !(Date.now() - t < u.A.lastFetchedCurrentQuests) &&
                (e || 0 === u.A.lastFetchedCurrentQuests) &&
                this._fetch("post_connect_initial");
        }, t);
        let { enabled: n } = d.XM.getConfig({ location: h.rE.QUESTS_MANAGER }),
            { enabled: r } = d.$4.getConfig({ location: h.rE.QUESTS_MANAGER });
        if (n && r && (0, p.s)({ location: h.rE.QUESTS_MANAGER })) {
            let e = t + Math.floor(Math.random() * E);
            this.initialTakeoverFetchTimerId = window.setTimeout(() => {
                try {
                    (0, l.Tb)();
                } catch (e) {}
            }, e);
        }
    };
    handleRunningGamesChange = () => {
        this.instantiatedAt + I > Date.now() ||
            u.A.lastFetchedCurrentQuests + I > Date.now() ||
            this._fetch("running_games");
    };
    handleUserSettingsProtoUpdate = (e) => {
        let { partial: t, settings: n, wasSaved: r } = e;
        !("localization" in n.proto) ||
            !t ||
            r ||
            Date.now() - this.lastFetchedQuestForLocaleChangeAt <= A ||
            ((this.lastFetchedQuestForLocaleChangeAt = Date.now()), this._fetch("user_settings"));
    };
    handleLogout = () => {
        window.clearTimeout(this.initialFetchTimerId),
            window.clearTimeout(this.initialTakeoverFetchTimerId),
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
let S = new T();
