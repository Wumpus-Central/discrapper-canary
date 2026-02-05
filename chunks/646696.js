"use strict";
n.d(t, { A: () => T });
var r = n(439372),
    i = n(183636),
    a = n(927813),
    s = n(67486),
    o = n(723702),
    l = n(829219),
    u = n(859703),
    c = n(341915),
    d = n(51935),
    _ = n(302654),
    f = n(677402),
    p = n(654487);
let h = a.A.Millis.DAY,
    m = 30 * a.A.Millis.MINUTE,
    g = 5 * a.A.Millis.SECOND,
    E = 5 * a.A.Millis.MINUTE,
    A = 12 * a.A.Millis.HOUR;
class I extends r.A {
    instantiatedAt = Date.now();
    initialFetchTimerId = null;
    recurringFetchTimerId = null;
    lastFetchAttemptedAt = 0;
    lastFetchedQuestForLocaleChangeAt = 0;
    _fetch(e) {
        if (
            !(0, f.s)({ location: p.rE.QUESTS_MANAGER }) ||
            u.A.isFetchingCurrentQuests ||
            (0, s.I)() ||
            ((0, l.N1)(), (0, o.isMac)() && "focused" !== i.A.getState())
        )
            return;
        let { enableNewRequestBehavior: t } = _.A.getConfig({ location: "QuestFetchManager" });
        t || (0, l.r8)(c.yW.DESKTOP_ACCOUNT_PANEL_AREA, e);
    }
    handleQuestsFetchCurrentQuestsBegin = () => {
        this.lastFetchAttemptedAt = Date.now();
    };
    handlePostConnectionOpen = () => {
        let e = (0, d.u)({ location: p.rE.QUESTS_MANAGER });
        window.clearTimeout(this.initialFetchTimerId),
            window.clearTimeout(this.recurringFetchTimerId),
            (this.recurringFetchTimerId = window.setInterval(() => {
                Date.now() - this.lastFetchAttemptedAt > h && this._fetch("post_connect_recurring");
            }, m));
        let t = Math.floor(Math.random() * g);
        this.initialFetchTimerId = window.setTimeout(() => {
            !(Date.now() - t < u.A.lastFetchedCurrentQuests) &&
                (e || 0 === u.A.lastFetchedCurrentQuests) &&
                this._fetch("post_connect_initial");
        }, t);
    };
    handleRunningGamesChange = () => {
        this.instantiatedAt + A > Date.now() ||
            u.A.lastFetchedCurrentQuests + A > Date.now() ||
            this._fetch("running_games");
    };
    handleUserSettingsProtoUpdate = (e) => {
        let { partial: t, settings: n, wasSaved: r } = e;
        !("localization" in n.proto) ||
            !t ||
            r ||
            Date.now() - this.lastFetchedQuestForLocaleChangeAt <= E ||
            ((this.lastFetchedQuestForLocaleChangeAt = Date.now()), this._fetch("user_settings"));
    };
    handleLogout = () => {
        window.clearTimeout(this.initialFetchTimerId),
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
let T = new I();
